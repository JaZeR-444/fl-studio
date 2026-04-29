# Touch and Gesture Quick Reference

## Device-Specific Control Methods

### Desktop Mouse
| Action | Result |
|--------|--------|
| Move cursor | Controls X and Y |
| Scroll wheel | Controls Z |
| Click and drag | Engages controller |
| Release | Holds last position (Absolute) / continues delta (Relative) |

### Touchscreen (Tablet/Phone)
| Gesture | Result |
|---------|--------|
| Single finger drag | X + Y control |
| Two-finger pinch/spread | Z control |
| Quick tap | Momentary engagement |
| Hold and move | Sustained control |
| Flick | Speed spike for accents |

### Trackpad (Laptop)
| Gesture | Result |
|---------|--------|
| Single finger move | X + Y control |
| Two-finger scroll | Z control |
| Force touch | Optional pressure mapping |

### MIDI Controller (External)
| Input | Mapping |
|-------|---------|
| Joystick X | X position |
| Joystick Y | Y position |
| Ribbon/Slider | Z position |
| Aftertouch | Speed or Acceleration |

## Gesture Library

### Basic Gestures

#### 1. The Sweep
**Motion**: Smooth arc from one edge to opposite edge
**Use**: Filter sweeps, fade ins/outs, spatial traversal
**Produces**: Continuous ramp in X or Y

#### 2. The Pulse  
**Motion**: Quick tap and release
**Use**: One-shot effects, stabs, accents
**Produces**: Brief spike in Speed/Acceleration

#### 3. The Orbit
**Motion**: Circular movement around center
**Use**: LFO-like modulation, rhythmic variation
**Produces**: Sine-like modulation on both X and Y

#### 4. The Flick
**Motion**: Fast swipe with immediate stop
**Use**: Quick transitions, jumps, accents
**Produces**: High speed values, acceleration spike

### Advanced Gestures

#### 5. The 3D Throw
**Motion**: Diagonal movement + simultaneous Z scroll/pinch
**Use**: "Throwing" sounds through 3D space
**Produces**: All three axes change simultaneously

#### 6. The Spiral
**Motion**: Circular motion that spirals inward/outward
**Use**: Complex filter modulation, evolving textures
**Produces**: Periodic X/Y with changing amplitude

#### 7. The Bounce
**Motion**: Quick vertical oscillations
**Use**: Tremolo effects, rhythmic stuttering
**Produces**: Square-wave-like Y modulation

#### 8. The Figure-8
**Motion**: Horizontal figure-8 pattern
**Use**: Stereo panning with filter modulation
**Produces**: Lissajous curve on X/Y outputs

## Gesture-to-Sound Translation

| Gesture Type | Musical Result | Best For |
|--------------|---------------|----------|
| **Smooth/Slow** | Legato, flowing passages | Ambient, pads, strings |
| **Fast/Jagged** | Staccato, aggressive | Drums, percussion, leads |
| **Circular** | Cyclical, repetitive | Arpeggios, rhythmic patterns |
| **Erratic** | Random, experimental | Sound design, effects |
| **Precise** | Controlled, intentional | Mixing, automation |

## Multi-Touch Combinations

### Two-Handed Performance
**Technique**: 
- Left hand: X/Y control for one instrument group
- Right hand: X/Y control for another group
- Both hands: Pinch gestures for Z on respective groups

### Sequential Gestures
**Technique**:
1. Start with slow, deliberate movement (establish baseline)
2. Accelerate into fast gesture (build intensity)
3. Release with quick stop (create accent)

### Counterpoint Gestures
**Technique**:
- Right hand moves up while left hand moves down
- Creates complementary parameter changes
- Useful for stereo width, crossfading

## Practice Drills

### Drill 1: Precision Positioning
1. Set Absolute mode
2. Practice hitting exact corners (0%,0%), (100%,100%), etc.
3. Try hitting center (50%,50%) consistently
4. Gradually increase speed while maintaining accuracy

### Drill 2: Smooth Sweeps
1. Set Relative mode
2. Practice continuous filter sweeps (Y-axis)
3. Focus on steady speed, no jerky movements
4. Record and analyze automation curves

### Drill 3: Z Coordination
1. Map X=Pan, Y=Filter, Z=Reverb
2. Practice moving X/Y while simultaneously scrolling Z
3. Goal: Independent control of all three axes
4. Master the "3D throw" gesture

### Drill 4: Dynamic Expression
1. Map Speed to Filter Resonance
2. Map Acceleration to Distortion
3. Practice phrases with varying intensity
4. Listen to how gesture dynamics affect sound

## Troubleshooting Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Z not responding | Wrong input method | Use scroll wheel or pinch gesture |
| Jumpy control | High sensitivity | Reduce mouse/touch sensitivity |
| Laggy response | High buffer size | Lower audio buffer settings |
| Values snapping | Wrong mode | Switch to Relative for smooth control |
| Unintended modulation | Palm contact | Enable palm rejection or lift hand |

[SRC: IL-MAN]
