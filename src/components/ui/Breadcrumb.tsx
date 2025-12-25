'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Professional breadcrumb navigation component
 * Provides wayfinding for deep navigation structures
 */
export const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  if (!items || items.length === 0) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center gap-1 text-sm ${className}`}
    >
      <ol className="flex items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight 
                  className="w-3.5 h-3.5 text-[var(--text-dim)]" 
                  aria-hidden="true"
                />
              )}
              
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent-secondary)] focus-visible:outline-offset-2"
                >
                  {item.icon && (
                    <span className="text-[var(--text-dim)]">{item.icon}</span>
                  )}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span 
                  className={`flex items-center gap-1.5 px-2 py-1 rounded-md ${
                    isLast 
                      ? 'text-white font-medium bg-white/5' 
                      : 'text-[var(--text-muted)]'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.icon && (
                    <span className="text-[var(--text-dim)]">{item.icon}</span>
                  )}
                  <span className="max-w-[200px] truncate">{item.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

/**
 * Pre-configured breadcrumb for plugin detail pages
 */
export const PluginBreadcrumb = ({ 
  pluginName, 
  category 
}: { 
  pluginName: string; 
  category?: string;
}) => {
  const items: BreadcrumbItem[] = [
    { 
      label: 'Studio Hub', 
      href: '/hub',
      icon: <Home className="w-3.5 h-3.5" />
    },
    { 
      label: 'Plugin Database', 
      href: '/hub#plugins-database'
    },
  ];

  // Add category if provided
  if (category) {
    items.push({ 
      label: category,
      href: `/hub#plugins-database?category=${encodeURIComponent(category)}`
    });
  }

  // Current plugin (no link - it's where we are)
  items.push({ label: pluginName });

  return <Breadcrumb items={items} />;
};

export default Breadcrumb;
