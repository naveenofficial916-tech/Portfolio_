import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, MapPin, ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`✓ Copied ${label} to clipboard!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      style={{ 
        padding: '130px 36px 80px', 
        backgroundColor: '#0A0A0A', 
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Crimson Glow */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.14) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            style={{
              position: 'fixed',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#181818',
              color: '#FFFFFF',
              padding: '12px 28px',
              borderRadius: '100px',
              fontFamily: 'var(--font-head)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.8), 0 0 20px rgba(229, 9, 20, 0.4)',
              border: '1.5px solid #E50914'
            }}
          >
            <Check size={16} strokeWidth={2.5} color="#E50914" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w">
        
        {/* Main 2-Column Editorial Grid (Matching Reference Contact Section) */}
        <div 
          className="reveal"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '64px',
            alignItems: 'center',
            marginBottom: '80px'
          }}
        >
          
          {/* Left Column: Heading + Description + Contact Rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Title with red star (like reference: LET'S WORK TOGETHER ✦) */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '24px' }}>
              <h2 
                style={{ 
                  fontFamily: 'var(--font-hero)', 
                  fontSize: 'clamp(44px, 6vw, 76px)', 
                  lineHeight: 0.92,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  margin: 0
                }}
              >
                LET'S WORK<br />TOGETHER
              </h2>
              <span style={{ color: '#E50914', fontSize: '28px', marginTop: '6px' }}>✦</span>
            </div>

            <p 
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '15px', 
                lineHeight: 1.7, 
                color: '#A0A0A0', 
                maxWidth: '460px',
                marginBottom: '40px' 
              }}
            >
              I am open to opportunities, collaborations, and meaningful conversations around data analytics, artificial intelligence, and user experience design.
            </p>

            {/* Clickable Verified Contact Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '40px' }}>
              
              {/* Row 1: Email */}
              <a 
                href="mailto:naveenofficial916@gmail.com"
                onClick={() => copyToClipboard('naveenofficial916@gmail.com', 'email address')}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  textDecoration: 'none', 
                  color: '#FFFFFF',
                  transition: 'transform 0.2s ease'
                }}
              >
                <div 
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '50%', 
                    border: '1.5px solid #E50914', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: 'rgba(229, 9, 20, 0.08)',
                    boxShadow: '0 0 12px rgba(229, 9, 20, 0.25)',
                    flexShrink: 0
                  }}
                >
                  <Mail size={18} color="#E50914" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '10px', color: '#888888', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    EMAIL ADDRESS
                  </div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                    naveenofficial916@gmail.com
                  </div>
                </div>
              </a>

              {/* Row 2: LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/naveen-kumar-4858063a1/"
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  textDecoration: 'none', 
                  color: '#FFFFFF' 
                }}
              >
                <div 
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '50%', 
                    border: '1.5px solid #E50914', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: 'rgba(229, 9, 20, 0.08)',
                    boxShadow: '0 0 12px rgba(229, 9, 20, 0.25)',
                    flexShrink: 0
                  }}
                >
                  <Linkedin size={18} color="#E50914" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '10px', color: '#888888', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    LINKEDIN PROFILE
                  </div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                    linkedin.com/in/naveenkumar-m-ds
                  </div>
                </div>
              </a>

              {/* Row 3: GitHub */}
              <a 
                href="https://github.com/naveenofficial916-tech" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  textDecoration: 'none', 
                  color: '#FFFFFF' 
                }}
              >
                <div 
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '50%', 
                    border: '1.5px solid #E50914', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: 'rgba(229, 9, 20, 0.08)',
                    boxShadow: '0 0 12px rgba(229, 9, 20, 0.25)',
                    flexShrink: 0
                  }}
                >
                  <Github size={18} color="#E50914" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '10px', color: '#888888', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    GITHUB REPOSITORY
                  </div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                    github.com/naveenofficial916-tech
                  </div>
                </div>
              </a>

              {/* Row 4: Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div 
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '50%', 
                    border: '1.5px solid #E50914', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: 'rgba(229, 9, 20, 0.08)',
                    boxShadow: '0 0 12px rgba(229, 9, 20, 0.25)',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={18} color="#E50914" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '10px', color: '#888888', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    LOCATION
                  </div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                    Chennai, Tamil Nadu, India
                  </div>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Magnetic strength={0.3}>
                <a 
                  href="mailto:naveenofficial916@gmail.com"
                  className="btn-filled"
                  style={{ textDecoration: 'none' }}
                >
                  <span>SEND AN EMAIL</span>
                  <ArrowRight size={14} />
                </a>
              </Magnetic>

              <Magnetic strength={0.3}>
                <a 
                  href="/Naveenkumar_Resume.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-outline"
                  style={{ textDecoration: 'none' }}
                >
                  <span>VIEW RESUME</span>
                  <ArrowUpRight size={14} />
                </a>
              </Magnetic>
            </div>

          </div>

          {/* Right Column: Sleek Laptop Display Mockup (Matching Reference) */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                maxWidth: '560px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1.5px solid rgba(229, 9, 20, 0.4)',
                boxShadow: '0 28px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(229, 9, 20, 0.25)',
                backgroundColor: '#111111'
              }}
            >
              <img 
                src="/images/contact_laptop.jpg" 
                alt="Naveen Kumar Digital Portfolio Experience"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'none',
                  opacity: 1
                }}
              />
            </motion.div>
          </div>

        </div>

        {/* Bottom Editorial Closing Line */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: '#777777', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} M. NAVEENKUMAR · ALL RIGHTS RESERVED
          </div>
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: '#E50914', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>DESIGNED WITH PRECISION</span>
            <span>✦</span>
          </div>
        </div>

      </div>
    </section>
  );
}
