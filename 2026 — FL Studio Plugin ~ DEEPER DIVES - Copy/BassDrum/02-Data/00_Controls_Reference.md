# Controls Reference

## Main Oscillator
-   **Peak:** Start frequency (Hz). High = "Laser" sound; Med = Punch.
-   **Base:** End frequency (Hz). This determines the musical *note* of the kick tail.
-   **Slide:** Time (ms) to sweep from Peak to Base.
-   **Level:** Volume.

## Slave Oscillator
-   **Offset:** Pitch offset relative to Main.
-   **Phase:** Offsets the waveform start cycle. **CRITICAL:** Adjust this while listening; finding the "sweet spot" adds massive low-end.
-   **Level:** Volume.

## Sample Tab
-   **File Browser:** Load .wav samples.
-   **Delay:** Delays the sample start. Use this to ensure the sample's transient doesn't hit at the exact same millisecond as the synth's transient if they clash.
-   **Start:** Sample start point trim.

## Filter Section (Shared/Sample)
-   **Cut:** Cutoff frequency.
-   **Res:** Resonance.
-   **Low/High/Band:** Filter type.

## Global / Master
-   **Click:** Built-in transient generator (separate from Sample).
    -   *Level:* Volume of the click.
    -   *Cut:* High-pass filter for the click (keep it out of the sub).
-   **Sampling Ratio:** Bit-crushing/Downsampling effect.
    -   *Right (Max):* Clean.
    -   *Left:* Lo-fi/Aliased.
-   **Duration:** Global fade-out time.
