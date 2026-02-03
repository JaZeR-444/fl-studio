'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AppProvider } from '@/context/AppContext';
import { Navbar } from '@/components/layout/Navbar';

interface ProvidersProps {
  children: ReactNode;
}

// Pages with their own complete navigation UI that shouldn't show global navbar
const PAGES_WITHOUT_NAVBAR = ['/hub', '/plugins'];

export function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();
  const hideNavbar = PAGES_WITHOUT_NAVBAR.some(path => pathname?.startsWith(path));

  return (
    <AppProvider>
      {!hideNavbar && <Navbar />}
      {children}
    </AppProvider>
  );
}
