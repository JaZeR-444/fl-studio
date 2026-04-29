# Exo Risers Workflow

## Sound Profile
Building tension with multiple oscillator layers and filter automation.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, +1 octave, 85% | Brightness |
| Oscillator 2 | Saw, +1 octave, 80% | Thickness |
| Oscillator 3 | Square, +1 octave, 65% | Edge |
| Oscillator 4 | Saw, +2 octave, 50% | Air |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, sweep 0→5000Hz | Building |
| Filter B | Lowpass, 8000Hz, Res 20, Drive 5 | Air |
| Envelope | A:200, D:400, S:80, R:300 | Slow rise |
| Modulation | LFO1→FilterA: 60% | Movement |

## Automation Sequence
1. Bar 1: FilterA 0→800Hz
2. Bar 2: FilterA 800→2000Hz
3. Bar 3: FilterA 2000→4000Hz, increase LFO rate
4. Bar 4: FilterA 4000→5000Hz, full intensity

## Chain Processing
```
Kepler Exo → White Noise (50% mix)
  → Fruily Limiter
  - Ceiling: -0.3dB
  - Attack: 0.5ms
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More tension | Increase max filter to 6000Hz |
| Smoother | Lengthen to 8 bars |
| Brighter | Increase FilterB cutoff |
| More movement | Increase LFO rate |
