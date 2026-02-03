# FLEX Synthesis Engine Architecture

While FLEX presents a simple "Rompler" interface, it runs on a highly advanced hybrid engine.

## 🎛️ Synthesis Types
FLEX is not just a sample player. Under the hood, it utilizes:
1.  **Subtractive Synthesis:** Standard oscillators -> Filter -> Amp.
2.  **Wavetable Synthesis:** Scanning through wave frames for evolving timbres.
3.  **Multisample Synthesis:** High-quality recorded instruments (pianos, strings) with velocity layering.
4.  **FM (Frequency Modulation):** Metallic and aggressive textures.
5.  **AM (Amplitude Modulation):** Tremolo and sideband effects.

## 📁 File System & Architecture
*   **User Data Location:** `Documents\Image-Line\FLEX\Packs`
*   **File Format:** `.flexpack` (Encrypted audio/preset data) + `.ini` (Version/Metadata info).
*   **Engine:** The engine is closed-source and presets are created exclusively by Image-Line or authorized sound designers. Users cannot create their own `.flexpack` files from scratch (no "Save Preset" for raw samples).

## 📊 Visual Analysis Tools
FLEX includes a dedicated analysis suite to visualize the output of this engine:
*   **Oscilloscope:** Time-domain waveform.
*   **Spectrogram:** Frequency-domain heatmap.
*   **Vectorscope:** Stereo field analysis (L vs R).
*   **Histogram:** Frequency balance analyzer.
