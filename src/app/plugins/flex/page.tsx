'use client';

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

// Import FLEX plugin data
import flexData from '@/data/plugins/flex.json';

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
export default function FlexPage() {
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
                // Simple fade-in for accessibility
                gsap.to(letters, { opacity: 1, duration: 0.3 });
                gsap.to(subtitleRef.current, { opacity: 0.6, duration: 0.3, delay: 0.1 });
                if (tagsRef.current) {
                    gsap.to(tagsRef.current.querySelectorAll('span'), { opacity: 1, duration: 0.3, delay: 0.2 });
                }
                return;
            }

            // Cool letter-by-letter animation
            const tl = gsap.timeline();

            // Set initial states
            gsap.set(letters, { opacity: 0, y: -100, rotationX: -90, scale: 0 });
            gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
            if (tagsRef.current) {
                gsap.set(tagsRef.current.querySelectorAll('span'), { opacity: 0, scale: 0.8 });
            }

            // Animate each letter with elastic bounce and 3D rotation
            tl.to(letters, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'elastic.out(1, 0.6)',
            })
            // Add a subtle bounce effect after landing
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
            // Subtitle slides up
            .to(subtitleRef.current, {
                opacity: 0.6,
                y: 0,
                duration: 0.4,
                ease: 'power2.out',
            }, '-=0.5');

            // Tags stagger
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
                    backgroundImage: `url(${basePath}/fl-studio-test-new-background.svg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.25,
                    filter: 'blur(1px)',
                }}
            >
                <div
                    className="absolute inset-0 animate-slow-drift"
                    style={{
                        backgroundImage: `url(${basePath}/fl-studio-test-new-background.svg)`,
                        backgroundSize: '110%',
                        backgroundPosition: 'center',
                    }}
                />
            </div>

            {/* MAIN CONTAINER - Full Screen */}
            <div className="w-full h-screen flex flex-col bg-slate-900/50 dark:bg-slate-900/50 relative z-10">

                {/* TOP NAVIGATION BAR */}
                <div className="h-14 border-b flex items-center justify-between px-4 shrink-0 z-30 select-none bg-slate-950 dark:bg-slate-950 border-white/10">
                    {/* Left: Icon */}
                    <Link href="/hub" className="flex items-center hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded">
                        <Image
                            src={`${basePath}/images/branding/icon.svg`}
                            alt="FL Studio"
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                    </Link>

                    {/* Center: Toggle Pill */}
                    <div className="flex items-center rounded-full p-1 border bg-slate-800 dark:bg-slate-800 border-white/10">
                        <button
                            className="px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md transition-all bg-purple-600 hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                        >
                            Home
                        </button>
                        <Link
                            href="/hub"
                            className="px-4 py-1.5 rounded-full text-xs font-bold transition-all text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                        >
                            Studio Hub
                        </Link>
                    </div>

                    {/* Right: Search */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="p-2 transition-colors text-gray-400 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
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

                {/* MAIN APP BODY */}
                <div className="flex flex-1 overflow-hidden relative">

                    {/* SIDEBAR */}
                    <div className={`border-r flex flex-col shrink-0 transition-all duration-300 ease-in-out z-20 pt-6 relative bg-slate-950 dark:bg-slate-950 border-white/10 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
                        {/* Menu Items */}
                        <div className="flex-1 overflow-y-auto space-y-1 py-2">
                            {sidebarItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        className="group flex items-center w-full h-10 px-4 cursor-pointer transition-all gap-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg mx-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-inset"
                                    >
                                        <Icon className="w-5 h-5 shrink-0" />
                                        {!sidebarCollapsed && (
                                            <span className="text-xs font-bold tracking-wider flex-1 text-left">{item.label}</span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Footer Section */}
                        <div className="mt-auto border-t p-4 flex flex-col gap-4 border-white/10">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={`${basePath}/images/branding/icon.svg`}
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain shrink-0"
                                />
                                {!sidebarCollapsed && (
                                    <div>
                                        <h3 className="text-sm font-bold leading-none whitespace-nowrap text-white">FL Studio</h3>
                                        <p className="text-[10px] whitespace-nowrap text-gray-500">Producer Edition</p>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar Toggle Button */}
                            <button
                                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                                className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 transition-all group bg-white/10 border-white/10 text-gray-400 hover:text-white hover:bg-white/15 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                                title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                            >
                                {sidebarCollapsed ? (
                                    <ChevronRight className="w-4 h-4 transition-transform duration-300 shrink-0" />
                                ) : (
                                    <>
                                        <ChevronLeft className="w-4 h-4 transition-transform duration-300 shrink-0" />
                                        <span className="text-xs font-medium whitespace-nowrap">Collapse</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* CONTENT CONTAINER */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth flex flex-col gap-6">

                        {/* ==================== DASHBOARD SECTION ==================== */}
                        <div className="flex flex-col lg:flex-row gap-6">

                            {/* LEFT COLUMN: Title + Card A */}
                            <div className="w-full lg:w-[35%] flex flex-col gap-6">
                                {/* Title & Tags - Centered */}
                                <div className="px-2 flex flex-col items-center text-center">
                                    <h1
                                        ref={titleRef}
                                        className={`${fredoka.className} text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-[0.2em] select-none flex justify-center gap-2 md:gap-4`}
                                    >
                                        {['F', 'L', 'E', 'X'].map((letter, i) => (
                                            <span
                                                key={i}
                                                className="inline-block opacity-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-flow"
                                                style={{
                                                    backgroundSize: '300% 300%',
                                                    filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.7)) drop-shadow(0 0 50px rgba(59,130,246,0.5))',
                                                }}
                                            >
                                                {letter}
                                            </span>
                                        ))}
                                    </h1>
                                    <p
                                        ref={subtitleRef}
                                        className="text-xs font-medium tracking-[0.2em] mb-6 uppercase opacity-0 text-gray-400"
                                    >
                                        Advanced Production Synthesizer
                                    </p>
                                    <div ref={tagsRef} className="flex flex-wrap justify-center gap-3">
                                        {[
                                            { label: 'Hybrid Engine', icon: Hexagon, color: 'from-cyan-500 to-cyan-600' },
                                            { label: 'Preset-Based', icon: LayoutGrid, color: 'from-purple-500 to-purple-600' },
                                            { label: 'Mix-Ready', icon: Sparkles, color: 'from-pink-500 to-pink-600' },
                                        ].map((tag) => {
                                            const TagIcon = tag.icon;
                                            return (
                                                <span
                                                    key={tag.label}
                                                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest backdrop-blur-md transition-all duration-300 hover:scale-105 bg-gradient-to-r ${tag.color} text-white shadow-lg opacity-0`}
                                                >
                                                    <TagIcon className="w-3 h-3 inline mr-1.5" />
                                                    {tag.label}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* CARD A: Concept & Best Uses */}
                                <div className="flex-1 min-h-[400px] rounded-2xl border p-6 flex flex-col relative transition-all duration-300 backdrop-blur-md cursor-pointer hover:translate-y-[-2px] hover:border-purple-500/40 bg-white/10 dark:bg-white/10 border-white/20 dark:border-white/20 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="text-lg font-bold mb-1 text-white flex items-center gap-2">
                                                <Circle className="w-5 h-5 text-purple-400" />
                                                Concept & Best Uses
                                            </h2>
                                            <p className="text-xs text-purple-400">Speed Over Depth • Quality Over Customization</p>
                                        </div>
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-sm shadow-lg text-white">A</div>
                                    </div>
                                    <div className="space-y-4 flex-1 overflow-y-auto text-sm">
                                        <div className="rounded-lg p-3 border-l-2 bg-white/5 border-purple-500">
                                            <p className="font-medium text-purple-200">"50GB+ studio-quality content. Professional results in minutes, not hours."</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <h3 className="uppercase font-bold tracking-wider mb-2 text-green-400 flex items-center gap-1">
                                                    <span className="text-lg">✓</span> FLEX Excels At
                                                </h3>
                                                <ul className="space-y-1.5 text-sm">
                                                    <li className="flex items-center gap-2 text-gray-300">
                                                        <span className="text-green-400">•</span> Professional sounds NOW
                                                    </li>
                                                    <li className="flex items-center gap-2 text-gray-300">
                                                        <span className="text-green-400">•</span> Acoustic instruments
                                                    </li>
                                                    <li className="flex items-center gap-2 text-gray-300">
                                                        <span className="text-green-400">•</span> Rapid prototyping
                                                    </li>
                                                    <li className="flex items-center gap-2 text-gray-300">
                                                        <span className="text-green-400">•</span> CPU-efficient layering
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="uppercase font-bold tracking-wider mb-2 text-red-400 flex items-center gap-1">
                                                    <span className="text-lg">✗</span> Not For
                                                </h3>
                                                <ul className="space-y-1.5 text-sm">
                                                    <li className="flex items-center gap-2 text-gray-300">
                                                        <span className="text-red-400">•</span> Building from scratch
                                                    </li>
                                                    <li className="flex items-center gap-2 text-gray-300">
                                                        <span className="text-red-400">•</span> Custom sample import
                                                    </li>
                                                    <li className="flex items-center gap-2 text-gray-300">
                                                        <span className="text-red-400">•</span> Deep modular routing
                                                    </li>
                                                    <li className="flex items-center gap-2 text-gray-300">
                                                        <span className="text-red-400">•</span> Full oscillator control
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="pt-3 border-t border-white/10">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-400">Think: <strong className="text-purple-300">Lightroom</strong> (presets+adjust) vs <strong className="text-purple-300">Photoshop</strong> (full control)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="w-full lg:w-[65%] flex flex-col gap-6">
                                {/* TOP ROW: Cards B & C */}
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* CARD B: Top Controls */}
                                    <div className="flex-1 min-h-[240px] rounded-2xl border p-4 flex flex-col transition-all duration-300 backdrop-blur-md hover:border-cyan-500/40 bg-white/10 dark:bg-white/10 border-white/20 dark:border-white/20 shadow-xl">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-base font-bold text-white flex items-center gap-2">
                                                <Triangle className="w-4 h-4 text-cyan-400" />
                                                Top Controls
                                            </h3>
                                            <div className="text-xs px-2 py-1 rounded-full font-bold bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg">B</div>
                                        </div>
                                        <div className="space-y-2 flex-1 overflow-y-auto text-sm">
                                            {[
                                                { macro: 'Macro 1', fn: 'Filter/Brightness', color: 'text-cyan-400' },
                                                { macro: 'Macro 2', fn: 'Timbre/Character', color: 'text-blue-400' },
                                                { macro: 'Cutoff', fn: 'Filter brightness', color: 'text-purple-300' },
                                                { macro: 'Resonance', fn: 'Peak emphasis', color: 'text-purple-300' },
                                                { macro: 'Attack (A)', fn: 'Fade-in (0-10s)', color: 'text-gray-400' },
                                                { macro: 'Release (R)', fn: 'Fade-out (0-10s)', color: 'text-gray-400' },
                                            ].map((ctrl, idx) => (
                                                <div key={idx} className={`flex justify-between items-center px-2 py-1.5 rounded ${idx < 2 ? 'bg-blue-500/10' : ''}`}>
                                                    <span className={`${ctrl.color} ${idx < 2 ? 'font-bold' : ''}`}>{ctrl.macro}</span>
                                                    <span className="text-gray-400 text-xs">{ctrl.fn}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-3 pt-3 border-t text-xs text-center border-white/10 text-gray-500">
                                            Alt+Click = Reset • Right-Click = Automate
                                        </div>
                                    </div>

                                    {/* CARD C: Routing Rules */}
                                    <div className="flex-1 min-h-[240px] rounded-2xl border p-4 flex flex-col transition-all duration-300 backdrop-blur-md hover:border-orange-500/40 bg-white/10 dark:bg-white/10 border-white/20 dark:border-white/20 shadow-xl">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-base font-bold text-white flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-orange-400" />
                                                Signal Flow
                                            </h3>
                                            <div className="text-xs px-2 py-1 rounded-full font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">C</div>
                                        </div>
                                        <div className="text-xs mb-3 px-3 py-2 rounded-lg text-center font-mono bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-300">
                                            <span className="text-cyan-400">Synth</span> → <span className="text-purple-400">Macros</span> → <span className="text-indigo-400">Pitch/Filter</span> → <span className="text-pink-400">Master FX</span> → <span className="text-orange-400">Limiter</span> → <span className="text-green-400">Out</span>
                                        </div>
                                        <div className="space-y-1.5 text-sm text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span> Bass MUST be mono (vectorscope vertical)
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-400">✓</span> Master Filter BEFORE delay/reverb
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-red-400">✗</span> NEVER reverb on bass/808s
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-red-400">✗</span> NEVER HP filter on bass
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-3 text-xs text-center text-gray-500">
                                            HP non-bass @ 180Hz • Order is fixed
                                        </div>
                                    </div>
                                </div>

                                {/* CARD D: Quick Start */}
                                <div className="flex-1 min-h-[300px] rounded-2xl border p-6 flex flex-col transition-all duration-300 backdrop-blur-md hover:border-purple-500/40 bg-white/10 dark:bg-white/10 border-white/20 dark:border-white/20 shadow-xl">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-base font-bold text-purple-400 flex items-center gap-2">
                                            <BarChart3 className="w-5 h-5" />
                                            Quick Start Checklist
                                        </h3>
                                        <div className="text-xs px-2 py-1 rounded-full font-bold bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg">D</div>
                                    </div>
                                    <div className="flex flex-col gap-2 flex-1">
                                        {[
                                            { step: '1', title: 'Lock Master Volume', desc: 'Click padlock icon → Consistent browsing, no ear-blast', gradient: 'from-cyan-500 to-cyan-600' },
                                            { step: '2', title: 'Load Preset Close to Target', desc: 'Use Tags filter → Browse with Ctrl+↑/↓', gradient: 'from-purple-500 to-purple-600' },
                                            { step: '3', title: 'Reset All Macros', desc: 'Alt+Click each macro → Start from designer defaults', gradient: 'from-pink-500 to-pink-600' },
                                            { step: '4', title: 'Shape with Macros 1-2', desc: 'M1 = Tone/Brightness • M2 = Character/Timbre', gradient: 'from-orange-500 to-orange-600' },
                                            { step: '5', title: 'Check Vectorscope (Bass)', desc: 'Must show vertical line → Set Width to 0%', gradient: 'from-green-500 to-green-600' },
                                        ].map((item) => (
                                            <div key={item.step} className="flex items-center gap-3 p-3 rounded-lg text-sm hover:bg-white/5 transition-all bg-white/5">
                                                <div className={`w-7 h-7 rounded-full font-bold flex items-center justify-center text-sm shrink-0 bg-gradient-to-r ${item.gradient} text-white shadow-lg`}>
                                                    {item.step}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-white">{item.title}</span>
                                                    <span className="text-xs text-gray-400">{item.desc}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-3 border-t text-xs text-center border-white/10 text-gray-500">
                                        ⚠️ Bass: No reverb • No HP filter • Always mono
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ==================== STUDY MODULES SECTION ==================== */}
                        <div className="relative">
                            {/* Study Modules Header */}
                            <div className="sticky top-0 z-30 pt-8 mb-8 flex flex-col items-center justify-center gap-6 pb-4">
                                {/* Title with decorative lines */}
                                <div className="flex items-center gap-6 w-full justify-center opacity-90">
                                    <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-gray-500"></div>
                                    <h3
                                        className={`${fredoka.className} text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[0.2em] select-none bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-flow`}
                                        style={{
                                            filter: 'drop-shadow(0 0 20px rgba(168,85,247,0.6)) drop-shadow(0 0 40px rgba(59,130,246,0.4))',
                                            backgroundSize: '300% 300%',
                                        }}
                                    >
                                        Study Modules
                                    </h3>
                                    <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-gray-500"></div>
                                </div>

                                {/* Pill Tabs */}
                                <div className="flex flex-wrap gap-2 md:gap-4 p-1 rounded-full backdrop-blur-xl border bg-white/10 border-white/10">
                                    {(['learning', 'data', 'workflow', 'reference'] as StudyTab[]).map((tab) => {
                                        const isActive = activeTab === tab;
                                        const colors: Record<StudyTab, { bg: string; shadow: string }> = {
                                            learning: { bg: 'bg-cyan-500', shadow: 'shadow-cyan-500/50' },
                                            data: { bg: 'bg-purple-600', shadow: 'shadow-purple-500/50' },
                                            workflow: { bg: 'bg-indigo-500', shadow: 'shadow-indigo-500/50' },
                                            reference: { bg: 'bg-purple-500', shadow: 'shadow-purple-500/50' }
                                        };
                                        return (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`rounded-full px-4 md:px-6 py-2 text-xs font-extrabold transition-all duration-300 capitalize cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${isActive ? `${colors[tab].bg} text-white scale-105 shadow-lg ${colors[tab].shadow}` : 'bg-white/10 text-gray-400 hover:bg-white/15 hover:text-white'}`}
                                            >
                                                {tab}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Tab Content Container */}
                            <div className="min-h-[500px]">
                                {activeTab === 'learning' && <LearningTab data={flexData} />}
                                {activeTab === 'data' && <DataTab data={flexData} />}
                                {activeTab === 'workflow' && <WorkflowTab data={flexData} />}
                                {activeTab === 'reference' && <ReferenceTab data={flexData} />}
                            </div>
                        </div>

                        {/* ==================== FOOTER CARD ==================== */}
                        <div className="mt-8 rounded-xl h-16 w-full flex items-center justify-center bg-gradient-to-r from-slate-800/80 via-slate-700/90 to-slate-800/95 border border-purple-500/10 shadow-xl">
                            <div className="flex items-center justify-between w-full px-8">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold tracking-wide text-gray-400 opacity-70">
                                        © 2026 — FL Studio Master Hub
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="text-xs uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-white/10 text-gray-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
                                        Docs
                                    </button>
                                    <button className="text-xs uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-white/10 text-gray-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
                                        Feedback
                                    </button>
                                    <button className="text-xs uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full border transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400/50 text-purple-400 border-purple-500/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
                                        Explore Plugins
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

// ==================== TAB COMPONENTS ====================

const LearningTab = ({ data }: { data: any }) => (
    <div className="flex flex-col gap-6 animate-fade">
        {/* Top Row: 3 Small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="FLEX vs. The World" color="cyan" icon={<Circle className="w-4 h-4" />}>
                <div className="text-sm space-y-3 text-purple-200">
                    <div>
                        <strong className="text-white">vs. Sytrus:</strong> Deep FM playground. Use Sytrus for from-scratch design, FLEX for mix-ready FM bass <em>now</em>.
                    </div>
                    <div>
                        <strong className="text-white">vs. Harmor:</strong> Additive beast. Use Harmor for resynthesis/extreme manipulation, FLEX for "bread and butter" sounds.
                    </div>
                    <div>
                        <strong className="text-white">vs. DirectWave:</strong> Use FLEX for Image-Line&apos;s quality samples with better UI. DirectWave for custom recordings.
                    </div>
                    <div className="pt-2 border-t border-white/10">
                        <span className="text-cyan-400">✓ Speed priority</span> &nbsp;|&nbsp;
                        <span className="text-cyan-400">✓ "Real" instruments</span> &nbsp;|&nbsp;
                        <span className="text-cyan-400">✓ Beginner-friendly</span>
                    </div>
                </div>
            </Card>
            <Card title="Master Effects Modes" color="cyan" icon={<Hexagon className="w-4 h-4" />}>
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b text-gray-400 border-white/10">
                            <th className="pb-2 text-left">Type</th>
                            <th className="text-left">Character</th>
                            <th className="text-left">Best For</th>
                        </tr>
                    </thead>
                    <tbody className="text-purple-200">
                        <tr><td className="py-1.5 font-bold text-white">Limiter</td><td>Clean, transparent</td><td>Default (0-15% Pre)</td></tr>
                        <tr><td className="py-1.5 font-bold text-green-400">Warming</td><td>Soft saturation</td><td>Analog warmth</td></tr>
                        <tr><td className="py-1.5 font-bold text-orange-400">Heating</td><td>Hard compression</td><td>Drums, punch</td></tr>
                        <tr><td className="py-1.5 font-bold text-pink-400">Distortion</td><td>Hard clipping</td><td>808s, aggression</td></tr>
                    </tbody>
                </table>
                <div className="mt-3 text-sm p-2 rounded-lg bg-cyan-500/10">
                    <strong className="text-cyan-400">Delay Types:</strong>
                    <span className="text-gray-300"> Fake Stereo (Haas) | True Stereo | Ping Pong</span>
                </div>
            </Card>
            <Card title="Visual Analysis Guide" color="cyan" icon={<Triangle className="w-4 h-4" />}>
                <div className="text-sm space-y-2 text-purple-200">
                    <div><strong className="text-white">Oscilloscope:</strong> Shape of wave. Sine=smooth, Saw=buzz.</div>
                    <div><strong className="text-white">Spectrogram:</strong> Frequency over time. Bright=loud.</div>
                    <div><strong className="text-white">Vectorscope:</strong> Stereo width. <em>Bass MUST be vertical!</em></div>
                    <div><strong className="text-white">Histogram:</strong> Bass vs. treble balance.</div>
                </div>
                <div className="mt-3 text-sm px-3 py-2 rounded-lg font-bold text-center bg-cyan-500 text-black">
                    Double-click logo to cycle themes!
                </div>
            </Card>
        </div>
        {/* Bottom Row: 2 Wide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Essential Shortcuts & Golden Rules" color="white" icon={<Sparkles className="w-4 h-4" />} wide>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <strong className="block mb-3 text-base text-cyan-400">Keyboard Shortcuts</strong>
                        <table className="w-full">
                            <tbody className="text-gray-300">
                                <tr><td className="py-1"><code className="px-2 py-1 rounded text-sm bg-white/10">Alt + Click</code></td><td>Reset parameter</td></tr>
                                <tr><td className="py-1"><code className="px-2 py-1 rounded text-sm bg-white/10">Alt + Drag</code></td><td>Fine adjust</td></tr>
                                <tr><td className="py-1"><code className="px-2 py-1 rounded text-sm bg-white/10">Ctrl + ↑/↓</code></td><td>Browse presets</td></tr>
                                <tr><td className="py-1"><code className="px-2 py-1 rounded text-sm bg-white/10">Shift + F</code></td><td>Favorite preset</td></tr>
                                <tr><td className="py-1"><code className="px-2 py-1 rounded text-sm bg-white/10">Right-Click</code></td><td>Create automation</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <strong className="block mb-3 text-base text-cyan-400">Golden Rules</strong>
                        <ul className="space-y-1.5 text-gray-300">
                            <li>✓ Lock Master Volume when browsing</li>
                            <li>✓ Bass MUST be mono (Vectorscope)</li>
                            <li>✓ NO reverb on bass—ever!</li>
                            <li>✓ High Pass everything except kick/bass</li>
                            <li>✓ Short release on bass (5-10%)</li>
                            <li>✓ Automate for movement (static=boring)</li>
                        </ul>
                    </div>
                </div>
            </Card>
            <Card title="Quick Problem Solver" color="white" icon={<BarChart3 className="w-4 h-4" />} wide>
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b text-gray-400 border-white/10">
                            <th className="pb-2 text-left">Symptom</th>
                            <th className="text-left">Quick Fix</th>
                        </tr>
                    </thead>
                    <tbody className="text-purple-200">
                        <tr><td className="py-2 text-white">Too bright/harsh</td><td>Lower Cutoff OR LP filter @ 8kHz</td></tr>
                        <tr><td className="py-2 text-white">Too dark/muffled</td><td>Raise Cutoff OR disable LP filter</td></tr>
                        <tr><td className="py-2 text-white">Too wet/reverby</td><td>Lower Reverb Mix to 0-20%</td></tr>
                        <tr><td className="py-2 text-white">Never stops</td><td>Lower Release (R) to 5-15%</td></tr>
                        <tr><td className="py-2 text-white">Click at start</td><td>Raise Attack (A) to 2-5%</td></tr>
                        <tr><td className="py-2 text-white">Bass not mono</td><td>Check Vectorscope, lower Width macro</td></tr>
                        <tr><td className="py-2 text-white">Has rhythm/arp</td><td>Click Arp icon to grey (disable)</td></tr>
                    </tbody>
                </table>
            </Card>
        </div >
    </div >
);

const DataTab = ({ data }: { data: any }) => (
    <div className="flex flex-col gap-6 animate-fade">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Envelope Shapes" color="blue" icon={<TrendingUp className="w-4 h-4" />}>
                <div className="space-y-2">
                    {[
                        { name: 'Sharp Pluck', values: 'A:0 D:30 S:0 R:15', use: 'Bells, Guitar' },
                        { name: 'Atmospheric Pad', values: 'A:70 D:0 S:100 R:70', use: 'Cinematic, Drone' },
                        { name: 'Punchy 808', values: 'A:0 D:20 S:85 R:8', use: 'Bass, Sub' },
                        { name: 'Piano', values: 'A:0 D:55 S:35 R:45', use: 'Keys, Natural' },
                    ].map((env) => (
                        <div key={env.name} className="flex items-center justify-between text-sm p-2 rounded-lg bg-blue-500/10">
                            <span className="font-bold text-white">{env.name}</span>
                            <code className="px-2 py-1 rounded bg-black/30 text-blue-400 text-xs">{env.values}</code>
                            <span className="text-gray-400 text-xs">{env.use}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-3 text-xs text-center text-gray-500">
                    0%=Instant | 50%=Medium | 100%=3-5s
                </div>
            </Card>
            <Card title="Macro Archetypes" color="blue" icon={<Circle className="w-4 h-4" />}>
                <div className="space-y-2 text-sm">
                    <div className="p-3 rounded-lg bg-blue-500/10">
                        <div className="font-bold mb-1 text-blue-400">Cinematic Pad Wash</div>
                        <div className="text-gray-300">Filter: 40-60% | Movement: 70% | Unison: 80%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-500/10">
                        <div className="font-bold mb-1 text-pink-400">Aggressive 808</div>
                        <div className="text-gray-300">Drive: High | Reverb: 0% | Limiter: Distortion</div>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-500/10">
                        <div className="font-bold mb-1 text-cyan-400">Lo-Fi Keys</div>
                        <div className="text-gray-300">Detune: Med | Noise: Low | Cutoff: Low</div>
                    </div>
                </div>
            </Card>
            <Card title="File System" color="blue" icon={<Folder className="w-4 h-4" />}>
                <div className="text-sm space-y-3 text-purple-200">
                    <div>
                        <strong className="text-white">Packs Location:</strong>
                        <code className="block mt-1 text-xs p-2 rounded bg-black/30 text-blue-400">
                            Documents\Image-Line\FLEX\Packs
                        </code>
                    </div>
                    <div>
                        <strong className="text-white">File Format:</strong>
                        <span className="ml-2">.flexpack (encrypted)</span>
                    </div>
                    <div>
                        <strong className="text-white">Engine Types:</strong>
                        <div className="flex flex-wrap gap-1 mt-2">
                            {['Subtractive', 'Wavetable', 'FM', 'Multisample'].map(e => (
                                <span key={e} className="px-2 py-1 rounded text-xs bg-white/10 text-gray-300">{e}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Genre Templates" color="white" icon={<Music className="w-4 h-4" />} wide>
                <div className="space-y-2 overflow-y-auto">
                    {[
                        { name: 'Lo-Fi Hip Hop', bpm: '70-90', filter: 'LP 12dB @ 2-3kHz', limiter: 'Warming', tips: 'Detune 30-50%, Noise 10-20%' },
                        { name: 'Modern Trap', bpm: '130-160', filter: 'HP (808 space)', limiter: 'Distortion', tips: 'High reverb on leads, dry bass' },
                        { name: 'Cinematic', bpm: '60-120', filter: 'Off (full range)', limiter: 'Transparent', tips: 'Long A/R, automate dynamics' },
                        { name: 'Trance', bpm: '135-140', filter: 'Open 70-90%', limiter: 'Clean', tips: 'Huge reverb 5s+, 1/4 dot delay' },
                        { name: 'Deep House', bpm: '120-125', filter: 'Gentle LP @ 12kHz', limiter: 'Warming', tips: 'Mono bass, warm chords' },
                    ].map((g) => (
                        <div key={g.name} className="flex items-center gap-3 p-3 rounded-lg text-sm bg-white/5">
                            <div className="w-28">
                                <div className="font-bold text-white">{g.name}</div>
                                <div className="text-xs text-purple-400">{g.bpm} BPM</div>
                            </div>
                            <div className="flex-1 text-gray-300">
                                <div><strong>Filter:</strong> {g.filter} | <strong>Limiter:</strong> {g.limiter}</div>
                                <div className="text-xs mt-1 text-gray-400">★ {g.tips}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
            <Card title="% to Time Guide" color="white" icon={<Clock className="w-4 h-4" />} wide>
                <div className="grid grid-cols-2 gap-4">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b text-gray-400 border-white/10">
                                <th className="pb-2 text-left">%</th>
                                <th className="text-left">Time</th>
                                <th className="text-left">Feel</th>
                            </tr>
                        </thead>
                        <tbody className="text-purple-200">
                            <tr><td className="py-1 font-bold text-green-400">0%</td><td>Instant</td><td>Hard attack</td></tr>
                            <tr><td className="py-1 font-bold text-cyan-400">10%</td><td>10-30ms</td><td>Very fast</td></tr>
                            <tr><td className="py-1 font-bold text-blue-400">25%</td><td>50-100ms</td><td>Fast</td></tr>
                            <tr><td className="py-1 font-bold text-purple-400">50%</td><td>200-500ms</td><td>Medium</td></tr>
                            <tr><td className="py-1 font-bold text-orange-400">75%</td><td>1-2s</td><td>Slow</td></tr>
                            <tr><td className="py-1 font-bold text-pink-400">100%</td><td>3-5s+</td><td>Very slow</td></tr>
                        </tbody>
                    </table>
                    <div className="text-sm space-y-2 text-gray-300">
                        <div className="p-3 rounded-lg bg-purple-500/10">
                            <strong className="text-purple-400">Genre Approach:</strong>
                            <ul className="mt-2 space-y-1 text-sm">
                                <li>EDM: Fast attacks, medium R</li>
                                <li>Ambient: Long A and R</li>
                                <li>Hip-Hop: Sharp A, short R</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
);

const WorkflowTab = ({ data }: { data: any }) => (
    <div className="flex flex-col gap-6 animate-fade">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Preset Surfing with Locks" color="purple" icon={<Zap className="w-4 h-4" />}>
                <div className="text-sm space-y-3 text-purple-200">
                    <div className="p-3 rounded-lg bg-purple-500/10">
                        <strong className="text-purple-400">Enable Locks:</strong>
                        <div className="text-gray-300 mt-1">Click FLEX Logo → "Show panel locks" → Lock icons appear</div>
                    </div>
                    <div>
                        <strong className="text-white">The "Dry Search":</strong>
                        <div className="text-gray-300 mt-1">Lock Delay & Reverb at 0% → Browse raw sounds</div>
                    </div>
                    <div>
                        <strong className="text-white">The "Rhythm Fix":</strong>
                        <div className="text-gray-300 mt-1">Turn off Arp → Lock it → Load arp presets as playable</div>
                    </div>
                    <div>
                        <strong className="text-white">The "Envelope Tamer":</strong>
                        <div className="text-gray-300 mt-1">Set short Release → Lock → No muddy bass tails</div>
                    </div>
                </div>
            </Card>
            <Card title="Instrument Workflows" color="purple" icon={<Music className="w-4 h-4" />}>
                <div className="space-y-3 text-sm">
                    <div className="p-3 rounded-lg bg-purple-500/10">
                        <div className="font-bold mb-2 text-purple-400">Realistic Pianos</div>
                        <ul className="space-y-1 text-gray-300">
                            <li>• Limiter: "Warming" for analog feel</li>
                            <li>• HP Filter @ 100-150Hz to clear mud</li>
                            <li>• Check velocity macro for dynamics</li>
                        </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-500/10">
                        <div className="font-bold mb-2 text-pink-400">808s & Bass</div>
                        <ul className="space-y-1 text-gray-300">
                            <li>• Limiter: "Distortion" for grit</li>
                            <li>• Reverb: 0% ALWAYS</li>
                            <li>• Vectorscope = vertical line (mono)</li>
                        </ul>
                    </div>
                </div>
            </Card>
            <Card title="Macro Sound Design" color="purple" icon={<Hexagon className="w-4 h-4" />}>
                <div className="text-sm space-y-3 text-purple-200">
                    <div>
                        <strong className="block mb-2 text-purple-400">Meta-Control Power</strong>
                        <p className="text-gray-300">One Macro controls 10+ underlying parameters. Range is limited—impossible to make "bad" sounds.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-500/10">
                        <strong className="text-white">Common Archetypes:</strong>
                        <ul className="mt-2 space-y-1 text-gray-300">
                            <li><strong>1:</strong> Filter/Tone (brightness)</li>
                            <li><strong>2:</strong> Timbre/Character</li>
                            <li><strong>3-4:</strong> Envelope/Movement</li>
                            <li><strong>5-8:</strong> FX amounts</li>
                        </ul>
                    </div>
                    <div className="text-sm px-3 py-2 rounded-lg text-center bg-purple-600 text-white font-bold">
                        Alt + Click = Reset to designer default
                    </div>
                </div>
            </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Creative Automation" color="white" icon={<TrendingUp className="w-4 h-4" />} wide>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <strong className="block mb-3 text-base text-purple-400">EDM & Bass Music</strong>
                        <div className="space-y-2 text-gray-300">
                            <div className="p-3 rounded-lg bg-white/5">
                                <strong className="text-cyan-400">The "Wub":</strong>
                                <div>Filter Cutoff → Fast rhythmic LFO</div>
                            </div>
                            <div className="p-3 rounded-lg bg-white/5">
                                <strong className="text-cyan-400">The "Build-Up":</strong>
                                <div>Pitch + Reverb → Ramp up 4-8 bars</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <strong className="block mb-3 text-base text-purple-400">Cinematic & Lo-Fi</strong>
                        <div className="space-y-2 text-gray-300">
                            <div className="p-3 rounded-lg bg-white/5">
                                <strong className="text-blue-400">The "Swell":</strong>
                                <div>Expression macro → Slow curved ramps</div>
                            </div>
                            <div className="p-3 rounded-lg bg-white/5">
                                <strong className="text-blue-400">The "Distance":</strong>
                                <div>↑ Reverb + ↓ Cutoff → Push to "fog"</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 p-3 rounded-lg text-sm bg-red-500/10 text-pink-400">
                    ⚠️ Avoid instant jumps on Delay Time/Phase (causes clicks). Automate after FLEX with Fruity Balance.
                </div>
            </Card>
            <Card title="The Macro Link Trick" color="white" icon={<Sparkles className="w-4 h-4" />} wide>
                <div className="text-sm text-purple-200">
                    <p className="mb-4 text-gray-300">
                        <strong>Goal:</strong> Control multiple parameters with ONE automation clip.
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                        <li><strong>Right-Click</strong> Macro 1 (e.g., "Filter") → <strong>"Link to controller"</strong></li>
                        <li><strong>Right-Click</strong> Reverb Mix → <strong>"Link to controller"</strong></li>
                        <li>Uncheck <strong>"Remove conflicts"</strong> → Select same controller</li>
                        <li className="p-3 rounded-lg mt-3 bg-green-500/10 text-green-400">
                            ✓ Result: One clip controls Filter + Reverb simultaneously!
                        </li>
                    </ol>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-center">
                        <div className="p-2 rounded-lg bg-white/5">
                            <div className="text-white font-bold">1. Pick Preset</div>
                            <div className="text-gray-400">Browse → Lock</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5">
                            <div className="text-white font-bold">2. Tweak Macros</div>
                            <div className="text-gray-400">Alt+Click reset</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5">
                            <div className="text-white font-bold">3. Automate</div>
                            <div className="text-gray-400">Link → Movement</div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
);

const ReferenceTab = ({ data }: { data: any }) => (
    <div className="flex flex-col gap-6 animate-fade">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Synthesis Engine" color="green" icon={<Zap className="w-4 h-4" />}>
                <div className="text-sm space-y-2 text-purple-200">
                    <p className="text-gray-300">FLEX runs a <strong>hybrid engine</strong>—not just a sample player:</p>
                    <div className="space-y-1">
                        {[
                            { name: 'Subtractive', desc: 'Osc → Filter → Amp' },
                            { name: 'Wavetable', desc: 'Scanning wave frames' },
                            { name: 'Multisample', desc: 'Velocity-layered recordings' },
                            { name: 'FM/AM', desc: 'Metallic and tremolo textures' },
                        ].map(e => (
                            <div key={e.name} className="flex justify-between items-center p-2 rounded-lg bg-green-500/10">
                                <span className="font-bold text-green-400">{e.name}</span>
                                <span className="text-gray-400 text-xs">{e.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
            <Card title="Reverb by Genre" color="green" icon={<Music className="w-4 h-4" />}>
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b text-gray-400 border-white/10">
                            <th className="pb-2 text-left">Genre</th>
                            <th className="text-left">Decay</th>
                            <th className="text-left">Mix</th>
                            <th className="text-left">Color</th>
                        </tr>
                    </thead>
                    <tbody className="text-purple-200">
                        <tr><td className="py-1.5 font-bold text-white">Lo-Fi</td><td>0.8-1.5s</td><td>10-20%</td><td>40%</td></tr>
                        <tr><td className="py-1.5 font-bold text-white">Pop/EDM</td><td>2-3s</td><td>25-35%</td><td>60%</td></tr>
                        <tr><td className="py-1.5 font-bold text-white">Cinematic</td><td>5s+</td><td>40-50%</td><td>65%</td></tr>
                        <tr><td className="py-1.5 font-bold text-white">Techno</td><td>1.5-2.5s</td><td>15-25%</td><td>30%</td></tr>
                        <tr><td className="py-1.5 font-bold text-white">Trance</td><td>4-6s</td><td>45-55%</td><td>75%</td></tr>
                    </tbody>
                </table>
            </Card>
            <Card title="Frequency Zones" color="green" icon={<BarChart3 className="w-4 h-4" />}>
                <div className="text-sm space-y-1 text-purple-200">
                    {[
                        { hz: '20Hz', zone: 'Sub Bass', color: 'text-pink-400' },
                        { hz: '100Hz', zone: 'Bass Fundamental', color: 'text-orange-400' },
                        { hz: '200Hz', zone: 'Bass Harmonics', color: 'text-purple-400' },
                        { hz: '500Hz', zone: 'Muddy Zone ⚠️', color: 'text-gray-500' },
                        { hz: '1kHz', zone: 'Midrange Core', color: 'text-blue-400' },
                        { hz: '4kHz', zone: 'Vocal Clarity', color: 'text-cyan-400' },
                        { hz: '8kHz', zone: 'Brightness', color: 'text-green-400' },
                        { hz: '12kHz', zone: 'Air/Sparkle', color: 'text-white' },
                    ].map(f => (
                        <div key={f.hz} className="flex justify-between items-center">
                            <code className={`px-2 py-1 rounded bg-black/30 ${f.color}`}>{f.hz}</code>
                            <span className="text-gray-300">{f.zone}</span>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Mixing Checklist" color="white" icon={<Sparkles className="w-4 h-4" />} wide>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                        {[
                            { check: 'Bass in mono', tip: 'Vectorscope = vertical' },
                            { check: 'No reverb on bass', tip: '0% always' },
                            { check: 'HP non-bass elements', tip: '180Hz minimum' },
                            { check: 'Master Volume locked', tip: 'When browsing presets' },
                            { check: 'Release times short enough', tip: 'No overlap/mud' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white/5">
                                <span className="text-green-400">✓</span>
                                <div>
                                    <div className="text-white">{item.check}</div>
                                    <div className="text-xs text-gray-400">{item.tip}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-2">
                        {[
                            { check: 'Limiter appropriate', tip: 'Match genre (Warming/Distortion)' },
                            { check: 'Check mono compatibility', tip: 'Sum L+R, no phase cancel' },
                            { check: 'CPU usage acceptable', tip: 'Lower Unison if needed' },
                            { check: 'Automation adds movement', tip: 'Static = boring' },
                            { check: 'Vectorscope healthy', tip: 'No flat horizontal line' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white/5">
                                <span className="text-green-400">✓</span>
                                <div>
                                    <div className="text-white">{item.check}</div>
                                    <div className="text-xs text-gray-400">{item.tip}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
            <Card title="Quick Links & Recommended Packs" color="white" icon={<BookOpen className="w-4 h-4" />} wide>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <strong className="block mb-3 text-base text-green-400">Official Resources</strong>
                        <ul className="space-y-2 text-gray-300">
                            <li className="p-2 rounded-lg bg-white/5">
                                <a href="https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FLEX.htm" target="_blank" rel="noopener noreferrer" className="underline text-cyan-400 hover:text-cyan-300">
                                    Official Image-Line Manual
                                </a>
                            </li>
                            <li className="p-2 rounded-lg bg-white/5">
                                <a href="https://forum.image-line.com/viewforum.php?f=1983" target="_blank" rel="noopener noreferrer" className="underline text-cyan-400 hover:text-cyan-300">
                                    User Forum / FAQ
                                </a>
                            </li>
                            <li className="p-2 rounded-lg bg-white/5">
                                <span className="text-purple-300">Documents\Image-Line\FLEX\Packs</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="block mb-3 text-base text-green-400">Recommended Packs</strong>
                        <div className="space-y-1">
                            {[
                                { pack: 'Essential 808s', genres: 'Trap, House, DnB' },
                                { pack: 'Essential Keys', genres: 'Lo-Fi, R&B, Neo-Soul' },
                                { pack: 'Essential Strings', genres: 'Cinematic, Classical' },
                                { pack: 'Analog Synths', genres: 'Techno, Synthwave' },
                                { pack: 'Modern Synths', genres: 'Future Bass, EDM' },
                            ].map(p => (
                                <div key={p.pack} className="flex justify-between items-center p-2 rounded-lg text-xs bg-white/5">
                                    <span className="font-bold text-white">{p.pack}</span>
                                    <span className="text-gray-400">{p.genres}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
);

// ==================== REUSABLE CARD COMPONENT ====================
const Card = ({
    title,
    color,
    children,
    wide = false,
    icon
}: {
    title: string;
    color: 'cyan' | 'blue' | 'purple' | 'green' | 'white';
    children: React.ReactNode;
    wide?: boolean;
    icon?: React.ReactNode;
}) => {
    const colorMap = {
        cyan: 'text-cyan-400',
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        green: 'text-green-400',
        white: 'text-white',
    };

    return (
        <div className={`rounded-xl border ${wide ? 'p-6' : 'p-5'} overflow-y-auto transition-all flex flex-col min-h-[280px] bg-slate-800/50 border-white/10 hover:border-white/20`}>
            <h3 className={`text-sm font-bold mb-4 flex items-center gap-2 ${colorMap[color]}`}>
                {icon}
                {title}
            </h3>
            {children}
        </div>
    );
};
