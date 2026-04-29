# Troubleshooting Notes

## Symptom: "The kick sounds weak / hollow."
-   **Cause:** Phase cancellation. The Main Osc and Slave Osc (or Sample) are fighting each other in the low frequencies.
-   **Fix:** Slowly turn the **Phase** knob on the Slave Oscillator. You will hear a moment where the bass suddenly drops out, and another where it becomes huge. Leave it at the "huge" spot.

## Symptom: "The sample isn't playing."
-   **Cause:**
    1.  The **Mix** or **Level** for the sample is down.
    2.  The sample file path is lost.
    3.  The **Low Pass** filter is closed too much.
-   **Fix:** Check levels and filter settings.

## Symptom: "The kick is clicking at the end."
-   **Cause:** The **Duration** might be cutting off the wave abruptly, or the release envelope is too short.
-   **Fix:** Adjust the Global **Duration** knob or the Amp Envelope Release.

## Symptom: "It sounds too digital/distorted."
-   **Cause:** **Sampling Ratio** knob might be turned down (to the left).
-   **Fix:** Turn Sampling Ratio fully to the right for clean audio.

## Symptom: "The sub bass is out of key."
-   **Cause:** The **Base** frequency knob is not tuned to your song.
-   **Fix:** Watch the hint bar in FL Studio while turning the **Base** knob. It displays the frequency (Hz) and often the nearest Note name. Tune it to your root note (e.g., F#0).
