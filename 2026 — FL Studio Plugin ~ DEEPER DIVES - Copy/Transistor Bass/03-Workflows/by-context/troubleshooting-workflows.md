# Transistor Bass Troubleshooting

## Sound Issues

### No Sound Output
**Causes**: 
- Mixer channel muted
- Wrong MIDI channel
- Volume too low
- Plugin bypassed

**Solutions**:
1. Check mixer channel volume
2. Verify MIDI input channel
3. Increase main volume knob
4. Disable plugin bypass

### Weak Bass Response
**Causes**:
- Cutoff too low
- Resonance too high
- Sub-bass not engaged
- Wrong octave

**Solutions**:
1. Increase cutoff to 12-2 o'clock
2. Reduce resonance to 9-10 o'clock
3. Add sub-bass layer
4. Check octave setting

### No Acid Sound
**Causes**:
- No accent automation
- Decay too long
- No slide patterns
- Filter not moving

**Solutions**:
1. Add accent automation
2. Set decay to 2-3 o'clock
3. Add slide between notes
4. Automate cutoff movement

## Pattern Issues

### Notes Not Playing
**Causes**:
- Pattern not active
- Wrong pattern number
- Transport not running
- Wrong note range

**Solutions**:
1. Activate pattern in playlist
2. Check pattern selector
3. Start FL Studio transport
4. Use C1-C3 range

### Timing Problems
**Causes**:
- Wrong pattern length
- Swing enabled incorrectly
- Quantization issues
- Buffer too low

**Solutions**:
1. Set correct pattern length
2. Adjust swing amount
3. Check quantize settings
4. Increase buffer size

## Performance Issues

### CPU Spikes
**Causes**:
- High oversampling
- Multiple instances
- Complex automation
- Buffer too low

**Solutions**:
1. Reduce oversampling
2. Freeze patterns
3. Simplify automation
4. Increase buffer size

### Audio Glitches
**Causes**:
- Low buffer size
- Driver issues
- CPU overload
- Memory issues

**Solutions**:
1. Increase ASIO buffer
2. Update audio drivers
3. Close other plugins
4. Restart FL Studio