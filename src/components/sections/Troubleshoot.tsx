'use client';

import { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle, 
  Zap, 
  Volume2, 
  Cpu, 
  Plug, 
  HelpCircle,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Shield,
  Wrench
} from 'lucide-react';

// Comprehensive troubleshooting data
const troubleshootingCategories = [
  {
    id: 'audio-issues',
    title: 'Audio Issues',
    icon: Volume2,
    color: 'red',
    issues: [
      {
        symptom: 'Audio is crackling or popping',
        solutions: [
          'Increase buffer size to 256/512 samples in Audio Settings (F10)',
          'Enable "High Performance" power plan in Windows',
          'Update your audio interface drivers',
          'Disable USB power saving in Device Manager',
        ],
        severity: 'high'
      },
      {
        symptom: 'No audio output',
        solutions: [
          'Check audio driver in F10 > Audio Settings',
          'Verify correct output device is selected',
          'Restart audio interface and FL Studio',
          'Check if another application is using audio exclusively',
        ],
        severity: 'high'
      },
      {
        symptom: 'High latency when recording',
        solutions: [
          'Lower buffer to 64-128 samples',
          'Use ASIO4ALL or native ASIO driver',
          'Disable heavyweight plugins during recording',
          'Close other audio applications',
        ],
        severity: 'medium'
      }
    ]
  },
  {
    id: 'performance',
    title: 'Performance',
    icon: Cpu,
    color: 'orange',
    issues: [
      {
        symptom: 'High CPU usage / overloads',
        solutions: [
          'Freeze CPU-heavy channels (Ctrl+Click menu > Consolidate)',
          'Use Smart Disable for inactive plugins',
          'Lower sample rate during composition (switch to higher for export)',
          'Disable unused mixer insert effects',
        ],
        severity: 'high'
      },
      {
        symptom: 'Project taking too long to load',
        solutions: [
          'Consolidate audio clips to reduce file count',
          'Remove unused samples from Sampler channels',
          'Use FL Studio\'s "Collect project files" to organize',
          'Consider using SSD for project storage',
        ],
        severity: 'medium'
      }
    ]
  },
  {
    id: 'plugins',
    title: 'Plugin Issues',
    icon: Plug,
    color: 'purple',
    issues: [
      {
        symptom: 'Plugin not loading or crashing',
        solutions: [
          'Check plugin compatibility (32-bit vs 64-bit)',
          'Rescan plugins in Options > File Settings',
          'Verify plugin file exists at scanned location',
          'Try running FL Studio as administrator',
        ],
        severity: 'high'
      },
      {
        symptom: 'Plugin UI not displaying correctly',
        solutions: [
          'Right-click plugin > Sizing > choose appropriate scale',
          'Update graphics drivers',
          'Disable hardware acceleration in plugin (if available)',
          'Use the wrapper\'s built-in scaling options',
        ],
        severity: 'low'
      }
    ]
  }
];

// Quick performance tips
const performanceTips = [
  { tip: 'Use F9 to disable channels not currently being worked on', icon: Zap },
  { tip: 'Freeze tracks with many CPU-intensive plugins', icon: Shield },
  { tip: 'Use lower sample quality during composition', icon: Wrench },
  { tip: 'Enable "Low quality preview" when working with 100+ tracks', icon: Cpu },
];

export const TroubleshootSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('audio-issues');
  const [expandedIssues, setExpandedIssues] = useState<{[key: string]: boolean}>({});

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const toggleIssue = (issueKey: string) => {
    setExpandedIssues(prev => ({
      ...prev,
      [issueKey]: !prev[issueKey]
    }));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/10 border-green-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <section id="troubleshoot" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Troubleshooting</span>
          <span className="text-white"> Guide</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Common issues and solutions to keep your workflow smooth.
        </p>
      </div>

      {/* Quick Performance Tips Hero */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/20 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" /> Quick Performance Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {performanceTips.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <item.icon className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-sm text-blue-100">{item.tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Troubleshooting Categories */}
      <div className="space-y-4">
        {troubleshootingCategories.map((category) => (
          <div key={category.id} className="content-card overflow-hidden">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between p-5 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg bg-${category.color}-500/20 flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 text-${category.color}-400`} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white">{category.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{category.issues.length} common issues</p>
                </div>
              </div>
              {expandedCategory === category.id ? (
                <ChevronUp className="w-5 h-5 text-[var(--text-muted)]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />
              )}
            </button>

            {/* Category Issues */}
            {expandedCategory === category.id && (
              <div className="border-t border-[var(--glass-border)] p-5 space-y-4">
                {category.issues.map((issue, idx) => {
                  const issueKey = `${category.id}-${idx}`;
                  const isExpanded = expandedIssues[issueKey];
                  
                  return (
                    <div key={idx} className="rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] overflow-hidden">
                      <button
                        onClick={() => toggleIssue(issueKey)}
                        className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <AlertCircle className="w-4 h-4 text-[var(--text-muted)]" />
                          <span className="font-medium text-white text-left">{issue.symptom}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-xs border ${getSeverityColor(issue.severity)}`}>
                            {issue.severity}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[var(--text-muted)]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
                          )}
                        </div>
                      </button>
                      
                      {isExpanded && (
                        <div className="p-4 border-t border-[var(--glass-border)] bg-black/20">
                          <h4 className="text-sm font-medium text-white mb-3">Solutions:</h4>
                          <ul className="space-y-2">
                            {issue.solutions.map((solution, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                <span className="text-[var(--text-muted)]">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Help Card */}
      <div className="mt-8 p-6 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)]">
        <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Still Having Issues?
        </h3>
        <p className="text-yellow-200/80">
          If these solutions don't help, try the FL Studio forums or Image-Line support. 
          Include your FL Studio version, audio interface model, and Windows version when asking for help.
        </p>
      </div>
    </section>
  );
};