# Core Techniques And Best Practices: Fruity Granulizer

## 1. The "Infinite Cloud" (Audio Freezing)
Set **W.SPACING** to 0 and **G.SPACING** to a low value.
- **Technique**: Use a long **ATT** (50%+) and a long **HOLD**.
- **Listen For**: A smooth, never-ending sustain of whatever millisecond of audio the cursor is currently touching.

## 2. Reversed Grain Swirl
Set **W.SPACING** to a negative value.
- **Technique**: This makes the grains play in reverse order, but the individual grains themselves still play forward.
- **Listen For**: A "sucking" or "rising" texture that is perfect for psychedelic transitions.

## 3. The "Spectral Smear"
Crank the **RAND** (Randomness) knob to 100%.
- **Technique**: Use this on a busy sample like a city street or a drum loop.
- **Listen For**: The recognizable rhythms disappear and turn into a "texture cloud" or "wall of sound."

## 4. Key-to-Sample Mapping
In the "Time" tab, adjust the **START** position while holding different keys.
- **Technique**: You can make the Piano Roll play different parts of a vocal sample depending on the MIDI note.
- **Benefit**: "Performing" a sample across the keys.

## 5. Mono-Check and Phase
- **Protocol**: High **PAN** spread settings create massive width but can vanish in mono.
- **Fix**: Check Mono. If the sound thins out too much, lower the **PAN** knob until the "core" of the grain is audible in the center. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Metallic Ringing** | Increase **ATT** or use a Low-Pass filter to remove aliasing. |
| **Losing the Beat** | Sync **G.SPACING** manually to your project tempo. |
| **Clicks and Pops** | Increase **ATT** (Attack) to smooth the grain edges. |
