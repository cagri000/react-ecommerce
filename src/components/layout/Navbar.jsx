const Navbar = ({ cartCount, onCartClick }) => (
  <nav style={{
    position: 'sticky', top: 0, zIndex: 50,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '16px 40px',
    background: 'rgba(10,10,10,.85)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border)',
  }}>
    <h1 style={{ fontFamily: 'Playfair Display', fontSize: 24, letterSpacing: 1 }}>
      <span style={{ color: 'var(--accent)' }}>React</span>Shop
    </h1>

    <div style={{ display: 'flex', gap: 28, color: 'var(--text-muted)', fontSize: 14 }}>
      {['Home', 'Products', 'About'].map(item => (
        // key prop — Virtual DOM reconciliation için şart
        <span key={item} style={{ cursor: 'pointer', transition: 'color .2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--text)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
        >{item}</span>
      ))}
    </div>

    <button onClick={onCartClick} style={{
      background: 'var(--surface2)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius)', padding: '8px 18px',
      color: 'var(--text)', cursor: 'pointer', display: 'flex', gap: 8, alignItems: 'center',
      transition: 'border-color .2s',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      🛒
      {cartCount > 0 && (
        <span style={{
          background: 'var(--accent)', color: '#000',
          borderRadius: '999px', padding: '1px 8px', fontSize: 12, fontWeight: 700,
        }}>{cartCount}</span>
      )}
    </button>
  </nav>
);
export default Navbar;