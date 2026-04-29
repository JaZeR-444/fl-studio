# Data: X/Y Mapping Logic (Effector)

Tags: creative-fx | parameters | automation

## 1. The X/Y Axis Universal Rule
In almost every mode, the X/Y pad follows this logic:
- **X-Axis (Horizontal):** Usually controls **Frequency** or **Time**. 
- **Y-Axis (Vertical):** Usually controls **Feedback**, **Modulation Depth**, or **Intensity**.

## 2. Mode-Specific Mapping Cheat Sheet
| Mode | X-Axis Control | Y-Axis Control | Vibe Note |
| :--- | :--- | :--- | :--- |
| **DIST** | Distortion Amount | Low Pass Filter | Gritty Trap 808s |
| **LOFI** | Sample Rate | Bit Depth | Boom Bap Texture |
| **VOX** | Formant Shift (A-E-I-O-U) | LFO Speed | Robotic R&B Vocals |
| **TRANS** | Stutter Rate (1/4 to 1/32) | Gating Envelope | EDM/Trap Drops |
| **PHAZ** | Phaser Speed | Feedback Amount | Swirling Melodic Pads |

## 3. Automation "Safe Starting Zones"
- **The "Radio" Build-up:** Select **BP (Band Pass)**. Start at (X: 0%, Y: 50%). Automate X from 0% to 100% over 4 bars to "sweep" the frequency up before a drop.
- **The "Sludge" Bass:** Select **DIST**. Set Y to 20% (Dark). Automate X between 40% and 70% to add rhythmic "growl" to a long bass note.

## 4. Automation Behavior
- **Stepped vs. Smooth:** Effector's X/Y pad is **Stepped** in some modes (like TRANS). If you want smooth stutter speed changes, use an automation clip with a "Curve" type rather than a "Slide" type.
- **Macro Candidates:** Link the **Bypass** button to a Controller. It’s better to "tap" the effect in than to leave it running with automation.
