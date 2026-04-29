# Common Workflows: Maximus

## 1. Professional Loudness Maximization

The primary use case for Maximus.

1.  **Setup:** Place Maximus on the Master Bus.
2.  **Preset:** Start with "Default" (Flat).
3.  **Bands:**
    *   **Low:** Tighten the bass. Set Release to >50ms to prevent distortion. Set Saturation A to 5% to add harmonics.
    *   **High:** Curve the top end gently. Set "Sep" to the left for air width.
4.  **Master Band:** This is your final ceiling.
    *   **Envelope:** Draw a "Hard Ceiling" at -0.1dB.
    *   **Attack:** 2ms (Lookahead). This catches every transient.
    *   **Curving:** Add a "Soft Knee" right before the ceiling. This rounds off the peaks instead of chopping them (Clipping vs Limiting).

## 2. Multiband De-Essing (Vocal Polish)

Removing harsh "Sss" sounds without dulling the whole vocal.

1.  **Band Split:** Adjust the High Crossover (High Freq Knob) to around 6kHz-7kHz.
2.  **Select:** High Band.
3.  **Solo:** Click "Solo" to listen only to the sizzle.
4.  **Envelope:**
    *   Draw the curve so it dips *below* the diagonal line only at high volumes.
    *   This acts as a high-frequency limiter.
5.  **Release:** Fast (10ms). You want the volume to duck instantly when "Sss" hits and return instantly.
6.  **Result:** Smooth, expensive-sounding vocals that are still bright.

## 3. The "Noise Gate" (Cleaning Samples)

Using the custom envelope to remove background hiss.

1.  **Select:** Master Band (or specific band).
2.  **Graph:**
    *   Go to the bottom-left corner.
    *   Drag the start point all the way to the bottom (Silence).
    *   Create a point at -40dB (Input) and drag it up to 1:1.
3.  **Shape:** Make the transition steep.
4.  **Result:** Any sound below -40dB is muted. Any sound above is untouched.

## 4. Drum Bus "Punch" (Expansion)

Making hits hit harder.

1.  **Usage:** On a drum loop that sounds "flat".
2.  **Graph:**
    *   Draw a point at -6dB.
    *   Pull the line *above* the diagonal 1:1 line in the loud section.
3.  **Physics:** This means loud sounds get *louder*.
4.  **Attack:** 10-30ms. This lets the initial transient spike through before the volume envelope reacts.

## 5. "Tube Warmth" Emulation

Using Maximus purely for saturation, not compression.

1.  **Mode:** Set all bands to **COMP OFF**. This bypasses the dynamics graph.
2.  **Saturation:**
    *   **Low Band:** Type B (Tube), 20%. Thickens the kick.
    *   **Mid Band:** Type A (Transistor), 10%. Adds bite to snares/vocals.
    *   **High Band:** None (Keep it clean).
3.  **Ceiling:** Lower the **Ceil** knob until you see the saturation meter reacting on peaks.
