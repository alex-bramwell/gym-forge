interface DashboardIllustrationProps {
  className?: string;
}

const DashboardIllustration = ({ className }: DashboardIllustrationProps) => (
  <svg
    viewBox="0 0 400 280"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Dashboard layout showing sidebar navigation, today's WOD, upcoming schedule, and quick actions"
  >
    <defs>
      <linearGradient id="dashAccentGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="dashBtnGrad1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#4f7df5" />
      </linearGradient>
      <linearGradient id="dashBtnGrad2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#9b5de5" />
      </linearGradient>
    </defs>

    {/* Container background */}
    <rect x="10" y="10" width="380" height="260" rx="10" fill="#0a0a0f" />
    <rect
      x="10"
      y="10"
      width="380"
      height="260"
      rx="10"
      fill="none"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />

    {/* ---- Left Sidebar ---- */}
    <rect x="10" y="10" width="60" height="260" rx="10" fill="#12121a" />
    <rect x="70" y="10" width="1" height="260" fill="rgba(255,255,255,0.06)" />

    {/* Logo placeholder */}
    <rect x="22" y="22" width="36" height="14" rx="3" fill="rgba(37,99,235,0.2)" />
    <rect x="26" y="26" width="12" height="6" rx="1" fill="#2563eb" opacity="0.5" />
    <rect x="40" y="26" width="14" height="3" rx="1.5" fill="rgba(240,240,245,0.3)" />
    <rect x="40" y="31" width="10" height="2" rx="1" fill="rgba(240,240,245,0.15)" />

    {/* Nav items */}
    {/* Active nav item */}
    <rect x="16" y="50" width="48" height="8" rx="4" fill="rgba(37,99,235,0.2)" />
    <rect x="16" y="50" width="3" height="8" rx="1.5" fill="#2563eb" />
    <rect x="24" y="52" width="30" height="4" rx="2" fill="rgba(37,99,235,0.4)" />

    {/* Inactive nav items */}
    <rect x="24" y="66" width="30" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
    <rect x="24" y="78" width="26" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
    <rect x="24" y="90" width="32" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
    <rect x="24" y="102" width="24" height="4" rx="2" fill="rgba(255,255,255,0.06)" />

    {/* ---- Main Content Area ---- */}

    {/* "Today's WOD" Card */}
    <rect x="82" y="20" width="178" height="110" rx="8" fill="#12121a" />
    <rect
      x="82"
      y="20"
      width="178"
      height="110"
      rx="8"
      fill="none"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.5"
    />
    {/* Card header accent strip */}
    <rect x="82" y="20" width="178" height="3" rx="1.5" fill="url(#dashAccentGrad)" opacity="0.4" />

    <text
      x="96"
      y="42"
      fill="#8b8b9e"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="7"
      letterSpacing="0.8"
    >
      TODAY'S WOD
    </text>
    <text
      x="96"
      y="62"
      fill="#f0f0f5"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="800"
      fontSize="16"
      letterSpacing="1"
    >
      FRAN
    </text>
    {/* Text skeleton lines */}
    <rect x="96" y="74" width="140" height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />
    <rect x="96" y="85" width="120" height="5" rx="2.5" fill="rgba(255,255,255,0.04)" />
    <rect x="96" y="96" width="100" height="5" rx="2.5" fill="rgba(255,255,255,0.04)" />
    {/* For Time mini badge */}
    <rect x="96" y="108" width="42" height="12" rx="6" fill="rgba(124,58,237,0.15)" />
    <text
      x="117"
      y="117"
      textAnchor="middle"
      fill="#7c3aed"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="6.5"
    >
      For Time
    </text>

    {/* "Upcoming" Card */}
    <rect x="270" y="20" width="110" height="110" rx="8" fill="#12121a" />
    <rect
      x="270"
      y="20"
      width="110"
      height="110"
      rx="8"
      fill="none"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.5"
    />
    <text
      x="284"
      y="42"
      fill="#8b8b9e"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="7"
      letterSpacing="0.8"
    >
      UPCOMING
    </text>

    {/* Row 1 */}
    <circle cx="290" cy="58" r="3" fill="#2563eb" opacity="0.6" />
    <rect x="298" y="55" width="68" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
    <rect x="298" y="62" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />

    {/* Row 2 */}
    <circle cx="290" cy="78" r="3" fill="#7c3aed" opacity="0.6" />
    <rect x="298" y="75" width="60" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
    <rect x="298" y="82" width="52" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />

    {/* Row 3 */}
    <circle cx="290" cy="98" r="3" fill="#059669" opacity="0.6" />
    <rect x="298" y="95" width="64" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
    <rect x="298" y="102" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />

    {/* ---- Profile Strip ---- */}
    <rect x="82" y="140" width="298" height="40" rx="8" fill="#12121a" />
    <rect
      x="82"
      y="140"
      width="298"
      height="40"
      rx="8"
      fill="none"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.5"
    />

    {/* Avatar */}
    <circle cx="106" cy="160" r="12" fill="rgba(37,99,235,0.12)" />
    <circle
      cx="106"
      cy="160"
      r="12"
      fill="none"
      stroke="rgba(37,99,235,0.25)"
      strokeWidth="0.5"
    />
    {/* Mini person silhouette */}
    <circle cx="106" cy="156" r="4" fill="rgba(240,240,245,0.2)" />
    <path d="M99 168 a8 7 0 0 1 14 0" fill="rgba(240,240,245,0.12)" />

    {/* Name skeleton */}
    <rect x="126" y="153" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
    <rect x="126" y="163" width="44" height="4" rx="2" fill="rgba(255,255,255,0.05)" />

    {/* Edit Profile link */}
    <text
      x="340"
      y="163"
      textAnchor="end"
      fill="#2563eb"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="8"
    >
      Edit Profile
    </text>

    {/* ---- Quick Action Buttons ---- */}
    {/* Book Class button */}
    <rect x="82" y="192" width="145" height="28" rx="7" fill="url(#dashBtnGrad1)" />
    <rect
      x="82"
      y="192"
      width="145"
      height="28"
      rx="7"
      fill="none"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.5"
    />
    {/* Calendar icon */}
    <rect x="100" y="201" width="9" height="9" rx="1.5" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
    <line x1="103" y1="199.5" x2="103" y2="202" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
    <line x1="106" y1="199.5" x2="106" y2="202" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
    <line x1="100" y1="204.5" x2="109" y2="204.5" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
    <text
      x="118"
      y="210"
      fill="#f0f0f5"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="9"
    >
      Book Class
    </text>

    {/* Buy Day Pass button */}
    <rect x="235" y="192" width="145" height="28" rx="7" fill="url(#dashBtnGrad2)" />
    <rect
      x="235"
      y="192"
      width="145"
      height="28"
      rx="7"
      fill="none"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.5"
    />
    {/* Ticket icon */}
    <rect x="253" y="201" width="10" height="8" rx="1.5" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
    <line x1="258" y1="201" x2="258" y2="203" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
    <line x1="258" y1="205" x2="258" y2="207" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
    <line x1="258" y1="208" x2="258" y2="209" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
    <text
      x="272"
      y="210"
      fill="#f0f0f5"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontWeight="600"
      fontSize="9"
    >
      Buy Day Pass
    </text>

    {/* Decorative bottom glow */}
    <rect x="82" y="232" width="298" height="28" rx="8" fill="rgba(37,99,235,0.02)" />
    <rect x="100" y="240" width="80" height="4" rx="2" fill="rgba(255,255,255,0.03)" />
    <rect x="100" y="248" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.02)" />
  </svg>
);

export default DashboardIllustration;
