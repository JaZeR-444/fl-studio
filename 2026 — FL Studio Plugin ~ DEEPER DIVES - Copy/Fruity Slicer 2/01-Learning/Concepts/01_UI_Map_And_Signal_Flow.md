# UI Map & Signal Flow - Fruity Slicer 2

## UI Sections Overview

Fruity Slicer 2's interface is divided into functional zones for slicing, playback control, and per-slice manipulation.

[SRC: IL-MAN]

---

## Main UI Sections

### 1. Waveform Display (Top Center)
**Purpose:** Visual representation and slice editing
**Components:**
- Full sample waveform with slice markers
- Click to play/preview slices
- Drag markers to adjust slice points
- Color-coded slice regions

**Interactions:**
- **Left-click slice:** Preview that slice
- **Right-click marker:** Delete slice marker
- **Drag marker:** Adjust slice start point
- **Double-click waveform:** Add manual slice marker

**Beginners Miss:** You can click slices in the waveform to preview them before triggering via MIDI

### 2. Slice Parameters Panel (Left Side)
**Purpose:** Per-slice envelope and processing controls
**Components:**
- **Filter Envelope:** Graphical filter cutoff envelope per slice
- **Volume Envelope:** Amplitude envelope (attack/decay/sustain/release)
- **Pan Envelope:** Stereo positioning over time
- **Pitch Envelope:** Pitch modulation per slice

**Interactions:**
- Click and drag nodes to shape envelopes
- Right-click to reset envelope to default
- Each slice can have unique envelope settings

**Beginners Miss:** Each slice has independent envelopes—you can make slice 1 a short stab and slice 2 a long pad

### 3. Global Controls (Top Right)
**Purpose:** Overall playback and processing settings
**Components:**
- **Chromatic Toggle:** Enable/disable chromatic playback mode
- **Pitch Slider:** Global pitch shift (-2400 to +2400 cents)
- **Time-Stretch Mode:** Algorithm selection (Pro Default, Transient, etc.)
- **Sync Toggle:** Lock to project tempo
- **Root Note:** Define which MIDI note = original pitch (chromatic mode)

**Interactions:**
- Toggle Chromatic on/off
- Adjust pitch slider for global tuning
- Select time-stretch algorithm for quality vs artifacts

**Beginners Miss:** Chromatic mode turns Slicer 2 into a chromatic sampler—without it, each slice triggers at original pitch

### 4. Slice List (Bottom Left)
**Purpose:** Overview and reordering of slices
**Components:**
- List of all detected slices
- Slice number and waveform thumbnail
- Drag-and-drop reordering

**Interactions:**
- **Drag slices:** Rearrange playback order
- **Click slice:** Select for envelope editing
- **Right-click:** Slice operations (delete, reverse, etc.)

**Beginners Miss:** You can rearrange slice order without re-slicing the audio

### 5. Playback Controls (Bottom Right)
**Purpose:** Transport and preview
**Components:**
- Play/Stop buttons
- Loop toggle
- Slice trigger indicators

**Interactions:**
- Play sample in context
- Toggle loop for continuous preview

---

## Signal Flow

### Instrument Mode (Default)
```
Audio Sample (loaded)
    ↓
Auto-Slice Detection / Manual Slice Markers
    ↓
Slice Selection (MIDI Note Input: C5 = Slice 1, etc.)
    ↓
[Chromatic Mode Check]
    ├─ OFF → Trigger slice at original pitch
    └─ ON → Repitch slice to match MIDI note
    ↓
Per-Slice Processing:
    - Filter Envelope
    - Volume Envelope (ADSR)
    - Pan Envelope
    - Pitch Envelope
    ↓
Global Pitch Shift
    ↓
Time-Stretch Processing (if tempo-synced)
    ↓
Output to Mixer Track
```

### Chromatic Mode Signal Flow
```
MIDI Note C4 played
    ↓
Check Root Note setting (e.g., C5 = root)
    ↓
Calculate pitch offset (C4 is -12 semitones from C5)
    ↓
Trigger selected slice with -12 semitone pitch shift
    ↓
Apply per-slice envelopes
    ↓
Output
```

**Key Point:** In Chromatic mode, you select ONE slice (e.g., a vocal "Ahhh"), then play it across the keyboard pitched correctly. This transforms a loop into a melodic instrument.

[SRC: IL-MAN]

---

## Key Interactions

### Slice Marker Editing
**What:** Adjust where slices begin/end
**How:**
1. Drag slice markers left/right in waveform
2. Add markers: Double-click waveform
3. Delete markers: Right-click marker → Delete

**Why:** Fix slices that cut off transients or start mid-sound

**Beginners Misunderstand:** Slice markers are suggestions—you have full manual control

### Chromatic Mode Toggle
**What:** Enable pitch-per-note playback
**How:**
1. Select a slice from the slice list
2. Enable "Chromatic" toggle
3. Play MIDI notes—slice pitch-shifts accordingly

**Why:** Turn any slice into a melodic instrument

**Beginners Misunderstand:** Without Chromatic mode, all MIDI notes trigger different slices at original pitch. With Chromatic, ONE slice plays across keyboard pitched.

### Envelope Shaping
**What:** Per-slice ADSR and filter envelopes
**How:**
1. Select slice from list
2. Click on Filter/Volume/Pan envelope graphs
3. Drag nodes to shape envelope

**Why:** Turn short slices into pads (long release) or keep them punchy (short release)

**Beginners Misunderstand:** Each slice has independent envelopes—slice 1 can be a pad, slice 5 a stab

### Slice Reordering
**What:** Change playback order without re-slicing
**How:**
1. Open slice list
2. Drag slice to new position
3. MIDI triggering now follows new order

**Why:** Rearrange grooves or create variations

**Beginners Misunderstand:** MIDI note C5 always triggers the first slice in the list, not necessarily the first chronological slice

---

## Right-Click Behaviors

**Waveform:**
- Add manual slice marker
- Delete slice marker (on marker)

**Slice List:**
- Reverse slice playback
- Delete slice
- Normalize slice volume
- Solo slice (hear it isolated)

**Envelope Graphs:**
- Reset envelope to default
- Copy envelope to all slices

**Chromatic Toggle:**
- Toggle on/off (no special menu)

---

## Things Beginners Misunderstand

### Misunderstanding 1: "Why does Chromatic mode play the same slice?"
**Reality:** Chromatic mode plays ONE selected slice across the keyboard. To play different slices, turn Chromatic OFF.

### Misunderstanding 2: "Why are my slices cut off?"
**Reality:** Slice markers may be mid-transient. Drag markers earlier or adjust Volume Envelope attack.

### Misunderstanding 3: "Why doesn't time-stretch work?"
**Reality:** Time-stretch requires Sync toggle enabled and project tempo matching.

### Misunderstanding 4: "Why is slice order wrong?"
**Reality:** Slice list order determines MIDI mapping. Reorder in slice list to fix.

### Misunderstanding 5: "Why does my vocal chop sound robotic?"
**Reality:** Time-stretch algorithm may be wrong. Use "Pro Default" for clean results or "Transient" for drums.

---

## Visual Feedback Indicators

**Slice Playing:**
- Active slice highlights in waveform
- Slice list shows current trigger

**Envelope Activity:**
- Envelope graphs show real-time position

**Chromatic Mode:**
- Toggle button highlighted when ON
- Root note indicator shows reference pitch

**Sync Status:**
- Sync button highlighted when locked to tempo

---

## Workflow Tips

**For Melodic Sampling:**
1. Slice vocal or melodic phrase
2. Click best slice in waveform
3. Enable Chromatic mode
4. Adjust Root Note to match original pitch
5. Play melody in Piano Roll

**For Beat Slicing:**
1. Load drum loop
2. Use Auto-Slice (Beat mode)
3. Keep Chromatic OFF
4. Trigger different slices via MIDI

**For Creative FX:**
1. Slice any sample
2. Rearrange slice order wildly
3. Add reverse slices
4. Automate global pitch

---

## Summary

Fruity Slicer 2's UI is built around **slice selection + chromatic toggle**. The key innovation is per-slice envelopes and chromatic mode, turning loops into playable instruments. The signal flow is: Slice → Select → Chromatic Mode → Envelope → Output.

**Most Important UI Elements:**
1. Chromatic Toggle (turns on melodic mode)
2. Waveform Display (slice editing)
3. Volume Envelope (shape slice playback)
4. Root Note (chromatic pitch reference)
