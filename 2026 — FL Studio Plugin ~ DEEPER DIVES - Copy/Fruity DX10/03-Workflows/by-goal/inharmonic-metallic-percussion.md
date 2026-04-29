# Masterclass: Designing Inharmonic Metallic Percussion in Fruity DX10

## 1. Executive Summary: The "Industrial Clang" Aesthetic
In modern high-energy Trap, Phonk, and Industrial Rap (think the work of producers like JPEGMAFIA or $uicideboy$), percussion often sounds like it was recorded in a scrap metal yard. These "trippy" metallic hits (pipes, cowbells, wrenches) are difficult to find in standard sample packs. The secret is **Inharmonic FM Synthesis**. Using the high-octave operators and non-integer ratios of **Fruity DX10**, we can synthesize these complex physical textures from a pure sine wave.

---

## 2. Phase 1: The "Clash" Ratio (Tuning)

### 2.1 The Mathematics of Bronze and Steel
Standard musical instruments follow the **Harmonic Series** (1, 2, 3...). Metal plates and rods do NOT. They follow inharmonic ratios.
1. **The Choice:** Set **Coarse Tuning** to a non-integer value.
2. **The "Square Root" Secret:**
    - **1.414 (Root 2):** Creates a "Brass" clang.
    - **1.732 (Root 3):** Creates a "Silver/Bell" clang.
    - **2.236 (Root 5):** Creates a "Thick Pipe" clang.
3. **The Result:** The sidebands will land "between" the keys, creating that dissonant, industrial energy.

---

## 3. Phase 2: The Harmonic Attack (Modulation)

### 3.1 Designing the "Strike"
Percussion starts with a massive burst of harmonics that decays instantly.
- **Action:** Increase **Modulation** to **80% - 95%**.
- **The Envelope:** Set **Decay** to **10% - 15%**.
- **The Goal:** You want a violent, noisy "Shatter" at the beginning of the note that immediately fades into a clean "Ring."

---

## 4. Phase 3: The "Ring" (Release and Decay)

### 4.1 Temporal Metal Decay
Metal resonates for a long time.
- **Action:** Set the **Internal Release** to **60%**.
- **The Vibe:** Now, when you trigger a 16th-note MIDI note, you get the "Hit," and the high-frequency "Clang" continues to ring in the background. 
- **Psychedelic Mastery:** Link the **Release** knob to your MIDI Velocity. Harder hits = Longer ring. This mimics the physical physics of energy being stored in a metal object.

---

## 5. Phase 4: Spatial Glitching (Stereo Design)

### 5.1 The "Wide Metal" Stack
- **Action:** Follow the DX10 with a **Fruity Chorus**.
- **Settings:** Rate 5.0 Hz (Fast), Depth 10%, Wet 50%.
- **The Result:** The fast vibrato of the chorus makes the metallic ring sound "jittery" and "unstable," adding to the psychedelic effect.

### 5.2 The Resonant Space (Fruity Convolver)
- **Action:** Add a **Concrete Room** or **Spring Reverb** IR.
- **The Physics:** Metal sounds "Cooler" when it has a small, reflective space to bounce off. This makes the synthesized sound feel like it was recorded in a physical industrial environment.

---

## 6. Mathematical "Material" Table for Percussion
Use these settings to change the "Density" of your metal:

| Desired Material | Coarse Ratio | Mod Level | Decay | Res Character |
|------------------|--------------|-----------|-------|---------------|
| **Old Pipe**     | 1.414        | 70%       | 20%   | Hollow, Dark |
| **Crystal Bell** | 4.000        | 45%       | 10%   | Bright, Pure |
| **Industrial Hammer**| 1.732     | 100%      | 5%    | Noisy, Hard |
| **Alien Gong**   | 0.51         | 90%       | 80%   | Swelling, Trippy|

---

## 7. Troubleshooting the Clang
- **Issue:** "It just sounds like white noise."
- **Fix:** Decrease the **Modulation** knob. You have exceeded the "Sideband Density" threshold and mathematically turned the synth into a noise generator.
- **Issue:** "The pitch is too high and hurts my ears."
- **Fix:** Lower the **Internal Cutoff** filter to 5kHz or use a lower octave MIDI note.

---

## 8. Conclusion: The Master of the Forge
Designing metallic percussion in Fruity DX10 is about **harnessing dissonance.** By moving away from "Musical" integer ratios and utilizing the violent, short-decay envelopes of the FM engine, you can build a custom library of industrial textures that give your Hip-Hop tracks an "Experimental" and "Elite" edge. Follow this masterclass, and your percussion will have the legendary, technical grit of a world-class sound designer.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Metallic Percussion, Industrial Rap, FM Synthesis, Inharmonic Ratios, DX10 Workflow, Sound Design.
