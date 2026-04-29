# Troubleshooting Matrix

| Symptom | Likely Cause | Fix | Verify |
| :--- | :--- | :--- | :--- |
| **Sound is too sharp/harsh** | `Exciter Amount` or `Resonance` too high. | Lower Exciter or increase `Damping`. | Ears: Sound should be smoother. |
| **Notes don't sustain** | `Damping` is killing the vibration. | Lower `Damping` or increase `Decay`. | Note should ring out for 2+ seconds. |
| **Sound is "thin" or "weak"** | `Resonator Gain` is low or `Mix` is too dry. | Increase Resonator Mix and Gain. | Sound should feel "heavy" and "physical." |
| **"Whistling" or "Ringing"** | Resonator `Resonance` is too high at a specific freq. | Lower `Resonance` or adjust `Tuning`. | The ringing should disappear. |
| **Pitch sounds weird** | `Tension` envelope is too deep. | Lower the `Tension` amount or time. | Note should hit the pitch immediately. |
| **CPU Spikes** | Too many active resonators or high polyphony. | Reduce Resonator count; limit max voices. | Check FL CPU meter. |