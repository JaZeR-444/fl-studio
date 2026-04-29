# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a knowledge base and data model repository for the **Fruity Parametric EQ 2** plugin in FL Studio. It contains structured educational content, JSON schemas, and preset archetypes for building intelligent EQ interfaces and assistants.

## Repository Structure

```
Fruity Parametric EQ 2/
├── 00-START-HERE.md          # Navigation guide for users
├── CLAUDE.md                 # This file (for Claude Code)
│
├── 01-Learning/              # Educational materials
│   ├── README.md            # Learning path and tips
│   ├── Band-Guide/          # Individual band deep-dives (to be built)
│   ├── Concepts/            # Core EQ theory and functional model
│   │   └── Fruity Parametric EQ 2.txt
│   └── Quick-Reference/     # Cheat sheets (to be built)
│
├── 02-Data/                 # Structured JSON data
│   ├── README.md           # Data usage guide
│   ├── schema/
│   │   └── eg1.json        # JSON Schema validation
│   ├── band-definitions/
│   │   └── eg2.json        # Canonical 7-band dataset
│   ├── presets/
│   │   └── eg3.json        # Band archetypes
│   └── rules/
│       └── eg4.json        # Symptom-solution mappings
│
├── 03-Workflows/            # Practical mixing guides (to be built)
│   ├── README.md           # Workflow templates and tips
│   ├── by-symptom/         # Problem-solving approaches
│   ├── by-instrument/      # Instrument-specific guides
│   └── by-goal/            # Context-specific approaches
│
└── 04-Reference/            # Technical documentation
    ├── technical-docs/
    │   └── Fruity Parametric EQ 2.xaml
    └── integration-guides/
        └── eq-vibes.md
```

## Core Architecture

### Data Model Structure

The project uses a multi-layered data architecture:

1. **JSON Schema** (`02-Data/schema/eg1.json`): Defines the structural validation for parametric EQ band data
2. **Canonical Band Data** (`02-Data/band-definitions/eg2.json`): Contains comprehensive metadata for all 7 EQ bands
3. **Band Archetypes** (`02-Data/presets/eg3.json`): Reusable preset building blocks per band
4. **Decision Rules** (`02-Data/rules/eg4.json`): Machine-readable symptom-to-solution mappings

### The 7-Band Functional Model

Each of the 7 bands is designed as a **multi-role frequency module** with distinct purposes:

- **Band 1 (Purple)**: Sub/Foundation Control - High-pass filter, removes rumble (20-120 Hz)
- **Band 2 (Pink)**: Low-Mid Body/Warmth - Manages thickness and mud (140-320 Hz)
- **Band 3 (Orange)**: Boxiness/Room Tone - Removes cardboard resonance (300-550 Hz)
- **Band 4 (Yellow)**: Nasal/Honk Control - Handles midrange focus (600-1200 Hz)
- **Band 5 (Green)**: Presence/Intelligibility - Controls clarity and definition (1800-3200 Hz)
- **Band 6 (Teal)**: Upper Presence/Detail - Manages crispness and sharpness (3500-6500 Hz)
- **Band 7 (Blue)**: Air/Shine/Polish - High-shelf for modern gloss (8000-16000 Hz)

### Data Flow Pattern

```
02-Data/band-definitions/eg2.json → UI copy, tooltips, frequency zones, controls
02-Data/presets/eg3.json → Preset system macros
02-Data/rules/eg4.json → Smart assistant recommendations
02-Data/schema/eg1.json → Validates all band data structures
```

## Key Design Principles

### UI Copy System

All bands follow a consistent microcopy pattern:
- **Label**: 2-3 word band identifier
- **One-liner**: ≤60 character summary
- **Tooltip**: 1-2 sentence guidance
- **Do/Don't**: Fast actionable advice
- **Quick Action chips**: Optional preset buttons (e.g., "HP 80Hz", "De-mud", "Add air")

### Band Roles Hierarchy

Each band in `02-Data/band-definitions/eg2.json` defines four role categories:
1. `primary`: Core function (what the band does)
2. `fixes`: Common problems it solves
3. `creative`: Artistic applications
4. `warnings`: What to avoid

### Control Metadata

Each band includes comprehensive control specifications:
- **frequencyHz**: Typical range + anchor targets for preset buttons
- **controls.typeOptions**: Available filter types (bell, shelf, pass, notch)
- **gainDb**: Safe max values differentiated by context (track/bus/master)
- **bwPercent**: Bandwidth guidance (wide/medium/narrow ranges + defaults)

### Preset Archetype Pattern

Archetypes in `02-Data/presets/eg3.json` are **band-level macros** that can be stacked:
- Each archetype is a complete band configuration (type, freq, BW, gain)
- Presets = array of band archetypes
- Enables modular preset construction and "smart suggestions"

### Decision Tree Logic

The rules engine (`02-Data/rules/eg4.json`) maps user symptoms to solutions:
- Prioritized by urgency (1 = critical, 3 = polish)
- Links symptoms to specific band archetypes
- Includes contextual notes for implementation

## File Reference

### Learning Materials
- `01-Learning/Concepts/Fruity Parametric EQ 2.txt`: Human-readable functional model documentation for all 7 bands
- `01-Learning/README.md`: Learning paths, tips, and study guidance

### Data Files
- `02-Data/schema/eg1.json`: JSON Schema validation for band objects
- `02-Data/band-definitions/eg2.json`: Complete 7-band canonical dataset with all metadata
- `02-Data/presets/eg3.json`: Reusable band archetype presets
- `02-Data/rules/eg4.json`: Symptom-to-solution decision rules
- `02-Data/README.md`: Detailed explanation of data structure and usage

### Workflow Templates
- `03-Workflows/README.md`: Templates and guidance for creating practical workflows
- `03-Workflows/by-symptom/`: Problem-solving approaches (to be built by user)
- `03-Workflows/by-instrument/`: Instrument-specific EQ guides (to be built by user)
- `03-Workflows/by-goal/`: Context-specific approaches (to be built by user)

### Reference Documentation
- `04-Reference/technical-docs/Fruity Parametric EQ 2.xaml`: Plugin UI definition
- `04-Reference/integration-guides/eq-vibes.md`: UI/UX integration patterns for developers

## Working with This Codebase

When modifying or extending the data model:

1. **Always validate against `02-Data/schema/eg1.json`** - All band data must conform to the schema
2. **Maintain the 7-band structure** - Each band has a specific functional role
3. **Keep UI copy concise** - Follow the label/one-liner/tooltip/do-don't pattern
4. **Preserve the BW scale** - 0% = widest, 100% = narrowest (counter-intuitive)
5. **Respect safe gain limits** - Different maximums for track/bus/master contexts
6. **Band colors are semantic** - Purple→Blue follows the frequency spectrum low→high

When creating learning materials or workflows:

1. **Start with `00-START-HERE.md`** to understand the organization
2. **Document in `03-Workflows/`** - Organize by symptom, instrument, or goal
3. **Reference the data** - Link back to specific archetypes and rules in `02-Data/`
4. **Follow templates** - Use the workflow template in `03-Workflows/README.md`
5. **Build incrementally** - Start with common scenarios, expand over time

## Important Constraints

- **BW Percent Scale**: Uses inverted convention where lower % = wider bandwidth
- **Gain Safety Tiers**: Track allows more extreme values than bus, bus more than master
- **Filter Type Restrictions**: Not all bands support all filter types (see `typeOptions`)
- **Band 1 Warning**: "Never boost here unless designing bass" - critical headroom rule
- **Band 5 Warning**: "Overuse causes harshness" - presence stacks across tracks
- **Band 7 Warning**: "Exaggerates noise and artifacts" - air boost amplifies flaws

## Integration Patterns

For implementing UIs/assistants with this data:

1. **Education Mode**: Use `roles` and `uiCopy` from `02-Data/band-definitions/eg2.json` for contextual help
2. **Preset System**: Stack archetypes from `02-Data/presets/eg3.json` to build full EQ curves
3. **Smart Assistant**: Use `rules` from `02-Data/rules/eg4.json` to recommend fixes based on user-described symptoms
4. **Quick Actions**: Generate preset buttons from `frequencyHz.anchorTargets` and archetype names
5. **Learning Path**: Guide users through `01-Learning/` in order: Concepts → Band-Guide → Quick-Reference
6. **Practical Application**: Direct users to `03-Workflows/` for real-world mixing scenarios

For detailed integration guidance, see `04-Reference/integration-guides/eq-vibes.md`
