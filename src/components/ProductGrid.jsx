import ProductCard from './ProductCard';

const ProductGrid = ({ products, data, onAddToCart, getProductImage }) => (
  <div className="products">
    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
        image={getProductImage(product.id)}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
);

export default ProductGrid;
