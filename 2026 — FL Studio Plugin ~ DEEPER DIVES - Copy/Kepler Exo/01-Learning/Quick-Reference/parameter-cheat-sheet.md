# Parameter Cheat Sheet: Kepler Exo

Advanced-reference for the expanded "Pro" analog engine. [SRC: IL-MAN]

---

## 🎹 DCO 1 & 2 (Oscillators)
- **DCO 1:** The primary oscillator.
- **DCO 2:** The secondary oscillator.
  - **Fine/Semi:** Tuning offsets relative to DCO 1.
  - **Sync (Hard Sync):** Forces DCO 2 to restart whenever DCO 1 does. Creates "tearing" leads.
  - **X-Mod (Cross-Mod):** DCO 1 modulates the frequency of DCO 2 (FM synthesis).

## 🎚️ VCF (Advanced Filter)
- **Mode (STD/HQ):**
  - *STD:* Classic JUNO emulation.
  - *HQ:* Modern, high-fidelity algorithm with smoother resonance.
- **Slope (24dB/6dB):** Selects between a steep (24dB) or gentle (6dB) filter curve.
- **Audio Mod:** Uses the output of DCO 1 to modulate the filter frequency at high speed (Growl).

## 📐 MOD MATRIX (The Hub)
- **Slots:** Multiple routing slots.
- **Source:** What is moving (LFO 1, Env 2, Velocity, Mod Wheel).
- **Destination:** What is being moved (DCO 2 Pitch, Filter Res, Pan, FX Mix).
- **Amount:** Depth and direction (Bipolar) of the modulation.

## 📐 ENVELOPES & LFOs
- **Env 1 & 2:** Two independent ADSRs. Usually, Env 1 is for Amp (VCA) and Env 2 is for Filter (VCF).
- **LFO 1 & 2:** Two independent LFOs with multiple waveforms and sync modes.

## ✨ FX RACK
- **Saturator:** Adds harmonic "crunch" and analog warmth.
- **Delay / Reverb:** High-quality spatial processing.
- **Chorus:** The classic JUNO Modes I, II, and I+II.

---

## 🎯 Advanced Starting Points
- **Sync Lead:** Sync ON + Env 2 assigned to DCO 2 Pitch in the Matrix.
- **Growl Bass:** Audio Mod turned up + High Resonance + Saw wave.
- **Ambient Drift:** LFO 1 -> DCO 1 Pitch (Slow); LFO 2 -> Filter Cutoff (Slower).
- **Metallic Bell:** High X-Mod + Square waves + Short Release.
