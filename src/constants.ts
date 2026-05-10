export interface Memory {
  id: string;
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  rotation: number;
}

export const MEMORIES: Memory[] = [
  {
    id: '1',
    year: 'Foundation',
    title: 'The Silent Supporter',
    description: 'You were the quiet strength behind every single achievement, never asking for credit, always giving your best.',
    imageUrl: '/images/silentsupport.jpg',
  },
  {
    id: '2',
    year: 'Early Years',
    title: 'The Innocent Years',
    description: 'I remember the warm safety of your hand in mine as I took my first steps into the world. You never let go.',
    imageUrl: '/images/earlyyears.jpg',
  },
  {
    id: '3',
    year: 'With Care  ',
    title: 'Through Everything',
    description: 'During every sickness and every worry, you were the light that didn’t fade. Your prayers were my medicine.',
    imageUrl: '/images/care.jpg',
  },
  {
    id: '4',
    year: 'Eternal Bond',
    title: 'Hetal Chauhan',
    description: 'The woman who built my world. Your love is the compass that guides me through every victory and every challenge.',
    imageUrl: '/images/ebond.jpg',
  },
];

export const GALLERY: GalleryImage[] = [
  { id: 'g1', url: '/images/g1.jpg', caption: 'Endless Comfort', rotation: -3 },
  { id: 'g2', url: '/images/g2.jpg', caption: 'Quiet Strength', rotation: 2 },
  { id: 'g3', url: '/images/g3.jpg', caption: 'Pure Grace', rotation: -1 },
  { id: 'g4', url: '/images/g4.jpg', caption: 'My Eternal Hero', rotation: 4 },
];
