'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronLeft, FileText, Database, Workflow, BookOpen } from 'lucide-react';

interface PluginPageLayoutProps {
  plugin: {
    id: string;
    name: string;
    description?: string;
    completeness?: {
      structure: boolean;
      documentation: boolean;
      data: boolean;
      workflows: boolean;
    };
    paths?: {
      startHere?: string | null;
      masterIndex?: string | null;
      pageSetup?: string | null;
    };
  };
  children: ReactNode;
}

export function PluginPageLayout({ plugin, children }: PluginPageLayoutProps) {
  const hasDocumentation = plugin.completeness?.documentation || false;
  const hasData = plugin.completeness?.data || false;
  const hasWorkflows = plugin.completeness?.workflows || false;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-white/10 bg-[#0f0f0f]">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/hub" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Plugin Hub
          </Link>
        </div>
      </div>

      {/* Plugin Header */}
      <div className="border-b border-white/10 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {plugin.name}
              </h1>
              {plugin.description && (
                <p className="text-xl text-gray-400 max-w-3xl mb-6">{plugin.description}</p>
              )}
              
              {/* Completeness Badges */}
              {plugin.completeness && (
                <div className="flex flex-wrap gap-2">
                  {hasDocumentation && (
                    <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30 flex items-center gap-1.5">
                      <FileText className="w-3 h-3" />
                      Documented
                    </span>
                  )}
                  {hasData && (
                    <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center gap-1.5">
                      <Database className="w-3 h-3" />
                      Data Available
                    </span>
                  )}
                  {hasWorkflows && (
                    <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center gap-1.5">
                      <Workflow className="w-3 h-3" />
                      Workflows
                    </span>
                  )}
                  {plugin.completeness.structure && (
                    <span className="px-3 py-1 rounded-full text-xs bg-orange-500/20 text-orange-400 border border-orange-500/30">
                      ✓ Page Setup Ready
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Quick Links */}
            {plugin.paths && (plugin.paths.startHere || plugin.paths.masterIndex) && (
              <div className="flex flex-col gap-2">
                {plugin.paths.startHere && (
                  <a 
                    href={`#start-here`}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    Quick Start
                  </a>
                )}
                {plugin.paths.masterIndex && (
                  <a 
                    href={`#master-index`}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
                  >
                    Master Index
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto">
        {children}
      </div>

      {/* Footer Note */}
      <div className="border-t border-white/10 bg-[#0f0f0f] mt-16">
        <div className="container mx-auto px-6 py-8">
          <p className="text-sm text-gray-500 text-center">
            This plugin documentation is part of the FL Studio Master Hub.
            <br />
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
