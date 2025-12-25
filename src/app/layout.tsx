import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import '../styles/globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'FL Studio Master Reference Hub',
  description: 'Master FL Studio with this comprehensive reference hub',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
