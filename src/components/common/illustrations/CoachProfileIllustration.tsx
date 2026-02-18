interface CoachProfileIllustrationProps {
  className?: string;
}

const CoachProfileIllustration = ({ className }: CoachProfileIllustrationProps) => (
  <svg
    viewBox="0 0 400 280"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Coach profile card for Sarah Mitchell showing certifications and specialties"
  >
    <defs>
      <linearGradient id="coachAccentGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="coachBtnGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="coachCardGlow" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.06" />
        <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.03" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </linearGradient>
      <clipPath id="coachAvatarClip">
        <circle cx="80" cy="68" r="32" />
      </clipPath>
    </defs>

    {/* Card background */}
    <rect x="20" y="10" width="360" height="260" rx="12" fill="#12121a" />
    <rect x="20" y="10" width="360" height="260" rx="12" fill="url(#coachCardGlow)" />
    <rect
      x="20"
      y="10"
      width="360"
      height="260"
      rx="12"
      fill="none"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />

    {/* Avatar circle */}
    <circle cx="80" cy="68" r="32" fill="rgba(37,99,235,0.1)" />
    <circle
      cx="80"
      cy="68"
      r="32"
      fill="none"
      stroke="url(#coachAccentGrad)"
      strokeWidth="1.5"
      opacity="0.5"
    />
    {/* Person silhouette */}
    <circle cx="80" cy="58" r="10" fill="rgba(240,240,245,0.2)" />
    <path
      d="M62 92 a22 18 0 0 1 36 0"
      fill="rgba(240,240,245,0.15)"
    />

    {/* Name and title */}
    <text
      x="128"
      y="56"
      fill="#f0f0f5"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="700"
      fontSize="14"
    >
      Sarah Mitchell
    </text>
    <text
      x="128"
      y="72"
      fill="#2563eb"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="9"
    >
      Head Coach
    </text>

    {/* Bio skeleton lines */}
    <rect x="128" y="84" width="220" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
    <rect x="128" y="96" width="180" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
    <rect x="128" y="108" width="200" height="6" rx="3" fill="rgba(255,255,255,0.04)" />

    {/* Divider */}
    <rect x="40" y="126" width="320" height="1" fill="rgba(255,255,255,0.06)" />

    {/* Certifications label */}
    <text
      x="40"
      y="146"
      fill="#8b8b9e"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="700"
      fontSize="7"
      letterSpacing="1.2"
    >
      CERTIFICATIONS
    </text>

    {/* CrossFit L3 badge (blue) */}
    <rect x="40" y="154" width="72" height="20" rx="10" fill="rgba(37,99,235,0.15)" />
    <rect x="40" y="154" width="72" height="20" rx="10" fill="none" stroke="rgba(37,99,235,0.3)" strokeWidth="0.5" />
    <text
      x="76"
      y="167.5"
      textAnchor="middle"
      fill="#2563eb"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="8"
    >
      CrossFit L3
    </text>

    {/* USAW badge (purple) */}
    <rect x="120" y="154" width="52" height="20" rx="10" fill="rgba(124,58,237,0.15)" />
    <rect x="120" y="154" width="52" height="20" rx="10" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="0.5" />
    <text
      x="146"
      y="167.5"
      textAnchor="middle"
      fill="#7c3aed"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="8"
    >
      USAW
    </text>

    {/* Precision Nutrition badge (green) */}
    <rect x="180" y="154" width="106" height="20" rx="10" fill="rgba(5,150,105,0.15)" />
    <rect x="180" y="154" width="106" height="20" rx="10" fill="none" stroke="rgba(5,150,105,0.3)" strokeWidth="0.5" />
    <text
      x="233"
      y="167.5"
      textAnchor="middle"
      fill="#059669"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="8"
    >
      Precision Nutrition
    </text>

    {/* Specialties label */}
    <text
      x="40"
      y="198"
      fill="#8b8b9e"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="700"
      fontSize="7"
      letterSpacing="1.2"
    >
      SPECIALTIES
    </text>

    {/* Specialty tags */}
    <rect x="40" y="206" width="86" height="18" rx="4" fill="rgba(255,255,255,0.05)" />
    <rect x="40" y="206" width="86" height="18" rx="4" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    <text
      x="83"
      y="218"
      textAnchor="middle"
      fill="rgba(240,240,245,0.7)"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="500"
      fontSize="8"
    >
      Olympic Lifting
    </text>

    <rect x="134" y="206" width="56" height="18" rx="4" fill="rgba(255,255,255,0.05)" />
    <rect x="134" y="206" width="56" height="18" rx="4" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    <text
      x="162"
      y="218"
      textAnchor="middle"
      fill="rgba(240,240,245,0.7)"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="500"
      fontSize="8"
    >
      Mobility
    </text>

    <rect x="198" y="206" width="94" height="18" rx="4" fill="rgba(255,255,255,0.05)" />
    <rect x="198" y="206" width="94" height="18" rx="4" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    <text
      x="245"
      y="218"
      textAnchor="middle"
      fill="rgba(240,240,245,0.7)"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="500"
      fontSize="8"
    >
      Competition Prep
    </text>

    {/* Book a Session button */}
    <rect x="40" y="240" width="320" height="22" rx="6" fill="url(#coachBtnGrad)" />
    <rect x="40" y="240" width="320" height="22" rx="6" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    <text
      x="200"
      y="254.5"
      textAnchor="middle"
      fill="#f0f0f5"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="9"
      letterSpacing="0.3"
    >
      Book a Session
    </text>
  </svg>
);

export default CoachProfileIllustration;
