# UI Map And Signal Flow: Fruity Mute 2

## UI Tour
The UI of Fruity Mute 2 is intentionally minimalist to ensure maximum focus on the automation target.

1.  **Mute Button (Big Blue/Red Toggle):** 
    - **Active (Light On):** Audio passes through (Unmuted).
    - **Inactive (Light Off):** Audio is silenced (Muted). [SRC: IL-MAN]
    - *Note: Beginners often flip the logic—remember that the button represents the "Flow" of audio.*
2.  **Smoothing Indicator (Internal):** While not a knob, the plugin applies a very small, non-adjustable fade (approx. 2-5ms) to prevent DC offset clicks. [SRC: UNVERIFIED - observed via waveform analysis].

## Functional Flow
1.  **Input:** Audio enters the plugin slot.
2.  **Switch Logic:** The plugin checks the binary state of the Mute parameter.
3.  **Crossfade Engine:** If the state changed, a micro-crossfade is applied to ensure the transition doesn't "snap" the speaker cone.
4.  **Output:** Silence or original audio is passed to the next slot.

## Things Beginners Misunderstand
- **Placement Matters:** Putting Mute 2 *after* a reverb will cut the tail. Putting it *before* will stop new sound from entering the reverb, but let the existing tail fade out naturally.
- **Automation Values:** In the FL Studio Automation Clip, **100% (Top)** is usually "Sound On," and **0% (Bottom)** is "Muted." Always verify by looking at the plugin button while the playhead moves.
- **CPU:** This plugin uses almost zero CPU. You can use 100 instances in a project without any impact on performance. [SRC: IL-MAN]
