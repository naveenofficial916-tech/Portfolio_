import { useEffect, useRef } from 'react';

export default function Freelance() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="freelance" ref={sectionRef} style={{ padding: '100px 36px', backgroundColor: '#0A0A0A', color: '#FFFFFF', position: 'relative', borderBottom: '1px solid #1A1A1A' }}>
      <div className="max-w">
        
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: '60px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>
            CLIENT ENGAGEMENTS &amp; WEB DELIVERY
          </div>
          <h2 className="font-hero" style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', letterSpacing: '0.02em', lineHeight: 1, color: '#FFFFFF', marginBottom: '20px' }}>
            CLIENT &amp; WEB EXPERIENCE
          </h2>
          <p className="font-body" style={{ fontSize: 'clamp(17px, 2.5vw, 20px)', color: '#A0A0A0', lineHeight: 1.5, maxWidth: '650px' }}>
            Delivering clean, high-performing websites and digital interfaces.
          </p>
        </div>

        {/* Editorial Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }} className="freelance-grid">
          
          {/* Left: Text Content */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="font-hero" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '0.02em', color: '#FFFFFF', lineHeight: 1.1, marginBottom: '16px' }}>
              Website Design<br />&amp; Development
            </h3>
            
            <div className="font-body" style={{ fontSize: '16px', color: '#E50914', fontWeight: 600, marginBottom: '6px' }}>
              Frontend Engineering &amp; UI Prototyping
            </div>
            
            <div className="font-head" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#888888', textTransform: 'uppercase', marginBottom: '24px' }}>
              2026 · Present
            </div>
            
            <p className="font-body" style={{ fontSize: '15px', color: '#C0C0C0', lineHeight: 1.7, marginBottom: '36px', maxWidth: '480px' }}>
              Translating client requirements into clean, user-friendly, responsive digital products with strong visual structure and performance.
            </p>
            
            {/* Capabilities */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
              {['UI/UX DESIGN', 'WEBSITE ARCHITECTURE', 'RESPONSIVE WEB', 'CLIENT SOLUTIONS'].map((cap) => (
                <span 
                  key={cap}
                  style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-head)',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#D1D1D1',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '100px',
                    padding: '5px 14px'
                  }}
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Project List */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div className="freelance-project-card">
              <h4 className="font-hero" style={{ fontSize: '22px', letterSpacing: '0.02em', marginBottom: '4px', color: '#FFFFFF' }}>The Hotspot</h4>
              <p className="font-body" style={{ fontSize: '13px', color: '#A0A0A0', marginBottom: '12px' }}>Restaurant Digital Presence &amp; Menu Platform</p>
              <div className="font-head" style={{ fontSize: '10px', letterSpacing: '0.14em', color: '#E50914', textTransform: 'uppercase', fontWeight: 700 }}>UI/UX · WEB DEVELOPMENT</div>
            </div>

            <div className="freelance-project-card">
              <h4 className="font-hero" style={{ fontSize: '22px', letterSpacing: '0.02em', marginBottom: '4px', color: '#FFFFFF' }}>The Outfit Club</h4>
              <p className="font-body" style={{ fontSize: '13px', color: '#A0A0A0', marginBottom: '12px' }}>Curated Apparel &amp; Fashion Commerce Concept</p>
              <div className="font-head" style={{ fontSize: '10px', letterSpacing: '0.14em', color: '#E50914', textTransform: 'uppercase', fontWeight: 700 }}>UI/UX · E-COMMERCE</div>
            </div>

            <div className="freelance-project-card">
              <h4 className="font-hero" style={{ fontSize: '22px', letterSpacing: '0.02em', marginBottom: '4px', color: '#FFFFFF' }}>Ambur Star Biryani</h4>
              <p className="font-body" style={{ fontSize: '13px', color: '#A0A0A0', marginBottom: '12px' }}>Brand Showcase &amp; Online Menu Portal</p>
              <div className="font-head" style={{ fontSize: '10px', letterSpacing: '0.14em', color: '#E50914', textTransform: 'uppercase', fontWeight: 700 }}>UI/UX · WEB DEVELOPMENT</div>
            </div>

          </div>

        </div>
      </div>
      
      <style>{`
        .freelance-project-card {
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          background-color: #121212;
          box-shadow: 0 12px 30px rgba(0,0,0,0.4);
          transition: all 0.35s ease;
        }
        .freelance-project-card:hover {
          border-color: rgba(229, 9, 20, 0.4);
          transform: translateX(8px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.6), 0 0 20px rgba(229, 9, 20, 0.12);
        }
        @media (max-width: 960px) {
          .freelance-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
