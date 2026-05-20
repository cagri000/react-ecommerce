import Badge from '../ui/Badge';

// Ürün tipine göre farklı badge render eder
const ProductBadge = ({ type }) => {
  const map = {
    new:   { label: 'New', color: '#4ecdc4' },
    sale:  { label: 'Sale', color: 'var(--accent2)' },
    hot:   { label: '🔥 Best Seller', color: 'var(--accent)' },
  };
  if (!map[type]) return null;
  return <Badge {...map[type]} />;
};
export default ProductBadge;