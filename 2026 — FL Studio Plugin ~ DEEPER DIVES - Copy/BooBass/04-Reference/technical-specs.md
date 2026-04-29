# Technical Specs: BooBass Mechanics

## 1. Physical Modeling (Waveguide)

*   **Synthesis Type:** Digital Waveguide.
*   **Theory:** Instead of playing a recording (sample), BooBass solves a math equation that represents a tensed string fixed at two points.
*   **Variables:**
    *   **Velocity:** Adds energy to the system (Excitation).
    *   **Pitch:** Changes the length of the delay line (String Length).
    *   **Damping:** Controlled by the EQ knobs, simulates different material properties (Wood, Steel, Nickel).

## 2. Monophonic Constraints

*   **Voice Count:** Strictly 1.
*   **Behavior:**
    *   If you play two notes at once, the second note cuts off the first note *instantly*.
    *   There is no "Release" overlap.
    *   **Clicking:** If the phase of the first note is not at zero when cutoff occurs, you might hear a click. Attack/Release envelopes in the Channel Settings can smooth this.

## 3. Frequency Response

*   **Bass Knob:** Broad shelf centered around 100Hz.
*   **Mid Knob:** Peaking filter around 1kHz (Presence).
*   **Treble Knob:** High Shelf around 3kHz-5kHz.
*   **Note:** These are likely integrated into the feedback loop of the model, not just post-EQ, which explains why they alter the decay behavior (brighter sounds decay faster in typical waveguide models).

## 4. Delay/Echo Incompatibility

*   **The Problem:** Standard "Channel Settings" delay works by re-triggering the note at lower volume.
*   **The Conflict:** Because BooBass is Monophonic, the "Echo" note cuts off the "Main" note. You hear a stuttering effect rather than a wash.
*   **The Solution:** Use mixer-based delay effects which process the *audio output*, not the *note input*.
