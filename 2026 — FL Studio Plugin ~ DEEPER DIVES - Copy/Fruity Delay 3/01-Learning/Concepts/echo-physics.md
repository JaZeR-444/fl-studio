# Echo Physics and Feedback Loops

## The Speed of Sound
In physical space, an echo is a reflection of sound off a surface. The distance to the surface determines the **Delay Time**.
- 1ms of delay ≈ 1.1 feet (34cm) of distance.
- **Precedence Effect (Haas Effect):** If a delay is below ~35ms, the brain perceives the original and the echo as a single, thickened sound. Fruity Delay 3 can easily enter this territory for "widening" effects.

## Feedback Oscillation
When feedback exceeds 100%, each repeat is louder than the previous one.
- **Linear Feedback:** Results in digital clipping (harsh square wave).
- **Saturated Feedback (Fruity Delay 3):** As the signal builds, the internal **Saturation** engine rounds off the peaks. This creates a "controlled" self-oscillation that sounds like a vintage space echo.

## Pitch Shifting (Analog Mode)
In Analog mode, the delay buffer is read at a variable sample rate.
- Increasing the delay time during playback stretches the buffer, lowering the pitch.
- Decreasing the delay time compresses the buffer, raising the pitch.
- This mimics the **Doppler Effect** of a moving tape head or a BBD chip's clock speed.
