/**
 * Fix Plugin Pages to Use Dynamic Data
 * Replaces hardcoded content with dynamic pluginData usage
 */

const fs = require('fs');
const path = require('path');

const PLUGINS_APP_DIR = path.join(__dirname, '../src/app/plugins');
const ENRICHED_DIR = path.join(__dirname, '../src/data/plugins/enriched');

// Get plugin info
function getPluginInfo(pluginId) {
  const enrichedPath = path.join(ENRICHED_DIR, `${pluginId}.json`);
  try {
    const data = JSON.parse(fs.readFileSync(enrichedPath, 'utf8'));
    return {
      id: data.id || pluginId,
      name: data.name || pluginId,
      description: data.description || `${data.name} plugin`,
      category: data.category || 'Plugin',
      tier: data.tier || 'Free',
      tags: data.tags || [],
      capabilities: data.capabilities || []
    };
  } catch (error) {
    console.warn(`Warning: Could not read ${enrichedPath}`);
    return null;
  }
}

// Generate dynamic plugin page
function generateDynamicPluginPage(pluginInfo) {
  const { id, name } = pluginInfo;
  const pascalName = id.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');

  return `'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronLeft, BookOpen, Settings, Zap, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';

// Import enriched plugin data
import pluginData from '@/data/plugins/enriched/${id}.json';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function ${pascalName}Page() {
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
                    backgroundImage: \`url(\${basePath}/fl-studio-test-new-background.svg)\`,
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
                            {pluginData.name || '${name}'}
                        </h1>

                        <p className="text-xl text-gray-400 mb-6">
                            {pluginData.description || 'FL Studio plugin'}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {pluginData.category && (
                                <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                    {pluginData.category}
                                </span>
                            )}
                            {pluginData.tier && (
                                <span className={\`px-3 py-1 rounded-full text-xs border \${
                                    pluginData.tier === 'Premium'
                                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                                        : 'bg-green-500/20 text-green-300 border-green-500/30'
                                }\`}>
                                    {pluginData.tier}
                                </span>
                            )}
                            {pluginData.tags && pluginData.tags.map((tag: string, i: number) => (
                                <span key={i} className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {pluginData.has_parameters && (
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                                    <Settings className="w-5 h-5 text-purple-400 mb-2" />
                                    <div className="text-sm text-gray-400">Parameters</div>
                                    <div className="text-lg font-bold">Available</div>
                                </div>
                            )}
                            {pluginData.has_presets && (
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                                    <Zap className="w-5 h-5 text-amber-400 mb-2" />
                                    <div className="text-sm text-gray-400">Presets</div>
                                    <div className="text-lg font-bold">Available</div>
                                </div>
                            )}
                            {pluginData.has_learning && (
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                                    <BookOpen className="w-5 h-5 text-green-400 mb-2" />
                                    <div className="text-sm text-gray-400">Learning</div>
                                    <div className="text-lg font-bold">Available</div>
                                </div>
                            )}
                            {pluginData.has_workflows && (
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
                        {pluginData.parameters && (
                            <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-bold mb-4">Parameters</h2>
                                <div className="text-gray-300">
                                    {pluginData.parameters.parameters ? (
                                        <div className="space-y-4">
                                            <p className="text-sm text-gray-400">
                                                {pluginData.parameters.description || 'Parameter information available'}
                                            </p>
                                            {Array.isArray(pluginData.parameters.parameters) && pluginData.parameters.parameters.slice(0, 5).map((param: any, i: number) => (
                                                <div key={i} className="border-l-2 border-purple-500/50 pl-4">
                                                    <div className="font-semibold text-white">{param.name || param.label}</div>
                                                    {param.description && (
                                                        <div className="text-sm text-gray-400 mt-1">{param.description}</div>
                                                    )}
                                                </div>
                                            ))}
                                            {Array.isArray(pluginData.parameters.parameters) && pluginData.parameters.parameters.length > 5 && (
                                                <p className="text-sm text-gray-500">
                                                    And {pluginData.parameters.parameters.length - 5} more parameters...
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
                        {pluginData.presets && Object.keys(pluginData.presets).length > 0 && (
                            <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-bold mb-4">Presets</h2>
                                <div className="grid gap-3">
                                    {Object.keys(pluginData.presets).map((presetKey, i) => (
                                        <div key={i} className="bg-slate-900/50 rounded p-3 border border-white/5">
                                            <div className="text-sm font-medium text-purple-300">{presetKey.replace(/-/g, ' ').replace(/\\b\\w/g, (l: string) => l.toUpperCase())}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Learning Section */}
                        {pluginData.learning && Object.keys(pluginData.learning).length > 0 && (
                            <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
                                <div className="grid gap-3">
                                    {Object.keys(pluginData.learning).map((category, i) => (
                                        <div key={i} className="bg-slate-900/50 rounded p-3 border border-white/5">
                                            <div className="text-sm font-medium text-green-300 mb-2">{category}</div>
                                            <div className="text-xs text-gray-500">
                                                {Object.keys(pluginData.learning[category]).length} resources
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Workflows Section */}
                        {pluginData.workflows && Object.keys(pluginData.workflows).length > 0 && (
                            <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-bold mb-4">Workflows</h2>
                                <div className="grid gap-3">
                                    {Object.keys(pluginData.workflows).map((category, i) => (
                                        <div key={i} className="bg-slate-900/50 rounded p-3 border border-white/5">
                                            <div className="text-sm font-medium text-blue-300 mb-2">{category.replace(/-/g, ' ').replace(/\\b\\w/g, (l: string) => l.toUpperCase())}</div>
                                            <div className="text-xs text-gray-500">
                                                {Object.keys(pluginData.workflows[category]).length} workflows
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Capabilities */}
                        {pluginData.capabilities && pluginData.capabilities.length > 0 && (
                            <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                                <div className="flex flex-wrap gap-2">
                                    {pluginData.capabilities.map((cap: string, i: number) => (
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
`;
}

// Main execution
function main() {
  console.log('🔧 Fixing Plugin Pages to Use Dynamic Data\n');
  console.log('═'.repeat(60));

  const pluginFolders = fs.readdirSync(PLUGINS_APP_DIR)
    .filter(item => {
      const itemPath = path.join(PLUGINS_APP_DIR, item);
      return fs.statSync(itemPath).isDirectory() && item !== '[id]';
    });

  console.log(`\nFound ${pluginFolders.length} plugin folders\n`);

  let fixed = 0;
  let errors = 0;

  pluginFolders.forEach(pluginId => {
    try {
      const pluginInfo = getPluginInfo(pluginId);
      if (!pluginInfo) {
        console.warn(`⚠️  No enriched data for ${pluginId}, skipping...`);
        errors++;
        return;
      }

      const pageContent = generateDynamicPluginPage(pluginInfo);
      const pagePath = path.join(PLUGINS_APP_DIR, pluginId, 'page.tsx');

      fs.writeFileSync(pagePath, pageContent);
      console.log(`✅ Fixed: ${pluginId}`);
      fixed++;
    } catch (error) {
      console.error(`❌ Error fixing ${pluginId}:`, error.message);
      errors++;
    }
  });

  console.log('\n' + '═'.repeat(60));
  console.log(`✨ Fixed ${fixed}/${pluginFolders.length} plugin pages`);
  if (errors > 0) {
    console.log(`⚠️  ${errors} errors encountered`);
  }
  console.log('═'.repeat(60) + '\n');
  console.log('💡 Run "npm run dev" to test the changes');
}

main();
