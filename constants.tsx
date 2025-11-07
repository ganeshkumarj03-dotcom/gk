
import React from 'react';
import type { Service, PortfolioImage } from './types';

const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const BabyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 10a1 1 0 11-2 0 1 1 0 012 0zM19 10a1 1 0 11-2 0 1 1 0 012 0zM12 16a4 4 0 00-4 4h8a4 4 0 00-4-4z" />
    </svg>
);

const CakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15.25V12a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 12v3.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.25V9.75M15.75 15.25V9.75M12 15.25V4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a2.25 2.25 0 012.25 2.25" />
    </svg>
);


export const SERVICES: Service[] = [
  { icon: <HeartIcon />, title: "Wedding", description: "Capturing the magic of your special day with creative and timeless photography and film." },
  { icon: <HeartIcon />, title: "Pre & Post Wedding", description: "Beautifully crafted shoots to celebrate your journey together, before and after the vows." },
  { icon: <CameraIcon />, title: "Events", description: "Professional coverage for corporate functions, parties, and all significant gatherings." },
  { icon: <BabyIcon />, title: "Baby Shower", description: "Adorable and heartwarming photos to remember the celebration of new life." },
  { icon: <CakeIcon />, title: "Birthday Function", description: "Fun, vibrant, and energetic coverage of birthday parties for all ages." },
  { icon: <CameraIcon />, title: "Puberty Function", description: "Respectful and elegant documentation of traditional coming-of-age ceremonies." },
];

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  { id: 1, category: "Wedding", src: "https://picsum.photos/id/1015/800/600", alt: "Wedding couple" },
  { id: 2, category: "Events", src: "https://picsum.photos/id/1041/800/600", alt: "Event concert" },
  { id: 3, category: "Birthday", src: "https://picsum.photos/id/103/800/600", alt: "Birthday celebration" },
  { id: 4, category: "Wedding", src: "https://picsum.photos/id/219/800/600", alt: "Wedding rings" },
  { id: 5, category: "Baby Shower", src: "https://picsum.photos/id/1066/800/600", alt: "Baby shoes" },
  { id: 6, category: "Wedding", src: "https://picsum.photos/id/326/800/600", alt: "Wedding decor" },
  { id: 7, category: "Events", src: "https://picsum.photos/id/10/800/600", alt: "Corporate event" },
  { id: 8, category: "Birthday", src: "https://picsum.photos/id/119/800/600", alt: "Birthday cake" },
  { id: 9, category: "Pre & Post Wedding", src: "https://picsum.photos/id/1027/800/600", alt: "Couple outdoors" },
];

export const PORTFOLIO_CATEGORIES = ["All", "Wedding", "Pre & Post Wedding", "Events", "Baby Shower", "Birthday"];
