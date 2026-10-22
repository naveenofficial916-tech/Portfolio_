import { useEffect, useRef } from 'react';
import { education } from '../data/portfolioData';
import KineticHeading from './KineticHeading';
import TiltCard from './TiltCard';

export default function Education() {
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
    const els = sectionRef.current?.querySelectorAll('.reveal, .edu-line, .edu-marker, .edu-card');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} style={{ padding: '90px 48px', backgroundColor: 'transparent', position: 'relative' }}>
      <div className="max-w">
        <div className="section-label reveal">03 / Education</div>
        
        <div className="reveal" style={{ marginBottom: '64px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <KineticHeading className="font-hero" style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '0.02em', color: 'var(--black)', marginBottom: '16px', lineHeight: 1.1 }}>
            EDUCATION & BACKGROUND
          </KineticHeading>
          <p className="font-body" style={{ fontSize: '18px', color: 'var(--gray-text)', lineHeight: 1.6 }}>
            Academic foundation in Artificial Intelligence, Data Science, and analytical problem-solving.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          {education.map((edu, i) => (
            <div key={i} className="edu-card reveal" style={{ 
              position: 'relative', 
              paddingLeft: '64px', 
              paddingBottom: i === education.length - 1 ? '0' : '40px',
              transitionDelay: `${i * 0.15}s`
            }}>
              {/* Timeline Line */}
              {i !== education.length - 1 && (
                <div className="edu-line" style={{ 
                  position: 'absolute', left: '15px', top: '32px', bottom: '-8px', width: '1px', 
                  background: 'var(--border)', transformOrigin: 'top', transitionDelay: `${i * 0.15 + 0.3}s` 
                }}></div>
              )}
              
              {/* Marker */}
              <div className="edu-marker" style={{ 
                position: 'absolute', left: '11px', top: '16px', width: '9px', height: '9px', 
                borderRadius: '50%', border: '1.5px solid var(--black)', backgroundColor: 'var(--white)', zIndex: 2,
                transitionDelay: `${i * 0.15 + 0.2}s`
              }}></div>
              
              <TiltCard dataCursor="ACADEMIC" maxTilt={5}>
                <div className="edu-content" style={{ padding: '28px', borderRadius: '12px', border: '1px solid var(--border)', backgroundColor: '#FAFAF8', transition: 'all 0.4s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                    <div className="font-head" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gray-text)', letterSpacing: '0.1em' }}>
                      {edu.year || '2026'}
                    </div>
                    
                    <span 
                      className="font-head edu-badge"
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        padding: '4px 14px',
                        borderRadius: '100px',
                        border: i === 0 ? '1.5px solid var(--black)' : '1px solid var(--border)',
                        backgroundColor: i === 0 ? 'var(--black)' : 'rgba(255, 255, 255, 0.85)',
                        color: i === 0 ? 'var(--white)' : 'var(--black)',
                        backdropFilter: 'blur(6px)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: i === 0 ? '0 4px 14px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.03)',
                        transition: 'all 0.3s ease',
                        userSelect: 'none'
                      }}
                    >
                      {i === 0 && (
                        <span style={{ 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          backgroundColor: '#22c55e', 
                          display: 'inline-block', 
                          boxShadow: '0 0 8px #22c55e' 
                        }} />
                      )}
                      {edu.badge || (i === 0 ? 'COLLEGE' : i === 1 ? '12TH' : '10TH')}
                    </span>
                  </div>
                  
                  <h3 className="font-hero" style={{ fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '0.02em', marginBottom: '16px', lineHeight: 1.1 }}>
                    {edu.institution}
                  </h3>
                  
                  <p className="font-body" style={{ fontSize: '16px', fontWeight: 400, color: 'var(--gray-text)', marginBottom: '16px', lineHeight: 1.5 }}>
                    {edu.degree}
                  </p>
                  
                  <div className="font-head" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--black)' }}>
                    {edu.detail}
                  </div>
                </div>
              </TiltCard>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-line {
          transform: scaleY(0);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .edu-line.in {
          transform: scaleY(1);
        }
        .edu-marker {
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .edu-marker.in {
          transform: scale(1);
        }
        .edu-content:hover {
          background-color: var(--white) !important;
          border-color: var(--black) !important;
          box-shadow: 0 16px 36px rgba(0,0,0,0.06);
        }
      `}</style>
    </section>
  );
}
