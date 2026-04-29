# Multi-Band Distortion Workflow (Patcher)

## Goal
Apply heavy distortion to the mid-range of a bass synth while keeping the sub-frequencies clean and the highs crisp.

## Requirements
- **Patcher** (inserted on the mixer track).
- **Frequency Splitter**.
- **Fruity Blood Overdrive** (or your favorite distortion).

## Steps
1. **Patcher Routing:**
   - Load **Frequency Splitter** inside Patcher.
   - Set it to **3-Band Mode**.
   - Right-click the Splitter -> **Outputs** -> **Audio** -> Activate **Low**, **Mid**, and **High**.
2. **Frequency Alignment:**
   - Low/Mid Crossover: **180Hz**.
   - Mid/High Crossover: **3000Hz**.
3. **Processing the Mids:**
   - Add **Fruity Blood Overdrive**.
   - Connect the **Mid** output of the Splitter to the input of the Overdrive.
   - Connect the Overdrive output to the **Patcher Output**.
4. **Processing the Lows/Highs:**
   - Connect the **Low** output directly to the **Patcher Output** (Clean Sub).
   - Connect the **High** output directly to the **Patcher Output** (Clean Highs).
5. **Balancing:**
   - Adjust the **Mid Gain** on the Frequency Splitter if the distortion makes the mid-range too loud.
   - Use a **Fruity Limiter** at the very end of the Patcher chain to glue everything together.

## Pro Tip
You can also add a **Fruity Chorus** only to the High band to add width without making the bass muddy or losing mono compatibility in the sub.
