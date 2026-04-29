# Exo Stadium Supersaw Workflow

## Sound Profile
Massive, festival-ready supersaw with 4 oscillators + dual filters for ultimate width.

## Recommended Preset
`genre/03-exo-stadium-supersaw.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 85% | Core |
| Oscillator 2 | Saw, 0 octave, 85% | Width |
| Oscillator 3 | Saw, 0 octave, 80% | Thickness |
| Oscillator 4 | Saw, +1 octave, 65% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, 4200Hz, Res 48, Drive 18 | Main power |
| Filter B | Lowpass, 8000Hz, Res 25, Drive 8 | Air control |
| Envelope | A:15, D:280, S:55, R:450 | Presence |
| Modulation | Env→FilterA: 70%, LFO1→FilterA: 45% | Movement |
| Stereo Width | 120% | Maximum spread |

## Chain Processing
```
Kepler Exo → Soft Clipper
  - Input reduction: 2.5dB
  → Fruily Limiter
  - Ceiling: -0.3dB
  - Gain: 6dB
  → Fruily Reverb 2
  - Type: Cathedral
  - Decay: 4s
  - Mix: 15%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More massive | All 4 oscillators at 90% |
| Tighter mix | Osc3/4 at 60% each |
| More movement | Increase LFO1 rate to 0.7Hz |
| More aggressive | Increase FilterA resonance to 52% |
| More air | Increase FilterB cutoff to 10000Hz |
