interface SidebarProps {
  activeSection: string;
  navigateToSection: (sectionId: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleSettings?: () => void;
}

export const Sidebar = ({
  activeSection,
  navigateToSection,
  darkMode,
  toggleDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  toggleSettings
}: SidebarProps) => {
  const navItems = [
    { id: 'home', label: 'Mental Model & Flow', category: 'Core' },
    { id: 'modules', label: 'The Big 5 (UI)', category: 'Core' },
    { id: 'audio', label: 'Audio & Recording', category: 'Workflow' },
    { id: 'mixing', label: 'Mixing & Automation', category: 'Workflow' },
    { id: 'plugins', label: 'Plugins & Sound Design', category: 'Workflow' },
    { id: 'workflow-visualizations', label: 'Workflow Visualizations 📊', category: 'Workflow' },
    { id: 'synthesis-history', label: 'Synthesis History 📚', category: 'Workflow' },
    { id: 'dojo', label: 'Shortcut Dojo 🥋', category: 'Training & Tools' },
    { id: 'templates', label: 'Song Templates 🎵', category: 'Training & Tools' },
    { id: 'project-templates', label: 'Project Templates 💾', category: 'Training & Tools' },
    { id: 'midi-mapping', label: 'MIDI Mapping 🎹', category: 'Training & Tools' },
    { id: 'plugins-database', label: 'Plugin Database 🔍', category: 'Training & Tools' },
    { id: 'native-advantages', label: 'Native Advantages ⚡', category: 'Training & Tools' },
    { id: 'workflow-chains', label: 'Workflow Chains 🔄', category: 'Training & Tools' },
    { id: 'audio-analysis', label: 'Audio Analysis 📈', category: 'Training & Tools' },
    { id: 'utilities', label: 'Studio Calc & Maps', category: 'Training & Tools' },
    { id: 'troubleshoot', label: 'Troubleshooting', category: 'Training & Tools' },
    { id: 'ai-assistant', label: 'AI Assistant ✨', category: 'Smart Tools' },
  ];

  // Group navigation items by category
  const navGroups = navItems.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {} as Record<string, typeof navItems>);

  return (
    <aside 
      id="sidebar" 
      className={`transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed md:static inset-y-0 left-0 w-64 bg-white/75 dark:bg-zinc-950/50 backdrop-blur-xl border-r border-stone-200/60 dark:border-zinc-700/60 flex flex-col z-40 shadow-lg md:shadow-none`}
    >
      <div className="p-6 border-b border-stone-100 dark:border-zinc-700 hidden md:flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-white tracking-tight">FL Studio <span className="text-orange-500">Hub</span></h1>
          <p className="text-xs text-stone-500 dark:text-zinc-500 mt-1">Master Reference v21+</p>
        </div>
        {/* Dark Mode Toggle Desktop */}
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-zinc-700 transition-colors" 
          title="Toggle Dark Mode"
        >
          <span id="theme-icon" className="text-xl">{darkMode ? '☀️' : '🌙'}</span>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {Object.entries(navGroups).map(([category, items]) => (
          <div key={category}>
            <div className="px-2 mb-2 text-xs font-semibold text-stone-400 dark:text-zinc-500 uppercase tracking-wider">
              {category}
            </div>
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigateToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`nav-item w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 dark:hover:bg-zinc-700 hover:text-orange-600 transition-colors ${
                  activeSection === item.id 
                    ? 'bg-orange-50 dark:bg-zinc-700 text-orange-600 dark:text-orange-400' 
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-stone-100 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-900">
        <div className="text-xs text-stone-500 dark:text-zinc-500">
          <p><strong>System:</strong> FL Studio 21+</p>
          <div className="flex items-center mt-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="text-xs border border-stone-300 dark:border-zinc-600 rounded px-2 py-1 mr-2"
            >
              Toggle Theme
            </button>
          </div>
          <div className="mt-1">
            <button
              onClick={toggleSettings}
              className="text-xs border border-stone-300 dark:border-zinc-600 rounded px-2 py-1"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
