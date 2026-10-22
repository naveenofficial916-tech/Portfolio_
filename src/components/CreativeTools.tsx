import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import KineticHeading from './KineticHeading';
import BorderBeam from './BorderBeam';

const FigmaLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83"/>
    <path d="M0 19C0 13.7533 4.25329 9.5 9.5 9.5H19V28.5H9.5C4.25329 28.5 0 24.2467 0 19Z" fill="#A259FF"/>
    <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
    <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
    <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5V19H28.5C33.7467 19 38 23.2533 38 28.5Z" fill="#1ABCFE"/>
    <path d="M19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5Z" fill="#0ACF83"/>
  </svg>
);

const CanvaLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-9H8v2h8v-2z" fill="#00C4CC"/>
  </svg>
);

const AdobeXDLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#470137"/>
    <path d="M6 7l3 5-3 5h2.5l1.5-3 1.5 3H14l-3-5 3-5h-2.5l-1.5 3-1.5-3H6zm8 0v10h2.5c2.5 0 4.5-2 4.5-5s-2-5-4.5-5H14zm2 2h.5c1.5 0 2.5 1 2.5 3s-1 2-2.5 3H16V9z" fill="#FF61F6"/>
  </svg>
);

const AdobeIllustratorLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#330000"/>
    <text x="12" y="17" fill="#FF9A00" fontSize="13" fontWeight="bold" fontFamily="Inter, sans-serif" textAnchor="middle">Ai</text>
  </svg>
);

export default function CreativeTools() {
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

  const handleScrollToProject = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="creative-tools" ref={sectionRef} style={{ padding: '90px 48px', backgroundColor: 'transparent' }}>
      <div className="max-w" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* SECTION INTRO */}
        <div className="reveal" style={{ marginBottom: '70px', textAlign: 'center' }}>
          <div className="font-head" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gray-mid)', marginBottom: '16px' }}>
            04 / DESIGN · EXPERIENCE · CREATIVITY
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <KineticHeading className="font-hero" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '0.02em', lineHeight: 1, color: 'var(--black)', marginBottom: '32px', textAlign: 'center' }}>
              UI/UX & CREATIVE DESIGN
            </KineticHeading>
          </div>
          <p className="font-body" style={{ fontSize: 'clamp(20px, 3vw, 24px)', color: 'var(--gray-text)', lineHeight: 1.4, margin: '0 auto', maxWidth: '600px' }}>
            Designing clean, intuitive and visually engaging digital experiences.
          </p>
        </div>

        {/* DESIGN TOOLKIT */}
        <div className="reveal" style={{ marginBottom: '60px' }}>
          <div className="font-head" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--black)', marginBottom: '8px', textAlign: 'center' }}>
            MY DESIGN TOOLKIT
          </div>
          <p className="font-body" style={{ fontSize: '14px', color: 'var(--gray-text)', marginBottom: '48px', textAlign: 'center' }}>
            Tools I use to design, create and present digital experiences.
          </p>

          <div className="toolkit-grid">
            <TiltCard dataCursor="FIGMA" maxTilt={10}>
              <motion.div className="tool-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FigmaLogo size={24} />
                <span className="font-head">Figma</span>
              </motion.div>
            </TiltCard>

            <TiltCard dataCursor="CANVA" maxTilt={10}>
              <motion.div className="tool-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <CanvaLogo size={24} />
                <span className="font-head">Canva</span>
              </motion.div>
            </TiltCard>

            <TiltCard dataCursor="ADOBE XD" maxTilt={10}>
              <motion.div className="tool-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <AdobeXDLogo size={24} />
                <span className="font-head">Adobe XD</span>
              </motion.div>
            </TiltCard>

            <TiltCard dataCursor="ILLUSTRATOR" maxTilt={10}>
              <motion.div className="tool-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <AdobeIllustratorLogo size={24} />
                <span className="font-head">Adobe Illustrator</span>
              </motion.div>
            </TiltCard>
          </div>
        </div>

        {/* FEATURED UI/UX PROJECT */}
        <div className="reveal" style={{ marginBottom: '70px' }}>
          <TiltCard dataCursor="VIEW PROJECT" maxTilt={4}>
            <motion.a 
              href="#projects" 
              onClick={handleScrollToProject} 
              className="featured-project-card"
              style={{ position: 'relative', overflow: 'hidden' }}
              whileTap={{ scale: 0.98 }}
            >
              <BorderBeam size={200} duration={8} borderWidth={1.5} />
              <div className="featured-content">
                <div className="font-head featured-label">FEATURED UI/UX PROJECT</div>
                <h3 className="font-hero featured-title">UI/UX Based Food Delivery Website</h3>
                <p className="font-body featured-desc">
                  A user-friendly food delivery website designed with a focus on intuitive navigation, clear visual hierarchy and a smooth ordering experience.
                </p>
                
                <div className="featured-meta">
                  <span className="font-head">MARCH 2026</span>
                  <span className="font-head">REMOTE</span>
                  <span className="font-head featured-tool">FIGMA</span>
                </div>
                
                <div className="project-tags">
                  <span className="font-head tag">UI/UX</span>
                  <span className="font-head tag">FIGMA</span>
                  <span className="font-head tag">WEB DESIGN</span>
                </div>

                <div className="featured-cta font-head">
                  Explore Project <ArrowRight size={16} className="featured-arrow" />
                </div>
              </div>
              
              <div className="featured-preview">
                <div className="preview-image-wrap" style={{ overflow: 'hidden', borderRadius: '8px' }}>
                  <img 
                    src="/projects/food-delivery-realistic.webp" 
                    alt="Food Delivery UI" 
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
        </div>

      </div>

      <style>{`
        /* Toolkit Grid */
        .toolkit-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .tool-box {
          background-color: #F8F8F6;
          border-radius: 12px;
          padding: 16px 26px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          border: 1px solid var(--border);
          cursor: pointer;
        }
        
        .tool-box:hover {
          background-color: var(--white);
          border-color: var(--black);
          box-shadow: 0 10px 24px rgba(0,0,0,0.06);
        }
        
        .tool-box span {
          font-size: 15px;
          font-weight: 600;
          color: var(--black);
        }

        /* Featured Project */
        .featured-project-card {
          display: flex;
          align-items: center;
          gap: 64px;
          background-color: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 56px;
          text-decoration: none;
          color: inherit;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .featured-project-card:hover {
          border-color: var(--black);
          box-shadow: 0 24px 60px rgba(0,0,0,0.08);
        }
        .featured-content {
          flex: 1;
        }
        .featured-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .featured-title {
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.1;
          color: var(--black);
          margin-bottom: 24px;
        }
        .featured-desc {
          font-size: 16px;
          color: var(--gray-text);
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .featured-meta {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
        }
        .featured-meta span {
          font-size: 10px;
          letter-spacing: 0.15em;
          color: var(--gray-mid);
        }
        .project-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
        }
        .tag {
          font-size: 10px;
          letter-spacing: 0.1em;
          padding: 6px 14px;
          background-color: #FAFAF8;
          border: 1px solid var(--border);
          border-radius: 100px;
          color: var(--black);
        }
        .featured-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--black);
        }
        .featured-arrow {
          transition: transform 0.3s ease;
        }
        .featured-project-card:hover .featured-arrow {
          transform: translateX(6px);
        }
        .featured-preview {
          flex: 1;
        }
        @media (max-width: 900px) {
          .featured-project-card {
            flex-direction: column;
            padding: 32px;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
