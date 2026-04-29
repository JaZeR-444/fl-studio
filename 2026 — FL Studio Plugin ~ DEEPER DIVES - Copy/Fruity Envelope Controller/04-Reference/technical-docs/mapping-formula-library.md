# Mapping Formula Library (Master Tier)

## The Power of Formulas
When linking a parameter to an Articulator in Fruity Envelope Controller, the **Mapping Formula** determines the mathematical relationship between the control signal and the target knob.

### 1. The "Inverted Bounce" (Ducking)
- **Formula:** `1-Input`
- **Logic:** As the envelope rises, the target value drops.
- **Use Case:** Sidechaining a melody's volume to a 1/4 note pulse for that rhythmic "Trap bounce."

### 2. The "Subtle Drift" (Unstability)
- **Formula:** `0.45+(Input*0.1)`
- **Logic:** This limits the output range to a tiny window around the center (45% to 55%).
- **Use Case:** Link this to a synth's **Fine Pitch** using the **RND** articulator to mimic unstable analog oscillators.

### 3. The "High-End Scaler" (Energy Control)
- **Formula:** `Input*Input` (Parabolic)
- **Logic:** Low values stay low longer, and high values spike quickly at the end.
- **Use Case:** Link to Filter Cutoff. It makes the "filter opening" feel more aggressive and dramatic during a riser.

### 4. The "Step Quantizer" (Bit-Crush Effect)
- **Formula:** `Round(Input*10)/10`
- **Logic:** Forces the smooth 0-1 signal into 10 discrete steps.
- **Use Case:** Creating "stepped" filter sweeps that sound like vintage digital gear or robotic glitch effects.
