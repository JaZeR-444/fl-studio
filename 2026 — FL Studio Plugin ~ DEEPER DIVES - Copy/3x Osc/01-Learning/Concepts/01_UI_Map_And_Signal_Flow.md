# UI Map And Signal Flow: 3x Osc

## UI Tour
The plugin interface is categorized by the three oscillators. [SRC: IL-MAN]

### 1. Oscillator Sections (1, 2, 3)
- **Waveform Selector**: Sine, Triangle, Sawtooth, Square, Pulse, Rounded-Saw, Noise.
- **Invert Switch**: Flips the phase of the oscillator.
- **Volume**: Level of the oscillator (Osc 1 is always 100% by default).
- **Phase Offset**: Adjusts the starting point of the waveform.
- **Detune**: Fine-tuning (-100 to +100 cents).
- **Coarse Tune**: Pitch shifting in Semitones.

### 2. Mixer Section
- **AM (Amplitude Modulation)**: Oscillator 3 modulates the volume of Osc 1 and 2.
- **Stereo Phase**: Offsets the phase between Left and Right channels for width.

### 3. The "Hidden" Logic (Wrapper Tabs)
*Crucial: The following are part of the FL Studio Channel Wrapper, not the 3x Osc window itself:*
- **INS (Instrument)**: Envelope, LFO, and Filter settings.
- **MISC**: Polyphony, Arpeggiator, and Key tracking.

## Signal Flow
1. **Trigger**: MIDI note is received.
2. **Generation**: Three oscillators generate waveforms simultaneously.
3. **Phase/Invert**: Phase offsets are applied.
4. **Summing**: The signals are mixed (with optional AM from Osc 3).
5. **Wrapper Processing**: The combined signal passes through the Channel Wrapper's Filter and ADSR Envelopes.
6. **Output**: Final signal leaves the Channel Rack for the Mixer.

## Things Beginners Misunderstand
- **"Osc 1 doesn't have a volume knob"**: Osc 1 is the "Master" oscillator. You balance Osc 2 and Osc 3 against it.
- **"It sounds too plain"**: 3x Osc relies on **Detuning**. By setting Osc 2 to +5 cents and Osc 3 to -5 cents, you create the "Unison" thickness found in professional synths.
- **Filter**: If you don't enable the Filter in the **INS** tab, the sound will be very bright and "raw."
