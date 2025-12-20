# Migration Checklist: Orange Theme → Purple Glassmorphic Theme

## ✅ Completed

- [x] Global CSS with purple gradient background
- [x] Tailwind configuration with purple color palette
- [x] Sidebar component redesigned
- [x] Main page layout updated
- [x] Badge component system created
- [x] GlassCard component created
- [x] GradientButton component created
- [x] StatCard component created
- [x] PluginCard component updated as example
- [x] DesignShowcase component for reference

## 🔄 To Update

### Section Components

Update each section component in `src/components/sections/`:

- [ ] **MentalModel.tsx**
  - Replace card backgrounds with `GlassCard`
  - Update text colors to purple theme
  - Add badges where appropriate

- [ ] **Modules.tsx**
  - Update card styling
  - Replace orange accents with purple
  - Use new badge system

- [ ] **Dojo.tsx**
  - Update flashcard styling
  - Replace border/background colors
  - Use glassmorphic effects

- [ ] **Templates.tsx**
  - Update template cards
  - Add purple badges for categories
  - Use gradient buttons

- [ ] **Audio.tsx**
  - Update all cards to glassmorphic style
  - Replace text colors
  - Add badges for audio settings

- [ ] **Utilities.tsx**
  - Update calculator cards
  - Replace stone/zinc colors
  - Use purple theme throughout

- [ ] **Plugins.tsx**
  - Already uses PluginCard (updated)
  - Update any additional elements
  - Check filter/search UI

- [ ] **AIAssistant.tsx**
  - Update chat interface
  - Use glassmorphic message bubbles
  - Purple gradient for AI responses

- [ ] **Mixing.tsx**
  - Update mixing console cards
  - Replace orange indicators with purple
  - Use badge system for settings

- [ ] **Export.tsx**
  - Update export option cards
  - Add badges for formats
  - Use gradient buttons for actions

- [ ] **Troubleshoot.tsx**
  - Update FAQ cards
  - Use glassmorphic accordions
  - Purple highlights for active items

- [ ] **ProjectTemplates.tsx**
  - Update template cards
  - Add premium badges
  - Use gradient buttons for downloads

- [ ] **WorkflowVisualizations.tsx**
  - Update chart containers
  - Purple color scheme for charts
  - Glassmorphic chart backgrounds

- [ ] **MidiMappingReference.tsx**
  - Update mapping cards
  - Purple theme for keybindings
  - Use badge system for categories

- [ ] **AudioAnalysis.tsx**
  - Update analysis cards
  - Purple chart colors
  - Glassmorphic containers

- [ ] **PluginsDatabase.tsx**
  - Update database cards
  - Use PluginCard component
  - Purple filter UI

- [ ] **NativeAdvantages.tsx**
  - Update advantage cards
  - Premium badges for features
  - Gradient highlights

- [ ] **WorkflowChains.tsx**
  - Update chain visualization
  - Purple connections
  - Glassmorphic node cards

- [ ] **SynthesisHistory.tsx**
  - Update timeline cards
  - Purple theme for eras
  - Badges for synth types

### UI Components

- [ ] **CapabilityFilter.tsx**
  - Update filter buttons
  - Purple theme for selections
  - Glassmorphic filter panel

- [ ] **TemplateEditor.tsx**
  - Update editor interface
  - Purple code highlighting
  - Glassmorphic panels

- [ ] **SettingsPanel.tsx**
  - Update settings cards
  - Purple toggles/switches
  - Glassmorphic overlay

### Context & State

- [ ] **AppContext.tsx**
  - Review if any theme-related state needs updating
  - Dark mode might be redundant (always dark now)

## 🎨 Quick Update Pattern

For each component, follow this pattern:

### 1. Update Imports
```tsx
import { Badge } from '@/components/ui/Badge';
import { GlassCard, StatCard } from '@/components/ui/GlassCard';
import { GradientButton } from '@/components/ui/GradientButton';
```

### 2. Replace Card Wrappers
```tsx
// Old
<div className="bg-white dark:bg-zinc-800 rounded-lg border border-stone-200">

// New
<GlassCard>
```

### 3. Update Text Colors
```tsx
// Old
className="text-stone-800 dark:text-white"
className="text-stone-500 dark:text-zinc-400"
className="text-orange-600"

// New
className="text-white"
className="text-purple-primary-300"
className="text-gradient"
```

### 4. Replace Badges/Tags
```tsx
// Old
<span className="px-2 py-1 bg-orange-100 text-orange-800 rounded">Tag</span>

// New
<Badge variant="purple">Tag</Badge>
```

### 5. Update Buttons
```tsx
// Old
<button className="bg-orange-500 text-white rounded px-4 py-2">Click</button>

// New
<GradientButton variant="gradient">Click</GradientButton>
```

### 6. Update Borders
```tsx
// Old
className="border-stone-200 dark:border-zinc-700"

// New
className="border-purple-primary-700/30"
```

## 🧪 Testing Checklist

After updating each section:

- [ ] Verify purple gradient background is visible
- [ ] Check all cards have glassmorphic effect
- [ ] Ensure text is readable (white on purple)
- [ ] Test hover effects on interactive elements
- [ ] Verify badges display correctly
- [ ] Check responsive behavior on mobile
- [ ] Test dark mode toggle (if still relevant)
- [ ] Verify smooth transitions/animations

## 📊 Chart.js Updates

For components with charts:

```tsx
// Update chart colors to purple theme
const chartConfig = {
  backgroundColor: 'rgba(124, 58, 237, 0.2)',
  borderColor: '#7c3aed',
  pointBackgroundColor: '#8b5cf6',
  // ... etc
};
```

## 🚀 Priority Order

Recommended update order:

1. **High Traffic Sections** (most visible)
   - MentalModel (home)
   - Modules
   - Plugins/PluginsDatabase

2. **Interactive Sections**
   - AIAssistant
   - Dojo
   - TemplateEditor

3. **Utility Sections**
   - Utilities
   - Mixing
   - Audio

4. **Reference Sections**
   - All remaining sections

## 🛠️ Commands

```bash
# Run development server to see changes
npm run dev

# Check for TypeScript errors
npx tsc --noEmit

# Build for production
npm run build
```

## 📝 Notes

- Remove any dark mode conditional logic that's no longer needed
- Keep responsive design patterns
- Maintain accessibility (contrast ratios)
- Test on different browsers
- Consider creating section-specific components if patterns repeat

## 🎯 Goal

Transform the entire FL Studio Hub into a cohesive purple glassmorphic experience matching the STACKA wireframe aesthetic!

---

**Progress**: 10/30 components updated
**Estimated Time**: 2-4 hours for remaining updates
