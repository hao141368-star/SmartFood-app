const ProductCard = ({ product, image, onAddToCart }) => (
  <div className="product-card">
    <img src={image} alt={product.title} />
    <div className="product-info">
      <div className="product-title">{product.title}</div>
      <div className="product-desc">{product.description}</div>
      <div className="product-price">{product.price.toLocaleString('vi-VN')} ₫</div>
      <div className="product-rating">⭐ 4.9 | Stock: {product.stock}</div>
      <button 
        className="btn-add"
        onClick={() => {
          onAddToCart(product);
          alert(`✅ ${product.title} đã thêm vào giỏ!`);
        }}
      >
        🛒 Thêm vào giỏ
      </button>
    </div>
  </div>
);

export default ProductCard;
