import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'creative-tools', label: 'Tools' },
  { id: 'projects', label: 'Projects' },
  { id: 'freelance', label: 'Freelance' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.classList.add('section-target-highlight');
      setTimeout(() => el.classList.remove('section-target-highlight'), 1200);
      window.history.pushState({}, '', `#${id}`);
    }
  };

  return (
    <aside
      className="hide-mobile"
      aria-label="Section navigation"
      style={{
        position: 'fixed',
        right: '28px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        alignItems: 'flex-end',
      }}
    >
      {sections.map((s) => {
        const isActive = activeSection === s.id;
        const isHovered = hoveredSection === s.id;

        return (
          <div
            key={s.id}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setHoveredSection(s.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Tooltip on hover */}
            <AnimatePresence>
              {(isHovered || isActive) && (
                <motion.span
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    right: '24px',
                    fontFamily: 'var(--font-head)',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--black)' : 'var(--gray-text)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(4px)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    border: '1px solid var(--border)',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                  }}
                >
                  {s.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot Button */}
            <motion.button
              onClick={() => navigateTo(s.id)}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.8 }}
              style={{
                background: 'none',
                border: 'none',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none',
              }}
              aria-label={`Jump to ${s.label}`}
            >
              <motion.span
                animate={{
                  width: isActive ? '10px' : '6px',
                  height: isActive ? '10px' : '6px',
                  backgroundColor: isActive ? 'var(--black)' : '#CCCCCC',
                  borderRadius: '50%',
                }}
                transition={{ duration: 0.25 }}
                style={{
                  display: 'block',
                  border: isActive ? '2px solid var(--white)' : 'none',
                  boxShadow: isActive ? '0 0 0 1.5px var(--black)' : 'none',
                }}
              />
            </motion.button>
          </div>
        );
      })}
    </aside>
  );
}
