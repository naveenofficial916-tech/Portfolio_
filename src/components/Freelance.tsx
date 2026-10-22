import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';
import KineticHeading from './KineticHeading';

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
    <section id="freelance" ref={sectionRef} style={{ padding: '90px 48px', backgroundColor: 'transparent', position: 'relative' }}>
      <div className="max-w" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* SECTION HEADER */}
        <div className="reveal" style={{ marginBottom: '60px' }}>
          <div className="font-head" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gray-mid)', marginBottom: '24px' }}>
            05 / REAL-WORLD · FREELANCE · WEB
          </div>
          <KineticHeading className="font-hero" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '0.02em', lineHeight: 1, color: 'var(--black)', marginBottom: '24px' }}>
            FREELANCE EXPERIENCE
          </KineticHeading>
          <p className="font-body" style={{ fontSize: 'clamp(20px, 3vw, 24px)', color: 'var(--gray-text)', lineHeight: 1.4, maxWidth: '700px' }}>
            Building thoughtful digital experiences beyond the classroom.
          </p>
        </div>

        {/* EDITORIAL LAYOUT */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }} className="freelance-grid">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', paddingRight: '40px' }}>
            <h3 className="font-hero" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '0.02em', color: 'var(--black)', lineHeight: 1.1, marginBottom: '16px' }}>
              Freelance Website<br />Design & Development
            </h3>
            
            <div className="font-body" style={{ fontSize: '18px', color: 'var(--black)', fontWeight: 500, marginBottom: '8px' }}>
              Freelance Web Designer & Developer
            </div>
            
            <div className="font-head" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--gray-mid)', textTransform: 'uppercase', marginBottom: '32px' }}>
              2026 · Present
            </div>
            
            <p className="font-body" style={{ fontSize: '16px', color: 'var(--gray-text)', lineHeight: 1.6, marginBottom: '48px', maxWidth: '500px' }}>
              Currently working on website creation projects, translating requirements and ideas into clean, user-friendly and responsive digital experiences.
            </p>
            
            {/* CAPABILITIES */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '64px' }}>
              {['UI/UX DESIGN', 'WEBSITE DESIGN', 'RESPONSIVE DEVELOPMENT', 'CLIENT REQUIREMENTS'].map((cap, i, arr) => (
                <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--black)' }}>
                    {cap}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ width: '1px', height: '12px', background: 'var(--border)' }}></span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="freelance-cta">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--gray-text)', textDecoration: 'none' }}>
                <span className="font-head" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  ACTIVE CLIENT INITIATIVES ↗
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: PROJECT LIST */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <TiltCard dataCursor="CLIENT WORK" maxTilt={6}>
              <div className="freelance-project-card group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h4 className="font-hero" style={{ fontSize: '26px', letterSpacing: '0.02em', margin: 0 }}>The Outfit Club</h4>
                  <div className="freelance-arrow-pill">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <p className="font-body" style={{ fontSize: '14px', color: 'var(--gray-text)', marginBottom: '16px' }}>Online Fashion Retail</p>
                <div className="font-head" style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'var(--gray-mid)', textTransform: 'uppercase' }}>UI/UX · E-COMMERCE</div>
              </div>
            </TiltCard>

            <TiltCard dataCursor="CLIENT WORK" maxTilt={6}>
              <div className="freelance-project-card group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h4 className="font-hero" style={{ fontSize: '26px', letterSpacing: '0.02em', margin: 0 }}>Spice Heaven</h4>
                  <div className="freelance-arrow-pill">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <p className="font-body" style={{ fontSize: '14px', color: 'var(--gray-text)', marginBottom: '16px' }}>Restaurant Website</p>
                <div className="font-head" style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'var(--gray-mid)', textTransform: 'uppercase' }}>UI/UX · WEB DEVELOPMENT</div>
              </div>
            </TiltCard>

          </div>

        </div>
      </div>
      
      <style>{`
        .freelance-project-card {
          padding: 32px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background-color: #FAFAF8;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .freelance-project-card:hover {
          background-color: var(--white);
          border-color: var(--black);
          box-shadow: 0 16px 40px rgba(0,0,0,0.06);
        }
        .freelance-arrow-pill {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s ease, background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease;
        }
        .freelance-project-card:hover .freelance-arrow-pill {
          background-color: var(--black);
          color: var(--white);
          border-color: var(--black);
          transform: translate(2px, -2px) rotate(45deg);
        }
        .freelance-cta {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          width: max-content;
        }
        @media (max-width: 1000px) {
          .freelance-grid {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
          .reveal-left {
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
