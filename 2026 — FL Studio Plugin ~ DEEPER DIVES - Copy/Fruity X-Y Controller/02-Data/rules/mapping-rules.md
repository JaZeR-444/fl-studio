# X-Y Controller Mapping Rules

## Core Mapping Principles

### Rule 1: Clear Intent
**Every mapping must serve a specific musical purpose.**

❌ Bad: Map X-Y to random parameters because it looks cool
✅ Good: Map X to filter for drop build, Y to reverb for space expansion

### Rule 2: Range Calibration
**Always set minimum and maximum values that make musical sense.**

- X-Min/X-Max should reflect the usable range of the target parameter
- Never map full 0-100% if the parameter becomes unusable at extremes
- Example: Filter cutoff 200Hz-20kHz, not 0Hz-20kHz

### Rule 3: Curve Selection Logic

| Target Type | Recommended Curve | Reason |
|-------------|---------------------|--------|
| Filter cutoff | Exponential | Audible change across full range |
| Volume | Logarithmic | Human hearing is logarithmic |
| Saturation | Exponential | Subtle at low, aggressive at high |
| Pan/Width | Linear | Direct spatial positioning |
| Delay time | Step | Lock to rhythmic subdivisions |

### Rule 4: Single Responsibility

Each output should ideally control one "family" of parameters:

**X-Output**: Frequency-domain parameters (filters, EQ)
**Y-Output**: Time-domain parameters (reverb, delay)
**Speed**: Dynamics parameters (compression, gates)

### Rule 5: Avoid Modulation Feedback

Never route controller output back to its own input or create circular dependencies.

❌ X-Output → Parameter A → Parameter B → X-Input
✅ X-Output → Parameter A (only)

## Advanced Mapping Rules

### Rule 6: Layered Intensity

When mapping one output to multiple targets, use different curves:

```
X-Output → Target A: Linear (full range)
X-Output → Target B: Exponential (kicks in late)
X-Output → Target C: Step (discrete changes)
```

This creates "layered" macro effects where parameters respond differently to the same gesture.

### Rule 7: The Sweet Spot Zone

For parameters with critical "sweet spots":

1. Use custom mapping curves
2. Create a "flat" zone in the middle 30-70%
3. Make edges more responsive
4. Result: Most pad movement = subtle, edges = extreme

### Rule 8: Contextual Mapping

Change mappings based on song section:

**Verse**: X = Vocal presence, Y = Subtle reverb
**Chorus**: X = Stereo width, Y = Drive
**Drop**: X = Filter open, Y = Everything louder

Use automation clips to switch between mapping setups.

### Rule 9: Absolute vs Relative Decision Tree

```
Is there existing automation on target?
├── Yes → Use Relative mode (picks up from current value)
└── No → Use Absolute mode (direct control)

Do you need precise position recall?
├── Yes → Use Absolute mode
└── No → Can use either

Is this a live performance?
├── Yes → Relative mode (no jumps when touching pad)
└── No → Either mode works
```

### Rule 10: The 3-Parameter Minimum

X-Y Controller truly shines when controlling at least 3 parameters:

- **Minimum viable**: X + Y (2 parameters)
- **Sweet spot**: X + Y + Speed (3 parameters)
- **Macro territory**: X + Y + Speed + Acceleration + multiple targets per output

## Hip-Hop Specific Rules

### Rule 11: Sync to Groove

Mapping gestures should align with the track's pocket:

- **Trap**: Sharp movements on hi-hat triplet subdivisions
- **Boom Bap**: Smooth gestures following swung 1/8 notes
- **Drill**: Aggressive snaps on snare hits

### Rule 12: The Drop Build Curve

Pre-drop filter mapping should use exponential curves:

- 0-60% pad movement = subtle filter opening (build tension)
- 60-100% pad movement = rapid filter opening (release)

This matches how tension builds exponentially before impact.

### Rule 13: 808 Control Strategy

For 808 bass control:

- X = Volume (80-120% range for extra punch)
- Y = Distortion (0-30% for character)
- Speed = Compression (faster movements = more squashed)

### Rule 14: Vocal Chain Mapping

Vocal processing with X-Y:

- X = De-esser threshold (tame harshness)
- Y = Saturation drive (add warmth)
- Never map both to same frequency range (conflicting effects)

## Validation Checklist

Before finalizing any mapping:

- [ ] Can I explain the musical purpose in one sentence?
- [ ] Are min/max values musically appropriate?
- [ ] Does the curve type match the target's behavior?
- [ ] Can I perform the gesture comfortably?
- [ ] Does it work in context with the full mix?
- [ ] Is there any modulation feedback or conflict?
- [ ] Would a different controller type work better?

## Common Anti-Patterns

❌ **The Chaos Map**: 10+ parameters with no clear relationship
❌ **The Extreme Map**: Full 0-100% range on everything (usually sounds bad)
❌ **The Conflicting Map**: Two parameters fighting each other (e.g., filter + resonance in opposition)
❌ **The Set-and-Forget**: Mapped but never automated or performed
❌ **The Over-Curve**: Exponential curves on everything (exhausting to control)

## Best Practice Summary

1. Start with the musical intent
2. Choose targets that support that intent
3. Calibrate ranges for musical results
4. Select curves based on auditory perception
5. Test in full mix context
6. Iterate based on what sounds good
