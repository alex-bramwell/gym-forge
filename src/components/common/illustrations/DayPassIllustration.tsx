interface DayPassIllustrationProps {
  className?: string;
}

const DayPassIllustration = ({ className }: DayPassIllustrationProps) => (
  <svg
    viewBox="0 0 400 280"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Day pass and free trial cards showing pricing and payment options"
  >
    <defs>
      <linearGradient id="dayPassBg" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="rgba(37,99,235,0.12)" />
        <stop offset="100%" stopColor="rgba(37,99,235,0.03)" />
      </linearGradient>
      <linearGradient id="trialBg" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="rgba(124,58,237,0.14)" />
        <stop offset="100%" stopColor="rgba(124,58,237,0.04)" />
      </linearGradient>
      <linearGradient id="trialBtnGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="dayPassEdgeGlow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#2563eb" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
      </linearGradient>
    </defs>

    {/* ===== BACK CARD: Day Pass ===== */}
    <g transform="translate(20, 20)">
      {/* Card body */}
      <rect x="0" y="0" width="240" height="240" rx="12" fill="#12121a" />
      <rect x="0" y="0" width="240" height="240" rx="12" fill="url(#dayPassBg)" />
      <rect
        x="0"
        y="0"
        width="240"
        height="240"
        rx="12"
        fill="none"
        stroke="rgba(37,99,235,0.2)"
        strokeWidth="1"
      />

      {/* Top accent strip */}
      <rect x="0" y="0" width="240" height="3" rx="1.5" fill="#2563eb" opacity="0.4" />

      {/* DAY PASS label */}
      <text
        x="24"
        y="38"
        fill="#2563eb"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="800"
        fontSize="14"
        letterSpacing="2"
      >
        DAY PASS
      </text>

      {/* Price */}
      <text
        x="24"
        y="80"
        fill="#f0f0f5"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="800"
        fontSize="32"
      >
        $25
      </text>
      <text
        x="88"
        y="80"
        fill="#8b8b9e"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="400"
        fontSize="10"
      >
        / session
      </text>

      {/* Valid text */}
      <text
        x="24"
        y="100"
        fill="#8b8b9e"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="400"
        fontSize="9"
      >
        Valid for one session
      </text>

      {/* Features skeleton */}
      <circle cx="30" cy="120" r="2.5" fill="rgba(37,99,235,0.3)" />
      <rect x="40" y="117.5" width="100" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      <circle cx="30" cy="134" r="2.5" fill="rgba(37,99,235,0.3)" />
      <rect x="40" y="131.5" width="80" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      <circle cx="30" cy="148" r="2.5" fill="rgba(37,99,235,0.3)" />
      <rect x="40" y="145.5" width="110" height="4" rx="2" fill="rgba(255,255,255,0.06)" />

      {/* Dashed perforation line */}
      <line
        x1="0"
        y1="170"
        x2="240"
        y2="170"
        stroke="rgba(37,99,235,0.25)"
        strokeWidth="1"
        strokeDasharray="6 4"
      />
      {/* Perforation notches */}
      <circle cx="0" cy="170" r="6" fill="#0a0a0f" />
      <circle cx="240" cy="170" r="6" fill="#0a0a0f" />

      {/* Stub section - Barcode-style lines */}
      <g opacity="0.4">
        <rect x="24" y="184" width="2" height="36" fill="rgba(37,99,235,0.5)" />
        <rect x="29" y="184" width="1" height="36" fill="rgba(37,99,235,0.4)" />
        <rect x="33" y="184" width="3" height="36" fill="rgba(37,99,235,0.5)" />
        <rect x="39" y="184" width="1" height="36" fill="rgba(37,99,235,0.3)" />
        <rect x="43" y="184" width="2" height="36" fill="rgba(37,99,235,0.5)" />
        <rect x="48" y="184" width="1" height="36" fill="rgba(37,99,235,0.4)" />
        <rect x="52" y="184" width="3" height="36" fill="rgba(37,99,235,0.5)" />
        <rect x="58" y="184" width="1" height="36" fill="rgba(37,99,235,0.3)" />
        <rect x="62" y="184" width="2" height="36" fill="rgba(37,99,235,0.5)" />
        <rect x="67" y="184" width="1" height="36" fill="rgba(37,99,235,0.4)" />
        <rect x="71" y="184" width="2" height="36" fill="rgba(37,99,235,0.3)" />
        <rect x="76" y="184" width="3" height="36" fill="rgba(37,99,235,0.5)" />
        <rect x="82" y="184" width="1" height="36" fill="rgba(37,99,235,0.4)" />
        <rect x="86" y="184" width="2" height="36" fill="rgba(37,99,235,0.5)" />
        <rect x="91" y="184" width="1" height="36" fill="rgba(37,99,235,0.3)" />
        <rect x="95" y="184" width="3" height="36" fill="rgba(37,99,235,0.5)" />
        <rect x="101" y="184" width="1" height="36" fill="rgba(37,99,235,0.4)" />
        <rect x="105" y="184" width="2" height="36" fill="rgba(37,99,235,0.5)" />
        <rect x="110" y="184" width="1" height="36" fill="rgba(37,99,235,0.3)" />
        <rect x="114" y="184" width="3" height="36" fill="rgba(37,99,235,0.5)" />
      </g>

      {/* Barcode number */}
      <text
        x="70"
        y="230"
        textAnchor="middle"
        fill="rgba(139,139,158,0.5)"
        fontFamily="'Courier New', monospace"
        fontWeight="400"
        fontSize="6"
        letterSpacing="2"
      >
        GF-DP-2026-0218
      </text>
    </g>

    {/* ===== FRONT CARD: Free Trial (overlapping) ===== */}
    <g transform="translate(140, 30)">
      {/* Card body with shadow-like effect */}
      <rect x="-3" y="3" width="246" height="230" rx="12" fill="rgba(0,0,0,0.3)" />
      <rect x="0" y="0" width="240" height="230" rx="12" fill="#12121a" />
      <rect x="0" y="0" width="240" height="230" rx="12" fill="url(#trialBg)" />
      <rect
        x="0"
        y="0"
        width="240"
        height="230"
        rx="12"
        fill="none"
        stroke="rgba(124,58,237,0.25)"
        strokeWidth="1"
      />

      {/* Top accent strip */}
      <rect x="0" y="0" width="240" height="3" rx="1.5" fill="#7c3aed" opacity="0.5" />

      {/* Star icon */}
      <g transform="translate(24, 20)">
        <path
          d="M8 0 L10.2 5.1 L16 5.9 L11.8 9.8 L12.8 15.5 L8 12.9 L3.2 15.5 L4.2 9.8 L0 5.9 L5.8 5.1 Z"
          fill="#7c3aed"
          opacity="0.7"
        />
      </g>

      {/* FREE TRIAL label */}
      <text
        x="48"
        y="33"
        fill="#7c3aed"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="800"
        fontSize="14"
        letterSpacing="1.5"
      >
        FREE TRIAL
      </text>

      {/* Sub text */}
      <text
        x="24"
        y="54"
        fill="#f0f0f5"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="500"
        fontSize="10"
      >
        Try your first class
      </text>
      <text
        x="24"
        y="68"
        fill="#8b8b9e"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="400"
        fontSize="8"
      >
        No commitment required
      </text>

      {/* Divider */}
      <rect x="24" y="80" width="192" height="1" fill="rgba(255,255,255,0.06)" />

      {/* Card input field */}
      <rect x="24" y="92" width="192" height="30" rx="6" fill="rgba(255,255,255,0.04)" />
      <rect
        x="24"
        y="92"
        width="192"
        height="30"
        rx="6"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="0.5"
      />
      {/* Card icon */}
      <rect x="34" y="102" width="14" height="10" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <rect x="34" y="105" width="14" height="3" fill="rgba(255,255,255,0.08)" />
      {/* Card number */}
      <text
        x="56"
        y="110.5"
        fill="rgba(240,240,245,0.5)"
        fontFamily="'Courier New', monospace"
        fontWeight="400"
        fontSize="8"
        letterSpacing="0.5"
      >
        4242 **** **** 4242
      </text>
      {/* Lock icon */}
      <g transform="translate(198, 102)">
        <rect x="0" y="3" width="8" height="6" rx="1.5" fill="none" stroke="rgba(5,150,105,0.6)" strokeWidth="0.8" />
        <path d="M2 3 V1.5 a2 2 0 0 1 4 0 V3" fill="none" stroke="rgba(5,150,105,0.6)" strokeWidth="0.8" />
      </g>

      {/* Card authorisation note */}
      <text
        x="24"
        y="136"
        fill="#8b8b9e"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="400"
        fontSize="7"
      >
        Card authorisation only -- you won't be charged
      </text>
      {/* Small lock + shield indicator */}
      <circle cx="186" cy="133" r="4" fill="rgba(5,150,105,0.1)" />
      <g transform="translate(183.5, 130.5)">
        <path d="M2.5 0 L5 1 V3.5 a2.5 2.5 0 0 1-5 0 V1 Z" fill="none" stroke="#059669" strokeWidth="0.5" />
      </g>

      {/* Divider */}
      <rect x="24" y="148" width="192" height="1" fill="rgba(255,255,255,0.04)" />

      {/* Benefits mini list */}
      <g fill="#8b8b9e" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7.5" fontWeight="400">
        <text x="36" y="164">Full access to any class</text>
        <text x="36" y="178">Includes coach guidance</text>
      </g>
      {/* Check marks */}
      <circle cx="28" cy="161" r="3.5" fill="rgba(5,150,105,0.15)" />
      <path d="M26 161 L27.5 162.5 L30.5 159.5" fill="none" stroke="#059669" strokeWidth="0.8" />
      <circle cx="28" cy="175" r="3.5" fill="rgba(5,150,105,0.15)" />
      <path d="M26 175 L27.5 176.5 L30.5 173.5" fill="none" stroke="#059669" strokeWidth="0.8" />

      {/* Claim Trial button */}
      <rect x="24" y="194" width="192" height="26" rx="7" fill="url(#trialBtnGrad)" />
      <rect
        x="24"
        y="194"
        width="192"
        height="26"
        rx="7"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.5"
      />
      {/* Button glow */}
      <rect x="24" y="194" width="192" height="13" rx="7" fill="rgba(255,255,255,0.05)" />
      <text
        x="120"
        y="210.5"
        textAnchor="middle"
        fill="#f0f0f5"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="700"
        fontSize="10"
        letterSpacing="0.3"
      >
        Claim Trial
      </text>
    </g>
  </svg>
);

export default DayPassIllustration;
