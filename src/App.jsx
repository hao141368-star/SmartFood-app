import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AIAssistant from './components/AIAssistant';
import Cart from './components/Cart';
import Home from './pages/Home';
import Store from './pages/Store';
import AllCategories from './pages/AllCategories';
import Empty from './pages/Empty';

function App() {
  const [data, setData] = useState(null);
  const [activeMenu, setActiveMenu] = useState('home');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('/database.json')
      .then(res => res.json())
      .then(jsonData => setData(jsonData));
  }, []);

  const getProductImage = (productId) => {
    const img = data?.productImages.find(img => img.productId === productId);
    return img ? img.url : 'https://via.placeholder.com/200';
  };

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.productId === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { productId: product.id, quantity: 1 }]);
    }
  };

  const handleMenuChange = (menuId) => {
    setActiveMenu(menuId);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (categoryId) => {
    setActiveMenu('store');
    setSelectedCategory(categoryId);
  };

  if (!data) return <div className="loading">⏳ Đang tải...</div>;

  return (
    <div className="container">
      <Sidebar activeMenu={activeMenu} onMenuChange={handleMenuChange} />
      
      <div className="main">
        <Header
          user={data.users[0]}
          cartCount={cart.length}
          onCartClick={() => setShowCart(!showCart)}
        />
        
        <div className="content">
          {activeMenu === 'home' && <Home data={data} onAddToCart={handleAddToCart} onCategorySelect={handleCategorySelect} />}
          {activeMenu === 'store' && <Store data={data} selectedCategory={selectedCategory} onAddToCart={handleAddToCart} getProductImage={getProductImage} />}
          {activeMenu === 'categories' && <AllCategories data={data} onSelect={handleCategorySelect} />}
          {activeMenu === 'wishlist' && <Empty icon="❤️" title="Danh sách yêu thích trống" />}
          {activeMenu === 'orders' && <Empty icon="📦" title="Bạn chưa có đơn hàng nào" />}
        </div>
      </div>

      <AIAssistant />
      {showCart && (
        <Cart
          cartItems={cart}
          products={data.products}
          onClose={() => setShowCart(false)}
          onCheckout={() => {
            setCart([]);
            setShowCart(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
