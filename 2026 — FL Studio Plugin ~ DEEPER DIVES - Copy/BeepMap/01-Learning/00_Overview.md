# BeepMap: Image-to-Sound Synthesizer

## What is it?
**BeepMap** is a unique synthesizer that turns **Images** into **Sound**. It scans a picture (bitmap) from left to right. It translates the pixels into sine waves. It's like a spectrogram in reverse.

## Where does it sit?
-   **Category:** Generator / Experimental Synth
-   **Role:** Creating weird textures, atmospheric drones, and "hiding" images in audio.
-   **Legacy:** One of the classic "weird" FL Studio plugins.

## The Mental Model (60 Seconds)
Imagine the image is a musical score.
-   **Left to Right:** Time (The playhead moving).
-   **Bottom to Top:** Pitch (Low frequencies at bottom, High at top).
-   **Brightness:** Volume (Black = Silence, White = Loud).
-   **Color:** Stereo Pan (Red = Left, Green = Right, Yellow = Center).

## Why use it?
-   **Atmospheres:** Load a picture of a forest or a nebula. The random distribution of pixels creates evolving, organic noise textures that are impossible to program manually.
-   **Sound Design:** You can "draw" a sound in MS Paint (e.g., a rising line) and BeepMap will play it as a riser.
-   **Steganography:** You can hide a picture (like your logo) in a song. When someone views the song in a spectrogram, they see your picture.

## When NOT to use it?
-   **Standard Melodies:** While possible, playing "Mary Had a Little Lamb" by drawing pixels is incredibly inefficient. Use a Piano Roll.
-   **Clean Bass:** The sine wave summation engine is often noisy/grainy. It's not great for clean sub-bass.
