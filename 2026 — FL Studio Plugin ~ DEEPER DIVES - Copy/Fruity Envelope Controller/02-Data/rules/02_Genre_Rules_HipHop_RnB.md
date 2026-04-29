# Genre Rules: Hip-Hop & R&B (Envelope Controller)

## Rule 1: The "Ghost Kick" Rule
*   **Rule:** Use a dedicated MIDI track for sidechaining.
*   **Application:** Create a pattern named "SC Trigger." Place notes where you want the "bounce" to happen. Route this to Envelope Controller. This allows you to change the bass rhythm without editing the actual kick drum audio.

## Rule 2: Transient Preservation
*   **Rule:** Filters should not kill the "crack" of the drum.
*   **Move:** If using Envelope Controller for a filter sweep, ensure the **ATT (Attack)** is at 0ms. Use the **Logarithmic** curve shape to ensure the filter opens instantly. [SRC: REPUTABLE]

## Rule 3: Velocity Sensitivity for Pads
*   **Rule:** Smooth R&B pads should "bloom."
*   **Application:** Map **Velocity** to the **Attack** of the envelope. Playing harder = Instant sound; Playing softer = Slow swell.

## Rule 4: Feedback Safety
*   **Rule:** Never link an articulator to a "Feedback" knob without a limiter.
*   **Why:** If the envelope spikes to 100% on a delay or distortion unit, it can cause immediate ear-damaging feedback.

## Rule 5: CPU Consolidation
*   **Rule:** Use one instance for multiple jobs.
*   **Application:** Articulator 1 for Sidechain, Articulator 2 for Filter, Articulator 3 for Width. One MIDI note can trigger all three, saving CPU and keeping the arrangement clean. [SRC: IL-MAN]
