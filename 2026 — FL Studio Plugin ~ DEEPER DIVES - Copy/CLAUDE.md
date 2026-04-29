# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **comprehensive FL Studio plugin research repository** containing deep-dive documentation, structured data models, and educational materials for FL Studio's entire plugin ecosystem. The repository serves as both a knowledge base and a framework for building intelligent plugin interfaces.

**Key Components:**
- 100+ plugin directories with standardized documentation structure
- Structured JSON data models for plugin parameters and presets
- Web-based plugin dashboard interface with glassmorphism design
- OpenSpec integration for standardized plugin specifications

## Repository Architecture

### Top-Level Structure

```
FL Studio Plugin ~ DEEPER DIVES/
├── [Plugin Directories]/        # 100+ individual plugin folders
├── .DONE/                       # Completed plugin documentation
├── openspec/                    # OpenSpec framework integration
├── EXAMPLE-PLUGIN-PAGE-LAYOUT.html  # Web UI template
├── globals.css                  # Shared CSS design system
├── README.md                    # Main repository documentation
├── README.txt                   # Design bible & interface spec
└── fl-studio-online-manual-plugin-pages.md  # Official manual links
```

### Plugin Folder Standard Structure

Each plugin follows this consistent organization pattern:

```
PluginName/
├── README.md                    # Plugin research guidelines
├── 00-START-HERE.md            # Quick navigation guide
├── CLAUDE.md                   # Plugin-specific Claude guidance (optional)
│
├── 01-Learning/                # Educational content
│   ├── README.md              # Learning paths and tips
│   ├── Quick-Reference/       # Cheat sheets and diagrams
│   ├── Concepts/              # Core theory and principles
│   └── Band-Guide/            # Component-specific guides (for multi-component plugins)
│
├── 02-Data/                   # Structured JSON data
│   ├── README.md             # Data usage documentation
│   ├── schema/               # JSON Schema validation files
│   ├── parameters/           # Parameter specifications
│   ├── presets/              # Preset archetypes and templates
│   └── rules/                # Decision logic and symptom-solution mappings
│
├── 03-Workflows/             # Practical application guides
│   ├── README.md            # Workflow templates
│   ├── by-symptom/          # Problem-solving approaches
│   ├── by-instrument/       # Instrument-specific workflows
│   └── by-goal/             # Context-specific techniques
│
└── 04-Reference/            # Technical documentation
    ├── technical-docs/      # XAML definitions, specs
    ├── integration-guides/  # Implementation patterns
    ├── terminology-glossary/
    └── frequency-charts/    # (for EQ/filter plugins)
```

## Data Model Philosophy

### JSON-First Architecture

The repository uses a **structured data-first approach** where:
1. **Schema defines validation** (`02-Data/schema/`)
2. **Canonical data provides single source of truth** (`02-Data/parameters/`, `02-Data/band-definitions/`)
3. **Presets are composable archetypes** (`02-Data/presets/`)
4. **Rules enable intelligent recommendations** (`02-Data/rules/`)

### Example: Fruity Parametric EQ 2 Pattern

This is the most mature implementation and serves as the reference model:

```
02-Data/
├── schema/
│   └── parametric-eq2-band-schema.json     # Validates band objects
├── band-definitions/
│   └── all-7-bands.json                    # Complete canonical dataset
├── presets/
│   └── band-archetypes.json                # Reusable preset building blocks
└── rules/
    └── symptom-solutions.json              # Symptom → archetype mappings
```

**Key Principles:**
- Each band/component is a multi-role functional module
- UI copy follows: label → one-liner → tooltip → do/don't pattern
- Archetypes are stackable for modular preset construction
- Rules map user symptoms to specific archetype recommendations

## Web Interface Design System

### Theme: "Deep Space Cyberpunk"

From `README.txt` and `globals.css`:

**Color System:**
- Background layers: `#0a0612` (void) → `#0f0a1a` (secondary) → `#1a0a2e` (tertiary)
- Primary accent: Purple (`#7c3aed`, `#8b5cf6`, `#a78bfa`)
- Functional accents: Cyan (info), Pink (warnings), Green (success), Orange (caution)

**Component Patterns:**
- **Glass cards** (`.glass-card`): Low-opacity white bg + backdrop blur + purple rim
- **Glass sidebar** (`.glass-sidebar`): Dark tint with higher blur for legibility
- **Tabs**: Active gets purple bg + glow, inactive is muted gray
- **Animations**: `fadeIn`, `blob` (ambient motion), `pulse-glow`

**Typography:**
- Font: Inter (Variable Weight)
- Headings: Bold/Black with gradient text clips
- Body: Regular/Medium, `#c4b5fd` on dark bg
- Labels: Semi-Bold uppercase with wide tracking

### HTML Template Usage

`EXAMPLE-PLUGIN-PAGE-LAYOUT.html` provides the canonical structure:
- Fixed sidebar navigation with collapsible states
- Top nav with breadcrumbs and search
- Tab-based content switching
- Glass cards for content sections
- Ambient animated background (blobs + particles)

## Working with Plugin Documentation

### Creating New Plugin Documentation

1. **Copy the structure** from a completed plugin (e.g., `Fruity Parametric EQ 2/` or `.DONE/FLEX/`)
2. **Start with `README.md`** - Define research guidelines and priorities
3. **Create `00-START-HERE.md`** - Navigation guide for users
4. **Build incrementally** following priority levels:
   - ⭐ HIGH: Quick reference, parameter cheat sheets, basic workflows
   - 🟡 MEDIUM: Advanced features, optimization techniques
   - 🔵 LOW: Specialized applications, edge cases

### Modifying Existing Documentation

1. **Read the plugin's CLAUDE.md first** if it exists (like `Fruity Parametric EQ 2/CLAUDE.md`)
2. **Validate JSON changes** against schemas in `02-Data/schema/`
3. **Maintain consistency** with the 4-folder structure (01-Learning through 04-Reference)
4. **Follow naming conventions**:
   - Files: kebab-case (e.g., `parameter-cheat-sheet.md`)
   - JSON keys: camelCase (e.g., `frequencyHz`, `gainDb`)
   - Directories: TitleCase for plugins, lowercase-hyphen for categories

### Data Model Guidelines

When working with JSON data files:

1. **Always validate** against the schema if one exists
2. **Preserve semantic structure**:
   - For EQs: 7-band functional model with color-coded bands
   - For synths: Oscillator → Filter → Envelope → Effects chain
   - For effects: Signal flow from input → processing → output
3. **UI copy must be concise**:
   - Labels: 2-3 words max
   - One-liners: ≤60 characters
   - Tooltips: 1-2 sentences
4. **Archetypes should be stackable** - each is a complete configuration for one component

## OpenSpec Integration

The `/openspec` directory contains the OpenSpec framework for standardized plugin specifications:
- Uses YAML/JSON for machine-readable plugin definitions
- Tracks version history in `changes/` directory
- Provides validation workflows for plugin compliance
- See `openspec/README.md` for the framework philosophy

## Common Development Tasks

### Creating a Plugin Web Page

1. Copy `EXAMPLE-PLUGIN-PAGE-LAYOUT.html` to plugin's directory
2. Update title, plugin name, and navigation
3. Populate tab content sections with plugin-specific data
4. Link to `globals.css` for consistent styling
5. Use `.glass-card` for content containers
6. Follow the tab switching pattern with `.hidden-content` class

### Building JSON Data Models

1. **Start with schema** - Define validation rules first
2. **Create canonical data** - Single source of truth for parameters
3. **Build archetypes** - Reusable preset components
4. **Add decision rules** - Map symptoms to solutions
5. **Validate everything** - Ensure JSON conforms to schema

### Writing Learning Content

1. **Organize by user journey**:
   - Quick-Reference: Fast lookups for experienced users
   - Concepts: Deep understanding for learners
   - Workflows: Practical application guides
2. **Reference official manual**: All plugins have links in `fl-studio-online-manual-plugin-pages.md`
3. **Cross-reference**: Link to related plugins, archetypes, and rules
4. **Include examples**: Real-world scenarios and presets

### Research Priority System

Follow the priority levels defined in plugin READMEs:
- **⭐ HIGH PRIORITY**: Essential documentation (parameter cheat sheets, signal flow)
- **🟡 MEDIUM PRIORITY**: Advanced features (optimization, integration)
- **🔵 LOW PRIORITY**: Specialized applications (edge cases, creative techniques)

## File Naming Conventions

- **Markdown files**: `kebab-case.md` (e.g., `parameter-cheat-sheet.md`)
- **JSON files**: `kebab-case.json` (e.g., `band-archetypes.json`)
- **HTML files**: `PascalCase` or `kebab-case` (e.g., `EXAMPLE-PLUGIN-PAGE-LAYOUT.html`)
- **Images**: `kebab-case.png` or descriptive names with spaces (e.g., `fl-studio-hub-top-nav-bar.png`)

## Important Constraints

### Data Model Constraints

- **EQ bandwidth convention**: Lower % = wider bandwidth (counter-intuitive)
- **Gain safety tiers**: Track allows more extreme values than bus, bus more than master
- **Band/component roles**: Each has specific functional purpose - don't repurpose arbitrarily

### Documentation Standards

- **Don't duplicate file structure** - The 4-folder pattern is self-documenting
- **Don't list every component** - Focus on big-picture architecture
- **No generic advice** - Keep guidance specific to FL Studio plugins
- **Always link to official manual** - Use the links in `fl-studio-online-manual-plugin-pages.md`

### Design System Constraints

- **Maintain glassmorphism hierarchy** - Closer elements have more blur and opacity
- **Purple is primary accent** - Don't introduce new brand colors
- **Respect motion preferences** - Critical animations should honor `prefers-reduced-motion`
- **Keep backgrounds dark** - This is a "deep space" theme

## Cross-Plugin Integration

Document plugin combinations in:
- `03-Workflows/by-plugin-combo/` (if creating cross-plugin workflows)
- Reference other plugins by their official names
- Note signal flow when chaining plugins
- Common combinations:
  - **Patcher** + any plugin (routing and modulation)
  - **EQ** → **Compressor** → **Limiter** (mixing chain)
  - **Synth** → **Effects** (sound design chain)

## Additional Resources

- **Official Manual**: https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/
- **Plugin Links**: See `fl-studio-online-manual-plugin-pages.md` for direct links to each plugin's manual page
- **Completed Examples**:
  - `Fruity Parametric EQ 2/` - Most mature JSON data model
  - `.DONE/FLEX/` - Comprehensive learning materials and workflows
  - `Fruity Reeverb 2/` - In-progress example

## Notes for Future Claude Instances

1. **This is a documentation repository, not a codebase** - Most "code" is JSON data and HTML templates
2. **The structure is highly standardized** - Learn one plugin folder structure, understand them all
3. **Data models drive UIs** - The JSON files are meant to power intelligent interfaces and assistants
4. **OpenSpec is aspirational** - Not all plugins use it yet, but it's the target framework
5. **Completed plugins live in `.DONE/`** - Check there for reference implementations
6. **The web interface is a prototype** - `EXAMPLE-PLUGIN-PAGE-LAYOUT.html` demonstrates the vision but isn't deployed
