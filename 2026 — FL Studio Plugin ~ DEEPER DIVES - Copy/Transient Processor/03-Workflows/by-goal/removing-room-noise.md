# Goal: Removing Room Noise

## Goal Statement
Clean up a "roomy" or "reverberant" sample (Vocal, Piano, or Drum Break) by suppressing the sustain/tail of the sound.

## Step-by-Step Setup
1. **Focus:** Solo the track you want to clean up.
2. **Histogram:** Look at the **Histogram**. Identify the "tail" portion of the waveform (the fading part after the hit).
3. **Release:** Turn the **Release** knob down aggressively (e.g., -8dB to -12dB).
4. **Fine-Tuning:** Watch the bottom meter. The processing should "dip" immediately after the transient hit.
5. **Attack Preservation:** If the sound feels too "dead," increase the **Attack** by +2dB to restore some of the original clarity.
6. **Bypass:** Set **Split Freq** to 400Hz. Most room noise is in the mid-range; keeping the low-end unaffected prevents the plugin from "pumping."

## What to Listen For
- The reverb tail should fade out faster than the original.
- The instrument should sound "closer" and "dryer."
- Consonants (in vocals) should stay clear and sharp.

## Verification Checklist
- [ ] Toggle Bypass: Is the reverb noticeably shorter?
- [ ] Check Level: Did the sound get too quiet? (Adjust Gain).
- [ ] Artifact Check: Do you hear any "chattering" or "pulsing"? (Reduce Release cut).