'use client';

import Link from 'next/link';
import { ExtendedPlugin } from '@/types/pluginTypes';
import { getCategoryColor } from '@/lib/categoryColors';
import { Heart, Link2, Piano, Cpu, ChevronRight } from 'lucide-react';

interface PluginListItemProps {
    plugin: ExtendedPlugin;
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

export const PluginListItem = ({
    plugin,
    isInToolkit = false,
    onToggleToolkit
}: PluginListItemProps) => {
    const colors = getCategoryColor(plugin.category);
    const cpuLevel = getCPULevel(plugin.cpuUsage);

    const handleToolkitClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleToolkit?.(plugin.id);
    };

    // Get related plugins
    const relatedPlugins = plugin.workflow?.pairsWith?.slice(0, 2) || [];

    return (
        <Link
            href={`/plugins/${plugin.id}`}
            className={`flex items-center gap-4 p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--glass-border)] 
        hover:border-[var(--glass-border-hover)] hover:bg-[var(--bg-card-hover)] transition-all duration-200 
        group cursor-pointer border-l-4 ${colors.border}`}
        >
            {/* Plugin Icon - SVG instead of emoji */}
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center shrink-0`}>
                <Piano className="w-5 h-5 text-white" />
            </div>

            {/* Plugin Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-white truncate group-hover:text-purple-300 transition-colors">
                        {plugin.name}
                    </h4>
                    {/* Category Badge */}
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} hidden sm:inline`}>
                        {plugin.category.split(' ')[0]}
                    </span>
                </div>

                {/* Tags & Related */}
                <div className="flex flex-wrap items-center gap-2 mt-1">
                    {plugin.tags?.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-[10px] text-gray-500">
                            {tag.label}
                        </span>
                    ))}
                    {relatedPlugins.length > 0 && (
                        <span className="text-[10px] text-gray-600 hidden md:flex items-center gap-1">
                            <Link2 className="w-3 h-3" />
                            {relatedPlugins.slice(0, 1).map(id =>
                                id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).slice(0, 12)
                            ).join(', ')}
                            {relatedPlugins.length > 1 && ` +${relatedPlugins.length - 1}`}
                        </span>
                    )}
                </div>
            </div>

            {/* Stats - CPU Meter */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
                <div className="cpu-meter text-xs">
                    <Cpu className="w-3 h-3 text-cyan-400" />
                    <div className="cpu-meter-bar">
                        <div className={`cpu-meter-fill ${cpuLevel}`} />
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-xs font-medium text-white">{plugin.rating?.toFixed(1) || '4.5'}</span>
                </div>
            </div>

            {/* Toolkit Button - Always visible */}
            <button
                onClick={handleToolkitClick}
                className={`p-2 rounded-lg transition-all shrink-0 ${isInToolkit
                        ? 'bg-pink-500/30 text-pink-400'
                        : 'bg-white/5 text-gray-600 border border-white/10 hover:text-pink-400 hover:bg-pink-500/20'
                    }`}
                title={isInToolkit ? 'Remove from Toolkit' : 'Add to Toolkit'}
            >
                <Heart className={`w-4 h-4 ${isInToolkit ? 'fill-current' : ''}`} />
            </button>

            {/* Arrow */}
            <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors shrink-0" />
        </Link>
    );
};
