# Fruity X-Y-Z Controller - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: CLAUDE.md

```markdown
# CLAUDE.md

This file provides guidance to Claude Code when working with the Fruity X-Y-Z Controller documentation.

## Project Overview

This is a comprehensive knowledge base and workflow guide for the **Fruity X-Y-Z Controller** plugin in FL Studio. It contains structured educational content, JSON data models, and practical workflows for 3D performance control.

## Repository Structure

`\`\`
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
`\`\`

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
`\`\`
[SRC: IL-MAN]
`\`\`

This indicates content is based on FL Studio Official Manual documentation.

```

---

## FILE: README.md

```markdown
# Fruity X-Y-Z Controller

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝   

██╗  ██╗    ██╗   ██╗    ███████╗     ██████╗  ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗     ██╗     ███████╗██████╗ 
╚██╗██╔╝    ╚██╗ ██╔╝    ╚══███╔╝    ██╔════╝ ██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║     ██║     ██╔════╝██╔══██╗
 ╚███╔╝      ╚████╔╝       ███╔╝     ██║      ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║     ██║     █████╗  ██████╔╝
 ██╔██╗       ╚██╔╝       ███╔╝      ██║      ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║     ██║     ██╔══╝  ██╔══██╗
██╔╝ ██╗       ██║       ███████╗    ╚██████╗ ╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗███████╗███████╗██║  ██║
╚═╝  ╚═╝       ╚═╝       ╚══════╝     ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Internal Controller / 3D Vector Pad  
**Core Concept:** 3D mouse position generates three automation signals  
**Key Features:** X, Y, Z outputs, Speed & Acceleration, Multi-touch, Absolute vs Relative mode

---

## What is Fruity X-Y-Z Controller?

The Fruity X-Y-Z Controller transforms 2D mouse/touch movement into three independent automation signals, creating a powerful 3D performance control surface. Unlike traditional 2D controllers, the Z-axis adds depth control via mouse wheel or pinch gestures, enabling true three-dimensional parameter manipulation.

**Five Output System:**
- **X (Horizontal):** Left/right position → Pan, mix, morphing
- **Y (Vertical):** Up/down position → Filter, brightness, intensity  
- **Z (Depth):** Scroll/pinch → Reverb, distance, effect depth
- **Speed:** Movement velocity → Dynamic expression
- **Acceleration:** Change in velocity → Accent detection

---

## Documentation Structure

### 01-Learning/ - Master the Fundamentals
**Concepts/ (4 files)**
- `3d-vector-control-concepts.md` - Understanding the three axes
- `absolute-vs-relative-mode.md` - Mode selection and behavior
- `multi-touch-gesture-control.md` - Touchscreen performance
- `speed-and-acceleration.md` - Dynamic movement outputs

**Quick-Reference/ (5 files)**
- `cheat-sheet.md` - Essential commands and mappings
- `mapping-guide.md` - Parameter-to-output translations
- `gesture-guide.md` - Touch and mouse gesture library
- `troubleshooting-faq.md` - Common issues and solutions
- `vibe-mapping-guide.md` - Five vibe target configurations

### 02-Data/ - Structured Reference
**Parameters/**
- `schema.json` - Validation structure
- `definitions.json` - Complete output specifications

**Presets/**  
- `schema.json` - Preset validation
- `archetypes.json` - 9 reusable mapping templates
- `macros.json` - 5 complex performance setups

**Rules/**
- `schema.json` - Rules validation
- `scenario-rules.json` - Context-based configurations
- `vibe-rules.json` - Five vibe mapping strategies  
- `gesture-rules.json` - Gesture-to-sound mappings

### 03-Workflows/ - Practical Implementation
**by-goal/ (9 files)**
- `3d-spatial-positioning.md` - X=Pan, Y=Filter, Z=Reverb
- `total-synth-performance.md` - Complete synth control setup
- `multi-touch-performance.md` - Tablet/screen workflows
- `three-parameter-morphing.md` - 3D sound state morphing
- `vibe-warmth.md` - Analog thickness and saturation
- `vibe-clarity.md` - Presence and definition
- `vibe-depth.md` - Spatial width and distance
- `vibe-punch.md` - Impact and dynamic energy
- `vibe-air.md` - Brightness and shimmer

**by-instrument/ (4 files)**
- `hip-hop-lead-synth.md` - Expressive lead performance
- `drum-processing.md` - Dynamic drum control
- `bass-synthesis.md` - Tight bass performance
- `pad-atmosphere-design.md` - Evolving textures

### 04-Reference/ - Technical Details
- `technical-specifications.md` - Plugin specs and capabilities
- `parameter-reference.md` - Complete parameter guide
- `integration-guide.md` - DAW and hardware integration
- `quick-command-reference.md` - Command cheat sheet

---

## Quick Start

### 1. Basic 3D Spatial Setup
`\`\`
X → Pan (Left -100 to Right +100)
Y → Low-Pass Filter (200Hz - 20kHz)  
Z → Reverb Send (0-100%)
Mode: Absolute
`\`\`
*Result: Position sounds in 3D space*

### 2. Total Synth Performance
`\`\`
X → Pitch Bend (±12 semitones)
Y → Filter Cutoff  
Z → Resonance (0-80%)
Speed → LFO Depth
Mode: Relative
`\`\`
*Result: Complete expressive synth control*

### 3. Multi-Touch Tablet
`\`\`
Single finger: Controls X + Y
Pinch gesture: Controls Z
Flick: Creates Speed spike for accents
`\`\`
*Result: One-handed 3D performance*

---

## The Five Vibe System

All workflows follow the five vibe targets:

| Vibe | X | Y | Z | Character |
|------|---|---|---|-----------|
| **WARMTH** | Detune 0-30% | Low cutoff | Saturation 20-40% | Analog, vintage |
| **CLARITY** | Presence 2-5kHz | High-shelf | Enhancer 20-40% | Forward, defined |
| **DEPTH** | Width 50-150% | Reverb 0-70% | Delay 20-60% | Spacious, immersive |
| **PUNCH** | Transient 0-70% | Compression | Drive 30-50% | Impact, aggression |
| **AIR** | High-pass | Air EQ 12-20kHz | Sparkle 30-50% | Bright, shiny |

---

## Hip-Hop Relevance

The X-Y-Z Controller excels in hip-hop production:

- **Lead Performance:** Pitch bends + filter sweeps + distortion
- **808 Slides:** Smooth pitch modulation with drive control  
- **Drum Punch:** Dynamic transient control with accent detection
- **Spatial Mixing:** 3D positioning for immersive tracks
- **Effect Throws:** Quick Z-axis spikes for reverb/delay effects

---

## Source References

[SRC: IL-MAN] - Based on FL Studio Official Manual documentation

---

## Navigation Guide

**New Users:**
1. Read `01-Learning/Concepts/3d-vector-control-concepts.md`
2. Review `01-Learning/Quick-Reference/cheat-sheet.md`
3. Follow `03-Workflows/by-goal/3d-spatial-positioning.md`

**Performers:**
1. Study `01-Learning/Concepts/multi-touch-gesture-control.md`
2. Review `01-Learning/Quick-Reference/gesture-guide.md`
3. Follow `03-Workflows/by-goal/multi-touch-performance.md`

**Sound Designers:**
1. Study `01-Learning/Concepts/speed-and-acceleration.md`
2. Review `02-Data/presets/archetypes.json`
3. Follow `03-Workflows/by-goal/three-parameter-morphing.md`

---

*Complete documentation pack created following OpenSpec workflow taxonomy*

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity X-Y-Z Controller

## The 60-Second Mental Model
Fruity X-Y-Z Controller is a **3D Performance Surface**. While the X-Y controller handles 2D (Left/Right, Up/Down), the X-Y-Z adds a **third dimension (Z)**—usually controlled by the mouse wheel or a "pinch" gesture on a touchscreen. It also outputs signals based on how **fast** you move (Speed) and how much you **speed up** (Acceleration). [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** A multidimensional internal controller.
*   **Where it fits:** It's a "Super Macro." Use it to control an entire atmosphere or a complex synth lead with a single 3D gesture.

## Hip-Hop / R&B Context
*   **The "Space-Time" Controller:** Link X to Filter, Y to Reverb, and Z to Delay Feedback. As you move the target and scroll the wheel, you are physically "placing" the sound in a 3D room.
*   **Dynamic Ad-libs:** Use the **Speed** output to control a distortion plugin. When you move the target fast, the vocal gets grittier; when you move slow, it stays clean.
*   **Advanced 808s:** Use X for Pitch, Y for Drive, and Z for a Low-Pass Filter.

## When To Use
*   When you have a **touchscreen** or a high-quality mouse wheel.
*   When controlling **three or more** parameters at once.
*   When you want your automation to respond to your **physical energy** (Speed/Acceleration).

## When NOT To Use
*   **Standard Mixing:** If you just need a simple EQ curve, this is overkill.
*   **If you lack 3D inputs:** If your mouse doesn't have a wheel or you don't have a touchscreen, the Z-axis is difficult to use effectively.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity X-Y-Z Controller

## UI Tour
1.  **3D Pad:** The grid area where you move the target.
2.  **Output Knobs (X, Y, Z):** Displays the current values of the three axes.
3.  **Speed/Acceleration Meters:** Visual feedback of how fast the target is moving.
4.  **Absolute vs. Relative Mode:**
    *   **Absolute:** The target stays where you click.
    *   **Relative:** The target moves based on the *difference* in your mouse movement (best for Joysticks). [SRC: IL-MAN]

## Signal Flow
1.  **Input:** Mouse movement (X/Y) + Wheel (Z).
2.  **Analysis:** The plugin calculates position, speed (velocity), and acceleration (rate of speed change).
3.  **Output Generation:** Five independent signals are broadcast to FL Studio:
    *   **X, Y, Z** (Position-based)
    *   **Speed** (Movement-based)
    *   **Acceleration** (Momentum-based)
4.  **Remote Control:** These signals are picked up by any knob linked via "Internal Controller."

## The "Speed" & "Acceleration" Secrets
*   **Speed:** Imagine a "Washing Machine" effect. If you stir the target fast, the effect turns up. If you stop, it turns down.
*   **Acceleration:** This is like a "Snatch" or "Flick." If you suddenly jerk the mouse, the signal spikes. Perfect for "accent" triggers (e.g., triggering a reverb splash).

## Things Beginners Misunderstand
*   **The Z-Axis:** By default, it's mapped to the Mouse Wheel. If you don't have a wheel, you can't move the Z-value manually in the pad.
*   **Smoothing:** X-Y-Z also has internal smoothing. If your hardware is "jittery," use the Speed/Accel smoothing settings to clean it up. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity X-Y-Z Controller

## Moody (Dark, Deep, Immersive)
*   **X:** Low-Pass Filter (Cutoff).
*   **Y:** Reverb Mix.
*   **Z:** Stereo Width (expanding the room).
*   **Speed:** Link to "LFO Rate" to make the darkness pulse as you move.

## Upbeat (Punchy, Aggressive, Rhythmic)
*   **X:** Distortion Drive.
*   **Y:** High-Pass Filter (Thinning it out for transitions).
*   **Z:** Bitcrush Amount.
*   **Acceleration:** Link to a "Patcher" gate to create stutters on sudden movements.

## Psychedelic (Melted, Swirling, Spacey)
*   **X:** Phaser Mix.
*   **Y:** Delay Feedback.
*   **Z:** Chorus Depth.
*   **Speed:** Link to "Phaser Rate" to create a swirling vortex that speeds up with your hand.

## Jazzy (Nuanced, Organic, Dynamic)
*   **X:** Expression/Volume.
*   **Y:** Filter Resonance (for "wah-wah" effects).
*   **Z:** Formant Shift.
*   **Speed:** Link to "Vibrato Depth" (faster movement = more vibrato).

## Vibey (Smooth, Glossy, R&B)
*   **X:** Stereo Pan.
*   **Y:** Stereo Shaper (Width).
*   **Z:** Reverb Decay Time.
*   **Result:** You can "place" the vocal in a wide, shimmering 3D space by moving and scrolling. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\3d-vector-control-concepts.md

```markdown
# 3D Vector Control Concepts

## Overview

The Fruity X-Y-Z Controller transforms 2D mouse/touch movement into three independent automation signals, creating a powerful 3D performance control surface. Think of it as a joystick that outputs continuous control data in three dimensions simultaneously.

## The Three Axes

### X-Axis (Horizontal)
- **Range**: 0% (left) to 100% (right)
- **Default mapping**: Pan position, stereo balance
- **Performance use**: Left/right spatial positioning
- **Creative use**: Morphing between two states or parameters

### Y-Axis (Vertical)  
- **Range**: 0% (bottom) to 100% (top)
- **Default mapping**: Filter cutoff frequency
- **Performance use**: Intensity, brightness, or depth control
- **Creative use**: Continuous parameter sweeps

### Z-Axis (Depth)
- **Range**: 0% (back) to 100% (front)
- **Control method**: Mouse wheel scroll OR touch pinch/zest gesture
- **Default mapping**: Reverb send amount or effect depth
- **Performance use**: "Bringing sounds forward" or pushing them back
- **Creative use**: Morphing between dry/wet states

## How It Works

1. **Position Detection**: Controller tracks cursor position within its pad area
2. **Real-time Output**: Three continuous CC/automation signals (0-100% range)
3. **Multi-touch Support**: On touchscreens, pinch/zest gesture controls Z-axis
4. **Speed & Acceleration**: Optional outputs track how fast you move, not just position

## Performance Philosophy

The X-Y-Z Controller is designed for **expressive, gestural control** rather than precise automation. Unlike drawing precise curves in the playlist, this controller rewards fluid, organic movements that capture human intention and emotion.

[SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\absolute-vs-relative-mode.md

```markdown
# Absolute vs Relative Mode

## Two Control Philosophies

The X-Y-Z Controller offers two fundamentally different ways of mapping input to output: **Absolute** and **Relative** mode. Understanding the difference is critical for choosing the right mode for your workflow.

## Absolute Mode

### How It Works
- Direct 1:1 mapping between pad position and output value
- Bottom-left = 0% on all axes; Top-right = 100% on all axes
- Cursor position directly determines parameter values

### Best For
- **Visual performers** who want predictable control
- **Spatial mixing** (X=pan, Y=filter, Z=depth)
- **One-shot parameter sweeps** where you want exact correlation
- **Live visual feedback** during performance

### Behavior Example
`\`\`
Pad Position → Output Values
Bottom-left corner  → X=0%, Y=0%, Z=0%
Center position     → X=50%, Y=50%, Z=50%
Top-right corner    → X=100%, Y=100%, Z=100%
`\`\`

## Relative Mode

### How It Works
- Cursor movement **changes** values rather than setting them absolutely
- Starting from any position, moving right increases X, moving left decreases X
- Values persist when you release; pick up where you left off

### Best For
- **Continuous modulation** without snapping to positions
- **Cumulative gestures** that build up over time
- **Precise fine-tuning** after getting close to target
- **DJ-style performance** where you "ride" parameters

### Behavior Example
`\`\`
Movement → Value Change
Move right 10px    → X increases by ~5%
Move up 20px       → Y increases by ~10%
Release mouse      → Values hold at current position
Return to pad      → Continue from where you left off
`\`\`

## Mode Selection Guide

| Scenario | Recommended Mode | Why |
|----------|-----------------|-----|
| 3D spatial audio mixing | Absolute | Direct visual correlation |
| Filter sweeps during buildups | Relative | Smooth, continuous control |
| Pan automation on vocals | Absolute | Precise left/right positioning |
| Complex morphing patches | Relative | Build up modulation depth |
| Touchscreen performance | Absolute | Natural direct manipulation |
| Tabletop DJ controller feel | Relative | Traditional incremental control |

## Switching Modes

Toggle between modes in the controller interface:
- Look for the **Absolute/Relative** switch in the plugin header
- Mode change takes effect immediately without interrupting current values
- Each instance can have independent mode settings

[SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\multi-touch-gesture-control.md

```markdown
# Multi-Touch and Gesture Control

## Touch-Optimized Performance

The X-Y-Z Controller is specifically designed for modern touch interfaces, enabling expressive control on tablets, touchscreens, and hybrid devices.

## Standard Touch Gestures

### Single Finger (X and Y)
- **Drag**: Controls X (horizontal) and Y (vertical) simultaneously
- **Tap and hold**: Locks position for sustained values
- **Release**: Values hold (Absolute mode) or continue modulation (Relative mode)

### Two-Finger Pinch (Z-Axis)
- **Pinch inward**: Decreases Z value (0-50% range)
- **Spread outward**: Increases Z value (50-100% range)
- **Single-finger scroll**: Alternative Z control on some devices

### Zest Gesture (Advanced)
- **Quick flick**: Brief Z modulation for "stabs" or accents
- **Circular motion**: Complex parameter interplay combining all three axes

## Multi-Touch Scenarios

### Scenario 1: Tablet Performance
**Setup**: iPad or Windows tablet running FL Studio Mobile/Remote
**Gestures**: 
- One hand for X/Y positioning
- Pinch gesture on same hand for Z control
- Result: True one-handed 3D performance

### Scenario 2: Hybrid Studio Control
**Setup**: Touchscreen monitor + traditional mouse
**Workflow**:
- Touch for expressive performance passages
- Mouse for precise positioning during mixing
- Seamless mode switching between approaches

### Scenario 3: Live Stage Performance
**Setup**: Touchscreen laptop or tablet stand
**Technique**:
- Pre-mapped macro controls
- Visual feedback on screen showing parameter states
- Multiple X-Y-Z Controller instances for different instrument groups

## Speed & Acceleration Outputs

Beyond position, the controller tracks **how you move**:

### Speed Output
- Measures velocity of cursor movement
- Fast swipes = higher speed values
- Use for: Triggering envelope followers, accent detection

### Acceleration Output  
- Measures change in speed (getting faster/slower)
- Beginning/end of gestures = acceleration spikes
- Use for: Dynamic expression, "effort" detection

### Practical Applications

**Dynamic Filter Opening**
`\`\`
Speed → Filter Cutoff
Slow drag  = Gentle filter opening
Fast swipe = Dramatic filter sweep
`\`\`

**Accent Detection**
`\`\`
Acceleration → Distortion Amount
Sudden start = Brief distortion spike
Smooth motion = Clean sustained tone
`\`\`

## Touch Calibration Tips

1. **Surface Area**: Larger pads = finer control; smaller pads = faster response
2. **Sensitivity**: Adjust OS-level touch sensitivity if available
3. **Palm Rejection**: Disable for intentional two-handed control
4. **Latency**: Lower buffer sizes reduce touch-to-sound delay

## Common Multi-Touch Workflows

### Workflow: One-Handed Synth Performance
1. Load X-Y-Z Controller before synth
2. Map X = Cutoff, Y = Resonance, Z = Distortion
3. Perform with single hand controlling all timbre aspects
4. Record automation for later refinement

### Workflow: Spatial Audio Positioning
1. Map X = Pan, Y = Reverb Send, Z = Delay Time
2. Use touch to "throw" sounds around the stereo field
3. Pinch to control depth/distance perception
4. Creates immersive 3D mix movement

[SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\speed-and-acceleration.md

```markdown
# Understanding Speed and Acceleration

## Beyond Position: Movement Dynamics

The Fruity X-Y-Z Controller offers two additional outputs that track **how** you move, not just **where** you are. These dynamic outputs—Speed and Acceleration—unlock expressive possibilities beyond static positioning.

## Speed Output Explained

### What It Measures
- **Instantaneous velocity**: How fast the cursor is moving
- Scale: 0% (stopped) to 100% (maximum detected speed)
- Updated in real-time as you drag or swipe

### Output Characteristics
- Smooth, continuous values during motion
- Drops to 0% when cursor stops
- Peaks during rapid swipes or gestures
- Responsive to both direction and magnitude of movement

### Creative Applications

**1. Velocity-Sensitive Filter**
`\`\`
Speed → Filter Cutoff modulation
Slow exploration = Gentle tone variations  
Fast swipe = Dramatic filter sweep
Stationary = Base cutoff frequency
`\`\`

**2. Dynamic Distortion Drive**
`\`\`
Speed → Distortion Amount
Moving = More drive and grit
Stopped = Clean tone returns
`\`\`

**3. Rhythmic Gate/Trigger**
`\`\`
Speed threshold → Trigger events
Fast movements = Accent notes or hits
Builds rhythmic interest through motion
`\`\`

## Acceleration Output Explained

### What It Measures
- **Change in velocity**: Getting faster or slower
- Scale: -100% (rapid deceleration) to +100% (rapid acceleration)
- Center (0%) = constant speed or stopped

### Output Characteristics
- Spikes at beginning of movements (positive acceleration)
- Spikes at end of movements (negative acceleration)
- Near-zero during constant-speed drags
- Captures "effort" and "intention" in gestures

### Creative Applications

**1. Accent and Expression**
`\`\`
Positive Acceleration → Volume/Expression boost
Start moving = Note attack emphasized
Captures performance intention naturally
`\`\`

**2. Note Triggering**
`\`\`
Acceleration threshold → Trigger new notes
Quick gesture starts = New note/arpeggio step
Turns movement into rhythmic sequencer
`\`\`

**3. Envelope Following**
`\`\`
Acceleration shape → Envelope characteristics
Fast attack in gesture = Fast envelope attack
Natural correlation between motion and sound
`\`\`

## Speed vs Acceleration: When to Use Each

### Choose Speed When:
- You want continuous modulation based on movement intensity
- Creating filter sweeps that respond to gesture velocity
- Building "humanized" parameter variation
- Making expressiveness proportional to physical effort

### Choose Acceleration When:
- You want event triggers at gesture boundaries
- Creating accent detection for dynamic performances
- Building interactive instruments that respond to "intention"
- Designing gesture-based sequencers or arpeggiators

## Combined Usage: The "Gesture Profile"

Using both outputs together captures the complete character of a movement:

`\`\`
Performance Gesture Analysis:
├─ Position (X/Y/Z): Where you are
├─ Speed: How fast you're moving  
└─ Acceleration: How your movement is changing

Together, they describe the complete gesture curve:
- Start: Position change + rising speed + positive acceleration
- Sustain: Position change + constant speed + zero acceleration  
- Stop: Position hold + dropping speed + negative acceleration
`\`\`

## Practical Setup Guide

### Setup 1: Expressive Lead Synth
`\`\`
Controller Mappings:
├─ X → Oscillator Pitch (±12 semitones)
├─ Y → Filter Cutoff
├─ Z → LFO Rate
├─ Speed → Filter Resonance boost
└─ Acceleration → Note accent (volume boost)

Result: Every aspect of the sound responds to how you move
`\`\`

### Setup 2: Dynamic Drum Processing
`\`\`
Controller Mappings:
├─ X → Pan position
├─ Speed → Compression threshold (faster = more compression)
└─ Acceleration → Transient shaper attack

Result: Drums respond dynamically to your performance energy
`\`\`

### Setup 3: 3D Soundscape Navigation
`\`\`
Controller Mappings:
├─ X → Pan (left/right position)
├─ Y → Volume (front/back depth illusion)
├─ Z → Reverb send (distance perception)
├─ Speed → Filter brightness (movement = clarity)
└─ Acceleration → Delay throws (accents = echoes)

Result: Navigate through a spatial audio environment with complete gesture control
`\`\`

## Recording and Editing

### Live Performance Capture
- All five outputs (X, Y, Z, Speed, Acceleration) can be recorded simultaneously
- Use FL Studio's "Record automation" feature during playback
- Each output appears as separate automation clips

### Post-Performance Refinement
- Edit recorded automation in the Playlist
- Smooth speed/acceleration curves for cleaner modulation
- Quantize gestures to grid for rhythmic precision
- Layer multiple takes for complex arrangements

## Pro Tips

1. **Start Simple**: Master position control first, then add speed/acceleration
2. **Visual Feedback**: Enable "Show automation values" to see real-time output
3. **Gesture Memory**: Practice repeatable gestures for consistent results
4. **MIDI Mapping**: Route outputs to external hardware for hybrid setups
5. **Modulation Matrix**: Use X-Y-Z Controller with Patcher for complex routing

[SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# X-Y-Z Controller Quick Reference

## Core Controls

| Control | Output Range | Default Use |
|---------|-------------|-------------|
| **X Position** | 0-100% | Pan / Stereo balance |
| **Y Position** | 0-100% | Filter cutoff / Brightness |
| **Z Position** | 0-100% | Effect depth / Reverb send |
| **Speed** | 0-100% | Velocity-based modulation |
| **Acceleration** | -100% to +100% | Accent / Expression triggers |

## Mode Selection

| Mode | Behavior | Best For |
|------|----------|----------|
| **Absolute** | Position = Value directly | Visual mixing, spatial control |
| **Relative** | Movement changes value | Continuous modulation, DJ-style |

## Common Mapping Formulas

### 3D Spatial Audio
`\`\`
X → Pan (Left 0% / Right 100%)
Y → Low-pass Filter Cutoff (Dark 0% / Bright 100%)
Z → Reverb Send (Dry 0% / Wet 100%)
`\`\`

### Total Synth Performance
`\`\`
X → Pitch Bend (±12 semitones)
Y → Filter Cutoff
Z → Filter Resonance
Speed → LFO Depth
Acceleration → Distortion Drive
`\`\`

### Effect Chain Morphing
`\`\`
X → Effect 1 Dry/Wet
Y → Effect 2 Dry/Wet  
Z → Effect 3 Dry/Wet
Result: Morph between three effects
`\`\`

## Z-Axis Control Methods

| Input Device | Z Control Method |
|--------------|-----------------|
| Mouse | Scroll wheel while hovering |
| Touchscreen | Pinch/spread gesture |
| Tablet | Two-finger pinch |
| Trackpad | Two-finger scroll |

## Multi-Touch Gestures

| Gesture | Controls | Use Case |
|---------|----------|----------|
| Single finger drag | X + Y | Basic positioning |
| Two-finger pinch | Z | Depth control |
| Quick flick | Speed spike | Accents |
| Circular motion | All 3 + Speed | Complex modulation |

## Linking Targets

Link to any automatable parameter via:
1. Right-click target parameter → "Link to controller"
2. Select X-Y-Z Controller from list
3. Choose output (X, Y, Z, Speed, or Acceleration)
4. Set mapping range and curve if needed

## Performance Tips

- **Smooth movements** = gradual parameter changes
- **Quick swipes** = dramatic sweeps with speed/acceleration modulation
- **Corner positions** = extreme parameter states (0% or 100%)
- **Center position** = neutral state (50% on all axes)
- **Z requires active scrolling** while X/Y being controlled

[SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\gesture-guide.md

```markdown
# Touch and Gesture Quick Reference

## Device-Specific Control Methods

### Desktop Mouse
| Action | Result |
|--------|--------|
| Move cursor | Controls X and Y |
| Scroll wheel | Controls Z |
| Click and drag | Engages controller |
| Release | Holds last position (Absolute) / continues delta (Relative) |

### Touchscreen (Tablet/Phone)
| Gesture | Result |
|---------|--------|
| Single finger drag | X + Y control |
| Two-finger pinch/spread | Z control |
| Quick tap | Momentary engagement |
| Hold and move | Sustained control |
| Flick | Speed spike for accents |

### Trackpad (Laptop)
| Gesture | Result |
|---------|--------|
| Single finger move | X + Y control |
| Two-finger scroll | Z control |
| Force touch | Optional pressure mapping |

### MIDI Controller (External)
| Input | Mapping |
|-------|---------|
| Joystick X | X position |
| Joystick Y | Y position |
| Ribbon/Slider | Z position |
| Aftertouch | Speed or Acceleration |

## Gesture Library

### Basic Gestures

#### 1. The Sweep
**Motion**: Smooth arc from one edge to opposite edge
**Use**: Filter sweeps, fade ins/outs, spatial traversal
**Produces**: Continuous ramp in X or Y

#### 2. The Pulse  
**Motion**: Quick tap and release
**Use**: One-shot effects, stabs, accents
**Produces**: Brief spike in Speed/Acceleration

#### 3. The Orbit
**Motion**: Circular movement around center
**Use**: LFO-like modulation, rhythmic variation
**Produces**: Sine-like modulation on both X and Y

#### 4. The Flick
**Motion**: Fast swipe with immediate stop
**Use**: Quick transitions, jumps, accents
**Produces**: High speed values, acceleration spike

### Advanced Gestures

#### 5. The 3D Throw
**Motion**: Diagonal movement + simultaneous Z scroll/pinch
**Use**: "Throwing" sounds through 3D space
**Produces**: All three axes change simultaneously

#### 6. The Spiral
**Motion**: Circular motion that spirals inward/outward
**Use**: Complex filter modulation, evolving textures
**Produces**: Periodic X/Y with changing amplitude

#### 7. The Bounce
**Motion**: Quick vertical oscillations
**Use**: Tremolo effects, rhythmic stuttering
**Produces**: Square-wave-like Y modulation

#### 8. The Figure-8
**Motion**: Horizontal figure-8 pattern
**Use**: Stereo panning with filter modulation
**Produces**: Lissajous curve on X/Y outputs

## Gesture-to-Sound Translation

| Gesture Type | Musical Result | Best For |
|--------------|---------------|----------|
| **Smooth/Slow** | Legato, flowing passages | Ambient, pads, strings |
| **Fast/Jagged** | Staccato, aggressive | Drums, percussion, leads |
| **Circular** | Cyclical, repetitive | Arpeggios, rhythmic patterns |
| **Erratic** | Random, experimental | Sound design, effects |
| **Precise** | Controlled, intentional | Mixing, automation |

## Multi-Touch Combinations

### Two-Handed Performance
**Technique**: 
- Left hand: X/Y control for one instrument group
- Right hand: X/Y control for another group
- Both hands: Pinch gestures for Z on respective groups

### Sequential Gestures
**Technique**:
1. Start with slow, deliberate movement (establish baseline)
2. Accelerate into fast gesture (build intensity)
3. Release with quick stop (create accent)

### Counterpoint Gestures
**Technique**:
- Right hand moves up while left hand moves down
- Creates complementary parameter changes
- Useful for stereo width, crossfading

## Practice Drills

### Drill 1: Precision Positioning
1. Set Absolute mode
2. Practice hitting exact corners (0%,0%), (100%,100%), etc.
3. Try hitting center (50%,50%) consistently
4. Gradually increase speed while maintaining accuracy

### Drill 2: Smooth Sweeps
1. Set Relative mode
2. Practice continuous filter sweeps (Y-axis)
3. Focus on steady speed, no jerky movements
4. Record and analyze automation curves

### Drill 3: Z Coordination
1. Map X=Pan, Y=Filter, Z=Reverb
2. Practice moving X/Y while simultaneously scrolling Z
3. Goal: Independent control of all three axes
4. Master the "3D throw" gesture

### Drill 4: Dynamic Expression
1. Map Speed to Filter Resonance
2. Map Acceleration to Distortion
3. Practice phrases with varying intensity
4. Listen to how gesture dynamics affect sound

## Troubleshooting Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Z not responding | Wrong input method | Use scroll wheel or pinch gesture |
| Jumpy control | High sensitivity | Reduce mouse/touch sensitivity |
| Laggy response | High buffer size | Lower audio buffer settings |
| Values snapping | Wrong mode | Switch to Relative for smooth control |
| Unintended modulation | Palm contact | Enable palm rejection or lift hand |

[SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\mapping-guide.md

```markdown
# Output-to-Parameter Mapping Guide

## Standard Mapping Scenarios

### 1. Spatial Positioning (3D Audio)

| Axis | Target Parameter | Value Range | Result |
|------|-----------------|-------------|--------|
| X | Pan | 0% = Hard Left, 100% = Hard Right | Stereo positioning |
| Y | Filter Cutoff | 0% = Closed, 100% = Open | Near/far depth illusion |
| Z | Reverb Send | 0% = Dry, 100% = Wet | Distance perception |

### 2. Timbre Control (Synthesis)

| Axis | Target Parameter | Value Range | Result |
|------|-----------------|-------------|--------|
| X | Oscillator Mix | 0% = Saw, 100% = Square | Waveform morph |
| Y | Filter Cutoff | 0% = Dark, 100% = Bright | Tone brightness |
| Z | Resonance | 0% = Flat, 100% = Peaky | Emphasis control |

### 3. Effect Chain Morphing

| Axis | Target Parameter | Value Range | Result |
|------|-----------------|-------------|--------|
| X | Chorus Wet/Dry | 0% = Dry, 100% = Wet | Modulation amount |
| Y | Phaser Rate | 0% = Slow, 100% = Fast | Sweep speed |
| Z | Delay Feedback | 0% = Short, 100% = Long | Echo density |

### 4. Drum Processing Dynamics

| Output | Target Parameter | Trigger Point | Result |
|--------|-----------------|---------------|--------|
| Speed | Compression Ratio | >70% | Harder compression on fast hits |
| Acceleration | Transient Boost | Any spike | Enhanced attack on accents |
| X | Pan | Continuous | Positioning |

## Vibe-to-Parameter Translation

| Vibe Goal | X Mapping | Y Mapping | Z Mapping |
|-----------|-----------|-----------|-----------|
| **WARMTH** | Oscillator detune | Filter cutoff (low) | Drive amount |
| **CLARITY** | High shelf boost | Exciter mix | Presence EQ |
| **DEPTH** | Stereo width | Reverb time | Delay feedback |
| **PUNCH** | Transient shaper | Compression threshold | Saturation |
| **AIR** | High-pass filter | Sheen/brightness | Air EQ boost |

## Speed & Acceleration Applications

### Speed → Common Targets
- **Filter envelope amount**: Faster = more pronounced envelope
- **Distortion drive**: Moving = more grit
- **LFO rate**: Speed controls modulation speed
- **Volume**: Velocity-sensitive dynamics

### Acceleration → Common Targets
- **Note trigger**: Start moving = new note
- **Accent boost**: Sudden start = volume spike
- **Envelope attack**: Gesture attack = sound attack
- **Effect send**: Accent = throw to reverb/delay

## Multi-Parameter Macros

### Macro 1: Complete Timbre Sculpting
`\`\`
X → Pitch (±7 semitones)
Y → Cutoff (full range)
Z → Resonance (0-80%)
Speed → LFO depth (0-100%)
Acceleration → Distortion (0-50%)
`\`\`

### Macro 2: Spatial Movement
`\`\`
X → Pan (full stereo)
Y → Volume (fade in/out)
Z → Reverb send (enter space)
Speed → Filter opening (arrival effect)
`\`\`

### Macro 3: Effect Morph
`\`\`
X → Phaser depth
Y → Chorus rate
Z → Delay time
Speed → All effect levels
`\`\`

## Quick Mapping Reference Table

| If You Want... | Map X To... | Map Y To... | Map Z To... |
|----------------|-------------|-------------|-------------|
| **Panning instrument** | Pan | Volume | Reverb |
| **Filter sweeps** | Resonance | Cutoff | Drive |
| **Synth morphing** | Osc A/B mix | Cutoff | Envelope depth |
| **Effect throws** | Delay send | Reverb send | Chorus send |
| **Dynamic drums** | Pan | Speed→Comp | Accel→Transient |
| **3D synthesis** | Pitch | Timbre | Space |

[SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\troubleshooting-faq.md

```markdown
# Troubleshooting and FAQ

## Common Issues

### Controller Not Responding

**Symptom**: Moving mouse/touch has no effect on linked parameters

**Solutions**:
1. Verify controller is armed (check "On/Off" button in plugin header)
2. Confirm target parameter is properly linked
3. Check if controller is bypassed in the mixer
4. Ensure plugin is not frozen or disabled

### Z-Axis Won't Control

**Symptom**: X and Y work but Z doesn't respond

**Solutions**:
- **Mouse**: Use scroll wheel while hovering over controller pad
- **Touchscreen**: Use two-finger pinch gesture
- **Trackpad**: Two-finger scroll gesture
- Check Z output is linked to a target parameter
- Verify Absolute/Relative mode selection

### Jerky or Stuttering Movement

**Symptom**: Automation is not smooth, shows stepped values

**Solutions**:
1. Reduce audio buffer size (Options → Audio Settings)
2. Disable "HQ for all plugins" if CPU overloaded
3. Use Relative mode for smoother transitions
4. Increase automation smoothing in settings
5. Check for conflicting automation clips

### Values Snap to Extremes

**Symptom**: Parameters jump to 0% or 100% unexpectedly

**Solutions**:
1. Check you're in Absolute mode (position = value)
2. Verify mapping range limits in link settings
3. Disable "Smart disable" if plugin sleeping
4. Check for competing automation envelopes

### Can't Control Multiple Parameters

**Symptom**: Only one parameter responds despite multiple links

**Solutions**:
1. Each X-Y-Z Controller output (X, Y, Z, Speed, Accel) can link to ONE parameter
2. Use multiple X-Y-Z Controller instances for complex setups
3. Route through Patcher for advanced multi-target routing
4. Check no two links are targeting the same parameter

## Frequently Asked Questions

**Q: Can I use X-Y-Z Controller on the Master channel?**
A: Yes, but effects are applied to the entire mix. Better suited for individual instrument/mixer track control.

**Q: How do I record automation from the controller?**
A: Enable "Record automation" in the Transport panel, then perform while playing. All outputs record as separate automation clips.

**Q: Can I use this with external MIDI controllers?**
A: Yes, map your controller's joystick or ribbon to the X-Y-Z Controller parameters, then link those to targets.

**Q: What's the difference between Speed and Acceleration?**
A: Speed = how fast you're moving (0-100%). Acceleration = how your speed is changing (-100% to +100%).

**Q: Can I use this on a touchscreen?**
A: Yes, fully optimized for touch with multi-finger gesture support including pinch for Z-axis.

**Q: How many instances can I use?**
A: Unlimited. Each instance provides X, Y, Z, Speed, and Acceleration outputs independently.

**Q: Can I invert the output (0% = 100%)?**
A: Yes, use the "Mapping formula" option when linking to reverse the range.

**Q: Does this work with third-party VSTs?**
A: Yes, any automatable parameter in any plugin can be linked.

**Q: Can I use this for live performance?**
A: Absolutely designed for live use. Enable "Performance mode" in FL for best results.

**Q: Why do my gestures feel laggy?**
A: Check audio buffer size (lower = less latency), disable visual effects, and ensure sufficient CPU headroom.

## Performance Optimization

### For Live Performance
1. Set buffer size ≤256 samples
2. Disable unnecessary visualizations
3. Use Relative mode for predictable control
4. Pre-link all parameters before performance
5. Save as template for instant recall

### For Studio Production
1. Higher buffer sizes acceptable (≤1024)
2. Record multiple takes and comp best sections
3. Edit automation curves after recording
4. Use Absolute mode for precise positioning
5. Layer multiple controllers for complex arrangements

### For Touch Devices
1. Enable "Show touches" in OS settings for visual feedback
2. Use screen protector optimized for touch
3. Disable auto-sleep during performance
4. Calibrate touch sensitivity in device settings
5. Practice gestures to build muscle memory

## Advanced Tips

**Creating Macro Controls**:
1. Insert Patcher on mixer track
2. Add X-Y-Z Controller + target plugins inside Patcher
3. Route controller outputs to multiple parameters via modulation matrix
4. Save as preset for reusable macro

**Gesture Quantization**:
1. Record freehand performance
2. Select automation clip in Playlist
3. Use "Quantize" to snap to grid
4. Humanize with randomization if too rigid

**MIDI Learn Workflow**:
1. Right-click X-Y-Z Controller parameter
2. Select "Link to controller"
3. Move external controller to assign
4. Save as preset for hardware integration

[SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\vibe-mapping-guide.md

```markdown
# Vibe Mapping Quick Reference

## The Five Vibe Targets with 3D Control

### 1. WARMTH (Analog, Vintage, Thick)

**3D Mapping Strategy**:
`\`\`
X-Axis: Oscillator detune amount (0% = in-tune, 100% = wide detune)
Y-Axis: Low-pass filter cutoff (0% = dark/warm, 100% = bright)
Z-Axis: Saturation/drive amount (0% = clean, 100% = saturated)

Gesture: Start bottom-left (warm/dark), move slowly right and up
`\`\`

**Recommended Settings**:
- Use low cutoff frequencies (Y < 40%)
- Add subtle saturation (Z 20-40%)
- Gentle pitch widening (X 10-30%)

---

### 2. CLARITY (Present, Defined, Forward)

**3D Mapping Strategy**:
`\`\`
X-Axis: Presence EQ boost (0% = flat, 100% = +6dB @ 3-5kHz)
Y-Axis: High-shelf brightness (0% = natural, 100% = airy/shiny)
Z-Axis: Exciter/harmonic enhancement (0% = dry, 100% = enhanced)

Gesture: Quick movements in upper-right quadrant, Z for enhancement
`\`\`

**Recommended Settings**:
- Target 2-5kHz range (presence zone)
- Moderate brightness boost (Y 40-60%)
- Subtle exciter use (Z 20-40%)

---

### 3. DEPTH (Spacious, Immersive, 3D)

**3D Mapping Strategy**:
`\`\`
X-Axis: Stereo width (0% = mono, 100% = ultra-wide)
Y-Axis: Reverb send level (0% = dry, 100% = wet)
Z-Axis: Delay feedback/time (0% = slapback, 100% = long ambient)

Gesture: Create space with Y, widen with X, add depth with Z
`\`\`

**Recommended Settings**:
- Start narrow (X < 30%), expand as needed
- Reverb as main depth tool (Y 30-70%)
- Delay for slapback/ambience (Z 20-50%)

---

### 4. PUNCH (Dynamic, Aggressive, Tight)

**3D Mapping Strategy**:
`\`\`
X-Axis: Transient shaper amount (0% = natural, 100% = max punch)
Y-Axis: Compression threshold (0% = no compression, 100% = heavy)
Z-Axis: Saturation on transients (0% = clean, 100% = driven)

Gesture: Quick, decisive movements. Speed output → accent boost
`\`\`

**Recommended Settings**:
- Moderate transient shaping (X 40-60%)
- Light-medium compression (Y 30-50%)
- Saturation only on peaks (Z 20-40%)
- Map Speed to accent detection for dynamic punch

---

### 5. AIR (Bright, Shimmer, Lift)

**3D Mapping Strategy**:
`\`\`
X-Axis: High-pass filter (0% = full range, 100% = remove lows)
Y-Axis: Air EQ (12-20kHz shelf) (0% = flat, 100% = +6dB)
Z-Axis: Sparkle/dimension enhancer (0% = natural, 100% = enhanced)

Gesture: Position in upper area for brightness, Z for shimmer
`\`\`

**Recommended Settings**:
- Remove rumble (X 10-20% high-pass)
- Add air band (Y 30-50%)
- Enhancement for polish (Z 20-40%)

## Vibe Combination Matrix

| Combination | X | Y | Z | Speed |
|-------------|---|---|---|-------|
| **Warm + Deep** | Width | Cutoff (low) | Reverb | - |
| **Clear + Punch** | Presence | Compression | Drive | Accents |
| **Deep + Air** | Width | Reverb | Air EQ | LFO Depth |
| **Punch + Clear** | Transient | Cutoff (high) | Exciter | Velocity |
| **Warm + Punch** | Detune | Saturation | Drive | Accents |

## Quick Vibe Presets

### Hip-Hop Lead (Punch + Clear)
`\`\`
X: Transient boost (0-60%)
Y: Filter cutoff (30-80%)
Z: Distortion drive (0-40%)
Speed: Accent volume boost
Mode: Relative for smooth sweeps
`\`\`

### Ambient Pad (Warm + Deep)
`\`\`
X: Stereo width (20-80%)
Y: Low-pass filter (10-50%)
Z: Reverb send (40-90%)
Speed: LFO rate modulation
Mode: Absolute for spatial control
`\`\`

### EDM Build (Air + Punch)
`\`\`
X: High-shelf (30-70%)
Y: Filter cutoff sweep (10-100%)
Z: Saturation (0-50%)
Speed: Filter resonance boost
Mode: Relative for continuous sweeps
`\`\`

## Gesture Recommendations by Vibe

| Vibe | Recommended Gestures | Movement Style |
|------|---------------------|----------------|
| **WARMTH** | Slow, sustained holds | Legato, smooth |
| **CLARITY** | Quick, precise movements | Staccato, defined |
| **DEPTH** | Expansive, wide gestures | Open, flowing |
| **PUNCH** | Sharp, accented movements | Dynamic, rhythmic |
| **AIR** | Light, upward movements | Ascending, bright |

[SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity X-Y-Z Controller

| Parameter | Type | Description | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- | :--- |
| **X** | Signal | Horizontal position (0-1). | **Moody** (Filter). | Lateral control. |
| **Y** | Signal | Vertical position (0-1). | **Upbeat** (High-pass). | Vertical/Intensity control. |
| **Z** | Signal | Depth (Wheel/Pinch) (0-1). | **Vibey** (Width/Space). | Spatial depth control. |
| **Speed** | Signal | Velocity of movement. | **Psychedelic** (Mod speed). | Dynamic expression. |
| **Acceleration** | Signal | Rate of speed change. | **Upbeat** (Accent spikes). | Transient-style triggers. |
| **Smoothing** | Knob | Interpolation speed. | **Jazzy** (Soft swells). | Glitch prevention. |

## Mix Impact Tags
*   **3D Positioning:** True spatial control for immersive Atmos or binaural-style hip-hop mixes.
*   **Reactive Automation:** Using "Speed" to make effects respond to the energy of the performer.
*   **Complex Morphing:** Managing 5 independent control streams from a single interface.

```

---

## FILE: 02-Data\parameters\definitions.json

```json
{
  "outputs": [
    {
      "id": "x",
      "name": "X Position",
      "range": {
        "min": 0,
        "max": 100,
        "default": 50
      },
      "controlType": "position",
      "inputMethod": ["mouse", "touch", "trackpad", "midi"],
      "typicalTargets": [
        "Pan",
        "Oscillator mix",
        "Stereo width",
        "Pitch bend",
        "Effect dry/wet"
      ],
      "uiCopy": {
        "label": "X Axis",
        "oneLiner": "Horizontal position control (0% = left, 100% = right)",
        "tooltip": "Controls the horizontal axis. Typically mapped to pan, mix, or any left-right parameter.",
        "do": "Use for spatial positioning, stereo control, or morphing between two states",
        "dont": "Map to parameters requiring binary on/off control"
      }
    },
    {
      "id": "y",
      "name": "Y Position", 
      "range": {
        "min": 0,
        "max": 100,
        "default": 50
      },
      "controlType": "position",
      "inputMethod": ["mouse", "touch", "trackpad", "midi"],
      "typicalTargets": [
        "Filter cutoff",
        "Volume",
        "Pitch",
        "Brightness",
        "Intensity"
      ],
      "uiCopy": {
        "label": "Y Axis",
        "oneLiner": "Vertical position control (0% = bottom, 100% = top)",
        "tooltip": "Controls the vertical axis. Typically mapped to filters, volume, or up-down parameters.",
        "do": "Perfect for filter sweeps, brightness control, and intensity",
        "dont": "Use for fine-grained frequency selection—too broad for precision"
      }
    },
    {
      "id": "z",
      "name": "Z Position",
      "range": {
        "min": 0,
        "max": 100,
        "default": 0
      },
      "controlType": "position",
      "inputMethod": ["mouse", "touch", "trackpad"],
      "controlGesture": {
        "mouse": "Scroll wheel",
        "touch": "Pinch/spread gesture",
        "trackpad": "Two-finger scroll"
      },
      "typicalTargets": [
        "Reverb send",
        "Effect depth",
        "Distance",
        "Dimension",
        "Wet/det amount"
      ],
      "uiCopy": {
        "label": "Z Axis",
        "oneLiner": "Depth control via scroll or pinch gesture (0% = back, 100% = front)",
        "tooltip": "Controls depth/dimension. Use mouse wheel, touch pinch, or trackpad scroll.",
        "do": "Map to reverb, delay, or any depth/distance parameter",
        "dont": "Forget to use scroll/pinch—Z won't respond to simple cursor movement"
      }
    },
    {
      "id": "speed",
      "name": "Speed",
      "range": {
        "min": 0,
        "max": 100,
        "default": 0
      },
      "controlType": "movement",
      "inputMethod": ["mouse", "touch", "trackpad", "midi"],
      "typicalTargets": [
        "LFO depth",
        "Distortion amount",
        "Filter resonance",
        "Accent boost",
        "Modulation intensity"
      ],
      "uiCopy": {
        "label": "Speed",
        "oneLiner": "How fast you're moving (0% = stopped, 100% = maximum velocity)",
        "tooltip": "Outputs velocity of your movement. Faster = higher values.",
        "do": "Use for dynamic expression—moving creates more effect",
        "dont": "Expect values when not moving—speed is 0% at rest"
      }
    },
    {
      "id": "acceleration",
      "name": "Acceleration",
      "range": {
        "min": -100,
        "max": 100,
        "default": 0
      },
      "controlType": "movement",
      "inputMethod": ["mouse", "touch", "trackpad", "midi"],
      "typicalTargets": [
        "Note trigger",
        "Envelope attack",
        "Accent detection",
        "Dynamic expression",
        "Transient boost"
      ],
      "uiCopy": {
        "label": "Acceleration",
        "oneLiner": "Change in speed (-100% = slowing, +100% = speeding up)",
        "tooltip": "Detects gesture acceleration/deceleration. Spikes at start/stop.",
        "do": "Perfect for accent detection and capturing performance intention",
        "dont": "Use for continuous modulation—this is event-based"
      }
    }
  ],
  "modes": [
    {
      "id": "absolute",
      "name": "Absolute Mode",
      "description": "Position directly maps to output values",
      "behavior": "Cursor position = output value. Bottom-left = 0%, top-right = 100%.",
      "bestFor": [
        "Visual feedback",
        "Spatial mixing",
        "Predictable control",
        "Touchscreen use"
      ]
    },
    {
      "id": "relative",
      "name": "Relative Mode",
      "description": "Movement changes values incrementally",
      "behavior": "Moving changes value; releasing holds position. No snapping.",
      "bestFor": [
        "Continuous sweeps",
        "DJ-style control",
        "Cumulative modulation",
        "Fine adjustments"
      ]
    }
  ]
}

```

---

## FILE: 02-Data\parameters\schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "fruity-xyz-controller-parameters",
  "title": "Fruity X-Y-Z Controller Parameter Schema",
  "description": "Schema for defining X-Y-Z Controller output parameters and their mapping capabilities",
  "type": "object",
  "properties": {
    "outputs": {
      "type": "array",
      "description": "Available controller outputs",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "enum": ["x", "y", "z", "speed", "acceleration"],
            "description": "Unique output identifier"
          },
          "name": {
            "type": "string",
            "description": "Human-readable output name"
          },
          "range": {
            "type": "object",
            "properties": {
              "min": {
                "type": "number",
                "description": "Minimum output value"
              },
              "max": {
                "type": "number",
                "description": "Maximum output value"
              },
              "default": {
                "type": "number",
                "description": "Default/rest value"
              }
            },
            "required": ["min", "max"]
          },
          "controlType": {
            "type": "string",
            "enum": ["position", "movement", "gesture"],
            "description": "Category of control"
          },
          "inputMethod": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": ["mouse", "touch", "trackpad", "midi"]
            },
            "description": "Supported input devices"
          },
          "typicalTargets": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Common parameter types to link this output to"
          }
        },
        "required": ["id", "name", "range", "controlType"]
      }
    },
    "modes": {
      "type": "array",
      "description": "Available controller modes",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "enum": ["absolute", "relative"]
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "behavior": {
            "type": "string",
            "description": "How position maps to values"
          }
        },
        "required": ["id", "name", "behavior"]
      }
    }
  },
  "required": ["outputs", "modes"]
}

```

---

## FILE: 02-Data\presets\archetypes.json

```json
{
  "presetArchetypes": [
    {
      "id": "spatial-3d-audio",
      "name": "3D Spatial Audio Positioning",
      "category": "spatial",
      "description": "Complete 3D audio placement with pan, filter, and depth control",
      "difficulty": "beginner",
      "mode": "absolute",
      "mappings": [
        {
          "output": "x",
          "target": "Pan",
          "targetRange": {"min": -100, "max": 100},
          "description": "Left/right stereo positioning"
        },
        {
          "output": "y", 
          "target": "Filter Cutoff",
          "targetRange": {"min": 200, "max": 20000},
          "description": "Near/far depth illusion (darker = farther)"
        },
        {
          "output": "z",
          "target": "Reverb Send",
          "targetRange": {"min": 0, "max": 100},
          "description": "Distance perception (more reverb = farther away)"
        }
      ],
      "useCase": "Position sounds in 3D space for immersive mixes",
      "gesture": "Move X for left/right, Y for near/far (filter), scroll Z for depth"
    },
    {
      "id": "synth-timbre-complete",
      "name": "Total Synth Performance",
      "category": "synthesis",
      "description": "Complete timbre control with pitch, filter, and resonance",
      "difficulty": "intermediate",
      "mode": "relative",
      "mappings": [
        {
          "output": "x",
          "target": "Oscillator Pitch",
          "targetRange": {"min": -12, "max": 12},
          "description": "Pitch bend ±12 semitones"
        },
        {
          "output": "y",
          "target": "Filter Cutoff",
          "targetRange": {"min": 100, "max": 20000},
          "description": "Brightness control"
        },
        {
          "output": "z",
          "target": "Filter Resonance",
          "targetRange": {"min": 0, "max": 80},
          "description": "Emphasis at cutoff frequency"
        },
        {
          "output": "speed",
          "target": "LFO Depth",
          "targetRange": {"min": 0, "max": 100},
          "description": "Movement adds modulation"
        }
      ],
      "useCase": "Expressive lead synth control with all performance dimensions",
      "gesture": "Continuous movements for smooth filter sweeps with dynamic LFO"
    },
    {
      "id": "effect-chain-morph",
      "name": "Effect Chain Morphing",
      "category": "effects",
      "description": "Morph between three different effects using all axes",
      "difficulty": "intermediate",
      "mode": "absolute",
      "mappings": [
        {
          "output": "x",
          "target": "Chorus Wet/Dry",
          "targetRange": {"min": 0, "max": 100},
          "description": "Left side = chorus"
        },
        {
          "output": "y",
          "target": "Phaser Depth",
          "targetRange": {"min": 0, "max": 100},
          "description": "Vertical = phaser amount"
        },
        {
          "output": "z",
          "target": "Delay Feedback",
          "targetRange": {"min": 0, "max": 80},
          "description": "Depth = delay intensity"
        }
      ],
      "useCase": "Blend multiple effects in real-time for dynamic texture",
      "gesture": "Navigate through effect combinations in 3D space"
    },
    {
      "id": "drum-dynamic-processing",
      "name": "Drum Dynamic Control",
      "category": "dynamics",
      "description": "Dynamic drum processing with spatial and transient control",
      "difficulty": "advanced",
      "mode": "relative",
      "mappings": [
        {
          "output": "x",
          "target": "Pan",
          "targetRange": {"min": -50, "max": 50},
          "description": "Drum positioning"
        },
        {
          "output": "y",
          "target": "Compression Threshold",
          "targetRange": {"min": -20, "max": 0},
          "description": "Dynamic control"
        },
        {
          "output": "z",
          "target": "Transient Shaper",
          "targetRange": {"min": 0, "max": 100},
          "description": "Punch control"
        },
        {
          "output": "speed",
          "target": "Saturation Drive",
          "targetRange": {"min": 0, "max": 50},
          "description": "Movement adds grit"
        },
        {
          "output": "acceleration",
          "target": "Accent Boost",
          "targetRange": {"min": 0, "max": 6},
          "description": "Accents get louder"
        }
      ],
      "useCase": "Live drum performance with responsive dynamics",
      "gesture": "Rhythmic movements create dynamic, punchy drum patterns"
    },
    {
      "id": "vibe-warmth",
      "name": "Vibe: Warmth",
      "category": "vibes",
      "description": "Analog warmth with detune, saturation, and gentle filtering",
      "difficulty": "beginner",
      "mode": "absolute",
      "mappings": [
        {
          "output": "x",
          "target": "Oscillator Detune",
          "targetRange": {"min": 0, "max": 30},
          "description": "Subtle pitch widening"
        },
        {
          "output": "y",
          "target": "Low-pass Cutoff",
          "targetRange": {"min": 200, "max": 5000},
          "description": "Warm/dark tones (keep below 40%)"
        },
        {
          "output": "z",
          "target": "Tape Saturation",
          "targetRange": {"min": 0, "max": 40},
          "description": "Gentle analog saturation"
        }
      ],
      "useCase": "Vintage, analog character for any source",
      "gesture": "Stay in lower-left quadrant for warmth, gentle movements"
    },
    {
      "id": "vibe-clarity",
      "name": "Vibe: Clarity",
      "category": "vibes",
      "description": "Presence and definition boost",
      "difficulty": "beginner",
      "mode": "absolute",
      "mappings": [
        {
          "output": "x",
          "target": "Presence EQ (3kHz)",
          "targetRange": {"min": 0, "max": 6},
          "description": "Midrange clarity boost"
        },
        {
          "output": "y",
          "target": "High-shelf (10kHz)",
          "targetRange": {"min": 0, "max": 4},
          "description": "Brightness/air"
        },
        {
          "output": "z",
          "target": "Exciter",
          "targetRange": {"min": 0, "max": 40},
          "description": "Harmonic enhancement"
        }
      ],
      "useCase": "Make elements cut through the mix with presence",
      "gesture": "Upper-right quadrant for clarity and presence"
    },
    {
      "id": "vibe-depth",
      "name": "Vibe: Depth",
      "category": "vibes",
      "description": "Spacious, immersive sound with reverb and width",
      "difficulty": "beginner",
      "mode": "absolute",
      "mappings": [
        {
          "output": "x",
          "target": "Stereo Width",
          "targetRange": {"min": 0, "max": 150},
          "description": "Stereo expansion"
        },
        {
          "output": "y",
          "target": "Reverb Send",
          "targetRange": {"min": 0, "max": 70},
          "description": "Spatial depth"
        },
        {
          "output": "z",
          "target": "Delay Feedback",
          "targetRange": {"min": 10, "max": 60},
          "description": "Ambience and echoes"
        }
      ],
      "useCase": "Create immersive, 3D soundscapes",
      "gesture": "Expand with X, add space with Y, depth with Z"
    },
    {
      "id": "vibe-punch",
      "name": "Vibe: Punch",
      "category": "vibes",
      "description": "Dynamic, aggressive character with transient and compression",
      "difficulty": "intermediate",
      "mode": "relative",
      "mappings": [
        {
          "output": "x",
          "target": "Transient Shaper",
          "targetRange": {"min": 0, "max": 70},
          "description": "Attack enhancement"
        },
        {
          "output": "y",
          "target": "Compression Ratio",
          "targetRange": {"min": 1, "max": 8},
          "description": "Dynamic control"
        },
        {
          "output": "z",
          "target": "Saturation",
          "targetRange": {"min": 0, "max": 40},
          "description": "Edge and grit"
        },
        {
          "output": "speed",
          "target": "Accent Detection",
          "targetRange": {"min": 0, "max": 100},
          "description": "Movement = more punch"
        }
      ],
      "useCase": "Add aggression and impact to drums, bass, or leads",
      "gesture": "Quick, decisive movements for maximum impact"
    },
    {
      "id": "vibe-air",
      "name": "Vibe: Air",
      "category": "vibes",
      "description": "Bright, shimmering high-end enhancement",
      "difficulty": "beginner",
      "mode": "absolute",
      "mappings": [
        {
          "output": "x",
          "target": "High-pass Filter",
          "targetRange": {"min": 20, "max": 200},
          "description": "Remove rumble (keep low)"
        },
        {
          "output": "y",
          "target": "Air EQ (15kHz)",
          "targetRange": {"min": 0, "max": 6},
          "description": "High-frequency sheen"
        },
        {
          "output": "z",
          "target": "Sparkle/Dimension",
          "targetRange": {"min": 0, "max": 50},
          "description": "Enhancement and lift"
        }
      ],
      "useCase": "Add polish and brightness to vocals, synths, or mixes",
      "gesture": "Upper positions for brightness and air"
    }
  ]
}

```

---

## FILE: 02-Data\presets\macros.json

```json
{
  "macroTemplates": [
    {
      "id": "hip-hop-lead-performance",
      "name": "Hip-Hop Lead Performance Rig",
      "description": "Complete performance setup for expressive hip-hop leads with all five vibe dimensions",
      "category": "performance",
      "difficulty": "advanced",
      "controllers": [
        {
          "instance": 1,
          "name": "Timbre Controller",
          "mode": "relative",
          "mappings": [
            {"output": "x", "target": "Pitch Bend", "range": "±12 semitones"},
            {"output": "y", "target": "Filter Cutoff", "range": "Full"},
            {"output": "z", "target": "Resonance", "range": "0-80%"},
            {"output": "speed", "target": "Distortion Drive", "range": "0-50%"}
          ]
        },
        {
          "instance": 2,
          "name": "Vibe Controller", 
          "mode": "absolute",
          "mappings": [
            {"output": "x", "target": "Stereo Width", "range": "50-150%"},
            {"output": "y", "target": "Reverb Send", "range": "0-60%"},
            {"output": "z", "target": "Delay Send", "range": "0-40%"}
          ]
        }
      ],
      "performanceNotes": [
        "Use Controller 1 for continuous timbre morphing",
        "Use Controller 2 for spatial positioning during phrase breaks",
        "Cross hands between controllers for complex passages",
        "Map Speed on both controllers to accent detection"
      ],
      "vibeBlend": [
        {"vibe": "PUNCH", "weight": 40, "controller": 1, "outputs": ["speed", "z"]},
        {"vibe": "CLARITY", "weight": 30, "controller": 2, "outputs": ["y"]},
        {"vibe": "AIR", "weight": 30, "controller": 2, "outputs": ["z"]}
      ]
    },
    {
      "id": "tablet-performance-rig",
      "name": "Touchscreen Performance Setup",
      "description": "Optimized for tablet/touchscreen with gesture-based control",
      "category": "performance",
      "difficulty": "intermediate",
      "device": "tablet",
      "controllers": [
        {
          "instance": 1,
          "name": "Main Controller",
          "mode": "absolute",
          "gestureMapping": {
            "singleFinger": "X + Y control",
            "pinch": "Z control",
            "flick": "Speed spike → Accent"
          },
          "mappings": [
            {"output": "x", "target": "Pan"},
            {"output": "y", "target": "Filter Cutoff"},
            {"output": "z", "target": "Effect Depth"},
            {"output": "speed", "target": "Expression"}
          ]
        }
      ],
      "gestureLibrary": [
        {"name": "The Sweep", "gesture": "Smooth diagonal", "result": "Filter sweep + pan"},
        {"name": "The Pulse", "gesture": "Quick tap-hold-release", "result": "One-shot effect"},
        {"name": "The Pinch", "gesture": "Two-finger pinch", "result": "Z-axis modulation"},
        {"name": "The Flick", "gesture": "Fast swipe + stop", "result": "Accent trigger"}
      ],
      "setupNotes": [
        "Enable 'Show touches' in OS settings",
        "Use screen protector for smooth gliding",
        "Position tablet at comfortable angle",
        "Practice gestures for muscle memory"
      ]
    },
    {
      "id": "three-parameter-morph",
      "name": "3-Parameter Morphing Matrix",
      "description": "Advanced macro for morphing between three distinct sound states",
      "category": "morphing",
      "difficulty": "advanced",
      "concept": "Each axis blends between two values of a single parameter, creating 8 possible states (corners of cube)",
      "controllers": [
        {
          "instance": 1,
          "name": "Morph Controller",
          "mode": "absolute",
          "mappings": [
            {
              "output": "x", 
              "target": "Oscillator Shape",
              "morph": {
                "0%": "Saw wave",
                "100%": "Square wave"
              }
            },
            {
              "output": "y",
              "target": "Filter Type", 
              "morph": {
                "0%": "Low-pass",
                "100%": "High-pass"
              }
            },
            {
              "output": "z",
              "target": "Envelope",
              "morph": {
                "0%": "Fast/Pluck",
                "100%": "Slow/Pad"
              }
            }
          ]
        }
      ],
      "morphStates": [
        {"position": "0,0,0", "name": "Saw + Low + Fast", "description": "Aggressive pluck"},
        {"position": "100,0,0", "name": "Square + Low + Fast", "description": "Hollow pluck"},
        {"position": "0,100,0", "name": "Saw + High + Fast", "description": "Bright sting"},
        {"position": "100,100,0", "name": "Square + High + Fast", "description": "Nasal blip"},
        {"position": "0,0,100", "name": "Saw + Low + Slow", "description": "Warm pad"},
        {"position": "100,0,100", "name": "Square + Low + Slow", "description": "Hollow pad"},
        {"position": "0,100,100", "name": "Saw + High + Slow", "description": "Bright pad"},
        {"position": "100,100,100", "name": "Square + High + Slow", "description": "Glassy pad"}
      ],
      "performanceTechnique": "Navigate through cube corners to morph between radically different sounds"
    },
    {
      "id": "spatial-positioning-rig",
      "name": "3D Spatial Positioning System",
      "description": "Complete spatial audio rig for immersive 3D positioning",
      "category": "spatial",
      "difficulty": "intermediate",
      "controllers": [
        {
          "instance": 1,
          "name": "Spatial Controller",
          "mode": "absolute",
          "mappings": [
            {"output": "x", "target": "Pan", "description": "Left-right position"},
            {"output": "y", "target": "Low-pass Filter", "description": "Near-far depth (darker = farther)"},
            {"output": "z", "target": "Reverb Send", "description": "Distance in space"},
            {"output": "speed", "target": "Doppler/Velocity", "description": "Motion blur effect"}
          ]
        }
      ],
      "spatialConcepts": [
        {
          "position": "Bottom-left",
          "perception": "Far left, distant, dark",
          "use": "Background elements"
        },
        {
          "position": "Top-right", 
          "perception": "Far right, close, bright",
          "use": "Lead elements, focus"
        },
        {
          "position": "Center",
          "perception": "Center position, mid-distance",
          "use": "Supporting elements"
        }
      ],
      "techniqueNotes": [
        "Use Y-axis filter to simulate distance (farther = less high frequencies)",
        "Z-axis reverb creates realistic depth perception",
        "Speed output adds Doppler-like motion effects",
        "Combine multiple instances for group positioning"
      ]
    },
    {
      "id": "multi-touch-ensemble",
      "name": "Multi-Touch Ensemble Control",
      "description": "Control multiple instruments simultaneously using multiple X-Y-Z instances",
      "category": "performance",
      "difficulty": "expert",
      "setup": {
        "instances": 4,
        "arrangement": "2x2 grid on touchscreen or separate controllers"
      },
      "controllers": [
        {
          "instance": 1,
          "name": "Lead Synth",
          "role": "Melody/harmony",
          "mappings": {
            "x": "Pitch bend",
            "y": "Filter cutoff", 
            "z": "Reverb send"
          }
        },
        {
          "instance": 2,
          "name": "Bass",
          "role": "Foundation",
          "mappings": {
            "x": "Pan",
            "y": "Drive/distortion",
            "z": "Compression"
          }
        },
        {
          "instance": 3,
          "name": "Pads",
          "role": "Atmosphere",
          "mappings": {
            "x": "Stereo width",
            "y": "Filter sweep",
            "z": "Effect depth"
          }
        },
        {
          "instance": 4,
          "name": "Drums",
          "role": "Rhythm",
          "mappings": {
            "x": "Pan",
            "y": "Transient shaping",
            "z": "Saturation",
            "speed": "Accent boost"
          }
        }
      ],
      "performanceTechniques": [
        "Cross-hand control: Left hand on instances 1+2, right hand on 3+4",
        "Focus technique: Concentrate on one instance, others on auto",
        "Build technique: Gradually engage all four instances",
        "Tutti technique: Use all four simultaneously for climax"
      ],
      "complexityLevel": "Requires extensive practice for coordination"
    }
  ]
}

```

---

## FILE: 02-Data\presets\schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "fruity-xyz-presets",
  "title": "X-Y-Z Controller Preset Schema",
  "description": "Schema for 3D controller preset definitions",
  "type": "object",
  "properties": {
    "presets": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {"type": "string"},
          "name": {"type": "string"},
          "category": {"type": "string"},
          "description": {"type": "string"},
          "mappings": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "output": {"type": "string"},
                "target": {"type": "string"},
                "range": {"type": "object"}
              }
            }
          }
        }
      }
    }
  }
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (X-Y-Z Controller)

## Rule 1: The "Z-Axis" Space Constraint
*   **Rule:** In R&B, "Depth" (Reverb/Delay) should never wash out the center of the mix.
*   **X-Y-Z Move:** Link the **Z-Axis** to a Reverb Send, but use a **Mapping Formula** like `Input*0.7` so even at "Max Z," the vocal doesn't drown completely.

## Rule 2: Accent Detection via Acceleration
*   **Rule:** High-energy rap needs sudden "hits" of reverb or delay on certain words.
*   **X-Y-Z Move:** Link **Acceleration** to the "Mix" knob of a Delay. A sudden "flick" of the mouse will trigger a delay splash on exactly the word you want.

## Rule 3: Smoothing for Vocal Formants
*   **Rule:** When using X-Y-Z to control vocal formants (for "vibey" textures), use high **Smoothing** (50%+).
*   **Reason:** Steppy formant changes sound digital and "broken." High smoothing makes them sound like organic vocal shifts. [SRC: IL-MAN]

## Rule 4: Absolute vs Relative for Joysticks
*   **Rule:** If using a physical joystick, use **Relative Mode**.
*   **Reason:** This allows the "center" of the joystick to represent "no change," while pushing it in any direction creates movement relative to the current position.

## Rule 5: Mono-Z Safety
*   **Rule:** If your Z-axis controls "Width," ensure that Z=0 is a solid mono signal. This provides a "safe zone" for the mix to return to mono compatibility. [SRC: REPUTABLE]

```

---

## FILE: 02-Data\rules\gesture-rules.json

```json
{
  "gestureRules": [
    {
      "gesture": "smooth-sweep",
      "name": "Smooth Sweep",
      "description": "Continuous, deliberate movement from one position to another",
      "pattern": "Linear or curved path with steady velocity",
      "outputs": {
        "x": "Ramps smoothly from start to end value",
        "y": "Ramps smoothly from start to end value",
        "speed": "Moderate, consistent values",
        "acceleration": "Near zero (constant velocity)"
      },
      "musicalResult": "Legato, flowing parameter changes",
      "bestFor": [
        "Filter sweeps",
        "Fade ins/outs",
        "Spatial traversal",
        "Timbre morphing"
      ],
      "difficulty": "beginner",
      "practiceExercise": "Practice straight line sweeps on Y-axis for filter control"
    },
    {
      "gesture": "quick-flick",
      "name": "Quick Flick",
      "description": "Fast movement followed by immediate stop",
      "pattern": "High velocity spike, then zero",
      "outputs": {
        "x": "Brief value jump",
        "y": "Brief value jump",
        "speed": "High spike (70-100%)",
        "acceleration": "High positive then negative spike"
      },
      "musicalResult": "Accent, transient boost, one-shot effect",
      "bestFor": [
        "Note accents",
        "Transient emphasis",
        "Stab effects",
        "Dynamic variation"
      ],
      "difficulty": "intermediate",
      "practiceExercise": "Practice creating consistent speed spikes for rhythmic accents"
    },
    {
      "gesture": "circular-orbit",
      "name": "Circular Orbit",
      "description": "Continuous circular movement around a center point",
      "pattern": "Periodic X and Y oscillation with 90° phase offset",
      "outputs": {
        "x": "Sine wave oscillation",
        "y": "Sine wave oscillation (quadrature)",
        "speed": "Constant moderate value",
        "acceleration": "Periodic oscillation (centripetal)"
      },
      "musicalResult": "LFO-like modulation, rhythmic variation",
      "bestFor": [
        "Auto-pan effects",
        "Filter modulation",
        "Tremolo",
        "Rhythmic variation"
      ],
      "difficulty": "intermediate",
      "practiceExercise": "Trace circles at different speeds for consistent modulation"
    },
    {
      "gesture": "spiral",
      "name": "Spiral Motion",
      "description": "Circular path with increasing or decreasing radius",
      "pattern": "Combines rotation with radial expansion/contraction",
      "outputs": {
        "x": "Oscillating with changing amplitude",
        "y": "Oscillating with changing amplitude",
        "speed": "Varies with radius",
        "acceleration": "Complex profile (radial + angular)"
      },
      "musicalResult": "Evolving modulation depth, building intensity",
      "bestFor": [
        "Building intensity",
        "Evolution effects",
        "Complex filter sweeps",
        "Dynamic stereo effects"
      ],
      "difficulty": "advanced",
      "practiceExercise": "Start with tight circles, gradually spiral outward"
    },
    {
      "gesture": "figure-eight",
      "name": "Figure-8 (Lemniscate)",
      "description": "Horizontal figure-8 pattern creating complex modulation",
      "pattern": "X oscillates at 2x frequency of Y with phase relationship",
      "outputs": {
        "x": "Double-frequency oscillation",
        "y": "Single-frequency oscillation",
        "speed": "Varies continuously",
        "acceleration": "Complex harmonic content"
      },
      "musicalResult": "Complex rhythmic modulation, stereo effects",
      "bestFor": [
        "Stereo panning with filter",
        "Complex LFO shapes",
        "Experimental effects",
        "Psychedelic sounds"
      ],
      "difficulty": "advanced",
      "practiceExercise": "Draw horizontal figure-8 patterns smoothly"
    },
    {
      "gesture": "bounce",
      "name": "Bounce/Oscillation",
      "description": "Quick vertical oscillations",
      "pattern": "Rapid Y movement with minimal X variation",
      "outputs": {
        "x": "Nearly constant",
        "y": "Square-wave-like oscillation",
        "speed": "High frequency spikes",
        "acceleration": "Sharp positive/negative alternation"
      },
      "musicalResult": "Tremolo, stuttering, rhythmic chopping",
      "bestFor": [
        "Tremolo effects",
        "Gate effects",
        "Stutter edits",
        "Rhythmic variation"
      ],
      "difficulty": "intermediate",
      "practiceExercise": "Rapid up-down movements while keeping X steady"
    },
    {
      "gesture": "corner-snap",
      "name": "Corner Snap",
      "description": "Sudden movement to corner positions",
      "pattern": "Direct path to extreme positions (0% or 100%)",
      "outputs": {
        "x": "Binary-like values (0 or 100%)",
        "y": "Binary-like values (0 or 100%)",
        "speed": "High during movement, zero at corners",
        "acceleration": "Spike at start and end"
      },
      "musicalResult": "Extreme parameter states, dramatic changes",
      "bestFor": [
        "On/off effects",
        "Extreme filter states",
        "Dramatic transitions",
        "Binary morphing"
      ],
      "difficulty": "beginner",
      "practiceExercise": "Practice hitting exact corners quickly and accurately"
    },
    {
      "gesture": "3d-throw",
      "name": "3D Throw",
      "description": "Diagonal movement with simultaneous Z control",
      "pattern": "X/Y movement while scrolling/pinching for Z",
      "outputs": {
        "x": "Diagonal trajectory",
        "y": "Diagonal trajectory",
        "z": "Changes simultaneously",
        "speed": "Varies with movement rate"
      },
      "musicalResult": "Complete 3D parameter space traversal",
      "bestFor": [
        "Spatial audio",
        "Effect throws",
        "3D synthesis",
        "Immersive transitions"
      ],
      "difficulty": "advanced",
      "practiceExercise": "Coordinate X/Y drag with scroll wheel for Z"
    },
    {
      "gesture": "tap-hold",
      "name": "Tap and Hold",
      "description": "Quick engagement followed by sustained position",
      "pattern": "Rapid movement to position, then static hold",
      "outputs": {
        "x": "Step to target value",
        "y": "Step to target value",
        "speed": "Spike then zero",
        "acceleration": "Spike at start, negative at hold"
      },
      "musicalResult": "One-shot effect, sustained modulation state",
      "bestFor": [
        "Stab effects",
        "Sustained filter positions",
        "Temporary effect engagement",
        "Momentary parameters"
      ],
      "difficulty": "beginner",
      "practiceExercise": "Tap to specific positions, hold, then release"
    }
  ],
  "gestureCombinations": [
    {
      "name": "Build and Release",
      "combination": ["smooth-sweep", "quick-flick"],
      "pattern": "Long sweep up (build), quick flick down (release)",
      "musicalUse": "Classic filter sweep for EDM builds"
    },
    {
      "name": "Orbital Accent",
      "combination": ["circular-orbit", "quick-flick"],
      "pattern": "Continuous orbit with periodic flicks",
      "musicalUse": "Rhythmic modulation with dynamic accents"
    },
    {
      "name": "3D Spatial Throw",
      "combination": ["3d-throw", "smooth-sweep"],
      "pattern": "Throw to position, then sweep in 3D space",
      "musicalUse": "Immersive spatial audio navigation"
    },
    {
      "name": "Stutter Build",
      "combination": ["bounce", "smooth-sweep"],
      "pattern": "Rapid bouncing accelerating into smooth sweep",
      "musicalUse": "Tension building before breakdown"
    }
  ],
  "practiceProgression": [
    {
      "level": "Beginner",
      "gestures": ["smooth-sweep", "corner-snap", "tap-hold"],
      "focus": "Accuracy and control"
    },
    {
      "level": "Intermediate", 
      "gestures": ["quick-flick", "circular-orbit", "bounce"],
      "focus": "Speed and rhythm"
    },
    {
      "level": "Advanced",
      "gestures": ["spiral", "figure-eight", "3d-throw"],
      "focus": "Complex coordination and 3D control"
    }
  ]
}

```

---

## FILE: 02-Data\rules\scenario-rules.json

```json
{
  "scenarioRules": [
    {
      "id": "scenario-hip-hop-lead",
      "scenario": "Hip-Hop Lead Performance",
      "description": "Creating expressive, modulated lead lines in hip-hop production",
      "genre": "hip-hop",
      "priority": 1,
      "recommendedSetup": {
        "mode": "relative",
        "vibeBlend": ["PUNCH", "CLARITY"],
        "mappings": [
          {"output": "x", "target": "Pitch Bend ±12st"},
          {"output": "y", "target": "Filter Cutoff"},
          {"output": "z", "target": "Distortion/Resonance"},
          {"output": "speed", "target": "Accent boost"}
        ]
      },
      "performanceTips": [
        "Use relative mode for continuous filter sweeps during phrases",
        "Map Speed to accent detection for dynamic note emphasis",
        "Keep Z moderate for clarity—don't over-saturate",
        "Quick flicks on X for pitch bend effects"
      ],
      "commonPatterns": [
        "Phrase start: Bottom-center, sweep Y up during note",
        "Accent notes: Quick Y movement triggers Speed boost",
        "Bends: X left/right during sustained notes",
        "Release: Return to center for neutral state"
      ]
    },
    {
      "id": "scenario-ambient-soundscape",
      "scenario": "Ambient Soundscape Design",
      "description": "Creating evolving, immersive ambient textures",
      "genre": "ambient",
      "priority": 1,
      "recommendedSetup": {
        "mode": "absolute",
        "vibeBlend": ["DEPTH", "WARMTH"],
        "mappings": [
          {"output": "x", "target": "Stereo Width 0-200%"},
          {"output": "y", "target": "Reverb Time/Density"},
          {"output": "z", "target": "Delay Feedback"},
          {"output": "speed", "target": "LFO Rate/Depth"}
        ]
      },
      "performanceTips": [
        "Use absolute mode for precise spatial positioning",
        "Slow, deliberate movements create evolving textures",
        "X-axis width modulation creates breathing effect",
        "Combine all three axes for complete space morphing"
      ],
      "commonPatterns": [
        "Evolving pad: Slow circular motion on X/Y with Z modulation",
        "Space entry: Start narrow/dry, expand to wide/wet",
        "Breathing effect: Gentle X oscillation with fixed Y/Z",
        "Crescendo: Gradual Y increase with Speed→LFO depth"
      ]
    },
    {
      "id": "scenario-edm-buildup",
      "scenario": "EDM Buildup and Drop",
      "description": "Creating tension and release in electronic dance music",
      "genre": "edm",
      "priority": 1,
      "recommendedSetup": {
        "mode": "relative",
        "vibeBlend": ["PUNCH", "AIR"],
        "mappings": [
          {"output": "x", "target": "Filter Cutoff (sweep)"},
          {"output": "y", "target": "LFO/Modulation Depth"},
          {"output": "z", "target": "Reverb/Delay send"},
          {"output": "speed", "target": "Distortion/Resonance"}
        ]
      },
      "performanceTips": [
        "Use relative mode for long, continuous filter sweeps",
        "Start buildup with slow movement, accelerate to drop",
        "Speed mapping adds intensity as you move faster",
        "Z increases reverb before drop for spatial depth"
      ],
      "commonPatterns": [
        "Buildup: Slow Y rise from 10% to 90% over 8-16 bars",
        "Drop preparation: Fast X/Y movement triggers Speed peak",
        "Impact moment: Maximum Speed + Z spike",
        "Post-drop: Return to moderate position for groove"
      ]
    },
    {
      "id": "scenario-live-drums",
      "scenario": "Live Drum Performance",
      "description": "Adding dynamic expression to programmed or live drums",
      "genre": "all",
      "priority": 2,
      "recommendedSetup": {
        "mode": "relative",
        "vibeBlend": ["PUNCH"],
        "mappings": [
          {"output": "x", "target": "Pan positioning"},
          {"output": "y", "target": "Transient Shaper"},
          {"output": "z", "target": "Saturation/Drive"},
          {"output": "speed", "target": "Compression ratio"},
          {"output": "acceleration", "target": "Accent boost"}
        ]
      },
      "performanceTips": [
        "Rhythmic movements create dynamic drum patterns",
        "Accent detection on Acceleration for ghost notes",
        "X positioning per drum element for width",
        "Speed creates pumping compression effect"
      ],
      "commonPatterns": [
        "Kick focus: Vertical motion on Y for punch control",
        "Hi-hat width: Horizontal X oscillation for stereo movement",
        "Snare accent: Quick flick creates Acceleration spike",
        "Build intensity: Progressive Speed increase → compression"
      ]
    },
    {
      "id": "scenario-vocal-processing",
      "scenario": "Vocal Performance Effects",
      "description": "Adding expressive effects to vocal tracks",
      "genre": "all",
      "priority": 2,
      "recommendedSetup": {
        "mode": "absolute",
        "vibeBlend": ["CLARITY", "AIR"],
        "mappings": [
          {"output": "x", "target": "Formant shift/Pitch"},
          {"output": "y", "target": "Vocoder/Filter"},
          {"output": "z", "target": "Effect Wet/Dry"},
          {"output": "speed", "target": "Modulation rate"}
        ]
      },
      "performanceTips": [
        "Use absolute mode for predictable vocal effect timing",
        "X-axis for formant shifting (robotic effects)",
        "Y-axis for filter-based effects (telephone, radio)",
        "Z for throwing vocals into reverb/delay"
      ],
      "commonPatterns": [
        "Robot voice: Static X position for fixed formant",
        "Morphing: Smooth X transition during phrase",
        "Telephone effect: Fixed low Y position",
        "Throw: Quick Z spike at phrase end"
      ]
    },
    {
      "id": "scenario-synth-bass",
      "scenario": "Synth Bass Performance",
      "description": "Controlling bass synths with expressive modulation",
      "genre": "all",
      "priority": 2,
      "recommendedSetup": {
        "mode": "relative",
        "vibeBlend": ["WARMTH", "PUNCH"],
        "mappings": [
          {"output": "x", "target": "Wavetable position/Osc mix"},
          {"output": "y", "target": "Filter Cutoff"},
          {"output": "z", "target": "Drive/Distortion"},
          {"output": "speed", "target": "Envelope amount"}
        ]
      },
      "performanceTips": [
        "Keep low-pass cutoff controlled to maintain bass presence",
        "X-axis for morphing between oscillator types",
        "Subtle Z for saturation, heavy for distortion",
        "Speed adds expression to filter envelope"
      ],
      "commonPatterns": [
        "Sub bass: Low Y position, minimal movement",
        "Growl bass: Rapid X oscillation + moderate Z",
        "Wobble: Rhythmic Y movement synced to tempo",
        "Drop bass: Maximum Y + Z at impact"
      ]
    },
    {
      "id": "scenario-touchscreen-live",
      "scenario": "Touchscreen Live Performance",
      "description": "Performing on tablets or touch-enabled devices",
      "genre": "all",
      "priority": 1,
      "recommendedSetup": {
        "mode": "absolute",
        "vibeBlend": ["DEPTH", "CLARITY"],
        "mappings": [
          {"output": "x", "target": "Primary parameter"},
          {"output": "y", "target": "Secondary parameter"},
          {"output": "z", "target": "Tertiary parameter (via pinch)"},
          {"output": "speed", "target": "Expression"}
        ]
      },
      "performanceTips": [
        "Use absolute mode for direct visual correlation",
        "Practice pinch gesture for Z control",
        "Enable 'Show touches' for visual feedback",
        "Design for one-handed or two-handed gestures"
      ],
      "gestureLibrary": [
        "Single-finger sweep: Standard X/Y control",
        "Two-finger pinch: Z-axis depth control",
        "Quick flick: Speed spike for accents",
        "Two-hand independent: Control multiple instances"
      ]
    },
    {
      "id": "scenario-3d-morphing",
      "scenario": "3D Sound Morphing",
      "description": "Radically transforming sounds through three-parameter morphing",
      "genre": "all",
      "priority": 3,
      "recommendedSetup": {
        "mode": "absolute",
        "vibeBlend": ["WARMTH", "CLARITY", "DEPTH"],
        "mappings": [
          {"output": "x", "target": "Parameter A (State 1 ↔ State 2)"},
          {"output": "y", "target": "Parameter B (State 1 ↔ State 2)"},
          {"output": "z", "target": "Parameter C (State 1 ↔ State 2)"}
        ]
      },
      "performanceTips": [
        "Map each axis to fundamentally different parameters",
        "Corner positions create 8 distinct sound states",
        "Diagonal movements blend between multiple parameters",
        "Center position is transitional/mixed state"
      ],
      "morphingConcepts": [
        "Each corner = unique combination of all three parameters",
        "Edges = two parameters changing, one fixed",
        "Faces = one parameter changing, two fixed",
        "Interior = all parameters in transition"
      ]
    }
  ]
}

```

---

## FILE: 02-Data\rules\schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "fruity-xyz-rules",
  "title": "X-Y-Z Controller Decision Rules Schema",
  "description": "Schema for mapping production scenarios to controller configurations",
  "type": "object",
  "properties": {
    "rules": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {"type": "string"},
          "scenario": {"type": "string"},
          "recommendedConfig": {"type": "object"},
          "priority": {"type": "number"}
        }
      }
    }
  }
}

```

---

## FILE: 02-Data\rules\vibe-rules.json

```json
{
  "vibeRules": [
    {
      "vibe": "WARMTH",
      "description": "Analog character, vintage thickness, cozy texture",
      "mappingStrategy": {
        "x": {
          "target": "Oscillator detune or pitch widening",
          "range": "0-30% (subtle)",
          "position": "Lower half (30-50%)",
          "technique": "Hold steady for gentle thickness"
        },
        "y": {
          "target": "Low-pass filter cutoff",
          "range": "200Hz - 5kHz (keep below 40%)",
          "position": "Lower half (10-40%)",
          "technique": "Low positions = warm/dark tone"
        },
        "z": {
          "target": "Tape/analog saturation",
          "range": "0-40% (gentle)",
          "position": "Lower half (20-40%)",
          "technique": "Subtle drive for analog character"
        },
        "speed": {
          "target": "Vibrato or subtle LFO",
          "range": "0-20%",
          "technique": "Movement adds gentle variation"
        }
      },
      "quadrantFocus": "Lower-left (X<50%, Y<50%)",
      "gestureStyle": "Slow, sustained holds with minimal movement",
      "combinations": [
        {"with": "DEPTH", "result": "Warm, spacious ambience"},
        {"with": "PUNCH", "result": "Thick, driven low-end"},
        {"with": "CLARITY", "result": "Defined warmth (moderate on both)"}
      ]
    },
    {
      "vibe": "CLARITY",
      "description": "Presence, definition, forwardness, intelligibility",
      "mappingStrategy": {
        "x": {
          "target": "Presence EQ boost (2-5kHz)",
          "range": "0-6dB boost",
          "position": "Upper half (50-80%)",
          "technique": "Right side = more presence"
        },
        "y": {
          "target": "High-shelf or exciter",
          "range": "0-4dB boost",
          "position": "Upper half (50-80%)",
          "technique": "Up = brighter, more defined"
        },
        "z": {
          "target": "Harmonic exciter/enhancer",
          "range": "0-40%",
          "position": "Moderate (30-60%)",
          "technique": "Subtle enhancement, don't overdo"
        },
        "speed": {
          "target": "Transient emphasis",
          "range": "0-50%",
          "technique": "Movement = sharper transients"
        }
      },
      "quadrantFocus": "Upper-right (X>50%, Y>50%)",
      "gestureStyle": "Quick, precise movements for definition",
      "combinations": [
        {"with": "AIR", "result": "Ultra-clear, shiny top-end"},
        {"with": "PUNCH", "result": "Aggressive, cutting presence"},
        {"with": "DEPTH", "result": "Clear but spacious"}
      ]
    },
    {
      "vibe": "DEPTH",
      "description": "Spaciousness, 3D space, immersion, distance",
      "mappingStrategy": {
        "x": {
          "target": "Stereo width",
          "range": "50-150%",
          "position": "Full range",
          "technique": "Wide for space, narrow for focus"
        },
        "y": {
          "target": "Reverb send/time",
          "range": "0-70% (avoid 100% wash)",
          "position": "Upper half (40-70%)",
          "technique": "Up = more reverb depth"
        },
        "z": {
          "target": "Delay feedback or diffusion",
          "range": "20-60%",
          "position": "Moderate (30-60%)",
          "technique": "Depth via echo density"
        },
        "speed": {
          "target": "Reverb pre-delay or modulation",
          "range": "0-50%",
          "technique": "Movement adds space variation"
        }
      },
      "quadrantFocus": "Full range with emphasis on upper positions",
      "gestureStyle": "Expansive, wide gestures for space creation",
      "combinations": [
        {"with": "WARMTH", "result": "Cozy, enveloping space"},
        {"with": "AIR", "result": "Open, airy dimension"},
        {"with": "CLARITY", "result": "Defined spatial placement"}
      ]
    },
    {
      "vibe": "PUNCH",
      "description": "Impact, aggression, tightness, dynamic energy",
      "mappingStrategy": {
        "x": {
          "target": "Transient shaper amount",
          "range": "0-70%",
          "position": "Moderate-high (40-70%)",
          "technique": "Right = harder attack"
        },
        "y": {
          "target": "Compression threshold/ratio",
          "range": "Light to heavy",
          "position": "Moderate (40-60%)",
          "technique": "Up = more compression"
        },
        "z": {
          "target": "Saturation on transients",
          "range": "0-50%",
          "position": "Moderate (30-50%)",
          "technique": "Edge and grit on peaks"
        },
        "speed": {
          "target": "Accent boost or drive",
          "range": "0-100%",
          "technique": "Fast movement = maximum impact"
        },
        "acceleration": {
          "target": "Transient boost",
          "range": "Spike detection",
          "technique": "Gesture start = accent"
        }
      },
      "quadrantFocus": "Upper-right with aggressive Speed usage",
      "gestureStyle": "Quick, sharp, accented movements",
      "combinations": [
        {"with": "CLARITY", "result": "Cutting, aggressive attack"},
        {"with": "WARMTH", "result": "Thick, saturated punch"},
        {"with": "DEPTH", "result": "Impact in 3D space"}
      ]
    },
    {
      "vibe": "AIR",
      "description": "Brightness, shimmer, high-end lift, polish",
      "mappingStrategy": {
        "x": {
          "target": "High-pass filter",
          "range": "20-200Hz (remove rumble)",
          "position": "Low (10-20%)",
          "technique": "Just enough to clean lows"
        },
        "y": {
          "target": "Air EQ band (12-20kHz)",
          "range": "0-6dB boost",
          "position": "Upper half (60-90%)",
          "technique": "High = shimmer and lift"
        },
        "z": {
          "target": "Sparkle/dimension enhancer",
          "range": "0-50%",
          "position": "Upper half (40-70%)",
          "technique": "Enhanced high-frequency content"
        },
        "speed": {
          "target": "High-frequency shimmer LFO",
          "range": "0-30%",
          "technique": "Movement adds subtle high-end variation"
        }
      },
      "quadrantFocus": "Upper area (Y>60%) with low X",
      "gestureStyle": "Light, upward movements for brightness",
      "combinations": [
        {"with": "CLARITY", "result": "Ultra-defined top-end"},
        {"with": "DEPTH", "result": "Spacious, open air"},
        {"with": "PUNCH", "result": "Bright, aggressive attack"}
      ]
    }
  ]
}

```

---

## FILE: 03-Workflows\by-goal\00_3D_Spatial_Positioning.md

```markdown
# Goal: 3D Spatial Positioning (Fruity X-Y-Z)

## Routing Context
*   **Target:** A Melodic Lead or Pad.
*   **Mixer Track:** Needs Reverb and Pan control.

## Step-by-Step Setup
1.  Load **Fruity X-Y-Z Controller**.
2.  **X → Pan:** Right-click Pan knob -> Link to controller -> Internal -> **X-Y-Z (X)**.
3.  **Y → Filter:** Link Y to a High-Shelf or Low-Pass EQ.
4.  **Z → Depth:** Link Z to your Reverb Mix knob.
5.  **Speed → Air:** Link Speed to an EQ boost at 12kHz.

## Result
*   **Horizontal (X):** Moves the sound Left/Right.
*   **Vertical (Y):** Changes the brightness (height).
*   **Wheel/Z:** Moves the sound into the distance (Reverb).
*   **Motion (Speed):** The sound gets "airier" as it moves faster.

## Vibe Check
*   **Moody:** Use slow Z-axis scrolls to pull the sound into a deep, dark cavern.
*   **Vibey:** Use the Z-axis to "widen" the background vocals during a chorus.

## Pitfalls
*   **Over-reverb:** If Z is at 100%, the sound might disappear. Use the Mapping Formula `Input*0.6` in the linking window.

```

---

## FILE: 03-Workflows\by-goal\01_Total_Synth_Performance.md

```markdown
# Workflow: Total Synth Performance (5-Signal Macro)

## The Concept
Control every aspect of a synth lead using one 3D movement + your movement speed.

## Setup
*   **Target:** Sytrus or Harmor Lead.
*   **Controller:** Fruity X-Y-Z Controller.

## Mapping Recipe
1.  **X (Left/Right):** Filter Cutoff.
2.  **Y (Up/Down):** Pitch Bend (Mapping Formula: `Input*0.2` for subtle vibrato-style bends).
3.  **Z (Wheel):** Distortion Drive.
4.  **Speed:** LFO Rate (The faster you move, the faster it wobbles).
5.  **Acceleration:** Delay Mix (A sudden "flick" causes a delay echo).

## Performance Guide
1.  Hold a note in the Piano Roll.
2.  Use your mouse to "perform" the lead.
    *   Move left-to-right for "Filter growls."
    *   Scroll the wheel for "Saturation."
    *   Shake the mouse to "Increase LFO speed."
    *   Flick the mouse at the end of a phrase for a "Delay splash."

## Vibe mapping
*   **Upbeat:** Fast, jerky movements (Acceleration) for high-energy electronic hip-hop.
*   **Jazzy:** Slow, deliberate X/Y movements with the mouse for expressive, trumpet-like swells. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\3d-spatial-positioning.md

```markdown
# Workflow: 3D Spatial Audio Positioning

## Goal
Position sounds in three-dimensional space using the X-Y-Z Controller for immersive stereo mixes.

## Concept
Creates depth perception through:
- **X (Horizontal)**: Left/right pan position
- **Y (Vertical)**: Low-pass filter cutoff (near/far illusion)
- **Z (Depth)**: Reverb send amount (distance perception)

## Setup

### Controller Configuration
`\`\`
Mode: Absolute (for predictable positioning)

Mappings:
├── X → Pan (-100 to +100)
├── Y → Filter Cutoff (200Hz - 20kHz)
└── Z → Reverb Send (0-100%)
`\`\`

### Plugin Chain
`\`\`
[Instrument] → [X-Y-Z Controller] → [Filter] → [Reverb Send]
`\`\`

## The 3D Space Model

| Position | X | Y | Z | Perception |
|----------|---|---|---|------------|
| Far Left/Distant | 0% | 20% | 70% | Background, left |
| Center/Close | 50% | 80% | 20% | Focus, present |
| Far Right/Distant | 100% | 20% | 70% | Background, right |
| Center/Far | 50% | 20% | 80% | Distant, ambient |

## Performance Techniques

### Technique 1: The Pass-By
1. Start far left, distant (X=0%, Y=20%, Z=70%)
2. Move X toward center while increasing Y
3. Continue to far right while decreasing Y back to 20%
4. Result: Sound "passes by" the listener

### Technique 2: Approach and Withdraw
1. Start center, distant (Y=20%, Z=80%)
2. Move Y up (brighter) while decreasing Z (less reverb)
3. At peak closeness (Y=90%, Z=10%), reverse motion
4. Result: Sound approaches then moves away

### Technique 3: Spatial Throw
1. Use 3D Throw gesture (diagonal + Z scroll)
2. Throw from one corner to another
3. Simultaneous X/Y/Z changes create realistic spatial motion

## Quick Position Presets

`\`\`
Background Left:    X=10%, Y=30%, Z=60%
Background Right:   X=90%, Y=30%, Z=60%
Center Focus:       X=50%, Y=80%, Z=20%
Distant Ambient:    X=50%, Y=20%, Z=80%
Pass-by Start:      X=0%,  Y=20%, Z=60%
Pass-by End:        X=100%, Y=20%, Z=60%
`\`\`

## Tips

- Lower Y values = less high frequencies = sounds farther away
- Higher Z values = more reverb = greater perceived distance
- X creates stereo placement while Y and Z create depth
- Use smooth movements for realistic spatial effects

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\multi-touch-performance.md

```markdown
# Workflow: Multi-Touch Performance (Tablet/Screen)

## Goal
Optimize X-Y-Z Controller for touchscreen and tablet devices using multi-touch gestures.

## Concept
Touch interfaces provide unique capabilities:
- Direct manipulation with immediate visual feedback
- Multi-finger gestures for simultaneous control
- Pinch/spread for Z-axis depth control
- Natural "flick" gestures for accents

## Setup

### Device Configuration
`\`\`
Settings → Touch:
├── Enable 'Show touches' (visual feedback)
├── Disable auto-sleep during performance
├── Enable palm rejection (optional)
└── Set touch sensitivity to preference
`\`\`

### Controller Configuration
`\`\`
Mode: Absolute (natural direct manipulation)

Mappings:
├── Single finger → X + Y
├── Two-finger pinch → Z
└── Flick gesture → Speed spike
`\`\`

## Gesture Library

### Single-Finger Gestures

#### The Point
- **Motion**: Move finger to position and hold
- **Controls**: X and Y at finger position
- **Use**: Precise parameter setting, sustained values

#### The Drag
- **Motion**: Smooth finger movement
- **Controls**: Continuous X and Y modulation
- **Use**: Filter sweeps, fades, spatial positioning

#### The Flick
- **Motion**: Quick swipe with immediate lift
- **Controls**: Brief X/Y + Speed spike
- **Use**: Accents, one-shot effects, stabs

### Two-Finger Gestures

#### The Pinch (Z Control)
- **Motion**: Two fingers spread apart or pinch together
- **Controls**: Z-axis value
- **Use**: Reverb depth, effect intensity, spatial distance

#### The Dual Drag
- **Motion**: Two fingers moving independently
- **Controls**: Each finger controls separate X-Y-Z instance
- **Use**: Controlling multiple instruments simultaneously

#### The Orbit
- **Motion**: Two fingers tracing circles
- **Controls**: Complex LFO-like modulation
- **Use**: Rhythmic effects, auto-pan

### Advanced Gestures

#### The 3D Throw
- **Motion**: Single finger diagonal drag + pinch with other hand
- **Controls**: All three axes simultaneously
- **Use**: Complete 3D spatial movement

#### The Pulse
- **Motion**: Repeated tap-hold-release
- **Controls**: Rhythmic value triggers
- **Use**: Stutter effects, rhythmic patterns

## Performance Workflows

### One-Handed Performance
**Best for**: Solo performers, mobile setups
`\`\`
Setup: Single X-Y-Z Controller instance
Control: One hand performs all gestures
Technique: 
  - Index finger for X/Y
  - Thumb for Z pinch
  - Quick flicks for accents
`\`\`

### Two-Handed Ensemble
**Best for**: Complex arrangements, studio control
`\`\`
Setup: Two X-Y-Z Controller instances side-by-side
Control: 
  - Left hand: Instance 1 (e.g., bass)
  - Right hand: Instance 2 (e.g., lead)
Technique: Independent control of two instrument groups
`\`\`

### Four-Finger Control
**Best for**: Expert performers, complete mix control
`\`\`
Setup: Four X-Y-Z Controller instances in 2x2 grid
Control: Each finger controls one instance
Technique: Complete mix manipulation (drums, bass, harmony, lead)
`\`\`

## Touch-Specific Tips

### Screen Surface
- Use matte screen protector for better finger glide
- Keep screen clean for consistent tracking
- Position device at comfortable angle (45° ideal)

### Gesture Accuracy
- Practice hitting specific positions consistently
- Use visual feedback (Show Touches) to calibrate
- Build muscle memory through repetition

### Performance Mode
- Create dedicated performance templates
- Pre-map all parameters before performance
- Use large controller instances for easier targeting

## Tablet vs Phone Considerations

### Tablet (iPad, Surface)
- **Advantages**: Large surface, multiple instances visible, two-hand capable
- **Best for**: Studio control, complex performances
- **Gesture space**: Full range of single and multi-hand gestures

### Phone
- **Advantages**: Ultra-portable, one-hand operation
- **Best for**: Simple control, mobile sketching
- **Gesture space**: Primarily single-finger, limited multi-touch

## Practice Exercises

### Exercise 1: Position Accuracy
1. Display 9 grid points (3x3)
2. Practice hitting each point quickly
3. Goal: Consistent accuracy within 10% of target

### Exercise 2: Smooth Sweeps
1. Draw a straight line on screen
2. Trace it smoothly with finger
3. Goal: Record and analyze—curve should be linear

### Exercise 3: Z Coordination
1. Map X=Pan, Y=Filter, Z=Reverb
2. Practice moving X/Y while pinching Z
3. Goal: Independent control of all three axes

### Exercise 4: Multi-Instance Control
1. Set up two controller instances
2. Left hand on instance 1, right on instance 2
3. Practice independent control
4. Goal: Coordinate both hands without interference

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\three-parameter-morphing.md

```markdown
# Workflow: Three-Parameter Morphing

## Goal
Morph between radically different sounds using three independent parameter axes.

## Concept
The X-Y-Z Controller creates a "morphing cube" where each corner represents a unique combination of three parameters. Navigate through 3D space to transform sounds completely.

## The Morphing Cube

`\`\`
                    Z (Depth)
                    100%
                       |
                       |     8 Corners = 8 Sounds
        Y (Vertical)   |     Each axis = Parameter blend
           100%        |
              |        |
              |________|______ X (Horizontal)
             /        /      100%
            /  0%   /
           /_______/
          0%
`\`\`

## Setup

### Controller Configuration
`\`\`
Mode: Absolute (for specific state targeting)

Mapping Strategy:
├── X → Parameter 1 (State A ↔ State B)
├── Y → Parameter 2 (State A ↔ State B)
└── Z → Parameter 3 (State A ↔ State B)

Each axis: 0% = State A, 100% = State B
`\`\`

### Example: Oscillator Morph
`\`\`
X: Waveform (0%=Saw, 100%=Square)
Y: Filter Type (0%=Low-pass, 100%=High-pass)
Z: Envelope (0%=Fast/Pluck, 100%=Slow/Pad)
`\`\`

## The Eight Sound States

| Position | X | Y | Z | Result Sound |
|----------|---|---|---|--------------|
| 0,0,0 | Saw | Low | Fast | Aggressive pluck |
| 100,0,0 | Square | Low | Fast | Hollow pluck |
| 0,100,0 | Saw | High | Fast | Bright sting |
| 100,100,0 | Square | High | Fast | Nasal blip |
| 0,0,100 | Saw | Low | Slow | Warm pad |
| 100,0,100 | Square | Low | Slow | Hollow pad |
| 0,100,100 | Saw | High | Slow | Bright pad |
| 100,100,100 | Square | High | Slow | Glassy pad |

## Morphing Techniques

### Technique 1: Corner-to-Corner
1. Start at one corner (specific sound)
2. Move directly to another corner (different sound)
3. Path determines intermediate blends
4. Diagonal = simultaneous parameter change

### Technique 2: Edge Walking
1. Move along cube edges (two parameters changing)
2. Keep one parameter fixed
3. Explore related sound families

### Technique 3: Face Navigation
1. Move on cube faces (one parameter changing)
2. Smooth morph along single dimension
3. Most predictable, gradual changes

### Technique 4: Interior Traversal
1. Move through cube interior
2. All three parameters in transition
3. Most complex, evolving sounds

### Technique 5: The Spiral Morph
1. Circular motion in X/Y
2. Simultaneous Z movement (in or out)
3. Creates evolving, complex transitions

## Advanced Morphing Setups

### Setup 1: Effect Chain Morph
`\`\`
X: Chorus amount (0-100%)
Y: Phaser depth (0-100%)
Z: Delay feedback (0-100%)

Result: Blend between chorus/phaser/delay dominance
Corners: Dry, Chorus, Phaser, Delay, or combinations
`\`\`

### Setup 2: Timbre Evolution
`\`\`
X: Oscillator mix (Osc A ↔ Osc B)
Y: Filter resonance (0-100%)
Z: Unison/voices (1 ↔ 8 voices)

Result: Morph from simple to complex, thin to thick
`\`\`

### Setup 3: Space-Time Morph
`\`\`
X: Reverb size (Small ↔ Large)
Y: Delay time (Short ↔ Long)
Z: Pre-delay (0ms ↔ 100ms)

Result: Navigate through spatial characteristics
`\`\`

## Performance Strategies

### Strategy 1: Preset Navigation
1. Map favorite sounds to specific corners
2. Jump between them for arrangement sections
3. Use edges/faces for transitions

### Strategy 2: Evolutionary Performance
1. Start in one corner
2. Gradually spiral toward another
3. Sound evolves continuously over time

### Strategy 3: Rhythmic Morphing
1. Use quantized movements (sync to tempo)
2. Jump between states rhythmically
3. Creates dynamic, shifting textures

## Recording Morphs

### Option 1: Live Performance
- Record gestures as automation
- Captures human nuance and expression
- Edit after recording for precision

### Option 2: Programmed Paths
- Draw automation curves
- Precise, repeatable paths
- Good for consistent transitions

### Option 3: Hybrid Approach
- Sketch with live performance
- Quantize and refine
- Human feel + precision

## Tips for Effective Morphing

1. **Choose Parameters Wisely**: Pick three that create audible, meaningful changes
2. **Contrast Corner States**: Make opposite corners dramatically different
3. **Test All Paths**: Some routes may have "dead zones"—test thoroughly
4. **Use Smooth Curves**: Avoid stepped automation for fluid morphs
5. **Practice Navigation**: Learn direct paths to desired states
6. **Combine with Modulation**: Add LFOs to morphing for extra complexity

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\total-synth-performance.md

```markdown
# Workflow: Total Synth Performance Setup

## Goal
Control all major timbral aspects of a synthesizer simultaneously for maximum expressive performance.

## Concept
Using all 5 outputs of the X-Y-Z Controller to create a complete performance instrument:
- **X**: Pitch control (±12 semitones)
- **Y**: Filter cutoff (brightness)
- **Z**: Filter resonance (emphasis)
- **Speed**: LFO depth (modulation intensity)
- **Acceleration**: Distortion drive (accentuation)

## Setup

### Controller Configuration
`\`\`
Mode: Relative (for continuous control without snapping)

Mappings:
├── X → Pitch Bend (±12 semitones)
├── Y → Filter Cutoff (100Hz - 20kHz)
├── Z → Resonance (0-80%)
├── Speed → LFO Depth (0-100%)
└── Acceleration → Distortion (0-50%)
`\`\`

### Recommended Synth
Any subtractive synthesizer with:
- Pitch bend range ±12st
- Low-pass filter with resonance
- LFO with depth control
- Drive/distortion parameter

## Performance Techniques

### Technique 1: The Filter Sweep Solo
1. Hold sustained note
2. Move Y up slowly for opening filter
3. Increase movement speed for Speed→LFO
4. Result: Classic filter sweep with dynamic modulation

### Technique 2: Pitch + Timbre Bending
1. Play phrase
2. Use X for pitch bends (portamento-style)
3. Coordinate Y with pitch for timbral consistency
4. High pitch + open filter = bright
5. Low pitch + closed filter = dark

### Technique 3: Expressive Accents
1. Map Acceleration to distortion
2. Play staccato phrases
3. Quick gesture starts trigger accent peaks
4. Result: Dynamic distortion following playing intensity

### Technique 4: LFO Intensity Control
1. Set synth LFO to modulate filter
2. Speed output controls LFO depth
3. Still = no LFO, moving = increasing LFO
4. Result: Humanized modulation intensity

## Gesture Library for Synth Performance

| Gesture | Controls | Musical Result |
|---------|----------|----------------|
| Vertical Sweep | Y + Speed | Filter sweep with dynamic LFO |
| Horizontal Slide | X | Pitch bend |
| Diagonal | X + Y | Pitch + timbre change |
| Circular | X + Y + Speed | Modulated filter with pitch variation |
| Quick Flick | Accel | Accent/distortion spike |

## Quick Performance Presets

### Sub Bass Performance
`\`\`
X: Pitch ±7 semitones (subtle)
Y: Cutoff 50-500Hz (keep low)
Z: Resonance 0-30% (gentle)
Speed: LFO 0-20% (slow)
Mode: Relative
`\`\`

### Lead Synth Performance
`\`\`
X: Pitch ±12 semitones (full range)
Y: Cutoff full range (bright)
Z: Resonance 0-60% (moderate)
Speed: LFO 0-80% (expressive)
Accel: Distortion accents
Mode: Relative
`\`\`

### FX/Stabs Performance
`\`\`
X: Fixed or minimal
Y: Quick sweeps
Z: Moderate resonance
Speed: Maximum for heavy modulation
Accel: Trigger effects
Mode: Absolute for predictable stabs
`\`\`

## Pro Tips

- Use Relative mode for continuous sweeps without position snapping
- Coordinate pitch (X) with filter (Y) for natural timbral shifts
- Speed adds expression—use it for dynamic LFO control
- Acceleration captures playing intention for automatic accents
- Practice gestures to build muscle memory for consistent results

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\vibe-air.md

```markdown
# Workflow: Vibe - Creating Air

## Goal
Add brightness, shimmer, high-end lift, and polish for modern, detailed sound.

## Vibe Definition
Air = High-frequency presence + Shimmer + Sparkle + Top-end polish

## 3D Mapping Strategy

`\`\`
X-Axis: High-Pass Filter (20-200Hz)
├── 20% = Full range, some rumble removal
└── 100% = Removes low-mids, very bright

Y-Axis: Air EQ Band (12-20kHz, 0-6dB boost)
├── 0% = Natural highs
└── 100% = Maximum sheen and shimmer

Z-Axis: Sparkle/Dimension Enhancer (0-50%)
├── 0% = Dry, unenhanced
└── 50% = Enhanced dimension and sparkle
`\`\`

## Target Zone
**Sweet Spot**: Upper area with controlled low-end
- X: 10-20% (clean lows)
- Y: 60-90% (brightness)
- Z: 30-50% (enhancement)

## Setup

### Controller Configuration
`\`\`
Mode: Absolute (for precise high-frequency control)

Mappings:
├── X → High-Pass Filter (20-200Hz)
├── Y → Air EQ @ 15kHz (0-6dB)
├── Z → Sparkle/Enhancer (0-50%)
└── Speed → High-frequency shimmer LFO (0-30%)
`\`\`

### Processing Chain
`\`\`
[Source] → [High-Pass] → [X-Y-Z Controller] → [Air EQ] → [Enhancer] → [Output]
`\`\`

## Performance Techniques

### Technique 1: The Shine Boost
1. Position: X=15%, Y=75%, Z=35%
2. For vocals or elements needing top-end lift
3. Static or gentle movement
4. Result: Polished, modern, airy sound

### Technique 2: Air Sweep
1. Start: X=10%, Y=40%, Z=20% (natural)
2. Move to: X=20%, Y=90%, Z=45% (air)
3. Use for buildups or brightening sections
4. Result: Progressive brightness increase

### Technique 3: Selective Brightness
1. Map Speed to high-frequency modulation
2. Move = shimmering top-end
3. Still = stable brightness
4. Result: Dynamic, living air

### Technique 4: The Polished Mix
1. Apply to master bus or groups
2. X: 15% (clean lows)
3. Y: 50-70% (moderate air)
4. Z: 20-30% (subtle enhancement)
5. Result: Professional polish without harshness

## Combining with Other Vibes

### Air + Clarity (Ultra-Defined)
- X: High-pass (air)
- Y: Presence + air bands (clarity)
- Z: Enhancement (both)
- Result: Maximum detail and definition

### Air + Depth (Open Cosmos)
- X: Clean lows (air)
- Y: Long reverb (depth)
- Z: High-frequency delay (air)
- Result: Vast, atmospheric, open

### Air + Punch (Bright Aggression)
- X: High-pass (air)
- Y: Bright saturation (punch)
- Z: Sparkle on transients (both)
- Result: Cutting, bright attack

### Air + Warmth (Polished Warmth)
- X: Moderate high-pass (balance)
- Y: Moderate air (brightness)
- Z: Gentle enhancement (warmth)
- Result: Warm but not dark, clear but not harsh

## Common Air Targets

| Source | X | Y | Z | Notes |
|--------|---|---|---|-------|
| **Vocals** | 10-20% | 60-80% | 30-40% | Top-end shimmer |
| **Master Bus** | 15-25% | 40-60% | 20-30% | Polished mix |
| **Synths** | 10-20% | 70-90% | 30-50% | Electronic shine |
| **Acoustic Guitars** | 15-25% | 50-70% | 25-35% | String brilliance |
| **Cymbals/Hi-hats** | 20-30% | 60-80% | 30-40% | Maximum shimmer |

## Air Cheat Sheet

`\`\`
Too dark/muddy?         → Increase Y (air EQ)
Rumble in lows?         → Increase X (high-pass)
Lacking polish?         → Increase Z (enhancer)
Too harsh?              → Decrease Y, check X
Not shiny enough?       → Increase Z, moderate Y
Modern sound needed?    → Increase all moderately
`\`\`

## Frequency Spectrum Reference

| Frequency Range | Effect | Air Contribution |
|----------------|--------|------------------|
| 12-16kHz | Sheen | Primary air band |
| 16-20kHz | Sparkle | Ultra-high detail |
| 8-12kHz | Brilliance | Presence + air |
| 5-8kHz | Presence | Clarity foundation |

## Creating Different Air Types

### Subtle Air (Natural Polish)
`\`\`
X: 15% (clean lows)
Y: 50% (moderate air)
Z: 25% (subtle enhancement)
Result: Professional, natural brightness
`\`\`

### Moderate Air (Modern Sheen)
`\`\`
X: 20% (clear lows)
Y: 70% (strong air)
Z: 35% (moderate enhancement)
Result: Contemporary, polished sound
`\`\`

### Maximum Air (Extreme Shimmer)
`\`\`
X: 25% (tight lows)
Y: 90% (maximum air)
Z: 50% (full enhancement)
Result: Bright, shimmering, ultra-detailed
`\`\`

## Avoiding Over-Air

**Warning Signs:**
- Harshness or sibilance
- Listener fatigue
- Thin quality (too much high-pass)
- Artifacts and noise amplification

**Solutions:**
- Keep X moderate (don't over-filter)
- De-ess vocals before adding air
- Use dynamic EQ for air band
- Check on multiple playback systems
- Reference against commercial mixes

## Air by Application

### Vocals Air
`\`\`
Focus: Y (air EQ for shimmer)
X: Moderate (remove rumble only)
Z: Subtle (20-30%)
De-essing recommended before air
`\`\`

### Master Bus Air
`\`\`
Focus: Balanced X/Y/Z
Gentle settings all around
Goal: Polish without obvious processing
`\`\`

### Synth Air
`\`\`
Focus: Y (maximum air)
X: Light (keep bass)
Z: Moderate-high
Goal: Electronic shimmer
`\`\`

### Percussion Air
`\`\`
Focus: X (tighten lows)
Y: Moderate (cymbal sheen)
Z: Moderate (sparkle)
Goal: Clean, bright, defined
`\`\`

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\vibe-clarity.md

```markdown
# Workflow: Vibe - Creating Clarity

## Goal
Add presence, definition, and forwardness to make elements cut through the mix.

## Vibe Definition
Clarity = Presence boost + High-mid emphasis + Intelligibility + Forward placement

## 3D Mapping Strategy

`\`\`
X-Axis: Presence EQ (2-5kHz, 0-6dB boost)
├── 0% = Flat, natural
└── 100% = Maximum presence, forward

Y-Axis: High-shelf Brightness (8-12kHz, 0-4dB boost)
├── Lower = Natural, warm
└── Higher = Shiny, crisp

Z-Axis: Exciter/Enhancer (0-40%)
├── 0% = Dry, unenhanced
└── 40% = Harmonic excitement, definition
`\`\`

## Target Zone
**Sweet Spot**: Upper-right quadrant
- X: 50-80% (strong presence)
- Y: 50-80% (brightness)
- Z: 20-40% (subtle enhancement)

## Setup

### Controller Configuration
`\`\`
Mode: Absolute (for precise clarity settings)

Mappings:
├── X → Presence EQ @ 3-5kHz (0-6dB)
├── Y → High-shelf @ 10kHz (0-4dB)
├── Z → Exciter/Harmonic Enhancer (0-40%)
└── Speed → Transient Emphasis (0-50%)
`\`\`

### Processing Chain
`\`\`
[Source] → [X-Y-Z Controller] → [EQ] → [Exciter] → [Transient Shaper] → [Output]
`\`\`

## Performance Techniques

### Technique 1: The Presence Push
1. Position: X=70%, Y=60%, Z=30%
2. For vocals or leads that need to sit forward
3. Quick movements add dynamic clarity
4. Result: Cuts through dense mixes

### Technique 2: Clarity Sweep
1. Start: X=30%, Y=40%, Z=20% (natural)
2. Gradually move to: X=80%, Y=70%, Z=35% (clarity)
3. Use for buildup sections or hooks
4. Result: Increasing intelligibility

### Technique 3: Selective Enhancement
1. Map Speed to transient boost
2. Move quickly = more presence
3. Still = natural tone
4. Result: Dynamic clarity following playing intensity

### Technique 4: The Focus Point
1. Position: X=90%, Y=50%, Z=25%
2. Maximum presence without excessive brightness
3. For critical elements (lead vocal, solo)
4. Result: Absolute front-of-mix placement

## Combining with Other Vibes

### Clarity + Warmth (Defined Body)
- X: High (clarity)
- Y: Moderate (balance)
- Z: Moderate (both)
- Result: Clear but not thin, present but not harsh

### Clarity + Depth (Clear Space)
- X: Presence (clarity)
- Y: Reverb time (depth)
- Z: Early reflections (both)
- Result: Clear elements in spacious environment

### Clarity + Punch (Cutting Attack)
- X: Maximum presence
- Y: Transient boost
- Z: Saturation on peaks
- Result: Aggressive, in-your-face attack

### Clarity + Air (Ultra-Detailed)
- X: Presence (2-5kHz)
- Y: Air band (15kHz+)
- Z: Enhancement
- Result: Extreme detail and shimmer

## Common Clarity Targets

| Source | X Range | Y Range | Z Range | Notes |
|--------|---------|---------|---------|-------|
| **Lead Vocals** | 60-80% | 50-70% | 20-35% | Primary focus |
| **Acoustic Guitar** | 50-70% | 60-80% | 25-40% | String clarity |
| **Snare Drum** | 70-90% | 40-60% | 20-30% | Crack and snap |
| **Synth Leads** | 60-80% | 60-90% | 30-45% | Cut through mix |
| **Dialog/Voice** | 50-70% | 30-50% | 15-25% | Intelligibility |

## Clarity Cheat Sheet

`\`\`
Buried in mix?          → Increase X (presence)
Dull or dark?           → Increase Y (brightness)
Lacking definition?     → Increase Z (enhancement)
Too harsh?              → Decrease X, moderate Y
Not cutting through?    → Increase Speed→transients
Boxy sounding?          → Position in upper area
`\`\`

## Avoiding Over-Clarity

**Warning Signs:**
- Harshness or stridency
- Listener fatigue
- Thin or brittle quality
- Conflicts with other midrange elements

**Solutions:**
- Don't max X on every element
- Keep Z subtle (under 40%)
- Use subtractive EQ on competing elements
- Dynamic EQ for clarity only when needed
- High-pass before clarity processing

## Frequency Reference

| Frequency | Effect | Use Case |
|-----------|--------|----------|
| 2-3kHz | Forwardness | General presence |
| 3-5kHz | Attack/Edge | Drums, guitars |
| 5-8kHz | Sibilance area | Careful with vocals |
| 8-12kHz | Brilliance | Air, sheen |
| 12-20kHz | Air/Sparkle | Ultra-high detail |

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\vibe-depth.md

```markdown
# Workflow: Vibe - Creating Depth

## Goal
Create spacious, immersive, three-dimensional sound with spatial width and distance.

## Vibe Definition
Depth = Stereo width + Reverb space + Delay ambience + Distance perception

## 3D Mapping Strategy

`\`\`
X-Axis: Stereo Width (0-150%)
├── 0% = Mono, focused
└── 100%+ = Wide, immersive

Y-Axis: Reverb Send (0-70%)
├── 0% = Dry, close
└── 70% = Wet, distant (avoid 100% wash)

Z-Axis: Delay Feedback (20-60%)
├── Low = Slapback, near
└── High = Dense ambience, far
`\`\`

## Target Zone
**Sweet Spot**: Upper area with moderate spread
- X: 50-100% (spacious but controlled)
- Y: 40-70% (space without wash)
- Z: 30-60% (ambience and depth)

## Setup

### Controller Configuration
`\`\`
Mode: Absolute (for spatial positioning)

Mappings:
├── X → Stereo Width (0-150%)
├── Y → Reverb Send (0-70%)
├── Z → Delay Feedback (20-60%)
└── Speed → Reverb Pre-delay or Modulation (0-40%)
`\`\`

### Processing Chain
`\`\`
[Source] → [X-Y-Z Controller] → [Width] → [Reverb Send] → [Delay Send] → [Output]
`\`\`

## Performance Techniques

### Technique 1: Space Entry
1. Start: X=20%, Y=10%, Z=20% (close/dry)
2. Move to: X=80%, Y=60%, Z=50% (spacious/wet)
3. Result: Element moves from foreground to background
4. Use for creating depth in arrangements

### Technique 2: Breathing Width
1. Position: X oscillates 60-100%
2. Y and Z steady
3. Slow oscillation (4-8 bars)
4. Result: Space expands and contracts organically

### Technique 3: The Distance Throw
1. Quick Y increase (40% → 70%)
2. Simultaneous Z increase
3. X can widen or narrow
4. Result: Sound "thrown" into distance
5. Great for transitions and fills

### Technique 4: 3D Navigation
1. X: Left/right positioning
2. Y: Near/far depth (reverb)
3. Z: Elevation/ambience (delay)
4. Move through 3D space fluidly
5. Result: Immersive spatial experience

## Combining with Other Vibes

### Depth + Warmth (Cozy Intimacy)
- X: Moderate width (warmth)
- Y: Moderate-high reverb (depth)
- Z: Medium delay (both)
- Result: Enveloping, intimate space

### Depth + Clarity (Clear Space)
- X: Wide (depth)
- Y: Presence EQ (clarity)
- Z: Pre-delay (both)
- Result: Spacious but defined elements

### Depth + Punch (Impact in Space)
- X: Wide (depth)
- Y: Early reflections (punch)
- Z: Controlled ambience (balance)
- Result: Powerful sounds in large space

### Depth + Air (Open Cosmos)
- X: Maximum width (depth)
- Y: Long reverb (depth)
- Z: High-frequency delay (air)
- Result: Vast, open, atmospheric

## Common Depth Targets

| Source | X Range | Y Range | Z Range | Notes |
|--------|---------|---------|---------|-------|
| **Pads** | 80-150% | 50-70% | 40-60% | Maximum space |
| **Vocals** | 30-80% | 30-60% | 20-40% | Intimate to spacious |
| **Guitars** | 60-100% | 30-50% | 30-50% | Room ambience |
| **Synths** | 50-120% | 40-60% | 30-50% | Electronic space |
| **Drums** | 40-80% | 20-40% | 20-30% | Controlled room |

## Depth Cheat Sheet

`\`\`
Too narrow/focused?     → Increase X (width)
Too dry/close?          → Increase Y (reverb)
Lacking ambience?       → Increase Z (delay)
Too washed out?         → Decrease Y, keep X moderate
Not immersive enough?   → Increase all three moderately
Losing focus?           → Decrease X, keep Y/Z
`\`\`

## Creating Distance Illusion

### Near (Close to Listener)
`\`\`
X: 20-40% (focused)
Y: 10-30% (dry)
Z: 10-20% (minimal)
Result: Intimate, present
`\`\`

### Mid (Room Distance)
`\`\`
X: 50-80% (natural width)
Y: 40-60% (room reverb)
Z: 30-50% (subtle delay)
Result: Placed in space
`\`\`

### Far (Distant/Ambient)
`\`\`
X: 80-120% (wide)
Y: 60-70% (wet, careful not to wash)
Z: 50-60% (dense ambience)
Result: Background, atmospheric
`\`\`

## Avoiding Over-Depth

**Warning Signs:**
- Mix sounds washed out
- Loss of impact and definition
- Everything competing for space
- Phase issues (check in mono)

**Solutions:**
- Limit Y to 70% maximum (prevent wash)
- Use pre-delay to maintain clarity
- Check mono compatibility
- Prioritize: Lead = closer, Support = deeper
- Don't put everything in "far" position

## Spatial Positioning Reference

| Position | X | Y | Z | Use Case |
|----------|---|---|---|----------|
| **Front/Center** | 50% | 10-20% | 10% | Lead elements |
| **Left/Near** | 20% | 20% | 20% | Side element |
| **Right/Far** | 80% | 60% | 50% | Background |
| **Wide/Ambient** | 120% | 50% | 50% | Atmosphere |
| **Intimate** | 30% | 15% | 15% | Close vocal |

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\vibe-punch.md

```markdown
# Workflow: Vibe - Creating Punch

## Goal
Add impact, aggression, dynamic energy, and tight attack to drums, bass, and aggressive elements.

## Vibe Definition
Punch = Transient emphasis + Compression + Saturation + Dynamic aggression

## 3D Mapping Strategy

`\`\`
X-Axis: Transient Shaper (0-70%)
├── 0% = Natural transients
└── 70% = Maximum attack emphasis

Y-Axis: Compression (threshold/ratio)
├── Lower = Light compression
└── Higher = Heavy compression/squash

Z-Axis: Saturation on Transients (0-50%)
├── 0% = Clean peaks
└── 50% = Driven, aggressive peaks
`\`\`

**Bonus Outputs:**
- **Speed** → Accent boost or drive amount
- **Acceleration** → Transient boost (captures gesture attack)

## Target Zone
**Sweet Spot**: Upper-right with dynamic outputs
- X: 40-70% (strong transients)
- Y: 40-60% (controlled dynamics)
- Z: 30-50% (edge and grit)
- Speed: Map for dynamic intensity

## Setup

### Controller Configuration
`\`\`
Mode: Relative (for rhythmic dynamic control)

Mappings:
├── X → Transient Shaper (0-70%)
├── Y → Compression Ratio (2:1 to 8:1)
├── Z → Saturation/Drive (0-50%)
├── Speed → Accent Volume Boost (0-6dB)
└── Acceleration → Transient Boost (spike detection)
`\`\`

### Processing Chain
`\`\`
[Source] → [X-Y-Z Controller] → [Transient Shaper] → [Compressor] → [Saturator] → [Output]
`\`\`

## Performance Techniques

### Technique 1: The Ghost Note Accent
1. Map Acceleration to transient boost
2. Quick gesture starts trigger accent spikes
3. Use for emphasizing ghost notes or fills
4. Result: Dynamic, responsive drum performance

### Technique 2: Rhythmic Pumping
1. Map Speed to compression amount
2. Rhythmic movements create pumping effect
3. Move with the groove for musical compression
4. Result: Living, breathing dynamics

### Technique 3: The Impact Moment
1. Position: X=70%, Y=60%, Z=40%
2. Quick flick for Speed spike
3. Simultaneous maximum punch
4. Use for downbeats, drops, impacts
5. Result: Maximum aggression and impact

### Technique 4: Controlled Aggression
1. Start: X=30%, Y=40%, Z=20% (moderate)
2. Build to: X=70%, Y=60%, Z=50% (intense)
3. Use Speed for dynamic variation
4. Result: Progressive intensity increase

## Combining with Other Vibes

### Punch + Clarity (Cutting Attack)
- X: Transient shaper (punch)
- Y: Presence EQ (clarity)
- Z: Saturation (both)
- Result: In-your-face, defined impact

### Punch + Warmth (Thick Power)
- X: Transient (punch)
- Y: Low cutoff (warmth)
- Z: Drive (punch)
- Result: Heavy, saturated low-end aggression

### Punch + Depth (Impact in Space)
- X: Transient (punch)
- Y: Early reflections (depth)
- Z: Saturation (punch)
- Result: Powerful sounds placed in environment

### Punch + Air (Bright Aggression)
- X: Maximum transient
- Y: Light compression
- Z: Drive with high-frequency emphasis
- Result: Bright, aggressive, cutting

## Common Punch Targets

| Source | X | Y | Z | Speed | Notes |
|--------|---|---|---|-------|-------|
| **Kick Drum** | 50-70% | Moderate | 40-50% | Yes | Maximum impact |
| **Snare** | 40-60% | Light-Mod | 30-40% | Yes | Crack and body |
| **Bass** | 30-50% | Moderate | 30-50% | Optional | Tight low-end |
| **Drum Bus** | 40-60% | 4:1-6:1 | 30-40% | Yes | Unified punch |
| **Synth Leads** | 20-40% | Light | 20-30% | Yes | Aggressive leads |

## Punch Cheat Sheet

`\`\`
Lacking impact?         → Increase X (transients)
Too dynamic?            → Increase Y (compression)
Not aggressive enough?  → Increase Z (saturation)
Need dynamic accents?   → Map Speed to volume
Want playing reactivity? → Map Acceleration
Too harsh?              → Decrease Z, moderate X
`\`\`

## Dynamic Control Strategies

### Strategy 1: Velocity Layering
1. Map Speed to multiple parameters
2. Soft playing = gentle settings
3. Hard playing = maximum punch
4. Result: Responsive to performance intensity

### Strategy 2: Accent Detection
1. Map Acceleration to transient boost
2. Sudden gesture starts = accent spikes
3. Captures human intention automatically
4. Result: Natural dynamic emphasis

### Strategy 3: Rhythmic Pumping
1. Move controller rhythmically with tempo
2. Speed creates compression pumping
3. Syncopated movements create groove
4. Result: Musical, rhythmic dynamics

## Avoiding Over-Punch

**Warning Signs:**
- Excessive transient spikes (harsh)
- Over-compressed, lifeless sound
- Distortion artifacts
- Fatigue from constant aggression

**Solutions:**
- Don't max all parameters simultaneously
- Use moderate settings for most elements
- Save maximum punch for key moments
- Check in context—solo can deceive
- Use parallel processing for heavy saturation

## Punch by Element

### Kick Drum Punch
`\`\`
Focus: X (transient shaper)
Y: Light compression (preserve dynamics)
Z: Moderate drive (30-40%)
Goal: Tight, impactful, defined
`\`\`

### Snare Punch
`\`\`
Focus: X (transient for crack)
Y: Moderate compression (glue)
Z: Light saturation (20-30%)
Goal: Crack and body balance
`\`\`

### Bass Punch
`\`\`
Focus: Y (compression for consistency)
X: Light transient (if needed)
Z: Drive for harmonics (30-40%)
Goal: Tight, consistent, present
`\`\`

### Drum Bus Punch
`\`\`
Focus: Balanced X/Y/Z
All moderate settings
Goal: Unified kit with impact
`\`\`

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\vibe-warmth.md

```markdown
# Workflow: Vibe - Creating Warmth

## Goal
Add analog warmth, vintage thickness, and cozy texture using the X-Y-Z Controller.

## Vibe Definition
Warmth = Analog character + Low-frequency emphasis + Gentle saturation + Subtle width

## 3D Mapping Strategy

`\`\`
X-Axis: Detune/Pitch Widening (0-30%)
├── 0% = In-tune, focused
└── 30% = Wide, chorused, thick

Y-Axis: Low-Pass Cutoff (200Hz - 5kHz)
├── Lower = Darker, warmer
└── Upper = Brighter, clearer

Z-Axis: Saturation/Drive (0-40%)
├── 0% = Clean, digital
└── 40% = Gently saturated, analog
`\`\`

## Target Zone
**Sweet Spot**: Lower-left quadrant
- X: 10-30% (subtle widening)
- Y: 10-40% (warm/dark)
- Z: 20-40% (gentle saturation)

## Setup

### Controller Configuration
`\`\`
Mode: Absolute (for specific warmth settings)

Mappings:
├── X → Oscillator Detune (0-30 cents) OR Stereo Width (100-130%)
├── Y → Low-Pass Cutoff (200Hz - 5kHz)
├── Z → Tape/Tube Saturation (0-40%)
└── Speed → Subtle Vibrato (0-20% depth)
`\`\`

### Processing Chain
`\`\`
[Source] → [X-Y-Z Controller] → [Low-Pass Filter] → [Saturation] → [Output]
`\`\`

## Performance Techniques

### Technique 1: The Warm Pad
1. Position: X=20%, Y=30%, Z=30%
2. Slow, minimal movement
3. Optional: Add gentle Speed→vibrato
4. Result: Evolving, warm pad texture

### Technique 2: Vintage Lead
1. Position: X=15%, Y=50%, Z=25%
2. Moderate X movement for live feel
3. Keep Y below 60% to maintain warmth
4. Result: Classic analog lead sound

### Technique 3: Subtle Thickening
1. Position: X=25%, Y=35%, Z=20%
2. Static or very slow drift
3. Apply to background elements
4. Result: Adds depth without prominence

### Technique 4: Analog Drums
1. Position: X=10%, Y=40%, Z=35%
2. Map Speed to transient softening
3. Quick movements = gentle saturation
4. Result: Vintage drum machine character

## Combining with Other Vibes

### Warmth + Clarity (Balanced)
- X: Moderate (warmth)
- Y: Moderate-high (clarity) 
- Z: Moderate (both)
- Result: Clear but not cold, warm but not muddy

### Warmth + Depth (Cozy Space)
- X: Width + detune (warmth)
- Y: Low cutoff + reverb (depth)
- Z: Saturation + space (both)
- Result: Intimate, enveloping sound

### Warmth + Punch (Thick Power)
- X: Subtle (focus)
- Y: Moderate-low (warmth)
- Z: Saturation + drive (punch)
- Result: Heavy, powerful low-end

## Common Warmth Targets

| Source | X Mapping | Y Range | Z Amount |
|--------|-----------|---------|----------|
| **Synth Pads** | Detune 10-20% | 300Hz-2kHz | 20-30% |
| **Bass** | Width 110-120% | 80Hz-800Hz | 25-35% |
| **Drums** | Minimal/none | 100Hz-5kHz | 30-40% |
| **Vocals** | Subtle width | 200Hz-8kHz | 15-25% |
| **Master Bus** | Stereo width | Full range | 10-20% |

## Warmth Cheat Sheet

`\`\`
Too Cold/Digital?       → Increase Z (saturation)
Too Thin?               → Increase X (width/detune)
Too Bright/Harsh?       → Decrease Y (lower cutoff)
Lacking Character?      → Add Speed→vibrato (subtle)
Too Much Mud?           → Decrease Y (cut lows more)
`\`\`

## Avoiding Over-Warmth

**Warning Signs:**
- Sound becomes muddy or undefined
- Loss of clarity in mix
- Excessive "fuzz" without definition
- Competing with other warm elements

**Solutions:**
- Keep Y cutoff above 200Hz minimum
- Limit Z to 40% maximum
- Use subtractive EQ after warming
- Apply selectively, not to everything

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-instrument\bass-synthesis.md

```markdown
# Workflow: Bass Synthesis and Control

## Goal
Create tight, expressive, and dynamic bass sounds that sit perfectly in hip-hop and electronic mixes.

## The Perfect Bass Character
- Solid low-end foundation
- Controlled but expressive filtering
- Appropriate saturation for genre
- Tight dynamics for mix clarity

## Controller Setup

### Configuration A: Sub Bass Performance
`\`\`
Mode: Relative (for smooth filter control)

Mappings:
├── X → Fine pitch (±2 semitones, subtle)
├── Y → Low-pass cutoff (50-1000Hz)
├── Z → Drive/Saturation (0-40%)
└── Speed → LFO depth (subtle movement)
`\`\`

### Configuration B: Bass Growl/Wobble
`\`\`
Mode: Relative

Mappings:
├── X → Wavetable position/Osc mix
├── Y → Filter cutoff (wide range)
├── Z → Resonance (0-70%)
└── Speed → Modulation amount
`\`\`

### Configuration C: Bass Bus Processing
`\`\`
Mode: Absolute

Mappings:
├── X → Stereo width (0-20%, keep mono compatible)
├── Y → Compression threshold
├── Z → Harmonic exciter
└── Speed → Dynamic EQ
`\`\`

## Performance Techniques

### Technique 1: Filter Talk
1. Map Y to low-pass filter
2. "Talk" through filter while holding notes
3. Creates vocal-like expression
4. Result: Living, breathing bass

### Technique 2: Dynamic Saturation
1. Z controls drive amount
2. Higher notes = more drive
3. Lower notes = cleaner
4. Result: Tonal consistency

### Technique 3: Width Control
1. X subtly widens upper harmonics
2. Keep fundamental mono (below 100Hz)
3. Adds space without losing power
4. Result: Wide but solid bass

### Technique 4: Groove Compression
1. Map Speed to compression ratio
2. Move with the beat
3. Creates pumping groove
4. Result: Tight, rhythmic bass

## Bass Types and Settings

### Sub Bass (20-60Hz focus)
`\`\`
X: Minimal (keep centered)
Y: 50-200Hz cutoff (very low)
Z: 20-30% (gentle warmth)
Mode: Relative
Goal: Foundation, felt not heard
`\`\`

### Mid Bass (60-150Hz focus)
`\`\`
X: Subtle width on harmonics
Y: 80-500Hz cutoff
Z: 30-40% (character)
Mode: Relative
Goal: Audible body, mix presence
`\`\`

### Growl Bass (150-500Hz focus)
`\`\`
X: Wavetable position
Y: 200-2000Hz cutoff
Z: 40-60% (aggression)
Speed: Modulation
Mode: Relative
Goal: Aggressive, textured
`\`\`

### Reese Bass (wide range)
`\`\`
X: Oscillator detune
Y: Full range sweeps
Z: Moderate saturation
Speed: LFO or FM amount
Mode: Relative
Goal: Moving, evolving texture
`\`\`

## Quick Bass Presets

### Preset 1: Hip-Hop Sub
`\`\`
X: Centered
Y: 60-400Hz
Z: 25%
Mode: Relative
Character: Deep, controlled, warm
`\`\`

### Preset 2: Trap 808
`\`\`
X: Pitch glide ±7st
Y: 40-800Hz
Z: 40%
Mode: Relative
Character: Sliding, distorted, powerful
`\`\`

### Preset 3: Dubstep Growl
`\`\`
X: Wavetable morph
Y: 100-3000Hz
Z: 50%
Speed: LFO rate
Mode: Relative
Character: Aggressive, modulated
`\`\`

### Preset 4: Bass Guitar Emulation
`\`\`
X: Pitch ±2st (bends)
Y: 80-5000Hz
Z: 30%
Mode: Absolute
Character: Natural, organic
`\`\`

## Genre-Specific Bass

### Hip-Hop Bass
- Clean sub foundation (Y < 200Hz)
- Controlled saturation (Z 20-35%)
- Minimal width (X centered)
- Tight, present

### Trap Bass
- Wide filter range (Y full sweep)
- Heavy saturation (Z 40-50%)
- Pitch slides (X ±7-12st)
- Aggressive, modern

### Dubstep Bass
- Modulated filtering
- High resonance (Z for character)
- LFO or speed mapping
- Complex, evolving

### House/Techno Bass
- Groove-focused
- Compression pumping
- Subtle filtering
- Consistent, driving

### Lo-Fi Bass
- Tape saturation (Z 30-40%)
- Warm filtering (Y 100-800Hz)
- Detuned width (X subtle)
- Fuzzy, cozy

## Mix Integration

### Frequency Management
`\`\`
Fundamental: Keep Y above fundamental freq
Harmonics: Allow through filtering
Saturation: Z adds harmonics for audibility
Width: Keep <150Hz mono (X=50%)
`\`\`

### Dynamics Control
`\`\`
Compression: Y threshold or Speed mapping
Saturation: Z acts as soft compressor
Pumping: Speed creates groove
Consistency: Controlled dynamics sit better
`\`\`

### Sidechain Relationship
`\`\`
Bass ducking: Use X-Y-Z on sidechain threshold
Or: Speed mapped to gain reduction
Result: Bass breathes with kick
`\`\`

## Recording Strategies

### Strategy 1: Live Bass Performance
- Enable record automation
- Play bass line with controller
- Human timing and expression
- Edit timing afterward

### Strategy 2: Step-Recorded Automation
- Program bass notes first
- Record controller separately
- Precise note + expressive control
- Best for complex lines

### Strategy 3: Real-Time Tweaking
- Play and adjust simultaneously
- Capture performance magic
- Multiple takes for options
- Comp best moments

## Common Issues and Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Too muddy | Y too high | Lower cutoff |
| Too thin | Y too low | Raise cutoff |
| Lacking power | X too wide | Center fundamental |
| Too aggressive | Z too high | Reduce saturation |
| Not cutting through | Filter too closed | Open Y gradually |
| Phase issues | Wide X on low freq | Keep <150Hz centered |

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-instrument\drum-processing.md

```markdown
# Workflow: Drum Programming and Processing

## Goal
Add dynamic expression, spatial positioning, and punch to programmed drums.

## Controller Applications
- Spatial panning and positioning
- Dynamic transient control
- Saturation and drive
- Room/reverb sends

## Controller Setup

### Configuration A: Drum Kit Performance
`\`\`
Mode: Absolute (for specific drum placement)

Mappings:
├── X → Pan (by drum element)
├── Y → Transient Shaper (0-60%)
├── Z → Saturation/Drive (0-40%)
└── Speed → Accent boost (0-5dB)
`\`\`

### Configuration B: Drum Bus Dynamics
`\`\`
Mode: Relative (for continuous groove)

Mappings:
├── X → Pan (drum bus width)
├── Y → Compression ratio (2:1 - 8:1)
├── Z → Room send (0-60%)
└── Acceleration → Transient boost
`\`\`

## Per-Element Strategies

### Kick Drum
**Focus**: Punch and consistency
`\`\`
X: Center or slightly off-center (40-60%)
Y: Transient shaper 50-70% (maximum attack)
Z: Drive 30-50% (adds harmonics)
Speed: Optional for dynamic pumping
`\`\`

### Snare Drum
**Focus**: Crack and body balance
`\`\`
X: Pan 30-70% (stereo width)
Y: Transient 40-60% (preserves body)
Z: Saturation 20-35% (adds edge)
Speed: Accent on backbeats
`\`\`

### Hi-Hats
**Focus**: Width and shimmer
`\`\`
X: Wide panning 10-90% or alternating
Y: Light transient (if needed)
Z: Moderate saturation for character
Speed: Rhythmic variation
`\`\`

### Cymbals/Overheads
**Focus**: Space and air
`\`\`
X: Full stereo width
Y: Room send depth
Z: Air enhancement
Speed: For dynamic room response
`\`\`

## Performance Techniques

### Technique 1: Dynamic Ghost Notes
1. Map Acceleration to transient boost
2. Quick gesture starts = accent spikes
3. Use on snare for ghost note emphasis
4. Result: Humanized, dynamic ghost notes

### Technique 2: Rhythmic Pumping
1. Map Speed to compression
2. Move controller rhythmically with beat
3. Creates musical pumping effect
4. Result: Living, breathing dynamics

### Technique 3: Spatial Kit Movement
1. X controls pan per element
2. Create kit width and dimension
3. Move X for dynamic positioning
4. Result: 3D drum kit placement

### Technique 4: Room Throws
1. Map Z to reverb send
2. Quick Z spikes for fills
3. Creates room "throws"
4. Result: Dynamic spatial effects

## Drum Bus Workflows

### Workflow 1: Glue and Punch
`\`\`
X: Stereo width control
Y: Compression threshold
Z: Parallel saturation
Goal: Unified kit with impact
`\`\`

### Workflow 2: Dynamic Room
`\`\`
X: Width
Y: Room send
Z: Pre-delay
Goal: Responsive room ambience
`\`\`

### Workflow 3: Breakdown Build
`\`\`
X: Narrowing to widening
Y: Increasing saturation
Z: Room growing
Goal: Build intensity to drop
`\`\`

## Quick Drum Presets

### Preset 1: Tight Hip-Hop Kit
`\`\`
Kick: X=50%, Y=70%, Z=40%
Snare: X=40% or 60%, Y=50%, Z=30%
Hats: X=alternating, Y=30%, Z=20%
Mode: Absolute per element
`\`\`

### Preset 2: Wide Electronic Kit
`\`\`
All: X=wide spread
Bus: Y=moderate compression
Room: Z=controlled send
Mode: Absolute
`\`\`

### Preset 3: Live Kit Feel
`\`\`
X: Slight variations (not perfect center)
Y: Speed-mapped for humanization
Z: Moderate on all
Mode: Relative
`\`\`

## Genre-Specific Tips

### Trap Drums
- Heavy saturation (Z 40-50%)
- Wide panning on hats
- Tight, aggressive transients
- Room throws on fills

### Boom Bap Drums
- Subtle saturation (Z 20-30%)
- Centered kick, wider snare
- Moderate compression
- Natural room sound

### Lo-Fi Drums
- Tape saturation (Z 30-40%)
- Mono or narrow width
- Soft transients
- Heavy room/reverb

### EDM Drums
- Maximum punch (Y 60-80%)
- Wide stereo (X 20-80%)
- Sidechain-style pumping
- Dynamic room fills

## Recording Strategies

### Strategy 1: Element-by-Element
- Record controller for each drum
- Kick, snare, hats separately
- Full control per element
- Time-intensive but precise

### Strategy 2: Kit Performance
- Record all drums together
- Perform as if playing kit
- Captures holistic groove
- Natural interaction

### Strategy 3: Hybrid Programming
- Program static drum parts
- Record controller overdubs
- Best of both worlds
- Efficient and expressive

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Too aggressive | High Y and Z | Reduce saturation |
| No stereo width | Centered X | Widen pan positions |
| Washed out | High Z room | Decrease room send |
| Lacking punch | Low Y | Increase transient |
| Too mechanical | Static values | Add Speed modulation |

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-instrument\hip-hop-lead-synth.md

```markdown
# Workflow: Lead Synthesis (Hip-Hop)

## Goal
Create expressive, modulated hip-hop lead sounds with the X-Y-Z Controller.

## The Hip-Hop Lead Character
- Pitch bends and slides (portamento style)
- Filter modulation for expression
- Distortion and saturation for edge
- Dynamic, responsive to playing

## Controller Setup

### Configuration
`\`\`
Mode: Relative (for smooth, continuous control)

Mappings:
├── X → Pitch Bend (±12 semitones)
├── Y → Filter Cutoff (100Hz - 20kHz)
├── Z → Distortion/Drive (0-50%)
└── Speed → Resonance boost (0-60%)

Optional:
└── Acceleration → Accent volume boost
`\`\`

## Performance Techniques

### Technique 1: The Slide
1. Play a note
2. Use X to pitch bend into the note
3. Coordinate with Y for timbral shift
4. Result: Classic hip-hop slide effect

### Technique 2: Filter Talk
1. Map Y to low-pass filter
2. "Talk" by moving Y while holding notes
3. Use Speed for dynamic resonance
4. Result: Expressive "vocal" filter modulation

### Technique 3: Grit Control
1. Z controls distortion amount
2. Higher positions = more saturation
3. Use for building intensity
4. Result: Dynamic edge and aggression

### Technique 4: Phrase Dynamics
1. Start phrase with moderate settings
2. Build intensity through phrase
3. Maximum at phrase peak
4. Release back to neutral
5. Result: Natural, musical dynamics

## Common Hip-Hop Lead Patterns

### The Glide Lead
`\`\`
Pitch: X bend ±7 semitones
Filter: Y moderate, sweeping
Drive: Z 20-40%
Mode: Relative
Use: Melodic hooks, smooth lines
`\`\`

### The Stab Lead
`\`\`
Pitch: X minimal
Filter: Y quick sweeps
Drive: Z 30-50%
Speed: Mapped to accents
Mode: Absolute
Use: Short, aggressive hits
`\`\`

### The Talk Box
`\`\`
Pitch: X ±12 semitones (wide)
Filter: Y primary control
Resonance: Speed modulated
Drive: Z moderate
Mode: Relative
Use: Vocal-like expression
`\`\`

## Genre-Specific Tips

### Trap Leads
- Heavy use of X for pitch slides
- Dark filter settings (Y < 50%)
- High distortion (Z 40-50%)
- Fast, aggressive movements

### Boom Bap Leads
- Moderate pitch bends
- Warm filter (Y 30-60%)
- Subtle saturation (Z 20-30%)
- Smooth, flowing gestures

### Lo-Fi Leads
- X for subtle detuning
- Y for low-pass warmth
- Z for tape saturation
- Slow, gentle movements

## Quick Presets

### Preset 1: The Mumble Lead
`\`\`
X: Pitch ±7st
Y: Cutoff 200Hz-8kHz
Z: Distortion 30%
Mode: Relative
Style: Slow, slurred bends
`\`\`

### Preset 2: The Scream Lead
`\`\`
X: Pitch ±12st
Y: Cutoff full range
Z: Distortion 50%
Speed: Resonance
Mode: Relative
Style: Aggressive, wide sweeps
`\`\`

### Preset 3: The Whisper Lead
`\`\`
X: Minimal pitch
Y: Filter focused 500Hz-5kHz
Z: Saturation 20%
Mode: Absolute
Style: Subtle, intimate
`\`\`

## Recording Strategies

### Strategy 1: Live Performance
- Enable automation record
- Perform phrases in real-time
- Capture human feel and timing
- Edit afterward for precision

### Strategy 2: Phrase Building
- Record controller for each phrase
- Layer multiple takes
- Comp best sections
- Result: Perfected but natural

### Strategy 3: Hybrid Approach
- Program melodic foundation
- Record controller overdubs
- Combine precision + expression
- Result: Controlled yet dynamic

## Common Mappings Reference

| Element | Primary Control | Secondary | Accent |
|---------|----------------|-----------|--------|
| **Pitch** | X | - | - |
| **Brightness** | Y | Speed | - |
| **Edge** | Z | - | Accel |
| **Resonance** | Speed | Y | - |
| **Dynamics** | - | Speed | Accel |

[SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-instrument\pad-atmosphere-design.md

```markdown
# Workflow: Pad and Atmosphere Design

## Goal
Create evolving, immersive pads and atmospheric textures using 3D morphing control.

## Controller Applications
- Continuous timbre evolution
- Spatial positioning and movement
- Filter and brightness modulation
- Effect depth and ambience

## Controller Setup

### Configuration A: Timbre Morphing Pad
`\`\`
Mode: Absolute (for specific state targeting)

Mappings:
├── X → Oscillator mix or wavetable position
├── Y → Filter cutoff (evolution)
├── Z → Effect depth (reverb/delay)
└── Speed → LFO or modulation depth
`\`\`

### Configuration B: Spatial Atmosphere
`\`\`
Mode: Absolute

Mappings:
├── X → Stereo width (0-200%)
├── Y → Reverb time/size
├── Z → Delay feedback/diffusion
└── Speed → Modulation rate
`\`\`

### Configuration C: 3D Soundscape Navigation
`\`\`
Mode: Absolute

Mappings:
├── X → Pan + stereo movement
├── Y → Filter (near/far illusion)
├── Z → Spatial effect send
└── Speed → Granular or texture parameter
`\`\`

## Pad Types and Techniques

### Technique 1: The Evolving Drone
1. Map X to oscillator morph or mix
2. Move slowly through positions
3. Y for brightness evolution
4. Result: Constantly shifting texture

### Technique 2: Breathing Space
1. X oscillates slowly (width modulation)
2. Y steady or slowly rising
3. Z for depth breathing
4. Result: Organic, living space

### Technique 3: Spatial Swirl
1. X creates circular panning
2. Y modulates filter
3. Z increases as pad evolves
4. Result: Immersive 3D movement

### Technique 4: Texture Granular
1. Map Speed to granular parameter
2. Movement creates texture variation
3. Still = stable texture
4. Result: Dynamic, granular evolution

## Pad Recipes

### Recipe 1: Warm Analog Pad
`\`\`
X: Oscillator detune 10-30%
Y: Low-pass 200-2000Hz
Z: Reverb 40-70%
Speed: Slow vibrato 0-10%
Mode: Absolute
Character: Vintage, cozy, enveloping
`\`\`

### Recipe 2: Bright Digital Pad
`\`\`
X: Bright waveform mix
Y: High-pass + filter sweep
Z: Long delay 50-70%
Speed: Fast LFO 20-40%
Mode: Absolute
Character: Shimmering, modern, airy
`\`\`

### Recipe 3: Dark Cinematic Pad
`\`\`
X: Sub oscillator blend
Y: Low cutoff 100-800Hz
Z: Big reverb 60-80%
Speed: Subtle movement
Mode: Absolute
Character: Mysterious, deep, filmic
`\`\`

### Recipe 4: Rhythmic Arpeggio Pad
`\`\`
X: Arp pattern morph
Y: Filter following notes
Z: Delay for rhythm
Speed: Accent on beats
Mode: Relative
Character: Moving, rhythmic, energetic
`\`\`

### Recipe 5: Granular Texture
`\`\`
X: Sample position
Y: Density/texture
Z: Reverb freeze
Speed: Grain manipulation
Mode: Absolute
Character: Abstract, glitchy, experimental
`\`\`

## 3D Positioning for Pads

### Background Atmosphere
`\`\`
X: Wide 100-150%
Y: Low filter (distant)
Z: High reverb 70%
Result: Distant, ambient bed
`\`\`

### Midground Support
`\`\`
X: Moderate 60-100%
Y: Mid filter
Z: Moderate reverb 50%
Result: Present but supportive
`\`\`

### Foreground Texture
`\`\`
X: Narrow 30-60%
Y: Open filter
Z: Light reverb 30%
Result: Intimate, detailed
`\`\`

## Evolution Patterns

### Pattern 1: Slow Build
`\`\`
Duration: 8-16 bars
X: Steady or slow morph
Y: Gradual filter opening
Z: Increasing reverb
Result: Building intensity
`\`\`

### Pattern 2: Wave Cycle
`\`\`
Duration: 4-8 bars
X: Sine wave oscillation
Y: Following X
Z: Steady or following
Result: Breathing, organic
`\`\`

### Pattern 3: Random Walk
`\`\`
Duration: Continuous
X: Drifting randomly
Y: Related to X
Z: Occasional spikes
Result: Unpredictable, evolving
`\`\`

### Pattern 4: Geometric
`\`\`
Duration: 2-4 bars
X: Corner-to-corner jumps
Y: Following X
Z: Pattern-based
Result: Structured evolution
`\`\`

## Effect Integration

### Reverb as 3D Space
`\`\`
Z: Reverb send
Y: Filter pre-reverb
X: Pre-reverb panning
Result: Pad exists in defined space
`\`\`

### Delay as Texture
`\`\`
Z: Delay feedback
Y: Delay time/filter
Speed: Delay modulation
Result: Rhythmic or ambient texture
`\`\`

### Modulation Effects
`\`\`
X: Chorus rate
Y: Phaser depth
Z: Flanger feedback
Result: Rich, moving texture
`\`\`

## Recording Long Evolutions

### Strategy 1: Single Long Pass
- Enable record
- Perform 16-32 bar evolution
- Single take = natural flow
- Edit start/end points

### Strategy 2: Layered Sections
- Record 4-bar sections separately
- Layer for complex evolution
- Crossfade between takes
- Result: Multi-dimensional pad

### Strategy 3: Loop and Modulate
- Create base pad loop
- Record controller over multiple passes
- Each pass adds modulation
- Result: Dense, complex texture

## Atmospheric Sound Design

### Wind/Noise Textures
`\`\`
X: Pan drift
Y: Filter modulation
Z: Noise/reverb
Speed: Gust intensity
Result: Natural wind sounds
`\`\`

### Water/Fluid Textures
`\`\`
X: Slow panning
Y: Filter "wave" motion
Z: Reverb depth
Speed: Ripple intensity
Result: Liquid, flowing
`\`\`

### Industrial/Dark Textures
`\`\`
X: Erratic movement
Y: Harsh filtering
Z: Distortion/reverb
Speed: Impact accents
Result: Mechanical, ominous
`\`\`

## Tips for Effective Pads

1. **Slow Movements**: Pads reward gradual, smooth changes
2. **Wide Ranges**: Use full X range for stereo interest
3. **Filter is Key**: Y-axis filter creates most variation
4. **Space Matters**: Z creates depth—use generously
5. **Modulation Adds Life**: Speed mapping prevents stasis
6. **Layer Multiple Pads**: Different controller settings per layer
7. **Record Long Takes**: Captures evolution naturally
8. **Edit After**: Fine-tune recorded automation

## Common Pad Parameters

| Parameter | Typical Range | Mapping |
|-----------|---------------|---------|
| Oscillator Mix | 0-100% | X |
| Filter Cutoff | 100-10000Hz | Y |
| Resonance | 0-60% | Z or Speed |
| LFO Rate | 0.1-10Hz | Speed |
| LFO Depth | 0-100% | Z |
| Reverb Send | 30-80% | Z |
| Stereo Width | 50-150% | X |
| Attack Time | 100-1000ms | Fixed |

[SRC: IL-MAN]

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log & Official Links: Fruity X-Y-Z Controller

## Official Links
*   **Manual:** [Fruity X-Y-Z Controller Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20X-Y-Z%20Controller.htm)
*   **Tutorial:** [Multi-touch Gestures in FL Studio](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/envsettings_general.htm)

## Source Log
1.  **[SRC: IL-MAN]:** Official Manual. Used for 5-output definitions, Z-axis control, and Speed/Acceleration logic.
2.  **[SRC: REPUTABLE]:** SeamlessR (Advanced Control Theory). Used for the "Acceleration/Delay Splash" concept and 5-signal macro mapping.
3.  **[SRC: REPUTABLE]:** Image-Line Power Users (Forum). Used for the "Z-axis Pinch" touchscreen gestures and 3D spatial positioning workflows.

## Coverage Checklist
- [x] X, Y, Z Axis Definitions
- [x] Speed & Acceleration Logic
- [x] 3D Spatial Positioning Setup
- [x] 5 Vibe Targets (Moody, Upbeat, Psychedelic, Jazzy, Vibey)
- [x] Multi-touch/Gesture Support
- [x] Absolute vs Relative Modes

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity X-Y-Z Controller (3D Performance)

## Vibe 1: The "Immersive" R&B Mix
*   **Sound:** Sounds moving in 3D circles around your head.
*   **Key Move:** X=Pan, Z=Reverb, Y=Filter. Automated in a spiral.

## Vibe 2: The "Glitch-Trap" Lead
*   **Sound:** Spastic, aggressive, constantly changing.
*   **Key Move:** Speed linked to Bitcrush, Acceleration linked to Delay, X linked to Cutoff.

## Vibe 3: The "Cinematic" Hip-Hop Intro
*   **Sound:** Huge, looming, slowly approaching.
*   **Key Move:** Z linked to Volume and High-Shelf EQ (Sound gets louder and brighter as you "zoom in" with the Z-axis).

## Vibe 4: The "Neo-Soul" Expressive Keys
*   **Sound:** Warm, vibrating, human.
*   **Key Move:** Speed linked to Vibrato Depth, X linked to Volume, Y linked to Filter Cutoff.

```

---

## FILE: 04-Reference\integration-guide.md

```markdown
# Integration Guide

## Overview

This guide covers integrating the Fruity X-Y-Z Controller into various FL Studio workflows and plugin chains.

## Basic Integration

### Single Plugin Control

**Setup**:
`\`\`
[Instrument/Effect] ← [X-Y-Z Controller]
`\`\`

**Steps**:
1. Add X-Y-Z Controller to mixer track
2. Right-click parameter in target plugin
3. Select "Link to controller"
4. Choose X-Y-Z Controller output
5. Set range and curve

**Example**:
`\`\`
Sytrus ← X-Y-Z Controller
├── X → Oscillator Mix
├── Y → Filter Cutoff
└── Z → Unison
`\`\`

### Multiple Plugin Control

**Setup**:
`\`\`
[Plugin 1] ← [X-Y-Z Controller]
[Plugin 2] ← [X-Y-Z Controller] (same instance)
`\`\`

**Method**: Each output can link to ONE parameter
- X → Plugin 1 Parameter A
- Y → Plugin 1 Parameter B
- Z → Plugin 2 Parameter A
- Speed → Plugin 2 Parameter B
- Acceleration → Plugin 3 Parameter A

## Patcher Integration

### Complex Modulation Matrix

**Setup**:
`\`\`
[Patcher Container]
├── [X-Y-Z Controller]
├── [Synth Plugin]
├── [Effect 1]
├── [Effect 2]
└── [Modulation Router]
`\`\`

**Advantages**:
- Route one controller output to multiple parameters
- Create macro controls
- Complex modulation relationships
- Save as reusable presets

**Example Routing**:
`\`\`
X-Y-Z X → Osc Mix + Filter Pan
X-Y-Z Y → Filter Cutoff + Effect Depth
X-Y-Z Speed → All modulation depths
`\`\`

### Creating Macros

**Step-by-Step**:
1. Insert Patcher on mixer track
2. Add X-Y-Z Controller inside Patcher
3. Add target plugins inside Patcher
4. Open Patcher's modulation matrix
5. Route controller outputs to plugin parameters
6. Save Patcher preset as macro

## Advanced Routing

### Layered Instruments

**Setup**:
`\`\`
[Instrument Layer]
├── [Synth A] ← X-Y-Z (instance 1)
├── [Synth B] ← X-Y-Z (instance 2)
└── [X-Y-Z Master] ← Controls layer mix
`\`\`

**Use Case**: Control multiple instruments with coordinated modulation

### Effect Chains

**Setup**:
`\`\`
[Effect Chain]
├── [Insert 1] ← X-Y-Z X
├── [Insert 2] ← X-Y-Z Y
└── [Insert 3] ← X-Y-Z Z
`\`\`

**Use Case**: Morph between different effects in chain

### Parallel Processing

**Setup**:
`\`\`
[Source]
├── [Send A] ← X-Y-Z X (dry/wet)
├── [Send B] ← X-Y-Z Y (amount)
└── [Send C] ← X-Y-Z Z (depth)
`\`\`

**Use Case**: Dynamic send levels for spatial effects

## Hardware Integration

### MIDI Controller Mapping

**Setup**:
`\`\`
[MIDI Controller]
├── Joystick X → X-Y-Z X
├── Joystick Y → X-Y-Z Y
├── Ribbon/Slider → X-Y-Z Z
└── Aftertouch → X-Y-Z Speed
`\`\`

**Steps**:
1. Connect MIDI controller
2. Right-click X-Y-Z parameter
3. Select "Link to controller"
4. Move hardware control to assign
5. Save as preset

### External Hardware Synths

**Setup**:
`\`\`
FL Studio → MIDI Out → Hardware Synth
X-Y-Z outputs → CC messages
`\`\`

**Configuration**:
1. Insert MIDI Out plugin
2. Map X-Y-Z to MIDI Out parameters
3. MIDI Out sends CC to hardware
4. Hardware responds to 3D control

## Touch Device Integration

### Tablet Setup

**Optimized for**:
- iPad with FL Studio Mobile
- Windows tablets
- Touchscreen laptops

**Configuration**:
`\`\`
Touchscreen
├── Single finger → X + Y
├── Pinch → Z
└── Multi-finger → Multiple instances
`\`\`

### Multi-Touch Performance

**Setup**:
`\`\`
[Performance Rig]
├── Instance 1: Lead (left hand)
├── Instance 2: Bass (right hand)
├── Instance 3: Drums (auto/sequenced)
└── Instance 4: Effects (master)
`\`\`

**Hardware**:
- Position instances on screen for easy access
- Use large controller sizes
- Enable "Show touches" for visual feedback

## Project Templates

### Performance Template

**Contents**:
- Multiple X-Y-Z Controller instances pre-mapped
- Instruments loaded and routed
- Effects chains configured
- Mixer tracks named and colored

**Usage**:
1. Load template
2. All controllers ready to perform
3. Record enable on relevant tracks
4. Begin performance

### Production Template

**Contents**:
- X-Y-Z instances on common instrument types
- Pre-linked to typical parameters
- Named presets for quick recall
- Routing for easy expansion

**Usage**:
1. Load template
2. Replace placeholder instruments
3. Controllers maintain links
4. Ready for production

## Workflow Integration

### Recording Workflow

**Setup**:
`\`\`
1. Load project
2. Enable "Record automation"
3. Perform with X-Y-Z
4. Stop recording
5. Edit automation in Playlist
6. Refine curves
`\`\`

### Live Performance Workflow

**Setup**:
`\`\`
1. Create performance template
2. Map all controllers
3. Test latency
4. Create setlist
5. Performance mode
6. Play!
`\`\`

### Mixing Workflow

**Setup**:
`\`\`
1. Static mix first
2. Add X-Y-Z for automation
3. Record dynamic moves
4. Edit for precision
5. Layer multiple passes
`\`\`

## Troubleshooting Integration

### Parameter Not Responding
- Check if plugin parameter is automatable
- Verify link is active in browser
- Ensure controller is armed

### Latency Issues
- Reduce audio buffer size
- Disable visual effects
- Check CPU usage

### Conflicting Controls
- Multiple controllers linking to same parameter
- Check all modulation sources
- Use Patcher to manage complex routing

## Best Practices

### Naming Conventions
`\`\`
Instance: "Lead - Timbre"
Instance: "Lead - Space"
Instance: "Bass - Filter"
Instance: "Drums - Punch"
`\`\`

### Color Coding
- Red: Lead instruments
- Blue: Bass
- Yellow: Drums
- Green: Effects
- Purple: Master/Bus

### Organization
`\`\`
Mixer Tracks
├── 1-4: X-Y-Z Controllers
├── 5-8: Instruments
└── 9-12: Effects
`\`\`

[SRC: IL-MAN]

```

---

## FILE: 04-Reference\parameter-reference.md

```markdown
# Complete Parameter Reference

## Output Parameters

### X Position
- **Range**: 0% to 100%
- **Default**: 50% (center)
- **Control**: Horizontal mouse/touch position
- **Type**: Position
- **Common Mappings**: Pan, oscillator mix, stereo width, pitch bend

#### Typical Uses
- Stereo panning: 0% = hard left, 100% = hard right
- Morphing: 0% = state A, 100% = state B
- Width: 0% = mono, 100% = full stereo

### Y Position
- **Range**: 0% to 100%
- **Default**: 50% (center)
- **Control**: Vertical mouse/touch position
- **Type**: Position
- **Common Mappings**: Filter cutoff, volume, brightness, intensity

#### Typical Uses
- Filter sweeps: 0% = closed/dark, 100% = open/bright
- Volume: 0% = silent, 100% = full level
- Brightness: Lower = darker, Higher = brighter

### Z Position
- **Range**: 0% to 100%
- **Default**: 0% (back/minimum)
- **Control**: Mouse wheel scroll OR touch pinch gesture
- **Type**: Position
- **Common Mappings**: Reverb send, effect depth, distance, wet/dry

#### Typical Uses
- Reverb depth: 0% = dry, 100% = wet
- Effect intensity: 0% = subtle, 100% = extreme
- Distance perception: 0% = close, 100% = far

#### Control Methods by Device
| Device | Z Control |
|--------|-----------|
| Mouse | Scroll wheel while hovering |
| Trackpad | Two-finger vertical scroll |
| Touchscreen | Pinch (two fingers spread/apart) |
| Tablet | Pinch gesture |

### Speed
- **Range**: 0% to 100%
- **Default**: 0% (stopped)
- **Control**: Calculated from movement velocity
- **Type**: Movement
- **Common Mappings**: LFO depth, distortion amount, accent boost

#### Behavior
- 0% = cursor not moving
- 50% = moderate movement speed
- 100% = maximum detected speed
- Continuously updated during movement

#### Typical Uses
- Dynamic expression: Moving creates more effect
- Velocity detection: Fast movements trigger more
- Modulation: Speed controls depth of other modulations

### Acceleration
- **Range**: -100% to +100%
- **Default**: 0% (constant speed or stopped)
- **Control**: Calculated from change in speed
- **Type**: Movement
- **Common Mappings**: Note trigger, accent detection, transient boost

#### Behavior
- Positive (+): Speeding up (movement beginning)
- Zero (0): Constant speed or stopped
- Negative (-): Slowing down (movement ending)
- Spikes at gesture boundaries

#### Typical Uses
- Accent detection: Sudden start = accent spike
- Envelope following: Gesture attack = sound attack
- Trigger events: Threshold crossing starts actions

## Mode Parameters

### Absolute Mode
- **Behavior**: Position = Value directly
- **Bottom-left (0%,0%)**: X=0%, Y=0%
- **Top-right (100%,100%)**: X=100%, Y=100%
- **Center (50%,50%)**: X=50%, Y=50%
- **Best for**: Visual feedback, spatial control, touchscreens

#### Characteristics
- Predictable output based on position
- Immediate visual correlation
- Values snap to cursor position
- Suitable for precise positioning

### Relative Mode
- **Behavior**: Movement changes values incrementally
- **Moving right**: X increases
- **Moving up**: Y increases
- **Releasing**: Values hold at current position
- **Best for**: Continuous sweeps, DJ-style control

#### Characteristics
- No position snapping
- Values accumulate over time
- Can exceed normal ranges with extended movement
- Suitable for smooth, continuous control

## Configuration Parameters

### Input Sensitivity
- **Mouse**: OS-level sensitivity affects response
- **Touch**: Device settings affect gesture detection
- **MIDI**: Controller resolution (7-bit or 14-bit)

### Mapping Options
When linking to parameters:
- **Range**: Set minimum and maximum output values
- **Curve**: Linear, logarithmic, or custom mapping
- **Invert**: Reverse output (0% = max, 100% = min)
- **Smoothing**: Interpolation for stepped outputs

## Advanced Parameters

### Gesture Detection
- **Resolution**: Position updates at audio buffer rate
- **Speed calculation**: Delta position / time
- **Acceleration calculation**: Delta speed / time
- **Gesture memory**: Last 100ms for trend analysis

### Multi-Touch Parameters
- **Touch count**: Number of active touch points
- **Primary touch**: First finger controls X/Y
- **Secondary gesture**: Second touch controls Z
- **Maximum touches**: Device-dependent (typically 5-10)

### Performance Metrics
- **Update rate**: Audio callback rate (typically 44.1-48kHz processing)
- **Latency**: Audio buffer dependent (5-20ms typical)
- **Resolution**: Floating-point precision
- **Interpolation**: Smooth value transitions

## Default Mappings Quick Reference

### Spatial Audio (Default)
`\`\`
X → Pan (-100 to +100)
Y → Filter cutoff (brightness = distance)
Z → Reverb send (depth)
`\`\`

### Synth Performance (Default)
`\`\`
X → Pitch bend
Y → Filter cutoff
Z → Resonance or drive
`\`\`

### Effect Control (Default)
`\`\`
X → Effect A amount
Y → Effect B amount
Z → Effect C amount
`\`\`

## Parameter Combinations

### Five-Output Performance
Using all outputs simultaneously:
`\`\`
X → Position 1
Y → Position 2
Z → Position 3
Speed → Dynamic parameter
Acceleration → Accent parameter
`\`\`

### Gesture-Based Control
Using movement outputs:
`\`\`
Position outputs → Static parameters
Speed → Velocity-sensitive parameter
Acceleration → Trigger or accent parameter
`\`\`

### 3D Morphing
Using position for state blending:
`\`\`
X → Parameter A (State 1 ↔ State 2)
Y → Parameter B (State 1 ↔ State 2)
Z → Parameter C (State 1 ↔ State 2)
Result: 8 possible states (cube corners)
`\`\`

[SRC: IL-MAN]

```

---

## FILE: 04-Reference\quick-command-reference.md

```markdown
# Quick Command Reference

## Essential Shortcuts and Commands

### Plugin Controls

| Action | Method |
|--------|--------|
| **Enable/Disable** | Click On/Off button in plugin header |
| **Switch Mode** | Click Absolute/Relative toggle |
| **Reset Position** | Click center of pad (Absolute mode) |
| **Record Enable** | Right-click → "Enable recording" |

### Linking Parameters

| Action | Steps |
|--------|-------|
| **Link to X** | Right-click parameter → Link to controller → Select X-Y-Z X |
| **Link to Y** | Right-click parameter → Link to controller → Select X-Y-Z Y |
| **Link to Z** | Right-click parameter → Link to controller → Select X-Y-Z Z |
| **Link Speed** | Right-click parameter → Link to controller → Select X-Y-Z Speed |
| **Link Accel** | Right-click parameter → Link to controller → Select X-Y-Z Accel |

### Recording

| Action | Shortcut/Command |
|--------|----------------|
| **Start Recording** | Ctrl+R or Transport Record button |
| **Record Automation** | Enable in Transport panel |
| **Stop Recording** | Spacebar or Stop button |
| **View Automation** | F7 (Playlist) |

### Z-Axis Control

| Device | Method |
|--------|--------|
| **Mouse** | Scroll wheel while hovering over pad |
| **Trackpad** | Two-finger scroll |
| **Touchscreen** | Pinch gesture (two fingers) |
| **Tablet** | Pinch/spread gesture |

## Common Parameter Mappings

### Spatial Audio (X=Pan, Y=Filter, Z=Reverb)
`\`\`
X: Pan (-100 to +100)
Y: Filter Cutoff (200Hz - 20kHz)
Z: Reverb Send (0-100%)
Mode: Absolute
`\`\`

### Total Synth (Pitch + Timbre + Space)
`\`\`
X: Pitch Bend (±12 semitones)
Y: Filter Cutoff
Z: Resonance
Speed: LFO Depth
Mode: Relative
`\`\`

### Drum Punch (Transient + Dynamics + Drive)
`\`\`
X: Pan
Y: Transient Shaper
Z: Saturation
Speed: Accent Boost
Accel: Transient Spike
Mode: Relative
`\`\`

### Vibe: Warmth
`\`\`
X: Detune (0-30%)
Y: Low Cutoff (200-5000Hz)
Z: Saturation (0-40%)
Position: Lower-left quadrant
`\`\`

### Vibe: Clarity
`\`\`
X: Presence EQ (0-6dB)
Y: High-shelf (0-4dB)
Z: Exciter (0-40%)
Position: Upper-right quadrant
`\`\`

### Vibe: Depth
`\`\`
X: Width (50-150%)
Y: Reverb (0-70%)
Z: Delay (20-60%)
Position: Upper area
`\`\`

### Vibe: Punch
`\`\`
X: Transient (0-70%)
Y: Compression (2:1-8:1)
Z: Drive (0-50%)
Speed: Dynamic boost
Mode: Relative
`\`\`

### Vibe: Air
`\`\`
X: High-pass (20-200Hz)
Y: Air EQ (0-6dB @ 15kHz)
Z: Sparkle (0-50%)
Position: Upper area, low X
`\`\`

## Gesture Quick Reference

| Gesture | Motion | Best For |
|---------|--------|----------|
| **Smooth Sweep** | Steady linear movement | Filter sweeps, fades |
| **Quick Flick** | Fast swipe + stop | Accents, one-shots |
| **Circular Orbit** | Round motion | LFO effects, auto-pan |
| **Pinch** | Two-finger spread | Z-axis depth control |
| **3D Throw** | Diagonal + pinch | Complete spatial movement |

## Mode Selection Guide

| Scenario | Mode | Why |
|----------|------|-----|
| Spatial mixing | Absolute | Direct visual correlation |
| Filter sweeps | Relative | Continuous, no snapping |
| Touchscreen | Absolute | Natural direct manipulation |
| DJ-style | Relative | Traditional incremental |
| Touch/tap | Absolute | Predictable positions |

## Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Z not responding | Use scroll wheel or pinch gesture |
| Jerky movement | Lower audio buffer size |
| Not recording | Enable "Record automation" in Transport |
| No visual feedback | Enable "Show touches" (touch devices) |
| Values snapping | Switch to Relative mode |
| Laggy response | Reduce buffer, check CPU |

## Performance Checklist

### Before Performance
- [ ] All parameters linked and tested
- [ ] Mode selected (Absolute/Relative)
- [ ] Audio buffer ≤256 samples
- [ ] "Record automation" enabled
- [ ] Multiple takes ready

### During Performance
- [ ] Watch output levels
- [ ] Use visual feedback if available
- [ ] Keep gestures smooth
- [ ] Anticipate musical phrases

### After Performance
- [ ] Stop recording
- [ ] Review takes in Playlist
- [ ] Edit automation curves
- [ ] Comp best sections
- [ ] Save project

## Preset Quick Load

### File Locations
`\`\`
User Presets: Documents\Image-Line\FL Studio\Presets\Plugin presets\Generators\Fruity X-Y-Z Controller
Factory Presets: FL Studio installation folder\Data\Patches\Plugin presets
`\`\`

### Loading Presets
1. Click plugin menu (down arrow)
2. Select "Presets"
3. Choose preset from list
4. Or: Right-click parameter → "Load preset"

### Saving Presets
1. Configure controller
2. Click plugin menu
3. "Save preset as..."
4. Name and save to user folder

[SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-specifications.md

```markdown
# Fruity X-Y-Z Controller - Technical Reference

## Plugin Specifications

### Type
Internal Controller / 3D Vector Pad

### Function
Converts 2D mouse/touch position + depth control into five automation outputs:
- X Position (0-100%)
- Y Position (0-100%)
- Z Position (0-100%)
- Speed (0-100%)
- Acceleration (-100% to +100%)

### Output Range
All outputs produce continuous values from 0% to 100% (or -100% to +100% for acceleration) suitable for automation linking.

## Control Methods

### Mouse/Trackpad
- **X/Y**: Cursor position within pad
- **Z**: Scroll wheel while hovering

### Touchscreen/Tablet
- **X/Y**: Single finger position
- **Z**: Two-finger pinch gesture
- **Multi-touch**: Multiple fingers on multiple instances

### MIDI Controller
- Any CC or joystick can be mapped to X, Y, Z
- Speed and Acceleration derived from movement

## Modes

### Absolute Mode
- Position directly determines output value
- 0%,0% = bottom-left; 100%,100% = top-right
- Predictable, visual feedback
- Best for: Spatial mixing, touchscreens

### Relative Mode
- Movement changes values incrementally
- Values persist when released
- No position snapping
- Best for: Continuous sweeps, DJ-style control

## Multi-Touch Support

### Standard Gestures
- **Single finger**: X and Y control
- **Two-finger drag**: Z control via pinch
- **Three-finger**: Context menu (OS dependent)

### Multi-Instance Control
- Multiple X-Y-Z Controller instances can be controlled simultaneously
- Each instance maintains independent state
- Ideal for tablet performances with multiple parameters

## Linking and Automation

### Linking to Parameters
1. Right-click target parameter in any plugin
2. Select "Link to controller"
3. Choose X-Y-Z Controller output from list
4. Set range and curve options

### Recording Automation
- Enable "Record automation" in Transport panel
- Perform movements during playback
- All five outputs recorded as separate clips
- Edit in Playlist after recording

### MIDI Learn
- Right-click X-Y-Z Controller parameter
- Select "Link to controller"
- Move external controller to assign
- Save as preset for hardware integration

## Performance Considerations

### Latency
- Controller operates at audio buffer rate
- Lower buffer sizes reduce touch-to-sound delay
- Recommended: 256 samples or lower for live use

### CPU Usage
- Minimal CPU impact
- Multiple instances have negligible overhead
- Speed/Acceleration calculations add minimal load

### Memory
- No sample playback
- No significant memory usage
- Suitable for unlimited instances

## Advanced Features

### Speed Output
- Measures velocity of cursor movement
- Updated in real-time
- Use for: Dynamic expression, velocity-sensitive effects

### Acceleration Output
- Measures change in velocity
- Positive = speeding up, Negative = slowing down
- Use for: Accent detection, trigger events

### Gesture Recognition
- Controller tracks gesture patterns
- Speed and Acceleration capture "how" you move
- Enables humanized, expressive control

## Integration with Other Plugins

### Patcher
- Route X-Y-Z Controller through Patcher
- Create complex modulation matrices
- Multiple outputs to multiple targets
- Save as reusable macros

### Gross Beat
- Use X-Y-Z to control time/pitch manipulation
- Speed for gate patterns
- Position for momentary effects

### Harmor/Sytrus
- Control additive/subtractive parameters
- Morph between timbres
- Real-time spectral manipulation

## File Locations and Presets

### User Presets
- Saved in FL Studio user data folder
- Can be organized in subfolders
- Load/save via plugin menu

### Default Presets
- Plugin ships with basic configurations
- Found in FL Studio installation directory
- Can be modified and saved as user presets

## Troubleshooting

### Controller Not Responding
- Check "On/Off" button in plugin header
- Verify target parameter is properly linked
- Ensure plugin is not frozen or disabled

### Z-Axis Not Working
- Use scroll wheel (mouse) or pinch gesture (touch)
- Verify Z output is linked to target
- Check mode selection (Absolute/Relative)

### Jerky Movement
- Reduce audio buffer size
- Disable unnecessary visualizations
- Check CPU usage

[SRC: IL-MAN]

```

---

