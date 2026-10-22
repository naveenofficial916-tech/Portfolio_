import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
    <section 
      id="about" 
      ref={sectionRef} 
      style={{ 
        padding: '120px 36px', 
        backgroundColor: '#0A0A0A', 
        color: '#FFFFFF',
        position: 'relative',
        borderBottom: '1px solid #1A1A1A'
      }}
    >
      <div className="max-w">
        <div className="section-label reveal">01 / PROFILE</div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.2fr', 
          gap: '80px',
          alignItems: 'center'
        }}>
          
          {/* Left: Professional Portrait in full color with Crimson Glow */}
          <div className="reveal-left" style={{ position: 'relative' }}>
            {/* Ambient Red Rim Glow */}
            <div 
              style={{
                position: 'absolute',
                top: '5%',
                left: '-5%',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(229, 9, 20, 0.18) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}
            />

            <div 
              className="about-portrait-wrapper"
              style={{ 
                position: 'relative',
                zIndex: 2,
                overflow: 'hidden',
                borderRadius: '16px',
                border: '1.5px solid rgba(229, 9, 20, 0.4)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(229, 9, 20, 0.2)',
                backgroundColor: '#121212',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease',
                cursor: 'pointer'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 32px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(229, 9, 20, 0.35)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(229, 9, 20, 0.2)';
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
                  filter: 'none',
                  WebkitFilter: 'none',
                  opacity: 1,
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
            
            <div 
              className="font-head" 
              style={{ 
                position: 'absolute', 
                bottom: '-16px', 
                left: '24px', 
                fontSize: '10px', 
                fontWeight: 700,
                letterSpacing: '0.16em', 
                textTransform: 'uppercase', 
                color: '#FFFFFF', 
                zIndex: 3, 
                backgroundColor: '#141414', 
                padding: '6px 16px', 
                borderRadius: '100px',
                border: '1px solid rgba(229, 9, 20, 0.5)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.6)'
              }}
            >
              M. NAVEENKUMAR &mdash; AI &amp; DATA SCIENCE
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal-right">
            <h2 
              className="section-heading" 
              style={{ 
                fontSize: 'clamp(44px, 6vw, 72px)', 
                marginBottom: '8px', 
                letterSpacing: '0.02em',
                lineHeight: 0.95,
                color: '#FFFFFF'
              }}
            >
              ABOUT ME
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
              <p 
                className="script-accent" 
                style={{ 
                  fontSize: 'clamp(28px, 4vw, 42px)', 
                  color: '#E50914',
                  margin: 0
                }}
              >
                The person behind the work
              </p>
            </div>
            
            <p 
              className="font-body" 
              style={{ 
                fontSize: '15px', 
                lineHeight: 1.8, 
                color: '#C0C0C0', 
                marginBottom: '40px', 
                maxWidth: '520px' 
              }}
            >
              I am an Artificial Intelligence and Data Science student with a strong passion for data analytics, machine learning, and human-centered digital experiences. I develop analytical pipelines and scalable web applications that combine mathematical rigor with clean visual hierarchy. Continuously refining my skills across cloud infrastructure, big data tools, and intuitive product design.
            </p>

            <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginBottom: '36px' }} />

            <div style={{ backgroundColor: 'transparent' }}>
              <div 
                style={{ 
                  fontFamily: 'var(--font-head)', 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  letterSpacing: '0.16em', 
                  color: '#E50914', 
                  textTransform: 'uppercase', 
                  marginBottom: '20px' 
                }}
              >
                VERIFIED CHANNELS
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <div className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', color: '#888888', textTransform: 'uppercase', marginBottom: '4px' }}>Email</div>
                  <a href="mailto:naveenofficial916@gmail.com" className="font-body" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>naveenofficial916@gmail.com</a>
                </div>
                <div>
                  <div className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', color: '#888888', textTransform: 'uppercase', marginBottom: '4px' }}>Location</div>
                  <div className="font-body" style={{ fontSize: '13px', color: '#FFFFFF' }}>Chennai, Tamil Nadu, India</div>
                </div>
                <div>
                  <div className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', color: '#888888', textTransform: 'uppercase', marginBottom: '4px' }}>LinkedIn</div>
                  <a href="https://linkedin.com/in/naveen-kumar-4858063a1" target="_blank" rel="noreferrer" className="font-body" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>naveen-kumar-4858063a1</a>
                </div>
                <div>
                  <div className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', color: '#888888', textTransform: 'uppercase', marginBottom: '4px' }}>GitHub</div>
                  <a href="https://github.com/naveenofficial916-tech" target="_blank" rel="noreferrer" className="font-body" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>naveenofficial916-tech</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 50px !important; }
        }
      `}</style>
    </section>
  );
}
