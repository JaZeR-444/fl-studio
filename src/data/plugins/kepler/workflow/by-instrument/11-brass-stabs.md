# Brass Stabs Workflow

## Sound Profile
Punchy, aggressive stabs for rhythmic emphasis and impact moments.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 95% | Core |
| Oscillator 2 | Square, -1 octave, 50% | Click |
| Filter | Lowpass, 3500Hz, Resonance 40 | Bold |
| Filter Drive | 12% | Edge |
| Envelope | A:1, D:50, S:0, R:30 | Short |
| LFO | None | Static |

## Chain Processing
```
Kepler → Fruily Parametric EQ 2
  - Bell +4dB at 3kHz
  → Fruily Compressor
  - Attack: 1ms
  - Release: 50ms
  - Ratio: 4:1
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More aggressive | Increase resonance to 50% |
| More retro | Replace osc2 with triangle |
| More modern | Add slight bitcrusher |
| Longer sustain | Increase release to 50ms |
