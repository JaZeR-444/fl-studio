# FL Studio Master Hub

<div align="center">

![FL Studio Master Hub](./FL-Studio-Master-Hub-WHITE-TEXT-LOGO.svg)

**The Complete FL Studio Reference Platform**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.5-FF6384?style=for-the-badge&logo=chart.js)](https://www.chartjs.org/)

[**View Live Deployment**](https://jazer-444.github.io/fl-studio/) • [**Report Bug**](https://github.com/jazer-444/fl-studio/issues) • [**Request Feature**](https://github.com/jazer-444/fl-studio/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build & Deploy](#build--deploy)
- [Project Structure](#-project-structure)
- [Feature Modules](#-feature-modules)
- [Data Architecture](#-data-architecture)
- [Design System](#-design-system)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**FL Studio Master Hub** is a comprehensive, interactive reference platform designed to help music producers master FL Studio's native toolkit. Built with modern web technologies, it provides an immersive learning experience with real-time search, interactive visualizations, AI-powered assistance, and curated workflows.

### The Problem We Solve

Music producers face "plugin paralysis" when confronted with FL Studio's extensive library of 50+ native plugins. Without proper documentation and guidance:

- Producers waste time searching for the right plugin
- Native tools are underutilized in favor of expensive third-party alternatives
- Workflow optimization opportunities are missed
- Learning curve remains steep for beginners

### Our Solution

FL Studio Master Hub provides a centralized intelligence platform that enables producers to:

✅ **Discover** plugins through advanced search and filtering
✅ **Learn** through interactive documentation and visual guides
✅ **Apply** professional workflows and production templates
✅ **Optimize** their workflow with keyboard shortcuts and automation
✅ **Create** better music faster using native tools exclusively

---

## ✨ Key Features

### 🔍 **Intelligent Plugin Database**
- **50+ Native Plugins** fully documented with detailed specifications
- **Advanced Search** with fuzzy matching, tag filtering, and capability-based queries
- **CPU Performance Metrics** to optimize resource usage
- **Use Case Recommendations** based on production context
- **Interactive Plugin Cards** with ratings across 5+ dimensions (Sound Design, Ease of Use, CPU Efficiency, etc.)

### 🎛️ **Professional Workflow Chains**
- **25+ Pre-built Signal Chains** for vocals, drums, bass, mastering, and more
- **Visual Signal Flow Diagrams** showing plugin routing and order
- **Copy-Paste Ready** configurations for immediate use
- **Genre-Specific Workflows** (Trap, House, Lo-fi, Techno, etc.)
- **Mixing & Mastering Chains** using purely native tools

### 🎨 **Project Templates**
- **30+ Genre-Specific Templates** with pre-configured channels, mixer tracks, and routing
- **Visual Template Editor** to customize and export templates
- **BPM & Key Presets** aligned with genre conventions
- **Layered Structure Visualization** for understanding arrangement patterns

### 📚 **Learning Resources**
- **Quick Start Guides** for beginners to get producing in minutes
- **Mental Models** explaining FL Studio's architecture and philosophy
- **Synthesis History** educational module covering FM, Subtractive, Granular, and more
- **Audio Analysis** section with frequency charts and waveform explanations
- **Troubleshooting Guide** for common production issues

### ⚡ **Productivity Tools**
- **Shortcut Dojo** with 47+ keyboard shortcuts and practice mode
- **MIDI Mapping Reference** for hardware controller setup
- **Export Settings Calculator** for optimal bounce settings
- **Sample Pack Reference** with categorized native samples

### 🤖 **AI-Powered Assistant**
- **Creative Spark Generator** for overcoming writer's block
- **Contextual Plugin Recommendations** based on project requirements
- **Workflow Suggestions** powered by production best practices

### 🎨 **Modern Design**
- **Glassmorphism UI** with backdrop blur effects
- **Dark/Light Theme Support** with synchronized chart updates
- **Fully Responsive** design for desktop, tablet, and mobile
- **Smooth Animations** and transitions for enhanced UX
- **Accessibility-First** approach with semantic HTML and ARIA labels

---

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library with Server Components
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[TailwindCSS 3.3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **CSS Custom Properties** - Dynamic theming system

### Data Visualization
- **[Chart.js 4.5](https://www.chartjs.org/)** - Interactive charts (radar, bar, line, bubble)
- **[react-chartjs-2](https://react-chartjs-2.js.org/)** - React wrapper for Chart.js

### Development Tools
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Browser compatibility
- **ESLint** - Code linting
- **Prettier** - Code formatting

### Deployment
- **[GitHub Pages](https://pages.github.com/)** - Static hosting via `gh-pages` branch
- **Static Export** - Pre-rendered HTML for optimal performance

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/jazer-444/fl-studio.git
cd fl-studio
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3003`

### Build & Deploy

**Build for production:**

```bash
npm run build
# or
yarn build
```

**Export static site:**

```bash
npm run export
# or
yarn export
```

The static files will be generated in the `/out` directory.

**Deploy to GitHub Pages:**

```bash
npm run deploy
# or
yarn deploy
```

---

## 📁 Project Structure

```
fl-studio/
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   └── favicon.ico              # Site favicon
│
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── page.tsx             # Landing page
│   │   ├── hub/                 # Main hub application
│   │   │   └── page.tsx         # Hub page with all sections
│   │   ├── plugins/             # Individual plugin pages
│   │   │   └── [id]/page.tsx    # Dynamic plugin detail pages
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── providers.tsx        # Context providers
│   │
│   ├── components/              # React components
│   │   ├── sections/            # Feature-specific sections
│   │   │   ├── Plugins.tsx              # Plugin database
│   │   │   ├── WorkflowChains.tsx       # Workflow visualizations
│   │   │   ├── Templates.tsx            # Project templates
│   │   │   ├── ProjectTemplates.tsx     # Advanced template editor
│   │   │   ├── Dojo.tsx                 # Keyboard shortcut trainer
│   │   │   ├── AIAssistant.tsx          # AI-powered assistant
│   │   │   ├── Mixing.tsx               # Mixing & mastering guide
│   │   │   ├── QuickStartGuides.tsx     # Beginner tutorials
│   │   │   ├── MentalModel.tsx          # FL Studio architecture
│   │   │   ├── SynthesisHistory.tsx     # Synthesis education
│   │   │   ├── AudioAnalysis.tsx        # Audio theory
│   │   │   ├── Troubleshoot.tsx         # Problem solver
│   │   │   ├── Export.tsx               # Export settings
│   │   │   ├── MidiMappingReference.tsx # MIDI controller setup
│   │   │   ├── GenrePresets.tsx         # Genre-specific presets
│   │   │   ├── MixerTemplates.tsx       # Mixer configurations
│   │   │   ├── SamplePackReference.tsx  # Sample library guide
│   │   │   └── Utilities.tsx            # Utility tools
│   │   │
│   │   ├── ui/                  # Reusable UI primitives
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── CapabilityFilter.tsx
│   │   │   └── SearchBar.tsx
│   │   │
│   │   ├── SettingsPanel.tsx    # Global settings
│   │   └── TemplateEditor.tsx   # Template customization
│   │
│   ├── data/                    # JSON datasets
│   │   └── plugins/
│   │       ├── allPlugins.json         # Complete plugin database (50+)
│   │       ├── capabilityMatrix.json   # Plugin capability mappings
│   │       ├── searchIndex.json        # Optimized search index
│   │       ├── taxonomy.json           # Plugin categorization
│   │       └── workflows.json          # Curated workflow chains
│   │
│   ├── services/                # Business logic
│   │   ├── aiService.ts                # AI integration
│   │   ├── pluginSearchService.ts      # Search algorithms
│   │   └── projectTemplateService.ts   # Template management
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useChart.ts                 # Chart.js integration
│   │   ├── useDarkModeWithCharts.ts    # Theme management
│   │   └── usePluginSearch.ts          # Search state
│   │
│   ├── utils/                   # Utility functions
│   │   ├── chartUtils.ts               # Chart configuration
│   │   └── theme.ts                    # Theme utilities
│   │
│   ├── types/                   # TypeScript definitions
│   │   └── index.ts                    # All type definitions
│   │
│   └── styles/                  # Global styles
│       └── globals.css                 # CSS custom properties
│
├── scripts/                     # Data processing scripts
│   └── transform_plugins.py            # Plugin data ETL pipeline
│
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

---

## 🧩 Feature Modules

### Plugin Database (`Plugins.tsx`)
- Dynamic filtering by category, capabilities, and CPU efficiency
- Search with fuzzy matching
- Sortable comparison table
- Individual plugin detail pages with radar charts

### Workflow Chains (`WorkflowChains.tsx`)
- Visual signal flow diagrams
- Genre-specific chain recommendations
- Interactive plugin tooltips
- Downloadable presets

### Project Templates (`ProjectTemplates.tsx`)
- Visual template editor with drag-and-drop
- Channel rack configuration
- Mixer track setup with effect chains
- Pattern and playlist arrangement
- Export/import template JSON

### Shortcut Dojo (`Dojo.tsx`)
- Flashcard-style training mode
- Category-based practice (Navigation, Editing, Playback, etc.)
- Progress tracking
- Keyboard visualization

### AI Assistant (`AIAssistant.tsx`)
- Creative spark generation (random project ideas)
- Plugin recommendation engine
- Workflow suggestions
- Production tips

### Mixing Guide (`Mixing.tsx`)
- Frequency spectrum reference charts
- EQ curve visualization
- Dynamics processing examples
- Mastering chain templates

---

## 📊 Data Architecture

### Plugin Schema

Each plugin in `allPlugins.json` follows this structure:

```typescript
interface Plugin {
  id: string;
  name: string;
  type: 'Synthesizer' | 'Effect' | 'Utility' | 'Generator';
  category: string; // e.g., 'FM Synth', 'Compressor', 'Reverb'
  description: string;

  ratings: {
    soundDesign: number;    // 1-5
    ease: number;           // 1-5
    cpu: number;            // 1-5 (higher = more efficient)
    organic: number;        // 1-5
    bass: number;           // 1-5
  };

  capabilities: string[];   // ['Automation', 'MIDI', 'Sidechain', etc.]
  useCases: string[];       // ['Lead synth', 'Pad', 'Bass', etc.]
  tier: 'Free' | 'Producer' | 'Signature' | 'All Plugins';
  cpuUsage: 'Low' | 'Medium' | 'High' | 'Very High';

  additionalInfo?: {
    presets?: number;
    oscillators?: number;
    filters?: number;
    effects?: string[];
    modulation?: string[];
  };
}
```

### Workflow Schema

Workflows in `workflows.json`:

```typescript
interface Workflow {
  id: string;
  name: string;
  category: 'Vocal' | 'Drum' | 'Master' | 'Bass' | 'Mix';
  genre?: string[];
  plugins: Array<{
    name: string;
    order: number;
    purpose: string;
    settings?: string;
  }>;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}
```

---

## 🎨 Design System

### Color Palette

```css
:root {
  /* Primary Colors */
  --primary: #FF9500;           /* Orange - Primary accent */
  --primary-light: #FFB340;     /* Light orange */
  --secondary: #5856D6;         /* Purple - Secondary accent */
  --accent-primary: #FF9500;    /* Consistent with primary */

  /* Background */
  --bg-app: #0F0F0F;           /* Main background */
  --bg-card: rgba(255, 255, 255, 0.05);
  --bg-card-hover: rgba(255, 255, 255, 0.1);

  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #ABABAB;
  --text-muted: #6B6B6B;

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-medium: rgba(255, 255, 255, 0.2);
}
```

### Typography

- **Headings**: System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI'...`)
- **Body**: Same system font for consistency and performance
- **Monospace**: `'SF Mono', 'Monaco', 'Courier New'` for code snippets

### Glassmorphism

Signature design pattern applied to cards and modals:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

### Animations

- **Fade-in on load**: `animate-fade-in-up`
- **Pulse glow**: For hero background gradients
- **Hover scale**: `hover:scale-[1.02]` on interactive elements
- **Smooth transitions**: `transition-all duration-300`

---

## ⚡ Performance

### Optimization Strategies

1. **Static Site Generation**: Entire site pre-rendered at build time
2. **Image Optimization**: Next.js automatic image optimization (when using `next/image`)
3. **Code Splitting**: Automatic route-based code splitting
4. **CSS Purging**: Tailwind removes unused styles in production
5. **Lazy Loading**: Components loaded on-demand
6. **Minimal Dependencies**: Only essential libraries included

### Bundle Size

| Asset Type | Size (Gzipped) |
|-----------|----------------|
| HTML      | ~30 KB         |
| CSS       | ~12 KB         |
| JavaScript| ~180 KB        |
| Total     | ~222 KB        |

### Lighthouse Score

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Reporting Bugs

1. Check existing [issues](https://github.com/jazer-444/fl-studio/issues) first
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser/OS information

### Suggesting Features

Open an issue with the `enhancement` label and describe:
- The problem your feature solves
- Your proposed solution
- Alternative approaches considered
- Additional context (mockups, examples, etc.)

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly
5. Commit with conventional commits (`git commit -m 'feat: Add amazing feature'`)
6. Push to your branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

### Development Guidelines

- Follow the existing code style (enforced by ESLint/Prettier)
- Write TypeScript with strict type checking
- Add comments for complex logic
- Test on multiple browsers
- Keep components focused and reusable
- Update documentation as needed

---

## 📄 License

© 2025 JaZeR. All rights reserved.

This project is provided **for educational purposes** to support the music production community.

**Usage Terms:**
- ✅ Free to use for personal learning and reference
- ✅ Fork and customize for personal projects
- ❌ Commercial redistribution prohibited without permission
- ❌ Reselling or rebranding prohibited

**Disclaimer:** This is an unofficial community project. FL Studio and Image-Line are trademarks of their respective owners. This project is not affiliated with, endorsed by, or connected to Image-Line Software.

---

## 🙏 Acknowledgments

### Inspiration & Resources

- **[Image-Line](https://www.image-line.com/)** - For creating FL Studio
- **FL Studio Community** - For years of knowledge sharing
- **[Next.js Team](https://nextjs.org/)** - For the amazing framework
- **[Vercel](https://vercel.com/)** - For development tools and inspiration

### Data Sources

Plugin information compiled from:
- Official FL Studio documentation
- Community forums and Reddit
- Producer interviews and tutorials
- Personal production experience

### Special Thanks

To all music producers who contribute to the FL Studio community through tutorials, presets, and shared knowledge. This project exists because of your generosity.

---

## 📞 Contact & Support

- **Author**: JaZeR
- **GitHub**: [@jazer-444](https://github.com/jazer-444)
- **Issues**: [GitHub Issues](https://github.com/jazer-444/fl-studio/issues)
- **Discussions**: [GitHub Discussions](https://github.com/jazer-444/fl-studio/discussions)

---

<div align="center">

**Built with ❤️ for the music production community**

[⬆ Back to Top](#fl-studio-master-hub)

</div>
