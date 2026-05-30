import Categories from '../components/Categories';

const AllCategories = ({ data, onSelect }) => (
  <div>
    <h3 style={{ marginBottom: '20px' }}>📂 Tất cả danh mục</h3>
    <Categories categories={data.categories} onSelect={onSelect} />
  </div>
);

export default AllCategories;
