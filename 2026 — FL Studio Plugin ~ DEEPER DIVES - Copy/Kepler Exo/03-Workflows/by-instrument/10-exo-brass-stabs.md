# Exo Brass Stabs Workflow

## Sound Profile
Bold, punchy stabs with dual-filter architecture for aggressive impact.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 90% | Core |
| Oscillator 2 | Saw, 0 octave, 85% | Body |
| Oscillator 3 | Square, -1 octave, 55% | Click |
| Oscillator 4 | Triangle, 0 octave, 45% | Warmth |
| Sub Oscillator | Sine, -2 octave, 35% | Weight |
| Filter A | Lowpass, 3500Hz, Res 42, Drive 12 | Bold |
| Filter B | Lowpass, 6000Hz, Res 25, Drive 5 | Air |
| Envelope | A:2, D:60, S:0, R:40 | Short |
| Modulation | Env→FilterA: 85% | Punch |

## Chain Processing
```
Kepler Exo → Fruily Parametric EQ 2
  - Bell +4dB at 3kHz
  → Fruily Compressor
  - Attack: 1ms
  - Release: 40ms
  - Ratio: 5:1
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More aggressive | Increase FilterA resonance to 48% |
| More retro | Replace osc3 with triangle |
| More modern | Add slight bitcrusher |
| Longer sustain | Increase release to 60ms |
