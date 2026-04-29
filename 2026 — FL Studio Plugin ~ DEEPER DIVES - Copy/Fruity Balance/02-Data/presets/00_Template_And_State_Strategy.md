# Template & State Strategy: Fruity Balance

## 1. The "Clean Mix" Template
- **Placement:** Mixer Slot 10 on EVERY track.
- **Logic:** All artistic volume changes are done here. The Mixer Faders are used ONLY for the initial static balance.
- **Benefit:** When you need to turn the whole song down by -3dB for a label export, you can just select all faders and move them without breaking any automation clips.

## 2. The "Pre-Drive" Wrapper
- **Placement:** Directly before **Fruity Blood Overdrive**.
- **State:** Volume set to -inf by default.
- **Use:** Swell the volume to "feed" the distortion unit, creating a dynamic saturation effect.

## 3. The "Mono-Safe" Pan Bus
- **Placement:** On a parallel bus.
- **Routing:** Split signal into two instances. Invert the Pan on one.
- **Result:** Precise control over the "Difference" signal without affecting the "Sum." [SRC: REPUTABLE]
