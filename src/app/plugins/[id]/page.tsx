import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import allPluginsData from '@/data/plugins/allPlugins.json';
import { ExtendedPlugin } from '@/types/pluginTypes';
import { Badge } from '@/components/ui/Badge';

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
      <Link 
        href="/#plugins" 
        className="inline-flex items-center text-[var(--text-muted)] hover:text-white transition-colors mb-8 group"
      >
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
        Back to Hub
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Key Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card-glass p-8 rounded-2xl border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-32 bg-[var(--primary)] blur-[100px] opacity-20 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
             
             <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-4xl mb-6 shadow-xl border border-white/10">
                  {plugin.icon || '🎹'}
                </div>
                
                <h1 className="text-4xl font-bold mb-2 tracking-tight">{plugin.name}</h1>
                <div className="flex items-center gap-3 mb-6">
                   <span className="text-[var(--text-secondary)]">{plugin.family}</span>
                   {plugin.rating && (
                     <div className="flex items-center text-yellow-500 text-sm bg-yellow-500/10 px-2 py-1 rounded-full">
                       ★ {plugin.rating}
                     </div>
                   )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant={plugin.pricingBadge === 'free' ? 'green' : plugin.pricingBadge === 'fruity' ? 'red' : 'purple'}>
                    {plugin.pricingBadge} Edition
                  </Badge>
                  {plugin.tags.map(tag => (
                    <Badge key={tag.label} variant="outline" className="text-xs">
                      {tag.label}
                    </Badge>
                  ))}
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                  {plugin.description}
                </p>
             </div>
          </div>

          <div className="card-glass p-6 rounded-2xl border border-white/5">
            <h3 className="text-lg font-semibold mb-4 text-white">Specs & Requirements</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-[var(--text-muted)]">CPU Usage</span>
                <span className="text-white font-medium">{plugin.cpuUsage || 'Moderate'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-[var(--text-muted)]">Native Support</span>
                <span className="text-green-400 font-medium">Yes</span>
              </div>
               <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-[var(--text-muted)]">Category</span>
                <span className="text-white">{plugin.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Deep Dive */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Sound Character */}
          {plugin.soundCharacter && (
            <div className="card-glass p-8 rounded-2xl border border-white/5">
               <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <span className="w-1 h-6 bg-[var(--primary)] rounded-full"/>
                 Sound Character
               </h3>
               <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                 {plugin.soundCharacter}
               </p>
            </div>
          )}

          {/* Best Used For */}
          {plugin.bestUsedFor && plugin.bestUsedFor.length > 0 && (
             <div className="card-glass p-8 rounded-2xl border border-white/5">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <span className="w-1 h-6 bg-blue-500 rounded-full"/>
                 Best Used For
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {plugin.bestUsedFor.map((use, i) => (
                   <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                     <span className="text-blue-400 mt-1">✓</span>
                     <span className="text-gray-300">{use}</span>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* Native Advantages */}
          {plugin.nativeStatus && (
            <div className="card-glass p-8 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5">
               <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[var(--primary-light)]">
                 <span className="text-2xl">⚡</span>
                 Native Advantage
               </h3>
               <p className="text-gray-300 text-lg leading-relaxed">
                 {plugin.nativeStatus}
               </p>
            </div>
          )}

          {/* Pro Tips */}
          {plugin.proTips && plugin.proTips.length > 0 && (
            <div className="card-glass p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <span className="w-1 h-6 bg-yellow-500 rounded-full"/>
                 Pro Tips
               </h3>
               <ul className="space-y-4">
                 {plugin.proTips.map((tip, i) => (
                   <li key={i} className="flex gap-4">
                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center text-sm font-bold border border-yellow-500/20">
                       {i + 1}
                     </span>
                     <p className="text-gray-300 leading-relaxed">{tip}</p>
                   </li>
                 ))}
               </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
