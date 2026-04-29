# Wasp XT Troubleshooting Guide

## Sound Issues

### No Sound Output
**Causes**:
- Mixer channel muted or volume at 0
- Plugin bypassed
- No MIDI input
- Wrong output routing

**Solutions**:
1. Check mixer channel volume and routing
2. Disable plugin bypass
3. Verify MIDI input from keyboard or piano roll
4. Check audio interface connections

### Thin or Weak Sound
**Causes**:
- Filter cutoff too low
- Resonance too high
- No oscillator unison
- Low filter envelope amount

**Solutions**:
1. Increase filter cutoff above 12 o'clock
2. Reduce resonance to enhance body
3. Enable oscillator unison with detune
4. Increase filter envelope amount for presence

### Distorted or Harsh Sound
**Causes**:
- Excessive resonance
- Filter self-oscillation
- Overloaded mixer channel
- Extreme oscillator settings

**Solutions**:
1. Reduce resonance below 3 o'clock
2. Lower filter cutoff to stop self-oscillation
3. Check mixer levels and avoid clipping
4. Use moderate oscillator levels

## Performance Issues

### High CPU Usage
**Causes**:
- Multiple instances
- High unison voices
- Complex arpeggiator patterns
- High sample rates

**Solutions**:
1. Limit unison voices (4-8 max)
2. Use fewer instances when possible
3. Simplify arpeggiator patterns
4. Render to audio when possible

### Audio Glitches
**Causes**:
- Low buffer size
- CPU overload
- Driver issues
- Too many effects

**Solutions**:
1. Increase buffer size to 256-512 samples
2. Reduce CPU load by freezing tracks
3. Update audio drivers
4. Disable unnecessary effects

### Timing Problems
**Causes**:
- Wrong tempo sync settings
- MIDI clock issues
- DAW timing problems
- Buffer compensation errors

**Solutions**:
1. Enable host tempo sync
2. Check MIDI clock routing
3. Verify DAW timing settings
4. Adjust PDC compensation

## Creative Problems

### Can't Get Classic Wasp Sound
**Solutions**:
- Use single oscillator (sawtooth)
- Set resonance to moderate levels
- Use moderate filter cutoff
- Limit modulation depth
- Disable modern features initially

### Sounds Too Digital
**Solutions**:
- Reduce oscillator unison
- Use gentler filter envelope
- Lower LFO rate and depth
- Add subtle saturation
- Use vintage-style processing

### Arpeggiator Not Working
**Causes**:
- Arpeggiator disabled
- No MIDI notes being received
- Wrong sync settings
- Pattern complexity issues

**Solutions**:
1. Enable arpeggiator button
2. Verify MIDI input to plugin
3. Set sync to host or internal
4. Start with simple patterns

## Integration Issues

### Plugin Not Loading
**Causes**:
- Installation issues
- Plugin path problems
- Version incompatibility
- Corrupted installation

**Solutions**:
1. Reinstall plugin
2. Check plugin installation path
3. Verify DAW compatibility
4. Reset plugin database

### Automation Not Working
**Causes**:
- Parameters not automatable
- Automation disabled
- Wrong track mapping
- DAW automation issues

**Solutions**:
1. Check which parameters can be automated
2. Enable automation in DAW
3. Verify correct track mapping
4. Test with simple automation

### MIDI Controller Issues
**Problems**: Controller not responding to plugin
**Solutions**:
1. Check MIDI learn functionality
2. Verify controller connections
3. Map parameters manually if needed
4. Update controller drivers

## Preset and Settings Issues

### Presets Not Loading
**Causes**:
- Corrupted preset files
- Wrong preset format
- File permission issues
- Plugin version mismatch

**Solutions**:
1. Reinstall preset pack
2. Check file format compatibility
3. Verify file permissions
4. Update plugin to latest version

### Custom Settings Not Saving
**Causes**:
- Read-only preset folder
- Insufficient permissions
- Plugin protection
- Saving to wrong location

**Solutions**:
1. Check folder write permissions
2. Run DAW as administrator
3. Disable plugin protection if present
4. Verify save location is correct

## Advanced Troubleshooting

### Sound Character Problems
**Diagnosis**: Sound doesn't match expectations
**Approach**:
1. Reset to init patch
2. Build sound step by step
3. Compare with reference presets
4. Document working combinations

### Performance Optimization
**Goals**: Reduce CPU while maintaining quality
**Methods**:
1. Render heavy patches to audio
2. Use freeze/smart render functions
3. Optimize buffer settings
4. Limit simultaneous instances

### Creative Blocks
**Solutions**:
- Use randomize function
- Load and modify existing presets
- Try extreme settings
- Study oscillator combinations
- Reference classic patches