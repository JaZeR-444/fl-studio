# IEF Sensitivity & Detection: How it Thinks

The heart of the Transient Processor is the **IEF (Input Envelope Follower)**. [SRC: IL-MAN-10]

## The "Slope" Detection Logic:
Unlike a compressor that looks for a "Threshold" volume, the IEF calculates the **First Derivative** of the amplitude.
- **Attack Detection:** It identifies when the volume is increasing at a rate faster than its internal "Transient Coefficient."
- **Release Detection:** It identifies when the volume is decreasing at a rate faster than its "Sustain Coefficient."

## Advanced Research Insights:

### 1. Sensitivity vs. Velocity
Because it looks at the *rate of change* (slope) rather than the *absolute level*, a quiet snare hit and a loud snare hit will receive the same amount of "Snap" boost. This makes it far more consistent than a compressor for humanized drum parts.

### 2. The "Sub-Flutter" Artifact
In very low frequencies (below 80Hz), the wavelength is so long that the IEF can mistake the "cycles" of the sub-bass wave for individual transients.
- **Audible Symptom:** A rapid, "fluttering" distortion or crackling.
- **The Fix:** This is why the **Split Frequency** slider exists. By moving it to 150Hz, you tell the IEF to stop trying to detect transients in the "slow" sub-waves.

### 3. Masking Management
In a busy mix, loud sounds can "mask" the transients of quiet sounds. 
- **Tip:** If the Processor isn't reacting to your snare, check if there is a loud, constant pad on the same mixer track. The IEF needs clear "silence" or lower levels between hits to reset its slope calculation.
