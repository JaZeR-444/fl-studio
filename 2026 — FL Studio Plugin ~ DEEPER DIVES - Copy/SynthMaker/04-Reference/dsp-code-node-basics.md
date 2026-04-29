# DSP Code Node Basics: The Assembly of Sound

The **DSP Code** node in SynthMaker allows you to bypass visual wires and write optimized math for the Stream (audio) path. [SRC: FLOW-DOC]

## Why use Code Nodes?
Connecting 50 math primitives uses more CPU than writing a single code node. It also allows for "Logic" (If/Then statements) inside the audio stream.

## Essential Code Logic:

### 1. The Simple Clipper (Distortion)
```
// x is input, y is output
y = x;
if (y > 1) y = 1;
if (y < -1) y = -1;
```
- **Production Value:** Building a custom clipper for **Trap drums** that doesn't "mush" the transients.

### 2. Pitch to Frequency
```
// MIDI Note to Hz conversion
// note is input, freq is output
freq = 440 * pow(2, (note - 69) / 12);
```
- **Research Note:** This is the core math behind every synthesizer in FL Studio.

### 3. The "Pseudo-Random" Drift
```
// Adding analog instability
drift = (rand() - 0.5) * 0.01;
pitch = base_pitch + drift;
```
- **Vibe Value:** Essential for adding **Moody** and **Jazzy** life to a digital oscillator.

## Safety Rules:
- **Never** divide by zero in a Stream node; it will crash the FL Studio bridge.
- Always use **Float** variables for audio data.
