import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';
import InteractiveMesh from './InteractiveMesh';
import TextScramble from './TextScramble';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax on scroll
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 100]);
  
  // Mouse position for kinetic depth
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, rawX: 0, rawY: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({ 
      x: (clientX / innerWidth - 0.5) * 24, 
      y: (clientY / innerHeight - 0.5) * 24,
      rawX: clientX,
      rawY: clientY,
    });
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const titleLettersContainer: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.038,
        delayChildren: 0.15,
      }
    }
  };

  const letterMaskVariant: Variants = {
    hidden: { y: '120%', opacity: 0 },
    show: { 
      y: '0%', 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 120, damping: 16, mass: 0.7 } 
    }
  };

  const nameContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.55,
      }
    }
  };

  const nameLetterMaskVariant: Variants = {
    hidden: { y: '120%', opacity: 0 },
    show: { 
      y: '0%', 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 130, damping: 18, mass: 0.65 } 
    }
  };

  const revealUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 20 }
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
        padding: '120px 48px 60px',
        position: 'relative',
        backgroundColor: 'transparent',
        overflow: 'hidden',
      }}
    >
      {/* Interactive 3D Topological Kinetic Wave */}
      <InteractiveMesh />

      {/* Ambient Mouse Radial Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(750px circle at ${mousePos.rawX || 600}px ${mousePos.rawY || 400}px, rgba(0, 0, 0, 0.025), transparent 70%)`,
          zIndex: 1,
          transition: 'background 0.12s ease-out'
        }}
      />

      {/* Architectural Framing Guidelines */}
      <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'var(--border)', opacity: 0.6, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: '48px', width: '1px', height: '100%', background: 'var(--border)', opacity: 0.6, pointerEvents: 'none' }} />

      <motion.div 
        className="max-w" 
        ref={containerRef} 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ 
          width: '100%', 
          maxWidth: '1360px', 
          margin: '0 auto', 
          position: 'relative', 
          zIndex: 10,
          y: yParallax
        }}
      >
        
        {/* Top Architectural Ribbon: Clean Status & Location */}
        <motion.div 
          variants={revealUp}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '42px',
            flexWrap: 'wrap',
            gap: '16px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '20px'
          }}
        >
          {/* Live Availability Status */}
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px',
              padding: '6px 16px',
              borderRadius: '100px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid var(--border)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
            }}
          >
            <span 
              style={{ 
                width: '7px', 
                height: '7px', 
                borderRadius: '50%', 
                backgroundColor: '#22c55e', 
                boxShadow: '0 0 10px #22c55e',
                display: 'inline-block' 
              }} 
            />
            <span 
              className="font-head" 
              style={{ 
                fontSize: '11px', 
                fontWeight: 700, 
                letterSpacing: '0.14em', 
                color: 'var(--black)',
                textTransform: 'uppercase' 
              }}
            >
              <TextScramble autoPlay duration={800}>AVAILABLE FOR ROLES &amp; AI INNOVATION</TextScramble>
            </span>
          </div>

          {/* Location & Academic Base */}
          <div 
            className="font-head hide-mobile"
            style={{ 
              fontSize: '11px', 
              fontWeight: 600, 
              letterSpacing: '0.16em', 
              color: 'var(--gray-text)',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <span>CHENNAI, INDIA</span>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span>SRM VALLIAMMAI</span>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ color: 'var(--black)', fontWeight: 700 }}>CLASS OF 2026</span>
          </div>
        </motion.div>

        {/* Centerpiece Hero Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
          
          {/* Pre-title Domain Tag */}
          <motion.div 
            variants={revealUp}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-head)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gray-text)',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} color="var(--black)" />
            <span>ARTIFICIAL INTELLIGENCE · DATA ARCHITECTURE · WEB PLATFORMS</span>
          </motion.div>

          {/* Primary Monumental Title: PORTFOLIO */}
          <motion.h1 
            variants={titleLettersContainer}
            className="hero-title" 
            style={{ 
              margin: 0, 
              color: 'var(--black)',
              position: 'relative',
              zIndex: 2,
              x: mousePos.x * -0.3,
              y: mousePos.y * -0.3,
              transition: 'transform 0.12s ease-out',
              userSelect: 'none',
              display: 'flex',
              justifyContent: 'center',
              lineHeight: 0.9,
            }}
          >
            {"PORTFOLIO".split("").map((letter, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  verticalAlign: 'bottom',
                  paddingBottom: '6px',
                }}
              >
                <motion.span
                  variants={letterMaskVariant}
                  style={{ display: 'inline-block', transformOrigin: 'bottom' }}
                  whileHover={{ 
                    y: -16, 
                    scale: 1.08,
                    color: '#000000',
                    transition: { type: 'spring', stiffness: 500, damping: 14 } 
                  }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </motion.h1>
          
          {/* Signature Name: M. NAVEENKUMAR */}
          <motion.div 
            variants={nameContainer} 
            style={{ 
              marginTop: '12px', 
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.h2 
              className="hero-name-classic" 
              style={{ 
                margin: 0,
                fontFamily: 'var(--font-hero)',
                fontSize: 'clamp(28px, 5vw, 68px)',
                lineHeight: 1,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--black)',
                fontWeight: 400,
                x: mousePos.x * -0.5,
                y: mousePos.y * -0.5,
                transition: 'transform 0.14s ease-out',
                userSelect: 'none',
                cursor: 'default',
                display: 'inline-flex',
                gap: '2px'
              }}
            >
              {"M. NAVEENKUMAR".split("").map((char, i) => (
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
                    whileHover={{ y: -6, color: '#333333', transition: { type: 'spring', stiffness: 400, damping: 12 } }}
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
          </motion.div>

          {/* Refined Narrative Subtitle */}
          <motion.p 
            variants={revealUp}
            className="font-body"
            style={{
              maxWidth: '680px',
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              lineHeight: 1.7,
              color: 'var(--gray-text)',
              marginTop: '24px',
              marginBottom: '0'
            }}
          >
            Undergraduate in Artificial Intelligence &amp; Data Science at SRM Valliammai (8.41 CGPA). Specializing in distributed Big Data processing pipelines, machine learning models, and modern high-performance web systems.
          </motion.p>
          
          {/* Interactive Magnetic Call To Actions */}
          <motion.div 
            variants={revealUp}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '18px', 
              marginTop: '38px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <Magnetic strength={0.35}>
              <motion.button 
                onClick={() => handleNavScroll('projects')}
                className="btn-filled"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  borderRadius: '100px', 
                  padding: '14px 34px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '11px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                }}
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown size={14} />
              </motion.button>
            </Magnetic>

            <Magnetic strength={0.35}>
              <motion.button 
                onClick={() => handleNavScroll('contact')}
                className="btn-outline"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  borderRadius: '100px', 
                  padding: '14px 34px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '11px',
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                }}
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={14} />
              </motion.button>
            </Magnetic>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
