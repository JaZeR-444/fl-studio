# Technical Specs: Parametric EQ 2 Mechanics

## 1. Filter Topology: IIR vs LIN vs HQ

Parametric EQ 2 offers three distinct processing engines.

### IIR (Infinite Impulse Response) - "Standard"
*   **Math:** Uses recursive feedback loops (analog simulation).
*   **Phase:** **Minimum Phase**. Frequencies are shifted in time relative to each other.
*   **Latency:** Zero.
*   **Artifacts:** Phase smearing (coloring). Near Nyquist (20kHz), the bell curves become asymmetrical ("Cramping").

### HQ (High Quality) - "Oversampling"
*   **Math:** IIR with 2x (or higher) Oversampling.
*   **Function:** Runs the filter at double the project sample rate.
*   **Benefit:** Fixes the "Cramping" at high frequencies. The bell curves remain symmetrical up to 20kHz.
*   **Cost:** Small CPU increase.

### LIN (Linear Phase) - "FFT"
*   **Math:** Fast Fourier Transform (Windowed Sinc function).
*   **Phase:** **Linear**. All frequencies are delayed by the exact same amount. Group Delay is constant.
*   **Latency:** High (Dependent on buffer size).
*   **Artifacts:** **Pre-Ringing**. Because the filter acts symmetrically in time, echoes of the transient appear *before* the transient. This is audible on sharp percussive sounds (Kicks/Snares) as a "swelling" or "sucking" noise.
*   **Usage:** Best for multi-mic recordings (Drum overheads) or Mastering where phase coherency is paramount.

---

## 2. Visualization Physics (Pivot Slope)

The **Pivot Slope** setting changes how the Frequency Spectrum is weighted visually. It compensates for "Pink Noise" distribution.

*   **Pink Noise:** Equal energy per octave. Sounds "Flat" to human ears.
*   **White Noise:** Equal energy per Hz. Sounds "Bright/Harsh".

### Slopes Explained
*   **0 dB/Oct:** White Noise looks flat. Music looks tilted down (Bass heavy).
*   **3 dB/Oct:** Standard spectrum analyzer. Music looks slightly tilted.
*   **4.5 dB/Oct (Default):** Pink Noise looks flat. Music looks flat.
    *   *Why?* This matches human hearing intensity. If the heatmap is flat here, the mix *sounds* balanced.
*   **6 dB/Oct:** Brown Noise looks flat.

---

## 3. Band Soling Logic (Adaptive)

When you `Shift + Click` a band, EQ 2 doesn't just mute the others. It applies a specific "Inverse" filter to isolate the band.

*   **Peaking Input:** Solos using a Bandpass.
*   **Low Pass Input:** Solos using a High Pass (showing you what you are removing).
*   **Band Pass Input:** Solos using a Band Pass (showing you what you are keeping).

This "Adaptive Solo" helps you hear exactly what energy is being affected by that specific token.
