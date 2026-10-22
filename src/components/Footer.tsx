export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ 
      padding: '40px 48px', 
      backgroundColor: 'transparent', 
      borderTop: '1px solid var(--border)' 
    }}>
      <div className="max-w" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        
        <div className="font-hero" style={{ fontSize: '16px', letterSpacing: '0.08em', color: 'var(--black)' }}>
          NAVEENKUMAR
        </div>

        <div className="font-head" style={{ fontSize: '11px', fontWeight: 600, color: 'var(--gray-mid)', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <button 
            onClick={scrollToTop}
            className="font-head btn-top"
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '10px', 
              fontWeight: 700, 
              letterSpacing: '0.2em', 
              color: 'var(--gray-text)', 
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            BACK TO TOP <span className="arrow-up" style={{ transition: 'transform 0.3s' }}>↑</span>
          </button>
          <style>{`
            .btn-top:hover { color: var(--black) !important; }
            .btn-top:hover .arrow-up { transform: translateY(-3px); }
          `}</style>
        </div>

      </div>
    </footer>
  );
}
