# Problem Solver Quick Reference

## Symptom-to-Solution Lookup

[SRC: IL-MAN] This guide maps common distortion problems to WaveShaper solutions.

## Sound Problems

### Problem: "My 808 Lost Its Punch"
**Symptoms:**
- Sub-bass feels weaker after WaveShaper
- Low-end sounds "sucked out"
- Kick and bass no longer hit hard

**Solutions:**
1. **Switch to Unipolar mode** (preserves even harmonics, warmer)
2. **Use softer S-curve** instead of hard clipping
3. **Reduce Pre gain** to +6dB or less
4. **Increase Mix to 60-80%** to keep more original signal
5. **Enable Center** to prevent DC offset issues

### Problem: "Drums Sound Mushy"
**Symptoms:**
- Transients lost
- Attack feels blurred
- No snap or punch

**Solutions:**
1. **Switch to Bipolar mode** for more transient bite
2. **Use hard clip curve** for aggressive limiting
3. **Increase Pre gain** to +12dB or more
4. **Keep Mix at 50-70%** to blend with dry
5. **Use 4x or 8x oversampling** to prevent aliasing smear

### Problem: "Vocals Sound Harsh"
**Symptoms:**
- Sibilance increased
- Upper mids grating
- Listener fatigue

**Solutions:**
1. **Switch to Unipolar mode** (fewer odd harmonics)
2. **Reduce Pre gain** to +4dB or less
3. **Decrease Mix to 20-30%** for subtlety
4. **Add oversampling** (4x minimum)
5. **Consider de-esser before WaveShaper**

### Problem: "It Sounds Digital/Metallic"
**Symptoms:**
- High-frequency artifacts
- Unwanted "shimmer"
- Doesn't sound "analog"

**Solutions:**
1. **Enable 4x or 8x oversampling** immediately
2. **Use softer curve** (reduce sharp corners)
3. **Reduce Pre gain** to moderate levels
4. **Switch to Unipolar** for even harmonics
5. **Check for stepped curves** (bitcrushing creates artifacts)

[SRC: IL-MAN] Aliasing artifacts manifest as unwanted high-frequency content that sounds "metallic" or "digital."

## Technical Problems

### Problem: "Output Clipping Red Lights"
**Symptoms:**
- Channel meter in red
- Master bus clipping
- Distortion even with gentle curve

**Solutions:**
1. **Reduce Post gain** by 6-12dB immediately
2. **Check Pre gain** isn't too high
3. **Verify input level** before WaveShaper
4. **Add limiter after WaveShaper** if needed

### Problem: "Signal Disappeared"
**Symptoms:**
- Complete silence
- Only some frequencies audible
- Negative half of wave gone

**Solutions:**
1. **Check curve passes through (0,0)**
2. **Ensure no flat line at -1.0** in graph
3. **Reset curve and start over**
4. **Verify Pre gain isn't negative** (rare)

### Problem: "CPU Overload"
**Symptoms:**
- FL Studio lagging
- Audio dropouts
- High CPU meter

**Solutions:**
1. **Reduce oversampling** to 4x or 2x
2. **Freeze/render** tracks with heavy distortion
3. **Consolidate** multiple WaveShaper instances
4. **Use less extreme curves** (fewer points)

### Problem: "Can't Hear The Effect"
**Symptoms:**
- No audible change
- Mix sounds the same
- Plugin seems bypassed

**Solutions:**
1. **Increase Pre gain** significantly (+12dB or more)
2. **Check Mix isn't at 0%**
3. **Verify curve deviates from diagonal**
4. **Try extreme curve** temporarily to confirm it's working
5. **Check plugin isn't bypassed** in channel rack

## Vibe-Based Problem Solving

### Need More Warmth (Moody/Jazzy vibes)
- **Mode:** Unipolar
- **Curve:** Soft S-curve
- **Pre:** +6 to +10dB
- **Mix:** 40-60%
- **Oversample:** 2x-4x

### Need More Energy (Upbeat vibes)
- **Mode:** Bipolar
- **Curve:** Hard clip or aggressive S-curve
- **Pre:** +10 to +16dB
- **Mix:** 60-80%
- **Oversample:** 4x-8x

### Need Weird Textures (Psychedelic vibes)
- **Mode:** Bipolar
- **Curve:** Complex asymmetric or foldback
- **Pre:** +12 to +20dB
- **Mix:** 30-50%
- **Oversample:** 8x-16x

### Need Vintage Character (Jazzy/Vibey vibes)
- **Mode:** Unipolar
- **Curve:** Gentle saturation with rounded corners
- **Pre:** +4 to +8dB
- **Mix:** 20-40%
- **Oversample:** 2x-4x

[SRC: IL-MAN] The sonic character depends on curve shape, mode selection, and gain staging combined.

## Decision Tree: Which Setting First?

```
Problem identified
       │
       ├─→ Sound quality issue?
       │       ├─→ Harsh/Digital → Check oversampling + mode
       │       ├─→ Weak/Lost low-end → Check curve shape + Center
       │       └─→ No character → Check Pre gain + curve
       │
       └─→ Technical issue?
               ├─→ Clipping → Reduce Post gain
               ├─→ Silence → Check curve at (0,0)
               ├─→ CPU → Reduce oversampling
               └─→ Not working → Verify plugin active
```

## Quick Fixes Table

| Symptom | First Try | Second Try | Third Try |
|---------|-----------|------------|-----------|
| Too harsh | Unipolar mode | Reduce Pre gain | Add oversampling |
| Too weak | Increase Pre gain | Bipolar mode | Increase Mix |
| Digital artifacts | 8x oversampling | Softer curve | Reduce drive |
| Lost low-end | Check Center | Unipolar mode | Softer curve |
| Clipping | Reduce Post gain | Reduce Pre gain | Check input |
| CPU high | 2x oversampling | Freeze track | Remove instances |

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
