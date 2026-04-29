# Visual Analysis Guide: Reading the Heatmap

Fruity Parametric EQ 2 is famous for its "Spectral Analysis" visualization. Understanding this display is the key to surgical mixing.

## 🌈 The Colors (Heatmap Mode)

The heatmap shows intensity over time.

### 🔴 Red / Orange (High Intensity)
*   **Meaning:** Constant, sustained energy.
*   **Sources:** Bass notes, sustained synth chords, vocal fundamentals, standing resonances.
*   **Action:** If you see a **thin red horizontal line** that persists even when the music changes, that is a **Resonance**. Sweep a narrow bell cut to remove it.

### 🟣 Purple / Blue (Low Intensity)
*   **Meaning:** Transient, fleeting energy.
*   **Sources:** Kick drum click, snare snap, vocal sibilance ("sss"), hi-hats.
*   **Action:** These are usually "good" dynamic details. Be careful not to EQ these out unless they are harsh.

## 📊 Visualization Modes

### 1. Histogram (The "Waterfall")
*   **What it is:** Frequencies flow downwards like a waterfall.
*   **Best for:** Seeing the "history" of the sound.
*   **Use Case:** Spotting a resonance that rings out *after* a snare hit.

### 2. Heatmap (The "Line")
*   **What it is:** A 2D intensity gradient on the frequency graph itself.
*   **Best for:** Real-time surgical work.
*   **Use Case:** Aligning EQ bands directly over the "hot spots" (Red zones).

## 🎛️ Analysis Controls

*   **LIN (Linear)**: Displays frequency on a linear scale. (Rarely used for music, useful for scientific analysis).
*   **LOG (Logarithmic)**: **Default.** Matches how human ears hear pitch. Low frequencies are spread out; high frequencies are compressed.
*   **Precision**: Adjusted in the plugin options. Higher precision = slower reaction time but more accurate frequency lines.

## 🕵️‍♂️ Detective Work: Finding Issues

### The "Whistle" Search
1.  Look for a stationary **bright red line** in the heatmap.
2.  Enable a band, set it to **Peaking (Bell)**.
3.  Set **Bandwidth (BW)** to very narrow (75-90%).
4.  Boost the Gain (+9dB).
5.  Sweep the frequency left/right until the whistle becomes unbearable.
6.  **Invert** the Gain (cut to -6dB or more) to kill the resonance.

### The "Mud" Search
1.  Look at the **200Hz - 400Hz** region.
2.  If you see a constant "cloud" of orange/red that never disappears, your mix is likely muddy.
3.  Use a wide bell cut (-3dB) in this region on instruments that don't need it (synths, guitars) to clear space for the snare/vocals.
