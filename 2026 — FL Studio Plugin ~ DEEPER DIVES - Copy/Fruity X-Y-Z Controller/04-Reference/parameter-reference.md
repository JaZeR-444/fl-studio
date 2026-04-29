# Complete Parameter Reference

## Output Parameters

### X Position
- **Range**: 0% to 100%
- **Default**: 50% (center)
- **Control**: Horizontal mouse/touch position
- **Type**: Position
- **Common Mappings**: Pan, oscillator mix, stereo width, pitch bend

#### Typical Uses
- Stereo panning: 0% = hard left, 100% = hard right
- Morphing: 0% = state A, 100% = state B
- Width: 0% = mono, 100% = full stereo

### Y Position
- **Range**: 0% to 100%
- **Default**: 50% (center)
- **Control**: Vertical mouse/touch position
- **Type**: Position
- **Common Mappings**: Filter cutoff, volume, brightness, intensity

#### Typical Uses
- Filter sweeps: 0% = closed/dark, 100% = open/bright
- Volume: 0% = silent, 100% = full level
- Brightness: Lower = darker, Higher = brighter

### Z Position
- **Range**: 0% to 100%
- **Default**: 0% (back/minimum)
- **Control**: Mouse wheel scroll OR touch pinch gesture
- **Type**: Position
- **Common Mappings**: Reverb send, effect depth, distance, wet/dry

#### Typical Uses
- Reverb depth: 0% = dry, 100% = wet
- Effect intensity: 0% = subtle, 100% = extreme
- Distance perception: 0% = close, 100% = far

#### Control Methods by Device
| Device | Z Control |
|--------|-----------|
| Mouse | Scroll wheel while hovering |
| Trackpad | Two-finger vertical scroll |
| Touchscreen | Pinch (two fingers spread/apart) |
| Tablet | Pinch gesture |

### Speed
- **Range**: 0% to 100%
- **Default**: 0% (stopped)
- **Control**: Calculated from movement velocity
- **Type**: Movement
- **Common Mappings**: LFO depth, distortion amount, accent boost

#### Behavior
- 0% = cursor not moving
- 50% = moderate movement speed
- 100% = maximum detected speed
- Continuously updated during movement

#### Typical Uses
- Dynamic expression: Moving creates more effect
- Velocity detection: Fast movements trigger more
- Modulation: Speed controls depth of other modulations

### Acceleration
- **Range**: -100% to +100%
- **Default**: 0% (constant speed or stopped)
- **Control**: Calculated from change in speed
- **Type**: Movement
- **Common Mappings**: Note trigger, accent detection, transient boost

#### Behavior
- Positive (+): Speeding up (movement beginning)
- Zero (0): Constant speed or stopped
- Negative (-): Slowing down (movement ending)
- Spikes at gesture boundaries

#### Typical Uses
- Accent detection: Sudden start = accent spike
- Envelope following: Gesture attack = sound attack
- Trigger events: Threshold crossing starts actions

## Mode Parameters

### Absolute Mode
- **Behavior**: Position = Value directly
- **Bottom-left (0%,0%)**: X=0%, Y=0%
- **Top-right (100%,100%)**: X=100%, Y=100%
- **Center (50%,50%)**: X=50%, Y=50%
- **Best for**: Visual feedback, spatial control, touchscreens

#### Characteristics
- Predictable output based on position
- Immediate visual correlation
- Values snap to cursor position
- Suitable for precise positioning

### Relative Mode
- **Behavior**: Movement changes values incrementally
- **Moving right**: X increases
- **Moving up**: Y increases
- **Releasing**: Values hold at current position
- **Best for**: Continuous sweeps, DJ-style control

#### Characteristics
- No position snapping
- Values accumulate over time
- Can exceed normal ranges with extended movement
- Suitable for smooth, continuous control

## Configuration Parameters

### Input Sensitivity
- **Mouse**: OS-level sensitivity affects response
- **Touch**: Device settings affect gesture detection
- **MIDI**: Controller resolution (7-bit or 14-bit)

### Mapping Options
When linking to parameters:
- **Range**: Set minimum and maximum output values
- **Curve**: Linear, logarithmic, or custom mapping
- **Invert**: Reverse output (0% = max, 100% = min)
- **Smoothing**: Interpolation for stepped outputs

## Advanced Parameters

### Gesture Detection
- **Resolution**: Position updates at audio buffer rate
- **Speed calculation**: Delta position / time
- **Acceleration calculation**: Delta speed / time
- **Gesture memory**: Last 100ms for trend analysis

### Multi-Touch Parameters
- **Touch count**: Number of active touch points
- **Primary touch**: First finger controls X/Y
- **Secondary gesture**: Second touch controls Z
- **Maximum touches**: Device-dependent (typically 5-10)

### Performance Metrics
- **Update rate**: Audio callback rate (typically 44.1-48kHz processing)
- **Latency**: Audio buffer dependent (5-20ms typical)
- **Resolution**: Floating-point precision
- **Interpolation**: Smooth value transitions

## Default Mappings Quick Reference

### Spatial Audio (Default)
```
X → Pan (-100 to +100)
Y → Filter cutoff (brightness = distance)
Z → Reverb send (depth)
```

### Synth Performance (Default)
```
X → Pitch bend
Y → Filter cutoff
Z → Resonance or drive
```

### Effect Control (Default)
```
X → Effect A amount
Y → Effect B amount
Z → Effect C amount
```

## Parameter Combinations

### Five-Output Performance
Using all outputs simultaneously:
```
X → Position 1
Y → Position 2
Z → Position 3
Speed → Dynamic parameter
Acceleration → Accent parameter
```

### Gesture-Based Control
Using movement outputs:
```
Position outputs → Static parameters
Speed → Velocity-sensitive parameter
Acceleration → Trigger or accent parameter
```

### 3D Morphing
Using position for state blending:
```
X → Parameter A (State 1 ↔ State 2)
Y → Parameter B (State 1 ↔ State 2)
Z → Parameter C (State 1 ↔ State 2)
Result: 8 possible states (cube corners)
```

[SRC: IL-MAN]
