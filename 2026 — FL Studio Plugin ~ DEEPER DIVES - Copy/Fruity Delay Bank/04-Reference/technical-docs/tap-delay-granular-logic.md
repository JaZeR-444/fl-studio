# Tap Delay Routing & Granular Logic

## Tap Delay Architecture
Fruity Delay Bank is a "Tap Delay" on steroids.
- In a standard delay, you have one buffer.
- In a tap delay, you have multiple "read heads" (Taps) looking at that same buffer or independent buffers.
- **Delay Bank** provides 8 independent buffers, allowing for complex serial/parallel routing.

## The Granular Engine
The **Grain** parameter introduces granular synthesis into the feedback loop.
- **Mechanism:** It divides the delay buffer into small "grains" (windows of audio).
- **Effect:** Instead of a smooth echo, you hear a "shimmering" or "stuttering" tail.
- **Use Case:** This is excellent for sound design where you want to hide the "rhythmic" nature of a delay and turn it into a texture.

## Internal Modulation (The "Mod" section)
Each bank has its own LFO.
- Modulating the **Time** creates chorus and flanging effects.
- Modulating the **Filter** creates wah-wah or "vocal" vowel movements in the echoes.

## Optimization
Running 8 independent filtered delays with envelopes and modulation is CPU intensive.
- **Tip:** Always disable banks that are not in use (the green LED).
- **Tip:** If using it as a Send effect, keep the **Dry** signal at 0% to avoid phase issues with the original track.
