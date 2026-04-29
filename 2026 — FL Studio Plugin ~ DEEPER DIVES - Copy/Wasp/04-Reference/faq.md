# Wasp FAQ

## General Questions

### Q: What makes Wasp special compared to other synthesizers?
**A**: Wasp's distinctive character comes from its aggressive filter envelopes, unusual filter response, and raw, edgy sound. The combination of cheap components and aggressive design creates unique sonic character that still inspires electronic musicians 40+ years later.

### Q: Is Wasp difficult to program?
**A**: Wasp can be challenging due to its aggressive character and interacting parameters, but becomes more intuitive with practice. Start with basic presets and gradually build complexity.

### Q: Should I use Wasp for bass or leads?
**A**: Wasp can work for both roles, though it's particularly loved for aggressive leads. Use lower settings for bass, higher settings for leads, and detune appropriately for each use case.

### Q: What's the difference between Wasp and modern synths?
**A**: Wasp uses analog modeling for character, while modern synths often use cleaner processing and digital oscillators. Modern synths offer more stability and features, but Wasp provides unique character that many producers prefer.

### Q: Can I get a classic techno sound with Wasp?
**A**: Yes! Use 4-6 stages, medium-high resonance, oscillator sync, and moderate detune. Use square or sawtooth waves for classic sound.

## Sound Design Questions

### Q: How do I get that aggressive Wasp lead sound?
**A**: Use high resonance (80-90%), fast attack (0.001-0.005s), oscillator sync, square waves, and push filter into self-oscillation.

### Q: How do I create ambient pads with Wasp?
**A**: Use slow LFO, minimal modulation, warm resonance, triangle wave, long envelope release, and gentle filter settings. Layer multiple instances for depth.

### Q: Why does my Wasp sound digital or processed?
**A**: Common causes include excessive resonance, very fast LFO, digital-sounding oscillators, or extreme parameter settings. Try reducing resonance, using slower rates, and warmer waveforms.

### Q: Can I make Wasp sound more vintage?
**A**: Add subtle noise or component imperfections. Use moderate settings, avoid extreme parameters, and experiment with detune and slight modulation drift.

### Q: How do I create percussion sounds?
****A**: Use short envelope times, low sustain, pulse waveforms, high resonance, and rapid LFO changes. Try rhythmic LFO patterns for interesting percussion.

### Q: What's the best way to control filter sweeps?
**- **Manual Control**: Smooth knob movements
- **Automation**: Record parameter changes
- **Mod Wheel**: Real-time filter cutoff control
- **LFO**: Dedicated LFO for rate
- **MIDI CC**: Assign filter cutoff to controller

## Technical Questions

### Q: What's the best buffer size for low latency?
**A**: For live performance: 64-128 samples. For recording: 256-512 samples. Adjust based on system capabilities.

### Q: What causes digital artifacts in Wasp?
**A:** High sample rates, excessive parameter changes, or poor quality filter emulations. Use lower settings and moderate parameter movements.

### Q: How do I minimize Wasp's CPU usage?
**A**: Limit instance count, use moderate settings, freeze completed tracks, increase buffer size, and optimize system performance.

### Q: Can I use multiple instances of Wasp simultaneously?
**A**: Yes, but monitor CPU usage carefully. Modern systems can typically handle 2-4 instances with moderate settings.

### Q: What are Wasp's system requirements?
**A**: Minimum: 4GB RAM, multi-core processor. Recommended: 8GB+ RAM for comfort. Requires 64-bit OS.

### Q: Does Wasp support MPE?
**: Most modern versions do, but check specific version documentation. MPE typically available for pitch bend and channel pressure control.

## Performance Questions

### Q: Can I automate all Wasp parameters?
**A**: Yes, most parameters can be automated via DAW automation systems. Common targets include filter cutoff, LFO rate, detune, envelope parameters, and dry/wet mix.

### Q: How many instances can I run?
**A**: This depends on CPU power. Modern systems typically handle 2-4 instances with moderate settings. Consider freezing tracks if you need more.

### Q: Should I use Wasp before or after effects?
**A**: Both work differently. Pre-effects: shape tone and character. Post-effects: add its distinctive character.

### Q: How do I fit Wasp tracks in a mix?
**A**: Wasp takes up significant frequency space. Use EQ to create space, keep levels conservative, consider sidechain compression, and ensure mono compatibility.

## Integration Questions

### Q: Can I use Wasp in any DAW?
**A**: Most Wasp plugins are available in VST, VST3, and AU formats, making them compatible with virtually all major DAWs including FL Studio.

### Q: How do I integrate Wasp with external hardware?
**:
- Use audio interface with multiple inputs for separate carrier sources. Route output through external processors. Use MIDI for controller integration.

### Q: What MIDI controllers work best for Wasp control?
-**- Keyboard controllers: Mod wheel for filter, pitch bend, aftertouch
- **Faders**: Multiple faders for parameter control
- **Foot switches**: Bypass, preset selection, freeze
- **Expression pedals**: Continuous parameter control
- **Modular synths**: CV/gate integration

### Q: Can I share Wasp presets?
**A**: Most plugins allow preset export and sharing. Share via community forums, social media, or preset libraries. Always credit original creators when sharing modified.

## Advanced Questions

### Q: What is hard sync and how does it work?
**A: Hard sync locks slave oscillator to master frequency at integer multiples. Use 2:1 or 3:2 ratios for classic aggressive sync.

### Q: Can I create custom oscillator waveforms?
**A**: Many modern versions support custom waveforms through additive synthesis or import. Check plugin version capabilities.

### Q: What are band-pass filters in Wasp?
**A**: Multiple band-pass filter stages that create characteristic notches. Different configurations produce different filtering characteristics.

### Q: How do I get self-oscillation?
**A: Push filter resonance to maximum to create unique oscillation.

### Q: Can I create matrix modulation?
- **A**: Some advanced Wasp plugins support VCFs (voltage control filters) for unique filter movement capabilities.

### Q: What is patch memory in a synthesizer?
**A**: Ability to save and recall patch configurations. Wasp has patch memory for storing complete sound configurations.

### Q: How do I use Wasp as a MIDI controller?
**A:**:
- **As sound source**: Route other MIDI instruments into Wasp
- **Control surface**: Use Wasp as MIDI sound source
- **Performance Tools**: Record parameter automation

### Q: Can I use Wasp for audio processing?
-**A:** As an insert effect with audio input
- **Sound Design**: Use Wasp as sound source for additional processing

### Q: What's the difference between LFOs and envelope followers?
- **LFO**: Continuous low-frequency modulation
- **Envelope Followers**: Track modulator envelope peaks and sustain
- **Relationship**: LFO adds continuous movement, envelope followers respond to signal amplitude changes

## Comparison Questions

### Q: How does this compare to original hardware?
**A**: Software offers convenience, perfect recall, and unlimited instances. Hardware provides tactile control and unique character. Many studios use both for different purposes.

### Q: Should I use this instead of other synths?
**A**: Use Wasp when you want its unique character. Other synths are cleaner but different, not replacements.

### Q: What makes one synthesizer better than another?
**A:** Factors include sound quality, CPU efficiency, parameter range, MIDI implementation, workflow features, and user interface.

### Q: Are there good Wasp resources available?
**A:** Check manufacturer documentation, user forums, YouTube tutorials, and community forums for advanced techniques and sound design.

### Q: What are the best resources for learning Wasp programming?
**A:** Synthesis tutorials, signal processing courses, electronic music theory, hardware design knowledge, and audio engineering books.

## Technical Questions

### Q: Why is there latency in my Wasp?
**A:** Check buffer size settings, verify PDC compensation, check for software monitoring, update audio interface drivers, test different buffer sizes.

### Q: Presets aren't loading correctly?
**A:** Check file permissions, verify format compatibility, ensure plugin version matches, re-save problematic presets, or reinstall if necessary.

### Q: How can I organize my Wasp presets?
**A:** Organize by musical style, use consistent naming, include parameter summary, categorize by use case, and maintain backup systems.

### Q: Can I control multiple Wasp instances simultaneously?
**A:** Yes, through MIDI learn or separate automation lanes, but be mindful of CPU usage.

### Q: What's the difference between 2-osc and 4-osc voices?
- **A:** 2-osc has additional octave one octave higher, which creates richer, fuller sound. 4-osc has more even harmonics. Choose based on sound preference.

### Q: Should I use unison or detune?
- **Unison** for richer sound and width, **Detune** for character and space. Use both for different effects in different combinations.

## Creative Applications

### Q: How can I create complex, evolving textures?
**A:** Layer multiple instances, use extreme settings, combine with other effects, record and process audio-rate Wasp tracks for textural elements.

### Q: Can I use Wasp for sound design?
**A:** Yes! Wasp excels at creating unique soundscapes, alien communication, or instrument emulation with extreme settings.

### Q: Can I use Wasp for film and media scoring?
**:** Yes, Wasp provides unique character for sci-fi, horror, or atmospheric sound design through its aggressive filtering.

### Q: What are some unconventional Wasp uses?
- **:** Rhythmic gate patterns for percussion, unstable frequencies for drones, or pulse-width modulation for unique textures, noise as carrier source.

### Q: Can I create harmonic content with Wasp?
- **A:** Use sub-octaves and fine tuning for harmony, combine with external sources, or process multiple instances.

## Support and Resources

### Q: Where can I get help with Wasp issues?
**:** Check manual, manufacturer website, user forums, YouTube tutorials, and contact technical support for specific problems.

### Q: Are there good resources for learning about Wasp programming?
- **A:** Synthesis tutorials, signal processing courses, electronic music theory, audio engineering books, online workshops, user communities, and manufacturer documentation.