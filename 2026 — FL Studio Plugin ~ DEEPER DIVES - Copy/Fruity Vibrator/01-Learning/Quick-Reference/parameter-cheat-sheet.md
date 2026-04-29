# Fruity Vibrator - Parameter Cheat Sheet

## 🎯 Overview
Fruity Vibrator is a **force feedback controller** that translates MIDI and automation into haptic vibrations for compatible hardware (gaming controllers, joysticks, rumble pads).

**IMPORTANT:** Requires legacy DirectX DirectInput force feedback drivers.

---

## 🎛️ Core Parameters

### Force / Intensity
- **Range:** 0-100%
- **Purpose:** Controls vibration strength
- **Sweet Spots:**
  - 10-30%: Subtle haptic feedback
  - 40-60%: Noticeable vibration
  - 70-100%: Strong haptic response
- **Hip-Hop Applications:**
  - Kick drum: 60-80% for impactful bass feel
  - Snare: 40-60% for crisp punch
  - Hi-hats: 10-20% for subtle groove feedback
  - 808s: 70-90% for subsonic rumble

### Effect Slot
- **Purpose:** Selects `.ffe` (Force Feedback Effect) file
- **Common Effect Types:**
  - Constant: Sustained vibration
  - Sawtooth: Rhythmic pulsing
  - Spring: Oscillating feedback
  - Damper: Resistance-based
- **Applications:**
  - Constant: Sub bass monitoring
  - Sawtooth: Rhythmic hi-hat patterns
  - Spring: Synth vibrato feedback

### Test Button
- **Purpose:** Manually trigger vibration
- **Use:** Verify hardware connection
- **Workflow:** Click before each session to confirm device

---

## 🎹 MIDI Mapping

### Note Triggering
- **Mechanism:** Each MIDI note triggers vibration
- **Velocity Mapping:** Note velocity controls intensity
  - 0-31: Light vibration (10-25%)
  - 32-63: Moderate vibration (25-50%)
  - 64-95: Strong vibration (50-75%)
  - 96-127: Max vibration (75-100%)

### Recommended MIDI Mappings
```
Hip-Hop Beat Mapping:
- C3 (Kick): 80% intensity, Constant effect
- D3 (Snare): 60% intensity, Sawtooth effect
- F#3 (Hi-Hat Closed): 20% intensity, Damper effect
- G#3 (Hi-Hat Open): 30% intensity, Spring effect
- A3 (808 Bass): 90% intensity, Constant effect
```

---

## 🔧 Hardware Compatibility

### Supported Devices (Legacy)
- **Xbox 360 Controller:** Dual rumble motors
- **Logitech Force Feedback Wheels:** Racing wheel haptics
- **Logitech Force 3D Pro:** Joystick force feedback
- **Microsoft Sidewinder:** Legacy force feedback joystick
- **Generic Rumble Pads:** DirectInput-compatible

### Modern Compatibility Issues
- **Windows 10/11:** Limited DirectInput support
- **Xbox One/Series Controllers:** No native force feedback support
- **PlayStation Controllers:** Requires third-party drivers
- **USB Connection:** More reliable than Bluetooth

### Driver Requirements
- DirectX DirectInput drivers (pre-Windows 8)
- Device-specific force feedback drivers
- Legacy compatibility mode may be required

---

## 🎚️ Quick Start Workflow

### Initial Setup
1. Connect force feedback device
2. Install device drivers (legacy DirectInput)
3. Load Fruity Vibrator as a generator
4. Click "Test" button to verify connection
5. If no vibration: Check device manager, driver compatibility

### Basic MIDI Mapping
1. Open Piano Roll
2. Add kick notes on C3
3. Set velocity to 100-127
4. Adjust Force parameter to 70-80%
5. Play back to feel kick vibration

### Velocity-Sensitive Setup
1. Map different drums to different notes
2. Vary note velocities for dynamic haptics
3. Adjust Force parameter for overall intensity
4. Test with different effect files

---

## 🎼 Creative Applications

### Beat Production Feedback
- **Kick Drum Feel:** Strong constant vibration for bass impact
- **Snare Precision:** Medium vibration for timing reference
- **Hi-Hat Groove:** Light vibration for rhythmic feel

### Mix Monitoring
- **Sub Bass Detection:** Feel low-end content below monitoring range
- **Kick/Bass Clarity:** Tactile feedback for kick-bass relationship
- **Energy Levels:** Vibration intensity reflects track energy

### Live Performance
- **Audience Engagement:** Attach controller to speaker cabinet
- **Performer Feedback:** Tactile cues during performance
- **Creative Expression:** Haptic dimension to electronic sets

### Experimental Music
- **Multi-Sensory Compositions:** Audio + haptic experiences
- **Spatial Haptics:** Different devices for spatial information
- **Rhythmic Textures:** Complex haptic patterns

---

## ⚠️ Common Issues

### No Vibration
- **Check:** Device connection (USB firmly connected)
- **Check:** Drivers installed (DirectInput support)
- **Check:** Test button response
- **Fix:** Reinstall device drivers, try legacy compatibility mode

### Inconsistent Response
- **Check:** Force parameter not at 0%
- **Check:** MIDI notes are triggering
- **Check:** Device battery (if wireless)
- **Fix:** Use wired connection, verify MIDI routing

### Too Strong / Uncomfortable
- **Fix:** Reduce Force parameter (start at 20-30%)
- **Fix:** Use lower velocity values
- **Fix:** Switch to gentler effect file

### Delayed Response
- **Check:** MIDI latency settings
- **Check:** Device driver settings
- **Fix:** Reduce buffer size, use wired connection

---

## 💡 Pro Tips

### Intensity Management
- Start low (20-30%) and gradually increase
- Use velocity for dynamic control
- Map different intensities to different drums

### Effect Selection
- Constant: Best for sustained notes (808s, bass)
- Sawtooth: Best for rhythmic patterns (hi-hats)
- Spring: Best for melodic elements (synths)

### Automation
- Automate Force parameter for build-ups
- Use automation clips for evolving haptic patterns
- Sync haptic intensity with track energy

### Hardware Optimization
- Use wired connections for reliability
- Keep drivers updated (if available)
- Test before each session
- Consider multiple devices for spatial haptics

---

## 📊 Parameter Summary Table

| Parameter | Range | Purpose | Hip-Hop Sweet Spot |
|-----------|-------|---------|-------------------|
| Force | 0-100% | Vibration intensity | 60-80% (kick), 40-60% (snare) |
| Effect | .ffe files | Vibration pattern | Constant (bass), Sawtooth (rhythmic) |
| Test | Button | Manual trigger | Use for setup verification |
| MIDI Note | C-2 to G8 | Trigger vibration | C3 (kick), D3 (snare), F#3 (hats) |
| Velocity | 0-127 | Dynamic intensity | 100-127 (kick), 80-100 (snare) |

---

## 🔗 Related Resources

### Internal Documentation
- `hardware-compatibility-check.md` - Detailed device compatibility
- `02-Data/presets/hip-hop-mappings.json` - MIDI mapping presets
- `04-Reference/legacy-directx-input.md` - DirectInput technical reference

### External Resources
- [FL Studio Vibrator Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Vibrator.htm)
- DirectX DirectInput SDK documentation
- Force feedback device driver support forums

---

**Last Updated:** 2026-02-04
**Version:** 1.0
**Status:** ✅ Complete
