# Parameter Dictionary — Fruity Scratcher

## Core Parameters

### SPD (Speed)
**Type:** Continuous knob  
**Range:** -200% to +200% (typically)  
**Default:** 100% (1.0x normal playback)  
**Unit:** Percentage of original speed  
**Audible Impact:** Direct control over playback rate and pitch  
**Mix Impact Tags:** `pitch`, `tempo`, `transient`, `energy`  
**Vibe Impact Tags:** `moody` (slow), `upbeat` (fast), `psychedelic` (extreme values)  
**Automation Common:** ★★★★★ (Essential for tape stops, spin-ups)  
**Notes:** Negative values reverse playback; 0% stops playback completely  
**Source:** [SRC: IL-MAN]

---

### ACC (Acceleration)
**Type:** Continuous knob  
**Range:** 0% to 100%  
**Default:** 50%  
**Unit:** Percentage (motor torque simulation)  
**Audible Impact:** Controls how quickly speed changes occur  
**Mix Impact Tags:** `transient`, `punch` (high ACC), `smoothness` (low ACC)  
**Vibe Impact Tags:** `upbeat` (high), `moody` (low), `vibey` (medium-low)  
**Automation Common:** ★★☆☆☆ (Occasional for dynamic scratch feel changes)  
**Notes:**  
- **0%:** Infinite deceleration (drifts forever)  
- **50%:** Balanced turntable feel  
- **100%:** Instant response (no inertia)  
**Source:** [SRC: IL-MAN]

---

### SEN (Sensitivity)
**Type:** Continuous knob  
**Range:** 0% to 100%  
**Default:** 50%  
**Unit:** Percentage (input scaling)  
**Audible Impact:** Indirect—affects control responsiveness, not sound directly  
**Mix Impact Tags:** N/A (performance control only)  
**Vibe Impact Tags:** `jazzy` (medium for expressive control), `psychedelic` (high for chaos)  
**Automation Common:** ★☆☆☆☆ (Rare; experimental applications only)  
**Notes:**  
- **Low (10-30%):** Requires large mouse/MIDI movements for speed changes  
- **High (70-90%):** "Hair-trigger" response; small movements = big changes  
- Used to match physical controller resistance  
**Source:** [SRC: IL-MAN]

---

### Pitch
**Type:** Continuous knob  
**Range:** -12 to +12 semitones  
**Default:** 0 (no pitch shift)  
**Unit:** Semitones  
**Audible Impact:** Global tuning offset (independent of SPD)  
**Mix Impact Tags:** `brightness` (higher pitch), `depth` (lower pitch)  
**Vibe Impact Tags:** All vibes (used for key matching)  
**Automation Common:** ★★☆☆☆ (Occasional for pitch bends)  
**Notes:** Use to match sample to track key before scratching  
**Source:** [SRC: IL-MAN]

---

## Transport Controls

### Play
**Type:** Toggle button  
**Range:** On/Off  
**Default:** Off  
**Audible Impact:** Starts continuous playback from current position  
**Mix Impact Tags:** N/A  
**Vibe Impact Tags:** N/A  
**Automation Common:** ★★★☆☆ (Used for rhythmic play/pause patterns)  
**Notes:** Combine with Hold for "transformer" scratch effect  
**Source:** [SRC: IL-MAN]

---

### Pause
**Type:** Momentary button  
**Range:** On/Off  
**Default:** Off  
**Audible Impact:** Freezes playback at current position  
**Mix Impact Tags:** N/A  
**Vibe Impact Tags:** `moody` (pause for silence), `upbeat` (rhythmic cuts)  
**Automation Common:** ★★★☆☆ (Rhythmic stutter effects)  
**Notes:** Release to resume from paused position (not from start)  
**Source:** [SRC: IL-MAN]

---

### Reverse
**Type:** Toggle button  
**Range:** On/Off  
**Default:** Off  
**Audible Impact:** Inverts playback direction  
**Mix Impact Tags:** `depth` (reverse creates backwards effect)  
**Vibe Impact Tags:** `psychedelic` (glitch), `moody` (ethereal reverse vocals)  
**Automation Common:** ★★★☆☆ (Rapid toggle for stutter effects)  
**Notes:** Can be combined with scratching for complex patterns  
**Source:** [SRC: IL-MAN]

---

### Hold
**Type:** Toggle button  
**Range:** On/Off  
**Default:** Off  
**Audible Impact:** Stops motor but maintains current position  
**Mix Impact Tags:** `transient` (creates cuts)  
**Vibe Impact Tags:** `upbeat` (rhythmic transformer scratches)  
**Automation Common:** ★★★★☆ (Essential for transformer scratch automation)  
**Notes:** Different from Pause—motor physics still apply when released  
**Source:** [SRC: IL-MAN]

---

## Sample Management

### Load Sample
**Type:** File browser button  
**Supported Formats:** WAV, MP3, OGG, FLAC (via FL Studio engine)  
**Audible Impact:** Changes the audio source material  
**Mix Impact Tags:** Depends on loaded sample  
**Vibe Impact Tags:** All vibes (sample selection critical)  
**Automation Common:** N/A (manual load only)  
**Notes:** Short samples (1-5 sec) work best for scratching  
**Source:** [SRC: IL-MAN]

---

## MIDI / Performance

### Platter (Mouse/Touch/DVS Input)
**Type:** 2D interaction surface  
**Range:** Continuous (X-axis = speed, Y-axis = position)  
**Audible Impact:** Real-time speed control via physical interaction  
**Mix Impact Tags:** `transient`, `punch`, `energy` (performance-dependent)  
**Vibe Impact Tags:** All vibes (primary performance interface)  
**Automation Common:** N/A (real-time input only)  
**Notes:**  
- Can be controlled via mouse, touchscreen, or DVS timecode vinyl  
- SEN parameter scales platter response  
**Source:** [SRC: IL-MAN]

---

## DVS (Digital Vinyl System) Parameters

### DVS Enable
**Type:** Toggle (if supported in FL Studio version)  
**Range:** On/Off  
**Default:** Off  
**Audible Impact:** Enables external timecode vinyl control  
**Mix Impact Tags:** N/A  
**Vibe Impact Tags:** All vibes (authentic turntablism workflow)  
**Automation Common:** N/A  
**Notes:** Requires supported timecode vinyl (Serato CV02, Traktor MK2)  
**Source:** [SRC: IL-MAN DVS Section]  
**[UNVERIFIED: Exact DVS implementation details—requires testing with hardware]**

---

## Hidden / Contextual Parameters

### Waveform Position Marker
**Type:** Visual indicator (red line on waveform)  
**Range:** 0-100% of sample length  
**Audible Impact:** Shows current playback position (visual only)  
**Mix Impact Tags:** N/A  
**Vibe Impact Tags:** N/A  
**Automation Common:** N/A  
**Notes:** Useful for identifying "sweet spots" in samples for scratching  
**Source:** [SRC: IL-MAN]

---

## Parameter Interaction Matrix

| **Parameter** | **Affects** | **Interaction Notes** |
|---------------|-------------|-----------------------|
| **SPD + ACC** | Scratch feel | High ACC + variable SPD = responsive scratching |
| **SPD + Pitch** | Final pitch | Independent controls; Pitch = offset, SPD = multiplier |
| **SEN + Platter** | Control curve | High SEN = touchy; Low SEN = requires more movement |
| **Hold + SPD** | Transformer effect | Hold cuts motor; SPD automation still applies |
| **Reverse + Platter** | Scratch direction | Platter drag inverts when Reverse is on |

[SRC: IL-MAN, User Experience Testing]

---

## Automation Priority Guide

**Most Automated (★★★★★):**
- SPD (Speed) — Tape stops, spin-ups, vibrato

**Frequently Automated (★★★★☆):**
- Hold — Transformer scratch patterns, rhythmic cuts

**Occasionally Automated (★★★☆☆):**
- Reverse — Stutter glitch effects, reverse sections
- Play/Pause — Rhythmic play/pause patterns

**Rarely Automated (★★☆☆☆):**
- ACC — Dynamic scratch feel changes (experimental)
- Pitch — Key modulation effects

**Almost Never Automated (★☆☆☆☆):**
- SEN — Performance feel adjustment (set and forget)

[SRC: Production Workflow Analysis]

---

## Sources

- **[IL-MAN]** Image-Line Fruity Scratcher Official Manual
- **[IL-MAN DVS Section]** Digital Vinyl System documentation
- **[User Experience Testing]** Parameter interaction observations
- **[Production Workflow Analysis]** Common automation usage patterns
- **[UNVERIFIED]** DVS implementation details require hardware testing for full verification
