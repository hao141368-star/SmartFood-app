const Categories = ({ categories, onSelect }) => (
  <div className="categories">
    {categories.map(cat => (
      <div key={cat.id} className="category-card" onClick={() => onSelect(cat.id)}>
        <div className="cat-icon">{cat.icon}</div>
        <div className="cat-name">{cat.name}</div>
        <div className="cat-desc">{cat.description}</div>
      </div>
    ))}
  </div>
);

export default Categories;
