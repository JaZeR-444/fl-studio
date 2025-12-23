// src/components/ui/PluginCard.tsx
import { PluginSearchIndex } from '@/types/pluginTypes';
import { Badge } from './Badge';

interface PluginCardProps {
  plugin: PluginSearchIndex;
  onClick?: () => void;
  showDetails?: boolean;
}

export const PluginCard = ({ plugin, onClick, showDetails = true }: PluginCardProps) => {
  // Determine category color based on family
  const getCategoryColor = (family: string): 'purple' | 'blue' | 'cyan' | 'green' | 'orange' | 'pink' => {
    const colorMap: { [key: string]: 'purple' | 'blue' | 'cyan' | 'green' | 'orange' | 'pink' } = {
      'Additive': 'purple',
      'FM': 'orange',
      'Subtractive': 'blue',
      'Physical Modeling': 'pink',
      'Sampler': 'green',
      'Effects': 'cyan',
      'Dynamics': 'orange',
      'Delay': 'blue',
      'Reverb': 'purple',
    };
    return colorMap[family] || 'purple';
  };

  return (
    <div
      className="tool-card"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-lg">
            🎹
          </div>
          <div>
            <h3 className="font-bold text-white">{plugin.name}</h3>
            <p className="text-xs text-[var(--text-dim)]">{plugin.family}</p>
          </div>
        </div>
        {plugin.nativeOnly && (
          <Badge variant="premium">
            Native
          </Badge>
        )}
      </div>
      
      {showDetails && (
        <>
          {/* Edition Badges */}
          <div className="flex flex-wrap gap-1 mb-3">
            {plugin.exclusivityFlags.slice(0, 2).map((flag, index) => (
              <Badge
                key={index}
                variant={getCategoryColor(plugin.family)}
              >
                {flag.replace(' Edition', '')}
              </Badge>
            ))}
            {plugin.exclusivityFlags.length > 2 && (
              <Badge variant="blue">
                +{plugin.exclusivityFlags.length - 2}
              </Badge>
            )}
          </div>

          {/* Stats Row */}
          <div className="flex justify-between text-xs mb-3 p-2 rounded-lg bg-[var(--glass-bg)]">
            <span className="text-[var(--text-muted)]">
              <span className="text-[var(--accent-tertiary)]">⚡</span> {plugin.cpuRating}/5 CPU
            </span>
            <span className="text-[var(--text-muted)]">
              <span className="text-[var(--accent-tertiary)]">🎛️</span> {plugin.complexity}/5 Complexity
            </span>
          </div>

          {/* Best Paired With */}
          <div>
            <p className="text-xs text-[var(--text-dim)] mb-2">Best paired with:</p>
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

          {/* Footer Stats */}
          <div className="tool-stats">
            <div className="tool-stats-item">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>View</span>
            </div>
            <div className="tool-stats-item">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span>Save</span>
            </div>
            <div className="tool-stats-item ml-auto">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
};