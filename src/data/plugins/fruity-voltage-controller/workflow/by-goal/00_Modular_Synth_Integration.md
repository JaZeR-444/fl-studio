# Goal: Modular Synth Integration (Fruity Voltage Controller)

## Routing Context
1.  **PC:** FL Studio Piano Roll.
2.  **Audio Interface:** DC-Coupled Output (e.g., Output 3).
3.  **Hardware:** Eurorack Oscillator (VCO) Pitch Input.
4.  **Hardware Return:** VCO Output -> Interface Input 1 -> FL Mixer Track "Hardware In".

## Step-by-Step Setup
1.  Open **Fruity Voltage Controller**.
2.  Set **Out Pair** to the output connected to your VCO.
3.  Load a Tuner (e.g., **GTune** or **Wave Candy**) on the "Hardware In" track.
4.  In the Piano Roll, play **C4**. Use the **Offset** knob until the tuner shows exactly C.
5.  Play **C5**. Use the **Pitch Scale** knob until the tuner shows exactly C.
6.  Repeat until both octaves are perfectly in tune. [SRC: IL-MAN]

## Variations
*   **Dual Oscillator:** Use Channel 1 for VCO 1 and Channel 2 for VCO 2. Detune them slightly in hardware for a massive bass sound.
*   **Filter Tracking:** Send the same CV to your Filter Cutoff so the filter "opens" as you play higher notes.

## Pitfalls
*   **No DC Coupling:** If the tuner shows the pitch "dropping" as soon as you hit a note, your interface is AC-coupled and won't work.
