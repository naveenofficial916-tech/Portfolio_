import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Magnetic from './Magnetic';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <div style={{ position: 'fixed', bottom: '36px', right: '36px', zIndex: 90 }}>
          <Magnetic strength={0.35}>
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              aria-label="Scroll back to top"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#141414',
                color: '#FFFFFF',
                border: '1.5px solid #E50914',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5), 0 0 15px rgba(229, 9, 20, 0.4)',
                outline: 'none',
              }}
            >
              <ArrowUp size={20} strokeWidth={2} />
            </motion.button>
          </Magnetic>
        </div>
      )}
    </AnimatePresence>
  );
}
