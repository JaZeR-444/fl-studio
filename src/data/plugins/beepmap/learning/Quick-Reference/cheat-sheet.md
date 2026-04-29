# BeepMap: The Image Sonifier

> **Scope:** Image Synthesis, Additive Sonification, and Spectral IDM.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High (Concept) / Low (Controls).

## 🧠 The "Pixel-to-Frequency" Concept
BeepMap is an **Additive Synthesizer** that uses a picture as its scorecard. It scans an image from Left to Right.
*   **Vertical Position (Y):** Determining Pitch (Frequency). Bottom is Low, Top is High.
*   **Horizontal Position (X):** Time.
*   **Color (RGB):** Determines Volume and Panning.

**Signal Flow:**
`Image Pixel` -> **[Y-AXIS FREQ MAPPING]** -> **[RGB DECODING]** -> **[ADDITIVE SINE BANK]** -> **[OUTPUT]**

*   **Critical Nuance:** Because it generates hundreds of sine waves (one for each vertical pixel), BeepMap is inherently "noisy" and "spectral". It naturally creates eerie, sci-fi textures.

---

## 🎛️ Section 1: The RGB Algorithm

BeepMap doesn't just see "Light". It calculates stereo width based on Red and Green channels.

| Color Channel | Audio Mapping |
| :--- | :--- |
| **Red** | **Left Channel Amplitude.** <br> A purely red pixel plays only in the Left speaker. |
| **Green** | **Right Channel Amplitude.** <br> A purely green pixel plays only in the Right speaker. |
| **Yellow (R+G)** | **Center Amplitude.** <br> Since Yellow is Red + Green, it plays equally in both speakers (Mono Center). |
| **Blue** | **Frequency Range (Optional).** <br> If "Use Blue" is active, the blue content defines the harmonic range per pixel. If inactive, Blue is ignored. |

### Color & Sound Table
*   **Black:** Silence.
*   **White:** Max Volume (Center).
*   **Cyan:** Right Channel Only (with Blue modification).
*   **Magenta:** Left Channel Only (with Blue modification).

---

## 🔁 Section 2: Playback Controls

### Frequency & Time
| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Freq** | 20Hz - 22kHz | **Global Frequency Range.** <br> Sets the highest pitch achievable by the top pixel row. Lowering this makes the image sound "Darker" and "Slower". |
| **Length** | ms | **Pixel Duration.** <br> Controls the scan speed. High Length = Slow Drone. Low Length = Fast Impulse. |
| **Scale** | Linear / Cents | **Pitch Mapping.** <br> *Linear (Hz):* Inharmonic, dissonant, metallic (like a radio scan). <br> *Log (Cents):* Musical, scale-based. Fits better in a song context. |

### Grain & Loop
| Control | Function |
| :--- | :--- |
| **Grainy** | **Granular Mode.** <br> Instead of continuous sine waves, it triggers short "grains" per pixel. Sounds like sand or a Geiger counter. |
| **Loop** | **Scan Mode.** <br> *On:* Scans the image repeatedly (LFO style). <br> *Off:* Plays once when triggered (One-shot). |

---

## ⚡ Technical Specs: Max Bitmap Height

This is the most critical setting for CPU vs. Fidelity.

*   **Definition:** The vertical resolution used for synthesis.
*   **Physics:** For every vertical pixel row, BeepMap MUST generate a dedicated Sine Wave Oscillator.
*   **Setting:**
    *   *Low (e.g., 64px):* 64 Oscillators. Low CPU. Blurry, lo-fi sound.
    *   *High (e.g., 500px):* 500 Oscillators. Massive CPU load. High Fidelity.
*   **Optimization:** If your image is simple (e.g., a square), use a low Bitmap Height. You don't need 500 oscillators to draw a line.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Secret Message" Decoder
1.  **Image:** Open MS Paint (or any editor).
2.  **Draw:** Write text in bright Yellow on a Black background.
3.  **Load:** Import into BeepMap.
4.  **Listen:** You can vaguely "hear" the shape of the letters as the scanner passes them. This is how Aphex Twin hid a face in a spectrogram (Windowlicker).

### 2. The "Atmospheric" Drone
1.  **Image:** Load a photo of a nebula or clouds (High Blue/Red variance).
2.  **Length:** Set to Max.
3.  **Widen:** Max.
4.  **FX:** Add massive Reverb (LuxeVerb/Reeverb 2).
5.  **Result:** An evolving, unrepeatable pad sound that follows the chaotic structure of the clouds.

### 3. The "Rhythm" Code
1.  **Image:** Create an image with vertical bars spaced out (Barcode style).
2.  **Length:** Short.
3.  **Loop:** On.
4.  **Result:** A rhythmic sequence. The height of the bar determines the pitch, the color determines the pan. You are visually drawing a MIDI sequence.
