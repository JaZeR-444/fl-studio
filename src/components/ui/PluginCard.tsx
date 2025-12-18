// src/components/ui/PluginCard.tsx
import { PluginSearchIndex } from '@/types/pluginTypes';

interface PluginCardProps {
  plugin: PluginSearchIndex;
  onClick?: () => void;
  showDetails?: boolean;
}

export const PluginCard = ({ plugin, onClick, showDetails = true }: PluginCardProps) => {
  return (
    <div 
      className="bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-stone-200 dark:border-zinc-700 overflow-hidden transition-shadow hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-stone-800 dark:text-white">{plugin.name}</h3>
            <p className="text-sm text-stone-500 dark:text-zinc-400">{plugin.family}</p>
          </div>
          {plugin.nativeOnly && (
            <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs font-medium rounded-full">
              Native
            </span>
          )}
        </div>
        
        {showDetails && (
          <>
            <div className="mt-3 flex flex-wrap gap-1">
              {plugin.exclusivityFlags.slice(0, 2).map((flag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-stone-100 dark:bg-zinc-700 text-stone-600 dark:text-zinc-300 text-xs rounded"
                >
                  {flag}
                </span>
              ))}
              {plugin.exclusivityFlags.length > 2 && (
                <span className="px-2 py-1 bg-stone-100 dark:bg-zinc-700 text-stone-600 dark:text-zinc-300 text-xs rounded">
                  +{plugin.exclusivityFlags.length - 2} more
                </span>
              )}
            </div>
            
            <div className="mt-3 flex justify-between text-xs">
              <span className="text-stone-500 dark:text-zinc-400">
                {plugin.cpuRating}/5 CPU
              </span>
              <span className="text-stone-500 dark:text-zinc-400">
                {plugin.complexity}/5 Complexity
              </span>
            </div>
            
            <div className="mt-3">
              <p className="text-xs text-stone-500 dark:text-zinc-400 mb-1">Best paired with:</p>
              <div className="flex flex-wrap gap-1">
                {plugin.bestPairedWith.slice(0, 3).map((pair, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-stone-100 dark:bg-zinc-700 text-stone-600 dark:text-zinc-300 rounded"
                  >
                    {pair}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};