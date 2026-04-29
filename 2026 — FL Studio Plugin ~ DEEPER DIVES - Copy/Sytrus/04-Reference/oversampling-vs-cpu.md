# Oversampling vs. CPU: The FM Trade-off

## What is Oversampling?
FM synthesis (Frequency Modulation) produces a massive amount of high-frequency harmonics. If these harmonics go above the Nyquist frequency (half your sample rate), they "alias" and fold back into the audible range as unpleasant digital noise. [SRC: IL-MAN-09]

## Oversampling in Sytrus:
Sytrus allows you to multiply the internal sample rate by 2x, 4x, ... up to 64x.
- **Pros:** Significantly cleaner high-end, zero aliasing on bright bells and leads, "smoother" FM modulation.
- **Cons:** **Massive CPU Load.** At 64x, a single note can hit your CPU harder than an entire project.

## Workflow Rules for Hip-Hop Producers:
1. **Real-time (Playback):** Set to 2x or 4x. This gives you a good idea of the sound without lagging your FL Studio session.
2. **Drafting:** If your CPU is struggling, set Real-time to 1x.
3. **Render (Export):** Set to 16x or 32x. This ensures the final WAV file is crystal clear. 
4. **The "Bells" Rule:** For high-frequency FM bells, ALWAYS use at least 8x oversampling during render. 
5. **The "Bass" Rule:** For sub-bass, 2x oversampling is usually sufficient as there are few high-frequency harmonics to alias. [SRC: IL-MAN-09]