# Technical Specs: Fruity Delay 2 Mechanics

## 1. The 48-Tick Resolution

*   **Formula:** `Step_Value = (Steps * 48) + Offset`.
*   **Precision:**
    *   FL Studio's PPQ (Pulses Per Quarter) is 96 by default.
    *   Delay 2's resolution of 48 ticks per 16th note implies it runs at `48 * 4 = 192 PPQ` relative to the beat?
    *   Actually, 1 step (16th) = 1/4 of a Beat.
    *   96 PPQ / 4 = 24 ticks per 16th.
    *   Fruity Delay 2 uses **Double Resolution** (48) compared to standard MIDI PPQ to ensure smooth timing adjustments.

## 2. Feedback Loop Topology

*   **Location:** The **Cut** filter is INSIDE the loop.
*   **Consequence:**
    *   `Output = Input + (Delayed_Signal * Feedback_Vol * Filter)`.
    *   If you set Feedback > 100% (possible?), it self-oscillates.
*   **Limiter:** Fruity Delay 2 has a soft clipper on the feedback loop? No. It will clip digitally (go red) if Feedback Volume is Max and Input is loud. **Danger**: Watch your levels.

## 3. Stereo Offset Logic

*   **Type:** Sample Delay.
*   **Direction:**
    *   Left Turn: Delays Left Channel.
    *   Right Turn: Delays Right Channel.
*   **Max Time:** Roughly +/- 50ms? (Documentation says "richer stereo panorama", implies Haas zone <30ms).
*   **Note:** This offset is *added* to the main Time knob.
    *   Left Channel Time = Main Time + Left Offset.
    *   Right Channel Time = Main Time + Right Offset.
    *   This desynchronizes the Ping Pong rhythm if used heavily.
