import ProductCard from './ProductCard';

// ProductGrid sadece listeyi map eder, her kart kendi state'ini yönetir
const ProductGrid = ({ products, onAddToCart }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: 24,
  }}>
    {products.map(product => (
      // key prop — Virtual DOM'un hangi elemanın değiştiğini anlaması için kritik!
      <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);
export default ProductGrid;