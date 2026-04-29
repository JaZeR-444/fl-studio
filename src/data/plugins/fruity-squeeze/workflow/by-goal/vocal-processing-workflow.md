# Vocal Processing Workflow

## Goal
Control vocal dynamics, tame sibilance, and add presence using Fruity Squeeze's multiband waveshaping.

---

## When to Use Fruity Squeeze on Vocals

**Good for:**
- ✅ De-essing (controlling harsh "s" sounds)
- ✅ Adding edge and presence via harmonic distortion
- ✅ Fast sibilance control
- ✅ Aggressive vocal compression (rap, EDM vocals)

**Not ideal for:**
- ❌ Transparent, natural vocal compression (use standard compressor)
- ❌ Smooth, musical dynamics control
- ❌ Subtle envelope shaping

---

## Step-by-Step Workflow

### 1. Prepare Your Vocal
- Remove DC offset if present
- Apply high-pass filter (80–100 Hz) to remove rumble
- Ensure no clipping or distortion in recording

### 2. Insert Fruity Squeeze
- Place after EQ and before reverb/delay
- Can be used in series with traditional compressor:
  - Standard compressor → smooth dynamics
  - Fruity Squeeze → de-essing and character

### 3. Set Crossover Points

**For De-Essing (Primary Goal)**
- **Low/Mid Crossover**: 300–400 Hz
  - Keeps body and warmth together
- **Mid/High Crossover**: 4.5–6 kHz
  - Isolates sibilance range

**For General Compression**
- **Low/Mid Crossover**: 250–300 Hz
  - Separates chest resonance from presence
- **Mid/High Crossover**: 2.5–3.5 kHz
  - Separates body from air/brilliance

### 4. Configure Low Band
**For De-Essing Setup:**
- **Threshold**: -∞ (bypass)
- **Ratio**: 1:1
- **Volume**: 0 dB

**For General Compression:**
- **Threshold**: -∞ (bypass) or -20 dB (very light)
- **Ratio**: 2:1–3:1
- **Volume**: 0 dB

**Why bypass/light on lows?**
- Vocal fundamentals are mostly in mid range
- Over-compressing lows creates muddiness

### 5. Configure Mid Band (Presence/Body)

**For De-Essing Setup:**
- **Threshold**: -18 to -20 dB
- **Ratio**: 2:1–3:1
- **Volume**: 0 to +1 dB

**For General Compression:**
- **Threshold**: -15 to -18 dB
- **Ratio**: 3:1–5:1
- **Volume**: +1 to +2 dB

**Why compress mids?**
- Most vocal energy lives here
- Creates even, present vocal tone
- Adds slight harmonic richness

### 6. Configure High Band (Sibilance Control)

**For De-Essing Setup:**
- **Threshold**: -8 to -12 dB
- **Ratio**: 6:1–10:1
- **Volume**: -2 to -3 dB

**For General Compression:**
- **Threshold**: -15 to -18 dB
- **Ratio**: 4:1–6:1
- **Volume**: 0 to +1 dB

**Why aggressive high compression?**
- Sibilance peaks are much louder than vocal body
- High ratio = de-essing effect
- Lower volume reduces overall harshness

### 7. Adjust Input and Output
- **Input**: 0 to +1 dB (don't overdrive vocals)
- **Output**: Match to bypass level for comparison
- Higher input adds grit (good for aggressive rap/EDM vocals)

### 8. Fine-Tune with Dry/Wet

**For transparent de-essing:**
- Set dry/wet to 60–80%
- Preserves natural vocal dynamics

**For aggressive compression:**
- Keep dry/wet at 100%
- Full processing for maximum control

### 9. Listen and Adjust
**What to listen for:**
- ✅ Even loudness across phrases
- ✅ Reduced sibilance (not completely removed)
- ✅ Clear, present vocal
- ❌ Lisp or muffled "s" sounds (too much high compression)
- ❌ Thin or hollow tone (too much mid compression)

### 10. A/B Compare
1. Bypass Fruity Squeeze
2. Listen to sibilant phrases ("sister," "sing," "six")
3. Re-enable and compare
4. Sibilance should be tamed but still audible

---

## Recommended Settings

### De-Essing Setup

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 350 Hz |
| Mid/High Crossover | 5.5 kHz |
| Low Threshold | -∞ (bypass) |
| Low Ratio | 1:1 |
| Low Volume | 0 dB |
| Mid Threshold | -18 dB |
| Mid Ratio | 2:1 |
| Mid Volume | +1 dB |
| High Threshold | -10 dB |
| High Ratio | 8:1 |
| High Volume | -2 dB |
| Input Level | 0 dB |
| Output Level | 0 dB |
| Dry/Wet | 70% |

### General Vocal Compression

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 280 Hz |
| Mid/High Crossover | 3 kHz |
| Low Threshold | -∞ (bypass) |
| Low Ratio | 1:1 |
| Low Volume | 0 dB |
| Mid Threshold | -15 dB |
| Mid Ratio | 4:1 |
| Mid Volume | +2 dB |
| High Threshold | -15 dB |
| High Ratio | 5:1 |
| High Volume | +1 dB |
| Input Level | 0 dB |
| Output Level | 0 dB |
| Dry/Wet | 100% |

### Aggressive Rap/EDM Vocal

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 300 Hz |
| Mid/High Crossover | 3.5 kHz |
| Low Threshold | -∞ (bypass) |
| Low Ratio | 1:1 |
| Low Volume | 0 dB |
| Mid Threshold | -10 dB |
| Mid Ratio | 6:1 |
| Mid Volume | +3 dB |
| High Threshold | -12 dB |
| High Ratio | 6:1 |
| High Volume | +2 dB |
| Input Level | +2 dB |
| Output Level | 0 dB |
| Dry/Wet | 100% |

---

## Common Vocal Issues and Solutions

### Problem: Sibilance Too Harsh

**Solution:**
- Lower high band volume (-3 to -4 dB)
- Increase high band ratio (8:1–10:1)
- Lower mid/high crossover to 4.5–5 kHz
- Increase high threshold to compress less

### Problem: Vocal Sounds Lifeless

**Solution:**
- Reduce mid band ratio (2:1–3:1)
- Raise mid threshold (-20 dB or higher)
- Use dry/wet blend (60–80%)
- Lower input gain to reduce distortion

### Problem: Vocal Lacks Presence

**Solution:**
- Boost mid band volume (+2 to +3 dB)
- Lower mid band threshold (-12 to -15 dB)
- Increase mid band ratio slightly (5:1)

### Problem: Thin or Hollow Sound

**Solution:**
- Don't compress low band (set to -∞)
- Raise low/mid crossover to 300–400 Hz
- Reduce mid compression (higher threshold or lower ratio)

### Problem: Muffled "S" Sounds (Over-De-essing)

**Solution:**
- Raise high band threshold (-15 dB or higher)
- Reduce high band ratio (4:1–6:1)
- Increase high band volume (0 dB or higher)
- Use dry/wet blend (50–60%)

---

## Signal Chain Recommendation

**Optimal order for vocal processing:**
1. High-pass filter (EQ)
2. De-esser (Fruity Squeeze or dedicated)
3. Standard compressor (smooth dynamics)
4. EQ (tone shaping)
5. Saturation/exciter (optional)
6. Reverb/Delay (sends)

**Alternate order (Fruity Squeeze for character):**
1. High-pass filter
2. Standard compressor
3. Fruity Squeeze (de-essing + character)
4. EQ
5. Reverb/Delay

---

## Genre-Specific Tips

### Pop Vocals
- Light-to-moderate compression (3:1–5:1)
- Standard crossovers (280 Hz, 3 kHz)
- Transparent settings, minimal distortion

### Rap/Hip-Hop
- Moderate-to-heavy compression (5:1–8:1)
- Boost mid volume for presence (+2 to +3 dB)
- Input gain +1 to +2 dB for edge

### EDM/Electronic
- Aggressive compression (6:1–10:1)
- Heavy de-essing (high ratio 8:1+)
- Input gain +2 to +4 dB for distortion/grit

### Rock/Metal
- Moderate compression (4:1–6:1)
- Control harshness with high band
- Preserve aggression (don't over-compress)

---

## Workflow Checklist

Before finalizing vocal:
- ✅ De-essing effective but not excessive
- ✅ Even loudness across all phrases
- ✅ Natural sibilance still present
- ✅ Vocal sits well in mix (not too loud or quiet)
- ✅ No pumping or breathing artifacts
- ✅ Harmonic distortion is musical (if desired)
- ✅ A/B compared with bypass

---

## Advanced Tip: Dual-Stage Processing

For maximum control:
1. **First stage**: Traditional compressor (e.g., Fruity Compressor)
   - Smooth, transparent dynamic control
   - Attack: 10–30 ms, Release: 100–200 ms
   - Ratio: 3:1–4:1
2. **Second stage**: Fruity Squeeze
   - De-essing only (high band compression)
   - Add character with input gain

This combines the musicality of traditional compression with the precision of multiband de-essing.
