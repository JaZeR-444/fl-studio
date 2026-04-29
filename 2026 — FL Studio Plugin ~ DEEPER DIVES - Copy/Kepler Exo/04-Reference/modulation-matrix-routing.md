# Technical Reference: Modulation Matrix Routing

Mastering the 8-slot control hub of Kepler Exo. [SRC: IL-MAN]

## The Matrix Workflow
The Modulation Matrix is where you turn a "static" sound into an "evolving" performance.
- **Source:** What is providing the movement?
- **Destination:** What is being moved?
- **Amount:** How far and in which direction (Positive/Negative)?

---

## 🛰️ Common Sources
| Source | Typical Use Case |
| :--- | :--- |
| **LFO 1 / 2** | Rhythmic wobbles, slow drifts, vibrato. |
| **Env 2** | One-shot sweeps (Filter "snaps," Pitch "dives"). |
| **Velocity** | Expressive volume, brightness, or FM intensity. |
| **Mod Wheel** | Performative control (Opening filters, adding vibrato). |
| **Note / Key** | Keytracking adjustments (e.g., thinning the bass as you go higher). |
| **Aftertouch** | Squeezing the keys to add vibrato or growl. |

## 🎯 High-Signal Destinations
| Destination | The Result |
| :--- | :--- |
| **DCO 2 Pitch** | Essential for Hard Sync "tears" and FM detuning. |
| **Filter Cutoff** | Rhythmic "wah" or "growl" effects. |
| **PWM** | "Phaser-like" evolving harmonic motion. |
| **Resonance** | Making the filter sound more "vocal" or "wet." |
| **X-Mod Amt** | Creating "exploding" metallic harmonics on specific notes. |
| **LFO Rate** | One LFO modulating the speed of another (Chaos). |
| **FX Mix** | Adding reverb or delay only on high-velocity notes. |

---

## 🏆 Pro Routing Combinations
1. **The Human Touch:** **Velocity** -> **Filter Cutoff** (+25%) + **Attack** (-10%).
   - *Effect:* Harder playing makes the sound brighter and snappier.
2. **The "Broken Tape" Feel:** **LFO 1 (Random)** -> **DCO 1 & 2 Pitch** (+2%).
   - *Effect:* Subtle, unpredictable pitch drifting.
3. **The "Riser" Engine:** **Mod Wheel** -> **DCO 2 Semi** (+100%) + **Filter Res** (+50%).
   - *Effect:* Pushing the mod wheel up creates a massive, screaming riser.
4. **The Rhythmic Pulse:** **LFO 1 (Synced)** -> **VCA Level** (+100%).
   - *Effect:* Acts as a built-in "Trance Gate."

---
*For a quick guide on finding these controls, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](../01-Learning/Quick-Reference/parameter-cheat-sheet.md).*
