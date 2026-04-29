# Transistor Bass Technical Reference

## Audio Engine Specifications

### Synthesis Engine
- **Oscillators**: Single sawtooth/pulse VCO
- **Filter**: 24dB/octave low-pass ladder filter
- **Envelope**: Simple AD envelope for filter
- **Sequencer**: 16-step programmable sequencer
- **Processing**: Internal 32-bit floating point

### Filter Characteristics
- **Cutoff Range**: 20Hz - 20kHz
- **Resonance Range**: 0 - self-oscillation
- **Slope**: 24dB/octave (-24dB)
- **Response**: Emulated transistor ladder
- **Distortion**: Soft clipping at high resonance

### Envelope Parameters
- **Attack**: Fixed very fast (2-5ms)
- **Decay**: Adjustable, 100ms - 8 seconds
- **Sustain**: Fixed at 0%
- **Release**: Same as decay setting

## MIDI Implementation

### MIDI CC Assignments
- **CC#1**: Modulation → Filter Cutoff
- **CC#7**: Volume → Main Output
- **CC#10**: Pan → Stereo Position
- **CC#74**: Filter Cutoff (fine)
- **CC#71**: Filter Resonance
- **CC#73**: Attack Time (if available)
- **CC#72**: Release/Decay Time
- **CC#75**: Filter Q (resonance variation)

### Note Range
- **Effective Range**: C1 - C5 (MIDI notes 24-84)
- **Optimal Range**: C1 - C3 (MIDI notes 24-48)
- **Tuning Range**: ±24 semitones
- **Fine Tuning**: ±100 cents

## Audio Specifications

### Sample Rate Support
- **Supported Rates**: 44.1kHz, 48kHz, 88.2kHz, 96kHz
- **Internal Processing**: Variable, up to 192kHz
- **Oversampling**: 2x, 4x, 8x options
- **Quality Settings**: Economy, Normal, High, Ultra

### Latency
- **Processing Delay**: 0-2 samples (native mode)
- **Additional Latency**: Host buffer dependent
- **Lookahead**: Optional 0-64 samples
- **Compensation**: Automatic PDC support

## File Formats

### Preset Formats
- **Windows**: .tbp (Transistor Bass Preset)
- **Mac**: .tbp (cross-platform compatible)
- **Bank Files**: .tbb (Transistor Bass Bank)
- **MIDI Export**: Standard .mid files

### Project Integration
- **VST2**: Standard .dll extension
- **VST3**: Standard .vst3 extension
- **AU**: Standard .component bundle
- **AAX**: Pro Tools support (if available)

## Performance Specifications

### CPU Usage
- **Single Instance**: 0.5% - 2% (modern CPU)
- **Multiple Instances**: Linear scaling
- **Oversampling Impact**: +25% per 2x increase
- **Voice Count**: Monophonic only

### Memory Usage
- **Base RAM**: 15-25MB per instance
- **Additional Presets**: +1-2MB per 100 presets
- **Streaming**: No streaming required
- **Cache**: Plugin state ~50KB

## Compatibility

### Operating Systems
- **Windows**: Windows 7 SP1 - Windows 11
- **macOS**: OS X 10.9 - macOS 14+
- **Linux**: Via Wine or similar (unofficial)

### DAW Compatibility
- **FL Studio**: Native support
- **Ableton Live**: VST/AU support
- **Logic Pro**: AU support
- **Cubase**: VST/VST3 support
- **Pro Tools**: AAX (if version supports)
- **Studio One**: VST/VST3/AU support

## Technical Limitations

### Known Issues
- **High Resonance**: Can cause aliasing at high cutoffs
- **Extreme Settings**: May produce digital artifacts
- **CPU Load**: Increases with multiple instances
- **Memory**: Limited to single instance per project in some versions

### Workarounds
- **Aliasing**: Use oversampling or lower cutoff
- **CPU Issues**: Freeze tracks or increase buffer
- **Memory**: Use project templates
- **Compatibility**: Use bridge wrapper if needed