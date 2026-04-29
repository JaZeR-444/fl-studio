# Masterclass: The Psychedelic Dub Riser in Fruity Delay 3

## 1. Executive Summary: The "Vortex" Transition
In modern psychedelic Trap and Industrial Rap (think Mike Dean’s work with Travis Scott or Kanye West), transitions are not just white noise sweeps. They are "Vortexes"—feedback loops that spiral in pitch and frequency, creating a sense of being sucked into the next section. Fruity Delay 3’s **Analog Resampling Engine** is the ultimate tool for this. This guide covers the precise automation curves and feedback management required to create a professional-grade Dub Riser.

---

## 2. Phase 1: The Engine Configuration

### 2.1 The "Living" Feedback Loop
To create a riser, the feedback must be self-sustaining.
1. **The Plugin:** Insert **Fruity Delay 3** on a dedicated FX Send.
2. **Feedback Level:** Set to **98% - 105%**.
    - *Warning:* At 105%, the sound will never stop. You must be prepared to automate the **Wet Level** to kill the sound at the end of the riser.
3. **Model:** Crucial—Set to **Analog**.
    - *The Physics:* In Analog mode, changing the delay time changes the playback speed of the buffer. This is what creates the "Pitch Glide."

### 2.2 The Harmonic Filter (The Whistle)
- **Cutoff:** Set to **2000Hz**.
- **Resonance:** Crank to **80%**.
- **The Result:** The feedback will "ring" at this frequency. As the pitch rises, this resonant peak creates a "whistling" laser sound that defines the psychedelic aesthetic.

---

## 3. Phase 2: Automation Orchestration (The "Vortex" Curve)

To achieve the "Spiral" effect, you must automate three parameters simultaneously.

### 3.1 The Pitch Spiral (Time Automation)
- **Action:** Right-click **Time** -> **Create automation clip**.
- **The Curve:** Start at **1/4 note** (Bar 1) and curve down to **1/64 note** (End of Bar 4).
- **The Result:** Because we are in Analog mode, the pitch will smoothly rise 2-3 octaves as the buffer gets smaller and smaller.

### 3.2 The Filter Opening (Cutoff Automation)
- **Action:** Automate the **LP Cutoff** from **500Hz** to **15kHz**.
- **The Goal:** As the pitch rises, the filter "opens up," revealing the high-frequency grit and aliasing of the feedback loop. This increases the perceived "Energy" of the riser.

### 3.3 The Grit Build-up (Bitcrush/Sample Rate)
- **Action:** Automate the **Sample Rate Redux** from **44.1kHz** down to **8kHz**.
- **The Vibe:** As the riser reaches its peak, it becomes "lo-fi" and "sandy." This adds a layer of "Digital Stress" that makes the drop feel much "cleaner" and "heavier" by contrast.

---

## 4. Phase 3: Spatial Deconstruction (The Texture)

### 4.1 The "Smear" Strategy
- **Action:** Set **Diffusion** to **40%** and **Smear** to **50%**.
- **The Physics:** This blurs the individual "echoes" into a continuous stream of sound. Without this, the riser sounds like a series of fast clicks. With it, it sounds like a rushing wind or a jet engine.

### 4.2 Stereo Chaos
- **Action:** Automate the **Vibrato Depth** from 0% to 50% during the final bar.
- **The Effect:** The riser will start to "wobble" violently in the stereo field, making the listener feel dizzy right before the beat drops.

---

## 5. Phase 4: Mixing and Safety

### 5.1 The "Kill" Switch
- **The Problem:** Feedback above 100% will destroy your ears and speakers if left unchecked.
- **The Solution:** Always automate the **Mix (Wet)** knob to drop to 0% exactly at the start of the next section.
- **The "Fade Out":** For a "Cool" R&B transition, don't cut it instantly. Use a slow 1-bar fade out with a **Fruity Convolver** (Large Hall) active to let the riser "echo" into the distance.

---

## 6. Mathematical Riser Table (Automation Snapshots)

| Riser Stage | Time Setting | Filter Cutoff | Vibrato Depth | Bitcrush Level |
|-------------|--------------|---------------|---------------|----------------|
| **Start (Bar 1)** | 4:00 (1/4) | 500 Hz        | 0%            | 44.1 kHz       |
| **Mid (Bar 2)**   | 2:00 (1/8) | 1500 Hz       | 10%           | 32 kHz         |
| **Tension (Bar 3)**| 1:00 (1/16)| 4000 Hz       | 25%           | 15 kHz         |
| **Peak (Bar 4)**  | 0:25 (1/64)| 15000 Hz      | 50%           | 8 kHz          |

---

## 7. Conclusion: The Master of Tension
The Psychedelic Dub Riser is the ultimate demonstration of Fruity Delay 3's power. It isn't just an effect; it's a **Synthesis Engine** that uses captured audio as its oscillator. By mastering the triplet of **Time, Feedback, and Diffusion**, you can create custom transitions that carry the "DNA" of your track's melodies into the next section. Follow this workflow, and your drops will have the professional, high-energy impact of a stadium-ready Trap production.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Transition FX, Dub Riser, Mike Dean Vibe, Feedback Loops, Analog Resampling, Trap Production.
