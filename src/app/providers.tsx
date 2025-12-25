'use client';

import { ReactNode } from 'react';
import { AppProvider } from '@/context/AppContext';
import { Navbar } from '@/components/layout/Navbar';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AppProvider>
      <Navbar />
      {children}
    </AppProvider>
  );
}
