# Workflow: Jazzy Sample Flip with Fruity Slicer

## Goal
Create sophisticated, swung sample chops for Boom-Bap and jazzy Hip-Hop.

**Vibe Reference:** J Dilla, Pete Rock, Madlib, Nujabes, modern Boom-Bap (Griselda, Alchemist)

[SRC: REPUTABLE]

---

## Routing Context

**Channel Rack:** Fruity Slicer loaded with jazz sample (piano, horns, bass, guitar)  
**Mixer:** Slicer → Vintage EQ → Tape Saturation → Light Compression  
**Tempo:** 85-110 BPM (classic Boom-Bap range)

---

## Step-by-Step Setup

### Step 1: Jazz Sample Selection
**Choose:**
- Jazz records (piano, upright bass, horns, guitar)
- Soul samples with jazz influence
- Live recordings (warmth, human imperfection)
- Complex harmony (7th chords, extensions, voice leading)

**Characteristics:**
- Organic, warm tonality
- Clear musical phrasing
- Moderate tempo (60-120 BPM original)
- Rich harmonic content

**Where to Find:**
- Splice (search "jazz piano," "jazz guitar," "soul")
- Vinyl digging (if you own rights)
- Royalty-free jazz libraries

**What to Listen For:** Harmonic sophistication and groove

---

### Step 2: Clean Slice Detection
**Settings:**
- **Threshold:** 55-65% (balanced, not excessive)
- **Why:** Jazzy needs musical slices (not chaos)

**Critical:** Verify slices align with musical content
- Chord hits (downbeats)
- Melodic phrases (natural phrasing)
- Harmonic changes (new chords)

**Manual Refinement:**
1. Zoom in on waveform
2. Verify slices at chord hits (not random)
3. Delete slices on noise or between phrases
4. Target: 8-14 slices per 2-bar loop (musical, not excessive)

**What to Listen For:** Each slice = musical phrase or chord

---

### Step 3: Jazzy Slice Settings
**Crossfade:** 10-15 ms (smooth but defined)  
**Time Stretch:** 0.95-1.0x (respect original tempo)  
**Pitch:** 0 to -2 semitones (preserve harmony, add subtle warmth)

**Why These Settings:**
- Medium Crossfade = smooth but not mushed
- Original tempo = respect source groove
- Minimal pitch = preserve harmonic content

---

### Step 4: "Dump to Piano Roll" for Swing
1. Right-click waveform
2. Select "Dump to Piano Roll"
3. FL Studio creates pattern matching original

**Now you have:**
- Original musical phrasing as MIDI
- Starting point for swing application

---

### Step 5: Apply Heavy Swing (CRITICAL)
**This step makes it jazzy.**

**Method 1: FL Studio Quantize:**
1. In Piano Roll: Tools → Quantize
2. **Swing:** 60-66% (HEAVY - J Dilla/jazz territory)
3. **Quantize:** 1/8 note or 1/16 note (depending on source)

**Method 2: Manual Swing (More Control):**
1. Keep chord hits (downbeats) on-grid
2. Shift "fill" notes (upbeats, passing tones) late (off-grid)
3. Create "drunk" triplet feel manually

**Swing Verification:**
- Pattern should feel laid-back (not rushed)
- "Drunk" or "triplet" feel (not straight)
- Groove is obvious (not robotic)

**What to Listen For:** Obvious swing (listener taps foot off-beat)

[SRC: REPUTABLE - J Dilla swing analysis]

---

### Step 6: Musical MIDI Pattern
**Pattern Style:** Musical phrasing with swing

**Example Pattern (4 bars):**
```
Bar 1: Chord progression (original pattern from Dump)
Bar 2: Same progression (repetition = groove)
Bar 3: Variation (swap one chord for different slice)
Bar 4: Fill (add extra notes on upbeats, syncopation)
```

**Key Principles:**
- Respect musical phrasing (not random)
- Repetition with subtle variation
- Swing on EVERY pattern

**What to Listen For:** Musical coherence (not chaotic chopping)

---

### Step 7: Natural Velocity Programming
**Lever:** Human-like dynamics
- **Range:** 65-85 (moderate, natural)
- **Downbeats (chord hits):** 80-85 (slightly louder)
- **Upbeats (fills):** 65-75 (slightly quieter)
- **Accents:** Subtle (5-10 velocity difference, not extreme)

**Why:** Jazzy feels played by a human, not a machine

**What to Listen For:** Dynamics breathe (not robotic)

---

### Step 8: Vintage Processing Chain
**Goal:** Warm, vintage jazz character

**EQ (Vintage Warmth):**
- HPF at 50 Hz (remove rumble)
- LPF at 12 kHz (bandwidth limiting, vintage feel)
- Boost 200 Hz (+2 dB, warmth/body)
- Boost 3 kHz (+1 dB, presence/clarity)

**Tape Saturation:**
- Drive: 20-30% (subtle warmth, not distortion)
- Tape Type: Analog or vintage (warm character)
- Add subtle wow/flutter (optional, for vintage movement)

**Compression (Glue):**
- Ratio: 2:1 (gentle, not aggressive)
- Attack: 30 ms (let transients through, preserve musicality)
- Release: 200 ms (slow, breathing)
- Threshold: -15 dB
- Makeup Gain: +2-3 dB

**What to Listen For:** Warm, cohesive, vintage (not digital/harsh)

---

## What to Listen For

### Jazzy Validation Checklist
- [ ] Heavy swing is obvious (58-66%, laid-back groove)
- [ ] Musical phrasing preserved (not random chops)
- [ ] Vintage character (warm, not digital)
- [ ] Natural dynamics (breathing, not robotic)
- [ ] Harmonic content intact (chords recognizable)
- [ ] Grooves naturally (listener nods head)

---

## Variations

### Variation 1: Classic Boom-Bap Jazz
**Settings:**
- Swing: 60% (moderate-heavy)
- Processing: Clean vintage (no heavy degradation)
- Pattern: Respect original phrasing (minimal rearrangement)

**Result:** Pete Rock, DJ Premier style (sophisticated but clean)

---

### Variation 2: Lo-Fi Jazz
**Settings:**
- Swing: 65% (extreme)
- Processing: Heavy degradation (bit-crush to 12-bit, vinyl crackle)
- Pitch: -3 semitones (darker, warmer)
- LPF: 8 kHz (bandwidth limiting)

**Result:** Nujabes, Lo-Fi Girl style (degraded, nostalgic)

---

### Variation 3: Modern Jazzy (Alchemist, Griselda)
**Settings:**
- Swing: 58% (moderate)
- Processing: Clean but warm (tape saturation only)
- Pattern: More aggressive rearrangement (not strictly original phrasing)
- Tempo: 85-95 BPM (slower, heavier)

**Result:** Modern Boom-Bap (jazzy but contemporary)

---

## Pitfalls & Fixes

### Pitfall 1: "Sounds robotic, no swing"
**Cause:** Forgot to apply swing  
**Fix:** Apply 60%+ swing in Piano Roll quantize

### Pitfall 2: "Lost musical coherence"
**Cause:** Over-chopped or random rearrangement  
**Fix:** Use "Dump to Piano Roll" as base, edit subtly

### Pitfall 3: "Too digital/harsh"
**Cause:** No vintage processing  
**Fix:** Add tape saturation, bandwidth limiting (LPF 12 kHz)

### Pitfall 4: "Harmony sounds wrong"
**Cause:** Pitch shifted too much  
**Fix:** Keep pitch at 0 or minimal (-2 semitones max)

---

## Automation Ideas

### Automation 1: Filter Sweep (Intro)
- Intro (8 bars): LPF at 800 Hz (muffled)
- Bar 8: Sweep to 12 kHz (full sample revealed)
- Creates build-up into main section

### Automation 2: Reverb Build (Bridge)
- Verse: Reverb 20% mix (dry, upfront)
- Bridge: Reverb 40% mix (spacious)
- Creates depth variation

---

## Advanced Technique: Chord Stab Variation
**Goal:** Create dynamic chord progression from single sample

**Workflow:**
1. Slice sample into individual chords (not random slices)
2. Each slice = one chord voicing
3. Rearrange chords into NEW progression (different from original)
4. Apply swing to new progression
5. Result: Original sample harmony, NEW progression

**Example:**
- Original: Cmaj7 → Dm7 → G7 → Cmaj7
- Rearranged: Dm7 → G7 → Cmaj7 → Fmaj7 (slice from different part)

**What to Listen For:** Harmonic coherence (still musical)

---

## Genre-Specific Jazzy Rules

### Classic Boom-Bap Jazz (90s)
- Heavy swing (60-66%)
- Vintage processing (tape, bandwidth limiting)
- Respect source phrasing (minimal rearrangement)
- Tempo: 85-95 BPM

### Lo-Fi Jazz (Nujabes, Modern Chill)
- Extreme swing (65%+)
- Heavy degradation (bit-crush, vinyl crackle)
- Slower tempo (70-85 BPM)
- Dark tonality (lower pitch, heavy LPF)

### Modern Jazzy Boom-Bap (Alchemist, Griselda)
- Moderate swing (58-60%)
- Clean but warm (tape saturation, minimal degradation)
- More aggressive rearrangement allowed
- Tempo: 85-95 BPM

---

## Reference Tracks

**Match these for jazzy vibe:**
- J Dilla - "Workinonit" (jazz sample, heavy swing)
- Pete Rock & CL Smooth - "They Reminisce" (sophisticated jazz flip)
- Nujabes - "Feather" (lo-fi jazz, extreme swing)
- The Alchemist - "E. Coli" (modern jazzy Boom-Bap)
- Madlib - Shades of Blue (entire album, jazz reinterpretation)

---

## Commit Workflow (Render to Audio)
**When to Commit:**
- After perfecting swing and phrasing
- Before layering other instruments
- To lock in groove (can't accidentally change)

**How:**
1. Solo Slicer track
2. File → Export → Wave File
3. Export 8-16 bars
4. Import audio to new track
5. Delete original Slicer instance OR keep for reference

**Benefit:** Groove is locked, CPU is freed

---

## Summary: Jazzy Vibe Essentials

> **Jazzy Sample Flip = Swing, Sophistication, Vintage:**
> - Source: Jazz/soul samples with complex harmony
> - Threshold: 55-65% (clean, musical slices)
> - Crossfade: 10-15 ms (smooth but defined)
> - Swing: 60-66% (HEAVY - mandatory for jazzy)
> - Pitch: 0 to -2 semitones (preserve harmony)
> - Pattern: Musical phrasing (respect source)
> - Processing: Vintage EQ, tape saturation, gentle compression
>
> **Key:** Swing is non-negotiable. No swing = not jazzy.

**DO:** Apply heavy swing, use vintage processing, respect musical phrasing  
**DON'T:** Stay on-grid, use digital processing, over-chop randomly

[SRC: REPUTABLE - J Dilla, Pete Rock, Madlib workflows]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
