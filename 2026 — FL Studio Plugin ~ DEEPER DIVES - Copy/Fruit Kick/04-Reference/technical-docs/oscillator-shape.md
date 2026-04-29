# Fruit Kick Oscillator Shape

## Waveform Analysis
Fruit Kick uses a single sine wave oscillator with a pitch envelope.

## Pitch Envelope (Sweep)
The "kick" sound is created by rapidly sweeping the pitch from **Max Freq** down to **Freq**.
- **Linear vs. Exponential**: The sweep is logarithmic, mimicking the natural physics of a drum head being struck.

## Harmonic Distortion
The **Dist** parameter adds odd harmonics to the sine wave, effectively pushing it towards a soft-clipped square wave. This increases perceived loudness without increasing peak levels significantly.
