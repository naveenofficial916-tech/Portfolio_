import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education & Skills', href: '#education-skills', id: 'education-skills' },
  { label: 'Process', href: '#process', id: 'process' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section based on scroll
      const scrollPos = window.scrollY + 120;
      let current = '';
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollPos) {
          current = link.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Handle hash navigation
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  const scrollTo = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('section-target-highlight');
        setTimeout(() => el.classList.remove('section-target-highlight'), 1200);
        window.history.pushState({}, '', href);
      }
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.94)' : 'rgba(10, 10, 10, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(229, 9, 20, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
          transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.8), 0 0 20px rgba(229, 9, 20, 0.1)' : 'none',
        }}
      >
        <div className="max-w" style={{ padding: '0 40px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Left — Logo name */}
          <motion.button
            onClick={() => {
              if (location.pathname !== '/') window.location.href = '/';
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span style={{ 
              fontFamily: 'var(--font-hero)', 
              fontSize: '20px', 
              letterSpacing: '0.06em', 
              color: '#FFFFFF', 
              textTransform: 'uppercase' 
            }}>
              NAVEEN KUMAR
            </span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E50914', boxShadow: '0 0 8px #E50914' }} />
          </motion.button>

          {/* Right — animated navigation links */}
          <div className="hide-mobile" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {links.map(l => {
              const isActive = activeSection === l.id;
              return (
                <motion.a 
                  key={l.href} 
                  href={l.href}
                  onClick={e => { e.preventDefault(); scrollTo(l.href); }}
                  className="nav-link"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ position: 'relative', padding: '6px 2px', cursor: 'pointer' }}
                >
                  <span style={{ 
                    color: isActive ? '#FFFFFF' : '#A3A3A3', 
                    fontWeight: isActive ? 700 : 600,
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    transition: 'color 0.25s'
                  }}>
                    {l.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: '#E50914',
                        boxShadow: '0 0 10px rgba(229, 9, 20, 0.8)',
                        borderRadius: '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}

            {/* Availability Pill */}
            <span 
              className="hide-mobile" 
              style={{ 
                fontSize: '10px', 
                fontWeight: 700, 
                letterSpacing: '0.14em', 
                color: '#E50914', 
                border: '1px solid rgba(229, 9, 20, 0.4)',
                backgroundColor: 'rgba(229, 9, 20, 0.08)',
                padding: '5px 12px',
                borderRadius: '100px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#E50914', animation: 'pulse 2s infinite' }} />
              OPEN TO ROLES
            </span>
          </div>

          {/* Hamburger Menu Toggle */}
          <motion.button
            className="show-mobile-only"
            onClick={() => setMobileOpen(v => !v)}
            whileTap={{ scale: 0.9 }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', color: '#FFFFFF' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} color="#E50914" /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Animated Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mob-nav-overlay" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ paddingTop: '80px', backgroundColor: 'rgba(10, 10, 10, 0.98)' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {links.map((l, index) => (
                <motion.a 
                  key={l.href} 
                  href={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  onClick={e => { e.preventDefault(); scrollTo(l.href); setMobileOpen(false); }}
                  style={{ 
                    fontFamily: 'var(--font-hero)', 
                    fontSize: 'clamp(32px, 8vw, 48px)', 
                    color: activeSection === l.id ? '#E50914' : '#FFFFFF', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.02em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <span style={{ fontSize: '14px', color: '#E50914' }}>0{index + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </div>
            <div style={{ position: 'absolute', bottom: '40px', left: '40px', fontSize: '11px', color: '#888888', fontFamily: 'var(--font-head)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              M. NAVEENKUMAR · AI & DATA SCIENCE · 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
