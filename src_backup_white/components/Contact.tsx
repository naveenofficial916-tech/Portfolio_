import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
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
      { threshold: 0.15 }
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
    <section id="contact" ref={sectionRef} style={{ padding: '140px 48px', backgroundColor: 'var(--white)', position: 'relative' }}>
      
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
              backgroundColor: 'var(--black)',
              color: 'var(--white)',
              padding: '12px 24px',
              borderRadius: '100px',
              fontFamily: 'var(--font-head)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <Check size={16} strokeWidth={2.5} color="#22c55e" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w reveal" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Contact Hero */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="font-head" style={{ 
            fontSize: '12px', 
            fontWeight: 700, 
            letterSpacing: '0.2em', 
            color: 'var(--gray-mid)',
            marginBottom: '20px'
          }}>
            05 / LET'S CONNECT
          </div>
          <h2 className="font-hero" style={{ 
            fontSize: 'clamp(54px, 8vw, 110px)', 
            letterSpacing: '0.02em', 
            lineHeight: 1,
            color: 'var(--black)',
            marginBottom: '32px' 
          }}>
            GET IN TOUCH
          </h2>
          <p className="font-body" style={{ 
            fontSize: 'clamp(18px, 2.5vw, 24px)', 
            color: 'var(--black)',
            maxWidth: '650px',
            margin: '0 auto 20px',
            lineHeight: 1.5
          }}>
            Have a project, opportunity, or idea in mind?<br/>I'd love to hear from you.
          </p>
          <p className="font-body" style={{
            fontSize: '15px',
            color: 'var(--gray-text)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Open to opportunities, collaborations, freelance projects, and conversations around technology, data, and design.
          </p>
        </div>

        {/* 4 Interactive Cards */}
        <div className="contact-cards" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '24px', 
          marginBottom: '64px'
        }}>
          
          {/* Card 1 - EMAIL */}
          <motion.a 
            href="mailto:naveenofficial916@gmail.com" 
            className="contact-card"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              // Copy to clipboard alongside opening mailto
              copyToClipboard('naveenofficial916@gmail.com', 'naveenofficial916@gmail.com');
            }}
          >
            <div className="card-top">
              <span className="card-label">EMAIL</span>
              <img src="/images/contact/logo1.png" alt="Gmail" className="card-icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
            </div>
            <div className="card-content">
              <h3 className="card-main">naveenofficial916@gmail.com</h3>
              <p className="card-support">Click to email &amp; copy address</p>
            </div>
            <div className="card-cta">
              <span>Send an Email</span>
              <ArrowRight size={16} className="card-arrow" />
            </div>
          </motion.a>

          {/* Card 2 - PHONE */}
          <motion.a 
            href="tel:+916381550398" 
            className="contact-card"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              copyToClipboard('6381550398', '+91 6381550398');
            }}
          >
            <div className="card-top">
              <span className="card-label">PHONE</span>
              <img src="/images/contact/logo3.png" alt="Phone" className="card-icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
            </div>
            <div className="card-content">
              <h3 className="card-main">6381550398</h3>
              <p className="card-support">Click to call &amp; copy number</p>
            </div>
            <div className="card-cta">
              <span>Call Me</span>
              <ArrowRight size={16} className="card-arrow" />
            </div>
          </motion.a>

          {/* Card 3 - LINKEDIN */}
          <motion.a 
            href="https://www.linkedin.com/in/naveen-kumar-4858063a1/" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="card-top">
              <span className="card-label">LINKEDIN</span>
              <img src="/images/contact/logo2.png" alt="LinkedIn" className="card-icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
            </div>
            <div className="card-content">
              <h3 className="card-main">Let's connect professionally</h3>
              <p className="card-support">Connect with me on LinkedIn</p>
            </div>
            <div className="card-cta">
              <span>View LinkedIn</span>
              <ArrowRight size={16} className="card-arrow" />
            </div>
          </motion.a>

          {/* Card 4 - GITHUB */}
          <motion.a 
            href="https://github.com/naveenofficial916-tech" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="card-top">
              <span className="card-label">GITHUB</span>
              <img src="/images/contact/logo4.png" alt="GitHub" className="card-icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
            </div>
            <div className="card-content">
              <h3 className="card-main">Explore my projects</h3>
              <p className="card-support">See my code and technical work</p>
            </div>
            <div className="card-cta">
              <span>View GitHub</span>
              <ArrowRight size={16} className="card-arrow" />
            </div>
          </motion.a>

        </div>

        {/* View Resume CTA with Magnetic pull */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <Magnetic strength={0.35}>
            <motion.a 
              href="/Naveenkumar_Resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="resume-cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div className="resume-cta-content" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="resume-cta-title">VIEW RESUME</span>
                <ArrowUpRight size={18} className="resume-cta-icon" strokeWidth={2} />
              </div>
              <span className="resume-cta-support">Explore my experience, skills &amp; projects</span>
            </motion.a>
          </Magnetic>
        </div>

        {/* Personal Closing */}
        <div style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '64px' }}>
          <p className="font-head" style={{ 
            fontSize: 'clamp(20px, 3.5vw, 32px)', 
            fontWeight: 600,
            color: 'var(--black)', 
            marginBottom: '28px',
            letterSpacing: '-0.01em'
          }}>
            Let's create something meaningful together.
          </p>
          <div className="font-head" style={{ 
            fontSize: '12px', 
            fontWeight: 700, 
            letterSpacing: '0.18em', 
            color: 'var(--black)',
            marginBottom: '8px'
          }}>
            M. NAVEENKUMAR
          </div>
          <div className="font-body" style={{ 
            fontSize: '14px', 
            color: 'var(--gray-text)',
            marginBottom: '20px'
          }}>
            Chennai, Tamil Nadu, India
          </div>
          <div className="font-body" style={{ 
            fontSize: '13px', 
            color: 'var(--gray-mid)',
            fontStyle: 'italic'
          }}>
            Available for opportunities, collaborations &amp; meaningful projects.
          </div>
        </div>

      </div>

      <style>{`
        .contact-card {
          display: flex;
          flex-direction: column;
          background-color: #FAFAF8;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px 24px;
          text-decoration: none;
          color: var(--black);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .card-label {
          font-family: var(--font-head);
          font-size: 10px;
          fontWeight: 700;
          letter-spacing: 0.15em;
          color: var(--gray-mid);
        }

        .card-icon {
          transition: transform 0.4s ease;
        }

        .card-content {
          margin-bottom: 40px;
          flex-grow: 1;
        }

        .card-main {
          font-family: var(--font-head);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          margin: 0 0 8px 0;
          color: var(--black);
          word-break: break-word;
        }

        .card-support {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--gray-text);
          margin: 0;
        }

        .card-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-head);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--black);
        }

        .card-arrow {
          transition: transform 0.3s ease;
        }

        .contact-card:hover .card-arrow {
          transform: translateX(5px);
        }

        .resume-cta {
          border: 1.5px solid var(--black);
          border-radius: 100px;
          padding: 16px 40px;
          text-decoration: none;
          color: var(--black);
          background-color: var(--white);
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .resume-cta-title {
          font-family: var(--font-head);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .resume-cta-support {
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--gray-text);
          margin-top: 4px;
        }
      `}</style>
    </section>
  );
}
