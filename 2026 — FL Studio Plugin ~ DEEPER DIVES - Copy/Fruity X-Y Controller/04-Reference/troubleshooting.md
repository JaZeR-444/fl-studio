# Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: Controller Not Responding

**Symptom**: Moving X-Y pad doesn't affect target parameter

**Possible Causes & Solutions**:

1. **Mapping not established**
   - Solution: Right-click target parameter → "Link to controller" → Select X-Y Controller
   - Verify the connection in the wrapper

2. **Wrong output selected**
   - Solution: Check if X, Y, Speed, or Acceleration is mapped
   - Some parameters respond better to X/Y vs Speed

3. **Target parameter not automatable**
   - Solution: Check if the parameter can be controlled externally
   - Some plugins have locked parameters

4. **Controller disabled**
   - Solution: Check if X-Y Controller is muted or bypassed
   - Verify the channel is active

### Issue 2: Jumping or Glitchy Values

**Symptom**: Parameter jumps erratically when moving pad smoothly

**Possible Causes & Solutions**:

1. **Conflicting automation**
   - Solution: Check if another automation clip is also controlling the parameter
   - Mute or delete conflicting automation

2. **Multiple controller mappings**
   - Solution: Check if the parameter is mapped to multiple controllers
   - Keep only one active mapping

3. **High smoothing needed**
   - Solution: Increase Smoothing setting (10-30%)
   - Interpolates between values

4. **CPU overload**
   - Solution: Check CPU meter for spikes
   - Freeze tracks or increase buffer size

### Issue 3: No Values at Center Position

**Symptom**: Center of pad produces 0 or unexpected values

**Possible Causes & Solutions**:

1. **Min/Max range settings**
   - Solution: Check X-Min, X-Max, Y-Min, Y-Max settings
   - Center position (50%) might fall outside calibrated range

2. **Inverted mapping**
   - Solution: Check if "Invert" is enabled in the mapping dialog
   - May cause unexpected value relationships

3. **Custom curve issues**
   - Solution: Reset mapping graph to Linear
   - Test with default curve first

### Issue 4: Can't Record Performance

**Symptom**: Gestures don't appear as automation in playlist

**Possible Causes & Solutions**:

1. **Recording not armed**
   - Solution: Enable record button (red circle)
   - Check "Recording filter" includes "Automation"

2. **Wrong record mode**
   - Solution: Ensure "Automation" is checked in the record filter
   - Not just "Notes" or "Audio"

3. **X-Y Controller filtered out**
   - Solution: Check if X-Y Controller is excluded from recording
   - Remove from filter list if present

4. **Overwrite vs Blend mode**
   - Solution: Check if overwrite mode is enabled
   - May be replacing instead of adding automation

### Issue 5: Relative Mode Confusion

**Symptom**: Values don't match pad position in Relative mode

**This is expected behavior**: 
- Relative mode outputs CHANGE from previous position, not absolute value
- Output = Current Value + (Position Change × Sensitivity)

**Solutions**:

1. **Use Absolute mode** if you want direct position = value
2. **Understand Relative mode** is for continuing existing automation
3. **Clear current value** if you want predictable starting point

### Issue 6: Performance Timing Off

**Symptom**: Recorded gestures don't align with the beat

**Possible Causes & Solutions**:

1. **Latency issues**
   - Solution: Reduce audio buffer size (256 or lower)
   - Disable CPU-heavy plugins during recording

2. **No grid snap during recording**
   - Solution: Enable snap to grid for recording
   - Or quantize after recording

3. **Human timing variation**
   - Solution: This may be intentional
   - Quantize if you want tight timing
   - Keep if you want human feel

### Issue 7: Mapping Graph Not Working

**Symptom**: Custom curve doesn't affect response as expected

**Possible Causes & Solutions**:

1. **Curve not saved**
   - Solution: Click "Accept" or close dialog properly
   - Verify curve appears in the mapping

2. **Testing wrong parameter**
   - Solution: Make sure you're testing the mapped parameter
   - Not another similar parameter

3. **Curve too extreme**
   - Solution: Reset to Linear and test
   - Gradually adjust curve

### Issue 8: Speed/Acceleration Not Triggering

**Symptom**: Speed or Acceleration outputs don't affect targets

**Possible Causes & Solutions**:

1. **Not moving fast enough**
   - Solution: Speed requires actual movement velocity
   - Static position = 0 speed

2. **Threshold too high**
   - Solution: Speed outputs are absolute values
   - Check if target parameter responds to low values

3. **Smoothing too high**
   - Solution: Speed detection happens before smoothing
   - But high smoothing may affect response

4. **Wrong output selected**
   - Solution: Verify you mapped Speed or Acceleration
   - Not X or Y output

## Performance-Specific Issues

### Lag or Delay During Performance

**Symptoms**: Gesture and sound don't align; delayed response

**Solutions**:
1. Lower buffer size (128-256 samples)
2. Freeze CPU-intensive tracks
3. Close unnecessary plugin windows
4. Disable non-essential effects during recording
5. Use ASIO drivers with low latency

### Can't "Feel" the Response

**Symptoms**: Difficult to control parameters intuitively

**Solutions**:
1. **Use Linear curves** for predictable response
2. **Reduce mapped range** (don't use full 0-100%)
3. **Practice without recording** first
4. **Monitor visually** (watch parameter move)
5. **Start with 1-2 parameters** before adding more

### Accidental Parameter Changes

**Symptoms**: Bump pad and parameters jump unexpectedly

**Solutions**:
1. **Use Hold mode** to latch last position
2. **Enable "Reset on Play"** for consistent starts
3. **Create dead zones** in mapping graphs
4. **Use Relative mode** to avoid initial jumps
5. **Increase smoothing** to reduce accidental changes

## Technical Issues

### Controller Disappears from Menu

**Symptom**: X-Y Controller not showing in "Link to controller" list

**Solutions**:
1. Rescan plugins (Options → Manage plugins)
2. Check if controller is in correct channel
3. Verify FL Studio version compatibility
4. Try reloading the project

### Automation Won't Delete

**Symptom**: Can't remove recorded automation data

**Solutions**:
1. Right-click automation clip → Delete
2. Or use Edit menu → Delete
3. Check if automation is in an pattern vs. playlist
4. Verify not locked or protected

### Project File Size Explodes

**Symptom**: File size increases dramatically after recording

**Cause**: High-density automation data

**Solutions**:
1. Use "Smooth" function to reduce points
2. Manually delete unnecessary points
3. Reduce recording resolution if possible
4. Comp takes instead of keeping all

## Quick Diagnostic Steps

When something isn't working:

1. **Check basics**: Is the controller loaded? Is it enabled?
2. **Verify mapping**: Is the connection established correctly?
3. **Test with simple target**: Try mapping to mixer volume first
4. **Use Linear curve**: Eliminate curve complexity
5. **Check for conflicts**: Is something else controlling the parameter?
6. **Restart FL Studio**: Sometimes fixes mysterious issues
7. **Check manual**: [SRC: IL-MAN] for official documentation

## Getting Help

If issues persist:

1. **Check FL Studio manual**: [SRC: IL-MAN]
2. **Image-Line forums**: Community support
3. **YouTube tutorials**: Visual demonstrations
4. **Reset to defaults**: Sometimes starting fresh helps

## Prevention Checklist

Before starting a session:

- [ ] Verify low latency settings
- [ ] Test all mappings before recording
- [ ] Check for conflicting automation
- [ ] Calibrate ranges appropriately
- [ ] Practice gestures without recording
- [ ] Have backup plan if controller fails
- [ ] Save project before extensive recording
