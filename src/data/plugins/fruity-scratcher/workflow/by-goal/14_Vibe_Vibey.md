# Fruity Scratcher: Vibe Workflow – VIBEY

## Overview
This workflow creates **atmospheric, textured, immersive scratch textures** for vibey/chill hip-hop and lo-fi productions. Focus: sustained scratches, slow movement, repetitive hypnotic patterns, ambient integration.

---

## Routing Context

**INSERT:** Scratcher on ambient texture track  
**SEND 1:** 40% to long reverb (Valhalla VintageVerb, 5-second decay)  
**SEND 2:** 30% to slow chorus (Fruity Chorus, slow rate)  
**PARALLEL:** Parallel with quarter-note delay (dotted 8th)  
**SAMPLING ROUTING:** Load sustained pad/drone samples

---

## Step-by-Step Setup

### 1. Sample Selection
- **Load vibey sample:**
  - Sustained vowel vocals: "ahhh", "ohhh", "mmmm" (long notes)
  - Ambient pads (no transients)
  - Reverb tails from other tracks
  - Field recordings (rain, wind, ocean)
- **Pre-process:** Add long reverb tail before loading (print reverb into sample)
- **Where to find:** Splice (search "ambient vocal"), Freesound.org, or record yourself

### 2. Parameter Starting Points
```
ACC (Acceleration): 30%
SEN (Sensitivity): 40%
SPD (Speed): 100% (add slow sine wave LFO ±8%)
Pan: Center (automate slowly L→R over 8 bars)
Volume: -4dB (subliminal, not dominant)
```

### 3. Scratch Technique
- **Sustained scratches** (hold for 2-4 bars, no rhythm)
  - Slow, continuous movement (wave-like)
  - Use "Hold" button to freeze sample mid-scratch
- **No rhythmic patterns** (let scratches drift freely)
- **Minimal scratching** (1-2 scratches per 4 bars maximum)

### 4. Automation Setup
- **Automate SPD with slow LFO:**
  - Sine wave LFO: ±8% deviation
  - Rate: 1/4 bars (very slow wobble)
  - **What to listen for:** Pitch should drift gently (hypnotic)

- **Automate Pan slowly:**
  - Linear automation: Center → Hard Right (16 bars)
  - Then: Hard Right → Center (next 16 bars)
  - **What to listen for:** Scratch should float across stereo field

- **Automate ACC (breathing effect):**
  - 30% → 35% → 30% (32-bar cycle, very slow)
  - **What to listen for:** Scratches should seem to breathe

### 5. Post-FX Chain
1. **Long Reverb** (Valhalla VintageVerb or Fruity Reeverb 2)
   - Decay: 5-7 seconds
   - Pre-Delay: 50ms
   - High Cut: 8kHz (dark reverb)
   - Mix: 40%
2. **Slow Chorus** (Fruity Chorus)
   - Depth: 50%
   - Rate: 0.2Hz (very slow)
   - Delay: 20ms
   - Mix: 30%
3. **Delay** (Fruity Delay 3)
   - Time: Dotted 8th note
   - Feedback: 40%
   - Low Cut: 300Hz
   - Mix: 30%
4. **Stereo Enhancer** (Fruity Stereo Enhancer)
   - Stereo Separation: +40% (wide, spacious)

---

## Variations

### Variation 1: Frozen Sustain
- Scratch sample slowly
- Click "Hold" mid-scratch to freeze
- Let sample sustain for 4-8 bars (frozen)
- Automate SPD down slowly while held (creates pitch drop drone)
- **What to listen for:** Should sound like ambient pad

### Variation 2: Reverse Ambient Scratch
- Load reversed ambient pad
- Scratch forward (plays pad backward)
- Add shimmer reverb (creates evolving texture)
- **What to listen for:** Should sound otherworldly

---

## Pitfalls + Fixes

### ❌ PITFALL: "Scratches sound too rhythmic"
**FIX:** Don't quantize, reduce number of scratches (1 per 4-8 bars), increase sustain time

### ❌ PITFALL: "Scratches are too loud/dominant"
**FIX:** Reduce volume to -6dB, increase reverb mix to 50%, low-pass at 6kHz

### ❌ PITFALL: "Not enough movement"
**FIX:** Automate pan more, increase SPD LFO deviation to ±12%, add more chorus depth

---

## Automation Ideas

### Automation 1: Volume Swell
- Automate volume: -12dB → 0dB → -12dB (16-bar cycle)
- Creates breathing, wave-like presence
- **What to listen for:** Scratches should fade in and out gently

### Automation 2: Filter Sweep
- Automate low-pass filter cutoff: 2kHz → 8kHz → 2kHz (32-bar cycle)
- **What to listen for:** Scratches should get brighter and darker over time

---

## What To Listen For (Quality Checks)

✅ **Scratches are sustained** (not choppy)  
✅ **Movement is slow** (no fast scratching)  
✅ **Stereo field is wide** (immersive)  
✅ **Reverb tail extends** (creates space)  
✅ **Overall vibe is hypnotic** (repetitive, trance-like)

---

## Mono Compatibility Check
- Collapse to mono → some stereo width will be lost (expected)
- Ensure scratches still audible in mono (increase volume if needed)
- If scratches disappear, reduce stereo width to 20%

---

## Commit Workflow
1. Render scratch performance to audio (with all FX printed)
2. Import into Playlist as ambient layer
3. Optional: Time-stretch rendered audio to 50% speed (even slower)
4. Layer with other ambient textures (field recordings, pads)

---

## Genre Application: Vibey Hip-Hop/Lo-Fi/Chill Beats

### Use Cases:
- **Background texture:** Sustained scratches under entire track (subliminal)
- **Bridge:** Ambient scratch solo (8 bars of pure texture)
- **Outro:** Scratches fade into reverb tail (infinity fade)

### Example Artists/Tracks:
- Nujabes – "Feather" (ambient, textured production)
- Tomppabeats – "You're Cute" (lo-fi, vibey scratches)
- Jinsang – "Affection" (chill, sustained textures)

---

**Version:** 1.0  
**Vibe:** Vibey  
**Difficulty:** ★★☆☆☆ (Beginner-friendly—slow scratches are easy to control)  
**Verification:** Tested in FL Studio 21.2.3 with sustained "ahhh" vocal sample
