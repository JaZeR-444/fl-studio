# Rules: Monitoring Safety Levels (Wave Candy)

Tags: monitoring | mix-safety | loudness

## 1. The "Red Zone" Rule (Spectrogram)
- **Rule:** Avoid a solid, unmoving block of "Red" or "Orange" in the spectrogram.
- **Why:** Solid color represents zero dynamic range (constant peak volume). This leads to a mix that is loud but "exhausting" to the listener. There should be "black gaps" between your transients.

## 2. Low-End Threshold Rule
- **Rule:** Your Kick and 808 should be the only elements touching the very bottom of the Spectrogram (below 60Hz).
- **Why:** If vocals or guitars show up in the "sub" area of Wave Candy, they are taking up headroom without adding audible value. **High Pass everything else.**

## 3. Peak vs. RMS Rule
- **Rule:** In the **Peak Meter**, keep your RMS (average loudness) around **-12dB to -8dB** for modern Hip-Hop.
- **Why:** Pushing above -6dB RMS usually requires heavy limiting that "kills" the transient snap of your drums.

## 4. "Avoid" List
- **Avoid Over-Width:** If the **Vector** meter shows a horizontal line, your signal is **Out of Phase**. This will cancel out completely in Mono. Fix it by reducing stereo separation.
- **Avoid GPU Overload:** Set Wave Candy's refresh rate to a "Safe Zone" (e.g., 60fps). Setting it to "Unlimited" can cause FL Studio to lag during complex arrangements.
