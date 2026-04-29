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
```
Pad Position → Output Values
Bottom-left corner  → X=0%, Y=0%, Z=0%
Center position     → X=50%, Y=50%, Z=50%
Top-right corner    → X=100%, Y=100%, Z=100%
```

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
```
Movement → Value Change
Move right 10px    → X increases by ~5%
Move up 20px       → Y increases by ~10%
Release mouse      → Values hold at current position
Return to pad      → Continue from where you left off
```

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
