# Time Stretching Algorithms: Choosing the Right Mode

Matching the processing engine to your audio content. [SRC: IL-MAN]

## 1. SLICES (The Rhythmic Engine)
- **Philosophy:** Audio is cut into microscopic slices at transient peaks. The space between slices is filled or shortened.
- **Character:** Sharp, punchy, and zero pitch artifacts.
- **Best For:** Drum loops, Hi-Hat patterns, and percussive SFX.
- **Caution:** Can sound "choppy" on sustained notes or vocals.

## 2. TONES (The Melodic Engine)
- **Philosophy:** Uses a phase vocoder to stretch harmonic information while keeping frequencies intact.
- **Character:** Smooth, musical, and respects pitch.
- **Best For:** Vocals, flute, monophonic synth leads, and basslines.
- **Caution:** Rapid rhythmic drums may sound "watery" or "blurred" in this mode.

## 3. TONAL (The Polyphonic Engine)
- **Philosophy:** A more advanced version of Tones designed for multiple overlapping frequencies.
- **Character:** Very high-fidelity, best for complex textures.
- **Best For:** Chord progressions, full song stems, piano, and atmospheric pads.
- **Caution:** Highest CPU usage of the three modes.

---

## Algorithm Selection Guide
| If it sounds like... | Use this Algorithm |
| :--- | :--- |
| **"Boom-Tap-Bap"** (Drums) | **Slices** |
| **"La-La-La"** (Singing) | **Tones** |
| **"Doo-Re-Mi"** (Chords) | **Tonal** |
| **"Whoosh-Sweep"** (FX) | **Tonal** or **Tones** |

---
*Pro Tip: If you get "Metallic" or "Phasy" artifacts, try switching from Tones to Tonal and increasing the Quality setting to High.*
