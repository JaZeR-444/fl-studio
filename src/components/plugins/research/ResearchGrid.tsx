'use client';

import React from 'react';
import { RailSection } from './LeftRail';
import { ViewMode } from './PluginResearchPage';

// Card imports (to be created)
import { MarkdownCard } from './cards/MarkdownCard';
import { RecipesCard } from './cards/RecipesCard';
import { TableCard } from './cards/TableCard';
import { RulesAccordionCard } from './cards/RulesAccordionCard';
import { WorkflowTabsCard } from './cards/WorkflowTabsCard';
import { OutlineCard } from './cards/OutlineCard';
import { QuickLinksCard } from './cards/QuickLinksCard';

interface ResearchGridProps {
    mode: ViewMode;
    activeSection: RailSection;
    pluginData: any;
    searchQuery: string;
}

/**
 * ResearchGrid - 12-column CSS grid layout for plugin research content
 * 
 * Dashboard Mode Grid (matching wireframe):
 * Row 1: Start Here (6 cols) | Quick Links (2) | Visual (2) | Recipes (4)
 * Row 2: (continued)         |                 |            | Templates (4)
 * Row 3: Params (2) | Cheat (2) | Trouble (2) | Workflows (3) | Engine (3)
 * 
 * Study Mode Grid:
 * Row 1-2: Master Reader (6) | Outline (6) sticky
 * Row 3: Workflows by Goal (6) | Workflows by Instrument (6)
 * Row 4: Params (2) | Envelopes (2) | Spatial (2) | Limiter (2) | Trouble (2) | Engine (2)
 */
export const ResearchGrid: React.FC<ResearchGridProps> = ({
    mode,
    activeSection,
    pluginData,
    searchQuery
}) => {
    if (mode === 'dashboard') {
        return <DashboardGrid pluginData={pluginData} searchQuery={searchQuery} />;
    }

    return <StudyGrid pluginData={pluginData} activeSection={activeSection} searchQuery={searchQuery} />;
};

// ==================== DASHBOARD MODE GRID ====================

const DashboardGrid: React.FC<{ pluginData: any; searchQuery: string }> = ({ pluginData, searchQuery }) => {
    return (
        <div className="grid grid-cols-12 gap-2 w-full">
            {/* Row 1-2: Start Here (6 cols, 2 rows) */}
            <div className="col-span-12 lg:col-span-6 row-span-2">
                <MarkdownCard
                    title="Start Here"
                    icon="🚀"
                    content={generateStartHereContent(pluginData)}
                    maxHeight="360px"
                />
            </div>

            {/* Row 1: Quick Links (2 cols) */}
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <QuickLinksCard
                    links={[
                        { label: 'Official Docs', href: pluginData.officialManual, icon: '📖' },
                        { label: 'Parameter Ref', href: '#params', icon: '📊' },
                        { label: 'Troubleshooting', href: '#trouble', icon: '🔧' },
                    ]}
                />
            </div>

            {/* Row 1: Visual Overview (2 cols) */}
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <MarkdownCard
                    title="Interface"
                    icon="🎛️"
                    content={generateInterfaceOverview()}
                    maxHeight="150px"
                    compact
                />
            </div>

            {/* Row 1-2: Recipes (4 cols, 2 rows) */}
            <div className="col-span-12 lg:col-span-4 row-span-2">
                <RecipesCard
                    title="Recipes & Templates"
                    recipes={formatRecipes(pluginData)}
                    onCopy={(recipe) => navigator.clipboard.writeText(recipe)}
                />
            </div>

            {/* Row 3: Parameters Table (2 cols) */}
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                <TableCard
                    title="Parameters"
                    icon="📊"
                    headers={['Param', 'Range', 'Default']}
                    rows={formatParameterRows(pluginData)}
                    searchQuery={searchQuery}
                    compact
                />
            </div>

            {/* Row 3: Cheat Sheet (2 cols) */}
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                <MarkdownCard
                    title="Cheat Sheet"
                    icon="📋"
                    content={generateCheatSheet(pluginData)}
                    maxHeight="180px"
                    compact
                />
            </div>

            {/* Row 3: Troubleshooting (2 cols) */}
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                <RulesAccordionCard
                    title="Troubleshooting"
                    icon="🔧"
                    rules={formatTroubleshootingRules(pluginData)}
                    compact
                />
            </div>

            {/* Row 3: Workflows (3 cols) */}
            <div className="col-span-6 lg:col-span-3">
                <WorkflowTabsCard
                    title="Workflows"
                    icon="⚡"
                    workflows={pluginData.instrumentWorkflows || []}
                    compact
                />
            </div>

            {/* Row 3: Engine Reference (3 cols) */}
            <div className="col-span-6 lg:col-span-3">
                <MarkdownCard
                    title="Synthesis Engine"
                    icon="🔊"
                    content={generateEngineReference(pluginData)}
                    maxHeight="180px"
                    compact
                />
            </div>
        </div>
    );
};

// ==================== STUDY MODE GRID ====================

const StudyGrid: React.FC<{ pluginData: any; activeSection: RailSection; searchQuery: string }> = ({
    pluginData,
    activeSection,
    searchQuery
}) => {
    // Get content based on active section
    const readerContent = getReaderContent(pluginData, activeSection);

    return (
        <div className="grid grid-cols-12 gap-2 w-full">
            {/* Row 1-2: Master Reader (6 cols) */}
            <div className="col-span-12 lg:col-span-6 row-span-2">
                <MarkdownCard
                    title={readerContent.title}
                    icon="📖"
                    content={readerContent.content}
                    maxHeight="500px"
                />
            </div>

            {/* Row 1-2: Document Outline (6 cols) - Sticky */}
            <div className="col-span-12 lg:col-span-6 row-span-2">
                <OutlineCard
                    title="Document Outline"
                    headings={readerContent.headings}
                    onJumpTo={(id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    sticky
                />
            </div>

            {/* Row 3: Workflows by Goal (6 cols) */}
            <div className="col-span-12 lg:col-span-6">
                <WorkflowTabsCard
                    title="Workflows by Goal"
                    icon="🎯"
                    workflows={pluginData.genreTemplates || []}
                    variant="goal"
                />
            </div>

            {/* Row 3: Workflows by Instrument (6 cols) */}
            <div className="col-span-12 lg:col-span-6">
                <WorkflowTabsCard
                    title="Workflows by Instrument"
                    icon="🎹"
                    workflows={pluginData.instrumentWorkflows || []}
                    variant="instrument"
                />
            </div>

            {/* Row 4: 6 utility cards (2 cols each) */}
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                <TableCard
                    title="Parameters"
                    icon="📊"
                    headers={['Param', 'Range', 'Default']}
                    rows={formatParameterRows(pluginData)}
                    searchQuery={searchQuery}
                />
            </div>

            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                <RecipesCard
                    title="Envelopes"
                    recipes={formatEnvelopeRecipes(pluginData)}
                    variant="compact"
                    onCopy={(recipe) => navigator.clipboard.writeText(recipe)}
                />
            </div>

            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                <RecipesCard
                    title="Spatial"
                    recipes={formatSpatialRecipes(pluginData)}
                    variant="compact"
                    onCopy={(recipe) => navigator.clipboard.writeText(recipe)}
                />
            </div>

            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                <RecipesCard
                    title="Limiter"
                    recipes={formatLimiterRecipes(pluginData)}
                    variant="compact"
                    onCopy={(recipe) => navigator.clipboard.writeText(recipe)}
                />
            </div>

            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                <RulesAccordionCard
                    title="Troubleshooting"
                    icon="🔧"
                    rules={formatTroubleshootingRules(pluginData)}
                />
            </div>

            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                <MarkdownCard
                    title="Engine"
                    icon="🔊"
                    content={generateEngineReference(pluginData)}
                    maxHeight="200px"
                    compact
                />
            </div>
        </div>
    );
};

// ==================== DATA FORMATTING HELPERS ====================

function generateStartHereContent(data: any): string {
    const tips = data.proTips?.slice(0, 5) || [];
    const bestFor = data.bestUsedFor?.slice(0, 4) || [];

    return `## FLEX Quick Start

${data.description || 'A powerful hybrid synthesizer.'}

### Quick Overview
- **Hybrid preset-based synthesizer**
- **Subtractive, FM, Wavetable engines**
- **Production-ready sounds with macro control**

### First Steps
1. Load a preset from the browser
2. Use Macro 1 to shape brightness
3. Adjust attack/decay for genre
4. Add subtle reverb for space

${tips.length > 0 ? `### Pro Tips\n${tips.map((t: string) => `- ${t}`).join('\n')}` : ''}`;
}

function generateInterfaceOverview(): string {
    return `**Layout:**
\`\`\`
┌──────────────┐
│  ANALYSIS    │
├──────────────┤
│ MACROS │ ENV │
├──────────────┤
│  MASTER FX   │
└──────────────┘
\`\`\``;
}

function generateCheatSheet(data: any): string {
    const shortcuts = [
        '`Alt+Click` - Reset macro',
        '`Right-Click` - Automation',
        '`Lock icon` - Keep setting',
    ];

    return `### Shortcuts
${shortcuts.join('\n')}

### Key Settings
- **Bass**: Width 0% (mono!)
- **Pads**: Attack 500ms+
- **Leads**: HP @ 180Hz`;
}

function generateEngineReference(data: any): string {
    const engines = data.synthesisEngines || [];
    if (engines.length === 0) return 'No engine data available.';

    return engines.map((e: any) => `**${e.icon} ${e.name}**\n${e.description}`).join('\n\n');
}

function formatRecipes(data: any): any[] {
    const recipes: any[] = [];

    // Add macro archetypes
    data.macroSystem?.commonArchetypes?.slice(0, 4).forEach((arch: any) => {
        recipes.push({
            name: arch.commonFunction,
            description: `Macro ${arch.macro}: ${arch.examples}`,
            copyText: `Macro ${arch.macro}: ${arch.commonFunction} - ${arch.examples}`
        });
    });

    // Add genre templates
    data.genreTemplates?.slice(0, 4).forEach((t: any) => {
        recipes.push({
            name: t.genre,
            description: `${t.bpm} BPM - ${t.character}`,
            copyText: JSON.stringify(t, null, 2),
            badge: t.bpm
        });
    });

    return recipes;
}

function formatParameterRows(data: any): string[][] {
    const controls = data.controls || [];
    return controls.slice(0, 8).map((c: any) => [
        c.label,
        c.description?.slice(0, 30) + '...' || '-',
        '-'
    ]);
}

function formatTroubleshootingRules(data: any): any[] {
    const filters = data.filterCurves || [];
    return filters.slice(0, 5).map((f: any) => ({
        title: f.name,
        description: f.description,
        solution: f.tips?.join(' ') || 'See documentation.'
    }));
}

function formatEnvelopeRecipes(data: any): any[] {
    return (data.envelopeShapes || []).slice(0, 4).map((e: any) => ({
        name: e.name,
        description: e.soundCharacter,
        copyText: JSON.stringify(e.settings, null, 2),
        badge: e.visualAscii
    }));
}

function formatSpatialRecipes(data: any): any[] {
    return (data.spatialPresets || []).slice(0, 4).map((s: any) => ({
        name: s.name,
        description: s.description,
        copyText: JSON.stringify(s.reverbSettings || s.delaySettings, null, 2)
    }));
}

function formatLimiterRecipes(data: any): any[] {
    return (data.limiterDynamics || []).slice(0, 4).map((l: any) => ({
        name: l.name,
        description: l.sonicCharacter,
        copyText: JSON.stringify(l.settings, null, 2)
    }));
}

function getReaderContent(data: any, section: RailSection): { title: string; content: string; headings: string[] } {
    // Return content based on which section is active
    const sectionContent: Record<RailSection, { title: string; content: string }> = {
        start: { title: 'FLEX Master Index', content: generateStartHereContent(data) },
        learning: { title: 'Learning Paths', content: `## Learning FLEX\n\n${data.description}` },
        workflows: { title: 'Workflows', content: '## Workflows\n\nOrganized by goal and instrument.' },
        data: { title: 'Data Reference', content: '## Parameters & Presets' },
        reference: { title: 'Technical Reference', content: generateEngineReference(data) },
        index: { title: 'Master Index', content: '## Complete Index' },
        notes: { title: 'Your Notes', content: '## Personal Notes\n\nAdd your notes here.' },
    };

    const content = sectionContent[section] || sectionContent.start;
    const headings = content.content.match(/^##?\s+.+$/gm)?.map(h => h.replace(/^#+\s*/, '')) || [];

    return { ...content, headings };
}

export default ResearchGrid;
