// src/components/sections/WorkflowChains.tsx
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
      <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-stone-800 dark:text-white">{workflow.name}</h3>
            <p className="text-stone-600 dark:text-zinc-400">{workflow.genre}</p>
          </div>
          <button
            onClick={() => setSelectedWorkflow(null)}
            className="text-stone-500 dark:text-zinc-400 hover:text-stone-700 dark:hover:text-zinc-300"
          >
            Back to Workflows
          </button>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-stone-800 dark:text-white mb-3">Native Benefits</h4>
          <p className="text-stone-700 dark:text-zinc-300 bg-stone-50 dark:bg-zinc-700/30 p-4 rounded-lg">
            {workflow.nativeBenefits}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-stone-800 dark:text-white mb-3">What Breaks If Swapped</h4>
          <p className="text-stone-700 dark:text-zinc-300 bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border border-rose-200 dark:border-rose-800">
            {workflow.breaksIfSwapped}
          </p>
        </div>

        <div>
          <h4 className="font-bold text-stone-800 dark:text-white mb-4">Plugin Chain:</h4>
          <div className="space-y-4">
            {workflow.plugins.map((plugin, index) => (
              <div 
                key={index} 
                className="border border-stone-200 dark:border-zinc-700 rounded-lg overflow-hidden"
              >
                <div 
                  className="flex justify-between items-center p-4 bg-stone-50 dark:bg-zinc-700/50 cursor-pointer"
                  onClick={() => toggleStepDetails(index)}
                >
                  <div>
                    <h5 className="font-bold text-stone-800 dark:text-white">{plugin.role}</h5>
                    <p className="text-stone-600 dark:text-zinc-400">{plugin.id.replace(/-/g, ' ')}</p>
                  </div>
                  <span className="text-stone-500 dark:text-zinc-400">
                    {expandedSteps[`${selectedWorkflow}-${index}`] ? '▲' : '▼'}
                  </span>
                </div>
                
                {expandedSteps[`${selectedWorkflow}-${index}`] && (
                  <div className="p-4 bg-white dark:bg-zinc-800 border-t border-stone-200 dark:border-zinc-700">
                    <h6 className="font-medium text-stone-800 dark:text-white mb-2">Configuration:</h6>
                    <p className="text-stone-600 dark:text-zinc-400">{plugin.configuration}</p>
                    <div className="mt-3">
                      <h6 className="font-medium text-stone-800 dark:text-white mb-1">Native Advantage:</h6>
                      <p className="text-sm text-amber-700 dark:text-amber-300 italic">
                        This configuration leverages native-only features that would be lost if replaced with a third-party plugin.
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
    <section id="workflow-chains" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-6">Native Workflow Chains</h2>
        
        {!selectedWorkflow ? (
          <div>
            <p className="text-stone-600 dark:text-zinc-400 mb-6">
              These workflow templates demonstrate how native FL Studio plugins work together to create powerful signal chains 
              that leverage unique native advantages. Each chain highlights what would break if swapped for third-party alternatives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowIds.map(workflowId => {
                const workflow: WorkflowTemplate = workflows[workflowId as keyof typeof workflows];
                return (
                  <div 
                    key={workflowId} 
                    className="bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-stone-200 dark:border-zinc-700 overflow-hidden transition-all hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedWorkflow(workflowId)}
                  >
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg text-stone-800 dark:text-white">{workflow.name}</h3>
                        <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs rounded-full">
                          {workflow.genre.split(',')[0]}
                        </span>
                      </div>
                      <p className="text-sm text-stone-600 dark:text-zinc-400 line-clamp-2">
                        {workflow.nativeBenefits}
                      </p>
                      
                      <div className="mt-4 pt-4 border-t border-stone-100 dark:border-zinc-700 flex justify-between">
                        <span className="text-xs text-stone-500 dark:text-zinc-400">
                          {workflow.plugins.length} plugins
                        </span>
                        <button className="text-xs text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300">
                          View Chain
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          renderSelectedWorkflow()
        )}

        <div className="mt-12 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
          <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Native Ecosystem Benefits</h3>
          <ul className="text-amber-700 dark:text-amber-300 space-y-2 list-disc pl-5">
            <li><strong>Efficiency:</strong> Native plugins share internal code structure, reducing CPU overhead</li>
            <li><strong>Integration:</strong> Access to internal modulation sources and event systems unavailable to VSTs</li>
            <li><strong>Scalability:</strong> Vector interfaces scale perfectly to any resolution without degradation</li>
            <li><strong>Workflow:</strong> Deep integration with FL Studio's Piano Roll, Playlist, and Mixer systems</li>
          </ul>
        </div>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Implementation Guidance</h3>
          <p className="text-blue-700 dark:text-blue-300">
            To recreate these workflows, load plugins in the order shown and apply the specified configurations. 
            Pay attention to the "What Breaks If Swapped" sections to understand which features rely on native-only advantages.
          </p>
        </div>
      </div>
    </section>
  );
};