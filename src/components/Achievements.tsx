import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Trophy, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';
import KineticHeading from './KineticHeading';
import Magnetic from './Magnetic';
import BorderBeam from './BorderBeam';
import TextScramble from './TextScramble';

interface EnhancedCert {
  id: string;
  name: string;
  issuer: string;
  category: 'cloud' | 'data' | 'global' | 'academic';
  year?: string;
}

const categorizedCerts: EnhancedCert[] = [
  { id: 'aws',          name: 'AWS Generative AI Foundations',        issuer: 'Amazon Web Services', category: 'cloud',    year: '2026' },
  { id: 'google',       name: 'Google Cloud Data Transformation',     issuer: 'Google Cloud',         category: 'cloud',    year: '2026' },
  { id: 'tata',         name: 'Data Visualization & Insights',        issuer: 'TATA Forage',          category: 'data',     year: '2026' },
  { id: 'hp-life',      name: 'Data Science & Strategic Analytics',   issuer: 'HP LIFE Foundation',   category: 'data',     year: '2025' },
  { id: 'cognos',       name: 'IBM Cognos Analytics Enterprise',      issuer: 'IBM',                  category: 'data',     year: '2025' },
  { id: 'goethe',       name: 'Goethe A1 Language Certificate',       issuer: 'Goethe-Institut German',category: 'global',   year: '2025' },
  { id: 'behindthebug', name: 'Behind the Bug Technical Hack',       issuer: 'Chennai Inst of Tech', category: 'academic', year: '2025' },
  { id: 'brandblitz',   name: 'Brand Blitz Creative Challenge',       issuer: 'St. Joseph College',   category: 'academic', year: '2024' },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    if (lightboxImage) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  const filteredCerts = selectedCategory === 'all' 
    ? categorizedCerts 
    : categorizedCerts.filter(c => c.category === selectedCategory);

  return (
    <section 
      id="achievements" 
      ref={sectionRef} 
      style={{ 
        padding: '110px 48px', 
        backgroundColor: 'transparent', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glows */}
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          right: '5%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234, 179, 8, 0.05) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="max-w" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '24px' }}
        >
          <div 
            className="font-head" 
            style={{ 
              fontSize: '11px', 
              fontWeight: 700, 
              letterSpacing: '0.18em', 
              color: 'var(--gray-mid)', 
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Trophy size={14} color="#eab308" />
            <span>06 / Accolades · Hackathons · Credentials</span>
          </div>
        </motion.div>
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '64px' }}
        >
          <KineticHeading 
            className="font-hero" 
            style={{ 
              fontSize: 'clamp(42px, 5.5vw, 76px)', 
              letterSpacing: '0.02em', 
              lineHeight: 1.05,
              color: 'var(--black)',
              marginBottom: '16px'
            }}
          >
            CERTIFICATIONS &amp; ACHIEVEMENTS
          </KineticHeading>
          <p 
            className="font-body" 
            style={{ 
              fontSize: 'clamp(17px, 2.2vw, 20px)', 
              color: 'var(--gray-text)', 
              lineHeight: 1.5,
              maxWidth: '680px'
            }}
          >
            Recognized performance in high-stakes competitive hackathons alongside global technical credentials.
          </p>
        </motion.div>

        {/* 2-Column Grid: Left Certifications | Right Hackathon Trophy */}
        <div className="achievement-grid">
          
          {/* Left Side: Filterable Certifications */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="cert-list"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {/* Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {[
                { id: 'all', label: 'All (8)' },
                { id: 'cloud', label: 'Cloud & AI' },
                { id: 'data', label: 'Data & Analytics' },
                { id: 'global', label: 'Global Language' },
                { id: 'academic', label: 'Competitive' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '100px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-head)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: selectedCategory === tab.id ? '1.5px solid var(--black)' : '1px solid var(--border)',
                    backgroundColor: selectedCategory === tab.id ? 'var(--black)' : '#FFFFFF',
                    color: selectedCategory === tab.id ? 'var(--white)' : 'var(--black)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: selectedCategory === tab.id ? '0 4px 12px rgba(0,0,0,0.12)' : 'none'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* List of Certifications */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <AnimatePresence mode="popLayout">
                {filteredCerts.map((cert, i) => (
                  <motion.div 
                    layout
                    key={cert.id} 
                    className="cert-interactive-row" 
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    onMouseEnter={() => setHoveredCert(cert.id)}
                    onMouseLeave={() => setHoveredCert(null)}
                    whileHover={{ x: 8 }}
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '36px 1fr auto', 
                      gap: '16px', 
                      padding: '18px 12px', 
                      borderBottom: '1px solid var(--border)', 
                      alignItems: 'center', 
                      cursor: 'default',
                      borderRadius: '10px',
                      backgroundColor: hoveredCert === cert.id ? '#FAFAF8' : 'transparent',
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    <span 
                      className="font-head" 
                      style={{ 
                        fontSize: '11px', 
                        color: hoveredCert === cert.id ? 'var(--black)' : 'var(--gray-mid)', 
                        fontWeight: 700,
                        transition: 'color 0.2s'
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <div 
                        className="font-body" 
                        style={{ 
                          fontSize: '15px', 
                          fontWeight: 600, 
                          color: 'var(--black)', 
                          marginBottom: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>{cert.name}</span>
                        <CheckCircle2 size={13} strokeWidth={2.5} color="#22c55e" />
                      </div>
                      <div 
                        className="font-head" 
                        style={{ 
                          fontSize: '10px', 
                          color: 'var(--gray-text)', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}
                      >
                        {cert.issuer}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span 
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-head)',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          color: 'var(--gray-mid)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          backgroundColor: '#F3F3F1'
                        }}
                      >
                        {cert.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Side: eMudhra Hackathon Trophy Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hackathon-showcase-box" 
            style={{ 
              position: 'relative', 
              overflow: 'hidden', 
              padding: '44px 40px', 
              borderRadius: '24px', 
              border: '1.5px solid var(--border)', 
              backgroundColor: '#FFFFFF',
              boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
            }}
          >
            <BorderBeam size={180} duration={8} borderWidth={1.5} />
            
            {/* Hackathon Text & Meta */}
            <div className="achievement-text" style={{ position: 'relative', zIndex: 2, marginBottom: '28px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <span 
                  className="font-head" 
                  style={{ 
                    fontSize: '10px', 
                    fontWeight: 700, 
                    letterSpacing: '0.18em', 
                    color: '#ca8a04',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    backgroundColor: 'rgba(234, 179, 8, 0.1)',
                    border: '1px solid rgba(234, 179, 8, 0.3)'
                  }}
                >
                  <Trophy size={12} strokeWidth={2.5} />
                  PREMIER HACKATHON ACCOLADE
                </span>
              </div>
              
              <h3 
                className="font-hero" 
                style={{ 
                  fontSize: 'clamp(34px, 4.2vw, 52px)', 
                  letterSpacing: '0.02em', 
                  lineHeight: 1.05, 
                  color: 'var(--black)', 
                  marginBottom: '16px' 
                }}
              >
                <TextScramble triggerOnHover duration={600}>eMudhra National Hackathon</TextScramble>
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span className="font-body" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--black)' }}>
                  OptiPilot · 2nd Runner-Up
                </span>
                
                {/* Metallic Shimmering Gold Cash Prize Badge */}
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="prize-gold-badge font-head"
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 16px',
                    borderRadius: '100px',
                    background: 'linear-gradient(135deg, #111111 0%, #2a2a2a 100%)',
                    color: '#fef08a',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    border: '1px solid rgba(254, 240, 138, 0.4)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                  }}
                >
                  <Sparkles size={12} color="#fef08a" />
                  <TextScramble triggerOnHover duration={500}>₹50,000 CASH PRIZE</TextScramble>
                </motion.span>
              </div>
              
              <div 
                className="font-head" 
                style={{ 
                  fontSize: '11px', 
                  color: 'var(--gray-text)', 
                  letterSpacing: '0.1em', 
                  marginBottom: '20px', 
                  lineHeight: 1.6 
                }}
              >
                Team Innovativezzz · July 2026
              </div>
              
              <p 
                className="font-body" 
                style={{ 
                  fontSize: '15px', 
                  color: 'var(--gray-text)', 
                  lineHeight: 1.65, 
                  maxWidth: '480px' 
                }}
              >
                Secured 2nd Runner-Up along with a ₹50,000 cash prize at the prestigious eMudhra Hackathon with our project, OptiPilot — an AI-powered optimization engine for real-world enterprise workflows.
              </p>
            </div>

            {/* Interactive Photo with 3D Tilt, Sparkle Effects, and Smooth Levitation */}
            <div className="achievement-photos">
              <TiltCard dataCursor="EXPAND TROPHY" maxTilt={8}>
                <motion.div 
                  className="photo-primary" 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
                  onClick={() => setLightboxImage('/images/achievements/emudhra-hackathon-trophy.png')}
                  style={{ position: 'relative' }}
                >
                  {/* Floating Sparkle Elements */}
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    style={{ position: 'absolute', top: '10%', right: '15%', zIndex: 5, pointerEvents: 'none' }}
                  >
                    <Sparkles size={22} color="#eab308" />
                  </motion.div>
                  <motion.div 
                    animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.3, 0.9, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3.5, delay: 1, ease: 'easeInOut' }}
                    style={{ position: 'absolute', bottom: '25%', left: '10%', zIndex: 5, pointerEvents: 'none' }}
                  >
                    <Sparkles size={16} color="#eab308" />
                  </motion.div>

                  <img 
                    src="/images/achievements/emudhra-hackathon-trophy.png" 
                    alt="M. Naveenkumar holding the eMudhra Hackathon 2nd Runner-Up trophy" 
                    loading="lazy" 
                  />

                  {/* Expand Hint Pill */}
                  <div 
                    className="font-head"
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      backgroundColor: 'rgba(0,0,0,0.85)',
                      color: 'var(--white)',
                      fontSize: '9px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      backdropFilter: 'blur(6px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <ExternalLink size={10} />
                    <span>Click to Expand</span>
                  </div>
                </motion.div>
              </TiltCard>
            </div>

          </motion.div>

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
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
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
              <img src={lightboxImage} alt="Expanded eMudhra Hackathon Trophy" />
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
          .hackathon-showcase-box {
            grid-template-columns: 1fr !important;
          }
          .achievement-photos {
            justify-content: center !important;
          }
        }
        .achievement-grid {
          display: grid;
          grid-template-columns: 1.05fr 1.35fr;
          gap: 60px;
          align-items: start;
        }
        .hackathon-showcase-box {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 24px;
          align-items: center;
        }
        .achievement-photos {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .photo-primary {
          cursor: pointer;
          width: 100%;
          max-width: 290px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 18px 32px rgba(0, 0, 0, 0.12));
          transition: filter 0.4s ease;
        }
        .photo-primary:hover {
          filter: drop-shadow(0 26px 44px rgba(0, 0, 0, 0.2));
        }
        .photo-primary img {
          width: 100%;
          height: auto;
          max-height: 480px;
          object-fit: contain;
          display: block;
        }
        .lightbox-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(17, 17, 17, 0.88);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(12px);
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
          border-radius: 12px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.5);
        }
        .lightbox-close {
          position: absolute;
          top: -48px;
          right: 0;
          background: rgba(255,255,255,0.15);
          color: var(--white);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 100px;
          cursor: pointer;
          font-size: 11px;
          letter-spacing: 0.15em;
          padding: 8px 18px;
          transition: all 0.2s ease;
        }
        .lightbox-close:hover {
          background: var(--white);
          color: var(--black);
        }
      `}</style>
    </section>
  );
}

