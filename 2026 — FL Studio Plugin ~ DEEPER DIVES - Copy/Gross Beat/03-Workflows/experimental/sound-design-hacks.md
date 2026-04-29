# Sound Design Hacks & Experimental Uses

Pushing Gross Beat beyond "Half-Speed" and "Stutter".

## 🏎️ 1. The Doppler Effect
**Concept**: The Doppler effect (a car passing by) is a combination of **Pitch Drop** and **Volume Pan/Fade**.
**Recipe**:
1.  **Time Grid**: Draw a curve that starts slightly above the safety line (High Pitch) and sweeps down to slightly below it (Low Pitch).
2.  **Volume Grid**: Draw a "Bell" curve (Fade In -> Fade Out).
3.  **Result**: The sound screams towards you and then drags away. Great for FX transitions (Wooshes).

## 🐝 2. Wavetable Synthesis (The "Buzz" Loop)
**Concept**: If you loop a tiny fragment of audio fast enough (audio rate), it becomes a tone.
**Recipe**:
1.  **Input**: Feed a constant sustained note (or white noise) into Gross Beat.
2.  **Time Grid**:
    *   Set Snap to **1/64** or smaller.
    *   Create a sawtooth "Repeater" pattern that repeats the same tiny sliver of audio.
3.  **Tuning**:
    *   The *length* of the repeat determines the pitch.
    *   Shorter repeat = Higher Pitch.
    *   Longer repeat = Lower Pitch.
4.  **Result**: You turn a drum loop into a metallic robotic synthesizer.

## 💾 3. Bitcrush / Decimation Emulation
**Concept**: Reducing sample rate is essentially "holding" a sample value for longer than it should be held.
**Recipe**:
1.  **Time Grid**:
    *   Use the **Hold** tool (Steps).
    *   Draw a "Staircase" line that follows the safety diagonal.
    *   The "steps" mean the audio freezes for a split second, then jumps, then freezes.
2.  **Result**: This introduces "Sample & Hold" distortion artifacts similar to old samplers or bitcrushers, but with a unique rhythmic texture.

## 🔁 4. Infinite Riser (Shepard Tone)
**Concept**: An illusion of a tone that rises forever.
**Recipe**:
1.  **Time Grid**: Create a ramp that pitches up (Slope < 1).
2.  **Volume Grid**: Create a crossfade (Fade In at start, Fade Out at end).
3.  **Result**: As the pitch gets high, the volume fades out, while the next loop starts fading in at the low pitch. It sounds like it never stops rising.
