// UI Component — Virtual DOM'da sadece değişen prop render olur
const Button = ({ children, variant = 'primary', onClick, size = 'md' }) => {
  const styles = {
    primary:   { background: 'var(--accent)', color: '#000', border: 'none' },
    secondary: { background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)' },
    danger:    { background: 'var(--accent2)', color: '#fff', border: 'none' },
  };
  const sizes = {
    sm: { padding: '6px 14px', fontSize: '13px' },
    md: { padding: '10px 22px', fontSize: '14px' },
    lg: { padding: '14px 32px', fontSize: '16px' },
  };
  return (
    <button onClick={onClick} style={{
      ...styles[variant], ...sizes[size],
      borderRadius: 'var(--radius)', cursor: 'pointer',
      fontFamily: 'DM Sans', fontWeight: 500,
      transition: 'opacity .2s, transform .15s',
    }}
    onMouseEnter={e => e.target.style.opacity = '0.85'}
    onMouseLeave={e => e.target.style.opacity = '1'}
    >
      {children}
    </button>
  );
};
export default Button;