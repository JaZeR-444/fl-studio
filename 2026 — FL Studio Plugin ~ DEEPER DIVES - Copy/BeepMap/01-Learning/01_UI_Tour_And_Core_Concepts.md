# UI Tour & Core Concepts

## The Interface
The UI is dominated by the **Image Preview** area.

### 1. The Image Area
-   Displays the loaded bitmap.
-   **Scanning Line:** A vertical white line shows the current playback position.

### 2. Frequency Controls
-   **FREQ (Frequency):** Sets the frequency range.
    -   *High:* The top of the image is very high pitch.
    -   *Low:* The top of the image is lower pitch.
-   **Scale (Hz / Cents):**
    -   *Linear (Hz):* Mathematical spacing. Sounds dissonant/inharmonic. Good for noise/FX.
    -   *Log (Cents):* Musical spacing. Sounds more "tuned". Use this if trying to make musical pads.

### 3. Playback Controls
-   **Length:** How long it takes to scan the image once. (Like "Stretch").
-   **Loop:** If On, the image repeats. If Off, it plays once.

### 4. Tone Controls
-   **Widen:** Increases stereo separation.
-   **Grainy:** Adds a granular synthesis texture. Instead of continuous sine waves, it sounds like particles.

## Core Concepts

### RGB to Stereo Mapping
BeepMap reads color to determine where the sound sits in the stereo field:
-   **Red Channel** -> Left Speaker Amplitude.
-   **Green Channel** -> Right Speaker Amplitude.
-   **Yellow (Red + Green)** -> Center (Both Speakers).
-   **Black** -> Silence.

### The "Sine Summation"
BeepMap is basically a massive additive synth. It creates hundreds of sine waves simultaneously—one for each row of pixels that has brightness. This is why complex photos sound like "washing" white noise; there are too many frequencies at once. Simple geometric images sound cleaner.
