# EDM Supersaw Lead Workflow

## Sound Profile
Massive, stadium-filling lead with wide stereo width and powerful presence.

## Recommended Preset
`genre/05-supersaw-hero.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 90% | Core |
| Oscillator 2 | Saw, 0 octave, 90% | Width |
| Oscillator 3 | Saw, +1 octave, 70% | Harmonics |
| Filter | Lowpass, 4000Hz, Resonance 50 | Power |
| Filter Drive | 20% | Saturation |
| Envelope | A:20, D:250, S:60, R:400 | Presence |
| LFO | Saw-up, 0.5Hz, 40% to Filter | Movement |

## Genre Variations
- **Big Room:** Higher resonance (55%), longer release (500ms)
- **Progressive House:** Softer attack (30ms), moderate resonance (45%)
- **Future Bass:** Add filter LFO movement, stereo width 120%

## Chain Processing
```
Kepler → Soft Clipper
  - Input reduction: 3dB
  → Fruily Limiter
  - Ceiling: -0.3dB
  - Gain: 6dB
  → Stereo Delay
  - Time: 300ms
  - Feedback: 40%
  - Mix: 25%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More massive | Enable all 3 oscillators at 100% |
| Tighter mix | Reduce osc3 to 60% |
| More movement | Increase LFO rate to 0.8Hz |
| More aggressive | Increase resonance to 55% |
| Smoother | Reduce filter drive to 15% |

## Safety Notes
- Use high-pass filter at 200Hz when layered with bass
- Monitor for phase cancellation when summing to mono
- Reduce polyphony if CPU becomes an issue
