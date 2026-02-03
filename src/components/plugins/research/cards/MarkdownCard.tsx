'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Shared card wrapper for consistent styling
interface CardWrapperProps {
    title: string;
    icon?: string;
    children: React.ReactNode;
    maxHeight?: string;
    compact?: boolean;
    headerAction?: React.ReactNode;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
    title,
    icon,
    children,
    maxHeight,
    compact = false,
    headerAction
}) => {
    return (
        <div
            className={`
                rounded-lg border border-slate-700/60 bg-slate-900/80 backdrop-blur-sm
                ${compact ? 'p-2' : 'p-3'}
                flex flex-col h-full
            `}
        >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-2 shrink-0">
                <h3 className={`font-semibold text-white flex items-center gap-1.5 ${compact ? 'text-xs' : 'text-sm'}`}>
                    {icon && <span>{icon}</span>}
                    {title}
                </h3>
                {headerAction}
            </div>

            {/* Card Content */}
            <div
                className="flex-1 overflow-y-auto text-sm text-gray-300"
                style={{ maxHeight: maxHeight || 'none' }}
            >
                {children}
            </div>
        </div>
    );
};

// ==================== MARKDOWN CARD ====================

interface MarkdownCardProps {
    title: string;
    icon?: string;
    content: string;
    maxHeight?: string;
    compact?: boolean;
}

export const MarkdownCard: React.FC<MarkdownCardProps> = ({
    title,
    icon,
    content,
    maxHeight = '300px',
    compact = false
}) => {
    return (
        <CardWrapper title={title} icon={icon} maxHeight={maxHeight} compact={compact}>
            <div className="prose prose-sm prose-invert max-w-none">
                <MarkdownRenderer content={content} />
            </div>
        </CardWrapper>
    );
};

// Simple markdown renderer (for headings, lists, code, bold)
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
    const lines = content.split('\n');

    return (
        <div className="space-y-1.5">
            {lines.map((line, idx) => {
                // Heading 2
                if (line.startsWith('## ')) {
                    return <h4 key={idx} className="text-cyan-400 font-bold text-sm mt-3 mb-1">{line.replace('## ', '')}</h4>;
                }
                // Heading 3
                if (line.startsWith('### ')) {
                    return <h5 key={idx} className="text-purple-400 font-semibold text-xs mt-2 mb-0.5">{line.replace('### ', '')}</h5>;
                }
                // List item
                if (line.startsWith('- ')) {
                    return (
                        <div key={idx} className="flex items-start gap-1.5 text-xs">
                            <span className="text-cyan-500 mt-0.5">•</span>
                            <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line.replace('- ', '')) }} />
                        </div>
                    );
                }
                // Numbered list
                if (/^\d+\.\s/.test(line)) {
                    const [num, ...rest] = line.split('. ');
                    return (
                        <div key={idx} className="flex items-start gap-1.5 text-xs">
                            <span className="text-cyan-500 font-mono w-4">{num}.</span>
                            <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(rest.join('. ')) }} />
                        </div>
                    );
                }
                // Code block
                if (line.startsWith('```')) {
                    return null; // Skip delimiters
                }
                // Regular text
                if (line.trim()) {
                    return <p key={idx} className="text-xs" dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line) }} />;
                }
                return null;
            })}
        </div>
    );
};

// Format inline markdown (bold, code, links)
function formatInlineMarkdown(text: string): string {
    return text
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
        .replace(/`(.+?)`/g, '<code class="bg-slate-800 px-1 rounded text-cyan-300 text-[10px]">$1</code>');
}

export default MarkdownCard;
