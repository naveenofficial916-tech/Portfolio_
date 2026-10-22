import { useState, useRef, useEffect } from 'react';
import { projects } from '../data/portfolioData';
import { ArrowRight, X, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';

function ProjectCard({ 
  proj, 
  onSelect,
  isFeatured = false
}: { 
  proj: Project; 
  onSelect: (p: Project) => void;
  isFeatured?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || typeof window !== 'undefined' && window.innerWidth < 768) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const multiplier = 8;
    setRotateX(((y / height) - 0.5) * -multiplier);
    setRotateY(((x / width) - 0.5) * multiplier);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(proj)}
      animate={{ 
        rotateX, 
        rotateY,
        y: isHovered ? -8 : 0,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Image Thumbnail Container */}
      <div 
        style={{
          width: '100%',
          aspectRatio: '16/10',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#141414',
          border: isHovered ? '1px solid rgba(229, 9, 20, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isHovered 
            ? '0 24px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(229, 9, 20, 0.2)' 
            : '0 12px 30px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
          marginBottom: '20px'
        }}
      >
        <motion.img 
          src={proj.image} 
          alt={proj.title}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            filter: 'none',
            WebkitFilter: 'none',
            opacity: 1
          }}
          loading="lazy"
        />

        {/* Category Pill on top-right */}
        <div 
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'rgba(10, 10, 10, 0.85)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '100px',
            padding: '4px 12px',
            fontSize: '10px',
            fontFamily: 'var(--font-head)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FFFFFF'
          }}
        >
          {proj.category.split('·')[0].trim()}
        </div>
      </div>

      {/* Card Info Section (Matching Reference: Red Number + Title + Subtitle + Arrow) */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
          {/* Red Number: 01, 02, etc. */}
          <span 
            style={{ 
              fontFamily: 'var(--font-hero)', 
              fontSize: '24px', 
              color: '#E50914', 
              lineHeight: 1,
              letterSpacing: '0.04em'
            }}
          >
            {proj.number}
          </span>

          <div>
            {/* Title */}
            <h3 
              style={{ 
                fontFamily: 'var(--font-hero)', 
                fontSize: 'clamp(18px, 1.8vw, 24px)', 
                lineHeight: 1.1,
                color: isHovered ? '#FFFFFF' : '#F0F0F0',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                margin: '0 0 6px 0',
                transition: 'color 0.25s'
              }}
            >
              {proj.title}
            </h3>

            {/* Subtitle / Category */}
            <p 
              style={{ 
                fontFamily: 'var(--font-head)', 
                fontSize: '11px', 
                color: '#888888', 
                letterSpacing: '0.1em', 
                textTransform: 'uppercase',
                margin: '0 0 12px 0'
              }}
            >
              {proj.category}
            </p>

            {/* Short Description */}
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                lineHeight: 1.6,
                color: '#A0A0A0',
                margin: '0 0 16px 0',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {proj.description}
            </p>

            {/* Tech Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {proj.technologies.slice(0, 4).map(tech => (
                <span 
                  key={tech}
                  style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-head)',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#CCCCCC',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    padding: '2px 8px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Arrow Button */}
        <motion.div
          animate={{ 
            x: isHovered ? 4 : 0, 
            color: isHovered ? '#E50914' : '#888888' 
          }}
          transition={{ duration: 0.25 }}
          style={{ paddingTop: '4px' }}
        >
          <ArrowRight size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

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

  // Primary 3 reference projects
  const primaryProjects = projects.slice(0, 3);
  // Other existing projects preserved
  const secondaryProjects = projects.slice(3);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      style={{ 
        backgroundColor: '#0A0A0A', 
        padding: '120px 36px', 
        position: 'relative',
        color: '#FFFFFF',
        borderBottom: '1px solid #1A1A1A'
      }}
    >
      <div className="max-w">

        {/* Section Header Row (Matching Reference: 'SELECTED PROJECTS' ──── 'VIEW ALL PROJECTS →') */}
        <div 
          className="reveal"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '60px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 auto' }}>
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
              SELECTED PROJECTS
            </h2>

            {/* Horizontal Line stretching across */}
            <div 
              style={{ 
                flex: 1, 
                height: '1px', 
                background: 'linear-gradient(90deg, rgba(229, 9, 20, 0.6) 0%, rgba(255, 255, 255, 0.08) 100%)' 
              }} 
            />
          </div>

          {/* Right Action: Toggle View All Projects */}
          <button
            onClick={() => setShowAll(prev => !prev)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-head)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: showAll ? '#E50914' : '#A0A0A0',
              padding: '6px 12px',
              borderRadius: '4px',
              transition: 'color 0.25s',
              whiteSpace: 'nowrap'
            }}
          >
            <span>{showAll ? 'SHOW PRIORITY ONLY' : 'VIEW ALL PROJECTS'}</span>
            <ArrowRight size={14} color={showAll ? '#E50914' : '#A0A0A0'} />
          </button>
        </div>

        {/* Priority 3 Cards Grid (Matching Reference horizontal 3-card layout) */}
        <div 
          className="reveal"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '36px',
            marginBottom: secondaryProjects.length > 0 && showAll ? '60px' : '0'
          }}
        >
          {primaryProjects.map((proj) => (
            <ProjectCard 
              key={proj.id} 
              proj={proj} 
              onSelect={setSelectedProject}
              isFeatured={true}
            />
          ))}
        </div>

        {/* Expanded Projects Drawer (Preserving Academic and UI/UX projects) */}
        <AnimatePresence>
          {showAll && secondaryProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden', marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
            >
              <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#E50914' }}>✦</span>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D1D1D1' }}>
                  MORE ARCHIVAL &amp; ACADEMIC WORK
                </span>
              </div>

              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                  gap: '36px' 
                }}
              >
                {secondaryProjects.map((proj) => (
                  <ProjectCard 
                    key={proj.id} 
                    proj={proj} 
                    onSelect={setSelectedProject} 
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(5, 5, 5, 0.88)',
              backdropFilter: 'blur(16px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '850px',
                maxHeight: '90vh',
                overflowY: 'auto',
                backgroundColor: '#141414',
                border: '1.5px solid rgba(229, 9, 20, 0.45)',
                borderRadius: '16px',
                padding: '36px',
                position: 'relative',
                boxShadow: '0 30px 90px rgba(0, 0, 0, 0.9), 0 0 40px rgba(229, 9, 20, 0.2)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#FFFFFF'
                }}
              >
                <X size={18} />
              </button>

              {/* Modal Image */}
              <div 
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '28px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'none', opacity: 1 }}
                />
              </div>

              {/* Modal Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-hero)', fontSize: '24px', color: '#E50914' }}>
                  PROJECT {selectedProject.number}
                </span>
                <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: '#A0A0A0', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {selectedProject.date}
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(28px, 4vw, 42px)', textTransform: 'uppercase', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1 }}>
                {selectedProject.title}
              </h2>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75, color: '#C5C5C5', marginBottom: '24px' }}>
                {selectedProject.fullDescription}
              </p>

              {/* Key Features */}
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E50914', marginBottom: '12px' }}>
                  KEY ARCHITECTURAL HIGHLIGHTS
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedProject.keyFeatures.map((kf, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '13px', color: '#A8A8A8', lineHeight: 1.6 }}>
                      <span style={{ color: '#E50914', fontSize: '12px' }}>✦</span>
                      <span>{kf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {selectedProject.technologies.map(t => (
                  <span 
                    key={t}
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-head)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#FFFFFF',
                      backgroundColor: 'rgba(229, 9, 20, 0.1)',
                      border: '1px solid rgba(229, 9, 20, 0.35)',
                      borderRadius: '100px',
                      padding: '4px 14px'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-filled"
                  style={{ display: 'inline-flex', textDecoration: 'none' }}
                >
                  <span>VIEW REPOSITORY ON GITHUB</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
