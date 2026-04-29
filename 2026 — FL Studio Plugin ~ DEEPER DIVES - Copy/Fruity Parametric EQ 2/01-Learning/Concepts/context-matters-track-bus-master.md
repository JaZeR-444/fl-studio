# Context Matters: Track vs Bus vs Master EQ

Why the same EQ move has different effects at different stages of your mix chain.

## The Three Contexts

### Track Level (Individual Sounds)
- **What:** EQ on individual tracks (vocal, guitar, drum, etc.)
- **When:** First stage of mixing
- **Freedom:** Most aggressive moves allowed
- **Typical range:** ±3 to ±6 dB

### Bus Level (Group Processing)
- **What:** EQ on grouped tracks (drum bus, vocal bus, instrument bus)
- **When:** After individual tracks are balanced
- **Freedom:** Moderate moves
- **Typical range:** ±1.5 to ±3 dB

### Master Level (Final Polish)
- **What:** EQ on the entire mix
- **When:** Final stage, mastering
- **Freedom:** Very subtle moves only
- **Typical range:** ±0.5 to ±1.5 dB

## Why Context Changes Everything

### Compounding Effect
**Track level** + **Bus level** + **Master level** = **Cumulative boost/cut**

**Example - Air boost:**
- Vocal track: +2.5 dB @ 12 kHz (Band 7)
- Vocal bus: +1.5 dB shelf @ 12 kHz
- Master: +2 dB shelf @ 12 kHz
- **Total:** +6 dB = harsh, brittle, fatiguing

**Better approach:**
- Vocal track: +2 dB @ 12 kHz
- Vocal bus: +0.5 dB shelf @ 12 kHz
- Master: +1 dB shelf @ 12 kHz
- **Total:** +3.5 dB = polished without harshness

### Number of Sources Affected
- **Track:** 1 source
- **Bus:** Multiple sources
- **Master:** ALL sources

**Implication:** Broader effect = smaller moves needed

## Track Level EQ

### Purpose
- **Correct** individual source problems
- **Shape** tone of specific elements
- **Prepare** tracks to sit well in mix

### What You Can Do
✅ Aggressive problem-solving
- HP filtering (Band 1)
- Mud removal (Band 2: -2 to -3 dB)
- De-boxing (Band 3: -2 to -4 dB)
- Nasal reduction (Band 4: -1 to -2 dB)

✅ Significant enhancement
- Presence boosts (Band 5: +2 to +3 dB)
- Detail addition (Band 6: +1 to +2 dB)
- Air enhancement (Band 7: +2 to +4 dB)

✅ Creative tone shaping
- Character changes
- Dramatic filtering
- Genre-specific adjustments

### Safe Maximums (per band)
All bands allow up to **±6 dB** at track level according to the data model, but typical use is:
- Cuts: -1 to -4 dB
- Boosts: +1 to +3 dB (rarely +6 dB)

### Track Level Philosophy
**Do the heavy lifting here.**
- Most EQ work happens at track level
- Get each track sounding right individually
- Prepare tracks to fit together

## Bus Level EQ

### Purpose
- **Glue** multiple tracks together
- **Balance** group of sounds as one unit
- **Polish** collective tone

### What You Can Do
✅ Gentle cohesion moves
- Small cuts to unify tone
- Subtle boosts for group character
- Gentle sculpting of frequency balance

❌ What to avoid
- Large corrective moves (should be done at track level)
- Dramatic tone shaping
- Aggressive boosts

### Safe Maximums (per band)
All bands allow up to **±3 dB** at bus level according to the data model, but typical use is:
- Cuts: -0.5 to -2 dB
- Boosts: +0.5 to +1.5 dB

### Common Bus EQ Uses

**Vocal Bus:**
- Slight air boost: +1 to +1.5 dB shelf @ 12 kHz
- Group de-mud: -1 dB @ 240 Hz
- Subtle presence: +0.5 to +1 dB @ 2.5 kHz

**Drum Bus:**
- HP to clean up: 40-50 Hz
- Slight punch: +1 dB @ 60-80 Hz (kick body)
- Snappy top: +1 dB @ 5-6 kHz

**Instrument Bus:**
- De-mud: -1 to -1.5 dB @ 200-250 Hz
- Gentle air: +1 dB shelf @ 10-12 kHz

### Bus Level Philosophy
**Subtle glue, not correction.**
- If you need big moves on a bus, fix individual tracks instead
- Bus EQ should enhance what's already working
- Think "polish" not "problem-solving"

## Master Level EQ

### Purpose
- **Final balance** of the complete mix
- **Subtle enhancement** for competitive loudness/tone
- **Translation** optimization for different systems

### What You Can Do
✅ Micro-adjustments only
- Tiny tonal tweaks
- Very subtle enhancement
- Final polish

❌ What to NEVER do
- Fix individual instrument problems
- Dramatic frequency changes
- Compensate for poor mix decisions

### Safe Maximums (per band)
All bands allow up to **±1.5 dB** at master level according to the data model, but typical use is:
- Cuts: -0.5 to -1 dB
- Boosts: +0.5 to +1 dB

### Common Master EQ Uses

**Clean up bottom:**
- HP at 25-30 Hz (remove true sub-rumble)
- Slight cut -0.5 to -1 dB @ 200-250 Hz if still muddy

**Final polish:**
- Gentle air: +0.5 to +1 dB shelf @ 12-14 kHz
- Subtle presence: +0.5 dB @ 2.5-3 kHz (if really needed)

**Problem solving:**
- Tame harshness: -0.5 to -1 dB @ 3-5 kHz
- Smooth out: -0.5 dB where needed

### Master Level Philosophy
**If you're doing more than ±1 dB, something's wrong upstream.**
- Master EQ fixes the mix, not individual elements
- Large moves indicate problems in the mix stage
- Go back and fix at track/bus level instead

### The "Mastering" Misconception
**Wrong:** "I'll fix it in mastering"
**Right:** "I'll polish an already great mix in mastering"

Mastering EQ should be subtle finishing touches, not problem-solving.

## The Cascade Effect

### Example: Air Enhancement Gone Wrong

**Track Level:**
- Lead vocal: +3 dB shelf @ 12 kHz
- BGVs (3 tracks): +2 dB shelf @ 11 kHz each
- Acoustic guitar: +2.5 dB shelf @ 12 kHz
- Piano: +2 dB shelf @ 11 kHz
- Strings: +2 dB shelf @ 10 kHz

**Bus Level:**
- Vocal bus (lead + BGVs): +1.5 dB shelf @ 12 kHz
- Instrument bus: +1 dB shelf @ 11 kHz

**Master:**
- Mix bus: +2 dB shelf @ 13 kHz

**Result:** Cumulative +10-15 dB in upper frequencies = harsh, brittle, unlistenable

### Better Approach

**Track Level:**
- Lead vocal only: +2 dB shelf @ 12 kHz
- Everything else: neutral or slight cuts

**Bus Level:**
- Vocal bus: +0.5 dB shelf @ 12 kHz
- Instrument bus: neutral

**Master:**
- Mix bus: +1 dB shelf @ 13 kHz

**Result:** Cumulative +3.5 dB = polished and airy without harshness

## Decision Matrix

### Where to Make Your Move

| Issue | Fix At | Why |
|-------|--------|-----|
| Single track muddy | TRACK | Specific problem |
| All drums boxy | DRUM BUS | Group issue |
| Entire mix slightly dull | MASTER | Overall character |
| Vocal too nasal | TRACK | Individual correction |
| Vocal bus too dark | BUS | Group polish |
| Mix lacks slight air | MASTER | Final enhancement |
| Guitar too bright | TRACK | Specific taming |
| Instrument bus too warm | BUS | Group balance |

### The Diagnostic Flow

1. **Identify the problem** - What sounds wrong?
2. **Locate the source** - One track? A group? The whole mix?
3. **Choose the right level:**
   - **Specific track** → Track EQ
   - **Group of tracks** → Bus EQ
   - **Overall mix character** → Master EQ
4. **Use appropriate amount** based on context

## Practical Guidelines by Band

### Band 1 (Sub/HP)
- **Track:** HP 70-100 Hz on most sources
- **Bus:** HP 30-40 Hz if needed (cleanup only)
- **Master:** HP 25-30 Hz (DC offset/rumble removal only)

### Band 2 (Warmth/Mud)
- **Track:** -1 to -3 dB cuts common, occasional +1 to +2 dB boost
- **Bus:** -0.5 to -1.5 dB if group is muddy
- **Master:** -0.5 to -1 dB maximum

### Band 3 (Boxiness)
- **Track:** -1.5 to -4 dB cuts
- **Bus:** -0.5 to -1.5 dB if needed
- **Master:** -0.5 to -1 dB maximum (rarely needed)

### Band 4 (Nasal/Honk)
- **Track:** -1 to -2 dB cuts (small moves)
- **Bus:** -0.5 to -1 dB if needed
- **Master:** -0.5 dB maximum (very rare)

### Band 5 (Presence)
- **Track:** -1 to +3 dB (boost for leads, cut for competing elements)
- **Bus:** -0.5 to +1.5 dB
- **Master:** +0.5 to +1 dB maximum

### Band 6 (Detail)
- **Track:** -2 to +2 dB (cut harshness or add detail)
- **Bus:** -1 to +1 dB
- **Master:** +0.5 to +1 dB maximum

### Band 7 (Air)
- **Track:** +1 to +4 dB shelf (leads and featured elements)
- **Bus:** +0.5 to +2 dB shelf
- **Master:** +0.5 to +1.5 dB shelf maximum

## Common Mistakes by Context

### Track Level Mistakes
❌ Being too timid with cuts
❌ Using same settings on every track
❌ Not addressing obvious problems

✅ Do: Be decisive, customize per track, fix problems here

### Bus Level Mistakes
❌ Using bus EQ to fix individual track problems
❌ Making dramatic moves
❌ Treating bus like a track

✅ Do: Gentle moves, glue thinking, group cohesion

### Master Level Mistakes
❌ "Fixing" the mix on the master
❌ Boosting more than +1 dB on anything
❌ Using master EQ to compensate for bad mixing

✅ Do: Micro-adjustments, final polish only, trust the mix

## The Professional Approach

### Mixing Workflow
1. **Track EQ first** - Get each element right
2. **Check in context** - How do tracks interact?
3. **Bus EQ second** - Polish groups if needed
4. **Master EQ last** - Final subtle tweaks only

### The Pyramid Principle
```
        MASTER (subtle)
           /\
          /  \
         /    \
    BUS (moderate)
       /\    /\
      /  \  /  \
    TRACK (aggressive)
```

- Foundation: Aggressive track-level work
- Middle: Moderate bus-level glue
- Top: Subtle master-level finish

### Verification Questions
Before making any move, ask:

**"Is this the right level to make this change?"**
- If fixing one track → Track EQ
- If affecting a group → Bus EQ
- If touching up the whole mix → Master EQ

**"Am I being too aggressive for this context?"**
- Track: Can be aggressive
- Bus: Should be moderate
- Master: Must be subtle

**"Did I already boost/cut this frequency elsewhere?"**
- Check the cascade effect
- Avoid compounding moves

## Summary

| Context | Purpose | Amount | Philosophy |
|---------|---------|--------|------------|
| **Track** | Correct & shape | ±1 to ±4 dB typical | Heavy lifting |
| **Bus** | Glue & polish | ±0.5 to ±2 dB | Gentle cohesion |
| **Master** | Final balance | ±0.5 to ±1 dB | Micro-adjustments |

**Golden Rule:** The broader the context, the smaller the move.

---

**Practice:** Load a mix and identify where each EQ issue should actually be fixed - track, bus, or master. Often you'll find you're trying to fix track problems on the master, which never works well.
