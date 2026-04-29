# Core Techniques And Best Practices: BeepMap

## 1. Creating "Spectral Art"
- **Technique**: Use a graphics program (like MS Paint or Photoshop) to write your name or draw a simple line in white on a black background.
- **Move**: Load this image into BeepMap.
- **Listen For**: The sound will trace the shape of your drawing. A rising line will sound like a rising frequency.

## 2. Low-Resolution Magic
- **Technique**: Don't use a 4K photo.
- **Move**: Resize your image to something tiny, like **128 x 128 pixels**.
- **Benefit**: BeepMap handles fewer pixels much better, resulting in cleaner, more defined tones rather than a "wash" of white noise.

## 3. The "Grain" Smoothness
- **Technique**: Use the **Grain** knob to manage digital artifacts.
- **Move**: For smooth pads, set Grain to a low value. For glitchy, "bit-crushed" textures, turn Grain up.
- **Result**: High grain settings make the sound feel "jagged" and robotic.

## 4. Tuning the "Canvas"
- **Technique**: Switch to **Logarithmic Scale**.
- **Move**: Ensure your image has most of its data in the bottom 50% of the canvas.
- **Why**: Logarithmic scaling better represents how the human ear hears pitch. High frequencies (top of image) occupy a huge amount of space, while lower frequencies (bottom) are compressed.

## 5. Mono-Check Protocol
- **Protocol**: BeepMap uses Red and Green colors for Left and Right.
- **Risk**: An image with extreme Red on one side and Green on the other will be hard-panned.
- **Fix**: Check Mono. If the sound thins out, use a **Fruity Stereo Shaper** to narrow the width to 50% or convert your image to Grayscale before loading. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Silent Playback** | Your image might be too dark. Increase the brightness or check the **Gain** knobs. |
| **Harsh "Screaming"** | Too many pixels at the top of the image. Blur the top of your image in an editor. |
| **"Nervous" Sound** | The **Length** is too short. Increase the Length (ms) to slow down the scan. |
