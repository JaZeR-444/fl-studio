# FM Phase Alignment Logic: Locked vs. Free

In Sytrus, the **Phase** of an operator is one of its most powerful yet misunderstood settings. [SRC: IL-MAN-09]

## The Technical Lever:
- **Global Phase (Locked):** The oscillator starts at exactly 0% every time you hit a key.
- **Free Phase:** The oscillator starts at a random point in its cycle.

## Why this matters for FM:
Frequency Modulation is extremely sensitive to phase. If two operators start at different phase relationships every time, the **harmonic timbre** of the FM sound will change with every key press.

### 1. The "Stability" Rule (Trap/Pop)
- **Setting:** Lock all Operator Phases to 0% (or use the Global Phase switch).
- **Research Result:** This ensures that your FM bell or pluck sounds identical every single time it hits. This is mandatory for professional mixing in rhythmic genres.

### 2. The "Analog Drift" Rule (Moody/Lo-Fi)
- **Setting:** Set OP Phase to "Free" or manually offset them by random amounts.
- **Research Result:** This creates subtle "beating" and movement between the carriers and modulators, mimicking the instability of hardware FM synths like the Yamaha DX7.

### 3. Sub-Bass Consistency:
- Never use Free Phase for a Sytrus sub-bass. The volume of the low-end will "waver" or cancel out, ruining the punch of your track. Always lock the phase for anything below 100Hz.
