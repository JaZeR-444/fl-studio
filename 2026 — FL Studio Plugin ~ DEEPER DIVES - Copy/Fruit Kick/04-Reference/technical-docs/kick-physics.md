# Frequency Sweep Physics in Drum Synthesis

## The "Kick" Formula
A kick drum is essentially a **Pitch Sweep** combined with a **Volume Envelope**. 
Fruit Kick automates this relationship:
1. **The Transient:** The initial transition from `Max Freq` to `Freq` happens extremely fast. This creates the "pop" or "click" sound.
2. **The Body:** As the sweep slows down, it reaches the `Freq` value, where it stays for the duration of the `Decay`.

## Decay Logic
In Fruit Kick, the **Decay** parameter is a "Dual Envelope":
- It controls the **Volume Decay** (how long it takes for the sound to fade out).
- It controls the **Pitch Decay** (how long the sweep takes to reach the final frequency).
- **Result:** Longer kicks have "lazier" pitch drops, which can sound "boomy" or "woofy". Shorter kicks have "snappier" drops.

## The Distortion Engine
The **Dist** parameter adds non-linear saturation. 
- At low settings, it adds warmth (low-order harmonics).
- At high settings, it starts to square off the sine wave. A square wave has much more energy in the "mids", which makes the kick audible on speakers that can't reproduce the sub-fundamental.
