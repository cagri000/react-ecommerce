import { useState } from 'react';
import ProductBadge from './ProductBadge';
import Button from '../ui/Button';

// Her ProductCard kendi state'ini tutar — sadece bu component re-render olur
const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    onAddToCart(product);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius)', overflow: 'hidden',
      transition: 'transform .25s, border-color .25s',
      cursor: 'pointer',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
    >
      {/* Ürün Görseli */}
      <div style={{ height: 220, background: product.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, position: 'relative' }}>
        {product.emoji}
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          <ProductBadge type={product.badge} />
        </div>
      </div>

      {/* Ürün Bilgisi */}
      <div style={{ padding: 20 }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 4 }}>{product.category}</p>
        <h3 style={{ fontSize: 16, marginBottom: 8 }}>{product.name}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
          <div>
            {product.oldPrice && (
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: 13, marginRight: 8 }}>
                ₺{product.oldPrice}
              </span>
            )}
            <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--accent)' }}>₺{product.price}</span>
          </div>
          <Button size="sm" variant={added ? 'danger' : 'primary'} onClick={handleAdd}>
            {added ? '✓ Added' : '+ Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;