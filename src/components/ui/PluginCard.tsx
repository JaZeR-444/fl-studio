// src/components/ui/PluginCard.tsx
import { PluginSearchIndex } from '@/types/pluginTypes';
import { Badge } from './Badge';

interface PluginCardProps {
  plugin: PluginSearchIndex;
  onClick?: () => void;
  showDetails?: boolean;
}

export const PluginCard = ({ plugin, onClick, showDetails = true }: PluginCardProps) => {
  return (
    <div
      className="content-card cursor-pointer"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-white">{plugin.name}</h3>
            <p className="text-sm text-purple-primary-300">{plugin.family}</p>
          </div>
          {plugin.nativeOnly && (
            <Badge variant="premium">
              Native
            </Badge>
          )}
        </div>
        
        {showDetails && (
          <>
            <div className="mt-3 flex flex-wrap gap-1">
              {plugin.exclusivityFlags.slice(0, 2).map((flag, index) => (
                <Badge
                  key={index}
                  variant="purple"
                >
                  {flag}
                </Badge>
              ))}
              {plugin.exclusivityFlags.length > 2 && (
                <Badge variant="blue">
                  +{plugin.exclusivityFlags.length - 2} more
                </Badge>
              )}
            </div>

            <div className="mt-3 flex justify-between text-xs">
              <span className="text-purple-primary-300">
                {plugin.cpuRating}/5 CPU
              </span>
              <span className="text-purple-primary-300">
                {plugin.complexity}/5 Complexity
              </span>
            </div>

            <div className="mt-3">
              <p className="text-xs text-purple-primary-400 mb-1">Best paired with:</p>
              <div className="flex flex-wrap gap-1">
                {plugin.bestPairedWith.slice(0, 3).map((pair, index) => (
                  <Badge
                    key={index}
                    variant="blue"
                  >
                    {pair}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};