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
      className={`glass-card ${hover ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export const StatCard = ({ value, label, icon, className = '' }: StatCardProps) => {
  return (
    <div className={`stat-card ${className}`}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
            {icon}
          </div>
        )}
        <div>
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-sm text-[var(--text-muted)]">{label}</p>
        </div>
      </div>
    </div>
  );
};

interface SectionCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  badge?: string;
}

export const SectionCard = ({
  title,
  description,
  icon,
  children,
  className = '',
  badge
}: SectionCardProps) => {
  return (
    <div className={`content-card ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            {description && (
              <p className="text-sm text-[var(--text-muted)]">{description}</p>
            )}
          </div>
        </div>
        {badge && (
          <span className="badge badge-premium">{badge}</span>
        )}
      </div>
      {children}
    </div>
  );
};
