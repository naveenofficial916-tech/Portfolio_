export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ 
      padding: '40px 36px', 
      backgroundColor: '#050505', 
      borderTop: '1px solid #1A1A1A' 
    }}>
      <div className="max-w" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        
        <div className="font-hero" style={{ fontSize: '18px', letterSpacing: '0.08em', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>NAVEEN KUMAR</span>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#E50914' }} />
        </div>

        <div className="font-head" style={{ fontSize: '11px', fontWeight: 600, color: '#777777', letterSpacing: '0.12em' }}>
          AI &amp; DATA SCIENCE · PORTFOLIO 2026
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <button 
            onClick={scrollToTop}
            className="font-head btn-top"
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '11px', 
              fontWeight: 700, 
              letterSpacing: '0.2em', 
              color: '#A0A0A0', 
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            BACK TO TOP <span className="arrow-up" style={{ color: '#E50914', transition: 'transform 0.3s' }}>↑</span>
          </button>
          <style>{`
            .btn-top:hover { color: #FFFFFF !important; }
            .btn-top:hover .arrow-up { transform: translateY(-3px); }
          `}</style>
        </div>

      </div>
    </footer>
  );
}
