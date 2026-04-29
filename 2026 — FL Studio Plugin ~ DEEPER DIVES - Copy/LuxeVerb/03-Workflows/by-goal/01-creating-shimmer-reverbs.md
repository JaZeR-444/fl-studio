# LuxeVerb Creating Shimmer Reverbs

## What Is Shimmer?

Shimmer reverb adds pitch-shifted harmonics to the reverb tail, creating an ethereal, "angelic" quality. Traditional shimmers use +1 octave pitch shifting, but LuxeVerb allows more flexibility.

---

## Signal Flow

```
Input → Early Reflections → Main Reverb → Pitch Shift → Feedback → Output
         ↓                              ↓
      Standard                     Harmonic
      reflections                   tail
```

The pitch shifter is in the feedback loop, causing pitch-shifted signal to accumulate and re-pitch-shift, creating complex harmonic series.

---

## Step-by-Step Setup

### 1. Base Reverb
| Parameter | Value | Reason |
|-----------|-------|--------|
| Mode | Lush or Cathedral | Dense reverb for shimmer |
| Size | 70% | Large space for tail |
| Decay | 4-6s | Long tail for shimmer accumulation |
| Pre-Delay | 30ms | Maintain attack clarity |

### 2. Pitch Shift
| Parameter | Value | Reason |
|-----------|-------|--------|
| Pitch | +12 semitones | Classic shimmer (1 octave) |
| Feedback | 40-60% | Amount of shimmer accumulation |
| Mix | 50% | Balance dry/wet |

### 3. Filtering
| Parameter | Value | Reason |
|-----------|-------|--------|
| Low-Pass | 10-12kHz | Tame harsh high frequencies |
| High-Pass | 80Hz | Remove low-end mud |
| Brightness | 50% | Control overall clarity |

### 4. Fine Tuning
1. Start with Feedback at 50%
2. Adjust Pitch to taste (+12 for classic, try +/-7 or +/-5 for variations)
3. Reduce Mix if too washy
4. Add Low-Pass if harsh

---

## Variation: Dark Shimmer

For a haunting, lower shimmer:

| Parameter | Value | Reason |
|-----------|-------|--------|
| Pitch | -12 semitones | Descending shimmer |
| Feedback | 35% | Less accumulation |
| Mode | Cathedral | Darker base |

---

## Variation: Metallic Shimmer

For sci-fi, synthetic shimmer:

| Parameter | Value | Reason |
|-----------|-------|--------|
| Pitch | +7 semitones (perfect 5th) | Harmonic interval |
| Feedback | 65% | Maximum accumulation |
| Mode | Space | Abstract character |

---

## Automation Ideas

### Build-Up Effect
1. Start with shimmer OFF or Mix at 0%
2. Automate Mix from 0% to 50% over 8 bars
3. Release for impact

### Pitch Evolution
1. Start at +12 semitones
2. Automate Pitch down to 0 over 4 bars
3. Creates descending angel effect

### Filter Sweep
1. Start Low-Pass at 8kHz
2. Automate to 14kHz over 4 bars
3. Opens up the shimmer gradually

---

## Common Issues

### Harsh/Shrill
- Reduce Pitch feedback
- Lower Mix percentage
- Add more Low-Pass filtering

### No Shimmer Effect
- Check that Feedback is enabled
- Verify Pitch is not at 0
- Increase Feedback amount

### Too Washy
- Reduce Decay time
- Lower Mix percentage
- Add more Pre-Delay

### Artifacts/Glitches
- Reduce Feedback below 70%
- Increase Low-Pass frequency
- Reduce input gain

---

## Tips for Success

### Start Subtle
- Begin with lower Feedback (30%)
- Increase gradually until effect is audible
- More is not always better

### Match the Key
| Key | Interval | Pitch Shift |
|-----|----------|-------------|
| Major | +12 (octave) | Classic shimmer |
| Minor | -12 (down octave) | Dark shimmer |
| Both | +7 (5th) | Harmonic interest |
| Suspense | -7 (down 5th) | Tension |

### Use on Appropriate Sources
- Synth pads (best)
- Vocals (good)
- Guitar (good)
- Drums (use sparingly)
- Full mix (use very sparingly)

---

## Related Documentation

- [LuxeVerb Mode Comparison](../Quick-Reference/02-mode-comparison.md)
- [LuxeVerb Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Cinematic Riser Workflow](02-cinematic-riser-reverb.md)
