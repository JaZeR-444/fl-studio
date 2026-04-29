# Understanding the Puncher Algorithm

## What is the "Puncher"?

The Puncher is Fruity Squeeze's unique sample-replacement distortion algorithm. Unlike traditional clipping or saturation, the Puncher **replaces original audio samples with distorted nominal-level versions** based on the signal's characteristics.

Think of it as a "sample substitution engine" rather than a wave-shaping algorithm.

## How It Differs from Standard Distortion

### Traditional Clipping/Saturation:
- Amplifies signal → clips peaks → creates harmonics
- **Continuous wave shaping**
- Affects all samples equally based on amplitude

### Fruity Squeeze Puncher:
- Analyzes incoming samples
- **Replaces specific samples** with pre-distorted versions
- Creates a "punched" or "stuttered" quality
- **Selective sample processing** based on Preserve/Impact ratio

## The Three-Part Control System

### 1. Preserve
**What it does:** Determines how many of the **original** samples pass through untouched.

- **High Preserve (70-100%):** Most samples remain clean
- **Low Preserve (0-30%):** Few original samples survive
- **Use case:** Maintaining transient punch and clarity

**Analogy:** Think of it as a "gatekeeper" that lets clean samples through.

### 2. Impact
**What it does:** Determines how many **processed/distorted** samples are added.

- **High Impact (70-100%):** Aggressive sample replacement
- **Low Impact (0-30%):** Subtle distortion content
- **Use case:** Adding character and degradation

**Analogy:** Think of it as the "distortion injection" amount.

### 3. Relation
**What it does:** Sets the **ratio** between Preserve and Impact.

This is the most misunderstood parameter. It's NOT a simple mix control—it adjusts how Preserve and Impact **interact**.

- **Left (Favor Preserve):** Original samples are prioritized
- **Center (Balanced):** Equal weighting
- **Right (Favor Impact):** Distorted samples dominate

**Analogy:** Think of it as a "bias control" for the sample replacement algorithm.

## How the Algorithm Works (Simplified)

```
1. Audio sample arrives
2. Puncher analyzes sample characteristics (amplitude, timing)
3. Based on Preserve/Impact/Relation settings:
   - Keep original sample? (Preserve)
   - Replace with distorted version? (Impact)
   - What's the probability? (Relation)
4. Output the chosen sample
5. Repeat for next sample
```

## Squarize vs. Puncher

These are **two separate processes** in Fruity Squeeze:

### Squarize (Bit Reduction)
- Reduces bit depth
- Creates "stepped" waveforms
- Generates aliasing artifacts
- **Affects ALL samples equally**

### Puncher (Sample Replacement)
- Selectively replaces samples
- Creates "punchy" distortion character
- **Affects samples based on Preserve/Impact/Relation**

They work **in series:**
1. Squarize processes the signal first
2. Puncher operates on the squarized signal (or vice versa, depending on routing)

## Practical Applications

### Preserving Transients While Adding Body
```
Preserve: 70%
Impact: 50%
Relation: Favor Preserve
```
**Result:** Drum hits stay punchy, but body/tail gets crunchy character.

### Aggressive Lo-Fi Destruction
```
Preserve: 20%
Impact: 80%
Relation: Favor Impact
```
**Result:** Most samples are replaced with distorted versions—heavy degradation.

### Subtle Vintage Character
```
Preserve: 60%
Impact: 30%
Relation: Centered
```
**Result:** Gentle "broken transistor" vibe without losing clarity.

### Glitch/Stutter Effect
```
Preserve: 40%
Impact: 60%
Relation: Extreme Right
```
**Result:** Creates irregular sample replacement—sounds like digital glitching.

## Common Misconceptions

### ❌ "Preserve and Impact are just a dry/wet mix"
**Reality:** They control **sample selection probability**, not signal mixing. The Relation knob further modifies this probability.

### ❌ "The Puncher is just another waveshaper"
**Reality:** It's a **sample replacement algorithm**, not continuous wave shaping. This creates its unique "punched" character.

### ❌ "Relation is redundant if I set Preserve/Impact correctly"
**Reality:** Relation fundamentally changes **how** the algorithm prioritizes samples. Small Relation changes = big character shifts.

## Advanced Techniques

### Dynamic Puncher Control
Automate Relation for evolving textures:
- **Intro:** Favor Preserve (clean)
- **Build:** Move toward Center (balanced)
- **Drop:** Favor Impact (crushed)

### Frequency-Specific Punching
Use Fruity Squeeze on specific frequency bands (via Patcher or multiband routing):
- **Lows:** High Preserve (keep punch)
- **Mids:** Balanced (add character)
- **Highs:** High Impact (crush cymbals/hats)

### Parallel Puncher Processing
Two instances in parallel:
- **Instance 1:** High Preserve, low Mix (transient preservation)
- **Instance 2:** High Impact, medium Mix (body distortion)

## Why It Sounds Different

The Puncher creates a **non-linear, sample-selective** distortion that:
1. Preserves micro-dynamics (unlike heavy compression + distortion)
2. Creates irregular harmonic content (not standard odd/even harmonics)
3. Maintains transient clarity while adding body (if configured correctly)
4. Generates a "digital artifact" quality unique to sample replacement

This is why Fruity Squeeze sounds distinct from:
- Fruity Fast Dist (waveshaper)
- Fruity Blood Overdrive (tube simulation)
- Distructor (multiband saturation)

## Troubleshooting

### "I hear crackling/popping"
- **Cause:** Too much Impact with low Preserve
- **Fix:** Increase Preserve or reduce Impact

### "It sounds too clean"
- **Cause:** Too much Preserve, not enough Impact
- **Fix:** Increase Impact and adjust Relation toward Impact

### "The effect is too inconsistent"
- **Cause:** Extreme Relation settings create unpredictable sample selection
- **Fix:** Move Relation toward Center for more stable processing

### "I can't hear any difference"
- **Cause:** Preserve and Impact might be balanced too evenly with centered Relation
- **Fix:** Push Impact higher and/or move Relation to extremes

## The "Broken Transistor" Sound

When you push the Puncher hard:
```
Squarize: 50%+
Preserve: 10-30%
Impact: 70-90%
Relation: Favor Impact
```

You get the classic "broken radio" / "failing hardware" sound because:
1. Squarize introduces aliasing
2. Puncher replaces most samples with distorted versions
3. The irregular sample selection mimics hardware failure
4. Combined effect = vintage/lo-fi degradation

## Conclusion

The Puncher is Fruity Squeeze's secret weapon. Understanding Preserve/Impact/Relation as a **sample selection system** rather than simple gain controls unlocks its full potential.

**Key Takeaway:** The Puncher doesn't just "add distortion"—it **rebuilds your audio from a mix of clean and crushed samples** based on intelligent probability.

---

**Experiment:** Load a simple drum loop. Set Preserve to 100%, Impact to 0%, and slowly increase Impact while watching Relation. You'll hear exactly when and how samples get replaced.
