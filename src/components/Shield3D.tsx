const Shield3D = () => {
  return (
    <div
      className="w-28 h-28 md:w-36 md:h-36 mx-auto"
      style={{
        perspective: "600px",
        animation: "shield-glow-pulse 3s ease-in-out infinite",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          animation: "shield-float 4s ease-in-out infinite",
          transformStyle: "preserve-3d",
        }}
      >
        <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E8FF00" />
              <stop offset="40%" stopColor="#F5FF80" />
              <stop offset="60%" stopColor="#FFFDE6" />
              <stop offset="80%" stopColor="#F5FF80" />
              <stop offset="100%" stopColor="#E8FF00" />
            </linearGradient>
            <linearGradient id="shieldInner" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            <filter id="shieldShadow">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#E8FF00" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* Shield body */}
          <path
            d="M60 8 L108 30 L108 75 C108 100 85 125 60 135 C35 125 12 100 12 75 L12 30 Z"
            fill="url(#shieldGrad)"
            filter="url(#shieldShadow)"
          />
          <path
            d="M60 16 L100 35 L100 75 C100 96 80 118 60 127 C40 118 20 96 20 75 L20 35 Z"
            fill="url(#shieldInner)"
          />
          {/* Check mark */}
          <path
            d="M42 72 L54 84 L78 56"
            stroke="url(#shieldGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Shine line */}
          <path
            d="M30 40 L45 32"
            stroke="#FFFDE6"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Shield3D;
