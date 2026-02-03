'use client';

import React, { useState } from 'react';
import { CardWrapper } from './MarkdownCard';

interface Workflow {
    instrument?: string;
    genre?: string;
    pack?: string;
    bpm?: string;
    character?: string;
    quickSetup?: any;
    macros?: Record<string, string>;
    fxChain?: Record<string, string>;
    commonMistakes?: string[];
    tips?: string[];
}

interface WorkflowTabsCardProps {
    title: string;
    icon?: string;
    workflows: Workflow[];
    variant?: 'goal' | 'instrument';
    compact?: boolean;
}

export const WorkflowTabsCard: React.FC<WorkflowTabsCardProps> = ({
    title,
    icon,
    workflows,
    variant = 'instrument',
    compact = false
}) => {
    const [activeTab, setActiveTab] = useState(0);
    const workflow = workflows[activeTab];

    if (workflows.length === 0) {
        return (
            <CardWrapper title={title} icon={icon} compact={compact}>
                <p className="text-xs text-gray-500 text-center py-4">No workflows available</p>
            </CardWrapper>
        );
    }

    const getTabLabel = (w: Workflow) =>
        variant === 'goal' ? w.genre || 'Unknown' : w.instrument || 'Unknown';

    return (
        <CardWrapper
            title={title}
            icon={icon}
            maxHeight={compact ? '180px' : '320px'}
            compact={compact}
        >
            {/* Tab Navigation */}
            <div className="flex gap-1 mb-2 overflow-x-auto pb-1 shrink-0">
                {workflows.slice(0, 6).map((w, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`
                            shrink-0 px-2 py-1 rounded text-[10px] font-medium transition-all
                            ${activeTab === idx
                                ? 'bg-cyan-500 text-white'
                                : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
                            }
                        `}
                    >
                        {getTabLabel(w)}
                    </button>
                ))}
            </div>

            {/* Workflow Content */}
            <div className="space-y-2">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{getTabLabel(workflow)}</span>
                    {(workflow.bpm || workflow.pack) && (
                        <span className="text-[9px] text-purple-400 bg-purple-500/20 px-1.5 py-0.5 rounded">
                            {workflow.bpm ? `${workflow.bpm} BPM` : workflow.pack}
                        </span>
                    )}
                </div>

                {workflow.character && (
                    <p className="text-[10px] text-gray-400 italic">"{workflow.character}"</p>
                )}

                {/* Macros / QuickSetup */}
                {(workflow.macros || workflow.quickSetup?.macros) && (
                    <div className="p-1.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                        <div className="text-[9px] font-bold text-cyan-400 uppercase mb-1">Macros</div>
                        <div className="space-y-0.5">
                            {Object.entries(workflow.macros || workflow.quickSetup?.macros || {}).slice(0, 4).map(([key, val]) => (
                                <div key={key} className="flex justify-between text-[10px]">
                                    <span className="text-gray-400">{key}</span>
                                    <span className="text-white font-mono">{val as string}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* FX Chain */}
                {workflow.fxChain && (
                    <div className="p-1.5 rounded bg-purple-500/10 border border-purple-500/20">
                        <div className="text-[9px] font-bold text-purple-400 uppercase mb-1">FX Chain</div>
                        <div className="space-y-0.5">
                            {Object.entries(workflow.fxChain).slice(0, 3).map(([key, val]) => (
                                <div key={key} className="flex justify-between text-[10px]">
                                    <span className="text-gray-400">{key}</span>
                                    <span className="text-white font-mono text-[9px]">{val as string}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tips */}
                {(workflow.tips || workflow.commonMistakes) && !compact && (
                    <div className="space-y-0.5">
                        {(workflow.tips || []).slice(0, 2).map((tip, i) => (
                            <div key={i} className="flex gap-1.5 text-[10px]">
                                <span className="text-green-400">✓</span>
                                <span className="text-gray-300">{tip}</span>
                            </div>
                        ))}
                        {(workflow.commonMistakes || []).slice(0, 2).map((mistake, i) => (
                            <div key={i} className="flex gap-1.5 text-[10px]">
                                <span className="text-red-400">✗</span>
                                <span className="text-gray-300">{mistake}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </CardWrapper>
    );
};

export default WorkflowTabsCard;
