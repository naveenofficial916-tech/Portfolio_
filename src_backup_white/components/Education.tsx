import { useEffect, useRef } from 'react';
import { education } from '../data/portfolioData';

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
    <section id="education" ref={sectionRef} style={{ padding: '90px 48px', backgroundColor: 'var(--white)', position: 'relative' }}>
      <div className="max-w">
        <div className="section-label reveal">03 / Education</div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '64px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
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
              
              <div className="edu-content" style={{ padding: '24px', borderRadius: '12px', border: '1px solid transparent', transition: 'all 0.4s ease' }}>
                <div className="font-head" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gray-text)', marginBottom: '16px', letterSpacing: '0.1em' }}>
                  {edu.year || '2026'}
                </div>
                
                <h3 className="font-hero" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '0.02em', marginBottom: '16px', lineHeight: 1 }}>
                  {edu.institution}
                </h3>
                
                <p className="font-body" style={{ fontSize: '18px', fontWeight: 400, color: 'var(--gray-text)', marginBottom: '16px' }}>
                  {edu.degree}
                </p>
                
                <div className="font-head" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--black)' }}>
                  {edu.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .edu-card {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          filter: blur(8px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .edu-card.in {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }
        
        .edu-line {
          transform: scaleY(0);
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .edu-line.in {
          transform: scaleY(1);
        }
        
        .edu-marker {
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .edu-marker.in {
          opacity: 1;
          transform: scale(1);
        }
        
        .edu-content {
          margin-top: -16px;
          border: 1px solid transparent;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .edu-content:hover {
          border-color: #d0d0ce;
          background-color: var(--white);
          transform: translateX(12px) translateY(-2px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.06);
          border-radius: 12px;
        }
      `}</style>
    </section>
  );
}
