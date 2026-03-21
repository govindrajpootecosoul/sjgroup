import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | SJ Group | Innovation & Technology Leadership',
  description:
    'Shreejiva — Pioneering innovation in technology. Vision, mission, and how we drive operational excellence through automation and integrated systems.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
