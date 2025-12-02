import type { Coach } from '../types';

export const coaches: Coach[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    title: 'Head Coach & Owner',
    bio: 'Sarah founded CrossFit Comet in 2018 with a vision to create an inclusive, results-driven fitness community. With over 10 years of coaching experience, she specializes in Olympic weightlifting and nutrition coaching.',
    certifications: [
      'CrossFit Level 3 Trainer (CF-L3)',
      'USA Weightlifting Level 2',
      'Precision Nutrition Level 1',
    ],
    specialties: ['Olympic Weightlifting', 'Nutrition', 'Competition Prep'],
  },
  {
    id: 'marcus-johnson',
    name: 'Marcus Johnson',
    title: 'Senior Coach',
    bio: 'Marcus brings a background in collegiate athletics and strength & conditioning. He has a talent for breaking down complex movements and helping athletes overcome mental barriers.',
    certifications: [
      'CrossFit Level 2 Trainer (CF-L2)',
      'NSCA-CPT',
      'CrossFit Gymnastics',
    ],
    specialties: ['Gymnastics', 'Mobility', 'Strength Training'],
  },
  {
    id: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    title: 'Coach',
    bio: 'Emily discovered CrossFit while recovering from a running injury and never looked back. She loves working with beginners and helping them discover their potential.',
    certifications: [
      'CrossFit Level 1 Trainer (CF-L1)',
      'Running Coach Certification',
    ],
    specialties: ['Endurance', 'Scaling', 'Injury Prevention'],
  },
  {
    id: 'david-park',
    name: 'David Park',
    title: 'Coach',
    bio: 'David competed at the regional level for 3 years before transitioning to coaching. He brings high energy and technical expertise to every class.',
    certifications: [
      'CrossFit Level 2 Trainer (CF-L2)',
      'CrossFit Weightlifting',
    ],
    specialties: ['Competition Training', 'Olympic Lifts', 'Programming'],
  },
];
