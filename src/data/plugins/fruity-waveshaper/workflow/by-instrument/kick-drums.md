# Kick Drum Workflow

## Kicks in Hip-Hop and Electronic Music

Kicks provide the rhythmic foundation and transient punch. WaveShaper can enhance attack, control sustain, and add character without losing impact.

[SRC: IL-MAN] Bipolar mode with asymmetric curves preserves transient bite while controlling the body of kick drums.

## The Kick Challenge

### The Problem
Kicks need to:
- Punch through the mix (attack)
- Support the low-end (body)
- Not conflict with 808s/bass
- Translate on all systems

### WaveShaper Solutions
- **Transient enhancement:** Hard clip positive half
- **Sustain control:** Softer curve on negative half
- **Character addition:** Harmonics that cut through

## Standard Kick Workflow

### Step 1: Pre-Processing
**Before WaveShaper:**
1. **Tune the kick** to match the key
2. **High-pass** at 30-40Hz (remove useless sub)
3. **Cut 300-400Hz** if boxy
4. **Optional:** Boost 60-80Hz for weight

### Step 2: WaveShaper Settings

**For Punchy Kicks:**
```
Mode:       Bipolar (asymmetric = bite)
Curve:      Hard clip positive, soft negative
Pre:        +12 to +16dB
Mix:        60-75%
Post:       -12 to -16dB
Oversample: 4x-8x
Center:     Enabled
```

**Why Bipolar?** Asymmetric distortion preserves transient attack while shaping the body.

### Step 3: Post-Processing
**After WaveShaper:**
1. **Compression** (control the enhanced attack)
2. **EQ** (carve space for 808s below)
3. **Transient shaper** (if needed)
4. **Sidechain** to 808 (or vice versa)

## Asymmetric Kick Curve Design

### Positive Half (Attack)
- **Hard clip** at 0.7-0.8 threshold
- Sharp transition
- Emphasizes the "click" and "punch"

### Negative Half (Sustain/Body)
- **Soft S-curve** or gentle saturation
- Gradual transition
- Controls the "boom" without removing it

### Why This Works
- **Positive = transient:** Hard clipping adds bite
- **Negative = sustain:** Soft curve maintains body
- Result: Punchy attack + controlled sustain

## Kick Recipes by Genre

### Trap Kicks
- **Mode:** Bipolar
- **Pre:** +14dB
- **Mix:** 70%
- **Curve:** Hard clip positive, moderate negative
- **Character:** Maximum punch, modern aggression

### Boom Bap Kicks
- **Mode:** Unipolar
- **Pre:** +8dB
- **Mix:** 55%
- **Curve:** Soft S-curve
- **Character:** Warm, vintage punch

### EDM Kicks
- **Mode:** Bipolar
- **Pre:** +16dB
- **Mix:** 75%
- **Curve:** Extreme hard clip
- **Oversample:** 8x
- **Character:** Maximum impact, cutting through synths

### Lo-Fi Kicks
- **Mode:** Unipolar
- **Pre:** +6dB
- **Mix:** 50%
- **Curve:** Gentle saturation
- **Oversample:** 2x
- **Additional:** Slight bitcrush on room mic
- **Character:** Warm, crushed, "vinyl"

## Kick and 808 Relationship

### The Frequency Conflict
- Kick: Typically 50-80Hz + click at 2-5kHz
- 808: Typically 40-60Hz + harmonics
- Problem: They occupy similar frequency ranges

### WaveShaper Solutions

**Option 1: Distort Kick, Keep 808 Clean**
- Kick gets bite from WaveShaper
- 808 provides the sub foundation
- Natural separation

**Option 2: Distort Both Differently**
- Kick: Bipolar, hard clip (transient)
- 808: Unipolar, soft S-curve (warmth)
- Different characters = separation

**Option 3: Parallel Distortion**
- Distort a parallel kick layer
- Blend with clean kick
- Control the amount of "click" vs "thud"

## Common Kick Mistakes

### Mistake 1: Too Much Distortion
**Problem:** Kick sounds like noise, loses definition
**Solution:** Reduce Mix to 60-70%, use softer curve

### Mistake 2: Destroying the Low-End
**Problem:** Hard clipping removes sub frequencies
**Solution:** Use asymmetric curve or reduce drive

### Mistake 3: Phase Issues with 808
**Problem:** Kick and 808 cancel each other
**Solution:** Sidechain kick to 808, or offset timing

### Mistake 4: No Oversampling
**Problem:** Digital artifacts on transient
**Solution:** Use 4x minimum, 8x for aggressive settings

## Advanced Kick Techniques

### Transient Isolation
1. **Hard clip threshold** at 0.6-0.7
2. Everything below = clean sustain
3. Everything above = enhanced transient
4. Blend with Mix control

### Layered Kick Distortion
1. **Sub layer (40-80Hz):** Clean, no distortion
2. **Click layer (2-5kHz):** Distorted for bite
3. **Body layer (100-200Hz):** Light saturation
4. **Blend all three**

### Dynamic Kick Distortion
- **Automate Pre gain:** More distortion on beat 1
- **Less distortion:** On off-beats or ghost notes
- Creates rhythmic variation

## Testing Your Kick Distortion

### Punch Test
1. Solo the kick
2. Bypass WaveShaper
3. Re-enable
4. Should hear more attack, not just volume

### Context Test
1. Play kick with 808
2. Do they complement or fight?
3. Adjust settings for separation

### System Test
1. Play on different systems
2. Does kick punch through everywhere?
3. If not, increase Pre gain or adjust curve

## Kick Workflow Summary

```
Input Kick
    ↓
Tuning and basic EQ
    ↓
High-pass 30-40Hz
    ↓
WaveShaper (Bipolar, Asymmetric, Pre: +12-16dB, Mix: 60-75%)
    ↓
Compression (control enhanced transient)
    ↓
EQ (carve space, boost click if needed)
    ↓
Sidechain to 808 (or 808 to kick)
    ↓
Output: Punchy kick that cuts through the mix
```

## Troubleshooting

### Kick Sounds Weak
- Increase Pre gain (+2-4dB)
- Check Mix is at least 60%
- Ensure curve emphasizes positive half

### Kick Sounds Harsh
- Use softer curve
- Switch to Unipolar mode
- Enable 8x oversampling

### Kick Conflicts with 808
- Sidechain one to the other
- EQ separation (kick higher, 808 lower)
- Different distortion settings

---

**Instrument:** Kick Drum  
**Version:** 1.0  
**Last Updated:** 2026-02-03
