import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import '../styles/globals.css';
import { Providers } from './providers';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'FL Studio Master Reference Hub',
  description: 'Master FL Studio with 134 stock plugins, 12 signal chains, and 73 song templates. Complete native production system.',
  keywords: ['FL Studio', 'music production', 'native plugins', 'DAW', 'production tutorials', 'signal chains', 'mixing', 'mastering'],
  authors: [{ name: 'JaZeR' }],
  creator: 'JaZeR',
  publisher: 'JaZeR',
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
    apple: `${basePath}/favicon.svg`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jazer-444.github.io/fl-studio/',
    siteName: 'FL Studio Master Hub',
    title: 'FL Studio Master Hub - Native Plugin Reference',
    description: 'Master FL Studio with 134 stock plugins, 12 signal chains, and 73 song templates. 100% native workflow.',
    images: [
      {
        url: `${basePath}/favicon.svg`,
        width: 1200,
        height: 630,
        alt: 'FL Studio Master Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FL Studio Master Hub - Native Plugin Reference',
    description: 'Master FL Studio with 134 stock plugins, 12 signal chains, and 73 song templates',
    images: [`${basePath}/favicon.svg`],
  },
  robots: {
    index: true,
    follow: true,
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
