# The 4-Operator Stack Architecture

## DX10 Operator Routing
Fruity DX10 uses a specific "Algorithm" where 4 operators are stacked in a serial/parallel hybrid.

### The Signal Path
1. **Operator 4 (Top):** Usually the fastest modulator. It modulates Op 3.
2. **Operator 3:** Modulates Op 2.
3. **Operator 2:** Modulates Op 1 (The Carrier).
4. **Operator 1 (Bottom):** The final audio output.

## Modulation Index Math
The **Modulation (Mod)** knob controls the "Index" of modulation. 
- `Index = Peak Frequency Deviation / Modulator Frequency`
- **Result:** High index values create more "Sidebands." If the index is low, you get a warm, rounded tone. If it's high, you get aggressive "FM Growls."

## Harmonics and Integers
- **Integer Ratios (1.0, 2.0, 3.0):** Create harmonics that align with the human ear's perception of musical notes (Strong Octaves and Fifths).
- **Non-Integer Ratios (1.414, 1.732):** Create "Metallic" harmonics. 1.732 is particularly useful for simulating the resonance of a metal plate or bell.
