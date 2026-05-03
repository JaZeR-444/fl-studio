'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { CardWrapper } from './MarkdownCard';

interface Recipe {
    name: string;
    description: string;
    copyText: string;
    badge?: string;
}

interface RecipesCardProps {
    title: string;
    recipes: Recipe[];
    onCopy?: (text: string) => void;
    variant?: 'default' | 'compact';
}

export const RecipesCard: React.FC<RecipesCardProps> = ({
    title,
    recipes,
    onCopy,
    variant = 'default'
}) => {
    const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

    const handleCopy = (text: string, idx: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIdx(idx);
        onCopy?.(text);
        setTimeout(() => setCopiedIdx(null), 2000);
    };

    const isCompact = variant === 'compact';

    return (
        <CardWrapper
            title={title}
            icon="🍳"
            maxHeight={isCompact ? '200px' : '340px'}
            compact={isCompact}
        >
            <div className={`space-y-${isCompact ? '1' : '2'}`}>
                {recipes.map((recipe, idx) => (
                    <div
                        key={idx}
                        className={`
                            group flex items-center justify-between gap-2
                            ${isCompact ? 'p-1.5' : 'p-2'}
                            rounded-md bg-slate-800/60 hover:bg-slate-800
                            border border-transparent hover:border-cyan-500/30
                            cursor-pointer transition-all
                        `}
                        onClick={() => handleCopy(recipe.copyText, idx)}
                    >
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className={`font-medium text-white ${isCompact ? 'text-[10px]' : 'text-xs'}`}>
                                    {recipe.name}
                                </span>
                                {recipe.badge && (
                                    <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[9px] font-mono">
                                        {recipe.badge}
                                    </span>
                                )}
                            </div>
                            {!isCompact && recipe.description && (
                                <p className="text-[10px] text-gray-400 truncate mt-0.5">
                                    {recipe.description}
                                </p>
                            )}
                        </div>

                        <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            {copiedIdx === idx ? (
                                <Check className="w-3.5 h-3.5 text-green-400" />
                            ) : (
                                <Copy className="w-3.5 h-3.5 text-gray-500" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </CardWrapper>
    );
};

export default RecipesCard;
