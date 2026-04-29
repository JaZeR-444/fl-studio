# Core Techniques And Best Practices: Fruity Convolver

## 1. The "Booth" Reconstruction
- **Technique:** Use a small "Studio" or "Booth" IR.
- **Execution:** Set Wet to 10-15%. Set Pre-delay to 0ms.
- **Result:** Adds "air" and "presence" to a dry vocal, making it feel like it was recorded in a high-end vocal booth rather than a flat digital space.

## 2. Linear Phase Low-Cuts
- **Technique:** Use Convolver as a surgical EQ.
- **Execution:** Load the "Default" (Pulse) IR. Use the Green EQ line to cut everything below 100Hz.
- **Benefit:** Unlike standard EQs, this won't "smear" the phase of your Kick or 808, keeping the low-end perfectly tight. [SRC: REPUTABLE]

## 3. Reverse Reverb Throws
- **Technique:** Load a long "Hall" IR. Click the editor menu -> **Tools -> Reverse**.
- **Execution:** Automate the **Wet** knob to swell up *before* a vocal word hits.
- **Result:** The classic "sucking" transition effect used in thousands of rap intros.

## 4. Cabinet Modeling for Synths
- **Technique:** Load a "Guitar Cab" IR into Convolver.
- **Execution:** Set Mix to 100% Wet. Run a harsh digital synth (like 3x Osc) through it.
- **Benefit:** Instantly gives the synth an "analog" and "physical" character as if it’s coming through a real speaker. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
- **Pitfall:** "The reverb tail is too long and muddy."
  - **Fix:** Use the **Volume Envelope** (white line) to draw a sharp fade-out on the waveform. You can turn a 10-second cathedral into a 1-second room instantly.
- **Pitfall:** "The CPU is spiking."
  - **Fix:** Decrease the **Partition Size** in the settings (if available) or use shorter IR files. [SRC: IL-MAN]
