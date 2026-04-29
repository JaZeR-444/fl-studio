# Creating Realistic Snares (Drumaxx)

## Goal
Design a responsive, natural-sounding snare drum that doesn't suffer from the "machine-gun" effect.

## Technical Steps
1. **Membrane Setup:**
   - Set **Material** to a high-medium value (snare skins are tightly stretched plastic).
   - Set **Shape** to Circular.
   - Adjust **Tension** to the desired fundamental note (usually around 200Hz for a standard snare).
2. **Mallet Interaction:**
   - Set **Mallet Noise** to ~60%. This simulates the impact noise and the "rattle" of the snare wires.
   - Adjust **Mallet Amplitude** for the desired "hit" strength.
3. **Velocity Matrix (The Key to Realism):**
   - In the **Velocity** tab, map MIDI Velocity to **Material**.
   - **Result:** Harder hits sound brighter and more metallic, just like a real snare.
   - Map Velocity to **Mallet Noise** so ghost notes have less rattle.
4. **Damping:**
   - Increase **Damping** to ~30% to simulate a studio snare with a dampening ring (moongel).

## Why it works
Real instruments change timbre based on how hard they are struck. By using the Velocity Matrix to modulate "Material" and "Noise," you break the static nature of samples and create a dynamic performance.
