# R&B Smooth Lead Workflow

## Sound Profile
Warm, emotional lead with smooth attack and silky sustain for R&B vocal-inspired melodies.

## Recommended Preset
`genre/03-silk-lead.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 100% | Core tone |
| Oscillator 2 | Triangle, 0 octave, 50% | Harmonics |
| Filter | Lowpass, 2200Hz, Resonance 15 | Softness |
| Filter Drive | 5% | Subtle warmth |
| Envelope | A:50, D:400, S:70, R:300 | Smooth entry/exit |
| LFO | Sine, 0.25Hz, 15% to Pan | Subtle movement |

## Genre Variations
- **Neo-Soul:** Increase resonance to 20%, add slight vibrato
- **Contemporary R&B:** Faster attack (30ms), brighter filter (2800Hz)
- **90s R&B:** Triangle wave at 70%, lower filter (1800Hz)

## Chain Processing
```
Kepler → Soft Clipper
  - Input reduction: 2dB
  → Fruily Reverb 2
  - Type: Hall
  - Decay: 2.5s
  - Pre-delay: 30ms
  - Mix: 20%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase osc2 mix to 65% |
| Warmer tone | Reduce filter cutoff to 1800Hz |
| Brighter tone | Increase filter cutoff to 3000Hz |
| More movement | Increase LFO rate to 0.4Hz |
| More width | Enable stereo width processing |

## Troubleshooting
| Problem | Solution |
|---------|----------|
| Harsh highs | Reduce osc2 mix to 35% |
| Too dark | Increase filter cutoff by 300Hz |
| Weak projection | Increase filter drive to 8% |
| Clicking attacks | Increase envelope attack to 40ms |
| Monophonic feel | Increase LFO pan to 25% |
