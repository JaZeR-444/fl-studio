# Low Lifter Parameter Reference

## Parameter Map

| Parameter | Range | Default | Function |
|----------|-------|---------|----------|
| Crossover | 20-500Hz | 80Hz | Frequency where processing begins |
| Slope | -12 to -48 dB/oct | -24 dB/oct | Harmonic decay rate |
| Diffusion | 0-100% | 50% | Harmonic phase/organic character |
| Pre Gain | -12 to +12 dB | 0dB | Input boost before shaping |
| Low Cut | 20-500Hz | 40Hz | Final bass energy management |
| Mode | Single/Multi | Single | Processing mode |

---

## Crossover

### Purpose
Sets the frequency threshold where bass enhancement begins. Frequencies below the crossover trigger harmonic generation.

### Guidelines
| Target System | Crossover | Notes |
|---------------|----------|-------|
| Phone speakers | 400-500Hz | Maximum enhancement |
| Laptop speakers | 200-300Hz | Standard enhancement |
| Earbuds | 150-200Hz | Moderate enhancement |
| Studio monitors | 80-100Hz | Subtle enhancement |

### Tips
- Lower crossover = processes deeper bass
- Higher crossover = processes higher frequencies
- Match to your target playback system

---

## Slope

### Purpose
Controls how harmonics decay above the crossover frequency.

### Values
| Setting | Decay Rate | Character |
|---------|------------|-----------|
| -12 dB/oct | Gentle | More harmonics at high frequencies |
| -24 dB/oct | Moderate | Balanced decay |
| -48 dB/oct | Steep | Fewer harmonics, cleaner |

### Tips
- Steeper slopes = more natural decay
- Gentler slopes = more harmonic content
- Match to musical complexity

---

## Diffusion

### Purpose
Adds phase shifts to generated harmonics for organic character.

### Values
| Setting | Character | Use Case |
|---------|-----------|----------|
| 0% | Pure, synthetic | Aggressive bass |
| 30% | Slight warmth | R&B, Pop |
| 60% | Warm, organic | Acoustic, Jazz |
| 100% | Very diffused | Atmospheric |

### Tips
- Higher values = more natural sound
- Lower values = more aggressive character
- Essential for avoiding "fake" bass

---

## Pre Gain

### Purpose
Boosts input signal before harmonic generation.

### Values
| Setting | Effect |
|---------|--------|
| Negative | Subtle enhancement |
| 0dB | Standard enhancement |
| Positive | Aggressive enhancement |

### Tips
- Higher values = more harmonics
- Too high = distortion
- Adjust based on input signal level

---

## Low Cut

### Purpose
Final filtering to manage overall energy and prevent muddiness.

### Guidelines
| Setting | Effect |
|---------|--------|
| Lower (20-30Hz) | Preserve sub-bass |
| Medium (40-60Hz) | Standard bass |
| Higher (80-100Hz) | Remove muddy lows |

### Tips
- Use 30-40Hz for maximum sub
- Use 60-80Hz for cleaner mixes
- Prevents bass from overwhelming mix

---

## Mode

### Single Band
- Processes all frequencies below crossover as one
- Lower CPU usage
- Simpler sound

### Multi-Band
- Processes different frequency ranges separately
- Higher CPU usage
- More precise control

---

## Preset Parameters

### Phone Speaker
| Parameter | Value |
|-----------|-------|
| Crossover | 400Hz |
| Slope | -24 dB/oct |
| Diffusion | 40% |
| Pre Gain | +6dB |
| Low Cut | 60Hz |
| Mode | Single |

### Laptop Speaker
| Parameter | Value |
|-----------|-------|
| Crossover | 200Hz |
| Slope | -24 dB/oct |
| Diffusion | 50% |
| Pre Gain | +3dB |
| Low Cut | 40Hz |
| Mode | Single |

### Studio Monitor
| Parameter | Value |
|-----------|-------|
| Crossover | 80Hz |
| Slope | -12 dB/oct |
| Diffusion | 60% |
| Pre Gain | 0dB |
| Low Cut | 30Hz |
| Mode | Single |

---

## Related Documentation

- [Low Lifter Psychoacoustic Theory](../Concepts/02-psychoacoustic-bass-theory.md)
- [Low Lifter Workflows](../../03-Workflows/INDEX.md)
