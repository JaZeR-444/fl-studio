'use client';

import { useState } from 'react';

interface TopNavProps {
  onSubmitTool?: () => void;
}

export const TopNav = ({ onSubmitTool }: TopNavProps) => {
  const [activeNav, setActiveNav] = useState('products');

  const navItems = [
    { id: 'launches', label: 'Launches', icon: '🚀' },
    { id: 'products', label: 'Products', icon: '🎹' },
    { id: 'news', label: 'News', icon: '📰' },
    { id: 'advertise', label: 'Advertise', icon: '📢' },
  ];

  return (
    <header className="glass-topnav fixed top-0 left-0 right-0 z-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">FL</span>
              <span className="text-gradient">STUDIO</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeNav === item.id
                    ? 'text-white bg-white/5'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-white/5'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
                {item.id === 'products' && (
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSubmitTool}
            className="hidden md:flex btn-primary text-sm"
          >
            Submit Tool
          </button>
          <button className="hidden md:flex btn-glass text-sm">
            Sign In
          </button>
          <button className="btn-primary text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};
