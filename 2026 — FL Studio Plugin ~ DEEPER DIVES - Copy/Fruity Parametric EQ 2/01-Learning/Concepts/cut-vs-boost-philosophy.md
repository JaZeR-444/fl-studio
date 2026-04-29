# Cut vs Boost Philosophy

Understanding when to cut, when to boost, and why it matters.

## The Core Principle

**"Cut to fix problems, boost to enhance character."**

Most mixing issues are solved by removing problematic frequencies, not by adding "good" frequencies. This is counter-intuitive for beginners who think "more is better."

## Why Cutting is Safer

### 1. Headroom Preservation
- **Cuts:** Create space, reduce level, free up headroom
- **Boosts:** Increase level, consume headroom, risk clipping
- **Result:** Cuts allow louder final mix without distortion

### 2. Frequency Stacking
- **Problem:** Multiple tracks with the same boost compound
  - Track 1: +2 dB @ 3 kHz
  - Track 2: +2 dB @ 3 kHz
  - Track 3: +2 dB @ 3 kHz
  - **Total:** +6 dB harsh pile-up
- **Solution:** Cut competing tracks instead of boosting the lead

### 3. Natural Sound
- **Cuts:** Remove unnatural elements (room resonances, mic coloration)
- **Boosts:** Can create artificial, "EQ'd" sound
- **Result:** Cuts often sound more natural and transparent

### 4. Problem Solving
- Mud, boxiness, harshness = **excess** energy
- Remove the excess rather than boost around it
- More surgical and effective

## When to Cut

### Corrective EQ (Most Common)
**Remove** problematic frequencies:

- **Band 1:** HP to remove rumble (always corrective)
- **Band 2:** Cut mud at 200-250 Hz
- **Band 3:** Cut boxiness at 350-450 Hz
- **Band 4:** Cut nasality at 700-1000 Hz
- **Band 6:** Cut harshness at 4-5 kHz

**Philosophy:** If something sounds wrong, it's usually *too much* of something

### Creating Space
**Carve out** frequency space for other elements:

- Cut guitars at 200-300 Hz to make room for bass
- Cut pads at 2-3 kHz to make room for vocal presence
- Cut background elements to let foreground shine

**Philosophy:** Mix is a puzzle - pieces must fit together

### Reducing Masking
**Remove frequencies** that hide other elements:

- If vocal is buried, maybe instruments have too much 2-3 kHz
- Instead of boosting vocal more, cut competing instruments
- Often more effective and natural

## When to Boost

### Enhancement (Use Sparingly)
**Add character** that's missing:

- **Band 2:** Add warmth/body if source is thin (rare)
- **Band 5:** Add presence to lead vocal or instrument
- **Band 7:** Add air and polish for modern sheen

**Philosophy:** Only boost when something genuinely needs more

### Bringing Elements Forward
**Make lead elements** cut through:

- Boost Band 5 on lead vocal for intelligibility
- Boost Band 6 slightly for detail on key elements
- Boost Band 7 for polish on featured tracks

**Philosophy:** Choose 1-2 elements to "feature," boost those, cut/neutral on rest

### Creative Tone Shaping
**Intentional character** changes:

- Band 2 boost for "thick" lo-fi vibe
- Band 4 boost for telephone/vintage effect
- Band 6 boost for aggressive, sharp sound

**Philosophy:** When the goal is a specific aesthetic, not natural reproduction

## The Boost Inversion Technique

Instead of boosting one thing, **cut everything else:**

### Example: Buried Vocal
**Beginner approach:**
- Boost vocal Band 5 +3 dB
- Result: Vocal forward but potentially harsh

**Advanced approach:**
- Leave vocal neutral
- Cut competing instruments Band 5 -1 to -2 dB
- Result: Vocal appears more present, sounds more natural

### Why It Works
- Preserves headroom
- Sounds more natural
- Prevents frequency stacking
- Solves masking issue at the source

## Band-Specific Cut vs Boost Tendencies

### Bands Where You Mostly CUT
- **Band 1:** Always cut (HP filter) except bass sources
- **Band 2:** Cut 70-80% of the time (mud accumulates)
- **Band 3:** Cut 80-90% of the time (boxiness is a problem)
- **Band 4:** Cut 60-70% of the time (nasality/honk)
- **Band 6:** Cut 50-60% of the time (harshness common)

### Bands Where You Can BOOST More Freely
- **Band 5:** Boost 40-50% of the time (presence, intelligibility)
- **Band 7:** Boost 60-70% of the time (air, polish)

**Why the difference?**
- Lower/mid frequencies accumulate and clash more
- Upper frequencies (5 & 7) add clarity without as much buildup
- Still be careful - even these can stack and become harsh

## Context Matters: Track vs Bus vs Master

### Track Level
**More freedom to boost:**
- Can boost ±3 to ±6 dB
- Working with individual element
- Effects don't compound yet

### Bus Level
**More conservative:**
- Maximum ±2 to ±3 dB
- Affecting multiple tracks
- Boosts start to compound

### Master Level
**Extremely subtle:**
- Maximum ±1 to ±1.5 dB
- Affecting entire mix
- Any boost multiplies previous boosts
- **Prefer cuts** to clean up final mix

## Practical Guidelines

### Amount Guidelines
**Cuts:**
- Track: -1 to -4 dB typical
- Bus: -0.5 to -2 dB
- Master: -0.5 to -1 dB

**Boosts:**
- Track: +1 to +3 dB typical (rarely +6 dB)
- Bus: +0.5 to +2 dB
- Master: +0.5 to +1 dB maximum

### Number of Moves
**Better:** Fewer, well-chosen cuts
**Worse:** Many small boosts across all bands

**Example - Good vocal EQ:**
- Band 1: HP
- Band 2: Cut -1.5 dB
- Band 3: Cut -2 dB
- Band 5: Boost +1.5 dB
- **Total:** 3 cuts, 1 boost = clean and focused

**Example - Problem vocal EQ:**
- Band 2: Boost +1 dB
- Band 3: Boost +1 dB
- Band 4: Boost +0.5 dB
- Band 5: Boost +2 dB
- Band 6: Boost +1 dB
- Band 7: Boost +2 dB
- **Total:** 6 boosts = +7.5 dB harsh, unnatural

## Common Mistakes

### Mistake 1: Boosting to Fix Problems
**Wrong:** Mix is muddy → Boost highs to compensate
**Right:** Mix is muddy → Cut mud at Band 2 (200-250 Hz)

**Why:** Boosting highs doesn't remove the mud, just creates imbalance

### Mistake 2: Matching Cuts with Boosts
**Wrong:** Cut -2 dB somewhere, must boost +2 dB elsewhere to "balance"
**Right:** Cut what's wrong, only boost if something truly needs enhancement

**Why:** EQ isn't about keeping total gain neutral - it's about spectral balance

### Mistake 3: Boosting Everything
**Wrong:** Every track gets +2 dB at Band 5 for presence
**Right:** Choose lead element for +2 dB, leave others neutral or cut

**Why:** Boosts compound - if everything is present, nothing is

### Mistake 4: Afraid to Cut
**Wrong:** Timid -0.5 dB cuts that don't solve the problem
**Right:** Confident -2 to -3 dB cuts where needed

**Why:** If there's a problem, address it decisively

## The "Smiley Face" EQ Trap

**What it is:**
- Cut mids
- Boost lows and highs
- Creates smiley-shaped curve
- Beginner mistake

**Why it's wrong:**
- Removes midrange body and presence
- Creates hollow, scooped sound
- Vocals and instruments lose definition
- Only works for specific creative effects

**Exceptions:**
- Some metal guitars (intentional scoop)
- Lo-fi effects
- Specific creative aesthetics
- NOT for general mixing

## The Professional Approach

### Start Subtractive
1. **HP everything** (Band 1) except bass/kick
2. **Remove obvious problems** (mud, boxiness, harshness)
3. **Check mix clarity** - already better?
4. **Only then boost** if something truly needs enhancement

### The "If in Doubt, Cut" Rule
When unsure whether to boost or cut:
- Default to cutting
- If cutting makes it worse, you needed a boost
- If cutting makes it better, you were right
- Easier to add back than to remove excess

### Verify with A/B
**For every EQ decision:**
1. Make the move
2. Bypass EQ
3. Enable EQ
4. Ask: "Is this better or just different?"
5. If just different, reconsider

## Summary

| Situation | Action | Reason |
|-----------|--------|--------|
| Problem frequency | CUT | Remove excess energy |
| Need to feature element | BOOST (carefully) | Enhance character |
| Creating space | CUT competing elements | Reduce masking |
| Multiple tracks stacking | CUT most, BOOST one | Prevent buildup |
| Mix bus/master | PREFER CUTS | Avoid compounding boosts |
| Unsure what to do | CUT first | Safer default |

**Golden rule:** Cut to fix, boost to enhance. When in doubt, cut.

---

**Practice:** Load a mix and try EQing using ONLY cuts (plus Band 1 HP). See how far you can get before you need a single boost. Often, you'll be surprised how little boosting is actually necessary.
