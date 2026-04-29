# FL Studio Plugin Deep Dives - QWEN Context

## Project Overview

This repository is a comprehensive research collection focused on advanced FL Studio plugin usage, technical analysis, and workflow optimization. It contains detailed documentation for each FL Studio plugin, emphasizing:

- Technical specifications and signal flow analysis
- Advanced usage techniques beyond basic tutorials
- Workflow optimization for specific production contexts
- Cross-plugin integration strategies
- Research-based insights from official documentation and experimentation

The project organizes documentation for over 100 FL Studio plugins, ranging from instruments/generators like Harmor and Sytrus to effects like Fruity Compressor and Gross Beat.

## Directory Structure

The repository follows a consistent structure where each plugin has its own top-level directory with the following subdirectories:

```
PluginName/
├── README.md (main documentation with research guidelines)
├── 00-START-HERE.md (initial setup guide)
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md
│   │   └── signal-flow.md
├── 02-Data/
│   ├── parameters/
│   │   └── specs.json
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── workflow1.md
│   │   └── workflow2.md
│   └── by-context/
│       ├── context1.md
│       └── context2.md
└── 04-Reference/
    └── advanced-topics.md
```

## Key Files and Assets

- `README.md` - Main project overview and documentation standards
- `AGENTS.md` - Repository guidelines and project structure information
- `globals.css` - Tailwind CSS with custom glassmorphism design system in dark purple theme
- `EXAMPLE-PLUGIN-PAGE-LAYOUT.html` - HTML template for plugin documentation pages
- `fl-studio-online-manual-plugin-pages.md` - Direct links to official FL Studio online manual pages
- Various documentation files in different formats (Markdown, JSON)

## Development and Documentation Standards

### File Naming Conventions
- Markdown files: `kebab-case.md` (e.g., `parameter-cheat-sheet.md`)
- JSON files: `kebab-case.json`; JSON keys use `camelCase`
- Plugin folders: Title Case with spaces, matching official plugin names

### Documentation Framework

#### Research Phases:
1. **Basic Exploration (Week 1)**: Understand primary function, document parameters, create cheat sheets
2. **Advanced Features (Week 2)**: Explore unique capabilities, document signal flow
3. **Integration & Optimization (Week 3)**: Test plugin integration, develop optimization techniques

#### Priority Levels:
- ⭐ HIGH PRIORITY: Essential documentation that enables basic usage
- 🟡 MEDIUM PRIORITY: Advanced features and optimization techniques
- 🔵 LOW PRIORITY: Specialized applications and edge cases

## Technology Stack

The project primarily uses:
- Markdown for documentation
- HTML/CSS (with Tailwind) for web-based documentation layouts
- JSON for structured data representation
- Custom CSS with glassmorphism effects in a dark purple theme

## Building and Running

This is a documentation-focused repository with no traditional build system. The project consists of static files that can be viewed directly or served via a web server. The HTML templates can be opened directly in browsers or hosted on a local server for full functionality.

## Special Directories

- `_screenshots/` - Contains UI screenshots for documentation
- `.DONE/` - Archive for completed plugin documentation
- `openspec/` - OpenSpec workflow files
- Various plugin-specific directories named after FL Studio plugins

## Contribution Guidelines

The project follows a structured approach to plugin documentation:
1. Navigate to the plugin directory you want to explore
2. Read the plugin's README.md file for specific research guidelines
3. Follow the priority documentation checklist
4. Create required research files as outlined in the documentation standards

## Tools and Resources

### Official Documentation References
- FL Studio Online Manual links are maintained in `fl-studio-online-manual-plugin-pages.md`
- Community resources and forums are referenced in the main README

### Technical Analysis Tools (Referenced)
- Edison for audio analysis and editing
- Fruity Spectroman for spectrum visualization
- Fruity Limiter for loudness measurement
- Fruity Big Clock for timing analysis

## Project Status

The repository is actively organized with documentation for numerous FL Studio plugins. Each plugin directory is intended to contain comprehensive research following the standardized structure. The project emphasizes deep technical understanding of each plugin's capabilities and optimal usage scenarios.