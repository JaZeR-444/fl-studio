# Visual Coding Basics: Stream vs. Event

## The Core Concept
The most common mistake in SynthMaker is confusing **Streams** and **Events**. Understanding the difference is the key to building stable plugins. [SRC: REPUTABLE-09]

## 1. Streams (Audio Speed)
- **Color:** Blue or White.
- **Speed:** Sample Rate (44,100 times per second).
- **Use:** Oscillators, Filters, Delays, Distortion.
- **Mental Model:** A constantly flowing river of water.

## 2. Events (Control Speed)
- **Color:** Green.
- **Speed:** Only when something changes (Triggered).
- **Use:** MIDI Notes, Knob movements, Toggle switches.
- **Mental Model:** A light switch being flipped on or off.

## 3. How to Connect Them:
You cannot directly plug a Green wire into a Blue wire.
- **Event to Stream:** Use a "Float to Stream" or "Envelope" node. This takes a single value (e.g., 50% volume) and applies it to every sample in the audio stream.
- **Stream to Event:** Use a "Stream to Float" or "Peak Follower" node. This takes the audio signal and converts it into a control value (e.g., used for making a light flash in time with the music).

## The Hierarchy of Building:
1. **Define Input:** Start with a MIDI In node (Green).
2. **Logic:** Use Green nodes to calculate frequency/pitch.
3. **Synthesis:** Use Blue nodes to create the sound.
4. **GUI:** Use Yellow/Visual nodes to control the Green values.
