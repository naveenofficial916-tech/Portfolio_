import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  style?: React.CSSProperties;
  dataCursor?: string;
  onClick?: () => void;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  style = {},
  dataCursor,
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsTouchOrReduced(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchOrReduced || !cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rX = ((y / height) - 0.5) * -maxTilt;
    const rY = ((x / width) - 0.5) * maxTilt;

    setRotateX(rX);
    setRotateY(rY);
    setGlare({
      x: (x / width) * 100,
      y: (y / height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      data-cursor={dataCursor}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        isTouchOrReduced
          ? {}
          : {
              rotateX,
              rotateY,
              y: isHovered ? -6 : 0,
              scale: isHovered ? 1.012 : 1,
            }
      }
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.35 }}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        position: 'relative',
        ...style,
      }}
    >
      {children}

      {/* Pinterest-Worthy Prismatic Holographic Glare Sheen */}
      {!isTouchOrReduced && (
        <>
          {/* 1. Dynamic Radial Light Spot */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              pointerEvents: 'none',
              background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.9), transparent 70%)`,
              opacity: glare.opacity,
              transition: 'opacity 0.25s ease',
              mixBlendMode: 'overlay',
              zIndex: 10,
            }}
          />

          {/* 2. Iridescent Optical Foil Sheen */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              pointerEvents: 'none',
              background: `linear-gradient(${115 + rotateY * 8}deg, rgba(255,255,255,0.4) 0%, rgba(220, 240, 255, 0.18) 25%, rgba(255, 230, 245, 0.22) 50%, rgba(230, 255, 245, 0.18) 75%, transparent 100%)`,
              opacity: isHovered ? 0.35 : 0,
              transition: 'opacity 0.4s ease',
              mixBlendMode: 'color-dodge',
              zIndex: 11,
            }}
          />
        </>
      )}
    </motion.div>
  );
}
