# Workflow: Trap Stutter Effects

## Overview

Stutter effects are the **rhythmic backbone of trap music**. By rapidly repeating small sections of audio, stutters create tension, energy, and that signature "chopped" sound that defines the genre.

**Effect:** Freezing and repeating audio segments in rhythmic patterns (1/16, 1/32, or even faster)

**Trap Relevance:** Essential for hi-hat rolls, vocal ad-libs, build-ups, and transition fills.

[SRC: IL-MAN]

---

## The Basics

### What is a Stutter?

A stutter effect repeats a small slice of audio:
```
Normal:  |----1----|----2----|----3----|----4----|
Stutter: |--|--|--|--|--|--|--|--|--|--|--|--|--|--|
         1/16th note repeats of the same audio slice
```

### How Gross Beat Creates Stutters

- **Horizontal lines** in the Time envelope = freeze/repeat
- **Duration** of horizontal line = how long it repeats
- **Multiple blocks** = rhythmic pattern

---

## Setting Up Stutters

### Step 1: Choose Stutter Speed

| Slot | MIDI | Speed | Use Case |
|------|------|-------|----------|
| 7 | F#1 | 1/4 note | Moderate, four-on-floor |
| 8 | G1 | 1/8 note | Fast, energetic |
| 9 | G#1 | 1/16 note | **Trap standard** |
| 10 | A1 | 1/32 note | Ultra-fast, fills |

**For trap:** Start with Slot 9 (G#1 - 1/16th)

### Step 2: Configure Settings

**Base Settings:**
```
Time Slot:  9 (1/16 stutter)
Volume:     1 (normal)
Mix:        80%
Attack:     10ms (tight but no clicks)
Release:    20ms (snappy)
Pos:        0%
```

### Step 3: Timing

**Critical:** Stutters must be quantized
- Enable "Snap to grid"
- Use 1/16 or 1/32 grid
- Trigger on exact beat divisions

---

## Trap-Specific Patterns

### 1. The Classic Hi-Hat Roll

**Setup:**
```
Apply to:   Hi-hat track or percussion
Time Slot:  9 (1/16 stutter) or 10 (1/32)
Mix:        70%
Timing:     Last beat of bar (beat 4)
Duration:   1-2 beats
```

**Pattern:**
```
Bar 1: Normal
Bar 2: Normal
Bar 3: Normal
Bar 4: [Stutter on beats 3-4]
```

**Result:** Classic trap roll leading into next section

### 2. The Build-Up Stutter

**Setup:**
```
Apply to:   Full mix or drum bus
Time Slot:  Start with 8 (1/8), switch to 9 (1/16), then 10 (1/32)
Mix:        100%
Timing:     2-4 bars of increasing speed
```

**Automation:**
```
Bar 1:  Slot 8 (1/8)
Bar 2:  Slot 9 (1/16)  
Bar 3:  Slot 10 (1/32)
Bar 4:  [Drop - back to normal]
```

**Result:** Increasing tension before chorus/drop

### 3. Vocal Ad-Lib Stutter

**Setup:**
```
Apply to:   Vocal ad-lib track
Time Slot:  9 (1/16) or 11 (triplet for swing)
Mix:        60%
Timing:     End of phrases
```

**Example:**
```
Vocal: "Yeah!"
Stutter: "Y-y-y-y-yeah!" (1/16 repeats)
```

**Result:** Characteristic trap vocal effect

### 4. The "Travis Scott" Fill

**Setup:**
```
Apply to:   Drum bus or full mix
Time Slot:  9 (1/16 stutter)
Volume:     4 (1/16 gate) - combine for extra effect!
Mix:        90%
Timing:     Transition points
```

**Result:** Bouncy, rhythmic transition fills

---

## Advanced Stutter Techniques

### 1. Velocity-Based Stutters

Use note velocity to control intensity:
- **Velocity 100-127:** Full stutter (100% Mix)
- **Velocity 60-99:** Partial (60% Mix) - more subtle
- **Velocity 30-59:** Texture only (30% Mix)

**Application:** Dynamic stutters that build or fade

### 2. Stutter + Gate Combination

**Setup:**
```
Time Slot:  9 (1/16 stutter)
Volume Slot: 4 (1/16 gate)
Mix:        80%
```

**Result:** Stuttered audio that's also rhythmically gated
**Character:** Ultra-tight, modern trap sound

### 3. Pitch-Shifting Stutter

**Technique:**
1. Apply stutter with Gross Beat
2. Add Pitcher or Newtone after
3. Shift pitch up/down during stutter

**Result:** Melodic stutter effects (like "mumble rap" style)

### 4. Reverse Stutter Simulation

**Setup:**
- Time Slot: 14 (Reverse simulation - C#2)
- Or draw jagged zigzag pattern

**Result:** Pseudo-reverse effect
**Note:** Not true reverse, but creates similar feel

---

## MIDI Performance Patterns

### Pattern 1: Basic Stutter Fill
```
MIDI: Trigger G#1 (Slot 9) on beat 4
      Release on bar 1 of next section
      
Result: One-beat stutter fill
```

### Pattern 2: Rhythmic Stutter
```
MIDI: G#1 - G#1 - G#1 - G#1
      [16th] [16th] [16th] [16th]
      
Result: Four quick stutter bursts
```

### Pattern 3: Progressive Speed
```
MIDI: G1 (1/8) → G#1 (1/16) → A1 (1/32)
      Each held for 1/2 beat
      
Result: Speeding up stutter
```

---

## Common Mistakes

### 1. Clicks and Pops
**Problem:** Stutter transitions are too sharp
**Fix:** 
- Attack: 10ms minimum
- Release: 20ms minimum
- Use envelope smoothing

### 2. Timing Chaos
**Problem:** Stutters not aligned to beat
**Fix:**
- Enable grid snap
- Quantize to 1/16
- Check tempo sync

### 3. Overuse
**Problem:** Every bar has stutters - loses impact
**Fix:**
- Save for transitions and fills
- Less is more
- Create contrast with non-stuttered sections

### 4. Wrong Material
**Problem:** Stuttering bass or low-end sounds messy
**Fix:**
- High-pass before Gross Beat
- Or apply to mid/high frequencies only
- Avoid stuttering solo 808s

---

## Creative Applications

### Stutter Types by Element

**Hi-Hats:**
- 1/16 or 1/32 stutter
- Quick bursts (1-2 beats)
- Add velocity variation

**Snare:**
- 1/8 stutter for fills
- Backbeat emphasis
- Short, punchy

**Vocals:**
- 1/16 stutter on words
- End of phrases
- Combine with delay

**Synths:**
- 1/8 stutter for rhythm
- Longer stutters for texture
- Build-up effects

### Stutter Duration Guide

| Duration | Effect | Use |
|----------|--------|-----|
| 1/4 beat | Quick hit | Accents |
| 1/2 beat | Short fill | Transitions |
| 1 beat | Standard fill | Build-ups |
| 2 beats | Extended | Breakdowns |
| 4 beats | Texture | Ambient sections |

---

## Integration with Other Effects

### Reverb + Stutter
**Setup:** Add reverb before or after Gross Beat
**Result:** Stuttered reverb tails
**Tip:** Try reverb AFTER for cleaner stutters

### Delay + Stutter
**Setup:** Delay before Gross Beat
**Result:** Stuttered echoes
**Use:** Creative texture, fills

### Distortion + Stutter
**Setup:** Light saturation before Gross Beat
**Result:** Gritty, aggressive stutters
**Genre:** Hard trap, drill

---

## Commit to Audio

**When to commit:**
- Stutter patterns are finalized
- Timing locked to arrangement
- Before mixing stage

**Why commit:**
- Frees up Gross Beat for other uses
- Prevents accidental changes
- Allows destructive editing of stuttered audio

---

## Quick Reference

```
TRAP STUTTER ESSENTIALS:

Speed:      1/16 (Slot 9 - G#1)
Mix:        80%
Attack:     10ms
Release:    20ms
Quantize:   1/16th grid

Common:     End of bars, transitions
Combine:    With gates for extra tightness
Avoid:      Solo bass, unquantized triggers

Pro Tip:    Layer 1/16 + 1/32 for complex rolls
```

---

## Source

Workflow based on:
- [SRC: IL-MAN] Image-Line Gross Beat documentation
- Trap production techniques
- Modern hip-hop production practices
