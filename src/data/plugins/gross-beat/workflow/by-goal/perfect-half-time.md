# Workflow: Perfect Half-Time Effect

## Overview

The half-time effect is the **signature sound of modern hip-hop**. It transforms energetic beats into slow, heavy, spacious grooves by reducing playback speed to 50% (pitch drops one octave automatically).

**Effect:** Melodic content plays at half-speed while drums maintain their original timing relationship, creating the classic "slowed" sound.

**Hip-Hop Relevance:** This is THE effect. From early DJ Screw to modern trap, half-time defines the genre's sonic identity.

[SRC: IL-MAN]

---

## Setup

### Step 1: Choose Your Source

**Best sources for half-time:**
- Full drum loops (140+ BPM)
- Melodic samples and loops
- Percussion bus
- Full beat stems

**Avoid:**
- Solo 808s/bass (see low-end smear warning)
- Solo kicks
- Already slow material (< 100 BPM)

### Step 2: Load Gross Beat

1. Add Gross Beat to your channel
2. Set initial Mix to 0% (we'll adjust)
3. Set Attack: 20ms, Release: 35ms (safe starting point)
4. Set Pos: 0% (real-time)

### Step 3: Select Half-Time Slot

Navigate to **Time Slot 2** (C#1 on MIDI keyboard)
- This slot has the gentle downward slope (22.5°)
- Produces the classic 50% speed reduction
- Pitch drops exactly one octave (-12 semitones)

---

## Fine-Tuning

### The Critical Settings

#### Mix Control
- **100%:** Full commitment, maximum impact
- **70-80%:** Strong effect with some dry signal
- **50-60%:** Blend, good for verses
- **30-40%:** Subtle, background texture

**Recommendation:** Start at 100%, adjust to taste

#### Attack Time
Controls how quickly the effect engages:
- **5-10ms:** Tight, immediate (risk of clicks)
- **15-25ms:** Standard, punchy (recommended)
- **40-60ms:** Smooth, gradual transition

**For hip-hop:** 20ms is the sweet spot

#### Release Time
Controls how quickly the effect disengages:
- **20-30ms:** Snappy, tight (good for cuts)
- **40-60ms:** Natural, flowing (recommended)
- **100-200ms:** Slow, ambient

**For half-time:** 35-50ms maintains groove

### Buffer Position (Pos)

**0%:** Real-time playback (standard)
**25-50%:** Delayed playback (creates slapback effect)

**Tip:** Try 25% Pos for a subtle delayed half-time feel

---

## Hip-Hop Specific Applications

### The Classic Verse Effect

**Setup:**
```
Time Slot: 2 (Half-time)
Volume Slot: 1 (Normal, no gate)
Mix: 100%
Attack: 20ms
Release: 40ms
Pos: 0%
```

**Application:** Apply to full beat during verses
- Chorus plays at normal speed
- Verse drops to half-time
- Creates dramatic contrast

**Example:** 140 BPM beat → Half-time = feels like 70 BPM

### The Breakdown Drop

**Setup:**
```
Time Slot: 2 (Half-time)
Volume Slot: 4 (1/16 gate - optional)
Mix: 100%
Attack: 15ms
Release: 35ms
```

**Application:** Use for 4-8 bar breakdowns
- Removes all percussion except key elements
- Half-time adds weight and space
- Gate adds rhythmic interest

### The Drum Loop Treatment

**Setup:**
```
Time Slot: 2 (Half-time)
Volume Slot: 1 (Normal)
Mix: 80%
Attack: 25ms
Release: 50ms
Pos: 0%
```

**Application:** Process sampled drum breaks
- Classic boom-bap technique
- Creates laid-back groove
- Maintains drum relationship

---

## Advanced Techniques

### 1. The "DJ Screw" Effect

**Setup:**
- Use Pos control at 10-20%
- This creates slight delay + half-time
- Very slight pitch wobble (if desired)

**Result:** Authentic chopped-and-screwed feel

### 2. Half-Time + Sidechain

**Setup:**
```
Time Slot: 2 (Half-time)
Volume Slot: 18 (Sidechain 4/4)
Mix: 100% on Time, 70% on Volume
```

**Effect:** Slow, heavy groove with pumping dynamics

### 3. Gradual Half-Time Transition

**Automation Setup:**
1. Start with Mix at 0%
2. Automate Mix to 100% over 2 bars
3. Add slight Attack increase during transition
4. Hold at 100% for section

**Result:** Smooth transition into half-time feel

### 4. Selective Half-Time

**Using Patcher:**
1. Split signal: Low vs Mid/High
2. Apply Gross Beat only to Mid/High
3. Keep bass normal
4. Blend together

**Result:** Half-time effect without low-end smear

---

## Common Mistakes

### 1. Too Aggressive Slope
**Problem:** Slot with too steep slope creates extreme, unusable pitch drop
**Fix:** Use Slot 2 specifically (gentle 22.5° slope)

### 2. Clicks on Transition
**Problem:** Attack too fast causes digital artifacts
**Fix:** Minimum 15ms Attack, preferably 20ms+

### 3. Bass Damage
**Problem:** Half-time on 808s destroys punch
**Fix:** See "Low-End Smear Warning" workflow - use bus processing only

### 4. Timing Drift
**Problem:** Effect not aligned to tempo
**Fix:** Enable snap to grid, quantize to beat

---

## Integration with Other Effects

### EQ After Gross Beat
**Why:** Half-time adds lows (pitch drop), may need EQ
**Tip:** Slight high-shelf boost to compensate for perceived darkness

### Reverb + Half-Time
**Result:** Massive, spacious sound
**Setup:** Long reverb tail, 100% wet half-time

### Saturation + Half-Time
**Result:** Warm, vintage character
**Setup:** Subtle saturation before or after Gross Beat

---

## Section-Based Application

### Typical Hip-Hop Arrangement

```
Intro:      Normal speed
Verse 1:    Half-time (100% Mix)
Hook:      Normal speed
Verse 2:    Half-time (80% Mix - slightly lighter)
Hook:      Normal speed
Bridge:    Half-time + stutter effects
Outro:     Tape-stop (transition from half-time)
```

---

## Commit to Audio

**When to commit:**
- Arrangement is finalized
- Effect timing is locked
- Before mixing/mastering stage

**Process:**
1. Solo the track
2. Render to audio (32-bit WAV)
3. Replace Gross Beat with audio file
4. Keep original track muted as backup

**Benefits:**
- Frees up CPU
- Locks timing permanently
- Allows further processing

---

## Quick Reference Card

```
PERFECT HALF-TIME SETUP:

Time Slot:  2 (C#1 on MIDI)
Volume:     1 (no change)
Mix:        100%
Attack:     20ms
Release:    35ms
Pos:        0%

MIDI Trigger: C#1 (hold for sustained effect)
Automation:   Trigger on bar 1 of section

Best On:      Full beats, melodic loops
Avoid:        Solo bass, solo kicks
Combine:      Sidechain, reverb, saturation

Pro Tip:     Try Pos at 25% for delayed half-time feel
```

---

## Source

Workflow based on:
- [SRC: IL-MAN] Image-Line Gross Beat documentation
- Hip-hop production best practices
- DJ Screw / chopped-and-screwed techniques
