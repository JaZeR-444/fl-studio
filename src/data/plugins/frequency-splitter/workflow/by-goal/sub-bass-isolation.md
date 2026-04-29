# Goal Workflow: Sub-Bass Isolation (Club Control)

*Goal: Separating the sub-bass (80Hz and below) from the rest of the mix to apply surgical limiting and mono-correction.*

## 🎛️ Routing Context
- **Routing**: Bass/808 Track -> Frequency Splitter.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **Define the Sub**:
   - Set to **2-Band** mode (Low / High).
   - Set **Cutoff Frequency** to **90Hz**.
   - *Logic*: This isolates the foundational "sub" weight.
2. **The Slope**:
   - Select **48dB** or **96dB** slope.
   - *Why*: You want a sharp "brickwall" separation so no kick drum harmonics bleed into your sub processing.
3. **The Mode**:
   - Use **Linear Phase** if this is for a finished track.
   - Use **Zero Latency** if you are playing it live.
4. **Processing the Sub**:
   - Mute the High band. 
   - Add a **Fruity Limiter** after the splitter.
   - Set a fast Attack and moderate Release to stabilize the volume of the sub-notes.
5. **Re-blending**:
   - Unmute the High band.
   - Adjust the **Gain** of the Low band until the bass feels solid and consistent.
6. **Mono-Check**: Switch to Mono. The sub should remain 100% stable.

## 🔄 Variations
- **The "Dynamic Sub"**: Use a **Peak Controller** on your Kick drum to automate the **Gain** of the isolated Low band in Frequency Splitter.
- **The "High-End Grit"**: Distort ONLY the High band (>90Hz) to add presence while the sub stays clean.

## ⚠️ Pitfalls & Fixes
- **Problem**: The split point sounds "clicky."
- **Fix**: Lower the slope to **24dB**. Extremely steep slopes (96dB) can sometimes create audible ringing.
