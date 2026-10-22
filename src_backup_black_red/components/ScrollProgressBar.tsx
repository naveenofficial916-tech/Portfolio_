import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        backgroundColor: '#E50914',
        boxShadow: '0 0 10px rgba(229, 9, 20, 0.7)',
        originX: 0,
        scaleX,
        zIndex: 1001,
        pointerEvents: 'none',
      }}
    />
  );
}
