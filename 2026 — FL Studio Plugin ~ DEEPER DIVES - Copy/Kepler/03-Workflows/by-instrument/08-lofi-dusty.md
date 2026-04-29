# Lo-Fi Dusty Pad Workflow

## Sound Profile
Warm, nostalgic texture with degraded character reminiscent of old VHS tapes and worn cassettes.

## Recommended Preset
`genre/08-dusty-texture.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 75% | Body |
| Oscillator 2 | Triangle, -2 octave, 60% | Warmth |
| Filter | Lowpass, 1500Hz, Resonance 20 | Muffled |
| Filter Drive | 8% | Saturation |
| Envelope | A:150, D:500, S:75, R:800 | Slow movement |
| LFO | Sine, 0.1Hz, 20% to Filter | Gentle drift |

## Genre Variations
- **Chillhop:** Faster LFO (0.2Hz), reduced detune
- **Boom Bap:** Reduced stereo width, increased warmth
- **Jazz Hop:** Softer attack (200ms), longer release

## Chain Processing
```
Kepler → Vintage Phaser
  - Stages: 4
  - Rate: 0.3Hz
  - Mix: 40%
  → Fruily Reverb 2
  - Type: Room
  - Decay: 3s
  - Mix: 25%
  → Tape Saturation
  - Drive: 3%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More degraded | Increase LFO to 30% |
| Cleaner sound | Reduce LFO to 10% |
| More warmth | Increase filter drive to 12% |
| More movement | Increase LFO rate to 0.15Hz |
