# Useful Formula Presets: Copy-Paste Library

Paster these into the Formula box and hit **Compile**.

## 1. The Basic Inverter
- **Formula:** `1-a`
- **Use:** When Knob A is at 100%, output is 0%. Perfect for crossfading.

## 2. Tempo-Synced Square Gate (1/4 Note)
- **Formula:** `IfG(Sin(SongTime*Pi*2), 0, 1, 0)`
- **Use:** Rhythmic volume chopping.

## 3. Slow "Vibe" Drift
- **Formula:** `a + (Sin(SongTime*0.1)*0.02)`
- **Use:** Adds a tiny 2% "drift" to whatever Knob A is set to.

## 4. Random "Sample & Hold"
- **Formula:** `Rand(Round(SongTime*a))`
- **Use:** Generates a new random value every beat (Speed controlled by Knob A).

## 5. The "Perfect Bounce"
- **Formula:** `Abs(Sin(SongTime*Pi))`
- **Use:** Creating a bouncing ball effect for volume or filters. [SRC: REPUTABLE]
