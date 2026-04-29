# GMS Glossary

Terminology and definitions for Groove Machine Synth.

[SRC: IL-MAN]

---

## A

**ADSR Envelope** - Attack, Decay, Sustain, Release envelope type. GMS uses ADSR for the Level EG (amplitude).

**Aftertouch** - MIDI pressure data sent after a key is held down. GMS can map aftertouch to various destinations.

**AMNT (Amount)** - Parameter controlling modulation depth/intensity. Range is ±100%.

**Arm X/Y** - Clicking to enable LFO control of an effect's X or Y parameter.

## B

**Band Pass (BP)** - Filter type that allows only a band of frequencies to pass, cutting both highs and lows.

**Bandwidth** - Frequency range affected by a filter or equalizer band.

**Bend Range** - Pitch wheel range in semitones, configurable in MIDI panel.

**Bipolar** - LFO shape that generates both positive and negative values (e.g., Sine: +1 to -1).

**Bit Crusher (CRSH)** - FX that reduces sample rate and bit depth for lo-fi effects.

## C

**Carrier** - In FM synthesis, the oscillator whose frequency is being modulated (OSC 1 in GMS).

**Chorus Effect** - The thickening effect created by multiple detuned voices (unisono).

**Cutoff** - Filter parameter determining the frequency boundary.

## D

**Decay** - Envelope stage determining time to reach sustain level.

**DEST (Destination)** - Target parameter for envelope or LFO modulation.

**Detune** - Slight pitch variation between voices (cents or percentage).

**Distortion (DIST)** - FX adding harmonic saturation and overdrive.

**Drop Level** - TRNC parameter controlling how much volume drops during gating.

## E

**Echo** - Delay/echo FX module in GMS FX rack.

**Envelope** - Shape controlling how a parameter changes over time (attack, decay, etc.).

## F

**Filter** - Circuit that removes certain frequencies. GMS has LP, BP, and HP types.

**Fine** - Fine pitch adjustment in cents (±100 cents = ±1 semitone).

**Flanger (FLNG)** - FX creating jet-plane sweeping effect through comb filtering.

**FM (Frequency Modulation)** - Synthesis method where one oscillator modulates another's frequency.

**Freeze** - Rendering a channel to audio to save CPU.

## G

**GMS** - Groove Machine Synth, the hybrid wavetable synthesizer.

**Glue** - Button to permanently enable an FX (vs. momentary activation).

## H

**Hard Sync** - Modulation mode where OSC 1 resets phase based on OSC 2 frequency.

**Harmonics** - Additional frequencies above the fundamental created by waveforms.

**HPF (High Pass Filter)** - FX module cutting low frequencies.

## I

**Invert** - Flipping the phase of a signal (180° shift) or inverting envelope direction.

## K

**KBD (Keyboard)** - Keyboard tracking, making filter cutoff follow note pitch.

## L

**Level EG** - Envelope specifically for amplitude (volume) shaping.

**LFO (Low Frequency Oscillator)** - Oscillator below audio rate used for modulation.

**LP (Low Pass)** - Filter type allowing frequencies below cutoff to pass.

**LPF (Low Pass Filter)** - FX module cutting high frequencies.

## M

**Modulation** - Changing a parameter over time via envelopes, LFOs, or controllers.

**Modulation Matrix** - The routing system connecting sources to destinations.

**Mod Wheel** - MIDI controller typically mapped to modulation destinations.

**Modulator** - In FM synthesis, the oscillator doing the modulating (OSC 2 in GMS).

**Mono** - Single voice mode with portamento/glide.

## N

**Noise** - White noise generator for texture and percussion.

## O

**OSC (Oscillator)** - Sound generator. GMS has 3 oscillators.

**Octave** - Frequency range (×2 or ÷2). GMS allows ±4 octave shifts.

## P

**Pan** - Stereo position (left to right).

**Panning (PAN)** - FX module for auto-panning effects.

**Phaser (PHSR)** - FX creating notch filter sweeps.

**Phase** - Starting point of a waveform cycle (0-360°).

**Pitch** - Perceived frequency of a note. Controlled in semitones and cents.

**Pitch Drop** - 808-style effect using negative pitch envelope.

**Portamento** - Glide between notes (FREQ SLIDE parameter).

**Pulse Wave** - Square wave with variable width (duty cycle).

## R

**Ratio** - Frequency relationship in FM synthesis (e.g., 2:1, 3:1).

**Reverb (RVRB)** - FX adding spatial reflections.

**Resonance (RES)** - Boost at filter cutoff frequency.

**Retrigger** - Restarting envelope or LFO phase on each note.

**Release** - Envelope stage for fade-out after note release.

**Release Time** - TRNC parameter for how fast gate closes.

**RM (Ring Modulation)** - Multiplication of two signals creating sum/difference frequencies.

## S

**Sawtooth** - Waveform with all harmonics, brightest character.

**Sidebands** - Additional frequencies created by FM synthesis.

**Sine** - Pure waveform with no harmonics, fundamental only.

**Square** - Waveform with odd harmonics only, hollow character.

**Stereo** - Two-channel audio (left and right).

**Stereo Spread** - Unisono parameter controlling voice distribution across stereo field.

**Subtractive Synthesis** - Starting with rich waveform and filtering.

**Sustain** - Envelope level maintained while key is held.

**Sync** - See "Hard Sync"

## T

**TRNC (Trance Gate)** - FX creating rhythmic gating/pumping effects.

**Triangle** - Waveform with soft character, odd harmonics only.

## U

**Unipolar** - LFO shape generating only positive values (0 to 1).

**Unisono** - Multiple detuned voices per note for chorus effect.

**Unisono Detune** - Amount of pitch variation between unison voices.

**Unisono Voices** - Number of voices in unison (1-16).

## V

**Velocity** - MIDI note strength (how hard key is pressed).

**Vibrato** - Pitch modulation for expressiveness.

## W

**Waveshape** - The waveform selected for an oscillator.

**Wavetable** - Collection of waveforms. GMS can load custom .wav files.

**Wet/Dry** - Balance between effect (wet) and original (dry) signal.

## X-Y

**X/Y Panel** - Performance control area for FX parameters.

---

## Synthesis Terms

### Hybrid Synthesis
Combination of multiple synthesis methods (subtractive, FM, RM, sync).

### Wavetable Synthesis
Using sampled single-cycle waveforms as oscillator sources.

### Frequency Modulation (FM)
Audio-rate frequency modulation creating complex harmonics.

### Ring Modulation
Amplitude multiplication creating inharmonic sidebands.

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
