# Troubleshooting and FAQ

## Common Issues

### Controller Not Responding

**Symptom**: Moving mouse/touch has no effect on linked parameters

**Solutions**:
1. Verify controller is armed (check "On/Off" button in plugin header)
2. Confirm target parameter is properly linked
3. Check if controller is bypassed in the mixer
4. Ensure plugin is not frozen or disabled

### Z-Axis Won't Control

**Symptom**: X and Y work but Z doesn't respond

**Solutions**:
- **Mouse**: Use scroll wheel while hovering over controller pad
- **Touchscreen**: Use two-finger pinch gesture
- **Trackpad**: Two-finger scroll gesture
- Check Z output is linked to a target parameter
- Verify Absolute/Relative mode selection

### Jerky or Stuttering Movement

**Symptom**: Automation is not smooth, shows stepped values

**Solutions**:
1. Reduce audio buffer size (Options → Audio Settings)
2. Disable "HQ for all plugins" if CPU overloaded
3. Use Relative mode for smoother transitions
4. Increase automation smoothing in settings
5. Check for conflicting automation clips

### Values Snap to Extremes

**Symptom**: Parameters jump to 0% or 100% unexpectedly

**Solutions**:
1. Check you're in Absolute mode (position = value)
2. Verify mapping range limits in link settings
3. Disable "Smart disable" if plugin sleeping
4. Check for competing automation envelopes

### Can't Control Multiple Parameters

**Symptom**: Only one parameter responds despite multiple links

**Solutions**:
1. Each X-Y-Z Controller output (X, Y, Z, Speed, Accel) can link to ONE parameter
2. Use multiple X-Y-Z Controller instances for complex setups
3. Route through Patcher for advanced multi-target routing
4. Check no two links are targeting the same parameter

## Frequently Asked Questions

**Q: Can I use X-Y-Z Controller on the Master channel?**
A: Yes, but effects are applied to the entire mix. Better suited for individual instrument/mixer track control.

**Q: How do I record automation from the controller?**
A: Enable "Record automation" in the Transport panel, then perform while playing. All outputs record as separate automation clips.

**Q: Can I use this with external MIDI controllers?**
A: Yes, map your controller's joystick or ribbon to the X-Y-Z Controller parameters, then link those to targets.

**Q: What's the difference between Speed and Acceleration?**
A: Speed = how fast you're moving (0-100%). Acceleration = how your speed is changing (-100% to +100%).

**Q: Can I use this on a touchscreen?**
A: Yes, fully optimized for touch with multi-finger gesture support including pinch for Z-axis.

**Q: How many instances can I use?**
A: Unlimited. Each instance provides X, Y, Z, Speed, and Acceleration outputs independently.

**Q: Can I invert the output (0% = 100%)?**
A: Yes, use the "Mapping formula" option when linking to reverse the range.

**Q: Does this work with third-party VSTs?**
A: Yes, any automatable parameter in any plugin can be linked.

**Q: Can I use this for live performance?**
A: Absolutely designed for live use. Enable "Performance mode" in FL for best results.

**Q: Why do my gestures feel laggy?**
A: Check audio buffer size (lower = less latency), disable visual effects, and ensure sufficient CPU headroom.

## Performance Optimization

### For Live Performance
1. Set buffer size ≤256 samples
2. Disable unnecessary visualizations
3. Use Relative mode for predictable control
4. Pre-link all parameters before performance
5. Save as template for instant recall

### For Studio Production
1. Higher buffer sizes acceptable (≤1024)
2. Record multiple takes and comp best sections
3. Edit automation curves after recording
4. Use Absolute mode for precise positioning
5. Layer multiple controllers for complex arrangements

### For Touch Devices
1. Enable "Show touches" in OS settings for visual feedback
2. Use screen protector optimized for touch
3. Disable auto-sleep during performance
4. Calibrate touch sensitivity in device settings
5. Practice gestures to build muscle memory

## Advanced Tips

**Creating Macro Controls**:
1. Insert Patcher on mixer track
2. Add X-Y-Z Controller + target plugins inside Patcher
3. Route controller outputs to multiple parameters via modulation matrix
4. Save as preset for reusable macro

**Gesture Quantization**:
1. Record freehand performance
2. Select automation clip in Playlist
3. Use "Quantize" to snap to grid
4. Humanize with randomization if too rigid

**MIDI Learn Workflow**:
1. Right-click X-Y-Z Controller parameter
2. Select "Link to controller"
3. Move external controller to assign
4. Save as preset for hardware integration

[SRC: IL-MAN]
