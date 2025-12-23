'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/hub', label: 'Studio Hub' },
    { href: '/hub#plugins', label: 'Plugins' },
    { href: '/hub#workflows', label: 'Workflows' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-white/5 py-3' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 group-hover:scale-110 transition-transform">
            <Image 
               src="/images/branding/icon.svg" 
               alt="FL Studio Hub Icon" 
               fill
               className="object-contain drop-shadow-[0_0_10px_rgba(255,165,0,0.5)]"
            />
          </div>
          <div className="relative h-6 w-32">
             <Image 
               src="/images/branding/logo.svg" 
               alt="FL Studio Hub Logo" 
               fill
               className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
             const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
             return (
              <Link 
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? 'text-white bg-white/10' 
                    : 'text-[var(--text-muted)] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
             );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
           <Link 
             href="https://www.image-line.com/" 
             target="_blank"
             className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors hidden md:block"
           >
             Official Site
           </Link>
           <Link 
             href="/hub"
             className="btn-primary text-sm py-2 px-4 shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_25px_rgba(255,165,0,0.5)] transition-shadow"
           >
             Open App
           </Link>
        </div>
      </div>
    </nav>
  );
};
