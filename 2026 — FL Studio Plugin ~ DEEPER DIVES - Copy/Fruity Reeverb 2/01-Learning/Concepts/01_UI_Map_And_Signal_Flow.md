# UI Map And Signal Flow: Fruity Reeverb 2

## UI Tour
1.  **Main Controls:**
    - **Decay:** Tail length (up to 20 seconds).
    - **Size:** Perceived room dimensions.
    - **Pre-Delay:** The gap before the reverb starts. [SRC: IL-MAN]
2.  **EQ / Filtering (Top Row):**
    - **L.Cut / H.Cut:** Simple shelf filters.
    - **DAMP:** Controls how fast the high-end decays relative to the low-end.
3.  **Low-End Management:**
    - **Bass:** Multiplier for low-frequency decay.
    - **Cross:** The "Crossover" frequency where the Bass knob takes effect.
4.  **Spatial Focus:**
    - **Mid/Side Switch:** Process only the center (Mid) or only the edges (Side).
5.  **Texture:**
    - **Mod / Speed:** Adds pitch detuning to the tail for "lushness."
    - **Diffusion:** Echo density.

## Signal Flow
1.  **Input:** Audio enters.
2.  **Pre-Delay:** The signal is delayed by the set ms.
3.  **Initial Reflection (ER):** The first "bounce" is calculated based on Size.
4.  **Late Reverb (Tail):** The dense algorithmic decay is generated.
5.  **Spectral Damping:** High frequencies are filtered out of the feedback loop.
6.  **Low Multiplier:** Low frequencies are adjusted based on the Bass/Cross settings.
7.  **M/S Routing:** The signal is routed to the Mid or Side channels.
8.  **Output:** Final stereo mix.

## Things Beginners Misunderstand
- **Size vs Decay:** Size is the "Box," Decay is the "Feedback." You can have a tiny room with a 10-second decay (unnatural but trippy) or a giant hall with a 0.5-second decay.
- **Mid/Side Mode:** Switching to "Side" doesn't make the reverb wider; it tells the reverb to **ignore** the middle of your vocal and only respond to the stereo info. [SRC: REPUTABLE]
