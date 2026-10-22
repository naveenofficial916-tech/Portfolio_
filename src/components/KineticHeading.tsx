import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface KineticHeadingProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function KineticHeading({
  children,
  as = 'h2',
  className = '',
  style = {},
  delay = 0,
}: KineticHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const words = children.split(' ');

  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.28em',
        ...style,
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            paddingBottom: '0.06em',
          }}
        >
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 140,
              damping: 18,
              mass: 0.8,
              delay: delay + i * 0.05,
            }}
            style={{
              display: 'inline-block',
              transformOrigin: 'bottom',
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
