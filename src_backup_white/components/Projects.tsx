import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

function ProjectImageCard({ image, title, isEager }: { image: string; title: string; isEager: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const multiplier = 12; // subtle, elegant 3D tilt
    const rX = ((y / height) - 0.5) * -multiplier;
    const rY = ((x / width) - 0.5) * multiplier;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        rotateX, 
        rotateY,
        y: isHovered ? -6 : 0,
      }}
      transition={{ type: 'spring', stiffness: 240, damping: 22, mass: 0.5 }}
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
          boxShadow: isHovered ? '0 28px 60px rgba(0,0,0,0.1)' : '0 16px 40px rgba(0,0,0,0.05)',
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
            scale: isHovered ? 1.05 : 1,
            filter: isHovered ? 'grayscale(0%) contrast(100%)' : 'grayscale(85%) contrast(102%)',
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          loading={isEager ? "eager" : "lazy"}
        />
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
    <section id="projects" ref={sectionRef} style={{ backgroundColor: 'var(--white)', padding: '90px 0', position: 'relative' }}>
      
      <div className="max-w reveal" style={{ padding: '0 48px', marginBottom: '80px' }}>
        <div className="section-label">04 / Projects</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '140px' }}>
        {projects.map((proj, i) => {
          const isImageLeft = i % 2 !== 0;

          return (
            <div key={proj.id} className="project-block reveal" style={{ backgroundColor: 'var(--white)', padding: '0 48px', border: 'none' }}>
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
                    {proj.title}
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
