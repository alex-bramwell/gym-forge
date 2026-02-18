interface WodIllustrationProps {
  className?: string;
}

const WodIllustration = ({ className }: WodIllustrationProps) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Workout of the Day card showing a structured WOD called FRAN"
  >
    <defs>
      <linearGradient id="wodAccentGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="wodDivider" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(255,255,255,0)" />
        <stop offset="20%" stopColor="rgba(255,255,255,0.1)" />
        <stop offset="80%" stopColor="rgba(255,255,255,0.1)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
      <linearGradient id="wodCardGlow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.03" />
      </linearGradient>
      <clipPath id="wodCardClip">
        <rect x="24" y="12" width="352" height="276" rx="12" />
      </clipPath>
    </defs>

    {/* Card background */}
    <rect x="24" y="12" width="352" height="276" rx="12" fill="#12121a" />
    <rect x="24" y="12" width="352" height="276" rx="12" fill="url(#wodCardGlow)" />
    <rect
      x="24"
      y="12"
      width="352"
      height="276"
      rx="12"
      fill="none"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />

    {/* Date header bar */}
    <rect
      x="24"
      y="12"
      width="352"
      height="32"
      rx="0"
      fill="rgba(37,99,235,0.12)"
      clipPath="url(#wodCardClip)"
    />
    <rect x="24" y="43" width="352" height="1" fill="rgba(37,99,235,0.2)" />
    <text
      x="200"
      y="33"
      textAnchor="middle"
      fill="#2563eb"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="10"
      letterSpacing="0.5"
    >
      Tuesday, 18 Feb 2026
    </text>

    {/* WOD title row */}
    <text
      x="44"
      y="68"
      fill="#f0f0f5"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="800"
      fontSize="18"
      letterSpacing="1"
    >
      FRAN
    </text>
    {/* For Time badge */}
    <rect x="94" y="56" width="60" height="18" rx="9" fill="rgba(124,58,237,0.18)" />
    <rect x="94" y="56" width="60" height="18" rx="9" fill="none" stroke="rgba(124,58,237,0.35)" strokeWidth="0.5" />
    <text
      x="124"
      y="68.5"
      textAnchor="middle"
      fill="#7c3aed"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="8"
    >
      For Time
    </text>

    {/* ---- WARMUP Section ---- */}
    <text
      x="44"
      y="92"
      fill="#8b8b9e"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="700"
      fontSize="7"
      letterSpacing="1.5"
    >
      WARMUP
    </text>
    <text
      x="44"
      y="105"
      fill="#f0f0f5"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="500"
      fontSize="9"
    >
      400m Run
    </text>
    <text
      x="44"
      y="117"
      fill="rgba(240,240,245,0.7)"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="400"
      fontSize="8"
    >
      2 Rounds: 10 Air Squats, 10 PVC Pass-Throughs
    </text>

    {/* Divider */}
    <rect x="44" y="126" width="312" height="1" fill="url(#wodDivider)" />

    {/* ---- STRENGTH Section ---- */}
    <text
      x="44"
      y="142"
      fill="#8b8b9e"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="700"
      fontSize="7"
      letterSpacing="1.5"
    >
      STRENGTH
    </text>
    <text
      x="44"
      y="156"
      fill="#f0f0f5"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="500"
      fontSize="9.5"
    >
      Front Squat 5-5-5-5
    </text>

    {/* Divider */}
    <rect x="44" y="166" width="312" height="1" fill="url(#wodDivider)" />

    {/* ---- METCON Section ---- */}
    <text
      x="44"
      y="182"
      fill="#8b8b9e"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="700"
      fontSize="7"
      letterSpacing="1.5"
    >
      METCON
    </text>
    {/* Accent underline on METCON label */}
    <rect x="44" y="185" width="36" height="1.5" rx="0.75" fill="#2563eb" opacity="0.7" />

    <text
      x="44"
      y="205"
      fill="#f0f0f5"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="800"
      fontSize="16"
      letterSpacing="0.5"
    >
      21-15-9
    </text>
    <text
      x="44"
      y="219"
      fill="rgba(240,240,245,0.8)"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="500"
      fontSize="9"
    >
      Thrusters (95/65 lb)
    </text>
    <text
      x="44"
      y="232"
      fill="rgba(240,240,245,0.8)"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="500"
      fontSize="9"
    >
      Pull-ups
    </text>

    {/* Divider */}
    <rect x="44" y="242" width="312" height="1" fill="url(#wodDivider)" />

    {/* ---- COOLDOWN Section ---- */}
    <text
      x="44"
      y="258"
      fill="#8b8b9e"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="700"
      fontSize="7"
      letterSpacing="1.5"
    >
      COOLDOWN
    </text>
    <text
      x="44"
      y="272"
      fill="rgba(240,240,245,0.7)"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="400"
      fontSize="9"
    >
      2:00 Foam Roll / Stretch
    </text>

    {/* Subtle glow accent on the right edge */}
    <rect
      x="370"
      y="44"
      width="2"
      height="60"
      rx="1"
      fill="url(#wodAccentGrad)"
      opacity="0.4"
    />
  </svg>
);

export default WodIllustration;
