# Classic Acid Bass Creation with Transistor Bass

**Difficulty:** Beginner
**Time Required:** 10-15 minutes
**Goal:** Create an authentic TB-303 style acid bassline
**Genre:** Acid House, Techno, Psy-Trance

---

## Prerequisites

- Transistor Bass loaded in FL Studio
- Understanding of basic sequencer operation
- Reference track with acid bass (optional but recommended)

---

## Workflow Steps

### Step 1: Engine and Waveform Setup

1. **Select Engine:** Choose **V2 TB303** from the engine dropdown
   - *Why:* Most accurate emulation of the original hardware

2. **Set Waveform:** Move the **Waveform** slider to full **Square** (left position)
   - *Why:* Square wave is the classic acid sound - bright and aggressive

---

### Step 2: Filter Configuration (The Heart of Acid)

3. **Initial Cutoff:** Set **Cutoff** to ~**25-35%**
   - *Why:* Starting point for filter sweeps
   - *Tip:* You'll modulate this with the envelope

4. **High Resonance:** Set **Resonance** to **65-80%**
   - *Why:* Creates the signature "screaming" acid character
   - *Warning:* Too high and you get piercing, painful sounds

5. **Envelope Modulation:** Set **Env Mod** to **70-85%**
   - *Why:* This makes the filter sweep dramatically
   - *Tip:* Higher values = more pronounced "squelch"

6. **Decay Time:** Set **Decay** to **35-45%**
   - *Why:* Controls how fast the filter closes
   - *Experimentation:* Short decay = plucky, long decay = sweeping

---

### Step 3: Accent Configuration

7. **Accent Amount:** Set **Accent** to **50-60%**
   - *Why:* Adds dynamic emphasis to selected steps
   - *Note:* Accent affects cutoff, resonance, AND volume simultaneously

---

### Step 4: Programming the Sequence

8. **Open Sequencer:** Ensure sequencer mode is enabled (button should be lit)

9. **Set Pattern Length:** Start with **16 steps** (full bar in 16th notes)

10. **Program Basic Pattern:**
    ```
    Step:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16
    Gate:  ■  □  ■  □  ■  □  ■  □  ■  □  ■  □  ■  □  ■  □
    Note:  C  -  C  -  C  -  D# -  C  -  C  -  F  -  G  -
    ```
    - Press **G** to toggle gates on odd steps
    - Use arrow keys to navigate, **Up/Down** to change notes

11. **Add Slides:**
    - Select steps 3, 7, 11, 15
    - Press **S** to enable slide (portamento)
    - *Result:* Notes glide into each other for liquid movement

12. **Add Accents:**
    - Select steps 1, 5, 9, 13 (downbeats)
    - Press **A** to enable accent
    - *Result:* Emphasized hits with more filter opening

---

### Step 5: Fine-Tuning the Sound

13. **Adjust Gate Length:** Set to **60-70%**
    - *Why:* Prevents notes from overlapping too much
    - *Tip:* Shorter = more staccato, longer = more legato

14. **Add Swing:** Set **Swing/Shuffle** to **15-25%**
    - *Why:* Makes the groove less robotic
    - *Genre note:* Classic acid tends to be straight, but slight swing works

15. **Octave Selection:** Try **Octave 2 or 3**
    - *Why:* Classic acid sits in the low-mid range
    - *Tip:* Octave 1 = very deep, Octave 3 = more present

---

### Step 6: Advanced Tweaks

16. **Filter Key Follow:** Add **20-30%**
    - *Why:* Makes higher notes brighter
    - *Note:* This wasn't in the original TB-303

17. **VCA Smooth:** Increase to **30-40%** if you hear clicks
    - *Why:* Removes attack/release artifacts
    - *When:* Especially important with short decay times

---

### Step 7: Add Character with Effects

18. **Distortion (Pro Co Rat):**
    - **Drive:** 45-60%
    - **Tone:** 55-65%
    - **Mix:** 70-100%
    - *Why:* Adds warmth and aggression (inspired by Hardfloor)

19. **Delay (Optional):**
    - **Time:** 1/16th note (sync to BPM)
    - **Feedback:** 25-35%
    - **Mix:** 15-25%
    - *Why:* Creates space and rhythmic doubling

20. **Reverb (Subtle):**
    - **Size:** Small to medium
    - **Mix:** 10-15%
    - *Why:* Just enough to sit in the mix without washing out

---

## Advanced Variations

### Variation 1: "Harder" Acid (Hardfloor Style)
- Increase **Distortion Drive** to 75%+
- Push **Resonance** to 85%+
- Use **Sawtooth** waveform instead of square
- Result: More aggressive, industrial sound

### Variation 2: "Liquid" Acid
- Reduce **Resonance** to 45-55%
- Increase **Decay** to 60-70%
- More slides (every 2nd note)
- Less accents (only on beats 1 and 3)
- Result: Smoother, more melodic lines

### Variation 3: "303 Bass" (Less Acid, More Sub)
- Lower **Cutoff** to 15-20%
- Reduce **Resonance** to 30%
- Minimal **Env Mod** (20-30%)
- No distortion
- Result: Deep bass foundation instead of acid lead

---

## Melody Programming Tips

### Classic Acid Patterns
1. **Root Note Focus:** Build patterns around a root note (usually C or D)
2. **Octave Jumps:** Occasional jumps up an octave for tension
3. **Chromatic Movement:** Half-step slides create tension/release
4. **Repetition:** Acid thrives on hypnotic repetition with subtle variation

### Note Distribution
- **Steps 1, 5, 9, 13:** Root note (foundation)
- **Steps 3, 7, 11, 15:** Fifth or octave (movement)
- **Other steps:** Passing tones, chromatic fills

### Rhythm Secrets
- **Gate Density:** Not every step needs a gate - silence is powerful
- **Slide Placement:** Use slides sparingly (every 4th step max)
- **Accent Pattern:** Downbeats (1, 5, 9, 13) OR off-beats (2, 6, 10, 14)

---

## Mixing Integration

### Frequency Management
- **HPF:** Use **HP** control at 15-20% to remove sub-20Hz rumble
- **Cutoff Automation:** Automate cutoff for build-ups (close filter, then open)
- **EQ Post-Processing:** Cut 200-300Hz if it sounds muddy in the mix

### Sidechain Compression
- Sidechain Transistor Bass to the kick drum
- Fast attack, medium release
- Result: Bass "ducks" under kick, creating pumping effect

### Stereo Width
- Transistor Bass is **mono** by default
- Add stereo width with:
  - Fruity Stereo Enhancer (subtle)
  - Stereo delay (left/right offset)
  - Chorus effect (very light)

---

## Common Mistakes to Avoid

1. **Over-Resonance:** Resonance above 90% can be harsh and painful
2. **Too Much Env Mod:** 100% envelope modulation can sound uncontrolled
3. **Excessive Slides:** Every note sliding = muddy, undefined bass
4. **Ignoring Accents:** Accents are what make acid DYNAMIC
5. **Forgetting Decay:** Decay time is as important as cutoff/resonance

---

## Preset Recall Workflow

### Saving Your Sound
1. Create your perfect acid sound in the **Edit Buffer**
2. Click **Write** to save to a program slot (1-128)
3. Name the program descriptively (e.g., "Classic Acid 01")

### Multi-Pattern Projects
1. Save the **Patch** (sound) to a program
2. Use the **same patch** across multiple programs
3. Change only the **sequence** data per program
4. Result: Consistent timbre across different melodic patterns

---

## Genre-Specific Adaptations

### Acid House (Classic 303)
- Moderate resonance (60-70%)
- Balanced envelope modulation (70%)
- Medium decay (40-50%)
- Subtle distortion

### Psy-Trance (Aggressive)
- Maximum resonance (80%+)
- Full envelope modulation (90%+)
- Heavy distortion (60%+)
- Faster sequences (1/32 notes possible)

### Techno (Minimal)
- Lower resonance (40-50%)
- Controlled envelope modulation (50-60%)
- Longer decay (60%)
- Focus on rhythm over filter movement

---

## Next Steps

After mastering this workflow:

1. **Explore the Wasp/Wasp XT** for alternative acid sounds
2. **Learn Sytrus FM Bass** for modern acid variations
3. **Study Patcher** to create custom TB-303 FX chains
4. **Experiment with automation** on cutoff, resonance, and effects

---

**Related Workflows:**
- [Deep Sub Bass Creation](./deep-sub-bass-creation.md)
- [Acid Bass with Piano Roll](./acid-bass-piano-roll.md) (using automation instead of sequencer)
- [Multi-Pattern Acid Lines](./multi-pattern-acid-composition.md)

---

**Last Updated:** February 3, 2026
**Status:** 🟢 Complete workflow
