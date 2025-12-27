# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **FL Studio Master Hub**, a comprehensive interactive reference platform for FL Studio users. Built with Next.js 14 and TypeScript, it provides an immersive learning experience with real-time search, interactive visualizations, AI-powered assistance, and curated workflows for music production.

The application is deployed as a **static site** to GitHub Pages, with no server-side runtime dependencies.

## Development Commands

### Development Server
```bash
npm run dev
# Runs on http://localhost:3003
```

### Build & Export
```bash
npm run build    # Creates production build
npm run start    # Runs production build locally
```

### Static Export (for GitHub Pages)
The app uses Next.js static export mode (`output: 'export'` in `next.config.js`). Build output goes to the `/out` directory.

### Linting
```bash
npm run lint
```

## Architecture Overview

### Core Technology Decisions

1. **Next.js 14 App Router**: Uses the modern App Router pattern with Server Components by default
2. **Static Site Generation**: Entire site is pre-rendered at build time (no SSR/ISR)
3. **TypeScript Strict Mode**: Full type safety across the codebase
4. **State Management**: React Context API via `AppContext.tsx` - no external state libraries
5. **Styling**: Tailwind CSS with custom purple glassmorphism design system
6. **Charts**: Chart.js via react-chartjs-2 for all data visualizations

### Key Architectural Patterns

#### 1. App Structure (Next.js App Router)
- `src/app/page.tsx` - Landing page
- `src/app/hub/page.tsx` - Main application hub with all feature sections
- `src/app/plugins/[id]/page.tsx` - Dynamic plugin detail pages
- `src/app/layout.tsx` - Root layout with metadata and global providers
- `src/app/providers.tsx` - Client-side provider wrapper (for AppContext)

#### 2. Component Organization
```
src/components/
├── sections/          # Feature-specific sections (20+ modules)
│   ├── Plugins.tsx            # Plugin database with search/filter
│   ├── WorkflowChains.tsx     # Signal flow visualizations
│   ├── ProjectTemplates.tsx   # Template editor
│   ├── Dojo.tsx              # Keyboard shortcut trainer
│   └── AIAssistant.tsx       # AI-powered recommendations
├── ui/                # Reusable UI primitives
│   ├── Badge.tsx
│   ├── GlassCard.tsx         # Core glassmorphism component
│   ├── GradientButton.tsx
│   └── PluginCard.tsx
├── layout/
│   ├── Navbar.tsx
│   └── Sidebar.tsx
└── CommandPalette.tsx # Global search (Cmd+K style)
```

Each section in `src/components/sections/` is a standalone feature module that can be imported into the hub page.

#### 3. Data Layer Architecture

**Plugin Data Pipeline:**
- Source: `fl_studio_plugin_blueprint_skeleton_128.json` (raw schema)
- Transform: `scripts/transform_plugins.py` converts to app schema
- Output: `src/data/plugins/allPlugins.json` (consumed by components)

**Supporting Data Files:**
- `capabilityMatrix.json` - Plugin capability mappings for filtering
- `searchIndex.json` - Optimized search index
- `taxonomy.json` - Category/family hierarchies
- `workflows.json` - Curated signal chain configurations

**Data Flow:**
```
Raw JSON → Python ETL script → App-ready JSON → TypeScript services → React components
```

#### 4. State Management via Context

`src/context/AppContext.tsx` provides global state:
- Dark mode toggle (defaults to dark, stored in localStorage)
- Active section tracking
- Mobile menu state
- Command palette visibility

**Pattern:**
```typescript
import { useAppContext } from '@/context/AppContext';

const { state, dispatch } = useAppContext();
dispatch({ type: 'TOGGLE_DARK_MODE' });
```

**Safe SSR usage:**
- Uses `useAppContextSafe()` for components that may render server-side
- Safe localStorage wrapper prevents hydration errors

#### 5. Type System

All types centralized in `src/types/`:
- `index.ts` - Core application types (Plugin, ProjectTemplate, SongTemplate, etc.)
- `pluginTypes.ts` - Extended plugin-specific types

**Key interfaces:**
```typescript
Plugin            // Core plugin data model
ProjectTemplate   // Full FL Studio project template
WorkflowChain     // Signal chain configurations
AppState          // Global application state
```

#### 6. Service Layer

Business logic isolated in `src/services/`:
- `pluginSearchService.ts` - Fuzzy search, filtering, ranking algorithms
- `projectTemplateService.ts` - Template CRUD and export logic
- `aiService.ts` - AI-powered recommendations (creative sparks, plugin suggestions)

These services are pure functions with no React dependencies, making them testable and reusable.

#### 7. Custom Hooks

React-specific logic in `src/hooks/`:
- `useChart.ts` - Chart.js lifecycle management
- `useDarkModeWithCharts.ts` - Theme switching that updates charts
- `usePluginSearch.ts` - Search state and debouncing

### Design System: Purple Glassmorphism

The app uses a cohesive design language defined in:
- `tailwind.config.ts` - Extended color palette, custom utilities
- `src/styles/globals.css` - CSS custom properties and global styles
- `docs/PURPLE_DESIGN_GUIDE.md` - Comprehensive design documentation

**Core Design Patterns:**

1. **Glassmorphism Cards:**
   ```tsx
   <GlassCard hover={true}>
     {/* Content with backdrop blur and subtle borders */}
   </GlassCard>
   ```

2. **Color Palette:**
   - Primary: Purple gradient (`purple-dark-800`, `purple-primary-700`)
   - Accent: Blue (`blue-accent-500`)
   - Background: Deep purple gradient (`bg-gradient-purple`)
   - Text: White primary, `purple-primary-300` secondary

3. **Badge System:**
   ```tsx
   <Badge variant="purple">Category</Badge>
   <Badge variant="premium">Premium</Badge>
   <Badge variant="free">Free</Badge>
   ```

### Static Export Configuration

**`next.config.js` key settings:**
```javascript
{
  output: 'export',           // Static HTML export
  images: { unoptimized: true }, // No Next.js Image Optimization API
  basePath: process.env.GITHUB_REPOSITORY ? `/${repo}` : '', // GitHub Pages support
  trailingSlash: true,        // Required for static hosting
}
```

**Important:**
- All images must use `<img>` or `next/image` with `unoptimized: true`
- No dynamic API routes or server-side functions
- All data must be available at build time

### Chart.js Integration

Charts use a **theme-aware pattern** where chart instances are stored in refs and updated when dark mode toggles:

```typescript
// In component:
const chartRef = useRef<Chart | null>(null);

// Create chart:
chartRef.current = new Chart(ctx, config);

// Update on theme change:
useEffect(() => {
  if (chartRef.current) {
    chartRef.current.options.scales.x.grid.color = isDark ? '#fff2' : '#0002';
    chartRef.current.update();
  }
}, [isDark]);
```

All charts must have:
- Fixed height containers (e.g., `h-[350px]`)
- `maintainAspectRatio: false` in options
- Theme-aware grid/tick colors

## Common Development Patterns

### Adding a New Plugin Data Field

1. Update the schema in `fl_studio_plugin_blueprint_skeleton_128.json`
2. Modify `scripts/transform_plugins.py` to extract the new field
3. Run the transform script to regenerate `allPlugins.json`
4. Update `src/types/pluginTypes.ts` or `src/types/index.ts` with the type
5. Use the new field in components (e.g., `PluginCard.tsx`)

### Adding a New Section to the Hub

1. Create `src/components/sections/YourSection.tsx`
2. Export the section component
3. Import and render it in `src/app/hub/page.tsx`
4. Add navigation entry in `Sidebar.tsx`
5. Update `AppContext` if the section needs global state

### Creating a New UI Component

1. Add to `src/components/ui/YourComponent.tsx`
2. Follow the glassmorphism design patterns (see `PURPLE_DESIGN_GUIDE.md`)
3. Use TypeScript props interface
4. Export for use in sections

### Handling SSR/Hydration Issues

Since Next.js App Router uses Server Components by default:
- Wrap client-interactive components with `'use client'` directive
- Use `useAppContextSafe()` instead of `useAppContext()` in layout components
- Safe localStorage wrapper in `AppContext.tsx` prevents window access errors
- Use `suppressHydrationWarning` on `<body>` in root layout

## Path Aliases

TypeScript is configured with `@/` alias:
```typescript
import { Plugin } from '@/types';
import { searchPlugins } from '@/services/pluginSearchService';
import { GlassCard } from '@/components/ui/GlassCard';
```

Corresponds to `src/*` directory.

## Data Processing

When updating plugin data:
```bash
cd scripts
python transform_plugins.py
```

This reads from `fl_studio_plugin_blueprint_skeleton_128.json` and outputs to `src/data/plugins/allPlugins.json`.

## Important Design Constraints

1. **No Orange Theme**: The original orange theme has been fully migrated to purple glassmorphism. Do not use orange colors unless explicitly requested.

2. **Glassmorphism Over Solid Cards**: Always prefer `GlassCard` over solid background cards. Use `backdrop-filter: blur()` patterns.

3. **Dark Mode First**: The app is designed dark-first. Light mode is secondary.

4. **Static Data Only**: All data must be JSON files in `src/data/`. No database or API calls.

5. **No Runtime Dependencies**: The exported static site must run entirely client-side.

## Testing Workflow

1. Run `npm run dev` to test locally on port 3003
2. Test dark mode toggle functionality
3. Verify all charts render and update with theme changes
4. Test responsive behavior (mobile sidebar, card grids)
5. Run `npm run build` to ensure static export succeeds
6. Test the exported site by serving the `out/` directory

## Performance Considerations

- Charts can be heavy: Lazy load sections when possible
- Plugin data is ~130 items: Search/filter must be performant
- Avoid unnecessary re-renders: Use React.memo for expensive components
- Images should be optimized manually (no Next.js Image Optimization in static mode)

## File Naming Conventions

- Components: PascalCase (e.g., `GlassCard.tsx`)
- Services: camelCase (e.g., `pluginSearchService.ts`)
- Types: index.ts or descriptive name (e.g., `pluginTypes.ts`)
- Data files: camelCase JSON (e.g., `allPlugins.json`)
