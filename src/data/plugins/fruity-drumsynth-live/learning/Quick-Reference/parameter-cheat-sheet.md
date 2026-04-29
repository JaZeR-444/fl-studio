# Fruity DrumSynth Live: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** 128-Voice Physical Modeling & Subtractive Hybrid
**Internal Logic:** Parallel Multi-Program Synthesis Engine
**Target Genres:** Hip-Hop, Trap, Industrial Rap, Moody R&B, Neo-Soul

---

## 1. THE MULTI-PROGRAM GRID (The Kit)
Unlike 99% of other synthesizers, DrumSynth Live is an **Entire Kit** in one instance.

### 1.1 Program Selection (MIDI Notes 0-127)
- **Technical Logic:** Every MIDI note corresponds to an independent patch.
- **The "Global" Link:** While each patch is unique, they all share the **Master Pitch** and **Master Volume** controls.
- **Master Tip:** Use the **Global Transpose** to shift your entire custom drum kit to match the key of your track (e.g., shifting all drum fundamental frequencies by +2 semitones).

---

## 2. THE DUAL OSCILLATOR ENGINE (The Body & Strike)
The engine uses two oscillators designed to mimic the interaction of a drum beater and a drum head.

### 2.1 Osc 1 (The Body Frequency)
- **Range:** 20Hz to 10,000Hz.
- **Physics:** Determines the fundamental pitch. For Kicks, set this to 50-60Hz. For Snares, 150-250Hz.
- **The "Vibe" Scale:** 
    - **Low (<100Hz):** Sub-power.
    - **Mid (200-800Hz):** Wooden/Organic "thud."
    - **High (>1000Hz):** Metallic "ping."

### 2.2 Osc 2 (The Strike / FM Frequency)
- **Technical Logic:** Modulates Osc 1 to create inharmonic "clash."
- **Master Strategy:** Set Osc 2 to a very high frequency (~2000Hz) with a short decay to create the "Snap" of a modern Trap snare.

---

## 3. THE NOISE GENERATOR (The Friction)
Noise is the chaotic element that makes synthesized drums sound "real."

### 3.1 Noise Amount
- **Type:** Internal White Noise source.
- **Internal Routing:** The noise passes through the filter *after* the oscillators.
- **R&B Secret:** Set Noise to 100% and Decay to 5% for a "whispering" hi-hat that sounds incredibly expensive and smooth.

---

## 4. THE ENVELOPE SECTION (The Temporal Shaper)
### 4.1 Decay (The Primary Control)
- **Technical Range:** 0% to 100% (Linear to Logarithmic curve mapping).
- **The Physics of "Boom":** 
    - **0-20%:** Tight "Staccato" hits (IDM, Tech-Rap).
    - **20-50%:** Natural "Studio" decay (Boom Bap, Soul).
    - **50-100%:** "808 Style" sub-decay (Trap, Moody R&B).
- **Master Tip:** For extra "pop," keep your MIDI note length in the Piano Roll very short. DrumSynth Live responds to the *Note On* trigger, but its decay is internal.

---

## 5. THE RESONANT FILTER (The Shell)
The filter defines the "material" of the drum shell.

### 5.1 Cutoff Frequency
- **Role:** Sets the brightness of the noise and oscillator combination.
- **The "Wooden" Rule:** For R&B rimshots, set Cutoff to ~1500Hz to remove "plastic" high-end artifacts.

### 5.2 Resonance (Res)
- **Range:** 0% to 100%.
- **Self-Oscillation Logic:** At values >90%, the filter will "ring" at its cutoff frequency. 
- **Production Hack:** Use high resonance on high-pitched noise to create "Resonant Shakers" that sound like psychedelic aliens (perfect for trippy Hip-Hop).

---

## 6. PERFORMANCE & VELOCITY MAPPING
### 6.1 Internal Velocity Tracking
- **Hard-Wired Logic:** DrumSynth Live maps MIDI Velocity to:
    1. **Volume** (Exponential mapping).
    2. **Filter Cutoff** (Linear mapping).
    3. **Noise Amount** (Linear mapping).
- **The "Human" Secret:** To make your drums sound like a real drummer, vary your velocities by at least 20%. The plugin will automatically make softer hits "darker" and "cleaner," mimicking a real physical impact.

---

## 7. GLOBAL MASTER CONTROLS
### 7.1 Master Pitch
- **Range:** ±12 Semitones.
- **Usage:** Essential for "Tuning your drums to the song." A snare that is slightly out of tune can ruin a professional R&B track.

---

## 8. HIDDEN RIGHT-CLICK MENUS
- **Right-Click Program Name:** Allows you to 'Randomize' the patch. This is an incredible tool for finding unique, psychedelic percussion sounds you never would have designed manually.
- **Right-Click Program Grid:** Allows for 'Copy/Paste' of patches between different MIDI notes.

---

## 9. TROUBLESHOOTING & OPTIMIZATION
- **Audio Clicks:** Usually caused by a Decay that is too short (ending before the waveform hits zero). Increase Decay by 1-2%.
- **CPU Overload:** Only happens if you are triggering 20+ programs simultaneously with long decays. If this occurs, use the **Fruity Limiter** post-FX to control the sum.

---

## 10. SUMMARY: THE "VIBE" PRESETS
- **THE "METRO" KICK:** Osc 1 (55Hz), Osc 2 (800Hz), Noise (2%), Decay (45%), Cutoff (500Hz).
- **THE "NEO-SOUL" RIM:** Osc 1 (600Hz), Osc 2 (1200Hz), Noise (15%), Decay (10%), Cutoff (1500Hz, Res 20%).
- **THE "GLITCH" SHAKER:** Osc 1 (4500Hz), Noise (100%), Decay (5%), Cutoff (8000Hz, Res 95%).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** DrumSynth Live, Percussion Synthesis, Physical Modeling, Drum Design, MIDI Mapping, R&B Production.