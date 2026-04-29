# Lead Vocal Workflow

## Vocals in Hip-Hop and R&B

Vocals are the most important element. WaveShaper should enhance presence and character while maintaining complete intelligibility.

[SRC: IL-MAN] Gentle saturation adds harmonics that help vocals cut through dense productions without harshness.

## The Vocal Challenge

### The Problem
Vocals need to:
- Cut through the mix (presence)
- Sound warm and intimate (character)
- Remain 100% intelligible (clarity)
- Handle dynamic range (control)

### WaveShaper Solutions
- **Presence boost:** Harmonics in upper-mids
- **Warmth:** Even harmonics from Unipolar mode
- **Clarity:** Conservative settings (low Mix)
- **Control:** Proper gain staging

**CRITICAL RULE:** Always de-ess vocals BEFORE WaveShaper. Distortion amplifies sibilance.

## Standard Lead Vocal Workflow

### Step 1: Pre-Processing (Before WaveShaper)
1. **High-pass** at 80-100Hz (remove rumble)
2. **Cut 200-400Hz** if muddy
3. **Boost 2-5kHz** for presence (optional)
4. **De-esser** (ESSENTIAL - must come before distortion)

### Step 2: WaveShaper Settings

**For Warm Lead Vocals:**
```
Mode:       Unipolar (even harmonics = warmth)
Curve:      Soft S-curve
Pre:        +4 to +8dB
Mix:        25-40%
Post:       -4 to -8dB
Oversample: 4x
Center:     Enabled
```

**Why Unipolar?** Even harmonics are musical and forgiving on vocals. Bipolar can add harshness.

### Step 3: Post-Processing (After WaveShaper)
1. **Compression** (3:1 to 6:1, control dynamics)
2. **EQ** (carve space, de-ess if needed)
3. **Optional de-esser** (if sibilance increased)
4. **Limiter** (safety, prevent peaks)

## Complete Vocal Chain

```
Input Vocal
    ↓
High-Pass (80-100Hz)
    ↓
EQ (presence boost 2-5kHz, cut mud 200-400Hz)
    ↓
De-esser (CRITICAL - must be before WaveShaper)
    ↓
WaveShaper (Unipolar, Soft S-curve, Pre: +4-8dB, Mix: 25-40%)
    ↓
Compression (3:1-6:1 ratio)
    ↓
EQ (fine-tuning, de-ess if needed)
    ↓
Optional: Second de-esser
    ↓
Limiter (safety)
    ↓
Output: Present, warm, clear vocal
```

## Vocal Recipes by Genre

### Rap/Hip-Hop Vocals
- **Mode:** Unipolar (warmth) OR Bipolar (aggression)
- **Pre:** +6 to +10dB
- **Mix:** 30-45%
- **Curve:** Soft S-curve (Unipolar) or hard clip (Bipolar)
- **Character:** Presence and attitude

### R&B/Soul Vocals
- **Mode:** Unipolar
- **Pre:** +3 to +6dB
- **Mix:** 20-35%
- **Curve:** Very soft S-curve
- **Character:** Smooth, intimate, sophisticated

### Pop Vocals
- **Mode:** Unipolar
- **Pre:** +4 to +8dB
- **Mix:** 25-40%
- **Curve:** Soft S-curve
- **Character:** Clear, present, radio-ready

### Lo-Fi/Alt Vocals
- **Mode:** Unipolar
- **Pre:** +6 to +10dB
- **Mix:** 40-60%
- **Curve:** Gentle saturation
- **Character:** Warm, textured, "imperfect"

## Background Vocals

### Settings
- **Mode:** Unipolar
- **Pre:** +5 to +8dB
- **Mix:** 40-60%
- **Reason:** More saturation helps them sit back in the mix

### Technique
Background vocals can take more distortion than leads:
- Adds texture and interest
- Helps them blend rather than compete
- Creates "choir" effect

## Ad-libs and Extras

### Settings
- **Mode:** Bipolar (creative destruction)
- **Pre:** +10 to +16dB
- **Mix:** 60-80%
- **Reason:** Ad-libs can be aggressive and weird

### Creative Techniques
**Double-Track Distortion:**
1. Main ad-lib: Clean or light saturation
2. Double: Heavy distortion, 100% wet
3. Pan slightly different
4. Creates wide, textured ad-lib layer

## Common Vocal Mistakes

### Mistake 1: No De-esser
**Problem:** Sibilance becomes unbearable
**Solution:** ALWAYS de-ess before WaveShaper

### Mistake 2: Too Much Distortion
**Problem:** Lyrics unintelligible
**Solution:** Keep Mix at 40% or below for leads

### Mistake 3: Bipolar Mode
**Problem:** Harsh, fatiguing vocals
**Solution:** Use Unipolar for warmth and smoothness

### Mistake 4: Ignoring Oversampling
**Problem:** Harsh high-frequency artifacts
**Solution:** Use 4x minimum

### Mistake 5: Wrong Chain Order
**Problem:** Distortion before de-esser = disaster
**Solution:** De-esser must come FIRST

## Advanced Vocal Techniques

### Frequency-Specific Saturation
1. **Use multi-band splitter** (Maximus, etc.)
2. **Distort only the mid-range** (presence area)
3. **Keep lows clean** (no rumble distortion)
4. **Keep highs controlled** (prevent sibilance)

### Formant Shifting
1. **Bipolar mode**
2. **Different curves** for positive/negative
3. **Adjust Pre gain**
4. Creates "vowel character" changes

### Dynamic Saturation
- **Automate Pre gain**
- More saturation on quiet passages
- Less on loud/screamed sections
- Balances vocal dynamics

### Parallel Vocal Distortion
1. **Create parallel bus**
2. **Heavy distortion** on bus (100% wet)
3. **High-pass the bus** at 200Hz
4. **Blend under** main vocal
5. Adds presence without affecting low-end

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

### Fatigue Test
1. Listen for 60 seconds
2. Do ears tire?
3. If yes, use Unipolar mode, reduce drive

## Vocal Workflow Summary

```
Input Vocal
    ↓
High-pass 80-100Hz
    ↓
EQ (presence boost, mud cut)
    ↓
DE-ESSER (CRITICAL FIRST STEP)
    ↓
WaveShaper (Unipolar, Soft S-curve, Pre: +4-8dB, Mix: 25-40%)
    ↓
Compression (3:1-6:1, control dynamics)
    ↓
EQ (fine-tuning)
    ↓
Optional: Second de-esser
    ↓
Limiter (safety)
    ↓
Output: Professional vocal with presence and warmth
```

## Troubleshooting

### Vocal Sounds Harsh
- Switch to Unipolar mode
- Enable 4x+ oversampling
- Reduce Pre gain by 2-4dB

### Vocal Sounds Muddy
- High-pass higher (100Hz)
- Cut 200-400Hz more aggressively
- Check Center is enabled

### Sibilance Increased
- De-ess BEFORE WaveShaper (must be in chain)
- Reduce Pre gain
- Add second de-esser after WaveShaper

### Vocal Not Cutting Through
- Increase Pre gain (+2-4dB)
- Increase Mix to 35-40%
- Boost 3-5kHz in Post-EQ

---

**Instrument:** Lead Vocal  
**Version:** 1.0  
**Last Updated:** 2026-02-03
