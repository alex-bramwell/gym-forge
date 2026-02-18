interface BrandingIllustrationProps {
  className?: string;
}

const BrandingIllustration = ({ className }: BrandingIllustrationProps) => (
  <svg
    viewBox="0 0 400 280"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Branding settings panel with color swatches, logo upload, and theme preview"
  >
    <defs>
      <linearGradient id="brand-accent-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="brand-selected-ring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
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

    {/* Settings icon */}
    <circle cx="44" cy="36" r="10" fill="rgba(255,255,255,0.04)" />
    <circle cx="44" cy="36" r="4" fill="none" stroke="#8b8b9e" strokeWidth="1" />
    <line x1="44" y1="30" x2="44" y2="28" stroke="#8b8b9e" strokeWidth="1" strokeLinecap="round" />
    <line x1="44" y1="44" x2="44" y2="42" stroke="#8b8b9e" strokeWidth="1" strokeLinecap="round" />
    <line x1="38" y1="36" x2="36" y2="36" stroke="#8b8b9e" strokeWidth="1" strokeLinecap="round" />
    <line x1="52" y1="36" x2="50" y2="36" stroke="#8b8b9e" strokeWidth="1" strokeLinecap="round" />

    {/* Header text */}
    <text
      x="60"
      y="39"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="12"
      fontWeight="700"
      fill="#f0f0f5"
    >
      Brand Settings
    </text>
    <text
      x="148"
      y="39"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="8"
      fill="#8b8b9e"
    >
      Customize your gym's look & feel
    </text>

    {/* === Color Swatches Section === */}
    <text
      x="40"
      y="76"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="8.5"
      fontWeight="600"
      fill="#f0f0f5"
    >
      Brand Colors
    </text>
    <text
      x="40"
      y="87"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="7"
      fill="#8b8b9e"
    >
      Choose your primary accent color
    </text>

    {/* Swatch row background */}
    <rect
      x="40"
      y="94"
      width="200"
      height="32"
      rx="8"
      fill="rgba(255,255,255,0.02)"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="0.5"
    />

    {/* Color swatch 1 - Blue */}
    <circle cx="64" cy="110" r="9" fill="#2563eb" />

    {/* Color swatch 2 - Purple (selected) */}
    <circle cx="96" cy="110" r="11" fill="none" stroke="url(#brand-selected-ring)" strokeWidth="2" />
    <circle cx="96" cy="110" r="9" fill="#7c3aed" />
    {/* Checkmark on selected */}
    <path d="M92 110 L95 113 L101 107" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Color swatch 3 - Emerald */}
    <circle cx="128" cy="110" r="9" fill="#059669" />

    {/* Color swatch 4 - Rose */}
    <circle cx="160" cy="110" r="9" fill="#e11d48" />

    {/* Color swatch 5 - Amber */}
    <circle cx="192" cy="110" r="9" fill="#d97706" />

    {/* Custom color picker button */}
    <circle
      cx="224"
      cy="110"
      r="9"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="0.75"
      strokeDasharray="3 2"
    />
    <line x1="224" y1="106" x2="224" y2="114" stroke="#8b8b9e" strokeWidth="1" strokeLinecap="round" />
    <line x1="220" y1="110" x2="228" y2="110" stroke="#8b8b9e" strokeWidth="1" strokeLinecap="round" />

    {/* === Logo Upload Section === */}
    <text
      x="40"
      y="144"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="8.5"
      fontWeight="600"
      fill="#f0f0f5"
    >
      Logo
    </text>

    {/* Dashed upload area */}
    <rect
      x="40"
      y="150"
      width="140"
      height="62"
      rx="8"
      fill="rgba(255,255,255,0.02)"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="1"
      strokeDasharray="6 4"
    />

    {/* Upload arrow icon */}
    <circle cx="110" cy="172" r="12" fill="rgba(37,99,235,0.1)" />
    <path
      d="M110 167 L110 177"
      fill="none"
      stroke="#2563eb"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M106 170 L110 166 L114 170"
      fill="none"
      stroke="#2563eb"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Upload text */}
    <text
      x="110"
      y="192"
      textAnchor="middle"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="7"
      fill="#8b8b9e"
    >
      Drop your logo here
    </text>
    <text
      x="110"
      y="202"
      textAnchor="middle"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="6.5"
      fill="#8b8b9e"
      opacity="0.6"
    >
      PNG, SVG up to 2MB
    </text>

    {/* === Font Dropdown Section (right column) === */}
    <text
      x="200"
      y="144"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="8.5"
      fontWeight="600"
      fill="#f0f0f5"
    >
      Font Family
    </text>

    {/* Font dropdown */}
    <rect
      x="200"
      y="150"
      width="160"
      height="28"
      rx="6"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="0.75"
    />
    <text
      x="214"
      y="168"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="9"
      fill="#f0f0f5"
    >
      Inter
    </text>
    {/* Chevron down */}
    <path
      d="M346 160 L350 166 L354 160"
      fill="none"
      stroke="#8b8b9e"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Font preview text */}
    <text
      x="200"
      y="196"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="7"
      fill="#8b8b9e"
    >
      Preview:
    </text>
    <text
      x="200"
      y="208"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="11"
      fontWeight="600"
      fill="#f0f0f5"
    >
      The quick brown fox
    </text>

    {/* === Theme Preview Section === */}
    <text
      x="40"
      y="232"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="8.5"
      fontWeight="600"
      fill="#f0f0f5"
    >
      Theme
    </text>

    {/* Dark theme card (selected) */}
    <rect
      x="40"
      y="238"
      width="80"
      height="22"
      rx="6"
      fill="#0a0a0f"
      stroke="#2563eb"
      strokeWidth="1.5"
    />
    {/* Mini content lines inside dark card */}
    <rect x="48" y="243" width="30" height="2.5" rx="1" fill="rgba(255,255,255,0.2)" />
    <rect x="48" y="248" width="20" height="2.5" rx="1" fill="rgba(255,255,255,0.1)" />
    <rect x="48" y="253" width="25" height="2.5" rx="1" fill="rgba(255,255,255,0.1)" />
    {/* Accent dot */}
    <circle cx="106" cy="244" r="3" fill="#7c3aed" />
    {/* Selected label */}
    <text
      x="80"
      y="232"
      textAnchor="middle"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="6.5"
      fill="#2563eb"
    >
      Dark
    </text>

    {/* Light theme card */}
    <rect
      x="132"
      y="238"
      width="80"
      height="22"
      rx="6"
      fill="#e8e8ec"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.75"
    />
    {/* Mini content lines inside light card */}
    <rect x="140" y="243" width="30" height="2.5" rx="1" fill="rgba(0,0,0,0.15)" />
    <rect x="140" y="248" width="20" height="2.5" rx="1" fill="rgba(0,0,0,0.1)" />
    <rect x="140" y="253" width="25" height="2.5" rx="1" fill="rgba(0,0,0,0.1)" />
    {/* Accent dot */}
    <circle cx="198" cy="244" r="3" fill="#7c3aed" />
    {/* Label */}
    <text
      x="172"
      y="232"
      textAnchor="middle"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="6.5"
      fill="#8b8b9e"
    >
      Light
    </text>

    {/* Save button */}
    <rect
      x="300"
      y="238"
      width="60"
      height="22"
      rx="6"
      fill="url(#brand-accent-grad)"
    />
    <rect
      x="300"
      y="238"
      width="60"
      height="11"
      rx="6"
      fill="rgba(255,255,255,0.06)"
    />
    <text
      x="330"
      y="253"
      textAnchor="middle"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="8"
      fontWeight="600"
      fill="#ffffff"
    >
      Save
    </text>
  </svg>
);

export default BrandingIllustration;
