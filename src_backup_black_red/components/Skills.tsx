import { useEffect, useRef, useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ to, duration = 1.5, decimals = 2 }: { to: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      start = easeProgress * to;
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

export default function Skills() {
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
    <>
      {/* Editorial Profile Snapshot Strip */}
      <div 
        className="reveal" 
        style={{ 
          borderTop: '1px solid rgba(229, 9, 20, 0.3)', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
          padding: '24px 36px',
          backgroundColor: '#0F0F0F',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <div className="max-w" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '36px', alignItems: 'center' }}>
          
          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '24px', cursor: 'default' }}>
            <span className="font-hero" style={{ fontSize: '20px', letterSpacing: '0.04em', color: '#FFFFFF' }}>
              AI &amp; DATA SCIENCE
            </span>
            <span style={{ width: '1px', height: '20px', background: 'rgba(229, 9, 20, 0.4)' }}></span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '24px', cursor: 'default' }}>
            <span className="font-hero" style={{ fontSize: '20px', letterSpacing: '0.04em', color: '#FFFFFF' }}>
              B.TECH · 2026
            </span>
            <span style={{ width: '1px', height: '20px', background: 'rgba(229, 9, 20, 0.4)' }}></span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '24px', cursor: 'default' }}>
            <span className="font-hero" style={{ fontSize: '20px', letterSpacing: '0.04em', color: '#E50914' }}>
              CGPA <AnimatedCounter to={7.58} />
            </span>
            <span style={{ width: '1px', height: '20px', background: 'rgba(229, 9, 20, 0.4)' }}></span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '24px', cursor: 'default' }}>
            <span className="font-hero" style={{ fontSize: '20px', letterSpacing: '0.04em', color: '#FFFFFF' }}>
              CHENNAI, INDIA
            </span>
          </motion.div>

        </div>
      </div>

      <section id="skills" ref={sectionRef} style={{ padding: '100px 36px', backgroundColor: '#0A0A0A', color: '#FFFFFF', position: 'relative', borderBottom: '1px solid #1A1A1A' }}>
        <div className="max-w">
          <div className="section-label reveal" style={{ marginBottom: '24px' }}>02 / DOMAIN EXPERTISE</div>
          
          <div className="reveal" style={{ marginBottom: '50px' }}>
            <h2 className="font-hero" style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '0.02em', color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.1 }}>
              SKILLS &amp; TECHNOLOGIES
            </h2>
            <p className="font-body" style={{ fontSize: '15px', color: '#A0A0A0', maxWidth: '540px', lineHeight: 1.6 }}>
              A curated overview of data analytics, machine learning frameworks, cloud architectures, and user interface tools.
            </p>
          </div>
          
          {/* Categorized Skills Grid */}
          <div className="reveal">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '36px' }}>
              {skillCategories.map(cat => (
                <div 
                  key={cat.id}
                  style={{
                    backgroundColor: '#121212',
                    borderRadius: '12px',
                    padding: '28px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.4)'
                  }}
                >
                  <h3 className="font-head" style={{ 
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E50914', marginBottom: '16px', borderBottom: '1px solid rgba(229, 9, 20, 0.3)', paddingBottom: '10px'
                  }}>
                    {cat.name}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {cat.skills.map((skill) => (
                      <motion.div 
                        key={skill} 
                        whileHover={{ x: 6, color: '#FFFFFF' }}
                        style={{ padding: '10px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', cursor: 'default', display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        <span style={{ color: '#E50914', fontSize: '10px' }}>✦</span>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#C8C8C8' }}>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
