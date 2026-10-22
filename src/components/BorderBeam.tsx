interface BorderBeamProps {
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

export default function BorderBeam({
  size = 120,
  duration = 8,
  borderWidth = 1.5,
  colorFrom = '#111111',
  colorTo = 'transparent',
  className = '',
}: BorderBeamProps) {
  return (
    <div
      className={`border-beam-wrapper ${className}`}
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        borderRadius: 'inherit',
        border: `${borderWidth}px solid transparent`,
        maskImage: 'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
        maskClip: 'padding-box, border-box',
        maskComposite: 'intersect',
        WebkitMaskImage: 'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
        WebkitMaskClip: 'padding-box, border-box',
        WebkitMaskComposite: 'source-in',
      }}
    >
      <div
        style={{
          position: 'absolute',
          aspectRatio: '1',
          width: `${size}px`,
          offsetPath: `rect(0 auto auto 0 round inherit)`,
          animation: `borderBeamKeyframe ${duration}s linear infinite`,
          background: `linear-gradient(to left, ${colorFrom}, ${colorTo})`,
        }}
      />
      <style>{`
        @keyframes borderBeamKeyframe {
          100% {
            offset-distance: 100%;
          }
        }
      `}</style>
    </div>
  );
}
