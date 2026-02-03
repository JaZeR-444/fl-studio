'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CardWrapper } from './MarkdownCard';

interface QuickLink {
    label: string;
    href: string;
    icon?: string;
}

interface QuickLinksCardProps {
    links: QuickLink[];
}

export const QuickLinksCard: React.FC<QuickLinksCardProps> = ({ links }) => {
    return (
        <CardWrapper title="Quick Links" icon="🔗" compact maxHeight="150px">
            <div className="space-y-1">
                {links.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`
                            flex items-center gap-2 p-1.5 rounded-md
                            bg-slate-800/60 hover:bg-slate-800
                            border border-transparent hover:border-cyan-500/30
                            transition-all group
                        `}
                    >
                        <span className="text-sm">{link.icon || '📄'}</span>
                        <span className="text-[10px] text-gray-300 group-hover:text-white flex-1 truncate">
                            {link.label}
                        </span>
                        {link.href.startsWith('http') && (
                            <ExternalLink className="w-2.5 h-2.5 text-gray-500 group-hover:text-cyan-400" />
                        )}
                    </a>
                ))}
            </div>
        </CardWrapper>
    );
};

export default QuickLinksCard;
