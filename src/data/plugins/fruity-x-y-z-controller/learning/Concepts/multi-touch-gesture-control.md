# Multi-Touch and Gesture Control

## Touch-Optimized Performance

The X-Y-Z Controller is specifically designed for modern touch interfaces, enabling expressive control on tablets, touchscreens, and hybrid devices.

## Standard Touch Gestures

### Single Finger (X and Y)
- **Drag**: Controls X (horizontal) and Y (vertical) simultaneously
- **Tap and hold**: Locks position for sustained values
- **Release**: Values hold (Absolute mode) or continue modulation (Relative mode)

### Two-Finger Pinch (Z-Axis)
- **Pinch inward**: Decreases Z value (0-50% range)
- **Spread outward**: Increases Z value (50-100% range)
- **Single-finger scroll**: Alternative Z control on some devices

### Zest Gesture (Advanced)
- **Quick flick**: Brief Z modulation for "stabs" or accents
- **Circular motion**: Complex parameter interplay combining all three axes

## Multi-Touch Scenarios

### Scenario 1: Tablet Performance
**Setup**: iPad or Windows tablet running FL Studio Mobile/Remote
**Gestures**: 
- One hand for X/Y positioning
- Pinch gesture on same hand for Z control
- Result: True one-handed 3D performance

### Scenario 2: Hybrid Studio Control
**Setup**: Touchscreen monitor + traditional mouse
**Workflow**:
- Touch for expressive performance passages
- Mouse for precise positioning during mixing
- Seamless mode switching between approaches

### Scenario 3: Live Stage Performance
**Setup**: Touchscreen laptop or tablet stand
**Technique**:
- Pre-mapped macro controls
- Visual feedback on screen showing parameter states
- Multiple X-Y-Z Controller instances for different instrument groups

## Speed & Acceleration Outputs

Beyond position, the controller tracks **how you move**:

### Speed Output
- Measures velocity of cursor movement
- Fast swipes = higher speed values
- Use for: Triggering envelope followers, accent detection

### Acceleration Output  
- Measures change in speed (getting faster/slower)
- Beginning/end of gestures = acceleration spikes
- Use for: Dynamic expression, "effort" detection

### Practical Applications

**Dynamic Filter Opening**
```
Speed → Filter Cutoff
Slow drag  = Gentle filter opening
Fast swipe = Dramatic filter sweep
```

**Accent Detection**
```
Acceleration → Distortion Amount
Sudden start = Brief distortion spike
Smooth motion = Clean sustained tone
```

## Touch Calibration Tips

1. **Surface Area**: Larger pads = finer control; smaller pads = faster response
2. **Sensitivity**: Adjust OS-level touch sensitivity if available
3. **Palm Rejection**: Disable for intentional two-handed control
4. **Latency**: Lower buffer sizes reduce touch-to-sound delay

## Common Multi-Touch Workflows

### Workflow: One-Handed Synth Performance
1. Load X-Y-Z Controller before synth
2. Map X = Cutoff, Y = Resonance, Z = Distortion
3. Perform with single hand controlling all timbre aspects
4. Record automation for later refinement

### Workflow: Spatial Audio Positioning
1. Map X = Pan, Y = Reverb Send, Z = Delay Time
2. Use touch to "throw" sounds around the stereo field
3. Pinch to control depth/distance perception
4. Creates immersive 3D mix movement

[SRC: IL-MAN]
