# Exo Sci-Fi Textures Workflow

## Sound Profile
Otherworldly, evolving textures with extreme modulation for cinematic moments.

## Recommended Preset
`genre/07-exo-sci-fi-textures.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 80% | Core |
| Oscillator 2 | Saw, +1 octave, 70% | Dissonance |
| Oscillator 3 | Square, -1 octave, 60% | Texture |
| Oscillator 4 | Triangle, 0 octave, 50% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 50% | Depth |
| Filter A | Lowpass, 5000Hz, Res 55, Drive 15 | Power |
| Filter B | Bandpass, 2500Hz, Res 45, Drive 10 | Focus |
| Envelope | A:50, D:800, S:70, R:1200 | Evolving |
| Modulation | Env→FilterA: 60%, LFO1→FilterB: 80% | Complex |

## Chain Processing
```
Kepler Exo → Fruily Parametric EQ 2
  - Multi-band processing
  → Fruily Reverb 2
  - Type: Gated
  - Decay: 1.5s
  - Mix: 40%
  → Stereo Delay
  - Time: 600ms
  - Feedback: 50%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More extreme | Increase LFO1→FilterB to 90% |
| Less harsh | Reduce FilterA cutoff to 4000Hz |
| More controlled | Reduce modulation by half |
| More space | Increase reverb to 50% |
