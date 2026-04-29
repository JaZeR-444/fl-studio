# Common Mistakes: Envelope Controller

*   **Wrong Channel Color:** Using blue/yellow notes in the Piano Roll when the Articulator is set to listen only to the default Green (Color 1). **Fix:** Use the Note Color selector in the Piano Roll.
*   **Keyboard Range Limit:** Thinking the plugin is broken because your C5 note doesn't trigger the envelope. **Fix:** Look at the keyboard at the bottom of the UI; ensure the white bar covers the note you are playing.
*   **Sustain at 0:** Setting Sustain to 0 on a long note and wondering why the automation stops. **Fix:** Move the Sustain point up if you want the value to hold while the key is pressed.
*   **Linking to Main Output:** Forgetting that Envelope Controller makes **no sound**. Don't try to route audio *through* it. It is purely a control source.
*   **LFO Speed Clashes:** Having a rhythmic LFO active while trying to use a one-shot Envelope. They will "fight" for control of the knob. **Fix:** Turn the LFO **Amount** knob to 0 if not in use. [SRC: REPUTABLE]
