# Troubleshooting Notes

## Symptom: "I can't play chords."
-   **Cause:** BooBass is Monophonic by design.
-   **Fix:** Use multiple instances of BooBass if you really need harmonies (though bass chords are rare in low registers).

## Symptom: "The bass is clicking/popping."
-   **Cause:** Notes might be overlapping slightly without slide mode, or the release is cutting off a low waveform abruptly.
-   **Fix:** Adjust note lengths in the Piano Roll to ensure clean legato or slight gaps.

## Symptom: "It sounds too quiet."
-   **Cause:** Default output is conservative to prevent clipping with EQ boosts.
-   **Fix:** Add a **Fruity Compressor** or **Fruity Limiter** after it in the mixer. BooBass loves compression.

## Symptom: "It sounds like a MIDI toy."
-   **Cause:** Using static velocity (all notes at 100%).
-   **Fix:** Humanize your velocities. Real bass players never hit two notes at exactly the same strength.
