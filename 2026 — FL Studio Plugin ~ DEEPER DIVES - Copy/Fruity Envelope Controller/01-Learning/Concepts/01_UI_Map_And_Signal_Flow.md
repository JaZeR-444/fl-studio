# UI Map And Signal Flow: Fruity Envelope Controller

## UI Tour
1.  **Articulator Selector (1-8):** Tabs at the top. Each one is a completely independent control stream. [SRC: IL-MAN]
2.  **The Source Tabs (Bottom of Graph):**
    *   **Env:** Standard multi-point envelope.
    *   **LFO:** Internal oscillator.
    *   **Map:** Key-tracking (Note pitch -> Value).
    *   **Vel:** Velocity-tracking (How hard you play -> Value).
    *   **Rand:** Note-randomization.
3.  **The Master Scaling Knobs:**
    *   **ATT / DEC / SUS / REL:** Global multipliers for all active envelopes.
4.  **Base / Level / Offset:** Fine-tunes the output range.

## Signal Flow
1.  **MIDI In:** Notes from the Piano Roll trigger the articulators.
2.  **Articulator Logic:** The plugin checks all active source tabs (Env, LFO, Map, etc.).
3.  **Summing Engine:** It mathematically combines these sources into one final value (0.0 to 1.0).
4.  **Broadcasting:** This value is sent to the "Remote Control" system.
5.  **Target Link:** Any knob in FL Studio linked to "Articulator 1" moves in real-time.

## Things Beginners Misunderstand
*   **Key Ranges:** Each articulator has a "Keyboard" at the bottom. If you click a note and it's greyed out, that articulator **will not trigger**. **Fix:** Drag the range bars to cover the whole keyboard.
*   **Summing vs Overriding:** If you have an Envelope AND an LFO active, they **add together**. If the total exceeds 100%, the signal clips at max value. [SRC: REPUTABLE]
*   **Release State:** The release of the envelope only plays if the note in the Piano Roll is short enough to trigger the release stage. [SRC: IL-MAN]
