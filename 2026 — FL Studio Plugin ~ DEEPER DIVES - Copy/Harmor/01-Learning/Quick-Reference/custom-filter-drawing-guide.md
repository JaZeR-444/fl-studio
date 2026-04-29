# Custom Filter Drawing Guide

How to use Harmor's unique custom filter curve editor.

[SRC: IL-MAN]

---

## Overview

Harmor's filter section allows you to **draw any frequency response curve** you want. Unlike traditional synths with fixed filter types (low-pass, high-pass, etc.), Harmor gives you a blank canvas to create:

- Multi-band filters
- Resonant peaks at specific frequencies
- Notch filters for problem frequencies
- "Smile" curves for classic EQ shapes
- Any combination imaginable

---

## Filter Display Layout

```
Harmor Filter Display

Amplitude/Gain
    ↑
+12dB│
     │
  0dB├────────────────────────────
     │
-12dB│
     │
-24dB│
     └────────────────────────────→ Frequency
    20Hz                       20kHz
    
    ┌────────────────────────────┐
    │      DRAWING AREA          │
    │                            │
    │  Click-drag to draw curve  │
    │                            │
    └────────────────────────────┘
```

**X-axis:** Frequency (log scale, 20Hz - 20kHz)
**Y-axis:** Gain/Attenuation (dB scale, typically -24dB to +12dB)

---

## Drawing Tools

### Basic Drawing

| Action | How To | Result |
|--------|--------|--------|
| **Add point** | Click anywhere | Creates control point |
| **Move point** | Drag existing point | Adjusts frequency/gain |
| **Draw curve** | Click-drag across display | Creates multiple points |
| **Remove point** | Right-click point | Deletes it |
| **Clear all** | Right-click → Clear | Reset to flat |

### Curve Manipulation

| Action | How To | Result |
|--------|--------|--------|
| **Smooth curve** | Right-click → Smooth | Averages adjacent points |
| **Invert** | Right-click → Invert | Flips vertically (pass becomes cut) |
| **Copy** | Right-click → Copy | Stores in clipboard |
| **Paste** | Right-click → Paste | Applies copied curve |
| **Copy A→B/B→A** | Right-click → Copy to other engine | Transfers between engines |

---

## Common Filter Shapes

### 1. Low-Pass Filter

**Shape:** Line high on left, slopes down to right

```
Gain
  ↑
 0dB├██████████████
    │               ╲
-12dB│                ╲
    │                 ╲
-24dB│                  ╲____
    └────────────────────────→ Freq
   100Hz   1kHz   5kHz  20kHz
```

**Drawing Steps:**
1. Click at 20Hz, drag to 0dB
2. Click at 500Hz-2kHz, set cutoff point
3. Drag to 20kHz at -24dB or lower
4. Click "Smooth" for gradual slope

**Use For:** Removing highs, sub-bass focus

### 2. High-Pass Filter

**Shape:** Line low on left, slopes up to right

```
Gain
  ↑
 0dB│                  __________
    │                ╱
-12dB│              ╱
    │            ╱
-24dB├████████╱
    └────────────────────────→ Freq
   20Hz   100Hz  500Hz  20kHz
```

**Drawing Steps:**
1. Click at 20Hz, drag to -24dB (or lower)
2. Click at 80-200Hz, set cutoff
3. Drag to 20kHz at 0dB
4. "Smooth" for gradual slope

**Use For:** Removing rumble, vocal clarity

### 3. Band-Pass Filter

**Shape:** Valley on sides, peak in middle

```
Gain
  ↑
 0dB│      ____________
    │     ╱            ╲
-12dB│    ╱              ╲
    │   ╱                ╲
-24dB├──╱                  ╲──
    └────────────────────────→ Freq
   100Hz 500Hz 1kHz  5kHz 20kHz
```

**Drawing Steps:**
1. Set low gain at 20Hz
2. Ramp up to 0dB at band center (e.g., 1kHz)
3. Ramp back down at upper cutoff
4. End low at 20kHz

**Use For:** Isolating frequency bands, "telephone" effect

### 4. Notch Filter

**Shape:** Flat line with sharp dip

```
Gain
  ↑
 0dB├────────────────────────
    │         ____
-12dB│        ╱    ╲
    │       ╱      ╲
-24dB│______╱        ╲________
    └────────────────────────→ Freq
            1kHz
```

**Drawing Steps:**
1. Draw flat line at 0dB
2. At problem frequency, click and drag DOWN sharply
3. Make dip narrow (just the problem freq)
4. Return to 0dB immediately after

**Use For:** Removing resonances, feedback frequencies

### 5. Resonant Peak

**Shape:** Boost at specific frequency

```
Gain
  ↑
+6dB│          ╱╲
 0dB├─────────╱──╲───────────
    │        ╱    ╲
-6dB│       ╱      ╲
    └───────────────────────→ Freq
           2kHz
```

**Drawing Steps:**
1. Flat line at 0dB
2. Sharp boost at desired frequency
3. Symmetrical return to 0dB
4. Keep narrow for precision

**Use For:** Accentuating presence, vocal clarity

### 6. Smile Curve (Mid Scoop)

**Shape:** Boost lows and highs, cut mids

```
Gain
  ↑
+6dB├──╲                    ╱──
 0dB│    ╲________________╱
    │
-6dB│
    └────────────────────────→ Freq
   100Hz     1kHz        10kHz
```

**Drawing Steps:**
1. Start high at 20-100Hz
2. Slope down to minimum around 500Hz-2kHz
3. Slope back up to high at 10kHz+
4. Smooth for gradual transitions

**Use For:** Classic "scooped" mix sound, drum punch

### 7. Multi-Peak (Complex)

**Shape:** Multiple resonant peaks

```
Gain
  ↑
+6dB│   ╱╲        ╱╲
 0dB├──╱──╲──────╱──╲───────
    │       ╲__╱      ╲
-6dB│
    └───────────────────────→ Freq
      200Hz  1kHz   5kHz
```

**Drawing Steps:**
1. Create multiple peaks at desired frequencies
2. Vary heights for emphasis
3. Connect with smooth curves
4. Use for complex tonal shaping

**Use For:** Formant shaping, unique vocal effects

---

## Advanced Techniques

### Drawing Accurate Frequencies

**Problem:** Hard to hit exact frequencies by eye

**Solution - Reference Points:**
- **80Hz**: Sub bass feel
- **200Hz**: Muddiness
- **1kHz**: Presence/core
- **3kHz**: Vocal intelligibility
- **5kHz**: Sibilance/snap
- **10kHz**: Air/brightness

**Tip:** Use Harmor's visual frequency analyzer to see where energy is, then draw accordingly.

### Copy Between Engines

**Use Case:** Different filtering on A and B

**Steps:**
1. Draw filter on Engine A
2. Right-click → Copy A to B
3. Switch to Engine B
4. Modify B's filter (e.g., invert it)
5. Mix A and B for complex filtering

### Filter + Envelope Modulation

**Dynamic Filtering:**
1. Draw your base filter shape
2. Go to EG section
3. Set EG1 Destination: Filter
4. Adjust EG1 Amount
5. Now filter moves with envelope!

**Example - Wah Effect:**
- Draw band-pass shape
- EG1: Fast attack, short decay
- EG1 → Filter: +50%
- Result: Auto-wah effect

### Comb Filter (Notch Series)

```
Multiple notches at harmonic intervals:

Gain
  ↑
 0dB├────╱╲────╱╲────╱╲────
    │   ╱  ╲  ╱  ╲  ╱  ╲
-24dB│──╱────╲╱────╲╱────╲──
    └────────────────────────→ Freq
       f   2f   3f   4f   5f

Where f = fundamental frequency
```

**Use For:** Metallic, resonant effects; Karplus-Strong style synthesis

---

## Hip-Hop Specific Applications

### 808 Enhancement

**Scoop the Mids, Boost Sub:**
```
Boost: 40-80Hz (sub power)
Cut: 200-400Hz (remove mud)
Boost: 2-3kHz (click/attack)
Cut: 5kHz+ (remove hiss)
```

### Vocal Presence

**Intelligibility Curve:**
```
High-pass: 80Hz (remove rumble)
Slight boost: 2-4kHz (presence)
Notch: Problem sibilance freq
Low-pass: 12kHz (soften if too bright)
```

### Drum Buss Processing

**Smile Curve on Mix:**
```
Boost: 100Hz (thump)
Scoop: 400Hz (remove boxiness)
Boost: 2-5kHz (snap/punch)
Result: Radio-ready drum sound
```

### Lo-Fi Effect

**Telephone Band-Pass:**
```
High-pass: 300Hz
Low-pass: 3-4kHz
Steep slopes on both sides
Result: Classic lo-fi vocal/drum sound
```

---

## Common Mistakes

### 1. Too Many Points

**Problem:** Jagged, unstable filter
**Solution:** Use fewer points, rely on smoothing

### 2. Extreme Boosts

**Problem:** +12dB+ boosts cause distortion
**Solution:** Keep boosts under +6dB, cut instead

### 3. Sharp Resonances

**Problem:** Very narrow peaks sound unnatural
**Solution:** Widen peaks slightly, add Blur effect

### 4. Forgetting Per-Engine

**Problem:** A and B have different filters, mixing causes phase issues
**Solution:** Copy A→B or be intentional about differences

---

## Quick Filter Recipes

### Recipe 1: "Warm Analog"
```
Gentle high-cut starting at 5kHz
Slight boost at 100-200Hz
Smooth curve, no sharp corners
Blur: 20-30% for extra warmth
```

### Recipe 2: "Modern Clarity"
```
High-pass at 50Hz (steep)
Notch at 300Hz (remove mud)
Boost at 3kHz (presence)
Low-pass at 15kHz (smooth top)
```

### Recipe 3: "Phone/Vintage"
```
Band-pass: 300Hz - 3.5kHz
Steep slopes on both sides
Slight resonance at 2kHz
Result: Classic telephone/AM radio
```

### Recipe 4: "Sub Focus"
```
Sharp low-pass at 100Hz
Boost at 60Hz (resonant peak)
Everything above 150Hz: -24dB
Result: Pure sub bass
```

---

## Summary

Harmor's custom filter is a **powerful creative tool**:
- Draw any frequency response imaginable
- Multiple peaks, notches, or complex shapes
- Modulate with envelopes for movement
- Different filters on A and B engines
- Combine with other processors for unique sounds

**Key Takeaway:** Don't think "low-pass" or "high-pass" - think "what frequencies do I want?" and draw it.

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
