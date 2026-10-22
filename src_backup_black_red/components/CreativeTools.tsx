import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FigmaLogo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83"/>
    <path d="M0 19C0 13.7533 4.25329 9.5 9.5 9.5H19V28.5H9.5C4.25329 28.5 0 24.2467 0 19Z" fill="#A259FF"/>
    <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
    <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
    <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5V19H28.5C33.7467 19 38 23.2533 38 28.5Z" fill="#1ABCFE"/>
    <path d="M19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5Z" fill="#0ACF83"/>
  </svg>
);

const CanvaLogo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-9H8v2h8v-2z" fill="#00C4CC"/>
  </svg>
);

const AdobeXDLogo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#470137"/>
    <path d="M6 7l3 5-3 5h2.5l1.5-3 1.5 3H14l-3-5 3-5h-2.5l-1.5 3-1.5-3H6zm8 0v10h2.5c2.5 0 4.5-2 4.5-5s-2-5-4.5-5H14zm2 2h.5c1.5 0 2.5 1 2.5 3s-1 2-2.5 3H16V9z" fill="#FF61F6"/>
  </svg>
);

const AdobeIllustratorLogo = ({ size = 28 }) => (
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
    <section id="creative-tools" ref={sectionRef} style={{ padding: '100px 36px', backgroundColor: '#0A0A0A', color: '#FFFFFF', borderBottom: '1px solid #1A1A1A' }}>
      <div className="max-w" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Section Intro */}
        <div className="reveal" style={{ marginBottom: '60px', textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>
            DESIGN · EXPERIENCE · PROTOTYPING
          </div>
          <h2 className="font-hero" style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', letterSpacing: '0.02em', lineHeight: 1, color: '#FFFFFF', marginBottom: '20px' }}>
            UI/UX &amp; CREATIVE DESIGN
          </h2>
          <p className="font-body" style={{ fontSize: 'clamp(17px, 2.5vw, 20px)', color: '#A0A0A0', lineHeight: 1.5, margin: '0 auto', maxWidth: '580px' }}>
            Designing clean, intuitive, and visually engaging digital interfaces.
          </p>
        </div>

        {/* Design Toolkit */}
        <div className="reveal" style={{ marginBottom: '64px' }}>
          <div className="toolkit-grid">
            <motion.div className="tool-box" whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.94 }}>
              <FigmaLogo size={24} />
              <span className="font-head">Figma</span>
            </motion.div>

            <motion.div className="tool-box" whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.94 }}>
              <CanvaLogo size={24} />
              <span className="font-head">Canva</span>
            </motion.div>

            <motion.div className="tool-box" whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.94 }}>
              <AdobeXDLogo size={24} />
              <span className="font-head">Adobe XD</span>
            </motion.div>

            <motion.div className="tool-box" whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.94 }}>
              <AdobeIllustratorLogo size={24} />
              <span className="font-head">Adobe Illustrator</span>
            </motion.div>
          </div>
        </div>

        {/* Featured UI/UX Showcase */}
        <div className="reveal">
          <motion.a 
            href="#projects" 
            onClick={handleScrollToProject} 
            className="featured-project-card"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="featured-content">
              <div className="font-head featured-label">FEATURED UI/UX WORK</div>
              <h3 className="font-hero featured-title">UI/UX Based Food Delivery Website</h3>
              <p className="font-body featured-desc">
                A user-friendly food delivery website designed with a focus on intuitive navigation, clear visual hierarchy, and a smooth checkout experience.
              </p>
              
              <div className="featured-meta">
                <span className="font-head">MARCH 2026</span>
                <span className="font-head">REMOTE</span>
                <span className="font-head featured-tool">FIGMA PROTOTYPE</span>
              </div>
              
              <div className="project-tags">
                <span className="font-head tag">UI/UX</span>
                <span className="font-head tag">FIGMA</span>
                <span className="font-head tag">DESIGN SYSTEM</span>
              </div>

              <div className="featured-cta font-head">
                Explore Project <ArrowRight size={16} className="featured-arrow" />
              </div>
            </div>
            
            <div className="featured-preview">
              <div className="preview-image-wrap">
                <img 
                  src="/projects/food-delivery-realistic.webp" 
                  alt="Food Delivery UI" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'none',
                    opacity: 1
                  }}
                />
              </div>
            </div>
          </motion.a>
        </div>

      </div>

      <style>{`
        .toolkit-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .tool-box {
          background-color: #141414;
          border-radius: 12px;
          padding: 16px 28px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
        }
        
        .tool-box:hover {
          background-color: #1A1A1A;
          border-color: rgba(229, 9, 20, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.6), 0 0 20px rgba(229, 9, 20, 0.15);
        }
        
        .tool-box span {
          font-size: 15px;
          font-weight: 600;
          color: #FFFFFF;
        }

        .featured-project-card {
          display: flex;
          align-items: center;
          gap: 60px;
          background-color: #121212;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 56px;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .featured-project-card:hover {
          border-color: rgba(229, 9, 20, 0.4);
          box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 0 30px rgba(229, 9, 20, 0.15);
        }
        .featured-content {
          flex: 1;
        }
        .featured-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #E50914;
          margin-bottom: 20px;
        }
        .featured-title {
          font-size: clamp(28px, 3.5vw, 42px);
          line-height: 1.1;
          color: #FFFFFF;
          margin-bottom: 20px;
        }
        .featured-desc {
          font-size: 15px;
          color: '#A8A8A8';
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .featured-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
        }
        .featured-meta span {
          font-size: 10px;
          letter-spacing: 0.14em;
          color: #888888;
        }
        .featured-tool {
          color: #E50914 !important;
        }
        .project-tags {
          display: flex;
          gap: 10px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .tag {
          font-size: 10px;
          letter-spacing: 0.08em;
          color: #CCCCCC;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          padding: 4px 12px;
          border-radius: 100px;
        }
        .featured-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #FFFFFF;
          text-transform: uppercase;
        }
        .featured-arrow {
          color: #E50914;
          transition: transform 0.3s ease;
        }
        .featured-project-card:hover .featured-arrow {
          transform: translateX(6px);
        }
        
        .featured-preview {
          flex: 1;
          max-width: 440px;
        }
        .preview-image-wrap {
          width: 100%;
          aspect-ratio: 16/11;
          border-radius: 12px;
          overflow: hidden;
          border: 1.5px solid rgba(229, 9, 20, 0.35);
          box-shadow: 0 16px 40px rgba(0,0,0,0.6);
        }

        @media (max-width: 960px) {
          .featured-project-card {
            flex-direction: column;
            gap: 40px;
            padding: 36px;
          }
          .featured-preview {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
