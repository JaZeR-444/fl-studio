# Technical Specs: FPC Mechanics

## 1. Velocity Resolution

*   **Dynamic Range:** 0-127 (7-bit MIDI).
*   **Layer Splitting:** You can have up to 32 layers.
    *   *Math:* 128 / 32 = 4 velocity steps per layer.
*   **Crossfading:** FPC produces *Hard Switches* between layers by default. It does not crossfade (blend) between Layer 1 and Layer 2 as you cross the velocity threshold, unless you manually program overlapping ranges and Volume mappings, which is complex.

## 2. Cut/Cut By Logic (Choking)

*   **Groups:** IDs 0-99.
*   **Self-Choking:**
    *   Set Cut = 1, Cut By = 1.
    *   Result: The pad is monophonic. Hitting it again cuts the previous tail. Essential for 808s to avoid mud.
*   **Group Choking:**
    *   Pad A: Cut = 1.
    *   Pad B: Cut By = 1.
    *   Result: A stops B. But B does *not* stop A (unless B also Cuts 1). This is "One-Way Choking".

## 3. Envelope Behavior

*   **Per-Layer:** Envelopes (Volume/Pan/Pitch) are calculated *Per Layer*.
*   **Global:** There is no "Pad Global" envelope. If you want to shorten the decay of the whole pad, you must adjust the envelope for *every* layer.
    *   *Workaround:* Adjust the "Gate" time in the Piano Roll (Note Length) and enable Volume Envelopes on all layers. FPC respects Note Off only if Envelopes are active.

## 4. Sample Management

*   **Paths:** FPC stores *references* to files.
*   **Project Bones:** When you save an FL Project, FPC data is saved in the .flp.
*   **Monolithic:** Unlike DirectWave, FPC does not have a "Monolithic" save mode. You must use "Export Zipped Loop Package" to bundle the samples.
