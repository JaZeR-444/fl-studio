# Instrument Workflow: Sub Bass Stabilization (Phase Align)

*Goal: Ensuring your synthesized 3x Osc sub-bass works perfectly with your kick samples.*

## 🎛️ Routing Context
- **Setup**: One track for Kick (Sample) and one track for 3x Osc (Bass).

## 🚶 Step-by-Step Setup
1. **Reference the Kick**:
   - Play your kick sample.
2. **The 3x Osc Base**:
   - Use only Osc 1 set to **Sine**.
   - Set pitch to -24 semitones.
3. **Phase Matching**:
   - Slowly turn the **Phase Offset** knob on Osc 1 in 3x Osc.
   - *Test*: Listen to the moment where the kick and the sub-bass sound **Punchiest** together.
4. **The "Invert" Test**:
   - Click the **INV** switch on Osc 1.
   - If the bass sounds **louder** with INV on, leave it on. This means your oscillators were out of phase with the kick sample.
5. **Attack Calibration**:
   - In the INS -> VOL tab, increase **Attack** to roughly 10ms.
   - *Result*: This "delays" the entry of the sub-bass so the kick's initial "click" has 100% of the headroom.
6. **Result**: A kick and sub that feel like a single cohesive instrument.

## 🔄 Variations
- **The "Sidechain" Stabilizer**: Use Fruity Peak Controller on the Kick to duck the volume of 3x Osc for even more clarity.
- **The "High-End" Sizzle**: Add Osc 3 as White Noise at 2% volume to help the bass cut through on tiny laptop speakers.

## ⚠️ Pitfalls & Fixes
- **Problem**: Low end sounds "wobbly."
- **Fix**: You have two oscillators playing in the sub-range. Mute everything except **Osc 1**.
