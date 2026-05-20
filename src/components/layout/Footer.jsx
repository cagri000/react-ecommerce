const Footer = () => (
  <footer style={{
    textAlign: 'center', padding: '40px 20px',
    borderTop: '1px solid var(--border)',
    color: 'var(--text-muted)', fontSize: 13,
  }}>
    <p style={{ marginBottom: 8, fontFamily: 'Playfair Display', fontSize: 18, color: 'var(--text)' }}>
      <span style={{ color: 'var(--accent)' }}>React</span>Shop
    </p>
    <p>React component architecture and Virtual DOM project</p>
  </footer>
);
export default Footer;