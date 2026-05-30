const Header = ({ user, cartCount, onCartClick }) => (
  <div className="header">
    <input type="text" placeholder="🔍 Tìm kiếm sản phẩm..." className="search" />
    <div className="header-right">
      <div className="cart-icon" onClick={onCartClick}>
        🛒 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
      <div className="user">
        <img src={user.avatar} alt="user" />
        <div>
          <div className="user-name">Xin chào, {user.name}</div>
          <div className="user-email">{user.email}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
