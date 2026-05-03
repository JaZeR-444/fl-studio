'use client';

import Link from 'next/link';
import { Star, Sparkles, Piano } from 'lucide-react';
import { ExtendedPlugin } from '@/types/pluginTypes';
import { getCategoryColor } from '@/lib/categoryColors';
import { Badge } from './Badge';

// Featured plugin IDs - curated selection of the best/most essential plugins
const FEATURED_PLUGIN_IDS = [
    'flex',
    'sytrus',
    'harmor',
    'fruity-parametric-eq-2',
    'maximus'
];

interface FeaturedPluginsProps {
    plugins: ExtendedPlugin[];
}

export const FeaturedPlugins = ({ plugins }: FeaturedPluginsProps) => {
    // Filter to only featured plugins in the specified order
    const featuredPlugins = FEATURED_PLUGIN_IDS
        .map(id => plugins.find(p => p.id === id))
        .filter((p): p is ExtendedPlugin => p !== undefined);

    if (featuredPlugins.length === 0) return null;

    return (
        <section className="mb-10 relative">
            {/* Ambient Glow Background */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Featured Plugins</h3>
                </div>
                <Badge variant="premium">Editor&apos;s Pick</Badge>
            </div>

            {/* Featured Cards - Horizontal scroll on mobile, grid on desktop */}
            <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-5 md:overflow-visible scrollbar-hide">
                {featuredPlugins.map((plugin) => {
                    const colors = getCategoryColor(plugin.category);

                    return (
                        <Link
                            key={plugin.id}
                            href={`/plugins/${plugin.id}`}
                            className={`featured-glow group relative flex-shrink-0 w-[180px] md:w-auto rounded-2xl border-2 p-4 
                transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer
                bg-gradient-to-br from-white/5 to-white/[0.02]
                ${colors.border} hover:border-yellow-500/40`}
                        >
                            {/* Featured Star Badge */}
                            <div className="absolute -top-2 -right-2 z-10">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                                    <Star className="w-3.5 h-3.5 text-white fill-white" />
                                </div>
                            </div>

                            {/* Plugin Icon & Category Color - Using SVG instead of emoji */}
                            <div className="flex items-start gap-3 mb-3">
                                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                    <Piano className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            {/* Plugin Name */}
                            <h4 className="font-bold text-white text-sm mb-1 group-hover:text-yellow-300 transition-colors truncate">
                                {plugin.name}
                            </h4>

                            {/* Category */}
                            <p className={`text-xs ${colors.text} mb-2 truncate uppercase tracking-wide`}>
                                {plugin.category.split(' ').slice(0, 2).join(' ')}
                            </p>

                            {/* Quick Description */}
                            <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                                {plugin.bestUsedFor?.[0]?.slice(0, 40) || plugin.description?.slice(0, 40)}...
                            </p>

                            {/* Rating */}
                            <div className="mt-3 pt-2 border-t border-white/10 flex items-center gap-1">
                                <span className="text-yellow-400 text-xs">★</span>
                                <span className="text-xs font-medium text-white">{plugin.rating?.toFixed(1) || '4.5'}</span>
                                <span className="text-xs text-gray-500 ml-1">rating</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};
