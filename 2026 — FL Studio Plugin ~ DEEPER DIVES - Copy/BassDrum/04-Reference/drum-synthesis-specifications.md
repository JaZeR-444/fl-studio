# Technical Reference: Drum Synthesis Specifications

A detailed look at the BassDrum engine and performance specs. [SRC: IL-MAN]

## 1. The Sine Engine
- **Oscillator Type**: Band-limited sine generator with fast pitch tracking.
- **Pitch Range**: Covers the full audible sub-spectrum (20Hz - 2kHz).
- **Interpolation**: High-fidelity cubic interpolation for the sample layer.

## 2. Sample Handling
- **Internal Content**: Includes a proprietary library of noise bursts and percussive transients.
- **Import**: Supports WAV and AIFF files for custom transients.
- **Offset Resolution**: Millisecond-accurate timing for sample alignment.

## 3. The Drive Algorithms
- **Soft**: Asymmetric saturation mimicking analog tape.
- **Hard**: Digital hard-clipping for extreme loudness.
- **Tube**: Emulation of a triode preamp circuit with emphasis on even-order harmonics.

## 4. Resource Usage
- **CPU Footprint**: Extremely low. 
- **Latency**: Zero latency (suitable for live drumming and tracking).
- **Polyphony**: Monophonic per instance. (Each kick hit re-triggers the envelope from the start).
