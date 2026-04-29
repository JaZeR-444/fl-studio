# Goal Workflow: Transparency Guide (The Pro Split)

*Goal: Verifying that your frequency splitting is 100% transparent and not introducing phase distortion.*

## 🚶 Step-by-Step Setup
1. **The Source**:
   - Load a high-quality, full-range audio clip (like a finished song) into **Mixer Track 1**.
2. **The Splitter**:
   - Add **Frequency Splitter** to Mixer Track 1.
   - Set to **3-Band** mode. Set crossover to **200Hz** and **5kHz**.
   - Select **Linear Phase** mode.
3. **The Duplicator**:
   - Load the *exact same* audio clip into **Mixer Track 2**.
   - Ensure the volumes are perfectly identical.
4. **The Null Test (The Verification)**:
   - On **Mixer Track 2**, add a **Fruity Stereo Shaper**.
   - Select the "Invert" preset (or click the "Invert Left" and "Invert Right" phase buttons).
5. **The Silence**:
   - Press play.
   - If Frequency Splitter is transparent, you should hear **Absolute Silence**. 
   - *Logic*: The inverted Phase of Track 2 cancels out the original audio of Track 1.
6. **Testing Modes**:
   - While playing, switch Frequency Splitter to **Zero Latency**.
   - You will now hear a "hiss" or "whoosh" sound at the crossover points.
   - *Result*: This proves that **Zero Latency** mode is NOT transparent and introduces phase shift. Use it only when necessary.

## 🔄 Variations
- **Slope Test**: Toggle between 6dB and 96dB. Notice how the "ringing" volume increases at steeper slopes during the null test.
- **Master Check**: Perform this test on your master bus before rendering to ensure your final crossover isn't thinning out your sound.

## ⚠️ Pitfalls & Fixes
- **Problem**: I still hear the song during the null test.
- **Fix**: Check your **Gain** knobs in Frequency Splitter. They must be at exactly 0.0dB. Also, ensure no other plugins are active on Track 1.
