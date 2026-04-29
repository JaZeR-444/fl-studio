# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "SuperSaw" Formula
*   **Context:** The defining sound of EDM and Hyperpop.
*   **Move:**
    1.  Osc 1: Saw. Osc 2: Saw.
    2.  Osc 2 Detune: +10 cents.
    3.  **Unison:** ON. Voices: 4 (Max).
    4.  **Unison Detune:** 50% (The "Swarm").
    5.  **Unison Pan:** 100% (Maximum Width).
*   **Result:** A wall of sound.

### 2. The "Pulse Width" Bass
*   **Context:** Retro/Synthwave bass.
*   **Move:**
    1.  Osc 1: Pulse (Square).
    2.  LFO: Target **PWM** (Pulse Width Modulation).
    3.  Speed: Slow.
*   **Result:** The bass tone "breathes" or "morphs" without changing pitch.

### 3. The "Gated Noise" Hat
*   **Context:** Adding high-end rhythm without writing MIDI.
*   **Move:**
    1.  Osc 1: **Noise** (Wait, PoiZone has noise generator mix knob).
    2.  **Trance Gate:** ON. Draw a 1/16th note pattern.
    3.  **Filter:** High Pass.
    4.  Hold one note.
*   **Result:** Instant complex hi-hat loops.

## 👂 What to Listen For
*   **Phase Cancellation:** When layering Saw waves (Osc 1, Osc 2, Unison), sometimes the bass disappears because the waves cancel out.
    *   *Fix:* Use **Unison Pan** to separate them, or keep the Bass mono and only widen the Highs (using external EQ).
*   **Clicking Gate:** If the Trance Gate sounds like a machine gun (clicks).
    *   *Fix:* Turn up the **Smooth** knob in the Gate section. This softens the attack/release of the chop.

## 🛑 Common Pitfalls
1.  **Forgetting Keyboard Tracking:** The **Kbd Trk** knob on the filter. If it's OFF, low notes sound bright and high notes sound dull. If it's ON (100%), the brightness follows the pitch.
2.  **Overusing Chorus:** PoiZone has a luscious chorus. It's tempting to use it on everything. Don't use it on Sub Bass. It destroys the solid low end.
