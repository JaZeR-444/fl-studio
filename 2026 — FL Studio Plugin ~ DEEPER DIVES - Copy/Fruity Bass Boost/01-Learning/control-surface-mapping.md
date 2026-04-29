# Control Surface Mapping Guide

## MIDI Controller Setup

### Recommended Controllers
- **Novation Launchpad Mini**: 8x8 grid for visual control
- **AKAI APC Mini**: Faders and clips control
- **Korg nanoKONTROL2**: 8 faders for precise control
- **Behringer X-Touch Mini**: 8 encoders with displays

### Basic Mapping Strategy

#### Priority 1: Core Parameters
1. **Boost**: Fader 1 (primary control)
2. **Freq**: Fader 2 (frequency selection)
3. **Mix**: Fader 3 (dry/wet balance)
4. **Out**: Fader 4 (output level)

#### Priority 2: Quick Access
5. **Bypass**: Button 1 (toggle effect)
6. **Preset Up**: Button 2 (next preset)
7. **Preset Down**: Button 3 (previous preset)
8. **Reset**: Button 4 (default settings)

## FL Studio MIDI Mapping

### Creating Custom Controls

#### Method 1: MIDI Learn
1. Right-click Fruity Bass Boost parameter
2. Select "Link to controller"
3. Move MIDI controller knob/fader
4. Adjust mapping settings

#### Method 2: Browser Mapping
1. Open Browser → MIDI
2. Drag parameter to MIDI control
3. Configure in MIDI Settings

### Recommended MIDI CC Assignments

| Parameter | CC Number | Range | Reason |
|-----------|-----------|-------|--------|
| Boost | CC 21 | 0-127 | Continuous control |
| Freq | CC 22 | 0-127 | Smooth frequency sweeps |
| Mix | CC 23 | 0-127 | Parallel blending |
| Out | CC 24 | 0-127 | Output adjustment |
| Bypass | CC 25 | 0-63/64-127 | Toggle switch |
| Preset Prev | CC 26 | 0-127 | Preset navigation |
| Preset Next | CC 27 | 0-127 | Preset navigation |

## Performance Templates

### Template 1: Electronic Music Focus
```
Fader 1: Boost (0-100%)
Fader 2: Freq (20-200Hz)
Fader 3: Mix (0-100%)
Fader 4: Out (-12dB to +12dB)
Knob 1: Modulation Amount
Knob 2: LFO Rate
Button 1: Bypass
Button 2: Preset Cycle
```

### Template 2: Live Performance
```
Fader 1: Boost (0-60% limited)
Fader 2: Freq (40-120Hz limited)
Fader 3: Mix (50-100% limited)
Fader 4: Out (0 to +6dB)
Button 1: Tap Tempo Sync
Button 2: Performance Mode
Button 3: Safe Mode (limits)
Button 4: Bypass
```

### Template 3: Mixing Console Integration
```
Channel Strip 1: Boost control
Channel Strip 2: Frequency selection
Channel Strip 3: Mix amount
Channel Strip 4: Output trim
VU Meter: Output level
Solo Button: Isolate effect
```

## Advanced Control Techniques

### Macro Controls Setup

#### "Bass Impact" Macro
Combines Boost and Freq for unified impact control:
- **Low (0-33%)**: Subtle boost, higher freq
- **Medium (34-66%)**: Moderate boost, mid freq
- **High (67-100%)**: Strong boost, lower freq

#### "Mix Weight" Macro
Coordinates Boost and Mix for consistent results:
- Maintains perceived weight across settings
- Automatic level compensation
- Prevents extreme combinations

### Expression Pedal Integration

#### Parameter Expression
- Boost control via expression pedal
- Freq sweeping for dramatic effects
- Mix morphing for transitions

#### Performance Techniques
- Slow pedal movements for musical swells
- Quick changes for emphasis
- Hold positions for sustained enhancement

## Automated Control Setup

### Envelope Follower Mapping
1. Set up envelope follower on sidechain
2. Map to Boost for dynamic enhancement
3. Adjust threshold and ratio
4. Fine-tune attack and release

### LFO Automation
1. Choose target parameter (usually Freq)
2. Set LFO rate (0.1-10Hz range)
3. Adjust modulation amount
4. Sync to project tempo if needed

## Control Surface Best Practices

### Range Limiting
- Limit Boost to 60% for live safety
- Restrict Freq to musical ranges
- Constrain Mix to avoid extreme settings

### Visual Feedback
- Use controller displays for parameter values
- Color code for quick identification
- Include units and ranges

### Preset Organization
- Group presets by genre/application
- Include parameter ranges in preset names
- Use consistent naming conventions

## Troubleshooting MIDI Issues

### Common Problems
- **No Response**: Check MIDI channel assignment
- **Jumping Values**: Enable "pickup mode"
- **Wrong Range**: Adjust min/max in mapping
- **Lag**: Reduce MIDI update rate

### FL Studio Specific Solutions
- Enable "Auto-detect MIDI controllers"
- Use "Link to controller" with "Remove conflicts"
- Set appropriate MIDI input device

## Custom Controller Builds

### DIY MIDI Controller
- Arduino-based with 8 faders
- Custom firmware for Fruity Bass Boost
- Direct parameter mapping
- Visual feedback displays

### TouchOSC Integration
- Custom layout for tablet control
- Multi-touch support
- Visual parameter feedback
- Preset management

Proper controller mapping makes Fruity Bass Boost much more intuitive and powerful for both studio work and live performance.