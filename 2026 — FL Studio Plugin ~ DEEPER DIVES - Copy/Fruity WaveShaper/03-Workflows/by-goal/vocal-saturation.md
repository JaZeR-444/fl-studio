# Vocal Saturation and Grit

## The Goal

Add presence, warmth, and attitude to vocals while maintaining intelligibility and clarity.

[SRC: IL-MAN] Careful saturation adds harmonic content that helps vocals cut through dense mixes without harshness.

## Vocal Distortion Philosophy

Vocals are the most important element in most hip-hop/R&B tracks. WaveShaper should enhance, not compete.

**Golden Rule:** Always de-ess vocals BEFORE applying distortion. Distortion amplifies sibilance.

## Lead Vocals: Warm Presence

### The Challenge
Lead vocals need to command attention without harshness or sibilance issues.

### Settings for Warm Lead Vocals
- **Mode:** Unipolar (even harmonics = warmth)
- **Curve:** Soft S-curve
- **Pre:** +4 to +8dB
- **Mix:** 25-40%
- **Post:** -4 to -8dB
- **Oversample:** 4x
- **Chain Position:** After EQ, before compression

### Complete Vocal Chain
```
Input → High-Pass (80Hz) → EQ (presence boost 3-5kHz) → 
De-Esser → WaveShaper → Compression (3:1) → 
EQ (carve space) → Limiter (safety)
```

### Technique
1. Start conservative (Pre: +4dB, Mix: 25%)
2. Increase until presence improves
3. Back off if sibilance increases
4. A/B with bypass to verify improvement

## Rap Vocals: Attitude and Edge

### The Challenge
Rap vocals need aggression and articulation without harshness.

### Settings for Rap Vocals
- **Mode:** Bipolar (aggression) OR Unipolar (warmth)
- **Curve:** Hard clip (Bipolar) or soft S (Unipolar)
- **Pre:** +6 to +10dB
- **Mix:** 30-45%
- **Post:** -6 to -10dB
- **Oversample:** 4x

### Aggressive Rap Recipe
- **Mode:** Bipolar
- **Pre:** +10dB
- **Mix:** 40%
- **Curve:** Hard clip
- **Character:** Gritty, in-your-face, modern

### Smooth Rap Recipe
- **Mode:** Unipolar
- **Pre:** +6dB
- **Mix:** 35%
- **Curve:** Soft S-curve
- **Character:** Warm, articulate, classic

## R&B/Soul Vocals: Smooth Intimacy

### The Challenge
R&B vocals should feel close and intimate without obvious processing.

### Settings for R&B Vocals
- **Mode:** Unipolar
- **Curve:** Very soft S-curve
- **Pre:** +3 to +6dB
- **Mix:** 20-35%
- **Post:** -3 to -6dB
- **Oversample:** 4x

### Technique
Focus on subtle enhancement. The saturation should be felt, not heard.

## Background Vocals: Blend and Texture

### The Challenge
Background vocals should support the lead without competing.

### Settings for Background Vocals
- **Mode:** Unipolar
- **Curve:** Soft saturation
- **Pre:** +5 to +8dB
- **Mix:** 40-60%
- **Post:** -5 to -8dB

### Technique
More saturation than lead vocals—helps them sit back in the mix while adding texture.

## Ad-libs: Creative Destruction

### The Challenge
Ad-libs can handle (and often benefit from) heavy creative distortion.

### Settings for Ad-libs
- **Mode:** Bipolar
- **Curve:** Hard clip or asymmetric
- **Pre:** +10 to +16dB
- **Mix:** 60-80%
- **Post:** -10 to -16dB
- **Oversample:** 4x

### Creative Techniques
**Double-Track Distortion:**
1. Main ad-lib: 100% wet, heavy distortion
2. Doubled ad-lib: Clean
3. Pan slightly different
4. Creates wide, aggressive ad-lib texture

## Vocal Saturation Recipes

### Presence Boost
- Pre: +6dB
- Mix: 30%
- Mode: Unipolar
- Use: Vocals not cutting through mix

### Vintage Warmth
- Pre: +4dB
- Mix: 25%
- Mode: Unipolar
- HQ: Enabled
- Use: Soul/R&B intimacy

### Modern Aggression
- Pre: +10dB
- Mix: 40%
- Mode: Bipolar
- Use: Trap rap, hype vocals

### Lo-Fi Texture
- Pre: +8dB
- Mix: 50%
- Mode: Unipolar
- Oversample: 2x
- Use: Chill-hop, bedroom pop

## Common Vocal Mistakes

### Mistake 1: No De-esser
**Problem:** Sibilance becomes unbearable
**Fix:** ALWAYS de-ess before WaveShaper

### Mistake 2: Too Much Distortion
**Problem:** Lyrics unintelligible
**Fix:** Keep Mix at 40% or below for leads

### Mistake 3: Wrong Mode
**Problem:** Harsh, fatiguing vocals
**Fix:** Use Unipolar for warmth

### Mistake 4: Ignoring Oversampling
**Problem:** Harsh high-end artifacts
**Fix:** Use 4x minimum

### Mistake 5: Post-Gain Mismatch
**Problem:** Cannot A/B accurately
**Fix:** Match processed/unprocessed loudness

## Advanced Vocal Techniques

### Formant Shifting with Asymmetry
**Goal:** Change vocal character without pitch shift

**Method:**
1. Bipolar mode
2. Different curves for positive/negative
3. Adjust Pre gain to taste
4. Creates "vowel shift" effect

### Frequency-Specific Saturation
**Goal:** Distort only specific vocal ranges

**Method:**
1. Use Maximus or multi-band splitter
2. Distort only mid-range (presence)
3. Keep lows and highs clean
4. Maximum clarity with added character

### Dynamic Saturation
**Goal:** Different distortion for different vocal intensities

**Method:**
1. Automate Pre gain
2. More saturation on quiet parts
3. Less on loud/screamed parts
4. Balances vocal dynamics

## Testing Your Vocal Saturation

### Intelligibility Test
1. Play vocal in mix
2. Can you understand every word?
3. If not, reduce Mix or Pre gain

### Sibilance Test
1. Listen to S and T sounds
2. Should not be harsh or painful
3. If harsh, add de-esser or reduce drive

### Context Test
1. Solo vocal: sounds great
2. In mix: disappears?
3. May need more presence (increase Pre or Mix)

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
