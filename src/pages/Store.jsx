import ProductGrid from '../components/ProductGrid';

const Store = ({ data, selectedCategory, onAddToCart, getProductImage }) => {
  const displayProducts = selectedCategory
    ? data.products.filter(p => p.category === selectedCategory)
    : data.products;

  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>
        {selectedCategory ? '📦 Danh sách sản phẩm' : '🛍️ Tất cả sản phẩm'}
      </h3>
      {displayProducts.length === 0 ? (
        <p className="no-data">Không tìm thấy sản phẩm</p>
      ) : (
        <ProductGrid 
          products={displayProducts}
          data={data}
          onAddToCart={onAddToCart}
          getProductImage={getProductImage}
        />
      )}
    </div>
  );
};

export default Store;
