# Fruity X-Y-Z Controller

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
```
X → Pan (Left -100 to Right +100)
Y → Low-Pass Filter (200Hz - 20kHz)  
Z → Reverb Send (0-100%)
Mode: Absolute
```
*Result: Position sounds in 3D space*

### 2. Total Synth Performance
```
X → Pitch Bend (±12 semitones)
Y → Filter Cutoff  
Z → Resonance (0-80%)
Speed → LFO Depth
Mode: Relative
```
*Result: Complete expressive synth control*

### 3. Multi-Touch Tablet
```
Single finger: Controls X + Y
Pinch gesture: Controls Z
Flick: Creates Speed spike for accents
```
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
