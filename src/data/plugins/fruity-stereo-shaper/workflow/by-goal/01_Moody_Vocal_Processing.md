# Moody Vocal Processing - Intimate Stereo Control

## Goal
Create emotionally intimate, centered vocals with subtle stereo width for moody/dark hip-hop, while keeping vocals present and clear in mono.

## When to Use
- Sad trap / emo rap vocals
- Introspective storytelling verses
- Dark melodic hooks
- Lo-fi vocal performances
- Late-night vibe tracks

## The Problem
**Wide vocals = washed out and distant**
**Too narrow = lifeless and flat**

Need: Centered presence + subtle spatial depth

## The Solution: Mid/Side Vocal Processing

### Quick Version (5 Minutes)
1. Load Fruity Stereo Shaper on vocal track
2. Use "LR to MS" preset (or "Vocal Center Extract")
3. Now Left channel = Mid (vocal), Right channel = Side (space)
4. Add compression to Mid only
5. Add subtle reverb to Side only
6. Load another Stereo Shaper, use "MS to LR" preset
7. Done - clear centered vocal with spatial depth

### Detailed Version (Professional)

## Step-by-Step Workflow

### Setup (In Patcher)

**1. Create MS Split**
```
VOCAL IN → STEREO SHAPER 1 (LR to MS)
           ├── MID OUT (Left) → MID CHAIN
           └── SIDE OUT (Right) → SIDE CHAIN
```

**Matrix Settings for LR-to-MS:**
- L→L: 0.707
- L→R: 0.707
- R→L: 0.707
- R→R: -0.707

**2. Solo Mid Component First**
- Use "Solo Mid" button in Stereo Shaper
- This is your vocal core - should be clear and dry

**3. Solo Side Component**
- Use "Solo Side" button
- This is ambient/reverb content - should be subtle

### Mid Chain Processing (Vocal Core)

**Add to Mid Channel:**

**A. Compression**
- Ratio: 3:1 to 4:1
- Threshold: -12dB to -8dB
- Attack: 10-30ms
- Release: 100-200ms
- Goal: Consistent, intimate vocal level

**B. EQ (Parametric EQ 2)**
- High-pass: 80-100Hz (remove rumble)
- Presence boost: +2-4dB at 3-5kHz (clarity)
- De-harsh: -2dB at 7-9kHz if needed (smoothness)
- Air: +1-2dB shelf at 12kHz (modern sheen)

**C. Saturation (Optional)**
- Subtle tape saturation (5-10% mix)
- Adds warmth and harmonic richness
- Use Effector or Blood Overdrive gently

### Side Chain Processing (Spatial Depth)

**Add to Side Channel:**

**A. Reverb (Fruity Reeverb 2)**
- Size: Small to Medium (0.5-1.5s decay)
- Damping: 50-70% (darker reverb)
- Mix: 15-25% (subtle depth)
- Pre-delay: 10-20ms (separation from dry vocal)
- High-cut: 8kHz (remove harshness)

**B. Stereo Delay (Optional)**
- Time: 1/16 or 1/8 note
- Feedback: 10-20% (1-2 repeats)
- Mix: 5-10% (barely audible)
- Ping-pong panning

**C. EQ Side Channel**
- High-pass: 300-500Hz (keep low-mids in mid)
- Reduce harsh frequencies: -2dB at 3kHz
- Brighten top: +2dB shelf at 10kHz

### Reconstruction

**3. Add Stereo Shaper 2 (MS to LR)**
```
MID + SIDE → STEREO SHAPER 2 (MS to LR) → STEREO OUT
```

**Matrix Settings for MS-to-LR:**
- L→L: 1.0
- L→R: 1.0
- R→L: 1.0
- R→R: -1.0

### Balance Mid/Side Levels

**Before reconstruction, adjust levels:**
- Mid: 0dB (reference level)
- Side: -3 to -6dB (subtle depth)

**Result:** Clear centered vocal + ambient depth

## Hip-Hop Genre Variations

### Moody/Dark Hip-Hop (Sad Trap)
**Mid:** Heavy compression (4:1), dark EQ (reduce 2-4kHz), slight saturation
**Side:** Dark reverb (low-passed at 6kHz), minimal delay
**Width:** Narrow - Side at -6dB

**Example Artists:** Juice WRLD, XXXTentacion, Lil Peep

### Upbeat/Club Hip-Hop (Energetic)
**Mid:** Moderate compression (3:1), presence boost (5kHz), clean
**Side:** Bright reverb, stereo delay
**Width:** Medium - Side at -3dB

**Example Artists:** Drake (energy tracks), Travis Scott

### Lo-Fi/Chill Hip-Hop
**Mid:** Gentle compression (2:1), warm EQ (roll off highs), tape saturation
**Side:** Vintage reverb (Spring/Plate), wobbly chorus
**Width:** Narrow - Side at -8dB

**Example Artists:** Lo-fi beats, chill hop playlists

### Melodic/R&B Hip-Hop
**Mid:** Transparent compression, smooth EQ, vocal clarity
**Side:** Lush reverb (Hall), subtle chorus, melodic delay
**Width:** Medium-wide - Side at -2dB

**Example Artists:** Frank Ocean, The Weeknd, Bryson Tiller

### Trap/Electronic Hip-Hop
**Mid:** Punchy compression (5:1), aggressive EQ (scooped mids), distortion
**Side:** Massive reverb, ping-pong delay
**Width:** Wide - Side at -1dB

**Example Artists:** Future, Metro Boomin productions

## Automation for Dynamics

### Verse (Intimate)
- Side level: -8dB
- Reverb mix: 10%
- Narrow stereo field

### Pre-Chorus (Building)
- Side level: -4dB
- Reverb mix: 15%
- Width opening up

### Chorus (Impact)
- Side level: -2dB
- Reverb mix: 25%
- Wide stereo field

**Automate Side channel level for dynamic width control**

## Common Mistakes

### Mistake 1: Too Much Side Content
**Problem:** Vocal disappears in mono
**Fix:** Keep Side at least -3dB below Mid

### Mistake 2: Harsh Side Reverb
**Problem:** Reverb sounds brittle and distracting
**Fix:** Low-pass Side at 6-8kHz, reduce 3kHz

### Mistake 3: Reverb on Mid
**Problem:** Vocal gets washed out
**Fix:** Only add reverb to Side channel

### Mistake 4: No Mono Check
**Problem:** Sounds great in headphones, weak on phones
**Fix:** Check mono frequently during processing

### Mistake 5: Over-Processing
**Problem:** Vocal sounds unnatural
**Fix:** Keep it subtle - less is more for moody vocals

## Mono Compatibility Check

**After processing, check:**
1. Press mono button on mixer
2. Vocal should still be clear and present
3. If vocal disappears, reduce Side level
4. If vocal sounds thin, boost Mid slightly

**Target:** 90% of vocal clarity maintained in mono

## Pro Tips

1. **Start with Mid only:** Get vocal sounding perfect before adding Side
2. **Side = space, not volume:** Side should be felt, not heard directly
3. **Reverb pre-delay:** 10-20ms separates reverb from dry vocal
4. **High-pass Side aggressively:** Keep low-mids only in Mid (300-500Hz)
5. **Use dark reverb:** Low-pass at 6-8kHz for moody vibe
6. **Automate width:** Narrow verse, wider chorus
7. **Check mono constantly:** Use mixer mono button
8. **Less is more:** Subtle Side processing = professional sound
9. **Match genre:** Moody = narrow, Upbeat = wider
10. **Trust your ears:** If it sounds wrong, it is wrong

## Quick Reference Settings

### Moody Vocal Preset
```
MID CHAIN:
- Compression: 4:1, -10dB threshold
- EQ: HPF 90Hz, +3dB @ 4kHz, -2dB @ 8kHz
- Saturation: 10% tape warmth

SIDE CHAIN:
- Reverb: 1.0s decay, 20% mix, damping 70%
- EQ: HPF 400Hz, LPF 6kHz
- Level: -6dB

WIDTH: Narrow (intimate)
MONO SAFE: Yes
```

## Signal Flow Diagram

```
VOCAL INPUT (Stereo)
      ↓
STEREO SHAPER 1 (LR to MS)
      ├── MID (Left) → COMPRESS → EQ → SATURATE ──┐
      └── SIDE (Right) → REVERB → EQ → DELAY ──────┤
                                                    ↓
                              STEREO SHAPER 2 (MS to LR)
                                                    ↓
                              MOODY VOCAL OUTPUT (Stereo)
```

## Before/After Comparison

**BEFORE (Raw Vocal):**
- Dry and lifeless
- No depth or space
- Flat dynamics
- Inconsistent level

**AFTER (MS Processed):**
- Clear and present (Mid)
- Subtle spatial depth (Side)
- Controlled dynamics
- Intimate and emotional
- Mono compatible

## Saves Time By
- Processing vocal and reverb separately
- Maintaining mono compatibility automatically
- Avoiding muddiness from center reverb
- Creating professional vocal sound quickly

## Works Great With
- **Fruity Parametric EQ 2:** Surgical EQ on Mid/Side
- **Fruity Compressor:** Vocal compression on Mid
- **Fruity Reeverb 2:** Dark ambient reverb on Side
- **Fruity Delay 3:** Rhythmic delays on Side
- **Patcher:** Essential for MS routing
- **Wave Candy:** Visualize stereo field
