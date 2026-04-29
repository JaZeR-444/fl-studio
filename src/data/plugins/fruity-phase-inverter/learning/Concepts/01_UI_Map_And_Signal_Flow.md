# UI Map And Signal Flow: Fruity Phase Inverter

## UI Tour
The UI is purely functional, consisting of two main toggle switches:

1.  **LEFT (L) Button:**
    - **Off:** Normal polarity.
    - **On (Lit):** Inverts the Left channel by 180 degrees. [SRC: IL-MAN]
2.  **RIGHT (R) Button:**
    - **Off:** Normal polarity.
    - **On (Lit):** Inverts the Right channel by 180 degrees.
3.  **BOTH Buttons On:** Inverts the entire stereo signal. (Audibly, this sounds identical to both being off, unless combined with other tracks).

## Functional Flow
1.  **Input:** Stereo audio enters the plugin.
2.  **Polarity Check:** The plugin checks the state of the L/R buttons.
3.  **Multiplication:** If a button is ON, the plugin multiplies every sample value in that channel by **-1**.
4.  **Zero Latency:** This calculation is instantaneous. It does not delay the signal in time.
5.  **Output:** Signal leaves with shifted polarity.

## Polarity vs. Phase
- **Polarity (What this plugin does):** An instantaneous flip of the "positive" and "negative" peaks.
- **Phase:** A delay in time. 
- *Note:* While we call it "Phase Inverter," it is technically a **Polarity Inverter**. Inverting polarity is equivalent to a 180-degree phase shift for a sine wave. [SRC: REPUTABLE]

## Things Beginners Misunderstand
- **"It sounds the same":** If you put this on a single track and flip the phase, it will sound identical. You only hear the effect when **combining** it with another signal (like a parallel bus or a layer).
- **Mono Compatibility:** If you invert only ONE channel (L or R), the sound will completely disappear when summed to mono. Always check your master in mono! [SRC: IL-KB]
