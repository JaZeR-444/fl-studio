'use client';

import React, { useState } from 'react';
import { Pin, PinOff, ChevronRight } from 'lucide-react';

interface OutlineCardProps {
    title: string;
    headings: string[];
    onJumpTo?: (id: string) => void;
    sticky?: boolean;
}

export const OutlineCard: React.FC<OutlineCardProps> = ({
    title,
    headings,
    onJumpTo,
    sticky = false
}) => {
    const [pinnedHeadings, setPinnedHeadings] = useState<Set<string>>(new Set());

    const togglePin = (heading: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setPinnedHeadings(prev => {
            const next = new Set(prev);
            if (prev.has(heading)) {
                next.delete(heading);
            } else {
                next.add(heading);
            }
            return next;
        });
    };

    const handleClick = (heading: string) => {
        const id = heading.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        onJumpTo?.(id);
    };

    // Show pinned items first
    const sortedHeadings = [
        ...headings.filter(h => pinnedHeadings.has(h)),
        ...headings.filter(h => !pinnedHeadings.has(h))
    ];

    return (
        <div
            className={`
                rounded-lg border border-slate-700/60 bg-slate-900/80 backdrop-blur-sm p-3
                ${sticky ? 'sticky top-14' : ''}
            `}
            style={sticky ? { maxHeight: 'calc(100vh - 80px)' } : undefined}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white text-sm flex items-center gap-1.5">
                    📑 {title}
                </h3>
                <span className="text-[10px] text-gray-500">{headings.length} sections</span>
            </div>

            {/* Outline List */}
            <div className="space-y-1 overflow-y-auto" style={{ maxHeight: '400px' }}>
                {sortedHeadings.map((heading, idx) => {
                    const isPinned = pinnedHeadings.has(heading);
                    return (
                        <div
                            key={idx}
                            className={`
                                group flex items-center gap-2 p-1.5 rounded-md cursor-pointer
                                ${isPinned
                                    ? 'bg-cyan-500/10 border border-cyan-500/20'
                                    : 'hover:bg-slate-800 border border-transparent'
                                }
                                transition-all
                            `}
                            onClick={() => handleClick(heading)}
                        >
                            <ChevronRight className="w-3 h-3 text-gray-500 shrink-0" />
                            <span className={`text-xs flex-1 truncate ${isPinned ? 'text-cyan-300' : 'text-gray-300'}`}>
                                {heading}
                            </span>
                            <button
                                onClick={(e) => togglePin(heading, e)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                {isPinned ? (
                                    <PinOff className="w-3 h-3 text-cyan-400" />
                                ) : (
                                    <Pin className="w-3 h-3 text-gray-500 hover:text-cyan-400" />
                                )}
                            </button>
                        </div>
                    );
                })}

                {headings.length === 0 && (
                    <p className="text-xs text-gray-500 text-center py-4">No sections available</p>
                )}
            </div>
        </div>
    );
};

export default OutlineCard;
