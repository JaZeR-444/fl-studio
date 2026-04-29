# Troubleshooting Matrix

## Display and Interface Issues

| Problem | Symptoms | Likely Cause | Solution | Prevention |
|---------|----------|--------------|----------|--------------|
| **No Display Activity** | Flat line, no movement | No audio reaching plugin | Check routing, verify track output | Verify signal chain before analysis |
| **Display is Frozen** | Static display, no updates | Plugin frozen or CPU overload | Restart Wave Candy, reduce CPU usage | Monitor CPU with multiple instances |
| **Display Jumps Erratically** | Unstable, jumpy display | FFT size too small, buffer issues | Increase FFT size, check FL buffer | Use appropriate FFT for task |
| **Display Too Dark/Light** | Can't see information | Wrong amplitude range | Adjust amplitude scale | Set appropriate range for signal |
| **Colors Hard to Read** | Poor visibility | Display type, lighting | Change display type (Rainbow/Grayscale) | Use high-contrast settings |
| **Window Covers Controls** | Can't access FL Studio | Poor placement | Use transparency mode, reposition | Strategic window placement |

## Mode-Specific Problems

### Spectrum Mode Issues

| Problem | Symptoms | Cause | Solution |
|---------|----------|-------|----------|
| **Poor Frequency Resolution** | Blurry frequency detail | FFT size too small | Increase FFT size to 8192+ |
| **Slow Response Time** | Display lag behind audio | FFT size too large, high smoothing | Decrease FFT size, reduce smoothing |
| **Can't See Low Frequencies** | Low end invisible | Wrong frequency scale or range | Use Log scale, adjust amplitude range |
| **High Frequency Noise** | Static in high frequencies | Noise floor visible | Increase smoothing, adjust range |
| **No Detail in Mids** | Midrange looks flat | Display range too wide | Narrow amplitude range for mid focus |

### Oscilloscope Mode Issues

| Problem | Symptoms | Cause | Solution |
|---------|----------|-------|----------|
| **Unstable Display** | Waveform jumping | Wrong trigger settings | Use Auto trigger, adjust trigger level |
| **Can't See Transients** | Rounded, unclear transients | Time scale too long | Decrease time scale to 10-30ms |
| **Clipped Waveform** | Flat-topped peaks | Amplitude scale wrong | Adjust amplitude scale or Auto |
| **No Waveform Detail** | Thick lines, no definition | Display type wrong | Change from Solid to Line |
| **Trigger Misses Peaks** | Display doesn't sync | Trigger level too high | Lower trigger level or use Auto |

### Vectorscope Mode Issues

| Problem | Symptoms | Cause | Solution |
|---------|----------|-------|----------|
| **Pattern Too Small** | Tiny dot in center | Low stereo content or zoom | Increase zoom, check stereo signal |
| **Pattern Scattered** | Random dots everywhere | Phase issues or bad signal | Check for phase problems, verify routing |
| **No Center Content** | Empty center hole | Mono compatibility issue | Check phase correlation, fix stereo processing |
| **Pattern Too Fast** | Flickering, unreadable | Persistence too low | Increase persistence for stable display |
| **Can't See Details** | Pattern looks blurry | Zoom too low | Increase zoom for more detail |

### Peak Meter Mode Issues

| Problem | Symptoms | Cause | Solution |
|---------|----------|-------|----------|
| **Meters Don't Move** | Static meters | No audio signal | Check routing, verify input |
| **Clip Always On** | Permanent clip indicator | Reference level wrong | Adjust reference level to 0dBFS |
| **Meters Too Slow** | Laggy level response | Ballistics set to Slow | Set to Fast for peak detection |
| **Can't See Low Levels** | Meters stuck at bottom | Range too narrow | Adjust scale or reference level |

## Performance and CPU Issues

| Problem | Symptoms | Cause | Solution |
|---------|----------|-------|----------|
| **Audio Glitches** | Clicks, dropouts | Too many instances, high CPU | Reduce instances, lower FFT sizes |
| **System Slowdown** | FL Studio becomes sluggish | Wave Candy CPU usage | Close unused instances |
| **Display Lag** | Delayed visual response | Buffer size too large | Reduce FL Studio buffer to 512-256 |
| **Memory Issues** | System memory warning | Multiple large instances | Reduce instances, restart FL Studio |

## Configuration and Setup Issues

| Problem | Symptoms | Cause | Solution |
|---------|----------|-------|----------|
| **Wrong Signal Analysis** | Display doesn't match expected audio | Wrong plugin chain position | Move Wave Candy to correct chain position |
| **Mono Signal Only** | No stereo information | Summed input, mono track | Check track routing, use stereo track |
| **Can't Save Settings** | Preset won't save | File permissions, plugin issue | Check folder permissions, restart FL |
| **Settings Keep Resetting** | Returns to defaults each session | Auto-save disabled | Save preset manually, check preferences |
| **Multiple Instances Conflict** | Same settings on all instances | Copy-paste issue | Configure each instance separately |

## Audio Signal Problems

| Problem | Symptoms | Cause | Solution |
|---------|----------|-------|----------|
| **No Low Frequencies** | Spectrum empty below 200Hz | High-pass filter upstream | Check for HPFs in chain |
| **Excessive High Frequencies** | Bright display, harsh sound | Over-boosting, distortion | Check upstream EQ/processing |
| **Stereo Image Issues** | Vectorscope shows problems | Phase problems, bad stereo processing | Check stereo plugins, phase correlation |
| **Dynamic Range Problems** | Squashed or overly dynamic display | Compression settings | Check compression in signal chain |
| **Distortion Visible** | Clipping, fuzzy display | Digital clipping in chain | Find and fix clipping source |

## Genre-Specific Troubleshooting

### Hip-Hop Issues

| Problem | Symptoms | Solution |
|---------|----------|----------|
| **808s Disappear in Mono** | Lost low end when summed | Check sub content is mono |
| **Kick/808 Masking** | Low-frequency buildup | Use Spectrum to identify overlap |
| **Vocal Gets Lost** | Can't see vocal presence | Check 2-5kHz masking, create space |
| **Harsh Hi-Hats** | Sharp spikes 8-12kHz | Use EQ to tame harshness |

### Electronic Music Issues

| Problem | Symptoms | Solution |
|---------|----------|----------|
| **Synth Frequencies Overlap** | Muddy frequency areas | Use Spectrum to identify masking |
| **Stereo Effects Cause Issues** | Phase problems on Vectorscope | Check stereo plugins for phase issues |
| **Sub-Bass Inconsistent** | Unstable low-end display | Use high-res Spectrum (16k+ FFT) |
| **High-Frequency Fatigue** | Excessive high-end energy | Roll off above 12kHz if needed |

### Acoustic/Jazz Issues

| Problem | Symptoms | Solution |
|---------|----------|----------|
| **Unnatural Frequency Balance** | Processed sound | Aim for natural Spectrum curves |
| **Stereo Image Too Wide** | Unrealistic space | Use Vectorscope to check natural width |
| **Lost Dynamics** | Squashed display | Reduce compression, check processing |
| **Harsh Transients** | Digital sound | Check for clipping, use gentle processing |

## Emergency Quick Fixes

### When Wave Candy Misbehaves

1. **Reset to Defaults**
   - Right-click interface → Reset to Default
   - Restart plugin if needed

2. **Check Signal Chain**
   - Verify audio is reaching plugin
   - Check mute/solo states
   - Confirm routing is correct

3. **Reduce Load**
   - Close unused instances
   - Lower FFT sizes
   - Increase FL Studio buffer

4. **Restart Workflow**
   - Save project and restart FL Studio
   - Reload Wave Candy on master channel

### When Analysis Doesn't Match What You Hear

1. **Verify Monitoring**
   - Check speaker/headphone connections
   - Verify main output level
   - Check for mono summing issues

2. **Reference Comparison**
   - Load reference track
   - Compare both audio and visuals
   - Identify discrepancies

3. **Trust Your Ears**
   - If it sounds right but looks wrong, trust sound
   - Use Wave Candy as guide, not judge
   - Remember visual tools aren't perfect

## Verification Checklist

### Before Calling Something "Wrong"
- [ ] Is audio actually reaching Wave Candy?
- [ ] Are settings appropriate for the task?
- [ ] Is this the expected behavior for this mode?
- [ ] Have you compared with a known good reference?
- [ ] Does it sound wrong, or just look wrong?

### After Making Changes
- [ ] Does Wave Candy show the expected change?
- [ ] Does it sound better than before?
- [ ] Is the improvement worth any trade-offs?
- [ ] Would this change work in context of full mix?

Remember: Most "problems" with Wave Candy are actually user error or misunderstanding of how the tool works. When in doubt, reset to defaults and start with basic analysis before diving into complex troubleshooting.