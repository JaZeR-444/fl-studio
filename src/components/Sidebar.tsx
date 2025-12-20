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
      className={`transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed md:static inset-y-0 left-0 w-64 glass-sidebar flex flex-col z-40 shadow-lg md:shadow-none`}
    >
      <div className="p-6 border-b border-purple-primary-700/30 hidden md:flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">FL Studio <span className="text-gradient">Hub</span></h1>
          <p className="text-xs text-purple-primary-300 mt-1">Master Reference v21+</p>
        </div>
        {/* Dark Mode Toggle Desktop */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-purple-primary-700/20 transition-colors"
          title="Toggle Dark Mode"
        >
          <span id="theme-icon" className="text-xl">{darkMode ? '☀️' : '🌙'}</span>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {Object.entries(navGroups).map(([category, items]) => (
          <div key={category}>
            <div className="px-2 mb-2 text-xs font-semibold text-purple-primary-400 uppercase tracking-wider">
              {category}
            </div>
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigateToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`nav-item w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-purple-primary-700/40 text-purple-primary-200 border border-purple-primary-600/50 shadow-purple-glow'
                    : 'text-purple-primary-300 hover:bg-purple-primary-700/20 hover:text-purple-primary-100 hover:border hover:border-purple-primary-600/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-purple-primary-700/30 bg-purple-dark-800/50">
        <div className="text-xs text-purple-primary-300">
          <p><strong className="text-purple-primary-200">System:</strong> FL Studio 21+</p>
          <div className="flex items-center mt-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="text-xs border border-purple-primary-600/40 rounded px-2 py-1 mr-2 hover:bg-purple-primary-700/20 transition-colors"
            >
              Toggle Theme
            </button>
          </div>
          <div className="mt-1">
            <button
              onClick={toggleSettings}
              className="text-xs btn-glass w-full"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};