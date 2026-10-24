import { useRef, useState } from 'react';
import { ArrowRight, Sparkles, Palette } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import TiltCard from './TiltCard';
import KineticHeading from './KineticHeading';
import BorderBeam from './BorderBeam';

const FigmaLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83"/>
    <path d="M0 19C0 13.7533 4.25329 9.5 9.5 9.5H19V28.5H9.5C4.25329 28.5 0 24.2467 0 19Z" fill="#A259FF"/>
    <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
    <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
    <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5V19H28.5C33.7467 19 38 23.2533 38 28.5Z" fill="#1ABCFE"/>
    <path d="M19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5Z" fill="#0ACF83"/>
  </svg>
);

const CanvaLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-9H8v2h8v-2z" fill="#00C4CC"/>
  </svg>
);

const AdobeXDLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#470137"/>
    <path d="M6 7l3 5-3 5h2.5l1.5-3 1.5 3H14l-3-5 3-5h-2.5l-1.5 3-1.5-3H6zm8 0v10h2.5c2.5 0 4.5-2 4.5-5s-2-5-4.5-5H14zm2 2h.5c1.5 0 2.5 1 2.5 3s-1 2-2.5 3H16V9z" fill="#FF61F6"/>
  </svg>
);

const AdobeIllustratorLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#330000"/>
    <text x="12" y="17" fill="#FF9A00" fontSize="13" fontWeight="bold" fontFamily="Inter, sans-serif" textAnchor="middle">Ai</text>
  </svg>
);

interface ToolItem {
  id: string;
  name: string;
  role: string;
  color: string;
  glow: string;
  icon: React.ReactNode;
  specialty: string;
}

const toolsList: ToolItem[] = [
  {
    id: 'figma',
    name: 'Figma',
    role: 'Primary Design Tool',
    color: '#A259FF',
    glow: 'rgba(162, 89, 255, 0.15)',
    icon: <FigmaLogo size={32} />,
    specialty: 'Component Systems & High-Fidelity Wireframes'
  },
  {
    id: 'canva',
    name: 'Canva',
    role: 'Visual Content',
    color: '#00C4CC',
    glow: 'rgba(0, 196, 204, 0.15)',
    icon: <CanvaLogo size={32} />,
    specialty: 'Presentation Decks & Brand Merchandising'
  },
  {
    id: 'xd',
    name: 'Adobe XD',
    role: 'Prototyping',
    color: '#FF61F6',
    glow: 'rgba(255, 97, 246, 0.15)',
    icon: <AdobeXDLogo size={32} />,
    specialty: 'Interactive Micro-Interactions & User Flows'
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    role: 'Vector Graphics',
    color: '#FF9A00',
    glow: 'rgba(255, 154, 0, 0.15)',
    icon: <AdobeIllustratorLogo size={32} />,
    specialty: 'Custom Scalable Vector Icons & Brand Badges'
  }
];

export default function CreativeTools() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const handleScrollToProject = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="creative-tools" 
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
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(162, 89, 255, 0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="max-w" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Section Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <div 
            className="font-head" 
            style={{ 
              fontSize: '11px', 
              fontWeight: 700, 
              letterSpacing: '0.18em', 
              color: 'var(--gray-mid)', 
              marginBottom: '16px',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Palette size={14} />
            <span>04 / Design Experience &amp; Aesthetics</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <KineticHeading 
              className="font-hero" 
              style={{ 
                fontSize: 'clamp(42px, 5.5vw, 76px)', 
                letterSpacing: '0.02em', 
                lineHeight: 1.05, 
                color: 'var(--black)', 
                marginBottom: '20px', 
                textAlign: 'center' 
              }}
            >
              UI/UX &amp; CREATIVE SUITE
            </KineticHeading>
          </div>

          <p 
            className="font-body" 
            style={{ 
              fontSize: 'clamp(17px, 2.2vw, 21px)', 
              color: 'var(--gray-text)', 
              lineHeight: 1.5, 
              margin: '0 auto', 
              maxWidth: '640px' 
            }}
          >
            Crafting fluid, human-centric design systems where aesthetics and functional clarity reinforce each other.
          </p>
        </motion.div>

        {/* 4 Interactive Brand Tool Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '72px' }}
        >
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '24px' 
            }}
          >
            {toolsList.map((tool) => {
              const isHovered = activeTool === tool.id;

              return (
                <TiltCard key={tool.id} dataCursor={tool.name} maxTilt={8}>
                  <motion.div 
                    className="tool-interactive-card"
                    onMouseEnter={() => setActiveTool(tool.id)}
                    onMouseLeave={() => setActiveTool(null)}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      padding: '28px 24px',
                      borderRadius: '18px',
                      border: isHovered ? `1.5px solid ${tool.color}` : '1.5px solid var(--border)',
                      backgroundColor: '#FFFFFF',
                      boxShadow: isHovered ? `0 16px 36px ${tool.glow}` : '0 6px 20px rgba(0,0,0,0.03)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '180px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
                          {tool.icon}
                        </div>

                        <span 
                          className="font-head" 
                          style={{ 
                            fontSize: '9px', 
                            fontWeight: 700, 
                            letterSpacing: '0.12em', 
                            textTransform: 'uppercase',
                            padding: '4px 10px',
                            borderRadius: '100px',
                            backgroundColor: '#FAFAF8',
                            border: '1px solid var(--border)',
                            color: 'var(--gray-text)'
                          }}
                        >
                          {tool.role}
                        </span>
                      </div>

                      <h4 
                        className="font-hero" 
                        style={{ 
                          fontSize: '24px', 
                          letterSpacing: '0.02em', 
                          color: 'var(--black)',
                          marginBottom: '6px'
                        }}
                      >
                        {tool.name}
                      </h4>
                    </div>

                    <div 
                      className="font-body" 
                      style={{ 
                        fontSize: '12px', 
                        color: 'var(--gray-text)', 
                        lineHeight: 1.5,
                        paddingTop: '12px',
                        borderTop: '1px solid var(--border)'
                      }}
                    >
                      {tool.specialty}
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>
        </motion.div>

        {/* Featured UI/UX Project Showcase Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '32px' }}
        >
          <TiltCard dataCursor="VIEW PROJECT" maxTilt={4}>
            <motion.a 
              href="#projects" 
              onClick={handleScrollToProject} 
              className="featured-project-card group"
              style={{ 
                position: 'relative', 
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '56px',
                alignItems: 'center',
                padding: '48px',
                borderRadius: '24px',
                border: '1.5px solid var(--border)',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 16px 48px rgba(0,0,0,0.05)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <BorderBeam size={220} duration={8} borderWidth={1.5} />
              
              <div className="featured-content">
                <div 
                  className="font-head" 
                  style={{ 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    letterSpacing: '0.18em', 
                    color: 'var(--gray-mid)', 
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Sparkles size={13} color="#111111" />
                  <span>FLAGSHIP UI/UX ARCHITECTURE</span>
                </div>

                <h3 
                  className="font-hero" 
                  style={{ 
                    fontSize: 'clamp(32px, 4vw, 48px)', 
                    letterSpacing: '0.02em', 
                    lineHeight: 1.08, 
                    color: 'var(--black)', 
                    marginBottom: '16px' 
                  }}
                >
                  UI/UX Based Food Delivery Platform
                </h3>
                
                <p 
                  className="font-body" 
                  style={{ 
                    fontSize: '15px', 
                    color: 'var(--gray-text)', 
                    lineHeight: 1.65, 
                    marginBottom: '28px',
                    maxWidth: '520px'
                  }}
                >
                  A complete user-centered food delivery platform interface designed in Figma and developed into responsive web components, engineered for frictionless ordering, intuitive restaurant browsing, and rapid discovery.
                </p>
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
                  {['FIGMA', 'UI/UX SYSTEM', 'RESPONSIVE WEB', 'USER FLOWS'].map(tag => (
                    <span 
                      key={tag}
                      className="font-head"
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        padding: '6px 14px',
                        backgroundColor: '#FAFAF8',
                        border: '1px solid var(--border)',
                        borderRadius: '100px',
                        color: 'var(--black)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div 
                  className="font-head" 
                  style={{ 
                    fontSize: '12px', 
                    fontWeight: 700, 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    color: 'var(--black)'
                  }}
                >
                  <span>Explore In Full Gallery</span>
                  <ArrowRight size={16} className="featured-arrow" />
                </div>
              </div>
              
              <div className="featured-preview">
                <div 
                  style={{ 
                    overflow: 'hidden', 
                    borderRadius: '16px',
                    border: '1.5px solid var(--border)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.06)'
                  }}
                >
                  <img 
                    src="/projects/food-delivery-realistic.webp" 
                    alt="Food Delivery UI Showcase" 
                    style={{
                      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                      width: '100%',
                      display: 'block'
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
            </motion.a>
          </TiltCard>
        </motion.div>

      </div>

      <style>{`
        .featured-project-card:hover {
          border-color: var(--black) !important;
          box-shadow: 0 24px 60px rgba(0,0,0,0.08) !important;
        }
        .featured-arrow {
          transition: transform 0.3s ease;
        }
        .featured-project-card:hover .featured-arrow {
          transform: translateX(6px);
        }
        @media (max-width: 960px) {
          .featured-project-card {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            padding: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}

