# Source Log: Fruity Formula Controller

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Formula Controller.
- **Key Info:** Syntax list (Sin, Cos, IfG, etc.), Variable definitions (a, b, c, SongTime), and compilation logic.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The FL Studio Math Bible" (Community Guide).
- **Key Info:** Practical applications for `SongTime` vs `Time`, building custom LFO shapes using `Abs` and `Pow`, and using formulas for precise parameter mapping in Patcher.

## Genre Style Board: Fruity Formula Controller

| Vibe | Key Formula | Use Case |
| :--- | :--- | :--- |
| **Upbeat** | `IfG(Sin(t), 0, 1, 0)` | Rhythmic Gating |
| **Psychedelic**| `Sin(t) * Rand()` | Chaotic Modulation |
| **Spacey** | `Sin(t) + Cos(t)` | 3D Orbital Panning |
| **Vibey** | `a + (Rand()*0.02)` | Lo-fi Pitch Drift |
| **Moody** | `Log(a)` scaling | Pressure-sensitive FX |
