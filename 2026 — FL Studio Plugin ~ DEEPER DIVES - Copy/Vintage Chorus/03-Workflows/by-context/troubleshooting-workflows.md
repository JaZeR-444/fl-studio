# Vintage Chorus Troubleshooting Guide

## Sound Issues

### No Chorus Effect
**Causes**:
- Mix knob at 0%
- Plugin bypassed
- No input signal
- Wrong routing in mixer

**Solutions**:
1. Increase mix to at least 20%
2. Disable plugin bypass
3. Verify signal reaching the plugin
4. Check mixer routing and send levels

### Chorus Sounds Too Thin or Weak
**Causes**:
- Depth too low
- Rate too slow
- Insufficient voice count
- Delay time too short

**Solutions**:
1. Increase depth to 40-70%
2. Set rate to 3-6Hz for movement
3. Increase voice count to 3-4 voices
4. Adjust delay time to 10-30ms

### Chorus Creates Unwanted Pitch Detune
**Causes**:
- Depth too high
- Rate too fast
- Mix too wet
- Extreme delay settings

**Solutions**:
1. Reduce depth below 60%
2. Set rate to 2-4Hz for natural movement
3. Balance mix to 30-50% wet
4. Use moderate delay times (10-25ms)

## Performance Issues

### Audio Glitches and Artifacts
**Causes**:
- CPU overload
- Low buffer size
- Multiple chorus instances
- Extreme parameter settings

**Solutions**:
1. Reduce buffer size or disable other plugins
2. Increase audio buffer to 256-512 samples
3. Limit to 1-2 chorus instances
4. Use moderate parameter settings

### High CPU Usage
**Causes**:
- Multiple voices
- High sample rates
- Complex delay settings
- Additional processing

**Solutions**:
1. Reduce voice count to 2
2. Use lower sample rates when possible
3. Use simpler delay configurations
4. Freeze tracks when possible

### Timing and Synchronization Problems
**Causes**:
- Wrong tempo sync settings
- LFO drift issues
- Host timing problems
- Buffer compensation errors

**Solutions**:
1. Enable host tempo sync
2. Check synchronization settings
3. Verify DAW timing
4. Adjust PDC compensation

## Creative Problems

### Can't Get Classic 80s Sound
**Solutions**:
- Use 4-6Hz rate for authentic character
- Set depth to 60-80% for that era's sound
- Try 3-voice configuration
- Use 15-25ms delay times
- Mix around 40-50% for presence

### Chorus Makes Mix Muddy
**Causes**:
- Too much wet signal
- Low frequencies being modulated
- Multiple modulation sources
- Poor source signal quality

**Solutions**:
1. Reduce mix to 20-30%
2. Add high-pass filter before chorus
3. Check for other LFO sources
4. Improve source recording quality

### Stereo Image Problems
**Issues**:
- Mono chorus sound
- Unbalanced stereo field
- Phase cancellation
- Weak stereo width

**Solutions**:
1. Ensure 3-4 voice mode for stereo
2. Check stereo output routing
3. Verify proper signal chain
4. Use stereo widening techniques

## Integration Issues

### Plugin Not Loading or Responding
**Causes**:
- Installation corruption
- Version incompatibility
- Plugin path issues
- System conflicts

**Solutions**:
1. Reinstall plugin completely
2. Check DAW compatibility
3. Verify installation directory
4. Disable conflicting plugins

### Automation Not Working
**Causes**:
- Parameters not automatable
- Automation disabled
- Wrong track mapping
- DAW-specific issues

**Solutions**:
1. Check which parameters can be automated
2. Enable automation in DAW
3. Verify correct automation lanes
4. Test with simple automation curves

### MIDI Controller Problems
**Issues**:
- Controller not detected
- Parameter mapping incorrect
- MIDI channel conflicts
- Controller firmware issues

**Solutions**:
1. Check MIDI connections and drivers
2. Re-learn parameter assignments
3. Verify MIDI channel settings
4. Update controller firmware

## Instrument-Specific Issues

### Guitar Chorus Problems
**Common Issues**:
- Chorus sounds artificial on guitar
- Too much pitch wobble
- Loss of attack clarity
- Poor sustain characteristics

**Solutions**:
1. Use slower rates (2-4Hz)
2. Reduce depth for natural sound
3. Add compression after chorus
4. Experiment with delay times

### Vocal Chorus Issues
**Common Problems**:
- Vocals sound processed
- Sibilance enhancement
- Loss of intimacy
- Unnatural movement

**Solutions**:
1. Keep mix low (15-25%)
2. Use subtle depth (30-50%)
3. Apply de-essing before chorus
4. Use slower rates (1.5-3Hz)

### Bass Chorus Issues
**Common Issues**:
- Low-frequency modulation sounds unnatural
- Bass loses punch
- Muddy low end
- Pitch instability

**Solutions**:
1. Use very slow rates (0.5-2Hz)
2. Limit depth to 20-40%
3. Add high-pass filter after chorus
4. Use shorter delay times

## Advanced Troubleshooting

### Complex Signal Chain Issues
**Multi-Effect Problems**:
- Chorus conflicts with other modulation
- Phase cancellation between effects
- Gain staging problems
- Frequency masking issues

**Diagnostic Steps**:
1. Test chorus in isolation
2. Add effects one at a time
3. Check gain structure
4. Analyze frequency spectrum

### Environmental and System Issues
**System Performance**:
- Background processes affecting performance
- Driver compatibility problems
- Hardware limitations
- Operating system conflicts

**Optimization Steps**:
1. Disable unnecessary background applications
2. Update audio drivers
3. Check hardware specifications
4. Optimize OS for audio

### Quality Assurance
**Sound Quality Verification**:
- A/B test with bypass
- Check on multiple monitoring systems
- Verify at different volume levels
- Test with various source material

**Reference Comparisons**:
- Compare with classic chorus units
- Reference iconic recordings
- Use test signals for analysis
- Document successful settings