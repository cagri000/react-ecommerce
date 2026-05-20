const Badge = ({ label, color = 'var(--accent)' }) => (
  <span style={{
    display: 'inline-block', padding: '3px 10px',
    background: color, color: '#000',
    fontSize: '11px', fontWeight: 700,
    borderRadius: '999px', letterSpacing: '0.5px',
    textTransform: 'uppercase',
  }}>
    {label}
  </span>
);
export default Badge;