import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import '../styles/globals.css';

export const metadata = {
  title: 'FL Studio Master Reference Hub',
  description: 'Master FL Studio with this comprehensive reference hub',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

import { Navbar } from '@/components/layout/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
