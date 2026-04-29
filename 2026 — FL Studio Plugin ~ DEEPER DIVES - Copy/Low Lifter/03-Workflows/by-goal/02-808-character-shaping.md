# Low Lifter 808 Character Shaping

## Overview

The TR-808's iconic sound comes from its combination of deep sub-bass and harmonic distortion. Low Lifter can add similar character to any bass sound, making 808-style bass accessible on any playback system.

---

## The 808 Sound

### Components
| Component | Frequency | Character |
|-----------|-----------|-----------|
| Sub-bass | 40-60Hz | Deep foundation |
| Harmonics | 100-400Hz | Crunch/character |
| Click | 2-5kHz | Attack definition |

### The Challenge
On small speakers:
- Sub-bass (40-60Hz) is lost
- The sound becomes thin
- Character is diminished

### Low Lifter's Solution
Generate harmonics that recreate the 808's character at frequencies small speakers CAN reproduce.

---

## Step-by-Step Workflow

### 1. Input Signal
Start with a clean sine wave or sub bass:
| Parameter | Value |
|-----------|-------|
| Frequency | 40-50Hz |
| Waveform | Sine |
| Envelope | Fast attack, medium decay |

### 2. Crossover Setting
| Parameter | Value | Reason |
|-----------|-------|--------|
| Crossover | 100Hz | Targets 808 harmonic range |

### 3. Harmonic Generation
| Parameter | Value | Reason |
|-----------|-------|--------|
| Pre Gain | +4 to +6dB | Aggressive enhancement |
| Slope | -24 dB/oct | Standard decay |

### 4. Character Addition
| Parameter | Value | Effect |
|-----------|-------|--------|
| Diffusion | 25-35% | Adds grit without mud |
| Low Cut | 50Hz | Preserves sub, cleans mud |

### 5. Fine Tuning
1. Listen on multiple systems
2. Adjust Pre Gain for presence
3. Adjust Diffusion for character
4. Find the balance

---

## Style Variations

### Classic 808
| Parameter | Value |
|-----------|-------|
| Crossover | 100Hz |
| Slope | -24 dB/oct |
| Diffusion | 30% |
| Pre Gain | +5dB |
| Low Cut | 50Hz |

### Modern Trap
| Parameter | Value |
|-----------|-------|
| Crossover | 120Hz |
| Slope | -24 dB/oct |
| Diffusion | 25% |
| Pre Gain | +6dB |
| Low Cut | 60Hz |

### R&B Smooth
| Parameter | Value |
|-----------|-------|
| Crossover | 80Hz |
| Slope | -12 dB/oct |
| Diffusion | 45% |
| Pre Gain | +3dB |
| Low Cut | 40Hz |

---

## Common Issues

### "Not Crunchy Enough"
- Increase Pre Gain
- Lower Diffusion
- Add distortion plugin

### "Too Harsh"
- Decrease Pre Gain
- Increase Diffusion
- Raise Low Cut frequency

### "Losing the Sub"
- Check crossover isn't too high
- Verify Low Cut isn't too high
- Ensure source has sub content

### "Phasing Issues"
- Check polarity on source
- Try Invert Polarity if available
- Compare mono vs stereo

---

## Layering with 808 Samples

### Approach 1: Enhancement
1. Load 808 sample
2. Add Low Lifter for small speaker translation
3. Original sample handles full-range playback
4. Low Lifter handles phone/laptop playback

### Approach 2: Character Addition
1. Use clean sine sub
2. Add Low Lifter for 808 character
3. Layer with distorted 808 for harmonics
4. Result: Complete 808 sound

### Approach 3: Creative
1. Process with Low Lifter (heavy settings)
2. Layer with original
3. Blend to taste
4. Unique 808 character

---

## Testing Checklist

- [ ] Sounds good on studio monitors
- [ ] Bass audible on phone speaker
- [ ] Bass audible on laptop speakers
- [ ] Bass audible on earbuds
- [ ] No harshness or distortion
- [ ] Character matches intended style
- [ ] Sits well in mix

---

## Related Documentation

- [Low Lifter Psychoacoustic Theory](../Concepts/02-psychoacoustic-bass-theory.md)
- [Small Speaker Translation Workflow](01-small-speaker-translation.md)
- [Mastering Low-End Boost Workflow](../../03-Workflows/by-goal/mastering-low-end-boost.md)
