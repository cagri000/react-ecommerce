const CATEGORIES = ['All', 'Electronics', 'Wearable', 'Accessories'];

const ProductFilter = ({ search, onSearch, activeCategory, onCategory }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 36, flexWrap: 'wrap' }}>
    
    {/* Arama kutusu */}
    <div style={{ position: 'relative', flex: 1, minWidth: 220 }}>
      <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: 16 }}>🔍</span>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => onSearch(e.target.value)}
        style={{
          width: '100%', padding: '10px 14px 10px 40px',
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius)', color: 'var(--text)',
          fontSize: 14, fontFamily: 'DM Sans', outline: 'none',
          transition: 'border-color .2s',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />
    </div>

    {/* Kategori butonları */}
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          onClick={() => onCategory(cat)}
          style={{
            padding: '8px 18px', borderRadius: 'var(--radius)',
            fontSize: 13, fontFamily: 'DM Sans', cursor: 'pointer',
            transition: 'all .2s',
            background: activeCategory === cat ? 'var(--accent)' : 'var(--surface)',
            color: activeCategory === cat ? '#000' : 'var(--text-muted)',
            border: activeCategory === cat ? '1px solid var(--accent)' : '1px solid var(--border)',
            fontWeight: activeCategory === cat ? 700 : 400,
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>
);

export default ProductFilter;