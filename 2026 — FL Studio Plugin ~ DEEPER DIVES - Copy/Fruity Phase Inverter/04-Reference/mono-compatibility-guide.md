# Reference: Mono Compatibility Guide (Phase)

When using **Fruity Phase Inverter**, follow these rules to ensure your mix translates to all listening environments.

## The Rule of Summation
Mono summing happens when the Left and Right channels are added together (`L + R`).
- If L and R are identical, the sound gets +6dB louder.
- If L and R are 180 degrees out of phase (inverted), they result in **0 (Silence)**.

## Compatibility Table

| Action | Result in Stereo | Result in Mono | Vibe Recommendation |
| :--- | :--- | :--- | :--- |
| **Both Inverted (L+R)** | Normal sound. | Normal sound. | Safe for all tracks. |
| **Left Inverted Only** | Mega-wide / Weird. | **Total Silence.** | Only for "Ear Candy." |
| **90-Degree Shift** | Phasey / Thin. | Tonal loss (Comb-filter).| Avoid on low-end. |

## How to Test in FL Studio
1.  Go to the **Master Mixer Track**.
2.  Locate the **Stereo Separation** knob (below the fader).
3.  Turn it all the way to the **RIGHT** (Merged/Mono).
4.  If any instrument disappears or sounds like it's through a "tin can," your phase is wrong. [SRC: IL-MAN]
