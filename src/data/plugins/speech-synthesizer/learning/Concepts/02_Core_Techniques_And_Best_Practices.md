# 02: Core Techniques and Best Practices

## 1. The "Singing" Robot
To make the synthesizer "sing" a specific melody:
1. Select the **Monotone/Sing** style.
2. In the text box, use the pitch syntax before each word: `(C5)I (E5)Love (G5)FL`.
3. Render the sample.
- *Result:* The computer will perfectly hit the musical notes you specified. [SRC: REPUTABLE-07]

## 2. The "Demon" Layer
For dark trap intros:
1. Select the **Giant** voice.
2. Set the **Pitch** to the lowest possible setting.
3. Select **Breathy** mode.
4. Render and add a heavy **Reverb** and **Distortion** in the mixer.

## 3. Creating "Ghostly" Whispers
1. Select **Whispered** mode.
2. Type a repetitive phrase (e.g., "I see you").
3. Render and load into **Fruity Granulizer**.
4. Set a high Grain Spacing.
- *Result:* An eerie, non-tonal texture that adds a "spooky" vibe to Moody tracks.

## 4. Rhythmic Speech Chopping
1. Generate a long sentence (Natural style).
2. Right-click the channel and select **Slicex**.
3. Slicex will automatically detect the words because of the `.SPEECH` metadata.
4. Rearrange the words in the Piano Roll to create a rhythmic "speech-beat."

## 5. Formant-Shifted Leads
If you need a "vocal-like" synth lead:
1. Generate a single vowel (e.g., "AAAAAA").
2. Use **Monotone** style at a specific pitch (e.g., C5).
3. Render and load into the **Sampler**.
4. Enable the **Envelope** and **Filter** in the Sampler settings.
- *Result:* You have a playable, custom-made vocal synth.

## Common Pitfalls + Fixes
- **Pitfall:** "The voice is too fast to understand."
  - **Fix:** Lower the **Rate** slider. 50-70% is usually the "sweet spot" for clarity.
- **Pitfall:** "Clicking" between words.
  - **Fix:** This is often part of the synthesis. Use a tiny **Attack/Release** in the Sampler or Slicex to smooth it out.
- **Pitfall:** "The pitch is wrong."
  - **Fix:** Ensure you are using the correct syntax: `(NoteNameOctave)` with no spaces after the parenthesis.
