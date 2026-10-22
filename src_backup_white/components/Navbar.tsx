import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About',    href: '#about', id: 'about' },
  { label: 'Skills',   href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact',  href: '#contact', id: 'contact' },
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
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : '#FFFFFF',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.03)' : 'none',
        }}
      >
        <div className="max-w" style={{ padding: '0 48px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Left — Logo name with spring click */}
          <motion.button
            onClick={() => {
              if (location.pathname !== '/') window.location.href = '/';
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <span style={{ fontFamily: 'var(--font-hero)', fontSize: '18px', letterSpacing: '0.06em', color: 'var(--black)', textTransform: 'uppercase' }}>
              Naveenkumar
            </span>
          </motion.button>

          {/* Center decorative dots */}
          <div className="hide-mobile" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {['●','●','●'].map((d, i) => (
              <span key={i} style={{ fontSize: '6px', color: '#CCCCCC' }}>{d}</span>
            ))}
          </div>

          {/* Right — animated navigation links */}
          <div className="hide-mobile" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
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
                  style={{ position: 'relative', padding: '6px 2px' }}
                >
                  <span style={{ color: isActive ? 'var(--black)' : 'var(--gray-text)', fontWeight: isActive ? 700 : 600 }}>
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
                        backgroundColor: 'var(--black)',
                        borderRadius: '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Hamburger Menu Toggle */}
          <motion.button
            className="show-mobile-only"
            onClick={() => setMobileOpen(v => !v)}
            whileTap={{ scale: 0.9 }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            style={{ paddingTop: '80px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {links.map((l, index) => (
                <motion.a 
                  key={l.href} 
                  href={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  onClick={e => { e.preventDefault(); scrollTo(l.href); setMobileOpen(false); }}
                  style={{ fontFamily: 'var(--font-hero)', fontSize: 'clamp(36px, 10vw, 56px)', color: 'var(--black)', textTransform: 'uppercase', letterSpacing: '0.02em' }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <div style={{ position: 'absolute', bottom: '40px', left: '40px', fontSize: '12px', color: '#AAAAAA', fontFamily: 'var(--font-head)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              M. Naveenkumar · 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
