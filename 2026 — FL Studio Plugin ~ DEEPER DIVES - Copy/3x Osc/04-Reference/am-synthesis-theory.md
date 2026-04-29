# AM Synthesis Theory in 3x Osc

## What is AM?
**Amplitude Modulation (AM)** is a synthesis technique where the amplitude (volume) of one signal is modulated by another signal.

## How 3x Osc Implements AM
When the **"AM" switch** on Oscillator 3 is enabled:
- **Oscillator 3** becomes the **Modulator**.
- **Oscillators 1 and 2** become the **Carriers**.

## Sonic Characteristics
- **Audio Rate Modulation:** If Oscillator 3 is set to a high frequency (audible range), it creates sidebands—additional frequencies that weren't in the original sound.
- **Timbres:** AM in 3x Osc is excellent for creating metallic, bell-like, or "robotic" sounds that are hard to achieve with standard subtractive synthesis.
- **Pitch Relationship:** The frequency of the sidebands is determined by the sum and difference of the Carrier and Modulator frequencies.

## Controls
- **Pitch of Osc 3:** Controls the "speed" or frequency of the modulation.
- **Volume of Osc 3:** Controls the "depth" or intensity of the modulation.
