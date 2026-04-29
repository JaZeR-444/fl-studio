# Low Lifter Small Speaker Translation

## The Problem

Modern music relies on deep sub-bass (40-60Hz) that most consumer playback systems cannot reproduce. This creates a disconnect between what producers hear on studio monitors and what listeners experience.

## The Solution

Low Lifter adds psychoacoustic harmonics so small speakers can "trick" the brain into perceiving bass that isn't actually there.

---

## Step-by-Step Workflow

### 1. Identify Your Target
| Target System | Frequency Limit | Crossover |
|---------------|-----------------|----------|
| Smartphone | 400-500Hz | 400Hz |
| Laptop | 200-300Hz | 200Hz |
| Earbuds | 100-200Hz | 150Hz |
| Car speakers | 80-100Hz | 80Hz |

### 2. Set Crossover
Match the crossover to just above your target's frequency limit:

```
Crossover ≈ Target Limit - 50Hz
```

### 3. Adjust Pre Gain
Start at 0dB and increase until the bass becomes audible on the target system.

| Target | Starting Point |
|--------|---------------|
| Phone | +6dB |
| Laptop | +3dB |
| Earbuds | +3dB |

### 4. Set Diffusion
| Target | Setting | Reason |
|--------|---------|--------|
| Phone | 30-40% | Aggressive enhancement needs less diffusion |
| Laptop | 40-50% | Standard balance |
| Earbuds | 50-60% | More natural for closer listening |

### 5. Configure Low Cut
| Target | Setting | Reason |
|--------|---------|--------|
| Phone | 60-80Hz | Prevent muddy phone speaker sound |
| Laptop | 40-50Hz | Clean laptop reproduction |
| Earbuds | 30-40Hz | Allow more sub for earbuds |

---

## Testing Protocol

### Phase 1: Studio Check
1. Load track on full-range monitors
2. Toggle Low Lifter ON/OFF
3. Bass should sound natural on monitors
4. Low Lifter adds presence, not changes fundamental

### Phase 2: Phone Test
1. Play track through phone speaker
2. Listen for bass presence
3. Harmonics should create bass perception
4. Bass should feel "there" even without low frequencies

### Phase 3: Comparison
1. Compare with reference tracks on same system
2. Check if your bass feels as present
3. Adjust parameters as needed
4. Repeat until satisfied

---

## Common Issues

### Bass Sounds "Thin"
**Cause:** Too many harmonics in wrong frequency range
**Fix:** Lower crossover frequency

### Bass Sounds "Harsh"
**Cause:** Too much high-frequency harmonic content
**Fix:** Increase Low Cut frequency, reduce Pre Gain

### Bass Sounds "Boomy"
**Cause:** Too much energy in upper bass
**Fix:** Increase Low Cut frequency

### No Perceived Bass
**Cause:** Crossover set too low
**Fix:** Raise crossover to match target system

---

## Target-Specific Settings

### Smartphone (Instagram/TikTok)
| Parameter | Value |
|-----------|-------|
| Crossover | 400Hz |
| Slope | -24 dB/oct |
| Diffusion | 35% |
| Pre Gain | +6dB |
| Low Cut | 70Hz |
| Mode | Single |

### Laptop (YouTube/Streaming)
| Parameter | Value |
|-----------|-------|
| Crossover | 200Hz |
| Slope | -24 dB/oct |
| Diffusion | 45% |
| Pre Gain | +3dB |
| Low Cut | 45Hz |
| Mode | Single |

### Earbuds (Mobile Listening)
| Parameter | Value |
|-----------|-------|
| Crossover | 150Hz |
| Slope | -24 dB/oct |
| Diffusion | 55% |
| Pre Gain | +3dB |
| Low Cut | 35Hz |
| Mode | Single |

---

## Workflow Tips

### A/B Constantly
- Switch between ON/OFF frequently
- Listen on actual target systems
- Trust your ears over meters

### Less Is More
- Start with subtle settings
- Increase gradually
- You can always add more

### Consider the Mix
- Busier mixes need subtler enhancement
- Simple arrangements can handle more
- Genre affects optimal settings

---

## Related Documentation

- [Low Lifter Psychoacoustic Theory](../Concepts/02-psychoacoustic-bass-theory.md)
- [Low Lifter Parameter Reference](../Quick-Reference/02-parameter-reference.md)
- [808 Character Shaping Workflow](../../03-Workflows/by-goal/808-character-shaping.md)
