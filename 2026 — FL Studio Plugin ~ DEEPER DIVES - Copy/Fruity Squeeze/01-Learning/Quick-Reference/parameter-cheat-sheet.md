# Fruity Squeeze - Parameter Cheat Sheet

## Core Parameters

### Squarize
- **Function:** Bit depth reduction amount
- **Range:** 0-100%
- **Effect:** Creates digital grit and "stepped" artifacts
- **Low (0-30%):** Subtle character, warm digital texture
- **Medium (30-70%):** Noticeable 8-bit degradation, retro vibe
- **High (70-100%):** Extreme digital crushing, aliasing artifacts
- **Pro Tip:** Start at 10-20% for drums, increase gradually to taste

### Preserve
- **Function:** Amount of original samples to keep
- **Range:** 0-100%
- **Effect:** Maintains clean transients and clarity
- **Low:** More processed content, aggressive distortion
- **High:** More original content, subtle enhancement
- **Pro Tip:** Keep at 50-70% for drums to maintain punch

### Impact
- **Function:** Amount of processed (distorted) samples to add
- **Range:** 0-100%
- **Effect:** Adds crushed/distorted character
- **Low:** Subtle enhancement
- **High:** Aggressive lo-fi distortion
- **Pro Tip:** Balance with Preserve for desired intensity

### Relation
- **Function:** Ratio between Preserve and Impact
- **Range:** Variable ratio control
- **Effect:** Fine-tunes the balance between clean and crushed
- **Left:** More Preserve relative to Impact
- **Right:** More Impact relative to Preserve
- **Pro Tip:** Adjust after setting Preserve/Impact for character fine-tuning

## Filter Section

### Frequency
- **Function:** Filter cutoff frequency
- **Range:** 20 Hz - 20 kHz
- **Low-Pass Mode:** Cuts highs, tames harshness
- **High-Pass Mode:** Cuts lows, cleans up muddiness
- **Pro Tip:** Use Post-LP to tame harsh aliasing from high Squarize

### Resonance (Res)
- **Function:** Emphasis at cutoff frequency
- **Range:** 0-100%
- **Effect:** Creates peak at filter cutoff
- **Low:** Smooth filtering
- **High:** Resonant peak, self-oscillation possible
- **Pro Tip:** Keep below 30% to avoid "whistling" artifacts

### Filter Position
- **Pre:** Filters BEFORE distortion
  - Use for: Tone shaping input signal
  - Effect: Distortion reacts to filtered signal
- **Post:** Filters AFTER distortion
  - Use for: Taming harsh artifacts
  - Effect: Cleans up processed signal
- **Pro Tip:** Use Post for most applications, Pre for creative tone shaping

## Mix & Output

### Mix
- **Function:** Dry/wet balance
- **Range:** 0% (dry) - 100% (wet)
- **Low:** Subtle parallel processing
- **100%:** Full effect replacement
- **Pro Tip:** Use 30-50% for parallel drum processing to maintain dynamics

### Gain
- **Function:** Output level compensation
- **Effect:** Adjusts final output volume
- **Pro Tip:** Bit reduction often reduces perceived loudness, compensate here

## Common Parameter Combinations

### Crunchy Drum Bus
```
Squarize: 15%
Preserve: 60%
Impact: 40%
Relation: Centered
Filter: Post-LP @ 10kHz, Res 10%
Mix: 35%
```

### Total 8-Bit Destruction
```
Squarize: 90%
Preserve: 20%
Impact: 80%
Relation: Favor Impact
Filter: Post-LP @ 8kHz, Res 5%
Mix: 100%
```

### Vintage Radio Effect
```
Squarize: 45%
Preserve: 30%
Impact: 70%
Relation: Favor Impact
Filter: Pre-BP @ 2.5kHz, Res 40%
Mix: 80%
```

### Subtle Lo-Fi Character
```
Squarize: 8%
Preserve: 80%
Impact: 20%
Relation: Favor Preserve
Filter: Post-LP @ 15kHz, Res 0%
Mix: 25%
```

### Industrial Bass Grit
```
Squarize: 35%
Preserve: 40%
Impact: 60%
Relation: Centered
Filter: Post-HP @ 80Hz, Res 15%
Mix: 60%
```

## Quick Troubleshooting

### Problem: Sound is too harsh/bright
- **Solution:** Lower Squarize, set Filter to Post-LP, reduce high frequencies

### Problem: Losing punch/transients
- **Solution:** Increase Preserve, lower Mix for parallel processing

### Problem: Whistling/ringing artifacts
- **Solution:** Lower Filter Resonance below 20%

### Problem: Sound is getting too quiet
- **Solution:** Increase Gain, check Mix slider isn't too low

### Problem: Too muddy/unclear
- **Solution:** Use Filter in Post-HP mode, reduce low-frequency Squarize

### Problem: Not enough character
- **Solution:** Increase Squarize and Impact, balance with Preserve

## Parameter Interaction Tips

1. **Squarize + Filter Position:** High Squarize creates aliasing; use Post-LP filtering
2. **Preserve + Impact:** These work together via Relation - balance is key
3. **Mix + Gain:** Lower Mix often requires higher Gain to match levels
4. **Resonance + Frequency:** High Res creates peaks; set Frequency carefully
5. **Impact + Filter Pre:** Pre-filtering changes what Impact processes

## Quick Reference Values

### For Drums
- Squarize: 10-25%
- Preserve: 50-70%
- Mix: 30-50% (parallel)

### For Synths
- Squarize: 15-40%
- Preserve: 40-60%
- Mix: 60-100%

### For Vocals
- Squarize: 5-15%
- Preserve: 70-85%
- Mix: 20-40% (parallel)

### For Bass
- Squarize: 10-30%
- Preserve: 50-65%
- Filter: Post-HP to protect lows

---

**Pro Tip:** Always A/B compare with the bypassed plugin to ensure you're adding value, not just different!
