# Technical Specs: Drumaxx Mechanics

## 1. 2D Waveguide Mesh

*   **Synthesis:** 2-Dimensional Digital Waveguide Mesh.
*   **Concept:** The "Membrane" is a grid of points (Nodes) connected by springs (Edges).
*   **Parameters:**
    *   **Tension:** The stiffness of the springs.
    *   **Material:** The mass of the nodes.
    *   **Shape:** The boundary condition of the mesh (Square vs Circular clamp).
*   **CPU:** Calculating a 2D mesh is CPU intensive. Drumaxx uses simplified algorithms compared to full scientific simulations, optimized for musical real-time usage.

## 2. SOF (Self-Oscillating Filter)

*   **Type:** Resonant All-Pass Filter.
*   **Physics:** When resonance is set to infinity, the filter outputs a sine wave at the cutoff frequency.
*   **Usage:** Used to generate the "Fundamental" (F0) of the drum, while the Membrane generates the "Partials" (Overtones).
*   **Sweep:** The SOF has a dedicated pitch envelope (Decay) to create the "Pew" sound of a tom or kick.

## 3. Velocity Matrix Resolution

*   **Modulation:** 4 Slots per Pad.
*   **Logic:** `Value = Base_Param + (Velocity * Mod_Amount)`.
*   **Range:** The modulation is bipolar (-100% to +100%). You can make a drum get *quieter* the harder you hit it (Negative Amplitude modulation).

## 4. Polyphony Limits

*   **Voice Stealing:** Drumaxx has fixed polyphony limits to save CPU.
*   **Choking:**
    *   Hi-Hats (Closed/Open) interact via Choke Groups.
    *   If you play Pad 2 (Open Hat), playing Pad 1 (Closed Hat) kills the voice of Pad 2 instantly.
    *   This mimics the physical mechanics of a hi-hat pedal closing.
