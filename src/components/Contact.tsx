import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Magnetic from './Magnetic';
import KineticHeading from './KineticHeading';
import TiltCard from './TiltCard';
import BorderBeam from './BorderBeam';

const inquiryTypes = [
  'Data Analytics & BI',
  'AI / ML Development',
  'Freelance Website',
  'UI/UX Architecture',
  'Full-Time Opportunity'
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<string>('Freelance Website');
  const [currentTime, setCurrentTime] = useState<string>('');

  // Live Chennai Time (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`✓ Copied ${label} to clipboard!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Inquiry: ${selectedInquiry} - via Portfolio`);
    const body = encodeURIComponent(`Hi Naveenkumar,\n\nI came across your portfolio and would like to discuss ${selectedInquiry}.\n\nLooking forward to hearing from you!`);
    return `mailto:naveenofficial916@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      style={{ 
        padding: '130px 48px', 
        backgroundColor: 'transparent', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Floating Toast Notification */}
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
              padding: '12px 28px',
              borderRadius: '100px',
              fontFamily: 'var(--font-head)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 16px 36px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <Check size={16} strokeWidth={2.5} color="#22c55e" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Contact Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          {/* Real-time World Clock Pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 18px', borderRadius: '100px', backgroundColor: '#FFFFFF', border: '1px solid var(--border)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)', marginBottom: '20px' }}>
            <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
              <motion.span 
                animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#22c55e' }}
              />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
            </span>
            <span className="font-head" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--black)' }}>
              CHENNAI, INDIA · {currentTime || '5:30 PM'} IST
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <KineticHeading 
              className="font-hero" 
              style={{ 
                fontSize: 'clamp(54px, 8.5vw, 115px)', 
                letterSpacing: '0.02em', 
                lineHeight: 0.98,
                color: 'var(--black)',
                marginBottom: '24px',
                textAlign: 'center'
              }}
            >
              GET IN TOUCH
            </KineticHeading>
          </div>

          <p 
            className="font-body" 
            style={{ 
              fontSize: 'clamp(18px, 2.5vw, 24px)', 
              color: 'var(--black)',
              maxWidth: '650px',
              margin: '0 auto 16px',
              lineHeight: 1.45,
              fontWeight: 500
            }}
          >
            Have a project, opportunity, or idea in mind?<br/>I'd love to hear from you.
          </p>

          <p 
            className="font-body" 
            style={{
              fontSize: '15px',
              color: 'var(--gray-text)',
              maxWidth: '560px',
              margin: '0 auto 36px',
              lineHeight: 1.6
            }}
          >
            Open to opportunities, freelance website initiatives, full-time engineering roles, and discussions around AI and data.
          </p>

          {/* Quick Subject Pre-Selector Chips */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', maxWidth: '780px', margin: '0 auto 48px' }}>
            {inquiryTypes.map(inq => (
              <motion.button
                key={inq}
                onClick={() => setSelectedInquiry(inq)}
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: '7px 16px',
                  borderRadius: '100px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-head)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: selectedInquiry === inq ? '1.5px solid var(--black)' : '1px solid var(--border)',
                  backgroundColor: selectedInquiry === inq ? 'var(--black)' : '#FFFFFF',
                  color: selectedInquiry === inq ? 'var(--white)' : 'var(--black)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: selectedInquiry === inq ? '0 4px 14px rgba(0,0,0,0.12)' : 'none'
                }}
              >
                {inq}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 4 Interactive 3D Contact Cards */}
        <div 
          className="contact-cards" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '24px', 
            marginBottom: '64px'
          }}
        >
          {/* Card 1 - EMAIL */}
          <TiltCard dataCursor="SEND EMAIL" maxTilt={6}>
            <motion.a 
              href={getMailtoLink()} 
              className="contact-card group"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                copyToClipboard('naveenofficial916@gmail.com', 'naveenofficial916@gmail.com');
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--border)',
                borderRadius: '18px',
                padding: '32px 28px',
                textDecoration: 'none',
                color: 'var(--black)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                height: '100%'
              }}
            >
              <div className="card-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
                <span className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gray-mid)' }}>EMAIL</span>
                <img src="/images/contact/logo1.png" alt="Gmail" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>
              <div className="card-content" style={{ marginBottom: '36px', flexGrow: 1 }}>
                <h3 className="font-head" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4, margin: '0 0 8px 0', color: 'var(--black)', wordBreak: 'break-word' }}>
                  naveenofficial916@gmail.com
                </h3>
                <p className="font-body" style={{ fontSize: '12px', color: 'var(--gray-text)', margin: 0 }}>
                  Click to open mail client &amp; copy
                </p>
              </div>
              <div className="card-cta" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--black)' }}>
                <span>Compose Email</span>
                <ArrowRight size={15} className="card-arrow" />
              </div>
            </motion.a>
          </TiltCard>

          {/* Card 2 - PHONE */}
          <TiltCard dataCursor="CALL NOW" maxTilt={6}>
            <motion.a 
              href="tel:+916381550398" 
              className="contact-card group"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                copyToClipboard('6381550398', '+91 6381550398');
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--border)',
                borderRadius: '18px',
                padding: '32px 28px',
                textDecoration: 'none',
                color: 'var(--black)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                height: '100%'
              }}
            >
              <div className="card-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
                <span className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gray-mid)' }}>PHONE</span>
                <img src="/images/contact/logo3.png" alt="Phone" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>
              <div className="card-content" style={{ marginBottom: '36px', flexGrow: 1 }}>
                <h3 className="font-head" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4, margin: '0 0 8px 0', color: 'var(--black)' }}>
                  +91 6381550398
                </h3>
                <p className="font-body" style={{ fontSize: '12px', color: 'var(--gray-text)', margin: 0 }}>
                  Click to dial or copy phone number
                </p>
              </div>
              <div className="card-cta" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--black)' }}>
                <span>Direct Call</span>
                <ArrowRight size={15} className="card-arrow" />
              </div>
            </motion.a>
          </TiltCard>

          {/* Card 3 - LINKEDIN */}
          <TiltCard dataCursor="CONNECT" maxTilt={6}>
            <motion.a 
              href="https://www.linkedin.com/in/naveen-kumar-4858063a1/" 
              target="_blank" 
              rel="noreferrer" 
              className="contact-card group"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--border)',
                borderRadius: '18px',
                padding: '32px 28px',
                textDecoration: 'none',
                color: 'var(--black)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                height: '100%'
              }}
            >
              <div className="card-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
                <span className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gray-mid)' }}>LINKEDIN</span>
                <img src="/images/contact/logo2.png" alt="LinkedIn" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>
              <div className="card-content" style={{ marginBottom: '36px', flexGrow: 1 }}>
                <h3 className="font-head" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4, margin: '0 0 8px 0', color: 'var(--black)' }}>
                  Let's connect professionally
                </h3>
                <p className="font-body" style={{ fontSize: '12px', color: 'var(--gray-text)', margin: 0 }}>
                  Network, references &amp; recommendations
                </p>
              </div>
              <div className="card-cta" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--black)' }}>
                <span>View Profile</span>
                <ArrowRight size={15} className="card-arrow" />
              </div>
            </motion.a>
          </TiltCard>

          {/* Card 4 - GITHUB */}
          <TiltCard dataCursor="SOURCE CODE" maxTilt={6}>
            <motion.a 
              href="https://github.com/naveenofficial916-tech" 
              target="_blank" 
              rel="noreferrer" 
              className="contact-card group"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--border)',
                borderRadius: '18px',
                padding: '32px 28px',
                textDecoration: 'none',
                color: 'var(--black)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                height: '100%'
              }}
            >
              <div className="card-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
                <span className="font-head" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gray-mid)' }}>GITHUB</span>
                <img src="/images/contact/logo4.png" alt="GitHub" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>
              <div className="card-content" style={{ marginBottom: '36px', flexGrow: 1 }}>
                <h3 className="font-head" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4, margin: '0 0 8px 0', color: 'var(--black)' }}>
                  Explore code repositories
                </h3>
                <p className="font-body" style={{ fontSize: '12px', color: 'var(--gray-text)', margin: 0 }}>
                  Open-source projects &amp; architecture
                </p>
              </div>
              <div className="card-cta" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-head)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--black)' }}>
                <span>Open GitHub</span>
                <ArrowRight size={15} className="card-arrow" />
              </div>
            </motion.a>
          </TiltCard>
        </div>

        {/* View Resume CTA with Magnetic pull and Border Beam */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '64px' }}>
          <Magnetic strength={0.35}>
            <motion.a 
              href="/Naveenkumar_Resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="resume-cta-box"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '18px 48px',
                borderRadius: '100px',
                border: '1.5px solid var(--black)',
                backgroundColor: 'var(--black)',
                color: 'var(--white)',
                textDecoration: 'none',
                boxShadow: '0 12px 32px rgba(0,0,0,0.18)'
              }}
            >
              <BorderBeam size={120} duration={6} borderWidth={1.5} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="font-head" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  VIEW OFFICIAL RESUME
                </span>
                <ArrowUpRight size={18} strokeWidth={2.2} />
              </div>
              <span className="font-body" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                Curriculum Vitae · Experience · Certifications
              </span>
            </motion.a>
          </Magnetic>
        </div>

        {/* Closing Signature */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '64px' }}
        >
          <p 
            className="font-head" 
            style={{ 
              fontSize: 'clamp(20px, 3.5vw, 32px)', 
              fontWeight: 600,
              color: 'var(--black)', 
              marginBottom: '20px',
              letterSpacing: '-0.01em'
            }}
          >
            Let's create something memorable together.
          </p>

          <div 
            className="font-head" 
            style={{ 
              fontSize: '12px', 
              fontWeight: 700, 
              letterSpacing: '0.18em', 
              color: 'var(--black)',
              marginBottom: '8px'
            }}
          >
            M. NAVEENKUMAR
          </div>

          <div 
            className="font-body" 
            style={{ 
              fontSize: '14px', 
              color: 'var(--gray-text)',
              marginBottom: '16px'
            }}
          >
            Chennai, Tamil Nadu, India
          </div>

          <div 
            className="font-body" 
            style={{ 
              fontSize: '13px', 
              color: 'var(--gray-mid)',
              fontStyle: 'italic'
            }}
          >
            Available for innovative roles, client collaborations &amp; product engineering.
          </div>
        </motion.div>

      </div>

      <style>{`
        .contact-card:hover {
          border-color: var(--black) !important;
          box-shadow: 0 20px 48px rgba(0,0,0,0.08) !important;
        }
        .contact-card:hover .card-arrow {
          transform: translateX(5px);
        }
        .card-arrow {
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}
