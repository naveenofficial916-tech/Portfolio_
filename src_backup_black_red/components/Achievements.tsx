import { useEffect, useRef, useState } from 'react';
import { certifications } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, X } from 'lucide-react';

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    if (lightboxImage) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="achievements" 
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
        
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: '60px' }}>
          <div className="section-label">03 / HONORS &amp; CREDENTIALS</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <h2 
              style={{ 
                fontFamily: 'var(--font-hero)', 
                fontSize: 'clamp(28px, 4vw, 44px)', 
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                margin: 0,
                whiteSpace: 'nowrap'
              }}
            >
              CERTIFICATIONS &amp; ACHIEVEMENTS
            </h2>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(229, 9, 20, 0.5) 0%, rgba(255, 255, 255, 0.08) 100%)' }} />
          </div>
        </div>

        {/* 3-Column Achievements Grid */}
        <div className="reveal achievement-grid">
          
          {/* Left Column: Certifications List (Verified 8 credentials) */}
          <div 
            style={{ 
              backgroundColor: '#121212', 
              borderRadius: '16px', 
              padding: '32px', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <Award size={16} color="#E50914" />
              <span style={{ fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E50914' }}>
                VERIFIED CREDENTIALS
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {certifications.map((cert, i) => (
                <motion.div 
                  key={cert.id} 
                  whileHover={{ x: 6 }}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '32px 1fr', 
                    gap: '12px', 
                    padding: '14px 0', 
                    borderBottom: i === certifications.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.06)', 
                    alignItems: 'baseline', 
                    cursor: 'default' 
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: '#E50914', fontWeight: 700 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF', marginBottom: '2px' }}>
                      {cert.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: '10px', color: '#888888', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {cert.issuer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Middle Column: Hackathon Detail */}
          <div 
            style={{ 
              backgroundColor: '#121212', 
              borderRadius: '16px', 
              padding: '32px', 
              border: '1px solid rgba(229, 9, 20, 0.35)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(229, 9, 20, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <Trophy size={16} color="#E50914" />
                <span style={{ fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E50914' }}>
                  NATIONAL HACKATHON WINNER
                </span>
              </div>
              
              <h3 
                style={{ 
                  fontFamily: 'var(--font-hero)', 
                  fontSize: 'clamp(28px, 3.5vw, 42px)', 
                  letterSpacing: '0.02em', 
                  lineHeight: 1, 
                  color: '#FFFFFF', 
                  marginBottom: '16px' 
                }}
              >
                eMudhra Hackathon
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                <span style={{ 
                  fontSize: '10px', 
                  fontFamily: 'var(--font-head)', 
                  fontWeight: 700, 
                  letterSpacing: '0.12em', 
                  color: '#FFFFFF', 
                  backgroundColor: '#E50914', 
                  padding: '4px 12px', 
                  borderRadius: '100px' 
                }}>
                  2ND RUNNER-UP
                </span>
                <span style={{ 
                  fontSize: '10px', 
                  fontFamily: 'var(--font-head)', 
                  fontWeight: 700, 
                  letterSpacing: '0.12em', 
                  color: '#FFFFFF', 
                  backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                  padding: '4px 12px', 
                  borderRadius: '100px',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}>
                  ₹50,000 CASH PRIZE
                </span>
              </div>
              
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '12px', color: '#A0A0A0', letterSpacing: '0.08em', marginBottom: '20px', lineHeight: 1.6 }}>
                Project: OptiPilot · Team Innovativezzz
              </div>
              
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#C0C0C0', lineHeight: 1.7, margin: 0 }}>
                Secured 2nd Runner-Up at the national eMudhra Hackathon with our project, OptiPilot. Designed and built an intelligent autonomous system that solves critical operational hurdles.
              </p>
            </div>

            <div style={{ marginTop: '28px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-head)', color: '#888888', letterSpacing: '0.1em' }}>
                CLICK PHOTO TO EXPAND TROPHY VIEW →
              </span>
            </div>
          </div>

          {/* Right Column: Genuine Trophy Photo */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              backgroundColor: '#121212',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div 
              onClick={() => setLightboxImage('/images/achievements/emudhra-hackathon-trophy.jpg')}
              style={{ 
                width: '100%', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                cursor: 'pointer',
                position: 'relative',
                border: '1.5px solid rgba(229, 9, 20, 0.4)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6), 0 0 25px rgba(229, 9, 20, 0.2)'
              }}
            >
              <motion.img 
                src="/images/achievements/emudhra-hackathon-trophy.jpg" 
                alt="M. Naveenkumar holding the eMudhra Hackathon 2nd Runner-Up trophy" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                loading="lazy" 
                style={{ 
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'none',
                  opacity: 1
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  padding: '8px 12px',
                  backgroundColor: 'rgba(10, 10, 10, 0.85)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '6px',
                  fontSize: '10px',
                  fontFamily: 'var(--font-head)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  textAlign: 'center'
                }}
              >
                M. NAVEENKUMAR · TROPHY CEREMONY
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(5, 5, 5, 0.94)',
              backdropFilter: 'blur(16px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div 
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: '85vw', maxHeight: '85vh' }}
            >
              <button 
                onClick={() => setLightboxImage(null)}
                style={{
                  position: 'absolute',
                  top: '-44px',
                  right: 0,
                  background: 'none',
                  border: 'none',
                  color: '#E50914',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-head)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.14em'
                }}
              >
                <span>CLOSE</span>
                <X size={16} />
              </button>
              <img 
                src={lightboxImage} 
                alt="Expanded Achievement Trophy" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '85vh', 
                  borderRadius: '12px', 
                  border: '1.5px solid rgba(229, 9, 20, 0.5)',
                  boxShadow: '0 25px 70px rgba(0,0,0,0.9), 0 0 50px rgba(229, 9, 20, 0.3)',
                  filter: 'none',
                  opacity: 1
                }} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .achievement-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr 0.9fr;
          gap: 36px;
          align-items: stretch;
        }
        @media (max-width: 960px) {
          .achievement-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
