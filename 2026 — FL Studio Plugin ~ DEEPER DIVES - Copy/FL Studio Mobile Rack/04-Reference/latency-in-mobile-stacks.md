# Technical Reference: Latency in Mobile Stacks

Understanding timing and resource management within the rack. [SRC: IL-MAN]

## 1. Cumulative Latency
Every module added to the rack carries a small mathematical "cost." 
- While most modules are zero-latency, complex effects like **Auto-Pitch** or high-unison **Chorus** may introduce a microscopic delay.
- **PDC Integration**: FL Studio Desktop automatically compensates for the latency of the *entire plugin instance*. You do not need to manually align tracks unless PDC is disabled in your mixer.

## 2. CPU vs Module Order
- **Rule**: Place heavier modules (Synths, Reverbs) at the top or bottom of the chain to ensure the CPU can process the serial chain efficiently.
- **Verification**: If you hear "crackle" when adding a module, check the FL Studio **CPU Meter**. Stacking 10+ modules may require a larger audio buffer.

## 3. Mono/Stereo Phase Risks
- Modules like **Spacer** and **Stereoizer** work by shifting the phase of the left or right channels.
- **The Risk**: If you follow these with a **Distortion** or **Leveller**, you can "lock in" phase cancellation, making the sound disappear in mono.
- **Strategy**: Always check the mono translation *after* adding a spatial module to the rack.

## 4. Automation Smoothing
- Parameters inside the rack are optimized for touch. When automating from the desktop, use **Automation Clips** with a "Hold" or "Smooth" curve to avoid digital "zipper noise" during fast sweeps.
