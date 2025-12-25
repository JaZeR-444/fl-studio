'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Download, 
  ExternalLink, 
  Zap, 
  HelpCircle, 
  Keyboard, 
  Copy, 
  Check, 
  AlertTriangle,
  Sliders,
  Ear
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { ExtendedPlugin } from '@/types/pluginTypes';

// --- Types ---
interface ActionPanelProps {
  plugin: ExtendedPlugin;
}

interface RecipeCardProps {
  recipe: NonNullable<ExtendedPlugin['recipes']>[number];
}

interface ControlsMapProps {
  controls: NonNullable<ExtendedPlugin['controls']>;
}

interface TroubleshootingProps {
  items: NonNullable<ExtendedPlugin['troubleshooting']>;
}

// --- Components ---

/**
 * Sticky Sidebar Action Panel
 * Replaces the static 'Specs' card with actionable utilities.
 */
export const ActionPanel = ({ plugin }: ActionPanelProps) => {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Primary Actions */}
      <div className="card-glass p-6 rounded-2xl border border-white/10">
        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" /> Quick Actions
        </h3>
        <div className="space-y-3">
          <button className="w-full py-3 px-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-[var(--primary)]/20 flex items-center justify-center gap-2">
            Open in FL Studio
          </button>
          <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Download Presets
          </button>
        </div>
      </div>

      {/* Plugin Specs (Refined) */}
      <div className="card-glass p-6 rounded-2xl border border-white/5">
        <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Specs</h3>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <span className="text-[var(--text-secondary)]">Category</span>
            <span className="text-white font-medium">{plugin.category}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <span className="text-[var(--text-secondary)]">CPU Load</span>
            <span className={`font-medium px-2 py-0.5 rounded ${
              plugin.cpuUsage?.toLowerCase().includes('low') ? 'bg-green-500/20 text-green-400' :
              plugin.cpuUsage?.toLowerCase().includes('moderate') ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {plugin.cpuUsage?.split(' ')[0] || 'Unknown'}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5">
            <span className="text-[var(--text-secondary)]">Native</span>
            <span className="text-cyan-400 font-medium">Yes (Stock)</span>
          </div>
        </div>
      </div>

      {/* Jump Links & Resources */}
      <div className="card-glass p-6 rounded-2xl border border-white/5">
        <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Resources</h3>
        <div className="space-y-2">
          <a href="#recipes" className="block p-2 -mx-2 rounded-lg hover:bg-white/5 text-[var(--text-secondary)] hover:text-white transition-colors flex items-center justify-between group">
            <span>Copyable Recipes</span>
            <Keyboard className="w-4 h-4 opacity-0 group-hover:opacity-50" />
          </a>
          <a href="#troubleshooting" className="block p-2 -mx-2 rounded-lg hover:bg-white/5 text-[var(--text-secondary)] hover:text-white transition-colors flex items-center justify-between group">
            <span>Common Issues</span>
            <AlertTriangle className="w-4 h-4 opacity-0 group-hover:opacity-50" />
          </a>
          <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-white/5 text-[var(--text-secondary)] hover:text-white transition-colors flex items-center justify-between group">
            <span>Official Manual</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-50" />
          </a>
        </div>
      </div>
    </div>
  );
};

/**
 * Interactive Recipe Card
 * Allows users to copy settings.
 */
export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const [copied, setCopied] = React.useState(false);

  const copySettings = () => {
    const text = Object.entries(recipe.settings)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--primary)]/50 transition-all">
      <div className="absolute top-4 right-4 opactiy-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={copySettings}
          className="p-2 rounded-lg bg-black/50 hover:bg-[var(--primary)] text-white/70 hover:text-white transition-colors"
          title="Copy settings to clipboard"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      
      <h4 className="font-bold text-white mb-1">{recipe.name}</h4>
      <p className="text-xs text-[var(--text-secondary)] mb-4">{recipe.description}</p>
      
      <div className="space-y-2">
        {Object.entries(recipe.settings).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center text-sm border-b border-white/5 pb-1 last:border-0 last:pb-0">
            <span className="text-[var(--text-muted)]">{key}</span>
            <span className="text-cyan-200 font-mono text-xs">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Controls Map Component
 * Explains knobs/sections with ear training cues.
 */
export const ControlsMap = ({ controls }: ControlsMapProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {controls.map((control, idx) => (
        <div key={idx} className="p-4 rounded-xl bg-purple-900/50 border-2 border-purple-500 hover:border-purple-400 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <Sliders className="w-4 h-4 text-orange-400" />
            <h4 className="font-bold text-white">{control.label}</h4>
          </div>
          <p className="text-sm text-gray-300 mb-3">{control.description}</p>
          <div className="flex items-start gap-2 p-3 rounded-lg bg-orange-500/20 border border-orange-500/30">
            <Ear className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
            <div className="text-xs">
              <span className="text-orange-400 font-bold uppercase tracking-wide text-[10px] block mb-0.5">Listen For</span>
              <span className="text-white">{control.listenFor}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Troubleshooting Section
 * Accordion-style layout for common issues.
 */
export const TroubleshootingGuide = ({ items }: TroubleshootingProps) => {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
           <div className="mt-1 shrink-0">
             <AlertTriangle className="w-5 h-5 text-red-400" />
           </div>
           <div>
             <h4 className="font-bold text-white text-sm mb-1">{item.issue}</h4>
             <p className="text-sm text-[var(--text-secondary)]">
               <span className="text-green-400 font-bold">Fix: </span> 
               {item.solution}
             </p>
           </div>
        </div>
      ))}
    </div>
  );
};
