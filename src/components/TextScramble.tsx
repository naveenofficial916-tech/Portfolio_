import { useState, useRef, useEffect, useCallback } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>_\\/[]{}*^?#';

interface TextScrambleProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  triggerOnHover?: boolean;
  autoPlay?: boolean;
  duration?: number;
}

export default function TextScramble({
  children,
  className = '',
  style = {},
  triggerOnHover = true,
  autoPlay = false,
  duration = 600,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children);
  const isScrambling = useRef(false);
  const targetText = children;

  const scramble = useCallback(() => {
    if (isScrambling.current) return;
    isScrambling.current = true;

    const length = targetText.length;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Number of characters already resolved
      const resolvedCount = Math.floor(progress * length);

      let result = '';
      for (let i = 0; i < length; i++) {
        if (targetText[i] === ' ') {
          result += ' ';
        } else if (i < resolvedCount) {
          result += targetText[i];
        } else {
          result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setDisplayText(result);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayText(targetText);
        isScrambling.current = false;
      }
    };

    requestAnimationFrame(update);
  }, [targetText, duration]);

  useEffect(() => {
    if (autoPlay) {
      scramble();
    }
  }, [autoPlay, scramble]);

  return (
    <span
      className={className}
      style={{ display: 'inline-block', fontVariantNumeric: 'tabular-nums', ...style }}
      onMouseEnter={triggerOnHover ? scramble : undefined}
    >
      {displayText}
    </span>
  );
}
