# 808 Saturation Masterclass

## The Goal

Make 808s audible on small speakers (phones, earbuds) while maintaining sub-bass impact on systems that can reproduce it.

[SRC: IL-MAN] WaveShaper adds upper harmonics to 808s that create the perception of bass even on speakers that cannot reproduce the fundamental frequency.

## Why 808s Need Distortion

### The Physics Problem
- 808 fundamental: 30-60Hz
- Phone speaker response: Often rolls off below 200Hz
- Result: 808s disappear on phones

### The WaveShaper Solution
Add harmonics (60Hz, 90Hz, 120Hz, 180Hz...) that phones CAN reproduce.

```
Fundamental:  ████████  (40Hz - inaudible on phones)
2nd Harmonic:    ████████  (80Hz - barely audible)
3rd Harmonic:      ████████  (120Hz - audible!)
5th Harmonic:          ████████  (200Hz - clear!)
```

## The Perfect 808 Saturation Chain

### Step 1: Clean Up
**Before WaveShaper:**
- High-pass at 25-30Hz (remove rumble)
- Cut 200-400Hz mud if needed
- Boost 60-100Hz for body (optional)

### Step 2: WaveShaper Settings
**For Warm, Musical 808s:**
- **Mode:** Unipolar (even harmonics = warmth)
- **Curve:** Soft S-curve
- **Pre:** +8 to +12dB
- **Mix:** 50-70%
- **Post:** -8 to -12dB
- **Oversample:** 4x
- **Center:** Enabled

### Step 3: Post-Processing
**After WaveShaper:**
- Compression (glue the saturation)
- EQ (cut any harshness added by distortion)
- Limiter (control peaks)

## Three 808 Saturation Recipes

### Recipe 1: Warm Trap 808
Best for: Modern trap, melodic hip-hop
- **Mode:** Unipolar
- **Pre:** +10dB
- **Mix:** 60%
- **Curve:** Soft S-curve
- **Sound:** Present but warm, translates everywhere

### Recipe 2: Hard 808
Best for: Hard trap, drill
- **Mode:** Unipolar (or Bipolar for extra edge)
- **Pre:** +14dB
- **Mix:** 70%
- **Curve:** Hard clip
- **Sound:** Aggressive, distorted character

### Recipe 3: Subtle 808
Best for: R&B, soul, boom bap
- **Mode:** Unipolar
- **Pre:** +6dB
- **Mix:** 45%
- **Curve:** Gentle S-curve
- **Sound:** Natural enhancement, barely noticeable

## Common 808 Mistakes

### Mistake 1: Hard Clipping
**Problem:** Removes low-end punch
**Fix:** Use soft S-curve, not hard clip

### Mistake 2: 100% Mix
**Problem:** Loses original sub impact
**Fix:** Blend 50-70% to keep the fundamental

### Mistake 3: Bipolar Mode
**Problem:** Can cause phase issues in low-end
**Fix:** Use Unipolar unless you want aggressive distortion

### Mistake 4: No Oversampling
**Problem:** Aliasing creates harsh artifacts
**Fix:** Use 4x minimum

### Mistake 5: Too Much Distortion
**Problem:** 808 becomes mushy, loses definition
**Fix:** If you cannot hear the note, reduce Pre gain

## Advanced Techniques

### Parallel 808 Distortion
1. **Duplicate the 808 track**
2. **Original track:** Keep clean (100% sub)
3. **Duplicate track:** Heavy distortion (100% wet, no Mix)
4. **High-pass the distorted layer** at 100-150Hz
5. **Blend to taste**

**Why This Works:** Complete separation of sub and harmonics. Maximum control.

### Multi-Band Distortion
1. **Split 808 into bands** (use Maximus or similar)
2. **Sub band (30-80Hz):** Clean, no distortion
3. **Mid band (80-200Hz):** Light saturation
4. **High band (200Hz+):** Heavy saturation
5. **Blend bands**

**Why This Works:** Precise control over what gets distorted.

### Dynamic Distortion
- **Automate Pre gain:** More saturation on longer notes
- **Automate Mix:** Less distortion during busy sections
- **Sidechain to kick:** Distortion pumps with the beat

## Testing Your 808 Saturation

### Phone Test
1. Bounce mix
2. Play on phone speaker
3. Can you hear the 808 melody?
4. If yes, your saturation is working

### Car Test
1. Play in car with subwoofer
2. Is the sub too overwhelming?
3. Adjust Mix percentage accordingly

### Mono Test
1. Collapse mix to mono
2. Does 808 disappear?
3. If yes, check for phase issues (mono low-end BEFORE WaveShaper)

## Troubleshooting

### 808 Sounds Weak
- Increase Pre gain (+2-4dB)
- Increase Mix percentage
- Check for conflicting frequencies in other instruments

### 808 Sounds Harsh
- Switch to Unipolar mode
- Use softer curve
- Enable 4x+ oversampling

### 808 Disappears on Phones
- Increase Pre gain for more harmonics
- Check Mix is at least 50%
- Ensure you are not high-passing too aggressively

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
