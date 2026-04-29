# UI Map And Signal Flow — Fruity Scratcher

## UI Tour: Main Sections

### 1. **Platter Area** (Center Visual)
- **Virtual Record:** Clickable spinning disc
- **Waveform Display:** Shows loaded sample visually
- **Position Marker:** Red line indicating current playback position
- **Interaction:** Click and drag to scratch manually
- [SRC: IL-MAN]

### 2. **Transport Controls** (Bottom)
- **Play Button:** Starts playback from current position
- **Pause Button:** Freezes playback (maintains position)
- **Reverse Button:** Flips playback direction
- **Hold Toggle:** Stops motor but maintains inertia
- [SRC: IL-MAN]

### 3. **Physics Controls** (Right Panel)
- **SPD (Speed):** Playback rate (-2x to +2x typically)
  - 1.0 = normal speed
  - Negative values = reverse
  - Automation target for tape stops
- **ACC (Acceleration):** Motor torque simulation
  - High = instant starts/stops (direct-drive feel)
  - Low = gradual ramp-up (belt-drive feel)
- **SEN (Sensitivity):** Mouse/MIDI response scaling
  - High = small movements = big speed changes
  - Low = requires more movement for control
- [SRC: IL-MAN]

### 4. **Sample Management** (Top/Left)
- **Folder Icon:** Load audio file into scratcher
- **Sample Name Display:** Shows currently loaded file
- **Pitch Knob:** Fine-tune sample tuning (-12 to +12 semitones)
- [SRC: IL-MAN]

### 5. **Right-Click Context Menu**
- **Link to controller:** MIDI learn for hardware mapping
- **Copy state / Paste state:** Transfer settings between instances
- **Randomize:** Experimental parameter randomization
- [SRC: IL-MAN, FL Studio Right-Click Conventions]

---

## Signal Flow Diagram

```
[Audio Sample File]
       ↓
[Scratcher Engine]
       ├──> [Speed Control] ──> [Pitch Change]
       ├──> [Acceleration Physics] ──> [Inertia Simulation]
       └──> [Reverse Toggle] ──> [Direction Inversion]
       ↓
[Output to Mixer Channel]
```

[SRC: IL-MAN Architecture]

---

## Functional Flow (Turntable Physics)

1. **User Input** (Mouse drag / MIDI / DVS timecode)
   ↓
2. **Sensitivity Scaling** (SEN parameter adjusts input response)
   ↓
3. **Acceleration Application** (ACC determines how fast speed changes)
   ↓
4. **Speed Target** (SPD parameter sets current playback rate)
   ↓
5. **Pitch Modulation** (Speed change = pitch change, unless time-stretched mode)
   ↓
6. **Output** (Scratched audio to mixer)

[SRC: IL-MAN Physics Engine Description]

---

## Key Interactions

### **Mouse Scratching**
- **Click + Drag on Platter:** Direct speed control
- **Drag Left:** Reverse playback
- **Drag Right:** Forward playback
- **Release:** Speed returns to SPD value based on ACC setting
- [SRC: IL-MAN Mouse Control]

### **MIDI Control**
- **Mod Wheel → Speed:** Common for live scratching
- **Pitchbend → Fine Speed:** Micro-adjustments
- **Note Velocity → Sample Trigger:** Load different samples per note
- **CC Mapping:** Any parameter can be MIDI-learned
- [SRC: IL-MAN MIDI Integration]

### **DVS (Digital Vinyl System)**
- **Timecode Vinyl Input:** Real turntable controls Scratcher
- **Supported:** Serato CV02 (2kHz), Traktor MK2
- **Latency:** Requires low buffer settings (128 samples or less)
- **Calibration:** Adjust SEN to match physical turntable feel
- [SRC: IL-MAN DVS Section, [UNVERIFIED: Specific timecode formats beyond Serato—verify in FL Studio DVS docs]]

---

## Automation Targets

| **Parameter** | **Use Case** | **Automation Type** |
|---------------|--------------|---------------------|
| **Speed (SPD)** | Tape stops, spin-ups | Smooth curves for natural deceleration |
| **Hold** | Rhythmic stutter | Step automation for on/off toggling |
| **Acceleration** | Changing "feel" mid-track | Gradual transitions or instant jumps |
| **Sensitivity** | Less common | Could create "drunk" scratching effect |

[SRC: IL-MAN, FL Studio Automation Guides]

---

## Things Beginners Misunderstand

### ❌ **Misconception:** "Clicking Play makes it scratch"
**✓ Reality:** Play just starts continuous playback. **Drag the platter** or automate Speed to scratch.

### ❌ **Misconception:** "Acceleration makes it faster"
**✓ Reality:** Acceleration controls how *quickly* it reaches the speed set by SPD, not the final speed itself.

### ❌ **Misconception:** "Sensitivity is volume"
**✓ Reality:** Sensitivity is **control responsiveness**—how much speed changes per mouse/MIDI movement.

### ❌ **Misconception:** "It can only load WAV files"
**✓ Reality:** Supports MP3, OGG, FLAC, and more via FL Studio's audio engine. [SRC: IL-MAN]

### ❌ **Misconception:** "You need a turntable to use DVS"
**✓ Reality:** DVS is optional—mouse and MIDI work fine for most production uses.

---

## Hidden Features / Power-User Tips

1. **Double-Click Platter:** Resets playback to start (useful during live performance)
2. **Right-Click SPD Knob → "Reset":** Instant return to 1.0x speed
3. **Shift + Drag Platter:** Finer control for precise scratching
4. **Hold + Reverse Together:** Creates reverse "brake" effect
5. **Extreme ACC Values:** ACC at 0% = infinite deceleration (never stops on its own); ACC at 100% = instant response

[SRC: IL-MAN, FL Studio Power User Forums, [UNVERIFIED: Shift + Drag—test to confirm]]

---

## Typical Workflow Example

**Goal:** Create a tape stop effect at the end of a chorus

1. Load vocal sample into Scratcher
2. Set ACC to ~30% (gradual slowdown)
3. Set SPD to 1.0x (normal playback during chorus)
4. At end of chorus:
   - Create automation clip for SPD
   - Draw downward curve from 1.0x to 0.0x over 2 beats
5. Listen: Smooth tape stop effect
6. Adjust ACC to taste:
   - Lower ACC = more gradual/elastic stop
   - Higher ACC = quicker/mechanical stop

[SRC: Production Tutorials, IL-MAN]

---

## UI Scaling & Detachment

- **Detachable Window:** Right-click title bar → "Detached"
- **Resize:** Drag window edges (waveform scales but controls stay fixed)
- **Touch Support:** Works with touchscreens (drag platter with finger)
- **Multi-Monitor:** Can float on second screen for live performance

[SRC: IL-MAN, FL Studio UI Guidelines]

---

## Sources

- **[IL-MAN]** Image-Line Fruity Scratcher Official Manual
- **[FL Studio Right-Click Conventions]** Standard FL Studio UI patterns
- **[FL Studio Automation Guides]** Parameter automation documentation
- **[FL Studio Power User Forums]** Advanced techniques and hidden features
- **[Production Tutorials]** Common workflow examples
- **[UNVERIFIED]** Shift + Drag for fine control—requires in-DAW testing to confirm
- **[UNVERIFIED]** Specific DVS timecode formats beyond Serato—verify in FL Studio DVS documentation
