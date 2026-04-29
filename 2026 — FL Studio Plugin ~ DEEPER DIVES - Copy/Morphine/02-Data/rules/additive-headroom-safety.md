# Rules: Additive Headroom Safety (Morphine)

Tags: additive-synthesis | mix-safety | harmonic-series

## 1. The "Harmonic Build-up" Rule
In Additive synthesis, each harmonic adds physical volume.
- **Rule:** When adding high-frequency harmonics (Partial 16+), lower the **Master Gain** of the Generator by **3-5dB**.
- **Why:** High harmonics are psychoacoustically "perceived" as louder, but they also take up massive amounts of digital peak headroom. If you don't lower the gain, the synth will sound "screechy" and clip the mixer.

## 2. Velocity-to-Level Rule
- **Rule:** Always link **Velocity** to **Harmonic Level** (not just Master Volume).
- **Why:** Real organic instruments get "brighter" as they get louder. If you only link velocity to volume, the instrument sounds like a static recording. Linking it to harmonic level creates an organic, soulful response for R&B Rhodes or Pads.

## 3. Resynthesis Sample Rate Rule
- **Rule:** Only resynthesize samples that are **Dry** (No reverb/delay).
- **Why:** Morphine attempts to recreate everything in the audio file. If there is reverb in the sample, Morphine will create "noisy" sine waves to try and mimic the reverb tail, resulting in a "blurry" and unusable sound.

## 4. "Avoid" List
- **Avoid Over-Morphing:** Blending between 4 generators too fast can cause "clicking" as the sine waves reset their phase. Keep morphing speeds slow and atmospheric.
- **Avoid Low-End Spectrum Shifting:** Shifting the spectrum of a bass sound creates "in-harmonic" frequencies that will make your track sound out of tune. Only use spectrum shifting for mid-high sounds.
