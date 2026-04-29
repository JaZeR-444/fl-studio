# 01: UI Map and Signal Flow

## UI Sections Tour
Sawer uses a classic one-page layout, making it one of the fastest synths to program in FL Studio. [SRC: IL-MAN-02]

### 1. Oscillator Section
- **Saw & Sub:** The core sound source.
- **Sub Phase:** Adjusts the alignment of the sub-oscillator (crucial for bass impact).
- **Noise:** Adds vintage floor noise or percussive texture.
- **Sync:** Enables hard sync between oscillators for "tearing" lead sounds.

### 2. Filter Section (The Polivoks Heart)
- **Mode:** LP (Low Pass), BP (Band Pass), HP (High Pass).
- **Slope:** 12dB (Classic) or 24dB (Steep).
- **Cutoff & Resonance:** The resonance here is "dirty" and adds saturation as it increases.
- **KBD (Keyboard Tracking):** Makes the filter open more as you play higher notes.

### 3. Envelopes (Amp & Filter)
- **Amp ADSR:** Standard volume control.
- **Filter ADSR:** Dedicated envelope for the filter cutoff movement.

### 4. LFO & Matrix
- **LFO:** Speed and Waveform for modulation.
- **Matrix:** 4-slot routing table to connect LFO/Env to parameters (Pitch, Filter, Pan, etc.).

### 5. Unison & Effects
- **Unison:** Up to 8 voices for massive stereo width.
- **FX:** Chorus, Phaser, Delay, and Reverb designed with a "vintage" algorithm.

## Signal Flow
`Oscillators (Saw + Sub + Noise) -> Filter -> Amp Envelope -> Unison Engine -> Effects Section -> Output`

## Things Beginners Misunderstand
- **The "Phase" Knob:** It doesn't just move the wave; it changes how the Sub sits with the Saw. If your bass sounds "thin," move this knob.
- **Resonance Gain:** On many synths, high resonance kills the bass. On Sawer, the Polivoks model tries to keep some grit even at high resonance.
- **Mono vs. Poly:** Sawer defaults to Poly. For aggressive bass or leads, switch to "Mono" in the top bar to get authentic synth behavior.
