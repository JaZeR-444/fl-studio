# FL Studio Purple Glassmorphic Design Guide

This document outlines the new purple-themed, glassmorphic design system inspired by the STACKA wireframes.

## 🎨 Design Philosophy

The new design embraces:
- **Deep purple gradients** for immersive backgrounds
- **Glassmorphism** for modern, translucent UI elements
- **Purple/blue accents** replacing the previous orange theme
- **Glowing effects** for interactive elements
- **Badge/pill system** for categorization
- **High contrast** white text on dark purple backgrounds

## 🌈 Color Palette

### Purple Theme Colors

```typescript
// Primary Purple Shades
'purple-dark': {
  900: '#0f051e',  // Darkest background
  800: '#1a0a2e',  // Primary background
  700: '#2d1b4e',  // Secondary background
  600: '#3d2663',
  500: '#4c3177',
}

'purple-primary': {
  900: '#5b21b6',
  800: '#6d28d9',
  700: '#7c3aed',  // Primary accent
  600: '#8b5cf6',  // Bright accent
  500: '#a78bfa',
  400: '#c4b5fd',
  300: '#ddd6fe',  // Secondary text
  200: '#e9d5ff',  // Primary light text
  100: '#f3e8ff',
}

'blue-accent': {
  700: '#1d4ed8',
  600: '#2563eb',
  500: '#3b82f6',  // Primary blue
  400: '#60a5fa',
  300: '#93c5fd',
}
```

### Special Effects

```css
--purple-bg-start: #1a0a2e;
--purple-bg-mid: #2d1b4e;
--purple-bg-end: #16213e;
--purple-accent: #7c3aed;
--purple-accent-bright: #8b5cf6;
--glow-purple: rgba(124, 58, 237, 0.4);
```

## 📦 Components

### 1. Badge Component

Used for tags, categories, and status indicators.

**Usage:**
```tsx
import { Badge } from '@/components/ui/Badge';

<Badge variant="purple">Category</Badge>
<Badge variant="blue">Tag</Badge>
<Badge variant="premium">Premium</Badge>
<Badge variant="paid">Paid</Badge>
<Badge variant="free">Free</Badge>
```

**Variants:**
- `purple` - Default purple badge
- `blue` - Blue accent badge
- `premium` - Gradient premium badge
- `paid` - Blue paid indicator
- `free` - Purple free indicator

### 2. GlassCard Component

Main container for content with glassmorphic effect.

**Usage:**
```tsx
import { GlassCard } from '@/components/ui/GlassCard';

<GlassCard hover={true}>
  <h3 className="text-white">Card Title</h3>
  <p className="text-purple-primary-300">Card content...</p>
</GlassCard>
```

**Props:**
- `children: ReactNode` - Card content
- `className?: string` - Additional classes
- `hover?: boolean` - Enable hover effects (default: true)
- `onClick?: () => void` - Click handler

### 3. StatCard Component

For displaying statistics (like "50+ Launches", "10K+ Users").

**Usage:**
```tsx
import { StatCard } from '@/components/ui/GlassCard';

<StatCard
  icon="🚀"
  value="50+"
  label="Launches This Month"
/>
```

### 4. GradientButton Component

Buttons with gradient or glass styling.

**Usage:**
```tsx
import { GradientButton } from '@/components/ui/GradientButton';

<GradientButton variant="gradient" onClick={handleClick}>
  Explore Tools
</GradientButton>

<GradientButton variant="glass">
  Learn More
</GradientButton>
```

**Variants:**
- `gradient` - Purple to blue gradient button
- `glass` - Glassmorphic button

## 🎭 CSS Classes

### Glassmorphism

```tsx
// Pre-defined glass card
<div className="glass-card">...</div>

// Sidebar glass effect
<div className="glass-sidebar">...</div>

// Content card with hover
<div className="content-card">...</div>

// Stat card
<div className="stat-card">...</div>
```

### Glow Effects

```tsx
// Static purple glow
<div className="purple-glow">...</div>

// Glow on hover
<div className="purple-glow-hover">...</div>
```

### Text Styles

```tsx
// Gradient text (purple to blue)
<h1 className="text-gradient">Gradient Title</h1>

// Glowing text
<p className="glow-text">Glowing Text</p>

// Standard text colors
<p className="text-white">Primary text</p>
<p className="text-purple-primary-200">Highlighted text</p>
<p className="text-purple-primary-300">Secondary text</p>
<p className="text-purple-primary-400">Tertiary text</p>
```

### Buttons

```tsx
// Gradient button
<button className="btn-gradient">Click Me</button>

// Glass button
<button className="btn-glass">Click Me</button>
```

## 🏗️ Layout Guidelines

### Background

The app uses a fixed purple gradient background with radial overlay:

```tsx
// Automatically applied via globals.css
body {
  background: linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #16213e 100%);
}
```

### Sidebar

Updated with glassmorphic styling:

```tsx
<aside className="glass-sidebar">
  {/* Navigation items with purple highlights */}
</aside>
```

### Content Area

```tsx
<main className="flex-1 h-full overflow-y-auto pt-16 md:pt-0 relative z-10">
  <div className="max-w-5xl mx-auto p-6 md:p-12">
    {/* Content goes here */}
  </div>
</main>
```

## 🎯 Design Patterns

### Hero Section

```tsx
<div className="text-center space-y-4">
  <h1 className="text-4xl md:text-5xl font-bold text-white">
    Discover the Best <span className="text-gradient">FL Studio</span> Resources
  </h1>
  <p className="text-lg text-purple-primary-300 max-w-2xl mx-auto">
    Your description here
  </p>
  <div className="flex gap-3 justify-center">
    <GradientButton variant="gradient">Primary CTA</GradientButton>
    <GradientButton variant="glass">Secondary CTA</GradientButton>
  </div>
</div>
```

### Stats Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <StatCard icon="🚀" value="50+" label="Metric 1" />
  <StatCard icon="👥" value="10K+" label="Metric 2" />
  <StatCard icon="⭐" value="5K+" label="Metric 3" />
</div>
```

### Content Cards

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <GlassCard>
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="font-bold text-white text-lg">Title</h3>
        <p className="text-sm text-purple-primary-300">Subtitle</p>
      </div>
      <Badge variant="premium">Premium</Badge>
    </div>
    <p className="text-purple-primary-300 text-sm mb-3">
      Description text
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="purple">Tag 1</Badge>
      <Badge variant="blue">Tag 2</Badge>
    </div>
  </GlassCard>
</div>
```

## 🔄 Migration from Old Design

### Color Replacements

| Old Color | New Color |
|-----------|-----------|
| `text-orange-600` | `text-gradient` or `text-purple-primary-700` |
| `bg-orange-50` | `bg-purple-primary-700/40` |
| `text-stone-800` | `text-white` |
| `text-stone-500` | `text-purple-primary-300` |
| `bg-white` | `glass-card` or `content-card` |
| `dark:bg-zinc-800` | `glass-card` or `content-card` |
| `border-stone-200` | `border-purple-primary-700/30` |

### Component Updates

**Old:**
```tsx
<div className="bg-white dark:bg-zinc-800 rounded-xl border border-stone-200">
  <h3 className="text-stone-800 dark:text-white">Title</h3>
  <span className="bg-orange-100 text-orange-800">Tag</span>
</div>
```

**New:**
```tsx
<GlassCard>
  <h3 className="text-white">Title</h3>
  <Badge variant="purple">Tag</Badge>
</GlassCard>
```

## 📱 Responsive Considerations

- Cards automatically adapt with proper padding
- Grid layouts use `grid-cols-1 md:grid-cols-2` or `md:grid-cols-3`
- Text sizes scale with `text-base md:text-lg`
- Buttons maintain size but may stack on mobile

## ✨ Animation Guidelines

All interactive elements include smooth transitions:

```css
transition: all 0.3s ease;
```

Hover effects:
- Cards: `transform: translateY(-4px)` + purple glow
- Buttons: `transform: translateY(-2px)` + shadow increase
- Nav items: Background color + glow effect

## 🎬 See It In Action

Check out the `DesignShowcase` component for a comprehensive example:

```tsx
import { DesignShowcase } from '@/components/ui/DesignShowcase';

// Use in any section to see all design elements
<DesignShowcase />
```

## 📚 Reference

- **Wireframes**: See `FL STUDIO WIREFRAME.webp` and `FL STUDIO MOBILE WIREFRAME.webp`
- **Tailwind Config**: `tailwind.config.ts`
- **Global Styles**: `src/styles/globals.css`
- **Example Components**: `src/components/ui/`

---

**Pro Tip**: When creating new components, always start with a `GlassCard` wrapper and use the predefined color classes for consistency!
