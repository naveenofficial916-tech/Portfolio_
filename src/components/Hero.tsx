import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import Magnetic from './Magnetic';
import InteractiveMesh from './InteractiveMesh';
import TextScramble from './TextScramble';
import BorderBeam from './BorderBeam';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax on scroll
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 180]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -140]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 90]);
  
  // Mouse movement for dynamic 3D tilt/depth
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({ 
      x: (clientX / innerWidth - 0.5) * 36, 
      y: (clientY / innerHeight - 0.5) * 36 
    });
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const titleLettersContainer: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.15,
      }
    }
  };

  const letterMaskVariant: Variants = {
    hidden: { y: '115%', opacity: 0 },
    show: { 
      y: '0%', 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 120, damping: 16, mass: 0.75 } 
    }
  };

  const nameContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.68,
      }
    }
  };

  const nameLetterMaskVariant: Variants = {
    hidden: { y: '120%', opacity: 0 },
    show: { 
      y: '0%', 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 130, damping: 18, mass: 0.7 } 
    }
  };

  const revealRole: Variants = {
    hidden: { opacity: 0, x: -16 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const revealButtons: Variants = {
    hidden: { opacity: 0, y: 35 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 120, damping: 18, delay: 1.25 } 
    }
  };

  const revealUp: Variants = {
    hidden: { opacity: 0, y: 35 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const revealLine: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: { scaleX: 1, opacity: 1, transition: { duration: 1.1, delay: 0.05, ease: [0.16, 1, 0.3, 1] } }
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
        alignItems: 'center',
        padding: '130px 48px 70px',
        position: 'relative',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        perspective: '1000px'
      }}
    >
      {/* Interactive 3D Topological Kinetic Wave */}
      <InteractiveMesh />

      {/* Background Editorial Architectural Lines */}
      <motion.div style={{ y: y1, position: 'absolute', top: '5%', left: '5%', width: '1px', height: '110%', background: 'var(--border)' }} />
      <motion.div style={{ y: y2, position: 'absolute', top: '10%', right: '5%', width: '1px', height: '110%', background: 'var(--border)' }} />
      <div style={{ position: 'absolute', bottom: '8%', left: 0, width: '100%', height: '1px', background: 'var(--border)' }} />

      <motion.div 
        className="max-w" 
        ref={containerRef} 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ width: '100%', position: 'relative', zIndex: 10 }}
      >
        
        {/* Top Editorial Status Row with Travelling Border Beam */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', marginBottom: '36px' }}>
          <motion.div variants={revealLine} style={{ height: '1px', background: 'var(--border)', transformOrigin: 'right' }} />
          <motion.div 
            variants={revealUp} 
            className="font-head" 
            style={{ 
              padding: '8px 26px', 
              fontSize: '11px', 
              letterSpacing: '0.22em', 
              textTransform: 'uppercase', 
              color: 'var(--black)', 
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '100px',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
            }}
          >
            <BorderBeam size={90} duration={6} />
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
            <TextScramble autoPlay duration={800}>M. NAVEENKUMAR — AI & DATA SCIENCE</TextScramble>
          </motion.div>
          <motion.div variants={revealLine} style={{ height: '1px', background: 'var(--border)', transformOrigin: 'left' }} />
        </div>

        {/* Center Title Block */}
        <motion.div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          
          {/* Subtle Grid Dots */}
          <motion.div variants={revealUp} className="hide-mobile" style={{ position: 'absolute', top: '-16px', left: '12%', display: 'flex', gap: '5px' }}>
            {['●','●','●','●','●'].map((d, i) => <span key={i} style={{ fontSize: '4px', color: 'var(--gray-soft)' }}>{d}</span>)}
          </motion.div>

          {/* Primary Big PORTFOLIO Heading with Kinetic Letter Hover */}
          <motion.h1 
            variants={titleLettersContainer}
            className="hero-title" 
            style={{ 
              margin: 0, 
              color: 'var(--black)',
              position: 'relative',
              zIndex: 2,
              x: mousePos.x * -0.4,
              y: mousePos.y * -0.4,
              transition: 'transform 0.1s ease-out',
              userSelect: 'none',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {"PORTFOLIO".split("").map((letter, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  verticalAlign: 'bottom',
                  paddingBottom: '4px',
                }}
              >
                <motion.span
                  variants={letterMaskVariant}
                  style={{ display: 'inline-block', transformOrigin: 'bottom' }}
                  whileHover={{ 
                    y: -18, 
                    scale: 1.12,
                    color: '#222222',
                    transition: { type: 'spring', stiffness: 500, damping: 14 } 
                  }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </motion.h1>
          
          {/* Classic Name under PORTFOLIO: NAVEEN KUMAR */}
          <motion.div 
            variants={nameContainer} 
            style={{ 
              marginTop: '8px', 
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap'
            }}
          >
            <motion.h2 
              className="hero-name-classic" 
              style={{ 
                margin: 0,
                fontFamily: 'var(--font-hero)',
                fontSize: 'clamp(24px, 4.2vw, 60px)',
                lineHeight: 1,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--black)',
                fontWeight: 400,
                x: mousePos.x * -0.6,
                y: mousePos.y * -0.6,
                transition: 'transform 0.12s ease-out',
                userSelect: 'none',
                cursor: 'default',
                display: 'inline-flex',
                gap: '2px'
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {"NAVEEN KUMAR".split("").map((char, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    verticalAlign: 'bottom',
                    paddingBottom: '2px',
                  }}
                >
                  <motion.span
                    variants={nameLetterMaskVariant}
                    style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                    whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 12 } }}
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </motion.h2>

            <motion.div 
              className="hide-mobile"
              variants={revealRole}
              style={{ 
                borderLeft: '2px solid var(--black)',
                paddingLeft: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
              }}
            >
              <span className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--black)', textTransform: 'uppercase' }}>
                AI &amp; DATA SCIENCE
              </span>
              <span className="font-head" style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', color: 'var(--gray-text)', textTransform: 'uppercase' }}>
                DATA ANALYST · UI/UX DESIGNER
              </span>
            </motion.div>
          </motion.div>
          
          {/* Interactive Magnetic CTAs */}
          <motion.div 
            variants={revealButtons}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '24px', 
              marginTop: '52px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <Magnetic strength={0.35}>
              <motion.button 
                onClick={() => handleNavScroll('projects')}
                className="btn-filled"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.94 }}
                style={{ 
                  borderRadius: '100px', 
                  padding: '14px 36px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '11px',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.14)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span>EXPLORE PROJECTS</span>
                <motion.span 
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ fontSize: '14px' }}
                >
                  ↓
                </motion.span>
              </motion.button>
            </Magnetic>

            <Magnetic strength={0.35}>
              <motion.button 
                onClick={() => handleNavScroll('contact')}
                className="btn-outline"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.94 }}
                style={{ 
                  borderRadius: '100px', 
                  padding: '14px 36px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '11px',
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span>GET IN TOUCH</span>
                <motion.span 
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ fontSize: '14px' }}
                >
                  →
                </motion.span>
              </motion.button>
            </Magnetic>
          </motion.div>

          {/* Bottom Year Indicator */}
          <motion.div variants={revealUp} style={{ display: 'flex', alignItems: 'center', gap: '28px', marginTop: '54px', alignSelf: 'flex-start', marginLeft: '5%' }}>
            <span className="font-head" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gray-mid)' }}>
              2026 EDITION
            </span>
            <motion.div variants={revealLine} style={{ width: '60px', height: '1px', background: 'var(--black)' }} />
          </motion.div>

        </motion.div>

      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
        className="hide-mobile" 
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '5%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
          zIndex: 10
        }}
      >
        <span style={{
          fontFamily: 'var(--font-head)',
          fontSize: '9px',
          fontWeight: 700,
          letterSpacing: '0.25em',
          color: 'var(--gray-text)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)'
        }}>
          SCROLL TO EXPLORE
        </span>
        <motion.div 
          animate={{ height: ['0px', '36px', '0px'], y: [0, 0, 36] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', background: 'var(--black)' }} 
        />
      </motion.div>
      
      {/* Decorative large watermark number */}
      <motion.div 
        className="hide-mobile font-hero" 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.4, ease: 'easeOut' }}
        style={{
          y: y3,
          position: 'absolute',
          top: '8%',
          right: '5%',
          fontSize: 'clamp(200px, 24vw, 400px)',
          color: 'var(--gray-soft)',
          lineHeight: 0.8,
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        00
      </motion.div>

      <style>{`
        .floating-tech-badge {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .floating-tech-badge:hover {
          border-color: var(--black) !important;
          box-shadow: 0 12px 32px rgba(0,0,0,0.12) !important;
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
