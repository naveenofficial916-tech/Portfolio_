import { useEffect, useRef, useState } from 'react';
import { certifications } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from './TiltCard';
import KineticHeading from './KineticHeading';
import Magnetic from './Magnetic';
import BorderBeam from './BorderBeam';
import TextScramble from './TextScramble';

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
    <section id="achievements" ref={sectionRef} style={{ padding: '90px 48px', backgroundColor: 'transparent', position: 'relative' }}>
      <div className="max-w">
        <div className="section-label reveal" style={{ marginBottom: '24px' }}>06 / Achievements</div>
        
        {/* Certifications & eMudhra Hackathon Achievement */}
        <div className="reveal achievement-container">
          <KineticHeading className="font-hero" style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '0.02em', marginBottom: '64px', lineHeight: 1.1 }}>
            CERTIFICATIONS & ACHIEVEMENTS
          </KineticHeading>
          <div className="achievement-grid">
            
            {/* Left Side: Certifications */}
            <div className="cert-list">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {certifications.map((cert, i) => (
                  <motion.div 
                    key={cert.id} 
                    className="cert-row" 
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '16px', padding: '20px 0', borderBottom: '1px solid var(--border)', alignItems: 'start', cursor: 'default' }}
                  >
                    <span className="font-head" style={{ fontSize: '12px', color: 'var(--gray-mid)', fontWeight: 600 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="font-body" style={{ fontSize: '15px', fontWeight: 500, color: 'var(--black)', marginBottom: '6px' }}>
                        {cert.name}
                      </div>
                      <div className="font-head" style={{ fontSize: '10px', color: 'var(--gray-text)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {cert.issuer}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Hackathon Showcase (Text & Photo) */}
            <div className="hackathon-showcase" style={{ position: 'relative', overflow: 'hidden', padding: '40px', borderRadius: '20px', border: '1px solid var(--border)', backgroundColor: '#FAFAF8' }}>
              <BorderBeam size={160} duration={7} borderWidth={1.5} />
              
              {/* Hackathon Text */}
              <div className="achievement-text" style={{ position: 'relative', zIndex: 2 }}>
                <div className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gray-mid)', marginBottom: '24px' }}>
                  ACHIEVEMENT · HACKATHON
                </div>
                
                <h3 className="font-hero" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '0.02em', lineHeight: 1, color: 'var(--black)', marginBottom: '16px' }}>
                  <TextScramble triggerOnHover duration={600}>eMudhra Hackathon</TextScramble>
                </h3>
                
                <div className="font-body" style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  2nd Runner-Up · OptiPilot
                  <span className="achievement-badge font-head">2ND RUNNER-UP</span>
                  <span className="achievement-badge font-head" style={{ backgroundColor: 'var(--black)', color: 'var(--white)', borderColor: 'var(--black)', boxShadow: '0 4px 16px rgba(0,0,0,0.14)' }}>
                    <TextScramble triggerOnHover duration={500}>₹50,000 CASH PRIZE</TextScramble>
                  </span>
                </div>
                
                <div className="font-head" style={{ fontSize: '12px', color: 'var(--gray-text)', letterSpacing: '0.1em', marginBottom: '32px', lineHeight: 1.6 }}>
                  Team Innovativezzz <br/> July 2026
                </div>
                
                <p className="font-body" style={{ fontSize: '16px', color: 'var(--gray-text)', lineHeight: 1.6, maxWidth: '420px' }}>
                  Secured 2nd Runner-Up along with a ₹50,000 cash prize at the eMudhra Hackathon with our project, OptiPilot.
                </p>
              </div>

              {/* Photo with 3D Tilt and Continuous Subtle Levitation */}
              <div className="achievement-photos">
                <TiltCard dataCursor="EXPAND PHOTO" maxTilt={8}>
                  <motion.div 
                    className="photo-primary" 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                    onClick={() => setLightboxImage('/images/achievements/emudhra-hackathon-trophy.png')}
                  >
                    <img 
                      src="/images/achievements/emudhra-hackathon-trophy.png" 
                      alt="M. Naveenkumar holding the eMudhra Hackathon 2nd Runner-Up trophy" 
                      loading="lazy" 
                    />
                  </motion.div>
                </TiltCard>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div 
              className="lightbox-content" 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <Magnetic strength={0.4}>
                <button 
                  className="lightbox-close font-head" 
                  onClick={() => setLightboxImage(null)}
                >
                  CLOSE ✕
                </button>
              </Magnetic>
              <img src={lightboxImage} alt="Expanded Achievement" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .achievement-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
          .hackathon-showcase {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .achievement-photos {
            justify-content: center !important;
            align-items: center !important;
          }
          .photo-primary {
            max-width: 280px !important;
          }
        }
        .achievement-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 64px;
          align-items: center;
        }
        .hackathon-showcase {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          align-items: center;
        }
        .achievement-text {
          min-width: 0;
        }
        .achievement-badge {
          font-size: 9px;
          letter-spacing: 0.15em;
          color: var(--black);
          border: 1px solid var(--border);
          padding: 6px 12px;
          border-radius: 100px;
          transition: all 0.25s ease;
        }
        .achievement-badge:hover {
          border-color: var(--black);
          transform: translateY(-2px);
        }
        .achievement-photos {
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-shrink: 0;
        }
        .photo-primary {
          cursor: pointer;
          transition: filter 0.5s ease;
          width: 100%;
          max-width: 320px;
          z-index: 2;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          filter: drop-shadow(0 16px 28px rgba(0, 0, 0, 0.1));
        }
        .photo-primary:hover {
          filter: drop-shadow(0 24px 36px rgba(0, 0, 0, 0.18));
        }
        .photo-primary img {
          width: 100%;
          height: auto;
          max-height: 540px;
          object-fit: contain;
          display: block;
        }
        
        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(255, 255, 255, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-content img {
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
        }
        .lightbox-close {
          position: absolute;
          top: -44px;
          right: 0;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--black);
          padding: 8px 12px;
        }
        .lightbox-close:hover {
          color: var(--gray-mid);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
