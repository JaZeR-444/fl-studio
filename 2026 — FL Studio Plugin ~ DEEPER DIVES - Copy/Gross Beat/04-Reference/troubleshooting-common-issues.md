# Troubleshooting & Common Pitfalls

Even pros get confused by Gross Beat. Here are the most common issues and fixes.

## 🔊 1. The "Clicking" Problem
**Symptom**: You hear a loud "Pop" or "Click" every time the loop restarts or the pattern switches.
**Causes**:
*   **DC Offset / Waveform Discontinuity**: You are jumping from one point in a wave to a completely different point instantly.
**Fixes**:
1.  **Click Reduction (De-clicking)**: Turn ON the "Click Reduction" knob (bottom right).
2.  **Volume Smoothing**: In the Volume Grid, increase **ATT (Attack)** to ~5ms-10ms. This adds a micro-fade-in to every cut.
3.  **Zero Crossings**: Manually edit your envelope points to align with grid lines where the waveform might be near zero (hard to guess, so rely on smoothing).

## 📉 2. Phasing / "Thin" Sound
**Symptom**: When using the **Mix** knob to blend the effect, the sound gets hollow, quiet, or weirdly metallic.
**Cause**:
*   **Phase Cancellation**: The "Time" envelope delays the audio slightly. Mixing delayed audio with original audio creates comb filtering (Phasing).
**Fix**:
*   **Avoid the Channel Rack Mix Knob**: Do NOT use the mixer track's wet/dry knob.
*   **Use Gross Beat's Mix Knobs**: Use the internal **Time Mix** and **Volume Mix** knobs. They are designed to handle alignment better, but phasing is often unavoidable with time-stretching.
*   **Commit**: For half-speed, it is often better to be 100% Wet or 0% Wet.

## 🔇 3. Silence at Song Start
**Symptom**: The first bar of your song is silent, even though the pattern is "On".
**Cause**:
*   **Empty Buffer**: If your Gross Beat pattern says "Play audio from 1 bar ago" (e.g., a reverse or delay), and you are at Bar 1 Beat 1, *there is no audio from 1 bar ago*.
**Fix**:
*   **Pre-roll**: Render your audio/song starting at Bar 2 or 3.
*   **Bypass Start**: Automate Gross Beat to be "Off" (Slot 1 - Empty) for the first bar, then switch to the effect at Bar 2.

## ⏱️ 4. Latency / Out of Sync
**Symptom**: The effect sounds late or sloppy.
**Cause**:
*   **PDC (Plugin Delay Compensation)**: Gross Beat introduces latency. FL Studio usually compensates, but complex routing (Sidechains/Patcher) can break it.
**Fix**:
*   Check your Mixer Track's **latency icon** (clock).
*   Ensure **Trig** (Trigger) alignment is set correctly. If **Trig** is set to "4 Beats", your pattern change waits for the next bar. Set to **Off** or **1/4 Beat** for instant changes.
