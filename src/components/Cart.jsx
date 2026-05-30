const Cart = ({ cartItems, products, onClose, onCheckout }) => {
  const cartTotal = cartItems.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h3>🛒 Giỏ hàng ({cartItems.length})</h3>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Giỏ hàng trống</p>
        ) : (
          cartItems.map((item, idx) => {
            const product = products.find(p => p.id === item.productId);
            return (
              <div key={idx} className="cart-item">
                <img src="https://via.placeholder.com/60" alt={product.title} />
                <div className="cart-item-info">
                  <div className="cart-item-title">{product.title}</div>
                  <div className="cart-item-price">
                    {product.price.toLocaleString('vi-VN')} ₫ x {item.quantity}
                  </div>
                  <div className="cart-item-total">
                    {(product.price * item.quantity).toLocaleString('vi-VN')} ₫
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Tổng cộng:</span>
            <span>{cartTotal.toLocaleString('vi-VN')} ₫</span>
          </div>
          <button className="btn-checkout" onClick={() => {
            alert('🎉 Cảm ơn bạn!');
            onCheckout();
          }}>
            💳 Thanh toán
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
