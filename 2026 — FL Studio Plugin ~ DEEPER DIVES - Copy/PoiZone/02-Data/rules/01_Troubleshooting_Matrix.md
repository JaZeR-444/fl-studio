# Troubleshooting Matrix

| Symptom | Probable Cause | The Fix |
| :--- | :--- | :--- |
| **"Sound is pulsing/moving"** | PWM or Phasing. | Check if LFO is modulating Pulse Width, or if two detuned oscillators are canceling each other out (Beating). |
| **"Rhythm is off beat"** | Trance Gate steps. | The Trance Gate grid is 16 steps (1 bar). Ensure you are playing on the "1" count. |
| **"Reverb cuts off abruptly"** | Gate position. | The Gate chops the *output*. Disable internal Reverb/Delay and use external FX if you want tails *after* the chop. |
| **"Arp not playing"** | Sync settings. | Ensure FL Studio is playing or the Wrapper settings are correct. |
