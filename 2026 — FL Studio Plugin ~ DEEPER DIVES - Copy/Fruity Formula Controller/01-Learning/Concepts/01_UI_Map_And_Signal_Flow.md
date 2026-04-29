# UI Map And Signal Flow: Fruity Formula Controller

## UI Tour
The interface is intentionally minimal, designed for code entry rather than visual tweaking. [SRC: IL-MAN]

### 1. The Inputs (The Variables)
- **Knobs a, b, c**: Normalized input faders (0.0 to 1.0). These are the variables you use in your formula.
- **Tip**: You can link these knobs to MIDI controllers, automation clips, or other internal controllers like Peak Controller.

### 2. The Formula Bar (The Logic)
- **Expression Box**: Where the math happens.
- **Compile Button**: **CRITICAL**. The formula will not update until you click this.
- **Presets**: A drop-down menu with classic formulas (Invert, Sine, etc.).

### 3. The Output (The Result)
- **Meter**: A vertical bar showing the real-time output value (0.0 to 1.0).
- **Tip**: Right-click this meter to see the output value as a decimal.

## Signal Flow
1. **Inputs (a, b, c)**: Real-time values are read from the knobs or their internal links.
2. **Environment Variables**: The engine reads project data like `SongTime` (current beat position) and `Tempo`.
3. **The Expression Engine**: The text in the formula bar is evaluated mathematically.
4. **Clamping**: The result is restricted to the 0.0 – 1.0 range (though some internal calculations can exceed this before the final output).
5. **Output**: The result is broadcast to any parameter linked to the Fruity Formula Controller.

## Things Beginners Misunderstand
- **"Why is the output stuck at 0?"**: You likely haven't pressed **Compile**. Even if the code is correct, it doesn't "live" until compiled.
- **"SongTime doesn't move"**: `SongTime` only increments while the FL Studio transport is **playing**. If the DAW is stopped, formulas based on `SongTime` will stay static.
- **Case Sensitivity**: Variables like `a, b, c` and functions like `Sin()` are usually case-sensitive in the underlying engine. Stick to the standard syntax.
