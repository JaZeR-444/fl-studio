'use client';

import { LayoutGrid, List } from 'lucide-react';
import { ViewMode } from '@/hooks/useToolkit';

interface ViewToggleProps {
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
}

export const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
    return (
        <div className="flex items-center gap-1 p-1 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
            <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${viewMode === 'grid'
                        ? 'bg-purple-600/30 text-purple-400 shadow-sm'
                        : 'text-gray-500 hover:text-white hover:bg-white/5'
                    }`}
                title="Grid View"
                aria-label="Switch to grid view"
                aria-pressed={viewMode === 'grid'}
            >
                <LayoutGrid className="w-4 h-4" />
            </button>
            <button
                onClick={() => onViewModeChange('list')}
                className={`p-2 rounded-md transition-all duration-200 ${viewMode === 'list'
                        ? 'bg-purple-600/30 text-purple-400 shadow-sm'
                        : 'text-gray-500 hover:text-white hover:bg-white/5'
                    }`}
                title="List View"
                aria-label="Switch to list view"
                aria-pressed={viewMode === 'list'}
            >
                <List className="w-4 h-4" />
            </button>
        </div>
    );
};
