# Goal Workflow: Realistic Acoustic Drums (The Session Drummer)

*Goal: Using velocity layering to simulate the dynamic range of a real drum kit.*

## 🎛️ Routing Context
- **Routing**: FPC -> Multi-output Mixer setup.
- **Samples**: Requires a "Multi-Sampled" snare or kick (4+ variations).

## 🚶 Step-by-Step Setup
1. **The Snare Foundation**:
   - Select Pad 3 (Snare).
   - Drag 4 samples onto the pad: **Ghost**, **Soft**, **Medium**, **Hard**.
2. **Velocity Calibration**:
   - On the right, drag the **Velocity Handles** to create ranges:
     - Ghost: 0 - 40
     - Soft: 41 - 80
     - Medium: 81 - 110
     - Hard: 111 - 127
3. **Crossfading**:
   - Overlap the handles slightly (e.g., set Soft to 35 - 85).
   - *Result*: FPC will blend the two samples together during the overlap, making the transition feel natural.
4. **Volume Balancing**:
   - Adjust the **Vol** slider for the Ghost layer. It should be significantly quieter than the Hard layer.
5. **The Performance**:
   - In the Piano Roll, draw your main snare hits at 100 velocity.
   - Draw tiny "flams" and ghost notes at 30 velocity.
   - *Final Vibe*: The snare will sound like a physical instrument responding to how hard it is being hit.

## 🔄 Variations
- **The "Randomized" Hit**: Use the same velocity but enable the "Random" selector in the pad menu to cycle through different samples.
- **The "Rimshot" Layer**: Add a rimshot sample that only triggers at Velocity 127.

## ⚠️ Pitfalls & Fixes
- **Problem**: The snare sounds "phasy" when layers overlap.
- **Fix**: Adjust the **Tune** knob by a few cents or slightly nudge the sample start point.
