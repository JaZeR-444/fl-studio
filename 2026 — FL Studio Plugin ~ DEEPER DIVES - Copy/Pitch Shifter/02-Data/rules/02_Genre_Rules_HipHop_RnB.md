# Genre Rules: Hip-Hop & R&B

## 1. The Ad-Lib Layer
*   **Rule:** Ad-libs should occupy a different frequency space than the lead.
*   **Implementation:** Use Pitch Shifter to drop ad-libs -12st. This puts them in the "Bass" range, filling out the frequency spectrum without competing with the mid-range lead.

## 2. The "Screw" Break
*   **Rule:** Slowing down the vibe without slowing the BPM.
*   **Implementation:** Automate Pitch Shifter on the Master Bus (or Drum Bus) to drop -2 semitones during the chorus transition. It mimics the "Tape Stop" or "DJ Screw" feel momentarily.

## 3. The "Fake Choir"
*   **Rule:** R&B requires thick stacks.
*   **Implementation:** If you only have one singer, use Patcher to run 3 parallel Pitch Shifters:
    *   -12st (Bass)
    *   -5st (Baritone)
    *   +7st (Alto)
    *   Blend them low (-12dB) under the main vocal.
