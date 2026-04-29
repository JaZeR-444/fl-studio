# DSP Characteristics

Understanding the Digital Signal Processing (DSP) behavior of Fruity Parametric EQ 2 is critical for mastering and high-fidelity mixing.

## 🧠 Algorithm Modes

Modern versions of Fruity Parametric EQ 2 (FL Studio 20.8+) feature distinct processing modes.

### 1. IIR Mode (Standard / Default)
*   **Type:** Infinite Impulse Response
*   **Phase Behavior:** Minimum Phase.
*   **Characteristics:** Analog-like behavior. Introduces phase rotation (phase shift) that varies with frequency, especially around steep filter cutoffs.
*   **Latency:** Near Zero.
*   **Pre-Ringing:** None.
*   **Best For:**
    *   **Creative Mixing:** Sculpting tone on individual channels.
    *   **Tracking:** Low latency recording.
    *   **Punchy Sources:** Drums and percussion (preserves transient impact).

### 2. LIN Mode (Linear Phase)
*   **Type:** FFT-based Linear Phase
*   **Phase Behavior:** Linear Phase (Phase shift is constant/zero across the spectrum).
*   **Characteristics:** The timing relationships between all frequencies are preserved perfectly.
*   **Latency:** High (Compensated by FL Studio's PDC, but not suitable for live tracking).
*   **Pre-Ringing:** Possible on sharp transients (smearing of the attack).
*   **Best For:**
    *   **Mastering:** Transparent tonal balance adjustments.
    *   **Parallel Processing:** Avoiding phase cancellation when blending a dry signal with an EQ'd wet signal.
    *   **Multi-Mic Arrays:** EQing a drum bus where preserving the phase relationship between overheads and close mics is critical.

---

## 💎 HQ Mode (High Quality)

The **HQ** button affects the filter curve accuracy near the Nyquist frequency (20 kHz).

### HQ Off (Standard)
*   **Behavior:** Standard digital filter calculation.
*   **Side Effect:** **Frequency Cramping.** Bell curves near 15-20kHz may become asymmetrical or "squashed" as they approach the digital ceiling.
*   **CPU:** Lowest.

### HQ On (Oversampling)
*   **Behavior:** Oversamples the audio processing.
*   **Benefit:** **Decramping.** Bell curves remain symmetrical and mathematically ideal up to 20kHz.
*   **Cost:** Slightly higher CPU usage.
*   **Recommendation:** Always leave **ON** for mixing and mastering unless running on extremely limited hardware.

---

## 📉 Phase Response Summary

| Mode | HQ | Phase Shift | Pre-Ringing | Latency | Use Case |
|------|----|-------------|-------------|---------|----------|
| **Std** | Off | Dynamic (Min Phase) | No | ~0ms | Drafting / Live |
| **Std** | On | Dynamic (Min Phase) | No | ~0ms | Mixing (Default) |
| **LIN** | On/Off | None (Linear) | Yes | High | Mastering / Parallel |

---

## ⚡ CPU & Performance Optimization

*   **Band Tokens:** Disabling a band (turning the light off) completely bypasses its processing code, saving CPU.
*   **Visualization:** The specific "High Precision" monitor setting (in the plugin options menu, not the front panel) consumes more GPU/CPU than the audio processing itself. If UI lag occurs, reduce the visual precision, not the audio quality.