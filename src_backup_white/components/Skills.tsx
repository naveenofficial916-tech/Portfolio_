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
      // Ease out cubic
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
      {/* Profile Snapshot Strip with Animated Counters */}
      <div className="reveal" style={{ 
        borderTop: '1px solid var(--border)', 
        borderBottom: '1px solid var(--border)', 
        padding: '32px 48px',
        backgroundColor: '#FAFAF8',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div className="max-w" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', alignItems: 'center' }}>
          
          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '32px', cursor: 'default' }}>
            <span className="font-hero" style={{ fontSize: '24px', letterSpacing: '0.04em', color: 'var(--black)' }}>
              AI &amp; DATA SCIENCE
            </span>
            <span style={{ width: '1px', height: '24px', background: 'var(--border)' }}></span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '32px', cursor: 'default' }}>
            <span className="font-hero" style={{ fontSize: '24px', letterSpacing: '0.04em', color: 'var(--black)' }}>
              B.TECH · 2026
            </span>
            <span style={{ width: '1px', height: '24px', background: 'var(--border)' }}></span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '32px', cursor: 'default' }}>
            <span className="font-hero" style={{ fontSize: '24px', letterSpacing: '0.04em', color: 'var(--black)' }}>
              CGPA <AnimatedCounter to={7.58} />
            </span>
            <span style={{ width: '1px', height: '24px', background: 'var(--border)' }}></span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '32px', cursor: 'default' }}>
            <span className="font-hero" style={{ fontSize: '24px', letterSpacing: '0.04em', color: 'var(--black)' }}>
              CHENNAI, INDIA
            </span>
          </motion.div>

        </div>
      </div>

      <section id="skills" ref={sectionRef} style={{ padding: '90px 48px', backgroundColor: 'var(--white)', position: 'relative' }}>
        <div className="max-w">
          <div className="section-label reveal" style={{ marginBottom: '24px' }}>02 / Skills &amp; Expertise</div>
          
          {/* Enhanced Skills Heading */}
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <h2 className="font-hero" style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '0.02em', color: 'var(--black)', marginBottom: '16px', lineHeight: 1.1 }}>
              SKILLS &amp; EXPERTISE
            </h2>
            <p className="font-body" style={{ fontSize: '18px', color: 'var(--gray-text)', maxWidth: '540px', lineHeight: 1.6 }}>
              A comprehensive toolkit of technologies, frameworks, and methodologies I use to build robust AI models and scalable digital applications.
            </p>
          </div>
          
          {/* Top: Skills Full Width */}
          <div className="reveal" style={{ marginBottom: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px' }}>
              {skillCategories.map(cat => (
                <div key={cat.id}>
                  <h3 className="font-head" style={{ 
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--black)', marginBottom: '20px', borderBottom: '2px solid var(--black)', paddingBottom: '8px'
                  }}>
                    {cat.name}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {cat.skills.map((skill) => (
                      <motion.div 
                        key={skill} 
                        className="skill-row" 
                        whileHover={{ x: 6 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ padding: '14px 0', borderBottom: '1px solid var(--border)', cursor: 'default' }}
                      >
                        <span className="skill-name" style={{ fontSize: '15px', fontWeight: 500 }}>{skill}</span>
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
