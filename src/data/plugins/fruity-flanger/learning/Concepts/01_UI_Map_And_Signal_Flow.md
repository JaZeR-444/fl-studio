# UI Map And Signal Flow: Fruity Flanger

## UI Tour
Fruity Flanger uses a traditional knob-and-switch interface divided into modulation and feedback sections. [SRC: IL-MAN]

### 1. Delay & Depth (The "Width" of the Sweep)
- **Delay**: Sets the center time of the delay line. Lower values result in higher-pitched resonances.
- **Depth**: Sets how far the LFO moves the delay around the center. High depth creates a wider frequency sweep.

### 2. LFO Section (The Movement)
- **Rate**: The speed of the modulation.
- **Phase**: Adjusts the phase offset between the Left and Right channels. Crank this for extreme stereo widening.
- **LFO Shape**: Typically Sine or Triangle.

### 3. Feedback Section (The "Metal")
- **Feed (Feedback)**: Feeds the output back to the input.
- **Invert Feedback (INV FB)**: Inverts the polarity of the feedback. Positive feedback sounds metallic; negative (inverted) feedback sounds hollow or woody.
- **Dry/Wet/Cross**: Mix knobs for the dry signal, the flanged signal, and the "cross-panned" signal.

## Signal Flow
1. **Input**: Signal enters the plugin.
2. **Split**: Signal splits into **Dry Path** and **Wet Path**.
3. **Wet Path (Delay Line)**: The signal enters a short delay (controlled by **Delay** knob).
4. **LFO Modulation**: The delay time is modulated back and forth (controlled by **Rate** and **Depth**).
5. **Feedback Loop**: A portion of the modulated signal is sent back to the start of the delay line (controlled by **Feed**).
6. **Inversion**: If selected, the feedback signal's phase is flipped.
7. **Summing**: Dry and Wet paths are mixed at the output.

## Things Beginners Misunderstand
- **"The Bass Disappeared"**: Flanging uses phase cancellation. If the delay is very short, it will cancel out low frequencies. Use a high-pass filter before the flanger or mix it in parallel.
- **"It's just a chorus"**: While they are related, flangers use much shorter delays (<10ms) than chorus plugins (~20-50ms), leading to the distinct "whistle" or "ring".
- **The "Cross" Knob**: This isn't just a mix knob; it mixes the flanged signal of one channel into the other channel, increasing stereo complexity.
