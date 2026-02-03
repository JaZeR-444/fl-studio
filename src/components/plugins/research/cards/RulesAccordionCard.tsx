'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, AlertCircle, CheckCircle } from 'lucide-react';
import { CardWrapper } from './MarkdownCard';

interface Rule {
    title: string;
    description: string;
    solution: string;
}

interface RulesAccordionCardProps {
    title: string;
    icon?: string;
    rules: Rule[];
    compact?: boolean;
}

export const RulesAccordionCard: React.FC<RulesAccordionCardProps> = ({
    title,
    icon,
    rules,
    compact = false
}) => {
    const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

    const toggleExpand = (idx: number) => {
        setExpandedIdx(prev => prev === idx ? null : idx);
    };

    return (
        <CardWrapper
            title={title}
            icon={icon}
            maxHeight={compact ? '180px' : '300px'}
            compact={compact}
        >
            <div className="space-y-1">
                {rules.map((rule, idx) => (
                    <div
                        key={idx}
                        className={`
                            rounded-md border
                            ${expandedIdx === idx
                                ? 'border-cyan-500/40 bg-cyan-500/5'
                                : 'border-slate-700/50 hover:border-slate-600'
                            }
                            transition-all
                        `}
                    >
                        {/* Accordion Header */}
                        <button
                            onClick={() => toggleExpand(idx)}
                            className={`
                                w-full flex items-center gap-2 text-left
                                ${compact ? 'p-1.5' : 'p-2'}
                            `}
                        >
                            {expandedIdx === idx ? (
                                <ChevronDown className="w-3 h-3 text-cyan-400 shrink-0" />
                            ) : (
                                <ChevronRight className="w-3 h-3 text-gray-500 shrink-0" />
                            )}
                            <AlertCircle className={`w-3 h-3 shrink-0 ${expandedIdx === idx ? 'text-orange-400' : 'text-orange-500/60'}`} />
                            <span className={`
                                font-medium truncate
                                ${compact ? 'text-[10px]' : 'text-xs'}
                                ${expandedIdx === idx ? 'text-white' : 'text-gray-300'}
                            `}>
                                {rule.title}
                            </span>
                        </button>

                        {/* Expanded Content */}
                        {expandedIdx === idx && (
                            <div className={`border-t border-slate-700/50 ${compact ? 'p-1.5' : 'p-2'} space-y-2`}>
                                <p className="text-[10px] text-gray-400">{rule.description}</p>
                                <div className="flex items-start gap-1.5 p-1.5 rounded bg-green-500/10 border border-green-500/20">
                                    <CheckCircle className="w-3 h-3 text-green-400 shrink-0 mt-0.5" />
                                    <p className="text-[10px] text-green-300">{rule.solution}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </CardWrapper>
    );
};

export default RulesAccordionCard;
