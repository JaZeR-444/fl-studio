# Technical Reference: Synthesis Specifications

A detailed look at the 3x Osc engine and capabilities. [SRC: IL-MAN]

## 1. Oscillator Resolution
- **Type**: Band-limited oscillators.
- **Waveforms**: 7 internal (Sine, Triangle, Sawtooth, Square, Pulse, Rounded Saw, Noise).
- **Interpolation**: High-quality sinc-interpolation for pitch shifting.

## 2. Modulation Matrix (The Wrapper)
Modulation is handled by the FL Studio Channel Wrapper, not the generator itself.
- **Envelope Resolution**: Millisecond accuracy based on PPQ (Pulse Per Quarter) project settings.
- **LFO Waveforms**: Sine, Triangle, Square, Saw, Random.
- **Filter Order**: Usually 12dB or 24dB depending on the algorithm selected (Fast LP, Vanilla, etc.).

## 3. CPU Footprint
- **Resource Usage**: Negligible. 3x Osc is one of the most efficient synthesizers ever created.
- **Polyphony**: Theoretically unlimited (restricted only by FL Studio's global voice limit).

## 4. Aliasing
- Because the oscillators are band-limited, 3x Osc has very low aliasing at high frequencies compared to other "budget" synths.
- **Verification**: To hear aliasing, turn off all filters and play a Sawtooth wave at the very top of the keyboard (C8+). 3x Osc remains remarkably clean.
