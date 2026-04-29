# Technical Specs: Fruity Equo Mechanics

## 1. Graphic EQ Topology

*   **Type:** Constant Q? Or Variable Q?
    *   Graphic EQs use fixed frequency centers.
    *   **Bands:** Likely 32 bands (1/3 Octave?).
*   **Phase:** Is it Linear Phase?
    *   Probably **Minimum Phase** (IIR Filters) for low CPU usage. It consumes very little CPU compared to Convolver's Linear Phase EQ.

## 2. The Morph Algorithm

*   **Interpolation:** Linear interpolation between Bank states.
*   **Quantization:** The Morph knob is continuous, meaning you can sit "between" Bank 1 and Bank 2 (e.g., Bank 1.5).
*   **Smoothness:** The transition is zipper-noise free, making it suitable for fast modulation (LFOs).

## 3. Shift Mechanics

*   **Scaling:** The Shift knob multiplies the center frequency of the filters.
    *   `New_Freq = Base_Freq * Shift_Factor`.
*   **Limit:** Moving bands too high might hit Nyquist (22kHz) or just disappear. Moving too low turns them into sub-bass mud.

## 4. Send Routing

*   **Latency:** Sending bands to other tracks might introduce PDC issues if not handled correctly, though simple routing usually aligns fine.
*   **Volume Summing:** If you send a band to a track, is it *removed* from the Main Output?
    *   Usually, yes (Splitter behavior). Or is it a Send (Duplication)?
    *   *Check:* Usually works as a Send Knob per band. If Main Vol is 0, it acts as a router.
