# CLAUDE.md

This file provides guidance to Claude Code when working with the Fruity X-Y-Z Controller documentation.

## Project Overview

This is a comprehensive knowledge base and workflow guide for the **Fruity X-Y-Z Controller** plugin in FL Studio. It contains structured educational content, JSON data models, and practical workflows for 3D performance control.

## Repository Structure

```
Fruity X-Y-Z Controller/
├── README.md                          # Navigation guide
├── CLAUDE.md                          # This file
│
├── 01-Learning/                       # Educational materials
│   ├── Concepts/                      # Core theory (4 files)
│   │   ├── 3d-vector-control-concepts.md
│   │   ├── absolute-vs-relative-mode.md
│   │   ├── multi-touch-gesture-control.md
│   │   └── speed-and-acceleration.md
│   └── Quick-Reference/               # Cheat sheets (5 files)
│       ├── cheat-sheet.md
│       ├── mapping-guide.md
│       ├── gesture-guide.md
│       ├── troubleshooting-faq.md
│       └── vibe-mapping-guide.md
│
├── 02-Data/                           # Structured JSON data
│   ├── parameters/                    # Output definitions
│   │   ├── schema.json
│   │   └── definitions.json
│   ├── presets/                       # Mapping templates
│   │   ├── schema.json
│   │   ├── archetypes.json
│   │   └── macros.json
│   └── rules/                         # Decision mappings
│       ├── schema.json
│       ├── scenario-rules.json
│       ├── vibe-rules.json
│       └── gesture-rules.json
│
├── 03-Workflows/                      # Practical guides
│   ├── by-goal/                       # Goal-based workflows (9 files)
│   │   ├── 3d-spatial-positioning.md
│   │   ├── total-synth-performance.md
│   │   ├── multi-touch-performance.md
│   │   ├── three-parameter-morphing.md
│   │   ├── vibe-warmth.md
│   │   ├── vibe-clarity.md
│   │   ├── vibe-depth.md
│   │   ├── vibe-punch.md
│   │   └── vibe-air.md
│   └── by-instrument/                 # Instrument-specific (4 files)
│       ├── hip-hop-lead-synth.md
│       ├── drum-processing.md
│       ├── bass-synthesis.md
│       └── pad-atmosphere-design.md
│
└── 04-Reference/                      # Technical documentation
    ├── technical-specifications.md
    ├── parameter-reference.md
    ├── integration-guide.md
    └── quick-command-reference.md
```

## Core Architecture

### 3D Control Model

The X-Y-Z Controller uses a **five-output system**:

1. **X Position** (0-100%): Horizontal control (pan, mix, etc.)
2. **Y Position** (0-100%): Vertical control (filter, intensity, etc.)
3. **Z Position** (0-100%): Depth control via scroll/pinch (reverb, depth)
4. **Speed** (0-100%): Movement velocity
5. **Acceleration** (-100% to +100%): Change in velocity

### Data Model Structure

1. **JSON Schema** (`02-Data/*/schema.json`): Validation structures
2. **Parameter Definitions** (`02-Data/parameters/definitions.json`): Output metadata
3. **Preset Archetypes** (`02-Data/presets/archetypes.json`): Reusable mapping templates
4. **Macro Templates** (`02-Data/presets/macros.json`): Complex multi-instance setups
5. **Decision Rules** (`02-Data/rules/`): Scenario-to-configuration mappings

### The Five Vibe System

Each vibe has specific 3D mapping strategies:

- **WARMTH**: Lower-left quadrant (X<50%, Y<50%, Z moderate)
- **CLARITY**: Upper-right quadrant (X>50%, Y>50%, Z moderate)
- **DEPTH**: Upper positions (emphasis on Y and Z)
- **PUNCH**: Upper-right with Speed/Accel emphasis
- **AIR**: Upper area with low X (high-pass emphasis)

## Key Design Principles

### Mapping Philosophy
- Each axis controls one parameter dimension
- Combinations create multi-dimensional control
- Speed/Acceleration add dynamic expression
- Absolute vs Relative modes suit different workflows

### Gesture-Based Control
- Movement patterns matter as much as positions
- Speed captures intensity
- Acceleration captures intention
- Gestures can be practiced and refined

### Multi-Touch Optimization
- Single finger: X + Y
- Pinch: Z
- Multi-finger: Multiple instances
- Touch devices fully supported

### Content Patterns

**Concepts files follow:**
- Overview/Definition
- Technical explanation
- Practical applications
- Examples
- Source citations [SRC: IL-MAN]

**Workflows follow:**
- Goal statement
- Concept explanation
- Setup instructions
- Step-by-step techniques
- Quick presets
- Tips

**Quick-Reference follows:**
- Tables for quick lookup
- Command syntax
- Common values
- Troubleshooting

## File Reference

### Learning Materials
- `01-Learning/Concepts/`: Core theory and functional model
- `01-Learning/Quick-Reference/`: Fast lookup guides

### Data Files
- `02-Data/parameters/definitions.json`: Complete output specifications
- `02-Data/presets/archetypes.json`: 9 reusable mapping configurations
- `02-Data/presets/macros.json`: 5 complex performance setups
- `02-Data/rules/`: Decision trees for scenario selection

### Workflow Templates
- `03-Workflows/by-goal/`: 9 goal-based workflows
- `03-Workflows/by-instrument/`: 4 instrument-specific guides

### Reference Documentation
- `04-Reference/`: Technical specs, parameters, integration, commands

## Working with This Codebase

When modifying or extending:

1. **Maintain the five-output model**: X, Y, Z, Speed, Acceleration
2. **Follow the five-vibe structure**: Warmth, Clarity, Depth, Punch, Air
3. **Keep examples practical**: Hip-hop focus with electronic applications
4. **Include source citations**: [SRC: IL-MAN] for manual references
5. **Use consistent formatting**: Tables for data, lists for steps
6. **Validate JSON**: Use provided schemas for data files

When creating new workflows:

1. **Follow the template**: Goal → Concept → Setup → Techniques → Tips
2. **Include preset values**: Specific X/Y/Z percentages
3. **Address multiple modes**: Both Absolute and Relative
4. **Consider device types**: Mouse, touch, MIDI controller
5. **Reference data files**: Link back to 02-Data/ presets and rules

## Important Constraints

- **Absolute Mode**: Position = Value directly (0%,0% = bottom-left)
- **Relative Mode**: Movement changes values incrementally
- **Z Control**: Requires scroll (mouse) or pinch (touch)
- **Speed/Accel**: Only generate values during movement
- **Multi-Touch**: Device-dependent gesture support
- **Five Vibes**: Always address Warmth, Clarity, Depth, Punch, Air

## Integration Patterns

For implementing with FL Studio:

1. **Controller Linking**: Right-click parameter → "Link to controller"
2. **Automation Recording**: Transport panel → "Record automation"
3. **Patcher Integration**: Route multiple outputs through modulation matrix
4. **Touch Setup**: Enable "Show touches" for visual feedback
5. **MIDI Mapping**: Right-click controller parameter → "Link to controller"

For touchscreen performance:

1. **Position instances**: Arrange for one-hand or two-hand access
2. **Use large sizes**: Easier targeting during performance
3. **Practice gestures**: Build muscle memory for common patterns
4. **Multi-instance**: Control multiple instruments simultaneously

## Source Citation Format

All files end with:
```
[SRC: IL-MAN]
```

This indicates content is based on FL Studio Official Manual documentation.
