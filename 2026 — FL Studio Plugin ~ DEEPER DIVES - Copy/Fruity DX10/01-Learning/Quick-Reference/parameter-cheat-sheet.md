# Fruity DX10: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** 4-Operator FM (Frequency Modulation) Engine
**Internal Logic:** Stacked Serial/Parallel Hybrid Algorithm
**Target Genres:** R&B, Neo-Soul, Melodic Rap, Trap, G-Funk

---

## 1. THE FM MODULATION ENGINE (The Core)
FM synthesis is the heart of DX10. Unlike standard "Volume" knobs, the controls here determine the **Harmonic Complexity** of the sound.

### 1.1 Modulation (Mod) Knob
- **Technical Range:** 0% to 100%.
- **Internal Math:** Controls the "Amplitude" of the modulator operators. Higher values increase the frequency deviation of the carrier.
- **The "Vibe" Scale:**
    - **0-20%:** Pure Sine/Triangle tones. Best for smooth sub-bass or clean R&B leads.
    - **20-60%:** "Buzzy" or "Metallic" tones. This is the sweet spot for Rhodes pianos and glassy keys.
    - **60-100%:** Aggressive "Digital Noise." Use this for industrial snares or distorted psychedelic leads.
- **Master Tip:** Link this to your MIDI Keyboard's **Mod Wheel (CC#1)** for real-time expressive control during a performance.

---

## 2. THE OSCILLATOR STACK (Operators)
DX10 features a simplified but powerful operator stack. Understanding the difference between Coarse and Fine tuning is the key to "Digital Soul."

### 2.1 Waveform Selector
- **Sine:** The purest starting point. Essential for classic 80s/90s FM sounds.
- **Triangle:** Adds a tiny bit of "grit" to the fundamental. Good for warm pads.
- **Square/Saw:** These waveforms are already harmonically rich. Modulating them creates extremely complex, often "dirty" textures suitable for gritty underground Rap.

### 2.2 Coarse Tuning (Harmonic Multipliers)
- **Technical Logic:** This knob moves in discrete harmonic steps (integers and halves).
- **The 0.5 Secret:** Setting Coarse to 0.5 makes the modulator an octave BELOW the carrier. This creates a "massive" foundation, perfect for heavy Trap basslines.
- **The 2.0/4.0 Rule:** These ratios create perfect octaves. Use these for glassy, melodic keys.
- **The "Fifth" (3.0):** Creates a fifth interval in the harmonic series. This adds a "hollow" or "ancient" quality, perfect for flute-like melodic leads.

### 2.3 Fine Tuning (The "Beating" Effect)
- **Technical Range:** -50 to +50 cents.
- **Physics:** When you detune an FM modulator slightly, you create "Beating." The harmonics shift out of phase with the fundamental.
- **Master Strategy:** For a psychedelic "melting" lead, set Fine tune to +5 cents and add a slow LFO.

---

## 3. THE ENVELOPE MODULE (The Dynamics)
FM synthesis relies heavily on envelopes. In DX10, the envelope doesn't just control volume; it controls **Harmonic Content**.

### 3.1 Decay (The Primary Shaper)
- **Range:** 10ms to 10,000ms.
- **The "Pluck" Logic:** FM sounds are most effective when they are "plucky." A short decay (20-30%) on a high-modulation index creates the classic "tine" strike of an electric piano.
- **Moody Rule:** Use a very long decay (80%+) with low modulation for "breathing" R&B pads.

### 3.2 Release
- **Physics:** Determines how long the "ring" of the FM sidebands lasts after the key is released.
- **Master Tip:** FM bells require a long release (~70%) to sound natural. FM bass requires a very short release (<10%) to keep the low-end from muddying up the 808.

---

## 4. MODULATION LFO (The Movement Engine)
### 4.1 LFO Rate & Amount
- **LFO Target:** This LFO is internally hard-wired to modulate either the **Pitch** (Vibrato) or the **Modulation Index** (Tremolo/Harmonic movement).
- **Psychedelic Vibe:** Set the Rate to a very slow speed (0.1 - 0.3 Hz) and the Amount to 20%. This makes the "Digital Sparkle" of the synth slowly fade in and out, creating a dreamy atmosphere.

---

## 5. PERFORMANCE & EXPRESSION
### 5.1 Velocity Sensitivity (Vel Sens)
- **The "Soul" Knob:** This is perhaps the most important knob for R&B.
- **Internal Logic:** It maps MIDI velocity to the **Modulation Index**. 
- **The Performance Hack:** Set this to 100%. Now, your MIDI performance determines the brightness of the sound. This allows you to play "soft" during verses and "aggressive" during choruses without ever touching a knob.

---

## 6. INTERNAL FILTER (The Smoothing Stage)
### 6.1 Filter Cutoff
- **Type:** 12dB/oct Low-Pass Filter.
- **Role:** Because FM can create very harsh high-end frequencies, this filter acts as a "tamer."
- **Master Rule:** Always set the filter to ~8kHz for R&B keys to keep them "warm" and "creamy."

---

## 7. HIDDEN MENUS & GLOBAL OPTIONS
### 7.1 Polyphony (Voices)
- **Technical Feature:** Right-click the 'Voices' indicator in the plugin wrapper.
- **Usage:** Set to **1 Voice (Monophonic)** for G-Funk leads or heavy bass. This allows for "Gliding" (Portamento) between notes. Set to **16+ Voices** for complex Neo-Soul jazz chords.

---

## 8. TROUBLESHOOTING & OPTIMIZATION
- **Aliasing Noise:** If the synth sounds "distorted" in a bad way, lower your Master Volume inside the plugin or use a post-FX EQ to cut above 15kHz.
- **Clicks on Attack:** Increase the Decay slightly or check if the 'Attack' value in your MIDI controller is sending a value of 0.

---

## 9. SUMMARY: THE "VIBE" PRESETS
- **THE "DRE" BASS:** Waveform Sine, Coarse 0.5, Mod 15%, Decay 40%, Mono Mode.
- **THE "MAJID JORDAN" KEY:** Waveform Sine, Coarse 4.0, Mod 50%, Vel Sens 100%, Decay 25%, 12-Voice Polyphony.
- **THE "6LACK" PAD:** Waveform Triangle, Coarse 1.0, Mod 10%, LFO Rate 0.2Hz, LFO Amt 30%, Decay 100%.

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** DX10, FM Synthesis, R&B Sound Design, Operator Math, Velocity Mapping, Neo-Soul Keys.