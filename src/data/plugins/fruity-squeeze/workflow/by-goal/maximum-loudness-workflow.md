# Maximum Loudness Workflow

## Goal
Achieve competitive loudness for mastering or mix bus processing without destroying dynamics or creating excessive distortion.

---

## Prerequisites
- Well-balanced mix with good headroom (-6 dB or more)
- No clipping on master bus
- Proper gain staging throughout mix

---

## Step-by-Step Workflow

### 1. Insert Fruity Squeeze on Master Bus
- Place after EQ but before limiter (if using one)
- Bypass initially to establish baseline

### 2. Set Crossover Points
- **Low/Mid Crossover**: 100–150 Hz
  - Why: Isolates bass for independent heavy compression
- **Mid/High Crossover**: 2.5–3 kHz
  - Why: Separates body from presence/air

### 3. Configure Low Band (Bass)
1. **Threshold**: Start at -12 dB
2. **Ratio**: 6:1–8:1
3. **Volume**: +2 to +4 dB
4. Listen: Bass should be tight, controlled, not boomy

**Why heavy low compression?**
- Bass frequencies contain massive energy
- Compressing them frees headroom for other elements
- Creates perceived loudness without actually increasing peak level

### 4. Configure Mid Band (Body/Presence)
1. **Threshold**: -12 to -15 dB
2. **Ratio**: 4:1–6:1
3. **Volume**: +1 to +3 dB
4. Listen: Mids should be dense, present, not thin

**Why moderate mid compression?**
- Most musical information lives here
- Too much = lifeless, too little = inconsistent
- Adds density and "glue"

### 5. Configure High Band (Clarity/Air)
1. **Threshold**: -15 to -18 dB
2. **Ratio**: 2:1–4:1
3. **Volume**: 0 to +2 dB
4. Listen: Highs should be controlled but not dull

**Why light high compression?**
- Over-compressed highs = harshness and fatigue
- High frequencies need air and space
- Transparency is key here

### 6. Adjust Input Level
- Start at 0 dB
- Increase to +1 to +3 dB for extra drive/warmth
- Don't exceed +4 dB unless you want aggressive distortion

### 7. Set Output Level
1. Check output meter
2. Adjust output level to match input level (for fair comparison)
3. Bypass and A/B compare
4. Aim for 2–4 dB louder than bypassed signal

### 8. Fine-Tune Per Band
**Solo each band and listen:**
- **Low**: Should be tight, punchy, controlled
- **Mid**: Should have body and density
- **High**: Should have clarity without harshness

**Adjust volume knobs to taste:**
- More bass? Boost low volume
- More presence? Boost mid volume
- Brighter? Boost high volume

### 9. Check for Artifacts
Listen for:
- ❌ Pumping/breathing (shouldn't happen with waveshaper, but check anyway)
- ❌ Excessive distortion (especially in mids/highs)
- ❌ Loss of transients (kick/snare punch)
- ❌ Muddiness (too much low-mid compression)

### 10. Compare Bypassed vs. Processed
1. Loop a representative section
2. Bypass Fruity Squeeze
3. Match perceived loudness (turn down monitor if needed)
4. Listen for:
   - ✅ Increased density
   - ✅ Better tonal balance
   - ✅ Louder perceived level
   - ❌ Loss of dynamics (if too much, reduce ratios)

### 11. Optional: Add Limiter After
- If still not loud enough, add a limiter after Fruity Squeeze
- Fruity Limiter or Maximus works well
- Set ceiling to -0.3 dB
- Gain reduction should be minimal (2–3 dB max)

---

## Recommended Settings (Starting Point)

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 120 Hz |
| Mid/High Crossover | 2.8 kHz |
| Low Threshold | -12 dB |
| Low Ratio | 7:1 |
| Low Volume | +3 dB |
| Mid Threshold | -13 dB |
| Mid Ratio | 5:1 |
| Mid Volume | +2 dB |
| High Threshold | -16 dB |
| High Ratio | 3:1 |
| High Volume | +1 dB |
| Input Level | +1 dB |
| Output Level | +2 dB |
| Dry/Wet | 100% |

---

## Common Mistakes to Avoid

❌ **Over-compressing highs** → Creates fatigue and harshness  
❌ **Threshold too low** → Squashes everything, no dynamics left  
❌ **Forgetting volume compensation** → Processed sounds quieter than bypass  
❌ **Not checking in context** → Solo sounds great, mix sounds squashed  
❌ **Ignoring crossover points** → Generic settings don't fit your mix  

---

## Genre-Specific Adjustments

### EDM/Electronic
- More aggressive low compression (10:1+)
- Higher input gain (+3 to +5 dB)
- Brighter high band (+3 dB volume)

### Hip-Hop/Trap
- Heavy low compression for 808s (8:1–10:1)
- Lower low/mid crossover (80–100 Hz)
- Moderate mid compression for vocals (5:1)

### Rock/Pop
- Balanced compression across all bands (4:1–6:1)
- Standard crossovers (150 Hz, 2.5 kHz)
- Light high compression to preserve cymbals

### Acoustic/Jazz
- Gentle ratios (2:1–4:1)
- Higher thresholds (-18 dB or higher)
- Minimal input gain (0 to +1 dB)

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Not loud enough | Increase ratios, lower thresholds, boost volumes |
| Sounds distorted | Reduce input gain, lower ratios, raise thresholds |
| Bass too boomy | Raise low/mid crossover to 150–200 Hz |
| Lacks clarity | Boost high volume or lower mid/high crossover |
| Sounds lifeless | Reduce ratios, raise thresholds, use dry/wet blend |
| Harsh highs | Reduce high volume or increase high threshold |

---

## Final Check

Before bouncing:
1. ✅ A/B with reference track of similar genre
2. ✅ Check on multiple playback systems (headphones, speakers, phone)
3. ✅ Verify no clipping on output meter
4. ✅ Confirm dynamics aren't completely destroyed (some transients should remain)
5. ✅ Listen to full track from start to finish

---

## Advanced Tip: Parallel Processing

For even more control:
1. Duplicate master bus to two channels
2. Process one with aggressive Fruity Squeeze settings
3. Leave other clean
4. Blend to taste (usually 30–50% compressed)

This preserves more natural dynamics while still adding loudness and density.
