# Mobile to Desktop Workflow

Cross-platform production with GMS.

## Overview

GMS is available on both:
- **FL Studio Desktop** (Windows/Mac)
- **FL Studio Mobile** (iOS/Android)

This guide covers transferring projects and workflows between platforms.

[SRC: IL-MAN]

---

## File Compatibility

### Presets (.gms)
- **Format:** Native GMS preset files
- **Compatibility:** Cross-platform
- **Transfer:** Cloud storage, email, direct file copy

### Projects (.flp / .flm)
- **FL Studio Mobile projects:** .flm files
- **FL Studio Desktop:** .flp files
- **Transfer:** Can open .flm in desktop FL Studio

---

## Workflow Scenarios

### Scenario 1: Idea Capture on Mobile

**Step 1: Create on Mobile**
```
Open FL Studio Mobile
Load GMS
Sketch melody/bassline
Save as .flm
```

**Step 2: Transfer to Desktop**
```
Options:
1. Email the .flm file
2. Cloud storage (Dropbox, Drive)
3. Direct file transfer
```

**Step 3: Open on Desktop**
```
In FL Studio Desktop:
File > Open > Select .flm
Project loads with GMS settings intact
Refine and expand
```

### Scenario 2: Mobile Sound Design

**Design on Mobile:**
```
Create GMS patches on mobile
Save as .gms presets
Transfer presets to desktop
Use in desktop projects
```

**Advantages:**
- Design sounds anywhere
- Touch interface for quick tweaks
- Test sounds in mobile context

### Scenario 3: Desktop to Mobile

**Refine on Desktop:**
```
Create complex GMS patch on desktop
Freeze/render to audio
Transfer audio to mobile
Use in mobile projects
```

**Reason:**
- Desktop has more CPU power
- Complex patches may tax mobile
- Audio is universal format

---

## Optimization for Mobile

### CPU-Saving Settings

**Unisono:**
```
Desktop: 8-16 voices
Mobile: 2-4 voices (writing)
Mobile: 4-6 voices (rendering)
```

**FX Chain:**
```
Desktop: All 10 FX
Mobile: 2-3 essential FX
Mobile: Render with full FX on desktop
```

**Waveforms:**
```
Complex: Sawtooth + FM (more CPU)
Efficient: Triangle + subtractive (less CPU)
```

### Mobile Preset Checklist

- [ ] 4 or fewer unisono voices
- [ ] 3 or fewer active FX
- [ ] Simple waveforms if possible
- [ ] Test on target device
- [ ] Render to audio if heavy

---

## Cross-Platform Best Practices

### 1. Save Presets Regularly
```
When designing sounds:
Save as .gms frequently
Name descriptively
Organize by category
```

### 2. Test Both Platforms
```
Before finalizing:
Test patch on mobile
Test patch on desktop
Note any differences
```

### 3. Layering Strategy
```
Mobile writing:
Use simpler sounds
Limit polyphony
```

```
Desktop production:
Layer mobile sounds
Add complexity
Process with desktop plugins
```

### 4. Audio Transfer
```
When GMS is too heavy for mobile:
Render from desktop
Transfer audio file (.wav/.mp3)
Use in mobile projects
```

---

## Project Migration Guide

### Mobile to Desktop

**What Transfers:**
- GMS settings ✓
- Notes/MIDI ✓
- Basic mixer settings ✓
- Project structure ✓

**What May Need Adjustment:**
- Audio latency compensation
- Plugin parameters
- Advanced mixer routing
- External plugins (not on mobile)

### Step-by-Step Migration

1. **Save on Mobile**
   ```
   File > Save
   Note the filename
   ```

2. **Transfer File**
   ```
   Share via email/cloud
   Or connect device via USB
   Copy .flm file
   ```

3. **Open on Desktop**
   ```
   Launch FL Studio
   File > Open
   Select .flm file
   ```

4. **Verify**
   ```
   Check GMS sounds the same
   Verify levels
   Test playback
   ```

5. **Expand**
   ```
   Add desktop-only plugins
   Refine mix
   Expand arrangement
   ```

---

## Preset Management

### Organizing Presets

**By Category:**
```
GMS_Presets/
  Bass/
  Leads/
  Pads/
  Drums/
  FX/
  Mobile/
```

**By Platform:**
```
GMS_Presets/
  Cross_Platform/ (works on both)
  Desktop_Only/ (heavy patches)
  Mobile_Optimized/ (CPU-friendly)
```

### Sharing Presets

**Cloud Storage:**
```
Google Drive
Dropbox
iCloud
OneDrive
```

**Direct Transfer:**
```
Email attachment
USB cable
Bluetooth file share
AirDrop (iOS/Mac)
```

---

## Troubleshooting

### Preset Sounds Different

**Check:**
- Different GMS version
- Sample rate differences
- Host tempo differences
- FX not available on platform

**Solution:**
- Update to latest version
- Check project settings
- Manually adjust differences

### Project Won't Open

**Check:**
- File format (.flm vs .flp)
- FL Studio version compatibility
- File corruption

**Solution:**
- Update FL Studio
- Try importing MIDI only
- Re-save in compatible format

### CPU Issues on Mobile

**Symptoms:**
- Audio dropouts
- Glitching
- Slow response

**Solutions:**
- Reduce unisono voices
- Disable some FX
- Freeze tracks
- Use audio instead of GMS

---

## Quick Reference

### Transfer Methods Ranked by Speed

1. **AirDrop** (iOS/Mac only) - Instant
2. **USB cable** - Fast
3. **Cloud sync** - Medium
4. **Email** - Slower but reliable

### Best Practices Summary

- Design on mobile, refine on desktop
- Save .gms presets for transfer
- Test patches on both platforms
- Render complex sounds to audio
- Keep mobile presets CPU-friendly

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
- FL Studio Mobile documentation
