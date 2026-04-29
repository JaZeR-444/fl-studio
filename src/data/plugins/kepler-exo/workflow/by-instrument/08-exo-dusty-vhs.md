# Exo Dusty VHS Workflow

## Sound Profile
Lo-fi, nostalgic texture with tape warble and degraded character.

## Recommended Preset
`genre/05-exo-dusty-vhs.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 70% | Body |
| Oscillator 2 | Triangle, -2 octave, 65% | Warmth |
| Oscillator 3 | Square, 0 octave, 40% | Click |
| Oscillator 4 | Sine, -1 octave, 55% | Subtle |
| Sub Oscillator | Sine, -2 octave, 30% | Foundation |
| Filter A | Lowpass, 1800Hz, Res 22, Drive 8 | Muffled |
| Filter B | Highpass, 150Hz, Res 15, Drive 0 | Cleanup |
| Envelope | A:180, D:600, S:80, R:1000 | Slow |
| Modulation | Env→FilterA: 20%, LFO1→Pan: 65% | Warble |
| Stereo Width | 150% | Maximum |

## Chain Processing
```
Kepler Exo → Vintage Phaser
  - Mix: 35%
  - Rate: 0.25Hz
  → Fruily Reverb 2
  - Type: Room
  - Decay: 2.5s
  - Mix: 28%
  → Tape Saturation
  - Drive: 4%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More warble | Increase LFO1→Pan to 75% |
| Cleaner | Reduce Stereo Width to 100% |
| More degraded | Increase LFO1 rate to 0.3Hz |
| Darker | Reduce FilterA cutoff to 1500Hz |
