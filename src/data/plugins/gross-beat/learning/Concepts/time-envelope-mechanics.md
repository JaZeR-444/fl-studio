# Time Envelope Mechanics: The Diagonal Line Philosophy

## The Fundamental Principle

In Gross Beat's visual interface, **a diagonal line represents normal, unaffected playback**. Any deviation from this diagonal creates time-based effects.

[SRC: IL-MAN]

---

## Reading the Diagonal

### What the Diagonal Means
```
Time (Playback) →
    0%    25%    50%    75%    100%
    |      |      |      |      |
100%-----       /|      |      |
    |        /   |      |      |
 50%|-----/      |      |      |
    |  /          |      |      |
  0%/_____________|______|______|
    0%           50%          100%
         Buffer Position
```

**Diagonal line (45°):** Buffer position matches playback time = Normal speed

### Why This Matters
- **Horizontal lines:** Same buffer position plays repeatedly = Stutter/Repeat
- **Upward slopes:** Buffer advances faster than playback = Speed up
- **Downward slopes:** Buffer advances slower than playback = Slow down
- **Vertical drops:** Instant jump = Glitch/stutter

---

## Time Envelope Shapes

### 1. Normal Playback (The Baseline)
```
    /  <- Pure diagonal
   /
  /
 /
```
- **Effect:** No time manipulation
- **Use:** Dry signal reference, bypass slot
- **Slot reference:** Usually Slot 1 (default)

### 2. Half-Speed (The Hip-Hop Signature)
```
    /
   /  <- Gentler slope
  /    (about 22.5°)
 /
```
- **Effect:** Audio plays at 50% speed
- **Pitch:** Drops one octave
- **Character:** Deep, heavy, spacious
- **Use case:** The classic hip-hop "half-time" effect
- **Best for:** Melodic loops, drum breaks, 808s (with caution)

### 3. Double-Time/Speed Up
```
    /   <- Steeper than 45°
   /
  /  (about 67.5°)
 /
```
- **Effect:** Audio plays at 200% speed
- **Pitch:** Rises one octave
- **Character:** Tight, energetic, chipmunk
- **Use case:** Build-ups, energy increases

### 4. Freeze/Stutter (Horizontal)
```
____  <- Horizontal = freeze
    \
     \
      \____  <- Another freeze
          \
```
- **Effect:** Repeats same buffer section
- **Duration:** Depends on horizontal line length
- **Use case:** Classic stutter edits, trap style
- **Variation:** Multiple freezes create rhythmic patterns

### 5. Tape-Stop (Steep Downward)
```
    \
     \  <- Steep downward
      \
       \
        \___  <- Gradual slow to stop
```
- **Effect:** Gradual deceleration to complete stop
- **Character:** Classic turntable wind-down
- **Use case:** Transitions, endings, dramatic moments

### 6. Reverse Simulation (Jagged Pattern)
```
    /\
   /  \
  /    \  <- Not true reverse, but glitchy
 /      \
```
- **Effect:** Rapid position jumping creates pseudo-reverse
- **Note:** Not true audio reversal
- **Use case:** Glitch textures, experimental

---

## Envelope Drawing Techniques

### Drawing Modes
1. **Line Tool:** Draw straight lines between points
2. **Freehand:** Draw custom curves
3. **Step Tool:** Create quantized steps
4. **Sine/Preset:** Apply mathematical curves

### Snap Options
- **Grid snap:** Quantize to beat divisions
- **Freehand:** Continuous curves
- **Hybrid:** Mix of quantized and smooth

### Smoothing
The **Attack/Release** controls apply to envelope transitions:
- **Low values:** Sharp, clicky transitions
- **High values:** Smooth, blurred transitions
- **Recommendation:** 10-30ms for hip-hop to prevent clicks while maintaining punch

---

## Hip-Hop Specific Patterns

### The Perfect Half-Time
```
Buffer Position
    |\      
    |  \    <- Gentle, consistent slope
    |    \  
    |      \
    |        \
    +----------→ Time
```
**Settings:**
- Slope: Approximately 50% (half-speed)
- Smoothing: 15-20ms Attack, 20-30ms Release
- Mix: 100% for full effect

### Trap Stutter Pattern
```
    |  __  __  __
    | /  \/  \/  \
    |/    \/  \/  
    +----------------→
    1   &   2   &   3
```
**Settings:**
- Horizontal sections: 1/16th note duration
- Transition: Vertical drops (use smoothing!)
- Mix: Blend to taste (50-80%)

### Tape-Stop Transition
```
    |\
    | \
    |  \
    |   \_______
    |           \
    +------------→
    1    2    3   4
```
**Settings:**
- Start: Normal speed (diagonal)
- Bar 3-4: Gradual steepening of slope
- Final: Horizontal (complete stop)
- Trigger: MIDI note at bar 3

---

## Common Time Envelope Mistakes

### Too Steep = Unusable
**Problem:** Extreme slopes create garbled audio
**Solution:** Keep slopes gradual (30-60° maximum for musical results)

### No Smoothing = Clicks
**Problem:** Sharp transitions create digital clicks
**Solution:** Always use 10-50ms Attack/Release smoothing

### Mismatched Tempo = Chaos
**Problem:** Envelope not aligned to project tempo
**Solution:** Enable grid snap, sync to beat divisions

### Ignoring Buffer Wrap
**Problem:** Envelope extends beyond buffer boundaries
**Solution:** Watch for red warning indicators, adjust Pos control

---

## Time + Volume Combination

### Creating Complete Effects
Time and Volume envelopes work together:

**Example - Rhythmic Half-Time:**
```
TIME:    |\
         |  \    (half-speed slope)
         |    \

VOLUME:  |____      ____
         |    |____|    |   (16th note gates)
```

**Result:** Half-speed audio with rhythmic gating

---

## Advanced Techniques

### Pos (Position) Offset
Shift the entire envelope up/down:
- **Positive:** Play earlier buffer content (delayed effect)
- **Negative:** Play later buffer content (anticipation effect)

### Envelope Morphing
Automate between slots for evolving effects:
1. Set up multiple time patterns
2. Automate slot switching
3. Creates dynamic, changing textures

### Split Effects
Use Time on some frequencies, Volume on others:
- Requires parallel processing setup
- Advanced routing in FL Studio mixer

---

## Quick Reference: Slope to Speed

| Slope Angle | Speed Ratio | Pitch Change | Best For |
|-------------|-------------|--------------|----------|
| 0° (flat) | 0% (frozen) | N/A | Stutter |
| 22.5° | 50% | -12 semitones | Half-time |
| 45° | 100% | 0 | Normal |
| 67.5° | 200% | +12 semitones | Double-time |
| 90° | ∞ (instant) | N/A | Glitch |

---

## Summary

**Remember:** The diagonal is your friend. Any deviation from diagonal = effect. The steeper the deviation, the more extreme the effect. Always use smoothing to prevent clicks, and align to tempo for musical results.
