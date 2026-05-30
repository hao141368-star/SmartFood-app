const Sidebar = ({ activeMenu, onMenuChange }) => (
  <div className="sidebar">
    <div className="logo">🌿 SmartFood</div>
    <div className="menu">
      {[
        { id: 'home', label: 'Trang chủ', icon: '🏠' },
        { id: 'store', label: 'Cửa hàng', icon: '🏪' },
        { id: 'categories', label: 'Danh mục', icon: '📂' },
        { id: 'wishlist', label: 'Yêu thích', icon: '❤️' },
        { id: 'orders', label: 'Đơn hàng', icon: '📦' },
      ].map(item => (
        <div
          key={item.id}
          className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
          onClick={() => onMenuChange(item.id)}
        >
          <span>{item.icon}</span> {item.label}
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
