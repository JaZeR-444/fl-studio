# Technical Specs: Fruity Free Filter Mechanics

## 1. Filter Types

*   **Low Pass:** Cuts highs.
*   **Band Pass:** Cuts lows and highs.
*   **High Pass:** Cuts lows.
*   **Notch:** Cuts mids (narrow).
*   **Low Shelf:** Boosts/Cuts below Freq.
*   **High Shelf:** Boosts/Cuts above Freq.
*   **Peaking:** Boosts/Cuts at Freq.

## 2. Q Behavior

*   **Bandwidth Relation:** `Q = Center_Freq / Bandwidth`.
*   **Gain Interaction:** In Peaking mode, High Q + High Gain = Extremely loud resonance. The plugin does not auto-compensate gain.
*   **Clipping:** Free Filter can boost signals significantly (+18dB or more). Always check your meters.

## 3. Phase

*   **Type:** Minimum Phase (IIR).
*   **Coloration:** Introduces phase shifts around the cutoff frequency, which is desirable for "Analog" style sweeping but alters the shape of transients (Kick drums).
*   **Linear Phase:** No. If you need Linear Phase, use Convolver or Parametric EQ 2 (Lin Phase mode).
