# Newtone - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# Newtone - Start Here

Welcome to the **Newtone** Deeper Dive. Newtone is FL Studio's advanced pitch correction and time manipulation plugin.

## What is Newtone?

Newtone provides:
- Pitch correction
- Time stretching
- Pitch shifting
- Formant control

## Quick Navigation

- **[README.md](./README.md):** Overview
- **[01-Learning/Quick-Reference/quick-reference.md](./01-Learning/Quick-Reference/quick-reference.md):** Parameters
- **[02-Data/presets/INDEX.md](./02-Data/presets/INDEX.md):** Presets

---

*For technical data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# Newtone - Pitch & Time Editor

`\`\`
███╗   ██╗███████╗██╗    ██╗████████╗ ██████╗ ███╗   ██╗███████╗
████╗  ██║██╔════╝██║    ██║╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝
██╔██╗ ██║█████╗  ██║ █╗ ██║   ██║   ██║   ██║██╔██╗ ██║█████╗  
██║╚██╗██║██╔══╝  ██║███╗██║   ██║   ██║   ██║██║╚██╗██║██╔══╝  
██║ ╚████║███████╗╚███╔███╔╝   ██║   ╚██████╔╝██║ ╚████║███████╗
╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝    ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝
`\`\`

**Plugin Type:** Pitch Correction / Melody Editor
**Category:** Effect / Audio Editing / Correction
**Official Manual:** [Image-Line Newtone Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Newtone.htm)

---

## 🎯 What is Newtone?

Newtone is FL Studio's professional pitch-correction and time-manipulation editor. It analyzes audio recordings (primarily vocals) and displays them as editable notes on a piano roll. Users can manually correct pitch errors, adjust timing, slice notes, and even alter melodies entirely. It is the go-to tool for achieving "perfect" modern vocals, from transparent tuning to robotic FX.

**Key Capabilities:**
- **Precise Pitch Correction:** Drag notes to specific pitches with snap-to-grid.
- **Visual Pitch Contour:** Edit the "orange line" to fix vibrato and drifts.
- **Formant Shifting:** Adjust vocal timbre independently of pitch.
- **Global Tuning:** "Center" and "Variation" knobs for quick corrections.
- **Transition Control:** Smooth out jumps between different notes.
- **Time Manipulation:** Adjust note boundaries and timing within the editor.
- **Slaved Playback:** Synced with FL Studio's main transport.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **newtone-piano-roll-basics.md** (Note blocks vs Pitch line)
3. Create **parameter-cheat-sheet.md**
4. Drag a vocal sample into Newtone, select all notes, and turn up the "Center" knob.

### For Vocal Producers:
1. Study **transparent-pitch-correction.md**
2. Review **vibrato-editing-techniques.md**
3. Learn **formant-preservation-guide.md**

### For Sound Designers:
1. Study **creating-robotic-tuned-fx.md**
2. Review **melody-recomposition-workflow.md**
3. Learn **advanced-note-slicing.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Center:** Snap notes to nearest semitone.
  - **Variation:** Smooths out pitch drifts/errors.
  - **Transition:** Speed of glides between notes.
  - **Editing Modes:** Pitch, Formant, Volume, Vibrato.

- [ ] **pitch-vs-formant-decoded.md**
  - Why shifting pitch makes you sound like a chipmunk.
  - How formant shifting fixes the "chipmunk" effect.

#### 02-Data/parameters/
- [ ] **newtone-shortcuts.json**
  `\`\`json
  {
    "plugin_name": "Newtone",
    "shortcuts": {
      "Zoom": "Ctrl + Wheel",
      "Cut": "C",
      "Glue": "G"
    }
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **manual-vocal-tuning.md**
  - Identifying out-of-tune words.
  - Using the "Cut" tool to isolate bad segments.
  - Centering the pitch while retaining natural vibrato.

- [ ] **correcting-vocal-drift.md**
  - Using the "Variation" knob to flatten shaky notes.
  - Adjusting the "Transition" for smooth legato.

- [ ] **creating-vocal-harmonies.md**
  - Cloning the vocal in Newtone.
  - Moving notes to create a 3rd or 5th interval.
  - Adjusting formants to differentiate the "voices."

#### 03-Workflows/by-context/
- [ ] **backing-vocal-stacking.md**
- [ ] **instrumental-lead-quantization.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **advanced-vibrato-editor.md**
  - Using the specialized vibrato mode to increase/decrease intensity.
- [ ] **audio-to-midi-conversion.md**
  - How to export the Newtone analysis as MIDI data.

---

## 🔬 Research Framework

### Phase 1: Analysis (Week 1)
**Goal:** Reading the Contours

**Tasks:**
1. Load a vocal track
2. Identify the fundamental pitch (grey block) vs the micro-pitch (orange line)
3. Practice zooming and scrolling the piano roll
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What do the three handles on a note block represent? (Start, Center, End pitch?).
- How do I reset a note to its original pitch?

### Phase 2: Tonal Shaping (Week 2)
**Goal:** The Modern Vocal

**Tasks:**
1. Apply 100% "Center" for the T-Pain effect
2. Use Formant shifting to turn a male voice into a female one (relatively)
3. Create creating-vocal-harmonies.md

---

## 📊 Plugin Specifications to Document

### Engine
- Resampling Type
- Polyphony (Monophonic only?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I get the tuned audio back to my project? (Use the "Drag Selection" or "Send to Playlist" icons).
2. Why is it playing in the wrong part of the song? (Check the "Slave to Host" H button).

### Advanced Usage
1. How to fix a "flat" note without losing the singer's emotion? (Center knob vs Manual line editing).

---

## 🔗 Cross-Reference with Other Plugins

Newtone is often used with:
- **Newtime** (Time first, then Pitch)
- **Fruity Limiter** (Post-tuning dynamics)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Newtone/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── pitch-vs-formant-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── newtone-shortcuts.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── manual-vocal-tuning.md
│   │   └── creating-vocal-harmonies.md
│
└── 04-Reference/
    └── audio-to-midi-conversion.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Newtone Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Newtone.htm)
- [Newtone Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Newtone_tutorials.htm)
- [Newtone Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+newtone+tutorial)

### Community Resources
- [Newtone Subreddit](https://www.reddit.com/r/FL_Studio/search?q=newtone&restrict_sr=1)
- [Newtone User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Newtone Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Pitch Correction Fundamentals" - Understanding vocal tuning techniques
- "Formant Shifting Techniques" - Maintaining vocal character during pitch shift
- "Audio-to-MIDI Conversion" - Converting audio melodies to MIDI

### Advanced Techniques
- **Pitch Contour Editing:** Mastering the orange line for natural correction
- **Formant Control:** Using formant shifting to maintain vocal character
- **Vibrato Enhancement:** Using vibrato mode for expression

---

## 📚 In-Depth Technical Analysis

### Pitch Analysis Architecture
Newtone implements sophisticated pitch analysis:
- **Fundamental Detection:** Identifies the fundamental frequency of audio
- **Harmonic Tracking:** Follows harmonic content for accurate analysis
- **Real-time Processing:** Immediate response to audio input
- **Piano Roll Visualization:** Displays pitch as editable notes
- **Micro-Pitch Analysis:** Captures subtle pitch variations and vibrato

### Note Block System
The visual interface displays audio as editable note blocks:
- **Grey Blocks:** Represent the fundamental pitch and duration
- **Orange Line:** Shows micro-pitch variations within each note
- **Handles:** Control start, center, and end pitch of each note
- **Snap-to-Grid:** Allows precise pitch correction
- **Visual Feedback:** Clear indication of pitch relationships

### Formant Shifting Technology
The formant control maintains vocal character:
- **Vowel Preservation:** Maintains vowel-like characteristics during pitch shift
- **Timbre Independence:** Changes pitch without affecting vocal character
- **Naturalness:** Keeps vocals sounding natural after correction
- **Harmonic Relationships:** Preserves harmonic structure relationships
- **Quality Preservation:** Maintains vocal quality during processing

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** Audio signal monitoring and analysis
- **Pitch Detection:** Fundamental frequency identification
- **Note Segmentation:** Isolates individual notes and phrases
- **Pitch Correction:** Applies correction algorithms
- **Formant Processing:** Maintains vocal character
- **Time Manipulation:** Adjusts timing and duration
- **Output Stage:** Final signal routing and monitoring

### Vibrato Editor
The specialized vibrato mode allows for:
- **Intensity Control:** Adjusting vibrato depth
- **Rate Control:** Adjusting vibrato speed
- **Shape Control:** Adjusting vibrato waveform
- **Natural Expression:** Maintaining expressive characteristics
- **Creative Enhancement:** Exaggerating or reducing vibrato

### Audio-to-MIDI Conversion
Newtone can export analysis as MIDI data:
- **Pitch Tracking:** Converts detected pitch to MIDI notes
- **Timing Preservation:** Maintains original timing relationships
- **Velocity Mapping:** Maps amplitude to MIDI velocity
- **MIDI Export:** Creates MIDI clips from audio analysis
- **Synth Integration:** Allows use with synthesizers

## 🎛️ Parameter Deep Dive

### Center Control
- **Function:** Snaps notes to nearest semitone
  - Range: 0-100% (typically)
  - Effect: Determines how aggressively notes are corrected
  - Use for: Pitch correction and tuning
  - Pro tip: Lower values for transparent correction, higher for robotic effects
- **Behavior:**
  - 0%: No correction, original pitch preserved
  - Low values: Gentle correction for natural results
  - High values: Aggressive correction for perfect tuning
  - 100%: Maximum correction, all notes snapped to semitones
  - Pro tip: Use 30-60% for transparent correction
- **Applications:**
  - Transparent correction: Low values for subtle tuning
  - Perfect tuning: High values for precise correction
  - Robotic effects: Maximum values for T-Pain style effects
  - Creative tuning: Variable values for expression
  - Pro tip: Use for natural-sounding pitch correction

### Variation Control
- **Function:** Smooths out pitch drifts and errors
  - Range: 0-100% (typically)
  - Effect: Reduces micro-pitch variations
  - Use for: Flattening shaky notes and vibrato
  - Pro tip: Use for correcting vibrato and pitch drift
- **Behavior:**
  - 0%: No variation correction, preserves all micro-pitch
  - Low values: Gentle flattening of pitch variations
  - High values: Aggressive flattening of pitch variations
  - 100%: Complete flattening of all pitch variations
  - Pro tip: Use 20-40% to gently correct pitch drift
- **Applications:**
  - Pitch drift correction: Medium values for gentle correction
  - Vibrato reduction: High values to flatten vibrato
  - Natural correction: Low values to preserve expression
  - Creative effects: Variable values for different expressions
  - Pro tip: Use to correct shaky vocal performances

### Transition Control
- **Function:** Controls speed of glides between notes
  - Range: 0-100% (typically)
  - Effect: Determines how quickly pitch moves between notes
  - Use for: Creating smooth legato or sharp transitions
  - Pro tip: Higher values create smoother transitions between notes
- **Behavior:**
  - 0%: Instant transitions between notes
  - Low values: Quick transitions between notes
  - High values: Slow, smooth transitions between notes
  - Pro tip: Use for creating legato or portamento effects
- **Applications:**
  - Legato effects: High values for smooth transitions
  - Sharp transitions: Low values for distinct note changes
  - Natural expression: Medium values for realistic transitions
  - Creative gliding: Variable values for expression
  - Pro tip: Use for realistic vocal transitions

### Formant Control
- **Function:** Adjusts vocal timbre independently of pitch
  - Range: Negative to positive values (typically -100% to +100%)
  - Effect: Changes vowel characteristics without affecting pitch
  - Use for: Maintaining vocal character during pitch correction
  - Pro tip: Essential for preventing the "chipmunk" effect
- **Behavior:**
  - Negative values: Darker, more masculine vocal character
  - Positive values: Brighter, more feminine vocal character
  - Center: Original vocal character preserved
  - Pro tip: Use to maintain natural vocal quality
- **Applications:**
  - Male to female: Positive values for higher formants
  - Female to male: Negative values for lower formants
  - Character preservation: Center values to maintain original
  - Creative effects: Extreme values for unique vocal textures
  - Pro tip: Use for natural-sounding pitch correction

### Global Tuning Controls
- **Function:** Overall tuning adjustments
  - **Center:** Global pitch correction
    - Adjusts overall pitch of all notes
    - Use for key matching or overall tuning
    - Essential for project key alignment
    - Pro tip: Use for overall key adjustment
  - **Variation:** Global pitch variation control
    - Adjusts overall pitch variation across all notes
    - Use for general pitch stability
    - Essential for consistent tuning
    - Pro tip: Use for overall pitch stability
- **Behavior:**
  - Affects all detected notes simultaneously
  - Maintains relative pitch relationships
  - Pro tip: Use for global tuning adjustments
- **Applications:**
  - Key matching: Adjust for project key alignment
  - Overall correction: Apply global tuning adjustments
  - Pitch stability: Maintain consistent tuning
  - Creative tuning: Apply global character changes
  - Pro tip: Use for project-wide tuning

## 🎼 Sound Design Applications

### Vocal Processing
Using Newtone for vocal enhancement:

**Pitch Correction:**
- **Transparent Correction:** Subtle pitch correction without artifacts
  - Use low Center values (20-40%)
  - Preserve natural vibrato with appropriate Variation
  - Essential for professional vocal production
  - Perfect for subtle tuning
  - Pro tip: Use for natural-sounding vocal correction

- **Aggressive Correction:** Perfect pitch correction for robotic effects
  - Use high Center values (80-100%)
  - Apply appropriate Formant settings
  - Essential for T-Pain style effects
  - Perfect for robotic vocals
  - Pro tip: Use for creative robotic vocal effects

- **Vibrato Enhancement:** Enhancing or reducing natural vibrato
  - Use Vibrato mode for expression control
  - Adjust intensity and rate for desired effect
  - Essential for expressive vocal control
  - Perfect for vocal expression
  - Pro tip: Use for enhancing natural vocal expression

### Harmony Creation
Using Newtone for vocal harmonies:

**Harmony Generation:**
- **Manual Harmony Creation:** Creating harmonies by shifting notes
  - Clone vocal track in Newtone
  - Shift notes to desired harmonic intervals (3rd, 5th, etc.)
  - Apply appropriate Formant settings for differentiation
  - Essential for vocal harmonies
  - Perfect for backing vocals
  - Pro tip: Use different Formant settings for each harmony

- **Interval-Based Harmonies:** Creating harmonies using specific intervals
  - Calculate semitone shifts for desired intervals
  - Apply to cloned tracks for different harmonies
  - Essential for musical harmonies
  - Perfect for chord-based harmonies
  - Pro tip: Use for musically accurate harmonies

- **Chord Creation:** Building chords from single vocal lines
  - Create multiple harmony tracks at different intervals
  - Combine for full chord structures
  - Essential for chord-based vocals
  - Perfect for rich vocal textures
  - Pro tip: Use for creating full vocal arrangements

### Creative Applications
Using Newtone for experimental applications:

**Vocal Transformation:**
- **Gender Transformation:** Changing vocal gender characteristics
  - Use Formant control for gender simulation
  - Apply appropriate pitch shifts
  - Perfect for creative vocal effects
  - Essential for vocal character transformation
  - Useful for robotic vocal effects

- **Vocal Morphing:** Creating evolving vocal characteristics
  - Use automation for evolving vocal changes
  - Apply formant and pitch automation
  - Perfect for evolving vocal textures
  - Essential for dynamic vocal expression
  - Useful for evolving vocal arrangements

- **Creative Tuning:** Creating unique vocal textures
  - Push parameters beyond normal settings
  - Combine with other effects for uniqueness
  - Perfect for experimental music
  - Essential for creative vocal design
  - Useful for unique vocal signatures

### Melody Extraction
Using Newtone for audio-to-MIDI conversion:

**Melody Conversion:**
- **Audio Melody Extraction:** Converting audio melodies to MIDI
  - Analyze audio for pitch content
  - Export as MIDI for synth use
  - Essential for audio-to-MIDI conversion
  - Perfect for recreating audio melodies
  - Pro tip: Use for converting hummed melodies to MIDI

- **Humming to Synth:** Converting hummed melodies to synthesizers
  - Hum melody into Newtone
  - Export as MIDI for synth playback
  - Essential for quick melody creation
  - Perfect for idea development
  - Pro tip: Use for capturing melodic ideas

- **Vocal Melody Recreation:** Using vocal melodies for synth arrangements
  - Extract vocal melody from recordings
  - Apply to synthesizer for arrangement
  - Essential for melody-based arrangements
  - Perfect for vocal-inspired synth parts
  - Pro tip: Use for creating synth arrangements from vocal ideas

## 🧪 Experimental Techniques

### Advanced Pitch Correction Applications
Creative uses of Newtone's capabilities:

**Micro-Pitch Manipulation:**
- **Orange Line Editing:** Manually editing micro-pitch for expression
  - Draw custom pitch contours for natural expression
  - Create unique vocal inflections
  - Perfect for expressive vocal performance
  - Essential for natural-sounding correction
  - Useful for creative pitch expression

**Formant Experimentation:**
- **Timbre Shifting:** Using formant control for creative effects
  - Create unusual vocal textures
  - Apply extreme formant settings
  - Perfect for experimental vocals
  - Essential for creative vocal design
  - Useful for robotic vocal effects

**Vibrato Manipulation:**
- **Expression Control:** Using vibrato mode for expression
  - Enhance or reduce natural vibrato
  - Create artificial vibrato effects
  - Perfect for expressive control
  - Essential for vocal expression
  - Useful for creative vibrato effects

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Dynamic Pitch Correction:** Automating parameters for evolving correction
  - Create evolving pitch correction characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic pitch correction expression
  - Use for expressive vocal control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Vocal Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage vocal enhancement
  - Apply different processing to different stages
  - Build sophisticated vocal processing chains
  - Perfect for advanced sound design
  - Use for complex vocal processing

## 🎚️ Workflow Optimization

### Vocal Correction Workflows
Efficient approaches to using Newtone for vocal processing:

**Quick Correction:**
- **Automatic Correction:** Using global controls for quick fixes
  - Apply appropriate Center values for correction
  - Use Variation to flatten pitch drift
  - Essential for quick vocal fixes
  - Pro tip: Use for rapid vocal tuning

- **Manual Correction:** Using note-by-note editing for precision
  - Identify specific problem notes
  - Correct individual notes manually
  - Essential for precise correction
  - Pro tip: Use for detailed vocal tuning

**Harmony Creation:**
- **Efficient Harmony Setup:** Creating harmonies quickly
  - Clone track for harmony creation
  - Shift notes by desired intervals
  - Apply appropriate Formant settings
  - Essential for quick harmony creation
  - Pro tip: Use for efficient backing vocal creation

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-Effects:** Using before other effects
  - Apply before reverb for spatial effects
  - Use before delay for rhythmic patterns
  - Essential for proper signal flow
  - Pro tip: Use for tone preparation

- **Post-Effects:** Using after other effects
  - Apply after reverb for processed spatial effects
  - Use after delay for processed rhythmic patterns
  - Essential for final processing
  - Pro tip: Use for final tone shaping

**Analysis Integration:**
- **Spectrum Analysis:** Using with spectrum analyzers for feedback
  - Monitor frequency changes in real-time
  - Compare with reference tracks
  - Essential for informed parameter control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Vocal Processing:** Pitch correcting vocals for perfection
- **Harmony Creation:** Creating backing vocal harmonies
- **Robotic Effects:** Creating T-Pain style robotic vocals
- [ ] Transparently pitch-correct a vocal without audible artifacts
- [ ] Create a convincing 3-part vocal harmony from a single mono recording
- [ ] Export a vocal melody as a MIDI file for a synthesizer
- [ ] Explain the relationship between Center, Variation, and Transition
- [ ] Use the orange line for micro-pitch editing
- [ ] Apply appropriate formant settings for natural vocal character
- [ ] Create gender transformation effects using formant control
- [ ] Set up efficient vocal correction workflows
- [ ] Use vibrato mode for expression enhancement
- [ ] Apply automation for dynamic pitch correction
- [ ] Create audio-to-MIDI conversion workflows
- [ ] Troubleshoot pitch correction artifacts effectively
- [ ] Integrate Newtone into efficient vocal processing workflows
- [ ] Create genre-specific pitch correction presets for different musical styles
- [ ] Optimize Newtone settings for minimal CPU usage
- [ ] Use Newtone for creative vocal design applications
- [ ] Set up advanced vocal routing for complex projects
- [ ] Apply Newtone in live performance scenarios
- [ ] Create experimental vocal effects with extreme settings
- [ ] Combine Newtone with other effects for layered processing
- [ ] Integrate Newtone with other automation tools seamlessly
- [ ] Create custom vocal processing workflows for specific creative needs
- [ ] Use Newtone effectively in large, complex projects
- [ ] Generate complex harmony arrangements with multiple parameters
- [ ] Create hybrid pitch correction approaches combining different methods
- [ ] Apply Newtone in mastering contexts with appropriate care
- [ ] Create complex multi-stage vocal processing chains with smooth automation
- [ ] Design custom pitch correction patches for specific musical contexts
- [ ] Use Newtone for creative instrumental processing applications
- [ ] Apply advanced formant shifting techniques for character enhancement
- [ ] Create genre-specific preset libraries for efficient workflow
- [ ] Integrate Newtone with external hardware for hybrid processing
- [ ] Use Newtone for audio restoration and creative repair applications
- [ ] Combine Newtone with other spectral processing tools
- [ ] Apply Newtone in surround sound or multi-channel setups
- [ ] Create complex vocal relationships using multiple parameters
- [ ] Use Newtone for creative instrumental processing applications
- [ ] Integrate Newtone with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom pitch correction algorithms for unique vocal characteristics
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use Newtone for creative stereo enhancement beyond traditional methods
- [ ] Combine Newtone with convolution for hybrid correction approaches
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Newtone for creative sound design in film and game audio
- [ ] Apply Newtone in live sound reinforcement scenarios
- [ ] Create experimental vocal textures using extreme parameter settings
- [ ] Integrate Newtone with external processors for complex sound design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use Newtone for formant synthesis and vocal creation
- [ ] Apply advanced resonance techniques for character enhancement
- [ ] Create evolving textures using parameter automation
- [ ] Design custom vocal processing patterns for sophisticated expression
- [ ] Use Newtone for creative bass enhancement with pitch correction
- [ ] Combine Newtone with other vintage emulations for authentic sounds
- [ ] Apply Newtone in educational contexts for synthesis learning
- [ ] Create custom pitch correction patches for retro music production
- [ ] Use Newtone for creative lead enhancement with pitch correction
- [ ] Implement advanced vibrato techniques for expressive control

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What Is Newtone?

> **The "Surgical Table" for Audio.**
> Newtone is a pitch-correction and time-manipulation editor integrated into FL Studio. It allows you to slice, tune, warp, and completely re-compose monophonic audio recordings.

## 🧠 The 60-Second Mental Model
Think of Newtone as **Method Acting** for your audio.
*   **Pitcher** is "Auto-Tune" (Real-time, automatic, sometimes dumb).
*   **Newtone** is "Melodyne" (Offline, manual, precise, transparent).

You don't "play" Newtone. You **load** audio into it, perform surgery, and then **export** the result back to the playlist. It is an offline editor, not a live effect.

## 📋 When To Use It
| Use Case | ✅ YES (Newtone) | ❌ NO (Use Pitcher) |
| :--- | :--- | :--- |
| **Vocal Tuning** | Perfecting a raw lead vocal take. | Live autotune effect / Mumble rap tracking. |
| **Creativity** | Re-writing a melody from a flat take. | Real-time MIDI keyboard vocoding. |
| **Correction** | Fixing a single bad note in a bass guitar line. | subtle drift correction on a whole mix. |
| **Design** | Creating artificial harmonies from one sample. | CPU-light background processing. |

## 🎧 Context: Hip-Hop & R&B
In modern Urban production, Newtone is used for two distinct purposes:
1.  **The "Invisible" Polish:** (R&B) Cleaning up runs and ad-libs where "Auto-Tune" artifacts are unwanted. Use it to tighten up harmonies so they lock perfectly with the lead.
2.  **The "Texture" Layer:** (Trapsoul / Dark Trap) Pitch-shifting vocals down an octave (with Formant preservation) to create those "Demon" background layers without slowing down the sample duration.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

Newtone looks like the Piano Roll, but for Audio.

### 1. The Editor Grid (Main Workspace)
*   **Blobs (Notes):** Audio is segmented into "Pitch Blocks".
    *   **Vertical Position:** Pitch (Piano keys on left).
    *   **Horizontal Length:** Time (Duration).
*   **Orange Line:** The *actual* micro-pitch detection. The Block is the "Target", the Line is the "Reality".
*   **Handles (On Note Hover):**
    *   **Top Left/Right:** Volume Envelopes (Fade In/Out).
    *   **Center:** Pitch correction amount for that specific note.
    *   **Edges:** Time warping (stretch/shrink).

### 2. The Title Bar (Global Controls)
These knobs apply to **ALL** selected notes.
*   **Combine (Center):** Snaps the pitch to the grid. 100% = Perfect tuning.
*   **Variation:** Flattens the vibrato. 0% = Robot mode.
*   **Trans (Transition):** Speed of the glide between notes.

### 3. The Toolbar (Tools)
*   **Cut (Scissors):** Slice one note into two. Essential when Newtone misses a note change.
*   **Advanced Edit (Waveform Icon):** Switches "Advanced Mode" to see rotation / drift controls.
*   **Send to Playlist (Arrow Button):** **CRITICAL.** This is how you get audio OUT of Newtone.

## 🚦 Internal Functional Flow

1.  **Analysis:** Audio is loaded -> Pitches are Detected -> Transient Markers derived.
2.  **Quantization:** Note Centers are calculated based on Scale/Grid.
3.  **Manipulation:**
    *   User moves a block -> Time stretch algorithm keeps length, Pitch shift algorithm changes frequency.
    *   User twists "Variation" -> Modulation algorithm flattens the pitch curve.
4.  **Resynthesis:** The edited data is re-rendered into a new audio stream on playback/export.

## ⚠️ Common Misunderstandings
*   **"It's just playing over the beat!"**
    *   *Correction:* Newtone acts as a "Slave" player. It plays ALONGSIDE the Playlist. Press the "Slave Playback" (H) button to sync it, or MUTE the source clip in the Playlist so you don't hear doubles.
*   **"Ctrl+Z doesn't work!"**
    *   *Correction:* Newtone has its own internal undo history, separate from FL's main history (sometimes). Check the "Edit" menu inside the plugin.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Cut & Center" (The Fixer)
Sometimes Newtone detects a "scoop" (singer sliding into a note) as part of the note itself, making the average pitch flat.
*   **Move:** Use the **Cut Tool** to slice the scoop off the main vivid body of the note.
*   **Result:** Newtone recalculates the center pitch of the main body, snapping it perfectly to tune. The scoop remains natural but doesn't drag the tuning down.

### 2. Formant Preserved Transposition
Changing the pitch of a sample usually changes the "throat size" (Chipmunk effect).
*   **Move:** Select All (Ctrl+A). Transpose Up +12 Semitones. Go to **Advanced Mode**. Drag the **Formant** handle (middle of note, usually Alt-click or specialized knob depending on version) back DOWN 12 semitones.
*   **Result:** A "High Pitch" singer with a "Deep" throat resonance. Very common in Deep House and newer R&B.

### 3. Vibrato Surgery
*   **Context:** A singer held a note too long and got shaky (bad vibrato).
*   **Move:** Select note. Turn **Variation** knob down to ~20%.
*   **Result:** The shakiness is ironed out, sounding like a confident straight tone.

### 4. Audio-to-MIDI Extraction
*   **Context:** You have a hummed melody on phone.
*   **Move:** Drag audio in. Click "Send to Piano Roll" (Piano icon with arrow).
*   **Result:** You now have the MIDI notes to drive a synth.

## 👂 What to Listen For
*   **Phasing/Warbling:** If you stretch a note too far or pitch shift >5 semitones, you will hear "underwater" artifacts.
    *   *Fix:* Don't shift that far. Re-record or accept the aesthetic.
*   **Clicking Transitions:** If notes overlap weirdly.
    *   *Fix:* Adjust the **Transition** knob or manually fade the note volume envelopes in the editor.

## 🛑 Common Pitfalls
1.  **Tuning Breaths:** Do NOT tune breath sounds. It sounds robotic and weird. Cut them separate and leave them un-tuned.
2.  **Ignoring Scale:** Tuning to "Chromatic" (default) allows wrong notes. Set a Scale Helper (Root Note + Scale) in FL to see the grey background guides.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Newtone

How to shape the "Soul" of the vocal using pitch and time.

## 🌑 Moody (The "Trapsoul" Aesthetic)
*   **The Goal:** Dark, detached, emotional, "druggy".
*   **The Levers:**
    1.  **Pitch:** Shift entire vocal **Down -2 to -5 semitones**.
    2.  **Formant:** Shift Formant **Down** slightly more than the pitch for a "heavy chest" sound.
    3.  **Variation:** Set to **0%**. Removes all human vibrato, making it sound deadpan and cold.
*   **Listen For:** The "slurred" quality. If it sounds too crisp, stretch the time slightly.
*   **Pitfall:** Too much formant drop makes it sound like a muddy monster. Keep readability.

## ☀️ Upbeat (The "Pop/Hyperpop" Sheen)
*   **The Goal:** Tight, energetic, perfection.
*   **The Levers:**
    1.  **Center:** **100%**. Perfect tuning key.
    2.  **Transition:** **Fast** (<10ms). Notes snap instantly.
    3.  **Formant:** Shift **Up +1 or +2 semitones**. Adds a "youthful" brightness without changing key.
    4.  **Timing:** Quantize the start times of all notes to the grid.
*   **Listen For:** The "Snap". Every note should hit the center of the pitch immediately.

## 🍄 Psychedelic (The "Trippy" Warp)
*   **The Goal:** Liquid, melting, impossible physics.
*   **The Levers:**
    1.  **Drift:** Manually grab the edges of notes and twist the pitch transition to slide UP into notes.
    2.  **Vibrato:** Select a sustained note to **Advanced Edit** -> **Vibrato**. Crank the Frequency to unnatural speeds (>8Hz).
*   **Listen For:** A "melting" sensation where pitch isn't stable.

## 🎷 Jazzy (The "Neo-Soul" Naturalism)
*   **The Goal:** Loose, expressive, imperfect "Blue Notes".
*   **The Levers:**
    1.  **Center:** Low (**30-50%**). Just gently guiding the singer, not forcing them.
    2.  **Variation:** **100%** (or higher). Preserve or exaggerate the natural wobble.
    3.  **Offset:** Don't quantize start times. Let the vocals drag behind the beat slightly.
*   **Pitfall:** DO NOT snap "Blue Notes" (notes between semitones) to the grid. Leave them in the cracks.

## 🌊 Vibey (The "Lo-Fi" Cassette)
*   **The Goal:** Nostalgic, warm, slightly broken.
*   **The Levers:**
    1.  **Global Detune:** Select all notes. Shift them down **-15 cents** (not semitones). This puts the vocal slightly flat relative to the inst, creating "Tape Haze".
    2.  **High Cut:** Not in Newtone, but filter the result.
*   **Listen For:** A feeling of "Old Vinyl" where the singer isn't quite perfectly 440Hz tuned.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes to Perfect Vocals

1.  **Load:** Drag your vocal sample directly onto Newtone (or Add Newtone to mixer -> File -> Load).
2.  **Analyze:** Wait for the blobs to appear.
3.  **Clean:**
    *   Find "Breath" noises (short, messy blobs).
    *   **Delete** them or leave them alone (do not tune them).
4.  **Tune (The "Magic" Knobs):**
    *   Look at the top right **Center** knob.
    *   Turn it to **80%** (Right).
    *   The notes suck to the grid lines.
5.  **Refine:**
    *   Listen through.
    *   If a note sounds robotic, select *just that note*.
    *   Turn **variation** (Top Right) UP.
6.  **Export:**
    *   Click the **"Send to Playlist"** button (Box with Arrow icon) in the toolbar.
    *   It drops a new, tuned audio clip into your song.

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes & Fixes

| Mistake | Symptom | The Fix |
| :--- | :--- | :--- |
| **Doubling** | You hear a "Phasing" or chorus effect when playing. | You are hearing the Playlist Vocal AND the Newtone Vocal at the same time. **Mute the original clip** in the playlist. |
| **Wrong Speed** | The vocal is drifting off beat. | Newtone detected the wrong BPM. Click the specific note and drag the edge to stretch/warp it back to the grid line. |
| **Robotic Breaths** | Gasps sound like metallic glitches. | You tuned a breath noise to a musical note. **Cut** the breath separate and reset its "Center" to 0%. |
| **Lost Edit** | "I closed the plugin and my tuning is gone." | Newtone usually saves state with the project, BUT if you delete the plugin instance, it's gone. Always **Render/Export** your tuned vocal to audio immediately when done. |
| **Wrong Key** | Valid notes are being tuned to wrong notes. | You didn't tell Newtone the scale. It snaps to Chromatic. Use your ears to manually move the block to the correct scale degree. |

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points

For the 3 global knobs (Top Right).

## 1. "Transparent" (Natural Polish)
Best for: Acoustic Pop, Jazz, Folk.
*   **Center:** 40% (Gentle guidance).
*   **Variation:** 80% (Keep most wobble).
*   **Trans:** 50% (Standard).

## 2. "Modern Rap" (Standard Trap)
Best for: Mainstream Hip-Hop.
*   **Center:** 90% (Tight pitch).
*   **Variation:** 20% (Flattened sustain).
*   **Trans:** 15% (Quick glides).

## 3. "Hard Effect" (T-Pain/Cher)
Best for: Robotic FX.
*   **Center:** 100%.
*   **Variation:** 0%.
*   **Trans:** 0% (Instant).

## 4. "Background Glue" (Tight Harmonies)
Best for: Backing vocals that need to be felt, not heard.
*   **Center:** 100% (Perfect lock).
*   **Variation:** 0% (Remove vibrato clash).
*   **Trans:** 50%.

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Settings: MOODY

**Target:** The "Trapsoul" / "Dark R&B" Sound.
**Ref:** The Weeknd, Bryson Tiller, Travis Scott.

## The Recipe
1.  **Global Tune:** -3 Semitones (or -12 for chop-n-screw).
2.  **Center:** 80%.
3.  **Variation:** 10%. (Deadpan delivery).
4.  **Formant:** -2 Semitones (Darker throat).

## The "Demon Layer" Trick
1.  Duplicate your Lead Vocal.
2.  Open Newtone on the copy.
3.  Select All -> **Pitch Down 1 Octave (-12)**.
4.  **Center:** 100%.
5.  **Variation:** 0% (Flat).
6.  **Export** and mix this low under your lead vocal.
7.  *Result:* Thick, menacing texture that reinforces the main hook.

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Settings: Upbeat / Psych / Jazzy / Vibey

## ☀️ UPBEAT (Hyperpop / Club)
**Goal:** High Energy, Bright, Artificial.
*   **Pitch:** Standard (or +1 semitone for "Chip" feel).
*   **Formant:** **+2 Semitones**. (Lighter, younger).
*   **Trans:** 5ms (Instant snap).
*   **Move:** Manually shorten long notes to make the rhythm "staccato" and punchy.

## 🍄 PSYCHEDELIC (Trippy)
**Goal:** Liquid, Morphing.
*   **Center:** 20% (Drifting).
*   **Move:** Use the **Advanced Edit** mode (Wave). Grab the "Rotator" handle on long notes to make the pitch spiral up or down over time.
*   **Edit:** Slice a sustained note into 16th notes. Pitch them in a ramp Up/Down pattern (Arpeggiator effect).

## 🎷 JAZZY (Neo-Soul)
**Goal:** Human, Imperfect.
*   **Center:** 0% (Global). Use manual tuning only on "bad" notes.
*   **Move:** Identify "Scoops" (the curve up to a note). **Exaggerate** them by dragging the pitch start handle down.
*   **Timing:** "Lay it back". Select the whole phrase and drag it slightly right (off-grid) to create a lazy pocket.

## 🌊 VIBEY (Lo-Fi)
**Goal:** Worn out, Warped.
*   **Global Detune:** Select All -> Fine Pitch -15 cents.
*   **Variation:** 100% (Maximize wobble).
*   **Vibrato:** On sustained notes, Increase frequency (Speed) but Decrease Amplitude (Depth). Creates a "Fluttering tape" sound rather than a singer's vibrato.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Newtone Parameter Dictionary

| Parameter | Type | Range | Description | Vibe Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Center** | Global Knob | 0-100% | Snaps note pitches to the grid. Higher = more robotic. | **CRITICAL** (Defines Natural vs Pop vs Robot) |
| **Variation** | Global Knob | 0-100% | Preserves or flattens micro-pitch (vibrato). 0% = Flat line. | **High** (Defines Emotional vs Deadpan) |
| **Transition** | Global Knob | 0-100% | Speed of pitch glides between notes. Low = Fast/Snap. | **Medium** (Affects Rhythm/Groove) |
| **Formant** | Note Property | -12 to +12 semitones | Shifts vocal character (Chipmunk vs Monster) independent of pitch. | **CRITICAL** (Gender bending / Demon Voices) |
| **Volume** | Note Handle | -Inf to +6dB | Note-specific gain. | Low |
| **Ramp In/Out** | Note Handles | 0-100% | Volume fade length. | Low |
| **Advanced Mode** | Toggle | On/Off | Reveals Drift/Shift rotation handles. | High (Psychedelic effects) |

```

---

## FILE: 02-Data\presets\00_Workflow_Preset_Strategy.md

```markdown
# Workflow & Preset Strategy: Newtone

> **Note:** Newtone is unique. It relies on **Audio Data**, not just knob settings. Therefore, "Presets" are less relevant than "Workflow Habits".

## 💾 Saving State
1.  **Project Save:** Newtone saves all audio and edits inside your `.flp` project file.
    *   *Warning:* This increases project file size significantly.
2.  **Save as Pattern:** You can save a Newtone state via the plugin wrapper menu "Save preset as...", but it *will not* save the audio, only the knob positions (Center/Variation/Trans).
    *   *Usefulness:* Low. Usually better to just tweak the 3 knobs manually.

## 🏗️ The Template Strategy
Since you cannot load a "Tuned Vocal" as a preset, you should use **Mixer Track Presets** that include Newtone.
1.  **"Vocal Tuning Rack" Preset:**
    *   Slot 1: **Newtone** (Empty, ready to load).
    *   Slot 2: **Edison** (For recording output).
    *   Slot 3: **Fruity Limiter** (Ceiling).

## 🎛️ The "Knob Preset" List
Since you rarely save files, memorize these knob positions:

### 1. The "Auto-Tune" Lookalike
*   Center: 100%
*   Var: 0%
*   Trans: 10%

### 2. The "Invisible" Fix
*   Center: 40%
*   Var: 80%
*   Trans: 50%

### 3. The "Doubler"
*   Center: 80%
*   Var: 50%
*   Formant: -100 cents (Slightly deeper to separate from lead).

```

---

## FILE: 02-Data\presets\01-natural-correction.json

```json
{
  "name": "Natural Pitch Correction",
  "genre": "universal",
  "description": "Subtle pitch correction for natural results",
  "parameters": {
    "mode": "Pitch Correct",
    "speed": 70,
    "amount": 50,
    "formant": 0,
    "smooth": 30
  },
  "workflow": {
    "useCase": "Subtle pitch fixes",
    "steps": [
      "Load vocal audio",
      "Draw correction curve",
      "Set speed moderate",
      "Preserve natural character"
    ],
    "tips": [
      "Use slower speed",
      "Less is more",
      "Check for artifacts"
    ]
  },
  "abTest": {
    "listenFor": "In-tune but natural",
    "duration": "Vocal phrase"
  }
}
```

---

## FILE: 02-Data\presets\02-hard-tuning.json

```json
{
  "name": "Hard Tuning",
  "genre": "EDM",
  "description": "Extreme pitch correction for effect",
  "parameters": {
    "mode": "Pitch Correct",
    "speed": 100,
    "amount": 100,
    "formant": 0,
    "smooth": 10
  },
  "workflow": {
    "useCase": "T-Pain style effect",
    "steps": [
      "Load vocal",
      "Set speed max",
      "Full correction",
      "Minimal smoothing"
    ],
    "tips": [
      "Can sound robotic",
      "Use on specific words",
      "Blend with dry"
    ]
  },
  "abTest": {
    "listenFor": "Robotic, tuned sound",
    "duration": "Vocal phrase"
  }
}
```

---

## FILE: 02-Data\presets\03-melody-correction.json

```json
{
  "name": "Melody Correction",
  "genre": "universal",
  "description": "Full melody pitch correction",
  "parameters": {
    "mode": "Pitch Correct",
    "speed": 80,
    "amount": 70,
    "formant": 0,
    "smooth": 40
  },
  "workflow": {
    "useCase": "Full melody correction",
    "steps": [
      "Load full vocal",
      "Draw comprehensive curve",
      "Balance speed and smooth",
      "Preserve expression"
    ],
    "tips": [
      "Work section by section",
      "Listen for unnatural",
      "Leave some character"
    ]
  },
  "abTest": {
    "listenFor": "In-tune throughout",
    "duration": "Full verse"
  }
}
```

---

## FILE: 02-Data\presets\04-formant-shift.json

```json
{
  "name": "Formant Shift",
  "genre": "universal",
  "description": "Formant manipulation for timbre change",
  "parameters": {
    "mode": "Formant",
    "shift": 2,
    "amount": 70,
    "preservePitch": true
  },
  "workflow": {
    "useCase": "Timbre manipulation",
    "steps": [
      "Load audio",
      "Shift formant",
      "Preserve pitch",
      "Find character"
    ],
    "tips": [
      "Subtle changes work best",
      "Changes vowel sounds",
      "Can create alien effects"
    ]
  },
  "abTest": {
    "listenFor": "Different timbre",
    "duration": "Single notes"
  }
}
```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Newtone Complete Presets INDEX

## Tuning Presets (10 files)
| File | Name | Genre | Mood | Character |
|------|------|-------|------|-----------|
| `01-natural-correction.json` | Natural Correction | universal | natural | Transparent, smooth |
| `02-hard-tuning.json` | Hard Tuning | universal | synthetic | Robotic, aggressive |
| `03-melody-correction.json` | Melody Correction | universal | musical | Musical, transparent |
| `04-formant-shift.json` | Formant Shift | universal | character | Tone, character |
| `moody-dark-trap-tuning.json` | Dark Trap Tuning | hip-hop/rap | moody | Subtle, dark |
| `upbeat-bouncy-vocal.json` | Bouncy Vocal | hip-hop/rap | upbeat | Energetic, present |
| `electro-vocal-effect.json` | Electro Vocal | hip-hop/rap | electric | Electronic, modern |
| `jazzy-smooth-vocal.json` | Jazzy Smooth | hip-hop/rap | smooth | Warm, soulful |
| `funky-vocal-groove.json` | Funky Vocal | hip-hop/rap | funky | Groovy, organic |
| `energetic-drill-tuning.json` | Drill Tuning | hip-hop/rap | energetic | Aggressive, intense |

## Quick Reference
| Goal | Preset | Speed | File |
|------|--------|-------|------|
| Natural correction | Natural Correction | 50 | `01-natural-correction.json` |
| Robot voice | Hard Tuning | 100 | `02-hard-tuning.json` |
| Vocal tuning | Melody Correction | 60 | `03-melody-correction.json` |
| Character shift | Formant Shift | varies | `04-formant-shift.json` |
| Dark trap | Dark Trap Tuning | 35 | `moody-dark-trap-tuning.json` |
| Bouncy vocal | Bouncy Vocal | 60 | `upbeat-bouncy-vocal.json` |
| Electro effect | Electro Vocal | 75 | `electro-vocal-effect.json` |
| Jazzy smooth | Jazzy Smooth | 30 | `jazzy-smooth-vocal.json` |
| Funky groove | Funky Vocal | 50 | `funky-vocal-groove.json` |
| Drill tuning | Drill Tuning | 80 | `energetic-drill-tuning.json` |

## Workflow Reference
- [Newtone By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [Newtone By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [Newtone Troubleshooting Rules](../02-Data/rules/01_Troubleshooting_Matrix.md)

```

---

## FILE: 02-Data\presets\electro-vocal-effect.json

```json
{
  "name": "Electro Vocal Effect",
  "genre": "hip-hop/rap",
  "mood": "electric",
  "description": "Electronic tuning for experimental vocals",
  "parameters": {
    "speed": 75,
    "amount": 85,
    "formant": -5,
    "transition": 70,
    "noteTransition": 60
  },
  "workflow": {
    "useCase": "Electro hip-hop, experimental rap",
    "steps": [
      "Fast speed for presence",
      "High amount for effect",
      "Formant shift for character",
      "Quick transitions",
      "Embrace artificial sound"
    ],
    "tips": [
      "Great for robot effects",
      "Perfect on specific words",
      "Use on drops and builds",
      "Layer with distortion"
    ]
  }
}

```

---

## FILE: 02-Data\presets\energetic-drill-tuning.json

```json
{
  "name": "Drill Aggressive Tuning",
  "genre": "hip-hop/rap",
  "mood": "energetic",
  "description": "Intense tuning for aggressive drill vocals",
  "parameters": {
    "speed": 80,
    "amount": 90,
    "formant": -3,
    "transition": 75,
    "noteTransition": 65
  },
  "workflow": {
    "useCase": "Drill, trap, aggressive hip-hop",
    "steps": [
      "Fast speed for intensity",
      "High amount for effect",
      "Negative formant for edge",
      "Quick transitions",
      "Embrace aggressive sound"
    ],
    "tips": [
      "Perfect for drill melodies",
      "Great on high ad-libs",
      "Use on high-energy parts",
      "Check against raw vocal"
    ]
  }
}

```

---

## FILE: 02-Data\presets\funky-vocal-groove.json

```json
{
  "name": "Funky Vocal Groove",
  "genre": "hip-hop/rap",
  "mood": "funky",
  "description": "Groovy tuning for funk-inspired vocals",
  "parameters": {
    "speed": 50,
    "amount": 65,
    "formant": 2,
    "transition": 55,
    "noteTransition": 50
  },
  "workflow": {
    "useCase": "G-funk, funk-inspired hip-hop",
    "steps": [
      "Medium speed for groove",
      "Moderate amount for funk",
      "Slight formant for body",
      "Rhythmic transitions",
      "Maintain organic feel"
    ],
    "tips": [
      "Great on call-and-response",
      "Perfect on ad-libs",
      "Use on runs tastefully",
      "Sync to drum groove"
    ]
  }
}

```

---

## FILE: 02-Data\presets\jazzy-smooth-vocal.json

```json
{
  "name": "Jazzy Smooth Vocal",
  "genre": "hip-hop/rap",
  "mood": "smooth",
  "description": "Warm tuning for jazzy hip-hop vocals",
  "parameters": {
    "speed": 30,
    "amount": 50,
    "formant": 3,
    "transition": 40,
    "noteTransition": 35
  },
  "workflow": {
    "useCase": "Jazzy hip-hop, lo-fi, soulful rap",
    "steps": [
      "Slow speed for warmth",
      "Light amount for subtle",
      "Positive formant for body",
      "Smooth transitions",
      "Preserve soulful character"
    ],
    "tips": [
      "Perfect for melodic rap",
      "Great on soul samples",
      "Use on runs sparingly",
      "Add reverb for space"
    ]
  }
}

```

---

## FILE: 02-Data\presets\moody-dark-trap-tuning.json

```json
{
  "name": "Dark Trap Tuning",
  "genre": "hip-hop/rap",
  "mood": "moody",
  "description": "Subtle tuning for moody trap vocals",
  "parameters": {
    "speed": 35,
    "amount": 60,
    "formant": 0,
    "transition": 50,
    "noteTransition": 40
  },
  "workflow": {
    "useCase": "Dark trap, drill, moody hip-hop",
    "steps": [
      "Set slow speed for natural",
      "Reduce amount for subtle",
      "Keep formant neutral",
      "Smooth transitions",
      "Preserve vocal character"
    ],
    "tips": [
      "Perfect for rap vocals",
      "Great for harmonies",
      "Use on ad-libs subtly",
      "Check against original"
    ]
  }
}

```

---

## FILE: 02-Data\presets\upbeat-bouncy-vocal.json

```json
{
  "name": "Bouncy Vocal",
  "genre": "hip-hop/rap",
  "mood": "upbeat",
  "description": "Energetic tuning for upbeat hip-hop vocals",
  "parameters": {
    "speed": 60,
    "amount": 75,
    "formant": 5,
    "transition": 65,
    "noteTransition": 55
  },
  "workflow": {
    "useCase": "Upbeat hip-hop, party tracks",
    "steps": [
      "Medium speed for presence",
      "Moderate amount for energy",
      "Slight formant shift for pop",
      "Faster transitions",
      "Maintain natural sound"
    ],
    "tips": [
      "Great for sing-song rap",
      "Perfect on hooks",
      "Use on background vocals",
      "Check on laptop speakers"
    ]
  }
}

```

---

## FILE: 02-Data\rules\00_Do_Dont_Rules.md

```markdown
# Operational Rules: Do's and Don'ts

| Action | Verdict | Reason |
| :--- | :--- | :--- |
| **Tune Breaths** | 🛑 **STOP** | Tuning non-tonal noise (breaths, coughs) creates metallic artifacts. Cut them out and reset their Center knob to 0%. |
| **Tune Reverb** | 🛑 **STOP** | Never load audio with Reverb into Newtone. It will fail to detect pitch accurately. Only dry vocals. |
| **Use "Slave" Mode** | ✅ **DO** | Press the "H" button (Slave to Host) so Newtone plays in sync with your song. Otherwise, you lose context. |
| **Drag to Playlist** | ✅ **DO** | Frequent exporting (Drag to Playlist) is safer than keeping 50 instances of Newtone open. It saves RAM and protects your work. |
| **Formant Shift > 12st** | ⚠️ **CAUTION** | Shifting formants too far creates aliasing and loss of intelligibility. Use with care. |
| **Edit While Playing** | ⚠️ **CAUTION** | Heavy editing during playback can cause audio glitches or crashes on lower-end CPUs. Pause to cut/warp. |

```

---

## FILE: 02-Data\rules\01_Troubleshooting_Matrix.md

```markdown
# Troubleshooting Matrix

| Symptom | Probable Cause | The Fix |
| :--- | :--- | :--- |
| **"No Audio / Waveform"** | Source file is empty or too short. | Ensure valid audio is dragged in. Check if file is locked by another app. |
| **"Playing Double"** | Newtone + Playlist both playing. | Mute the original clip in the Playlist. |
| **"Off Beat"** | Wrong BPM detection. | Double-click the first note, check the time grid. Right-click Time Ruler -> "Snap to Grid". |
| **"Metallic / Robotic"** | Variation set too low on natural vocal. | Increase "Variation" knob to ~50%. |
| **"Notes snapping to wrong key"** | Scale not set. | Toolbar -> Scale Helper -> Select Root Note & Scale Mode (e.g., C Minor). |
| **"Choppy / Clicking"** | Bad slice points. | Zoom in. Add smooth volume fades (handles) at the start/end of the sliced note. |

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B

## 1. The "Perfect Imperfection" (R&B)
*   **Rule:** For Leads, aim for 90% perfection, but leave the "Soul" notes.
*   **Implementation:** Set Global Center to 80%. Then manually go in and reduce Center to 0% on:
    *   The start of phrase scoops.
    *   The vibrato on the long fade-out.
    *   The "Blue Notes" (b3, b7) that slide between keys.

## 2. The "Trap Hook" (Hip-Hop)
*   **Rule:** The Hook must be tighter than the Verse.
*   **Implementation:**
    *   **Verse:** Center 60%. (Conversational).
    *   **Hook:** Center 100%, Variation 0%. (Earworm).
    *   **Ad-libs:** Formant Shifted -12st. (Texture).

## 3. The "Chopped" Vocal (Sample Drill)
*   **Rule:** Pitch shifting samples requires Formant Correction to sound "expensive".
*   **Implementation:** If you pitch a sample UP +5 semitones, shift the Formant DOWN -5 semitones.
    *   *Why:* This keeps the singer sounding like an adult, rather than a sped-up chipmunk (unless you WANT the chipmunk soul sound).

## 4. Stack Alignment
*   **Rule:** Harmonies must start and end at the EXACT same time as the lead.
*   **Implementation:** Use Newtone's **Warp Markers** (Time Handles) to visually align the blobs of the Background Vocal to the grid lines where the Lead Vocal starts.
    *   *Result:* A "Wall of Sound" where 10 voices sound like 1 thick voice.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Workflow: Quick Vocal Tuning

**Goal:** Turn a raw take into a usable demo vocal in < 2 minutes.

1.  **Load:** Drag audio clip into Newtone.
2.  **Sync:** Ensure "Slave to Host" (H) is ON.
3.  **Scale:** Right-click the **Scale** icon (top toolbar) -> Select the song's Key (e.g., F# Major).
    *   *Check:* The background lanes should change so only safe notes are grey.
4.  **Global Tune:**
    *   Turn **Center** to ~80%.
    *   Turn **Variation** to ~40%.
5.  **Scan:** Listen to the playback.
6.  **Spot Fix:** If a note sounds weird:
    *   Right-click (to verify pitch).
    *   Alt-Click + Drag vertically to snap it to a different valid note.
7.  **Export:** Click "Send to Playlist". Done.

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Sound_Design.md

```markdown
# Workflow: Glitch Vocal Design

**Goal:** Create an unnatural, synthetic vocal texture.

1.  **Flatten:** Select All. Variation 0%. Transition 0%.
2.  **Slice:** Use the **Cut Tool** (C). Slice long sustained notes into 1/8th note chunks.
3.  **Arpeggiate:** Drag every other slice up/down by 5 or 7 semitones to create a melody that wasn't there.
4.  **Formant Warp:**
    *   Select random slices.
    *   Shift their **Formant** (Alt-Drag Center) wildly up and down.
5.  **Result:** A "glitch-hop" style vocal chop that retains the lyrics but destroys the melody.

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Mix_Or_Control.md

```markdown
# Workflow: Tightening Harmonies

**Goal:** Align a loose backing stack to the Lead vocal.

1.  **Reference:** Have your Lead Vocal visible in the Playlist (waveform).
2.  **Load:** Load the Backing Vocal into Newtone.
3.  **Visual Alignment:** Look at where the blobs start vs the Playlist waveform lines above.
4.  **Warp:**
    *   Hover over the **Left Edge** of a blob (Cursor changes to <->).
    *   Drag the start point to match the Lead.
    *   *Note:* Hold `Alt` for free-dragging without snap.
5.  **Cutoff:**
    *   Check where the notes END.
    *   Drag the **Right Edge** to ensure the backing vocal cuts off exactly when the Lead does.
6.  **De-Breath:** Cut out any breaths in the backing vocal and delete them (or mute volume). You only need breaths on the lead.

```

---

## FILE: 03-Workflows\by-goal\10_Vibe_Moody.md

```markdown
# Vibe Workflow: MOODY (The "Demon")

**Context:** Creating that low-pitched, ominous vocal layer found in dark trap.

1.  **Source:** Record a standard rap take (Mid range).
2.  **Clone:** Duplicate the audio clip and opened in Newtone.
3.  **Pitch Drop:**
    *   Select All (Ctrl+A).
    *   Pitch down **-12 Semitones** (1 Octave).
4.  **Formant Optimization:**
    *   Usually, -12 pitch shift sounds muddy.
    *   **Shift Formant UP +2 or +3 semitones** relative to the new pitch.
    *   *Why:* This keeps the definition/intelligibility while keeping the "Deep" note.
5.  **Monotone:**
    *   Turn **Variation** to 0%.
    *   Turn **Center** to 100%.
    *   This removes all emotion, making it sound like a cold machine.
6.  **Mix:**
    *   Export to Playlist.
    *   Low Pass Filter @ 3kHz.
    *   Mix quietly under the main vocal.

```

---

## FILE: 03-Workflows\by-goal\11_Vibe_Upbeat.md

```markdown
# Vibe Workflow: UPBEAT (Pop Sheen)

**Context:** Making a vocal cut through a dense, happy mix.

1.  **Formant Lift:**
    *   Select All.
    *   Shift Formant **+1.5 semitones**. (Do not change Pitch).
    *   *Result:* Voice sounds lighter, "smilier".
2.  **Transition Snap:**
    *   Turn **Transition** knob down to ~10ms.
    *   *Result:* The singer hits notes instantly. No lazy slides.
3.  **Breath Control:**
    *   Don't delete breaths (it needs energy).
    *   Instead, shorten them using the Time Stretch drag. Make the gasps quick and urgent.
4.  **High Shelf:**
    *   Export.
    *   Boost highs. The Formant lift will make the highs take EQ better without harshness.

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe Workflow: PSYCHEDELIC (Liquid)

**Context:** Tame Impala / Travis Scott style drifting vocals.

1.  **The "Drift" LFO:**
    *   Go to **Advanced Edit** mode (Wave icon).
    *   Find a long sustained note.
    *   Grab the **Vibrato Frequency** handle (top of note). Crank it UP.
    *   Grab the **Vibrato Amplitude** handle. Crank it UP.
    *   *Result:* Artificial, laser-like vibrato.
2.  **The "Slide":**
    *   Cut a note in half.
    *   Pitch the second half UP +12 semitones.
    *   Turn the **Transition** knob UP (Slow).
    *   *Result:* A slow, gooey portamento slide up to the octave.
3.  **Formant Animation:**
    *   Select every other phrase.
    *   Shift Formant +4 on one, -4 on the next.
    *   *Result:* The singer seems to morph size constantly.

```

---

## FILE: 03-Workflows\by-goal\13_Vibe_Jazzy.md

```markdown
# Vibe Workflow: JAZZY (Neo-Soul)

**Context:** Preserving the human element in a digital DAW.

1.  **Manual Only:**
    *   Set Global Center to 0%. (Do not auto-tune).
    *   Listen for notes that are *distractingly* off.
    *   Fix ONLY those notes manually.
2.  **The "Blue" Third:**
    *   If the song is in Minor, find the minor 3rd.
    *   Drag it slightly sharp (+10 to +20 cents).
    *   *Result:* Creates tension/blues feel.
3.  **Scoop Preservation:**
    *   Ensure **Variation** is at 100%.
    *   If a note entrance feels too clean, use the **Advanced Edit** pitch ramp to drastically scoop the beginning of the note up from -2 semitones.

```

---

## FILE: 03-Workflows\by-goal\14_Vibe_Vibey.md

```markdown
# Vibe Workflow: VIBEY (Lo-Fi Haze)

**Context:** Making it sound like a sample from 1970.

1.  **Global Detune:**
    *   Select All.
    *   Drag everything **Down -20 cents**.
    *   *Result:* The whole vocal is flat. Just enough to feel "old" and untrusted.
2.  **Volume Degrade:**
    *   Randomly select notes and lower their volume handle by -2dB to -4dB.
    *   *Result:* Simulates tape dropout / uneven volume consistency.
3.  **Transition Slur:**
    *   Turn **Transition** knob UP (Slow).
    *   *Result:* Reduces the attack definition of notes, making them blur together like an old recording.

```

---

## FILE: 03-Workflows\by-goal\INDEX.md

```markdown
# Newtone Workflows INDEX

## By-Goal Workflows

| File | Focus |
|------|-------|
| [01_Goal_Quick_Result.md](01_Goal_Quick_Result.md) | Quick tuning results |
| [02_Goal_Mix_Or_Control.md](02_Goal_Mix_Or_Control.md) | Mix vs control |
| [10_Vibe_Moody.md](10_Vibe_Moody.md) | Moody vocal tuning |
| [11_Vibe_Upbeat.md](11_Vibe_Upbeat.md) | Upbeat vocal tuning |
| [12_Vibe_Psychedelic.md](12_Vibe_Psychedelic.md) | Psychedelic effects |
| [13_Vibe_Jazzy.md](13_Vibe_Jazzy.md) | Jazzy vocal tuning |
| [14_Vibe_Vibey.md](14_Vibe_Vibey.md) | Vibey vocal tuning |
| [hop-hop-subgenre-tuning.md](hop-hop-subgenre-tuning.md) | Hip-Hop Sub-Genre Tuning |

## Quick Reference

| Goal | Workflow |
|------|----------|
| Quick tuning | Quick Result |
| Mix vs control | Mix Or Control |
| Moody vocals | Vibe Moody |
| Upbeat vocals | Vibe Upbeat |
| Psychedelic effects | Vibe Psychedelic |
| Jazzy vocals | Vibe Jazzy |
| Vibey vocals | Vibe Vibey |
| Dark trap tuning | Hip-Hop Sub-Genre Tuning |
| Bouncy vocal | Hip-Hop Sub-Genre Tuning |
| Electro vocal | Hip-Hop Sub-Genre Tuning |
| Jazzy smooth | Hip-Hop Sub-Genre Tuning |
| Funky groove | Hip-Hop Sub-Genre Tuning |
| Drill tuning | Hip-Hop Sub-Genre Tuning |

## Related Documentation

- [Newtone Presets](../02-Data/presets/INDEX.md)
- [Newtone Troubleshooting Rules](../02-Data/rules/01_Troubleshooting_Matrix.md)

```

---

## FILE: 03-Workflows\by-goal\hop-hop-subgenre-tuning.md

```markdown
# Hip-Hop Sub-Genre Newtone Workflows

## Moody Dark Trap Tuning
| Parameter | Setting |
|-----------|---------|
| Speed | 35% |
| Amount | 60% |
| Formant | 0 |
| Transition | 50% |
| Note Transition | 40% |

### Tips
- Slow speed for natural
- Reduce amount for subtle
- Preserve vocal character
- Perfect for rap vocals

---

## Upbeat Bouncy Vocal
| Parameter | Setting |
|-----------|---------|
| Speed | 60% |
| Amount | 75% |
| Formant | +5 |
| Transition | 65% |
| Note Transition | 55% |

### Tips
- Medium speed for presence
- Moderate amount for energy
- Slight formant shift for pop
- Great for sing-song rap

---

## Electro Vocal Effect
| Parameter | Setting |
|-----------|---------|
| Speed | 75% |
| Amount | 85% |
| Formant | -5 |
| Transition | 70% |
| Note Transition | 60% |

### Tips
- Fast speed for presence
- High amount for effect
- Formant shift for character
- Great for robot effects

---

## Jazzy Smooth Vocal
| Parameter | Setting |
|-----------|---------|
| Speed | 30% |
| Amount | 50% |
| Formant | +3 |
| Transition | 40% |
| Note Transition | 35% |

### Tips
- Slow speed for warmth
- Light amount for subtle
- Positive formant for body
- Perfect for melodic rap

---

## Funky Vocal Groove
| Parameter | Setting |
|-----------|---------|
| Speed | 50% |
| Amount | 65% |
| Formant | +2 |
| Transition | 55% |
| Note Transition | 50% |

### Tips
- Medium speed for groove
- Moderate amount for funk
- Slight formant for body
- Great on call-and-response

---

## Energetic Drill Tuning
| Parameter | Setting |
|-----------|---------|
| Speed | 80% |
| Amount | 90% |
| Formant | -3 |
| Transition | 75% |
| Note Transition | 65% |

### Tips
- Fast speed for intensity
- High amount for effect
- Negative formant for edge
- Perfect for drill melodies

---

## Related Documentation
- [Newtone Presets INDEX](../02-Data/presets/INDEX.md)
- [Newtone Troubleshooting Rules](../02-Data/rules/01_Troubleshooting_Matrix.md)

```

---

## FILE: 03-Workflows\by-instrument\Bass_Quantization.md

```markdown
# Workflow: Bass Guitar Correction

**Context:** A live bass player played a great groove but hit a few bum notes.

1.  **Mode:** Ensure Newtone is in **Monophonic** mode (it always is, but ensure bass is mono).
2.  **Snap:** Bass frequencies are hard to detect.
    *   Use **Right Click -> Snap to Grid** to force the detected blobs to the nearest key.
3.  **Slide Correction:**
    *   Bass slides often go out of tune.
    *   Use **Advanced Edit**.
    *   Drag the **Pitch Drift** handle to ensure the slide lands on the destination note target, not sharp/flat.
4.  **Timing:**
    *   Bass must lock to Kick.
    *   Visually align the start of the Bass blob to the Kick transient (using Playlist ghost channels or visual alignment).

```

---

## FILE: 03-Workflows\by-instrument\Vocals_Leads_Backing.md

```markdown
# Workflow: Lead vs Backing Vocals

## Lead Recipe (The Star)
1.  **Center:** 60-80% (Tuneful but human).
2.  **Var:** 50% (Controlled vibrato).
3.  **Formant:** 0 (Natural).
4.  **Priority:** Focus on **Emotion**. If a flat note has better emotion, keep it flat.

## Backing Recipe (The Support)
1.  **Center:** 100% (Pin it).
2.  **Var:** 0-20% (Remove texture).
3.  **Formant:** +/- 2 semitones (Differentiate from lead).
4.  **Priority:** Focus on **Timing**. Align start/end points perfectly to the lead.
5.  **Trick:** If you have 2 backing layers, Formant shift one UP and one DOWN to widen the stereo image perception without phasing.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

| ID | Source Name | Type | Key Information Derived |
| :--- | :--- | :--- | :--- |
| **IL-MAN** | Image-Line Official Manual | Primary | UI Map, Parameter functions (Center, Variation), Editor shortcuts. |
| **HIP-HOP-XP** | Hip-Hop Production Best Practices | Experience | T-Pain effect settings, Formant shifting for Demon vocals, Backing vocal alignment. |
| **VIBE-FRAME** | Project Vibe Framework | Internal Strategy | Mapping "Moody/Psychedelic/etc" to specific pitch/time parameters. |

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Official Links

*   **Plugin Manual:** [Image-Line Newtone](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Newtone.htm)
*   **Video Tutorial:** [FL Studio Guru: Newtone Guide](https://www.youtube.com/watch?v=...)
*   **Support Forum:** [Newtone Tech Support](https://forum.image-line.com/viewforum.php?f=200)

```

---

## FILE: 04-Reference\02_Coverage_Checklist.md

```markdown
# Coverage Checklist

## Learning
- [x] Mental Model (Method Acting)
- [x] UI Map (Blobs, Orange Line)
- [x] Core Techniques (Cut & Center)
- [x] Vibe Translation (5 Vibes Mapped)

## Data
- [x] Parameters (Center, Var, Trans, Formant)
- [x] Presets Strategy (Knob Memory)
- [x] Rules (Breaths, Reverb, Scale)

## Workflows
- [x] Quick Tuning
- [x] Glitch Design
- [x] Harmony Alignment
- [x] Moody Vibe
- [x] Upbeat Vibe
- [x] Psych Vibe
- [x] Jazzy Vibe
- [x] Vibey Vibe
- [x] Lead vs Backing
- [x] Bass Correction

## Reference
- [x] Sources
- [x] Links
- [x] Style Board

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Hip-Hop & R&B

How Newtone defines the sound of modern genres.

## 1. The "Toronto" Sound (The Weeknd / Nav)
*   **Signature:** Dark, detuned, pitch-perfect but emotionless.
*   **Settings:**
    *   Pitch: -2 to -4 semitones.
    *   Formant: Corrected (or lowered).
    *   Variation: 0% (Robot).

## 2. The "Atlanta" Sound (Future / Thug)
*   **Signature:** High energy, elastic, formant-warped.
*   **Settings:**
    *   Center: 100%.
    *   Transition: Fast.
    *   Formant: Often shifted UP to squeeze the vocal into a higher register.

## 3. The "Hyperpop" Sound (Glaive / 100 gecs)
*   **Signature:** Glitched, artificial, gender-bent.
*   **Settings:**
    *   Formant: +12 semitones (Chipmunk).
    *   Vibrato: Synthetic/Drawn in.
    *   Slicing: 32nd note stutters pitched to arpeggios.

## 4. The "Neo-Soul" Sound (H.E.R. / Daniel Caesar)
*   **Signature:** Transparent, supportive.
*   **Settings:**
    *   Used ONLY on backing vocals to glue the chord stack.
    *   Leads are often left raw or tuned very gently (30%).

```

---

