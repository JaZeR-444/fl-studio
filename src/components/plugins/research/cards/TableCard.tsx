'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { CardWrapper } from './MarkdownCard';

interface TableCardProps {
    title: string;
    icon?: string;
    headers: string[];
    rows: string[][];
    searchQuery?: string;
    compact?: boolean;
}

export const TableCard: React.FC<TableCardProps> = ({
    title,
    icon,
    headers,
    rows,
    searchQuery = '',
    compact = false
}) => {
    const [localSearch, setLocalSearch] = useState('');

    // Filter rows based on search
    const query = searchQuery || localSearch;
    const filteredRows = useMemo(() => {
        if (!query.trim()) return rows;
        const lowerQuery = query.toLowerCase();
        return rows.filter(row =>
            row.some(cell => cell.toLowerCase().includes(lowerQuery))
        );
    }, [rows, query]);

    return (
        <CardWrapper
            title={title}
            icon={icon}
            maxHeight={compact ? '180px' : '300px'}
            compact={compact}
            headerAction={
                !searchQuery && (
                    <div className="relative">
                        <Search className="absolute left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Filter..."
                            value={localSearch}
                            onChange={(e) => setLocalSearch(e.target.value)}
                            className="w-20 pl-5 pr-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded focus:border-cyan-500 focus:outline-none text-gray-300"
                        />
                    </div>
                )
            }
        >
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-slate-700/50">
                            {headers.map((header, idx) => (
                                <th
                                    key={idx}
                                    className={`
                                        ${compact ? 'py-1 px-1.5 text-[9px]' : 'py-1.5 px-2 text-[10px]'}
                                        font-semibold text-cyan-400 uppercase tracking-wide
                                    `}
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRows.map((row, rowIdx) => (
                            <tr
                                key={rowIdx}
                                className="border-b border-slate-800/50 hover:bg-slate-800/40 transition-colors"
                            >
                                {row.map((cell, cellIdx) => (
                                    <td
                                        key={cellIdx}
                                        className={`
                                            ${compact ? 'py-1 px-1.5 text-[10px]' : 'py-1.5 px-2 text-xs'}
                                            ${cellIdx === 0 ? 'text-white font-medium' : 'text-gray-400'}
                                        `}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {filteredRows.length === 0 && (
                            <tr>
                                <td
                                    colSpan={headers.length}
                                    className="py-4 text-center text-gray-500 text-xs"
                                >
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </CardWrapper>
    );
};

export default TableCard;
