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
    imageUrl: 'https://images.unsplash.com/photo-1510333300224-1d2c674296c2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    year: 'Early Years',
    title: 'The First Day of School',
    description: 'I remember the warm safety of your hand in mine as I took my first steps into the world. You never let go.',
    imageUrl: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    year: 'Through Storms',
    title: 'Late-Night Care',
    description: 'During every sickness and every worry, you were the light that didn’t fade. Your prayers were my medicine.',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    year: 'Eternal Bond',
    title: 'Hetal Chauhan',
    description: 'The woman who built my world. Your love is the compass that guides me through every victory and every challenge.',
    imageUrl: 'https://images.unsplash.com/photo-1520141693006-2580556275c9?q=80&w=800&auto=format&fit=crop',
  },
];

export const GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1444840535719-195841cb6e2b?q=80&w=800&auto=format&fit=crop', caption: 'Endless Sacrifice', rotation: -3 },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1522673607200-164883eecd0c?q=80&w=800&auto=format&fit=crop', caption: 'Quiet Strength', rotation: 2 },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?q=80&w=800&auto=format&fit=crop', caption: 'Pure Grace', rotation: -1 },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1536640712247-c4544137549c?q=80&w=800&auto=format&fit=crop', caption: 'My Eternal Hero', rotation: 4 },
];
