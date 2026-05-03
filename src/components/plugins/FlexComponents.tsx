'use client';

import React, { useState } from 'react';
import {
    ChevronDown,
    ChevronRight,
    Sliders,
    Music,
    Eye,
    Zap,
    BookOpen,
    Keyboard,
    AlertTriangle,
    CheckCircle,
    Copy,
    Check,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

// ==================== TYPE DEFINITIONS ====================

interface SynthesisEngine {
    name: string;
    icon: string;
    description: string;
}

interface MacroArchetype {
    macro: number;
    commonFunction: string;
    examples: string;
}

interface GenreTemplate {
    genre: string;
    bpm: string;
    character: string;
    macros: Record<string, string>;
    filter?: string;
    limiter?: string;
    reverb?: string;
    delay?: string;
    tips?: string[];
}

interface InstrumentWorkflow {
    instrument: string;
    pack: string;
    quickSetup: {
        macros: Record<string, string>;
        envelope?: Record<string, string>;
        masterFilter?: string;
        reverb?: string;
        delay?: string;
        limiter?: string;
    };
    commonMistakes?: string[];
    automationIdeas?: string[];
}

interface VisualTool {
    name: string;
    icon: string;
    function: string;
    useCase: string;
}

interface LimiterMode {
    name: string;
    character: string;
    preGain: string;
    goodFor: string;
}

interface LearningPath {
    level: string;
    duration: string;
    goal: string;
    steps: string[];
}

interface KeyShortcut {
    shortcut: string;
    action: string;
}

interface EnvelopeShape {
    name: string;
    instrumentType: string;
    visualAscii: string;
    settings: Record<string, string>;
    soundCharacter: string;
    useCases: string[];
}

interface SpatialPreset {
    name: string;
    instrumentType: string;
    description: string;
    reverbSettings?: { [key: string]: string | undefined };
    delaySettings?: { [key: string]: string | undefined };
    genreFit: string[];
}

interface LimiterPreset {
    name: string;
    useCase: string;
    settings: Record<string, string>;
    sonicCharacter: string;
    genreFit: string[];
}

interface FilterCurve {
    name: string;
    useCase: string;
    settings: Record<string, string>;
    description: string;
    tips: string[];
}

interface CreativeAutomation {
    description: string;
    byGenre: Record<string, Array<{
        name: string;
        target: string;
        shape: string;
        effect: string;
    }>>;
    macroLinkTrick: string;
    traps: string[];
}

// ==================== SYNTHESIS ENGINES ====================

export const SynthesisEnginesGrid = ({ engines }: { engines: SynthesisEngine[] }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {engines.map((engine, idx) => (
                <div
                    key={idx}
                    className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all text-center"
                >
                    <div className="text-3xl mb-2">{engine.icon}</div>
                    <h4 className="font-bold text-white text-sm mb-1">{engine.name}</h4>
                    <p className="text-xs text-gray-400">{engine.description}</p>
                </div>
            ))}
        </div>
    );
};

// ==================== MACRO SYSTEM ====================

export const MacroSliderDisplay = ({ archetypes }: { archetypes: MacroArchetype[] }) => {
    return (
        <div className="space-y-3">
            {archetypes.map((arch, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shrink-0">
                        {arch.macro}
                    </div>
                    <div className="flex-grow min-w-0">
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-bold text-white text-sm">{arch.commonFunction}</span>
                        </div>
                        <p className="text-xs text-gray-400 truncate">{arch.examples}</p>
                    </div>
                    <Sliders className="w-4 h-4 text-cyan-400 shrink-0" />
                </div>
            ))}
        </div>
    );
};

// ==================== GENRE TEMPLATES ====================

export const GenreTemplateCard = ({ template }: { template: GenreTemplate }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:border-indigo-500/40 transition-all cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-white">{template.genre}</h4>
                <Badge variant="outline" className="text-xs">{template.bpm} BPM</Badge>
            </div>
            <p className="text-sm text-gray-400 mb-3 italic">&quot;{template.character}&quot;</p>

            {isExpanded && (
                <div className="space-y-3 pt-3 border-t border-white/10">
                    <div>
                        <h5 className="text-xs font-bold text-cyan-400 uppercase mb-2">Macros</h5>
                        <div className="space-y-1">
                            {Object.entries(template.macros).map(([key, val]) => (
                                <div key={key} className="flex justify-between text-xs">
                                    <span className="text-gray-400">{key}</span>
                                    <span className="text-white font-mono">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {template.filter && (
                        <div className="flex justify-between text-xs">
                            <span className="text-orange-400">Filter</span>
                            <span className="text-white">{template.filter}</span>
                        </div>
                    )}

                    {template.limiter && (
                        <div className="flex justify-between text-xs">
                            <span className="text-red-400">Limiter</span>
                            <span className="text-white">{template.limiter}</span>
                        </div>
                    )}

                    {template.reverb && (
                        <div className="flex justify-between text-xs">
                            <span className="text-purple-400">Reverb</span>
                            <span className="text-white">{template.reverb}</span>
                        </div>
                    )}

                    {template.tips && (
                        <div className="pt-2">
                            <h5 className="text-xs font-bold text-yellow-400 uppercase mb-1">Tips</h5>
                            <ul className="space-y-1">
                                {template.tips.map((tip, i) => (
                                    <li key={i} className="text-xs text-gray-300 flex gap-2">
                                        <span className="text-yellow-400">•</span> {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            <div className="flex justify-center mt-2">
                {isExpanded ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
            </div>
        </div>
    );
};

export const GenreTemplatesGrid = ({ templates }: { templates: GenreTemplate[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template, idx) => (
                <GenreTemplateCard key={idx} template={template} />
            ))}
        </div>
    );
};

// ==================== INSTRUMENT WORKFLOWS ====================

export const InstrumentWorkflowTabs = ({ workflows }: { workflows: InstrumentWorkflow[] }) => {
    const [activeTab, setActiveTab] = useState(0);
    const workflow = workflows[activeTab];

    return (
        <div className="space-y-4">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2">
                {workflows.map((wf, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === idx
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
                            }`}
                    >
                        {wf.instrument}
                    </button>
                ))}
            </div>

            {/* Active Tab Content */}
            <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                    <Music className="w-6 h-6 text-cyan-400" />
                    <div>
                        <h3 className="font-bold text-white text-lg">{workflow.instrument}</h3>
                        <p className="text-sm text-gray-400">Pack: {workflow.pack}</p>
                    </div>
                </div>

                {/* Quick Setup */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <h4 className="text-sm font-bold text-cyan-400 uppercase mb-3">Macro Settings</h4>
                        <div className="space-y-2">
                            {Object.entries(workflow.quickSetup.macros).map(([key, val]) => (
                                <div key={key} className="flex justify-between text-sm">
                                    <span className="text-gray-300">{key}</span>
                                    <span className="text-white font-mono">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {workflow.quickSetup.envelope && (
                        <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                            <h4 className="text-sm font-bold text-purple-400 uppercase mb-3">Envelope</h4>
                            <div className="space-y-2">
                                {Object.entries(workflow.quickSetup.envelope).map(([key, val]) => (
                                    <div key={key} className="flex justify-between text-sm">
                                        <span className="text-gray-300">{key}</span>
                                        <span className="text-white font-mono">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Effects Settings */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {workflow.quickSetup.masterFilter && (
                        <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-center">
                            <div className="text-xs text-orange-400 uppercase mb-1">Filter</div>
                            <div className="text-sm text-white font-medium">{workflow.quickSetup.masterFilter}</div>
                        </div>
                    )}
                    {workflow.quickSetup.reverb && (
                        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                            <div className="text-xs text-blue-400 uppercase mb-1">Reverb</div>
                            <div className="text-sm text-white font-medium">{workflow.quickSetup.reverb}</div>
                        </div>
                    )}
                    {workflow.quickSetup.delay && (
                        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                            <div className="text-xs text-green-400 uppercase mb-1">Delay</div>
                            <div className="text-sm text-white font-medium">{workflow.quickSetup.delay}</div>
                        </div>
                    )}
                    {workflow.quickSetup.limiter && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
                            <div className="text-xs text-red-400 uppercase mb-1">Limiter</div>
                            <div className="text-sm text-white font-medium">{workflow.quickSetup.limiter}</div>
                        </div>
                    )}
                </div>

                {/* Mistakes & Automation Ideas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {workflow.commonMistakes && (
                        <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                            <h4 className="text-sm font-bold text-red-400 uppercase mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> Common Mistakes
                            </h4>
                            <ul className="space-y-1">
                                {workflow.commonMistakes.map((mistake, i) => (
                                    <li key={i} className="text-sm text-gray-300 flex gap-2">
                                        <span className="text-red-400">✗</span> {mistake}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {workflow.automationIdeas && (
                        <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                            <h4 className="text-sm font-bold text-green-400 uppercase mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Automation Ideas
                            </h4>
                            <ul className="space-y-1">
                                {workflow.automationIdeas.map((idea, i) => (
                                    <li key={i} className="text-sm text-gray-300 flex gap-2">
                                        <span className="text-green-400">→</span> {idea}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ==================== VISUAL ANALYSIS TOOLS ====================

export const VisualAnalysisGrid = ({ tools }: { tools: VisualTool[] }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, idx) => (
                <div
                    key={idx}
                    className="p-5 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/30 transition-all"
                >
                    <div className="text-4xl mb-3">{tool.icon}</div>
                    <h4 className="font-bold text-white mb-1">{tool.name}</h4>
                    <p className="text-sm text-gray-400 mb-3">{tool.function}</p>
                    <div className="flex items-start gap-2 p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <Eye className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <p className="text-xs text-cyan-300">{tool.useCase}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

// ==================== MASTER EFFECTS CHAIN ====================

interface MasterEffectsChainProps {
    limiterModes: LimiterMode[];
}

export const MasterEffectsChainDiagram = ({ limiterModes }: MasterEffectsChainProps) => {
    const stages = [
        { name: 'Master Filter', color: 'orange', desc: 'Global tone shaping' },
        { name: 'Delay', color: 'green', desc: 'Rhythmic echoes' },
        { name: 'Reverb', color: 'purple', desc: 'Spatial dimension' },
        { name: 'Limiter', color: 'red', desc: 'Dynamics control' }
    ];

    return (
        <div className="space-y-6">
            {/* Signal Flow */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
                {stages.map((stage, idx) => (
                    <React.Fragment key={idx}>
                        <div className={`px-4 py-3 rounded-lg bg-${stage.color}-500/20 border border-${stage.color}-500/40 text-center min-w-[120px]`}
                            style={{
                                backgroundColor: `rgba(${stage.color === 'orange' ? '249,115,22' : stage.color === 'green' ? '34,197,94' : stage.color === 'purple' ? '168,85,247' : '239,68,68'}, 0.1)`,
                                borderColor: `rgba(${stage.color === 'orange' ? '249,115,22' : stage.color === 'green' ? '34,197,94' : stage.color === 'purple' ? '168,85,247' : '239,68,68'}, 0.3)`
                            }}>
                            <div className="font-bold text-white text-sm">{stage.name}</div>
                            <div className="text-xs text-gray-400">{stage.desc}</div>
                        </div>
                        {idx < stages.length - 1 && (
                            <ChevronRight className="w-5 h-5 text-gray-500" />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Limiter Modes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {limiterModes.map((mode, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-slate-800/80 border border-red-500/20">
                        <h5 className="font-bold text-white mb-1">{mode.name}</h5>
                        <p className="text-xs text-gray-400 mb-2">{mode.character}</p>
                        <div className="flex justify-between text-xs">
                            <span className="text-red-400">Pre</span>
                            <span className="text-white font-mono">{mode.preGain}</span>
                        </div>
                        <p className="text-xs text-cyan-400 mt-2 italic">Good for: {mode.goodFor}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ==================== LEARNING PATHS ====================

export const LearningPathsSection = ({ paths }: { paths: LearningPath[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paths.map((path, idx) => (
                <div
                    key={idx}
                    className={`p-6 rounded-xl border-2 ${idx === 0 ? 'border-green-500/30 bg-green-500/5' :
                        idx === 1 ? 'border-yellow-500/30 bg-yellow-500/5' :
                            'border-purple-500/30 bg-purple-500/5'
                        }`}
                >
                    <div className="flex items-center gap-2 mb-3">
                        <BookOpen className={`w-5 h-5 ${idx === 0 ? 'text-green-400' : idx === 1 ? 'text-yellow-400' : 'text-purple-400'
                            }`} />
                        <h3 className="font-bold text-white">{path.level}</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{path.duration}</p>
                    <p className={`text-sm font-medium mb-4 ${idx === 0 ? 'text-green-400' : idx === 1 ? 'text-yellow-400' : 'text-purple-400'
                        }`}>Goal: {path.goal}</p>

                    <ol className="space-y-2">
                        {path.steps.map((step, stepIdx) => (
                            <li key={stepIdx} className="flex gap-2 text-sm">
                                <span className={`font-bold ${idx === 0 ? 'text-green-400' : idx === 1 ? 'text-yellow-400' : 'text-purple-400'
                                    }`}>{stepIdx + 1}.</span>
                                <span className="text-gray-300">{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    );
};

// ==================== KEYBOARD SHORTCUTS ====================

export const KeyboardShortcutsGrid = ({ shortcuts }: { shortcuts: KeyShortcut[] }) => {
    const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

    const copyShortcut = (shortcut: string, idx: number) => {
        navigator.clipboard.writeText(shortcut);
        setCopiedIdx(idx);
        setTimeout(() => setCopiedIdx(null), 2000);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {shortcuts.map((item, idx) => (
                <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-cyan-500/30 transition-all cursor-pointer group"
                    onClick={() => copyShortcut(item.shortcut, idx)}
                >
                    <div className="flex items-center gap-3">
                        <Keyboard className="w-4 h-4 text-cyan-400" />
                        <div>
                            <code className="text-sm text-cyan-300 font-mono">{item.shortcut}</code>
                            <p className="text-xs text-gray-400">{item.action}</p>
                        </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {copiedIdx === idx ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-500" />}
                    </div>
                </div>
            ))}
        </div>
    );
};

// ==================== ENHANCED TROUBLESHOOTING TABLE ====================

interface TroubleshootingItem {
    issue: string;
    solution: string;
}

export const TroubleshootingTable = ({ items }: { items: TroubleshootingItem[] }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-red-400 font-bold">Problem</th>
                        <th className="text-left py-3 px-4 text-green-400 font-bold">Solution</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, idx) => (
                        <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/50">
                            <td className="py-3 px-4 text-gray-300">{item.issue}</td>
                            <td className="py-3 px-4 text-gray-300">{item.solution}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// ==================== INTERFACE OVERVIEW DIAGRAM ====================

export const InterfaceOverviewDiagram = () => {
    return (
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-700 font-mono text-sm">
            <pre className="text-cyan-400 whitespace-pre overflow-x-auto">
                {`┌─────────────────────────────────────────┐
│  ANALYSIS DISPLAY (Visualizers)         │ ← TOP
├─────────────────────────────────────────┤
│  MACROS (8 Sliders) │ FILTER & ENVELOPE │ ← MIDDLE
├─────────────────────────────────────────┤
│  MASTER FX (Filter, Delay, Reverb, Lim) │ ← BOTTOM
└─────────────────────────────────────────┘`}
            </pre>
            <div className="mt-4 grid grid-cols-3 gap-4 text-xs">
                <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-center">
                    <span className="text-cyan-400">TOP</span>
                    <p className="text-gray-400">Waveform, Spectrogram, Vectorscope, Histogram</p>
                </div>
                <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-center">
                    <span className="text-purple-400">MIDDLE</span>
                    <p className="text-gray-400">8 Macro Controls + Filter/Envelope</p>
                </div>
                <div className="p-2 rounded bg-orange-500/10 border border-orange-500/20 text-center">
                    <span className="text-orange-400">BOTTOM</span>
                    <p className="text-gray-400">Master Effects Chain</p>
                </div>
            </div>
        </div>
    );
};

// ==================== FLEX PACKS DISPLAY ====================

interface FlexPacksProps {
    essential: string[];
    note: string;
}

export const FlexPacksDisplay = ({ essential, note }: FlexPacksProps) => {
    return (
        <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Music className="w-5 h-5 text-indigo-400" /> Essential Packs (Free with FL Studio)
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
                {essential.map((pack, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm">
                        {pack}
                    </Badge>
                ))}
            </div>
            <p className="text-sm text-gray-400 italic">{note}</p>
        </div>
    );
};

// ==================== ENVELOPE SHAPES ====================

export const EnvelopeShapesGrid = ({ shapes }: { shapes: EnvelopeShape[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shapes.map((shape, idx) => (
                <div
                    key={idx}
                    className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h4 className="font-bold text-white">{shape.name}</h4>
                            <p className="text-xs text-purple-400">{shape.instrumentType}</p>
                        </div>
                        <code className="px-2 py-1 rounded bg-slate-800 text-cyan-300 font-mono text-xs">
                            {shape.visualAscii}
                        </code>
                    </div>

                    <p className="text-sm text-gray-400 mb-3 italic">&quot;{shape.soundCharacter}&quot;</p>

                    <div className="grid grid-cols-5 gap-1 mb-3">
                        {Object.entries(shape.settings).map(([key, val]) => (
                            <div key={key} className="text-center p-1 rounded bg-slate-800/50">
                                <div className="text-xs text-purple-400 font-bold">{key.charAt(0)}</div>
                                <div className="text-xs text-white">{val}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-1">
                        {shape.useCases.slice(0, 3).map((useCase, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-purple-500/10">
                                {useCase}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

// ==================== SPATIAL PRESETS ====================

export const SpatialPresetsGrid = ({ presets }: { presets: SpatialPreset[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {presets.map((preset, idx) => (
                <div
                    key={idx}
                    className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all"
                >
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-white">{preset.name}</h4>
                        <Badge variant="outline" className="text-xs">{preset.instrumentType}</Badge>
                    </div>

                    <p className="text-sm text-gray-400 mb-3">{preset.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                        {preset.reverbSettings && (
                            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                <div className="text-xs font-bold text-purple-400 mb-2">Reverb</div>
                                {Object.entries(preset.reverbSettings).map(([k, v]) => (
                                    <div key={k} className="flex justify-between text-xs">
                                        <span className="text-gray-400">{k}</span>
                                        <span className="text-white font-mono">{v}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        {preset.delaySettings && (
                            <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                                <div className="text-xs font-bold text-green-400 mb-2">Delay</div>
                                {Object.entries(preset.delaySettings).map(([k, v]) => (
                                    <div key={k} className="flex justify-between text-xs">
                                        <span className="text-gray-400">{k}</span>
                                        <span className="text-white font-mono">{v}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-1">
                        {preset.genreFit.map((genre, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-blue-500/10">
                                {genre}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

// ==================== LIMITER PRESETS ====================

export const LimiterPresetsGrid = ({ presets }: { presets: LimiterPreset[] }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {presets.map((preset, idx) => (
                <div
                    key={idx}
                    className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-500/40 transition-all"
                >
                    <h4 className="font-bold text-white mb-1">{preset.name}</h4>
                    <p className="text-xs text-red-400 mb-2">{preset.useCase}</p>

                    <div className="space-y-1 mb-3">
                        {Object.entries(preset.settings).map(([k, v]) => (
                            <div key={k} className="flex justify-between text-xs">
                                <span className="text-gray-400">{k}</span>
                                <span className="text-white font-mono">{v}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-gray-400 italic mb-2">&quot;{preset.sonicCharacter}&quot;</p>

                    <div className="flex flex-wrap gap-1">
                        {preset.genreFit.slice(0, 3).map((genre, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-red-500/10">
                                {genre}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

// ==================== FILTER CURVES ====================

export const FilterCurvesGrid = ({ curves }: { curves: FilterCurve[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {curves.map((curve, idx) => (
                <div
                    key={idx}
                    className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all"
                >
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h4 className="font-bold text-white">{curve.name}</h4>
                            <p className="text-xs text-orange-400">{curve.useCase}</p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-3">{curve.description}</p>

                    <div className="p-2 rounded-lg bg-slate-800/50 mb-3">
                        <div className="text-xs font-bold text-orange-400 mb-2">Settings</div>
                        {Object.entries(curve.settings).map(([k, v]) => (
                            <div key={k} className="flex justify-between text-xs">
                                <span className="text-gray-400">{k}</span>
                                <span className="text-white font-mono">{v}</span>
                            </div>
                        ))}
                    </div>

                    {curve.tips.length > 0 && (
                        <div className="space-y-1">
                            {curve.tips.slice(0, 2).map((tip, i) => (
                                <div key={i} className="text-xs text-gray-300 flex gap-2">
                                    <span className="text-yellow-400">💡</span> {tip}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// ==================== GOLDEN RULES ====================

export const GoldenRulesSection = ({ rules }: { rules: string[] }) => {
    return (
        <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30">
            <h3 className="font-bold text-yellow-400 text-lg mb-4 flex items-center gap-2">
                ⭐ 10 Golden Rules of FLEX
            </h3>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {rules.map((rule, idx) => (
                    <li key={idx} className="flex gap-3 p-2 rounded-lg bg-slate-800/50">
                        <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-sm shrink-0">
                            {idx + 1}
                        </span>
                        <span className="text-sm text-gray-300">{rule}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

// ==================== CREATIVE AUTOMATION ====================

export const CreativeAutomationSection = ({ automation }: { automation: CreativeAutomation }) => {
    const [activeGenre, setActiveGenre] = useState(Object.keys(automation.byGenre)[0]);

    return (
        <div className="space-y-6">
            <p className="text-gray-400">{automation.description}</p>

            {/* Genre Tabs */}
            <div className="flex flex-wrap gap-2">
                {Object.keys(automation.byGenre).map((genre) => (
                    <button
                        key={genre}
                        onClick={() => setActiveGenre(genre)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeGenre === genre
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                            }`}
                    >
                        {genre}
                    </button>
                ))}
            </div>

            {/* Automation Techniques */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {automation.byGenre[activeGenre]?.map((technique, idx) => (
                    <div
                        key={idx}
                        className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                    >
                        <h4 className="font-bold text-white mb-2">{technique.name}</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex gap-2">
                                <span className="text-cyan-400">Target:</span>
                                <span className="text-gray-300">{technique.target}</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-purple-400">Shape:</span>
                                <span className="text-gray-300">{technique.shape}</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-green-400">Effect:</span>
                                <span className="text-gray-300">{technique.effect}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Macro Link Trick */}
            <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Pro Tip: Macro Link Trick
                </h4>
                <p className="text-sm text-gray-300">{automation.macroLinkTrick}</p>
            </div>

            {/* Traps to Avoid */}
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Automation Traps
                </h4>
                <ul className="space-y-1">
                    {automation.traps.map((trap, i) => (
                        <li key={i} className="text-sm text-gray-300 flex gap-2">
                            <span className="text-red-400">⚠</span> {trap}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// ==================== MIXING CHECKLIST ====================

export const MixingChecklist = ({ items }: { items: string[] }) => {
    const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

    const toggleItem = (idx: number) => {
        const newSet = new Set(checkedItems);
        if (newSet.has(idx)) {
            newSet.delete(idx);
        } else {
            newSet.add(idx);
        }
        setCheckedItems(newSet);
    };

    return (
        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20">
            <h3 className="font-bold text-green-400 text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Pre-Export Mixing Checklist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {items.map((item, idx) => (
                    <label
                        key={idx}
                        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all ${checkedItems.has(idx) ? 'bg-green-500/20' : 'bg-slate-800/50 hover:bg-slate-800'
                            }`}
                    >
                        <input
                            type="checkbox"
                            checked={checkedItems.has(idx)}
                            onChange={() => toggleItem(idx)}
                            className="w-4 h-4 rounded border-gray-500 text-green-500 focus:ring-green-500"
                        />
                        <span className={`text-sm ${checkedItems.has(idx) ? 'text-green-300 line-through' : 'text-gray-300'}`}>
                            {item}
                        </span>
                    </label>
                ))}
            </div>
            <div className="mt-4 text-sm text-gray-400">
                Progress: {checkedItems.size} / {items.length} completed
            </div>
        </div>
    );
};

// ==================== FREQUENCY ZONES CHART ====================

export const FrequencyZonesChart = ({ zones }: { zones: Record<string, string> }) => {
    const zoneColors: Record<string, string> = {
        '20Hz': 'from-red-500 to-red-600',
        '100Hz': 'from-orange-500 to-orange-600',
        '200Hz': 'from-yellow-500 to-yellow-600',
        '500Hz': 'from-yellow-600 to-yellow-700',
        '1kHz': 'from-green-500 to-green-600',
        '4kHz': 'from-cyan-500 to-cyan-600',
        '8kHz': 'from-blue-500 to-blue-600',
        '12kHz': 'from-purple-500 to-purple-600'
    };

    return (
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-700">
            <h3 className="font-bold text-white mb-4">Frequency Zones Reference</h3>
            <div className="space-y-2">
                {Object.entries(zones).map(([freq, name], idx) => (
                    <div key={idx} className="flex items-center gap-4">
                        <code className="w-16 text-right text-cyan-400 font-mono text-sm">{freq}</code>
                        <div
                            className={`flex-grow h-6 rounded bg-gradient-to-r ${zoneColors[freq] || 'from-gray-500 to-gray-600'} flex items-center px-3`}
                            style={{ maxWidth: `${50 + idx * 6}%` }}
                        >
                            <span className="text-xs text-white font-medium">{name}</span>
                        </div>
                    </div>
                ))}
            </div>
            <p className="mt-4 text-xs text-gray-400 italic">
                💡 High Pass filter everything except bass at 180-200Hz (500Hz Muddy Zone)
            </p>
        </div>
    );
};
