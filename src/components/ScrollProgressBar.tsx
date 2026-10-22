import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 1001,
        pointerEvents: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, #333333 0%, #111111 85%, #000000 100%)',
          originX: 0,
          scaleX,
          position: 'relative',
        }}
      >
        {/* Luminous Glow Tip */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: '-2px',
            bottom: '-2px',
            width: '24px',
            background: 'radial-gradient(ellipse at center, rgba(17,17,17,0.7) 0%, transparent 80%)',
            filter: 'blur(2px)',
          }}
        />
      </motion.div>
    </div>
  );
}
