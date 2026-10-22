import { useState, useEffect, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = useCallback((e: MouseEvent) => {
    // Avoid creating ripples when clicking native scrollbars or off-screen
    if (e.clientX <= 0 || e.clientY <= 0) return;

    const newRipple: Ripple = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };

    setRipples((prev) => [...prev.slice(-6), newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 700);
  }, []);

  useEffect(() => {
    window.addEventListener('click', addRipple, { passive: true });
    return () => window.removeEventListener('click', addRipple);
  }, [addRipple]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999,
        overflow: 'hidden',
      }}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="click-ripple-effect"
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}
