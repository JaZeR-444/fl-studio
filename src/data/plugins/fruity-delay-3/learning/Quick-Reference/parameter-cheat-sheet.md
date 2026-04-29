# Fruity Delay 3: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** Multi-Model Hybrid Delay Processor
**Engine Version:** v3.x (Legacy Compatible)
**Target Genres:** Hip-Hop, Rap, R&B, Psychedelic, Lo-Fi, Cinematic

---

## 1. THE TIME MODULE (Temporal Engine)
The Time module is the brain of the plugin. It determines the rhythmic spacing and physical length of the delay buffer.

### 1.1 Time Knob (The Main Clock)
- **Technical Range:** 0ms to 4000ms (4 Seconds).
- **Tempo Sync Logic:** When the 'Tempo Sync' button is engaged, the knob snaps to musical intervals (1/16, 1/8, 1/4, etc.).
- **Master Tip:** In 'Analog Mode', automating this knob creates the "Screaming Acid" pitch-shift effect. For smooth sweeps, use a **Bezier curve** in your automation clip.
- **Hidden Feature:** Right-click the knob and select 'Set' to input specific millisecond values for "Off-Grid" grooves.

### 1.2 Model Selector (Digital vs. Analog)
- **Digital Mode:** Uses a standard pointer-jump logic. Perfect for clean, rhythmic echoes where you don't want pitch fluctuations.
- **Analog Mode:** Uses a resampling engine. This emulates the physical physics of tape. If you change the time while sound is playing, you get a smooth pitch glide. This is the **CORE** of psychedelic sound design.

### 1.3 Offset (Stereo Time Difference)
- **Range:** -100% to +100%.
- **Physics:** It delays the Left or Right channel relative to the other.
- **The "Ping-Pong" Rule:** To create a classic ping-pong effect, set the Offset to 100% and ensure your feedback is set to 'Stereo' or 'Ping-Pong' mode.
- **Psychoacoustic Use:** Set to a tiny value (5-15ms) to widen a mono vocal using the Haas Effect.

---

## 2. THE FEEDBACK MODULE (Recirculation Path)
Feedback determines how many times the sound repeats and how those repeats evolve over time.

### 2.1 Feedback Level (The Regen Knob)
- **Range:** 0% to 125%.
- **The Danger Zone:** Anything above 100% will cause "Self-Oscillation." In Digital mode, this will clip and become a harsh wall of noise. In Analog mode, it will "howl" like a vintage amp.
- **Moody Tip:** For R&B ballads, keep this at exactly 40-50% for 3-4 clearly audible repeats.

### 2.2 Saturation (The Warmth Engine)
- **Type:** Soft-clipping diode emulation.
- **Internal Math:** It applies a non-linear transfer function to the feedback loop. 
- **Production Impact:** As repeats continue, they get "fuzzier" and "fatter." This is essential for Lo-Fi Hip-Hop to give the echoes a "sampled" texture.

### 2.3 Sample Rate & Bit Depth (The Grit Section)
- **Sample Rate Redux:** Lowers the playback frequency of the feedback loop. Setting this to 12kHz creates a dark, "MPC-60" style crunch.
- **Bit Depth:** Reduces the vertical resolution of the waveform. Dropping to 8-bit or 12-bit adds "digital hiss" and quantization noise, perfect for gritty industrial Rap.

---

## 3. THE FILTER MODULE (Feedback Shaping)
Filters are used to place the delay in the "3D space" of the mix.

### 3.1 High-Pass (HP) Filter
- **Range:** 10Hz to 20kHz.
- **The "Clean Mix" Rule:** In Hip-Hop, always set the HP to at least 300Hz. This ensures your kick drum and 808 don't trigger the delay, which would create a muddy mess.

### 3.2 Low-Pass (LP) Filter
- **Range:** 10Hz to 20kHz.
- **The "Distance" Rule:** High frequencies travel less efficiently through air. Lowering the LP to 3kHz makes the delay sound like it's coming from far away. This is the secret to "Moody" atmosphere.

### 3.3 Resonance (The Whistle)
- **Behavior:** Boosts the volume at the cutoff frequency. 
- **Psychedelic Tip:** Turn Resonance up to 80% and automate the Cutoff. This creates "Dub-style" filter sweeps that ring out rhythmically.

---

## 4. THE MODULATION MODULE (The Trippy Engine)
This section adds movement and life to the static echoes.

### 4.1 Vibrato Rate & Depth
- **LFO Shape:** Sine wave.
- **Physics:** It modulates the Delay Time internally.
- **The "Mike Dean" Setup:** Rate at 0.5Hz, Depth at 25%, Analog Mode. This creates the "Melting Lead" sound found on Travis Scott's *Astroworld*.

---

## 5. THE DIFFUSION MODULE (The Texture Engine)
This turns distinct echoes into a smooth cloud of sound.

### 5.1 Diffusion Amount
- **Mechanism:** A series of nested all-pass filters that smear the transient of each repeat.
- **Use Case:** Set to 100% to turn a simple snare hit into a lush ambient reverb tail.

### 5.2 Smear
- **Mechanism:** Spectral smoothing.
- **Use Case:** Removes the "grainy" artifacts from high diffusion settings. Essential for "Dreamy" R&B background textures.

---

## 6. THE DUCKER MODULE (The Clarity Engine)
The Ducker is what makes Fruity Delay 3 a "Pro-Grade" tool for vocals.

### 6.1 Threshold & Release
- **Threshold:** Sets the level at which the delay volume is reduced.
- **Release:** How fast the delay "blooms" back up after the dry sound stops.
- **The "Pro Vocal" Secret:** Set Threshold so the delay is nearly silent while the rapper is speaking. Set Release to 400ms so the delay fills the silence between bars. This keeps the vocal "dry and present" but the track "big and lush."

---

## 7. MASTER MIX SECTION
### 7.1 Dry / Wet / Panning
- **Dry:** Level of the original signal. Keep at 100% for track inserts.
- **Wet:** Level of the delay repeats.
- **Master Tip:** For "Upbeat" tracks, pan the Wet signal slightly to the opposite side of the Dry signal to create an immediate sense of stereo balance.

---

## 8. HIDDEN RIGHT-CLICK MENUS & SHORTCUTS
### 8.1 The "Expert" Options
- **Right-Click Feedback Mode:** Toggle between 'Normal', 'Inverted' (creates phase-cancellation effects), and 'Ping-Pong'.
- **Right-Click Time Mode:** Switch between 'Samples', 'Milliseconds', and 'BPM' units.
- **Copy/Paste Values:** You can right-click any knob to copy its exact mathematical value and paste it into another instance of the plugin for perfect alignment.

---

## 9. TROUBLESHOOTING & OPTIMIZATION
- **CPU Spikes:** High Diffusion and High Feedback combined can cause CPU spikes. If this happens, lower the 'Diffusion Smear'.
- **Audio Clicks:** If you hear clicking, increase the **VCA Smooth** (hidden in wrapper) or add 2ms of **Attack** to the internal ducker envelope.
- **Phase Issues:** If the delay sounds "thin" when summed to mono, check the **Offset** knob. Values around 1-5ms are the most dangerous for phase cancellation.

---

## 10. SUMMARY: THE "VIBE" CHEAT SHEET
- **MOODY:** Low LP Filter (2kHz), High Diffusion (80%), Ducker Depth (70%).
- **UPBEAT:** Tempo-Synced 1/8 note, Low Feedback (20%), High Saturation (40%).
- **PSYCHEDELIC:** Analog Mode, Vibrato Depth (30%), Feedback (95% - watch out for oscillation!).
- **COOL/LO-FI:** Sample Rate (10kHz), Bit Depth (12-bit), HP Filter (500Hz).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** FL Studio, Fruity Delay 3, DSP Engineering, Audio Mastery, Hip-Hop Sound Design.