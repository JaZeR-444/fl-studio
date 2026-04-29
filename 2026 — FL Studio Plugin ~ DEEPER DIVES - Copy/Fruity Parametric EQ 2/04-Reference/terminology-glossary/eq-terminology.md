# EQ Terminology Glossary

Complete reference for parametric EQ terms and concepts.

## Core EQ Parameters

### Frequency (Hz)
**What it is:** The pitch or tone you're affecting, measured in Hertz (Hz).

**Range:** 20 Hz (sub-bass) to 20,000 Hz / 20 kHz (upper treble)

**How to think about it:**
- Low numbers (20-200 Hz) = Bass, rumble, thump
- Mid numbers (200-5000 Hz) = Body, presence, clarity
- High numbers (5k-20k Hz) = Brightness, air, sparkle

**In this project:**
- Each band has a `typicalRange` defining its frequency coverage
- `anchorTargets` provide common preset frequencies

---

### Gain (dB)
**What it is:** How much you boost (+) or cut (-) at the selected frequency.

**Measured in:** Decibels (dB)

**Typical range:** ±12 dB, but usually ±6 dB or less

**How to think about it:**
- +3 dB = Roughly doubling the perceived loudness
- -3 dB = Roughly halving the perceived loudness
- ±1-2 dB = Subtle, musical changes
- ±6 dB = Aggressive, noticeable changes

**In this project:**
- Safe maximums vary by context:
  - Track: ±6 dB
  - Bus: ±3 dB
  - Master: ±1.5 dB

**Important:** Cuts are often safer and more effective than boosts.

---

### Bandwidth / Q
**What it is:** How wide or narrow the frequency range affected by your boost/cut.

**Two ways to express it:**
1. **Q Value:** Higher Q = narrower (surgical), Lower Q = wider (gentle)
2. **Bandwidth %:** In FL Studio and this project

**FL Studio convention (INVERTED):**
- 0% BW = Widest (affects ~3-4 octaves)
- 25% BW = Wide (affects ~2 octaves)
- 50% BW = Medium (affects ~1 octave)
- 75% BW = Narrow (affects ~0.5 octaves)
- 100% BW = Narrowest (surgical, pinpoint)

**When to use:**
- **Wide (0-40%):** Gentle tonal shaping, musical changes
- **Medium (40-60%):** Standard corrective EQ
- **Narrow (60-100%):** Surgical removal of specific resonances

**In this project:**
- Each band includes `wide`, `medium`, `narrow` ranges
- `default` suggests a starting point

---

## Filter Types

### Bell (Parametric)
**Shape:** Bell curve centered at frequency

**Parameters:** Frequency, Gain, Bandwidth

**Best for:** Boosting or cutting specific frequency ranges

**Example use:** +2 dB @ 2.5 kHz for vocal presence

**Available on:** All 7 bands in this project

---

### High-Pass Filter (HPF)
**Shape:** Removes frequencies below the cutoff point

**Parameters:** Frequency, (Bandwidth/Slope)

**Gain:** Always 0 (it's a filter, not a boost/cut)

**Best for:** Removing rumble, clearing headroom

**Example use:** HPF @ 80 Hz on vocals

**Available on:** Bands 1, 2 in this project

**Tip:** Start high and sweep down until you hear the sound lose body, then back off slightly.

---

### Low-Pass Filter (LPF)
**Shape:** Removes frequencies above the cutoff point

**Parameters:** Frequency, (Bandwidth/Slope)

**Gain:** Always 0

**Best for:** Removing harshness, darkening sounds

**Example use:** LPF @ 8 kHz on synth pads

**Available on:** Bands 6, 7 in this project

---

### High-Shelf
**Shape:** Boosts or cuts all frequencies above the cutoff

**Parameters:** Frequency, Gain, (Bandwidth affects transition slope)

**Best for:** Adding or removing air/brightness

**Example use:** +3 dB shelf @ 10 kHz for modern brightness

**Available on:** Bands 5, 6, 7 in this project

**Tip:** Wide bandwidth for musical shaping, narrower for specific tonal adjustments.

---

### Low-Shelf
**Shape:** Boosts or cuts all frequencies below the cutoff

**Parameters:** Frequency, Gain, (Bandwidth affects transition slope)

**Best for:** Adding or removing bass/warmth

**Example use:** -2 dB shelf @ 200 Hz to remove muddiness

**Available on:** Bands 1, 2, 3 in this project

---

### Notch
**Shape:** Very narrow cut, almost surgical

**Parameters:** Frequency, (Bandwidth extremely narrow), Gain (negative)

**Best for:** Removing specific resonances, feedback frequencies

**Example use:** Notch @ 420 Hz to remove room resonance

**Available on:** Bands 3, 4, 5, 6 in this project

**Tip:** Use sparingly - notches can sound unnatural if overused.

---

## EQ Concepts

### Cutting vs Boosting

**The Principle:** "Cut to solve problems, boost to enhance"

**Why cuts are often better:**
- More headroom-friendly
- More natural sounding
- Less risk of phase issues
- Easier to hear improvements

**When to boost:**
- Adding character or presence
- Creative sound design
- Small adjustments for polish

**Example:**
- ❌ Problem: Vocal lacks brightness → Boost 10 kHz
- ✅ Better: Cut 200-300 Hz (mud) + cut 800 Hz (honk) + subtle boost 10 kHz

---

### Additive vs Subtractive EQ

**Additive EQ:** Primarily using boosts to shape tone
- Risks: Gain buildup, phase issues, unnatural sound
- Use: Creative sound design, final polish

**Subtractive EQ:** Primarily using cuts to remove problems
- Benefits: More headroom, more natural, surgical problem-solving
- Use: Corrective mixing, cleaning tracks

**Best practice:** Subtract first (remove problems), then add (enhance character).

---

### Frequency Masking

**What it is:** When two sounds occupy the same frequency range and compete for space.

**Example:** Kick drum and bass both fighting for 80-120 Hz.

**Solution:**
- Cut bass at 100 Hz to make room for kick
- OR cut kick at 60 Hz to make room for bass sub
- Use EQ to create "pockets" for each instrument

**In mixing:** This is why Band 2 (200-300 Hz) is often cut - it's where many instruments accumulate and mask each other.

---

### Phase Issues

**What it is:** EQ affects not just amplitude (volume) but also phase (timing) of frequencies.

**Why it matters:**
- Extreme EQ moves can cause phase shifts
- Can make sounds feel "thin" or "disconnected"
- Multiple EQs in series compound this

**Minimizing phase issues:**
- Use gentler curves (wider bandwidth)
- Prefer cuts over boosts
- Don't stack too many EQs
- Some modern EQs offer "linear phase" mode (but with latency cost)

---

### Fletcher-Munson Curves (Equal Loudness)

**What it is:** Human hearing is more sensitive to midrange (2-5 kHz) than bass or treble, especially at low volumes.

**Why it matters for EQ:**
- At low monitoring volumes, bass seems quieter
- You might over-boost bass and treble to compensate
- When played loud, it's now too bass-heavy

**Solution:**
- Mix at moderate, consistent levels
- Check at multiple volumes
- Don't trust EQ decisions made at very low or very high volumes

---

## Context-Specific Terms

### Track vs Bus vs Master EQ

**Track EQ:**
- Individual instrument processing
- Can be more aggressive (±6 dB)
- Corrective and creative

**Bus EQ:**
- Group processing (all drums, all vocals, etc.)
- Should be subtle (±3 dB)
- Primarily for glue and balance

**Master EQ:**
- Final output processing
- Must be very subtle (±1.5 dB)
- Fine-tuning, not fixing

**Why different limits?**
Changes accumulate through the signal chain. 10 tracks each boosting 2 dB = 20 dB at the bus!

---

### Corrective vs Creative EQ

**Corrective EQ:**
- Removes problems (mud, harshness, resonances)
- Primarily subtractive (cuts)
- Makes sounds fit together

**Creative EQ:**
- Adds character or vibe
- Can be additive or subtractive
- Makes sounds more interesting

**Example on vocals:**
- Corrective: HPF @ 80 Hz, cut 250 Hz (mud), cut 800 Hz (honk)
- Creative: Boost 3 kHz (clarity), boost 12 kHz (air)

---

## Project-Specific Terms

### Band
One of the 7 frequency modules in Fruity Parametric EQ 2.

Each band operates independently with its own:
- Frequency range
- Filter type options
- Recommended settings
- Functional role

### Band Archetype
A pre-configured band setting (preset building block).

Example: "De-Mud" archetype = Bell, 250 Hz, 35% BW, -2 dB gain

Multiple archetypes can be stacked to create full presets.

### Zone
The frequency region a band primarily covers.

Examples:
- Band 1: "Sub / Foundation" (20-120 Hz)
- Band 5: "Presence / Clarity" (1800-3200 Hz)

### Safe Maximum
Context-appropriate gain limits to prevent over-processing.

- `safeMaxTrack`: 6 dB (individual tracks)
- `safeMaxBus`: 3 dB (group buses)
- `safeMaxMaster`: 1.5 dB (master output)

### Symptom
A problem sound characteristic that can be diagnosed and fixed.

Examples:
- `muddy_or_cloudy`: Unclear low-mids
- `harsh_or_fatiguing`: Excessive upper-mids
- `dull_or_closed`: Lack of high frequencies

### Priority
Urgency level for fixing issues:
- **Priority 1 (Critical):** Fix immediately - masks other problems
- **Priority 2 (Important):** Significant impact on mix quality
- **Priority 3 (Polish):** Final touches and refinement

---

## Practical Frequency Descriptions

### Sub-Bass (20-60 Hz)
**Feel:** Rumble, power, physical sensation
**Common in:** Kick drums, 808s, sub-bass synths
**Typical action:** High-pass filter to remove, or boost for electronic music

### Bass (60-250 Hz)
**Feel:** Warmth, fullness, foundation
**Common in:** Bass guitars, kick drum punch, low toms
**Typical action:** Usually cut to reduce mud, occasionally boost for weight

### Low-Mids (250-500 Hz)
**Feel:** Body, thickness, or muddiness
**Common in:** Most instruments have energy here
**Typical action:** Often cut - this is where mixes get muddy

### Midrange (500-2000 Hz)
**Feel:** Core tone, nasal quality, "forward" presence
**Common in:** Vocals, guitars, snares
**Typical action:** Cut boxiness (400-600 Hz), cut honk (700-1000 Hz)

### Upper-Mids (2000-5000 Hz)
**Feel:** Presence, clarity, definition, or harshness
**Common in:** Vocal intelligibility, snare crack, guitar attack
**Typical action:** Boost for clarity, cut for harshness

### Treble (5000-10000 Hz)
**Feel:** Brightness, articulation, detail
**Common in:** Cymbals, vocal detail, guitar shimmer
**Typical action:** Boost for detail, cut for harshness

### Air (10000-20000 Hz)
**Feel:** Airiness, sparkle, openness, or hiss
**Common in:** Cymbal wash, vocal breath, string harmonics
**Typical action:** High-shelf boost for modern sound, cut to reduce noise

---

## Common Abbreviations

- **EQ:** Equalization / Equalizer
- **Hz:** Hertz (frequency unit)
- **kHz:** Kilohertz (1000 Hz)
- **dB:** Decibel (gain/volume unit)
- **Q:** Quality factor (bandwidth, though not used in this project)
- **BW:** Bandwidth (percentage in FL Studio, 0-100%)
- **HPF:** High-Pass Filter
- **LPF:** Low-Pass Filter
- **HSF:** High-Shelf Filter
- **LSF:** Low-Shelf Filter
- **PEQ:** Parametric EQ (bell filter)

---

## Next Steps

- See `frequency-zones.md` for detailed band breakdowns
- See `project-conventions.md` for this project's specific usage
- See `../frequency-charts/` for visual references
