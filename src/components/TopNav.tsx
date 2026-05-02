'use client';

import { useState } from 'react';
import { Rocket, Piano, Newspaper, Megaphone, ChevronDown } from 'lucide-react';

interface TopNavProps {
  onSubmitTool?: () => void;
}

export const TopNav = ({ onSubmitTool }: TopNavProps) => {
  const [activeNav, setActiveNav] = useState('products');

  const navItems = [
    { id: 'launches', label: 'Launches', icon: Rocket },
    { id: 'products', label: 'Products', icon: Piano },
    { id: 'news', label: 'News', icon: Newspaper },
    { id: 'advertise', label: 'Advertise', icon: Megaphone },
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
                className={`premium-focus flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-700 ease-[var(--ease-premium)] ${
                  activeNav === item.id
                    ? 'text-white bg-white/[0.08]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-white/[0.055]'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                {item.id === 'products' && (
                  <ChevronDown className="w-4 h-4 ml-1" />
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
