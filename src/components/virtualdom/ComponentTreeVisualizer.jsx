// Component ağacını statik olarak görselleştirir — 
const TreeNode = ({ name, props = [], children, color = 'var(--accent)' }) => (
  <div style={{ marginLeft: 20, borderLeft: '1px dashed var(--border)', paddingLeft: 16, marginTop: 8 }}>
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{ color, fontFamily: 'monospace', fontSize: 13, fontWeight: 700 }}>&lt;{name}&gt;</span>
      {props.map(p => (
        <span key={p} style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--text-muted)', background: 'var(--surface2)', padding: '1px 6px', borderRadius: 4 }}>{p}</span>
      ))}
    </div>
    {children}
  </div>
);

const ComponentTreeVisualizer = () => (
  <section style={{ padding: '0 40px 80px' }}>
    <p style={{ color: 'var(--accent)', letterSpacing: 4, fontSize: 12, textTransform: 'uppercase', marginBottom: 12 }}>
      Component Tree
    </p>
    <h2 style={{ fontSize: 36, marginBottom: 40 }}>Props Flow</h2>

    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 32, maxWidth: 600 }}>
      <span style={{ fontFamily: 'monospace', fontSize: 13, color: '#4ecdc4', fontWeight: 700 }}>&lt;App&gt;</span>
      <TreeNode name="Navbar" props={['cartCount', 'onCartClick']} color="#ff6b35" />
      <TreeNode name="HeroSection" props={['onShopClick']} color="#4ecdc4" />
      <TreeNode name="ProductGrid" props={['products[ ]', 'onAddToCart']} color="var(--accent)">
        <TreeNode name="ProductCard" props={['product', 'onAddToCart']} color="#a8e6cf">
          <TreeNode name="ProductBadge" props={['type']} color="#888" />
          <TreeNode name="Button" props={['variant', 'onClick']} color="#888" />
        </TreeNode>
        <TreeNode name="ProductCard" props={['...']} color="#a8e6cf" />
      </TreeNode>
      <TreeNode name="VirtualDomDemo" color="#c3a6ff" />
      <TreeNode name="CartDrawer" props={['items', 'isOpen', 'onClose']} color="#ff6b35" />
      <TreeNode name="Footer" color="#888" />
    </div>
    <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 16, maxWidth: 500 }}>
      Props flow only from top to bottom (unidirectional). When state changes, React only diffs the corresponding subtree.
    </p>
  </section>
);
export default ComponentTreeVisualizer;