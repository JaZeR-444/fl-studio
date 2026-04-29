# Sampling Ratio Mechanics

The **Sampling Ratio** knob in BassDrum is not a standard pitch or quality control; it is an internal sample rate divider.

## Technical Behavior
- **Max (Right):** The plugin runs at the host sample rate (e.g., 44.1kHz). Pure, clean tones.
- **Reduction (Left):** The internal processing rate drops. This introduces **Aliasing**.

## Creative Aliasing
Aliasing occurs when frequencies exceed half the sampling rate. In BassDrum, these "reflected" frequencies manifest as metallic ringing or digital "grit."
- **Techno/Industrial:** Turning the knob to 25-50% creates the signature "crunchy" texture found in Hardstyle and Industrial Techno.
- **Sub Bass:** Keep the knob at Max for clean 808s. Any reduction will add harmonics that may muddy the sub-frequencies.
