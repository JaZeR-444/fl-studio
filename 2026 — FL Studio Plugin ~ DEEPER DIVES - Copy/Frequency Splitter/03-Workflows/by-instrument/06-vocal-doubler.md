# Vocal Doubler Workflow

## Sound Profile
Natural doubling effect by pitch-shifting only high frequencies.

## Recommended Preset
`genre/07-vocal-doubler.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 2000Hz | Split point |
| Slope | 24dB/oct | Clean cut |
| Mode | Linear-phase | No phasing |

## Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 100-2000Hz | Dry signal | Original |
| Band 2 | 2000Hz+ | Pitch +5 cents, 35% mix | Doubling |

## Workflow Integration
1. Route vocals to Frequency Splitter
2. Keep Band 1 dry for original character
3. Apply subtle pitch shift to Band 2
4. Blend Band 2 at 35% for natural doubling
5. Apply light reverb to combined signal

## Why This Works
- Only highs are doubled, preventing muddy buildup
- Linear-phase prevents phasing issues
- Subtle pitch shift adds width without obvious effect

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More obvious | Increase Band2 mix to 45% |
| More subtle | Reduce Band2 mix to 25% |
| Different character | Change pitch shift to +8 cents |
| Less artificial | Use +3 cents instead |
