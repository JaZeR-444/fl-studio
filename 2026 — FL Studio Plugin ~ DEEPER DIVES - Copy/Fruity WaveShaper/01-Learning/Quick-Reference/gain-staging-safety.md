# Gain Staging Safety Guide

## The Golden Rule of Distortion

**Input + Curve = Output.** If any stage clips unexpectedly, your mix suffers. Proper gain staging through WaveShaper prevents disasters.

[SRC: IL-MAN] Pre and Post gain controls allow proper gain staging through the waveshaping process.

## The Signal Flow

```
Input → [Pre Gain] → [Transfer Curve] → [Post Gain] → Output
        (Drive)         (Distortion)       (Compensate)
```

## Stage-by-Stage Safety

### Stage 1: Input Level (Before WaveShaper)

**Check:** Is your input peaking near -6dB to -12dB?

**Safety Rules:**
- Never feed clipped audio into WaveShaper
- If channel meter shows red, reduce level before the plugin
- Leave headroom for Pre gain amplification

**How to Check:**
1. Bypass WaveShaper
2. Monitor channel meter
3. Adjust input gain if needed
4. Re-enable WaveShaper

### Stage 2: Pre Gain (Driving the Curve)

**Check:** How much are you amplifying?

**Safety Tiers:**

| Pre Gain | Risk Level | Typical Use |
|----------|------------|-------------|
| 0 to +6dB | Safe | Subtle saturation |
| +6 to +12dB | Moderate | Standard distortion |
| +12 to +18dB | High | Aggressive processing |
| +18 to +24dB | Extreme | Creative destruction |

**Safety Rules:**
- Start at 0dB, increase gradually
- Watch the channel meter after WaveShaper
- Higher Pre gain = more distortion = need more Post gain reduction

[SRC: IL-MAN] Pre gain increases signal level before the transfer function, controlling how much distortion is applied.

### Stage 3: Transfer Curve (The Distortion)

**Check:** Is your curve design reasonable?

**Safety Checks:**
- Ensure curve passes through (0,0) for unity gain at low levels
- Avoid completely flat curves (signal kills)
- Extreme curves need higher oversampling

**Common Mistakes:**
- **Mistake:** Flat line at -1.0 = silent negative signal
- **Fix:** Ensure minimum -0.8 to -1.0 output range

### Stage 4: Post Gain (Output Compensation)

**Check:** Is output level reasonable?

**The Compensation Formula:**
```
If Pre = +12dB → Post should be approximately -8 to -12dB
If Pre = +6dB → Post should be approximately -4 to -6dB
```

**Safety Rules:**
- Match processed level to unprocessed for A/B comparison
- Never exceed 0dB on master bus
- Use Post gain to prevent channel/master clipping

[SRC: IL-MAN] Post gain adjusts output level to compensate for distortion-induced level changes.

### Stage 5: Mix Control (Parallel Safety)

**Check:** Is the blend appropriate?

**Safety Guidelines:**

| Mix % | Risk | Use Case |
|-------|------|----------|
| 100% | High | Effect is dominant—ensure it sounds good solo |
| 50-70% | Moderate | Parallel processing—balance with dry |
| 20-40% | Safe | Enhancement—dry signal dominates |
| 0-20% | Very Safe | Subtle spice—barely noticeable |

## Complete Gain Staging Checklist

Before finalizing any WaveShaper setting:

- [ ] Input level healthy (-12dB to -6dB before plugin)
- [ ] Pre gain appropriate for desired distortion
- [ ] Curve passes through (0,0)
- [ ] Oversampling adequate for curve intensity
- [ ] Post gain compensates for distortion level increase
- [ ] Output level matches reference (dry signal)
- [ ] Mix percentage appropriate for context
- [ ] Master bus not clipping with new settings
- [ ] No unwanted DC offset (Center enabled)

## Aliasing Prevention Safety

### When Aliasing Occurs
- Hard clipping with high drive
- Stepped/bitcrush curves
- No oversampling enabled
- High-frequency sources (>5kHz)

### Safety Settings

| Distortion Intensity | Minimum Oversampling | CPU Impact |
|---------------------|---------------------|------------|
| Subtle (S-curve, low drive) | Off or 2x | Low |
| Moderate (soft clip, medium drive) | 2x or 4x | Medium |
| Heavy (hard clip, high drive) | 4x or 8x | High |
| Extreme (bitcrush, max drive) | 8x or 16x | Very High |

[SRC: IL-MAN] Oversampling increases internal processing rate to reduce aliasing artifacts.

## Hip-Hop/R&B Specific Safety

### 808s and Sub Bass
- **Danger:** Hard clipping removes low-end punch
- **Safety:** Use soft S-curve, Unipolar mode
- **Pre Gain:** +6 to +12dB max
- **Mix:** Keep at 40-60% to preserve original sub

### Drums
- **Danger:** Over-distortion = mushy transients
- **Safety:** Bipolar mode for punch, but watch mix level
- **Pre Gain:** +8 to +16dB
- **Mix:** 50-70% for aggression, less for subtlety

### Vocals
- **Danger:** Distortion causes sibilance and harshness
- **Safety:** De-esser BEFORE WaveShaper, low mix
- **Pre Gain:** +3 to +8dB
- **Mix:** 20-35% for grit without losing intelligibility

### Mix Bus
- **Danger:** Cumulative distortion across all tracks
- **Safety:** Very conservative settings, Unipolar only
- **Pre Gain:** +2 to +6dB max
- **Mix:** 15-25% maximum

## Emergency Troubleshooting

### Problem: Output Suddenly Clipping
**Solution:** Reduce Post gain by 6-12dB immediately

### Problem: Sound Disappeared
**Solution:** Check if curve has flat section at bottom; redraw with proper unity gain

### Problem: Harsh, Digital Sound
**Solution:** Enable 4x+ oversampling, reduce Pre gain, or switch to Unipolar

### Problem: Low End Lost
**Solution:** Check Center is enabled, reduce drive, use softer curve

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
