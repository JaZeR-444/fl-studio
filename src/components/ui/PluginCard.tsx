'use client';

import Link from 'next/link';
// src/components/ui/PluginCard.tsx
import { ExtendedPlugin } from '@/types/pluginTypes';
import { Badge } from './Badge';

interface PluginCardProps {
  plugin: ExtendedPlugin;
  onClick?: () => void;
  showDetails?: boolean;
}

export const PluginCard = ({ plugin, onClick, showDetails = true }: PluginCardProps) => {
  // Determine category color based on family
  const getCategoryColor = (family: string): 'purple' | 'blue' | 'cyan' | 'green' | 'orange' | 'pink' => {
    // Simple heuristic for category colors
    if (family?.includes('Synth')) return 'purple';
    if (family?.includes('Effect')) return 'cyan';
    if (family?.includes('Dynamics')) return 'orange';
    if (family?.includes('Delay') || family?.includes('Reverb')) return 'blue';
    return 'green';
  };

  const getPricingBadge = () => {
    switch (plugin.pricingBadge) {
      case 'fruity': return { label: 'Fruity', variant: 'pink' };
      case 'producer': return { label: 'Producer', variant: 'blue' };
      case 'signature': return { label: 'Signature', variant: 'orange' };
      case 'all-plugins': return { label: 'All Plugins', variant: 'purple' };
      default: return null;
    }
  };

  const pricing = getPricingBadge();

  return (
    <Link
      href={`/plugins/${plugin.id}`}
      className="tool-card block hover:scale-[1.02] transition-transform duration-300"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-lg">
            {plugin.icon || '🎹'}
          </div>
          <div>
            <h3 className="font-bold text-white max-w-[150px] truncate">{plugin.name}</h3>
            <p className="text-xs text-[var(--text-dim)] truncate max-w-[150px]">{plugin.category}</p>
          </div>
        </div>
        {plugin.nativeStatus && (
          <Badge variant="premium">
            Native
          </Badge>
        )}
      </div>
      
      {showDetails && (
        <>
          {/* Edition Badges */}
          <div className="flex flex-wrap gap-1 mb-3">
            {pricing && (
              <Badge variant={pricing.variant as any}>
                {pricing.label}
              </Badge>
            )}
             {plugin.tags?.slice(0, 2).map((tag, index) => (
              <Badge
                key={index}
                variant={tag.color}
              >
                {tag.label}
              </Badge>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex justify-between text-xs mb-3 p-2 rounded-lg bg-[var(--glass-bg)]">
            <span className="text-[var(--text-muted)]">
              <span className="text-[var(--accent-tertiary)]">⚡</span> {plugin.cpuUsage || 'Unknown'} CPU
            </span>
            <span className="text-[var(--text-muted)]">
               <span className="text-yellow-400">★</span> {plugin.rating?.toFixed(1) || 4.5}
            </span>
          </div>

          {/* Best Used For */}
          {plugin.bestUsedFor && plugin.bestUsedFor.length > 0 && (
            <div>
              <p className="text-xs text-[var(--text-dim)] mb-2">Best used for:</p>
              <div className="flex flex-wrap gap-1">
                {plugin.bestUsedFor.slice(0, 3).map((useCase, index) => (
                  <Badge
                    key={index}
                    variant="blue"
                  >
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Footer Stats */}
          <div className="tool-stats mt-3 pt-3 border-t border-[var(--glass-border)]">
            <div className="tool-stats-item">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>View</span>
            </div>
            <div className="tool-stats-item ml-auto text-[var(--accent-secondary)] text-xs cursor-pointer hover:underline">
              View Details →
            </div>
          </div>
        </>
      )}
    </Link>
  );
};