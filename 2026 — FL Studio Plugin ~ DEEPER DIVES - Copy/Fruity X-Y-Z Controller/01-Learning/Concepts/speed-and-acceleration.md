# Understanding Speed and Acceleration

## Beyond Position: Movement Dynamics

The Fruity X-Y-Z Controller offers two additional outputs that track **how** you move, not just **where** you are. These dynamic outputs—Speed and Acceleration—unlock expressive possibilities beyond static positioning.

## Speed Output Explained

### What It Measures
- **Instantaneous velocity**: How fast the cursor is moving
- Scale: 0% (stopped) to 100% (maximum detected speed)
- Updated in real-time as you drag or swipe

### Output Characteristics
- Smooth, continuous values during motion
- Drops to 0% when cursor stops
- Peaks during rapid swipes or gestures
- Responsive to both direction and magnitude of movement

### Creative Applications

**1. Velocity-Sensitive Filter**
```
Speed → Filter Cutoff modulation
Slow exploration = Gentle tone variations  
Fast swipe = Dramatic filter sweep
Stationary = Base cutoff frequency
```

**2. Dynamic Distortion Drive**
```
Speed → Distortion Amount
Moving = More drive and grit
Stopped = Clean tone returns
```

**3. Rhythmic Gate/Trigger**
```
Speed threshold → Trigger events
Fast movements = Accent notes or hits
Builds rhythmic interest through motion
```

## Acceleration Output Explained

### What It Measures
- **Change in velocity**: Getting faster or slower
- Scale: -100% (rapid deceleration) to +100% (rapid acceleration)
- Center (0%) = constant speed or stopped

### Output Characteristics
- Spikes at beginning of movements (positive acceleration)
- Spikes at end of movements (negative acceleration)
- Near-zero during constant-speed drags
- Captures "effort" and "intention" in gestures

### Creative Applications

**1. Accent and Expression**
```
Positive Acceleration → Volume/Expression boost
Start moving = Note attack emphasized
Captures performance intention naturally
```

**2. Note Triggering**
```
Acceleration threshold → Trigger new notes
Quick gesture starts = New note/arpeggio step
Turns movement into rhythmic sequencer
```

**3. Envelope Following**
```
Acceleration shape → Envelope characteristics
Fast attack in gesture = Fast envelope attack
Natural correlation between motion and sound
```

## Speed vs Acceleration: When to Use Each

### Choose Speed When:
- You want continuous modulation based on movement intensity
- Creating filter sweeps that respond to gesture velocity
- Building "humanized" parameter variation
- Making expressiveness proportional to physical effort

### Choose Acceleration When:
- You want event triggers at gesture boundaries
- Creating accent detection for dynamic performances
- Building interactive instruments that respond to "intention"
- Designing gesture-based sequencers or arpeggiators

## Combined Usage: The "Gesture Profile"

Using both outputs together captures the complete character of a movement:

```
Performance Gesture Analysis:
├─ Position (X/Y/Z): Where you are
├─ Speed: How fast you're moving  
└─ Acceleration: How your movement is changing

Together, they describe the complete gesture curve:
- Start: Position change + rising speed + positive acceleration
- Sustain: Position change + constant speed + zero acceleration  
- Stop: Position hold + dropping speed + negative acceleration
```

## Practical Setup Guide

### Setup 1: Expressive Lead Synth
```
Controller Mappings:
├─ X → Oscillator Pitch (±12 semitones)
├─ Y → Filter Cutoff
├─ Z → LFO Rate
├─ Speed → Filter Resonance boost
└─ Acceleration → Note accent (volume boost)

Result: Every aspect of the sound responds to how you move
```

### Setup 2: Dynamic Drum Processing
```
Controller Mappings:
├─ X → Pan position
├─ Speed → Compression threshold (faster = more compression)
└─ Acceleration → Transient shaper attack

Result: Drums respond dynamically to your performance energy
```

### Setup 3: 3D Soundscape Navigation
```
Controller Mappings:
├─ X → Pan (left/right position)
├─ Y → Volume (front/back depth illusion)
├─ Z → Reverb send (distance perception)
├─ Speed → Filter brightness (movement = clarity)
└─ Acceleration → Delay throws (accents = echoes)

Result: Navigate through a spatial audio environment with complete gesture control
```

## Recording and Editing

### Live Performance Capture
- All five outputs (X, Y, Z, Speed, Acceleration) can be recorded simultaneously
- Use FL Studio's "Record automation" feature during playback
- Each output appears as separate automation clips

### Post-Performance Refinement
- Edit recorded automation in the Playlist
- Smooth speed/acceleration curves for cleaner modulation
- Quantize gestures to grid for rhythmic precision
- Layer multiple takes for complex arrangements

## Pro Tips

1. **Start Simple**: Master position control first, then add speed/acceleration
2. **Visual Feedback**: Enable "Show automation values" to see real-time output
3. **Gesture Memory**: Practice repeatable gestures for consistent results
4. **MIDI Mapping**: Route outputs to external hardware for hybrid setups
5. **Modulation Matrix**: Use X-Y-Z Controller with Patcher for complex routing

[SRC: IL-MAN]
