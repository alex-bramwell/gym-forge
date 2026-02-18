interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => (
  <svg
    viewBox="0 0 120 48"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="No Sweat Fitness"
  >
    <g transform="skewX(-5)">
      <text
        x="12"
        y="30"
        fill="currentColor"
        fontFamily="'Montserrat', 'Inter', sans-serif"
        fontWeight="900"
        fontSize="36"
        textLength="96"
        lengthAdjust="spacing"
      >
        NSF
      </text>
      <line
        x1="12"
        y1="34"
        x2="108"
        y2="34"
        stroke="url(#nsfAccent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="12"
        y="44"
        fill="currentColor"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="600"
        fontSize="7.5"
        textLength="96"
        lengthAdjust="spacing"
        opacity="0.6"
      >
        NO SWEAT FITNESS
      </text>
    </g>
    <defs>
      <linearGradient id="nsfAccent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
