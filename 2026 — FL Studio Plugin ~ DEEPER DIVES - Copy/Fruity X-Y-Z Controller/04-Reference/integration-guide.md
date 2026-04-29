# Integration Guide

## Overview

This guide covers integrating the Fruity X-Y-Z Controller into various FL Studio workflows and plugin chains.

## Basic Integration

### Single Plugin Control

**Setup**:
```
[Instrument/Effect] ← [X-Y-Z Controller]
```

**Steps**:
1. Add X-Y-Z Controller to mixer track
2. Right-click parameter in target plugin
3. Select "Link to controller"
4. Choose X-Y-Z Controller output
5. Set range and curve

**Example**:
```
Sytrus ← X-Y-Z Controller
├── X → Oscillator Mix
├── Y → Filter Cutoff
└── Z → Unison
```

### Multiple Plugin Control

**Setup**:
```
[Plugin 1] ← [X-Y-Z Controller]
[Plugin 2] ← [X-Y-Z Controller] (same instance)
```

**Method**: Each output can link to ONE parameter
- X → Plugin 1 Parameter A
- Y → Plugin 1 Parameter B
- Z → Plugin 2 Parameter A
- Speed → Plugin 2 Parameter B
- Acceleration → Plugin 3 Parameter A

## Patcher Integration

### Complex Modulation Matrix

**Setup**:
```
[Patcher Container]
├── [X-Y-Z Controller]
├── [Synth Plugin]
├── [Effect 1]
├── [Effect 2]
└── [Modulation Router]
```

**Advantages**:
- Route one controller output to multiple parameters
- Create macro controls
- Complex modulation relationships
- Save as reusable presets

**Example Routing**:
```
X-Y-Z X → Osc Mix + Filter Pan
X-Y-Z Y → Filter Cutoff + Effect Depth
X-Y-Z Speed → All modulation depths
```

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
```
[Instrument Layer]
├── [Synth A] ← X-Y-Z (instance 1)
├── [Synth B] ← X-Y-Z (instance 2)
└── [X-Y-Z Master] ← Controls layer mix
```

**Use Case**: Control multiple instruments with coordinated modulation

### Effect Chains

**Setup**:
```
[Effect Chain]
├── [Insert 1] ← X-Y-Z X
├── [Insert 2] ← X-Y-Z Y
└── [Insert 3] ← X-Y-Z Z
```

**Use Case**: Morph between different effects in chain

### Parallel Processing

**Setup**:
```
[Source]
├── [Send A] ← X-Y-Z X (dry/wet)
├── [Send B] ← X-Y-Z Y (amount)
└── [Send C] ← X-Y-Z Z (depth)
```

**Use Case**: Dynamic send levels for spatial effects

## Hardware Integration

### MIDI Controller Mapping

**Setup**:
```
[MIDI Controller]
├── Joystick X → X-Y-Z X
├── Joystick Y → X-Y-Z Y
├── Ribbon/Slider → X-Y-Z Z
└── Aftertouch → X-Y-Z Speed
```

**Steps**:
1. Connect MIDI controller
2. Right-click X-Y-Z parameter
3. Select "Link to controller"
4. Move hardware control to assign
5. Save as preset

### External Hardware Synths

**Setup**:
```
FL Studio → MIDI Out → Hardware Synth
X-Y-Z outputs → CC messages
```

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
```
Touchscreen
├── Single finger → X + Y
├── Pinch → Z
└── Multi-finger → Multiple instances
```

### Multi-Touch Performance

**Setup**:
```
[Performance Rig]
├── Instance 1: Lead (left hand)
├── Instance 2: Bass (right hand)
├── Instance 3: Drums (auto/sequenced)
└── Instance 4: Effects (master)
```

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
```
1. Load project
2. Enable "Record automation"
3. Perform with X-Y-Z
4. Stop recording
5. Edit automation in Playlist
6. Refine curves
```

### Live Performance Workflow

**Setup**:
```
1. Create performance template
2. Map all controllers
3. Test latency
4. Create setlist
5. Performance mode
6. Play!
```

### Mixing Workflow

**Setup**:
```
1. Static mix first
2. Add X-Y-Z for automation
3. Record dynamic moves
4. Edit for precision
5. Layer multiple passes
```

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
```
Instance: "Lead - Timbre"
Instance: "Lead - Space"
Instance: "Bass - Filter"
Instance: "Drums - Punch"
```

### Color Coding
- Red: Lead instruments
- Blue: Bass
- Yellow: Drums
- Green: Effects
- Purple: Master/Bus

### Organization
```
Mixer Tracks
├── 1-4: X-Y-Z Controllers
├── 5-8: Instruments
└── 9-12: Effects
```

[SRC: IL-MAN]
