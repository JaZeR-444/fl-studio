# Fruity Delay Bank: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** 8-Tap Parallel/Serial Delay & Granular Processor
**Internal Logic:** Cascading Matrix Routing
**Target Genres:** Moody R&B, Psychedelic Rap, Atmospheric Trap, Cinematic Lo-Fi

---

## 1. THE BANK ARCHITECTURE (The Taps)
Fruity Delay Bank contains **8 independent units**, each with its own full set of parameters.

### 1.1 Bank Selector (1-8)
- **Technical Logic:** Clicking a number displays the settings for that specific tap.
- **The Enable LED:** Clicking the green light next to the number turns the tap ON or OFF. 
- **Efficiency Hack:** Always disable unused banks. Each enabled bank consumes a portion of the delay buffer in RAM.

### 1.2 The "Next" Knob (Serial Routing)
- **Technical Feature:** Sends the output of the current bank into the input of the next.
- **The "Tunnel" Physics:** If Bank 1 is routed to Bank 2, Bank 2 processes the echoes created by Bank 1. 
- **Psychedelic Secret:** Route Bank 1 (High Feedback) into Bank 2 (Granular Blur) to create an evolving "Feedback Tunnel" that transforms over time.

---

## 2. THE TIME MODULE (Rhythm & Phase)
Each bank has its own clock.

### 2.1 Time Knob (The Main Tap)
- **Tempo Sync:** When 'Sync' is enabled, the knob snaps to musical steps (4 = 1/4 note).
- **The Offset Logic:** Move the **Time Offset** slider slightly (±5ms) to create "human" rhythmic imperfections that make a R&B groove feel more organic.

---

## 3. THE GRANULAR MODULE (The Shimmer)
This is the "secret weapon" of Fruity Delay Bank.

### 3.1 Grain Knob
- **Mechanism:** Slices the delay repeats into tiny windows (grains) and applies a cross-faded volume envelope to each.
- **The Sound:** 
    - **0%:** Sharp, clinical digital echoes.
    - **50%:** "Soft" echoes with blurred edges.
    - **100%:** A smooth, reverb-like cloud of sound.
- **Use Case:** Set Grain to 80% on a wide stereo tap to create an "expensive" airy background for an R&B vocal.

---

## 4. THE FILTER SECTION (Tonal Sculpting)
### 4.1 Filter Type (LP / HP / BP / BS)
- **Low-Pass (LP):** Standard "Dark" echoes. Essential for moody R&B.
- **High-Pass (HP):** "Ghost" echoes. Removes the mud, leaving only the "air."
- **Band-Pass (BP):** "Radio" echoes. Focuses the sound on a specific frequency range.
- **Band-Stop (BS):** "Phased" echoes. Creates a hollow, psychedelic texture.

### 4.2 Cutoff & Resonance
- **Physics:** Defines the center frequency and the "whistle" of the filter.
- **Master Rule:** For "Moody" tracks, set your LP Cutoff around **1500Hz** to push the delay deep into the background.

---

## 5. THE ADSR ENVELOPE (Temporal Dynamics)
Each bank has a dedicated ADSR envelope triggered by the incoming audio.

### 5.1 Attack (The Bloom)
- **Range:** 0ms to 5000ms.
- **The Vibe:** Use a long Attack (1000ms) to create "Swells." The echo will slowly fade in after the sound is played, creating a ghostly, atmospheric presence.

### 5.2 Decay & Sustain (The Choke)
- **Production Tip:** For "Upbeat" tracks, set Sustain to 0% and Decay to a short value. This turns long delay repeats into tight, percussive "Ghost Notes" that add rhythm without mud.

---

## 6. THE MODULATION SECTION (Movement)
### 6.1 LFO Rate & Amount
- **Targets:** Internally hard-wired to modulate the **Filter Cutoff** or the **Delay Time**.
- **The "Vibrato" Hack:** Set LFO to modulate Time at a slow rate (0.2Hz). This creates the "Drunken" pitch drift essential for psychedelic Rap.

---

## 7. MIX & SPATIAL CONTROL
### 7.1 Panner
- **Role:** Sets the stereo position of the tap.
- **The "Wide" Strategy:** Pan Bank 1 to 100% Left and Bank 2 to 100% Right with slightly different Time settings for a massive stereo field.

---

## 8. HIDDEN RIGHT-CLICK OPTIONS
- **Right-Click Bank Number:** 'Copy' and 'Paste' entire bank settings.
- **Right-Click Cutoff:** 'Link to Controller.' You can link the filter of ALL 8 banks to a single automation clip for a "Global Filter Sweep."

---

## 9. TROUBLESHOOTING & OPTIMIZATION
- **Feedback Oscillation:** If the sound won't stop, check if one of your banks has **FB** set to 100%+. Lower the **Gain** of that bank immediately.
- **Audio Mud:** If the mix is messy, apply a **High-Pass Filter** to all banks at **400Hz**. This ensures the delay doesn't interfere with the 808.

---

## 10. SUMMARY: THE "VIBE" PRESETS
- **THE "CLOUDS" (Moody):** 4 Banks, LP Filters, 80% Grain, 1000ms Attack, Wide Panning.
- **THE "GLITCH" (Psychedelic):** 2 Banks Serial (1->2), HP Filter, 0% Grain, Short Decay, High Resonance.
- **THE "BOUNCE" (Upbeat):** 1 Bank, Sync ON (1/8 note), BP Filter, 0% Sustain, Short Decay.

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Delay Bank, Multi-Tap Routing, Granular Synthesis, ADSR Envelopes, Hip-Hop Atmosphere, DSP Engineering.