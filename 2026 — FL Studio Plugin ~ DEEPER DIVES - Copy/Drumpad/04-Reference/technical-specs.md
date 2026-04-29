# Technical Specs: Drumpad Mechanics

## 1. Waveguide Mesh Architecture

*   **Type:** 2D Digital Waveguide Mesh.
*   **Nodes:** Represents the "skin" surface.
*   **Propagation:** Excitation (Mallet) travels through the mesh, reflects off the boundaries (Shape), and returns to the pickup point (Phase).
*   **Material:** Effectively a "Damping Coefficient".
    *   Low Damping (Metal) = Energy stays in the mesh longer.
    *   High Damping (Wood/Cloth) = Energy dissipates as heat (Volume loss).

## 2. Signal Routing Topology

1.  **Excitation:** Mallet Noise/Click.
2.  **Resonance:** Membrane Mesh + SOF (Parallel).
    *   SOF is added *to* the Membrane output, it doesn't feed *into* it.
3.  **Filtering:**
    *   Low Filter -> Mid Filter -> High Filter (Series).
    *   The "Mid Filter" includes the complex envelope modulation.

## 3. MIDI & Polyphony

*   **Voice Count:** 1 (Monophonic).
*   **Note Off:** Drumpad generally ignores Note Off for the Membrane (it rings out based on Decay), but Note Off might choke the SOF depending on settings (Hold parameter).
*   **Velocity Curve:** The velocity response of the physical model is non-linear. A velocity of 127 strikes significantly "harder" (spectral brightness) than 100, not just louder.

## 4. Retriggering (Mid Filter)

*   **Mechanism:** Rapidly restarts the Mid-Frequency envelope.
*   **Rate:** Determined by the internal clock (not synced to BPM).
*   **Purpose:** To simulate "Clap" physics (multiple impacts) or "Guiro" scrapes.
