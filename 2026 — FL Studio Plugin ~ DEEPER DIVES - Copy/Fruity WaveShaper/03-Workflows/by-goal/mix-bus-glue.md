# Mix Bus Glue

## The Goal

Create cohesive, "glued" mixes with subtle saturation that makes everything sound like it belongs together.

[SRC: IL-MAN] Gentle mix bus saturation adds even harmonics that create musical cohesion across all track elements.

## Mix Bus Philosophy

Mix bus processing affects EVERYTHING. Small changes have big impacts. Conservative settings are essential.

**Warning:** It's easy to overdo mix bus distortion. When in doubt, use less.

## The Safe Mix Bus Recipe

### Settings
- **Mode:** Unipolar (even harmonics = musical cohesion)
- **Curve:** Gentle S-curve
- **Pre:** +2 to +4dB
- **Mix:** 15-25%
- **Post:** -2 to -4dB
- **Oversample:** 4x
- **HQ:** Enabled

### Why These Settings?
- **Unipolar:** Even harmonics create consonance, not dissonance
- **Low Pre:** Just enough drive for cohesion, not destruction
- **Low Mix:** Effect should be barely perceptible
- **HQ:** Ensures quality at these subtle levels

## Alternative: Parallel Mix Bus

### Method
1. Route all tracks to a "Mix Bus Distortion" send
2. Insert WaveShaper on the send bus
3. Heavier settings on the bus
4. Blend send bus underneath main mix

### Settings for Parallel Bus
- **Mode:** Unipolar or Bipolar
- **Pre:** +6 to +10dB
- **Mix:** 100% (on the bus)
- **Blend:** 10-20% of bus into main mix

### Why Parallel?
- More control over the amount
- Can EQ the distorted signal separately
- Easier to adjust after the fact

## Genre-Specific Mix Bus Approaches

### Hip-Hop Mix Bus
- **Mode:** Unipolar
- **Pre:** +3dB
- **Mix:** 20%
- **Character:** Warm, punchy, cohesive

### R&B/Soul Mix Bus
- **Mode:** Unipolar
- **Pre:** +2dB
- **Mix:** 15%
- **HQ:** Enabled
- **Character:** Smooth, expensive, musical

### EDM Mix Bus
- **Mode:** Unipolar
- **Pre:** +4dB
- **Mix:** 25%
- **Character:** Energetic, glued, punchy

### Lo-Fi Mix Bus
- **Mode:** Unipolar
- **Pre:** +3dB
- **Mix:** 30%
- **Oversample:** 2x
- **Character:** Warm, crushed, "vintage"

## When to Use Mix Bus Saturation

### Good Candidates
- Mix sounds "sterile" or "digital"
- Tracks feel disconnected from each other
- Need subtle "analog" character
- Final polish before limiting

### Skip Mix Bus Saturation When
- Individual tracks already heavily saturated
- Mix is already warm/dark
- You are not sure (can always add later)

## Testing Mix Bus Saturation

### A/B Test
1. Disable WaveShaper
2. Match loudness (adjust master fader)
3. Enable WaveShaper
4. Should hear cohesion, not "effect"

### Fatigue Test
1. Listen to full mix for 60 seconds
2. Do ears tire or feel stressed?
3. If yes, reduce Mix to 15% or less

### Element Check
1. Solo each element (kick, snare, vocal, etc.)
2. Does each element still sound good?
3. If any element suffers, reduce Pre or Mix

## Common Mix Bus Mistakes

### Mistake 1: Too Aggressive
**Problem:** Mix becomes harsh and fatiguing
**Fix:** Reduce Pre to +2dB, Mix to 15%

### Mistake 2: Bipolar Mode
**Problem:** Cumulative harshness across all tracks
**Fix:** Use Unipolar for mix bus

### Mistake 3: No Oversampling
**Problem:** Subtle aliasing artifacts
**Fix:** Use 4x minimum

### Mistake 4: Forgetting Post Gain
**Problem:** Mix bus level change affects everything
**Fix:** Compensate with Post gain

## Integration with Mastering Chain

### Position in Chain
```
Mix Elements → Mix Bus EQ → WaveShaper (Mix Bus Glue) → 
Master Bus Compression → Master Bus EQ → Limiter
```

### Before the Limiter
WaveShaper should come BEFORE the final limiter. Let the limiter catch any peaks created by saturation.

### With Master Bus Compression
- Saturation adds harmonics
- Compression controls dynamics
- Together create "finished" sound

## Advanced Mix Bus Techniques

### Dynamic Saturation
- Automate Mix percentage
- More saturation during choruses
- Less during verses
- Creates dynamic interest

### Frequency-Conscious Saturation
**Goal:** Saturation that respects frequency balance

**Method:**
1. Use multi-band approach
2. Different saturation for lows/mids/highs
3. Or: Use EQ before/after WaveShaper
4. Shape the tonal result

### Mid/Side Mix Bus
**Goal:** Different saturation for center and sides

**Method:**
1. Use M/S processing plugin
2. More saturation on sides (width)
3. Less on center (focus)
4. Creates "3D" mix depth

## Safety Checklist

Before committing to mix bus WaveShaper:

- [ ] Unipolar mode enabled
- [ ] Pre gain at +4dB or less
- [ ] Mix at 25% or less
- [ ] 4x oversampling enabled
- [ ] Post gain compensates for level change
- [ ] No clipping on master bus
- [ ] Mix sounds cohesive, not "effected"
- [ ] No listener fatigue after 60 seconds

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
