# Tuner Troubleshooting Guide

## Detection Issues

### No Note Detected
**Causes**:
- Input volume too low
- Audio interface not working
- Input monitoring disabled
- Wrong input source selected

**Solutions**:
1. Increase input gain
2. Check audio interface connections
3. Enable input monitoring in FL Studio
4. Verify correct input channel

### Inaccurate Readings
**Causes**:
- Background noise interference
- Multiple notes playing
- Low quality instrument
- Old strings

**Solutions**:
1. Reduce background noise
2. Play single notes only
3. Check instrument condition
4. Replace old strings
5. Use noise gate if needed

### Display Jumps Between Notes
**Causes**:
- Vibrato while checking pitch
- Instrument instability
- Room acoustics
- Poor playing technique

**Solutions**:
1. Hold notes steady
2. Check instrument tuning stability
3. Improve room acoustics
4. Practice steady playing technique

## Technical Issues

### Plugin Not Loading
**Solutions**:
1. Reinstall plugin
2. Check plugin compatibility
3. Verify installation path
4. Restart FL Studio
5. Update audio drivers

### Audio Interface Problems
**Symptoms**: No input signal detected
**Solutions**:
1. Check cable connections
2. Verify audio interface power
3. Test with other software
4. Update interface drivers
5. Try different input channel

### High Latency
**Problem**: Delay between playing and display update
**Solutions**:
1. Reduce audio buffer size
2. Use ASIO drivers
3. Close other applications
4. Optimize system performance

## Performance Issues

### CPU Usage
**High CPU Usage Solutions**:
1. Increase buffer size
2. Reduce other plugins
3. Close unused applications
4. Update graphics drivers
5. Disable visual effects

### Memory Issues
**Solutions**:
1. Close other projects
2. Increase system RAM
3. Restart FL Studio
4. Clear plugin cache

## Environmental Factors

### Room Acoustics
**Problems**:
- Standing waves affecting readings
- Reflections causing interference
- Ambient noise levels

**Solutions**:
1. Use close-miking
2. Improve room treatment
3. Use noise gates
4. Record in quieter space

### Electrical Interference
**Sources**: 60Hz hum, RF interference
**Solutions**:
1. Use balanced cables
2. Check grounding
3. Move away from interference sources
4. Use power conditioning

## Instrument-Specific Issues

### Guitar Problems
**Common Issues**:
- Intonation problems
- Fret buzz affecting pitch
- Tuning instability

**Solutions**:
1. Check and adjust intonation
2. Adjust action height
3. Check tuning pegs
4. Replace strings
5. Check neck relief

### Bass Issues
**Specific Problems**:
- Low frequencies harder to detect
- String thickness affects pitch
- Longer scale length sensitivity

**Solutions**:
1. Use octave effect for detection
2. Play closer to bridge
3. Use heavier picks
4. Check string quality

### Acoustic Instruments
**Challenges**:
- Volume variations
- Complex harmonics
- Room interaction

**Solutions**:
1. Use high-quality microphone
2. Position microphone correctly
3. Use compression for consistent levels
4. Filter out unwanted frequencies

## Advanced Troubleshooting

### Calibration Issues
**Reference Pitch Problems**:
1. Reset to A440Hz
2. Verify with external tuner
3. Check for drift over time
4. Document custom calibrations

### Display Problems
**GUI Issues**:
1. Update graphics drivers
2. Check DPI settings
3. Try different scaling
4. Restart in safe mode

### Integration Issues
**DAW-Specific Problems**:
1. Check plugin format compatibility
2. Verify routing settings
3. Test with different projects
4. Contact plugin support

## Performance Tips

### Best Practices
**For Accurate Tuning**:
- Tune in quiet environment
- Use consistent playing technique
- Check pitch with multiple notes
- Verify with harmonics
- Allow instrument to warm up

**For Studio Work**:
- Tune before each take
- Check between takes
- Document tuning methods
- Keep reference tuner handy
- Maintain consistent environment