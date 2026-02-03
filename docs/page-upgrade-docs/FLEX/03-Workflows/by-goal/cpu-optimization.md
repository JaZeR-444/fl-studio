# CPU Optimization & Performance in FLEX

FLEX sounds incredible because it uses high-quality multisamples and complex DSP. However, lush pads and heavy unisons can eat your CPU. Here is how to tame it.

## 📉 The "Voice Count" Killer
The #1 cause of CPU spikes is playing too many voices at once.
*   **Release Tails:** If you play fast chords with a long release time, the old notes are still "computing" even if you can barely hear them.
*   **The Fix:** Lower the **Release (R)** slider in the Volume Envelope.
*   **The Fix:** Reduce the **Unison** Macro (often Macro 2 or 3). Unison multiplies every note by 3-7 voices.

## ⚡ Effects Drain
The Master Effects section (Delay, Reverb, Limiter) runs on every single voice in some architectures, or simply adds global load.
1.  **Reverb:** The "High Quality" reverb in FLEX is heavy.
    *   *Optimization:* Turn **Reverb Mix** to 0% and use a lighter send effect (like Fruity Reeverb 2) on the mixer track instead.
2.  **Oversampling:** Some distortion/limiter modes use oversampling.
    *   *Optimization:* Set Limiter to "Limiter" (clean) instead of "Distortion" if you don't need the grit.

## 🛠️ FL Studio Settings
Sometimes the issue isn't FLEX, but FL Studio.
1.  **Smart Disable:**
    *   Go to **Tools > Macros > Switch smart disable for all plugins**.
    *   This turns off FLEX processing when it's silent.
2.  **Buffer Size:**
    *   If you are mixing (not recording), increase your Audio Buffer size (Options > Audio Settings) to **1024smp** or higher.

## 🛑 The "Arp" Trap
Arpeggiators generate many rapid notes.
*   **Issue:** If the patch has a long release, a fast arp can stack up 20-30 voices instantly.
*   **Fix:** Use the **Arpeggiator Icon** to turn it off and write the notes in the Piano Roll instead (where you can control the note lengths precisely).
