# Technical Reference: Chorus Mode Analysis

Deciphering the legendary JUNO-style chorus in Kepler. [SRC: IL-MAN], [SRC: REPUTABLE]

## The Chorus Philosophy
The chorus in Kepler isn't just an effect; it's a stereo-generator designed to compensate for the single-oscillator architecture. It uses two LFO-modulated delay lines to create a wide, lush, and slightly detuned sound.

## Mode I: The "Subtle Drift"
- **Rate:** ~0.4 Hz (Slow).
- **Depth:** Moderate.
- **Character:** Gentle, organic, and widening.
- **Best For:** Pads that need to feel "stable," Basslines that need a bit of air, and subtle vocal-like synth leads.

## Mode II: The "Active Ensemble"
- **Rate:** ~0.6 Hz (Faster).
- **Depth:** Deeper.
- **Character:** Energetic, "wobbly," and significantly wider.
- **Best For:** Energetic Leads, Arpeggios, and "Super-JUNO" pads where you want the detuning to be an obvious feature.

## Mode I+II: The "Secret" Mono-Grit Mode
On the original hardware, pressing both buttons simultaneously created a unique effect. Kepler emulates this.
- **Rate:** A specific combination rate.
- **Depth:** High.
- **Character:** Much more aggressive, gritty, and noisy.
- **Best For:** Bass sounds that need to "growl," lo-fi textures, and industrial sound design.
- **Note:** This mode is significantly noisier by design, mimicking the DC-bias issues of the original hardware.

## Mix Integration Tips
1. **Mono Compatibility:** The JUNO chorus is famous for sounding great in stereo but potentially causing "thinning" in mono. Always check the Mono button in the FL Studio wrapper.
2. **Gain Staging:** The chorus can add significant peak volume. If your Kepler output is clipping, lower the **VCA Level** slider before trying to fix it with a limiter.
3. **External FX:** Sometimes, turning Kepler's chorus **OFF** and using **Hyper Chorus** instead allows for even more modern density (8 voices vs 2).

---
*For a quick guide on these settings, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](../01-Learning/Quick-Reference/parameter-cheat-sheet.md).*
