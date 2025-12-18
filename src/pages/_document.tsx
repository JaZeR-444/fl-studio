import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `
          }}
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      fl: {
                        dark: '#2d2d2d',
                        panel: '#363636',
                        orange: '#f97316',
                        text: '#d4d4d4'
                      }
                    }
                  }
                }
              }
            `
          }}
        />
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>
      <body className="bg-stone-50 text-stone-800 dark:bg-zinc-900 dark:text-zinc-300 antialiased h-screen flex overflow-hidden transition-colors duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}