# Fruity Convolver: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** FFT-Based Convolution Processor
**Engine Version:** Zero-Latency FIR Logic
**Target Genres:** Moody R&B, Atmospheric Rap, Cinematic Hip-Hop, Psychedelic Soul

---

## 1. THE MIX & TIMING MODULE
This section determines how the dry signal interacts with the captured acoustic space.

### 1.1 Dry / Wet Knobs
- **Technical Logic:** Linear gain controllers for the original and processed paths.
- **Master Strategy:** 
    - **Insert Use:** Set Dry to 100%, Wet to 10-25%.
    - **Send Use:** Set Dry to 0%, Wet to 100%. This is the professional standard for R&B, as it allows you to EQ the reverb separately from the vocal.

### 1.2 Input Delay (Predelay)
- **Technical Range:** 0ms to 500ms.
- **Physics:** Delays the signal BEFORE it triggers the reverb engine.
- **The "Intimacy" Rule:** Setting this to **20-40ms** creates a psychological gap between the singer and the room. This makes the vocal sound "closer" and clearer while still having a massive "moody" tail.

---

## 2. THE IR SCULPTING ENGINE (The Shape)
Unlike algorithmic reverbs, Convolver allows you to physically manipulate the recorded waveform.

### 2.1 Stretch Knob
- **Technical Logic:** Time-stretching the IR without affecting the pitch.
- **The Physics of Size:** 
    - **<100%:** Shrinks the room. Makes the reverb "tighter" and "snappier." Perfect for Boom Bap drums.
    - **>100%:** Expands the room. Makes the tail longer and more "ethereal." Ideal for psychedelic "Cloud Rap."

### 2.2 Reverse Button
- **Action:** Flips the IR waveform in the time domain.
- **Result:** Creates a "Swell" effect where the reverb builds up TO the sound rather than fading away FROM it.
- **Master Tip:** Use this on a single snare hit at the end of a 4-bar loop for a cool, rhythmic transition.

### 2.3 Normalize Button
- **Logic:** Maximizes the volume of the IR to 0dB.
- **Why it matters:** Many free IRs downloaded from the internet are very quiet. Normalizing ensures you have a consistent "Wet" level across different IRs.

---

## 3. THE SPECTRAL TOOLS (The Texture)
### 3.1 Blur Tool (Wrench Menu)
- **The Math:** Convolves the IR with a burst of white noise.
- **Effect:** Turns any distinct echoes (Early Reflections) into a smooth, smeared "cloud."
- **R&B Use Case:** Blur a "Hall" IR to create a silky, expensive-sounding background for Neo-Soul pads.

### 3.2 Impulse Trigger
- **Technical Feature:** Click the 'Lightning' icon to send a sample-accurate impulse through the engine.
- **Usage:** This allows you to "audition" the reverb sound without playing any audio from your track.

---

## 4. THE INTEGRATED EQ (The Tone)
### 4.1 Frequency Curve Editor
- **Type:** Linear Phase FIR EQ.
- **The "Moody" Filter:** Draw a steep curve that cuts everything above **5kHz**. This is the secret to "Dark" reverb that doesn't clash with the hi-hats.
- **The "Clean Sub" Filter:** Cut everything below **300Hz** inside the plugin. This prevents the reverb from making your 808 sound muddy and "flabby."

---

## 5. PERFORMANCE & OPTIMIZATION
### 5.1 LL (Low Latency) Switch
- **Crucial Warning:** If LL is OFF, the plugin adds latency to your track equal to the IR length (up to 2048 samples).
- **Master Strategy:** Keep LL **ON** during the production and recording phase. You can turn it **OFF** during the final mixing/mastering phase for slightly higher audio fidelity if your CPU allows.

### 5.2 Self-Mono Switch
- **Action:** Forces the IR to sum to Mono.
- **Use Case:** If a reverb tail is too "distracting" or wide, Mono-ing it can help focus the listener's attention back to the center-panned vocal.

---

## 6. HIDDEN MENUS & ADVANCED ROUTING
- **Right-Click Waveform:** Allows you to 'Edit in Edison.' You can then use Edison's advanced processing (Fading, Cropping, Noise Removal) and drag the result back into Convolver.
- **Impulse Copy/Paste:** You can copy the impulse data from one instance of Convolver to another to ensure perfect "Room Matching" across multiple tracks.

---

## 7. TROUBLESHOOTING
- **Issue:** "My CPU is hitting 100%."
- **Fix:** You are likely using an IR that is too long (e.g., 30 seconds). Crop the tail in Edison or reduce the **Stretch** value.
- **Issue:** "The reverb sounds 'phased' or hollow."
- **Fix:** Check if you have the same IR on two parallel tracks. This causes phase cancellation. Ensure **Self-Mono** is consistent across instances.

---

## 8. SUMMARY: THE "VIBE" PRESETS
- **THE "DILATED" ROOM:** Stretch 50%, HP 400Hz, LP 6kHz, Mix 15%. (Vibe: Intimate R&B).
- **THE "NEPTUNES" DRUM ROOM:** Small Room IR, Normalize ON, Wet 10%, Stretch 80%. (Vibe: Dry but punchy 2000s Hip-Hop).
- **THE "GHOST" VOCAL:** Blur ON, Reverse ON, Stretch 200%, Wet 100%. (Vibe: Psychedelic transitions).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Fruity Convolver, Impulse Response, FFT Engine, Reverb Sculpting, R&B Mixing, DSP Logic.