import { useEffect, useRef } from 'react';
import { education, workProcess } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Search, Lightbulb, PenTool, Code, CheckCircle, Sparkles } from 'lucide-react';

const processIcons = [
  <Search size={16} key="0" />,
  <Lightbulb size={16} key="1" />,
  <PenTool size={16} key="2" />,
  <Code size={16} key="3" />,
  <CheckCircle size={16} key="4" />
];

const verifiedSkills = [
  'Python',
  'SQL / PostgreSQL',
  'Excel',
  'Power BI',
  'HTML / CSS',
  'JavaScript',
  'PySpark',
  'Figma',
  'UI/UX Design',
  'Machine Learning',
  'Databricks',
  'Cloud Fundamentals'
];

export default function EducationAndSkills() {
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
    <section 
      id="education-skills" 
      ref={sectionRef} 
      style={{ 
        padding: '120px 36px', 
        backgroundColor: '#0A0A0A', 
        color: '#FFFFFF',
        position: 'relative',
        borderBottom: '1px solid #1A1A1A'
      }}
    >
      <div className="max-w">

        {/* 3-Column Editorial Grid (Matching Reference Layout) */}
        <div 
          className="reveal"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '48px',
            alignItems: 'stretch'
          }}
        >
          
          {/* COLUMN 1: EDUCATION & SKILLS */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              backgroundColor: '#111111',
              borderRadius: '16px',
              padding: '36px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Column Title */}
            <h2 
              style={{ 
                fontFamily: 'var(--font-hero)', 
                fontSize: '26px', 
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '28px',
                lineHeight: 1
              }}
            >
              EDUCATION &amp; SKILLS
            </h2>

            {/* Sub-block: Education */}
            <div style={{ marginBottom: '32px' }}>
              <div 
                style={{ 
                  fontFamily: 'var(--font-head)', 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  letterSpacing: '0.18em', 
                  textTransform: 'uppercase', 
                  color: '#E50914', 
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>EDUCATION</span>
              </div>

              {/* Verified Degree */}
              <div style={{ marginBottom: '20px', borderLeft: '2px solid #E50914', paddingLeft: '14px' }}>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600, color: '#FFFFFF', margin: '0 0 4px 0' }}>
                  B.Tech — Artificial Intelligence and Data Science
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#A0A0A0', margin: '0 0 4px 0' }}>
                  SRM Institute of Science and Technology, India
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-head)', color: '#777777', letterSpacing: '0.08em' }}>
                  <span>2022 – 2026</span>
                  <span style={{ color: '#E50914' }}>CGPA: 7.58</span>
                </div>
              </div>

              {/* Secondary Verified Certification / Language */}
              <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.15)', paddingLeft: '14px' }}>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF', margin: '0 0 2px 0' }}>
                  Goethe A1 Certificate (German Language)
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#888888', margin: 0 }}>
                  Goethe Institut — Max Mueller Bhavan
                </p>
              </div>
            </div>

            {/* Sub-block: Skills Grid */}
            <div style={{ marginTop: 'auto' }}>
              <div 
                style={{ 
                  fontFamily: 'var(--font-head)', 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  letterSpacing: '0.18em', 
                  textTransform: 'uppercase', 
                  color: '#E50914', 
                  marginBottom: '14px' 
                }}
              >
                TECHNICAL &amp; CREATIVE SKILLS
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {verifiedSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, borderColor: '#E50914', backgroundColor: 'rgba(229, 9, 20, 0.12)' }}
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      color: '#E0E0E0',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      cursor: 'default',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: WORK PROCESS */}
          <div 
            id="process"
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              backgroundColor: '#111111',
              borderRadius: '16px',
              padding: '36px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Column Title */}
            <h2 
              style={{ 
                fontFamily: 'var(--font-hero)', 
                fontSize: '26px', 
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '28px',
                lineHeight: 1
              }}
            >
              WORK PROCESS
            </h2>

            {/* Timeline List */}
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              
              {/* Vertical Connector Line */}
              <div 
                style={{
                  position: 'absolute',
                  left: '17px',
                  top: '16px',
                  bottom: '24px',
                  width: '1px',
                  background: 'linear-gradient(to bottom, #E50914 0%, rgba(229, 9, 20, 0.2) 100%)',
                  zIndex: 1
                }}
              />

              {workProcess.map((step, index) => (
                <motion.div 
                  key={step.number}
                  whileHover={{ x: 6 }}
                  style={{ 
                    display: 'flex', 
                    gap: '18px', 
                    marginBottom: index === workProcess.length - 1 ? 0 : '22px',
                    position: 'relative',
                    zIndex: 2,
                    cursor: 'default'
                  }}
                >
                  {/* Circular Step Badge */}
                  <div 
                    style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      backgroundColor: '#181818',
                      border: '1.5px solid #E50914',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontFamily: 'var(--font-head)',
                      fontWeight: 700,
                      color: '#E50914',
                      flexShrink: 0,
                      boxShadow: '0 0 12px rgba(229, 9, 20, 0.25)'
                    }}
                  >
                    {step.number}
                  </div>

                  <div>
                    <h4 
                      style={{ 
                        fontFamily: 'var(--font-head)', 
                        fontSize: '13px', 
                        fontWeight: 700, 
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase', 
                        color: '#FFFFFF',
                        margin: '2px 0 4px 0'
                      }}
                    >
                      {step.title}
                    </h4>
                    <p 
                      style={{ 
                        fontFamily: 'var(--font-body)', 
                        fontSize: '12px', 
                        lineHeight: 1.55, 
                        color: '#9E9E9E', 
                        margin: 0 
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

          {/* COLUMN 3: PERSONAL STATEMENT / CRIMSON PANEL (Matching Reference) */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(150deg, #9C0B12 0%, #5E0005 100%)',
              borderRadius: '16px',
              padding: '40px',
              border: '1.5px solid rgba(255, 60, 60, 0.3)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(229, 9, 20, 0.35)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Subtle Texture Overlay */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.12) 0%, transparent 60%)',
                pointerEvents: 'none'
              }}
            />

            <div>
              {/* Large Quotation Icon */}
              <div 
                style={{ 
                  fontFamily: 'Georgia, serif', 
                  fontSize: '70px', 
                  lineHeight: 0.8, 
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '20px'
                }}
              >
                “
              </div>

              {/* Personal Statement Quote (Phase 6 Copy) */}
              <p 
                style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: 'clamp(20px, 2.2vw, 24px)', 
                  lineHeight: 1.45, 
                  fontWeight: 600,
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                  marginBottom: '32px'
                }}
              >
                Turning data into insights and ideas into meaningful digital experiences.
              </p>
            </div>

            <div>
              {/* Handwritten Signature Style */}
              <div 
                style={{ 
                  fontFamily: 'var(--font-script)', 
                  fontSize: '38px', 
                  color: '#FFFFFF', 
                  letterSpacing: '0.04em',
                  marginBottom: '28px',
                  opacity: 0.95
                }}
              >
                Naveen Kumar
              </div>

              {/* Bottom Callout */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '16px' }}>
                <div 
                  style={{ 
                    fontFamily: 'var(--font-head)', 
                    fontSize: '10px', 
                    fontWeight: 700, 
                    letterSpacing: '0.16em', 
                    textTransform: 'uppercase', 
                    color: 'rgba(255, 255, 255, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>LET'S CREATE SOMETHING GREAT TOGETHER</span>
                  <span style={{ fontSize: '13px' }}>✦</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
