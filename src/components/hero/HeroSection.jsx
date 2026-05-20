import Button from '../ui/Button';

const HeroSection = ({ onShopClick }) => (
  <section style={{
    minHeight: '70vh', display: 'flex', alignItems: 'center',
    padding: '80px 40px',
    background: 'radial-gradient(ellipse at 60% 50%, #1a1500 0%, var(--bg) 70%)',
    borderBottom: '1px solid var(--border)',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Dekoratif arka plan */}
    <div style={{
      position: 'absolute', right: '10%', top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 200, opacity: 0.05, userSelect: 'none',
    }}>🛒</div>

    <div style={{ maxWidth: 600, position: 'relative' }}>
      <p style={{ color: 'var(--accent)', letterSpacing: 4, fontSize: 12, textTransform: 'uppercase', marginBottom: 20 }}>
        React Component Architecture 
      </p>
      <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.1, marginBottom: 24 }}>
        Modern<br />
        <span style={{ color: 'var(--accent)' }}>E-Commerce</span><br />
        Experience
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: 18, marginBottom: 36, maxWidth: 480 }}>
        A live website demonstrating how React component structure, props flow, and the Virtual DOM work in practice.
      </p>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Button size="lg" onClick={onShopClick}>Start Shopping</Button>
        <Button size="lg" variant="secondary" onClick={() => document.getElementById('vdom-demo')?.scrollIntoView({ behavior: 'smooth' })}>
          Virtual DOM Demo →
        </Button>
      </div>
    </div>
  </section>
);
export default HeroSection;