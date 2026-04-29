# Core Techniques And Best Practices: Fruity Balance

## 1. The "Fader Guard" Strategy
- **Technique:** Never automate the actual Mixer Faders. Always use Fruity Balance for volume changes.
- **Why:** If you automate the fader, you can't easily turn the whole track down later to make room for the Kick. With Balance, your fader stays free for "Global Leveling." [SRC: REPUTABLE]

## 2. Input Drive (Saturation Staging)
- **Technique:** Place Balance *before* **Fruity Blood Overdrive** or **Fruity Soft Clipper**.
- **Execution:** Automate the Volume knob to boost (+3dB) during high-energy sections.
- **Result:** You "drive" the distortion unit harder, creating more harmonics during the chorus without changing the perceived volume (if compensated at the output).

## 3. The "Tail-Safe" Mute
- **Technique:** Place Balance *before* a Delay or Reverb.
- **Execution:** Automate Volume to 0 to "mute" the instrument.
- **Benefit:** The instrument stops playing, but the Delay and Reverb tails continue to ring out naturally. Muting the mixer track would cut them off abruptly. [SRC: REPUTABLE]

## 4. Manual Sidechain Ducking
- **Technique:** Draw a sharp "dip" in the automation clip synchronized with every Kick hit.
- **Why:** This is more precise than a compressor. You can shape the "bounce" exactly to the vibe of the track (e.g., a "Moody" slow return vs an "Upbeat" fast snap).

## Common Pitfalls + Fixes
- **Pitfall:** "The volume boost is causing digital clipping."
  - **Fix:** Keep the Volume knob at or below the default (center) position. Use it for *attenuation* (cutting) more than *amplification*.
- **Pitfall:** "The panning sounds 'thin'."
  - **Fix:** Balance is a simple gain-based panner. For a wider, more natural stereo image, use **Fruity Stereo Shaper** with a tiny delay (Haas effect).
