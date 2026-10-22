import { useEffect, useRef } from 'react';

export default function InteractiveMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);
    let animationId: number;

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Grid configuration
    const cols = 36;
    const rows = 20;
    const fov = 380;
    let time = 0;

    const render = () => {
      time += 0.01;

      // Smooth mouse lerp with soft damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const mouseNormX = (mouse.x / width - 0.5) * 2;
      const mouseNormY = (mouse.y / height - 0.5) * 2;

      // Camera / Perspective angles
      const rotX = 0.58 + mouseNormY * 0.12;
      const rotY = mouseNormX * 0.15;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const spacing = Math.min(width, 1400) / 32;
      const startX = -((cols - 1) * spacing) / 2;
      const startZ = -((rows - 1) * spacing) / 2;

      const projectedPoints: { x: number; y: number; alpha: number }[][] = [];

      // Calculate 3D points
      for (let r = 0; r < rows; r++) {
        projectedPoints[r] = [];
        for (let c = 0; c < cols; c++) {
          const worldX = startX + c * spacing;
          const worldZ = startZ + r * spacing;

          // Multi-frequency undulating wave - gentle & calming
          const wave1 = Math.sin(c * 0.18 + time * 0.9) * 22;
          const wave2 = Math.cos(r * 0.22 + time * 0.7) * 18;
          const wave3 = Math.sin((c + r) * 0.12 + time * 1.1) * 12;

          // Mouse proximity ripple disturbance - soft swell
          const distToMouse = Math.hypot(worldX - (mouse.x - width / 2) * 1.1, worldZ - (mouse.y - height / 2) * 1.1);
          const mouseRipple = Math.exp(-distToMouse / 260) * 32 * Math.sin(distToMouse * 0.04 - time * 2.2);

          const worldY = wave1 + wave2 + wave3 + mouseRipple + 80;

          // 3D rotation
          const x1 = worldX * cosY - worldZ * sinY;
          const z1 = worldX * sinY + worldZ * cosY;

          const y2 = worldY * cosX - z1 * sinX;
          const z2 = worldY * sinX + z1 * cosX + 660;

          // 2D projection
          if (z2 > 10) {
            const scale = fov / z2;
            const projX = width / 2 + x1 * scale;
            const projY = height / 2 + y2 * scale;
            const depthAlpha = Math.max(0, Math.min(1, (z2 - 200) / 900));
            const alpha = (1 - depthAlpha) * 0.18;

            projectedPoints[r][c] = { x: projX, y: projY, alpha };
          } else {
            projectedPoints[r][c] = { x: 0, y: 0, alpha: 0 };
          }
        }
      }

      // Draw horizontal & vertical grid lines with fine hair-thin stroke
      ctx.lineWidth = 0.55;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p1 = projectedPoints[r][c];
          if (p1.alpha <= 0.008) continue;

          // Horizontal line
          if (c < cols - 1) {
            const p2 = projectedPoints[r][c + 1];
            if (p2.alpha > 0.008) {
              const lineAlpha = (p1.alpha + p2.alpha) * 0.25;
              ctx.strokeStyle = `rgba(17, 17, 17, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          // Vertical line
          if (r < rows - 1) {
            const p3 = projectedPoints[r + 1][c];
            if (p3.alpha > 0.008) {
              const lineAlpha = (p1.alpha + p3.alpha) * 0.2;
              ctx.strokeStyle = `rgba(17, 17, 17, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p3.x, p3.y);
              ctx.stroke();
            }
          }

          // Delicate node points
          if ((r + c) % 3 === 0) {
            ctx.beginPath();
            ctx.arc(p1.x, p1.y, 1.0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(17, 17, 17, ${p1.alpha * 0.5})`;
            ctx.fill();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.85,
        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, transparent 80%)',
      }}
    />
  );
}
