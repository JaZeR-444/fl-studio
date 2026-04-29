# Fruity Slicer 2 - Best Settings Starting Points

## 10 Starting Point Configurations

### 1. Boom-Bap Drum Break Chopping
**Use Case:** Classic hip-hop breakbeat slicing

**Settings:**
- **Auto-Slice Sensitivity:** 50-60%
- **Time Stretch:** Off (preserve original tempo artifacts)
- **Chromatic Mode:** Off (triggering individual slices)
- **Play to End:** Off
- **Volume Envelope:** Attack 0ms, Release 20ms (tight transients)
- **Filter:** Bypassed (preserve analog warmth)
- **Pan Envelope:** Center for kicks/snares, ±30% for hats

**What To Listen For:** Clean slice separation, punchy transients

**Genre:** Boom-Bap, Golden Era Hip-Hop  
[SRC: HIPHOP]

---

### 2. Trap Hi-Hat Rolls
**Use Case:** Dense 808 hi-hat roll patterns

**Settings:**
- **Auto-Slice Sensitivity:** 90-100% (capture every transient)
- **Time Stretch:** Off
- **Chromatic Mode:** Off
- **Volume Envelope:** Attack 0ms, Release 10ms (ultra-tight)
- **Filter:** High-pass 500Hz (remove mud)
- **Pan Envelope:** Alternate L/R ±50% per slice

**What To Listen For:** Clean, separated hi-hat hits; no overlapping tails

**Genre:** Trap, Drill  
[SRC: HIPHOP]

---

### 3. Vocal Chop Instrument (Chromatic)
**Use Case:** Turn vocal phrase into playable keyboard instrument

**Settings:**
- **Auto-Slice Sensitivity:** 30-40% (syllable-level slicing)
- **Selected Slice:** Vowel sound ("Ahh", "Ooh")
- **Chromatic Mode:** ON
- **Play to End:** Off
- **Time Stretch Algorithm:** Pro (elastique)
- **Volume Envelope:** Attack 10ms, Release 300ms (smooth sustain)
- **Filter Envelope:** Low-pass 3kHz, gentle sweep
- **Global Pitch:** Match sample root note

**What To Listen For:** In-tune playback across octaves, no pitch artifacts

**Genre:** R&B, Pop-Hip-Hop, Electronic  
[SRC: IL-MAN]

---

### 4. Bass Note Slicing (Chromatic)
**Use Case:** Sample-based bass instrument

**Settings:**
- **Auto-Slice Sensitivity:** 20-30% (sustained notes only)
- **Selected Slice:** Sustained bass note (no transient)
- **Chromatic Mode:** ON
- **Play to End:** Off
- **Time Stretch Algorithm:** Pro
- **Volume Envelope:** Attack 5ms, Release 100ms
- **Filter:** Low-pass 150Hz (remove highs)
- **Pan Envelope:** Center (0%)

**What To Listen For:** Mono punch, no phase issues, in-tune playback

**Genre:** Hip-Hop, R&B, Electronic  
[SRC: HIPHOP]

---

### 5. Glitch Percussion (Psychedelic)
**Use Case:** Experimental glitch-hop textures

**Settings:**
- **Auto-Slice Sensitivity:** 70-80%
- **Slice Order:** Randomized (drag-and-drop reorder)
- **Chromatic Mode:** Off
- **Pitch Envelope:** Random ±12st variations per slice
- **Pan Envelope:** Random L/R per slice
- **Delay Envelope:** 0-30ms random per slice
- **Time Stretch:** Extreme (200-300%) on select slices

**What To Listen For:** Controlled chaos, not just noise

**Genre:** IDM, Glitch-Hop, Experimental  
[SRC: SAMPLING]

---

### 6. Jazzy Swing Chops
**Use Case:** Laid-back jazz/lo-fi hip-hop sample chopping

**Settings:**
- **Auto-Slice Sensitivity:** 40-50%
- **Time Stretch:** Off (preserve analog timing imperfections)
- **Chromatic Mode:** Off
- **Volume Envelope:** Attack 10ms, Release 400ms (smooth decay)
- **Filter:** Low-pass 2.5kHz (warm, vintage)
- **Global Pitch:** -2st (darker tonality)
- **Trigger Timing:** Swing quantize 66% (triplet feel)

**Post-FX:** Add Effector → Vinyl preset (20-30% mix)

**What To Listen For:** Laid-back groove, vinyl warmth

**Genre:** Jazz Rap, Lo-Fi Hip-Hop, Boom-Bap  
[SRC: HIPHOP]

---

### 7. Moody Reversed Vocals
**Use Case:** Dark, introspective vocal textures

**Settings:**
- **Auto-Slice Sensitivity:** 30-40%
- **Selected Slices:** Vowel-heavy slices → Reverse them
- **Chromatic Mode:** Off
- **Volume Envelope:** Attack 50ms, Release 800ms (long tail)
- **Filter Envelope:** Low-pass 800Hz (dark, muffled)
- **Global Pitch:** -5st (deeper, moodier)
- **Pan Envelope:** Center (focused)

**Post-FX:** LuxeVerb, 60% wet, 3-5s decay

**What To Listen For:** "Sucked in" reverse effect, dark ambience

**Genre:** Dark R&B, Trap, Ambient Hip-Hop  
[SRC: SAMPLING]

---

### 8. Upbeat Bounce Pattern
**Use Case:** Energetic, rhythmic sample flip

**Settings:**
- **Auto-Slice Sensitivity:** 60-70%
- **Slice Selection:** Kick + snare + hat slices only (delete others)
- **Chromatic Mode:** Off
- **Volume Envelope:** Attack 0ms, Release 30ms (tight bounce)
- **Filter:** High-pass 300Hz (brightness)
- **Pitch Envelope:** +2st on snare slices (uplifting)
- **Time Stretch:** 110-120% original tempo (faster energy)

**What To Listen For:** Clean separation, energetic punch

**Genre:** Bounce, Pop-Hip-Hop, Dance  
[SRC: HIPHOP]

---

### 9. Vibey Atmospheric Loop
**Use Case:** Background texture layer

**Settings:**
- **Auto-Slice Sensitivity:** 20-30% (sustained notes only)
- **Selected Slices:** Pads, vocal tails, ambient textures
- **Chromatic Mode:** Off
- **Volume Envelope:** Attack 50ms, Release 1200ms (long fade)
- **Filter:** Low-pass 1.8kHz (subdued)
- **Pan Envelope:** Slow drift ±60%
- **Global Pitch:** -3st (warmer)

**Post-FX:** Reverb 50% wet, Delay 1/4 note 30% wet

**What To Listen For:** Slices blend into wash, not distinct hits

**Genre:** Ambient Hip-Hop, R&B, Chillwave  
[SRC: SAMPLING]

---

### 10. Commit-and-Re-Slice (Double-Chop)
**Use Case:** Layered sample complexity

**Settings (Pass 1):**
- **Auto-Slice Sensitivity:** 40%
- Slice on syllables/beats
- Trigger pattern in Piano Roll
- **Render to audio** (Ctrl+R)

**Settings (Pass 2 - Load Rendered Audio into NEW Slicer 2):**
- **Auto-Slice Sensitivity:** 70%
- Slice on consonants/transients (different from Pass 1)
- **Chromatic Mode:** ON (if desired)
- Layer both instances (Pass 1 + Pass 2)

**What To Listen For:** Dense, complex texture impossible with single slicer

**Genre:** Experimental Hip-Hop, Electronic, Sound Design  
[SRC: SAMPLING]

---

## Genre-Specific Quick Guide

### Hip-Hop (Boom-Bap)
- **Sensitivity:** 50-60%
- **Filter:** Bypassed (preserve warmth)
- **Pitch:** 0st to -2st
- **Timing:** Swing 60-66%

### Trap/Drill
- **Sensitivity:** 80-100% (hi-hats), 40% (kicks/808s)
- **Filter:** High-pass hats >500Hz
- **Pitch Envelope:** -12st to -24st (808 dives)
- **Timing:** Straight quantize or 1/32 rolls

### R&B/Pop-Hip-Hop
- **Sensitivity:** 30-40% (vocal syllables)
- **Chromatic Mode:** ON (vocal instruments)
- **Filter Envelope:** Gentle sweeps (200Hz-3kHz)
- **Timing:** Subtle swing (55-60%)

### Lo-Fi/Jazzy
- **Sensitivity:** 40-50%
- **Filter:** Low-pass 2-2.5kHz
- **Pitch:** -2st to -4st
- **Timing:** Swing 66%, manual nudges ±5-10ms
- **Post-FX:** Vinyl crackle (Effector)

### Experimental/Psychedelic
- **Sensitivity:** Variable (20-90%)
- **Slice Order:** Randomized
- **Pitch Envelope:** Extreme (-18st dives)
- **Pan Envelope:** Random swirl
- **Time Stretch:** Extreme (200-300%)

---

## Controller Mapping Reference

### MIDI Pad Controller (e.g., Akai MPD)
**Default Mapping:**
- **Pad 1** = C5 (Slice 1)
- **Pad 2** = C#5 (Slice 2)
- **Pad 3** = D5 (Slice 3)
- ... and so on

**Recommended:**
- **Pads 1-8:** First 8 slices (kick, snare, hat variations)
- **Pads 9-16:** Next 8 slices (fills, FX)

**Finger Drumming Workflow:**
1. Load break sample
2. Auto-slice at 50-60%
3. Verify first 8 slices = useful hits
4. Manually delete useless slices
5. Record live performance to Piano Roll
6. Edit for tightness

---

## Time Stretch Algorithm Guide

### When To Use Each Algorithm

**Pro (elastique):**
- ✅ Vocal chops (transparent pitch shifting)
- ✅ Melodic content (bass, synths, leads)
- ✅ Final bounces (quality priority)
- ❌ Avoid if: CPU limited, stretching >200%

**Standard:**
- ✅ Balanced quality/performance
- ✅ Live performance (lower latency)
- ✅ Drum loops (moderate stretch <150%)
- ❌ Avoid if: Extreme stretch, vocal content

**Fast:**
- ✅ Extreme stretch (>200%)
- ✅ Intentional lo-fi artifacts
- ✅ Multiple Slicer 2 instances (CPU limited)
- ❌ Avoid if: Transparent quality needed

---

## Mono Check Settings

**Critical for Hip-Hop/R&B:**

Before finalizing slice-based track:
1. Load Fruity Stereo Shaper on Master
2. Set Stereo Separation to 0% (mono)
3. Listen to:
   - **Kick slices:** Should remain punchy (not thin)
   - **Bass slices:** Should maintain weight
   - **Vocal slices:** Should stay centered and clear
4. If anything thins out:
   - **Kick/Bass:** Use mono samples, pan center
   - **Vocals:** Check for phase issues, sum to mono if needed

**Red Flag:** If bass/kick disappear in mono, your mix will fail in clubs/phones.

---

## CPU Optimization Settings

**For Projects with 5+ Slicer 2 Instances:**

1. **Freeze non-critical tracks** (Ctrl+Alt+V)
2. **Use "Fast" algorithm** on background textures
3. **Bounce patterns to audio** (commit workflow)
4. **Increase buffer** (Options → Audio Settings → 512 samples)
5. **Disable unused FX** (bypass reverb/delay when not needed)

---

## Safe Starting Point (Universal)

**When In Doubt, Use This:**
- **Auto-Slice Sensitivity:** 50%
- **Chromatic Mode:** Off (test first)
- **Time Stretch:** Off (preserve original tempo)
- **Volume Envelope:** Attack 5ms, Release 50ms
- **Filter:** Bypassed
- **Pan Envelope:** Center (0%)
- **Global Pitch:** 0st

Then adjust from there based on sample type and genre.

---

**Source Tags:**
- [SRC: IL-MAN] = Image-Line Manual
- [SRC: HIPHOP] = Hip-Hop Production Best Practices
- [SRC: SAMPLING] = Sample Manipulation Techniques
