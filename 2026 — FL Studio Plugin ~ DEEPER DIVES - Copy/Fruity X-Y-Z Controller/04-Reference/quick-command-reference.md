# Quick Command Reference

## Essential Shortcuts and Commands

### Plugin Controls

| Action | Method |
|--------|--------|
| **Enable/Disable** | Click On/Off button in plugin header |
| **Switch Mode** | Click Absolute/Relative toggle |
| **Reset Position** | Click center of pad (Absolute mode) |
| **Record Enable** | Right-click → "Enable recording" |

### Linking Parameters

| Action | Steps |
|--------|-------|
| **Link to X** | Right-click parameter → Link to controller → Select X-Y-Z X |
| **Link to Y** | Right-click parameter → Link to controller → Select X-Y-Z Y |
| **Link to Z** | Right-click parameter → Link to controller → Select X-Y-Z Z |
| **Link Speed** | Right-click parameter → Link to controller → Select X-Y-Z Speed |
| **Link Accel** | Right-click parameter → Link to controller → Select X-Y-Z Accel |

### Recording

| Action | Shortcut/Command |
|--------|----------------|
| **Start Recording** | Ctrl+R or Transport Record button |
| **Record Automation** | Enable in Transport panel |
| **Stop Recording** | Spacebar or Stop button |
| **View Automation** | F7 (Playlist) |

### Z-Axis Control

| Device | Method |
|--------|--------|
| **Mouse** | Scroll wheel while hovering over pad |
| **Trackpad** | Two-finger scroll |
| **Touchscreen** | Pinch gesture (two fingers) |
| **Tablet** | Pinch/spread gesture |

## Common Parameter Mappings

### Spatial Audio (X=Pan, Y=Filter, Z=Reverb)
```
X: Pan (-100 to +100)
Y: Filter Cutoff (200Hz - 20kHz)
Z: Reverb Send (0-100%)
Mode: Absolute
```

### Total Synth (Pitch + Timbre + Space)
```
X: Pitch Bend (±12 semitones)
Y: Filter Cutoff
Z: Resonance
Speed: LFO Depth
Mode: Relative
```

### Drum Punch (Transient + Dynamics + Drive)
```
X: Pan
Y: Transient Shaper
Z: Saturation
Speed: Accent Boost
Accel: Transient Spike
Mode: Relative
```

### Vibe: Warmth
```
X: Detune (0-30%)
Y: Low Cutoff (200-5000Hz)
Z: Saturation (0-40%)
Position: Lower-left quadrant
```

### Vibe: Clarity
```
X: Presence EQ (0-6dB)
Y: High-shelf (0-4dB)
Z: Exciter (0-40%)
Position: Upper-right quadrant
```

### Vibe: Depth
```
X: Width (50-150%)
Y: Reverb (0-70%)
Z: Delay (20-60%)
Position: Upper area
```

### Vibe: Punch
```
X: Transient (0-70%)
Y: Compression (2:1-8:1)
Z: Drive (0-50%)
Speed: Dynamic boost
Mode: Relative
```

### Vibe: Air
```
X: High-pass (20-200Hz)
Y: Air EQ (0-6dB @ 15kHz)
Z: Sparkle (0-50%)
Position: Upper area, low X
```

## Gesture Quick Reference

| Gesture | Motion | Best For |
|---------|--------|----------|
| **Smooth Sweep** | Steady linear movement | Filter sweeps, fades |
| **Quick Flick** | Fast swipe + stop | Accents, one-shots |
| **Circular Orbit** | Round motion | LFO effects, auto-pan |
| **Pinch** | Two-finger spread | Z-axis depth control |
| **3D Throw** | Diagonal + pinch | Complete spatial movement |

## Mode Selection Guide

| Scenario | Mode | Why |
|----------|------|-----|
| Spatial mixing | Absolute | Direct visual correlation |
| Filter sweeps | Relative | Continuous, no snapping |
| Touchscreen | Absolute | Natural direct manipulation |
| DJ-style | Relative | Traditional incremental |
| Touch/tap | Absolute | Predictable positions |

## Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Z not responding | Use scroll wheel or pinch gesture |
| Jerky movement | Lower audio buffer size |
| Not recording | Enable "Record automation" in Transport |
| No visual feedback | Enable "Show touches" (touch devices) |
| Values snapping | Switch to Relative mode |
| Laggy response | Reduce buffer, check CPU |

## Performance Checklist

### Before Performance
- [ ] All parameters linked and tested
- [ ] Mode selected (Absolute/Relative)
- [ ] Audio buffer ≤256 samples
- [ ] "Record automation" enabled
- [ ] Multiple takes ready

### During Performance
- [ ] Watch output levels
- [ ] Use visual feedback if available
- [ ] Keep gestures smooth
- [ ] Anticipate musical phrases

### After Performance
- [ ] Stop recording
- [ ] Review takes in Playlist
- [ ] Edit automation curves
- [ ] Comp best sections
- [ ] Save project

## Preset Quick Load

### File Locations
```
User Presets: Documents\Image-Line\FL Studio\Presets\Plugin presets\Generators\Fruity X-Y-Z Controller
Factory Presets: FL Studio installation folder\Data\Patches\Plugin presets
```

### Loading Presets
1. Click plugin menu (down arrow)
2. Select "Presets"
3. Choose preset from list
4. Or: Right-click parameter → "Load preset"

### Saving Presets
1. Configure controller
2. Click plugin menu
3. "Save preset as..."
4. Name and save to user folder

[SRC: IL-MAN]
