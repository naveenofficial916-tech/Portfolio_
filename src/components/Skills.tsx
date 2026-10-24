import { useRef, useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Sparkles, Terminal, Database, Cloud, Palette, Code, CheckCircle2 } from 'lucide-react';
import KineticHeading from './KineticHeading';

const categoryIcons: Record<string, React.ElementType> = {
  programming: Terminal,
  'data-ai': Database,
  tools: Cloud,
  design: Palette,
};

const categoryAccents: Record<string, string> = {
  programming: '#3b82f6',
  'data-ai': '#22c55e',
  tools: '#f59e0b',
  design: '#a855f7',
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const displayedCategories = selectedFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedFilter);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      style={{ 
        padding: '110px 48px', 
        backgroundColor: 'transparent', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
        <div className="max-w" style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '24px' }}
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
              <Code size={14} />
              <span>02 / Technical Proficiencies &amp; Tooling</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '32px' }}
          >
            <div>
              <KineticHeading 
                className="font-hero" 
                style={{ 
                  fontSize: 'clamp(42px, 5.5vw, 76px)', 
                  letterSpacing: '0.02em', 
                  color: 'var(--black)', 
                  marginBottom: '16px', 
                  lineHeight: 1.05 
                }}
              >
                SKILLS &amp; EXPERTISE
              </KineticHeading>
              <p 
                className="font-body" 
                style={{ 
                  fontSize: 'clamp(17px, 2.2vw, 20px)', 
                  color: 'var(--gray-text)', 
                  maxWidth: '620px', 
                  lineHeight: 1.6 
                }}
              >
                An end-to-end technical foundation spanning machine learning, big data pipelines, cloud architecture, and modern interaction design.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { id: 'all', label: 'All Domains' },
                { id: 'programming', label: 'Programming' },
                { id: 'data-ai', label: 'Data & AI' },
                { id: 'tools', label: 'Tools & Cloud' },
                { id: 'design', label: 'Design & UX' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '100px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-head)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: selectedFilter === tab.id ? '1.5px solid var(--black)' : '1px solid var(--border)',
                    backgroundColor: selectedFilter === tab.id ? 'var(--black)' : '#FFFFFF',
                    color: selectedFilter === tab.id ? 'var(--white)' : 'var(--black)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: selectedFilter === tab.id ? '0 4px 14px rgba(0,0,0,0.12)' : '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Skills Grid */}
          <motion.div 
            layout
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '32px' 
            }}
          >
            <AnimatePresence mode="popLayout">
              {displayedCategories.map((cat, catIdx) => {
                const IconComponent = categoryIcons[cat.id] || Sparkles;
                const accentColor = categoryAccents[cat.id] || '#111111';

                return (
                  <motion.div 
                    layout
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, delay: catIdx * 0.08 }}
                    style={{
                      padding: '36px 32px',
                      borderRadius: '20px',
                      backgroundColor: '#FFFFFF',
                      border: '1.5px solid var(--border)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                    }}
                    className="skill-card-container"
                  >
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid var(--border)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div 
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            backgroundColor: `${accentColor}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <IconComponent size={16} color={accentColor} />
                        </div>
                        <h3 
                          className="font-head" 
                          style={{ 
                            fontSize: '13px', 
                            fontWeight: 700, 
                            letterSpacing: '0.12em', 
                            textTransform: 'uppercase', 
                            color: 'var(--black)',
                            margin: 0
                          }}
                        >
                          {cat.name}
                        </h3>
                      </div>
                      
                      <span 
                        className="font-head" 
                        style={{ 
                          fontSize: '10px', 
                          fontWeight: 700, 
                          color: 'var(--gray-mid)',
                          letterSpacing: '0.1em'
                        }}
                      >
                        {cat.skills.length} SKILLS
                      </span>
                    </div>

                    {/* Skill Pills */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {cat.skills.map((skill) => (
                        <motion.div 
                          key={skill} 
                          className="skill-interactive-item" 
                          whileHover={{ x: 6 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          style={{ 
                            padding: '12px 16px', 
                            borderRadius: '10px',
                            backgroundColor: hoveredSkill === skill ? '#FAFAF8' : '#FBFBFA',
                            border: '1px solid var(--border)',
                            cursor: 'default',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span 
                              style={{ 
                                width: '6px', 
                                height: '6px', 
                                borderRadius: '50%', 
                                backgroundColor: accentColor, 
                                display: 'inline-block' 
                              }} 
                            />
                            <span 
                              className="font-body" 
                              style={{ 
                                fontSize: '14px', 
                                fontWeight: 500,
                                color: 'var(--black)' 
                              }}
                            >
                              {skill}
                            </span>
                          </div>

                          <CheckCircle2 size={13} strokeWidth={2.2} color={hoveredSkill === skill ? accentColor : '#CCCCCC'} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>

        <style>{`
          .skill-card-container:hover {
            border-color: var(--black) !important;
            box-shadow: 0 16px 40px rgba(0,0,0,0.06) !important;
          }
        `}</style>
      </section>
  );
}

