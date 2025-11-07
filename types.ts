// FIX: Import `ReactNode` type to resolve missing React namespace.
import type { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface PortfolioImage {
  id: number;
  category: string;
  src: string;
  alt: string;
}
