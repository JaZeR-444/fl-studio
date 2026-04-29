# Fruity Slicer: Core Techniques and Best Practices

## Overview

These 12 techniques represent essential Fruity Slicer workflows for sample-based Hip-Hop/R&B production.

[SRC: IL-MAN + REPUTABLE]

---

## Technique 1: Optimal Threshold Detection

**Goal:** Get clean, accurate slice detection on first attempt

**Setup:**
1. Load sample into Slicer
2. **Before** clicking Auto, visually inspect waveform
3. Identify transient density (kicks/snares/hits per bar)
4. Set Threshold based on density:
   - **Sparse transients** (4-8 per bar): 60-70%
   - **Medium density** (8-16 per bar): 45-55%
   - **High density** (16+ per bar): 30-40%
5. Click Auto
6. Visually verify slices align with transients

**What to Listen For:**
- Each slice captures complete hit (no partial cuts)
- No excessive slices between main transients
- Slices at musically relevant points

**Pitfall:** Setting Threshold without inspecting waveform first  
**Fix:** Always visual inspection → Threshold estimation → Auto

[SRC: REPUTABLE]

---

## Technique 2: Manual Slice Refinement

**Goal:** Perfect slice points after auto-detection

**Setup:**
1. After Auto-detect, zoom in on waveform (mouse wheel)
2. **Delete** incorrect slices:
   - Right-click marker → Delete
   - Or select marker, press Delete key
3. **Add** missing slices:
   - Double-click waveform at desired slice point
4. **Move** slices (if supported by FL version):
   - Click+drag marker left/right

**Critical Locations to Check:**
- Kick drum hits (should have slice at peak)
- Snare/clap hits (slice right at transient)
- Hi-hat patterns (may need manual slices for 16ths)
- Vocal syllables (slice at consonant attack)

**Pro Tip:** Hold Shift while adding slice → snaps to zero-crossing (reduces clicks)

[SRC: REPUTABLE]

---

## Technique 3: Crossfade Management

**Goal:** Eliminate clicks while preserving transient snap

**Settings Guide:**

| Material Type | Crossfade Setting | Why |
|---------------|-------------------|-----|
| **Drum breaks** | 5-10 ms | Preserve punch |
| **Vocals** | 15-20 ms | Smooth syllables |
| **Pads/Textures** | 25-30 ms | Seamless blending |
| **Glitch/Stutter** | 0 ms | Intentional artifacts |

**How to Test:**
1. Set Crossfade to 0 ms
2. Play pattern, listen for clicks
3. Gradually increase Crossfade until clicks disappear
4. Stop when transients start to feel "mushy"
5. **Optimal:** Just enough to remove clicks, no more

**What to Listen For:**
- No audible clicks between slices
- Transients still feel crisp (not softened)
- Natural flow between chops

[SRC: IL-MAN]

---

## Technique 4: Time-Stretch Workflow Matching

**Goal:** Match sliced loop to project tempo without artifacts

**Workflow:**

**Method 1: Auto-Sync (Recommended)**
1. FL Studio auto-detects loop BPM when loading
2. Slicer stretches to project tempo automatically
3. **Check:** Does it sound natural?
4. If artifacts: Adjust Time Stretch knob manually

**Method 2: Manual Time-Stretch**
1. Note original loop BPM (e.g., 90 BPM)
2. Note project BPM (e.g., 140 BPM)
3. Calculate stretch ratio: 140/90 = 1.56x
4. Set Time Stretch knob to 1.56x

**Artifact Prevention:**
- Keep stretch ratio between 0.75x and 1.5x
- Beyond this range: Consider resampling or finding better source
- Extreme stretch (2x) = obvious artifacts

**What to Listen For:**
- Pitch stays stable (no warbling)
- Transients stay crisp (no smearing)
- Natural rhythm feel (no robotic timing)

[SRC: IL-MAN]

---

## Technique 5: "Dump to Piano Roll" Workflow

**Goal:** Instantly create pattern matching original loop timing

**Setup:**
1. Load sample, auto-detect slices
2. Right-click waveform display
3. Select **"Dump to Piano Roll"**
4. FL Studio creates MIDI pattern with:
   - Slices triggered at original positions
   - Original timing preserved
   - Notes at correct velocity

**Use Cases:**
- Starting point for variation (edit dumped pattern)
- Learning original groove (see MIDI representation)
- Quick A/B test (compare original vs re-chopped)

**Pro Move:**
1. Dump to Piano Roll
2. Duplicate pattern
3. Edit duplicate (create variation)
4. Keep original as reference

[SRC: IL-MAN]

---

## Technique 6: Individual Slice FX Routing

**Goal:** Apply different effects to each slice

**Setup:**
1. In Slicer, enable **"Mix Send Checkboxes"**
2. Check boxes for slices you want on separate tracks
3. Each checked slice routes to unique mixer track
4. Apply different FX per track:
   - Slice 1 (kick): Compression + sub boost
   - Slice 2 (snare): Reverb + transient shaper
   - Slice 3 (vocal): Delay + pitch shift

**Use Cases:**
- Moody: Reverb only on vocal slices, dry on drums
- Psychedelic: Extreme FX on select slices
- Upbeat: Compression on kick/snare, brightness on hats

**What to Listen For:**
- Each slice has unique character
- Mix stays cohesive (not chaotic)
- FX enhance, don't overwhelm

[SRC: IL-MAN]

---

## Technique 7: Velocity-Sensitive Chopping

**Goal:** Create dynamic patterns via MIDI velocity

**Setup:**
1. Draw MIDI pattern in Piano Roll
2. Adjust velocity for each note:
   - **High velocity (100-127):** Louder, punchier
   - **Medium velocity (70-99):** Balanced
   - **Low velocity (40-69):** Quieter, background
3. In Slicer, adjust **"Note On"** knob:
   - Lower = more velocity sensitivity
   - Higher = less velocity sensitivity

**Pattern Examples:**

**Boom-Bap Groove:**
- Kick: Velocity 110 (strong)
- Snare: Velocity 105 (strong)
- Hi-hats: Velocity 70 (background)

**Dynamic Build:**
- Intro: All slices velocity 60
- Verse: All slices velocity 80
- Chorus: All slices velocity 110

**What to Listen For:**
- Natural dynamic variation (like live drums)
- Important slices punch through
- Background slices add texture without cluttering

[SRC: REPUTABLE]

---

## Technique 8: Glitch/Stutter Creation

**Goal:** Create intentional glitch effects via rapid re-triggering

**Setup:**
1. Load sample, slice normally
2. In Piano Roll, draw **very fast notes**:
   - 1/32nd or 1/64th note lengths
   - Rapid repetition of same slice
3. Set Crossfade to **0 ms** (intentional clicks)
4. Automate Time Stretch (0.5x → 2x) for chaos

**Glitch Pattern Example (1 bar):**
```
Slice 1: 1/32nd notes x 16 (bar 1, beats 1-2)
Slice 3: 1/64th notes x 8 (bar 1, beat 3)
Slice 2: 1/16th notes x 4 (bar 1, beat 4)
```

**What to Listen For:**
- Stuttering, glitchy texture
- Controlled chaos (not random mess)
- Adds energy without destroying groove

**Vibe Use:**
- **Psychedelic:** Extreme (entire section)
- **Upbeat:** Drops/transitions
- **Moody:** Skip (too aggressive)

[SRC: REPUTABLE - Travis Scott production techniques]

---

## Technique 9: Layered Mode for Texture Building

**Goal:** Trigger all slices simultaneously for dense texture

**Setup:**
1. In Slicer, set Mode dropdown to **"Layered"**
2. Draw single MIDI note
3. All slices trigger at once (layered)
4. Adjust Output knob to taste (may be loud)

**Use Cases:**
- Creating pad textures from drum loops
- Ambient washes from vocal chops
- Psychedelic "wall of sound" moments

**Processing Chain:**
- Reverb (100% wet, large hall)
- EQ (HPF at 300 Hz, remove low-end)
- Compression (heavy, to glue layers)

**What to Listen For:**
- Dense, complex texture
- No individual slices distinguishable
- Ambient, atmospheric quality

[SRC: IL-MAN]

---

## Technique 10: Swing Application (Jazzy/Vibey)

**Goal:** Add swing/groove to chopped patterns

**Setup:**
1. Create MIDI pattern in Piano Roll
2. In Piano Roll menu: Tools → **Quantize**
3. Set **Swing:** 50-66%
   - 50% = slight swing
   - 66% = heavy swing (J Dilla-style)
4. Alternatively: Manually shift notes off-grid

**Swing Guidelines:**

| Genre | Swing Amount | Feel |
|-------|--------------|------|
| **Jazzy** | 60-66% | Heavy, drunk swing |
| **Vibey** | 50-55% | Subtle, groovy |
| **Boom-Bap** | 55-60% | Hip-Hop pocket |
| **Upbeat** | 0% | Straight, aggressive |

**What to Listen For:**
- Laid-back, groovy feel (not robotic)
- Slices hit slightly late (behind the beat)
- Natural, human-like timing

[SRC: REPUTABLE - J Dilla workflow analysis]

---

## Technique 11: Resample & Re-Slice Workflow

**Goal:** Commit chop pattern to audio, re-slice for deeper manipulation

**Workflow:**
1. Create pattern in Slicer
2. **Render to audio:**
   - Solo Slicer track
   - File → Export → Wave File
   - Export 4-8 bars
3. **Re-import to new Slicer instance:**
   - Load rendered audio into fresh Slicer
   - Auto-detect slices (new transients)
   - Create new pattern
4. **Result:** Second-generation chops (chops of chops)

**Use Cases:**
- Psychedelic: Layer multiple generations
- Moody: Smooth out first chop, re-chop gently
- Upbeat: Create complex rhythmic variations

**What to Listen For:**
- Unique character (impossible via first-gen chop)
- Degradation artifacts (may be desirable)
- New rhythmic possibilities

[SRC: REPUTABLE]

---

## Technique 12: Automation for Dynamic Evolution

**Goal:** Evolve chop character over time via automation

**Automate These Parameters:**

**Time Stretch Automation (Build-Ups)**
- Intro: 1.0x
- Build-Up: 1.0x → 1.3x (speed up)
- Drop: Snap back to 1.0x

**Pitch Automation (Psychedelic Drift)**
- Verse: 0 semitones
- Chorus: +2 semitones (brighter)
- Bridge: -3 semitones (darker)

**Crossfade Automation (Smooth → Choppy)**
- Verse: 20 ms (smooth)
- Chorus: 5 ms (choppy, aggressive)

**What to Listen For:**
- Clear evolution throughout track
- Automation enhances vibe (not distracting)
- Smooth transitions between states

[SRC: REPUTABLE]

---

## Best Practices Summary

### DO:
✅ Visually inspect before auto-detection  
✅ Preview slices individually before sequencing  
✅ Use Crossfade to eliminate clicks  
✅ Match Time Stretch to project tempo  
✅ Apply swing for jazzy/vibey feels  
✅ Route slices to individual mixer tracks for advanced FX

### DON'T:
❌ Auto-detect without checking Threshold first  
❌ Skip manual slice refinement  
❌ Over-stretch (keep ratio between 0.75x-1.5x)  
❌ Use Layered mode when you want individual slice control  
❌ Forget to check mono compatibility on bass-heavy loops

---

## Critical Listening Checklist

Before finalizing chopped pattern:
- [ ] No audible clicks between slices
- [ ] Transients feel crisp (not mushed)
- [ ] Pattern grooves naturally (not robotic)
- [ ] Slices sit in mix cohesively
- [ ] Tempo/pitch match project
- [ ] Mono compatibility (for bass elements)

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete  
**Techniques Documented:** 12
