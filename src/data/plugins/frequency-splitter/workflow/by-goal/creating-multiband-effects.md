# Goal Workflow: Creating Multiband Effects (Patcher Mode)

*Goal: Designing a custom multiband saturator that distorts only the mids, while leaving the highs and sub clean.*

## 🎛️ Routing Context
- **Setup**: Open **Patcher**.
- **Nodes**: Frequency Splitter -> 3 Parallel Paths -> Output.

## 🚶 Step-by-Step Setup
1. **The Split**:
   - Add **Frequency Splitter** inside Patcher.
   - Set to **3-Band** mode. 
   - Set Crossover 1 to **150Hz**. Set Crossover 2 to **5kHz**.
   - Select **Linear Phase** for transparency.
2. **Path 1 (Clean Lows)**:
   - Connect the **Low** output of the splitter directly to the Patcher Output.
3. **Path 2 (Dirty Mids)**:
   - Add a **Distructor** plugin. 
   - Connect the **Mid** output of the splitter to the input of Distructor.
   - Connect Distructor output to the Patcher Output.
   - *Move*: Crank the distortion! It won't touch your sub-bass.
4. **Path 3 (Silky Highs)**:
   - Add a **LuxeVerb**.
   - Connect the **High** output of the splitter to LuxeVerb.
   - Set LuxeVerb to 100% Wet.
   - Connect LuxeVerb to the Patcher Output.
5. **Phase Check**:
   - Bypass Distructor and LuxeVerb.
   - Toggle the split on/off. The sound should not change *at all*.
6. **Result**: A professional, multi-stage processing rack that is customized exactly for your instrument.

## 🔄 Variations
- **The "Widen Air"**: Replace LuxeVerb with **Stereo Shaper** on the High band.
- **The "808 Tightener"**: Place a **Fruity Limiter** only on the Low band to stabilize the sub.

## ⚠️ Pitfalls & Fixes
- **Problem**: The split sounds "phasy" when recombined.
- **Fix**: Ensure all plugins in the paths are **Zero Latency** or that Patcher's internal PDC is active.
