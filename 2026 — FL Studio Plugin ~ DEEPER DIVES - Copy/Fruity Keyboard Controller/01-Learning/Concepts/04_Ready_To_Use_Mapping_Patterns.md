# Concepts: Ready-To-Use Mapping Patterns

Standard performance configurations for the Keyboard Controller.

---

## 1. The "Resonant Step-Filter"
- **Logic**: Maps each octave to a specific filter "shelf."
- **Setup**: In the **Note Map**, use the "Staircase" preset.
- **Verification**: Link to a Filter Cutoff. C4 = 20%, C5 = 40%, C6 = 60%.
- **Use Case**: Creating rhythmic "stepped" filter movements popular in G-Funk and modern Trap.

## 2. "Heavy Pressure" Drive
- **Logic**: Distortion only appears when you smash the keys.
- **Setup**: In the **Velocity Map**, set all values to 0 except the very top (Velocity 110-127), which you set to 100%.
- **Verification**: Link to a Distortion Drive knob. Only your loudest MIDI notes will cause "snarling."
- **Use Case**: Adding aggression to the peaks of a melody.

## 3. The "Ghost" Reverb Swell
- **Logic**: High notes trigger a huge wash; low notes trigger nothing.
- **Setup**: In the **Note Map**, set a steep linear ramp starting at C6.
- **Verification**: Link to a Reverb's Wet knob.
- **Use Case**: Playing a melody where the "climax" notes naturally bloom into space.

## 4. Rhythmic Toggle (Kill-Switch)
- **Logic**: Use C5 to turn audio ON and C#5 to turn audio OFF.
- **Setup**: Note Map -> C5 = 1.0; C#5 = 0.0. All other notes set to 0.
- **Verification**: Link to a Mixer track's Volume.
- **Use Case**: Creating manual "Transform" scratch patterns or rhythmic gates.

## 5. Expressive Attack-Speed
- **Logic**: Link velocity to the Attack time of an envelope.
- **Move**: Note played harder = Shorter attack (snappy). Note played softer = Longer attack (ambient).
- **Verification**: Requires Patcher or linking to an internal envelope controller.
