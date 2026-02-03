'use client';

import { ChevronLeft, ChevronRight, Home, BookOpen, Layers, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const PluginPageSidebar = ({ pluginName }: { pluginName: string }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`border-r flex flex-col shrink-0 transition-all duration-300 ease-in-out z-20 pt-6 relative bg-slate-950 dark:bg-slate-950 border-white/10 ${collapsed ? 'w-16' : 'w-64'}`}>
      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto space-y-1 py-2">
        <Link
          href="/hub"
          className="group flex items-center w-full h-10 px-4 cursor-pointer transition-all gap-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg mx-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-inset"
        >
          <ArrowLeft className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="text-xs font-bold tracking-wider flex-1 text-left">BACK TO HUB</span>}
        </Link>

        <div className="h-px bg-white/10 my-2 mx-2"></div>

        <button className="group flex items-center w-full h-10 px-4 cursor-pointer transition-all gap-3 text-white bg-white/10 rounded-lg mx-2">
          <Layers className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="text-xs font-bold tracking-wider flex-1 text-left">OVERVIEW</span>}
        </button>

        <button className="group flex items-center w-full h-10 px-4 cursor-pointer transition-all gap-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg mx-2">
          <BookOpen className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="text-xs font-bold tracking-wider flex-1 text-left">GUIDE</span>}
        </button>
      </div>

      {/* Footer Section */}
      <div className="mt-auto border-t p-4 border-white/10">
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 transition-all group bg-white/10 border-white/10 text-gray-400 hover:text-white hover:bg-white/15 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        >
          {collapsed ? (
            <>
              <ChevronRight className="w-4 h-4" />
            </>
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-xs font-bold">COLLAPSE</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
