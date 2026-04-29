# Fruity Envelope Controller: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** 8-Articulator Control Voltage (CV) Emulation Engine
**Internal Logic:** Sample-Accurate Signal Summing
**Target Genres:** All (Foundational Utility for R&B, Rap, Trap, and Psychedelic Hip-Hop)

---

## 1. THE ARTICULATOR ARCHITECTURE (The Outputs)
Fruity Envelope Controller features **8 independent Articulators**. Each articulator functions as a unique "Control Source" that can be linked to any knob in FL Studio.

### 1.1 The Articulator Selector (1-8)
- **Technical Logic:** Clicking a number changes the view to that specific articulator's settings.
- **The "Central Nervous System" Tip:** In complex projects, dedicate specific articulators to specific roles (e.g., Articulator 1 for Volume Gating, Articulator 2 for Filter Cutoff, Articulator 3 for Pitch Drift).

---

## 2. THE MODULATION SOURCES (The Inputs)
Each articulator is composed of five distinct sources that are summed together.

### 2.1 Envelope (ENV) Tab
- **Type:** Multi-point ADSR Envelope.
- **Master Features:**
    - **Sustain Point:** Right-click a node to set it as the sustain point.
    - **Loop Points:** Define a segment of the envelope to repeat while the key is held.
- **R&B Secret:** For "Breathing" synth pads, use a very slow Attack (2000ms) and a long Release (1500ms).

### 2.2 LFO Tab
- **Type:** Tempo-synced Low Frequency Oscillator.
- **Waveforms:** Sine, Triangle, Square, Saw, Random.
- **The "Phase" Knob:** Determines where the LFO starts in its cycle. Setting this to 0 ensures your rhythmic pulses hit exactly on the beat.
- **The "Sync" Switch:** Forces the LFO to match the project's global transport.

### 2.3 Keyboard (KBD) Tab
- **Role:** Maps MIDI Note Pitch to the Output Value.
- **Physics:** Allows for "Keyboard Tracking." 
- **Production Tip:** Draw a rising curve so that high-pitched notes on your synth automatically have a brighter filter cutoff.

### 2.4 Velocity (VEL) Tab
- **Role:** Maps MIDI Velocity (strike strength) to the Output Value.
- **Soul Logic:** Essential for expressive R&B. Use this to link how hard you play a chord to the "Drive" or "Depth" of a distortion plugin.

### 2.5 Random (RND) Tab
- **Role:** Generates a unique, static value for every new MIDI note triggered.
- **Psychedelic Hack:** Link this to your synth's **Fine Pitch** with a very small range. Now, every single note you play will have a slightly different tuning, mimicking the instability of a physical analog circuit.

---

## 3. THE MAPPING CONTROLS (The Logic)
This is where you determine how the sources are processed before they leave the articulator.

### 3.1 Base Knob
- **Range:** 0% to 100%.
- **Technical Logic:** This is the "DC Offset" of the control signal. 
- **Use Case:** If you are modulating a Filter Cutoff, the Base knob sets the "Minimum" frequency the filter will never drop below.

### 3.2 Amount Knob
- **Range:** -100% to +100%.
- **Polarity:** Negative values will **Invert** the modulation. 
- **The "Ducking" Secret:** Set Amount to -100% to create a sidechain-ducking effect where the volume drops whenever the envelope is triggered.

### 3.3 Smoothing Knob (The Inertia)
- **Technical Range:** 0ms to 10,000ms.
- **Physics:** Limits the "Slew Rate" of the signal. 
- **Master Rule:** 
    - **0-10ms:** Sharp, percussive energy.
    - **20-100ms:** Smooth, organic movement.
    - **500ms+:** Drifting, psychedelic textures.

---

## 4. PERFORMANCE & VISUALIZATION
### 4.1 The Visualizer Display
- **Feedback:** The red dot shows the real-time output of the articulator. 
- **Troubleshooting:** if the dot is stuck at 100%, check if your **Base** knob is too high or if your **LFO** is in additive mode.

---

## 5. INTERNAL CONTROLLER ROUTING (The "Link")
### 5.1 How to "Patch" the Signal
1. Go to the knob you want to control (e.g., Fruity Filter Cutoff).
2. Right-click -> **Link to controller**.
3. In the 'Internal controllers' dropdown, find **'Envelope Controller (Art 1)'**.
4. Click **Accept**.

---

## 6. HIDDEN MENUS & EXPERT FEATURES
- **Right-Click Articulator Number:** Allows you to 'Copy' and 'Paste' entire articulator settings between slots.
- **Envelope Copy/Paste:** You can copy an envelope shape from Fruity Sytrus and paste it directly into Envelope Controller.

---

## 7. TROUBLESHOOTING & OPTIMIZATION
- **CPU Spikes:** Envelope Controller itself uses almost zero CPU. However, if you are modulating a very CPU-heavy plugin (like a high-quality Reverb) at a high rate, the *target* plugin might cause spikes. Increase **Smoothing** to ease the load.
- **Modulation Lag:** Ensure 'Sync' is enabled in the LFO tab if you want it to stay perfectly aligned with your drums.

---

## 8. SUMMARY: THE "VIBE" TEMPLATES
- **THE "TRAP BOUNCE":** LFO Sine, 1/4 Beat Sync, Base 100%, Amount -50%, Smoothing 15ms. (Link to Volume).
- **THE "PSYCHEDELIC DRIFT":** RND Level 50%, Base 48%, Amount 4%, Smoothing 200ms. (Link to Fine Pitch).
- **THE "MOODY BREATH":** ENV Long Attack (2 bars), Base 20%, Amount 60%, Smoothing 100ms. (Link to Reverb Mix).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Envelope Controller, Modulation Logic, CV Emulation, FL Studio Internal Controllers, Signal Routing.