'use client';

import React from 'react';
import { Search, LayoutDashboard, BookOpen, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

type ViewMode = 'dashboard' | 'study';

interface PageHeaderProps {
    pluginName: string;
    pluginIcon?: string;
    badges?: string[];
    breadcrumbs?: { label: string; href?: string }[];
    viewMode: ViewMode;
    onModeChange: (mode: ViewMode) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    railWidth: number;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    pluginName,
    badges = [],
    breadcrumbs = [],
    viewMode,
    onModeChange,
    searchQuery,
    onSearchChange,
    railWidth,
}) => {
    return (
        <header
            className="fixed top-0 right-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50"
            style={{ left: `${railWidth}px` }}
        >
            <div className="flex items-center justify-between h-12 px-3">
                {/* Left: Plugin Title + Breadcrumbs */}
                <div className="flex items-center gap-3 min-w-0">
                    {/* Breadcrumbs */}
                    <nav className="hidden sm:flex items-center gap-1 text-xs text-slate-500">
                        {breadcrumbs.map((crumb, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <ChevronRight className="w-3 h-3" />}
                                {crumb.href ? (
                                    <a href={crumb.href} className="hover:text-white transition-colors">
                                        {crumb.label}
                                    </a>
                                ) : (
                                    <span className="text-slate-400">{crumb.label}</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>

                    {/* Plugin Name */}
                    <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 truncate">
                        {pluginName}
                    </h1>

                    {/* Badges */}
                    <div className="hidden md:flex items-center gap-1">
                        {badges.slice(0, 3).map((badge) => (
                            <Badge key={badge} variant="purple" className="text-[10px] px-1.5 py-0.5">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Center: Mode Toggle */}
                <div className="flex items-center p-0.5 rounded-lg border border-slate-700/50 bg-slate-800/50">
                    <button
                        onClick={() => onModeChange('dashboard')}
                        className={`
                            flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all
                            ${viewMode === 'dashboard'
                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                                : 'text-slate-400 hover:text-white'
                            }
                        `}
                    >
                        <LayoutDashboard className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Dashboard</span>
                    </button>
                    <button
                        onClick={() => onModeChange('study')}
                        className={`
                            flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all
                            ${viewMode === 'study'
                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                                : 'text-slate-400 hover:text-white'
                            }
                        `}
                    >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Study</span>
                    </button>
                </div>

                {/* Right: Search */}
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Search plugin..."
                            className="w-32 sm:w-44 pl-8 pr-3 py-1.5 text-xs bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                        <kbd className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 px-1 py-0.5 text-[9px] text-slate-500 bg-slate-700/50 rounded">
                            ⌘K
                        </kbd>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PageHeader;
