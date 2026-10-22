import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, textarea, .project-block, .skill-row, .cert-row, .tool-box');
        setIsPointer(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
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
      {/* Outer ring cursor */}
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
          width: isPointer ? '48px' : isClicking ? '26px' : '34px',
          height: isPointer ? '48px' : isClicking ? '26px' : '34px',
          borderRadius: '50%',
          border: '1.5px solid rgba(17, 17, 17, 0.4)',
          backgroundColor: isPointer ? 'rgba(17, 17, 17, 0.05)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out',
        }}
      />
      {/* Center dot cursor */}
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
          width: isClicking ? '8px' : isPointer ? '4px' : '6px',
          height: isClicking ? '8px' : isPointer ? '4px' : '6px',
          borderRadius: '50%',
          backgroundColor: '#111111',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.15s ease-out, height 0.15s ease-out',
        }}
      />
    </>
  );
}
