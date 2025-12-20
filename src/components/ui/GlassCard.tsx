import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard = ({
  children,
  className = '',
  hover = true,
  onClick
}: GlassCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`content-card ${hover ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
  className?: string;
}

export const StatCard = ({ value, label, icon, className = '' }: StatCardProps) => {
  return (
    <div className={`stat-card ${className}`}>
      <div className="flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <div>
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-sm text-purple-primary-300">{label}</p>
        </div>
      </div>
    </div>
  );
};
