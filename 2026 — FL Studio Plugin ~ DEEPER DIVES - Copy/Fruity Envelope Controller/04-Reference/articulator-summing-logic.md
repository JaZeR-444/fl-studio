# Reference: Articulator Summing Logic (Envelope Controller)

Understanding how Fruity Envelope Controller combines multiple sources is critical for complex sound design.

## 1. The Summing Formula
The final output value of an Articulator is calculated as follows:
`Output = Base + (Source_Total * Level * Scale)`

## 2. Priority of Sources
All sources are added **in parallel**:
*   **Env + LFO:** They are added together. If Env is at 50% and LFO is at 50%, the result is 100%.
*   **Velocity (Vel):** This acts as a **Multiplier** if the "Vel" tab is used, or a simple offset if mapped differently.
*   **Random (Rand):** Adds a per-note value to the final sum.

## 3. Clipping behavior
The final output cannot exceed `1.0 (100%)` or go below `0.0 (0%)`. If your LFO and Env both hit 100% at the same time, the signal will "flatline" at the top.

## 4. Master Knobs
The **ATT / DEC / SUS / REL** knobs on the main panel act as **Global Multipliers**.
*   If ATT is at 200%, every envelope attack in all 8 articulators will be twice as long. [SRC: IL-MAN]
