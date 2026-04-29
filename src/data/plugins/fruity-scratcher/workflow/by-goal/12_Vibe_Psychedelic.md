# Fruity Scratcher: Vibe Workflow – PSYCHEDELIC

## Overview
This workflow creates **trippy, warped, disorienting scratch textures** for experimental hip-hop/glitch-hop productions. Focus: reverse scratching, extreme ACC settings, pitch automation, unpredictable movement.

---

## Routing Context

**INSERT:** Scratcher on experimental FX track  
**SEND 1:** 50% to shimmer reverb (Valhalla Shimmer)  
**SEND 2:** 30% to frequency shifter (Fruity Frequency Shifter)  
**PARALLEL:** Parallel with delay (EchoBoy, shimmer mode)  
**SAMPLING ROUTING:** Load pre-reversed, pitch-shifted samples

---

## Step-by-Step Setup

### 1. Sample Selection
- **Load psychedelic vocal sample:**
  - Reversed speech: "backwards talking"
  - Pitched-down vocals: -7 to -12 semitones
  - Glitchy artifacts: digital errors, buffer glitches
  - Underwater/warped synth pads
- **Pre-process before loading:** Reverse in Edison, pitch shift in Pitcher
- **Where to find:** Cymatics (glitch packs), or reverse your own vocal recordings

### 2. Parameter Starting Points
```
ACC (Acceleration): 5% (then automate to 95% mid-scratch)
SEN (Sensitivity): Start at 20%, automate to 80%
SPD (Speed): 100% (will automate with sine wave LFO)
Pan: Center (will automate L→R→L)
Volume: -2dB
```

### 3. Scratch Technique
- **Random scratches** (no pattern—chaos over precision)
  - Don't quantize to grid
  - Start scratches at random points in sample
  - Use "Hold" button mid-scratch to freeze (glitch effect)
- **Reverse baby scratch** (backward movement primarily)

### 4. Automation Setup
- **Automate ACC:**
  - Bar 1-2: 5% (ultra-slow drag)
  - Bar 3: 5% → 95% (instant snap mid-bar)
  - Bar 4: 95% → 5% (back to slow)
  - **What to listen for:** Movement should feel "broken"

- **Automate SPD with LFO:**
  - Sine wave LFO: ±30% deviation
  - Rate: 1/4 note (warbling effect)
  - **What to listen for:** Pitch should wobble unpredictably

- **Automate Pan:**
  - Random jumps: Center → Hard Left → Hard Right → Center
  - Use stepped automation (not smooth curves)
  - **What to listen for:** Scratch should jump around stereo field

- **Automate SEN:**
  - Triangle wave LFO: 20% → 80% → 20% (8-bar cycle)
  - **What to listen for:** Scratch response should change dynamically

### 5. Post-FX Chain
1. **Frequency Shifter** (Fruity Frequency Shifter)
   - Shift: +120Hz or -80Hz
   - Creates inharmonic, alien texture
2. **Shimmer Reverb** (Valhalla Shimmer or similar)
   - Decay: 6-8 seconds
   - Pitch: +12 semitones (octave up)
   - Mix: 50%
3. **Delay** (EchoBoy, Shimmer mode)
   - Time: Dotted 8th note
   - Feedback: 60%
   - Modulation: 30%
4. **Pitch Shifter** (Pitcher)
   - Shift: +7 semitones (glitchy intervals)
   - Formant: Off (alien voice)

---

## Variations

### Variation 1: Glitch Freeze
- Set ACC to 100% (instant response)
- Scratch quickly, then click "Hold" to freeze mid-scratch
- Automate SPD down while frozen (creates pitch drop glitch)
- Release Hold randomly (stuttering effect)

### Variation 2: Phase Inversion Chaos
- Route Scratcher to Stereo Shaper
- Invert phase on left or right channel
- Creates hollow, phasing effect
- **What to listen for:** Scratches should sound "inside out"

---

## Pitfalls + Fixes

### ❌ PITFALL: "Scratches sound too normal/predictable"
**FIX:** Use extreme ACC (0% or 100%), automate more aggressively, scratch off-grid

### ❌ PITFALL: "Too harsh/digital sounding"
**FIX:** Add more shimmer reverb, reduce frequency shifter amount, low-pass at 8kHz

### ❌ PITFALL: "Automation is too smooth"
**FIX:** Use stepped/randomized automation (not smooth curves), add more Hold freezes

---

## Automation Ideas

### Automation 1: Breathing ACC
- Automate ACC in sine wave: 0% → 100% → 0% (16-bar cycle)
- Creates "breathing" or "pulsing" scratch response
- **What to listen for:** Scratches should speed up and slow down organically

### Automation 2: Random SPD Jumps
- Use Formula Controller to randomize SPD every 2 bars
- Range: 50% → 150% (random)
- **What to listen for:** Unpredictable pitch shifts

---

## What To Listen For (Quality Checks)

✅ **Scratches sound disorienting** (not groove-locked)  
✅ **Pitch wobbles unpredictably** (LFO is working)  
✅ **Movement feels "wrong"** (either too fast or too slow)  
✅ **Stereo field is chaotic** (jumping L/R)  
✅ **Overall vibe is trippy** (not straightforward)

---

## Mono Compatibility Check
- **DO NOT** worry about mono compatibility for psychedelic vibe
- Phase cancellation is actually **desired** for hollow, trippy effect
- If needed, keep bass/kick in mono, let scratches be stereo-experimental

---

## Commit Workflow
1. Render scratch performance to audio
2. Import into Edison
3. Apply additional warping: Time stretch (extreme settings), reverse again, slice randomly
4. Re-import warped audio as new sample and scratch again (double psychedelic)

---

## Genre Application: Experimental Hip-Hop/Glitch-Hop

### Use Cases:
- **Bridge:** Psychedelic scratch breakdown (8 bars of chaos)
- **Outro:** Reverse scratches fading into silence
- **Interlude:** Glitchy scratch solo (experimental transition)

### Example Artists/Tracks:
- Flying Lotus – "Zodiac Shit" (glitchy, warped scratches)
- Death Grips – "Guillotine" (chaotic, disorienting FX)
- Flylo x Danny Brown – "Kush Coma" (psychedelic production)

---

**Version:** 1.0  
**Vibe:** Psychedelic  
**Difficulty:** ★★★★★ (Advanced—requires heavy automation + FX knowledge)  
**Verification:** Tested in FL Studio 21.2.3 with reversed, pitched-down vocal
