# Workflow: Quick Result with Fruity Soft Clipper

## Goal
Get 2-3 dB more loudness in under 5 minutes with minimal setup.

[SRC: REPUTABLE]

---

## Routing Context
**Insert:** Master track, final slot (or before limiter)

---

## Step-by-Step Setup

### Step 1: Load Plugin (30 seconds)
1. Open FL Studio mixer (F9)
2. Click Master track
3. Find empty FX slot
4. Click → Fruity → Fruity Soft Clipper
5. Plugin loads with default settings (Threshold 0 dB, Post 0 dB)

### Step 2: Set Initial Values (30 seconds)
1. **Threshold:** Set to **-1.5 dB**
2. **Post Gain:** Set to **+1.5 dB**
3. Transfer curve should show moderate bend

### Step 3: A/B Test (1 minute)
1. Press Space to play mix
2. Listen for 30 seconds
3. Click bypass button (power icon)
4. Toggle on/off 3-4 times
5. **Does clipped version sound better?**
   - YES → proceed to Step 4
   - NO → raise Threshold to -1.0 dB, re-test

### Step 4: Fine-Tune (2 minutes)
**If it sounds HARSH:**
- Raise Threshold to **-1.0 dB**
- Or lower Post Gain to **+1.0 dB**

**If it sounds TOO WEAK:**
- Lower Threshold to **-2.0 dB**
- Or increase Post Gain to **+2.0 dB**

**If it sounds JUST RIGHT:**
- Leave settings as-is, move to Step 5

### Step 5: Compensate Master Fader (30 seconds)
1. Note Post Gain value (e.g., +1.5 dB)
2. Lower FL Studio Master Fader by same amount (-1.5 dB)
3. Prevents FL master from clipping (red light)

### Step 6: Final Verification (1 minute)
- [ ] Mix sounds louder and "tighter"
- [ ] No obvious harshness or distortion
- [ ] FL Studio master meter not red
- [ ] Mix sounds better than bypassed (at matched volume)

**Total Time:** ~5 minutes

[SRC: REPUTABLE]

---

## Starting Settings

| Parameter | Value | Reason |
|-----------|-------|--------|
| **Threshold** | -1.5 dB | Moderate clipping, safe for most genres |
| **Post Gain** | +1.5 dB | Makeup gain for loudness |
| **Position** | Master track, last insert | Final loudness stage |

---

## What to Listen For

### Positive Indicators (Good)
- Mix feels "forward" and present
- Elements sound more cohesive
- Subtle warmth added
- Loudness increase without harshness

### Negative Indicators (Bad)
- High frequencies sound brittle
- Mix sounds fatiguing
- Obvious distortion artifacts
- Bass sounds "buzzy" (unless Trap)

---

## Variations

### Variation 1: Ultra-Conservative (Transparent)
**Use When:** Client needs zero artifacts  
**Settings:**
- Threshold: **-0.5 dB**
- Post Gain: **+0.5 dB**
**Result:** ~1 dB loudness gain, maximum transparency

---

### Variation 2: Aggressive (Trap/Hip-Hop)
**Use When:** Need competitive streaming loudness  
**Settings:**
- Threshold: **-2.5 dB**
- Post Gain: **+2.5 dB**
**Result:** ~3 dB loudness gain, noticeable saturation

---

## Pitfalls & Fixes

### Pitfall 1: "It sounds louder but worse"
**Cause:** Comparing at different volumes  
**Fix:** Lower master fader to match bypass volume, then compare tone

### Pitfall 2: "FL Studio master is red"
**Cause:** Forgot to lower master fader  
**Fix:** Lower Master Fader by Post Gain amount

---

## Automation Ideas

### Automation 1: Threshold Ramp (Build-Up)
**When:** Intro → Verse → Chorus  
**How:**
- Intro: -0.5 dB
- Verse: -1.0 dB
- Chorus: -1.5 dB
**Result:** Gradual loudness increase (perceived energy build)

### Automation 2: Drop Impact
**When:** Pre-Drop → Drop  
**How:**
- Pre-Drop: -1.0 dB
- Drop Hit: -3.0 dB (snap down at drop)
- Drop Sustain: -2.0 dB
**Result:** Extra punch on drop moment

---

## Summary

> **5-Minute Quick Result:**
> 1. Load on Master
> 2. Set Threshold -1.5 dB, Post +1.5 dB
> 3. A/B test
> 4. Adjust if needed
> 5. Lower Master Fader by Post Gain amount
>
> **Result:** 2-3 dB more loudness with minimal effort.

**Time Investment:** 5 minutes  
**Loudness Gain:** 2-3 dB  
**Complexity:** Minimal

[SRC: REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
