'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronLeft, BookOpen, Settings, Zap, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';

// Import enriched plugin data
import pluginData from '@/data/plugins/enriched/luxeverb.json';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function LuxeverbPage() {
    const [searchOpen, setSearchOpen] = useState(false);
    const titleRef = useRef<HTMLHeadingElement>(null);

    // Simple fade-in animation
    useEffect(() => {
        if (!titleRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Background */}
            <div
                className="fixed inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `url(${basePath}/fl-studio-test-new-background.svg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Main Container */}
            <div className="relative z-10">
                {/* Top Navigation */}
                <div className="h-14 border-b border-white/10 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
                    <div className="h-full flex items-center justify-between px-4">
                        <Link href="/hub" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-sm">Back to Hub</span>
                        </Link>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSearchOpen(!searchOpen)}
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                aria-label="Toggle search"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="container mx-auto px-6 py-12">
                    <div className="max-w-4xl">
                        <h1 ref={titleRef} className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            {(pluginData as any).name || 'LuxeVerb'}
                        </h1>

                        <p className="text-xl text-gray-400 mb-6">
                            {(pluginData as any).description || 'FL Studio plugin'}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {(pluginData as any).category && (
                                <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                    {(pluginData as any).category}
                                </span>
                            )}
                            {(pluginData as any).tier && (
                                <span className={`px-3 py-1 rounded-full text-xs border ${
                                    (pluginData as any).tier === 'Premium'
                                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                                        : 'bg-green-500/20 text-green-300 border-green-500/30'
                                }`}>
                                    {(pluginData as any).tier}
                                </span>
                            )}
                            {(pluginData as any).tags && (pluginData as any).tags.map((tag: string, i: number) => (
                                <span key={i} className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {(pluginData as any).has_parameters && (
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                                    <Settings className="w-5 h-5 text-purple-400 mb-2" />
                                    <div className="text-sm text-gray-400">Parameters</div>
                                    <div className="text-lg font-bold">Available</div>
                                </div>
                            )}
                            {(pluginData as any).has_presets && (
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                                    <Zap className="w-5 h-5 text-amber-400 mb-2" />
                                    <div className="text-sm text-gray-400">Presets</div>
                                    <div className="text-lg font-bold">Available</div>
                                </div>
                            )}
                            {(pluginData as any).has_learning && (
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                                    <BookOpen className="w-5 h-5 text-green-400 mb-2" />
                                    <div className="text-sm text-gray-400">Learning</div>
                                    <div className="text-lg font-bold">Available</div>
                                </div>
                            )}
                            {(pluginData as any).has_workflows && (
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                                    <TrendingUp className="w-5 h-5 text-blue-400 mb-2" />
                                    <div className="text-sm text-gray-400">Workflows</div>
                                    <div className="text-lg font-bold">Available</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="container mx-auto px-6 pb-12">
                    <div className="max-w-4xl space-y-8">
                        {/* Parameters Section */}
                        {(pluginData as any).parameters && (
                            <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-bold mb-4">Parameters</h2>
                                <div className="text-gray-300">
                                    {((pluginData as any).parameters as any).parameters ? (
                                        <div className="space-y-4">
                                            <p className="text-sm text-gray-400">
                                                {(pluginData as any).description || 'Parameter information available'}
                                            </p>
                                            {Array.isArray(((pluginData as any).parameters as any).parameters) && ((pluginData as any).parameters as any).parameters.slice(0, 5).map((param: any, i: number) => (
                                                <div key={i} className="border-l-2 border-purple-500/50 pl-4">
                                                    <div className="font-semibold text-white">{param.name || param.label}</div>
                                                    {param.description && (
                                                        <div className="text-sm text-gray-400 mt-1">{param.description}</div>
                                                    )}
                                                </div>
                                            ))}
                                            {Array.isArray(((pluginData as any).parameters as any).parameters) && ((pluginData as any).parameters as any).parameters.length > 5 && (
                                                <p className="text-sm text-gray-500">
                                                    And {((pluginData as any).parameters as any).parameters.length - 5} more parameters...
                                                </p>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-gray-400">Parameter data available in plugin</p>
                                    )}
                                </div>
                            </section>
                        )}

                        {/* Presets Section */}
                        {(pluginData as any).has_presets && (pluginData as any).presets && Object.keys((pluginData as any).presets).length > 0 && (
                            <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-bold mb-4">Presets</h2>
                                <div className="grid gap-3">
                                    {Object.keys((pluginData as any).presets).map((presetKey, i) => (
                                        <div key={i} className="bg-slate-900/50 rounded p-3 border border-white/5">
                                            <div className="text-sm font-medium text-purple-300">{presetKey.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Learning Section */}
                        {(pluginData as any).has_learning && (pluginData as any).learning && Object.keys((pluginData as any).learning).length > 0 && (
                            <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
                                <div className="grid gap-3">
                                    {Object.keys((pluginData as any).learning).map((category, i) => (
                                        <div key={i} className="bg-slate-900/50 rounded p-3 border border-white/5">
                                            <div className="text-sm font-medium text-green-300 mb-2">{category}</div>
                                            <div className="text-xs text-gray-500">
                                                {Object.keys((pluginData as any).learning[category]).length} resources
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Workflows Section */}
                        {(pluginData as any).has_workflows && (pluginData as any).workflows && Object.keys((pluginData as any).workflows).length > 0 && (
                            <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-bold mb-4">Workflows</h2>
                                <div className="grid gap-3">
                                    {Object.keys((pluginData as any).workflows).map((category, i) => (
                                        <div key={i} className="bg-slate-900/50 rounded p-3 border border-white/5">
                                            <div className="text-sm font-medium text-blue-300 mb-2">{category.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</div>
                                            <div className="text-xs text-gray-500">
                                                {Object.keys((pluginData as any).workflows[category]).length} workflows
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Capabilities */}
                        {(pluginData as any).capabilities && (pluginData as any).capabilities.length > 0 && (
                            <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                                <div className="flex flex-wrap gap-2">
                                    {(pluginData as any).capabilities.map((cap: string, i: number) => (
                                        <span key={i} className="px-3 py-1 rounded-full text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                            {cap}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
