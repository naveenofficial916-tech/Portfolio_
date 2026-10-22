import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-performance spring interpolation
  const springConfig = { damping: 24, stiffness: 340, mass: 0.45 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices or reduced motion preference
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        // Check for contextual cursor labels (e.g. over project cards, photo, etc.)
        const labeledEl = target.closest('[data-cursor]') as HTMLElement | null;
        if (labeledEl) {
          const label = labeledEl.getAttribute('data-cursor');
          setCursorLabel(label);
          setIsPointer(false);
        } else {
          setCursorLabel(null);
          const interactive = target.closest(
            'a, button, [role="button"], input, textarea, .nav-option-box, .skill-row, .cert-row, .tool-box, .freelance-project-card, .edu-content'
          );
          setIsPointer(!!interactive);
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer contextual / follower ring */}
      <motion.div
        className="hide-mobile"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: cursorLabel ? 'auto' : isPointer ? '52px' : isClicking ? '26px' : '36px',
          height: cursorLabel ? '36px' : isPointer ? '52px' : isClicking ? '26px' : '36px',
          padding: cursorLabel ? '0 18px' : 0,
          borderRadius: '100px',
          border: cursorLabel
            ? 'none'
            : isPointer
            ? '1.5px solid rgba(17, 17, 17, 0.75)'
            : '1.5px solid rgba(17, 17, 17, 0.3)',
          backgroundColor: cursorLabel
            ? 'var(--black)'
            : isPointer
            ? 'rgba(17, 17, 17, 0.05)'
            : 'transparent',
          backdropFilter: cursorLabel ? 'blur(8px)' : isPointer ? 'blur(2px)' : 'none',
          color: 'var(--white)',
          pointerEvents: 'none',
          zIndex: 99998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: cursorLabel
            ? '0 10px 30px rgba(0,0,0,0.22)'
            : isPointer
            ? '0 6px 20px rgba(0,0,0,0.06)'
            : 'none',
          transition:
            'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.25s ease',
        }}
      >
        <AnimatePresence>
          {cursorLabel && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.16 }}
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {cursorLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Center dot cursor (hidden when contextual label is active) */}
      {!cursorLabel && (
        <motion.div
          className="hide-mobile"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
            width: isClicking ? '8px' : isPointer ? '4px' : '5px',
            height: isClicking ? '8px' : isPointer ? '4px' : '5px',
            borderRadius: '50%',
            backgroundColor: '#111111',
            pointerEvents: 'none',
            zIndex: 99999,
            transition: 'width 0.15s ease-out, height 0.15s ease-out',
          }}
        />
      )}
    </>
  );
}
