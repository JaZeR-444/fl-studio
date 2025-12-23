'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-app)] text-white overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--primary)] rounded-full blur-[120px] opacity-20 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--secondary)] rounded-full blur-[120px] opacity-20 animate-pulse-glow delay-1000" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Hero Content */}
        <div className="space-y-8 max-w-4xl mx-auto animate-fade-in-up">
          <Badge variant="premium" className="mb-4 text-lg py-2 px-4 shadow-[0_0_20px_rgba(255,165,0,0.3)]">
            FL Studio Master Hub
          </Badge>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-tight">
            <span className="text-white block">Master Your</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] block mt-2 filter drop-shadow-2xl">
              Sound Identity
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
             The ultimate resource for workflow mastery, plugin deep-dives, and native synthesis techniques.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link 
              href="/hub" 
              className="group relative px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,165,0,0.4)] flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Enter Studio</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shine" />
            </Link>
            
            <Link 
              href="/hub#plugins"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold text-lg rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Explore Plugins
            </Link>
          </div>
        </div>

        {/* Feature Grid Preview */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full text-left animate-fade-in-up delay-200">
           {/* Card 1 */}
           <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-md">
             <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-2xl mb-4 text-purple-400">🎹</div>
             <h3 className="text-xl font-bold mb-2">100+ Native Plugins</h3>
             <p className="text-[var(--text-muted)]">Detailed stats, CPU usage, and pro tips for every stock instrument and effect.</p>
           </div>
           
           {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-md">
             <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-2xl mb-4 text-blue-400">⚡</div>
             <h3 className="text-xl font-bold mb-2">Workflow Chains</h3>
             <p className="text-[var(--text-muted)]">Pre-built effect chains and mixing templates to speed up your production.</p>
           </div>
           
           {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-md">
             <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-2xl mb-4 text-orange-400">🧠</div>
             <h3 className="text-xl font-bold mb-2">Native Advantage</h3>
             <p className="text-[var(--text-muted)]">Learn why stock plugins offer superior performance and integration.</p>
           </div>
        </div>

      </main>
    </div>
  );
}
