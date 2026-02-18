interface SignUpIllustrationProps {
  className?: string;
}

const SignUpIllustration = ({ className }: SignUpIllustrationProps) => (
  <svg
    viewBox="0 0 400 280"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Sign up flow illustration showing a browser with a gym registration form"
  >
    <defs>
      <linearGradient id="signup-btn-gradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="signup-url-glow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(37,99,235,0.12)" />
        <stop offset="100%" stopColor="rgba(37,99,235,0.04)" />
      </linearGradient>
      <clipPath id="signup-browser-clip">
        <rect x="20" y="16" width="360" height="248" rx="12" />
      </clipPath>
    </defs>

    {/* Browser window outer shell */}
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

    {/* Title bar background */}
    <rect
      x="20"
      y="16"
      width="360"
      height="32"
      rx="12"
      fill="#0a0a0f"
      clipPath="url(#signup-browser-clip)"
    />
    {/* Bottom cover for title bar rounded corners */}
    <rect x="20" y="36" width="360" height="12" fill="#0a0a0f" />

    {/* Divider line under title bar */}
    <line x1="20" y1="48" x2="380" y2="48" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

    {/* Traffic light dots */}
    <circle cx="38" cy="32" r="4.5" fill="#ff5f57" />
    <circle cx="54" cy="32" r="4.5" fill="#febc2e" />
    <circle cx="70" cy="32" r="4.5" fill="#28c840" />

    {/* URL bar */}
    <rect
      x="90"
      y="24"
      width="240"
      height="16"
      rx="4"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.5"
    />
    <text
      x="98"
      y="35"
      fontFamily="'SF Mono', 'Fira Code', monospace"
      fontSize="7.5"
      fill="#8b8b9e"
    >
      nosweat.fitness/gym/
    </text>
    <text
      x="193"
      y="35"
      fontFamily="'SF Mono', 'Fira Code', monospace"
      fontSize="7.5"
      fill="#2563eb"
      fontWeight="600"
    >
      your-gym
    </text>

    {/* Content area background */}
    <rect x="21" y="49" width="358" height="214" fill="#0a0a0f" />

    {/* Form container - glass card */}
    <rect
      x="60"
      y="64"
      width="280"
      height="186"
      rx="10"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.75"
    />

    {/* Form header */}
    <text
      x="200"
      y="90"
      textAnchor="middle"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="13"
      fontWeight="700"
      fill="#f0f0f5"
    >
      Create Your Gym
    </text>
    <text
      x="200"
      y="103"
      textAnchor="middle"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="8"
      fill="#8b8b9e"
    >
      Set up your gym's online presence in minutes
    </text>

    {/* Gym Name Label */}
    <text
      x="80"
      y="122"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="8"
      fontWeight="500"
      fill="#8b8b9e"
    >
      Gym Name
    </text>

    {/* Gym Name Input */}
    <rect
      x="80"
      y="126"
      width="240"
      height="24"
      rx="6"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="0.75"
    />
    <text
      x="90"
      y="141"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="9"
      fill="#f0f0f5"
    >
      CrossFit Example
    </text>

    {/* Email Label */}
    <text
      x="80"
      y="162"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="8"
      fontWeight="500"
      fill="#8b8b9e"
    >
      Email
    </text>

    {/* Email Input */}
    <rect
      x="80"
      y="166"
      width="240"
      height="24"
      rx="6"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="0.75"
    />
    <text
      x="90"
      y="181"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="9"
      fill="#8b8b9e"
    >
      john@example.com
    </text>

    {/* URL Preview Box */}
    <rect
      x="80"
      y="198"
      width="240"
      height="20"
      rx="4"
      fill="url(#signup-url-glow)"
      stroke="rgba(37,99,235,0.25)"
      strokeWidth="0.75"
    />
    {/* Small link icon */}
    <circle cx="92" cy="208" r="4" fill="rgba(37,99,235,0.15)" />
    <path
      d="M90 208.5 L91.5 207 L93 207 L94 208 L92.5 209.5 L91 209.5 Z"
      fill="none"
      stroke="#2563eb"
      strokeWidth="0.6"
      strokeLinecap="round"
    />
    <text
      x="100"
      y="211"
      fontFamily="'SF Mono', 'Fira Code', monospace"
      fontSize="7"
      fill="#2563eb"
    >
      nosweat.fitness/gym/crossfit-example
    </text>

    {/* Create Your Gym Button */}
    <rect
      x="80"
      y="226"
      width="240"
      height="28"
      rx="8"
      fill="url(#signup-btn-gradient)"
    />
    {/* Button glow */}
    <rect
      x="80"
      y="226"
      width="240"
      height="28"
      rx="8"
      fill="none"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="0.5"
    />
    <text
      x="200"
      y="244"
      textAnchor="middle"
      fontFamily="'Inter', -apple-system, sans-serif"
      fontSize="10"
      fontWeight="600"
      fill="#ffffff"
    >
      Create Your Gym
    </text>

    {/* Subtle shine on button */}
    <rect
      x="80"
      y="226"
      width="240"
      height="14"
      rx="8"
      fill="rgba(255,255,255,0.06)"
    />
  </svg>
);

export default SignUpIllustration;
