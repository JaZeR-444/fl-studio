# Parameter Cheat Sheet: MiniSynth

The high-efficiency synthesis reference. [SRC: IL-MAN]

---

## 🎹 OSC (Oscillator) Tab
- **Waveform Selector:** 8 distinct modes (Saw, Pulse, Saw+Saw, SuperSaw, Bell, etc.).
- **Modifier:** Changes function per mode (e.g. PWM, Detune, Harmonics).
- **Glide:** Time for pitch transitions between notes.

## 🎚️ FILTER Tab
- **Cutoff:** Filter frequency.
- **Res:** Resonance (peak at cutoff).
- **Env:** Depth of the Filter Envelope's impact on the Cutoff.
- **LFO:** Depth of the LFO's impact on the Cutoff.

## 📐 ENV (Envelope) Tabs
- **Amp Env:** ADSR for volume.
- **Filter Env:** ADSR for filter movement.
- **A-D-S-R:** Attack, Decay, Sustain, Release.

## 🌀 LFO Tab
- **Rate:** Speed of modulation.
- **Width:** Pulse width of the LFO shape.
- **Feedback:** Feeds the LFO back into itself for "glitchy" or complex shapes.

## ✨ FX Tab
- **Chorus:** Width and ensemble thickness.
- **Phaser:** Moving phase-cancellation sweeps.
- **Delay:** Rhythmic echoes.
- **Distortion:** Harmonic grit and saturation.

---

## 🎯 Modifier Quick Reference
- **Saw:** Pulse Width (Square to Saw).
- **Pulse:** Pulse Width (Narrow to Square).
- **Saw + Saw:** Pitch of the 2nd Oscillator.
- **SuperSaw:** Detune spread of 8 voices.
- **Bell:** Harmonic spectral balance.
- **DeafSaw:** High-frequency spectral content.
- **Filtered:** Internal filter character.
