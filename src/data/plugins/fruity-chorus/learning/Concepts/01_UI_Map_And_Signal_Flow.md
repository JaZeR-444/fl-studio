# UI Map And Signal Flow: Fruity Chorus

## UI Tour
Fruity Chorus uses a straightforward modular layout:

1.  **Delay Slider:** Sets the base time offset for the chorus voices (approx. 2ms to 30ms).
2.  **Depth Slider:** Controls how much the pitch wobbles (Detuning intensity).
3.  **Stereo Slider:** Controls the LFO phase offset between ears (Widening control). [SRC: IL-MAN]
4.  **LFO Section:** 
    - **Speed:** The rate of the pitch oscillation.
    - **Wave:** Switch between Sine (Smooth) or other shapes.
5.  **Cross Section (The Filter):**
    - **Type:** HP (High Pass) or LP (Low Pass).
    - **Cutoff:** The frequency where the chorus effect starts or stops.

## Functional Flow
1.  **Input:** Audio enters the plugin.
2.  **Crossover:** The signal is split by the **Cross Cutoff**. Only one half goes to the chorus engine (e.g., frequencies above 200Hz).
3.  **Voice Generation:** Two or more delayed copies are created.
4.  **Modulation:** The internal LFO moves the delay time of these copies, creating "Detuning."
5.  **Stereo Shifting:** The phase of the LFO is shifted for the left and right channels to create width.
6.  **Mixing:** The processed signal is blended with the Dry signal.

## Things Beginners Misunderstand
- **Phase Cancellation:** If you turn "Stereo" to 100% and then play the track in Mono, the effect might disappear. **Fix:** Always check mono compatibility.
- **Delay vs Echo:** The "Delay" slider isn't an echo. It’s a micro-delay. Lower settings sound like a flanger; higher settings sound like doubling. [SRC: REPUTABLE]
- **The "Bite":** If the chorus sounds "metallic," your delay is too short (<5ms). Increase the Delay slider for a "lusher" feel.
