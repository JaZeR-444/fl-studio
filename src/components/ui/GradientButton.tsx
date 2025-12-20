import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'gradient' | 'glass';
  className?: string;
  disabled?: boolean;
}

export const GradientButton = ({
  children,
  onClick,
  variant = 'gradient',
  className = '',
  disabled = false
}: GradientButtonProps) => {
  const baseClass = variant === 'gradient' ? 'btn-gradient' : 'btn-glass';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};
