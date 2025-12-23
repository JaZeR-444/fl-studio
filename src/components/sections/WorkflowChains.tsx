'use client';

import { useState } from 'react';
import { WorkflowTemplate } from '@/types/pluginTypes';

// Import workflow data
import workflows from '@/data/plugins/workflows.json';

export const WorkflowChains = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);
  const [expandedSteps, setExpandedSteps] = useState<{[key: string]: boolean}>({});

  // Get all workflow IDs
  const workflowIds = Object.keys(workflows);

  const toggleStepDetails = (stepIndex: number) => {
    const key = `${selectedWorkflow}-${stepIndex}`;
    setExpandedSteps(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderSelectedWorkflow = () => {
    if (!selectedWorkflow) return null;

    const workflow: WorkflowTemplate = workflows[selectedWorkflow as keyof typeof workflows];

    return (
      <div className="content-card p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-2xl">
              🔗
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{workflow.name}</h3>
              <p className="text-[var(--text-muted)]">{workflow.genre}</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedWorkflow(null)}
            className="btn-glass text-sm"
          >
            ← Back to Workflows
          </button>
        </div>

        {/* Native Benefits */}
        <div className="mb-6 p-4 rounded-lg bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)]">
          <h4 className="font-bold text-green-300 mb-2 flex items-center gap-2">
            <span>✓</span> Native Benefits
          </h4>
          <p className="text-green-200/80">{workflow.nativeBenefits}</p>
        </div>

        {/* What Breaks */}
        <div className="mb-6 p-4 rounded-lg bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)]">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span>⚠️</span> What Breaks If Swapped
          </h4>
          <p className="text-red-200/80">{workflow.breaksIfSwapped}</p>
        </div>

        {/* Plugin Chain */}
        <div>
          <h4 className="font-bold text-white mb-4 flex items-center gap-2">
            <span>🔗</span> Plugin Chain
          </h4>
          <div className="space-y-3">
            {workflow.plugins.map((plugin, index) => (
              <div 
                key={index} 
                className="glass-card overflow-hidden"
              >
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-[var(--glass-bg-hover)]"
                  onClick={() => toggleStepDetails(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)] flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-white">{plugin.role}</h5>
                      <p className="text-sm text-[var(--text-muted)]">{plugin.id.replace(/-/g, ' ')}</p>
                    </div>
                  </div>
                  <span className="text-[var(--text-dim)]">
                    {expandedSteps[`${selectedWorkflow}-${index}`] ? '▲' : '▼'}
                  </span>
                </div>
                
                {expandedSteps[`${selectedWorkflow}-${index}`] && (
                  <div className="p-4 border-t border-[var(--glass-border)] bg-[var(--glass-bg)]">
                    <h6 className="font-medium text-white mb-2">Configuration:</h6>
                    <p className="text-[var(--text-muted)] mb-3">{plugin.configuration}</p>
                    <div className="p-3 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)]">
                      <p className="text-sm text-yellow-200/80 italic">
                        <span className="font-bold">Native Advantage:</span> This configuration leverages native-only features.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="workflow-chains" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Native Workflow</span>
          <span className="text-white"> Chains</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Powerful signal chains that leverage unique FL Studio native advantages.
        </p>
      </div>
      
      {!selectedWorkflow ? (
        <>
          {/* Workflow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowIds.map(workflowId => {
              const workflow: WorkflowTemplate = workflows[workflowId as keyof typeof workflows];
              return (
                <div 
                  key={workflowId} 
                  className="tool-card"
                  onClick={() => setSelectedWorkflow(workflowId)}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-lg">
                        🔗
                      </div>
                      <h3 className="font-bold text-white">{workflow.name}</h3>
                    </div>
                    <span className="badge badge-orange text-xs">
                      {workflow.genre.split(',')[0]}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">
                    {workflow.nativeBenefits}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-[var(--glass-border)]">
                    <span className="text-xs text-[var(--text-dim)]">
                      {workflow.plugins.length} plugins
                    </span>
                    <span className="text-xs text-[var(--accent-tertiary)]">
                      View Chain →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Native Ecosystem Benefits */}
          <div className="mt-12 content-card p-6">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <span>⚡</span>
              Native Ecosystem Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Efficiency', icon: '⚡', desc: 'Native plugins share internal code structure, reducing CPU overhead' },
                { title: 'Integration', icon: '🔗', desc: 'Access to internal modulation sources and event systems' },
                { title: 'Scalability', icon: '📐', desc: 'Vector interfaces scale perfectly to any resolution' },
                { title: 'Workflow', icon: '🎹', desc: 'Deep integration with Piano Roll, Playlist, and Mixer' }
              ].map((benefit, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                  <div className="text-2xl mb-2">{benefit.icon}</div>
                  <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                  <p className="text-xs text-[var(--text-muted)]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Guidance */}
          <div className="mt-6 p-4 rounded-lg bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <span>💡</span> Implementation Guidance
            </h3>
            <p className="text-blue-200/80 text-sm">
              To recreate these workflows, load plugins in the order shown and apply the specified configurations. 
              Pay attention to the "What Breaks If Swapped" sections to understand which features rely on native-only advantages.
            </p>
          </div>
        </>
      ) : (
        renderSelectedWorkflow()
      )}
    </section>
  );
};