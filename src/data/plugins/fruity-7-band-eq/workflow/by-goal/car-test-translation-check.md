# Goal Workflow: Car Test Translation Check (Consumer Proofing)

*Goal: Stress-testing your mix to see if it will fall apart on cheap car stereos or earbuds.*

## 🚶 Step-by-Step Setup
1. **The "Boom" Test**:
   - Boost the **63Hz** band to +6dB. 
   - *Logic*: Many car sub-woofers are "untuned" and over-emphasize the low end. 
   - *Check*: Does your mix distort or turn into a muddy mess? If so, you need to compress your 808 more on the desktop.
2. **The "Harsh" Test**:
   - Boost the **3000Hz** band to +4dB.
   - *Logic*: Cheap earbud speakers often have a "spike" in this range.
   - *Check*: Is the vocal hurting your ears? If it is, you need to de-ess the lead vocal more aggressively.
3. **The "Mono" Check**:
   - Set the Mixer track to Mono while the EQ is active.
4. **Final Decision**:
   - If your mix still sounds "okay" under these extreme conditions, it is likely ready for release.
5. **Reset**: Always disable this EQ before you do your final render!

## 🔄 Variations
- **The "Laptop" Simulation**: Cut **63Hz** and **250Hz** entirely. Can you still hear the "key" of your 808? If not, you need to add more saturation to the bass.
- **The "Mall" Simulation**: Boost **1500Hz** and add a massive Reverb tail.

## ⚠️ Pitfalls & Fixes
- **Problem**: I forgot to turn the EQ off.
- **Fix**: Label the plugin instance "!! TEST ONLY !!" in the mixer slot.
