import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import KineticHeading from './KineticHeading';

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
    <section id="about" ref={sectionRef} style={{ padding: '90px 48px', backgroundColor: 'transparent', position: 'relative' }}>
      <div className="max-w">
        <div className="section-label reveal">01 / About</div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1fr', 
          gap: '80px',
          alignItems: 'center'
        }}>
          
          {/* Left: Photo with 3D Tilt & Subtle Ambient Levitation */}
          <div className="reveal-left" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <TiltCard dataCursor="NAVEEN 👋" maxTilt={7} style={{ width: '100%', maxWidth: '580px' }}>
              <motion.div 
                className="about-portrait-wrapper"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                style={{ 
                  position: 'relative',
                  zIndex: 2,
                  overflow: 'visible',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.11))',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                <img 
                  src="/images/naveen_portrait.png" 
                  alt="M. Naveenkumar" 
                  className="about-portrait-img"
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                
                <div 
                  className="font-head" 
                  style={{ 
                    position: 'absolute', 
                    bottom: '16px', 
                    left: '24px', 
                    fontSize: '10px', 
                    fontWeight: 700,
                    letterSpacing: '0.16em', 
                    textTransform: 'uppercase', 
                    color: 'var(--black)', 
                    zIndex: 3, 
                    backgroundColor: 'rgba(255, 255, 255, 0.94)', 
                    backdropFilter: 'blur(10px)', 
                    padding: '6px 18px', 
                    border: '1px solid var(--border)', 
                    borderRadius: '100px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }} />
                  M. NAVEENKUMAR &mdash; AI &amp; DATA SCIENCE
                </div>
              </motion.div>
            </TiltCard>
          </div>

          {/* Right: Content */}
          <div className="reveal-right">
            <KineticHeading className="section-heading" style={{ fontSize: 'clamp(48px, 8vw, 80px)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              ABOUT ME
            </KineticHeading>
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

            <div style={{ backgroundColor: 'transparent' }}>
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
