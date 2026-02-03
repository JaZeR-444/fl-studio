'use client';

import React, { useState, useCallback } from 'react';
import { LeftRail, RailSection } from './LeftRail';
import { PageHeader } from './PageHeader';
import { ResearchGrid } from './ResearchGrid';

// Types
export type ViewMode = 'dashboard' | 'study';

interface PluginResearchPageProps {
    pluginId: string;
    pluginName: string;
    pluginData: any; // Data from flex.json
}

/**
 * PluginResearchPage - Full-width, dense dashboard layout for plugin research
 * 
 * Layout strategy:
 * - Full-bleed: 100vw with only 12px edge padding
 * - Left rail: Fixed-width vertical nav (48px collapsed, 180px expanded)
 * - Sticky header: 48px height
 * - Main grid: 12-column CSS grid with 8px gaps
 */
export const PluginResearchPage: React.FC<PluginResearchPageProps> = ({
    pluginId,
    pluginName,
    pluginData
}) => {
    // View mode state
    const [mode, setMode] = useState<ViewMode>('dashboard');

    // Rail state
    const [collapsed, setCollapsed] = useState(false);
    const [activeSection, setActiveSection] = useState<RailSection>('start');

    // Search state
    const [searchQuery, setSearchQuery] = useState('');

    // Calculate rail width
    const railWidth = collapsed ? 48 : 180;

    // Handlers
    const handleModeChange = useCallback((newMode: ViewMode) => {
        setMode(newMode);
    }, []);

    const handleSectionClick = useCallback((section: RailSection) => {
        setActiveSection(section);
        // In dashboard mode, clicking a section can scroll to that area
        // In study mode, clicking a section loads that content into the reader
    }, []);

    const handleToggleCollapse = useCallback(() => {
        setCollapsed(prev => !prev);
    }, []);

    const handleSearchChange = useCallback((query: string) => {
        setSearchQuery(query);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative z-10">
            {/* LEFT RAIL - Fixed vertical nav */}
            <LeftRail
                isCollapsed={collapsed}
                activeSection={activeSection}
                onSectionClick={handleSectionClick}
                onToggleCollapse={handleToggleCollapse}
            />

            {/* STICKY HEADER */}
            <PageHeader
                railWidth={railWidth}
                pluginName={pluginName}
                badges={pluginData.tags?.slice(0, 3).map((t: any) => t.label) || []}
                viewMode={mode}
                onModeChange={handleModeChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
            />

            {/* MAIN CONTENT - Full-width research grid */}
            <main
                className="pt-14 transition-all duration-300"
                style={{
                    marginLeft: `${railWidth}px`,
                    // Full-bleed: Only 12px padding on edges
                    padding: '56px 12px 24px 12px'
                }}
            >
                <ResearchGrid
                    mode={mode}
                    activeSection={activeSection}
                    pluginData={pluginData}
                    searchQuery={searchQuery}
                />
            </main>
        </div>
    );
};

export default PluginResearchPage;
