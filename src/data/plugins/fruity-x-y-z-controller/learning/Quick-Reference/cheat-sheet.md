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
```
X → Pan (Left 0% / Right 100%)
Y → Low-pass Filter Cutoff (Dark 0% / Bright 100%)
Z → Reverb Send (Dry 0% / Wet 100%)
```

### Total Synth Performance
```
X → Pitch Bend (±12 semitones)
Y → Filter Cutoff
Z → Filter Resonance
Speed → LFO Depth
Acceleration → Distortion Drive
```

### Effect Chain Morphing
```
X → Effect 1 Dry/Wet
Y → Effect 2 Dry/Wet  
Z → Effect 3 Dry/Wet
Result: Morph between three effects
```

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
