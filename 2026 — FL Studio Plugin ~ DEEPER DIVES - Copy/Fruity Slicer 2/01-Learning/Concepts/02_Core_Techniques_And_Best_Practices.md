# Fruity Slicer 2 - Core Techniques And Best Practices

## 12 Essential Techniques

### 1. Chromatic Mode for Instant Instruments
**What It Is:** Convert any single slice into a playable keyboard instrument.

**How To:**
1. Load sample and auto-slice
2. Click desired slice (vocals: "Ahh", bass: sustained note)
3. Enable "Chromatic" toggle
4. Disable "Play to End" (unless you want full loop trigger)
5. Play melody on MIDI keyboard

**What To Listen For:**
- Pitch tracking accuracy (should sound in-tune across octaves)
- Artifacts at extreme pitches (< C1 or > C6)
- Natural decay vs. abrupt cutoffs

**Pitfall:** Playing too high/low creates chipmunk/demon voices. Solution: Stay within ±2 octaves of root.  
[SRC: IL-MAN]

---

### 2. Auto-Slice Sensitivity Tuning
**What It Is:** Adjusting transient detection for perfect slice placement.

**Settings Guide:**
- **High Sensitivity (80-100%)**: Dense drum loops, fast hi-hats, glitchy textures
- **Medium Sensitivity (40-70%)**: Standard breaks, vocal phrases, melodic loops
- **Low Sensitivity (10-30%)**: Sparse kicks, sustained pads, ambient textures

**Best Practice:** Start medium → preview → adjust up/down → manual cleanup.

**Pitfall:** Over-slicing creates 100+ slices with no musical value. Solution: Reduce sensitivity, then manually delete unwanted markers.  
[SRC: IL-MAN]

---

### 3. Per-Slice Envelope Shaping
**What It Is:** Independent ADSR envelopes for each slice.

**Common Applications:**
- **Volume Envelope**: Fade in/out slices to remove clicks
  - Attack 5-10ms → smooth clicks
  - Release 50-200ms → natural decay
- **Filter Envelope**: Dynamic brightness per slice
  - Low-pass on bass slices → thump
  - High-pass on hat slices → air
- **Pan Envelope**: Auto-pan individual slices
  - Hats pan L→R for movement
  - Kicks stay center for punch

**What To Watch:** Envelope graph displays in real-time. Red = clipping envelope.

**Pitfall:** Forgetting which slice has which envelope. Solution: Color-code slices or use consistent naming.  
[SRC: IL-MAN]

---

### 4. Time Stretching Without Pitch Shift
**What It Is:** Match sample tempo to project without changing pitch.

**Algorithm Guide:**
- **Pro (elastique)**: Highest quality, most CPU
  - Use for: Final bounces, vocal chops, melodic content
- **Standard**: Balanced quality/performance
  - Use for: Live performance, layered loops
- **Fast/Draft**: Low quality, minimal CPU
  - Use for: Previewing, extreme stretches (>200%)

**Best Practice:** Stretch ≤150% for transparent results. Beyond that, artifacts become audible.

**Pitfall:** Extreme stretch (>300%) creates robotic artifacts. Solution: Resample at new tempo instead.  
[SRC: IL-MAN]

---

### 5. Slice Reordering for New Grooves
**What It Is:** Drag-and-drop slices to create new rhythmic patterns.

**Workflow:**
1. Slice drum loop (kick-snare-hat pattern)
2. Click and drag slices in slice view
3. Reorder: hat → kick → snare → kick
4. Result: New bounce pattern

**Creative Tip:** Reverse every other slice for glitch-hop feel.

**Pitfall:** Losing original order. Solution: Save preset before experimenting, or duplicate Slicer instance.  
[SRC: IL-KB]

---

### 6. Mono Slices in Stereo Field (Pan Envelope)
**What It Is:** Create stereo width from mono samples via per-slice panning.

**Hip-Hop Application:**
- Hats: Pan envelope L→R (0ms → 100ms)
- Snares: Center (0%)
- Kicks: Center (0%)
- Percussion fills: Random pan (use envelope randomization)

**What To Listen For:** Mono compatibility check (fold to mono → should not disappear).

**Pitfall:** Over-panning low frequencies (<150Hz) destroys bass punch. Solution: Keep kicks/bass center.  
[SRC: HIPHOP, Genre Best Practices]

---

### 7. Reverse Slice Triggering
**What It Is:** Play slices backward for riser/transition effects.

**Use Cases:**
- Reversed cymbal (slice 8) → crash
- Reversed vocal (slice 3) → "sucked in" effect
- Reversed snare roll → build-up

**How To:** Right-click slice → "Reverse" or use Reverse parameter.

**Pitfall:** Reversed low-end (bass/kick) sounds muddy. Solution: High-pass reversed bass slices >80Hz.  
[SRC: IL-MAN]

---

### 8. Commit to Audio + Re-Slice Workflow
**What It Is:** Bounce sliced pattern to audio, then slice again for layering.

**Workflow:**
1. Create pattern with Slicer 2 (vocal chops)
2. Render to audio (Ctrl+R or Mixer → Disk Recording)
3. Load rendered audio into NEW Slicer 2 instance
4. Slice different transients (consonants vs. vowels)
5. Layer both instances

**Why:** Creates "double-chop" effect impossible with single slicer.

**Pitfall:** Losing project organization. Solution: Name renders clearly ("Vocals_Slicer_Pass1.wav").  
[SRC: SAMPLING, Resampling Techniques]

---

### 9. Pitch Envelope for Tape Stop / Dive Effects
**What It Is:** Automate pitch per slice for downward pitch bends.

**Settings:**
- **Tape Stop**: Pitch envelope -12st over 200ms
- **Pitch Dive**: Pitch envelope -24st over 500ms
- **Wobble**: Pitch envelope ±2st sine wave

**What To Listen For:** Smooth pitch glide vs. stepped/digital artifacts.

**Pitfall:** Pitch envelope + Chromatic mode conflict. Solution: Disable Chromatic when using pitch envelopes.  
[SRC: IL-KB]

---

### 10. Low-Latency Slice Triggering (Buffer Settings)
**What It Is:** Optimize FL Studio buffers for real-time Slicer 2 performance.

**Settings:**
- **Audio Buffer**: 256 samples (balanced) or 128 (low latency, more CPU)
- **ASIO Driver**: Use ASIO4ALL or native interface ASIO

**When To Adjust:** Live finger drumming on MIDI pads, real-time slice recording.

**Pitfall:** Crackling/popping with low buffer. Solution: Increase buffer to 512 or freeze non-Slicer tracks.  
[SRC: FL Studio Performance Guide]

---

### 11. Sample Legality & Workflow Hygiene
**What It Is:** Organizational best practices for sample-based work.

**Rules:**
- **Label sample sources**: "VocalLoop_Artist_TrackName_BPM.wav"
- **Track sample pack licenses**: Free? Royalty-free? Paid loop pack?
- **Keep original + sliced versions**: Archive originals in separate folder

**Hip-Hop Context:** Many classic breaks are copyrighted. Flip them enough to be transformative (pitch shift, re-order, layer with original content).

**Pitfall:** Using recognizable loops without clearance. Solution: Chop beyond recognition or clear sample.  
[SRC: Sample Clearance Best Practices]

---

### 12. Mono Check for Kick/Bass Slices
**What It Is:** Ensure low-end slices remain punchy in mono.

**Workflow:**
1. Load kick/bass sample
2. Slice
3. Solo kick slice
4. Check in mono (Fruity Stereo Shaper → Stereo Separation 0%)
5. If phase cancellation → adjust sample or use mono source

**What To Listen For:** Kick/bass should NOT thin out in mono.

**Pitfall:** Stereo bass samples collapse in club systems. Solution: Use mono bass samples or sum to mono <150Hz.  
[SRC: Mixing Best Practices, HIPHOP]

---

## What To Watch: Visual Feedback

### Waveform Display
- **Red waveform peaks**: Clipping → reduce input gain or normalize sample
- **Slice markers (yellow lines)**: Should align with transients
- **Selected slice (highlighted)**: Current slice for chromatic/envelope editing

### Envelope Graphs
- **Smooth curves**: Natural sound
- **Sharp angles**: Potential clicks (volume envelope) or artifacts (filter envelope)
- **Crossing zero**: Envelope inversion (intentional effect or mistake?)

---

## Common Pitfalls + Fixes

### Pitfall 1: Slices Trigger Out of Order
**Symptom:** Playing C4 triggers Slice 8 instead of Slice 1.

**Fix:** Check MIDI mapping. Reset to default: C5 = Slice 1, C#5 = Slice 2, etc.  
[SRC: IL-MAN]

---

### Pitfall 2: Chromatic Mode Sounds Detuned
**Symptom:** Playing C4 sounds sharp/flat relative to project key.

**Fix:** Adjust global Pitch slider to match sample's root note. If sample is in E, set Pitch to +4 semitones.  
[SRC: IL-KB]

---

### Pitfall 3: Time Stretching Sounds Robotic
**Symptom:** Vocal chops sound like robots when stretched >200%.

**Fix 1:** Use "Pro" algorithm (higher CPU, better quality).  
**Fix 2:** Resample at new tempo instead of stretching.  
**Fix 3:** Accept artifacts as "lo-fi" aesthetic (valid creative choice).  
[SRC: IL-MAN]

---

### Pitfall 4: Clicks/Pops Between Slices
**Symptom:** Audible clicks when triggering slices.

**Fix:** Apply volume envelope:
- Attack: 5-10ms
- Release: 50-100ms

This creates smooth fade-in/out, eliminating zero-crossing clicks.  
[SRC: IL-MAN]

---

### Pitfall 5: CPU Spikes with Many Instances
**Symptom:** Project stutters with 5+ Slicer 2 instances.

**Fix 1:** Freeze tracks (Ctrl+Alt+V or Mixer → Freeze).  
**Fix 2:** Bounce Slicer patterns to audio.  
**Fix 3:** Use "Fast" time stretch algorithm on non-critical slices.  
[SRC: FL Studio Performance Guide]

---

### Pitfall 6: Lost in Slice Overload (128 Slices)
**Symptom:** Auto-slice detects 128 slices, impossible to navigate.

**Fix:** Reduce sensitivity to 20-40%, then manually add markers only where needed.  
**Alternate:** Use Slicex for >64 slices (better organization).  
[SRC: IL-KB]

---

## Genre-Specific Best Practices

### Hip-Hop / Boom-Bap
- **Slice drum breaks at 40-60% sensitivity** (kick, snare, hat only)
- **Use Chromatic mode for vocal stabs** ("Yeah!", "Hey!")
- **Commit to audio frequently** (creates "frozen" performance you can chop again)
- **Pan hats, center kicks/snares** (mono punch)

### Trap / Drill
- **Slice hi-hats at 80-100% sensitivity** (capture every transient for rolls)
- **Use Pitch envelope for 808 dives** (-12st to -24st over 200-500ms)
- **Layer sliced 808s with synth bass** (punch + sub)
- **Reverse cymbal slices for risers** (before drops)

### R&B / Pop-Hip-Hop
- **Slice vocal runs at 30-50% sensitivity** (syllables, not breaths)
- **Use Chromatic mode for playable vocal instruments** (pads, leads)
- **Filter envelope for smooth vowel-to-consonant transitions** (low-pass sweep)
- **Commit + re-slice vocal chops** (double-chop effect)

### Lo-Fi / Jazzy Hip-Hop
- **Use "Fast" time stretch algorithm intentionally** (creates lo-fi artifacts)
- **Pitch slices down -3 to -5 semitones** (vintage vibe)
- **Pan envelope for vinyl "wobble"** (subtle L→R on sustained notes)
- **Layer vinyl crackle** (Effector → Vinyl preset)

---

## What To Listen For: Quality Checkpoints

### ✅ Good Slicing
- Slices align with transients (kick hit, vocal syllable)
- No clicks/pops on slice transitions
- Chromatic mode tracks pitch accurately ±2 octaves
- Time stretching transparent up to 150%
- Mono check: bass/kick remain punchy

### ⚠️ Warning Signs
- Slice markers misaligned (adjust manually)
- Robotic time stretch artifacts (reduce stretch % or change algorithm)
- Thin bass in mono (use mono samples or sum <150Hz)
- CPU spikes (freeze tracks or bounce to audio)

### ❌ Red Flags
- 128 slices detected (reduce sensitivity)
- Detuned chromatic playback (adjust global pitch)
- Phase cancellation on low-end (check mono compatibility)
- Clipping waveforms (normalize sample or reduce gain)

---

## Hip-Hop/R&B Context: Why Slicer 2 Matters

**Classic Boom-Bap:**  
Emulates Akai MPC workflow (chop breaks, trigger from pads). Chromatic mode adds melodic capability MPC lacks.

**Modern Trap:**  
Hi-hat rolls are auto-sliced at high sensitivity, then triggered rapidly (1/32 or 1/64 notes). Pitch envelopes create 808 dives.

**R&B/Pop-Hip-Hop:**  
Vocal chops are THE signature sound. Slicer 2's chromatic mode turns vocal runs into playable instruments (Kaytranada, Flume style).

**Sample Flips:**  
Resample workflow (slice → commit → re-slice) creates layered flips that sound original, even from recognizable samples.

---

**Source Tags:**
- [SRC: IL-MAN] = Image-Line Official Manual
- [SRC: IL-KB] = Image-Line Knowledge Base
- [SRC: SAMPLING] = Sample Manipulation Techniques
- [SRC: HIPHOP] = Hip-Hop Production Context
- [SRC: Mixing Best Practices] = Industry-Standard Mixing Techniques
