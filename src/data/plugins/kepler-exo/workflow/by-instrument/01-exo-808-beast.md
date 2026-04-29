# Exo 808 Beast Workflow

## Sound Profile
Massive, modern 808 with 4 oscillators + sub oscillator for extreme low-end presence.

## Recommended Preset
`genre/01-exo-808-beast.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 70% | Sub harmonics |
| Oscillator 2 | Saw, -2 octave, 65% | Thickness |
| Oscillator 3 | Square, -1 octave, 50% | Click/Attack |
| Oscillator 4 | Triangle, 0 octave, 35% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 100% | Foundation |
| Filter A | Lowpass, 200Hz, Res 30, Drive 18 | Main tone |
| Filter B | Lowpass, 4000Hz, Res 20, Drive 5 | High control |
| Envelope | A:4, D:200, S:60, R:140 | Punch |
| Modulation | Env→FilterA: 75%, LFO1→Pan: 35% | Movement |

## Exo-Specific Advantages
- **Sub Oscillator:** Dedicated low-end without affecting harmonics
- **Dual Filter:** Independent sub and harmonic control
- **4 Oscillators:** Layered harmonic complexity
- **Expanded Modulation:** More movement possibilities

## Genre Variations
- **Modern Trap:** Increase FilterA resonance to 38%, add LFO2→Pitch (8%)
- **Hip-Hop Classic:** Reduce osc3/4 mix, warmer FilterA drive (12%)
- **Dark Drill:** Increase FilterA drive to 25%, faster LFO1 (0.5Hz)

## Chain Processing
```
Kepler Exo → Fruily Parametric EQ 2
  - High-pass: 25Hz
  → Fruily Limiter
  - Threshold: -14dB
  - Ratio: 4:1
  - Attack: 1ms
  - Release: 35ms
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Sub Oscillator to 100% |
| More punch | Increase FilterA resonance to 38% |
| More grit | Increase FilterA drive to 22% |
| Cleaner sound | Reduce osc3/4 to 30% each |
| More movement | Increase LFO1 pan to 45% |
