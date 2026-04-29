# Gross Beat Parameter Cheat Sheet

## Global Controls

| Control | Range | Function | Quick Tip |
|---------|-------|----------|-----------|
| **Mix** | 0-100% | Dry/Wet blend | 50% for subtle, 100% for full effect |
| **Pos** | 0-100% | Buffer read position | Higher = more delay effect |
| **Attack** | 0-1000ms | Envelope attack time | 10-30ms prevents clicks |
| **Release** | 0-1000ms | Envelope release time | 20-50ms for smooth transitions |
| **Time/Volume Toggle** | Switch | Select envelope type | Click envelope name to toggle |

## Slot Controls

| Control | Function | Notes |
|---------|----------|-------|
| **Slot Display** | Shows current slot number | Time slots: 1-36, Volume slots: 1-36 |
| **Previous/Next** | Navigate slots | Click arrows or use MIDI |
| **Copy/Paste** | Duplicate slot settings | Right-click menu options |
| **Initialize** | Reset slot to default | "Init" button clears envelope |

## Envelope Editor

| Tool | Function | Shortcut |
|------|----------|----------|
| **Line** | Draw straight lines | Click start, drag to end |
| **Freehand** | Draw custom curves | Click and drag freely |
| **Step** | Create quantized steps | Hold Shift while drawing |
| **Snap** | Quantize to grid | Toggle on/off |
| **Smooth** | Apply curve smoothing | Right-click option |

## MIDI Triggering

| Octave | Slot Type | Range |
|--------|-----------|-------|
| **C1-B1** | Time slots 1-12 | Speed effects |
| **C2-B2** | Time slots 13-24 | Stutter patterns |
| **C3-B3** | Time slots 25-36 | Tape effects |
| **C4-B4** | Volume slots 1-12 | Basic gates |
| **C5-B5** | Volume slots 13-24 | Complex patterns |
| **C6-B6** | Volume slots 25-36 | Sidechain curves |

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl + Click** | Reset control to default |
| **Alt + Click** | Fine adjustment mode |
| **Right-click** | Context menu |
| **Spacebar** | Toggle envelope type |
| **1-9** | Quick slot select (1-9) |
| **0** | Slot 10 |

## Visual Grid Guide

### Time Envelope
```
Diagonal (45°):  Normal playback (100% speed)
Shallow down:     Slow down (50% speed = half-time)
Steep down:       Dramatic slow down (tape-stop)
Horizontal:       Freeze/repeat (stutter)
Shallow up:       Speed up (150% speed)
Steep up:         Fast forward (200% speed)
```

### Volume Envelope
```
Top (100%):       Full volume
Middle (50%):     Half volume (-6dB)
Bottom (0%):      Silence
Square waves:     Gating on/off
Curves:           Fades and swells
```

## Quick Settings by Effect

### Half-Time
- **Time slot:** Shallow downward slope (22.5°)
- **Mix:** 100%
- **Attack:** 15-20ms
- **Release:** 25-35ms

### Stutter (1/16th)
- **Time slot:** Horizontal blocks, 1/16th duration
- **Mix:** 80%
- **Attack:** 5-10ms
- **Release:** 10-20ms

### Tape-Stop
- **Time slot:** Steep downward curve
- **Volume slot:** Slight fade-out
- **Mix:** 100%
- **Attack:** 50-100ms
- **Release:** 100-200ms

### Rhythmic Gate
- **Volume slot:** 1/8 or 1/16th square pattern
- **Mix:** 60-80%
- **Attack:** 10ms
- **Release:** 20ms

### Sidechain Duck
- **Volume slot:** Exponential recovery curve
- **Mix:** 100%
- **Attack:** 5ms
- **Release:** 100-200ms

## Common Values Reference

### Attack/Release Times
| Effect Type | Attack | Release | Why |
|-------------|--------|---------|-----|
| Tight gate | 0-5ms | 10-20ms | Snappy, clicky |
| Smooth gate | 10-20ms | 30-50ms | Natural, no clicks |
| Slow effect | 50-100ms | 100-300ms | Gradual, ambient |

### Mix Percentages
| Blend | Percent | Use Case |
|-------|---------|----------|
| Subtle | 25-40% | Background texture |
| Moderate | 50-60% | Balanced effect |
| Strong | 70-85% | Prominent effect |
| Full | 90-100% | Maximum impact |

### Pos (Position) Settings
| Position | Effect | Application |
|----------|--------|-------------|
| 0% | No delay | Real-time playback |
| 25% | 1/2 bar delay | Slapback effect |
| 50% | 1 bar delay | Echo-like |
| 75% | 1.5 bar delay | Heavy delay |
| 100% | 2 bar delay | Maximum offset |

## Troubleshooting Quick Fixes

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Clicks/pops | Attack too fast | Increase to 10-30ms |
| Muddy sound | Release too long | Decrease to 20-50ms |
| No effect | Mix at 0% | Increase Mix to 50%+ |
| Too subtle | Wrong slot | Check slot assignment |
| Out of sync | No grid snap | Enable snap to project |
| Harsh transitions | No smoothing | Enable envelope smoothing |

## Preset Slot Organization

### Recommended Layout
```
Time Slots:
  1-3:  Normal, Half-time, Double-time (speeds)
  4-12: Stutter variations (1/4, 1/8, 1/16 patterns)
  13-18: Glitch patterns (random, reverse-sim)
  19-24: Tape effects (stop, start, slow)
  25-30: Special (scratch, spinback)
  31-36: Utility (init, blank)

Volume Slots:
  1-6:  Basic gates (1/4, 1/8, 1/16, 1/32, triplet, dotted)
  7-12: Complex patterns (mixed rhythms)
  13-18: Sidechain curves (4/4, 2/4, 1/4 duck)
  19-24: Fade patterns (crescendo, decrescendo)
  25-30: Stutter gates (burst patterns)
  31-36: Utility (full, silent, half)
```

## Source Citations
All parameters and ranges verified from:
- [SRC: IL-MAN] Image-Line FL Studio Online Manual - Gross Beat
