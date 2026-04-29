# Metallic Texture Workflow

## Sound Profile
Industrial, edgy texture with dissonant harmonics for aggressive or experimental productions.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 85% | Edge |
| Oscillator 2 | Square, +1 octave, 70% | Dissonance |
| Filter | Bandpass, 2000Hz, Resonance 50 | Focus |
| Filter Drive | 15% | Grind |
| Envelope | A:10, D:300, S:60, R:400 | Sustain |
| LFO | Square, 2Hz, 40% to Pitch | Mechanical |

## Chain Processing
```
Kepler → Fruily Distancer
  - Drive: 25%
  → Fruily Reverb 2
  - Type: Gated
  - Decay: 1.5s
  - Mix: 35%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More industrial | Increase LFO rate to 4Hz |
| Less harsh | Reduce bandpass resonance to 35% |
| More abrasive | Increase filter drive to 20% |
| More rhythmic | Sync LFO to tempo (1/4 notes) |
