# 01: UI Map and Signal Flow

## UI Sections Tour
SimSynth Live uses a logical, left-to-right signal path that mimics a hardware rack. [SRC: IL-MAN-03]

### 1. Oscillators (1, 2, & 3)
- **Shape:** Sine, Triangle, Saw, Square, Pulse, Noise.
- **Warm Button:** The "Magic" button. It adds a second, detuned oscillator for every one you enable.
- **Level & Tuning:** Balance the volume and pitch of the three sources.

### 2. SVF Section (State Variable Filter)
- **LP / BP / HP Mix:** These are not switches; they are knobs. You can mix 50% Lowpass and 50% Highpass to create a "Notch" filter.
- **Cutoff & Res:** Standard frequency and feedback controls.

### 3. Modulation (LFO & Envelopes)
- **LFO:** Can be routed to Pitch (Vibrato), Filter (Wobble), or PWM (Pulse Width).
- **ADSR:** Two dedicated envelopes—one for Volume (Amp) and one for the Filter.

### 4. Effects (Chorus & Ring Mod)
- **Chorus:** Adds stereo width and "shimmer."
- **Ring Mod:** Multiplies Osc 1 and Osc 2 for metallic, bell-like, or "robotic" textures.

## Signal Flow
`Osc 1/2/3 (with optional Warm doubling) -> Ring Mod -> SVF Filter -> Envelopes -> Chorus -> Output`

## Things Beginners Misunderstand
- **Filter "Mix" Knobs:** Most synths use a switch to pick LP or HP. In SimSynth, if all three (LP/BP/HP) are at 0, you will hear nothing. You MUST turn at least one up.
- **Warm Mode Polyphony:** Turning on "Warm" doubles the internal oscillators. If you have high polyphony, this can hit the CPU harder than expected.
- **Ring Modulation:** This only works between Osc 1 and Osc 2. If one is muted, the ring mod effect disappears.
