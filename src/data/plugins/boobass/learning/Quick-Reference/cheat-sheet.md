# BooBass: The Physical Model

> **Scope:** Physical Modeling (Bass Guitar), Hybrid EQ.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Very Low.

## 🧠 The "Realism" Concept
BooBass is not a sampler. It uses **Physical Modeling** (likely Digital Waveguide Synthesis) to simulate the vibration of a string.
*   **Why it Matters:** A sample always sounds the same. A physical model reacts to Velocity by changing *timbre*, not just volume. Harder hits sound "Brighter" and "Twangier", exactly like a real bass guitar.
*   **Monophonic:** It can only play one note at a time, mimicking a bassist playing a single string.

**Signal Flow:**
`Velocity/Note` -> **[STRING EXCITATION MODEL]** -> **[BODY RESONANCE]** -> **[3-BAND EQ]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Controls (The EQ)

The interface only has 3 knobs, but they are dramatically powerful because they reshape the *Model*, not just the audio.

| Control | Function & Nuance |
| :--- | :--- |
| **Bass** | **Body Resonance.** <br> Controls the "Thump" or "Roundness" of the guitar body. High settings mimic a hollow-body bass. |
| **Mid** | **String Presence.** <br> The core tone. Boosting this brings the bass forward in a mix (700Hz - 1kHz region). |
| **Treble** | **Fret Noise / Pick Attack.** <br> Controls the "Clank". High settings sound like a pick. Low settings sound like fingers. |

---

## 🔁 Section 2: Velocity Dynamics

This is the hidden engine of BooBass.

*   **Low Velocity (1-40):** Muted, dull sound with short decay. Palm-muted feel.
*   **Medium Velocity (41-90):** Standard fingered bass tone.
*   **High Velocity (91-127):** Aggressive "Slap" or "Pop" tone with extended harmonic content.

---

## ⚡ Technical Specs: Monophony & Slide

*   **Polyphony:** 1 Voice Max.
*   **Echo Issue:** The manual notes that internal "Delay/Echo" settings in the channel might cut off because the synth eats its own voice to play the echo.
    *   **Fix:** Use an external delay plugin (Fruity Delay 3) in the mixer, rather than the Channel Settings echo.
*   **Portamento (Slide):**
    *   BooBass supports the Piano Roll **Slide Note**.
    *   Because it is a physical model, the slide sounds like a finger sliding up the fretboard (continuous pitch bend without re-triggering the pluck).

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Slap Bass" Emulator
1.  **Treble:** Boost to 75%.
2.  **Mid:** Cut to 40% (Scoop).
3.  **Piano Roll:**
    *   Program your bassline.
    *   Set **Velocity** to max (127) for the "Slap" notes.
    *   Set **Velocity** to low (40) for the "Ghost" notes.
    *   Result: Dynamic funk realism.

### 2. The "Round" Sub Layer
1.  **Bass:** 100%.
2.  **Mid:** 0%.
3.  **Treble:** 0%.
4.  **Result:** A pure, woody sine-like tone that has more character than a 3x Osc sub but sits in the same frequency range.

### 3. The "Muted" Jazz Bass
1.  **Mid:** 80%.
2.  **Treble:** 10%.
3.  **Bass:** 60%.
4.  **Decay:** Shorten the note lengths in the Piano Roll.
5.  **Velocity:** Keep consistently around 70%.
