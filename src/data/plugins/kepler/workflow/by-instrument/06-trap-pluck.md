# Trap Pluck Workflow

## Sound Profile
Punchy, rhythmic lead with percussive character for trap melodies and hi-hat patterns.

## Recommended Preset
`genre/07-glitch-pluck.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Square, +1 octave, 100% | Click |
| Oscillator 2 | Saw, 0 octave, 70% | Body |
| Filter | Lowpass, 3000Hz, Resonance 45 | Snap |
| Filter Drive | 10% | Edge |
| Envelope | A:1, D:80, S:0, R:50 | Percussive |
| LFO | Sample-hold, 4Hz, 50% to Pitch | Glitch |

## Genre Variations
- **Melodic Trap:** Slower LFO (2Hz), less modulation (25%)
- **Aggressive Trap:** Increase filter resonance (52%), faster decay (60ms)
- **Ethereal Trap:** Reduce LFO modulation (20%), longer release (80ms)

## Chain Processing
```
Kepler → Teq4
  - High-pass at 500Hz
  → Fruily Reverb 2
  - Type: Plate
  - Decay: 1.2s
  - Mix: 18%
  → Bitcrusher
  - Bit depth: 8-bit
  - Wet: 50%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Less glitchy | Reduce LFO modulation to 25% |
| More plucky | Reduce envelope decay to 60ms |
| More body | Increase osc2 mix to 80% |
| More click | Increase osc1 to 100% |
