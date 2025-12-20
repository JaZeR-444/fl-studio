interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'blue' | 'premium' | 'paid' | 'free';
  className?: string;
}

export const Badge = ({ children, variant = 'purple', className = '' }: BadgeProps) => {
  const variantStyles = {
    purple: 'badge-purple',
    blue: 'badge-blue',
    premium: 'badge-premium',
    paid: 'bg-blue-accent-600/20 border border-blue-accent-500/30 text-blue-accent-300',
    free: 'bg-purple-primary-700/20 border border-purple-primary-600/30 text-purple-primary-300',
  };

  return (
    <span className={`badge ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
