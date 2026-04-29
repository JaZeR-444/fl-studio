# Goal: Singing Robot Effect

## Goal Statement
Create a robotic vocal melody where the computer "sings" a specific phrase in the key of your track.

## Routing Context
1. **Speech Synthesizer:** Render as an Audio Clip.
2. **Fruity Granulizer:** Load the rendered clip for "stretched" sustain.
3. **Fruity Chorus:** For a thick, wide ensemble feel.

## Step-by-Step Setup
1. **The Text:** Type your phrase using the pitch syntax: `(C5)I (D#5)am (G5)singing`.
2. **Style:** Select **Monotone/Sing**. This is critical for pitch accuracy.
3. **Voice:** Select **Robot** or **Classic**.
4. **Pitch:** Ensure the master Pitch slider is set to 0 (unless you want to shift the whole melody).
5. **Render:** Hit OK.
6. **Processing:** Load the clip into **Fruity Granulizer**. Turn up the **Hold** and **Attack** for a "shimmering" robot choir effect.

## Starting Settings
- **Style:** Monotone/Sing
- **Rate:** 60% (Slower for clearer singing)
- **Voice:** Robot

## Variations
- **Variation 1 (Harmony):** Render the same phrase at `(E5) (G5) (B5)` to create a major triad harmony.
- **Variation 2 (Glitch):** Use the **Random** style instead of Monotone for a chaotic, "malfunctioning" robot.