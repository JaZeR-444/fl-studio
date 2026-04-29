# Fruity Slicer: UI Map and Signal Flow

## UI Overview

Fruity Slicer has a **dual-panel interface**: waveform display (top) and control panel (bottom).

[SRC: IL-MAN]

---

## Main UI Sections

### Section 1: Waveform Display (Top Panel)

**Location:** Upper 60% of plugin window  
**Purpose:** Visual representation of loaded sample with slice markers

**Key Elements:**
- **Waveform:** Stereo waveform display (blue/orange)
- **Slice Markers:** Vertical yellow lines indicating slice points
- **Playhead:** Moving cursor showing current playback position
- **Zoom Controls:** Magnifying glass icons (zoom in/out)
- **Loop Region:** Highlighted area (can be adjusted)

**Interactions:**
- **Left-click marker:** Select slice point
- **Right-click marker:** Delete slice point
- **Double-click waveform:** Add manual slice point
- **Click+drag waveform:** Scroll through sample
- **Mouse wheel:** Zoom in/out

[SRC: IL-MAN]

---

### Section 2: Control Panel (Bottom Panel)

**Location:** Lower 40% of plugin window  
**Purpose:** Slice detection, playback, and routing controls

**Subsections:**
1. **Auto-Slice Controls** (left)
2. **Playback Settings** (center)
3. **Output Routing** (right)

---

## Detailed Control Breakdown

### AUTO-SLICE CONTROLS

**Add Button**
- **Function:** Load audio file into Slicer
- **Action:** Opens file browser
- **Accepts:** WAV, MP3, OGG, FLAC (most audio formats)

**Auto Button**
- **Function:** Automatically detect transients and create slices
- **Behavior:** Analyzes waveform for peaks, places slice markers
- **Adjustable:** Via Threshold knob (sensitivity)

**Threshold Knob**
- **Range:** 0% to 100%
- **Default:** ~50%
- **Function:** Controls auto-slice sensitivity
  - **Low (0-30%):** Detects more slices (sensitive)
  - **Medium (40-60%):** Balanced detection
  - **High (70-100%):** Detects fewer slices (only strong transients)

**Reset Button**
- **Function:** Clears all slice markers
- **Use:** Start over with slice detection

[SRC: IL-MAN]

---

### PLAYBACK SETTINGS

**Note On Knob**
- **Range:** 0 to 127 (MIDI velocity)
- **Default:** 100
- **Function:** Sets velocity threshold for slice triggering
- **Impact:** Lower = quieter MIDI notes trigger slices

**Crossfade Knob**
- **Range:** 0 ms to 100 ms
- **Default:** 10 ms
- **Function:** Smooth transition between slices (reduces clicks)
- **Impact:** Higher = smoother but less crisp

**Time Stretch Knob**
- **Range:** 0.5x to 2.0x (50% to 200%)
- **Default:** 1.0x (100%)
- **Function:** Stretch/compress playback speed
- **Note:** Does NOT preserve pitch (tempo change only)

**Pitch Knob**
- **Range:** -24 to +24 semitones
- **Default:** 0
- **Function:** Global pitch shift for all slices
- **Note:** Simple pitch shifting (not formant-preserved)

[SRC: IL-MAN]

---

### OUTPUT ROUTING

**Mode Dropdown**
- **Options:**
  1. **Sliced:** Each slice = separate MIDI note (default)
  2. **Layered:** All slices triggered simultaneously
  3. **Auto:** Automatically map slices to piano roll
- **Use:** Sliced mode for performance, Layered for texture

**Output Knob**
- **Range:** 0% to 100%
- **Default:** 100%
- **Function:** Master volume for all slices

**Mix Send Checkboxes**
- **Function:** Route slices to mixer tracks
- **Behavior:** Check boxes to send individual slices to separate mixer tracks
- **Use:** Advanced routing (process each slice independently)

[SRC: IL-MAN]

---

## Signal Flow

### Basic Signal Path

```
1. AUDIO INPUT (Load Sample)
   ↓
2. TRANSIENT DETECTION (Auto-Slice)
   ↓
3. SLICE POINTS CREATED (Yellow Markers)
   ↓
4. MIDI TRIGGER MAPPING (Each slice = MIDI key)
   ↓
5. PLAYBACK ENGINE (Time-stretch, Pitch, Crossfade applied)
   ↓
6. MIXER OUTPUT (Mono or separate tracks)
```

[SRC: IL-MAN]

---

### Advanced Signal Flow (with Mixer Routing)

```
FRUITY SLICER
├─ Slice 1 (C5) → Mixer Track 1 → Individual processing
├─ Slice 2 (C#5) → Mixer Track 2 → Individual processing
├─ Slice 3 (D5) → Mixer Track 3 → Individual processing
└─ Slice N → Mixer Track N → Individual processing
```

**Use Case:** Apply different FX to each slice (reverb on slice 1, distortion on slice 2, etc.)

[SRC: IL-MAN]

---

## Hidden Features & Right-Click Menus

### Waveform Display Right-Click Menu

**Options:**
- **Load Sample:** Alternative to Add button
- **Save Sliced Sample:** Export with slice markers embedded
- **Dump to Piano Roll:** Auto-create MIDI pattern from original timing
- **Dump Score Log:** Export slice timing data (text file)

**Hidden Trick:** Hold Shift while clicking Auto → Uses stricter detection (fewer slices)

[SRC: REPUTABLE - FL Studio power user community]

---

### Slice Marker Right-Click Menu

**Options:**
- **Delete Marker:** Remove this slice point
- **Solo Slice:** Play only this slice (preview)
- **Mute Slice:** Disable this slice (won't trigger)

---

## Common Beginner Misunderstandings

### Misunderstanding 1: "Auto-Slice Doesn't Work"
**Reality:** Threshold set too high (100%) or too low (0%)  
**Fix:** Set Threshold to 50%, try Auto again

### Misunderstanding 2: "Slices Sound Clicky"
**Reality:** Crossfade set to 0 ms  
**Fix:** Increase Crossfade to 10-20 ms

### Misunderstanding 3: "Can't Hear Individual Slices"
**Reality:** Mode set to "Layered" instead of "Sliced"  
**Fix:** Change Mode dropdown to "Sliced"

### Misunderstanding 4: "MIDI Notes Don't Trigger Slices"
**Reality:** Fruity Slicer not assigned to MIDI channel  
**Fix:** In Channel Rack, right-click Slicer → Piano Roll

### Misunderstanding 5: "All Slices Play at Once"
**Reality:** Mode set to "Layered"  
**Fix:** Switch to "Sliced" mode

[SRC: REPUTABLE - common forum questions]

---

## Keyboard Shortcuts

**While Slicer Window is Focused:**
- **Spacebar:** Play/pause preview
- **Delete:** Remove selected slice marker
- **Ctrl+A:** Select all slice markers
- **Ctrl+Z:** Undo last slice edit
- **Arrow Keys:** Navigate between slices
- **+/- (Plus/Minus):** Zoom in/out

**In Piano Roll (Slicer Selected):**
- **Ctrl+B:** Brush tool (paint slices)
- **Ctrl+P:** Pencil tool (draw individual notes)
- **Ctrl+D:** Delete tool

[SRC: IL-MAN]

---

## UI Workflow Tips

### Tip 1: Visual Slice Verification
**Before** sequencing:
1. Click Auto to detect slices
2. Visually inspect waveform
3. Delete incorrect slices (right-click marker)
4. Add missing slices (double-click waveform)
5. **Then** sequence in Piano Roll

### Tip 2: Preview Individual Slices
**How:**
1. Right-click slice marker
2. Select "Solo Slice"
3. Press spacebar to preview
4. Verify slice sounds correct

### Tip 3: Quick MIDI Pattern Creation
**How:**
1. Load sample into Slicer
2. Click Auto
3. Right-click waveform → "Dump to Piano Roll"
4. FL Studio creates MIDI pattern matching original timing
5. Edit pattern to taste

[SRC: REPUTABLE]

---

## UI Layout Evolution (Version Notes)

**FL Studio 12 and Earlier:**
- Simpler UI, fewer controls
- No individual mixer routing

**FL Studio 20+:**
- Modern UI refresh (current documentation reflects this)
- Added mixer routing checkboxes
- Improved waveform zoom

**FL Studio 21+:**
- Enhanced waveform rendering (smoother)
- Faster auto-detection algorithm

[SRC: IL-MAN + RELNOTE]

---

## UI Customization

### Color Scheme
**Location:** FL Studio Options → General → Advanced  
**Change:** Waveform colors can be customized globally

### Window Size
**Resize:** Click+drag window edges (Slicer is resizable)  
**Full-Screen:** F11 (FL Studio full-screen, affects all plugins)

[SRC: IL-MAN]

---

## Summary: UI Quick Reference

| UI Element | Function | Key Shortcut |
|------------|----------|--------------|
| **Add Button** | Load audio file | N/A |
| **Auto Button** | Detect transients | N/A |
| **Threshold Knob** | Slice sensitivity (0-100%) | N/A |
| **Crossfade Knob** | Smooth transitions (0-100ms) | N/A |
| **Time Stretch** | Tempo change (0.5x-2x) | N/A |
| **Pitch Knob** | Pitch shift (±24 semitones) | N/A |
| **Mode Dropdown** | Sliced/Layered/Auto | N/A |
| **Waveform Right-Click** | Load, Save, Dump to Piano Roll | N/A |
| **Marker Right-Click** | Delete, Solo, Mute slice | Delete key |

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
