import type { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'crossfit',
    title: 'CrossFit',
    description: 'High-intensity functional fitness for all levels. Build strength, endurance, and community.',
    features: [
      'Constantly varied workouts',
      'Functional movements',
      'High intensity training',
      'Scalable for any fitness level',
      'Expert coaching',
    ],
    level: 'all',
  },
  {
    id: 'foundations',
    title: 'Foundations',
    description: 'Perfect for beginners. Learn the core movements and build a strong foundation with personalized coaching.',
    features: [
      '12 sessions over 4 weeks',
      'Small group setting (max 6)',
      'Movement mechanics focus',
      'Personalized coaching',
      'Graduate to regular classes',
    ],
    level: 'beginner',
  },
  {
    id: 'open-gym',
    title: 'Open Gym',
    description: 'Train on your own schedule. Access to all equipment and facilities during open gym hours.',
    features: [
      'Flexible schedule',
      'All equipment available',
      'Self-directed training',
      'Coach available for questions',
      'Perfect for experienced athletes',
    ],
    level: 'intermediate',
  },
  {
    id: 'barbell-club',
    title: 'Barbell Club',
    description: 'Focused strength training program. Build raw power with Olympic lifts and powerlifting movements.',
    features: [
      'Olympic weightlifting',
      'Powerlifting techniques',
      'Strength programming',
      'Small class sizes',
      'Competition preparation',
    ],
    level: 'intermediate',
  },
  {
    id: 'teens',
    title: 'CrossFit Teens',
    description: 'Age-appropriate functional fitness for teenagers. Build confidence, strength, and healthy habits.',
    features: [
      'Ages 13-17',
      'Trained youth coaches',
      'Focus on mechanics',
      'Building healthy habits',
      'Positive community',
    ],
    level: 'all',
  },
  {
    id: 'competition',
    title: 'Competition Team',
    description: 'Elite training for competitive athletes. Prepare for local and regional CrossFit competitions.',
    features: [
      'Advanced programming',
      'Competition strategy',
      'Skills development',
      'Mental preparation',
      'Team atmosphere',
    ],
    level: 'advanced',
  },
];
