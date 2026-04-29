# Fruity Scratcher: Vibe Workflow – MOODY

## Overview
This workflow creates **dark, introspective, melancholic scratch textures** for moody hip-hop/R&B productions. Focus: slow movement, tape stop automation, emotional weight.

---

## Routing Context

**INSERT:** Scratcher on dedicated FX track  
**SEND:** 30% to dark reverb bus (LuxeVerb, cathedral preset)  
**PARALLEL:** None (keep scratches intimate, not layered)  
**SAMPLING ROUTING:** Load pre-processed dark vocal samples

---

## Step-by-Step Setup

### 1. Sample Selection
- **Load dark vocal sample:**
  - Male vocal (low register): "hmm", "oh no", spoken word
  - Minor key melodic phrase
  - Pre-filtered (low-pass @ 3kHz for darkness)
- **Where to find:** Splice (search "dark vocal"), Looperman, or record yourself

### 2. Parameter Starting Points
```
ACC (Acceleration): 20%
SEN (Sensitivity): 30%
SPD (Speed): 100% (will automate down)
Pan: Center
Volume: -3dB
```

### 3. Scratch Technique
- **Baby scratch** (slow forward-back movement)
  - 1-2 scratches per bar maximum
  - Hold each scratch for 1-2 seconds (sustain the emotion)
- **No chirps or flares** (too energetic for moody)

### 4. Automation Setup
- **Automate SPD knob:**
  - Bar 1-4: 100% (normal speed)
  - Bar 5-8: 100% → 70% (gradual slowdown)
  - Bar 9: 70% → 0% (tape stop into silence)
- **What to listen for:** Should feel like the track is "giving up"

### 5. Post-FX Chain
1. **Low-Pass Filter** (Fruity Love Philter)
   - Cutoff: 2-3kHz
   - Resonance: 10%
   - Type: LP 24dB
2. **Dark Reverb** (LuxeVerb)
   - Preset: "Cathedral Dark"
   - Decay: 4-5 seconds
   - Mix: 30%
3. **Vinyl Warmth** (RC-20 Retro Color)
   - Space: Cathedral
   - Noise: 20%
   - Wobble: 10%

---

## Variations

### Variation 1: Reverse Moody Scratch
- Load sample backward (reverse in Edison first)
- Scratch forward (creates haunting reverse effect)
- Lower ACC to 15% (even slower drag)

### Variation 2: Held Sustain
- Click "Hold" button in Scratcher after scratch
- Sample freezes mid-scratch
- Automate SPD down while held (creates eerie pitch drop)

---

## Pitfalls + Fixes

### ❌ PITFALL: "Scratches sound too fast/energetic"
**FIX:** Lower ACC to 10-15%, reduce SEN to 20%, scratch **slower** physically

### ❌ PITFALL: "Scratches are too bright/harsh"
**FIX:** Add aggressive low-pass filter (2kHz cutoff), increase resonance slightly

### ❌ PITFALL: "Tape stop sounds abrupt/unnatural"
**FIX:** Extend automation curve to 8+ bars, use curved automation (not linear)

---

## Automation Ideas

### Automation 1: Pan Creep
- Automate pan slowly from Center → Hard Left over 16 bars
- Creates sense of drifting away
- **What to listen for:** Scratch should disappear into the left speaker

### Automation 2: ACC Breathing
- Automate ACC: 20% → 35% → 20% (8-bar cycle)
- Creates "breathing" effect (speeds up, slows down)
- **What to listen for:** Scratches should feel like they're struggling

---

## What To Listen For (Quality Checks)

✅ **Scratches drag slowly** (not snappy)  
✅ **Tape stop sounds natural** (gradual, not sudden)  
✅ **Sample is dark in tone** (low-passed, warm)  
✅ **Reverb tail extends into silence** (emotional sustain)  
✅ **Overall vibe feels heavy** (not uplifting)

---

## Mono Compatibility Check
- Collapse to mono in Mixer → should still feel centered and heavy
- If scratches disappear in mono, reduce stereo width of reverb

---

## Commit Workflow
1. Render scratch performance to audio (File → Export → Wave)
2. Import rendered audio to Playlist
3. Re-process with additional FX if needed (distortion, more reverb)

---

## Genre Application: Moody Hip-Hop/R&B

### Use Cases:
- **Intro/Outro:** Slow scratch intro (8 bars) sets dark mood
- **Breakdown:** Tape stop into scratch silence (creates tension)
- **Bridge:** Sustained scratch under melancholic vocal

### Example Artists/Tracks:
- Earl Sweatshirt – "Chum" (dark, slow scratching)
- The Weeknd – "Wicked Games" (moody production, slow FX)
- Kendrick Lamar – "u" (dark, introspective scratches)

---

**Version:** 1.0  
**Vibe:** Moody  
**Difficulty:** ★★☆☆☆ (Beginner-friendly—slow scratches are easier to control)  
**Verification:** Tested in FL Studio 21.2.3 with dark vocal sample
