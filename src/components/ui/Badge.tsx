'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'purple' | 'blue' | 'cyan' | 'green' | 'orange' | 'pink' | 'red' | 'sponsored' | 'premium' | 'rating';
  className?: string;
}

export const Badge = ({ children, variant = 'purple', className = '' }: BadgeProps) => {
  const variantClasses = {
    purple: 'badge-purple',
    blue: 'badge-blue',
    cyan: 'badge-cyan',
    green: 'badge-green',
    orange: 'badge-orange',
    pink: 'badge-pink',
    red: 'badge-red',
    sponsored: 'badge-sponsored',
    premium: 'badge-premium',
    rating: 'badge-rating',
  };

  return (
    <span className={`badge ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Pricing badges for FL Studio editions
interface PricingBadgeProps {
  edition: 'free' | 'fruity' | 'producer' | 'signature' | 'all-plugins';
  className?: string;
}

export const PricingBadge = ({ edition, className = '' }: PricingBadgeProps) => {
  const editions = {
    free: { label: 'Built-in', variant: 'green' as const },
    fruity: { label: 'Fruity+', variant: 'cyan' as const },
    producer: { label: 'Producer+', variant: 'blue' as const },
    signature: { label: 'Signature+', variant: 'orange' as const },
    'all-plugins': { label: 'All Plugins', variant: 'purple' as const },
  };

  const { label, variant } = editions[edition];

  return (
    <Badge variant={variant} className={className}>
      {label}
    </Badge>
  );
};

// Rating badge with star
interface RatingBadgeProps {
  rating: number;
  className?: string;
}

export const RatingBadge = ({ rating, className = '' }: RatingBadgeProps) => {
  return (
    <Badge variant="rating" className={className}>
      <span className="text-yellow-400">★</span>
      <span>{rating.toFixed(1)}</span>
    </Badge>
  );
};
