interface ServiceBookingIllustrationProps {
  className?: string;
}

const ServiceBookingIllustration = ({ className }: ServiceBookingIllustrationProps) => (
  <svg
    viewBox="0 0 400 280"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Service booking flow showing step indicator, service selection, coach cards, time slots, and confirm button"
  >
    <defs>
      <linearGradient id="sbook-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="sbook-pill-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="sbook-slot-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(37,99,235,0.9)" />
        <stop offset="100%" stopColor="rgba(124,58,237,0.9)" />
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

    {/* === Step Indicator === */}
    {/* Line 1-2 (solid accent) */}
    <line x1="165" y1="28" x2="200" y2="28" stroke="#2563eb" strokeWidth="1.5" />
    {/* Line 2-3 (dashed muted) */}
    <line x1="218" y1="28" x2="235" y2="28" stroke="#8b8b9e" strokeWidth="1" strokeDasharray="3 2" />

    {/* Circle 1 - filled */}
    <circle cx="155" cy="28" r="9" fill="#2563eb" />
    <text x="155" y="31.5" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="700" fill="#ffffff">1</text>

    {/* Circle 2 - filled */}
    <circle cx="208" cy="28" r="9" fill="#2563eb" />
    <text x="208" y="31.5" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="700" fill="#ffffff">2</text>

    {/* Circle 3 - outline only */}
    <circle cx="245" cy="28" r="9" fill="none" stroke="#8b8b9e" strokeWidth="1" />
    <text x="245" y="31.5" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="500" fill="#8b8b9e">3</text>

    {/* === Service Type Selector === */}
    {/* Selected pill: Personal Training */}
    <rect x="36" y="48" width="110" height="22" rx="11" fill="url(#sbook-pill-grad)" />
    <rect x="36" y="48" width="110" height="22" rx="11" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
    <text x="91" y="62.5" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="600" fill="#ffffff">Personal Training</text>

    {/* Glass pill: Sports Massage */}
    <rect x="152" y="48" width="100" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
    <text x="202" y="62.5" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="500" fill="#8b8b9e">Sports Massage</text>

    {/* Glass pill: Nutrition */}
    <rect x="258" y="48" width="76" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
    <text x="296" y="62.5" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="500" fill="#8b8b9e">Nutrition</text>

    {/* === Coach Mini-Cards === */}
    {/* Card 1 - Selected (accent border) */}
    <rect x="36" y="80" width="160" height="48" rx="8" fill="rgba(255,255,255,0.04)" stroke="#2563eb" strokeWidth="1.2" />
    {/* Avatar */}
    <circle cx="60" cy="104" r="12" fill="rgba(37,99,235,0.2)" stroke="rgba(37,99,235,0.4)" strokeWidth="0.75" />
    <text x="60" y="107.5" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="600" fill="#2563eb">MR</text>
    {/* Coach info */}
    <text x="80" y="98" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="600" fill="#f0f0f5">Mike Reynolds</text>
    <text x="80" y="110" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7.5" fill="#8b8b9e">45 min &middot; $80</text>
    {/* Selected check */}
    <circle cx="182" cy="90" r="5" fill="#2563eb" />
    <path d="M179.5 90 L181.2 91.7 L184.5 88.5" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

    {/* Card 2 - Not selected */}
    <rect x="204" y="80" width="160" height="48" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
    {/* Avatar */}
    <circle cx="228" cy="104" r="12" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.3)" strokeWidth="0.75" />
    <text x="228" y="107.5" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="600" fill="#7c3aed">JL</text>
    {/* Coach info */}
    <text x="248" y="98" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="600" fill="#f0f0f5">Jess Lee</text>
    <text x="248" y="110" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7.5" fill="#8b8b9e">45 min &middot; $80</text>

    {/* === Time Slot Grid === */}
    {/* Label */}
    <text x="36" y="146" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="500" fill="#8b8b9e">Available Times &mdash; Tue, 18 Feb</text>

    {/* Row 1 */}
    <rect x="36" y="152" width="54" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
    <text x="63" y="166" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fill="#f0f0f5">09:00</text>

    {/* Selected slot */}
    <rect x="96" y="152" width="54" height="22" rx="6" fill="url(#sbook-slot-grad)" />
    <rect x="96" y="152" width="54" height="22" rx="6" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
    <text x="123" y="166" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="600" fill="#ffffff">10:00</text>

    <rect x="156" y="152" width="54" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
    <text x="183" y="166" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fill="#f0f0f5">11:30</text>

    {/* Row 2 */}
    <rect x="36" y="180" width="54" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
    <text x="63" y="194" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fill="#f0f0f5">14:00</text>

    <rect x="96" y="180" width="54" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
    <text x="123" y="194" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fill="#f0f0f5">15:30</text>

    <rect x="156" y="180" width="54" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
    <text x="183" y="194" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fill="#f0f0f5">17:00</text>

    {/* === Confirm Booking Button === */}
    <rect x="36" y="214" width="328" height="34" rx="10" fill="url(#sbook-grad)" />
    <rect x="36" y="214" width="328" height="34" rx="10" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
    {/* Button top shine */}
    <rect x="36" y="214" width="328" height="17" rx="10" fill="rgba(255,255,255,0.06)" />
    <text x="200" y="235" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="11" fontWeight="600" fill="#ffffff">Confirm Booking</text>
  </svg>
);

export default ServiceBookingIllustration;
