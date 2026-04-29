# Low Lifter Psychoacoustic Bass Theory

## The Missing Fundamental

The human brain perceives pitch not just from the fundamental frequency, but from the entire harmonic series. This phenomenon, called the **missing fundamental** or **residue pitch**, allows us to perceive a deep bass note even when only its upper harmonics are present.

### How It Works

When you hear a 50Hz bass note:
- Fundamental: 50Hz (often inaudible on small speakers)
- 2nd harmonic: 100Hz (more audible)
- 3rd harmonic: 150Hz (clearly audible)
- 4th harmonic: 200Hz (clearly audible)

The brain mathematically infers the 50Hz fundamental from the harmonic spacing, even if that frequency is missing from the actual sound.

### Low Lifter's Role

Low Lifter generates these upper harmonics in real-time, allowing small speakers (phones, laptops, earbuds) to "trick" the brain into perceiving deep bass that the speakers cannot physically reproduce.

---

## Why Small Speakers Can't Reproduce Bass

### Physical Limitations
| Speaker Type | Low-Frequency Limit |
|-------------|-------------------|
| Smartphone | 500-800Hz |
| Laptop | 200-400Hz |
| Earbuds | 100-200Hz |
| Studio monitors | 20-40Hz |

### The Problem
A 50Hz sub-bass note contains:
- 50Hz energy (inaudible on small speakers)
- 100Hz (audible, but not the same character)
- 150Hz, 200Hz, etc.

Without the 50Hz fundamental, the brain hears "something missing."

### The Solution
Low Lifter adds harmonics at 100Hz, 150Hz, 200Hz, and higher, calibrated so the brain reconstructs the perceived 50Hz fundamental.

---

## Harmonic Series and Bass Perception

### Odd vs Even Harmonics

**Odd harmonics** (1x, 3x, 5x):
- Hollow, nasal character
- Clarinet-like quality
- Good for: Woody, focused bass

**Even harmonics** (2x, 4x, 6x):
- Full, round character
- Horn-like quality
- Good for: Warm, fat bass

### Harmonic Ratios

| Fundamental | 2nd | 3rd | 4th | Character |
|-------------|-----|-----|-----|-----------|
| 50Hz | 100Hz | 150Hz | 200Hz | Balanced |
| 50Hz | 100Hz | 150Hz | 200Hz + extra | More harmonics = more presence |

---

## Diffusion and Harmonic Character

### What Diffusion Does

Diffusion adds subtle phase shifts and timing variations to generated harmonics, making them sound more organic and less "synthetic."

### Diffusion Settings

| Setting | Effect | Best For |
|---------|--------|----------|
| 0% | Pure, synthetic harmonics | Aggressive bass |
| 30% | Slight warmth | R&B, Pop |
| 60% | Warm, organic | Acoustic, Jazz |
| 100% | Very diffused | Atmospheric |

---

## Frequency Targeting

### Crossover Frequency

The crossover determines which frequencies trigger harmonic generation:

| Crossover | Effect |
|-----------|--------|
| 80Hz | Processes deep sub-bass |
| 120Hz | Processes bass and low-mids |
| 200Hz | Processes upper bass |

### Setting the Crossover

1. **Identify your target playback system**
2. **Find its low-frequency limit** (see table above)
3. **Set crossover just above that limit**
4. **Example**: For phone speakers (~500Hz limit), set crossover to ~400Hz

---

## Practical Applications

### Phone Speaker Optimization
1. Set crossover to 400Hz
2. Generate harmonics from 400Hz upward
3. Brain perceives bass down to 50Hz

### Laptop Speaker Optimization
1. Set crossover to 200Hz
2. Generate harmonics from 200Hz upward
3. Brain perceives bass down to 40Hz

### Studio Monitor Checking
1. Compare with crossover OFF
2. Harmonics should enhance, not dominate
3. Bass should sound natural on full-range speakers

---

## Common Misconceptions

### "More Harmonics = Better Bass"
**False.** Too many harmonics create a thin, metallic sound. The goal is subtle enhancement.

### "Bass Should Sound the Same Everywhere"
**False.** Different playback systems require different approaches. Low Lifter optimizes for each system.

### "Low Lifter Is Just Distortion"
**False.** Distortion adds random harmonics. Low Lifter adds specific harmonics that recreate the missing fundamental.

---

## Related Documentation

- [Low Lifter Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Low Lifter Workflows](../../03-Workflows/INDEX.md)
- [Small Speaker Translation Workflow](../../03-Workflows/by-goal/small-speaker-translation.md)
