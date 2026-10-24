import { useRef } from 'react';
import { ArrowUpRight, Sparkles, CheckCircle, Zap, ShieldCheck, Laptop, Layers } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import TiltCard from './TiltCard';
import KineticHeading from './KineticHeading';
import BorderBeam from './BorderBeam';

interface FreelanceProject {
  title: string;
  category: string;
  industry: string;
  description: string;
  tags: string[];
  year: string;
  metric: string;
}

const clientProjects: FreelanceProject[] = [
  {
    title: 'The Outfit Club',
    industry: 'Online Fashion Retail',
    category: 'UI/UX · E-COMMERCE ARCHITECTURE',
    description: 'Designed a high-conversion, editorial luxury fashion e-commerce experience with streamlined product discovery, rich visual merchandising, and seamless checkout interactions.',
    tags: ['E-Commerce UI', 'Figma Prototyping', 'Design System', 'Responsive Web'],
    year: '2026',
    metric: '100% Responsive Design'
  },
  {
    title: 'Spice Heaven',
    industry: 'Fine Dining & Hospitality',
    category: 'UI/UX · WEB DEVELOPMENT & BRANDING',
    description: 'Engineered an appetizing, sensory digital presence with interactive multi-course menu previews, real-time table reservation concept, and smooth culinary brand storytelling.',
    tags: ['Brand Identity', 'Interactive Menu', 'Mobile-First', 'Performance SEO'],
    year: '2026',
    metric: '<1.2s Fast Load Time'
  }
];

const capabilities = [
  { name: 'UI/UX DESIGN', icon: Layers },
  { name: 'RESPONSIVE WEB', icon: Laptop },
  { name: 'DESIGN SYSTEMS', icon: Sparkles },
  { name: 'CLIENT INITIATIVES', icon: ShieldCheck },
  { name: 'PERFORMANCE FIRST', icon: Zap }
];

export default function Freelance() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="freelance" 
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
          top: '30%',
          right: '8%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="max-w" style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div 
              className="font-head" 
              style={{ 
                fontSize: '11px', 
                fontWeight: 700, 
                letterSpacing: '0.18em', 
                color: 'var(--gray-mid)',
                textTransform: 'uppercase'
              }}
            >
              05 / REAL-WORLD · FREELANCE · PRODUCTION
            </div>

            {/* Live Client Radar Badge */}
            <motion.div 
              whileHover={{ scale: 1.04 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '100px',
                backgroundColor: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#15803d',
                fontFamily: 'var(--font-head)',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                <motion.span 
                  animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#22c55e'
                  }}
                />
                <span 
                  style={{
                    position: 'relative',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#22c55e'
                  }}
                />
              </span>
              <span>Available for Select Client Projects</span>
            </motion.div>
          </div>

          <KineticHeading 
            className="font-hero" 
            style={{ 
              fontSize: 'clamp(42px, 6vw, 84px)', 
              letterSpacing: '0.02em', 
              lineHeight: 1.02, 
              color: 'var(--black)', 
              marginBottom: '20px' 
            }}
          >
            FREELANCE EXPERIENCE
          </KineticHeading>
          
          <p 
            className="font-body" 
            style={{ 
              fontSize: 'clamp(18px, 2.5vw, 22px)', 
              color: 'var(--gray-text)', 
              lineHeight: 1.5, 
              maxWidth: '720px' 
            }}
          >
            Designing and shipping thoughtful, responsive digital experiences for forward-looking brands and businesses.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.15fr 1fr', 
            gap: '80px', 
            alignItems: 'start' 
          }} 
          className="freelance-grid"
        >
          
          {/* LEFT: TEXT CONTENT & VALUE PROPOSITION */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <h3 
              className="font-hero" 
              style={{ 
                fontSize: 'clamp(32px, 3.8vw, 50px)', 
                letterSpacing: '0.02em', 
                color: 'var(--black)', 
                lineHeight: 1.1, 
                marginBottom: '16px' 
              }}
            >
              Freelance Website<br />Design &amp; Engineering
            </h3>
            
            <div 
              className="font-body" 
              style={{ 
                fontSize: '18px', 
                color: 'var(--black)', 
                fontWeight: 600, 
                marginBottom: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Independent Web Designer &amp; Developer</span>
              <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '100px', backgroundColor: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--font-head)', fontWeight: 700 }}>PRO</span>
            </div>
            
            <div 
              className="font-head" 
              style={{ 
                fontSize: '11px', 
                fontWeight: 700, 
                letterSpacing: '0.12em', 
                color: 'var(--gray-mid)', 
                textTransform: 'uppercase', 
                marginBottom: '28px' 
              }}
            >
              2026 · Active Engagements
            </div>
            
            <p 
              className="font-body" 
              style={{ 
                fontSize: '16px', 
                color: 'var(--gray-text)', 
                lineHeight: 1.7, 
                marginBottom: '40px', 
                maxWidth: '560px' 
              }}
            >
              I collaborate directly with business owners and creators to translate business goals into high-impact digital experiences. From initial Figma wireframes to production-grade responsive code, every detail is engineered for clarity, speed, and conversion.
            </p>

            {/* Performance Impact Stats Grid */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '16px', 
                marginBottom: '44px',
                maxWidth: '560px'
              }}
            >
              <div 
                style={{ 
                  padding: '20px 16px', 
                  borderRadius: '14px', 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                }}
              >
                <div className="font-hero" style={{ fontSize: '32px', color: 'var(--black)', lineHeight: 1 }}>100%</div>
                <div className="font-head" style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gray-text)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px' }}>Client Satisfaction</div>
              </div>

              <div 
                style={{ 
                  padding: '20px 16px', 
                  borderRadius: '14px', 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                }}
              >
                <div className="font-hero" style={{ fontSize: '32px', color: 'var(--black)', lineHeight: 1 }}>2+</div>
                <div className="font-head" style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gray-text)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px' }}>Production Sites</div>
              </div>

              <div 
                style={{ 
                  padding: '20px 16px', 
                  borderRadius: '14px', 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                }}
              >
                <div className="font-hero" style={{ fontSize: '32px', color: '#15803d', lineHeight: 1 }}>&lt;1.5s</div>
                <div className="font-head" style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gray-text)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px' }}>Fast Load Speed</div>
              </div>
            </div>

            {/* Interactive Capability Capsules */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '44px', maxWidth: '560px' }}>
              {capabilities.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <motion.div 
                    key={cap.name}
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      borderRadius: '100px',
                      border: '1px solid var(--border)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-head)',
                      letterSpacing: '0.1em',
                      color: 'var(--black)',
                      cursor: 'default',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                    }}
                  >
                    <IconComponent size={13} strokeWidth={2.2} />
                    <span>{cap.name}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button with Magnetic Pull */}
            <div>
              <motion.button
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 36px',
                  borderRadius: '100px',
                  backgroundColor: 'var(--black)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-head)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.18)'
                }}
              >
                <span>Initiate a Project Conversation</span>
                <ArrowUpRight size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT: CLIENT PROJECT CARDS */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            {clientProjects.map((project, idx) => (
              <TiltCard key={project.title} dataCursor="CLIENT WORK" maxTilt={6}>
                <div 
                  className="freelance-project-card group"
                  style={{
                    padding: '38px 36px',
                    borderRadius: '20px',
                    border: '1.5px solid var(--border)',
                    backgroundColor: '#FFFFFF',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.04)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Glowing border beam for top project */}
                  {idx === 0 && <BorderBeam size={160} duration={8} borderWidth={1.5} />}

                  {/* Header Row: Title & Arrow Pill */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div>
                      <div 
                        className="font-head" 
                        style={{ 
                          fontSize: '10px', 
                          fontWeight: 700, 
                          letterSpacing: '0.16em', 
                          color: 'var(--gray-mid)', 
                          textTransform: 'uppercase',
                          marginBottom: '8px'
                        }}
                      >
                        {project.category}
                      </div>
                      <h4 
                        className="font-hero" 
                        style={{ 
                          fontSize: 'clamp(28px, 3.5vw, 36px)', 
                          letterSpacing: '0.02em', 
                          margin: 0,
                          lineHeight: 1.1,
                          color: 'var(--black)'
                        }}
                      >
                        {project.title}
                      </h4>
                    </div>

                    <div className="freelance-arrow-pill">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Industry Subtitle */}
                  <div 
                    className="font-body" 
                    style={{ 
                      fontSize: '15px', 
                      fontWeight: 600, 
                      color: 'var(--black)', 
                      marginBottom: '16px' 
                    }}
                  >
                    {project.industry}
                  </div>

                  {/* Description */}
                  <p 
                    className="font-body" 
                    style={{ 
                      fontSize: '14px', 
                      color: 'var(--gray-text)', 
                      lineHeight: 1.6, 
                      marginBottom: '24px' 
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Meta Footer: Tags & Performance highlight */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          style={{
                            fontSize: '11px',
                            fontFamily: 'var(--font-head)',
                            fontWeight: 600,
                            letterSpacing: '0.04em',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            backgroundColor: '#F7F7F5',
                            border: '1px solid var(--border)',
                            color: 'var(--black)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                      <span 
                        className="font-head" 
                        style={{ 
                          fontSize: '10px', 
                          fontWeight: 700, 
                          color: '#15803d',
                          letterSpacing: '0.1em',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <CheckCircle size={12} strokeWidth={2.5} />
                        {project.metric}
                      </span>

                      <span 
                        className="font-head" 
                        style={{ 
                          fontSize: '10px', 
                          fontWeight: 700, 
                          letterSpacing: '0.1em', 
                          color: 'var(--gray-mid)' 
                        }}
                      >
                        LAUNCHED · {project.year}
                      </span>
                    </div>
                  </div>

                </div>
              </TiltCard>
            ))}
          </motion.div>

        </div>
      </div>
      
      <style>{`
        .freelance-project-card:hover {
          border-color: var(--black) !important;
          box-shadow: 0 24px 50px rgba(0,0,0,0.08) !important;
          transform: translateY(-4px);
        }
        .freelance-arrow-pill {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background-color: #FAFAF8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s ease, background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease;
        }
        .freelance-project-card:hover .freelance-arrow-pill {
          background-color: var(--black);
          color: var(--white);
          border-color: var(--black);
          transform: translate(2px, -2px) rotate(45deg);
        }
        @media (max-width: 1000px) {
          .freelance-grid {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
        }
      `}</style>
    </section>
  );
}

