interface ScheduleIllustrationProps {
  className?: string;
}

const ScheduleIllustration = ({ className }: ScheduleIllustrationProps) => {
  /* Grid layout constants */
  const panelX = 20;
  const panelY = 16;
  const panelW = 360;
  const panelH = 248;
  const headerH = 40;
  const timeColW = 36;
  const dayLabelH = 18;
  const gridX = panelX + timeColW;
  const gridY = panelY + headerH + dayLabelH;
  const gridW = panelW - timeColW;
  const colW = gridW / 7;
  const gridH = panelH - headerH - dayLabelH;
  const rowH = gridH / 4;

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const times = ['06:00', '09:00', '12:00', '17:00'];

  return (
    <svg
      viewBox="0 0 400 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Weekly class schedule showing a calendar grid with class blocks"
    >
      <defs>
        <linearGradient id="sched-accent-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Panel background */}
      <rect
        x={panelX}
        y={panelY}
        width={panelW}
        height={panelH}
        rx={12}
        fill="#12121a"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={1}
      />

      {/* Header area */}
      <rect
        x={panelX}
        y={panelY}
        width={panelW}
        height={headerH}
        rx={12}
        fill="rgba(255,255,255,0.02)"
      />
      <rect x={panelX} y={panelY + 28} width={panelW} height={12} fill="rgba(255,255,255,0.02)" />
      <line
        x1={panelX}
        y1={panelY + headerH}
        x2={panelX + panelW}
        y2={panelY + headerH}
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={0.75}
      />

      {/* Header icon */}
      <circle cx={panelX + 24} cy={panelY + 20} r={10} fill="rgba(37,99,235,0.1)" />
      <rect x={panelX + 17} y={panelY + 15} width={14} height={11} rx={2} fill="none" stroke="#2563eb" strokeWidth={0.9} />
      <line x1={panelX + 17} y1={panelY + 19} x2={panelX + 31} y2={panelY + 19} stroke="#2563eb" strokeWidth={0.7} />
      <line x1={panelX + 21} y1={panelY + 15} x2={panelX + 21} y2={panelY + 13} stroke="#2563eb" strokeWidth={0.7} strokeLinecap="round" />
      <line x1={panelX + 27} y1={panelY + 15} x2={panelX + 27} y2={panelY + 13} stroke="#2563eb" strokeWidth={0.7} strokeLinecap="round" />

      {/* Header text */}
      <text
        x={panelX + 40}
        y={panelY + 18}
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={12}
        fontWeight={700}
        fill="#f0f0f5"
      >
        Class Schedule
      </text>
      <text
        x={panelX + 40}
        y={panelY + 30}
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={7.5}
        fill="#8b8b9e"
      >
        Week of Feb 17 - Feb 23
      </text>

      {/* Week navigation arrows */}
      <circle cx={345} cy={panelY + 20} r={8} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth={0.5} />
      <path d="M343 28 L346 31 L343 34" fill="none" stroke="#8b8b9e" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={325} cy={panelY + 20} r={8} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth={0.5} />
      <path d="M327 28 L324 31 L327 34" fill="none" stroke="#8b8b9e" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />

      {/* Day labels */}
      {days.map((day, i) => (
        <text
          key={day}
          x={gridX + colW * i + colW / 2}
          y={panelY + headerH + 13}
          textAnchor="middle"
          fontFamily="'Inter', -apple-system, sans-serif"
          fontSize={7.5}
          fontWeight={day === 'Tue' ? 700 : 500}
          fill={day === 'Tue' ? '#2563eb' : '#8b8b9e'}
        >
          {day}
        </text>
      ))}

      {/* "Today" indicator dot under Tue */}
      <circle cx={gridX + colW * 1 + colW / 2} cy={panelY + headerH + 17} r={1.5} fill="#2563eb" />

      {/* Divider below day labels */}
      <line
        x1={panelX}
        y1={gridY}
        x2={panelX + panelW}
        y2={gridY}
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={0.5}
      />

      {/* Time labels */}
      {times.map((time, i) => (
        <text
          key={time}
          x={panelX + 6}
          y={gridY + rowH * i + 11}
          fontFamily="'SF Mono', 'Fira Code', monospace"
          fontSize={6.5}
          fill="#8b8b9e"
          opacity={0.7}
        >
          {time}
        </text>
      ))}

      {/* Horizontal grid lines */}
      {times.map((_, i) => (
        <line
          key={`hline-${i}`}
          x1={gridX}
          y1={gridY + rowH * i}
          x2={panelX + panelW}
          y2={gridY + rowH * i}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={0.5}
        />
      ))}

      {/* Vertical grid lines */}
      {days.map((_, i) => (
        <line
          key={`vline-${i}`}
          x1={gridX + colW * i}
          y1={gridY}
          x2={gridX + colW * i}
          y2={gridY + gridH}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={0.5}
        />
      ))}

      {/* === Class blocks === */}

      {/* Mon 06:00 - CrossFit */}
      <rect
        x={gridX + colW * 0 + 2}
        y={gridY + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(37,99,235,0.15)"
        stroke="rgba(37,99,235,0.3)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 0 + colW / 2}
        y={gridY + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#60a5fa"
      >
        CrossFit
      </text>
      <text
        x={gridX + colW * 0 + colW / 2}
        y={gridY + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#60a5fa"
        opacity={0.6}
      >
        06:00
      </text>

      {/* Tue 06:00 - CrossFit (with capacity badge) */}
      <rect
        x={gridX + colW * 1 + 2}
        y={gridY + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(37,99,235,0.15)"
        stroke="rgba(37,99,235,0.3)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 1 + colW / 2}
        y={gridY + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#60a5fa"
      >
        CrossFit
      </text>
      {/* Capacity badge */}
      <rect
        x={gridX + colW * 1 + colW / 2 - 11}
        y={gridY + 17}
        width={22}
        height={10}
        rx={5}
        fill="rgba(37,99,235,0.3)"
      />
      <text
        x={gridX + colW * 1 + colW / 2}
        y={gridY + 25}
        textAnchor="middle"
        fontFamily="'SF Mono', 'Fira Code', monospace"
        fontSize={5.5}
        fontWeight={600}
        fill="#93c5fd"
      >
        14/20
      </text>

      {/* Wed 06:00 - CrossFit */}
      <rect
        x={gridX + colW * 2 + 2}
        y={gridY + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(37,99,235,0.15)"
        stroke="rgba(37,99,235,0.3)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 2 + colW / 2}
        y={gridY + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#60a5fa"
      >
        CrossFit
      </text>
      <text
        x={gridX + colW * 2 + colW / 2}
        y={gridY + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#60a5fa"
        opacity={0.6}
      >
        06:00
      </text>

      {/* Thu 06:00 - HIIT */}
      <rect
        x={gridX + colW * 3 + 2}
        y={gridY + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(37,99,235,0.2)"
        stroke="rgba(37,99,235,0.35)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 3 + colW / 2}
        y={gridY + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#60a5fa"
      >
        HIIT
      </text>
      <text
        x={gridX + colW * 3 + colW / 2}
        y={gridY + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#60a5fa"
        opacity={0.6}
      >
        06:00
      </text>

      {/* Fri 06:00 - CrossFit */}
      <rect
        x={gridX + colW * 4 + 2}
        y={gridY + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(37,99,235,0.15)"
        stroke="rgba(37,99,235,0.3)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 4 + colW / 2}
        y={gridY + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#60a5fa"
      >
        CrossFit
      </text>
      <text
        x={gridX + colW * 4 + colW / 2}
        y={gridY + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#60a5fa"
        opacity={0.6}
      >
        06:00
      </text>

      {/* Mon 09:00 - Yoga */}
      <rect
        x={gridX + colW * 0 + 2}
        y={gridY + rowH + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(124,58,237,0.15)"
        stroke="rgba(124,58,237,0.3)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 0 + colW / 2}
        y={gridY + rowH + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#a78bfa"
      >
        Yoga
      </text>
      <text
        x={gridX + colW * 0 + colW / 2}
        y={gridY + rowH + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#a78bfa"
        opacity={0.6}
      >
        09:00
      </text>

      {/* Wed 09:00 - Yoga */}
      <rect
        x={gridX + colW * 2 + 2}
        y={gridY + rowH + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(124,58,237,0.15)"
        stroke="rgba(124,58,237,0.3)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 2 + colW / 2}
        y={gridY + rowH + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#a78bfa"
      >
        Yoga
      </text>
      <text
        x={gridX + colW * 2 + colW / 2}
        y={gridY + rowH + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#a78bfa"
        opacity={0.6}
      >
        09:00
      </text>

      {/* Fri 09:00 - Strength */}
      <rect
        x={gridX + colW * 4 + 2}
        y={gridY + rowH + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(124,58,237,0.18)"
        stroke="rgba(124,58,237,0.35)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 4 + colW / 2}
        y={gridY + rowH + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#a78bfa"
      >
        Strength
      </text>
      <text
        x={gridX + colW * 4 + colW / 2}
        y={gridY + rowH + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#a78bfa"
        opacity={0.6}
      >
        09:00
      </text>

      {/* Sat 09:00 - Open Gym */}
      <rect
        x={gridX + colW * 5 + 2}
        y={gridY + rowH + 3}
        width={colW - 4}
        height={rowH * 2 - 8}
        rx={4}
        fill="rgba(5,150,105,0.12)"
        stroke="rgba(5,150,105,0.25)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 5 + colW / 2}
        y={gridY + rowH + 18}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#34d399"
      >
        Open
      </text>
      <text
        x={gridX + colW * 5 + colW / 2}
        y={gridY + rowH + 27}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#34d399"
      >
        Gym
      </text>
      <text
        x={gridX + colW * 5 + colW / 2}
        y={gridY + rowH + 37}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#34d399"
        opacity={0.6}
      >
        09-12
      </text>

      {/* Tue 12:00 - HIIT */}
      <rect
        x={gridX + colW * 1 + 2}
        y={gridY + rowH * 2 + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(37,99,235,0.2)"
        stroke="rgba(37,99,235,0.35)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 1 + colW / 2}
        y={gridY + rowH * 2 + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#60a5fa"
      >
        HIIT
      </text>
      <text
        x={gridX + colW * 1 + colW / 2}
        y={gridY + rowH * 2 + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#60a5fa"
        opacity={0.6}
      >
        12:00
      </text>

      {/* Thu 12:00 - Yoga */}
      <rect
        x={gridX + colW * 3 + 2}
        y={gridY + rowH * 2 + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(124,58,237,0.15)"
        stroke="rgba(124,58,237,0.3)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 3 + colW / 2}
        y={gridY + rowH * 2 + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#a78bfa"
      >
        Yoga
      </text>
      <text
        x={gridX + colW * 3 + colW / 2}
        y={gridY + rowH * 2 + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#a78bfa"
        opacity={0.6}
      >
        12:00
      </text>

      {/* Mon 17:00 - CrossFit */}
      <rect
        x={gridX + colW * 0 + 2}
        y={gridY + rowH * 3 + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(37,99,235,0.15)"
        stroke="rgba(37,99,235,0.3)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 0 + colW / 2}
        y={gridY + rowH * 3 + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#60a5fa"
      >
        CrossFit
      </text>
      <text
        x={gridX + colW * 0 + colW / 2}
        y={gridY + rowH * 3 + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#60a5fa"
        opacity={0.6}
      >
        17:00
      </text>

      {/* Tue 17:00 - Strength */}
      <rect
        x={gridX + colW * 1 + 2}
        y={gridY + rowH * 3 + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(124,58,237,0.18)"
        stroke="rgba(124,58,237,0.35)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 1 + colW / 2}
        y={gridY + rowH * 3 + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#a78bfa"
      >
        Strength
      </text>
      <text
        x={gridX + colW * 1 + colW / 2}
        y={gridY + rowH * 3 + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#a78bfa"
        opacity={0.6}
      >
        17:00
      </text>

      {/* Wed 17:00 - CrossFit */}
      <rect
        x={gridX + colW * 2 + 2}
        y={gridY + rowH * 3 + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(37,99,235,0.15)"
        stroke="rgba(37,99,235,0.3)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 2 + colW / 2}
        y={gridY + rowH * 3 + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#60a5fa"
      >
        CrossFit
      </text>
      <text
        x={gridX + colW * 2 + colW / 2}
        y={gridY + rowH * 3 + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#60a5fa"
        opacity={0.6}
      >
        17:00
      </text>

      {/* Thu 17:00 - HIIT */}
      <rect
        x={gridX + colW * 3 + 2}
        y={gridY + rowH * 3 + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(37,99,235,0.2)"
        stroke="rgba(37,99,235,0.35)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 3 + colW / 2}
        y={gridY + rowH * 3 + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#60a5fa"
      >
        HIIT
      </text>
      <text
        x={gridX + colW * 3 + colW / 2}
        y={gridY + rowH * 3 + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#60a5fa"
        opacity={0.6}
      >
        17:00
      </text>

      {/* Fri 17:00 - CrossFit */}
      <rect
        x={gridX + colW * 4 + 2}
        y={gridY + rowH * 3 + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(37,99,235,0.15)"
        stroke="rgba(37,99,235,0.3)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 4 + colW / 2}
        y={gridY + rowH * 3 + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6.5}
        fontWeight={600}
        fill="#60a5fa"
      >
        CrossFit
      </text>
      <text
        x={gridX + colW * 4 + colW / 2}
        y={gridY + rowH * 3 + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#60a5fa"
        opacity={0.6}
      >
        17:00
      </text>

      {/* Sun 17:00 - Open Gym */}
      <rect
        x={gridX + colW * 6 + 2}
        y={gridY + rowH * 3 + 3}
        width={colW - 4}
        height={rowH - 8}
        rx={4}
        fill="rgba(5,150,105,0.12)"
        stroke="rgba(5,150,105,0.25)"
        strokeWidth={0.5}
      />
      <text
        x={gridX + colW * 6 + colW / 2}
        y={gridY + rowH * 3 + 14}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={6}
        fontWeight={600}
        fill="#34d399"
      >
        Open Gym
      </text>
      <text
        x={gridX + colW * 6 + colW / 2}
        y={gridY + rowH * 3 + 22}
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontSize={5.5}
        fill="#34d399"
        opacity={0.6}
      >
        17:00
      </text>
    </svg>
  );
};

export default ScheduleIllustration;
