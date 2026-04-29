# Rules: Gain Staging & Safety (Drumaxx)

Tags: gain-staging | mix-safety | dynamic-range

## 1. The "Pad Volume" Rule
Each pad in Drumaxx has its own volume, plus a Master output. 
- **Rule:** Never exceed -3dB on an individual pad before it hits the internal Drumaxx mixer. 
- **Why:** Physical modeling can create unpredictable resonant peaks. Leaving 3dB of headroom prevents internal clipping that sounds "harsh" rather than "saturated."

## 2. Low-End Mono Safety
If using Drumaxx for Kicks or low Percussion:
- **Rule:** Check the "Stereo" parameter. For Hip-Hop/Rap kicks, keep the low-frequency pads in **Mono**.
- **Why:** Wide low-end in Drumaxx can cause phase issues that make your 808s feel weak.

## 3. The "Decay vs. Tail" Safety
- **Rule:** If your drum patterns are fast (e.g., Trap hi-hats), ensure the **Decay** is set to a "Safe Zone" where tails don't overlap more than 50%.
- **Why:** Overlapping modeling calculations can spike CPU and create "muddy" build-ups in the mid-range.

## 4. "Avoid" List
- **Avoid 100% Velocity:** Unless you need a distorted "hit," keep your max velocity at 110. This allows the model to "breathe."
- **Avoid High "Material" on Kicks:** Keeping the Material knob below 40% ensures the kick stays "thumpy" and doesn't become "clanky."
