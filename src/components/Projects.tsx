import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import KineticHeading from './KineticHeading';
import TextScramble from './TextScramble';

function ProjectImageCard({ image, title, isEager }: { image: string; title: string; isEager: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsTouchOrReduced(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchOrReduced || !cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const multiplier = 8; // restrained, subtle 3D tilt
    const rX = ((y / height) - 0.5) * -multiplier;
    const rY = ((x / width) - 0.5) * multiplier;
    setRotateX(rX);
    setRotateY(rY);
    setGlare({
      x: (x / width) * 100,
      y: (y / height) * 100,
      opacity: 0.12,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      data-cursor="VIEW PROJECT"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={isTouchOrReduced ? {} : { 
        rotateX, 
        rotateY,
        y: isHovered ? -5 : 0,
      }}
      transition={{ type: 'spring', stiffness: 220, damping: 20, mass: 0.4 }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        width: '100%',
        cursor: 'pointer',
      }}
    >
      <div 
        className="proj-img-container" 
        style={{ 
          width: '100%', 
          height: 'auto',
          aspectRatio: '16/11',
          borderRadius: '16px',
          boxShadow: isHovered ? '0 28px 60px rgba(0,0,0,0.08)' : '0 16px 40px rgba(0,0,0,0.04)',
          border: '1.5px solid var(--border)',
          overflow: 'hidden',
          backgroundColor: '#F5F5F3',
          padding: 0,
          position: 'relative',
          transition: 'box-shadow 0.6s ease',
        }}
      >
        <motion.img 
          src={image} 
          alt={title}
          className="proj-img" 
          animate={{
            scale: isHovered ? 1.04 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          loading={isEager ? "eager" : "lazy"}
        />

        {/* Specular glare sheen */}
        {!isTouchOrReduced && (
          <>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity * 1.5}) 0%, transparent 65%)`,
                pointerEvents: 'none',
                transition: 'opacity 0.3s ease',
                borderRadius: '16px',
                zIndex: 10,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(${120 + rotateY * 8}deg, rgba(255,255,255,0.4) 0%, rgba(200,230,255,0.18) 30%, rgba(255,220,245,0.18) 60%, transparent 100%)`,
                opacity: isHovered ? 0.35 : 0,
                transition: 'opacity 0.4s ease',
                mixBlendMode: 'color-dodge',
                pointerEvents: 'none',
                borderRadius: '16px',
                zIndex: 11,
              }}
            />
          </>
        )}

        {/* Centered Floating Glass Action Pill on Hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            scale: isHovered ? 1 : 0.85,
            y: isHovered ? 0 : 10
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            padding: '10px 22px',
            borderRadius: '100px',
            backgroundColor: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.14)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'none',
            zIndex: 12,
          }}
        >
          <span className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--black)' }}>
            EXPLORE CASE STUDY
          </span>
          <span style={{ fontSize: '13px', transform: 'rotate(-45deg)' }}>→</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="projects" ref={sectionRef} style={{ backgroundColor: 'transparent', padding: '90px 0', position: 'relative' }}>
      
      <div className="max-w reveal" style={{ padding: '0 48px', marginBottom: '80px' }}>
        <div className="section-label">04 / Projects</div>
        <KineticHeading className="font-hero" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '0.02em', lineHeight: 1, color: 'var(--black)', marginTop: '8px' }}>
          FEATURED PROJECTS
        </KineticHeading>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '140px' }}>
        {projects.map((proj, i) => {
          const isImageLeft = i % 2 !== 0;

          return (
            <div key={proj.id} className="project-block reveal" style={{ backgroundColor: 'transparent', padding: '0 48px', border: 'none' }}>
              <div className="max-w" style={{ 
                display: 'flex', 
                flexDirection: isImageLeft ? 'row-reverse' : 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '80px',
                flexWrap: 'wrap'
              }}>
                
                {/* Text Info */}
                <div style={{ flex: '1 1 500px', maxWidth: '600px', display: 'flex', flexDirection: 'column' }}>
                  <div className="font-head proj-num" style={{ fontSize: '11px', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.18em' }}>
                    PROJECT {proj.number}
                  </div>
                  
                  <motion.h3 
                    className="font-hero proj-title" 
                    whileHover={{ x: 6 }}
                    style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '0.02em', lineHeight: 0.95, marginBottom: '24px', cursor: 'default' }}
                  >
                    <TextScramble triggerOnHover duration={500}>
                      {proj.title}
                    </TextScramble>
                  </motion.h3>
                  
                  <div className="font-head" style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gray-text)', marginBottom: '28px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {proj.date}
                  </div>
                  
                  <p className="font-body" style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '36px' }}>
                    {proj.description}
                  </p>
                  
                  <div style={{ marginBottom: '40px' }}>
                    <div className="font-head" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gray-mid)', marginBottom: '14px' }}>
                      TECHNOLOGIES
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {proj.technologies.map(tech => (
                        <motion.span 
                          key={tech} 
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="font-head" 
                          style={{ 
                            fontSize: '11px', 
                            letterSpacing: '0.06em', 
                            color: 'var(--black)',
                            border: '1px solid var(--border)',
                            borderRadius: '100px',
                            padding: '4px 12px',
                            backgroundColor: '#FAFAF8',
                            cursor: 'default'
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {proj.github && (
                    <Magnetic strength={0.3}>
                      <motion.a 
                        href={proj.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '12px', 
                          color: 'var(--black)', 
                          textDecoration: 'none', 
                          border: '1.5px solid var(--black)',
                          borderRadius: '100px',
                          padding: '12px 26px',
                          backgroundColor: 'var(--white)',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
                        }}
                      >
                        <span className="font-head" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                          VIEW REPOSITORY
                        </span>
                        <ArrowRight size={16} strokeWidth={2} className="proj-arrow" />
                      </motion.a>
                    </Magnetic>
                  )}
                </div>

                {/* 3D Interactive Project Image */}
                <div className="proj-img-wrap" style={{ 
                  flex: '1 1 400px', 
                  maxWidth: '480px', 
                  width: '100%' 
                }}>
                  <ProjectImageCard image={proj.image} title={proj.title} isEager={i === 0} />
                </div>

              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .project-block:hover .proj-arrow {
          transform: translateX(4px);
        }
        @media (max-width: 900px) {
          .proj-img-wrap {
            max-width: 95% !important;
            margin: 0 auto;
          }
          #projects > div:nth-child(2) > div > div {
            flex-direction: column-reverse !important;
            text-align: left;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
