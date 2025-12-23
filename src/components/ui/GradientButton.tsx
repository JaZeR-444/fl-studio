'use client';

import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'glass' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const GradientButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
}: GradientButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    glass: 'btn-glass',
    gradient: 'btn-gradient',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// Icon Button variant
interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const IconButton = ({
  icon,
  onClick,
  variant = 'glass',
  size = 'md',
  className = '',
  label,
}: IconButtonProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const variantClasses = {
    primary: 'bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-secondary)]',
    glass: 'bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-muted)] hover:text-white hover:border-[var(--glass-border-hover)]',
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-lg flex items-center justify-center transition-all
        ${className}
      `}
      aria-label={label}
    >
      {icon}
    </button>
  );
};
