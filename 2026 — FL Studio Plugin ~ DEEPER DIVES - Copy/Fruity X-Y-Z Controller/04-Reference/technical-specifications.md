# Fruity X-Y-Z Controller - Technical Reference

## Plugin Specifications

### Type
Internal Controller / 3D Vector Pad

### Function
Converts 2D mouse/touch position + depth control into five automation outputs:
- X Position (0-100%)
- Y Position (0-100%)
- Z Position (0-100%)
- Speed (0-100%)
- Acceleration (-100% to +100%)

### Output Range
All outputs produce continuous values from 0% to 100% (or -100% to +100% for acceleration) suitable for automation linking.

## Control Methods

### Mouse/Trackpad
- **X/Y**: Cursor position within pad
- **Z**: Scroll wheel while hovering

### Touchscreen/Tablet
- **X/Y**: Single finger position
- **Z**: Two-finger pinch gesture
- **Multi-touch**: Multiple fingers on multiple instances

### MIDI Controller
- Any CC or joystick can be mapped to X, Y, Z
- Speed and Acceleration derived from movement

## Modes

### Absolute Mode
- Position directly determines output value
- 0%,0% = bottom-left; 100%,100% = top-right
- Predictable, visual feedback
- Best for: Spatial mixing, touchscreens

### Relative Mode
- Movement changes values incrementally
- Values persist when released
- No position snapping
- Best for: Continuous sweeps, DJ-style control

## Multi-Touch Support

### Standard Gestures
- **Single finger**: X and Y control
- **Two-finger drag**: Z control via pinch
- **Three-finger**: Context menu (OS dependent)

### Multi-Instance Control
- Multiple X-Y-Z Controller instances can be controlled simultaneously
- Each instance maintains independent state
- Ideal for tablet performances with multiple parameters

## Linking and Automation

### Linking to Parameters
1. Right-click target parameter in any plugin
2. Select "Link to controller"
3. Choose X-Y-Z Controller output from list
4. Set range and curve options

### Recording Automation
- Enable "Record automation" in Transport panel
- Perform movements during playback
- All five outputs recorded as separate clips
- Edit in Playlist after recording

### MIDI Learn
- Right-click X-Y-Z Controller parameter
- Select "Link to controller"
- Move external controller to assign
- Save as preset for hardware integration

## Performance Considerations

### Latency
- Controller operates at audio buffer rate
- Lower buffer sizes reduce touch-to-sound delay
- Recommended: 256 samples or lower for live use

### CPU Usage
- Minimal CPU impact
- Multiple instances have negligible overhead
- Speed/Acceleration calculations add minimal load

### Memory
- No sample playback
- No significant memory usage
- Suitable for unlimited instances

## Advanced Features

### Speed Output
- Measures velocity of cursor movement
- Updated in real-time
- Use for: Dynamic expression, velocity-sensitive effects

### Acceleration Output
- Measures change in velocity
- Positive = speeding up, Negative = slowing down
- Use for: Accent detection, trigger events

### Gesture Recognition
- Controller tracks gesture patterns
- Speed and Acceleration capture "how" you move
- Enables humanized, expressive control

## Integration with Other Plugins

### Patcher
- Route X-Y-Z Controller through Patcher
- Create complex modulation matrices
- Multiple outputs to multiple targets
- Save as reusable macros

### Gross Beat
- Use X-Y-Z to control time/pitch manipulation
- Speed for gate patterns
- Position for momentary effects

### Harmor/Sytrus
- Control additive/subtractive parameters
- Morph between timbres
- Real-time spectral manipulation

## File Locations and Presets

### User Presets
- Saved in FL Studio user data folder
- Can be organized in subfolders
- Load/save via plugin menu

### Default Presets
- Plugin ships with basic configurations
- Found in FL Studio installation directory
- Can be modified and saved as user presets

## Troubleshooting

### Controller Not Responding
- Check "On/Off" button in plugin header
- Verify target parameter is properly linked
- Ensure plugin is not frozen or disabled

### Z-Axis Not Working
- Use scroll wheel (mouse) or pinch gesture (touch)
- Verify Z output is linked to target
- Check mode selection (Absolute/Relative)

### Jerky Movement
- Reduce audio buffer size
- Disable unnecessary visualizations
- Check CPU usage

[SRC: IL-MAN]
