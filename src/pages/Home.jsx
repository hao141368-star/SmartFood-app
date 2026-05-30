import Banner from '../components/Banner';
import Categories from '../components/Categories';
import ProductGrid from '../components/ProductGrid';

const Home = ({ data, onAddToCart, onCategorySelect }) => {
  const featuredProducts = data.products.filter(p => p.isFeatured);

  const getProductImage = (productId) => {
    const img = data.productImages.find(img => img.productId === productId);
    return img ? img.url : 'https://via.placeholder.com/200';
  };

  return (
    <div>
      <Banner />
      
      <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>📂 Danh mục nổi bật</h3>
      <Categories 
        categories={data.categories} 
        onSelect={onCategorySelect}
      />

      <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>⭐ Sản phẩm gợi ý</h3>
      <ProductGrid 
        products={featuredProducts}
        data={data}
        onAddToCart={onAddToCart}
        getProductImage={getProductImage}
      />
    </div>
  );
};

export default Home;
