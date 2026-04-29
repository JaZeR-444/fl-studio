/**
 * Generate Missing Plugin Pages
 * Creates page.tsx files for plugins that have data but no page
 */

const fs = require('fs');
const path = require('path');

const PLUGINS_APP_DIR = path.join(__dirname, '../src/app/plugins');
const ENRICHED_DIR = path.join(__dirname, '../src/data/plugins/enriched');

// Get plugin info from enriched data
function getPluginInfo(pluginId) {
  const enrichedPath = path.join(ENRICHED_DIR, `${pluginId}.json`);
  try {
    const data = JSON.parse(fs.readFileSync(enrichedPath, 'utf8'));
    return {
      id: data.id || pluginId,
      name: data.name || pluginId,
      description: data.description || `${data.name} - ${data.category || 'Plugin'}`
    };
  } catch (error) {
    console.warn(`Warning: Could not read ${enrichedPath}`);
    return {
      id: pluginId,
      name: pluginId,
      description: 'FL Studio Plugin'
    };
  }
}

// Generate plugin page template
function generatePluginPage(pluginInfo) {
  const { id, name, description } = pluginInfo;
  const pascalName = id.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');

  return `'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Search, ChevronLeft, ChevronRight,
    Folder, ClipboardList, Music, LayoutGrid, BookOpen, Settings as SettingsIcon, Zap,
    Circle, Hexagon, Triangle, Sparkles, TrendingUp, BarChart3, Clock
} from 'lucide-react';
import { gsap } from 'gsap';
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({
    weight: ['600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// Import enriched plugin data
import pluginData from '@/data/plugins/enriched/${id}.json';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// ==================== TYPES ====================
type StudyTab = 'learning' | 'data' | 'workflow' | 'reference';

// ==================== SIDEBAR ITEMS ====================
const sidebarItems = [
    { id: 'browse', icon: Folder, label: 'BROWSE' },
    { id: 'workflow', icon: ClipboardList, label: 'WORKFLOW' },
    { id: 'production', icon: Music, label: 'PRODUCTION' },
    { id: 'templates', icon: LayoutGrid, label: 'TEMPLATES' },
    { id: 'learning', icon: BookOpen, label: 'LEARNING' },
    { id: 'tools', icon: SettingsIcon, label: 'TOOLS' },
    { id: 'smart', icon: Zap, label: 'SMART' },
];

// ==================== MAIN PAGE ====================
export default function ${pascalName}Page() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState<StudyTab>('learning');
    const [searchOpen, setSearchOpen] = useState(false);

    // GSAP Animation refs
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const tagsRef = useRef<HTMLDivElement>(null);

    // Cool GSAP letter-by-letter animation
    useEffect(() => {
        if (!titleRef.current) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const ctx = gsap.context(() => {
            const letters = titleRef.current!.querySelectorAll('span');

            if (prefersReducedMotion) {
                gsap.to(letters, { opacity: 1, duration: 0.3 });
                gsap.to(subtitleRef.current, { opacity: 0.6, duration: 0.3, delay: 0.1 });
                if (tagsRef.current) {
                    gsap.to(tagsRef.current.querySelectorAll('span'), { opacity: 1, duration: 0.3, delay: 0.2 });
                }
                return;
            }

            const tl = gsap.timeline();
            gsap.set(letters, { opacity: 0, y: -100, rotationX: -90, scale: 0 });
            gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
            if (tagsRef.current) {
                gsap.set(tagsRef.current.querySelectorAll('span'), { opacity: 0, scale: 0.8 });
            }

            tl.to(letters, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'elastic.out(1, 0.6)',
            })
            .to(letters, {
                y: -10,
                duration: 0.3,
                stagger: 0.1,
                ease: 'power2.out',
            }, '-=0.4')
            .to(letters, {
                y: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: 'bounce.out',
            }, '-=0.3')
            .to(subtitleRef.current, {
                opacity: 0.6,
                y: 0,
                duration: 0.4,
                ease: 'power2.out',
            }, '-=0.5');

            if (tagsRef.current) {
                const tags = tagsRef.current.querySelectorAll('span');
                tl.to(tags, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                }, '-=0.3');
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen w-full overflow-hidden font-sans bg-slate-950 dark:bg-slate-950 relative">
            {/* ANIMATED BACKGROUND LAYER */}
            <div
                className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
                style={{
                    backgroundImage: \`url(\${basePath}/fl-studio-test-new-background.svg)\`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.25,
                    filter: 'blur(1px)',
                }}
            >
                <div
                    className="absolute inset-0 animate-slow-drift"
                    style={{
                        backgroundImage: \`url(\${basePath}/fl-studio-test-new-background.svg)\`,
                        backgroundSize: '110%',
                        backgroundPosition: 'center',
                    }}
                />
            </div>

            {/* MAIN CONTAINER */}
            <div className="w-full h-screen flex flex-col bg-slate-900/50 dark:bg-slate-900/50 relative z-10">
                {/* TOP NAVIGATION BAR */}
                <div className="h-14 border-b flex items-center justify-between px-4 shrink-0 z-30 select-none bg-slate-950 dark:bg-slate-950 border-white/10">
                    <Link href="/hub" className="flex items-center hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded">
                        <Image
                            src={\`\${basePath}/images/branding/icon.svg\`}
                            alt="FL Studio"
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                    </Link>

                    <div className="flex items-center rounded-full p-1 border bg-slate-800 dark:bg-slate-800 border-white/10">
                        <button className="px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md transition-all bg-purple-600 hover:bg-purple-700">
                            Home
                        </button>
                        <Link href="/hub" className="px-4 py-1.5 rounded-full text-xs font-bold transition-all text-gray-400 hover:text-white">
                            Studio Hub
                        </Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="p-2 transition-colors text-gray-400 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer"
                            aria-label="Toggle search"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                        {searchOpen && (
                            <div className="flex items-center rounded-lg border bg-slate-800 border-white/10 px-3">
                                <input
                                    type="text"
                                    className="w-64 bg-transparent border-none text-sm focus:outline-none py-2 text-white placeholder:text-gray-500"
                                    placeholder="Search..."
                                    autoFocus
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="flex-1 flex overflow-hidden">
                    {/* MAIN CENTER AREA */}
                    <main className="flex-1 overflow-y-auto">
                        <div className="container mx-auto px-6 py-12">
                            {/* Hero Section */}
                            <div className="mb-12">
                                <h1 ref={titleRef} className={\`text-6xl font-bold mb-4 \${fredoka.className}\`}>
                                    {name.split('').map((letter, i) => (
                                        <span key={i} className="inline-block">
                                            {letter === ' ' ? '\\u00A0' : letter}
                                        </span>
                                    ))}
                                </h1>
                                <p ref={subtitleRef} className="text-xl text-gray-400 mb-6 opacity-0">
                                    {description}
                                </p>
                                <div ref={tagsRef} className="flex gap-2 flex-wrap">
                                    {(pluginData as any).tags && (pluginData as any).tags.map((tag: any, i: number) => (
                                        <span key={i} className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                            {typeof tag === 'string' ? tag : tag.label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content Sections */}
                            <div className="space-y-8">
                                {/* Overview */}
                                <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                                    <p className="text-gray-300">{(pluginData as any).description || 'Plugin information loading...'}</p>
                                </section>

                                {/* Plugin Data */}
                                {(pluginData as any).parameters && (
                                    <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                        <h2 className="text-2xl font-bold mb-4">Parameters</h2>
                                        <p className="text-gray-400">Parameters data available in enriched JSON</p>
                                    </section>
                                )}

                                {/* Learning Content */}
                                {(pluginData as any).has_learning && (
                                    <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                        <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
                                        <p className="text-gray-400">Learning content available</p>
                                    </section>
                                )}

                                {/* Workflows */}
                                {(pluginData as any).has_workflows && (
                                    <section className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                                        <h2 className="text-2xl font-bold mb-4">Workflows</h2>
                                        <p className="text-gray-400">Workflow guides available</p>
                                    </section>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
`;
}

// Main execution
function main() {
  console.log('🔧 Generating Missing Plugin Pages\n');
  console.log('═'.repeat(60));

  // Find missing plugin pages
  const enrichedFiles = fs.readdirSync(ENRICHED_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''));

  const existingPages = fs.readdirSync(PLUGINS_APP_DIR);

  const missingPlugins = enrichedFiles.filter(id => !existingPages.includes(id));

  console.log(`\nFound ${missingPlugins.length} missing plugin pages:\n`);
  missingPlugins.forEach(id => console.log(`  - ${id}`));
  console.log('\n' + '═'.repeat(60) + '\n');

  if (missingPlugins.length === 0) {
    console.log('✅ All plugin pages already exist!');
    return;
  }

  // Generate pages
  let generated = 0;
  missingPlugins.forEach(pluginId => {
    try {
      const pluginInfo = getPluginInfo(pluginId);
      const pageContent = generatePluginPage(pluginInfo);

      const pluginDir = path.join(PLUGINS_APP_DIR, pluginId);
      const pagePath = path.join(pluginDir, 'page.tsx');

      // Create directory if it doesn't exist
      if (!fs.existsSync(pluginDir)) {
        fs.mkdirSync(pluginDir, { recursive: true });
      }

      // Write page file
      fs.writeFileSync(pagePath, pageContent);
      console.log(`✅ Generated: ${pluginId}/page.tsx`);
      generated++;
    } catch (error) {
      console.error(`❌ Error generating ${pluginId}:`, error.message);
    }
  });

  console.log('\n' + '═'.repeat(60));
  console.log(`✨ Generated ${generated}/${missingPlugins.length} plugin pages`);
  console.log('═'.repeat(60) + '\n');
}

main();
