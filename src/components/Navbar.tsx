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

          {/* Live Status Pill with Dancing Neural Equalizer */}
          <div 
            className="hide-mobile font-head" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              padding: '6px 16px',
              borderRadius: '100px',
              border: '1px solid var(--border)',
              backgroundColor: 'rgba(250, 250, 248, 0.85)',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--black)',
              userSelect: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
            }}
          >
            {/* 4 Dancing Equalizer Bars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '12px' }}>
              <motion.span animate={{ height: ['4px', '12px', '6px', '10px', '4px'] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '2px', backgroundColor: '#22c55e', borderRadius: '2px' }} />
              <motion.span animate={{ height: ['8px', '4px', '12px', '6px', '8px'] }} transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '2px', backgroundColor: '#22c55e', borderRadius: '2px' }} />
              <motion.span animate={{ height: ['12px', '7px', '4px', '11px', '12px'] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '2px', backgroundColor: '#22c55e', borderRadius: '2px' }} />
              <motion.span animate={{ height: ['5px', '11px', '8px', '4px', '5px'] }} transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '2px', backgroundColor: '#22c55e', borderRadius: '2px' }} />
            </div>
            <span>AVAILABLE FOR WORK</span>
          </div>

          {/* Right — animated navigation option boxes */}
          <div className="hide-mobile" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {links.map(l => {
              const isActive = activeSection === l.id;
              return (
                <motion.a 
                  key={l.href} 
                  href={l.href}
                  onClick={e => { e.preventDefault(); scrollTo(l.href); }}
                  className="nav-option-box"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  style={{ 
                    position: 'relative',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    border: isActive ? '1px solid var(--black)' : '1px solid var(--border)',
                    backgroundColor: isActive ? 'var(--black)' : 'rgba(250, 250, 248, 0.85)',
                    color: isActive ? 'var(--white)' : 'var(--black)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 4px 14px rgba(0,0,0,0.12)' : '0 2px 6px rgba(0,0,0,0.02)',
                  }}
                >
                  {/* Circular Indicator Dot (Matching the uploaded reference) */}
                  <span
                    className="nav-indicator-ring"
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      border: isActive ? '1.5px solid rgba(255, 255, 255, 0.5)' : '1.5px solid #C5C5C2',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'border-color 0.25s ease',
                    }}
                  >
                    {isActive ? (
                      <motion.span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: '#FFFFFF',
                          display: 'block',
                        }}
                        animate={{ scale: [1, 1.35, 1], opacity: [1, 0.75, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    ) : (
                      <span
                        className="nav-indicator-dot-inactive"
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: 'transparent',
                          display: 'block',
                          transform: 'scale(0)',
                          opacity: 0,
                          transition: 'all 0.25s ease',
                        }}
                      />
                    )}
                  </span>

                  {/* Section Label */}
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-head)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--white)' : 'var(--black)',
                    }}
                  >
                    {l.label}
                  </span>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '0 24px' }}>
              {links.map((l, index) => {
                const isActive = activeSection === l.id;
                return (
                  <motion.a 
                    key={l.href} 
                    href={l.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    onClick={e => { e.preventDefault(); scrollTo(l.href); setMobileOpen(false); }}
                    style={{ 
                      padding: '16px 24px',
                      borderRadius: '14px',
                      backgroundColor: isActive ? 'var(--black)' : '#FAFAF8',
                      color: isActive ? 'var(--white)' : 'var(--black)',
                      border: isActive ? '1px solid var(--black)' : '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-head)',
                      fontSize: '14px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase'
                    }}
                  >
                    <span>{l.label}</span>
                    <span style={{ 
                      width: '16px', height: '16px', borderRadius: '50%', 
                      border: isActive ? '1.5px solid rgba(255,255,255,0.5)' : '1.5px solid #C5C5C2',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />}
                    </span>
                  </motion.a>
                );
              })}
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
