# Transporter FAQ

## General Questions

### Q: What exactly does Transporter do?
**A**: Transporter is an audio effect plugin that captures short segments of audio and repeats them rhythmically, creating stutter, glitch, and choppy effects. It can manipulate pitch, filter, and timing in real-time.

### Q: Is Transporter suitable for beginners?
**A**: Yes, Transporter has user-friendly presets and simple controls for beginners, while also offering advanced parameters for experienced users. Start with the preset library and basic controls.

### Q: What are the system requirements?
**A**: Minimum requirements vary by version, but generally: 4GB RAM, multi-core processor, 64-bit OS, supported audio interface. Check specific requirements for your platform.

## Sound Design Questions

### Q: How do I get that classic vocal stutter effect?
**A**: Start with a 1/16 buffer size, set mix to 75%, add some pitch shift (+2 to +5 semitones), and automate the filter cutoff for movement. Use a vocal sample with clear enunciation.

### Q: Can Transporter create musical melodies?
**A**: Yes, by using pitch automation and rhythmically timed buffer changes, you can create melodic stutter patterns. Combine with MIDI input for precise control.

### Q: How do I avoid audio clicks and pops?
**A**: Enable fade/smoothing options, use appropriate buffer sizes, automate parameters gradually rather than abruptly, and ensure your source audio is clean.

## Technical Questions

### Q: What's the best buffer size for live performance?
**A**: For live performance, use audio interface buffers of 128-256 samples. The Transporter buffer size controls the effect, not system performance.

### Q: Can I use Transporter in real-time with zero latency?
**A**: Zero latency is impossible with digital processing, but with good audio interfaces and proper settings, latency can be reduced to under 10ms, which is effectively real-time.

### Q: Does Transporter support sidechain input?
**A**: Most versions support sidechain for rhythm synchronization and ducking. Check your specific version's documentation for sidechain implementation.

## Workflow Questions

### Q: How do I create smooth transitions between songs?
**A**: Use the fade-in/fade-out automation on the mix parameter, gradually change buffer sizes, and use filter automation to smooth frequency transitions between tracks.

### Q: Can I automate all parameters?
**A**: Yes, most parameters can be automated via your DAW's automation system. Common automation targets include buffer size, pitch shift, filter cutoff, and mix amount.

### Q: What's the best way to organize presets?
**A**: Organize presets by genre, use case (live vs. studio), or by effect type. Use naming conventions that make sense to your workflow (e.g., "EDM_Drop_Heavy_1").

## Performance Questions

### Q: Can I use Transporter for live DJ sets?
**A**: Absolutely! Transporter is excellent for live performance. Map key parameters to MIDI controllers and practice switching between presets during transitions.

### Q: How do I prevent CPU overload during live shows?
**A**: Optimize your buffer settings, close unnecessary applications, freeze rendered tracks when possible, and have backup plans ready if CPU usage gets too high.

### Q: What controllers work best with Transporter?
**A**: Grid controllers (Launchpad, Maschine) work great for triggering, while knob controllers (Push, KeyLab) excel at parameter manipulation. Expression pedals are great for hands-free control.

## Integration Questions

### Q: Does Transporter work in all DAWs?
**A**: Transporter is available in VST, AU, and AAX formats, making it compatible with most major DAWs including FL Studio, Ableton Live, Logic Pro, Pro Tools, and Cubase.

### Q: Can I use multiple instances simultaneously?
**A**: Yes, you can use multiple instances, but be mindful of CPU usage. Each additional instance increases processing load.

### Q: How do I backup my custom presets?
**A**: Export custom presets using the plugin's export function, or copy the preset files from the plugin's preset folder to a backup location.

## Troubleshooting Questions

### Q: Why is there no sound coming out?
**A**: Check that the mix knob isn't at 0%, the plugin isn't bypassed, audio is reaching the plugin, and your audio interface is properly configured.

### Q: The timing feels wrong, what's wrong?
**A**: Verify host sync is enabled, check your project tempo, ensure proper MIDI clock synchronization, and adjust parameter automation timing.

### Q: The plugin crashed during a session, what should I do?
**A**: Restart the plugin, try a simpler preset, increase buffer size, and save your work frequently. If crashes persist, contact technical support.

## Creative Questions

### Q: How can I create unique sounds not covered in presets?
**A**: Experiment with extreme parameter combinations, use multiple instances in series, combine with other effects, and record automation for evolving textures.

### Q: Can I use Transporter on non-musical audio?
**A**: Yes! Transporter works great on sound effects, field recordings, voiceovers, and any audio source. Experiment with speech, nature sounds, and industrial noises.

### Q: How do I achieve that "glitch hop" sound?
**A**: Use small buffer sizes (1/32 or 1/64), add pitch randomization, enable bit reduction if available, and combine with rhythmic gating effects.

## Advanced Questions

### Q: Can I create custom algorithms or modify existing ones?
**A**: This depends on the version. Some advanced versions offer algorithm customization or scripting capabilities. Check your specific version's documentation.

### Q: Is it possible to sync multiple Transporter instances?
**A**: Yes, you can sync instances via MIDI clock, host sync, or by linking parameters within your DAW's modulation system.

### Q: How does Transporter compare to similar plugins?
**A**: Transporter focuses on high-quality stutter and glitch effects with musical results. While similar plugins exist, Transporter often offers unique features like advanced pitch preservation and creative automation options.