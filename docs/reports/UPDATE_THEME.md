# Purple Theme Update Progress

## Files to Update

### Completed:
- [x] ProjectTemplates.tsx - Partial (header updated)

### In Progress:
- [ ] ProjectTemplates.tsx - Complete remaining sections
- [ ] WorkflowVisualizations.tsx
- [ ] MidiMappingReference.tsx
- [ ] AudioAnalysis.tsx
- [ ] PluginsDatabase.tsx
- [ ] NativeAdvantages.tsx
- [ ] WorkflowChains.tsx
- [ ] SynthesisHistory.tsx
- [ ] SettingsPanel.tsx
- [ ] CapabilityFilter.tsx

## Theme Transformation Pattern

### Colors:
- `text-stone-900 dark:text-white` → `text-white`
- `text-stone-600 dark:text-zinc-400` → `text-purple-primary-300`
- `text-stone-500 dark:text-zinc-400` → `text-purple-primary-400`
- `text-stone-700 dark:text-zinc-300` → `text-purple-primary-300`
- `text-stone-800 dark:text-white` → `text-white`
- `text-orange-*` → `text-purple-primary-*`

### Backgrounds:
- `bg-white dark:bg-zinc-800` → `content-card`
- `bg-stone-100 dark:bg-zinc-700` → `bg-purple-primary-900/20`
- `bg-stone-50 dark:bg-zinc-700/30` → `bg-purple-primary-900/10`
- `bg-orange-*` → `bg-purple-primary-*`

### Borders:
- `border-stone-200 dark:border-zinc-700` → `border-purple-primary-600/30`
- `border-stone-300 dark:border-zinc-600` → `border-purple-primary-600/30`

### Buttons:
- `bg-orange-600 hover:bg-orange-700 text-white` → `btn-gradient`
- `bg-stone-200 dark:bg-zinc-700 text-stone-700 dark:text-zinc-300 hover:bg-stone-300 dark:hover:bg-zinc-600` → `btn-glass`

### Badges:
- `bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200` → `badge badge-purple`
- `px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm rounded-full` → `badge badge-purple`

### Charts:
- Orange colors (`#f97316`, `rgba(249, 115, 22, 0.5)`) → Purple (`#7c3aed`, `rgba(124, 58, 237, 0.2)`)

### Headers with Gradients:
Add `<span className="text-gradient">` around key words in headers
