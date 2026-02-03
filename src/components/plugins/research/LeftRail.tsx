'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Home,
    BookOpen,
    Folder,
    Database,
    FileText,
    List,
    StickyNote,
    Settings,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Export RailSection type for other components
export type RailSection = 'start' | 'learning' | 'workflows' | 'data' | 'reference' | 'index' | 'notes';

interface RailSectionItem {
    id: RailSection;
    icon: React.ElementType;
    label: string;
    href?: string;
}

interface LeftRailProps {
    activeSection: RailSection;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
    onSectionClick: (sectionId: RailSection) => void;
}

const railSections: RailSectionItem[] = [
    { id: 'start', icon: Home, label: 'Start Here' },
    { id: 'learning', icon: BookOpen, label: 'Learning' },
    { id: 'workflows', icon: Folder, label: 'Workflows' },
    { id: 'data', icon: Database, label: 'Data' },
    { id: 'reference', icon: FileText, label: 'Reference' },
    { id: 'index', icon: List, label: 'Index' },
    { id: 'notes', icon: StickyNote, label: 'Notes' },
];

export const LeftRail: React.FC<LeftRailProps> = ({
    activeSection,
    isCollapsed,
    onToggleCollapse,
    onSectionClick,
}) => {
    return (
        <aside
            className={`
                fixed left-0 top-0 bottom-0 z-50
                bg-slate-950/95 border-r border-slate-800/50 backdrop-blur-sm
                flex flex-col items-center py-3
                transition-all duration-300
                ${isCollapsed ? 'w-12' : 'w-48'}
            `}
        >
            {/* Logo / Home */}
            <Link
                href="/hub"
                className="w-9 h-9 rounded-lg overflow-hidden mb-4 hover:scale-105 transition-transform border border-purple-500/30 flex-shrink-0"
                title="Back to Hub"
            >
                <Image
                    src={`${basePath}/images/branding/icon.svg`}
                    alt="FL Studio Hub"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                />
            </Link>

            {/* Navigation Sections */}
            <nav className="flex-1 flex flex-col items-center gap-0.5 w-full px-1.5">
                {railSections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;

                    return (
                        <button
                            key={section.id}
                            onClick={() => onSectionClick(section.id)}
                            className={`
                                w-full rounded-lg flex items-center gap-2 transition-all group relative
                                ${isCollapsed ? 'justify-center px-0 py-2' : 'justify-start px-3 py-2'}
                                ${isActive
                                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                    : 'text-slate-500 hover:text-white hover:bg-slate-800/50 border border-transparent'
                                }
                            `}
                            title={isCollapsed ? section.label : undefined}
                        >
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            {!isCollapsed && (
                                <span className="text-xs font-medium truncate">{section.label}</span>
                            )}

                            {/* Tooltip for collapsed state */}
                            {isCollapsed && (
                                <span className="absolute left-12 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700 z-50">
                                    {section.label}
                                </span>
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="flex flex-col items-center gap-1 w-full px-1.5">
                <button
                    onClick={onToggleCollapse}
                    className="w-full rounded-lg px-2 py-2 text-slate-500 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center justify-center"
                    title={isCollapsed ? 'Expand rail' : 'Collapse rail'}
                >
                    {isCollapsed ? (
                        <ChevronRight className="w-4 h-4" />
                    ) : (
                        <ChevronLeft className="w-4 h-4" />
                    )}
                </button>
                <button className="w-full rounded-lg px-2 py-2 text-slate-500 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center justify-center">
                    <Settings className="w-4 h-4" />
                </button>
            </div>
        </aside>
    );
};

export default LeftRail;
