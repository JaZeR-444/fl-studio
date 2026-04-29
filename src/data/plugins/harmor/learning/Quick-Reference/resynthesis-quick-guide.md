# Resynthesis Quick Guide

Quick reference for Harmor's drag-and-drop resynthesis modes.

[SRC: IL-MAN]

---

## Getting Started

### Drag and Drop

1. **Drag any audio file** directly onto Harmor's interface
2. Harmor automatically analyzes and converts to partials
3. Play your keyboard - the sample is now playable

**Supported Formats:** WAV, AIFF, MP3, FLAC, OGG, plus PNG/BMP for image synthesis

### Two Modes: IMG vs ADV

| Feature | IMG Tab | ADV Tab |
|---------|---------|---------|
| **Display** | Visual spectrogram | Parameter controls |
| **Editing** | Draw/erase/blur on image | Knobs and sliders |
| **Best For** | Creative sound design | Precise control |
| **Visual** | Yes - see the sound | No - use your ears |
| **Time-stretch** | Drag to resize | Speed knob |

---

## IMG Tab - Visual Editing

### Understanding the Display

```
IMG Tab Display

Frequency (Y-axis)
     ↑
20kHz│                    ╱╲
     │                 ╱╱  ╲╲
 10kHz│              ╱╱      ╲╲
     │           ╱╱          ╲
  5kHz│        ╱╱              ╲
     │     ╱╱                    ╲
  2kHz│  ╱╱                        ╲
     │╱╱                              ╲
 100Hz│__________________________________\__→ Time (X-axis)
     0%                              100%

Brightness = Amplitude (Louder = Brighter)
```

### Tools

| Tool | Function | Shortcut/Action |
|------|----------|-----------------|
| **Draw** | Add frequency content | Click-drag |
| **Erase** | Remove content | Shift+click-drag |
| **Blur** | Smooth transitions | Tool button + drag |
| **Smear** | Stretch horizontally | Alt+drag |
| **Zoom** | Magnify view | Mouse wheel |
| **Pan** | Move view | Right-click drag |

### Quick Edits

**Time-Stretch (Lossless):**
1. Select area with marquee
2. Drag corner handles
3. Stretch horizontally = longer time, same pitch
4. Stretch vertically = pitch shift, same time

**Remove Unwanted Frequencies:**
1. Select Eraser tool
2. Paint over frequencies to remove
3. Great for: Removing hiss, cleaning up samples

**Add Harmonics:**
1. Select Draw tool
2. Click and draw horizontal lines
3. Higher lines = higher harmonics
4. Brighter = louder

---

## ADV Tab - Parameter Control

### Playback Section

| Control | Range | Default | Quick Tips |
|---------|-------|---------|------------|
| **Time** | 0-100% | 0% | Scrubs through sample |
| **Speed** | -200 to +200% | 100% | Independent of pitch! |
| **Formant** | -12 to +12 | 0 | Shift character without pitch |

**Speed Values:**
- **100%** = Normal speed, normal pitch
- **50%** = Half speed, SAME pitch (time-stretch!)
- **200%** = Double speed, SAME pitch
- **0%** = Freeze at current position
- **-100%** = Reverse playback

### Quality Section

| Control | Range | Default | Function |
|---------|-------|---------|----------|
| **Precision** | 0-100% | 50% | Analysis accuracy |
| **Blending** | 0-100% | 50% | Frame smoothness |
| **Window** | Small/Med/Large | Med | FFT size |

**When to Adjust:**
- **Precision ↑**: For clean sustained sounds (vocals, pads)
- **Precision ↓**: For drums, transients (less "smeary")
- **Blending ↑**: Smooth, ambient textures
- **Blending ↓**: Sharp, rhythmic sounds
- **Window Small**: Better time resolution (drums)
- **Window Large**: Better frequency resolution (tones)

### Phase Section

| Control | Range | Default | Effect |
|---------|-------|---------|--------|
| **Randomize** | 0-100% | 0% | Adds thickness |
| **Shift** | 0-360° | 0° | Changes attack character |
| **Keep** | On/Off | On | Preserve original phase |

**Quick Use:**
- **Randomize 30%**: Naturalize vocals
- **Randomize 0%**: Preserve punch on drums
- **Shift 180°**: Can fix phase cancellation in A/B mixing

---

## Common Resynthesis Workflows

### 1. Vocal Manipulation

```
Drag vocal into Harmor
         ↓
ADV Tab: Speed 100%, Formant 0
         ↓
Modulate Formant with LFO:
  • Amount: ±6 semitones
  • Rate: 1/4 note
         ↓
Result: Talking/morphing vocal effect
```

### 2. Time-Stretch Without Artifacts

```
Drag sample into Harmor
         ↓
ADV Tab: Speed 50%
         ↓
Pitch: Transpose in channel settings
         ↓
Result: Slowed down, natural pitch
No chipmunk/monster effect!
```

### 3. Infinite Sustain/Freeze

```
Find good spot in sample
         ↓
ADV Tab: Set Time to position
         ↓
Speed: 0% (stops playback)
         ↓
Play note: Infinite sustain at that point
         ↓
Add effects: Create ambient textures
```

### 4. Reverse Effect

```
ADV Tab: Speed -100%
         ↓
Option: Automate Time
         ↓
Result: Backwards playback
Smooth, no clicks (additive magic)
```

### 5. Image-to-Sound

```
Create PNG in any image editor
         ↓
White = loud frequencies
Black = silence
         ↓
Drag PNG onto Harmor
         ↓
Harmor converts pixels to partials
         ↓
Play: Unique generated sound
```

---

## Quick Reference Tables

### Speed vs Result

| Speed | Time | Pitch | Use For |
|-------|------|-------|---------|
| 100% | Normal | Normal | Standard playback |
| 50% | 2x longer | Same | Time-stretching |
| 200% | 2x faster | Same | Fast playback |
| 0% | Stopped | Same | Freeze/sustain |
| -50% | Slow reverse | Same | Reverse time-stretch |
| -100% | Normal reverse | Same | Reverse playback |

### Formant Shifts

| Formant | Effect | Best On |
|---------|--------|---------|
| +12 | "Donald Duck" | Vocals, bass |
| +6 | Brighter, smaller | Vocals |
| 0 | Original | Everything |
| -6 | Darker, larger | Vocals, leads |
| -12 | "Monster/Demon" | Vocals, bass |

### Window Sizes

| Window | Best For | Trade-off |
|--------|----------|-------------|
| Small | Drums, percussion | Better time, worse frequency |
| Medium | General use | Balanced |
| Large | Vocals, pads, tones | Better frequency, worse time |

---

## Troubleshooting

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Sounds "metallic" | Phase issues | Increase Blending, add Blur |
| Transients too soft | Window too large | Use smaller Window |
| "Underwater" sound | Too much low-mid | Filter 200-500Hz, reduce Sub |
| Pitch wobbles | Analysis mismatch | Lock Speed to musical values |
| CPU spikes | Complex resynthesis | Freeze channel when done |
| Clicks at loops | Bad loop points | Use crossfade in IMG tab |

---

## Keyboard Shortcuts (IMG Tab)

| Action | Key/Mouse |
|--------|-----------|
| Draw | Left-click drag |
| Erase | Shift + drag |
| Blur | B key + drag |
| Smear | Alt + drag |
| Zoom | Mouse wheel |
| Pan view | Right-click drag |
| Select area | Marquee drag |
| Copy selection | Ctrl+C |
| Paste | Ctrl+V |
| Clear all | Delete key |
| Undo | Ctrl+Z |

---

## Preset Ideas

### "Vocal Ghost"
```
Time: 0-100% (automate for movement)
Speed: 25% (slow)
Formant: -6 (deep)
Blur: 40%
Filter: Low-pass at 2kHz
```

### "Drum Stretch"
```
Window: Small (transients)
Precision: 40% (less smear)
Speed: 50% (half time)
Pluck: 60% (tighten)
```

### "Infinite Pad"
```
Find sustained note in sample
Time: Fixed position
Speed: 0% (freeze)
Blur: 60%
Strum: 40%
```

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
