# Fruity Scratcher: Vibe Workflow – JAZZY

## Overview
This workflow creates **swing, laid-back, sophisticated scratch textures** for jazz-rap/neo-soul productions. Focus: triplet swing, loose timing, organic imperfection, Dilla-style behind-the-beat scratching.

---

## Routing Context

**INSERT:** Scratcher on melodic scratch track  
**SEND:** 25% to warm plate reverb (Fruity Reeverb 2, warm preset)  
**PARALLEL:** Optional—parallel with tape saturation (RC-20)  
**SAMPLING ROUTING:** Load warm, analog-sounding vocal samples

---

## Step-by-Step Setup

### 1. Sample Selection
- **Load jazzy vocal sample:**
  - Smoky female jazz vocal: "ooh", "ahh", "mmm"
  - Scat singing phrases
  - Warm male spoken word
  - Jazz chord stabs (Fender Rhodes, piano)
- **Pre-process:** Add slight vinyl warmth (RC-20) before loading
- **Where to find:** Splice (search "jazz vocal"), Loopcloud, or sample from jazz vinyl

### 2. Parameter Starting Points
```
ACC (Acceleration): 50%
SEN (Sensitivity): 60%
SPD (Speed): 100% (add ±3% wobble for vinyl feel)
Pan: Slightly left or right (not center—too rigid)
Volume: -2dB
```

### 3. Scratch Technique
- **Lazy baby scratch** (slow, relaxed forward-back)
  - **Swing quantize: 66%** (triplet feel in FL Studio)
  - Behind-the-beat timing: slightly late on downbeat (Dilla timing)
- **Sustained scratches** (hold each scratch for 1-2 beats)
- **No fast techniques** (no chirps or flares—too aggressive)

### 4. Automation Setup
- **Minimal automation** (let the performance breathe)
- **SPD wobble automation:**
  - Sine wave LFO: ±3-5% (subtle vinyl pitch drift)
  - Rate: 1/1 bar (slow wobble)
  - **What to listen for:** Should sound like vinyl, not digital

- **Optional: ACC micro-variations:**
  - 48% → 52% → 48% (8-bar cycle, very subtle)
  - **What to listen for:** Scratches should feel organic, not robotic

### 5. Post-FX Chain
1. **Tape Saturation** (RC-20 Retro Color)
   - Noise: 15%
   - Wobble: 10%
   - Mag: 30%
   - Space: Studio A
2. **Warm Plate Reverb** (Fruity Reeverb 2)
   - Size: 50%
   - Decay: 1.5 seconds
   - High Cut: 6kHz (warm, not bright)
   - Mix: 25%
3. **Subtle Low-Pass** (Fruity Love Philter)
   - Cutoff: 8kHz (roll off harsh highs, keep warmth)
   - Resonance: 5%

---

## Variations

### Variation 1: Chord Scratch Comping
- Load jazz chord stab sample (Fender Rhodes)
- Scratch on downbeats only (1 scratch per bar)
- Swing quantize: 66%
- **What to listen for:** Should comp like a rhythm guitarist

### Variation 2: Dilla Behind-the-Beat
- Set FL Studio to swing 66%
- Manually shift scratches **5-10ms late** after quantizing
- Creates laid-back, drunk feel
- **What to listen for:** Scratches should drag slightly behind drums

---

## Pitfalls + Fixes

### ❌ PITFALL: "Scratches sound too tight/robotic"
**FIX:** Enable swing quantize (66%), shift scratches late manually, reduce ACC to 40%

### ❌ PITFALL: "Scratches sound too digital/harsh"
**FIX:** Add RC-20 tape saturation, low-pass at 7kHz, use warmer samples

### ❌ PITFALL: "Too much automation kills the vibe"
**FIX:** Remove most automation—only use subtle SPD wobble (±3%)

---

## Automation Ideas

### Automation 1: Volume Dynamics
- Automate volume: -2dB → -4dB → -2dB (8-bar cycle)
- Creates natural dynamics (like live performance)
- **What to listen for:** Scratches should breathe, not stay static

### Automation 2: Pan Drift
- Automate pan slowly: 10% Left → 10% Right (16 bars)
- Very subtle—mimics vinyl imperfection
- **What to listen for:** Scratches should drift gently in stereo field

---

## What To Listen For (Quality Checks)

✅ **Scratches have swing feel** (triplet subdivisions audible)  
✅ **Timing is slightly loose** (not robotic)  
✅ **Tone is warm** (vinyl/analog character)  
✅ **Reverb is subtle** (not overpowering)  
✅ **Overall vibe is laid-back** (not rushed)

---

## Mono Compatibility Check
- Collapse to mono → scratches should remain warm and present
- If scratches thin out, reduce stereo width of reverb
- Check that tape saturation doesn't cause phase issues

---

## Commit Workflow
1. Record scratch performance with swing quantize
2. Manually nudge scratches 5-10ms late (Dilla timing)
3. Render to audio with RC-20 + reverb printed
4. Optional: Re-sample and scratch again (double-jazz vibe)

---

## Genre Application: Jazz-Rap/Neo-Soul

### Use Cases:
- **Intro:** Lazy scratches under jazzy keys (8 bars)
- **Bridge:** Solo scratch improvisation (chord tone scratching)
- **Outro:** Sustained scratches fading into reverb tail

### Example Artists/Tracks:
- A Tribe Called Quest – "Jazz (We've Got)" (classic jazz-rap scratching)
- J Dilla – "Donuts (full album)" (swing timing, vinyl warmth)
- Robert Glasper x Kendrick – "These Walls" (neo-soul scratches)

---

**Version:** 1.0  
**Vibe:** Jazzy  
**Difficulty:** ★★★☆☆ (Intermediate—requires understanding of swing timing)  
**Verification:** Tested in FL Studio 21.2.3 with warm female jazz vocal
