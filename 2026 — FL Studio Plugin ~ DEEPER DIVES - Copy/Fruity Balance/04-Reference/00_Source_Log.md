# Reference: Gain Staging Basics (Fruity Balance)

Proper gain staging is the invisible foundation of an "Expensive" sounding mix.

## 1. The Unity Point
In Fruity Balance, the default position (12 o'clock) is **Unity Gain (0dB)**. This means the signal leaves exactly as loud as it entered.

## 2. Pre-Fader vs. Post-Fader
- **Pre-Fader (Slot 1):** Changes the volume *before* any other processing. This affects how hard the signal hits compressors or saturators.
- **Post-Fader (Slot 10):** Changes the final volume after all processing. This is what you should automate for artistic fades.

## 3. The Digital Floor
Modern DAWs (FL Studio) use **32-bit float** audio. This means you technically have "infinite" headroom *inside* the DAW, but your converters (speakers/headphones) and final exports (16-bit/24-bit) do NOT.
- **Rule:** Keep your individual track peaks around **-6dB to -12dB** at the Fruity Balance stage to ensure you have enough room for mastering.

## 4. Visualizing the Balance
Use **Fruity dB Meter** *after* Fruity Balance to verify your gain moves are hitting your intended targets. [SRC: IL-MAN]
