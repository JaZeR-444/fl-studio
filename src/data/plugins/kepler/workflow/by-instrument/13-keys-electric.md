# Keys Electric Workflow

## Sound Profile
Clean, electric piano-style sound with crisp attack and smooth sustain.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 90% | Core |
| Oscillator 2 | Triangle, 0 octave, 60% | Body |
| Filter | Lowpass, 4000Hz, Resonance 15 | Clarity |
| Filter Drive | 3% | Subtle warmth |
| Envelope | A:5, D:200, S:80, R:250 | Piano-like |
| LFO | Sine, 0.5Hz, 8% to Pitch | Vibrato |

## Chain Processing
```
Kepler → Fruily Reverb 2
  - Type: Studio
  - Decay: 1.2s
  - Mix: 15%
  → Fruily Compressor
  - Attack: 10ms
  - Release: 100ms
  - Ratio: 2:1
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More electric | Increase filter drive to 5% |
| More mellow | Reduce filter cutoff to 3500Hz |
| More crisp | Increase filter cutoff to 4500Hz |
| Less vibrato | Reduce LFO to 4% |
