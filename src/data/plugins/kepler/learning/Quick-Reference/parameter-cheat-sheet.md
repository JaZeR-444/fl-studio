# Parameter Cheat Sheet: Kepler

Fast-reference for the JUNO-6 emulation engine. [SRC: IL-MAN]

---

## 🎹 DCO (Oscillator) Section
- **LFO:** Pitch modulation depth from the LFO.
- **PWM (Pulse Width Modulation):** Width of the Square/Pulse wave.
- **PWM Switch (LFO/ENV):** Selects whether the LFO or the Envelope modulates the pulse width.
- **Range (16/8/4):** Sets the octave (Pitch).
- **Square (Pulse):** Toggles the square/pulse wave.
- **Saw:** Toggles the sawtooth wave.
- **Sub:** Adds a square wave one octave below the main.
- **Noise:** Injects white noise (grit).

## 🎚️ VCF (Filter) Section
- **HPF:** High Pass Filter (Fixed/Stepped). Use to thin out the low end.
- **Freq:** Filter Cutoff frequency.
- **Res:** Filter Resonance. High values cause "ringing" or self-oscillation.
- **Env:** Depth of the ADSR Envelope's impact on the filter.
- **LFO:** Depth of the LFO's impact on the filter (creates "wobble").
- **Kybd (Key Tracking):** How much the filter opens as you play higher notes.

## 📐 VCA & ENV Section
- **VCA Switch (Env/Gate):**
  - *Gate:* Instant On/Off (Classic organ/rhythm feel).
  - *Env:* Follows the ADSR envelope.
- **A-D-S-R:** Attack, Decay, Sustain, Release.

## ✨ CHORUS Section
- **Off:** Pure, dry signal.
- **I:** Slow, subtle widening.
- **II:** Faster, deeper, more aggressive widening.
- **I+II:** The "Secret Mode." Extreme width and grit.

## 🕹️ ARP (Arpeggiator)
- **Range (1/2/3):** Octave range of the arpeggio.
- **Mode:** Up, Down, or Up/Down.
- **Speed:** Tempo-synced rate (1/4, 1/8, 1/16, etc.).

---

## 🎯 Quick Starting Points
- **Lush Pad:** Saw + Sub + Chorus II + Long Release.
- **80s Bass:** Pulse + Sub + High Resonance + Fast Filter Envelope.
- **Industrial Lead:** Saw + Noise + Max Resonance (Filter self-oscillation).
- **Neo-Soul Keys:** Square + Sub + Low LP Filter + Chorus I.
