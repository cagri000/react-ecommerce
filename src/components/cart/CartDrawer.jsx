import Button from '../ui/Button';

const CartDrawer = ({ items, isOpen, onClose }) => {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div onClick={onClose} style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,.6)', zIndex: 99,
        }} />
      )}

      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 360, background: 'var(--surface)',
        borderLeft: '1px solid var(--border)',
        padding: 28, zIndex: 100,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .35s cubic-bezier(.4,0,.2,1)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28 }}>
          {/* Sepetim -> My Cart */}
          <h2 style={{ fontSize: 22 }}>My Cart ({items.length})</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: 22, cursor: 'pointer' }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {items.length === 0 ? (
            /* Sepetiniz boş -> Your cart is empty */
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: 60 }}>Your cart is empty</p>
          ) : items.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: 36 }}>{item.emoji}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 500 }}>{item.name}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>x{item.qty}</p>
              </div>
              {/* Para birimi sembolü ₺ yerine $ olarak güncellendi */}
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>${item.price * item.qty}</span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            {/* Toplam -> Total */}
            <span style={{ color: 'var(--text-muted)' }}>Total</span>
            {/* Para birimi sembolü ₺ yerine $ olarak güncellendi */}
            <span style={{ fontSize: 22, fontWeight: 700 }}>${total}</span>
          </div>
          {/* Ödeme sayfası! -> Checkout! ve Satın Al -> Checkout */}
          <Button size="lg" onClick={() => alert('Checkout!')}>Buy</Button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;