# Exo Textural Layers Workflow

## Sound Profile
Evolving atmospheric layers for background depth.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -2 octave, 75% | Subtle |
| Oscillator 2 | Triangle, -1 octave, 70% | Body |
| Oscillator 3 | Saw, -1 octave, 55% | Air |
| Oscillator 4 | Square, 0 octave, 40% | Texture |
| Sub Oscillator | Sine, -2 octave, 50% | Depth |
| Filter A | Lowpass, 2000Hz, Res 18, Drive 5 | Soft |
| Filter B | Bandpass, 1500Hz, Res 30, Drive 3 | Focus |
| Envelope | A:400, D:800, S:85, R:1500 | Long |
| Modulation | LFO1→FilterB: 45%, LFO2→Pan: 35% | Evolving |

## Chain Processing
```
Kepler Exo → Vintage Chorus
  - Mix: 45%
  - Depth: 60%
  → Fruily Reverb 2
  - Type: Cathedral
  - Decay: 5s
  - Mix: 35%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More movement | Increase LFO1 to 55% |
| More width | Increase Stereo Width to 140% |
| Smoother | Reduce FilterA resonance to 15% |
| Darker | Reduce FilterA cutoff to 1800Hz |
