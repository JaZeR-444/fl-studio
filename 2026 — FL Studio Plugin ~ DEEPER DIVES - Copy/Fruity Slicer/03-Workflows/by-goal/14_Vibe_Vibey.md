# Workflow: Vibey Texture Loops with Fruity Slicer

## Goal
Create smooth, hypnotic, groovy texture loops for Lo-Fi Hip-Hop and R&B.

**Vibe Reference:** Lo-Fi Girl compilations, Sonder, Brent Faiyaz, smooth R&B textures

[SRC: REPUTABLE]

---

## Routing Context

**Channel Rack:** Fruity Slicer loaded with smooth loop (pads, keys, ambient textures)  
**Mixer:** Slicer → Chorus → Reverb → Tape Saturation → Light Compression  
**Tempo:** 75-95 BPM (relaxed, not rushed)

---

## Step-by-Step Setup

### Step 1: Vibey Sample Selection
**Choose:**
- Warm pads (synth pads, string pads)
- Smooth keys (Rhodes, Wurlitzer, mellow piano)
- Ambient textures (background atmospheres)
- Mellow melodic loops (not aggressive)

**Characteristics:**
- Warm, full-bodied tone
- Sustained notes (not percussive)
- Consistent texture (not jarring changes)
- Medium complexity (engaging but not chaotic)

**What to Listen For:** Sample already has relaxed, smooth character

---

### Step 2: Balanced Slice Detection
**Settings:**
- **Threshold:** 45-60% (moderate, balanced)
- **Why:** Vibey needs clean slices without over-chopping

**Manual Refinement:**
1. After Auto-detect, visually verify slices
2. Target: 10-16 slices per 2-bar loop (moderate density)
3. Delete slices on artifacts or noise
4. Keep slices aligned with musical phrasing

**What to Listen For:** Clean, musical slices (not random)

---

### Step 3: Vibey Slice Settings
**Crossfade:** 8-15 ms (medium-smooth)  
**Time Stretch:** 0.95-1.05x (minimal change, respect groove)  
**Pitch:** 0 to -3 semitones (slight warmth, not drastic)

**Why These Settings:**
- Medium Crossfade = smooth flow (no clicks)
- Minimal Time Stretch = preserve natural groove
- Slight Pitch Lowering = adds warmth (vibey character)

---

### Step 4: Consistent, Hypnotic MIDI Pattern
**Pattern Style:** Repeating, moderate density, steady groove

**Example Pattern (1 bar, repeating):**
```
Beat 1: Slice 3 (velocity 75)
Beat 1.5: Slice 7 (velocity 70)
Beat 2: Slice 5 (velocity 78)
Beat 2.5: Slice 2 (velocity 72)
Beat 3: Slice 8 (velocity 75)
Beat 3.5: Slice 4 (velocity 73)
Beat 4: Slice 6 (velocity 77)
Beat 4.5: Slice 1 (velocity 71)
```

**Key Principles:**
- **Consistency:** Pattern repeats (hypnotic, not varying wildly)
- **Moderate Density:** 8-14 notes per bar (flowing, not sparse or chaotic)
- **Steady Groove:** Predictable rhythm (listeners can vibe to it)

**What to Listen For:** Hypnotic, consistent groove (not jarring)

---

### Step 5: Subtle Velocity Programming
**Lever:** Narrow range, smooth dynamics
- **Range:** 70-85 (consistent, not extreme)
- **Variation:** 5-8 velocity difference max (subtle accents)
- **No Extremes:** Avoid very loud (100+) or very quiet (under 60)

**Why:** Vibey is smooth and even (not dynamic extremes)

**What to Listen For:** Dynamics feel consistent (flowing, not punchy)

---

### Step 6: Warm Depth FX Chain
**Goal:** Spacious, warm, slightly modulated texture

**Chorus (Subtle Width):**
- Rate: 0.2-0.5 Hz (slow modulation)
- Depth: 20-30% (subtle)
- Mix: 25-35% (adds width without overpowering)

**Reverb (Warm Space):**
- Decay: 1.5-2.5 seconds (medium)
- Pre-Delay: 10-20 ms (natural space)
- Mix: 30-40% (spacious but not drowning)
- Type: Hall or Plate (warm character)

**Tape Saturation (Warmth):**
- Drive: 15-25% (subtle warmth, not distortion)
- Tape Type: Vintage or Analog
- Add slight wow/flutter (optional, adds movement)

**Compression (Glue):**
- Ratio: 3:1 (moderate)
- Attack: 20-30 ms (preserve natural dynamics)
- Release: 150-250 ms (breathing)
- Threshold: -12 dB
- Makeup Gain: +2-3 dB

**What to Listen For:** Warm, spacious, slightly modulated (enveloping)

---

## What to Listen For

### Vibey Validation Checklist
- [ ] Smooth, warm tonality (not harsh or cold)
- [ ] Consistent, hypnotic groove (not varying wildly)
- [ ] Spacious but controlled (reverb adds depth)
- [ ] Slight modulation (chorus adds movement)
- [ ] Relaxed tempo (not rushed)
- [ ] Even dynamics (not extreme loud/quiet)

---

## Variations

### Variation 1: Lo-Fi Vibey (More Degraded)
**Settings:**
- Pitch: -4 semitones (darker, warmer)
- Add: Bit-crush 14-bit (subtle degradation)
- Add: Vinyl crackle layer (texture)
- LPF: 10 kHz (bandwidth limiting)

**Result:** Warmer, more nostalgic (Lo-Fi Girl aesthetic)

---

### Variation 2: R&B Vibey (Cleaner, More Polished)
**Settings:**
- Pitch: 0 to -1 semitones (minimal change)
- No degradation (clean)
- More reverb (40-50% mix, lush)
- Stereo width (Fruity Stereo Enhancer, subtle)

**Result:** Polished, modern R&B texture (Brent Faiyaz, Sonder)

---

### Variation 3: Ambient Vibey (Very Spacious)
**Settings:**
- Crossfade: 20-30 ms (very smooth)
- Pattern Density: Sparse (6-10 notes per bar)
- Reverb: 3-4 seconds decay, 50-60% mix (drowning in space)
- Add: Delay (1/4 note dotted, 40% feedback, 20% mix)

**Result:** Extremely spacious, ambient background texture

---

## Pitfalls & Fixes

### Pitfall 1: "Sounds too robotic"
**Cause:** Velocity too consistent (all same value)  
**Fix:** Add subtle variation (70-85 range, not all 75)

### Pitfall 2: "Pattern gets boring"
**Cause:** Exact same loop for 64 bars  
**Fix:** Subtle variation every 8 bars (swap 1-2 slices, or automate filter)

### Pitfall 3: "Too dry, lacks depth"
**Cause:** No reverb or chorus  
**Fix:** Add reverb (30-40% mix) and chorus (25% mix)

### Pitfall 4: "Too harsh, not vibey"
**Cause:** Bright sample, no warmth processing  
**Fix:** Lower pitch (-2 to -3 semitones), add tape saturation, LPF at 10-12 kHz

---

## Automation Ideas

### Automation 1: Reverb Depth Build
- Verse: Reverb 30% mix (moderate space)
- Chorus: Reverb 45% mix (more spacious)
- Bridge: Reverb 25% mix (intimate moment)

**Effect:** Depth varies across sections (keeps listener engaged)

---

### Automation 2: Filter Movement (Slow Sweep)
- 16 bars: LPF sweep from 8 kHz → 12 kHz (gradual opening)
- Creates subtle movement without disrupting vibe

---

### Automation 3: Chorus Intensity
- Intro: Chorus 15% mix (subtle)
- Verse: Chorus 30% mix (more movement)
- Outro: Chorus 40% mix (lush, enveloping)

---

## Advanced Technique: Layering for Depth
**Goal:** Create rich, multi-layered vibey texture

**Workflow:**
1. Create main vibey pattern (Slicer 1)
2. Duplicate pattern to new Slicer instance (Slicer 2)
3. **Slicer 2 Settings:**
   - Pitch: -7 semitones (one octave lower)
   - Crossfade: 25 ms (very smooth)
   - Pattern: Same rhythm, different slices
   - Mix: 30-40% volume (support layer)
4. **Slicer 3 (Optional - High Layer):**
   - Pitch: +5 semitones (higher)
   - Crossfade: 5 ms (crisp)
   - Mix: 20-30% volume (shimmer layer)
5. Pan layers: Main = center, Low = 20% L, High = 20% R

**Result:** Rich, multi-dimensional vibey texture (professional depth)

---

## Genre-Specific Vibey Rules

### Lo-Fi Hip-Hop Vibey
- Tempo: 75-85 BPM (very relaxed)
- Processing: Degraded (bit-crush, vinyl, tape)
- Pitch: -3 to -4 semitones (warm)
- Reverb: 35-45% mix (spacious)

### R&B Vibey
- Tempo: 85-95 BPM (moderate)
- Processing: Clean but warm (tape saturation only)
- Pitch: 0 to -2 semitones (subtle warmth)
- Reverb: 30-40% mix (lush but controlled)

### Ambient/Background Vibey
- Tempo: 70-90 BPM (slow)
- Processing: Very spacious (reverb 50%+, delay)
- Pattern: Sparse (6-10 notes per bar)
- Role: Background texture (not main element)

---

## Reference Tracks

**Match these for vibey texture:**
- Lo-Fi Girl compilations (any track - hypnotic loops)
- Sonder - "Too Fast" (smooth R&B texture)
- Brent Faiyaz - "Clouded" (vibey background pads)
- Joji - "SLOW DANCING IN THE DARK" (ambient textures)
- Nujabes - "Reflection Eternal" (smooth, flowing)

---

## Loop Length Strategy
**Goal:** Keep loop engaging (not boring)

**Recommendations:**
- **Short Loop (1-2 bars):** High repetition tolerance, add variation every 8 bars
- **Medium Loop (4 bars):** Balanced, can repeat for 16 bars before variation
- **Long Loop (8 bars):** Less repetition needed, can sustain for 32 bars

**Variation Techniques:**
1. Filter automation (LPF sweep)
2. Reverb automation (depth change)
3. Swap 1-2 slices in pattern (subtle change)
4. Add/remove notes (density change)

---

## Commit Workflow
**When to Commit:**
- After locking in perfect groove
- Before layering additional instruments
- To free up CPU

**How:**
1. Solo Slicer track
2. File → Export → Wave File
3. Export 16-32 bars (longer loop for variation)
4. Import to new track
5. Delete original Slicer OR keep for future edits

**Benefit:** Locked groove, can't accidentally change, CPU freed

---

## Summary: Vibey Texture Essentials

> **Vibey Texture Loops = Smooth, Hypnotic, Consistent:**
> - Source: Warm pads, smooth keys, ambient textures
> - Threshold: 45-60% (balanced slicing)
> - Crossfade: 8-15 ms (medium-smooth)
> - Time Stretch: 0.95-1.05x (minimal change)
> - Pitch: 0 to -3 semitones (slight warmth)
> - Pattern: Consistent, moderate density (8-14 notes/bar)
> - Velocity: 70-85 (narrow, smooth)
> - FX: Chorus + Reverb + Tape Saturation + Light Compression
>
> **Key:** Consistency and subtlety. Let the vibe breathe.

**DO:** Repeat patterns, subtle automation, warm processing  
**DON'T:** Extreme dynamics, chaotic variation, harsh processing

[SRC: REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
