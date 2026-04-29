# Psychoacoustic Stereo Theory: Why Spreader is Safe

Traditional stereo widening usually relies on the **Haas Effect** (Delaying one side by 5-30ms) or **Phase Inversion**. Both of these cause massive problems when summed to mono (Phasing/Comb filtering). [SRC: REPUTABLE-08]

## Spreader’s Advanced Approach:

### 1. Complementary Comb Filtering
- Instead of just delaying a signal, Spreader uses a bank of filters that "sculpt" the L/R signals so that where one has a peak, the other has a dip. 
- **The Research Result:** When these signals are combined (Mono), the peaks and dips perfectly fill each other, returning the signal to its original state.

### 2. Frequency-Dependent Widening
- Spreader recognizes that our ears cannot perceive direction well in low frequencies.
- **The Lever:** The **Low Bypass** slider prevents the plugin from wasting processing power (and causing phase blur) on frequencies below 150Hz.

### 3. Localization Consistency
- Unlike a Chorus effect, Spreader doesn't "wobble" the pitch. It keeps the **Virtual Center** stable.
- **Production Value:** This is why it’s the best choice for Lead Vocals. You get the width without the singer sounding like they are "moving" or "pitchy."
