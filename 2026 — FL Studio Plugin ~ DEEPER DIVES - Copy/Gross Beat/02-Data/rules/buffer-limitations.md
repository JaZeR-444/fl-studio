# Critical Rules & Limitations

To use Gross Beat effectively, you must respect the technical boundaries of its engine.

## 📏 1. The 2-Bar Hard Limit
*   **The Rule**: Gross Beat stores exactly 2 bars of audio.
*   **The Consequence**: You cannot "jump back" 3 bars. If you try to access the vertical area below the 2-bar mark, you will get silence or old, unrelated audio.
*   **Workflow Fix**: If you need longer manipulations, chain two Gross Beats or use a sampler.

## ⚠️ 2. The Safety Line Violation
*   **The Rule**: You cannot play audio that hasn't happened yet.
*   **The Consequence**: Drawing above the diagonal safety line results in silence or "clipping" to real-time playback.
*   **Workflow Fix**: Start your pattern 1 beat *below* the safety line to give yourself "headroom" to play notes early.

## 🖱️ 3. Snap & Tension Consistency
*   **The Rule**: Jagged edges in the envelope cause DC offset clicks.
*   **The Consequence**: Without "Attack" smoothing or curved nodes, your volume gates will pop.
*   **Workflow Fix**: Always keep **Click Reduction** ON and use a minimum of **2-5ms ATT** on the Volume grid for percussive material.

## 🎹 4. Slot Change Latency (Trig)
*   **The Rule**: Slot changes respect the "Trig" setting.
*   **The Consequence**: If Trig is set to "4 beats", you will hit your MIDI key and *nothing will happen* until the start of the next bar.
*   **Workflow Fix**: For live performance, use **Trig: 1/4 Beat** or **Trig: Off**.
