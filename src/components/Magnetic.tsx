import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export default function Magnetic({ children, strength = 0.3, className = '' }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsTouchOrReduced(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchOrReduced || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (isTouchOrReduced) return;
    setPosition({ x: 0, y: 0 });
  };

  if (isTouchOrReduced) {
    return <div className={className} style={{ display: 'inline-block' }}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 280, damping: 18, mass: 0.4 }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
}
