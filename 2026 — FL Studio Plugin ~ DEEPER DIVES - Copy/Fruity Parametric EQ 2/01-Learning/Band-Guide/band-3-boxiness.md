# Band 3: Boxiness / Room Tone 🟠

**Frequency Range:** 300-550 Hz
**Color:** Orange
**Default Filter Type:** Bell
**Primary Role:** Remove cardboard/boxy tone and room resonances

## Overview

Band 3 is the difference between "amateur" and "professional" sound. This range contains the dreaded **"cardboard box" resonance** that makes recordings sound cheap, enclosed, or like they were made in someone's bedroom. It's also where untreated rooms leave their sonic fingerprint.

**The key principle:** Small cuts here make things sound more expensive and open.

## What This Band Controls

- **Boxiness:** The "enclosed in cardboard" sound
- **Room resonances:** Untreated space reflections
- **Midrange congestion:** Instrument masking and buildup
- **Perceived quality:** Amateur vs professional production sound

## Common Problems Band 3 Fixes

### "Recorded in a Room" Sound
**Symptom:** Tracks sound like they were obviously recorded in a small, untreated space
**Solution:** Cut -2 to -3 dB at 350-450 Hz (sweep to find worst resonance)
**Settings:** Bell, BW 50% (medium)

### Boxy Drums/Vocals
**Symptom:** Sounds enclosed, lack openness, "cardboard" quality
**Solution:** Cut -1.5 to -3 dB at 400 Hz
**Settings:** Bell, BW 45-55%

### Congested Midrange
**Symptom:** Multiple instruments fighting in lower midrange
**Solution:** Strategic cuts across tracks at different frequencies
**Settings:** Bell, -1 to -2 dB, medium BW

## Creative Uses

### 1. Make Sound More "Expensive"
**What:** Remove cheap-sounding resonances
**How:** Sweep 300-550 Hz, cut where it sounds "boxy"
**Amount:** -2 to -4 dB
**Result:** More professional, open sound

### 2. Create Distance
**What:** Make sources feel farther away
**How:** Leave Band 3 alone or boost slightly
**When:** Want background elements to stay back
**Amount:** +0.5 to +1 dB for distance

### 3. Add Mid Density
**What:** Thicken sparse mixes
**How:** Tiny boost at 350-400 Hz
**When:** Mix feels thin in the mids
**Warning:** Easy to overdo, creates congestion

## Safe Defaults

### Vocals
- **Frequency:** 350-450 Hz (sweep to find boxiest point)
- **Gain:** -1.5 to -3 dB
- **BW:** 50% (medium)
- **Result:** Open, less "roomy" vocal

### Acoustic Guitar
- **Frequency:** 330-400 Hz
- **Gain:** -2 to -3 dB
- **BW:** 45-55%
- **Result:** Clear, not boxy

### Drums (Snare/Tom)
- **Frequency:** 380-480 Hz
- **Gain:** -2 to -4 dB
- **BW:** 50-60%
- **Result:** Open, not enclosed

### Electric Guitar
- **Frequency:** 350-500 Hz (depends on amp)
- **Gain:** -1 to -2 dB
- **BW:** 45-55%
- **Result:** Cut without mud

## Important Warnings

### ⚠️ Over-Cut Removes Life
**Problem:** Too much cutting makes things sound hollow and lifeless

**Signs:**
- Mix feels empty in the middle
- Instruments lose body
- Overall sound is weak

**Fix:** Back off the cut or widen the BW

### ⚠️ Don't Stack Multiple Mid Cuts
**Problem:** Band 2 + Band 3 + Band 4 cuts create a giant hole

**Prevention:**
- Choose your battles - maybe cut Band 2 OR Band 3, not both aggressively
- Always A/B compare
- If you cut multiple bands, use smaller amounts

## Frequency-Specific Guidance

### 300-350 Hz (Lower Boxiness)
**What's here:** Transition from warmth to mids, some box tone
**Action:** Cut -1 to -2 dB if boxy
**Character:** Dense, can congest

### 350-450 Hz (Core Boxiness)
**What's here:** Primary "cardboard box" resonance
**Action:** Cut -2 to -3 dB on most sources
**Character:** Makes or breaks professional sound

### 450-550 Hz (Upper Boxiness)
**What's here:** Transition to nasal range, some room resonances
**Action:** Cut -1 to -2.5 dB
**Character:** Can sound honky or congested

## Practical Workflow

### Finding the Box Frequency
1. Solo the track
2. Create +6 dB boost, narrow BW (70%)
3. Sweep 300-550 Hz
4. Find where it sounds most "boxy" or "cardboard-like"
5. Change to cut (-2 to -3 dB), medium BW (50%)
6. Verify in mix context

### Integration with Bands 2 & 4
**The Midrange Cleanup Trio:**
- Band 2: Cut -1.5 dB at 240 Hz (mud)
- Band 3: Cut -2 dB at 400 Hz (box)
- Band 4: Cut -1 dB at 850 Hz (honk)
- Result: Clean, clear midrange

## Reference Data

- **Band definition:** `02-Data/band-definitions/eg2.json` (bandId: 3)
- **Archetypes:** `02-Data/presets/eg3.json` (band3_box)
  - "De-Box": Bell, 420 Hz, -2.5 dB, BW 50%
  - "Resonance Notch": Notch, 380 Hz, -4 dB, BW 75% (for obvious resonances only)

---

**Remember:** Band 3 is where amateur recordings reveal themselves. A good cut here = instant professionalism.
