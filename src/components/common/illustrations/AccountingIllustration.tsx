interface AccountingIllustrationProps {
  className?: string;
}

const AccountingIllustration = ({ className }: AccountingIllustrationProps) => (
  <svg
    viewBox="0 0 400 280"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Accounting sync flow showing No Sweat connected to QuickBooks and Xero with synced transaction list"
  >
    <defs>
      <linearGradient id="acc-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="acc-qb-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(5,150,105,0.15)" />
        <stop offset="100%" stopColor="rgba(5,150,105,0.05)" />
      </linearGradient>
      <linearGradient id="acc-xero-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(37,99,235,0.15)" />
        <stop offset="100%" stopColor="rgba(37,99,235,0.05)" />
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

    {/* ===== Central Node: No Sweat ===== */}
    <rect x="150" y="28" width="100" height="44" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(37,99,235,0.4)" strokeWidth="1" />
    {/* Abstract logo above text: small dumbbell-like shape */}
    <line x1="188" y1="39" x2="212" y2="39" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="186" cy="39" r="3" fill="none" stroke="#2563eb" strokeWidth="1.2" />
    <circle cx="214" cy="39" r="3" fill="none" stroke="#2563eb" strokeWidth="1.2" />
    {/* No Sweat text */}
    <text x="200" y="58" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="10" fontWeight="700" fill="#2563eb">No Sweat</text>
    {/* Subtle glow ring */}
    <rect x="150" y="28" width="100" height="44" rx="10" fill="none" stroke="rgba(37,99,235,0.15)" strokeWidth="3" />

    {/* ===== Left Node: QuickBooks ===== */}
    <rect x="28" y="34" width="88" height="32" rx="8" fill="url(#acc-qb-grad)" stroke="rgba(5,150,105,0.3)" strokeWidth="0.75" />
    <text x="72" y="54" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="600" fill="#059669">QuickBooks</text>

    {/* ===== Right Node: Xero ===== */}
    <rect x="284" y="34" width="88" height="32" rx="8" fill="url(#acc-xero-grad)" stroke="rgba(37,99,235,0.3)" strokeWidth="0.75" />
    <text x="328" y="54" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="600" fill="#60a5fa">Xero</text>

    {/* ===== Left Curved Path (No Sweat -> QuickBooks) ===== */}
    <path
      d="M150,50 C132,50 126,50 116,50"
      fill="none"
      stroke="rgba(5,150,105,0.4)"
      strokeWidth="1.2"
      strokeDasharray="4 3"
      style={{
        animation: 'acc-dash-left 1.5s linear infinite',
      }}
    />
    {/* Arrow head pointing left */}
    <polygon points="116,47 110,50 116,53" fill="rgba(5,150,105,0.6)" />
    {/* Data label: Invoices */}
    <rect x="120" y="24" width="28" height="12" rx="3" fill="rgba(5,150,105,0.1)" />
    <text x="134" y="32.5" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="5.5" fontWeight="500" fill="#059669">Invoices</text>

    {/* ===== Right Curved Path (No Sweat -> Xero) ===== */}
    <path
      d="M250,50 C268,50 274,50 284,50"
      fill="none"
      stroke="rgba(37,99,235,0.4)"
      strokeWidth="1.2"
      strokeDasharray="4 3"
      style={{
        animation: 'acc-dash-right 1.5s linear infinite',
      }}
    />
    {/* Arrow head pointing right */}
    <polygon points="284,47 290,50 284,53" fill="rgba(37,99,235,0.6)" />
    {/* Data label: Payments */}
    <rect x="252" y="24" width="32" height="12" rx="3" fill="rgba(37,99,235,0.1)" />
    <text x="268" y="32.5" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="5.5" fontWeight="500" fill="#60a5fa">Payments</text>

    {/* ===== Bidirectional paths back ===== */}
    {/* QuickBooks -> No Sweat (bottom path) */}
    <path
      d="M116,56 C128,62 138,62 150,56"
      fill="none"
      stroke="rgba(5,150,105,0.25)"
      strokeWidth="0.8"
      strokeDasharray="3 2"
      style={{
        animation: 'acc-dash-right 2s linear infinite',
      }}
    />
    {/* Xero -> No Sweat (bottom path) */}
    <path
      d="M284,56 C272,62 262,62 250,56"
      fill="none"
      stroke="rgba(37,99,235,0.25)"
      strokeWidth="0.8"
      strokeDasharray="3 2"
      style={{
        animation: 'acc-dash-left 2s linear infinite',
      }}
    />

    {/* ===== Divider line ===== */}
    <line x1="36" y1="88" x2="364" y2="88" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

    {/* Section label */}
    <text x="36" y="106" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8" fontWeight="600" fill="#8b8b9e" letterSpacing="0.5">RECENT TRANSACTIONS</text>

    {/* ===== Transaction Row 1 ===== */}
    <rect x="36" y="114" width="328" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
    {/* Green check circle */}
    <circle cx="54" cy="133" r="8" fill="rgba(5,150,105,0.12)" stroke="rgba(5,150,105,0.3)" strokeWidth="0.75" />
    <path d="M50 133 L52.5 135.5 L58 130" fill="none" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Description */}
    <text x="70" y="129" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fontWeight="500" fill="#f0f0f5">Day Pass</text>
    <text x="108" y="129" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fill="#8b8b9e">&middot;</text>
    <text x="115" y="129" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fontWeight="600" fill="#f0f0f5">$25</text>
    <text x="133" y="129" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fill="#8b8b9e">&middot;</text>
    {/* Synced badge */}
    <rect x="140" y="121" width="38" height="13" rx="6.5" fill="rgba(5,150,105,0.12)" stroke="rgba(5,150,105,0.25)" strokeWidth="0.5" />
    <text x="159" y="130" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="6.5" fontWeight="500" fill="#059669">Synced</text>
    {/* Timestamp */}
    <text x="70" y="140" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fill="#8b8b9e">2 min ago</text>
    {/* Amount on right */}
    <text x="348" y="133" textAnchor="end" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="600" fill="#059669">+$25.00</text>

    {/* ===== Transaction Row 2 ===== */}
    <rect x="36" y="158" width="328" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
    {/* Green check circle */}
    <circle cx="54" cy="177" r="8" fill="rgba(5,150,105,0.12)" stroke="rgba(5,150,105,0.3)" strokeWidth="0.75" />
    <path d="M50 177 L52.5 179.5 L58 174" fill="none" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Description */}
    <text x="70" y="173" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fontWeight="500" fill="#f0f0f5">PT Session</text>
    <text x="118" y="173" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fill="#8b8b9e">&middot;</text>
    <text x="125" y="173" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fontWeight="600" fill="#f0f0f5">$80</text>
    <text x="143" y="173" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fill="#8b8b9e">&middot;</text>
    {/* Synced badge */}
    <rect x="150" y="165" width="38" height="13" rx="6.5" fill="rgba(5,150,105,0.12)" stroke="rgba(5,150,105,0.25)" strokeWidth="0.5" />
    <text x="169" y="174" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="6.5" fontWeight="500" fill="#059669">Synced</text>
    {/* Timestamp */}
    <text x="70" y="184" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fill="#8b8b9e">15 min ago</text>
    {/* Amount on right */}
    <text x="348" y="177" textAnchor="end" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="600" fill="#059669">+$80.00</text>

    {/* ===== Transaction Row 3 ===== */}
    <rect x="36" y="202" width="328" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
    {/* Green check circle */}
    <circle cx="54" cy="221" r="8" fill="rgba(5,150,105,0.12)" stroke="rgba(5,150,105,0.3)" strokeWidth="0.75" />
    <path d="M50 221 L52.5 223.5 L58 218" fill="none" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Description */}
    <text x="70" y="217" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fontWeight="500" fill="#f0f0f5">Day Pass</text>
    <text x="108" y="217" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fill="#8b8b9e">&middot;</text>
    <text x="115" y="217" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fontWeight="600" fill="#f0f0f5">$25</text>
    <text x="133" y="217" fontFamily="'Inter', -apple-system, sans-serif" fontSize="8.5" fill="#8b8b9e">&middot;</text>
    {/* Synced badge */}
    <rect x="140" y="209" width="38" height="13" rx="6.5" fill="rgba(5,150,105,0.12)" stroke="rgba(5,150,105,0.25)" strokeWidth="0.5" />
    <text x="159" y="218" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="6.5" fontWeight="500" fill="#059669">Synced</text>
    {/* Timestamp */}
    <text x="70" y="228" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fill="#8b8b9e">1 hour ago</text>
    {/* Amount on right */}
    <text x="348" y="221" textAnchor="end" fontFamily="'Inter', -apple-system, sans-serif" fontSize="9" fontWeight="600" fill="#059669">+$25.00</text>

    {/* ===== Summary bar ===== */}
    <rect x="36" y="248" width="328" height="16" rx="4" fill="rgba(255,255,255,0.02)" />
    <text x="200" y="259" textAnchor="middle" fontFamily="'Inter', -apple-system, sans-serif" fontSize="7" fill="#8b8b9e">
      All transactions synced automatically
    </text>

    {/* CSS animation keyframes via style element */}
    <style>{`
      @keyframes acc-dash-left {
        to { stroke-dashoffset: -14; }
      }
      @keyframes acc-dash-right {
        to { stroke-dashoffset: 14; }
      }
    `}</style>
  </svg>
);

export default AccountingIllustration;
