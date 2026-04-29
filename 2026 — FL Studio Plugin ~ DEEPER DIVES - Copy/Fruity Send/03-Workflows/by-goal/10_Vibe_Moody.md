# Fruity Send: Vibe Workflow – MOODY

## Overview
This workflow uses Fruity Send to create **dark, atmospheric parallel processing chains** for moody hip-hop/R&B productions. Focus: pre-fader reverb sends, dark ambient buses, subtle texture layers.

---

## Routing Context

**INSERT:** Fruity Send on vocal/lead track (Slot 1, before other FX)  
**SEND TO:** Dedicated "Dark Reverb" bus (Track 20)  
**DRY:** 100% (maintain original signal in main track)  
**PARALLEL CHAIN:** Original vocal + dark reverb bus blend

---

## Step-by-Step Setup

### 1. Create Routing

**Source Track (Vocal):**
1. Insert Fruity Send in Slot 1 (before EQ/compression)
2. Set "Send To" → Track 20 (Dark Reverb Bus)
3. Set "Dry" → 100% (keep original vocal intact)
4. Set "Volume" → 80% (moderate send level)

**Dark Reverb Bus (Track 20):**
1. Sidechain Track 20 to Source Track (right-click sidechain icon)
2. Insert LuxeVerb or Valhalla VintageVerb
3. Preset: "Cathedral Dark" or "Long Dark Hall"
4. Decay: 4-6 seconds
5. High Cut: 4kHz (dark tone)
6. Mix: 100% (wet only on bus)

### 2. Parameter Starting Points

```
FRUITY SEND (Source Track):
- Send To: Track 20
- Dry: 100%
- Volume: 80%
- Pan: Center (or match source pan)

REVERB BUS (Track 20):
- Fader: -8dB (subliminal presence)
- EQ: Low-pass at 4kHz (remove brightness)
- Optional: Add tape saturation (RC-20) after reverb
```

### 3. Vibe-Specific Moves

**Moody Characteristics:**
- **Pre-fader send:** Vocal fades out, reverb stays loud (creates haunting tail)
- **Dark reverb tone:** Low-pass filter on reverb bus removes brightness
- **Subtle presence:** Reverb bus at -8dB to -12dB (felt, not heard)

**Automation:**
- Automate Source Track fader: 0dB → -∞ (fade vocal out)
- Reverb bus stays at -8dB (creates "ghost" vocal effect)
- **What to listen for:** Vocal disappears, reverb tail lingers

### 4. Post-FX on Reverb Bus

1. **Low-Pass Filter** (Fruity Love Philter)
   - Cutoff: 3-4kHz (dark, muffled reverb)
   - Resonance: 10%
2. **Tape Saturation** (RC-20)
   - Noise: 15%
   - Wobble: 10%
   - Mag: 20% (analog warmth)
3. **Stereo Width** (Fruity Stereo Enhancer)
   - Separation: +30% (wide, immersive)

---

## Variations

### Variation 1: Reverse Reverb Send
- Pre-process vocal with reverse reverb (print in Edison)
- Send reversed reverb to Fruity Send bus
- Creates "sucking in" effect before vocal phrases

### Variation 2: Pitch-Shifted Reverb
- Add Pitcher on reverb bus (-12 semitones)
- Creates deep, subterranean reverb tail
- **What to listen for:** Reverb should sound underwater

---

## Pitfalls + Fixes

### ❌ PITFALL: "Reverb is too loud/washy"
**FIX:** Reduce reverb bus fader to -12dB, increase low-pass filter cutoff to 3kHz

### ❌ PITFALL: "Reverb doesn't sustain when vocal fades"
**FIX:** Ensure Fruity Send Dry = 100% and send is **pre-fader** (Slot 1, before volume automation)

### ❌ PITFALL: "Reverb sounds too bright/clean"
**FIX:** Aggressive low-pass at 2.5kHz, add more tape saturation (RC-20 Noise → 25%)

---

## Automation Ideas

### Automation 1: Fading Vocal, Persistent Reverb
- Bars 1-4: Vocal at 0dB, reverb at -10dB
- Bars 5-8: Automate vocal fader to -∞, reverb stays at -10dB
- **What to listen for:** Vocal fades, reverb tail lingers (haunting)

### Automation 2: Reverb Bus Swell
- Automate reverb bus fader: -∞ → -6dB → -∞ (8-bar cycle)
- Creates "breathing" ambient presence
- **What to listen for:** Reverb should fade in and out behind vocal

---

## What To Listen For (Quality Checks)

✅ **Reverb sustains when vocal fades** (pre-fader send working)  
✅ **Reverb is dark/muffled** (not bright)  
✅ **Reverb is subtle** (subliminal, not dominant)  
✅ **Overall vibe is haunting** (ghost-like presence)

---

## Mono Compatibility Check
- Collapse to mono → reverb should thin out but remain present
- If reverb disappears, reduce stereo width to +20%

---

## Genre Application: Moody Hip-Hop/R&B

### Use Cases:
- **Verse:** Subtle reverb bus under lead vocal (emotional depth)
- **Outro:** Vocal fades out, reverb tail extends into silence
- **Bridge:** Reverb bus swells up (creates atmospheric moment)

### Example Artists/Tracks:
- The Weeknd – "House of Balloons" (dark, ambient reverb)
- Travis Scott – "90210" (haunting reverb tails)
- Partynextdoor – "Break From Toronto" (moody, pre-fader reverb)

---

**Version:** 1.0  
**Vibe:** Moody  
**Difficulty:** ★★★☆☆ (Intermediate—requires understanding of routing)  
**Verification:** Tested in FL Studio 21.2.3 with vocal track
