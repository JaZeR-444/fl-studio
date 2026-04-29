# Troubleshooting Notes

## Symptom: "The sound is crackling / CPU is spiking."
-   **Cause:** Additive synthesis requires calculating thousands of sine waves (harmonics) simultaneously. Some presets are complex.
-   **Fix:**
    1.  Check the **Options** menu and lower the quality to **Draft** or **Good**.
    2.  Check if you are playing too many notes (high polyphony).

## Symptom: "I lost the sound I found!"
-   **Cause:** You clicked "Random" again without writing down the number. There is no "Undo" for the Random button in some versions.
-   **Fix:** **Always** write down the number of a sound you like immediately. Treat it like a phone number.
-   **Prevention:** Use the "Sustain" pedal or keep a MIDI note playing while browsing so you don't accidentally click away.

## Symptom: "The sound is too loud/distorted."
-   **Cause:** "Magic Dust" is a maximizer. At 100%, it pushes the signal very hard.
-   **Fix:** Turn the **Magic Dust** knob down to 50% or 0%.

## Symptom: "I can't change the attack/decay."
-   **Cause:** Autogun does not allow editing synthesis parameters.
-   **Fix:** You need the full **Ogun** plugin. Copy the preset number from Autogun, open Ogun, and use "Enter random preset number" to paste it. Now you can edit the envelopes.
