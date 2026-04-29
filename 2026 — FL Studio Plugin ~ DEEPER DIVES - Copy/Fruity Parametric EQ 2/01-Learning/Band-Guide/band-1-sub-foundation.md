# Band 1: Sub / Foundation Control 🟣

**Frequency Range:** 20-120 Hz
**Color:** Purple
**Default Filter Type:** High-Pass
**Primary Role:** Remove rumble and protect headroom

## Overview

Band 1 controls the **inaudible energy and physical weight** of your sound. This is not about what you hear - it's about what you *feel* and what eats your headroom. Think of Band 1 as the gatekeeper that decides whether your mix has a solid foundation or turns into a muddy, headroom-eating mess.

**The key principle:** Almost everything except kick drums and bass should have this frequency range removed.

## What This Band Controls

### Physical Impact
- Sub-rumble that you feel more than hear
- Physical "weight" in the low end
- How much the mix moves air (and speakers)
- Headroom availability for limiters and compressors

### Mix Behavior
- Whether kick and bass have clarity vs fighting with everything else
- Whether the mix "collapses" when hitting a limiter
- Whether small speakers (phones, laptops) can reproduce your mix
- Whether the mix translates well to different playback systems

## Primary Functions

### 1. Remove Rumble
Most sources don't need frequencies below 80 Hz. They just add:
- Mud you don't consciously hear
- Headroom problems
- Masking of kick/bass elements

**Who needs it:** Kick drums, bass, 808s, sub-bass synths
**Who doesn't:** Vocals, guitars, most synths, pads, leads, drums (except kick)

### 2. Protect Headroom
Every Hz of unnecessary low-end takes up dynamic range:
- Makes compressors overreact
- Makes limiters pump
- Reduces overall loudness potential
- Creates mix instability

### 3. Separate Kick/Bass from Everything Else
When everything has sub energy, nothing has clarity:
- Kick gets masked
- Bass loses definition
- Mix feels congested in the low end
- Amateur "muddy mix" syndrome

## Common Problems Band 1 Fixes

### Sub Buildup
**Symptom:** Mix feels heavy, undefined, or "cloudy" in a way you can't quite pinpoint
**Solution:** High-pass at 70-100 Hz on all non-bass elements
**Settings:** HP filter, 80 Hz, BW 25% (wide, gentle)

### Limiter Pumping
**Symptom:** Limiter or compressor seems to overreact, causing pumping or breathing
**Solution:** Remove sub rumble that's triggering the dynamics processor
**Settings:** HP filter, 80-90 Hz on problem tracks, verify with limiter bypass

### Low-End Haze
**Symptom:** Bass and kick aren't punchy or clear despite good levels
**Solution:** HP everything else so kick/bass have that space to themselves
**Settings:** HP 80-100 Hz on non-bass elements, leave kick/bass alone

## Creative Uses

### 1. Lo-Fi Rolloff
**What:** Intentional low-end removal for vintage or lo-fi character
**How:** HP at 100-150 Hz (higher than normal)
**When:** Lo-fi beats, vintage vibes, telephone effects, AM radio sound

### 2. Tighter Modern Low End
**What:** Aggressive HP for ultra-clean, modern production
**How:** HP at 90-100 Hz even on elements with some low-end
**When:** EDM, modern pop, anything needing surgical low-end separation

### 3. Reduce Proximity Boom
**What:** Remove bass buildup from close-mic'd sources
**How:** HP at 60-80 Hz to remove proximity effect
**When:** Close-mic'd vocals, acoustic guitar, hand-held vocal recordings

### 4. Make Vocals Sit "Above" the Mix
**What:** Remove vocal low-end so they float over the instrumental
**How:** HP at 80-120 Hz depending on vocal type
**When:** Dense mixes, when vocals are getting lost, modern pop production

## Safe Defaults

### For Vocals (Lead)
- **Type:** High-Pass
- **Frequency:** 80-100 Hz
- **BW:** 25% (wide, gentle rolloff)
- **Result:** Clean, no muddiness, sits above the bass

### For Vocals (Background)
- **Type:** High-Pass
- **Frequency:** 100-150 Hz (more aggressive)
- **BW:** 25-30%
- **Result:** Stay out of the way of lead vocal and bass

### For Synths/Pads (Non-Bass)
- **Type:** High-Pass
- **Frequency:** 80-120 Hz
- **BW:** 25-30%
- **Result:** Clean low-mid, doesn't fight with bass

### For Guitars
- **Type:** High-Pass
- **Frequency:** 80-100 Hz (acoustic), 90-120 Hz (electric)
- **BW:** 25%
- **Result:** Natural tone without mud

### For Kick Drum
- **Type:** Usually leave alone OR use low shelf
- **Frequency:** 45-60 Hz (if boosting for weight)
- **Gain:** +1 to +3 dB (track level only)
- **Result:** Enhanced sub weight

### For Bass/808
- **Type:** Leave alone OR very gentle HP
- **Frequency:** 30-40 Hz (only if removing DC offset or true sub-rumble)
- **BW:** 15-20% (very wide)
- **Result:** Protect against room rumble, preserve fundamental

## Important Warnings

### ⚠️ Don't Over-Cut
**Problem:** High-passing too high makes things sound thin, weak, or unnatural
**How to check:** Bypass the EQ and listen - did you lose too much body?
**Fix:** Lower the HP frequency 10-20 Hz until it sounds natural

**Rules of thumb:**
- Male vocals: Don't go above 100 Hz unless intentional
- Female vocals: Can go 100-120 Hz safely
- Instruments: Err on the side of less cutting

### ⚠️ Never Boost Sub Unless Designing Bass
**Why:** Boosting below 100 Hz on the master or non-bass elements is almost always a mistake

**Problems it causes:**
- Headroom destruction
- Limiter pumping
- Mix translation issues
- Bass masking

**When boosting is OK:**
- Track level only (never bus or master)
- On kick drums (small boost 45-60 Hz)
- On 808/bass synths (small boost for weight)
- Always check on multiple playback systems

### ⚠️ Watch the Bandwidth
**Too narrow (high %):** Sounds unnatural, phase issues, weird resonances
**Too wide (low %):** May not remove enough rumble

**Sweet spot:** 15-30% BW for high-pass filters (wide, musical)

## Frequency-Specific Guidance

### 20-30 Hz (True Sub-Bass)
**What's here:** Mostly felt, barely heard
**Action:** Remove from everything except kick/bass/808
**Why:** No speakers reproduce this well, wastes headroom

### 30-45 Hz (Deep Sub)
**What's here:** Sub-bass fundamentals, kick drum sub
**Action:** Preserve on kick/bass, remove from everything else
**Why:** This is where kick and bass live - keep it exclusive

### 45-60 Hz (Fundamental Bass)
**What's here:** Bass/808 fundamental, kick drum body
**Action:** Can boost slightly on kick/bass if needed
**Why:** Core low-end weight, but be conservative

### 60-80 Hz (Upper Sub)
**What's here:** Bass harmonics, some male vocal fundamentals
**Action:** Common HP point for most instruments
**Why:** Balances natural sound with mud removal

### 80-100 Hz (Sub-to-Low Transition)
**What's here:** Male vocal fundamentals, low guitar notes
**Action:** Most common HP frequency for vocals/instruments
**Why:** Safe removal point that preserves natural tone

### 100-120 Hz (Low-End Boundary)
**What's here:** Low notes of most instruments
**Action:** Upper limit for HP on most sources
**Why:** Going higher starts removing musical content

## Practical Workflow

### Step 1: Start with Everything HP'd
Default approach: HP everything at 80 Hz except kick/bass
- Gives you a clean slate
- Ensures headroom
- Lets you hear what's really needed

### Step 2: Adjust by Listening
For each track:
1. Solo the track
2. Enable the HP filter at 80 Hz
3. Slowly sweep up until you hear it getting thin
4. Back off 10-20 Hz
5. Check in context with the full mix

### Step 3: Verify in Context
With the full mix playing:
- Does the kick have more punch?
- Does the bass have more clarity?
- Does the overall mix feel cleaner?
- Did you lose too much weight anywhere?

### Step 4: Check Translation
Listen on different systems:
- Headphones (should have controlled low-end)
- Phone speaker (should still sound balanced)
- Car (should have punch without boom)
- Studio monitors (should have clarity and power)

## Common Mistakes

### Mistake 1: Not Using Band 1 at All
**Symptom:** Mix feels muddy, limiter pumps, lacks clarity
**Fix:** HP everything except kick/bass at 80 Hz minimum

### Mistake 2: HP'ing Kick/Bass Too Much
**Symptom:** Mix has no weight, sounds thin and weak
**Fix:** Leave kick/bass alone or use very gentle HP (30-40 Hz only for DC offset)

### Mistake 3: Using Too Narrow Bandwidth
**Symptom:** Unnatural sound, phase issues, weird resonance
**Fix:** Use BW of 15-30% (wide rolloff)

### Mistake 4: Setting and Forgetting
**Symptom:** Same HP frequency on everything regardless of source
**Fix:** Adjust per instrument - male vocals differ from female vocals, etc.

### Mistake 5: Boosting Sub on Master
**Symptom:** Entire mix becomes uncontrollable, limiters destroy dynamics
**Fix:** NEVER boost Band 1 on master bus. Fix issues at track level.

## Listen For (Verification)

### When Done Correctly:
- ✅ Kick drum has punch and definition
- ✅ Bass is clear and doesn't fight with kick
- ✅ Mix has headroom and doesn't pump when limited
- ✅ Small speakers can reproduce the mix
- ✅ Overall mix feels "clean" in the low-end
- ✅ Individual tracks retain natural character

### Warning Signs:
- ❌ Vocals sound thin or weak
- ❌ Mix sounds hollow or lacking weight
- ❌ Unnatural tone on instruments
- ❌ Phase issues or weird resonances
- ❌ Mix still muddy despite HP filtering

## Integration with Other Bands

### Band 1 + Band 2 (Warmth)
Combo approach for mud removal:
- Band 1: HP at 80 Hz
- Band 2: Cut -1 to -2 dB at 200-250 Hz
- Result: Clean, controlled low-mids without mud

### Band 1 + Band 5 (Presence)
Vocal clarity combo:
- Band 1: HP at 80-100 Hz
- Band 5: Boost +1 to +2 dB at 2-3 kHz
- Result: Vocal sits above mix with clarity

## Genre-Specific Approaches

### EDM/Electronic
- **Aggressive HP:** 90-100 Hz on everything except kick/bass/sub
- **Why:** Needs surgical low-end separation for club systems
- **Kick/bass:** Often have exclusive sub energy, heavily compressed

### Hip-Hop
- **Moderate HP:** 70-80 Hz on non-bass elements
- **Why:** 808s need exclusive sub range for impact
- **Vocals:** Can go as low as 60-70 Hz on male rap vocals (but check for mud)

### Rock/Live Instruments
- **Gentle HP:** 60-80 Hz on most instruments
- **Why:** Live instruments have natural low-end that can be musical
- **Bass guitar:** Usually leave alone, may HP at 40 Hz for rumble only

### Pop/R&B
- **Vocal-focused HP:** 80-100 Hz on vocals, aggressive HP on background elements
- **Why:** Vocal clarity is paramount, bass/kick support but don't dominate
- **Layering:** Heavy stacking requires clean low-end separation

## Reference Data

For exact specifications and presets, see:
- **Band definition:** `02-Data/band-definitions/eg2.json` (bandId: 1)
- **Archetypes:** `02-Data/presets/eg3.json` (band1_sub)
  - "HP Clean": 80 Hz high-pass, BW 25%
  - "HP Tight": 100 Hz high-pass, BW 30%
  - "Low Shelf Weight": 60 Hz shelf boost +2 dB (bass sources only)

## Practice Exercise

1. **Load a dense mix in FL Studio**
2. **On every non-bass track, add Fruity Parametric EQ 2**
3. **Set Band 1 to high-pass at 80 Hz, BW 25%**
4. **Listen to the difference:**
   - Bypass all EQs
   - Enable all EQs
   - Notice: kick punch, bass clarity, headroom improvement
5. **Adjust individual tracks** based on what you hear
6. **Check on phone speaker** - still balanced?

## Next Steps

- **Continue to Band 2** to learn about removing mud and adding warmth
- **Document your findings** in `03-Workflows/by-instrument/`
- **Create your own HP preset** for your common workflow

---

**Remember:** Band 1 is about subtraction, not addition. When in doubt, high-pass it.
