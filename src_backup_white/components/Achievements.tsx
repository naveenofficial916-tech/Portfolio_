import { useEffect, useRef, useState } from 'react';
import { certifications } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section id="achievements" ref={sectionRef} style={{ padding: '90px 48px', backgroundColor: 'var(--white)', position: 'relative' }}>
      <div className="max-w">
        <div className="section-label reveal" style={{ marginBottom: '24px' }}>06 / Achievements</div>
        
        {/* Certifications & eMudhra Hackathon Achievement */}
        <div className="reveal achievement-container">
          <h3 className="font-hero" style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '0.02em', marginBottom: '64px', lineHeight: 1.1 }}>
            CERTIFICATIONS & ACHIEVEMENTS
          </h3>
          <div className="achievement-grid">
            
            {/* Left Side: Certifications */}
            <div className="cert-list">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {certifications.map((cert, i) => (
                  <motion.div 
                    key={cert.id} 
                    className="cert-row" 
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
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

            {/* Middle Side: Hackathon Text */}
            <div className="achievement-text">
              <div className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gray-mid)', marginBottom: '24px' }}>
                ACHIEVEMENT · HACKATHON
              </div>
              
              <h3 className="font-hero" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '0.02em', lineHeight: 1, color: 'var(--black)', marginBottom: '16px' }}>
                eMudhra Hackathon
              </h3>
              
              <div className="font-body" style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                2nd Runner-Up · OptiPilot
                <span className="achievement-badge font-head">2ND RUNNER-UP</span>
                <span className="achievement-badge font-head">₹50,000 PRIZE</span>
              </div>
              
              <div className="font-head" style={{ fontSize: '12px', color: 'var(--gray-text)', letterSpacing: '0.1em', marginBottom: '32px', lineHeight: 1.6 }}>
                Team Innovativezzz <br/> July 2026
              </div>
              
              <p className="font-body" style={{ fontSize: '16px', color: 'var(--gray-text)', lineHeight: 1.6, maxWidth: '400px' }}>
                Secured 2nd Runner-Up at the eMudhra Hackathon with our project, OptiPilot.
              </p>
            </div>

            {/* Right Side: Photo */}
            <div className="achievement-photos">
              <div 
                className="photo-primary" 
                onClick={() => setLightboxImage('/images/achievements/emudhra-hackathon-trophy.jpg')}
                style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '8px' }}
              >
                <img 
                  src="/images/achievements/emudhra-hackathon-trophy.jpg" 
                  alt="M. Naveenkumar holding the eMudhra Hackathon 2nd Runner-Up trophy" 
                  loading="lazy" 
                  style={{ 
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
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
              <button 
                className="lightbox-close font-head" 
                onClick={() => setLightboxImage(null)}
              >
                CLOSE
              </button>
              <img src={lightboxImage} alt="Expanded Achievement" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .achievement-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .achievement-photos { align-items: center !important; }
        }
        .achievement-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .achievement-badge {
          font-size: 9px;
          letter-spacing: 0.15em;
          color: var(--black);
          border: 1px solid var(--border);
          padding: 6px 12px;
          border-radius: 100px;
        }
        .achievement-photos {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .photo-primary {
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          width: 100%;
          aspect-ratio: 3/4;
          z-index: 2;
          background-color: transparent;
        }
        .photo-primary:hover {
          transform: scale(1.02);
        }
        .photo-primary img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          backdrop-filter: blur(4px);
        }
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }
        .lightbox-content img {
          max-width: 100%;
          max-height: 90vh;
          border-radius: 4px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }
        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--black);
          padding: 8px 0;
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
