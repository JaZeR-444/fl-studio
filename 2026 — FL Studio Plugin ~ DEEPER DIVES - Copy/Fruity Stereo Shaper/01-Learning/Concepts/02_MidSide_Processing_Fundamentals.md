# Mid/Side Processing Fundamentals - Stereo Control for Hip-Hop

## What is Mid/Side (MS) Processing?

Mid/Side splits a stereo signal into two components:

**MID:** Everything panned center (mono sum)
**SIDE:** Everything panned left/right (stereo difference)

```
STEREO IN → [MS SPLIT] → MID (vocals, bass, kick)
                       → SIDE (panned instruments, reverb)
```

Process each separately, then reconstruct back to stereo.

## Why MS Matters in Hip-Hop

### Moody/Dark Beats
- **Wide reverb without washing vocals:** Apply reverb only to Side
- **Tight center punch:** Compress only Mid (vocals/kick/808)
- **Atmospheric width:** Brighten Side with EQ, keep Mid dark

### Upbeat/Club Hip-Hop
- **Powerful mono bass:** 808s stay in Mid, never in Side
- **Wide energy:** Boost Side for club stereo systems
- **Vocal clarity:** Keep vocals in Mid, effects in Side

### Lo-Fi/Melodic Hip-Hop
- **Vintage stereo:** Reduce Side for narrow, intimate feel
- **Tape wobble:** Modulate Side differently than Mid
- **Dusty samples:** Filter Side more than Mid for degraded width

### Trap/Electronic Hip-Hop
- **808 dominance:** All sub-bass in Mid only
- **Hi-hat width:** Push hi-hats to Side
- **Snare presence:** Keep snare in Mid, reverb in Side

## MS Processing Chain Setup

### Method 1: Two Stereo Shaper Instances in Patcher

**Instance 1 - Extract Mid:**
```
Matrix Settings:
L→L: 0.707   L→R: 0.707
R→L: 0.707   R→R: -0.707
```
Then use "Solo Mid" mode to hear only center content.

**Instance 2 - Extract Side:**
Use same matrix but "Solo Side" mode to hear only stereo width.

Route each to separate effects chains, then sum back together.

### Method 2: MS Conversion for External Processing

**Step 1 - LR to MS:**
Load Stereo Shaper, use "LR to MS" preset.

**Step 2 - Process:**
Now Left channel = Mid, Right channel = Side
Apply effects as desired.

**Step 3 - MS to LR:**
Add another Stereo Shaper after effects, use "MS to LR" preset.

## Practical MS Applications

### Reverb Without Muddying Vocals

**Problem:** Reverb on full mix washes out vocals

**Solution:**
1. Convert to MS
2. Apply reverb only to Side component
3. Convert back to LR

**Result:** Spacious mix, clear vocals

### 808 Bass Management

**Problem:** 808 loses power in mono club systems

**Solution:**
1. Convert to MS
2. Apply low-cut filter to Side (remove bass from stereo)
3. Keep Mid untouched (bass stays mono)
4. Convert back to LR

**Result:** Powerful mono bass, wide highs

### Sample Stereo Control

**Problem:** Sample too wide or too narrow

**Solution:**
1. Convert to MS
2. Adjust Side level (boost for wider, reduce for narrower)
3. Convert back to LR

**Result:** Perfect stereo width control

## Hip-Hop MS Recipes

### Recipe 1: Moody Vocal Separation
```
1. Convert vocals to MS
2. Mid: Compression + presence boost (3-5kHz)
3. Side: Gentle reverb + high-cut (removes harsh edges)
4. Convert back to LR
→ Result: Clear, emotional vocal
```

### Recipe 2: Wide Hi-Hat Trap Pattern
```
1. Convert hi-hats to MS
2. Mid: Reduce level -6dB
3. Side: Boost +3dB, add short delay (15ms)
4. Convert back to LR
→ Result: Wide, spacious hi-hats
```

### Recipe 3: Club-Ready 808 Bass
```
1. Convert 808 to MS
2. Mid: Leave clean
3. Side: High-pass at 150Hz (remove all bass)
4. Convert back to LR
→ Result: Mono bass, stereo harmonics
```

### Recipe 4: Lo-Fi Sample Processing
```
1. Convert sample to MS
2. Mid: Leave mostly clean
3. Side: Reduce -4dB, add slight distortion
4. Convert back to LR
→ Result: Vintage narrow width
```

## Common MS Mistakes

### Mistake 1: Bass in Side Channel
**Problem:** Bass disappears in mono (clubs, phones)
**Fix:** Always high-pass Side channel below 150Hz

### Mistake 2: Over-Processing Side
**Problem:** Sounds great in headphones, weak in mono
**Fix:** Check mono frequently, keep Side subtle

### Mistake 3: Phase Cancellation
**Problem:** Elements vanish when folded to mono
**Fix:** Use correlation meter, ensure Mid/Side balance

### Mistake 4: Forgetting to Convert Back
**Problem:** Signal stays in MS mode
**Fix:** Always add MS-to-LR conversion after processing

## MS Visualization

```
BEFORE MS:
L ████████████ (vocals + reverb + hi-hat)
R ████████████ (vocals + reverb + hi-hat)

AFTER MS SPLIT:
MID  ████████ (vocals only)
SIDE ████     (reverb + hi-hat only)

PROCESS SEPARATELY:
MID  ████████ → [COMPRESS] → ████████
SIDE ████     → [REVERB]   → ████████

CONVERT BACK TO LR:
L ████████████ (compressed vocal + enhanced reverb)
R ████████████ (compressed vocal + enhanced reverb)
```

## Tools for MS Work

**Essential Plugins:**
- **Fruity Stereo Shaper:** MS conversion
- **Patcher:** Parallel MS routing
- **Wave Candy:** Visualize stereo field
- **Fruity Limiter:** Check mono with phase meter

**Analysis Tools:**
- **Correlation Meter:** Shows mono compatibility
- **Vectorscope:** Shows stereo width visually
- **A/B Mono Button:** Quick mono check

## MS Processing Workflow

```
1. ANALYZE
   → Identify what needs separate processing
   → Decide what goes Mid vs Side

2. CONVERT
   → Load Stereo Shaper
   → Apply LR-to-MS preset

3. PROCESS
   → Left channel = Mid processing
   → Right channel = Side processing

4. CONVERT BACK
   → Load another Stereo Shaper
   → Apply MS-to-LR preset

5. CHECK
   → A/B with original
   → Test in mono
   → Verify phase coherence
```

## Genre-Specific MS Guidelines

### Moody Hip-Hop
- **Mid:** Heavy compression, dark EQ
- **Side:** Subtle reverb, rolled-off highs
- **Width:** Narrow to medium

### Upbeat Hip-Hop
- **Mid:** Punchy compression, presence boost
- **Side:** Bright EQ, stereo delay
- **Width:** Medium to wide

### Lo-Fi Hip-Hop
- **Mid:** Gentle saturation, warm EQ
- **Side:** Reduced level, filtered
- **Width:** Narrow

### Trap/Electronic
- **Mid:** Clean dynamics, powerful bass
- **Side:** Bright, stereo effects
- **Width:** Wide

### Melodic Hip-Hop
- **Mid:** Vocal clarity, lead presence
- **Side:** Lush reverb, melodic elements
- **Width:** Medium-wide

## Pro MS Tips

1. **Bass in Mid only:** Below 150Hz = mono always
2. **Vocals in Mid:** Lead vocals stay centered
3. **Effects in Side:** Reverb, delay, ambience
4. **Check mono constantly:** Use mixer mono button
5. **Subtle is better:** Over-processed Side = mono problems
6. **Automate width:** Narrow verse, wide chorus
7. **Use Patcher:** Essential for complex MS chains
8. **Trust your ears:** Meters help, but listen in mono

## MS Math Reference

```
MID = (L + R) / 2
SIDE = (L - R) / 2

RECONSTRUCTION:
L = MID + SIDE
R = MID - SIDE
```

When you boost Side by 6dB, you're increasing stereo width.
When you reduce Side by 6dB, you're narrowing the stereo image.
