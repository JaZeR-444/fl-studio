# Downlifter Workflow

## Sound Profile
Dark, tension-releasing elements for breakdowns and post-drop sections.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 100% | Low rumble |
| Oscillator 2 | Square, -1 octave, 60% | Dissonance |
| Filter | Lowpass, sweep 5000→100Hz | Closing down |
| Filter Drive | 18% | Distortion |
| Envelope | A:5, D:100, S:50, R:150 | Fast action |
| LFO | None | Static |

## Automation Sequence
1. Start: Filter cutoff at 5000Hz
2. Bar 1: Filter to 2000Hz
3. Bar 2: Filter to 500Hz
4. End: Filter to 100Hz

## Chain Processing
```
Kepler → Fruily Distancer
  - Drive: 30%
  → Fruily Delay
  - Time: 250ms
  - Feedback: 60%
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More tension | Slow the automation |
| More release | Speed up the automation |
| Darker | Reduce starting cutoff |
| More impact | Increase filter drive |
