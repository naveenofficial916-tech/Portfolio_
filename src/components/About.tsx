import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Check, Copy, ArrowUpRight } from 'lucide-react';
import KineticHeading from './KineticHeading';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('naveenofficial916@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      style={{ 
        padding: '110px 48px', 
        backgroundColor: 'transparent', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 0, 0, 0.02) 0%, transparent 70%)',
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
          style={{ marginBottom: '28px' }}
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
            <Sparkles size={14} />
            <span>01 / The Person Behind The Architecture</span>
          </div>
        </motion.div>
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '56px',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          
          {/* Left: Pure Transparent Portrait Cutout Given Equal 50% Space (No background box) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              position: 'relative', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              width: '100%',
            }}
          >
            <motion.img 
              src="/images/naveen_portrait.png" 
              alt="M. Naveenkumar" 
              className="about-portrait-img"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              style={{ 
                width: '100%', 
                maxWidth: '620px',
                height: 'auto', 
                objectFit: 'contain',
                display: 'block',
                background: 'transparent',
                backgroundColor: 'transparent',
                filter: 'drop-shadow(0 22px 40px rgba(0,0,0,0.1))',
                userSelect: 'none',
              }}
            />
          </motion.div>

          {/* Right: Content & Architectural Highlights that Fill the Vertical Gap */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <KineticHeading 
              className="section-heading" 
              style={{ 
                fontSize: 'clamp(46px, 6.5vw, 76px)', 
                marginBottom: '8px', 
                letterSpacing: '-0.02em',
                lineHeight: 1.05
              }}
            >
              ABOUT ME
            </KineticHeading>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '20px' }}>
              <p className="font-script" style={{ 
                fontSize: 'clamp(28px, 4vw, 40px)', 
                color: 'var(--gray-text)',
                margin: 0
              }}>
                The person behind the work
              </p>
            </div>
            
            <p className="font-body" style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--black)', marginBottom: '16px', maxWidth: '640px' }}>
              I am an Artificial Intelligence and Data Science undergraduate at SRM Valliammai Engineering College with a drive for connecting deep analytical intelligence with intuitive visual interfaces. From processing big datasets with PySpark to architecting modern web platforms in React and TypeScript, I focus on building functional digital products that solve genuine real-world problems.
            </p>

            <p className="font-body" style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--gray-text)', marginBottom: '28px', maxWidth: '640px' }}>
              My engineering approach bridges machine learning systems, distributed cloud computing, and precision UI/UX design. Having developed real-time disease classification models, restructured legacy codebases using Databricks and PySpark, and competed as an eMudhra Cyber Security Hackathon Finalist, I strive to create software that is performant, scalable, and beautifully crafted.
            </p>

            {/* Balanced Metadata Highlights that seamlessly fill the vertical space */}
            <div 
              className="about-meta-grid"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '20px', 
                padding: '20px 0',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                marginBottom: '28px' 
              }}
            >
              <div>
                <span className="font-head" style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.16em', color: 'var(--gray-mid)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  INSTITUTION
                </span>
                <span className="font-head" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--black)', display: 'block', lineHeight: 1.3 }}>
                  SRM Valliammai
                </span>
                <span className="font-body" style={{ fontSize: '12px', color: 'var(--gray-text)' }}>
                  B.Tech AI &amp; DS · 8.41 CGPA
                </span>
              </div>

              <div>
                <span className="font-head" style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.16em', color: 'var(--gray-mid)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  EXPERTISE
                </span>
                <span className="font-head" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--black)', display: 'block', lineHeight: 1.3 }}>
                  AI &amp; Big Data
                </span>
                <span className="font-body" style={{ fontSize: '12px', color: 'var(--gray-text)' }}>
                  PySpark · React · ML · SQL
                </span>
              </div>

              <div>
                <span className="font-head" style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.16em', color: 'var(--gray-mid)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  LOCATION &amp; ROLE
                </span>
                <span className="font-head" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--black)', display: 'block', lineHeight: 1.3 }}>
                  Chennai, India
                </span>
                <span className="font-body" style={{ fontSize: '12px', color: '#16a34a', fontWeight: 600 }}>
                  ● Open for Roles
                </span>
              </div>
            </div>

            {/* Direct Reach Bar */}
            <div>
              <div className="font-head" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-mid)', marginBottom: '14px' }}>
                DIRECT REACH
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                {/* One-Click Copy Email Pill */}
                <motion.button
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '100px',
                    backgroundColor: copied ? '#22c55e' : 'var(--black)',
                    color: 'var(--white)',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-head)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                    transition: 'background-color 0.25s ease'
                  }}
                >
                  {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                </motion.button>

                {/* LinkedIn Quick Link */}
                <motion.a 
                  href="https://linkedin.com/in/naveen-kumar-4858063a1" 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    borderRadius: '100px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border)',
                    color: 'var(--black)',
                    fontFamily: 'var(--font-head)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </motion.a>

                {/* GitHub Quick Link */}
                <motion.a 
                  href="https://github.com/naveenofficial916-tech" 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    borderRadius: '100px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border)',
                    color: 'var(--black)',
                    fontFamily: 'var(--font-head)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </motion.a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid { 
            grid-template-columns: 1fr !important; 
            gap: 48px !important; 
          }
        }
        @media (max-width: 640px) {
          .about-meta-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

