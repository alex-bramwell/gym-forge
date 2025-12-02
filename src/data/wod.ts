import type { WOD } from '../types';

// Sample WOD - in production, this would come from a CMS or API
export const todaysWOD: WOD = {
  id: 'wod-2025-12-02',
  date: '2025-12-02',
  title: 'Metcon Monday',
  description: '21-15-9 reps for time',
  movements: [
    'Thrusters (95/65 lbs)',
    'Pull-ups',
    'Box Jumps (24/20 in)',
  ],
  type: 'fortime',
  duration: '15 min time cap',
  rounds: 3,
};

// Additional sample WODs for variety
export const sampleWODs: WOD[] = [
  todaysWOD,
  {
    id: 'wod-2025-12-01',
    date: '2025-12-01',
    title: 'Sunday Funday',
    description: 'As many rounds as possible in 20 minutes',
    movements: [
      '400m Run',
      '15 Wall Balls (20/14 lbs)',
      '12 Kettlebell Swings (53/35 lbs)',
    ],
    type: 'amrap',
    duration: '20 min',
  },
  {
    id: 'wod-2025-11-30',
    date: '2025-11-30',
    title: 'Saturday Strength',
    description: 'Build to a heavy single',
    movements: [
      'Back Squat',
      'Then: 3x5 @ 85% of today\'s heavy single',
    ],
    type: 'strength',
  },
];
