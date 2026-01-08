import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import '../styles/globals.css';
import { Providers } from './providers';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'FL Studio Master Reference Hub',
  description: 'Master FL Studio with this comprehensive reference hub',
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
    apple: `${basePath}/favicon.svg`,
  },
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
