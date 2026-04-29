# Core Techniques And Best Practices: Frequency Splitter

## 1. The "Indestructible" 808
Ensure your 808 bass has power in the club and grit on phones.
- **Technique**: Split at 120Hz.
- **Move**: Use a 48dB Slope. Route the **Low** band to a clean Mixer track. Route the **Mid/High** bands to a track with heavy distortion (Distructor).
- **Benefit**: You can crush the harmonics for phone-speaker clarity without ever losing the solid, clean sub-bass fundamental.

## 2. Dynamic High-End Air
Add reverb only to the "breath" of a vocal.
- **Technique**: Use a 2-band split at 5kHz.
- **Move**: Set **Low** band output to the main vocal track. Set **High** band output to a Reverb send.
- **Result**: The sibilance and air will have a beautiful tail, but the body of the vocal stays dry and punchy.

## 3. Mono-Sub Protocol
Guarantees your low-end is perfectly centered.
- **Technique**: Split at 150Hz.
- **Move**: On the **Low** band, use **Fruity Stereo Shaper** to force it to mono. Keep the Mids and Highs wide.
- **Verification**: Toggle the Master Mono button. The sub-bass should not change in volume at all.

## 4. Linear Phase Mastering
The most transparent way to clean a master.
- **Technique**: Select **Linear Phase** mode. Set Slope to **24dB**.
- **Move**: Use the **Gain** sliders on the bands to balance the mix.
- **Why**: This prevents the phase distortion that traditional EQs introduce when changing frequency balance.

## 5. Crossover Safety (Null Testing)
- **Protocol**: If you aren't sure if the splitter is "coloring" your sound.
- **Move**: Load two identical audio clips. Put Frequency Splitter on one. Invert the phase of the other. 
- **Goal**: If you hear silence (a perfect null), the splitter is 100% transparent. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Hollow" Midrange** | You are likely in **Minimum Phase** mode with a weird slope. Switch to **Linear Phase**. |
| **Pre-Ringing** | Linear Phase mode can make kicks sound "soft" before the hit. Switch to **Zero Latency** for drums. |
| **Out-of-Sync Audio** | Ensure **PDC (Plugin Delay Compensation)** is enabled in the FL Studio mixer. |
