'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

// Get basePath for GitHub Pages compatibility
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { state, dispatch } = useAppContext();

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

  const isHubPage = pathname?.startsWith('/hub');

  const toggleMobileMenu = () => {
    dispatch({ type: 'TOGGLE_MOBILE_MENU' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-2xl border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu Button - Only show on hub pages */}
        {isHubPage && (
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors mr-3"
            aria-label={state.mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {state.mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        )}

        {/* Logo */}
        <Link href="/" className="flex items-center group relative cursor-pointer">
          <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          <div className="relative h-8 md:h-10 w-36 md:w-48 group-hover:scale-105 transition-transform duration-300">
             <Image 
               src={`${basePath}/images/branding/logo-white.svg`} 
               alt="FL Studio Master Hub" 
               fill
               className="object-contain object-left drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center p-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md relative">
          {navLinks.map((link) => {
             const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
             return (
              <Link 
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                  isActive 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {/* Active Background - Gradient */}
                <span className={`absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'group-hover:opacity-10'}`} />
                
                {/* Subtle Border Glow on Hover */}
                {!isActive && (
                   <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-colors pointer-events-none" />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  {link.label}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                </span>
                
                {/* Bottom Shine for Active */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                )}
              </Link>
             );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 md:gap-4">
           <Link 
             href="https://www.image-line.com/" 
             target="_blank"
             className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors hidden md:block"
           >
             Official Site
           </Link>
           {!isHubPage && (
             <Link 
               href="/hub"
               className="btn-primary text-xs md:text-sm py-2 px-3 md:px-4 shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_25px_rgba(255,165,0,0.5)] transition-shadow"
             >
               Open App
             </Link>
           )}
        </div>
      </div>
    </nav>
  );
};
