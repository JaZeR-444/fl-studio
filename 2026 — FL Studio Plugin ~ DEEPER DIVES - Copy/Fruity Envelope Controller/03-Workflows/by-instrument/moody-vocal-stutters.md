# Masterclass: Designing Moody Vocal Stutters in Fruity Envelope Controller

## 1. Executive Summary: The "Digital Fragility" Aesthetic
The "Moody Vocal Stutter" is a staple of modern R&B, Experimental Hip-Hop, and Cloud Rap. It turns a human performance into a fragmented, rhythmic texture that feels both fragile and mechanical. This effect is not a simple "Trance Gate"; it requires the **Sample-Accurate precision** and **Signal Smoothing** found only in **Fruity Envelope Controller**. In this guide, we will build a professional, reactive stutter engine from the ground up.

---

## 2. Phase 1: Logic Engine Construction

### 2.1 The Gating Source (LFO vs. ENV)
- **Choice:** For rhythmic stutters, we use the **LFO**.
- **The Waveform:** Select the **Square Wave**.
- **The Sync:** Engage the **BPM Sync** button. Set the speed to **1/8** or **1/16** beat depending on the intensity of the track.
- **The Phase:** Set the LFO Phase to **0 degrees**. This ensures the vocal cuts "out" exactly on the grid.

### 2.2 Routing to the VCA
1. **The Plugin:** Insert **Fruity Balance** at the very end of your Vocal mixer track chain.
2. **The Link:** Right-click the **Volume** knob in Fruity Balance -> **Link to controller**.
3. **The Assignment:** Select **'Envelope Controller (Art 1)'** from the internal controllers list.
4. **The Formula:** Use the default `Input`.

---

## 3. Phase 2: The "Moody" Smoothing (The Secret Sauce)

### 3.1 Eliminating Digital Clicks
A standard square wave LFO will cause sharp "clicks" because the volume jumps from 0 to 100 instantly.
- **The Technical Fix:** In Envelope Controller, go to the **Smoothing** knob.
- **The Value:** Set this to **30ms - 50ms**.
- **The Physics:** This adds a tiny "fade-in" and "fade-out" to every stutter. 
- **The Result:** The vocal no longer "clicks"; it "pulses." This softness is what creates the "Moody" vibe, making the effect feel organic and intentional.

---

## 3.2 The Intensity Curve
- **Base Knob:** Set to **20%**. 
- **The Goal:** You don't want the vocal to go completely silent during the "off" state. Keeping a 20% "ghost" of the vocal preserves the mood and ensures the mix doesn't feel empty.
- **Amount Knob:** Set to **80%**.

---

## 4. Phase 3: Rhythmic Variation (Humanization)

### 4.1 The "Drunken" Stutter
Psychedelic Rap often uses stutters that feel "off-kilter."
- **Action:** Go to the **RND** tab in Articulator 1.
- **Action:** Draw a level line at 10%.
- **Result:** Now, every time a new note is played, the stutter depth or speed will shift slightly, preventing the ear from getting bored by a repetitive loop.

### 4.2 Automation for Tension
- **Goal:** Create a "build-up" during a transition.
- **Workflow:** Right-click the **LFO Speed** in Envelope Controller -> **Create automation clip**.
- **Pattern:** Start at **1/4** beat and accelerate to **1/32** beat over 4 bars.
- **Effect:** The vocal will stutter faster and faster, creating a psychedelic "rise" that perfectly leads into a drop.

---

## 5. Phase 4: Post-Gating Effects (The "Atmosphere" Chain)

### 5.1 The "Ghost Echo" (Fruity Delay 3)
- **Action:** Place a **Fruity Delay 3** *after* the Fruity Balance.
- **Settings:** Wet 30%, Diffusion 80%.
- **The Result:** The stutters will now have "tails." When the vocal cuts out, the last fragment will smear into a lush cloud, filling the silence with a moody atmosphere.

### 5.2 The "Underwater" Filter (Fruity Filter)
- **Action:** Link the **Filter Cutoff** to the SAME Articulator 1.
- **The Result:** Now, as the vocal gets louder (stutters "in"), it also gets brighter. As it fades "out," it gets muffled. This double-modulation is the hallmark of elite professional sound design.

---

## 6. Mathematical Stutter Table for R&B
Use these speeds to match the energy of your track:

| Vibe | LFO Speed | Smoothing | Base Level |
|------|-----------|-----------|------------|
| **Deep Chill** | 1/2 Beat  | 100ms     | 30%        |
| **Standard Vibe**| 1/8 Beat  | 40ms      | 15%        |
| **Aggressive Trap**| 1/16 Beat | 10ms      | 0%         |
| **Psychedelic** | 1/32 Beat | 5ms       | 50%        |

---

## 7. Troubleshooting the Stutter
- **Issue:** "I can still hear clicks."
- **Fix:** Increase **Smoothing** further (up to 80ms) or check if you have a compressor after the stutter that is bringing the quiet clicks back up in volume.
- **Issue:** "The stutter feels out of time."
- **Fix:** Ensure the **'Sync'** light is active in the LFO tab and that your project is set to **'Line'** snapping in the transport.

---

## 8. Conclusion: The Architect of Fragments
Mastering the Fruity Envelope Controller for vocal stutters is about moving beyond "on/off" logic. By utilizing **Smoothing** to control the "softness" of the cut and **Base/Amount** to control the "depth" of the shadow, you create a complex rhythmic instrument from a human voice. This is the essence of modern "Cool" production—using digital precision to enhance human emotion.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Vocal Gating, Rhythmic Stutter, Envelope Controller, R&B Production, Sound Design, FL Studio.