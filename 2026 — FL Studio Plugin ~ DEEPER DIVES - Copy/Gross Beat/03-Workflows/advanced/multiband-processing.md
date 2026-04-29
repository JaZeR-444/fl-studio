# Multiband Gross Beat (The "Patcher" Secret)

One of the biggest limitations of Gross Beat is that it affects the *entire* signal. But in modern Hip-Hop and R&B, you often want to slow down the melody while keeping the hi-hats crisp, or reverse the high-end while keeping the bass solid.

**Solution**: Use FL Studio's **Patcher** to split the frequency bands.

## 🛠️ The Setup

1.  **Load Patcher**: Instead of loading Gross Beat directly, load **Patcher** on your Mixer track.
2.  **Add Plugins**: Inside Patcher, add:
    *   **Maximus** (or Frequency Splitter).
    *   **Gross Beat**.
3.  **Routing**:
    *   **Input** -> **Maximus**.
    *   **Maximus Low Output** -> **Gross Beat** -> **Output**.
    *   **Maximus Mid/High Output** -> **Output** (Bypassing Gross Beat).

## 🎹 Use Case 1: The "Drake" Underwater Filter
**Goal**: Slow down and pitch-shift the low-mids of a sample, but keep the "air" and texture of the high-end intact (or vice-versa).

1.  **Split**: Set Frequency Splitter to ~500Hz.
2.  **Process**: Apply **1/2 Speed** to the **Low Band** only.
3.  **Result**: You get a deep, thick harmonic foundation (the slowed-down part) mixed with the original speed high frequencies. This creates a massive, layered texture that sounds like two different samples playing at once.

## 🎹 Use Case 2: Glitch Hi-Hats, Solid Bass
**Goal**: Apply complex stutter edits to a drum loop without ruining the kick drum's groove.

1.  **Split**: Set crossover to ~200Hz.
2.  **Process**: Apply "Repeater/Stutter" patterns to the **High Band** only.
3.  **Result**: The Kick and Sub stay perfectly steady (anchoring the beat), while the snares and hi-hats glitch out like crazy on top.

## 🧠 Pro Tip: Parallel Processing
Even without frequency splitting, you can use Patcher to run **Two Gross Beats in Parallel**.
*   **Chain A**: 1/2 Speed.
*   **Chain B**: Reverse.
*   **Mix**: Blend them together for a sound impossible to achieve with a single instance.
