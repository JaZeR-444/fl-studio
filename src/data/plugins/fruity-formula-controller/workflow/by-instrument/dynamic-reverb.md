# Instrument: Dynamic Reverb

Controlling reverb size and mix with formulas.

## The "Ducking" Reverb
1. Link a **Fruity Peak Controller** from your dry vocal to **Knob A** of Formula Controller.
2. **Formula**: `1 - a`
3. Link your **Reverb Mix** to the Formula Controller output.
4. **Result**: The reverb is quiet when the vocal is singing and gets louder during the pauses.

## Randomized Room Size
- **Formula**: `b + Rand(Int(SongPos/4))*0.1`
- **Result**: Every 4 bars, the reverb room size changes slightly, adding a subtle sense of space and variety to the mix.

## Space Expansion
- **Formula**: `a * b`
- **Usage**: Map `a` to your song's energy level (e.g., from a master automation clip) and link it to reverb decay.
- **Result**: The space gets larger and more wash-out during the big chorus sections.
