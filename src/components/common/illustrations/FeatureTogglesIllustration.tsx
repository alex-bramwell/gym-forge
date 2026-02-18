interface FeatureTogglesIllustrationProps {
  className?: string;
}

const FeatureTogglesIllustration = ({ className }: FeatureTogglesIllustrationProps) => (
  <svg
    viewBox="0 0 400 280"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Feature toggles panel with six configurable gym features"
  >
    <defs>
      <linearGradient id="toggle-on-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <filter id="toggle-glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Panel background */}
    <rect
      x="20"
      y="16"
      width="360"
      height="248"
      rx="12"
      fill="#12121a"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />

    {/* Header area */}
    <rect
      x="20"
      y="16"
      width="360"
      height="40"
      rx="12"
      fill="rgba(255,255,255,0.02)"
    />
    <rect x="20" y="44" width="360" height="12" fill="rgba(255,255,255,0.02)" />
    <line x1="20" y1="56" x2="380" y2="56" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />

    {/* Header icon */}
    <circle cx="44" cy="36" r="10" fill="rgba(37,99,235,0.1)" />
    <rect x="39" y="32" width="4" height="8" rx="2" fill="#2563eb" />
    <circle cx="41" cy="33" r="1.5" fill="#fff" />
    <rect x="47" y="32" width="4" height="8" rx="2" fill="#7c3aed" />
    <circle cx="49" cy="37" r="1.5" fill="#fff" />

    {/* Header text */}
    <text
      x="60"
      y="34"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="12"
      fontWeight="700"
      fill="#f0f0f5"
    >
      Feature Toggles
    </text>
    <text
      x="60"
      y="45"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="7.5"
      fill="#8b8b9e"
    >
      Enable or disable features for your gym
    </text>

    {/* Active count badge */}
    <rect x="330" y="28" width="36" height="16" rx="8" fill="rgba(5,150,105,0.15)" />
    <text
      x="348"
      y="39"
      textAnchor="middle"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="7"
      fontWeight="600"
      fill="#059669"
    >
      4 / 6
    </text>

    {/* === Row 1: Class Booking (ON) === */}
    <rect x="36" y="64" width="328" height="30" rx="6" fill="rgba(255,255,255,0.02)" />
    {/* Icon circle */}
    <circle cx="54" cy="79" r="8" fill="rgba(37,99,235,0.12)" />
    <rect x="50" y="74" width="8" height="8" rx="1.5" fill="none" stroke="#2563eb" strokeWidth="0.9" />
    <line x1="50" y1="79" x2="58" y2="79" stroke="#2563eb" strokeWidth="0.7" />
    <line x1="53" y1="74" x2="53" y2="76" stroke="#2563eb" strokeWidth="0.7" />
    <line x1="55" y1="74" x2="55" y2="76" stroke="#2563eb" strokeWidth="0.7" />
    {/* Feature name */}
    <text x="70" y="77" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="500" fill="#f0f0f5">
      Class Booking
    </text>
    <text x="70" y="87" fontFamily="'Inter', -apple-system, sans-serif" fontSize="6.5" fill="#8b8b9e">
      Members can book into scheduled classes
    </text>
    {/* Toggle ON */}
    <rect x="332" y="72" width="24" height="14" rx="7" fill="url(#toggle-on-grad)" />
    <circle cx="349" cy="79" r="5" fill="#ffffff" />

    {/* === Row 2: Workout Programming (ON) === */}
    <rect x="36" y="98" width="328" height="30" rx="6" fill="rgba(255,255,255,0.04)" />
    {/* Icon circle */}
    <circle cx="54" cy="113" r="8" fill="rgba(124,58,237,0.12)" />
    {/* Barbell icon */}
    <rect x="48" y="112" width="12" height="2" rx="1" fill="#7c3aed" />
    <rect x="48" y="110" width="3" height="6" rx="1" fill="#7c3aed" />
    <rect x="57" y="110" width="3" height="6" rx="1" fill="#7c3aed" />
    {/* Feature name */}
    <text x="70" y="111" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="500" fill="#f0f0f5">
      Workout Programming
    </text>
    <text x="70" y="121" fontFamily="'Inter', -apple-system, sans-serif" fontSize="6.5" fill="#8b8b9e">
      Publish daily WODs and training programs
    </text>
    {/* Toggle ON */}
    <rect x="332" y="106" width="24" height="14" rx="7" fill="url(#toggle-on-grad)" />
    <circle cx="349" cy="113" r="5" fill="#ffffff" />

    {/* === Row 3: Coach Profiles (ON) === */}
    <rect x="36" y="132" width="328" height="30" rx="6" fill="rgba(255,255,255,0.02)" />
    {/* Icon circle */}
    <circle cx="54" cy="147" r="8" fill="rgba(37,99,235,0.12)" />
    {/* Person icon */}
    <circle cx="54" cy="143" r="2.5" fill="none" stroke="#2563eb" strokeWidth="0.9" />
    <path d="M49 152 a5 5 0 0 1 10 0" fill="none" stroke="#2563eb" strokeWidth="0.9" />
    {/* Feature name */}
    <text x="70" y="145" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="500" fill="#f0f0f5">
      Coach Profiles
    </text>
    <text x="70" y="155" fontFamily="'Inter', -apple-system, sans-serif" fontSize="6.5" fill="#8b8b9e">
      Showcase your coaching team
    </text>
    {/* Toggle ON */}
    <rect x="332" y="140" width="24" height="14" rx="7" fill="url(#toggle-on-grad)" />
    <circle cx="349" cy="147" r="5" fill="#ffffff" />

    {/* === Row 4: Day Passes (OFF) === */}
    <rect x="36" y="166" width="328" height="30" rx="6" fill="rgba(255,255,255,0.04)" />
    {/* Icon circle */}
    <circle cx="54" cy="181" r="8" fill="rgba(255,255,255,0.04)" />
    {/* Ticket icon */}
    <rect x="48" y="177" width="12" height="8" rx="1.5" fill="none" stroke="#8b8b9e" strokeWidth="0.8" />
    <line x1="54" y1="177" x2="54" y2="179" stroke="#8b8b9e" strokeWidth="0.6" />
    <line x1="54" y1="183" x2="54" y2="185" stroke="#8b8b9e" strokeWidth="0.6" />
    {/* Feature name */}
    <text x="70" y="179" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="500" fill="#8b8b9e">
      Day Passes
    </text>
    <text x="70" y="189" fontFamily="'Inter', -apple-system, sans-serif" fontSize="6.5" fill="#8b8b9e" opacity="0.6">
      Sell single-visit passes to drop-ins
    </text>
    {/* Toggle OFF */}
    <rect x="332" y="174" width="24" height="14" rx="7" fill="rgba(255,255,255,0.08)" />
    <circle cx="339" cy="181" r="5" fill="#8b8b9e" opacity="0.5" />

    {/* === Row 5: Free Trials (ON) === */}
    <rect x="36" y="200" width="328" height="30" rx="6" fill="rgba(255,255,255,0.02)" />
    {/* Icon circle */}
    <circle cx="54" cy="215" r="8" fill="rgba(5,150,105,0.12)" />
    {/* Star icon */}
    <path
      d="M54 209 L55.5 212 L59 212.5 L56.5 215 L57 218.5 L54 217 L51 218.5 L51.5 215 L49 212.5 L52.5 212 Z"
      fill="#059669"
      stroke="none"
    />
    {/* Feature name */}
    <text x="70" y="213" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="500" fill="#f0f0f5">
      Free Trials
    </text>
    <text x="70" y="223" fontFamily="'Inter', -apple-system, sans-serif" fontSize="6.5" fill="#8b8b9e">
      Let new members try before they commit
    </text>
    {/* Toggle ON */}
    <rect x="332" y="208" width="24" height="14" rx="7" fill="url(#toggle-on-grad)" />
    <circle cx="349" cy="215" r="5" fill="#ffffff" />

    {/* === Row 6: Service Booking (OFF) === */}
    <rect x="36" y="234" width="328" height="24" rx="6" fill="rgba(255,255,255,0.04)" />
    {/* Icon circle */}
    <circle cx="54" cy="246" r="8" fill="rgba(255,255,255,0.04)" />
    {/* Calendar check icon */}
    <rect x="49" y="241" width="10" height="9" rx="1.5" fill="none" stroke="#8b8b9e" strokeWidth="0.8" />
    <line x1="49" y1="244" x2="59" y2="244" stroke="#8b8b9e" strokeWidth="0.6" />
    <line x1="52" y1="241" x2="52" y2="239" stroke="#8b8b9e" strokeWidth="0.6" strokeLinecap="round" />
    <line x1="56" y1="241" x2="56" y2="239" stroke="#8b8b9e" strokeWidth="0.6" strokeLinecap="round" />
    {/* Feature name */}
    <text x="70" y="245" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="500" fill="#8b8b9e">
      Service Booking
    </text>
    <text x="70" y="254" fontFamily="'Inter', -apple-system, sans-serif" fontSize="6.5" fill="#8b8b9e" opacity="0.6">
      1-on-1 personal training bookings
    </text>
    {/* Toggle OFF */}
    <rect x="332" y="239" width="24" height="14" rx="7" fill="rgba(255,255,255,0.08)" />
    <circle cx="339" cy="246" r="5" fill="#8b8b9e" opacity="0.5" />
  </svg>
);

export default FeatureTogglesIllustration;
