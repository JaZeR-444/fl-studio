'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
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

  // Keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        dispatch({ type: 'TOGGLE_COMMAND_PALETTE' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/hub', label: 'Studio Hub' },
  ];

  const isHubPage = pathname?.startsWith('/hub') || pathname?.startsWith('/plugins');

  const toggleMobileMenu = () => {
    dispatch({ type: 'TOGGLE_MOBILE_MENU' });
  };



  const openCommandPalette = () => {
    dispatch({ type: 'SET_COMMAND_PALETTE', payload: true });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[var(--ease-premium)] border-b ${scrolled
        ? 'bg-[rgba(5,7,13,0.82)] backdrop-blur-2xl border-[var(--glass-border)] py-3 shadow-[0_18px_70px_rgba(0,0,0,0.28)]'
        : 'bg-transparent border-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Left Section: Mobile Menu / Branding Icon */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button - Only show on hub pages */}
          {isHubPage && (
            <button
              onClick={toggleMobileMenu}
              className="premium-focus md:hidden p-2 rounded-full bg-white/[0.045] border border-[var(--glass-border)] hover:bg-white/[0.08] transition-colors"
              aria-label={state.mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {state.mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          )}

          {/* Small Icon for non-hub pages where sidebar isn't present */}
          {!isHubPage && (
            <Link href="/" className="premium-focus flex items-center group rounded-full">
              <div className="relative h-8 w-8 group-hover:scale-105 transition-transform">
                <Image
                  src={`${basePath}/images/branding/icon.svg`}
                  alt="FL Studio Master Hub"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                />
              </div>
            </Link>
          )}
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center p-1 rounded-full border border-[var(--glass-border)] bg-white/[0.045] backdrop-blur-md shadow-[var(--shadow-inner-line)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`premium-focus relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-700 ease-[var(--ease-premium)] overflow-hidden group ${isActive
                  ? 'text-white'
                  : 'text-[var(--text-muted)] hover:text-white'
                  }`}
              >
                {/* Active Background - Gradient */}
                <span className={`absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--blue-accent)] to-[var(--accent-secondary)] opacity-0 transition-opacity duration-700 ease-[var(--ease-premium)] ${isActive ? 'opacity-25' : 'group-hover:opacity-10'}`} />

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

        {/* Right Section: Utility Icons + CTA */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search Button - Opens Command Palette */}
          {isHubPage && (
            <button
              onClick={openCommandPalette}
              className="premium-focus hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.045] border border-[var(--glass-border)] hover:bg-white/[0.08] hover:border-[var(--glass-border-hover)] transition-all text-[var(--text-muted)] hover:text-white group"
              title="Search (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm">Search...</span>
              <div className="flex items-center gap-0.5 text-[10px] opacity-50 group-hover:opacity-70">
                <kbd className="px-1.5 py-0.5 rounded bg-white/10">⌘</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10">K</kbd>
              </div>
            </button>
          )}

          {/* Mobile Search Icon */}
          {isHubPage && (
            <button
              onClick={openCommandPalette}
              className="premium-focus md:hidden p-2 rounded-full bg-white/[0.045] border border-[var(--glass-border)] hover:bg-white/[0.08] transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          )}



          {/* External Link - Official FL Studio */}
          <Link
            href="https://www.image-line.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-focus hidden lg:block rounded-full text-sm text-[var(--text-muted)] hover:text-white transition-colors px-3 py-1.5"
          >
            Official Site
          </Link>

          {/* Open App CTA - Only on landing page */}
          {!isHubPage && (
            <Link
              href="/hub"
              className="btn-primary text-xs md:text-sm py-2 px-3 md:px-4"
            >
              Open App
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
