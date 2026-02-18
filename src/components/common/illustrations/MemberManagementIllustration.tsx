interface MemberManagementIllustrationProps {
  className?: string;
}

const MemberManagementIllustration = ({ className }: MemberManagementIllustrationProps) => (
  <svg
    viewBox="0 0 400 280"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Member management admin table showing a searchable member directory with roles and pagination"
  >
    <defs>
      <linearGradient id="mm-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>

    {/* Panel background */}
    <rect
      x="16"
      y="8"
      width="368"
      height="264"
      rx="12"
      fill="#12121a"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />

    {/* === Header Row === */}
    <text x="36" y="34" fontFamily="'Inter', -apple-system, sans-serif" fontSize="13" fontWeight="700" fill="#f0f0f5">Members</text>

    {/* Invite Member button */}
    <rect x="280" y="20" width="88" height="22" rx="11" fill="url(#mm-grad)" />
    <rect x="280" y="20" width="88" height="22" rx="11" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
    {/* Plus icon */}
    <line x1="293" y1="31" x2="299" y2="31" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="296" y1="28" x2="296" y2="34" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
    <text x="305" y="34.5" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7.5" fontWeight="600" fill="#ffffff">Invite Member</text>

    {/* === Search Bar === */}
    <rect x="36" y="48" width="328" height="26" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
    {/* Magnifying glass icon */}
    <circle cx="50" cy="61" r="4.5" fill="none" stroke="#8b8b9e" strokeWidth="1" />
    <line x1="53.2" y1="64.2" x2="56" y2="67" stroke="#8b8b9e" strokeWidth="1" strokeLinecap="round" />
    <text x="62" y="64.5" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fill="#8b8b9e">Search members...</text>

    {/* === Table Header === */}
    <text x="62" y="92" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="600" fill="#8b8b9e" letterSpacing="0.5">NAME</text>
    <text x="162" y="92" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="600" fill="#8b8b9e" letterSpacing="0.5">EMAIL</text>
    <text x="272" y="92" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="600" fill="#8b8b9e" letterSpacing="0.5">ROLE</text>
    <text x="332" y="92" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="600" fill="#8b8b9e" letterSpacing="0.5">JOINED</text>
    {/* Header divider */}
    <line x1="36" y1="97" x2="364" y2="97" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />

    {/* === Row 1 - Sarah Mitchell (Admin) === */}
    <rect x="36" y="100" width="328" height="34" rx="0" fill="rgba(255,255,255,0.02)" />
    {/* Avatar */}
    <circle cx="48" cy="117" r="10" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.3)" strokeWidth="0.5" />
    <text x="48" y="120" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="600" fill="#2563eb">SM</text>
    {/* Name */}
    <text x="62" y="120" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fontWeight="500" fill="#f0f0f5">Sarah Mitchell</text>
    {/* Email */}
    <text x="162" y="120" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fill="#8b8b9e">sarah@...</text>
    {/* Role badge - Admin (blue) */}
    <rect x="268" y="110" width="40" height="16" rx="8" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.3)" strokeWidth="0.5" />
    <text x="288" y="121" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="600" fill="#2563eb">Admin</text>
    {/* Joined */}
    <text x="332" y="120" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7.5" fill="#8b8b9e">Jan 2025</text>
    {/* Row divider */}
    <line x1="36" y1="134" x2="364" y2="134" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

    {/* === Row 2 - James Torres (Coach) === */}
    <rect x="36" y="134" width="328" height="34" rx="0" fill="transparent" />
    {/* Avatar */}
    <circle cx="48" cy="151" r="10" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.3)" strokeWidth="0.5" />
    <text x="48" y="154" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="600" fill="#7c3aed">JT</text>
    {/* Name */}
    <text x="62" y="154" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fontWeight="500" fill="#f0f0f5">James Torres</text>
    {/* Email */}
    <text x="162" y="154" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fill="#8b8b9e">james@...</text>
    {/* Role badge - Coach (purple) */}
    <rect x="268" y="144" width="40" height="16" rx="8" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.3)" strokeWidth="0.5" />
    <text x="288" y="155" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="600" fill="#7c3aed">Coach</text>
    {/* Joined */}
    <text x="332" y="154" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7.5" fill="#8b8b9e">Mar 2025</text>
    {/* Row divider */}
    <line x1="36" y1="168" x2="364" y2="168" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

    {/* === Row 3 - Emma Wilson (Member) === */}
    <rect x="36" y="168" width="328" height="34" rx="0" fill="rgba(255,255,255,0.02)" />
    {/* Avatar */}
    <circle cx="48" cy="185" r="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    <text x="48" y="188" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="600" fill="#8b8b9e">EW</text>
    {/* Name */}
    <text x="62" y="188" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fontWeight="500" fill="#f0f0f5">Emma Wilson</text>
    {/* Email */}
    <text x="162" y="188" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fill="#8b8b9e">emma@...</text>
    {/* Role badge - Member (grey) */}
    <rect x="264" y="178" width="48" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    <text x="288" y="189" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="500" fill="#8b8b9e">Member</text>
    {/* Joined */}
    <text x="332" y="188" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7.5" fill="#8b8b9e">Jun 2025</text>
    {/* Row divider */}
    <line x1="36" y1="202" x2="364" y2="202" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

    {/* === Row 4 - Alex Chen (Member) === */}
    <rect x="36" y="202" width="328" height="34" rx="0" fill="transparent" />
    {/* Avatar */}
    <circle cx="48" cy="219" r="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    <text x="48" y="222" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="600" fill="#8b8b9e">AC</text>
    {/* Name */}
    <text x="62" y="222" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fontWeight="500" fill="#f0f0f5">Alex Chen</text>
    {/* Email */}
    <text x="162" y="222" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fill="#8b8b9e">alex@...</text>
    {/* Role badge - Member (grey) */}
    <rect x="264" y="212" width="48" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    <text x="288" y="223" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fontWeight="500" fill="#8b8b9e">Member</text>
    {/* Joined */}
    <text x="332" y="222" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7.5" fill="#8b8b9e">Sep 2025</text>

    {/* === Pagination Dots === */}
    <circle cx="186" cy="254" r="3.5" fill="#2563eb" />
    <circle cx="198" cy="254" r="3.5" fill="rgba(255,255,255,0.1)" />
    <circle cx="210" cy="254" r="3.5" fill="rgba(255,255,255,0.1)" />
  </svg>
);

export default MemberManagementIllustration;
