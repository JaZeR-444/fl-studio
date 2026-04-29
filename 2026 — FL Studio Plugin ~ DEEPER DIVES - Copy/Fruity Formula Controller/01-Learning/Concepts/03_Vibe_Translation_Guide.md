# Vibe Translation Guide: Fruity Formula Controller

Formula Controller translates vibes through **Math-Driven Motion**.

## 1. Upbeat (Precision, Rhythmic, Kinetic)
- **Concept:** "The Perfect Clock."
- **Levers:**
  - **Formula:** `IfG(Sin(SongTime*Pi*4), 0, 1, 0)` (1/4 note gate).
  - **Knob A:** Speed multiplier.
- **Listen For:** A perfectly timed energy pulse that locks the track to the grid.
- **Don't Do This:** Don't let the formula drift; use `SongTime` for absolute sync.

## 2. Psychedelic (Chaotic, Evolving, Liquid)
- **Concept:** "Non-Repeating Evolution."
- **Levers:**
  - **Formula:** `Sin(SongTime*a) * Rand()`
  - **Variable:** `SeededRand(SongTime)` for repeatable chaos.
- **Listen For:** Modulation that feels alive and unpredictable, never hitting the same spot twice.

## 3. Spacey (Galactic, Rotating, Immersive)
- **Concept:** "The Orbital Path."
- **Levers:**
  - **Sine/Cosine Duo:** Use one Formula Controller with `Sin(SongTime)` for Pan, and another with `Cos(SongTime)` for Volume.
- **Listen For:** The sound circling the listener, creating a sense of 3D planetary motion.

## 4. Vibey (Relaxed, Drifting, Human)
- **Concept:** "The Lo-Fi Drift."
- **Levers:**
  - **Formula:** `a + (Rand()*0.05)`
  - **Action:** Add a tiny bit of random noise to a static value (Knob A).
- **Listen For:** Micro-imperfections that make digital synths feel like old, unstable hardware.

## 5. Moody (Stagnant, Compressed, Intense)
- **Concept:** "The Pressure Valve."
- **Levers:**
  - **Logarithmic Scaling:** `Log(a*9 + 1) / Log(10)`
- **Listen For:** A control curve that feels heavy at the start and light at the end, mimicking the feel of a physical pressure-sensitive pad. [SRC: REPUTABLE]