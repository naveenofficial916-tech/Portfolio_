const items = [
  'ARTIFICIAL INTELLIGENCE',
  'DATA ENGINEERING',
  'DATABRICKS & PYSPARK',
  'EMUDHRA HACKATHON 2ND RUNNER-UP',
  'UI/UX DESIGN & FIGMA',
  'POSTGRESQL & SQL',
  'COMPUTER VISION & IOT',
  'SRM VALLIAMMAI',
];

export default function MarqueeStrip() {
  return (
    <div
      className="marquee-container"
      style={{
        width: '100%',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--white)',
        padding: '16px 0',
        position: 'relative',
        zIndex: 10,
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="marquee-track">
        {[...items, ...items, ...items].map((text, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '24px',
              paddingRight: '24px',
            }}
          >
            <span
              className="font-head"
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: text.includes('2ND RUNNER-UP') ? 'var(--black)' : 'var(--gray-text)',
                transition: 'color 0.25s ease',
              }}
            >
              {text}
            </span>
            <span
              style={{
                color: 'var(--black)',
                fontSize: '12px',
                opacity: 0.35,
              }}
            >
              ✦
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          white-space: nowrap;
          will-change: transform;
          animation: marqueeLeft 32s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
      `}</style>
    </div>
  );
}
