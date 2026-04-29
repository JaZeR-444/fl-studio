# Band 4: Nasal / Honk / Mid Focus 🟡

**Frequency Range:** 600-1200 Hz
**Color:** Yellow
**Default Filter Type:** Bell
**Primary Role:** Control nasal quality and midrange aggression

## Overview

Band 4 is the **most sensitive frequency range** - small moves make big differences. This is where voices sound nasal, instruments sound "honky," and mixes can become fatiguing to listen to. It's also where you can make things cut through a mix or push them back.

**The key principle:** Small changes only. ±1 to 2 dB maximum in most cases.

## What This Band Controls

- **Nasal quality:** The "talking through your nose" sound
- **Honk:** The "megaphone" or "telephone" character
- **Forwardness:** How much something pushes at the listener
- **Ear fatigue:** Too much here = listener exhaustion

## Common Problems Band 4 Fixes

### Nasal Vocals
**Symptom:** Vocal sounds like singer is pinching their nose
**Solution:** Cut -1 to -2 dB at 700-1000 Hz
**Settings:** Bell, BW 60% (medium-narrow)
**Find it:** Boost and sweep - it'll sound awful when you hit it

### Honky Instruments
**Symptom:** Guitar, piano, or brass sounds like it's coming through a megaphone
**Solution:** Cut -1 to -2 dB at 800-1000 Hz
**Settings:** Bell, BW 55-65%

### Fatiguing Mids
**Symptom:** Mix sounds aggressive or tiring to listen to
**Solution:** Small cuts (-0.5 to -1.5 dB) across multiple tracks
**Settings:** Bell, BW 50-60%

## Creative Uses

### 1. Make Vocals Cut Through
**What:** Small boost for presence and forward character
**How:** +1 to +2 dB at 900-1100 Hz
**When:** Dense mix, vocal getting lost
**Warning:** Easily becomes harsh - use sparingly

### 2. Telephone/Lo-Fi Effect
**What:** Intentional honky, retro character
**How:** +3 to +6 dB at 1000 Hz, narrow BW (70-80%)
**When:** Creative effect, lo-fi aesthetic
**Result:** AM radio, telephone, vintage sound

### 3. Emphasize Character Over Polish
**What:** Leave or slightly boost for raw, characterful sound
**How:** +0.5 to +1 dB at 800-900 Hz
**When:** Want rawness, edge, aggression
**Genre:** Rock, punk, garage

## Safe Defaults

### Vocals (Reduce Nasal)
- **Frequency:** 700-1000 Hz (sweep to find nasal spot)
- **Gain:** -1 to -2 dB
- **BW:** 60% (medium-narrow)
- **Result:** Natural, less nasal

### Vocals (Add Presence)
- **Frequency:** 900-1100 Hz
- **Gain:** +1 to +1.5 dB
- **BW:** 50-55%
- **When:** Needs to cut through mix
- **Warning:** Check for harshness

### Guitars/Piano
- **Frequency:** 800-1000 Hz
- **Gain:** -1 to -1.5 dB
- **BW:** 55-65%
- **Result:** Less honk, more natural

### Brass/Saxophone
- **Frequency:** 700-900 Hz
- **Gain:** -0.5 to -1.5 dB (tame aggression)
- **BW:** 60%
- **Result:** Smooth, not piercing

## Important Warnings

### ⚠️ Small Moves Only
**Why this range is sensitive:**
- Human ear is most sensitive 1-4 kHz (Band 4 is the entry point)
- Small changes are very audible
- Easy to overdo

**Guidelines:**
- Track level: Maximum ±2 dB
- Bus level: Maximum ±1 dB
- Master level: Maximum ±0.5 dB

### ⚠️ Too Much Cut = Distance
**Problem:** Over-cutting Band 4 makes things sound far away or hollow

**Signs:**
- Vocal or instrument loses presence
- Sounds distant or underwater
- Mix lacks midrange focus

**Fix:** Use smaller cuts or widen BW

### ⚠️ Boost = Potential Harshness
**Problem:** Boosting Band 4 can quickly become fatiguing

**Prevention:**
- Start with +0.5 dB, listen for 30+ seconds
- Increase slowly if needed
- Never boost on multiple tracks without checking total effect
- Always check on headphones (reveals harshness)

## Frequency-Specific Guidance

### 600-750 Hz (Lower Honk)
**What's here:** Low nasal resonances, some body
**Action:** Cut -0.5 to -1.5 dB if honky
**Character:** Can sound thick or congested

### 750-900 Hz (Core Nasal)
**What's here:** Primary nasal/honk zone for vocals
**Action:** Cut -1 to -2 dB for nasal vocals
**Character:** Where nasality lives

### 900-1100 Hz (Upper Honk/Presence)
**What's here:** Presence beginning, can be nasal or forward
**Action:** Cut for honk, boost for presence (carefully)
**Character:** Dual nature - problem or solution

### 1100-1200 Hz (Transition to Presence)
**What's here:** Border with Band 5 presence range
**Action:** Usually subtle adjustments
**Character:** Beginning of "air" and presence

## Practical Workflow

### Finding Nasality
1. Solo vocal or instrument
2. Create +6 dB boost, BW 70%
3. Sweep 600-1200 Hz slowly
4. Listen for the "nose-pinched" or "megaphone" sound
5. That's your nasal frequency
6. Change to cut (-1 to -2 dB), BW 60%
7. Verify sounds more natural

### Adding Controlled Presence
1. If element is getting lost in mix
2. Try small boost +1 dB at 900-1000 Hz
3. Listen in full mix for 30+ seconds
4. If sounds harsh, reduce amount or frequency
5. Consider using Band 5 instead (often better choice)

## Integration with Other Bands

### Band 3 + Band 4 (Midrange Cleanup)
Remove boxy and honky together:
- Band 3: Cut -2 dB at 400 Hz
- Band 4: Cut -1 dB at 850 Hz
- Result: Open, clear midrange

### Band 4 + Band 5 (Presence Control)
Fine-tune vocal presence:
- Band 4: Cut -1 dB at 800 Hz (reduce honk)
- Band 5: Boost +2 dB at 2.5 kHz (add clarity)
- Result: Present without being honky

## Genre-Specific Approaches

### Pop/R&B
- Cut -1 to -2 dB to remove nasality
- Keep vocals smooth and polished

### Rock/Alternative
- May boost +0.5 to +1 dB for aggression
- Embrace some edge and character

### EDM/Electronic
- Usually cut -0.5 to -1 dB
- Keep synthetic sounds smooth

### Hip-Hop
- Depends on style - modern = cut, older = may boost
- Check for 808/vocal interaction

## Reference Data

- **Band definition:** `02-Data/band-definitions/eg2.json` (bandId: 4)
- **Archetypes:** `02-Data/presets/eg3.json` (band4_honk)
  - "Tame Honk": Bell, 850 Hz, -1.5 dB, BW 60%
  - "Telephone": Bell, 1000 Hz, +3 dB, BW 80% (creative effect)

## Practice Exercise

1. **Load a vocal track**
2. **Create +6 dB boost at 800 Hz, narrow BW**
3. **Sweep 600-1200 Hz - listen for nasality**
4. **Note the worst frequency**
5. **Change to -1.5 dB cut at that frequency**
6. **Widen BW to 60%**
7. **Compare before/after** - should sound more natural

---

**Remember:** Band 4 is sensitive. When in doubt, use smaller amounts than you think you need.
