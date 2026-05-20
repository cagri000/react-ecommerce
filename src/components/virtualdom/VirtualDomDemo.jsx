import { useState, useEffect } from 'react';

// Bu component Virtual DOM'un "diff" mantığını görselleştirir
const VirtualDomDemo = () => {
  const [count, setCount] = useState(0);
  const [renderLog, setRenderLog] = useState([]);
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    setHighlighted(true);
    const log = `[${new Date().toLocaleTimeString()}] Counter updated → ${count}. Only this block was re-rendered.`;
    setRenderLog(prev => [log, ...prev].slice(0, 6));
    const t = setTimeout(() => setHighlighted(false), 600);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <section id="vdom-demo" style={{ padding: '80px 40px' }}>
      <p style={{ color: 'var(--accent)', letterSpacing: 4, fontSize: 12, textTransform: 'uppercase', marginBottom: 12 }}>
        Virtual DOM
      </p>
      <h2 style={{ fontSize: 36, marginBottom: 12 }}>Live Render Tracker</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 48, maxWidth: 600 }}>
        When you click the button, React first updates the Virtual DOM, compares it with the real DOM (diffing), and updates only the changed part. Navbar, Footer, etc. remain untouched.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 800 }}>
        {/* Sayaç Kutusu — sadece bu re-render olur */}
        <div style={{
          background: highlighted ? 'rgba(232,197,71,.1)' : 'var(--surface)',
          border: `2px solid ${highlighted ? 'var(--accent)' : 'var(--border)'}`,
          borderRadius: 'var(--radius)', padding: 32, textAlign: 'center',
          transition: 'background .3s, border-color .3s',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 16 }}>
            {highlighted ? '⚡ Re-render!' : '○ Idle'}
          </p>
          <div style={{ fontSize: 72, fontWeight: 900, color: 'var(--accent)', fontFamily: 'Playfair Display', lineHeight: 1 }}>
            {count}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: '12px 0 20px' }}>clicks</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            <button onClick={() => setCount(c => c - 1)} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)', width: 40, height: 40, borderRadius: 8, fontSize: 20, cursor: 'pointer' }}>−</button>
            <button onClick={() => setCount(c => c + 1)} style={{ background: 'var(--accent)', border: 'none', color: '#000', width: 40, height: 40, borderRadius: 8, fontSize: 20, cursor: 'pointer', fontWeight: 700 }}>+</button>
          </div>
        </div>

        {/* Render Log */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 24 }}>
          <p style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--accent)', marginBottom: 16 }}>// render.log</p>
          {renderLog.length === 0 && (
            <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>No clicks yet...</p>
          )}
          {renderLog.map((log, i) => (
            <div key={i} style={{
              fontSize: 11, fontFamily: 'monospace', color: i === 0 ? 'var(--accent)' : 'var(--text-muted)',
              marginBottom: 8, padding: '6px 10px',
              background: i === 0 ? 'rgba(232,197,71,.08)' : 'transparent',
              borderRadius: 6, borderLeft: i === 0 ? '2px solid var(--accent)' : '2px solid transparent',
            }}>={log}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default VirtualDomDemo;