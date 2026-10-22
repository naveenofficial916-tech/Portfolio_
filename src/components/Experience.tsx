import { useEffect, useRef } from 'react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{ padding: '90px 48px', backgroundColor: 'transparent' }}>
      <div className="max-w">
        
        {/* Experience Section */}
        <div className="reveal">
          <div className="section-label">05 / Experience</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', marginTop: '64px', alignItems: 'start' }} className="exp-grid">
            
            {/* Left: Info */}
            <div>
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <h3 className="font-hero" style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '0.02em', marginBottom: '16px' }}>
                    {exp.role}
                  </h3>
                  <div className="font-body" style={{ fontSize: '15px', color: 'var(--black)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {exp.company}
                  </div>
                  <div className="font-body" style={{ fontSize: '14px', color: 'var(--gray-text)', marginBottom: '24px' }}>
                    {exp.location}
                  </div>
                  <div className="font-head" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-mid)' }}>
                    {exp.period}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Visual Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ width: '100%', height: '1px', background: 'var(--border)' }}></div>
              <div className="font-hero" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--gray-text)', lineHeight: 1.1 }}>
                INDUSTRY EXPOSURE
              </div>
              <div style={{ width: '100%', height: '1px', background: 'var(--border)' }}></div>
              <div className="font-hero" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--gray-text)', lineHeight: 1.1, textAlign: 'right' }}>
                DATA APPLICATIONS
              </div>
              <div style={{ width: '100%', height: '1px', background: 'var(--border)' }}></div>
              <div className="font-hero" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--gray-text)', lineHeight: 1.1 }}>
                CLOUD WORKFLOWS
              </div>
              <div style={{ width: '100%', height: '1px', background: 'var(--border)' }}></div>
              <div className="font-hero" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--gray-text)', lineHeight: 1.1, textAlign: 'right' }}>
                REAL-WORLD DATA PLATFORMS
              </div>
            </div>

          </div>
        </div>


      </div>
      <style>{`
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
