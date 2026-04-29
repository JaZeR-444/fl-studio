# SF2 Architecture: Zones & Generators

The SoundFont 2 (SF2) format is a hierarchical sample-mapping protocol. Understanding it allows you to manipulate SFP with "surgical" precision. [SRC: POLY-DOC]

## The Hierarchy:
1. **Samples:** Raw mono or stereo PCM audio.
2. **Instruments:** Collections of samples with ADSR and Filter settings.
3. **Presets (Banks):** What you see in SFP. They combine multiple instruments.

## Key Technical Components:

### 1. Zones
- **What they are:** Key ranges (e.g., C4 to G4) and Velocity ranges (e.g., 0-60).
- **Research Note:** High-quality SoundFonts (like SGM) use 10+ zones per octave. SFP handles these zones seamlessly with zero latency.

### 2. Generators
- **What they are:** The internal "Parameters" of the SF2 (Sample Root Key, Pan, Tuning).
- **Control:** When you use SFP's sliders, you are "generating" an offset that overrides these internal SF2 values.

### 3. Modulators (The "Hidden" Math)
- **What they are:** Logical connections (e.g., "Velocity -> Filter Cutoff").
- **Tip:** If your SoundFont sounds weird when playing soft, it likely has internal Modulators. Use the **Override** switches in SFP to ignore them and take manual control.

## Production Value:
Converting a massive VST instrument into an SF2 (using tools like Translator) allows you to use those expensive sounds in a high-CPU project without the synth lagging your session.
