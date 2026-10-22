import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax on scroll
  const { scrollY } = useScroll();
  const yBgText = useTransform(scrollY, [0, 800], [0, 100]);
  const yPortrait = useTransform(scrollY, [0, 800], [0, -40]);
  
  // Mouse movement for 3D depth tilt
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({ 
      x: (clientX / innerWidth - 0.5) * 20, 
      y: (clientY / innerHeight - 0.5) * 20 
    });
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const revealUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 90, damping: 18 } 
    }
  };

  const handleNavScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.classList.add('section-target-highlight');
      setTimeout(() => el.classList.remove('section-target-highlight'), 1200);
      window.history.pushState({}, '', `#${targetId}`);
    }
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 36px 60px',
        position: 'relative',
        backgroundColor: '#0A0A0A',
        overflow: 'hidden',
        color: '#FFFFFF'
      }}
    >
      {/* Background Ambient Crimson Spotlight Glows */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.22) 0%, rgba(139, 0, 0, 0.08) 50%, transparent 80%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div 
        className="max-w" 
        ref={containerRef} 
        style={{ width: '100%', position: 'relative', zIndex: 10 }}
      >
        
        {/* Top Editorial Label Bar (Like Reference Header) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '30px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ 
              fontFamily: 'var(--font-head)', 
              fontSize: '11px', 
              fontWeight: 700, 
              letterSpacing: '0.18em', 
              textTransform: 'uppercase',
              color: '#D1D1D1'
            }}>
              DATA SCIENTIST &amp; DIGITAL CREATOR
            </span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ 
              fontFamily: 'var(--font-head)', 
              fontSize: '11px', 
              fontWeight: 700, 
              letterSpacing: '0.16em', 
              textTransform: 'uppercase',
              color: '#E50914'
            }}>
              OPEN TO OPPORTUNITIES
            </span>
            <span style={{ color: '#E50914', fontSize: '13px' }}>✦</span>
          </div>
        </motion.div>

        {/* Hero Main Stage: Background Giant 'PORTFOLIO' + Portrait + Left & Right Overlays */}
        <div style={{ position: 'relative', minHeight: '620px', display: 'flex', alignItems: 'center' }}>
          
          {/* Giant Background Word: PORTFOLIO (in Bold Crimson Typography matching reference) */}
          <motion.div
            style={{
              y: yBgText,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              textAlign: 'center',
              zIndex: 1,
              userSelect: 'none',
              pointerEvents: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1 
              className="hero-giant-bg"
              style={{
                margin: 0,
                width: '100%',
                letterSpacing: '-0.02em',
                color: '#E50914',
                opacity: 0.92,
                transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`,
                transition: 'transform 0.15s ease-out'
              }}
            >
              PORTFOLIO
            </h1>
          </motion.div>

          {/* Centered/Mid Foreground Portrait of Naveen */}
          <motion.div
            style={{
              y: yPortrait,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 3,
              width: 'clamp(280px, 36vw, 460px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: 'none'
            }}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              style={{
                width: '100%',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid rgba(229, 9, 20, 0.45)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.85), 0 0 50px rgba(229, 9, 20, 0.25)',
                backgroundColor: '#121212',
                transform: `rotateY(${mousePos.x * 0.4}deg) rotateX(${mousePos.y * -0.4}deg)`,
                transition: 'transform 0.2s ease-out',
                pointerEvents: 'auto'
              }}
            >
              <img 
                src="/images/naveen_portrait.jpg" 
                alt="M. Naveenkumar" 
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '1/1.18',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'none',
                  opacity: 1
                }}
              />
              {/* Subtle Dark Gradient at bottom of frame for seamless depth integration */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '35%',
                  background: 'linear-gradient(to top, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.2) 60%, transparent 100%)',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </motion.div>

          {/* Left Side Content: 'Hello, I'm' + 'NAVEEN KUMAR' + Headline + Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            style={{
              position: 'relative',
              zIndex: 4,
              maxWidth: '460px',
              display: 'flex',
              flexDirection: 'column',
              pointerEvents: 'auto'
            }}
          >
            {/* Script Accent: Hello, I'm */}
            <motion.div variants={revealUp} style={{ marginBottom: '4px' }}>
              <span className="script-accent" style={{ color: '#E50914' }}>
                Hello, I'm
              </span>
            </motion.div>

            {/* Oversized Condensed White Name */}
            <motion.h2 
              variants={revealUp}
              className="hero-name-classic"
              style={{
                margin: 0,
                color: '#FFFFFF',
                lineHeight: 0.88,
                marginBottom: '16px'
              }}
            >
              NAVEEN<br />KUMAR
            </motion.h2>

            {/* Crimson Headline */}
            <motion.div 
              variants={revealUp}
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: 'clamp(12px, 1.3vw, 15px)',
                fontWeight: 700,
                color: '#E50914',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>AI &amp; DATA SCIENCE</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <span>DATA ANALYTICS</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <span>UI/UX DESIGN</span>
            </motion.div>

            {/* Short Professional Introduction */}
            <motion.p 
              variants={revealUp}
              className="font-body"
              style={{
                fontSize: '14px',
                lineHeight: 1.75,
                color: '#A8A8A8',
                marginBottom: '28px',
                maxWidth: '400px'
              }}
            >
              I analyze complex datasets and build user-focused digital experiences that combine analytical rigor with intuitive strategy. Passionate about clean architectures, intelligent systems, and details that make a difference.
            </motion.p>

            {/* Location & Career Focus Label */}
            <motion.div 
              variants={revealUp}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '32px'
              }}
            >
              <span style={{ 
                fontFamily: 'var(--font-head)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#D1D1D1',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{ color: '#E50914' }}>✦</span>
                CHENNAI, INDIA · SRM INSTITUTE OF SCIENCE &amp; TECH
              </span>
            </motion.div>

            {/* Interactive CTAs */}
            <motion.div 
              variants={revealUp}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <Magnetic strength={0.3}>
                <button 
                  onClick={() => handleNavScroll('projects')}
                  className="btn-filled"
                >
                  <span>VIEW PROJECTS</span>
                  <span style={{ fontSize: '13px' }}>↓</span>
                </button>
              </Magnetic>

              <Magnetic strength={0.3}>
                <button 
                  onClick={() => handleNavScroll('contact')}
                  className="btn-outline"
                >
                  <span>GET IN TOUCH</span>
                  <span className="btn-arrow">→</span>
                </button>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right Side Content: Quote & Verified Stat Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="hide-mobile"
            style={{
              position: 'relative',
              zIndex: 4,
              marginLeft: 'auto',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '40px',
              pointerEvents: 'auto'
            }}
          >
            {/* Top Right Quote */}
            <motion.div 
              variants={revealUp}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}
            >
              <span style={{ color: '#E50914', fontSize: '16px', marginTop: '2px' }}>✦</span>
              <p 
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: '#D1D1D1',
                  margin: 0
                }}
              >
                Turning ideas into powerful digital experiences.
              </p>
            </motion.div>

            {/* Verified Authentic Highlights (No Invented Numbers) */}
            <motion.div 
              variants={revealUp}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                width: '100%',
                paddingLeft: '16px',
                borderLeft: '1px solid rgba(229, 9, 20, 0.4)'
              }}
            >
              {/* Highlight 1: Hackathon */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-hero)', fontSize: '38px', color: '#E50914', lineHeight: 1 }}>
                    2ND
                  </span>
                  <span style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    RUNNER-UP
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: '#888888', marginTop: '4px' }}>
                  eMudhra National Hackathon 2024
                </div>
              </div>

              {/* Highlight 2: Certifications */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-hero)', fontSize: '38px', color: '#FFFFFF', lineHeight: 1 }}>
                    8+
                  </span>
                  <span style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: '#E50914', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    CREDENTIALS
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: '#888888', marginTop: '4px' }}>
                  Google Cloud · AWS · IBM · TATA
                </div>
              </div>

              {/* Highlight 3: Degree */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-hero)', fontSize: '38px', color: '#FFFFFF', lineHeight: 1 }}>
                    2026
                  </span>
                  <span style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: '#D1D1D1', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    B.TECH GRAD
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: '#888888', marginTop: '4px' }}>
                  Artificial Intelligence &amp; Data Science
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Subtle Red Divider */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(229, 9, 20, 0.4) 50%, transparent 100%)'
        }}
      />
    </section>
  );
}
