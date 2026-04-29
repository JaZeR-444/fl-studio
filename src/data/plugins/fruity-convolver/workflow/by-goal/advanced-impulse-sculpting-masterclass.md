# Masterclass: Advanced Impulse Sculpting and IR Editing in Edison for Fruity Convolver

## 1. Executive Summary: The Sculptor's Hands
Fruity Convolver is only as good as the **Impulse Response (IR)** you feed it. While many producers download generic room samples, elite sound designers (think the atmospheric work of Clams Casino or Lorn) "Sculpt" their own IRs to create unique, non-physical spaces. This guide provides the definitive workflow for editing raw audio inside **Edison** to create the perfect "Moody" or "Psychedelic" IR for Convolver.

---

## 2. Phase 1: Cleaning the DNA (The Initial Edit)

### 2.1 Removing the "Air" (Silence Trimming)
- **The Physics:** An IR must start exactly at the first sample. If there is a 5ms gap of silence, your reverb will have a 5ms delay that ruins the phase of your drums.
- **The Action:** Open your IR in Edison. Select the very beginning. Zoom in to the sample level.
- **The Tool:** Use the **Trim** tool to ensure the waveform starts at zero crossing on sample #1.

### 2.2 Normalization vs. Perception
- **The Logic:** You want your IR to be loud enough to trigger the engine, but not so loud that it clips the convolution math.
- **The Goal:** Normalize the IR to **-3dB** in Edison. This provides enough digital headroom for Convolver’s internal EQ and Stretching algorithms to work without distortion.

---

## 3. Phase 2: Temporal Sculpting (The Envelope)

### 3.1 Linear Phase Fading
Standard volume fades can cause phase shifts in the reverb tail.
- **The Master Strategy:** Use Edison's **Fade Out** tool, but choose the **Logarithmic** curve.
- **The Physics:** Sound in a room decays exponentially. By forcing the IR into a logarithmic fade, you ensure the reverb tail sounds "Natural" and "Smooth" even if the original recording was messy.
- **Moody R&B Tip:** Create a very short, sharp fade-out (under 500ms) to turn a "Church" IR into a "Studio Booth" IR.

### 3.2 High-Frequency Damping
In "Moody" production, the reverb tail must not compete with the vocal's clarity.
- **The Action:** Use Edison’s **EQ (Ctrl+E)** on the IR itself before dragging it into Convolver.
- **The Curve:** Apply a 6dB/octave shelf starting at 4kHz.
- **The Result:** You are "Pre-Damping" the space. The reverb will be warm and dark, which is the cornerstone of the Toronto R&B sound.

---

## 4. Phase 3: Spatial Transformations

### 4.1 The "Sucking" Effect (Reversing)
Psychedelic Hip-Hop often uses "Reverse Reverb."
- **The Action:** In Edison, select the entire IR and hit **Alt+Left Arrow (Reverse)**.
- **The Workflow:** 
    1. Reverse the IR.
    2. Normalize it.
    3. Drag into Convolver.
- **The Result:** Every time your synth plays, the "Reverb" will build up *before* the hit. This is the ultimate "Trippy" transition effect.

### 4.2 Stereo De-correlation
If an IR sounds "Thin" in stereo:
- **The Hack:** Swap the Left and Right channels of the IR in Edison.
- **The Physics:** Sometimes the phase relationship of a recorded room is better when flipped. This can "Open Up" the center of the mix for the lead vocal.

---

## 5. Phase 4: Integration (The Final Drag)

### 5.1 The "Wrench" Menu Secrets
Once the sculpted IR is back in Convolver, use the internal tools to finish the job:
- **Stretch:** Set to **125%** to expand your custom room without changing the pitch.
- **Blur:** Apply 20% blur to your custom vocal IRs (see the Vocal IR masterclass) to smooth out the "human" artifacts into a silky cloud.

---

## 6. Mathematical IR Sculpting Table
Use these Edison edits to achieve specific vibes:

| Vibe Goal | Edit in Edison | Convolver Setting | Result |
|-----------|----------------|-------------------|--------|
| **Intimate** | Cut Tail to 200ms | Stretch 80%       | Small Booth feel. |
| **Dreamy**   | High-Shelf @ 2k | Blur 50%          | Hazy background. |
| **Aggressive**| Add Distortion | High-Pass @ 500Hz | Industrial grit. |
| **Endless**  | Loop middle part| Stretch 400%      | Infinite texture. |

---

## 7. Conclusion: The Master of Environments
Sculpting IRs in Edison for Fruity Convolver moves you from a **"User of Spaces"** to a **"Creator of Realms."** By physically manipulating the digital DNA of a room or sound, you create textures that are technically unique and emotionally powerful. This is the level of detail required for elite Hip-Hop and R&B production. Follow this masterclass, and your "Space" will be as tailored and professional as your melodies.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** IR Sculpting, Edison Workflow, Convolution Reverb, Audio Editing, R&B Space, Sound Design.
