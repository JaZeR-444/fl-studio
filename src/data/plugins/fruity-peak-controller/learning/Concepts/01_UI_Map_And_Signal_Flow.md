# UI Map And Signal Flow: Fruity Peak Controller

## UI Tour
The UI is divided into three distinct sections:

1.  **PEAK Section (The Listener):**
    - **Base:** The resting value of the automation (where the knob sits when there is no sound).
    - **Vol (Volume):** The range of movement. *Positive* boosts from base; *Negative* ducks from base. [SRC: IL-MAN]
    - **Tension:** The "snap" of the attack/decay curve.
    - **Decay:** How fast the signal returns to the Base level.
2.  **LFO Section (The Robot):**
    - **Shape:** Sine, Triangle, Square, Saw, Random.
    - **Speed:** Tempo-synced rate of oscillation.
3.  **The Viewer:** The black box at the top that shows the red (Peak) and green (LFO) lines representing the generated data.

## Functional Flow
1.  **Audio Input:** Sound enters the plugin slot.
2.  **Detection:** The "Peak" engine calculates the amplitude envelope.
3.  **Modulation:** The LFO engine generates its cycle.
4.  **Signal Summing:** If enabled, Peak and LFO signals are combined.
5.  **Broadcast:** The data is sent to the "Remote Control" bus.
6.  **Mute Button:** If enabled, the original audio trigger signal is silenced so it doesn't leak into the mix.

## Things Beginners Misunderstand
- **"Link to Controller" Menu:** You don't "route" the audio to the target. You right-click the target knob (e.g., a mixer fader) -> **Link to controller** -> select **Peak Controller - Peak**.
- **Base vs Volume:** If you want a fader to start at 80% and drop to 20% when the kick hits, set **Base** to 80% and **Vol** to a negative value (-60%).
- **Mute Toggle:** Beginners often forget to turn on **MUTE** if they are using a "Ghost Kick" (a kick you only want to use as a trigger, not to be heard). [SRC: REPUTABLE]
