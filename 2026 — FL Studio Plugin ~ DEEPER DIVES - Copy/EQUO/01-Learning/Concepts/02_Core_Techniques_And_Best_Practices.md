# Core Techniques And Best Practices: EQUO

## 1. The "Vowel" Talkbox
Create a sound that sounds like it's saying "A-E-I-O-U."
- **Technique**: Draw 5 different vowel frequency shapes into Banks 1-5.
- **Move**: Automate the **Morph knob** to sweep through the banks.
- **Listen For**: The resonant "formant" frequencies that mimic human speech.

## 2. Low-End Discipline (The 808 Split)
Using EQUO to ensure your sub-bass stays mono.
- **Technique**: Set EQUO to **Pan** mode.
- **Move**: Drag the bars representing frequencies below 150Hz to the middle (Center). Spread the bars above 1kHz to the sides.
- **Result**: A mix that has a focused low-end but a wide, expensive-sounding top end.

## 3. The "Spectral Riser"
Create tension during a build-up.
- **Technique**: Set Bank 1 to flat. Set Bank 2 to a thin, resonant peak in the high-mids.
- **Move**: Automate the **Morph knob** from 1 to 2, and simultaneously automate the **Shift knob** from left to right.
- **Listen For**: A sweeping "whistle" that climbs in frequency.

## 4. Copying and Pasting Banks
Don't draw from scratch every time.
- **Technique**: Right-click a Bank number to find the **Copy/Paste** commands.
- **Benefit**: Create a basic "Low Pass" shape in Bank 1, paste it to Bank 2, and then just tweak Bank 2 slightly for a smooth morph.

## 5. Mono Translation Check
- **Protocol**: If you use the **Pan** mode to create width, always check the **Master Mono** button.
- **Failure Mode**: Over-panning specific frequencies can cause them to disappear entirely in mono if the phase cancels out.
- **Fix**: Reduce the **BW** (Bandwidth) knob to smooth out the phase relationships. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Harsh "Ringing"** | Lower the **BW** knob to widen the filter bands. |
| **Sound is too quiet** | You have cut too many frequency bands in **Vol** mode. Increase the **Mix** or **Gain**. |
| **Morph sounds "Steppy"** | Increase your PPQ settings in FL Studio or use a smoother automation curve. |
