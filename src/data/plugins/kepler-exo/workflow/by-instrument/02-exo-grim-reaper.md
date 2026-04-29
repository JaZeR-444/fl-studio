# Exo Grim Reaper Workflow

## Sound Profile
Extreme drill bass with menacing harmonics and dark texture.

## Recommended Preset
`genre/04-exo-grim-reaper.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 90% | Weight |
| Oscillator 2 | Saw, -2 octave, 85% | Thickness |
| Oscillator 3 | Square, -1 octave, 60% | Aggression |
| Oscillator 4 | Saw, 0 octave, 40% | Dissonance |
| Sub Oscillator | Sine, -2 octave, 100% | Core |
| Filter A | Lowpass, 120Hz, Res 40, Drive 25 | Darkness |
| Filter B | Bandpass, 800Hz, Res 35, Drive 15 | Texture |
| Envelope | A:6, D:220, S:55, R:180 | Heaviness |
| Modulation | Env→FilterA: 80%, LFO1→Pitch: 20% | Demonic |

## Chain Processing
```
Kepler Exo → High-pass at 35Hz
  → Fruily Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 25ms
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More menacing | Increase LFO1→Pitch to 28% |
| Darker | Reduce FilterA cutoff to 100Hz |
| More aggressive | Increase FilterB drive to 20% |
| Cleaner sub | Increase FilterA cutoff to 150Hz |
