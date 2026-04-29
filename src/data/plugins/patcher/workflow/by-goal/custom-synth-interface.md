# Custom Synth Interface (Patcher)

## Goal
Design a simplified UI for a complex synthesizer chain.

## Technical Steps
1. **The Chain:**
   - Host `Sytrus` inside Patcher.
   - Route `Sytrus` into `Fruity Limiter`.
2. **The Surface:**
   - Switch to the **Surface** tab.
   - Add a **Knob**. Right-click > Rename to "Aggression".
   - Add an **XY Pad**. Rename to "Vibe".
3. **The Mapping:**
   - Right-click `Sytrus` > `Inputs > Parameters > Operator 1 FM Amount`.
   - Right-click `Fruity Limiter` > `Inputs > Parameters > Ceiling`.
   - In the **Map** view, connect the "Aggression" red node from the Surface to the Sytrus FM Amount.
   - Connect the "Vibe" X/Y outputs to Filter Cutoff and Resonance.

## Why it works
Power users often design "Macros" to hide the complexity of sound design. This allows you to perform the sound without being distracted by hundreds of individual parameters.
