# Envelope Snapping Physics

## The "Snap" Factor
In DrumSynth Live, the "snap" of a kick or snare is determined by the relationship between the **Pitch Envelope** and the **Volume Envelope**.

### Physics of the Strike
1. **Compression Phase:** The moment the stick hits the drum head. Frequency is at its maximum (**Max Freq**).
2. **Expansion Phase:** The head begins to vibrate at its natural frequency (**Freq**).
3. **Result:** If the Pitch Envelope decay is too slow, the drum sounds like a "laser." If it's too fast (<10ms), it sounds like a "click." 

## Internal Filter Saturation
When **Resonance** is set above 70%, the internal filter starts to self-oscillate.
- **The Trick:** Turn **Noise** down to 0% and **Osc 1** down. Use the **Resonance** as the primary sound source.
- **Effect:** This creates a perfectly "pure" sine-wave percussion hit that sounds like an old analog drum machine (e.g., TR-808).
