import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: '90px 48px', backgroundColor: 'var(--white)', position: 'relative' }}>
      <div className="max-w">
        <div className="section-label reveal">01 / About</div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1fr', 
          gap: '80px',
          alignItems: 'center'
        }}>
          
          {/* Left: Photo */}
          <div className="reveal-left" style={{ position: 'relative', padding: '24px' }}>
            {/* Subtle organic shape behind */}
            <div style={{
              position: 'absolute',
              top: '5%', left: '-5%', width: '90%', height: '90%',
              backgroundColor: '#F5F5F2',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              zIndex: 0
            }}></div>
            
            {/* Outlined frame */}
            <div style={{
              position: 'absolute',
              top: '15%', right: '5%', width: '80%', height: '80%',
              border: '1px solid var(--border)',
              zIndex: 1
            }}></div>

            <div 
              className="about-portrait-wrapper"
              style={{ 
                position: 'relative',
                zIndex: 2,
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease',
                cursor: 'pointer'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 28px 56px rgba(0,0,0,0.1)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
              }}
            >
              <img 
                src="/images/naveen_portrait.jpg" 
                alt="M. Naveenkumar" 
                className="about-portrait-img"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  aspectRatio: '4/5', 
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
            
            <div className="font-head" style={{ position: 'absolute', bottom: '-20px', left: '40px', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-text)', zIndex: 3, backgroundColor: 'var(--white)', padding: '4px 12px', border: '1px solid var(--border)' }}>
              M. NAVEENKUMAR &mdash; AI & DATA SCIENCE
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal-right">
            <h2 className="section-heading" style={{ fontSize: 'clamp(48px, 8vw, 80px)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              ABOUT ME
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
              <p className="font-script" style={{ 
                fontSize: 'clamp(32px, 5vw, 48px)', 
                color: 'var(--gray-text)',
                margin: 0
              }}>
                The person behind the work
              </p>
            </div>
            
            <p className="font-body" style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--black)', marginBottom: '48px', maxWidth: '500px' }}>
              I am an Artificial Intelligence and Data Science student with a strong background in data analytics and hands-on exposure to AI, data analytics, and UI/UX technologies. I enjoy developing AI-based and user-friendly solutions for real-world applications. I am continuously improving my technical and creative skills while exploring data, cloud technologies, AI, and user experience design.
            </p>

            <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginBottom: '48px' }}></div>

            <div style={{ backgroundColor: 'var(--white)' }}>
              <h3 className="font-hero" style={{ fontSize: '20px', letterSpacing: '0.04em', marginBottom: '24px' }}>
                LET'S CONNECT
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <div className="font-head" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gray-mid)', textTransform: 'uppercase', marginBottom: '8px' }}>Email</div>
                  <a href="mailto:naveenofficial916@gmail.com" className="font-body" style={{ fontSize: '14px', color: 'var(--black)' }}>naveenofficial916@gmail.com</a>
                </div>
                <div>
                  <div className="font-head" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gray-mid)', textTransform: 'uppercase', marginBottom: '8px' }}>Location</div>
                  <div className="font-body" style={{ fontSize: '14px', color: 'var(--black)' }}>Chennai, Tamil Nadu, India</div>
                </div>
                <div>
                  <div className="font-head" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gray-mid)', textTransform: 'uppercase', marginBottom: '8px' }}>LinkedIn</div>
                  <a href="https://linkedin.com/in/naveen-kumar-4858063a1" target="_blank" rel="noreferrer" className="font-body" style={{ fontSize: '14px', color: 'var(--black)' }}>naveen-kumar-4858063a1</a>
                </div>
                <div>
                  <div className="font-head" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gray-mid)', textTransform: 'uppercase', marginBottom: '8px' }}>GitHub</div>
                  <a href="https://github.com/naveenofficial916-tech" target="_blank" rel="noreferrer" className="font-body" style={{ fontSize: '14px', color: 'var(--black)' }}>naveenofficial916-tech</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="hide-mobile" style={{ position: 'absolute', top: 0, right: '10%', width: '1px', height: '100%', background: 'var(--border)', zIndex: 0 }}></div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 64px !important; }
        }
      `}</style>
    </section>
  );
}
