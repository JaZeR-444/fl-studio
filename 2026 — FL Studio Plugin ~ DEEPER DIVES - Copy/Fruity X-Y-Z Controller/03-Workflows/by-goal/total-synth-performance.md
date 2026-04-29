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
```
Mode: Relative (for continuous control without snapping)

Mappings:
├── X → Pitch Bend (±12 semitones)
├── Y → Filter Cutoff (100Hz - 20kHz)
├── Z → Resonance (0-80%)
├── Speed → LFO Depth (0-100%)
└── Acceleration → Distortion (0-50%)
```

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
```
X: Pitch ±7 semitones (subtle)
Y: Cutoff 50-500Hz (keep low)
Z: Resonance 0-30% (gentle)
Speed: LFO 0-20% (slow)
Mode: Relative
```

### Lead Synth Performance
```
X: Pitch ±12 semitones (full range)
Y: Cutoff full range (bright)
Z: Resonance 0-60% (moderate)
Speed: LFO 0-80% (expressive)
Accel: Distortion accents
Mode: Relative
```

### FX/Stabs Performance
```
X: Fixed or minimal
Y: Quick sweeps
Z: Moderate resonance
Speed: Maximum for heavy modulation
Accel: Trigger effects
Mode: Absolute for predictable stabs
```

## Pro Tips

- Use Relative mode for continuous sweeps without position snapping
- Coordinate pitch (X) with filter (Y) for natural timbral shifts
- Speed adds expression—use it for dynamic LFO control
- Acceleration captures playing intention for automatic accents
- Practice gestures to build muscle memory for consistent results

[SRC: IL-MAN]
