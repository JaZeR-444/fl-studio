import React from 'react';
import { notFound } from 'next/navigation';
import allPluginsData from '@/data/plugins/allPlugins.json';
import { ExtendedPlugin } from '@/types/pluginTypes';
import { Badge } from '@/components/ui/Badge';
import { PluginBreadcrumb } from '@/components/ui/Breadcrumb';
import { 
  ActionPanel, 
  RecipeCard, 
  ControlsMap, 
  TroubleshootingGuide 
} from '@/components/plugins/PluginComponents';
import { 
  CheckCircle, 
  XCircle, 
  Layers, 
  TrendingUp, 
  ListMusic, 
  Wrench,
  Info
} from 'lucide-react';

const allPlugins: ExtendedPlugin[] = allPluginsData as unknown as ExtendedPlugin[];

export function generateStaticParams() {
  return allPlugins.map((plugin) => ({
    id: plugin.id,
  }));
}

export default function PluginDetailPage({ params }: { params: { id: string } }) {
  const plugin = allPlugins.find((p) => p.id === params.id);

  if (!plugin) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 sm:px-6">
      
      {/* 1. Header Section */}
      <div className="mb-10 relative">
        <div className="absolute top-0 right-0 p-64 bg-[var(--primary)] blur-[150px] opacity-10 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <PluginBreadcrumb pluginName={plugin.name} category={plugin.category} />
        
        <div className="mt-8 flex flex-col md:flex-row gap-8 items-start relative z-10">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-5xl shadow-2xl border border-white/10 shrink-0">
            {plugin.icon || '🎹'}
          </div>
          <div className="flex-grow">
             <div className="flex flex-wrap items-center gap-3 mb-3">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{plugin.name}</h1>
               <div className="bg-[#1a1f2e] border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                 <CheckCircle className="w-3 h-3" />
                 Verified Stock Plugin
               </div>
             </div>
             
             <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed max-w-3xl mb-6">
               {plugin.description}
             </p>

             <div className="flex flex-wrap gap-2">
                <Badge variant={plugin.pricingBadge === 'free' ? 'green' : plugin.pricingBadge === 'fruity' ? 'red' : 'purple'}>
                    {plugin.pricingBadge} Edition
                </Badge>
                {plugin.tags.map(tag => (
                  <Badge key={tag.label} variant="outline">
                    {tag.label}
                  </Badge>
                ))}
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* 2. Sticky Action Panel (Left Sidebar) */}
        <div className="lg:col-span-4 xl:col-span-3 order-2 lg:order-1">
          <ActionPanel plugin={plugin} />
        </div>

        {/* 3. Deep Dive Content (Main Column) */}
        <div className="lg:col-span-8 xl:col-span-9 order-1 lg:order-2 flex flex-col gap-0 border-none">
          
          {/* Section: Scenarios (When to use / Not use) */}
          {plugin.scenarios && (
            <section id="scenarios" className="animate-fade-in-up mb-2">
              <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-1.5 border-b border-white/5 pb-1">
                <Layers className="w-4 h-4 text-indigo-400" /> Usage Scenarios
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/10 transition-colors">
                  <h3 className="font-bold text-green-400 mb-1 flex items-center gap-1.5 text-xs">
                    <CheckCircle className="w-3.5 h-3.5" /> When to Use
                  </h3>
                  <ul className="space-y-1">
                    {plugin.scenarios.whenToUse.map((item, i) => (
                      <li key={i} className="flex gap-1.5 text-xs text-gray-300 leading-tight">
                        <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10 transition-colors">
                  <h3 className="font-bold text-red-400 mb-1 flex items-center gap-1.5 text-xs">
                    <XCircle className="w-3.5 h-3.5" /> When to Avoid
                  </h3>
                  <ul className="space-y-1">
                    {plugin.scenarios.whenNotToUse.map((item, i) => (
                      <li key={i} className="flex gap-1.5 text-xs text-gray-300 leading-tight">
                        <span className="w-1 h-1 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Section: Sound Character */}
          {plugin.soundCharacter && (
            <section className="p-3 rounded-lg bg-[var(--bg-card)] border border-white/5 relative overflow-hidden mb-2">
               <div className="absolute top-0 right-0 p-12 bg-blue-500/5 blur-[30px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"/>
               <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Sound Character</h3>
               <p className="text-base text-white font-light leading-snug">
                 "{plugin.soundCharacter}"
               </p>
            </section>
          )}

          {/* Section: Controls Map */}
          {plugin.controls && (
            <section id="controls" className="mb-4 p-4 rounded-xl bg-indigo-900/30 border-2 border-indigo-500">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-400" /> Controls & Listening
              </h2>
              <ControlsMap controls={plugin.controls} />
            </section>
          )}

          {/* Section: Recipes */}
          {plugin.recipes && (
            <section id="recipes">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/5 pb-2">
                <ListMusic className="w-6 h-6 text-purple-400" /> Starter Recipes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {plugin.recipes.map((recipe, idx) => (
                  <RecipeCard key={idx} recipe={recipe} />
                ))}
              </div>
            </section>
          )}

          {/* Section: Troubleshooting & Pro Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plugin.troubleshooting && (
              <section id="troubleshooting">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-red-400" /> Troubleshooting
                </h2>
                <TroubleshootingGuide items={plugin.troubleshooting} />
              </section>
            )}

            {plugin.proTips && (
              <section id="protips">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-yellow-400" /> Pro Tips
                </h2>
                <div className="space-y-3">
                  {plugin.proTips.map((tip, i) => (
                     <div key={i} className="flex gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                        <span className="text-yellow-500 font-bold text-sm mt-0.5">{i+1}.</span>
                        <p className="text-sm text-gray-300">{tip}</p>
                     </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Section: Workflow Integration */}
          {plugin.workflow && (
            <section className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <h2 className="text-xl font-bold text-white mb-4">Workflow Integration</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-[var(--text-muted)] uppercase mb-2">Typically Placed</h4>
                  <div className="flex items-center gap-2 p-3 bg-black/30 rounded-lg text-sm text-[var(--accent-primary)] font-mono">
                    {plugin.workflow.chainPlacement}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-[var(--text-muted)] uppercase mb-2">Pairs Well With</h4>
                  <div className="flex flex-wrap gap-2">
                    {plugin.workflow.pairsWith.map(id => (
                      <span key={id} className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-white/10 text-xs text-white">
                        {id.replace(/-/g, ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
