'use client';

import Link from 'next/link';

import { ReactNode } from 'react';


export interface ToolCardProps {
  id?: string;
  name: string;
  description: string;
  category: string;
  categoryColor?: 'purple' | 'blue' | 'cyan' | 'green' | 'orange' | 'pink' | 'red';
  rating?: number;
  icon?: ReactNode;
  tags?: { label: string; color: 'purple' | 'blue' | 'cyan' | 'green' | 'orange' | 'pink' | 'red' }[];
  pricingBadge?: 'free' | 'producer' | 'signature' | 'all-plugins' | 'fruity';
  isSponsored?: boolean;
  isFeatured?: boolean;
  views?: number;
  saves?: number;
  href?: string;
  onClick?: () => void;
}

export const ToolCard = ({
  name,
  description,
  category,
  categoryColor = 'purple',
  rating,
  icon,
  tags = [],
  pricingBadge,
  isSponsored = false,
  isFeatured = false,
  views = 0,
  saves = 0,
  onClick,
  href
}: ToolCardProps) => {
  const getPricingBadge = () => {
    switch (pricingBadge) {
      case 'free':
        return { label: 'Built-in', className: 'badge-green' };
      case 'fruity':
        return { label: 'Fruity', className: 'badge-pink' };
      case 'producer':
        return { label: 'Producer+', className: 'badge-blue' };
      case 'signature':
        return { label: 'Signature+', className: 'badge-orange' };
      case 'all-plugins':
        return { label: 'All Plugins', className: 'badge-purple' };
      default:
        return null;
    }
  };


  const pricing = getPricingBadge();

  const formatNumber = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  const CardContent = (
    <div
      onClick={!href ? onClick : undefined}
      className={`tool-card cursor-pointer group ${isFeatured ? 'animate-pulse-glow' : ''}`}
    >
      {/* Sponsored Badge */}
      {isSponsored && (
        <div className="absolute top-3 right-3">
          <span className="badge badge-sponsored text-[10px]">Sponsored</span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[var(--bg-card)] border border-[var(--glass-border)] flex items-center justify-center text-2xl shrink-0">
          {icon || '🎹'}
        </div>

        {/* Title & Rating */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-white truncate">{name}</h3>
            {rating && (
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-sm font-semibold text-white">{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-[var(--text-dim)] flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span>0</span>
            <span className="mx-1">•</span>
            <span>{category}</span>
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className={`badge badge-${tag.color}`}>
            {tag.label}
          </span>
        ))}
        {pricing && (
          <span className={`badge ${pricing.className}`}>
            {pricing.label}
          </span>
        )}
      </div>

      {/* Stats Footer */}
      <div className="tool-stats">
        <div className="tool-stats-item">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>{formatNumber(views)}</span>
        </div>
        <div className="tool-stats-item">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
          <span>{formatNumber(saves)}</span>
        </div>
        <div className="tool-stats-item ml-auto">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </div>
        <div className="tool-stats-item">
           <span className="text-[var(--accent-tertiary)] hover:text-[var(--accent-secondary)] transition-colors text-xs flex items-center gap-1">
             View Details
             <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
             </svg>
           </span>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block group w-full h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

// Simpler Tool Card for listing views
export const ToolCardCompact = ({
  name,
  description,
  category,
  icon,
  date,
  tags = [],
  pricingBadge,
  onClick,
  href
}: {
  name: string;
  description: string;
  category: string;
  icon?: ReactNode;
  date?: string;
  tags?: { label: string; color: 'purple' | 'blue' | 'cyan' | 'green' | 'orange' | 'pink' | 'red' }[];
  pricingBadge?: 'free' | 'producer' | 'signature' | 'all-plugins' | 'fruity';
  onClick?: () => void;
  href?: string;
}) => {
  const getPricingBadge = () => {
    switch (pricingBadge) {
      case 'free':
        return { label: 'Built-in', className: 'badge-green' };
      case 'fruity':
        return { label: 'Fruity', className: 'badge-pink' };
      case 'producer':
        return { label: 'Producer+', className: 'badge-blue' };
      case 'signature':
        return { label: 'Signature+', className: 'badge-orange' };
      case 'all-plugins':
        return { label: 'All Plugins', className: 'badge-purple' };
      default:
        return null;
    }
  };

  const pricing = getPricingBadge();

  const CardContent = (
    <div onClick={!href ? onClick : undefined} className="tool-card cursor-pointer group h-full flex flex-col relative">
      {/* Date Badge */}
      {date && (
        <div className="absolute top-3 right-3">
          <span className="badge badge-blue text-[10px]">{date}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--glass-border)] flex items-center justify-center text-xl shrink-0">
          {icon || '🎹'}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white truncate">{name}</h3>
          <p className="text-xs text-[var(--text-dim)] flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span>0</span>
            <span className="mx-1">•</span>
            <span>{category}</span>
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2 flex-grow">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.slice(0, 2).map((tag, index) => (
          <span key={index} className={`badge badge-${tag.color}`}>
            {tag.label}
          </span>
        ))}
        {pricing && (
          <span className={`badge ${pricing.className}`}>
            {pricing.label}
          </span>
        )}
      </div>

      {/* View Details Link */}
      <div className="flex items-center justify-between text-xs text-[var(--text-dim)] mt-auto pt-3 border-t border-[var(--glass-border)]">
        <span className="text-[var(--accent-tertiary)] group-hover:text-[var(--accent-secondary)] transition-colors">
          View Details
        </span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block group w-full h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};
