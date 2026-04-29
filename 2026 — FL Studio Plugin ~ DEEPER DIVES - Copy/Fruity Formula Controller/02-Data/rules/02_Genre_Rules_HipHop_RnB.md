# Genre Rules: Hip-Hop & R&B (Formula Controller)

## 1. The "Off-Grid" Rule
- **Rule:** Don't always use `SongTime`. 
- **Application:** For "Spacey" and "Vibey" tracks, use the `Time` (System Time) variable. It doesn't reset when the song stops, creating a more organic, non-linear movement. [SRC: REPUTABLE]

## 2. Inversion for Clarity
- **Rule:** Sidechain shouldn't just be volume.
- **Application:** Use formula `1-a` linked to a High-Shelf EQ. When the Kick hits (Input A from Peak Controller), the high frequencies are *boosted* while the volume is ducked.

## 3. The "Prime Number" LFO
- **Rule:** Avoid repeating patterns in Psychedelic tracks.
- **Application:** Multiply your speeds by prime numbers (e.g., `Sin(SongTime*1.37)`) to ensure the modulation cycle doesn't align too perfectly with the 4/4 grid.

## 4. Safety Clipping
- **Rule:** Math can exceed 1.0.
- **Application:** FL Studio usually clips values at 1.0, but for safety, wrap your formula in `Min(1, Max(0, [formula]))` to ensure you never send "Illegal" values to other plugins.

## 5. Compile Discipline
- **Rule:** Formulas don't update until you compile.
- **Application:** Always hit Compile after a change. If you are performing live, use the A, B, C knobs to change the *variables* of a pre-compiled formula instead of editing the code. [SRC: IL-MAN]
