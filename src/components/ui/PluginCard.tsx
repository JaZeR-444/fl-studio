'use client';

import Link from 'next/link';
import { ExtendedPlugin } from '@/types/pluginTypes';
import { Badge } from './Badge';
import { Piano, Zap, Heart, Link2, Cpu } from 'lucide-react';
import { getCategoryColor } from '@/lib/categoryColors';

interface PluginCardProps {
  plugin: ExtendedPlugin;
  onClick?: () => void;
  showDetails?: boolean;
  isInToolkit?: boolean;
  onToggleToolkit?: (pluginId: string) => void;
}

// Helper to parse CPU usage level
const getCPULevel = (cpuUsage: string | undefined): 'low' | 'medium' | 'high' => {
  if (!cpuUsage) return 'low';
  const lower = cpuUsage.toLowerCase();
  if (lower.includes('very low') || lower.includes('extremely low') || lower.includes('low')) return 'low';
  if (lower.includes('moderate') || lower.includes('medium')) return 'medium';
  if (lower.includes('high') || lower.includes('heavy')) return 'high';
  return 'low';
};

export const PluginCard = ({
  plugin,
  onClick,
  showDetails = true,
  isInToolkit = false,
  onToggleToolkit
}: PluginCardProps) => {
  const colors = getCategoryColor(plugin.category, plugin.brandColor);
  const cpuLevel = getCPULevel(plugin.cpuUsage);

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

  const handleToolkitClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleToolkit?.(plugin.id);
  };

  // Get related plugins for display
  const relatedPlugins = plugin.workflow?.pairsWith?.slice(0, 3) || [];

  return (
    <Link
      href={`/plugins/${plugin.id}`}
      className={`tool-card block hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden border-l-4 ${colors.border} cursor-pointer`}
      onClick={onClick}
    >
      {/* Toolkit Button - Always visible with subtle styling when not active */}
      {onToggleToolkit && (
        <button
          onClick={handleToolkitClick}
          className={`absolute top-3 right-3 z-10 p-2 rounded-lg transition-all duration-200 ${isInToolkit
            ? 'bg-pink-500/30 text-pink-400 shadow-lg shadow-pink-500/20'
            : 'bg-white/5 text-gray-600 border border-white/10 hover:text-pink-400 hover:bg-pink-500/20 hover:border-pink-500/30'
            }`}
          title={isInToolkit ? 'Remove from Toolkit' : 'Add to Toolkit'}
          aria-label={isInToolkit ? 'Remove from Toolkit' : 'Add to Toolkit'}
        >
          <Heart className={`w-4 h-4 ${isInToolkit ? 'fill-current' : ''}`} />
        </button>
      )}

      {/* Header */}
      <div className="flex justify-between items-start mb-3 pr-10">
        <div className="flex items-center gap-3">
          {/* SVG Icon instead of emoji */}
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}>
            <Piano className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white max-w-[150px] truncate group-hover:text-purple-300 transition-colors">{plugin.name}</h3>
            <p className={`text-xs ${colors.text} truncate max-w-[150px]`}>{plugin.category}</p>
          </div>
        </div>
        {plugin.nativeStatus && (
          <Badge variant="premium" className="hidden sm:flex">
            Native
          </Badge>
        )}
      </div>

      {showDetails && (
        <div className="transition-all duration-300">
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

          {/* Stats Row with Visual CPU Meter */}
          <div className="flex justify-between items-center text-xs mb-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
            {/* CPU Usage with Visual Meter */}
            <div className="cpu-meter">
              <Cpu className="w-3 h-3 text-cyan-400" />
              <div className="cpu-meter-bar">
                <div className={`cpu-meter-fill ${cpuLevel}`} />
              </div>
              <span className="text-[10px] text-gray-500 uppercase">{cpuLevel}</span>
            </div>

            {/* Rating */}
            <span className="text-[var(--text-muted)] flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="font-medium text-white">{plugin.rating?.toFixed(1) || '4.5'}</span>
            </span>
          </div>

          {/* Best Used For */}
          {plugin.bestUsedFor && plugin.bestUsedFor.length > 0 && (
            <div>
              <p className="text-[10px] text-gray-500 mb-1.5 uppercase tracking-wide">Best for</p>
              <div className="flex flex-wrap gap-1">
                {plugin.bestUsedFor.slice(0, 2).map((useCase, index) => (
                  <span
                    key={index}
                    className="text-[10px] px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {useCase.length > 25 ? useCase.slice(0, 25) + '...' : useCase}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Plugins (Works With) */}
          {relatedPlugins.length > 0 && (
            <div className="mt-3 pt-3 border-t border-white/5">
              <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-1.5 uppercase tracking-wide">
                <Link2 className="w-3 h-3" />
                <span>Pairs with</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {relatedPlugins.map((pluginId, index) => (
                  <span
                    key={index}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  >
                    {pluginId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).slice(0, 15)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer - View Details */}
          <div className="mt-3 pt-3 border-t border-white/5 flex justify-end">
            <span className="text-xs text-purple-400 group-hover:text-purple-300 transition-colors">
              View Details →
            </span>
          </div>
        </div>
      )}
    </Link>
  );
};