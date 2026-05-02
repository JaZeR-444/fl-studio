# Gross Beat - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-Cheat-Sheet.md

```markdown
# GROSS BEAT MASTER CHEAT SHEET

## 📜 The Golden Rules
1.  **The 2-Bar Limit**: You only have **2 Bars** of history. You cannot grab audio from 3 bars ago.
2.  **The Safety Line**: The diagonal line is "Now". Drawing **Above** it = Silence (Future). Drawing **Below** it = Delay (Past).
3.  **The Mix Knob**: NEVER use the Channel Rack mix knob. Use the **Time Mix** / **Vol Mix** knobs inside the plugin to avoid phasing.

## 🎛️ Essential Controls

| Control | Function | Pro Tip |
| :--- | :--- | :--- |
| **Time Grid (Green)** | Pitch & Speed | Horizontal = Stop. Up = Reverse. Down = Slow. |
| **Vol Grid (Orange)** | Gating & Ducking | Use for Sidechaining (Kick ducking). |
| **ATT Knob** | Volume Smoothing | Set to **2-5ms** to stop clicking on gates. |
| **Click Red.** | Time De-clicking | Always **ON** for melodies, **OFF** for sharp drum glitches. |
| **Trig (Trigger)** | Sync Timing | Set to **1 Beat** for quantized jumps, **Off** for finger drumming. |

## ⚡ Quick Recipes

### 1. Instant Half-Speed (The "Trap" Sound)
*   **Grid**: Time
*   **Shape**: Sawtooth Wave.
*   **Draw**: Start at **Top-Left**. End at **Bottom-Right** of the *2nd Beat* vertical marker (spanning 1 beat of time).
*   **Math**: Play 1 beat of audio over 2 beats of time.
*   **Shortcut**: `Presets > Momentary > Slot 2`.

### 2. Tape Stop
*   **Grid**: Time
*   **Shape**: Curve to Horizontal.
*   **Draw**: Start on Safety Line. Curve down until the line is **Flat**.
*   **Tension**: Drag tension handle DOWN for a "Turntable" inertia stop.

### 3. Reverse (1 Bar)
*   **Grid**: Time
*   **Shape**: "X" Shape (relative to Safety Line).
*   **Draw**: Start at **Bottom-Left** (-1 Bar). Draw line to **Top-Right** (Now).
*   **Result**: Audio plays backwards from the buffer.

### 4. Sidechain Ducking
*   **Grid**: Volume
*   **Snap**: 1/4 Beat.
*   **Draw**: Start at 0% (Bottom). Curve up to 100% (Top) halfway through the beat.
*   **Result**: Kills the transient, lets the Kick punch through.

## 🖱️ Mouse & Grid Secrets
*   **Right-Click Point**: Change curve type (Single Curve, Double Curve, Hold/Step).
*   **Alt + Drag**: Bypass snap (Freehand).
*   **Shift + Drag**: Lock vertical/horizontal movement.
*   **Right-Click Slot**: "Init song with this position" (Fixes the "Wrong pattern on start" bug).

## 🚑 Troubleshooting (Why is it broken?)

*   **"It clicks loudly!"**
    *   Turn **Click Reduction** ON.
    *   Increase **ATT** knob (Volume) to 5ms.
    *   Check if your curve has sharp vertical jumps.
*   **"It's silent at the start!"**
    *   You are trying to play "1 Bar Ago" but the song just started.
    *   **Fix**: Automate the Mix knob to 0% for the first bar.
*   **"My melody sounds thin/hollow!"**
    *   Phase Cancellation.
    *   **Fix**: Don't use 50% Mix. Commit to 100% Wet or 0% Wet for time effects.

## 🧠 Advanced Math
*   **Horizontal Line** = 0% Speed (Pause).
*   **Diagonal (1:1)** = 100% Speed (Normal).
*   **Steep Diagonal (2:1)** = 50% Speed (-1 Octave).
*   **Upward Slope (-1:1)** = -100% Speed (Reverse).

---
*Keep this file open while producing.*

```

---

## FILE: 00-START-HERE.md

```markdown
# Getting Started with Gross Beat

Welcome to your Gross Beat research and development environment. This guide will help you navigate the documentation and resources available here to master this powerful time and volume manipulation plugin.

## 🏁 Immediate First Steps

1.  **Understand the Core Concept**: Gross Beat is a 2-bar buffer effect. It records audio and lets you manipulate playback position (Time) and amplitude (Volume) in real-time.
2.  **Explore the Reference Materials**:
    *   Navigate to `01-Learning/Quick-Reference/` to find the **Parameter Cheat Sheet** and **Buffer Mechanics** explanations. These are foundational.
    *   Check `04-Reference/` for MIDI triggering details.
3.  **Try the "Momentary" Preset**: In FL Studio, load Gross Beat, select the "Momentary" preset, and click the "1/2 speed" slot while audio plays to hear the effect immediately.

## 📂 Directory Structure Guide

*   **`01-Learning/`**: Educational resources and deep dives into specific features.
*   **`02-Data/`**: structured data files (JSON) for plugin parameters.
*   **`03-Workflows/`**: Step-by-step guides for achieving specific sounds (Half-speed, Glitch, Tape Stop).
*   **`04-Reference/`**: Technical details like MIDI mapping.

## 🚀 Key Learning Paths

*   **For Trap/Hip-Hop**: Focus on the `perfect-half-speed.md` workflow (coming soon in `03-Workflows/by-goal/`).
*   **For Glitch/IDM**: Explore the buffer mechanics and randomization possibilities.
*   **For Live Performance**: Master the MIDI pattern triggering setups.

## 🛠 Prerequisites

*   FL Studio installed (Gross Beat is native).
*   Basic understanding of the Playlist and Mixer in FL Studio.

---
*Created by JaZeR Mainframe Research Assistant*

```

---

## FILE: README.md

```markdown
# Gross Beat - Time & Volume Manipulation

`\`\`
 ██████╗ ██████╗  ██████╗ ███████╗███████╗    ██████╗ ███████╗ █████╗ ████████╗
██╔════╝ ██╔══██╗██╔═══██╗██╔════╝██╔════╝    ██╔══██╗██╔════╝██╔══██╗╚══██╔══╝
██║  ███╗██████╔╝██║   ██║███████╗███████╗    ██████╔╝█████╗  ███████║   ██║   
██║   ██║██╔══██╗██║   ██║╚════██║╚════██║    ██╔══██╗██╔══╝  ██╔══██║   ██║   
╚██████╔╝██║  ██║╚██████╔╝███████║███████║    ██████╔╝███████╗██║  ██║   ██║   
 ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   
`\`\`

**Plugin Type:** Time & Volume Shaper / Buffer Effect
**Category:** Effect / Creative / Rhythmic
**Official Manual:** [Image-Line Gross Beat Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Gross%20Beat.htm)

---

## 🎯 What is Gross Beat?

Gross Beat is a powerful real-time audio manipulation effect designed for rhythmic gating, time-stretching, glitching, and scratching. It works by storing incoming audio in a 2-bar rolling buffer, which is then replayed based on custom **Time** and **Volume** envelopes. It is legendary for creating the "Half-speed" effect, Trap-style gating, and complex rhythmic repetitions.

**Key Capabilities:**
- **Dual Envelope Slots:** 36 Time slots and 36 Volume slots.
- **Half-Speed Effect:** Instantly slow down audio by 2x (Tape style).
- **Rhythmic Gating:** Complex volume patterns synced to the beat.
- **Turntable Emulation:** Create scratches and tape stops via time envelopes.
- **Real-Time Triggering:** Switch between 72 patterns via MIDI or automation.
- **Click Reduction:** Smoothing algorithms for artifact-free transitions.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **buffer-mechanics-explained.md** (How the 2-bar loop works)
3. Create **parameter-cheat-sheet.md**
4. Load the "Momentary" preset and click the "1/2 speed" slot while audio plays.

### For Trap/Hip-Hop Producers:
1. Study **perfect-half-speed-setup.md**
2. Review **creating-stutter-glitches.md**
3. Learn **sidechain-ducking-curves.md**

### For Sound Designers:
1. Study **rhythmic-reverses.md**
2. Review **turntable-scratch-envelopes.md**
3. Learn **hq-resampling-vs-cpu.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Time Grid:** Horizontal axis (Time), Vertical axis (Buffer position).
  - **Volume Grid:** Standard envelope editor.
  - **Pattern Slots:** 1-36 selectors.
  - **Attack/Release:** Smoothing controls.
  - **Mix (Dry/Wet):** Parallel processing.

- [ ] **buffer-mechanics-explained.md**
  - Why Gross Beat has a 2-bar limit.
  - Understanding the "diagonal" line (normal playback).

#### 02-Data/parameters/
- [ ] **gross-beat-params.json**
  `\`\`json
  {
    "plugin_name": "Gross Beat",
    "category": "Rhythmic",
    "parameters": [
      {
        "name": "HQ Resampling",
        "type": "switch",
        "description": "Higher quality pitch shifting",
        "pro_tip": "Enable for final renders, disable during production to save CPU."
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **perfect-half-speed.md**
  - Identifying the "1/2 speed" pattern.
  - Using the Mix knob to blend the original and half-speed (Instant "Growth" texture).
  - Automation timing for switching patterns.

- [ ] **tape-stop-and-spin-up.md**
  - Drawing curved lines in the Time envelope.
  - Syncing the stop length to 1 beat or 1 bar.

- [ ] **trance-gate-sequencing.md**
  - Using the Volume grid to create complex rhythm gates.
  - Snapping control points to 1/16th notes.

#### 03-Workflows/by-context/
- [ ] **glitching-vocals.md**
- [ ] **melody-reshaping-workflow.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **midi-pattern-triggering.md**
  - How to link MIDI notes to switch Gross Beat slots in real-time.
  - Mapping MIDI Channel 1 notes to patterns.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Pattern Mastery

**Tasks:**
1. Put Gross Beat on a Drum Loop
2. Click through factory patterns (Time vs Volume)
3. Learn to draw a simple "Reverse" curve
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What is the difference between "Slot" attack and "Global" attack?
- Why is there a delay when I switch patterns? (Check the "Hold" and "Trig" settings).

### Phase 2: Complex Timing (Week 2)
**Goal:** The Glitch

**Tasks:**
1. Create a "Double-time" repeat effect
2. Automate the Mix knob for specific phrases
3. Set up MIDI note triggering
4. Create midi-pattern-triggering.md

---

## 📊 Plugin Specifications to Document

### Engine
- Buffer Size (2 bars)
- Resampling Modes (Linear, Hermite, Sinc?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my audio out of sync? (Check if the Time envelope goes past the 2-bar buffer or if "Pos" is offset).
2. How do I stop the "clicks" when pattern switching? (Increase "Attack" smoothing).

### Advanced Usage
1. How to create a "Shepard Tone" infinite riser in Gross Beat?

---

## 🔗 Cross-Reference with Other Plugins

Gross Beat is often used with:
- **Fruity Delay 3** (Adding echoes to glitches)
- **Love Philter** (Filtering the rhythmic gates)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Gross Beat/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── buffer-mechanics-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── gross-beat-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── perfect-half-speed.md
│   │   ├── tape-stop-and-spin-up.md
│   │   └── trance-gate-sequencing.md
│
└── 04-Reference/
    └── midi-pattern-triggering.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a custom 1/2 speed preset with zero clicking
- [ ] Switch between 4 different rhythmic patterns via MIDI notes
- [ ] Explain how the Time envelope correlates to buffer position
- [ ] Build a "Tape Stop" that lasts exactly half a bar

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Gross Beat

## The 60-Second Mental Model
Gross Beat is a **Time and Volume Manipulator**. It continuously records the last 2 bars of your audio into a "buffer." You use envelopes to tell FL Studio *where* in that buffer to play from (Time) and *how loud* to play it (Volume). If you play the audio at half speed, it sounds an octave lower—like slowing down a vinyl record. [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** The "industry standard" for the Trap/Hip-Hop "half-time" sound.
*   **Where it fits:** It is a rhythmic effect plugin. It works best on **Melody Loops**, **Drums**, or **Full Mixes** during transitions.

## Hip-Hop / R&B Context
*   **The "Half-Time" Effect:** Instant dark energy for piano or guitar loops.
*   **Rhythmic Gating:** Turn a sustained pad into a "stuttering" rhythmic element.
*   **Tape Stops:** Create that classic "slowing down to a halt" effect at the end of a bar or verse.
*   **Sidechain Pumping:** Use the Volume presets to create a fake "sidechain" pump without needing a kick drum trigger.

## When To Use
*   When you want to **re-sample** your melody in real-time.
*   When you need to create **complex rhythmic stutters** or glitches.
*   When creating **Transitions** (Tape stops, scratches, reverses).

## When NOT To Use
*   **Low End:** Be careful using Gross Beat on the Master or Bass track. It can smear the phase of your sub-bass and kick, making the mix sound "weak" or "muddy." [SRC: REPUTABLE]
*   **Long Melodies:** It only has a 2-bar buffer. If your melody is 4 bars long, Gross Beat will start repeating the first 2 bars halfway through.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Gross Beat

## UI Tour
1.  **Time Editor:** The main grid for time manipulation.
    *   **Horizontal Line at Top:** Normal playback.
    *   **Diagonal Line (Down):** Slows down time.
    *   **Diagonal Line (Up):** Speeds up time.
2.  **Volume Editor:** A standard envelope editor for gating.
3.  **Pattern Slots (1-36):** You have 36 slots for Time and 36 for Volume. You can trigger these via MIDI.
4.  **Attack/Release (Smoothing):** Critical for stopping "clicks" when the playhead jumps. [SRC: IL-MAN]
5.  **Dry/Wet Mix:** Controls how much of the original signal is blended with the processed one.

## Signal Flow
1.  **Input:** Audio is recorded into the 2-bar buffer.
2.  **Buffer Read:** The **Time Envelope** tells the playhead where to look in the buffer.
3.  **Volume Application:** The **Volume Envelope** is applied to the resulting audio.
4.  **Smoothing:** The **Attack/Release** knobs smooth out any sudden jumps in the playhead or volume.
5.  **Output:** The final manipulated audio is sent to the mixer.

## The 2-Bar Buffer Rule
Gross Beat is always recording. The grid represents 2 bars. 
*   If you draw a line in the first bar, it repeats every bar.
*   If you draw across both bars, it repeats every 2 bars.
*   **Crucial:** You cannot "look ahead" in time; you can only look back at what has already been recorded in the buffer. [SRC: REPUTABLE]

## Things Beginners Misunderstand
*   **Pattern Switching:** If you change a pattern mid-beat, it might wait until the next bar to switch unless you adjust the "Hold" and "Trig" settings.
*   **Clicks:** If your time envelope jumps vertically, it will click. You **must** increase the Attack knob (lower left) to smooth this out.
*   **Pitch vs Time:** In Gross Beat, changing time *always* changes pitch (Tape-style). You cannot change time without affecting pitch inside this plugin.

```

---

## FILE: 01-Learning\Concepts\02_The_Diagonal_Line_Math.md

```markdown
# Mental Model: The Diagonal Line (Time Buffer)

## Understanding the Grid
The Gross Beat Time Editor is a **map of the 2-bar buffer**.

1.  **The Top Horizontal Line:** This is "Real Time." The playhead reads exactly what is being recorded right now.
2.  **The Bottom Horizontal Line:** This is "2 Bars Ago." You are hearing what happened exactly 2 bars ago.
3.  **The Diagonal Line (Top-Left to Bottom-Right):** This is **Half Speed**. Because the line is moving "away" from real-time, it takes 2 bars of project time to read 1 bar of buffer audio. 
    *   *Result: Pitch drops 1 octave, speed is halved.*

## The "Reverse" Line
If you draw a line from **Bottom-Left to Top-Right** (diagonal), you are moving "toward" the current recording faster than time is passing. 
*   *Result: Audio plays in Reverse.* [SRC: REPUTABLE]

## The "Stutter" Vertical Jump
If you draw a horizontal line in the middle of the grid, you are "looping" a specific slice of the buffer. Every time the envelope resets, the playhead jumps back to the start of that slice.
*   *Result: 1/4 or 1/8 note repeating "Glitches."*

## Rule of Thumb
*   **Steeper Angle:** Faster speed / Higher pitch.
*   **Shallower Angle:** Slower speed / Lower pitch.
*   **Vertical Jumps:** Instant jumps in the buffer (Causes clicks—needs Smoothing). [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Gross Beat

## Moody (Dark, Emo-Trap, Underwater)
*   **Production Levers:**
    *   **Preset:** Momentary -> **1/2 Speed**.
    *   **Mix:** 50% to 70%. Mixing the original melody with the half-speed version creates a lush, "detuned" octave layer.
    *   **Smoothing:** High Attack (2-5ms) to make it feel "soft."
*   **Don't Do This:** Avoid bright, high-pitched stutters.

## Upbeat (Energetic, Glitchy, Kinetic)
*   **Production Levers:**
    *   **Time:** Use "1/2 Beat" or "1/4 Beat" repeats (Stutters).
    *   **Volume:** Use a 1/16th note gate pattern.
    *   **Movement:** Switch patterns every 2 bars to keep the listener's ear engaged.
*   **Don't Do This:** Don't use long, slow tape stops; they kill the momentum.

## Psychedelic (Trippy, Surreal, Evolving)
*   **Production Levers:**
    *   **Reverse:** Use the "Reverse" patterns to make melodies sound like they are playing backward.
    *   **Chaos:** Draw non-linear, wavy lines in the Time editor to create "warping" pitch effects.
    *   **Parallel:** Mix at 30% for a "trailing" reverse effect behind the main vocal.
*   **Don't Do This:** Avoid standard gating; look for "unnatural" time movements.

## Jazzy (Soulful, Pumping, Groovy)
*   **Production Levers:**
    *   **Sidechain:** Use the "Sidechain" volume presets to create a rhythmic "ducking" effect.
    *   **Attack:** Medium attack to make the "pump" feel like it's breathing.
*   **Don't Do This:** Avoid harsh "Hard Gate" patterns; jazz needs smooth volume curves.

## Vibey (Smooth, Lo-Fi, R&B)
*   **Production Levers:**
    *   **Tape Stop:** Use a slow curve at the end of a section to "wind down" the energy.
    *   **Turntable:** Use the "Scratch" presets for transition ad-libs.
    *   **Mix:** 100% Wet for that classic "lo-fi" pitch-shifted feel. [SRC: REPUTABLE]
*   **Don't Do This:** Avoid aggressive digital glitches.

```

---

## FILE: 01-Learning\Concepts\automation-vs-envelopes.md

```markdown
# Automation vs. Internal Envelopes

There are two ways to control volume in Gross Beat. Which one should you use?

## 🥊 The Matchup

### 1. The Internal Volume Grid (Orange)
*   **What is it?**: The 2-bar envelope inside the plugin.
*   **Resolution**: Audio-rate (Sample accurate).
*   **Sync**: Perfectly locked to the beat.
*   **Best For**:
    *   **Trance Gates**: 1/16th note chopping.
    *   **Sidechaining**: Precise ducking on the kick.
    *   **Transient Shaping**: Removing reverb tails.

### 2. The Mixer "Mix Level" Automation
*   **What is it?**: The FL Studio automation clip controlling the plugin's wet/dry knob.
*   **Resolution**: PPQ (Pulses Per Quarter note) - usually 96ppq. Slower than audio rate.
*   **Sync**: Dependent on PDC (Plugin Delay Compensation).
*   **Best For**:
    *   **Transitions**: Fading the effect in and out over 4-8 bars.
    *   **Parallel Processing**: Blending the "Tape Stop" with the dry signal for a spooky texture.
    *   **De-Clicking**: Smoothing the entry/exit of the effect.

## 🧠 The Hybrid Approach
Use BOTH.
*   Use the **Volume Grid** to create the *rhythm* (the "Chop-Chop-Chop").
*   Use the **Mix Automation** to bring that rhythm in over time (Fade In -> Chop -> Fade Out).

## ⚠️ Warning: The "Double Volume" Trap
If you draw a volume envelope that boosts volume, AND you have the Mix knob at 50%, you might get weird phase cancellation or volume spikes.
*   *Rule of Thumb*: Use the Volume Grid for **reduction** (gating/ducking), not boosting.

```

---

## FILE: 01-Learning\Concepts\buffer-architecture.md

```markdown
# Buffer Architecture: Understanding the 2-Bar Rolling Buffer

## Core Concept

Gross Beat operates on a **2-bar rolling audio buffer** that continuously records incoming audio and allows real-time manipulation of playback position and volume. This buffer is the foundation of all Gross Beat effects.

[SRC: IL-MAN]

---

## How the Buffer Works

### Continuous Recording
- **Size:** 2 bars of audio (configurable tempo-synced)
- **Behavior:** Constantly overwrites oldest audio with newest
- **Visual:** Represented as a grid showing buffer position over time

### Playback Position (Time Envelope)
The diagonal line across the grid represents **normal playback**:
- **Left to right:** Time progression through the buffer
- **Diagonal:** Normal speed (no time manipulation)
- **Horizontal:** Frozen/repeated section (stutter effect)
- **Upward slope:** Speed up (fast forward)
- **Downward slope:** Slow down (half-speed, tape-stop)

### Volume Envelope
Vertical manipulation of the grid creates **amplitude changes**:
- **Top:** Full volume
- **Bottom:** Silence
- **Patterns:** Rhythmic gating, sidechain-style ducking

---

## The Two Envelope Types

### Time Envelope (Horizontal/Time Slots)
Controls **when** audio plays from the buffer:

| Shape | Effect | Use Case |
|-------|--------|----------|
| Diagonal line | Normal playback | Pass-through |
| Horizontal line | Freeze/repeat | Stutter, glitch |
| Shallow upward | Slight speed up | Energy increase |
| Shallow downward | Slight slow down | Half-time feel |
| Steep downward | Dramatic slow down | Tape-stop effect |
| Step pattern | Rhythmic switching | Patterned effects |

### Volume Envelope (Vertical/Volume Slots)
Controls **how loud** audio plays:

| Shape | Effect | Use Case |
|-------|--------|----------|
| Full height | Normal volume | Pass-through |
| On/off blocks | Rhythmic gating | Trap-style patterns |
| Fade in/out | Attack/release shaping | Smooth transitions |
| Ramp patterns | Sidechain simulation | Ducking effects |
| Random drops | Glitch textures | Experimental |

---

## Slot System Overview

### 36 Time Slots + 36 Volume Slots
- Each slot contains one envelope pattern
- Switch between slots in real-time via MIDI
- Slots can be combined (Time + Volume simultaneously)

### Slot Categories
**Time Slots (1-36):**
- 1-12: Speed variations (half-time, double-time)
- 13-24: Stutter/Glitch patterns
- 25-36: Tape effects and transitions

**Volume Slots (1-36):**
- 1-12: Basic gates (4th, 8th, 16th notes)
- 13-24: Complex rhythmic patterns
- 25-36: Ducking and sidechain curves

---

## Visual Grid Interpretation

### The Grid Display
`\`\`
Buffer Position (Y-axis)
    ↑
    |  \  <- Playback moves diagonally (normal)
    |   \
    |    \
    |     \____  <- Horizontal = frozen/stutter
    |          \
    +------------→ Time (X-axis)
`\`\`

### Reading Envelopes
1. **Time envelope** shows buffer read position over playback time
2. **Volume envelope** shows amplitude over playback time
3. **Intersection** creates the final effect

---

## Buffer Memory & Latency

### Zero Latency Operation
- Effect applies in real-time to live audio
- No pre-buffering required for basic effects
- MIDI triggering adds minimal latency (< 5ms)

### Memory Considerations
- 2 bars = approximately 3-6 seconds at typical tempos
- Higher sample rates = more memory usage
- Mono/stereo supported (stereo uses 2x buffer)

---

## Common Buffer Misconceptions

### "I can reverse audio with Gross Beat"
**Incorrect.** Gross Beat doesn't reverse audio - it manipulates playback position and speed from the buffer. True reverse requires time-reversing the audio file.

### "The buffer remembers everything"
**Partially correct.** Only the most recent 2 bars are retained. Older audio is continuously overwritten.

### "I need to render before hearing effects"
**Incorrect.** Gross Beat processes in real-time. However, committing to audio is recommended for CPU-intensive sessions.

---

## Practical Buffer Tips

### For Clean Half-Time
1. Start playback at exact bar boundary
2. Use slot with gentle downward slope
3. Enable Attack/Release smoothing to avoid clicks
4. Set Mix to 100% for full effect

### For Rhythmic Gating
1. Use Volume slot with stepped pattern
2. Sync to project tempo
3. Adjust envelope smoothing for click prevention
4. Blend with dry signal using Mix control

### For Tape-Stop Effects
1. Steep downward slope in Time envelope
2. May add slight volume fade in Volume envelope
3. Trigger at transition points via MIDI
4. Combine with reverb tail for smooth landing

---

## Buffer Position (Pos) Control

The **Pos** knob adjusts where in the buffer playback begins:
- **0%:** Start of buffer (2 bars ago)
- **50%:** Middle of buffer (1 bar ago)
- **100%:** End of buffer (current position)

**Use case:** Delay-style effects by playing slightly behind the beat.

---

## Technical Specifications

| Spec | Value |
|------|-------|
| Buffer Duration | 2 bars (tempo-synced) |
| Sample Rate Support | Up to 192 kHz |
| Bit Depth | 32-bit float internal |
| MIDI Note Range | C1 to B3 (36 slots) |
| Latency | < 5ms (MIDI triggered) |
| CPU Usage | Low to Moderate |

---

## Summary

The 2-bar rolling buffer is Gross Beat's core engine. Understanding that:
- **Time envelope** = Which part of buffer plays when
- **Volume envelope** = How loud it plays
- **Slots** = Preset patterns you can switch between
- **Pos** = Where in the buffer you start reading

Master these concepts and you can create everything from subtle half-time grooves to extreme glitch textures.

```

---

## FILE: 01-Learning\Concepts\gross-beat-vs-others.md

```markdown
# Gross Beat vs. The World

When should you use Gross Beat, and when should you use something else?

## 🥊 Gross Beat vs. Slicex

| Feature | Gross Beat | Slicex |
| :--- | :--- | :--- |
| **Engine** | Buffer Effect (Real-time) | Sampler (Triggered) |
| **Workflow** | Preset Patterns on a Grid | Individual Slices on Keys |
| **Best For** | Glitching an *entire* mix or bus. Instant Half-Speed. | Rearranging drum breaks. Finger drumming. |
| **Pros** | Non-destructive. Works on live input. | Total control over each slice's ADSR and pitch. |
| **Cons** | Limited to 2 bars history. Harder to fine-tune individual hits. | Requires MIDI programming. Destructive (requires loaded sample). |

## 🥊 Gross Beat vs. NewTime

| Feature | Gross Beat | NewTime |
| :--- | :--- | :--- |
| **Engine** | Real-time Effect | Offline Editor (Elastic Audio) |
| **Workflow** | Automation & Envelopes | Drag & Drop Markers |
| **Best For** | Creative effects, Glitches, Scratches. | Fixing timing errors (Quantizing). Warping vocals to fit tempo. |
| **Pros** | Performance-oriented. dynamic. | Artifact-free time stretching (advanced algorithms). |
| **Cons** | "Dumb" slicing (doesn't know where transients are). | Static (edits are permanent until changed). Not an effect. |

## 🥊 Gross Beat vs. Fruity Delay 3

| Feature | Gross Beat | Fruity Delay 3 |
| :--- | :--- | :--- |
| **Engine** | Buffer Modulation | Feedback Echo |
| **Best For** | Complex, specific rhythm patterns (Reverse, Stutter). | Dub echoes, standard 1/4 note repeats. |
| **Note** | You can use Gross Beat to *build* a delay (by repeating beat 1 on beat 2, 3, 4), but Fruity Delay is easier for standard echoes. |

## 🏆 The Verdict

*   **Use Gross Beat for**: "Vibe" changes (Half-speed), creative glitches, scratches, and rhythmic gating.
*   **Use Slicex for**: Chopping breaks and making new drum kits.
*   **Use NewTime for**: Correcting a sloppy performance.

```

---

## FILE: 01-Learning\Concepts\midi-triggering-performance.md

```markdown
# MIDI Triggering and Real-Time Performance

## The Power of MIDI Control

Gross Beat's 36 Time slots and 36 Volume slots can be triggered in real-time via MIDI, transforming the plugin from a static effect into a **live performance instrument**. This is essential for creating dynamic, evolving arrangements.

[SRC: IL-MAN]

---

## MIDI Mapping Overview

### Note Range
`\`\`
MIDI Note Range for Gross Beat:

OCTAVE 1 (C1 - B1): Time Slots 1-12
OCTAVE 2 (C2 - B2): Time Slots 13-24
OCTAVE 3 (C3 - B3): Time Slots 25-36

OCTAVE 4 (C4 - B4): Volume Slots 1-12
OCTAVE 5 (C5 - B5): Volume Slots 13-24
OCTAVE 6 (C6 - B6): Volume Slots 25-36
`\`\`

### Quick Reference Table

| Octave | Note Range | Controls | Slot Range |
|--------|------------|----------|------------|
| C1-B1 | White + Black keys | Time Slots | 1-12 |
| C2-B2 | White + Black keys | Time Slots | 13-24 |
| C3-B3 | White + Black keys | Time Slots | 25-36 |
| C4-B4 | White + Black keys | Volume Slots | 1-12 |
| C5-B5 | White + Black keys | Volume Slots | 13-24 |
| C6-B6 | White + Black keys | Volume Slots | 25-36 |

---

## Setting Up MIDI Triggering

### Step 1: Enable MIDI Input
1. Load Gross Beat on an insert channel
2. Right-click the Gross Beat title bar
3. Select "Receive notes from"
4. Choose your MIDI controller or channel

### Step 2: Configure Input Channel
- **Option A:** Use a separate MIDI channel routed to Gross Beat
- **Option B:** Use the same channel's note data (melody triggers effects)
- **Option C:** Use a controller's drum pads for triggering

### Step 3: Slot Selection Strategy
Organize your slots logically:
`\`\`
Time Slots 1-6:    Speed effects (half-time, normal, double)
Time Slots 7-18:   Stutter patterns (various rhythms)
Time Slots 19-30:  Tape effects and transitions
Time Slots 31-36: Special/utility slots

Volume Slots 1-6:  Basic gates (4th, 8th, 16th, triplet)
Volume Slots 7-18: Complex patterns (dotted, mixed)
Volume Slots 19-30: Sidechain curves
Volume Slots 31-36: Utility (full, fade, etc.)
`\`\`

---

## Performance Techniques

### 1. Live Stutter Performance
**Setup:**
- Load drum loop on channel
- Add Gross Beat with stutter slots (7-12)
- Route MIDI controller pads to trigger slots

**Performance:**
`\`\`
Bar 1: Play normally
Bar 2: Tap pad 7 (1/4 stutter) on beats 3-4
Bar 3: Tap pad 9 (1/16 stutter) on beat 2
Bar 4: Tap pad 8 (1/8 stutter) for fill
`\`\`

**Pro tip:** Practice the timing - hitting exactly on the beat creates tight effects, off-beat creates syncopation.

### 2. Tape-Stop Transitions
**Setup:**
- Create tape-stop slot (steep downward slope)
- Map to convenient key/pad (e.g., C3)

**Performance:**
`\`\`
[Playing normally]
Bar 8, Beat 3: Trigger tape-stop slot
[Effect: gradual slow down]
Bar 8, Beat 4: Trigger normal slot or mute
[Transition complete]
`\`\`

### 3. Half-Time Switching
**Setup:**
- Slot 1: Normal (diagonal)
- Slot 2: Half-time (gentle slope)
- Map C1 = Normal, C#1 = Half-time

**Performance:**
`\`\`
Intro:  Trigger C1 (normal) - 4 bars
Verse:  Trigger C#1 (half-time) - 8 bars
Chorus: Trigger C1 (normal) - 4 bars
Break:  Trigger C#1 (half-time) - 2 bars
`\`\`

### 4. Combined Time + Volume Performance
**Setup:**
- Time slots on Octaves 1-3
- Volume slots on Octaves 4-6
- Use both hands or split keyboard

**Performance:**
`\`\`
Left hand (Time):   Switch between normal/half-time/stutter
Right hand (Volume): Add gates, ducking, rhythmic patterns
`\`\`

**Effect:** Complete rhythmic and temporal control in real-time

---

## Programming MIDI Patterns

### In the Piano Roll
1. Create a new MIDI clip
2. Set it to output to Gross Beat's channel
3. Draw notes corresponding to desired slots
4. Quantize to ensure tight timing

### Example MIDI Pattern: Trap Build-Up
`\`\`
MIDI Notes in Piano Roll:

Bar 1: C1 (normal) - held for full bar
Bar 2: C1 (normal) - held for full bar
Bar 3: 
  - Beat 1: C1 (normal)
  - Beat 2: C#1 (half-time)
  - Beat 3: D1 (1/8 stutter)
  - Beat 4: D#1 (1/16 stutter)
Bar 4:
  - Beat 1: E1 (tape-stop)
  - Beat 2-4: [silence/drop]
`\`\`

### Automation vs. MIDI Notes
| Method | Best For | Pros | Cons |
|--------|----------|------|------|
| **MIDI Notes** | Rhythmic patterns, performance | Easy to edit, visual in piano roll | Requires dedicated channel |
| **Automation** | Gradual changes, fixed arrangements | Smooth curves, precise timing | Less immediate, harder to edit |
| **Hybrid** | Complex productions | Best of both | More setup time |

---

## Advanced MIDI Techniques

### Velocity Sensitivity
Gross Beat responds to note velocity:
- **High velocity (100-127):** Full effect (Mix = 100%)
- **Medium velocity (64-99):** Blend (Mix = 50-75%)
- **Low velocity (1-63):** Subtle effect (Mix = 25-50%)

**Application:**
`\`\`
Verse:  Medium velocity for subtle half-time
Chorus: High velocity for full stutter effects
Bridge: Low velocity for texture only
`\`\`

### Note Length = Duration
Hold notes longer for sustained effects:
- **Short notes (1/16):** Quick stutter triggers
- **Medium notes (1/4):** Pattern duration
- **Long notes (1 bar+):** Sustained time effects

### Layering Slots
Trigger multiple slots simultaneously:
- Time slot C1 + Volume slot C4 = Half-time with gating
- Time slot D1 + Volume slot D4 = Stutter with ducking

### Using Black Keys
Don't forget the sharps/flats:
`\`\`
C1  = Slot 1    C#1 = Slot 2
D1  = Slot 3    D#1 = Slot 4
E1  = Slot 5    F1  = Slot 6
F#1 = Slot 7    G1  = Slot 8
G#1 = Slot 9    A1  = Slot 10
A#1 = Slot 11   B1  = Slot 12
`\`\`

---

## Common MIDI Performance Mistakes

### 1. Timing Drift
**Problem:** Notes not quantized, effects sound sloppy
**Solution:** Quantize to 1/16 or 1/32, use grid snap

### 2. Over-Triggering
**Problem:** Too many slot changes create chaos
**Solution:** Leave space between triggers, let effects breathe

### 3. Wrong Octave
**Problem:** Notes in wrong octave don't trigger anything
**Solution:** Check keyboard range, use note labels

### 4. Forgetting Release
**Problem:** Effect continues indefinitely
**Solution:** Program "normal" slot triggers to reset, or automate Mix to 0%

### 5. MIDI Channel Conflict
**Problem:** Notes intended for instrument trigger Gross Beat instead
**Solution:** Use separate MIDI channels, filter with MIDI Out

---

## Integration with FL Studio Features

### Using MIDI Out
Route MIDI from one channel to control Gross Beat on another:
1. Add MIDI Out to source channel
2. Set output channel to Gross Beat's channel
3. Play notes on source, hear effects on Gross Beat channel

### With Layer Channels
Layer multiple Gross Beat instances:
1. Create Layer channel
2. Add multiple channels with Gross Beat
3. Each with different slot configurations
4. Trigger from single MIDI input

### Patcher Integration
Build complex Gross Beat setups:
1. Load Patcher
2. Add multiple Gross Beat modules
3. Route MIDI to specific modules
4. Create parallel processing chains

### Gross Beat + Gross Beat
Stack two instances:
- **Instance 1:** Time manipulation (half-time)
- **Instance 2:** Volume gating (16th notes)
- **Result:** Complex rhythmic half-time effect

---

## Performance Workflow Tips

### Preparation Checklist
Before performing/recording:
- [ ] All slots programmed and labeled
- [ ] MIDI routing confirmed
- [ ] Controller mapped and tested
- [ ] Backup "normal" slot ready (C1)
- [ ] Mix levels balanced

### Recording MIDI Performance
1. Arm Gross Beat channel for recording
2. Enable "Note" recording (not just automation)
3. Perform slot switching
4. Edit in piano roll after recording

### Live Performance Considerations
- **Latency:** Test system latency, compensate if needed
- **CPU:** Freeze tracks to ensure stable performance
- **Backup:** Have audio stems ready in case of issues
- **Simplicity:** Use fewer slots live than in studio

---

## Summary

MIDI triggering transforms Gross Beat from a studio tool into a **performance instrument**:
- **36 Time slots** = Real-time speed/stutter control
- **36 Volume slots** = Real-time gating/ducking
- **MIDI notes** = Instant, musical triggering
- **Velocity/Length** = Dynamic expression

Master MIDI triggering and you'll unlock Gross Beat's full potential for live production and performance.

```

---

## FILE: 01-Learning\Concepts\pitch-vs-time-relationship.md

```markdown
# Pitch vs. Time: The Gross Beat Duality

Gross Beat manipulates audio by moving a playback head across a recorded buffer. This creates a direct physical relationship between the **Slope of the Line** and the **Pitch/Speed** of the audio.

## 📈 The Slope Constant

The "Safety Line" has a slope of 1 (a 45-degree angle in a square grid).
*   **Angle = Safety Line**: 100% Speed, Original Pitch.
*   **Angle < Safety Line (Flatter)**: Higher Pitch, Faster Speed.
*   **Angle > Safety Line (Steeper)**: Lower Pitch, Slower Speed.
*   **Horizontal Line**: 0% Speed, Infinite Pitch Drop (Silence/Freeze).
*   **Negative Slope (Upward)**: Reverse Playback.

## 🎹 The Musical Octave Math

If you want precise musical intervals, the math is consistent:
*   **Half Speed (0.5x)** = -1 Octave (12 semitones down).
*   **Double Speed (2x)** = +1 Octave (12 semitones up).
*   **Reverse 1x** = Original pitch, just backwards.

## ⏳ The Buffer Trade-off

Because Gross Beat is real-time, it cannot see the future.
*   **Time Shifting**: You can only shift audio into the **past**.
*   **Real-time use**: If you want to "rush" a note (play it early), you must first delay the entire track by a fixed amount (e.g., 1 beat) so that you have "future" audio already sitting in the buffer.

## 🎚️ Volume as a Modifier
While Time handles the "Where" and "How fast", Volume handles the "When".
In many Jazzy/R&B contexts, the Time envelope creates the "vibe" (warble/pitch drift) while the Volume envelope creates the "pocket" (the groove).

```

---

## FILE: 01-Learning\Concepts\time-envelope-mechanics.md

```markdown
# Time Envelope Mechanics: The Diagonal Line Philosophy

## The Fundamental Principle

In Gross Beat's visual interface, **a diagonal line represents normal, unaffected playback**. Any deviation from this diagonal creates time-based effects.

[SRC: IL-MAN]

---

## Reading the Diagonal

### What the Diagonal Means
`\`\`
Time (Playback) →
    0%    25%    50%    75%    100%
    |      |      |      |      |
100%-----       /|      |      |
    |        /   |      |      |
 50%|-----/      |      |      |
    |  /          |      |      |
  0%/_____________|______|______|
    0%           50%          100%
         Buffer Position
`\`\`

**Diagonal line (45°):** Buffer position matches playback time = Normal speed

### Why This Matters
- **Horizontal lines:** Same buffer position plays repeatedly = Stutter/Repeat
- **Upward slopes:** Buffer advances faster than playback = Speed up
- **Downward slopes:** Buffer advances slower than playback = Slow down
- **Vertical drops:** Instant jump = Glitch/stutter

---

## Time Envelope Shapes

### 1. Normal Playback (The Baseline)
`\`\`
    /  <- Pure diagonal
   /
  /
 /
`\`\`
- **Effect:** No time manipulation
- **Use:** Dry signal reference, bypass slot
- **Slot reference:** Usually Slot 1 (default)

### 2. Half-Speed (The Hip-Hop Signature)
`\`\`
    /
   /  <- Gentler slope
  /    (about 22.5°)
 /
`\`\`
- **Effect:** Audio plays at 50% speed
- **Pitch:** Drops one octave
- **Character:** Deep, heavy, spacious
- **Use case:** The classic hip-hop "half-time" effect
- **Best for:** Melodic loops, drum breaks, 808s (with caution)

### 3. Double-Time/Speed Up
`\`\`
    /   <- Steeper than 45°
   /
  /  (about 67.5°)
 /
`\`\`
- **Effect:** Audio plays at 200% speed
- **Pitch:** Rises one octave
- **Character:** Tight, energetic, chipmunk
- **Use case:** Build-ups, energy increases

### 4. Freeze/Stutter (Horizontal)
`\`\`
____  <- Horizontal = freeze
    \
     \
      \____  <- Another freeze
          \
`\`\`
- **Effect:** Repeats same buffer section
- **Duration:** Depends on horizontal line length
- **Use case:** Classic stutter edits, trap style
- **Variation:** Multiple freezes create rhythmic patterns

### 5. Tape-Stop (Steep Downward)
`\`\`
    \
     \  <- Steep downward
      \
       \
        \___  <- Gradual slow to stop
`\`\`
- **Effect:** Gradual deceleration to complete stop
- **Character:** Classic turntable wind-down
- **Use case:** Transitions, endings, dramatic moments

### 6. Reverse Simulation (Jagged Pattern)
`\`\`
    /\
   /  \
  /    \  <- Not true reverse, but glitchy
 /      \
`\`\`
- **Effect:** Rapid position jumping creates pseudo-reverse
- **Note:** Not true audio reversal
- **Use case:** Glitch textures, experimental

---

## Envelope Drawing Techniques

### Drawing Modes
1. **Line Tool:** Draw straight lines between points
2. **Freehand:** Draw custom curves
3. **Step Tool:** Create quantized steps
4. **Sine/Preset:** Apply mathematical curves

### Snap Options
- **Grid snap:** Quantize to beat divisions
- **Freehand:** Continuous curves
- **Hybrid:** Mix of quantized and smooth

### Smoothing
The **Attack/Release** controls apply to envelope transitions:
- **Low values:** Sharp, clicky transitions
- **High values:** Smooth, blurred transitions
- **Recommendation:** 10-30ms for hip-hop to prevent clicks while maintaining punch

---

## Hip-Hop Specific Patterns

### The Perfect Half-Time
`\`\`
Buffer Position
    |\      
    |  \    <- Gentle, consistent slope
    |    \  
    |      \
    |        \
    +----------→ Time
`\`\`
**Settings:**
- Slope: Approximately 50% (half-speed)
- Smoothing: 15-20ms Attack, 20-30ms Release
- Mix: 100% for full effect

### Trap Stutter Pattern
`\`\`
    |  __  __  __
    | /  \/  \/  \
    |/    \/  \/  
    +----------------→
    1   &   2   &   3
`\`\`
**Settings:**
- Horizontal sections: 1/16th note duration
- Transition: Vertical drops (use smoothing!)
- Mix: Blend to taste (50-80%)

### Tape-Stop Transition
`\`\`
    |\
    | \
    |  \
    |   \_______
    |           \
    +------------→
    1    2    3   4
`\`\`
**Settings:**
- Start: Normal speed (diagonal)
- Bar 3-4: Gradual steepening of slope
- Final: Horizontal (complete stop)
- Trigger: MIDI note at bar 3

---

## Common Time Envelope Mistakes

### Too Steep = Unusable
**Problem:** Extreme slopes create garbled audio
**Solution:** Keep slopes gradual (30-60° maximum for musical results)

### No Smoothing = Clicks
**Problem:** Sharp transitions create digital clicks
**Solution:** Always use 10-50ms Attack/Release smoothing

### Mismatched Tempo = Chaos
**Problem:** Envelope not aligned to project tempo
**Solution:** Enable grid snap, sync to beat divisions

### Ignoring Buffer Wrap
**Problem:** Envelope extends beyond buffer boundaries
**Solution:** Watch for red warning indicators, adjust Pos control

---

## Time + Volume Combination

### Creating Complete Effects
Time and Volume envelopes work together:

**Example - Rhythmic Half-Time:**
`\`\`
TIME:    |\
         |  \    (half-speed slope)
         |    \

VOLUME:  |____      ____
         |    |____|    |   (16th note gates)
`\`\`

**Result:** Half-speed audio with rhythmic gating

---

## Advanced Techniques

### Pos (Position) Offset
Shift the entire envelope up/down:
- **Positive:** Play earlier buffer content (delayed effect)
- **Negative:** Play later buffer content (anticipation effect)

### Envelope Morphing
Automate between slots for evolving effects:
1. Set up multiple time patterns
2. Automate slot switching
3. Creates dynamic, changing textures

### Split Effects
Use Time on some frequencies, Volume on others:
- Requires parallel processing setup
- Advanced routing in FL Studio mixer

---

## Quick Reference: Slope to Speed

| Slope Angle | Speed Ratio | Pitch Change | Best For |
|-------------|-------------|--------------|----------|
| 0° (flat) | 0% (frozen) | N/A | Stutter |
| 22.5° | 50% | -12 semitones | Half-time |
| 45° | 100% | 0 | Normal |
| 67.5° | 200% | +12 semitones | Double-time |
| 90° | ∞ (instant) | N/A | Glitch |

---

## Summary

**Remember:** The diagonal is your friend. Any deviation from diagonal = effect. The steeper the deviation, the more extreme the effect. Always use smoothing to prevent clicks, and align to tempo for musical results.

```

---

## FILE: 01-Learning\Concepts\visualizing-the-buffer.md

```markdown
# Visualizing the Buffer: How to Read the Matrix

Gross Beat's interface is a graph of Time vs. Time. It can be brain-melting. Here is how to read it.

## 🟢 The Heads

1.  **The White Line (Playback Head)**:
    *   This moves from Left to Right.
    *   It represents the **Host Time** (Where you are in the bar).
    *   It loops every bar (4 beats).

2.  **The Green "Ghost" Head**:
    *   This moves vertically along the White Line.
    *   It represents **Audio Read Position** (What you are actually hearing).
    *   **On the Line**: You are hearing the present.
    *   **Below the Line**: You are hearing the past.

## 🌊 The Visual Waveform

Gross Beat displays a scrolling background waveform.
*   **Horizontal Flow**: The background scrolls left.
*   **The Concept**: Imagine the audio is a literal tape moving under the playhead.
    *   If your envelope line is **Horizontal**, you are staying on the same spot of the tape as it moves -> **Pause/Freeze**.
    *   If your envelope line is **Diagonal Down** (Steeper than safety), you are moving backwards relative to the tape -> **Slow Down**.

## 🔴 The Red Zone (The Danger Zone)
*   **Above the Safety Line**:
    *   This area represents the **Future**.
    *   If your Green Head goes here, you hear silence (or the live input passed through instantly, essentially "clipping" to the present).
    *   *Visual Cue*: The line usually turns flat or behaves erratically if you force it here.

## 🧠 Mental Model: "The Time Map"
*   **X-Axis**: "When will this effect happen?" (e.g., "On Beat 3").
*   **Y-Axis**: "What audio should I play?" (e.g., "The snare from Beat 2").
*   *Example*: To repeat a snare:
    *   Go to X = Beat 3.
    *   Draw a line at Y = Beat 2.
    *   Result: At Beat 3, play the audio from Beat 2.

```

---

## FILE: 01-Learning\Concepts\volume-envelope-gating.md

```markdown
# Volume Envelope: Rhythmic Gating and Amplitude Shaping

## The Volume Envelope Concept

While Time envelopes manipulate **when** audio plays from the buffer, Volume envelopes control **how loud** the audio is at any given moment. This creates rhythmic gating, sidechain-style ducking, and dynamic amplitude effects.

[SRC: IL-MAN]

---

## Volume Envelope Display

### Visual Layout
`\`\`
Volume (0-100%)
    ↑
100%|‾‾‾‾‾‾‾‾‾‾‾   Full volume
    |           |
 50%|           |   Half volume
    |     ______|
  0%|____|          Silence
    +----------------→ Time
`\`\`

**Reading the envelope:**
- **Top (100%):** Full volume, no change
- **Bottom (0%):** Complete silence
- **Middle (50%):** Half volume, -6dB

---

## Basic Volume Patterns

### 1. Pass-Through (Full Volume)
`\`\`
    |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
    |                  |
    |                  |
    +------------------→
`\`\`
- **Effect:** No volume change
- **Use:** Default state, dry reference

### 2. 4/4 Gate (Quarter Notes)
`\`\`
    |‾‾‾|   |‾‾‾|   |‾‾‾|
    |   |___|   |___|   |
    |                  |
    +------------------→
    1   2   3   4
`\`\`
- **Pattern:** Plays on beat, silent off-beat
- **Use:** Classic four-on-the-floor gate
- **Timing:** Each block = 1/4 note

### 3. 8th Note Gate
`\`\`
    |‾‾|_|‾‾|_|‾‾|_|‾‾|_
    |  | |  | |  | |  |
    +------------------→
    1 & 2 & 3 & 4 &
`\`\`
- **Pattern:** Twice as fast as quarter notes
- **Use:** Syncopated rhythms, trap-style
- **Feel:** Bouncy, energetic

### 4. 16th Note Gate (Trap Classic)
`\`\`
    |‾|_|‾|_|‾|_|‾|_|‾|_|‾|_|‾|_|‾|_
    | | | | | | | | | | | | | | | |
    +--------------------------------→
    1 e & a 2 e & a 3 e & a 4 e & a
`\`\`
- **Pattern:** Fast, staccato rhythm
- **Use:** Trap hi-hat style gating
- **Character:** Tight, modern, rhythmic

### 5. Sidechain Ducking Curve
`\`\`
    |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    |      /‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    |_____/                           
    +--------------------------------→
    1               2               3
`\`\`
- **Pattern:** Volume dips then recovers
- **Curve:** Exponential/logarithmic recovery
- **Use:** Simulates sidechain compression
- **Classic:** 4/4 ducking on every beat

---

## Advanced Volume Patterns

### Triplet Gates
`\`\`
    |‾‾|__|‾‾|__|‾‾|__|‾‾|__
    |  |  |  |  |  |  |  |
    +------------------------→
    1 ta da 2 ta da 3 ta da
`\`\`
- **Pattern:** Groups of three
- **Use:** Swing feel, jazz, triplet-based genres
- **Character:** Rolling, flowing rhythm

### Dotted Rhythms
`\`\`
    |‾‾‾‾‾|_|‾‾‾‾‾|_|‾‾‾‾‾|_
    |     | |     | |     |
    +------------------------→
    1   .   &   .   2   .   &
`\`\`
- **Pattern:** Long-short combination
- **Use:** Funk, disco, energetic grooves
- **Feel:** Bouncy, danceable

### Stutter Burst
`\`\`
    |‾‾|‾|‾|________|‾‾|‾|‾|____
    |  | | |        |  | | |
    +----------------------------→
`\`\`
- **Pattern:** Rapid-fire gates then rest
- **Use:** Build-ups, transitions, fills
- **Effect:** Glitchy, energetic bursts

### Crescendo Gate
`\`\`
    |    /‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    |   /                       
    |__/________________________
    +----------------------------→
`\`\`
- **Pattern:** Gradually opens from silence
- **Use:** Intros, build-ups, reveals
- **Character:** Dramatic unveiling

---

## Hip-Hop and Trap Specific Patterns

### The "Travis Scott" Gate
`\`\`
    |‾‾|_|‾‾|_|‾‾|________|‾‾|_
    |  | |  | |  |        |  |
    +----------------------------→
    Kick  Snare Kick     Rest
`\`\`
- **Pattern:** Follows kick-snare pattern
- **Use:** Half-time trap beats
- **Feel:** Bouncy, spacious, modern

### 808 Ducking
`\`\`
    |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    |\      /\      /\      /
    | \____/  \____/  \____/
    +----------------------------→
    1       2       3       4
`\`\`
- **Pattern:** Dips on beat, recovers off-beat
- **Use:** Makes space for 808/kick
- **Simulates:** Sidechain without compression

### Rhythmic Chop
`\`\`
    |‾||‾||‾||________||‾||‾||
    | || || ||        || || ||
    +----------------------------→
`\`\`
- **Pattern:** Very short gates (1/32 notes)
- **Use:** Vocal chops, melodic stutters
- **Character:** Rapid-fire rhythmic effect

---

## Combining Time and Volume

### Creating Complex Effects

**Example 1: Half-Time with Sidechain**
`\`\`
TIME:    |\
         |  \      (half-speed)
         |    \

VOLUME:  |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
         |\      /\      /\      /
         | \____/  \____/  \____/
`\`\`
**Result:** Slow, heavy groove with rhythmic ducking

**Example 2: Stutter with Fade**
`\`\`
TIME:    |  __  __  __  __  
         | /  \/  \/  \/  \

VOLUME:  |/\  /\  /\  /\
         |  \/  \/  \/  \
`\`\`
**Result:** Stutters that fade in and out

**Example 3: Tape-Stop with Duck**
`\`\`
TIME:    |\
         | \
          \ \
           \ \___

VOLUME:  |‾‾‾‾‾‾\________
         |       \
`\`\`
**Result:** Slow down with volume fade for smooth landing

---

## Attack and Release for Volume

### Attack Time (How fast volume reaches target)
- **0-10ms:** Sharp, immediate gates
- **10-30ms:** Natural, punchy gates (recommended)
- **30-100ms:** Soft, gradual gates

### Release Time (How fast volume returns)
- **0-10ms:** Snappy, tight feel
- **10-50ms:** Natural decay
- **50-200ms:** Slow, swelling feel

### Recommended Settings by Genre

| Genre | Attack | Release | Character |
|-------|--------|---------|-----------|
| Trap | 5-15ms | 20-40ms | Tight, punchy |
| Hip-Hop | 10-20ms | 30-60ms | Smooth, flowing |
| EDM | 0-5ms | 10-20ms | Sharp, aggressive |
| Ambient | 50-100ms | 100-200ms | Soft, gradual |

---

## Volume Envelope Mistakes to Avoid

### 1. Clicking Transitions
**Problem:** Sharp volume changes create clicks
**Solution:** Always use Attack/Release smoothing (minimum 5ms)

### 2. Over-Gating
**Problem:** Too much silence kills the groove
**Solution:** Leave some signal (never gate to true 0% for long periods)

### 3. Tempo Mismatch
**Problem:** Gate timing doesn't match beat
**Solution:** Enable snap to grid, quantize to beat divisions

### 4. Ignoring Phase
**Problem:** Gating can create phase issues in stereo
**Solution:** Use stereo link mode, check correlation meter

### 5. Low-End Smear
**Problem:** Gating 808s/bass creates transient damage
**Solution:** See "Low-End Smear Warnings" in dedicated workflow

---

## Creative Volume Applications

### Vocals
- **Stutter edit:** 16th note gates on phrases
- **Chopped flow:** Patterned gates following lyrics
- **Sidechain substitute:** Duck around kicks

### Drums
- **Hi-hat spice:** Add gates to programmed hats
- **Snare emphasis:** Gate to highlight backbeat
- **Ghost notes:** Subtle volume variation

### Melodic Elements
- **Rhythmic chords:** Gate pads for movement
- **Arpeggio effect:** Sequential gating
- **Build-ups:** Gradual opening of gates

### Effects
- **Reverb tail control:** Gate sends for space
- **Delay cleanup:** Gate echoes for clarity
- **Texture creation:** Random/irregular gates

---

## MIDI Triggering Volume Slots

### Real-Time Performance
- **C1-C#1:** Volume slots 1-2 (basic gates)
- **D1-D#1:** Volume slots 3-4 (complex patterns)
- **Trigger on beat:** Precise rhythmic control
- **Trigger off-beat:** Syncopated effects

### Automation Tips
1. Draw MIDI notes in piano roll
2. Align to grid for tight sync
3. Use different velocities for dynamics
4. Combine with Time slot switching

---

## Summary

Volume envelopes turn Gross Beat into a **rhythmic gate generator**. Remember:
- **Top = loud, bottom = silent**
- **Square waves = gates, curves = fades**
- **Always use smoothing to prevent clicks**
- **Sync to tempo for musical results**
- **Combine with Time envelopes for complete effects**

The Volume envelope is often underrated but incredibly powerful for adding rhythm and movement to static sounds.

```

---

## FILE: 01-Learning\Quick-Reference\buffer-mechanics-explained.md

```markdown
# Understanding Buffer Mechanics in Gross Beat

## 🔄 The 2-Bar Rolling Buffer

Gross Beat is not a synthesizer; it is a **buffer effect**. Think of it as a tape recorder with a 2-bar loop tape that is constantly recording and erasing itself.

### Key Concepts

1.  **"Rolling" Recording**:
    *   Gross Beat is *always* recording the input audio.
    *   It only keeps the last **2 Bars** of audio in memory.
    *   Old audio falls off the "end" of the buffer and is lost forever.

2.  **The "Safety Line" (Diagonal)**:
    *   In the Time Grid, the diagonal line running from top-left to bottom-right represents **Real Time**.
    *   If your envelope line is ON the safety line, you hear the audio exactly as it comes in (Bypass).
    *   If your envelope is BELOW the safety line, you are playing back audio from the **past** (Buffer).
    *   You CANNOT draw above the safety line because that would require playing audio from the **future** (which hasn't been recorded yet).

### Practical Implications

*   **Latency**: Gross Beat introduces latency equal to the buffer size if you are monitoring through it live, though it reports this to the host for compensation during playback.
*   **The "Empty Buffer" Issue**: When you first start playback in your song, the buffer is empty.
    *   *Symptom*: Silence or glitches at the very start of a track.
    *   *Fix*: FL Studio usually pre-fills this, but be aware if you trigger a "2-bar ago" echo on the very first beat of the song, there is no audio there to echo.

### Visualizing the Speed

The angle of your line in the Time Grid determines playback speed:
*   **Diagonal (Top-Left to Bottom-Right)**: 1x Speed (Normal).
*   **Flat (Horizontal)**: 0x Speed (Pause / Freeze).
*   **Steep Downward Slope**: < 1x Speed (Slow Down).
    *   *Half-Speed*: A slope that is twice as steep as the safety line.
*   **Upward Slope**: Reverse Playback.

---
*Based on the 2-Bar Rolling Buffer architecture.*

```

---

## FILE: 01-Learning\Quick-Reference\midi-note-reference.md

```markdown
# Gross Beat MIDI Note Reference

## Complete MIDI Mapping

### Time Slots (C1 - B3)

| Note | Slot | Common Use | Category |
|------|------|------------|----------|
| **C1** | 1 | Normal/Pass-through | Speed |
| **C#1** | 2 | Half-Time | Speed |
| **D1** | 3 | Double-Time | Speed |
| **D#1** | 4 | Triplets | Speed |
| **E1** | 5 | Variable Speed 1 | Speed |
| **F1** | 6 | Variable Speed 2 | Speed |
| **F#1** | 7 | 1/4 Stutter | Stutter |
| **G1** | 8 | 1/8 Stutter | Stutter |
| **G#1** | 9 | 1/16 Stutter | Stutter |
| **A1** | 10 | 1/32 Stutter | Stutter |
| **A#1** | 11 | Triplet Stutter | Stutter |
| **B1** | 12 | Dotted Stutter | Stutter |
| **C2** | 13 | Random Glitch | Glitch |
| **C#2** | 14 | Reverse Sim | Glitch |
| **D2** | 15 | Chop Pattern 1 | Glitch |
| **D#2** | 16 | Chop Pattern 2 | Glitch |
| **E2** | 17 | Chop Pattern 3 | Glitch |
| **F2** | 18 | Stutter Burst | Glitch |
| **F#2** | 19 | Tape-Stop | Tape |
| **G2** | 20 | Slow-Start | Tape |
| **G#2** | 21 | Spinback | Tape |
| **A2** | 22 | Scratch Forward | Tape |
| **A#2** | 23 | Scratch Back | Tape |
| **B2** | 24 | Turntable Stop | Tape |
| **C3** | 25 | Pitch Drop 1 | Special |
| **C#3** | 26 | Pitch Drop 2 | Special |
| **D3** | 27 | Pitch Rise 1 | Special |
| **D#3** | 28 | Pitch Rise 2 | Special |
| **E3** | 29 | Wobble Effect | Special |
| **F3** | 30 | Vibrato Pattern | Special |
| **F#3** | 31 | Empty/Init | Utility |
| **G3** | 32 | Utility 1 | Utility |
| **G#3** | 33 | Utility 2 | Utility |
| **A3** | 34 | Utility 3 | Utility |
| **A#3** | 35 | Utility 4 | Utility |
| **B3** | 36 | Utility 5 | Utility |

### Volume Slots (C4 - B6)

| Note | Slot | Pattern Type | Use Case |
|------|------|--------------|----------|
| **C4** | 1 | Full Volume | Bypass/Normal |
| **C#4** | 2 | 1/4 Gate | Four-on-floor |
| **D4** | 3 | 1/8 Gate | Bouncy rhythm |
| **D#4** | 4 | 1/16 Gate | Trap style |
| **E4** | 5 | 1/32 Gate | Ultra-tight |
| **F4** | 6 | Triplet Gate | Swing feel |
| **F#4** | 7 | Dotted 1/8 | Funk rhythm |
| **G4** | 8 | Dotted 1/4 | Disco feel |
| **G#4** | 9 | 1/4 + 1/8 Mix | Complex |
| **A4** | 10 | 1/8 + 1/16 Mix | Layered |
| **A#4** | 11 | Random Gate | Texture |
| **B4** | 12 | Burst Pattern 1 | Fill effect |
| **C5** | 13 | Burst Pattern 2 | Build-up |
| **C#5** | 14 | Fade In | Introduction |
| **D5** | 15 | Fade Out | Ending |
| **D#5** | 16 | Crescendo | Build |
| **E5** | 17 | Decrescendo | Cool down |
| **F5** | 18 | Sidechain 4/4 | Standard duck |
| **F#5** | 19 | Sidechain 2/4 | Half duck |
| **G5** | 20 | Sidechain 1/4 | Quarter duck |
| **G#5** | 21 | Exp. Curve Fast | Snappy duck |
| **A5** | 22 | Exp. Curve Slow | Smooth duck |
| **A#5** | 23 | Log. Curve | Pumping |
| **B5** | 24 | S-Curve | Natural duck |
| **C6** | 25 | Stutter Gate 1 | Vocal chop |
| **C#6** | 26 | Stutter Gate 2 | Melodic chop |
| **D6** | 27 | Stutter Gate 3 | Drum chop |
| **D#6** | 28 | Stutter Gate 4 | Effect chop |
| **E6** | 29 | Half Volume | Subtle |
| **F6** | 30 | Quarter Volume | Very subtle |
| **F#6** | 31 | Empty/Init | Utility |
| **G6** | 32 | Utility 1 | Custom |
| **G#6** | 33 | Utility 2 | Custom |
| **A6** | 34 | Utility 3 | Custom |
| **A#6** | 35 | Utility 4 | Custom |
| **B6** | 36 | Utility 5 | Custom |

---

## Quick Reference by Genre

### Hip-Hop Essentials
`\`\`
Time Slots:
  C1  - Normal (reference)
  C#1 - Half-time (main effect)
  F#1 - 1/4 stutter (verse spice)
  G1  - 1/8 stutter (fills)
  F#2 - Tape-stop (transitions)

Volume Slots:
  C4  - Full (dry)
  D#4 - 1/16 gate (trap feel)
  F5  - Sidechain 4/4 (groove)
`\`\`

### Trap Essentials
`\`\`
Time Slots:
  C#1 - Half-time
  G1  - 1/8 stutter
  G#1 - 1/16 stutter (fast rolls)
  C2  - Random glitch

Volume Slots:
  D#4 - 1/16 gate (standard)
  E4  - 1/32 gate (ultra-trap)
  C6  - Stutter gate (hihats)
`\`\`

### EDM Essentials
`\`\`
Time Slots:
  D1  - Double-time (builds)
  F#1 - 1/4 stutter
  F2  - Stutter burst (drops)
  F#2 - Tape-stop (breakdowns)

Volume Slots:
  D4  - 1/8 gate
  F5  - Sidechain 4/4
  G#5 - Exp. Curve Slow
  D#5 - Crescendo (build-ups)
`\`\`

---

## MIDI Note Numbers (Alternative Reference)

| Note | MIDI # | Slot Type | Slot # |
|------|--------|-----------|--------|
| C1 | 24 | Time | 1 |
| C#1 | 25 | Time | 2 |
| D1 | 26 | Time | 3 |
| ... | ... | ... | ... |
| B3 | 59 | Time | 36 |
| C4 | 60 | Volume | 1 |
| C#4 | 61 | Volume | 2 |
| ... | ... | ... | ... |
| B6 | 95 | Volume | 36 |

---

## Keyboard Layout Tips

### Two-Handed Playing
`\`\`
Left Hand (Time):     Right Hand (Volume):
  C1-B1 (Octave 1)      C4-B4 (Octave 4)
  C2-B2 (Octave 2)      C5-B5 (Octave 5)
  C3-B3 (Octave 3)      C6-B6 (Octave 6)
  
Play time effects      Add gates/ducking
with left hand         with right hand
`\`\`

### One-Handed Quick Access
`\`\`
Most used on easy reach:
  C1  - Normal
  C#1 - Half-time
  F#1 - 1/4 stutter
  G1  - 1/8 stutter
  F#2 - Tape-stop
  
  C4  - Full volume
  D#4 - 1/16 gate
  F5  - Sidechain
`\`\`

### Drum Pad Mapping (for controllers)
`\`\`
Typical 4x4 pad layout:

┌────┬────┬────┬────┐
│ C1 │ C#1│ D1 │ D#1│  Row 1: Speeds
├────┼────┼────┼────┤
│ F#1│ G1 │ G#1│ A1 │  Row 2: Stutters
├────┼────┼────┼────┤
│ F#2│ G2 │ G#2│ A2 │  Row 3: Tape effects
├────┼────┼────┼────┤
│ C4 │ D#4│ F5 │ C6 │  Row 4: Volume slots
└────┴────┴────┴────┘
`\`\`

---

## Velocity Mapping

Gross Beat responds to note velocity for dynamic control:

| Velocity Range | Effect | Application |
|----------------|--------|-------------|
| 1-32 | Subtle (25% Mix) | Background texture |
| 33-64 | Light (50% Mix) | Gentle effect |
| 65-96 | Medium (75% Mix) | Standard effect |
| 97-127 | Full (100% Mix) | Maximum impact |

**Tip:** Program different velocities for dynamic performances:
`\`\`
Verse:  Medium velocity (65-80)
Chorus: Full velocity (100-127)
Bridge: Light velocity (40-60)
`\`\`

---

## Common Chord Triggers

### Hip-Hop Pattern
`\`\`
C#1 (held) + F#1 (stabs) = Half-time with occasional stutters
F#2 (transition) = Tape-stop on bridge
F5 (automation) = Sidechain throughout
`\`\`

### Trap Build
`\`\`
C1 (intro) → C#1 (drop, held) 
+ D#4 (stabs) = Half-time with 1/16 gates
+ G1 (fills) = 1/8 stutters on transitions
`\`\`

### EDM Drop
`\`\`
F2 (held) = Stutter burst effect
+ F5 (sidechain) = Pumping compression feel
+ D1 (build) = Double-time before drop
`\`\`

---

## Troubleshooting MIDI

**Problem:** Wrong note triggers wrong slot
- Check: Is your controller transposed?
- Fix: Reset transpose to 0, use C1-B6 range

**Problem:** Can't reach all slots
- Option 1: Use octave shift on controller
- Option 2: Use two controllers
- Option 3: Program automation instead

**Problem:** Velocity not affecting intensity
- Check: Gross Beat settings
- Note: Some slots may ignore velocity
- Fix: Use Mix automation instead

---

## Source

MIDI mapping verified from:
- [SRC: IL-MAN] Image-Line Gross Beat manual
- FL Studio MIDI implementation chart

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Gross Beat Parameter Cheat Sheet

## Global Controls

| Control | Range | Function | Quick Tip |
|---------|-------|----------|-----------|
| **Mix** | 0-100% | Dry/Wet blend | 50% for subtle, 100% for full effect |
| **Pos** | 0-100% | Buffer read position | Higher = more delay effect |
| **Attack** | 0-1000ms | Envelope attack time | 10-30ms prevents clicks |
| **Release** | 0-1000ms | Envelope release time | 20-50ms for smooth transitions |
| **Time/Volume Toggle** | Switch | Select envelope type | Click envelope name to toggle |

## Slot Controls

| Control | Function | Notes |
|---------|----------|-------|
| **Slot Display** | Shows current slot number | Time slots: 1-36, Volume slots: 1-36 |
| **Previous/Next** | Navigate slots | Click arrows or use MIDI |
| **Copy/Paste** | Duplicate slot settings | Right-click menu options |
| **Initialize** | Reset slot to default | "Init" button clears envelope |

## Envelope Editor

| Tool | Function | Shortcut |
|------|----------|----------|
| **Line** | Draw straight lines | Click start, drag to end |
| **Freehand** | Draw custom curves | Click and drag freely |
| **Step** | Create quantized steps | Hold Shift while drawing |
| **Snap** | Quantize to grid | Toggle on/off |
| **Smooth** | Apply curve smoothing | Right-click option |

## MIDI Triggering

| Octave | Slot Type | Range |
|--------|-----------|-------|
| **C1-B1** | Time slots 1-12 | Speed effects |
| **C2-B2** | Time slots 13-24 | Stutter patterns |
| **C3-B3** | Time slots 25-36 | Tape effects |
| **C4-B4** | Volume slots 1-12 | Basic gates |
| **C5-B5** | Volume slots 13-24 | Complex patterns |
| **C6-B6** | Volume slots 25-36 | Sidechain curves |

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl + Click** | Reset control to default |
| **Alt + Click** | Fine adjustment mode |
| **Right-click** | Context menu |
| **Spacebar** | Toggle envelope type |
| **1-9** | Quick slot select (1-9) |
| **0** | Slot 10 |

## Visual Grid Guide

### Time Envelope
`\`\`
Diagonal (45°):  Normal playback (100% speed)
Shallow down:     Slow down (50% speed = half-time)
Steep down:       Dramatic slow down (tape-stop)
Horizontal:       Freeze/repeat (stutter)
Shallow up:       Speed up (150% speed)
Steep up:         Fast forward (200% speed)
`\`\`

### Volume Envelope
`\`\`
Top (100%):       Full volume
Middle (50%):     Half volume (-6dB)
Bottom (0%):      Silence
Square waves:     Gating on/off
Curves:           Fades and swells
`\`\`

## Quick Settings by Effect

### Half-Time
- **Time slot:** Shallow downward slope (22.5°)
- **Mix:** 100%
- **Attack:** 15-20ms
- **Release:** 25-35ms

### Stutter (1/16th)
- **Time slot:** Horizontal blocks, 1/16th duration
- **Mix:** 80%
- **Attack:** 5-10ms
- **Release:** 10-20ms

### Tape-Stop
- **Time slot:** Steep downward curve
- **Volume slot:** Slight fade-out
- **Mix:** 100%
- **Attack:** 50-100ms
- **Release:** 100-200ms

### Rhythmic Gate
- **Volume slot:** 1/8 or 1/16th square pattern
- **Mix:** 60-80%
- **Attack:** 10ms
- **Release:** 20ms

### Sidechain Duck
- **Volume slot:** Exponential recovery curve
- **Mix:** 100%
- **Attack:** 5ms
- **Release:** 100-200ms

## Common Values Reference

### Attack/Release Times
| Effect Type | Attack | Release | Why |
|-------------|--------|---------|-----|
| Tight gate | 0-5ms | 10-20ms | Snappy, clicky |
| Smooth gate | 10-20ms | 30-50ms | Natural, no clicks |
| Slow effect | 50-100ms | 100-300ms | Gradual, ambient |

### Mix Percentages
| Blend | Percent | Use Case |
|-------|---------|----------|
| Subtle | 25-40% | Background texture |
| Moderate | 50-60% | Balanced effect |
| Strong | 70-85% | Prominent effect |
| Full | 90-100% | Maximum impact |

### Pos (Position) Settings
| Position | Effect | Application |
|----------|--------|-------------|
| 0% | No delay | Real-time playback |
| 25% | 1/2 bar delay | Slapback effect |
| 50% | 1 bar delay | Echo-like |
| 75% | 1.5 bar delay | Heavy delay |
| 100% | 2 bar delay | Maximum offset |

## Troubleshooting Quick Fixes

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Clicks/pops | Attack too fast | Increase to 10-30ms |
| Muddy sound | Release too long | Decrease to 20-50ms |
| No effect | Mix at 0% | Increase Mix to 50%+ |
| Too subtle | Wrong slot | Check slot assignment |
| Out of sync | No grid snap | Enable snap to project |
| Harsh transitions | No smoothing | Enable envelope smoothing |

## Preset Slot Organization

### Recommended Layout
`\`\`
Time Slots:
  1-3:  Normal, Half-time, Double-time (speeds)
  4-12: Stutter variations (1/4, 1/8, 1/16 patterns)
  13-18: Glitch patterns (random, reverse-sim)
  19-24: Tape effects (stop, start, slow)
  25-30: Special (scratch, spinback)
  31-36: Utility (init, blank)

Volume Slots:
  1-6:  Basic gates (1/4, 1/8, 1/16, 1/32, triplet, dotted)
  7-12: Complex patterns (mixed rhythms)
  13-18: Sidechain curves (4/4, 2/4, 1/4 duck)
  19-24: Fade patterns (crescendo, decrescendo)
  25-30: Stutter gates (burst patterns)
  31-36: Utility (full, silent, half)
`\`\`

## Source Citations
All parameters and ranges verified from:
- [SRC: IL-MAN] Image-Line FL Studio Online Manual - Gross Beat

```

---

## FILE: 01-Learning\Quick-Reference\problem-solver.md

```markdown
# Gross Beat Problem Solver

## Quick Diagnosis Table

| Problem | Check This | Likely Cause | Quick Fix |
|---------|------------|--------------|-----------|
| **No effect heard** | Mix control | Mix at 0% | Raise Mix to 50-100% |
| **Clicks and pops** | Attack time | Too fast (0-5ms) | Increase to 10-30ms |
| **Effect too subtle** | Wrong slot | Using init/blank slot | Select programmed slot |
| **Out of sync** | Grid snap | Snap disabled | Enable tempo sync |
| **Too extreme** | Slope angle | Too steep | Use gentler slopes |
| **Muddy sound** | Release time | Too long | Decrease to 20-50ms |
| **No MIDI response** | Routing | Wrong channel | Set correct MIDI input |
| **Wrong octave** | Note range | C0-C7 instead of C1-C6 | Use correct octave |

---

## Common Issues by Effect Type

### Half-Time Problems

**Issue: Sounds choppy or robotic**
- **Cause:** Attack too fast, not enough smoothing
- **Fix:** 
  1. Increase Attack to 20ms
  2. Increase Release to 40ms
  3. Use gentler slope (less steep)

**Issue: Pitch drop too extreme**
- **Cause:** Slope too steep (double-time instead of half-time)
- **Fix:**
  1. Adjust slope to approximately 22.5°
  2. Use Pos control to fine-tune
  3. Check if using correct slot

**Issue: Half-time sounds "phasey"**
- **Cause:** Mix with dry signal creating comb filtering
- **Fix:**
  1. Increase Mix to 100%
  2. Or use lower Mix (25-40%) for subtle effect
  3. Avoid 50-70% Mix for half-time

**Issue: 808s sound damaged**
- **Cause:** Low-end smear from time manipulation
- **Fix:** 
  1. See "Low-End Smear Warnings" workflow
  2. Consider parallel processing
  3. Or use on bus, not individual 808

### Stutter/Gating Problems

**Issue: Stutter has clicks**
- **Cause:** Sharp transitions without smoothing
- **Fix:**
  1. Add 5-15ms Attack
  2. Add 10-25ms Release
  3. Use "Smooth" option on envelope

**Issue: Gate timing off**
- **Cause:** Not synced to tempo or wrong grid
- **Fix:**
  1. Enable "Snap to grid"
  2. Set grid to 1/16 or 1/32
  3. Quantize MIDI notes if using triggering

**Issue: Gate pattern too fast/slow**
- **Cause:** Wrong note division
- **Fix:**
  1. 1/8 gate → use 1/16 for faster
  2. 1/16 gate → use 1/32 for fastest
  3. 1/4 gate → use 1/8 for slower feel

**Issue: Gated sound too quiet**
- **Cause:** Too much silence in pattern
- **Fix:**
  1. Make gates wider (less silence)
  2. Or raise overall channel volume
  3. Use volume automation to compensate

### Tape-Stop Problems

**Issue: Tape-stop sounds abrupt**
- **Cause:** Curve too steep at end
- **Fix:**
  1. Gradual curve that flattens at end
  2. Add volume fade in Volume slot
  3. Use 100-200ms Attack/Release

**Issue: Tape-stop doesn't "land" smoothly**
- **Cause:** Buffer position issue
- **Fix:**
  1. Adjust Pos control
  2. Trigger tape-stop at bar boundaries
  3. Ensure enough buffer content exists

**Issue: Speed change too linear**
- **Cause:** Straight line instead of curve
- **Fix:**
  1. Draw exponential curve
  2. Use "Smooth" option
  3. Hand-draw curve for natural feel

### MIDI Triggering Problems

**Issue: MIDI notes don't trigger slots**
- **Cause:** Wrong routing or disabled input
- **Fix:**
  1. Right-click Gross Beat title bar
  2. Select "Receive notes from"
  3. Choose correct controller/channel

**Issue: Wrong slots trigger**
- **Cause:** Octave offset
- **Fix:**
  1. C1-B1 = Time slots 1-12
  2. C4-B4 = Volume slots 1-12
  3. Check your controller octave settings

**Issue: Slots trigger at wrong time**
- **Cause:** MIDI timing or quantization
- **Fix:**
  1. Quantize MIDI notes in piano roll
  2. Check for MIDI delay compensation
  3. Use "Snap" in piano roll

**Issue: Can't trigger both Time and Volume**
- **Cause:** Trying to use same hand/notes
- **Fix:**
  1. Use different octaves (C1 for Time, C4 for Volume)
  2. Or use controller with pads + keys
  3. Program automation instead

---

## Technical Issues

### CPU/Performance Problems

**Issue: Dropouts during performance**
- **Causes & Fixes:**
  1. **Buffer size too small** → Increase in audio settings
  2. **Too many instances** → Freeze tracks, bounce to audio
  3. **CPU overload** → Disable HQ mode, freeze other tracks

**Issue: Latency when triggering**
- **Cause:** System buffer delay
- **Fix:**
  1. Reduce buffer size (trade-off with stability)
  2. Use ASIO drivers if available
  3. Enable "Use fixed size buffers" if needed

### Audio Quality Issues

**Issue: Crackling on effect**
- **Cause:** Attack too fast or CPU overload
- **Fix:**
  1. Increase Attack to 10ms minimum
  2. Increase audio buffer size
  3. Disable other CPU-intensive plugins

**Issue: Sound quality degraded**
- **Cause:** Extreme time manipulation
- **Fix:**
  1. This is normal for extreme effects
  2. Use more moderate slopes
  3. Consider using Newtime for cleaner stretching

**Issue: Stereo image affected**
- **Cause:** Phase issues from processing
- **Fix:**
  1. Check correlation meter
  2. Use mono compatibility mode if available
  3. Blend less (lower Mix %)

### Sync/Timing Issues

**Issue: Effect drifts from beat**
- **Cause:** Not tempo-synced or buffer wrap
- **Fix:**
  1. Enable tempo sync in Gross Beat
  2. Check project tempo matches
  3. Reset Pos to 0% at song start

**Issue: Slot switching not quantized**
- **Cause:** Snap disabled or freehand drawing
- **Fix:**
  1. Enable "Snap to grid"
  2. Set appropriate grid division
  3. Redraw envelopes with snap on

**Issue: Pos (Position) drifts**
- **Cause:** Automation or manual adjustment
- **Fix:**
  1. Automate Pos to reset at bar lines
  2. Use consistent Pos for entire sections
  3. Or set to 0% for real-time effects

---

## Workflow Solutions

### "I want cleaner half-time"
→ Use the workflow: `03-Workflows/by-goal/perfect-half-time.md`

### "My 808s sound messed up"
→ See: `03-Workflows/by-instrument/808-sub-bass.md`

### "Stutter sounds unprofessional"
→ Check: `03-Workflows/by-goal/trap-stutter-effects.md`

### "Tape-stop doesn't sound right"
→ Reference: `03-Workflows/by-goal/tape-stop-transitions.md`

### "Want to perform live with Gross Beat"
→ Read: `01-Learning/Concepts/midi-triggering-performance.md`

---

## Emergency Fixes

### "Everything sounds wrong"
1. **Reset Gross Beat:** Click "Init" to clear current slot
2. **Reset Mix:** Set to 50% (neutral starting point)
3. **Reset Pos:** Set to 0% (real-time playback)
4. **Reset Attack/Release:** Set to 20ms/30ms
5. **Select Slot 1:** Usually the default/normal slot

### "Can't hear any effect"
1. Check Mix is above 0%
2. Check you're not on an empty/init slot
3. Verify audio is passing through the channel
4. Check channel isn't muted
5. Try different slot (2-36)

### "Project is stuttering/crashing"
1. **Save project first!**
2. Freeze Gross Beat track
3. Increase audio buffer size
4. Disable HQ mode in Gross Beat
5. Consider bouncing to audio

---

## Prevention Checklist

Before committing to a Gross Beat effect:
- [ ] Attack set to 10ms+ (prevents clicks)
- [ ] Mix level appropriate for context
- [ ] Slot programmed and tested
- [ ] MIDI routing correct (if using)
- [ ] Grid snap enabled for tight timing
- [ ] Checked for low-end smear on bass
- [ ] Ready to commit to audio if needed

---

## Source References

Troubleshooting based on:
- [SRC: IL-MAN] Image-Line Gross Beat documentation
- Common user issues from FL Studio forums
- Professional mixing workflows

```

---

## FILE: 01-Learning\Quick-Reference\quick-start-checklist.md

```markdown
# Gross Beat Quick Start Checklist

## First-Time Setup (5 minutes)

### 1. Load Gross Beat
- [ ] Add Gross Beat to desired mixer channel
- [ ] Verify audio is passing through
- [ ] Set Mix to 50% as starting point

### 2. Explore Preset Slots
- [ ] Click through Time slots 1-12
- [ ] Click through Volume slots 1-6
- [ ] Note which slots produce audible effects
- [ ] Identify your favorites

### 3. Test Basic Effects
- [ ] Try Slot 2 (C#1) for half-time
- [ ] Try Slot 9 (G1) for 1/16 stutter
- [ ] Try Slot 19 (F#2) for tape-stop
- [ ] Try Volume slot 4 (D#4) for 1/16 gate

### 4. Adjust Global Settings
- [ ] Set Attack to 15-20ms (prevents clicks)
- [ ] Set Release to 25-35ms (smooth transitions)
- [ ] Leave Pos at 0% (real-time)
- [ ] Adjust Mix to taste (start at 50%)

---

## Creating Your First Effect

### Half-Time (Hip-Hop Style)

**Step 1:** Load audio (loop or track)
`\`\`
Any melodic loop or drum break
Recommended: 140 BPM hip-hop beat
`\`\`

**Step 2:** Navigate to Time Slot 2
`\`\`
Click slot 02 or press C#1
This is your half-time preset
`\`\`

**Step 3:** Configure settings
`\`\`
Mix:     100% (full effect)
Pos:     0%   (real-time)
Attack:  20ms (smooth entry)
Release: 30ms (smooth exit)
`\`\`

**Step 4:** Test and adjust
`\`\`
Play your track
Hear the half-speed effect
If too extreme, reduce Mix to 70%
If clicking, increase Attack to 30ms
`\`\`

---

## Common First Effects to Try

### 1. Trap Stutter (Volume)
`\`\`
Time Slot:  1 (normal, no change)
Volume Slot: 4 (1/16 gate)
Mix:        80%

Effect: Rhythmic 16th-note gating
Use on: Hi-hats, percussion, vocals
`\`\`

### 2. Build-Up Stutter (Time)
`\`\`
Time Slot: 9 (1/16 stutter)
Volume:    1 (full)
Mix:       100%

Effect: Fast 16th-note stutters
Use on: Synths, builds, transitions
`\`\`

### 3. Tape-Stop Transition
`\`\`
Time Slot: 19 (tape-stop)
Volume:    15 (fade out)
Mix:       100%

Effect: Gradual slow-down with fade
Use on: End of sections, transitions
`\`\`

### 4. Sidechain Simulation
`\`\`
Time:      1 (normal)
Volume:    18 (sidechain 4/4)
Mix:       100%

Effect: Ducking on each beat
Use on: Pads, bass, background elements
`\`\`

---

## MIDI Setup (for Performance)

### Step-by-Step

**1. Enable MIDI Input**
`\`\`
Right-click Gross Beat title bar
→ Receive notes from
→ Select your controller
`\`\`

**2. Test Triggering**
`\`\`
Press C1 on keyboard
→ Should trigger Time Slot 1
Press C#1
→ Should trigger Time Slot 2 (half-time)
Press D#4
→ Should trigger Volume Slot 4 (1/16 gate)
`\`\`

**3. Create MIDI Clip**
`\`\`
Add MIDI Out to separate channel
Set output to Gross Beat channel
Draw notes in piano roll
Quantize to grid (1/16 recommended)
`\`\`

---

## Quick Settings Reference

### Attack/Release Starting Points

| Effect Type | Attack | Release | Why |
|-------------|--------|---------|-----|
| General use | 20ms | 30ms | Safe default |
| Stutter | 5ms | 15ms | Snappy |
| Half-time | 20ms | 40ms | Smooth |
| Tape-stop | 50ms | 100ms | Gradual |
| Gate | 10ms | 20ms | Tight |

### Mix Percentages

| Context | Mix % | Result |
|---------|-------|--------|
| Subtle texture | 25-40% | Barely noticeable |
| Moderate effect | 50-60% | Balanced blend |
| Strong effect | 70-85% | Prominent |
| Full effect | 90-100% | Maximum impact |

---

## Safety Checks

### Before Committing to Audio
- [ ] Attack is 10ms or higher (no clicks)
- [ ] Release is appropriate for the effect
- [ ] Mix level works in context
- [ ] No low-end smear on bass (if applicable)
- [ ] Effect is tempo-synced
- [ ] MIDI triggers are quantized (if using)

### Signs You're Doing It Right
- [ ] Effect is musical and groovy
- [ ] No clicks, pops, or artifacts
- [ ] Timing aligns with beat
- [ ] Effect enhances rather than distracts
- [ ] Low end remains intact (for bass)

### Signs You Need to Adjust
- [ ] Clicking sounds → Increase Attack
- [ ] Muddy sound → Decrease Release
- [ ] Can't hear effect → Increase Mix
- [ ] Too extreme → Decrease Mix or adjust slope
- [ ] Out of sync → Enable snap to grid
- [ ] Bass sounds wrong → See low-end warnings

---

## Next Steps

### After This Checklist

1. **Read Buffer Architecture**
   → `01-Learning/Concepts/buffer-architecture.md`

2. **Learn MIDI Triggering**
   → `01-Learning/Concepts/midi-triggering-performance.md`

3. **Try Workflows**
   → `03-Workflows/by-goal/perfect-half-time.md`
   → `03-Workflows/by-goal/trap-stutter-effects.md`

4. **Explore Instruments**
   → `03-Workflows/by-instrument/vocals.md`
   → `03-Workflows/by-instrument/808-sub-bass.md`

---

## One-Page Cheat Sheet

`\`\`
GROSS BEAT IN 30 SECONDS:

MIX:     0-100% (effect amount)
POS:     0-100% (buffer position)
ATTACK:  10ms+ (prevents clicks)
RELEASE: 20ms+ (smooth transitions)

TIME SLOTS (C1-B3): Control speed/stutter
VOLUME SLOTS (C4-B6): Control gates/ducking

MOST USED:
C1  = Normal      C4  = Full volume
C#1 = Half-time   D#4 = 1/16 gate  
G1  = 1/8 stutter F5  = Sidechain
F#2 = Tape-stop

DIAGONAL LINE = Normal playback
HORIZONTAL    = Freeze/stutter  
DOWN SLOPE    = Slow down
UP SLOPE      = Speed up

TOP = Full volume, BOTTOM = Silence
`\`\`

---

## Source
Quick start based on:
- [SRC: IL-MAN] Image-Line Gross Beat getting started guide
- Common first-user workflows

```

---

## FILE: 01-Learning\Quick-Reference\visual-reference-guide.md

```markdown
# Gross Beat Visual Reference Guide

## Interface Overview

`\`\`
┌─────────────────────────────────────────────────────────────────┐
│  GROSS BEAT                                    [Time][Volume] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ENVELOPE GRID (2 bars visible)                              │
│     ┌──────────────────────────────────────┐                    │
│     │                                      │                    │
│     │  Buffer Position                     │                    │
│     │     ↑                                │                    │
│     │ 100%│      /\\    <- Envelope        │                    │
│     │  50%│     /  \\      shape            │                    │
│     │   0%│____/    \\____________          │                    │
│     │     +-----------------------→         │                    │
│     │          Time (2 bars)               │                    │
│     └──────────────────────────────────────┘                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  SLOT GRID                                                      │
│  ┌────┬────┬────┬────┬────┬────┐                               │
│  │ 01 │ 02 │ 03 │ 04 │ 05 │ 06 │ <- Time Slots (Rows 1-6)       │
│  ├────┼────┼────┼────┼────┼────┤                               │
│  │ 07 │ 08 │ 09 │ 10 │ 11 │ 12 │                               │
│  ├────┼────┼────┼────┼────┼────┤                               │
│  │ ...│ ...│ ...│ ...│ ...│ ...│                               │
│  ├────┼────┼────┼────┼────┼────┤                               │
│  │ 31 │ 32 │ 33 │ 34 │ 35 │ 36 │                               │
│  └────┴────┴────┴────┴────┴────┘                               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  MIX     POS     ATTACK     RELEASE                             │
│  [100%]  [0%]   [20ms]     [30ms]                               │
│                                                                 │
│  [◄ Prev]  SLOT 12 / 36  [Next ►]                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
`\`\`

## Envelope Shape Library

### Time Envelope Patterns

#### 1. Normal Playback (Baseline)
`\`\`
    |
    |     /
    |    /
    |   /
    |  /
    | /
    |/
    +----------------
`\`\`
**Meaning:** Diagonal line = normal speed playback
**Use:** Reference/bypass slot

#### 2. Half-Time (Hip-Hop Classic)
`\`\`
    |
    |       /
    |      /
    |     /
    |    /
    |   /
    |  /
    | /
    |/
    +----------------
`\`\`
**Meaning:** Gentle slope = 50% speed
**Pitch:** -12 semitones (one octave down)
**Use:** The signature hip-hop half-time effect

#### 3. Double-Time
`\`\`
    |
    | /
    |/
    +----------------
`\`\`
**Meaning:** Steep slope = 200% speed
**Pitch:** +12 semitones (one octave up)
**Use:** Energy increases, fast sections

#### 4. Freeze/Stutter
`\`\`
    |
    |_______
    |       |
    |       |
    |       |_______
    |               |
    +----------------
`\`\`
**Meaning:** Horizontal line = repeated section
**Use:** Stutter effects, trap style

#### 5. Tape-Stop
`\`\`
    |
    |\
    | \
    |  \
    |   \
    |    \
    |     \
    |      \
    |       \___
    +----------------
`\`\`
**Meaning:** Steep downward curve = gradual slow down
**Use:** Transitions, endings, dramatic moments

#### 6. Reverse Simulation (Glitch)
`\`\`
    |
    |  /\       /\
    | /  \     /  \
    |/    \___/    \
    +----------------
`\`\`
**Meaning:** Rapid position jumps
**Use:** Glitch textures, experimental

### Volume Envelope Patterns

#### 1. Full Volume (Pass-through)
`\`\`
    |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    |                  
    |                  
    +----------------
`\`\`

#### 2. 1/4 Note Gate
`\`\`
    |‾‾‾|   |‾‾‾|   |‾‾‾|
    |   |___|   |___|   |
    +--------------------
    1   2   3   4
`\`\`

#### 3. 1/8 Note Gate
`\`\`
    |‾‾|_|‾‾|_|‾‾|_|‾‾|_
    |  | |  | |  | |  |
    +--------------------
`\`\`

#### 4. 1/16 Note Gate (Trap)
`\`\`
    |‾|_|‾|_|‾|_|‾|_|‾|_|‾|_|‾|_|‾|_
    | | | | | | | | | | | | | | | |
    +--------------------------------
`\`\`

#### 5. Sidechain Ducking
`\`\`
    |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    |      /‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    |_____/
    +--------------------------------
    Kick  Snare Kick  Snare
`\`\`

#### 6. Fade In/Out
`\`\`
    |        /‾‾‾‾‾‾\        
    |       /        \       
    |______/          \______
    +-------------------------
`\`\`

## Color Coding Reference

| Element | Color | Meaning |
|---------|-------|---------|
| **Time envelope line** | White/Cyan | Current time manipulation |
| **Volume envelope line** | White/Pink | Current volume shaping |
| **Active slot** | Green highlight | Currently selected |
| **MIDI triggered** | Yellow flash | Recently triggered |
| **Buffer warning** | Red | Approaching buffer limit |
| **Grid lines** | Gray | Beat/bar divisions |

## Grid Division Markers

`\`\`
    |
    |     |     |     |     |     |     |
    |     |     |     |     |     |     |
    +-----+-----+-----+-----+-----+-----+
    |     |     |     |     |     |     |
    
    Bar   Beat  Beat  Beat  Beat  Bar
    1     1     2     3     4     2
    
    Major lines = Bar divisions
    Minor lines = Beat divisions
    Fine lines = 1/4 beat divisions
`\`\`

## Slot Layout Visual

### Full 36-Slot Grid
`\`\`
        Time Slots                    Volume Slots
        ┌──┬──┬──┬──┬──┬──┐          ┌──┬──┬──┬──┬──┬──┐
Row 1   │01│02│03│04│05│06│          │01│02│03│04│05│06│
        ├──┼──┼──┼──┼──┼──┤          ├──┼──┼──┼──┼──┼──┤
Row 2   │07│08│09│10│11│12│          │07│08│09│10│11│12│
        ├──┼──┼──┼──┼──┼──┤          ├──┼──┼──┼──┼──┼──┤
Row 3   │13│14│15│16│17│18│          │13│14│15│16│17│18│
        ├──┼──┼──┼──┼──┼──┤          ├──┼──┼──┼──┼──┼──┤
Row 4   │19│20│21│22│23│24│          │19│20│21│22│23│24│
        ├──┼──┼──┼──┼──┼──┤          ├──┼──┼──┼──┼──┼──┤
Row 5   │25│26│27│28│29│30│          │25│26│27│28│29│30│
        ├──┼──┼──┼──┼──┼──┤          ├──┼──┼──┼──┼──┼──┤
Row 6   │31│32│33│34│35│36│          │31│32│33│34│35│36│
        └──┴──┴──┴──┴──┴──┘          └──┴──┴──┴──┴──┴──┘
        
MIDI:   C1 to B3 (36 notes)          C4 to B6 (36 notes)
`\`\`

## MIDI Keyboard Overlay

`\`\`
┌────────────────────────────────────────────────────┐
│                    MIDI KEYBOARD                    │
├────────────────────────────────────────────────────┤
│  C1  C#1 D1  D#1 E1  F1  F#1 G1  G#1 A1  A#1 B1   │
│  [1] [2] [3] [4] [5] [6] [7] [8] [9] [10][11][12]  │
│  Time Slot 1-12                                    │
├────────────────────────────────────────────────────┤
│  C2  C#2 D2  D#2 E2  F2  F#2 G2  G#2 A2  A#2 B2   │
│  [13][14][15][16][17][18][19][20][21][22][23][24]  │
│  Time Slot 13-24                                   │
├────────────────────────────────────────────────────┤
│  C3  C#3 D3  D#3 E3  F3  F#3 G3  G#3 A3  A#3 B3   │
│  [25][26][27][28][29][30][31][32][33][34][35][36]  │
│  Time Slot 25-36                                   │
├────────────────────────────────────────────────────┤
│  C4  C#4 D4  D#4 E4  F4  F#4 G4  G#4 A4  A#4 B4   │
│  [1] [2] [3] [4] [5] [6] [7] [8] [9] [10][11][12]  │
│  Volume Slot 1-12                                  │
├────────────────────────────────────────────────────┤
│  C5  C#5 D5  D#5 E5  F5  F#5 G5  G#5 A5  A#5 B5   │
│  [13][14][15][16][17][18][19][20][21][22][23][24]  │
│  Volume Slot 13-24                                 │
├────────────────────────────────────────────────────┤
│  C6  C#6 D6  D#6 E6  F6  F#6 G6  G#6 A6  A#6 B6   │
│  [25][26][27][28][29][30][31][32][33][34][35][36]  │
│  Volume Slot 25-36                                 │
└────────────────────────────────────────────────────┘
`\`\`

## Signal Flow Diagram

`\`\`
INPUT SIGNAL
     │
     ▼
┌─────────────────────────────────┐
│      2-BAR ROLLING BUFFER       │
│  ┌──────────────────────────┐    │
│  │ ◄── Audio stored here  │    │
│  │    (constantly updated) │    │
│  └──────────────────────────┘    │
└─────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────┐
│      TIME ENVELOPE (Pos)        │
│  - Determines playback speed  │
│  - Diagonal = normal          │
│  - Horizontal = freeze         │
│  - Slope = speed change        │
└─────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────┐
│      VOLUME ENVELOPE (Amp)      │
│  - Determines loudness         │
│  - Full = no change            │
│  - Gated = rhythmic cuts       │
│  - Curved = fades              │
└─────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────┐
│      MIX (Dry/Wet)              │
│  0% = original only            │
│  50% = equal blend             │
│  100% = effected only          │
└─────────────────────────────────┘
     │
     ▼
OUTPUT SIGNAL
`\`\`

## Quick Visual Diagnosis

| What You See | What It Means | Fix If Wrong |
|--------------|---------------|--------------|
| Diagonal line | Normal playback | Switch to different slot for effect |
| Horizontal line | Frozen/stutter | Ensure that's intended |
| Jagged pattern | Glitch effect | Add smoothing if too harsh |
| Curved line | Gradual change | Normal for tape effects |
| Red warning | Buffer overflow | Adjust Pos control |
| Yellow flash | MIDI triggered | Normal during performance |

## Screen Real Estate Tips

### Minimum Recommended Size
- **Width:** 800px minimum for full grid visibility
- **Height:** 400px minimum for envelope detail

### High DPI Displays
- Enable "Auto-Scale" in FL Studio for crisp rendering
- Envelope lines remain clear at all zoom levels

### Multi-Monitor Setups
- Gross Beat can be dragged to any monitor
- MIDI triggering works regardless of window position

## Source
Visual references verified from:
- [SRC: IL-MAN] Image-Line Gross Beat interface documentation
- [SRC: IL-MAN] FL Studio 21+ UI guidelines

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Gross Beat

| Parameter | Type | Description | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Time Grid** | Editor | Maps playhead to buffer position. | **Moody** (Half-speed). | Pitch and timing. |
| **Volume Grid** | Editor | Standard envelope for gating. | **Jazzy** (Sidechain). | Dynamics/Rhythm. |
| **Attack (Time)** | Knob | Playhead jump smoothing. | **Vibey** (Softness). | Artifact reduction. |
| **Release (Time)**| Knob | Playhead return smoothing. | N/A | Click prevention. |
| **Mix (Dry/Wet)** | Knob | Parallel processing balance. | **Moody** (Octave layering).| Transparency/Density. |
| **HQ Resample** | Switch | High-quality pitch algorithm. | N/A | Aliasing/CPU usage. |
| **Hold/Trig** | Select | Pattern switching behavior. | **Upbeat** (Instant switch).| Performance timing. |

## Mix Impact Tags
*   **Transient Preservation:** Rapid volume gates can "kill" the snap of a snare. Use the Volume Attack to preserve transients.
*   **Phase/Low-End:** Time manipulation causes phase shifts. Avoid use on sub-bass without high-passing.
*   **Perceived Loudness:** Gating creates "silence" which allows other elements (like the Kick) to pop through the mix.

```

---

## FILE: 02-Data\parameters\gross-beat-params.json

```json
{
  "plugin_name": "Gross Beat",
  "category": "Effect",
  "subcategory": "Time & Volume Manipulation",
  "buffer_size_bars": 2,
  "slots": {
    "time": 36,
    "volume": 36
  },
  "parameters": [
    {
      "name": "Main Volume",
      "type": "knob",
      "range": "0-100%",
      "description": "Master output level of the plugin."
    },
    {
      "name": "Time Mix",
      "type": "knob",
      "range": "0-100%",
      "description": "Dry/Wet mix for the Time manipulation envelope. Use this for parallel processing."
    },
    {
      "name": "Volume Mix",
      "type": "knob",
      "range": "0-100%",
      "description": "Dry/Wet mix for the Volume manipulation envelope."
    },
    {
      "name": "Attack",
      "type": "knob",
      "range": "0-500ms",
      "description": "Smoothing attack time for volume gates to prevent clicks."
    },
    {
      "name": "Release",
      "type": "knob",
      "range": "0-1000ms",
      "description": "Smoothing release time for volume gates."
    },
    {
      "name": "HQ Resampling",
      "type": "switch",
      "description": "High Quality resampling for pitch shifting. Enable for render, can be disabled for CPU saving."
    },
    {
      "name": "Click Reduction",
      "type": "switch",
      "description": "De-clicking algorithm for time jumps."
    }
  ],
  "midi_mapping": {
    "volume_slots_start": "C1",
    "time_slots_start": "C4"
  }
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Gross Beat",
  "type": "Time & Volume Shaper / Buffer Effect",
  "version": "FL Studio 21.x+",
  "parameters": [
    {
      "category": "Global",
      "id": "mix",
      "name": "Mix",
      "range": { "min": 0, "max": 100, "unit": "%", "default": 50 },
      "description": "Dry/Wet blend of the effect. 0% = dry only, 100% = wet only.",
      "quickTips": [
        "Use 50% for subtle effects",
        "Use 100% for full half-time",
        "Lower values for background texture"
      ]
    },
    {
      "category": "Global",
      "id": "pos",
      "name": "Pos (Position)",
      "range": { "min": 0, "max": 100, "unit": "%", "default": 0 },
      "description": "Buffer read position offset. Creates delay-style effects by reading from earlier buffer content.",
      "quickTips": [
        "0% = real-time playback",
        "50% = 1 bar delay effect",
        "Higher values = more pronounced delay"
      ]
    },
    {
      "category": "Global",
      "id": "attack",
      "name": "Attack",
      "range": { "min": 0, "max": 1000, "unit": "ms", "default": 20 },
      "description": "Envelope attack time. Controls how quickly the effect reaches full intensity.",
      "recommendedSettings": {
        "tightGate": "5-10ms",
        "smooth": "15-30ms",
        "gradual": "50-100ms"
      },
      "warning": "Values below 10ms may cause clicks on sharp transitions"
    },
    {
      "category": "Global",
      "id": "release",
      "name": "Release",
      "range": { "min": 0, "max": 1000, "unit": "ms", "default": 30 },
      "description": "Envelope release time. Controls how quickly the effect returns to baseline.",
      "recommendedSettings": {
        "snappy": "10-20ms",
        "natural": "30-50ms",
        "ambient": "100-300ms"
      }
    },
    {
      "category": "Envelope",
      "id": "timeEnvelope",
      "name": "Time Envelope",
      "type": "graphical",
      "description": "Visual editor for time manipulation. Diagonal line = normal speed.",
      "visualGuide": {
        "diagonal45": "100% speed (normal)",
        "shallowDown": "50% speed (half-time)",
        "steepDown": "Tape-stop effect",
        "horizontal": "Freeze/stutter",
        "shallowUp": "150% speed",
        "steepUp": "200% speed (double-time)"
      }
    },
    {
      "category": "Envelope",
      "id": "volumeEnvelope",
      "name": "Volume Envelope",
      "type": "graphical",
      "description": "Visual editor for amplitude manipulation. Top = full volume.",
      "visualGuide": {
        "top": "100% volume",
        "middle": "50% volume (-6dB)",
        "bottom": "0% volume (silence)",
        "squareWave": "Gating effect",
        "curve": "Fade in/out"
      }
    },
    {
      "category": "Slots",
      "id": "timeSlots",
      "name": "Time Slots",
      "count": 36,
      "range": { "start": 1, "end": 36 },
      "midiRange": { "start": "C1", "end": "B3" },
      "description": "36 preset patterns for time manipulation",
      "slotCategories": {
        "speed": "Slots 1-6 (Normal, Half-time, Double-time, etc.)",
        "stutter": "Slots 7-18 (Various rhythmic stutter patterns)",
        "tape": "Slots 19-30 (Tape-stop, spinback, scratch effects)",
        "special": "Slots 31-36 (Utility and custom slots)"
      }
    },
    {
      "category": "Slots",
      "id": "volumeSlots",
      "name": "Volume Slots",
      "count": 36,
      "range": { "start": 1, "end": 36 },
      "midiRange": { "start": "C4", "end": "B6" },
      "description": "36 preset patterns for volume/gate manipulation",
      "slotCategories": {
        "gates": "Slots 1-12 (Basic rhythmic gates: 1/4, 1/8, 1/16)",
        "patterns": "Slots 13-24 (Complex patterns and sidechain curves)",
        "effects": "Slots 25-30 (Stutter gates, fades)",
        "utility": "Slots 31-36 (Utility and custom slots)"
      }
    },
    {
      "category": "Buffer",
      "id": "bufferSize",
      "name": "Buffer Size",
      "value": "2 bars",
      "description": "Rolling audio buffer that continuously records incoming audio",
      "technical": {
        "durationAt120BPM": "4 seconds",
        "durationAt140BPM": "3.43 seconds",
        "sampleRate": "Matches project settings",
        "channels": "Stereo or Mono"
      }
    },
    {
      "category": "Buffer",
      "id": "tempoSync",
      "name": "Tempo Sync",
      "type": "boolean",
      "default": true,
      "description": "Synchronizes envelope timing to project tempo"
    }
  ],
  "technicalSpecs": {
    "latency": "< 5ms (MIDI triggered)",
    "cpuUsage": "Low to Moderate",
    "sampleRate": "Up to 192 kHz",
    "bitDepth": "32-bit float internal processing",
    "bufferDuration": "2 bars (tempo-dependent)"
  },
  "source": "[SRC: IL-MAN] Image-Line FL Studio Online Manual"
}

```

---

## FILE: 02-Data\parameters\technical-specs.json

```json
{
  "pluginName": "Gross Beat",
  "specificationType": "Technical Specifications",
  "coreEngine": {
    "name": "2-Bar Rolling Buffer",
    "description": "Continuously recording audio buffer with real-time playback position manipulation",
    "bufferDuration": {
      "bars": 2,
      "secondsAt120BPM": 4.0,
      "secondsAt140BPM": 3.43,
      "secondsAt160BPM": 3.0
    },
    "recordingBehavior": "Circular/rolling - oldest audio continuously overwritten",
    "channels": ["Mono", "Stereo"],
    "sampleRateSupport": "44.1 kHz to 192 kHz"
  },
  "envelopeEngine": {
    "timeEnvelope": {
      "type": "Playback position manipulation",
      "visualRepresentation": "2D grid showing buffer position over time",
      "defaultState": "Diagonal line (45°) = normal playback",
      "resolution": "Configurable grid snap (1/4, 1/8, 1/16, 1/32, freehand)",
      "interpolation": "Linear with optional smoothing"
    },
    "volumeEnvelope": {
      "type": "Amplitude modulation",
      "visualRepresentation": "Amplitude curve over 2-bar duration",
      "range": "0% to 100% (silence to full volume)",
      "defaultState": "Top line (100%) = no change"
    }
  },
  "slotSystem": {
    "totalSlots": 72,
    "timeSlots": {
      "count": 36,
      "midiRange": "C1 to B3",
      "triggerMode": "MIDI note on/off",
      "velocityResponse": true
    },
    "volumeSlots": {
      "count": 36,
      "midiRange": "C4 to B6",
      "triggerMode": "MIDI note on/off",
      "velocityResponse": true
    },
    "simultaneousTrigger": "Time and Volume slots can be triggered independently or together"
  },
  "processing": {
    "algorithm": "Real-time buffer read with variable interpolation",
    "timeStretchQuality": "Optimized for real-time performance (not high-quality offline)",
    "pitchShift": "Automatic with time manipulation (resampling)",
    "phaseResponse": "Minimal phase shift (depends on buffer position)",
    "latency": {
      "realTime": "< 5ms",
      "bufferDependent": "Up to 2 bars maximum"
    }
  },
  "performance": {
    "cpuUsage": "Low to Moderate",
    "ramUsage": "Approximately 8-16 MB (stereo, 44.1kHz)",
    "optimizationTips": [
      "Freeze tracks with Gross Beat for CPU-intensive projects",
      "Use mono mode on mono sources to halve RAM usage",
      "Commit to audio when arrangement is finalized"
    ]
  },
  "midiImplementation": {
    "inputRange": "C1 to B6 (72 notes total)",
    "velocity": "Controls effect intensity (Mix level)",
    "noteLength": "Duration of slot activation",
    "automation": "All parameters support FL Studio automation",
    "ccSupport": "Standard FL Studio VST parameter mapping"
  },
  "limitations": {
    "noTrueReverse": "Cannot reverse audio - only manipulates playback direction",
    "bufferSize": "Fixed at 2 bars (not user-adjustable)",
    "timeStretchQuality": "Real-time optimized, not mastering quality",
    "frequencyContent": "All frequency ranges affected equally (no band selection)"
  },
  "integration": {
    "flStudio": "Native plugin with full Patcher support",
    "otherDAWs": "Available as VST2/VST3 (with reduced MIDI functionality)",
    "sidechain": "Can receive sidechain input for ducking",
    "multiInstance": "Multiple instances supported per project"
  },
  "source": "[SRC: IL-MAN] Image-Line FL Studio Online Manual - Gross Beat Technical Documentation"
}

```

---

## FILE: 02-Data\presets\community-recommendations.md

```markdown
# Community Recommended Presets

Beyond the factory "Momentary" and "Turntablist", here are the preset styles highly recommended by the production community.

## 🏆 The "Must-Haves"

1.  **"Trap Jump" Banks**
    *   **Focus**: Half-time variations (1/2 speed, 3/4 speed, 1/3 speed).
    *   **Why**: Essential for melody composition. Often includes "Reverse Half-Speed" for dark textures.

2.  **"Stutter / Glitch" Banks**
    *   **Focus**: Rapid 1/32 and 1/64 repeats.
    *   **Why**: Used for hi-hat rolls and drum fills. Look for banks that use "Hold" envelopes for clean digital stutters.

3.  **"Vinyl / Scratch" Banks**
    *   **Focus**: Complex curved envelopes.
    *   **Why**: Emulating "Baby Scratch", "Chirp", and "Flare" scratches.
    *   *Reference*: The "ShaperBox" style banks often ported to Gross Beat.

4.  **"Sidechain" Banks**
    *   **Focus**: Simple volume ducking curves.
    *   **Why**: 4-on-the-floor (House), Trap Kick Ducking, Snare Ducking.
    *   *Tip*: Having a bank with different *lengths* of ducking (Short/Tight vs. Long/Pumping) is better than drawing it every time.

## 🔍 How to Find Them
*   Search for "Free Gross Beat Bank [Genre]" on YouTube/Reddit.
*   *Warning*: Many are just renamed factory presets. Look for banks that feature **custom curves** in the grid.

```

---

## FILE: 02-Data\presets\factory-preset-map.json

```json
{
  "banks": [
    {
      "name": "Momentary",
      "description": "Essential real-time effects for transitions and fills.",
      "key_slots": [
        { "slot": 2, "name": "1/2 speed", "type": "Time", "use_case": "Half-time transitions" },
        { "slot": 7, "name": "Reverse", "type": "Time", "use_case": "Swell effects" },
        { "slot": 13, "name": "Slow down", "type": "Time", "use_case": "Tape stop" }
      ]
    },
    {
      "name": "Turntablist",
      "description": "Scratching and vinyl emulation.",
      "key_slots": [
        { "slot": 1, "name": "Vinyl off", "type": "Time", "use_case": "Perfect tape stop" },
        { "slot": 5, "name": "Scratch 1", "type": "Time", "use_case": "Hip-hop cuts" }
      ]
    },
    {
      "name": "Patterns",
      "description": "Rhythmic gating and complex repetitions.",
      "key_slots": [
        { "slot": 1, "name": "1/2 beat gate", "type": "Volume", "use_case": "House/Trance pumping" },
        { "slot": 30, "name": "Shuffle", "type": "Time", "use_case": "Swing injection" }
      ]
    }
  ]
}

```

---

## FILE: 02-Data\presets\preset-library.json

```json
{
  "pluginName": "Gross Beat",
  "presetLibrary": "Factory and Recommended Presets",
  "presetBanks": [
    {
      "name": "Hip-Hop Essentials",
      "description": "Core effects for hip-hop production",
      "presets": [
        {
          "id": "hiphop-halftime",
          "name": "Hip-Hop Half-Time",
          "timeSlot": 2,
          "volumeSlot": 1,
          "settings": {
            "mix": 100,
            "attack": 20,
            "release": 35,
            "pos": 0
          },
          "description": "Classic half-time effect with smooth transitions",
          "useOn": ["Melodic loops", "Drum breaks", "Full beats"],
          "notes": "Flagship effect for hip-hop production"
        },
        {
          "id": "trap-stutter",
          "name": "Trap Stutter",
          "timeSlot": 9,
          "volumeSlot": 4,
          "settings": {
            "mix": 80,
            "attack": 8,
            "release": 15,
            "pos": 0
          },
          "description": "1/16 stutter with 1/16 gate for trap style",
          "useOn": ["Hi-hats", "Percussion", "Build-ups"]
        },
        {
          "id": "boom-bap-tape",
          "name": "Boom Bap Tape-Stop",
          "timeSlot": 19,
          "volumeSlot": 15,
          "settings": {
            "mix": 100,
            "attack": 50,
            "release": 100,
            "pos": 0
          },
          "description": "Classic tape-stop with fade for transitions",
          "useOn": ["Transitions", "Endings", "Breakdowns"]
        }
      ]
    },
    {
      "name": "Trap Modern",
      "description": "Contemporary trap and drill effects",
      "presets": [
        {
          "id": "trap-16th-roll",
          "name": "Trap 16th Roll",
          "timeSlot": 10,
          "volumeSlot": 4,
          "settings": {
            "mix": 90,
            "attack": 5,
            "release": 10,
            "pos": 0
          },
          "description": "Ultra-fast 1/32 stutter with 1/16 gate",
          "useOn": ["Hi-hat rolls", "Fast fills", "Ad-libs"]
        },
        {
          "id": "drill-half",
          "name": "Drill Half-Time",
          "timeSlot": 2,
          "volumeSlot": 2,
          "settings": {
            "mix": 100,
            "attack": 15,
            "release": 25,
            "pos": 0
          },
          "description": "Half-time with 1/4 gate for drill style",
          "useOn": ["Drill beats", "Dark sections"]
        },
        {
          "id": "melodic-gate",
          "name": "Melodic Gate",
          "timeSlot": 1,
          "volumeSlot": 9,
          "settings": {
            "mix": 70,
            "attack": 20,
            "release": 40,
            "pos": 0
          },
          "description": "Complex rhythmic gate on normal playback",
          "useOn": ["Melodies", "Pads", "Arps"]
        }
      ]
    },
    {
      "name": "EDM Performance",
      "description": "Electronic dance music performance effects",
      "presets": [
        {
          "id": "edm-build",
          "name": "EDM Build-Up",
          "timeSlot": 3,
          "volumeSlot": 16,
          "settings": {
            "mix": 100,
            "attack": 30,
            "release": 50,
            "pos": 0
          },
          "description": "Double-time with crescendo for builds",
          "useOn": ["Build-ups", "Risers", "Pre-drops"]
        },
        {
          "id": "sidechain-pump",
          "name": "Sidechain Pump",
          "timeSlot": 1,
          "volumeSlot": 18,
          "settings": {
            "mix": 100,
            "attack": 5,
            "release": 150,
            "pos": 0
          },
          "description": "4/4 sidechain simulation for groove",
          "useOn": ["Bass", "Pads", "Background elements"]
        },
        {
          "id": "glitch-drop",
          "name": "Glitch Drop",
          "timeSlot": 13,
          "volumeSlot": 25,
          "settings": {
            "mix": 80,
            "attack": 5,
            "release": 20,
            "pos": 0
          },
          "description": "Random glitch with stutter gate",
          "useOn": ["Breakdowns", "FX", "Transitions"]
        }
      ]
    },
    {
      "name": "Utility",
      "description": "Practical utility presets",
      "presets": [
        {
          "id": "bypass",
          "name": "Bypass/Normal",
          "timeSlot": 1,
          "volumeSlot": 1,
          "settings": {
            "mix": 0,
            "attack": 20,
            "release": 30,
            "pos": 0
          },
          "description": "No effect - use as reset or reference",
          "useOn": ["Any source", "Reset point"]
        },
        {
          "id": "subtle-texture",
          "name": "Subtle Texture",
          "timeSlot": 2,
          "volumeSlot": 1,
          "settings": {
            "mix": 30,
            "attack": 50,
            "release": 100,
            "pos": 25
          },
          "description": "Very light half-time with delay",
          "useOn": ["Background elements", "Atmosphere"]
        }
      ]
    }
  ],
  "midiMapping": {
    "description": "Quick reference for preset slot organization",
    "recommendedLayout": {
      "timeSlots": {
        "01-06": "Speed variations",
        "07-12": "Basic stutters",
        "13-18": "Complex patterns",
        "19-24": "Tape effects",
        "25-30": "Special effects",
        "31-36": "User custom"
      },
      "volumeSlots": {
        "01-06": "Basic gates",
        "07-12": "Complex gates",
        "13-18": "Sidechain curves",
        "19-24": "Fades",
        "25-30": "Stutter gates",
        "31-36": "User custom"
      }
    }
  },
  "source": "[SRC: IL-MAN] Image-Line Gross Beat factory presets and best practices"
}

```

---

## FILE: 02-Data\presets\slot-archetypes.json

```json
{
  "pluginName": "Gross Beat",
  "presetType": "Slot Archetypes",
  "description": "Reusable envelope patterns for Time and Volume slots",
  "timeSlotArchetypes": [
    {
      "id": "normal-playback",
      "name": "Normal Playback",
      "slotNumber": 1,
      "category": "speed",
      "envelopeShape": "Diagonal line (45°)",
      "effect": "No time manipulation",
      "pitchChange": "0 semitones",
      "useCases": ["Reference/bypass", "Default state", "Dry comparison"],
      "midiNote": "C1"
    },
    {
      "id": "half-time",
      "name": "Half-Time",
      "slotNumber": 2,
      "category": "speed",
      "envelopeShape": "Shallow downward slope (22.5°)",
      "effect": "50% speed reduction",
      "pitchChange": "-12 semitones (1 octave down)",
      "useCases": ["Hip-hop half-time", "Slow grooves", "Heavy sections"],
      "recommendedSettings": {
        "mix": 100,
        "attack": 20,
        "release": 35
      },
      "midiNote": "C#1",
      "warnings": ["May damage low-end transients - see low-end workflow"]
    },
    {
      "id": "double-time",
      "name": "Double-Time",
      "slotNumber": 3,
      "category": "speed",
      "envelopeShape": "Steep upward slope (67.5°)",
      "effect": "200% speed increase",
      "pitchChange": "+12 semitones (1 octave up)",
      "useCases": ["Energy boost", "Fast sections", "Chipmunk effect"],
      "midiNote": "D1"
    },
    {
      "id": "quarter-stutter",
      "name": "1/4 Note Stutter",
      "slotNumber": 7,
      "category": "stutter",
      "envelopeShape": "Horizontal blocks, 1 beat duration",
      "effect": "Repeats 1-beat sections",
      "useCases": ["Four-on-floor", "Steady rhythm", "Transitional fills"],
      "recommendedSettings": {
        "attack": 10,
        "release": 20
      },
      "midiNote": "F#1"
    },
    {
      "id": "eighth-stutter",
      "name": "1/8 Note Stutter",
      "slotNumber": 8,
      "category": "stutter",
      "envelopeShape": "Horizontal blocks, 1/2 beat duration",
      "effect": "Repeats 1/2-beat sections",
      "useCases": ["Faster stutters", "Bouncy rhythm", "Trap style"],
      "recommendedSettings": {
        "attack": 8,
        "release": 15
      },
      "midiNote": "G1"
    },
    {
      "id": "sixteenth-stutter",
      "name": "1/16 Note Stutter",
      "slotNumber": 9,
      "category": "stutter",
      "envelopeShape": "Horizontal blocks, 1/4 beat duration",
      "effect": "Repeats 1/4-beat sections",
      "useCases": ["Trap rolls", "Fast fills", "Glitch effects"],
      "recommendedSettings": {
        "attack": 5,
        "release": 10
      },
      "midiNote": "G#1"
    },
    {
      "id": "tape-stop",
      "name": "Tape-Stop",
      "slotNumber": 19,
      "category": "tape",
      "envelopeShape": "Steep exponential downward curve",
      "effect": "Gradual deceleration to stop",
      "pitchChange": "Progressive downward",
      "useCases": ["Transitions", "Endings", "Dramatic moments"],
      "recommendedSettings": {
        "mix": 100,
        "attack": 50,
        "release": 100
      },
      "midiNote": "F#2"
    },
    {
      "id": "random-glitch",
      "name": "Random Glitch",
      "slotNumber": 13,
      "category": "glitch",
      "envelopeShape": "Random jagged pattern",
      "effect": "Chaotic position jumping",
      "useCases": ["Experimental", "Texture", "Breakdowns"],
      "recommendedSettings": {
        "attack": 5,
        "release": 15
      },
      "midiNote": "C2"
    }
  ],
  "volumeSlotArchetypes": [
    {
      "id": "full-volume",
      "name": "Full Volume",
      "slotNumber": 1,
      "category": "utility",
      "envelopeShape": "Top line (100%)",
      "effect": "No volume change",
      "useCases": ["Reference/bypass", "Default state", "Base layer"],
      "midiNote": "C4"
    },
    {
      "id": "quarter-gate",
      "name": "1/4 Note Gate",
      "slotNumber": 2,
      "category": "gates",
      "envelopeShape": "Square wave, 1 beat on/off",
      "effect": "Four-on-the-floor gating",
      "timing": "Plays on beat, silent off-beat",
      "useCases": ["Four-on-the-floor", "House grooves", "Simple rhythms"],
      "recommendedSettings": {
        "attack": 10,
        "release": 20
      },
      "midiNote": "C#4"
    },
    {
      "id": "eighth-gate",
      "name": "1/8 Note Gate",
      "slotNumber": 3,
      "category": "gates",
      "envelopeShape": "Square wave, 1/2 beat on/off",
      "effect": "Eighth-note chopping",
      "timing": "Bouncy, syncopated rhythm",
      "useCases": ["Trap", "Funk", "Dance"],
      "recommendedSettings": {
        "attack": 8,
        "release": 15
      },
      "midiNote": "D4"
    },
    {
      "id": "sixteenth-gate",
      "name": "1/16 Note Gate",
      "slotNumber": 4,
      "category": "gates",
      "envelopeShape": "Square wave, 1/4 beat on/off",
      "effect": "Sixteenth-note chopping",
      "timing": "Fast, tight rhythm",
      "useCases": ["Trap hi-hats", "Fast percussion", "Glitch effects"],
      "recommendedSettings": {
        "attack": 5,
        "release": 10
      },
      "midiNote": "D#4"
    },
    {
      "id": "sidechain-4-4",
      "name": "Sidechain 4/4",
      "slotNumber": 18,
      "category": "sidechain",
      "envelopeShape": "Exponential recovery curve",
      "effect": "Ducks on each beat",
      "timing": "Standard kick-sidechain simulation",
      "useCases": ["Pad ducking", "Bass ducking", "Groove enhancement"],
      "recommendedSettings": {
        "attack": 5,
        "release": 150
      },
      "midiNote": "F5"
    },
    {
      "id": "crescendo",
      "name": "Crescendo",
      "slotNumber": 16,
      "category": "effects",
      "envelopeShape": "Linear ramp up",
      "effect": "Gradual volume increase",
      "useCases": ["Build-ups", "Intros", "Reveals"],
      "recommendedSettings": {
        "attack": 100,
        "release": 50
      },
      "midiNote": "D#5"
    },
    {
      "id": "fade-out",
      "name": "Fade Out",
      "slotNumber": 15,
      "category": "effects",
      "envelopeShape": "Linear ramp down",
      "effect": "Gradual volume decrease",
      "useCases": ["Endings", "Transitions", "Cool downs"],
      "recommendedSettings": {
        "attack": 50,
        "release": 100
      },
      "midiNote": "D5"
    }
  ],
  "combinationArchetypes": [
    {
      "id": "half-time-gate",
      "name": "Half-Time with Gate",
      "combination": {
        "timeSlot": "half-time",
        "volumeSlot": "sixteenth-gate"
      },
      "effect": "Slow, heavy groove with rhythmic chopping",
      "genre": "Trap, Hip-Hop",
      "useCase": "Classic trap breakdown effect"
    },
    {
      "id": "stutter-sidechain",
      "name": "Stutter with Ducking",
      "combination": {
        "timeSlot": "eighth-stutter",
        "volumeSlot": "sidechain-4-4"
      },
      "effect": "Rhythmic stutters with pumping dynamics",
      "genre": "EDM, House",
      "useCase": "Build-up and drop effects"
    },
    {
      "id": "tape-fade",
      "name": "Tape-Stop with Fade",
      "combination": {
        "timeSlot": "tape-stop",
        "volumeSlot": "fade-out"
      },
      "effect": "Smooth slow-down with volume fade",
      "genre": "All genres",
      "useCase": "Professional transitions and endings"
    }
  ],
  "source": "[SRC: IL-MAN] Image-Line Gross Beat preset documentation and standard patterns"
}

```

---

## FILE: 02-Data\presets\vibe-targets.json

```json
{
  "pluginName": "Gross Beat",
  "schemaType": "Vibe Targets",
  "description": "Mapping Gross Beat effects to the 5 vibe targets for creative direction",
  "vibeTargets": [
    {
      "id": "dark-intimate",
      "name": "Dark / Intimate",
      "characteristics": ["Warm", "Moody", "Close", "Minimal"],
      "grossBeatMapping": {
        "timeEffects": [
          {
            "effect": "Half-time",
            "slot": "C#1",
            "settings": { "mix": 80, "attack": 40, "release": 60 },
            "reasoning": "Slows tempo, deepens tone, creates space"
          },
          {
            "effect": "Gentle tape-stop",
            "slot": "F#2",
            "settings": { "mix": 60, "attack": 100, "release": 200 },
            "reasoning": "Smooth, gradual effects for intimate moments"
          }
        ],
        "volumeEffects": [
          {
            "effect": "Slow sidechain",
            "slot": "F5",
            "settings": { "mix": 70, "attack": 50, "release": 300 },
            "reasoning": "Gentle breathing without harsh pumping"
          },
          {
            "effect": "Subtle gate",
            "slot": "D4",
            "settings": { "mix": 40, "attack": 30, "release": 50 },
            "reasoning": "Rhythmic without being aggressive"
          }
        ],
        "combination": {
          "timeSlot": "C#1",
          "volumeSlot": "F5",
          "description": "Half-time with slow sidechain creates warm, intimate groove"
        }
      }
    },
    {
      "id": "warm-vintage",
      "name": "Warm / Vintage",
      "characteristics": ["Analog", "Nostalgic", "Smooth", "Classic"],
      "grossBeatMapping": {
        "timeEffects": [
          {
            "effect": "Moderate half-time",
            "slot": "C#1",
            "settings": { "mix": 70, "attack": 30, "release": 50 },
            "reasoning": "Classic hip-hop feel without modern extremes"
          },
          {
            "effect": "Tape-stop",
            "slot": "G2",
            "settings": { "mix": 100, "attack": 80, "release": 150 },
            "reasoning": "Authentic turntable/vintage effect"
          }
        ],
        "volumeEffects": [
          {
            "effect": "Quarter note gate",
            "slot": "C#4",
            "settings": { "mix": 50, "attack": 20, "release": 40 },
            "reasoning": "Classic disco/boom-bap groove"
          },
          {
            "effect": "Smooth fade",
            "slot": "D5",
            "settings": { "mix": 60, "attack": 50, "release": 100 },
            "reasoning": "Analog-style smooth transitions"
          }
        ],
        "combination": {
          "timeSlot": "G2",
          "volumeSlot": "D5",
          "description": "Tape-stop with fade for vintage transition"
        }
      }
    },
    {
      "id": "balanced-natural",
      "name": "Balanced / Natural",
      "characteristics": ["Clear", "Professional", "Transparent", "Polished"],
      "grossBeatMapping": {
        "timeEffects": [
          {
            "effect": "Light half-time",
            "slot": "C#1",
            "settings": { "mix": 50, "attack": 20, "release": 35 },
            "reasoning": "Present but not overwhelming"
          },
          {
            "effect": "Subtle double-time",
            "slot": "D1",
            "settings": { "mix": 40, "attack": 15, "release": 25 },
            "reasoning": "Energy boost without chaos"
          }
        ],
        "volumeEffects": [
          {
            "effect": "Eighth note gate",
            "slot": "D4",
            "settings": { "mix": 60, "attack": 15, "release": 30 },
            "reasoning": "Rhythmic enhancement"
          },
          {
            "effect": "Natural sidechain",
            "slot": "F5",
            "settings": { "mix": 80, "attack": 10, "release": 120 },
            "reasoning": "Transparent ducking for clarity"
          }
        ],
        "combination": {
          "timeSlot": "C1",
          "volumeSlot": "F5",
          "description": "Normal playback with sidechain for natural groove"
        }
      }
    },
    {
      "id": "bright-present",
      "name": "Bright / Present",
      "characteristics": ["Forward", "Energetic", "Clear", "Punchy"],
      "grossBeatMapping": {
        "timeEffects": [
          {
            "effect": "1/8 stutter",
            "slot": "G1",
            "settings": { "mix": 75, "attack": 10, "release": 20 },
            "reasoning": "Energetic rhythmic drive"
          },
          {
            "effect": "Double-time",
            "slot": "D1",
            "settings": { "mix": 60, "attack": 8, "release": 15 },
            "reasoning": "Speed and energy increase"
          }
        ],
        "volumeEffects": [
          {
            "effect": "Sixteenth gate",
            "slot": "D#4",
            "settings": { "mix": 70, "attack": 8, "release": 15 },
            "reasoning": "Fast, tight rhythm"
          },
          {
            "effect": "Snappy sidechain",
            "slot": "G#5",
            "settings": { "mix": 90, "attack": 5, "release": 80 },
            "reasoning": "Punchy, aggressive ducking"
          }
        ],
        "combination": {
          "timeSlot": "G1",
          "volumeSlot": "D#4",
          "description": "Stutter with 1/16 gate for bright, energetic effect"
        }
      }
    },
    {
      "id": "aggressive-extreme",
      "name": "Aggressive / Extreme",
      "characteristics": ["Intense", "Experimental", "Bold", "In-your-face"],
      "grossBeatMapping": {
        "timeEffects": [
          {
            "effect": "1/16 stutter",
            "slot": "G#1",
            "settings": { "mix": 100, "attack": 5, "release": 10 },
            "reasoning": "Maximum rhythmic intensity"
          },
          {
            "effect": "Random glitch",
            "slot": "C2",
            "settings": { "mix": 90, "attack": 3, "release": 8 },
            "reasoning": "Chaos and experimentation"
          },
          {
            "effect": "Extreme half-time",
            "slot": "C#1",
            "settings": { "mix": 100, "attack": 15, "release": 30 },
            "reasoning": "Full commitment to effect"
          }
        ],
        "volumeEffects": [
          {
            "effect": "Thirty-second gate",
            "slot": "E4",
            "settings": { "mix": 85, "attack": 3, "release": 8 },
            "reasoning": "Ultra-tight chopping"
          },
          {
            "effect": "Stutter burst",
            "slot": "C6",
            "settings": { "mix": 100, "attack": 5, "release": 12 },
            "reasoning": "Maximum impact moments"
          }
        ],
        "combination": {
          "timeSlot": "G#1",
          "volumeSlot": "C6",
          "description": "1/16 stutter with stutter gate for extreme effect"
        }
      }
    }
  ],
  "implementationNotes": {
    "description": "How to use vibe targets in production",
    "steps": [
      "Identify the desired emotional direction for your track/section",
      "Select the corresponding vibe target from the 5 options",
      "Apply the recommended Gross Beat settings",
      "Adjust Mix percentage based on how prominent the effect should be",
      "Fine-tune Attack/Release for your specific material",
      "Consider combining with other effects (EQ, reverb) to enhance the vibe"
    ],
    "dynamicApplication": "Automate between vibe targets for evolving arrangements:
      - Verse: Dark/Intimate (half-time, slow sidechain)
      - Pre-chorus: Bright/Present (stutter, 1/16 gate)  
      - Chorus: Aggressive/Extreme (full stutter, burst gate)
      - Bridge: Warm/Vintage (tape-stop, quarter gate)"
  },
  "source": "[SRC: IL-MAN] Vibe mapping based on Image-Line Gross Beat capabilities and standard production practices"
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Gross Beat)

## Rule 1: The "Half-Speed" Mix Balance
*   **Rule:** When using 1/2 speed on a melody, never use 100% wet unless it's a lo-fi track.
*   **Gross Beat Move:** Set the Mix knob to **40-60%**. This keeps the original melody's clarity while adding the "dark" half-speed texture underneath. It sounds "fuller" and more professional.

## Rule 2: Low-End Protection
*   **Rule:** Gross Beat can ruin a kick drum's impact if placed on the Master bus.
*   **Gross Beat Move:** If using Gross Beat for a "Tape Stop" on the master, automate a **High-Pass Filter** to rise at the same time. This prevents the "sub-smear" that happens when audio slows down. [SRC: REPUTABLE]

## Rule 3: The "Sibilance" Click
*   **Rule:** Switching patterns on vocals can cause clicks on "S" and "T" sounds.
*   **Gross Beat Move:** Use the **Volume Envelope** to slightly dip the volume at the start of a pattern change to hide the transition artifact.

## Rule 4: "Fake" Sidechaining
*   **Rule:** Use Gross Beat for sidechaining if you don't want to deal with routing.
*   **Gross Beat Move:** Use a Volume slot with a 1/4 note curve that dips at the start of every beat. This creates the "pumping" vibe essential for modern R&B pads.

## Rule 5: MIDI Triggering vs Automation
*   **Rule:** For complex glitching, use **MIDI Notes** (Channel 1) to trigger patterns rather than drawing 50 automation clips.
*   **Reason:** It is much easier to "play" the glitches on a keyboard and record the MIDI than it is to draw complex automation transitions. [SRC: IL-MAN]

```

---

## FILE: 02-Data\rules\buffer-limitations.md

```markdown
# Critical Rules & Limitations

To use Gross Beat effectively, you must respect the technical boundaries of its engine.

## 📏 1. The 2-Bar Hard Limit
*   **The Rule**: Gross Beat stores exactly 2 bars of audio.
*   **The Consequence**: You cannot "jump back" 3 bars. If you try to access the vertical area below the 2-bar mark, you will get silence or old, unrelated audio.
*   **Workflow Fix**: If you need longer manipulations, chain two Gross Beats or use a sampler.

## ⚠️ 2. The Safety Line Violation
*   **The Rule**: You cannot play audio that hasn't happened yet.
*   **The Consequence**: Drawing above the diagonal safety line results in silence or "clipping" to real-time playback.
*   **Workflow Fix**: Start your pattern 1 beat *below* the safety line to give yourself "headroom" to play notes early.

## 🖱️ 3. Snap & Tension Consistency
*   **The Rule**: Jagged edges in the envelope cause DC offset clicks.
*   **The Consequence**: Without "Attack" smoothing or curved nodes, your volume gates will pop.
*   **Workflow Fix**: Always keep **Click Reduction** ON and use a minimum of **2-5ms ATT** on the Volume grid for percussive material.

## 🎹 4. Slot Change Latency (Trig)
*   **The Rule**: Slot changes respect the "Trig" setting.
*   **The Consequence**: If Trig is set to "4 beats", you will hit your MIDI key and *nothing will happen* until the start of the next bar.
*   **Workflow Fix**: For live performance, use **Trig: 1/4 Beat** or **Trig: Off**.

```

---

## FILE: 02-Data\rules\cpu-and-quality.md

```markdown
# CPU Usage & Audio Quality

Gross Beat is generally efficient, but specific settings can impact performance and export quality.

## 🎛️ The "HQ Resampling" Switch
Located in the bottom right corner.

*   **Off (Linear Interpolation)**:
    *   **CPU**: Very Low.
    *   **Sound**: Slightly "lo-fi" or grainy when pitching down. High frequencies may dull.
    *   **Use Case**: Real-time monitoring, live performance, or when you *want* a gritty, old-sampler sound (Aliasing).
*   **On (Sinc Interpolation)**:
    *   **CPU**: Higher.
    *   **Sound**: Crystal clean pitch shifts. Preserves high-end clarity.
    *   **Use Case**: **Always turn this ON before rendering (exporting) your song.**

## ⚠️ The "Smart Disable" Trap
*   FL Studio has a macro "Switch smart disable for all plugins".
*   **Risk**: Gross Beat relies on a continuous buffer. If Smart Disable turns the plugin off during silence, the buffer empties.
*   **Result**: When audio starts again, Gross Beat might have a "gap" in its memory, causing the first echo/reverse to be silent.
*   **Fix**: If you hear dropouts, open Gross Beat -> Wrapper Settings -> **Deselect "Smart Disable"**.

## 💻 Latency & Buffer Size
*   Gross Beat does not add latency *processing* delay usually (0ms), BUT:
*   If your audio driver buffer size is very high (e.g., 2048 samples), the visual feedback in the Gross Beat grid might look laggy compared to the audio.
*   **Fix**: For tight visual editing, aim for < 512 samples.

```

---

## FILE: 02-Data\rules\midi-triggering-rules.json

```json
{
  "pluginName": "Gross Beat",
  "ruleType": "MIDI Triggering Rules",
  "description": "Rules and patterns for effective MIDI-controlled Gross Beat performance",
  "midiRules": [
    {
      "id": "slot-organization",
      "name": "Logical Slot Organization",
      "priority": 1,
      "description": "Organize slots for intuitive live performance",
      "recommendedLayout": {
        "timeSlots": {
          "01-06": {
            "category": "Speed",
            "assignments": [
              { "slot": 1, "note": "C1", "function": "Normal" },
              { "slot": 2, "note": "C#1", "function": "Half-time" },
              { "slot": 3, "note": "D1", "function": "Double-time" },
              { "slot": 4, "note": "D#1", "function": "Triplet" },
              { "slot": 5, "note": "E1", "function": "Variable 1" },
              { "slot": 6, "note": "F1", "function": "Variable 2" }
            ]
          },
          "07-12": {
            "category": "Basic Stutters",
            "assignments": [
              { "slot": 7, "note": "F#1", "function": "1/4 stutter" },
              { "slot": 8, "note": "G1", "function": "1/8 stutter" },
              { "slot": 9, "note": "G#1", "function": "1/16 stutter" },
              { "slot": 10, "note": "A1", "function": "1/32 stutter" },
              { "slot": 11, "note": "A#1", "function": "Triplet stutter" },
              { "slot": 12, "note": "B1", "function": "Dotted stutter" }
            ]
          },
          "13-18": {
            "category": "Complex/Experimental",
            "assignments": [
              { "slot": 13, "note": "C2", "function": "Random glitch" },
              { "slot": 14, "note": "C#2", "function": "Reverse sim" },
              { "slot": 15, "note": "D2", "function": "Chop 1" },
              { "slot": 16, "note": "D#2", "function": "Chop 2" },
              { "slot": 17, "note": "E2", "function": "Chop 3" },
              { "slot": 18, "note": "F2", "function": "Stutter burst" }
            ]
          },
          "19-24": {
            "category": "Tape Effects",
            "assignments": [
              { "slot": 19, "note": "F#2", "function": "Tape-stop" },
              { "slot": 20, "note": "G2", "function": "Slow start" },
              { "slot": 21, "note": "G#2", "function": "Spinback" },
              { "slot": 22, "note": "A2", "function": "Scratch fwd" },
              { "slot": 23, "note": "A#2", "function": "Scratch back" },
              { "slot": 24, "note": "B2", "function": "Turntable stop" }
            ]
          },
          "25-30": {
            "category": "Special",
            "assignments": [
              { "slot": 25, "note": "C3", "function": "Pitch drop 1" },
              { "slot": 26, "note": "C#3", "function": "Pitch drop 2" },
              { "slot": 27, "note": "D3", "function": "Pitch rise 1" },
              { "slot": 28, "note": "D#3", "function": "Pitch rise 2" },
              { "slot": 29, "note": "E3", "function": "Wobble" },
              { "slot": 30, "note": "F3", "function": "Vibrato" }
            ]
          },
          "31-36": {
            "category": "User/Utility",
            "description": "Reserve for custom patterns and utilities"
          }
        },
        "volumeSlots": {
          "01-06": {
            "category": "Basic Gates",
            "assignments": [
              { "slot": 1, "note": "C4", "function": "Full volume" },
              { "slot": 2, "note": "C#4", "function": "1/4 gate" },
              { "slot": 3, "note": "D4", "function": "1/8 gate" },
              { "slot": 4, "note": "D#4", "function": "1/16 gate" },
              { "slot": 5, "note": "E4", "function": "1/32 gate" },
              { "slot": 6, "note": "F4", "function": "Triplet gate" }
            ]
          },
          "07-12": {
            "category": "Complex Gates",
            "assignments": [
              { "slot": 7, "note": "F#4", "function": "Dotted 1/8" },
              { "slot": 8, "note": "G4", "function": "Dotted 1/4" },
              { "slot": 9, "note": "G#4", "function": "Mixed 1" },
              { "slot": 10, "note": "A4", "function": "Mixed 2" },
              { "slot": 11, "note": "A#4", "function": "Random gate" },
              { "slot": 12, "note": "B4", "function": "Burst 1" }
            ]
          },
          "13-18": {
            "category": "Sidechain",
            "assignments": [
              { "slot": 13, "note": "C5", "function": "Burst 2" },
              { "slot": 14, "note": "C#5", "function": "Fade in" },
              { "slot": 15, "note": "D5", "function": "Fade out" },
              { "slot": 16, "note": "D#5", "function": "Crescendo" },
              { "slot": 17, "note": "E5", "function": "Decrescendo" },
              { "slot": 18, "note": "F5", "function": "Sidechain 4/4" }
            ]
          },
          "19-24": {
            "category": "Sidechain Curves",
            "assignments": [
              { "slot": 19, "note": "F#5", "function": "Sidechain 2/4" },
              { "slot": 20, "note": "G5", "function": "Sidechain 1/4" },
              { "slot": 21, "note": "G#5", "function": "Exp fast" },
              { "slot": 22, "note": "A5", "function": "Exp slow" },
              { "slot": 23, "note": "A#5", "function": "Log curve" },
              { "slot": 24, "note": "B5", "function": "S-curve" }
            ]
          },
          "25-30": {
            "category": "Stutter Gates",
            "assignments": [
              { "slot": 25, "note": "C6", "function": "Stutter 1" },
              { "slot": 26, "note": "C#6", "function": "Stutter 2" },
              { "slot": 27, "note": "D6", "function": "Stutter 3" },
              { "slot": 28, "note": "D#6", "function": "Stutter 4" },
              { "slot": 29, "note": "E6", "function": "Half vol" },
              { "slot": 30, "note": "F6", "function": "Quarter vol" }
            ]
          },
          "31-36": {
            "category": "User/Utility",
            "description": "Reserve for custom patterns"
          }
        }
      }
    },
    {
      "id": "velocity-mapping",
      "name": "Velocity-Based Intensity",
      "description": "Use note velocity to control effect intensity",
      "velocityRanges": {
        "subtle": {
          "range": "1-32",
          "mix": "25%",
          "useCase": "Background texture, subtle enhancement"
        },
        "light": {
          "range": "33-64",
          "mix": "50%",
          "useCase": "Moderate effect, blend with dry"
        },
        "medium": {
          "range": "65-96",
          "mix": "75%",
          "useCase": "Standard effect, prominent"
        },
        "full": {
          "range": "97-127",
          "mix": "100%",
          "useCase": "Maximum impact, full commitment"
        }
      },
      "applicationExample": {
        "verse": "Medium velocity (65-80) for balanced half-time",
        "preChorus": "Light velocity (40-60) building to chorus",
        "chorus": "Full velocity (100-127) for maximum stutter impact"
      }
    },
    {
      "id": "performance-patterns",
      "name": "Common Performance Patterns",
      "patterns": [
        {
          "name": "Hip-Hop Section Change",
          "description": "Switch from normal to half-time at section boundaries",
          "midi": "Hold C1 (normal), then trigger C#1 (half-time) on bar 1 of new section"
        },
        {
          "name": "Trap Fill",
          "description": "Quick stutter burst on transitions",
          "midi": "Trigger G#1 (1/16 stutter) on beat 4 of bar 4, return to normal on bar 1"
        },
        {
          "name": "Build-Up Energy",
          "description": "Gradually increase stutter speed",
          "midi": "Sequence: F#1 (1/4) → G1 (1/8) → G#1 (1/16) over 2 bars"
        },
        {
          "name": "Tape Transition",
          "description": "Dramatic tape-stop for endings",
          "midi": "Trigger F#2 on beat 3 of final bar, let play to silence"
        },
        {
          "name": "Rhythmic Gate Performance",
          "description": "Live gate switching for dynamic rhythm",
          "midi": "Right hand: Time slot (held). Left hand: Volume slots (D#4, F5, etc.)"
        }
      ]
    },
    {
      "id": "timing-quantization",
      "name": "Timing and Quantization Rules",
      "rules": [
        {
          "rule": "Always quantize MIDI notes to grid",
          "reason": "Ensures tight synchronization with beat",
          "gridSettings": {
            "hipHop": "1/8 or 1/16",
            "trap": "1/16",
            "edm": "1/16 or 1/32"
          }
        },
        {
          "rule": "Use consistent timing for held slots",
          "reason": "Switching slots on the beat maintains groove",
          "example": "Switch from C1 to C#1 exactly on bar 1, not in between"
        },
        {
          "rule": "Stutter triggers can be off-beat for syncopation",
          "reason": "Intentional off-grid creates interesting rhythms",
          "caution": "Only when deliberate, not accidental"
        }
      ]
    }
  ],
  "hardwareIntegration": {
    "drumPads": {
      "recommendedLayout": "4x4 grid with most-used slots on easy reach",
      "colorCoding": "Different colors for Time (green) and Volume (orange) slots"
    },
    "keyboard": {
      "splitMode": "Left hand (C1-B3) = Time, Right hand (C4-B6) = Volume",
      "velocitySensitivity": "Enable for dynamic expression"
    },
    "controllers": {
      "buttons": "Assign to specific transitions (tape-stop, etc.)",
      "faders": "Map to Mix, Attack, Release for real-time adjustment"
    }
  },
  "source": "[SRC: IL-MAN] Image-Line Gross Beat MIDI implementation and performance guidelines"
}

```

---

## FILE: 02-Data\rules\production-workflows.json

```json
{
  "pluginName": "Gross Beat",
  "ruleType": "Production Workflows",
  "description": "Structured decision trees for common Gross Beat production scenarios",
  "workflows": [
    {
      "id": "effect-selection",
      "name": "Choosing the Right Effect",
      "question": "What do I want to achieve?",
      "decisionTree": {
        "slowDown": {
          "question": "Do you want to maintain the original pitch relationship?",
          "yes": {
            "recommendation": "Use Newtime or Pitcher for formant-preserving slowdown",
            "note": "Gross Beat always changes pitch with speed"
          },
          "no": {
            "question": "Do you want a smooth or dramatic slowdown?",
            "smooth": {
              "recommendation": "Half-time slot (C#1) with 100% Mix",
              "settings": { "attack": 20, "release": 40, "mix": 100 },
              "application": "Hip-hop verses, breakdowns"
            },
            "dramatic": {
              "recommendation": "Tape-stop slot (F#2) with fade",
              "settings": { "attack": 50, "release": 100, "mix": 100 },
              "application": "Transitions, endings"
            }
          }
        },
        "rhythmic": {
          "question": "What type of rhythm?",
          "steady": {
            "recommendation": "Gate patterns (Volume slots)",
            "options": {
              "fourOnFloor": "Slot 2 (C#4) - 1/4 gate",
              "bouncy": "Slot 3 (D4) - 1/8 gate",
              "trap": "Slot 4 (D#4) - 1/16 gate"
            }
          },
          "repetitive": {
            "recommendation": "Stutter patterns (Time slots)",
            "options": {
              "moderate": "Slot 7 (F#1) - 1/4 stutter",
              "fast": "Slot 8 (G1) - 1/8 stutter",
              "trap": "Slot 9 (G#1) - 1/16 stutter"
            }
          },
          "pumping": {
            "recommendation": "Sidechain curves (Volume slots 18-24)",
            "options": {
              "standard": "Slot 18 (F5) - 4/4 sidechain",
              "halfTime": "Slot 19 (F#5) - 2/4 sidechain",
              "snappy": "Slot 21 (G#5) - Fast recovery"
            }
          }
        },
        "texture": {
          "question": "What kind of texture?",
          "glitch": {
            "recommendation": "Random patterns (Slot 13 - C2)",
            "settings": { "attack": 5, "release": 15, "mix": 70 }
          },
          "movement": {
            "recommendation": "Varying patterns with automation",
            "technique": "Automate between slots for evolving texture"
          },
          "space": {
            "recommendation": "Pos control manipulation",
            "settings": { "pos": 25, "mix": 40 },
            "effect": "Subtle delay/echo texture"
          }
        }
      }
    },
    {
      "id": "instrument-application",
      "name": "What to Apply Gross Beat To",
      "question": "What instrument/track?",
      "decisionTree": {
        "drums": {
          "question": "What part of the drums?",
          "fullKit": {
            "recommendation": "Bus processing recommended",
            "effects": ["Half-time", "Gate", "Stutter"],
            "warning": "Check phase correlation"
          },
          "hihats": {
            "recommendation": "1/16 gate (D#4) for trap style",
            "alternative": "Stutter patterns for rolls"
          },
          "kick": {
            "recommendation": "Avoid time manipulation on solo kicks",
            "alternative": "Volume sidechain for groove"
          },
          "snare": {
            "recommendation": "Stutter effects work well",
            "suggestion": "1/8 stutter for fills"
          }
        },
        "bass": {
          "warning": "LOW-END SMEAR RISK",
          "recommendation": "See 'low-end-smear' rule",
          "safeMethods": [
            "Bus processing only",
            "Parallel processing with high-pass",
            "Volume effects only (no time)"
          ]
        },
        "vocals": {
          "question": "What effect?",
          "stutter": {
            "recommendation": "1/16 or 1/32 stutter",
            "settings": { "attack": 10, "mix": 80 },
            "application": "Ad-libs, fills, transitions"
          },
          "chop": {
            "recommendation": "Stutter gate (C6) with melody",
            "application": "Melodic chops, hooks"
          },
          "texture": {
            "recommendation": "Subtle half-time",
            "settings": { "mix": 40, "attack": 30 }
          }
        },
        "melodic": {
          "question": "What type?",
          "loops": {
            "recommendation": "Half-time for groove change",
            "alternative": "Gate for rhythmic interest"
          },
          "pads": {
            "recommendation": "Sidechain ducking",
            "effect": "Makes space for other elements"
          },
          "leads": {
            "recommendation": "Stutter for energy",
            "caution": "Don't overuse - save for moments"
          }
        }
      }
    },
    {
      "id": "mix-context",
      "name": "Mix Context Decision",
      "question": "Where in the mix chain?",
      "decisionTree": {
        "individualTrack": {
          "pros": [
            "Specific control per instrument",
            "Can customize per element",
            "Easy to adjust"
          ],
          "cons": [
            "More CPU usage",
            "Can sound disjointed",
            "Phase issues possible"
          ],
          "bestFor": [
            "Vocal effects",
            "Specific drum elements",
            "Lead instruments"
          ]
        },
        "groupBus": {
          "pros": [
            "Cohesive effect",
            "Saves CPU",
            "Unified groove"
          ],
          "cons": [
            "Less individual control",
            "All elements affected equally"
          ],
          "bestFor": [
            "Drum bus",
            "Instrument groups",
            "Background elements"
          ]
        },
        "masterBus": {
          "pros": [
            "Global effect",
            "Section transitions",
            "Maximum cohesion"
          ],
          "cons": [
            "Affects everything",
            "Cannot isolate elements",
            "High commitment"
          ],
          "bestFor": [
            "Drop transitions",
            "Half-time sections",
            "Full arrangement effects"
          ],
          "caution": "Commit to audio before mastering stage"
        }
      }
    }
  ],
  "quickDecisionMatrix": {
    "iWant": {
      "halfTime": { "timeSlot": "C#1", "mix": 100, "applyTo": "Melodic, drums, full mix" },
      "stutter": { "timeSlot": "G#1", "mix": 80, "attack": 10, "applyTo": "Builds, fills, transitions" },
      "gate": { "volumeSlot": "D#4", "mix": 70, "attack": 10, "applyTo": "Hi-hats, percussion, synths" },
      "sidechain": { "volumeSlot": "F5", "mix": 100, "attack": 5, "release": 150, "applyTo": "Bass, pads, background" },
      "tapeStop": { "timeSlot": "F#2", "mix": 100, "attack": 50, "applyTo": "Transitions, endings" }
    }
  },
  "source": "[SRC: IL-MAN] Image-Line Gross Beat workflows and professional production practices"
}

```

---

## FILE: 02-Data\rules\safety-warnings.json

```json
{
  "pluginName": "Gross Beat",
  "ruleType": "Safety and Warnings",
  "description": "Critical safety rules to prevent audio damage and ensure professional results",
  "rules": [
    {
      "id": "low-end-smear",
      "name": "Low-End Smear Warning",
      "severity": "CRITICAL",
      "priority": 1,
      "condition": "Applying time manipulation (half-time, stutter) to sub-bass or 808s",
      "warning": "Time manipulation destroys transient definition in low frequencies, causing smearing and phase issues",
      "symptoms": [
        "Kick sounds 'flabby' or undefined",
        "808 loses punch and impact",
        "Low end sounds 'wobbly' or unstable",
        "Phase correlation meter shows issues",
        "Bass sounds 'washed out' in mono"
      ],
      "solutions": [
        {
          "method": "Parallel Processing",
          "description": "Apply Gross Beat to a duplicate track, blend with dry bass",
          "steps": [
            "Duplicate the bass/808 track",
            "Apply Gross Beat to duplicate only",
            "Mix: 30-50% to preserve low-end punch",
            "High-pass the Gross Beat track at 100-150Hz"
          ]
        },
        {
          "method": "Bus Processing",
          "description": "Apply Gross Beat to the full mix bus instead of individual bass",
          "steps": [
            "Move Gross Beat to mix/master bus",
            "Individual bass remains unaffected",
            "Effect applies to mid/high frequencies only",
            "Preserves low-end integrity"
          ]
        },
        {
          "method": "Pre-EQ",
          "description": "High-pass before Gross Beat, blend with dry low-end",
          "steps": [
            "Add high-pass filter before Gross Beat",
            "Cut below 100-150Hz",
            "Parallel route dry low-end around effect",
            "Blend wet/dry signals"
          ]
        }
      ],
      "prevention": "Never apply half-time or stutter directly to solo bass/808 tracks",
      "whenToBreakRule": "Only for intentional 'degraded' texture effects, clearly labeled as experimental"
    },
    {
      "id": "click-prevention",
      "name": "Click and Pop Prevention",
      "severity": "HIGH",
      "priority": 2,
      "condition": "Sharp envelope transitions in stutter or gate patterns",
      "warning": "Attack times below 5ms often create digital clicks and artifacts",
      "symptoms": [
        "Hearing clicks on envelope transitions",
        "Popping sounds during stutters",
        "Digital artifacts in quiet sections",
        "Harsh, unmusical transitions"
      ],
      "solutions": [
        {
          "method": "Increase Attack",
          "description": "Set minimum 10ms attack for all stutter/gate patterns",
          "recommendedValues": {
            "tightStutter": "10-15ms",
            "smoothStutter": "20-30ms",
            "gentleEffect": "40-60ms"
          }
        },
        {
          "method": "Increase Release",
          "description": "Set minimum 15ms release for smooth transitions",
          "recommendedValues": {
            "tight": "15-25ms",
            "standard": "30-50ms",
            "smooth": "60-100ms"
          }
        },
        {
          "method": "Envelope Smoothing",
          "description": "Use Gross Beat's built-in smoothing feature",
          "steps": [
            "Enable 'Smooth' in envelope options",
            "Reduces sharp transitions",
            "Adds natural curve to steps"
          ]
        }
      ],
      "prevention": "Always start with Attack: 20ms, Release: 30ms as safe defaults",
      "exception": "Intentional 'glitch' aesthetic may use 0-5ms for digital character"
    },
    {
      "id": "tempo-sync",
      "name": "Tempo Sync Requirement",
      "severity": "MEDIUM",
      "priority": 3,
      "condition": "Gross Beat not tempo-synced to project",
      "warning": "Effects will drift from beat, creating sloppy, unprofessional sound",
      "symptoms": [
        "Stutters don't align with beat",
        "Gate patterns feel 'off'",
        "Effect timing drifts over time",
        "Sounds unprofessional and amateur"
      ],
      "solutions": [
        {
          "method": "Enable Tempo Sync",
          "description": "Turn on tempo sync in Gross Beat settings",
          "steps": [
            "Open Gross Beat interface",
            "Enable 'Sync' button",
            "Set grid division (1/16 recommended)",
            "Verify alignment with project tempo"
          ]
        },
        {
          "method": "Use Grid Snap",
          "description": "Snap envelope drawing to beat divisions",
          "steps": [
            "Enable 'Snap' in envelope editor",
            "Select appropriate division (1/8 or 1/16)",
            "Draw envelopes with snap active",
            "Quantize after drawing if needed"
          ]
        }
      ],
      "prevention": "Always verify tempo sync is enabled before programming envelopes",
      "exception": "Freehand experimental effects may intentionally be unsynced"
    },
    {
      "id": "commit-to-audio",
      "name": "Commit to Audio Best Practice",
      "severity": "MEDIUM",
      "priority": 4,
      "condition": "Leaving Gross Beat as real-time plugin in final mix",
      "warning": "Real-time processing adds CPU load and can cause dropouts during playback/export",
      "whenToCommit": [
        "Final mix stage",
        "CPU-intensive projects",
        "Before mastering",
        "When arrangement is locked"
      ],
      "commitProcess": {
        "description": "Render Gross Beat effect to audio file",
        "steps": [
          "Solo the track with Gross Beat",
          "Arm for recording if needed",
          "Render to audio (WAV/FLAC)",
          "Disable/remove Gross Beat plugin",
          "Replace with rendered audio file",
          "Keep original as backup (muted track)"
        ],
        "benefits": [
          "Reduces CPU usage",
          "Prevents dropouts",
          "Locks effect timing",
          "Simplifies mix",
          "Faster export"
        ]
      },
      "alternative": "Use FL Studio's 'Freeze' function for temporary CPU relief",
      "prevention": "Plan to commit effects once arrangement is finalized"
    },
    {
      "id": "buffer-overflow",
      "name": "Buffer Position Warning",
      "severity": "LOW",
      "priority": 5,
      "condition": "Pos control or envelope extends beyond buffer boundaries",
      "warning": "Trying to read audio that hasn't been recorded yet",
      "symptoms": [
        "Silence instead of expected audio",
        "Effect cuts out unexpectedly",
        "Red warning indicator in interface",
        "Inconsistent playback"
      ],
      "solutions": [
        {
          "method": "Reset Position",
          "description": "Set Pos to 0% for real-time playback",
          "steps": [
            "Set Pos knob to 0%",
            "Verify envelope doesn't exceed buffer",
            "Check for red warning indicators",
            "Test playback"
          ]
        },
        {
          "method": "Adjust Envelope",
          "description": "Redraw envelope within buffer bounds",
          "steps": [
            "Open envelope editor",
            "Keep envelope within visible grid",
            "Use 'Snap to grid' for safety",
            "Test at different project positions"
          ]
        }
      ],
      "prevention": "Always start with Pos at 0% unless intentionally using delay effect"
    }
  ],
  "safetyChecklist": [
    "Attack is 10ms or higher",
    "Release is 15ms or higher",
    "Mix level is appropriate for context",
    "Tempo sync is enabled",
    "Low-end instruments checked for smear",
    "Pos is within buffer bounds",
    "No clicking on transitions",
    "Effect aligns with beat"
  ],
  "source": "[SRC: IL-MAN] Image-Line Gross Beat documentation and professional mixing best practices"
}

```

---

## FILE: 03-Workflows\advanced\generative-variation.md

```markdown
# Generative Variation (Self-Playing Effects)

For "Intelligent Dance Music" (IDM) or just keeping a beat interesting without manual automation.

## 🎲 The Setup

1.  **Controller**: You need a signal to change the Gross Beat slots automatically.
    *   **Option A**: Fruity Peak Controller (LFO).
    *   **Option B**: Fruity Formula Controller (Math).
2.  **Target**: The **Time Slot** or **Volume Slot** selection slider.

## 🌊 Workflow: The "Drifting" LFO
1.  **Peak Controller**: Add to any mixer track (doesn't matter where, mute it).
    *   **LFO Shape**: Random (Stepped).
    *   **Speed**: Slow (e.g., changes once per bar).
2.  **Link**:
    *   Go to Gross Beat.
    *   Right-click the **Time Slot** selector (the vertical list of 1-36).
    *   **Link to Controller** -> Select "Peak Ctrl - LFO".
    *   **Mapping Formula**: This is crucial. You don't want to jump between ALL 36 slots. You maybe only want slots 1-4.
        *   Formula: `Input * 0.1` (Limits the range to the first 10% of slots).
3.  **Result**: Every bar, Gross Beat randomly picks a different stutter pattern from your first 4 slots.

## 🧮 Workflow: The "Chaos" Trigger
**Goal**: Only glitch when the kick drum hits hard.
1.  **Peak Controller**: Put it on the **Kick Drum** channel.
2.  **Link**: Link the Peak Controller **Peak** (envelope) to the Gross Beat **Time Mix** knob.
3.  **Result**:
    *   When the Kick hits -> Peak goes up -> Mix goes up -> Glitch happens.
    *   When silence -> Mix goes to 0 -> Clean audio.
    *   *Refinement*: Use the "Base" knob in Peak Controller to invert this (Glitch only during silence/tails).

## 🎹 Complex Polyrhythms
*   If your song is 4/4, set your automation LFO to a speed of **3 beats**.
*   The effect pattern will "phase" against the drum beat, creating a constantly evolving interaction that never repeats the same way twice.

```

---

## FILE: 03-Workflows\advanced\linked-slots-combo-effects.md

```markdown
# Linked Slots: Creating Complex Combo Effects

One of Gross Beat's most powerful but overlooked features is the ability to link a **Time Slot** (Green) with a **Volume Slot** (Orange). This allows you to trigger a specific pitch effect AND a specific volume gate with a single MIDI note.

## 🔗 The Concept
Normally, Time and Volume slots are independent.
*   You press **C4** -> Triggers Time Slot 1.
*   You press **C1** -> Triggers Volume Slot 1.

With **Linking**, pressing **C4** can trigger Time Slot 1 *AND* Volume Slot 1 simultaneously.

## 🛠️ How to Link
1.  **Select the Time Slot** you want to be the "Master" (e.g., Slot 1).
2.  **Select the Volume Slot** you want to pair it with (e.g., Slot 1).
3.  **Right-Click** the **Time Slot button**.
4.  Select **"Link to volume slot"**.
5.  *Visual Check*: A small chain link icon or indicator may appear (depending on skin/version), or simply testing it will confirm. Now, whenever you select that Green Time Slot, the Orange Volume Slot follows automatically.

## 🧪 Combo Recipes

### 1. The "Clean Scratch" (Scratch + Mute)
*   **Time Slot**: A complex scratch pattern (zig-zags).
*   **Volume Slot**: A pattern that is **100% Silent** (Bottom) everywhere *except* during the "forward" movements of the scratch.
*   **Result**: This cleans up the scratch, silencing the "rewind" noise if you only want to hear the forward cuts (creating a "Transformer" scratch effect).

### 2. The "Gated Tape Stop"
*   **Time Slot**: A slow 1-bar Tape Stop (diagonal down).
*   **Volume Slot**: A 1/16th note Trance Gate.
*   **Result**: The audio slows down to a halt, but it "stutters" rhythmically as it falls. This adds a rhythmic grid to the pitch drop, making it easier to mix into a beat.

### 3. The "Reverse Swell"
*   **Time Slot**: 1-Bar Reverse.
*   **Volume Slot**: A slow Fade-In (0% to 100%).
*   **Result**: The reverse audio doesn't just start abruptly; it swells in from silence, creating a perfect transition effect for drops.

## ⚠️ Important Note
*   Linking is stored in the **Preset**. If you change presets, links are lost.
*   If you trigger a Volume slot manually (via C1-B3), it will *override* the link temporarily until the Time slot is triggered again.

```

---

## FILE: 03-Workflows\advanced\live-performance-and-scripting.md

```markdown
# Live Performance & Scripting

Gross Beat can be the centerpiece of a live set, but it requires setup to avoid "train wrecks" (silence/clicks).

## 🐍 Python MIDI Scripting (The "API" Hack)
FL Studio does not have a specific API just for Gross Beat, but it has a generic MIDI Scripting API.

**The Concept**:
You write a Python script that intercepts buttons on your MIDI controller and sends "Note On" messages to FL Studio.
*   **Button A** -> Sends Note C1 (Slot 1 Volume).
*   **Button B** -> Sends Note C4 (Slot 1 Time).

**Why Script?**
*   **Feedback**: You can tell the controller to light up the LED for the active slot.
*   **Macros**: You can program one button to switch the Time Slot AND the Volume Slot simultaneously (linking them via code instead of presets).

## 🎛️ The "Mix Knob" Automation Secret
A common rookie mistake is automating the "On/Off" button. This causes clicks.
**The Pro Move**: Automate the **Mix Level** knob in the Mixer Rack (the wet/dry knob next to the plugin name).

1.  **Right-Click** the Mix knob -> **Create Automation Clip**.
2.  **Smoothing**: The Mix knob naturally crossfades dry and wet signal.
3.  **Creative Use**:
    *   **50% Mix**: Creates a flanger/chorus effect with time-stretched signals.
    *   **0% to 100% Ramp**: Used for "Tape Stop" transitions (Slowly fading into the stop).

## 🚦 "Init Song with this position"
The #1 Annoyance: You press play, and Gross Beat switches to a random slot because you clicked it 5 minutes ago.

**The Fix**:
1.  Set Gross Beat to **Slot 1 (Empty/Bypass)**.
2.  Right-Click the **Slot Selector** (or the Mix knob).
3.  Select **"Init song with this position"**.
4.  Now, every time you hit Stop/Start, FL Studio forces Gross Beat back to the "Safe" state.

## 🎹 Performance Sets
If you are performing live, organize your slots!
*   **Slots 1-4**: Repeats (1/8, 1/4, 1/2).
*   **Slots 5-8**: Reverses.
*   **Slots 9-12**: Tape Stops.
*   **Color Coding**: Rename your slots! (Right-click slot -> Rename). "STOP", "REV", "GLITCH".

```

---

## FILE: 03-Workflows\advanced\multiband-processing.md

```markdown
# Multiband Gross Beat (The "Patcher" Secret)

One of the biggest limitations of Gross Beat is that it affects the *entire* signal. But in modern Hip-Hop and R&B, you often want to slow down the melody while keeping the hi-hats crisp, or reverse the high-end while keeping the bass solid.

**Solution**: Use FL Studio's **Patcher** to split the frequency bands.

## 🛠️ The Setup

1.  **Load Patcher**: Instead of loading Gross Beat directly, load **Patcher** on your Mixer track.
2.  **Add Plugins**: Inside Patcher, add:
    *   **Maximus** (or Frequency Splitter).
    *   **Gross Beat**.
3.  **Routing**:
    *   **Input** -> **Maximus**.
    *   **Maximus Low Output** -> **Gross Beat** -> **Output**.
    *   **Maximus Mid/High Output** -> **Output** (Bypassing Gross Beat).

## 🎹 Use Case 1: The "Drake" Underwater Filter
**Goal**: Slow down and pitch-shift the low-mids of a sample, but keep the "air" and texture of the high-end intact (or vice-versa).

1.  **Split**: Set Frequency Splitter to ~500Hz.
2.  **Process**: Apply **1/2 Speed** to the **Low Band** only.
3.  **Result**: You get a deep, thick harmonic foundation (the slowed-down part) mixed with the original speed high frequencies. This creates a massive, layered texture that sounds like two different samples playing at once.

## 🎹 Use Case 2: Glitch Hi-Hats, Solid Bass
**Goal**: Apply complex stutter edits to a drum loop without ruining the kick drum's groove.

1.  **Split**: Set crossover to ~200Hz.
2.  **Process**: Apply "Repeater/Stutter" patterns to the **High Band** only.
3.  **Result**: The Kick and Sub stay perfectly steady (anchoring the beat), while the snares and hi-hats glitch out like crazy on top.

## 🧠 Pro Tip: Parallel Processing
Even without frequency splitting, you can use Patcher to run **Two Gross Beats in Parallel**.
*   **Chain A**: 1/2 Speed.
*   **Chain B**: Reverse.
*   **Mix**: Blend them together for a sound impossible to achieve with a single instance.

```

---

## FILE: 03-Workflows\advanced\sidechain-and-pumping.md

```markdown
# Sidechain & "The Pump" (Volume Shaping)

For House, R&B, and "Future Bass", dynamic volume shaping is essential. Gross Beat is often cleaner than a compressor for this.

## 🦆 The "Duck" (Pseudo-Sidechain)

**Why Gross Beat?**
*   **Compressors**: React to input (can be messy, clicky, release time varies).
*   **Gross Beat**: 100% predictable, sample-accurate volume curve repeated every beat.

**The Curve**:
1.  **Volume Grid**: Snap to **1/4 Beat**.
2.  **Draw**:
    *   **Start**: 0% (Silence).
    *   **End**: 100% (Full).
    *   **Curve**: **Single Curve** with tension dragged UP (convex).
    *   *Shape*: Looks like a "Hill" rising from the ocean.
3.  **Result**: The audio "ducks" instantly on the beat (making room for the Kick) and swells back up.

## 🌊 The "LFO" Tremolo
**Goal**: Create movement in static pads.
1.  **Volume Grid**: Snap to **1/16**.
2.  **Draw**: A Sine Wave shape (Up/Down/Up/Down).
3.  **Mix Knob**:
    *   **100%**: Hard chopping (Helicopter effect).
    *   **30%**: Subtle shimmering movement.

## 🥁 Transient Shaping (Snare Tightener)
**Goal**: Make a sloppy snare sample sound tight and punchy.
1.  **Volume Grid**:
    *   **Attack**: 100% Volume.
    *   **Sustain**: Drop volume sharply after the initial hit (e.g., at the 1/16th mark).
    *   **Release**: Silence.
2.  **Result**: You artificially shorten the decay of the drum, removing room noise or reverb tails, making the beat sound "dry" and "in your face."

```

---

## FILE: 03-Workflows\by-context\glitching-vocals.md

```markdown
# Glitching Vocals

Gross Beat is a weapon of choice for IDM, Glitch Hop, and Hyperpop vocal processing.

## ✂️ Stutter Effects

The key to glitches is **Time Repetition**.

1.  **The "Repeater" Curve**:
    *   To repeat the first 1/4 beat four times:
    *   Draw a diagonal line (normal speed) for the first 1/4 beat.
    *   For the second 1/4 beat, drop the envelope back down to the start of the previous beat (Time Travel back 1/4 beat).
    *   Repeat this "sawtooth" shape.
2.  **Tool Shortcut**:
    *   Right-click in the Time Grid -> **Tools** -> **Repeater**.
    *   (If available in your version) Or manually draw the "Sawtooth" shape.

## 🔄 Reverse Reverbs

1.  **Context**: Great for vocal transitions.
2.  **Slot Setup**:
    *   Create a "Reverse" Time slot (Line goes from Bottom-Left to Top-Right).
3.  **Workflow**:
    *   Send your vocal to a Reverb Aux track.
    *   Put Gross Beat on the **Reverb Aux** track (not the dry vocal).
    *   Trigger the Reverse slot on the Reverb tail.
    *   *Result*: Swelling, ghostly reverse tails while the main vocal stays intelligible.

## 🤖 The "CD Skip" Artifact

1.  **Snap**: Set to extremely small intervals (1/64).
2.  **Pattern**: Create a very short loop (repeating 1/64th note).
3.  **Result**: A robotic, metallic "buzz" or tone. The pitch of the tone is determined by the length of the loop.
    *   *Creative Tip*: Automate the length of the loop to create rising/falling pitch risers.

## 🎛️ Click Management
*   Glitching is inherently "clicky" because you are slicing waveforms abruptly.
*   **Click Reduction**: Turn it ON.
*   **Mix**: Sometimes keeping the glitch track slightly lower in volume helps hide the artifacts.

```

---

## FILE: 03-Workflows\by-context\melody-reshaping-workflow.md

```markdown
# Melody Reshaping Workflow

Turn a boring 4-bar melody loop into a complex, evolving motif.

## 🎼 The "remix" approach

1.  **Input Material**: A simple arpeggio or chord progression.
2.  **The Goal**: Change the rhythm and pitch without changing the synth patch.

## 🛠️ Techniques

### 1. Pitch Shifting (The "Trap" Octave)
*   **Concept**: Playing audio at 2x speed raises pitch by +1 Octave. Playing at 0.5x speed lowers by -1 Octave.
*   **Workflow**:
    *   Create a slot that plays at **Double Speed** for 1 beat.
    *   Create a slot that plays at **Half Speed** for 1 beat.
    *   Switch between them to create melody jumps that weren't in the original MIDI.

### 2. Time Reordering (The "Jigsaw")
*   You can "scramble" the playback order.
*   *Example*: Play Beat 2 during Beat 1, and Beat 1 during Beat 2.
*   **Drawing**:
    *   **Beat 1 Segment**: Draw the envelope starting at the "Beat 2" vertical position (reading from the future/buffer? No, you can only read from the past).
    *   *Correction*: You can only read from the PAST. So you can play Beat 1 during Beat 2. You cannot play Beat 2 during Beat 1 (unless you delay the whole track by 1 bar).
    *   **The "Delayed" Workflow**:
        *   Accept that your melody will be delayed by 1 Bar.
        *   Now you have access to the *entire* previous bar in the buffer.
        *   You can re-sequence the beats in any order: `4 - 1 - 3 - 2`.

## 🎹 Pattern Chaining
1.  Set up 4 different "Remix" slots.
2.  Use a **Fruity Keyboard Controller** to sequence them in the Piano Roll.
3.  Treat the Gross Beat slots as "Key Switches" for your melody.

```

---

## FILE: 03-Workflows\by-context\sample-chopping-live.md

```markdown
# Live Sample Chopping

The essence of Hip-Hop is "Chopping Samples"—taking a loop and rearranging it. Usually, this is done in Slicex or the Playlist. However, Gross Beat can do this **non-destructively** in real-time.

## 🔪 The Concept: "Time Remapping"
Instead of cutting the audio file, you tell Gross Beat: "Play Beat 3 now," then "Play Beat 1 now."

## 🎹 Setup: The "Chop Bank"

1.  **The Grid**:
    *   Gross Beat's vertical axis is the **Past**.
    *   Top = Now (Beat 4, if we are at Beat 4).
    *   Bottom = 2 Bars Ago.
2.  **Creating "Jump" Slots**:
    *   **Slot 1 (Normal)**: Diagonal Line.
    *   **Slot 2 (Repeat Beat 1)**: A sawtooth wave that constantly replays the *first* beat of the bar.
    *   **Slot 3 (Repeat Beat 2)**: A sawtooth wave that plays the *second* beat.
        *   *How*: If the playhead is at Beat 1, you can't play Beat 2 (it hasn't happened).
        *   *Constraint*: You can only remix **audio that has already played**.
3.  **The "Delay" Strategy**:
    *   Let the loop play once to fill the buffer.
    *   Now, in the *second* bar, you can jump back to ANY part of the first bar.
    *   **Slot Setup**:
        *   Create slots that point to "Beat 1", "Beat 2", "Beat 3" relative to the current bar line.

## 🎮 The MPC Workflow
1.  Map your MIDI Controller pads to Gross Beat Slots.
2.  Set **Trig** to **1/16** or **Off** (for finger drumming).
3.  Set **Hold** to **On**.
4.  **Perform**:
    *   Play the loop.
    *   Hit pads to "stutter" specific parts or jump back to the snare.
    *   *Result*: You are "playing" the effect like an instrument.

## 🔄 Randomization (Generative Hip-Hop)
1.  Use FL Studio's **Peak Controller** LFO.
2.  Link the LFO to Gross Beat's **Time Slot** selector.
3.  Set the LFO to **Random** (square or hold).
4.  *Result*: Gross Beat will randomly jump between your chop patterns, creating endless variations of the sample loop automatically.

```

---

## FILE: 03-Workflows\by-genre\breakcore-idm-complex-chopping.md

```markdown
# Breakcore & IDM: The "Infinite Chop" Workflow

Breakcore and IDM (Intelligent Dance Music) require chaos that feels controlled. Gross Beat is the standard tool for this because it allows for "fractal" editing—chopping the chops.

## 🪓 Workflow 1: The "Click & Record" (Performance Chopping)
Instead of drawing automation curves manually (which is slow), "perform" the glitches.

1.  **Setup**:
    *   Load your drum break (Amen, Think, etc.).
    *   Load Gross Beat with a bank full of different stutters/reverses.
2.  **Record**:
    *   Right-click the **Record** button in FL Studio -> **Automation**.
    *   Hit Play.
    *   Click different Gross Beat slots in real-time on the rhythm.
3.  **Refine**:
    *   Open the Playlist. You will see an Automation Clip for the "Slot" parameter.
    *   **Quantize**: Use the "Articulator" tools or simply snap the automation points to the grid to ensure your messy clicks lock to 1/16th notes.

## 🔄 Workflow 2: Resampling "Ad Infinitum"
The complex, metallic texture of Breakcore comes from processing audio that has *already* been processed.

1.  **Layer 1**: Apply a basic "Stutter" pattern in Gross Beat.
2.  **Render**: Export this as a new audio file (or "Consolidate Track").
3.  **Layer 2**: Load the NEW audio. Add a NEW Gross Beat.
    *   Apply "Pitch Shifting" or "Reverse" to the stutters.
4.  **Repeat**: By the 3rd or 4th pass, the audio becomes a granular cloud of noise.
    *   *Pro Tip*: Change the "Resampling" quality (HQ vs Linear) each time to degrade the sound intentionally (digital grit).

## 🧠 Workflow 3: Sidechained Chaos
Link the Gross Beat effect to the Kick drum so glitches only happen on the beat.

1.  **Routing**:
    *   **Kick Channel** -> **Peak Controller**.
    *   **Breakbeat Channel** -> **Gross Beat**.
2.  **Mapping**:
    *   Link Gross Beat **Time Slot** to **Peak Controller LFO**.
    *   **LFO Shape**: Random.
    *   **Trigger**: Pulse (so it picks a new random slot every time the kick hits).
3.  **Result**: The breakbeat constantly reorganizes itself around the kick drum automatically.

## 📐 The "Math" of IDM Grids
*   **Standard Snap**: 1/16 is too boring.
*   **Polyrhythm**: Set snap to **1/12** (Triplets) or **1/24**.
*   **Tuplet Glitch**: In the Time Grid, draw a repeater that repeats every **3/16th** of a beat. This creates a "rushing" or "dragging" feel against a 4/4 grid.

```

---

## FILE: 03-Workflows\by-genre\drill-trap-808s.md

```markdown
# Drill & Trap 808 Manipulation

In modern UK Drill and American Trap, the 808 isn't just a bassline; it's a lead instrument that slides, stops, and glitches.

## 🚧 The "Drill Stop" (Bass Cut)
Drill beats often have abrupt silence in the bassline to let the kick or snare punch through, or just for rhythm.

1.  **Volume Grid**:
    *   Use the Volume Grid, NOT the Time Grid.
    *   **Snap**: 1/32 or 1/64.
    *   **Technique**: Draw sharp "holes" (0% volume) at the end of bars or right before a snare hit.
    *   **Attack/Release**: Keep these very tight (5ms) to avoid clicks but ensure the stop feels "sharp".

## 📉 The "808 Slide" Simulation
While true slides are pitch automation, Gross Beat can simulate the "Tape Drop" slide often heard at the end of 8-bar sections.

1.  **Time Grid**:
    *   **Pattern**: The standard "Tape Stop" curve (see `tape-stop-and-spin-up.md`).
    *   **Placement**: Trigger this slot only on the very last beat of the 8-bar loop.
    *   **Mix**: Ensure the 808 channel is sent to a dedicated mixer track with Gross Beat, so the rest of the drums don't slide (unless you want them to).

## 🔫 The "Glitch Fill"
Turn a sustained long 808 note into a machine-gun rhythm.

1.  **Slot Setup**:
    *   Create a "Repeater" slot (1/16th or 1/32nd repeat).
    *   Create a "Reverse" slot (1/4 beat reverse).
2.  **Performance**:
    *   Hold the 808 note (sustain).
    *   Play the Gross Beat slots via MIDI to "chop" the bass in real-time.
    *   *Result*: Instant complex bass patterns from a single long note.

## 🎛️ Handling Sub Frequencies
*   **Click Warning**: Cutting low frequencies abruptly causes loud clicks.
*   **Fix**:
    1.  Use the **Click Reduction** knob in Gross Beat.
    2.  Use the **Attack** knob in the Volume envelope section (bottom left). Set it to ~10ms to soften the edges of the chops.

```

---

## FILE: 03-Workflows\by-genre\lofi-vinyl-warble.md

```markdown
# Lofi & Vinyl Warble Effects

For moody R&B and Jazzy Hip-Hop, you often want that "unstable" vintage tape sound. Gross Beat is actually a pitch modulator, meaning it can create **Wow** (slow pitch drift) and **Flutter** (fast pitch jitter).

## 📼 The "Warble" Concept
In the Time Grid, a **straight diagonal line** is constant pitch.
A **wavy line** is changing pitch.
*   Slope steeper than normal = Lower Pitch.
*   Slope flatter than normal = Higher Pitch.

By drawing subtle waves around the safety line, you detune the audio in real-time.

## 🛠️ Setup: The "Tape Drift" Preset

1.  **Select a Time Slot**.
2.  **Snap**: Turn OFF (Hold `Alt` while drawing) or set to high resolution (1/64).
3.  **Draw the Safety Line**: Right-click the start and end to make a standard diagonal line.
4.  **Add Control Points**: Right-click in the middle of the line to add points.
5.  **The "Wiggle"**:
    *   Move the points slightly UP and DOWN off the perfect diagonal.
    *   *Subtlety is Key*: If you move them too far, it sounds like a scratch. You want microscopic movements.
    *   **Smoothing**: Use "Single Curve" or "Double Curve" mode for points to round out the edges. Sharp corners = clicks.

## 🌧️ The "Moody" Texture (Vibrato)
For a darker, underwater R&B feel:
1.  Create a repeating wave shape (like a sine wave) that runs along the diagonal.
2.  **Frequency**: A slow wave (1 cycle per bar) sounds like a warped record. A fast wave (1/8th note) sounds like vibrato.
3.  **Mix Knob**:
    *   **100% Wet**: Pure detuned synthesizer.
    *   **50% Wet**: Chorus effect (The dry signal interferes with the detuned signal). This is amazing for wide, lush Rhodes or pads.

## 🎚️ Volume Degradation
1.  Go to the **Volume Grid**.
2.  Draw random, small dips in volume (drop to 80% briefly).
3.  This simulates "dropouts" or dust on the vinyl.

```

---

## FILE: 03-Workflows\by-genre\neo-soul-drunk-timing.md

```markdown
# Neo-Soul & "Drunk" Timing

The J Dilla / Neo-Soul swing relies on elements being "off the grid"—specifically, snares hitting late or hi-hats lagging. Gross Beat allows you to apply this swing to a perfectly quantized loop *after* it's been recorded.

## 🍷 The "Lazy Snare" Technique

**Goal**: Delay the snare (Beat 2 and 4) by 20-50ms to give it a laid-back feel.

1.  **Analyze the Loop**: Assume a standard 4/4 beat. Snares are at 1.2 (Beat 2) and 1.4 (Beat 4).
2.  **Time Grid Setup**:
    *   Draw a standard diagonal line (Normal speed) for the whole bar.
3.  **The Delay**:
    *   At **Beat 2**, drop the line *slightly* below the safety line.
    *   **How much?**: A tiny drop (1/64th or less). The lower the line, the further back in time (delayed) the audio plays.
    *   *Crucial*: Keep the slope of the line **parallel** to the safety line.
        *   If the slope is flat -> Tape Stop.
        *   If the slope is parallel -> Normal Speed, just delayed.
4.  **The Recovery**:
    *   After the snare hits, you need to "catch up" to real-time before the next kick.
    *   Draw a slightly steeper line to return to the safety line before Beat 3.

## 🥴 Drunk Hi-Hats
Instead of a consistent delay, create a **"Stumble" Pattern**:
1.  Take a straight 1/16th hi-hat loop.
2.  In Gross Beat, create a pattern that "steps" down.
    *   Beat 1: On time.
    *   Beat 1.2: Slightly late.
    *   Beat 1.3: On time.
    *   Beat 1.4: Slightly early (above the safety line? Impossible. You must delay everything else to make this relative "early").
    *   *Workaround*: Delay the WHOLE loop by default (start below the safety line), then you can jump UP (play closer to real-time) to simulate rushing/early notes.

## 🥁 Polyrhythmic Feel
1.  Set the Time Grid to span 4 Beats.
2.  Create a delay pattern that repeats every **3 beats** (using the copy-paste tool).
3.  This creates a 3-against-4 feeling where the groove constantly shifts against the kick drum. Perfect for experimental Jazz/Hip-Hop.

```

---

## FILE: 03-Workflows\by-genre\turntablist-scratching.md

```markdown
# Turntablist Scratching Science

Gross Beat is arguably the best digital scratch emulation tool because it allows you to draw the exact physics of a turntable movement.

## 📐 The Physics of a Scratch
*   **Safety Line (Diagonal)** = The record playing forward.
*   **Horizontal Line** = Hand on the record (Stop).
*   **Upward Slope** = Pushing the record backward (Reverse).
*   **Steep Downward Slope** = Pushing the record forward (Fast Forward).

A "scratch" is simply oscillating between playing forward, stopping, and reversing.

## ✏️ Drawing Scratches (The "Zig-Zag")

1.  **Grid**: Set Snap to **1/16** or **1/32**.
2.  **The "Baby Scratch"**:
    *   Start on the Safety Line.
    *   Draw a small "V" shape: Go UP (Reverse) for a 1/32 note, then sharply DOWN (Forward) to catch up.
3.  **The "Transformer" Scratch (Volume Gating)**:
    *   This is a combination of Time and Volume.
    *   **Time Grid**: Draw a slow reverse or slow forward movement.
    *   **Volume Grid**: Draw a fast "On-Off-On-Off" square wave (1/32 note).
    *   *Result*: The classic "Ah-Ah-Ah-Ah" cut sound.

## 🎛️ The "Turntablist" Preset Bank
*   **Study Material**: Open the factory "Turntablist" preset.
*   **Slot 3-9**: These are varying speeds of "crabbing" and "flares".
*   **Analysis**: Notice how they use **Curved Lines** (Right-click -> Double Curve).
    *   Real DJs don't move their hands in triangles; they have momentum.
    *   **Curves** simulate the inertia of the heavy vinyl platter changing direction.
    *   *Rule*: **Smoother Curves = More Realistic Scratches.**

## 🎤 Vocal Chops
**Goal**: The "Premier" style hook.
1.  Take a spoken word vocal phrase ("Yeah", "Fresh", etc.).
2.  Apply a Gross Beat scratch pattern.
3.  Render it out to audio (Edison).
4.  Chop the rendered audio and re-sequence it.

```

---

## FILE: 03-Workflows\by-goal\00_Perfect_Half_Speed.md

```markdown
# Goal: Perfect Half-Speed Setup (Gross Beat)

## Routing Context
*   **Target:** Piano, Guitar, or Melody Loop.
*   **Placement:** First or second plugin in the chain (before reverb).

## Step-by-Step Setup
1.  Load **Gross Beat**.
2.  Click the **Presets** button (top right) -> **Momentary**.
3.  Click the slot named **"1/2 Speed"**.
4.  **Crucial Step:** Notice the "clicking" sound at the start of every bar. 
    *   Move the **Attack** knob (lower left of the Time editor) to ~2-4ms.
5.  **Mix Adjustment:** Turn the **Mix** knob (top right) to 50%.

## What to Listen For
*   The melody should sound like it has a "dark twin" playing an octave lower. The timing should be perfectly in sync.

## Variations
1.  **Triple-Time:** Use the "1/3 Speed" slot for a stranger, more "waltz-like" polyrhythmic feel.
2.  **Half-Speed Reverse:** Combine a 1/2 speed curve with a Reverse curve for a trippy, "Travis Scott" style atmosphere.

## Pitfalls
*   **Sync Issues:** If the melody sounds "delayed," check the "Hold" setting. Ensure it is set to "1 Bar" or "2 Bars" to match your melody's phrasing. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\01_Tape_Stop_And_Spin_Up.md

```markdown
# Workflow: Tape Stop & Spin Up (Gross Beat)

## The Concept
Create the classic "Turntable" effect where the music slows down to a stop and then revs back up.

## Setup
*   **Target:** Full Mix (Master) or a Melody Bus.
*   **Placement:** Usually the last effect before the final Limiter.

## Recipe
1.  In the **Time Editor**, select an empty slot.
2.  Draw a curved line starting from the **Top-Right** and ending at the **Bottom-Left** of one beat (or one bar).
    *   *The steeper the curve, the faster the stop.*
3.  To "Spin Up," draw the opposite: a curve from **Bottom-Left** to **Top-Right**.

## Vibe Check
*   **Vibey:** Use a 1-bar slow stop at the end of a chorus.
*   **Upbeat:** Use a quick 1/4 beat "Scratch" move just before a snare hit.

## Automation Idea
*   Automate the **Slot Selection** parameter so the Tape Stop only triggers at the end of every 8th bar.

## Pitfalls
*   **Low End:** As the audio slows down, the frequencies drop. A 50Hz kick becomes a 25Hz rumble. **Always** automate a High-Pass filter alongside a Tape Stop to keep the mix clean. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\low-end-smear-warning.md

```markdown
# Workflow: Low-End Smear Warning

## ⚠️ CRITICAL WARNING

**Applying Gross Beat's time manipulation (half-time, stutter) directly to sub-bass, 808s, or kick drums will DESTROY your low-end.**

This is the **#1 mistake** producers make with Gross Beat. Read this entire workflow before applying any time effects to low-frequency content.

[SRC: IL-MAN] + Professional mixing practices

---

## What is Low-End Smear?

### The Problem

Time manipulation works by changing playback speed from the buffer:
- **Pitch drops** as speed decreases (automatic)
- **Phase relationships** shift unpredictably
- **Transient definition** blurs and smears
- **Low frequencies** (20-100 Hz) are especially vulnerable

### What You'll Hear

**Before Gross Beat:**
- Tight, punchy kick
- Defined 808 attack
- Clear bass transients
- Solid low-end foundation

**After Gross Beat (WRONG way):**
- "Flabby" or "wobbly" kick
- 808 loses all punch
- Bass sounds "washed out"
- Phase cancellation in mono
- Muddy, undefined low-end

---

## The Science

### Why Low-End Suffers Most

1. **Longer wavelengths** = more time to complete a cycle
2. **Speed reduction** stretches these wavelengths further
3. **Phase coherence** breaks down between cycles
4. **Transient information** (the "punch") gets blurred

### Technical Explanation

`\`\`
Original 808 (60 Hz):
Cycle duration: ~16.7ms

Half-speed (30 Hz):
Cycle duration: ~33.3ms

Result: 
- Attack transient stretched from 5ms to 10ms
- "Punch" is gone
- Sounds "smeared"
`\`\`

---

## Safe Methods for Low-End

### Method 1: Bus Processing (RECOMMENDED)

**Apply Gross Beat to the full mix bus, NOT individual bass tracks.**

**Why this works:**
- Full mix context maintains phase relationships
- Low-end is supported by other frequency content
- Effect blends naturally
- Industry standard approach

**Setup:**
`\`\`
1. Route all drums to Drum Bus
2. Route all melodic elements to Music Bus  
3. Route both buses + bass to Mix Bus
4. Apply Gross Beat to Mix Bus ONLY
5. Bass remains unprocessed

Result: Effect applies to overall groove, bass stays solid
`\`\`

### Method 2: Parallel Processing

**Process a COPY of the bass, blend carefully with dry signal.**

**Setup:**
`\`\`
1. Duplicate bass/808 track
2. High-pass duplicate at 100-150 Hz
3. Apply Gross Beat to duplicate only
4. Mix: 30-50% to preserve dry low-end
5. Blend processed mid/high with dry low-end

Chain:
Bass ─┬─[Dry]─────────────┐
      │                   ├──► Mix ─► Output
      └─[HP 100Hz]→[GB]───┘
           (30-50% Mix)
`\`\`

**Why this works:**
- Dry low-end (0-100 Hz) maintains punch
- Processed mid/high adds effect character
- Best of both worlds

### Method 3: Frequency Splitting (Advanced)

**Use Patcher or multiband setup to apply Gross Beat selectively.**

**Setup in Patcher:**
`\`\`
[Input]
   │
   ├───[Low Pass 100Hz]───┬─[Dry Low]───┐
   │                      │             │
   └───[High Pass 100Hz]──┴─[Gross Beat]┴──► [Mix] ─► Output
                              (effect on mids/highs only)
`\`\`

**Benefits:**
- Ultimate control
- No low-end compromise
- Can process different bands differently

**Complexity:** High - requires Patcher knowledge

### Method 4: Volume Effects Only (Safe Alternative)

**Use Volume slots (gates, sidechain) instead of Time slots.**

**Safe for low-end:**
- Sidechain ducking (Slot 18 - F5)
- Rhythmic gates (Slot 4 - D#4)
- Volume fades

**Why this works:**
- Only affects amplitude, not playback position
- No pitch change
- No phase smearing
- Maintains transient integrity

---

## What NOT to Do

### ❌ NEVER Do This:

1. **Apply half-time directly to solo 808 track**
   - Destroys punch completely
   - Makes 808 sound like "jello"

2. **Stutter effects on kick drums**
   - Creates phase chaos
   - Removes all impact

3. **Tape-stop on sub-bass**
   - Unpredictable phase behavior
   - May cause speaker damage at extreme pitches

4. **Extreme time manipulation on bass**
   - Even "subtle" half-time causes damage
   - Not fixable with EQ

---

## Detection: Do I Have Low-End Smear?

### Listen For:

**Mono Check:**
1. Solo your bass/808
2. Switch to mono (use Mono switch or plugin)
3. If bass disappears or changes dramatically = phase issues

**Specific Symptoms:**
- Kick sounds "squishy" instead of "thump"
- 808 attack is soft, not punchy
- Low-end feels "wobbly" or unstable
- Bass sounds different in mono vs stereo
- Mix sounds muddy in low-end

**Visual Check (Fruity Spectroman):**
- Low-end frequencies should be tight, focused
- Smear shows as scattered, unfocused energy below 100 Hz

---

## Fixing Smear (If It Happened)

### Step 1: Identify the Problem
- Bypass Gross Beat on bass track
- Listen for improvement
- Confirm smear is the issue

### Step 2: Choose Solution Method

**Option A: Move to Bus (if arrangement allows)**
- Remove Gross Beat from bass track
- Apply to mix bus instead
- Rebalance mix

**Option B: Parallel Process**
- Keep some Gross Beat effect
- Add parallel dry low-end
- Blend carefully

**Option C: Remove Effect**
- Sometimes best to remove entirely
- Try Volume effects instead
- Or use on other elements

### Step 3: Verify Fix
- Check in mono
- A/B with/without effect
- Verify punch is back

---

## Best Practices Summary

### The Golden Rules

1. **Never time-manipulate solo bass/808s**
   - Use bus processing instead

2. **If you must process bass, use parallel**
   - High-pass the processed signal
   - Blend with dry low-end
   - Keep Mix under 50%

3. **Use Volume effects freely**
   - Gates, sidechain, fades are safe
   - No phase/pitch issues

4. **Always check in mono**
   - Phase issues show up immediately
   - Fix before finalizing

5. **When in doubt, commit to audio and A/B**
   - Render with/without effect
   - Trust your ears

---

## Quick Decision Tree

`\`\`
Do you want to apply time manipulation (half-time, stutter)?
│
├─ Is it a bass/808/kick?
│  ├─ YES → Use bus processing OR parallel method
│  └─ NO  → Apply directly, but watch for phase
│
├─ Is it a full mix/beat?
│  └─ YES → Safe to apply directly
│
└─ Is it a melodic element?
   └─ YES → Apply directly, usually safe

Want to use Gross Beat on bass safely?
├─ Use Volume slots (gates, sidechain) ✓
└─ Use Time slots on bus or parallel only ✓
`\`\`

---

## Pro Tips

### 1. The "Mix Bus" Approach
This is how professionals do it:
- Gross Beat lives on mix/master bus
- Individual elements stay clean
- Effect is cohesive
- Low-end is protected

### 2. The 808 Split Trick
`\`\`
808 Track ─┬─[Sub 0-80Hz]──► Direct to mix
           │
           └─[Mid 80-200Hz]─► Gross Beat ─► Mix
`\`\`
- Sub stays solid
- Mid gets the effect
- Best of both worlds

### 3. Commit and Compare
Always render a version:
1. With effect (safely applied)
2. Without effect
3. A/B in your car, phone, monitors
4. Choose what sounds best

---

## Emergency Checklist

If your low-end sounds wrong:
- [ ] Bypass Gross Beat on bass tracks
- [ ] Check if punch returns
- [ ] Verify you're not using time effects on solo bass
- [ ] Check mono compatibility
- [ ] Try bus processing instead
- [ ] Consider Volume effects only
- [ ] Render and A/B test

---

## Summary

**The #1 Rule:** Never apply time manipulation directly to sub-bass or 808s.

**The Solution:** Use bus processing, parallel methods, or Volume effects only.

**The Check:** Always verify in mono for phase issues.

Your low-end is the foundation of your track. Protect it.

---

## Source

Based on:
- [SRC: IL-MAN] Image-Line Gross Beat documentation
- Professional mixing engineering principles
- Phase and frequency response theory
- Industry best practices from hip-hop producers

```

---

## FILE: 03-Workflows\by-goal\perfect-half-speed.md

```markdown
# Creating the Perfect Half-Speed Effect

The "Half-Speed" effect (popularized by plugins like HalfTime) is a staple of modern Trap and Hip-Hop. Here is how to achieve it natively in Gross Beat.

## ⚡ The Quick Way (Presets)

1.  Open Gross Beat.
2.  Click the **Presets** arrows (top right).
3.  Select **"Momentary"**.
4.  Find the **"1/2 Speed"** Time Slot (Green).
5.  *Result*: Instant half-speed playback.

## 🎨 The Manual Way (Custom Curve)

Understanding how to draw it gives you more control.

1.  **Select an Empty Time Slot**.
2.  **Set Grid Snap**: Right-click the grid and set Snap to **1/4** (Beats).
3.  **The Concept**: To play at half speed, you need to play 1 beat of audio over the span of 2 beats.
    *   This means the playback head needs to "fall behind" real-time gradually.
4.  **Draw the Line**:
    *   Start at the top-left (Time 0, Buffer 0).
    *   Draw a straight line down to the **4th Beat** marker on the horizontal axis and the **2nd Beat** marker on the vertical axis (buffer).
    *   *Correction*: Actually, for a standard 4-beat bar:
        *   Start: Top-Left (Beat 1 Start).
        *   End: Bottom-Right of a 1-Bar box? No.
    *   **The Math**:
        *   Normal Speed = 1:1 Slope (Diagonal).
        *   Half Speed = 1:2 Slope (Steeper).
        *   Draw a line that goes from **Beat 1** (Top) to **Beat 2** (Bottom) over the span of **2 Beats**?
        *   *Easier*: Right-click a point at the start (Top Left). Right-click a point at the end of Bar 1 (Horizontal). Drag that end point DOWN until the "1/2" guide appears (if available) or until it sounds right.
    *   **The Shape**: It looks like a "Sawtooth" wave sloping downwards.

## 🛠 Tuning the Sound

### 1. Removing Clicks (De-clicking)
*   At the end of the bar, the buffer jumps back to the start. This can cause a "pop".
*   **Solution 1**: Enable **"Click Reduction"** (bottom right switch).
*   **Solution 2**: Add a tiny fade-out volume envelope at the very end of the bar in the Volume Grid.

### 2. The "Growth" Texture
*   Instead of fully wet signal, blend it.
*   Turn the **Time Mix** knob to **50%**.
*   *Result*: You hear the original dry signal AND the slowed-down low signal together. This makes the sound "huge" and is the secret to many dark melody loops.

### 3. Filtering
*   Half-speed audio loses high frequencies naturally (sample rate reduction) or sounds muddy.
*   Use an EQ *after* Gross Beat to cut the sub-bass mud if blending with the original signal.

---
*Pro Tip: For "Instant" half-speed that feels like a tape stop, use a curve instead of a straight line.*

```

---

## FILE: 03-Workflows\by-goal\perfect-half-time.md

```markdown
# Workflow: Perfect Half-Time Effect

## Overview

The half-time effect is the **signature sound of modern hip-hop**. It transforms energetic beats into slow, heavy, spacious grooves by reducing playback speed to 50% (pitch drops one octave automatically).

**Effect:** Melodic content plays at half-speed while drums maintain their original timing relationship, creating the classic "slowed" sound.

**Hip-Hop Relevance:** This is THE effect. From early DJ Screw to modern trap, half-time defines the genre's sonic identity.

[SRC: IL-MAN]

---

## Setup

### Step 1: Choose Your Source

**Best sources for half-time:**
- Full drum loops (140+ BPM)
- Melodic samples and loops
- Percussion bus
- Full beat stems

**Avoid:**
- Solo 808s/bass (see low-end smear warning)
- Solo kicks
- Already slow material (< 100 BPM)

### Step 2: Load Gross Beat

1. Add Gross Beat to your channel
2. Set initial Mix to 0% (we'll adjust)
3. Set Attack: 20ms, Release: 35ms (safe starting point)
4. Set Pos: 0% (real-time)

### Step 3: Select Half-Time Slot

Navigate to **Time Slot 2** (C#1 on MIDI keyboard)
- This slot has the gentle downward slope (22.5°)
- Produces the classic 50% speed reduction
- Pitch drops exactly one octave (-12 semitones)

---

## Fine-Tuning

### The Critical Settings

#### Mix Control
- **100%:** Full commitment, maximum impact
- **70-80%:** Strong effect with some dry signal
- **50-60%:** Blend, good for verses
- **30-40%:** Subtle, background texture

**Recommendation:** Start at 100%, adjust to taste

#### Attack Time
Controls how quickly the effect engages:
- **5-10ms:** Tight, immediate (risk of clicks)
- **15-25ms:** Standard, punchy (recommended)
- **40-60ms:** Smooth, gradual transition

**For hip-hop:** 20ms is the sweet spot

#### Release Time
Controls how quickly the effect disengages:
- **20-30ms:** Snappy, tight (good for cuts)
- **40-60ms:** Natural, flowing (recommended)
- **100-200ms:** Slow, ambient

**For half-time:** 35-50ms maintains groove

### Buffer Position (Pos)

**0%:** Real-time playback (standard)
**25-50%:** Delayed playback (creates slapback effect)

**Tip:** Try 25% Pos for a subtle delayed half-time feel

---

## Hip-Hop Specific Applications

### The Classic Verse Effect

**Setup:**
`\`\`
Time Slot: 2 (Half-time)
Volume Slot: 1 (Normal, no gate)
Mix: 100%
Attack: 20ms
Release: 40ms
Pos: 0%
`\`\`

**Application:** Apply to full beat during verses
- Chorus plays at normal speed
- Verse drops to half-time
- Creates dramatic contrast

**Example:** 140 BPM beat → Half-time = feels like 70 BPM

### The Breakdown Drop

**Setup:**
`\`\`
Time Slot: 2 (Half-time)
Volume Slot: 4 (1/16 gate - optional)
Mix: 100%
Attack: 15ms
Release: 35ms
`\`\`

**Application:** Use for 4-8 bar breakdowns
- Removes all percussion except key elements
- Half-time adds weight and space
- Gate adds rhythmic interest

### The Drum Loop Treatment

**Setup:**
`\`\`
Time Slot: 2 (Half-time)
Volume Slot: 1 (Normal)
Mix: 80%
Attack: 25ms
Release: 50ms
Pos: 0%
`\`\`

**Application:** Process sampled drum breaks
- Classic boom-bap technique
- Creates laid-back groove
- Maintains drum relationship

---

## Advanced Techniques

### 1. The "DJ Screw" Effect

**Setup:**
- Use Pos control at 10-20%
- This creates slight delay + half-time
- Very slight pitch wobble (if desired)

**Result:** Authentic chopped-and-screwed feel

### 2. Half-Time + Sidechain

**Setup:**
`\`\`
Time Slot: 2 (Half-time)
Volume Slot: 18 (Sidechain 4/4)
Mix: 100% on Time, 70% on Volume
`\`\`

**Effect:** Slow, heavy groove with pumping dynamics

### 3. Gradual Half-Time Transition

**Automation Setup:**
1. Start with Mix at 0%
2. Automate Mix to 100% over 2 bars
3. Add slight Attack increase during transition
4. Hold at 100% for section

**Result:** Smooth transition into half-time feel

### 4. Selective Half-Time

**Using Patcher:**
1. Split signal: Low vs Mid/High
2. Apply Gross Beat only to Mid/High
3. Keep bass normal
4. Blend together

**Result:** Half-time effect without low-end smear

---

## Common Mistakes

### 1. Too Aggressive Slope
**Problem:** Slot with too steep slope creates extreme, unusable pitch drop
**Fix:** Use Slot 2 specifically (gentle 22.5° slope)

### 2. Clicks on Transition
**Problem:** Attack too fast causes digital artifacts
**Fix:** Minimum 15ms Attack, preferably 20ms+

### 3. Bass Damage
**Problem:** Half-time on 808s destroys punch
**Fix:** See "Low-End Smear Warning" workflow - use bus processing only

### 4. Timing Drift
**Problem:** Effect not aligned to tempo
**Fix:** Enable snap to grid, quantize to beat

---

## Integration with Other Effects

### EQ After Gross Beat
**Why:** Half-time adds lows (pitch drop), may need EQ
**Tip:** Slight high-shelf boost to compensate for perceived darkness

### Reverb + Half-Time
**Result:** Massive, spacious sound
**Setup:** Long reverb tail, 100% wet half-time

### Saturation + Half-Time
**Result:** Warm, vintage character
**Setup:** Subtle saturation before or after Gross Beat

---

## Section-Based Application

### Typical Hip-Hop Arrangement

`\`\`
Intro:      Normal speed
Verse 1:    Half-time (100% Mix)
Hook:      Normal speed
Verse 2:    Half-time (80% Mix - slightly lighter)
Hook:      Normal speed
Bridge:    Half-time + stutter effects
Outro:     Tape-stop (transition from half-time)
`\`\`

---

## Commit to Audio

**When to commit:**
- Arrangement is finalized
- Effect timing is locked
- Before mixing/mastering stage

**Process:**
1. Solo the track
2. Render to audio (32-bit WAV)
3. Replace Gross Beat with audio file
4. Keep original track muted as backup

**Benefits:**
- Frees up CPU
- Locks timing permanently
- Allows further processing

---

## Quick Reference Card

`\`\`
PERFECT HALF-TIME SETUP:

Time Slot:  2 (C#1 on MIDI)
Volume:     1 (no change)
Mix:        100%
Attack:     20ms
Release:    35ms
Pos:        0%

MIDI Trigger: C#1 (hold for sustained effect)
Automation:   Trigger on bar 1 of section

Best On:      Full beats, melodic loops
Avoid:        Solo bass, solo kicks
Combine:      Sidechain, reverb, saturation

Pro Tip:     Try Pos at 25% for delayed half-time feel
`\`\`

---

## Source

Workflow based on:
- [SRC: IL-MAN] Image-Line Gross Beat documentation
- Hip-hop production best practices
- DJ Screw / chopped-and-screwed techniques

```

---

## FILE: 03-Workflows\by-goal\tape-stop-and-spin-up.md

```markdown
# Creating Tape Stops and Spin-Ups

The "Tape Stop" is one of the most recognizable Gross Beat effects. It simulates the sound of a vinyl record or tape reel coming to a halt (pitch and speed drop to zero).

## 🛑 The Tape Stop (Slow Down to 0)

### 1. The Physics
To create a natural tape stop, the audio needs to slow down gradually until it freezes. In Gross Beat's Time Grid, a **flat horizontal line** equals 0% speed (Pause). A **diagonal line** (safety line) equals 100% speed.
Therefore, a tape stop is a curve that transitions from the **Safety Line slope** to a **Flat Line**.

### 2. Implementation Steps
1.  **Select a Time Slot**.
2.  **Right-Click** the grid and set **Snap** to **1/4** or **1/16** depending on how fast you want the stop.
3.  **Draw the Curve**:
    *   **Start Point**: Top-Left of the area you want to affect.
    *   **End Point**: The bottom of the range.
    *   **Curve Type**: Right-click the start point and select **Single Curve**.
    *   **Tension**: Drag the tension handle (small circle in the middle of the line) **downwards**. This creates a convex curve that starts slow and drops pitch aggressively at the end, or **upwards** for a linear deceleration.
    *   *Classic Stop*: A straight line from Top-Left to Bottom-Right (spanning 1 bar) creates a specific constant deceleration.

### 3. The "Freeze"
If you want the audio to hold the last chunk (stutter/freeze) after the stop:
*   Ensure the line ends **flat** (horizontal) for the duration you want the silence/freeze.
*   *Note*: Gross Beat often defaults to "Mute" or "Bypass" after the envelope ends. To hold a texture, you often use a freeze buffer, but standard tape stops usually end in silence or return to playback.

## 🔄 The Spin-Up (0 to 100)

This is the reverse: starting from a stop and accelerating back to real-time.

1.  **Start Point**: Bottom-Left (Time = 0, Buffer = Deep).
2.  **End Point**: Top-Right (Time = Real-time).
3.  **Curve**: A curve connecting these two will sound like a turntable starting up.

## 🎛️ Pro Tip: The "Vinyl Off" Preset
Gross Beat comes with a "Turntablist" preset pack.
*   Load the **"Turntablist"** bank.
*   Check out the "Vinyl Off" slot. It is a mathematically perfect tape stop curve. Study its shape!

```

---

## FILE: 03-Workflows\by-goal\tape-stop-transitions.md

```markdown
# Workflow: Tape-Stop Transitions

## Overview

The tape-stop effect is a **classic transition technique** that simulates the sound of a turntable or reel-to-reel tape machine gradually slowing to a halt. It's an essential tool for endings, transitions, and dramatic moments.

**Effect:** Gradual deceleration of audio playback with simultaneous pitch drop, ending in silence

**Hip-Hop Relevance:** Used since the early DJ days, now a staple in modern production for professional transitions.

[SRC: IL-MAN]

---

## The Mechanics

### How Tape-Stop Works

`\`\`
Normal Speed:      |----|----|----|----|----|
Tape-Stop:         |----|----|---|--|-|-|-|-|
                     
Time:              0s   1s   2s  3s 4s
Speed:             100%  90%  70% 50% 30% 10% 0%
Pitch:             0st  -2st -5st -12st (stops)
`\`\`

**Key characteristics:**
- Continuous speed reduction
- Pitch follows speed (automatic in Gross Beat)
- Natural, organic deceleration curve
- Ends in silence or near-silence

---

## Setting Up Tape-Stop

### Step 1: Select Slot

**Slot 19 (F#2)** - Standard tape-stop
- Steep exponential downward curve
- Natural deceleration feel

**Alternative slots:**
- Slot 20 (G2): Slow-start (reverse - speeds up)
- Slot 21 (G#2): Spinback (extra dramatic)
- Slot 24 (B2): Turntable stop (varied curve)

### Step 2: Base Settings

`\`\`
Time Slot:  19 (Tape-stop)
Volume:     1 (normal) or 15 (fade-out)
Mix:        100%
Attack:     50ms (smooth entry)
Release:    100ms (gradual exit)
Pos:        0%
`\`\`

### Step 3: Timing the Trigger

**Critical:** Trigger timing determines when the effect starts

**Typical placement:**
- **Beat 3 of final bar:** Standard ending
- **Beat 4 of final bar:** Quick transition
- **2 beats before change:** Extended wind-down

---

## Transition Types

### 1. The Classic Ending

**Scenario:** Song ending

**Setup:**
`\`\`
Trigger:    Bar 8, Beat 3 (of 8-bar section)
Duration:   1.5 beats to complete stop
Recovery:   None (song ends)
`\`\`

**Process:**
1. Track plays normally through bar 8, beat 2
2. Trigger tape-stop on beat 3
3. Audio slows and fades over beats 3-4
4. Silence by end of bar 8

### 2. The Section Transition

**Scenario:** Moving from verse to chorus

**Setup:**
`\`\`
Trigger:    Bar 4, Beat 4 (end of verse)
Volume:     15 (fade-out slot)
Recovery:   Mute or switch to new section
`\`\`

**Process:**
1. Verse plays normally
2. Tape-stop triggers on beat 4
3. Audio slows to silence
4. [Brief silence or filter sweep]
5. Chorus enters clean

### 3. The Build-Up to Drop

**Scenario:** Pre-drop tension

**Setup:**
`\`\`
Trigger:    Beat 4 of build-up bar
Duration:   Full beat
Recovery:   Drop hits hard on bar 1
`\`\`

**Effect:** Maximum tension before impact

### 4. The Scratch/Spinback

**Scenario:** Turntablist effect

**Setup:**
`\`\`
Slot:       21 (Spinback - G#2)
Or:         Custom slot with sharp curve
Mix:        100%
Attack:     30ms
Release:    80ms
`\`\`

**Character:** Dramatic, sudden deceleration
**Use:** Drops, transitions, retro effects

---

## Advanced Techniques

### 1. Tape-Stop with Fade

**Enhanced Setup:**
`\`\`
Time Slot:  19 (Tape-stop)
Volume Slot: 15 (Fade-out)
Mix:        100% on both
`\`\`

**Result:** Speed reduction + volume fade
**Benefit:** Smoother landing, more natural

### 2. Tape-Stop on Specific Elements

**Technique:** Apply to individual tracks

**Example:**
`\`\`
Track 1: Full mix (no tape-stop)
Track 2: Melody only (tape-stop)
Track 3: Drums only (stutter effect)

Result: Layered transition with multiple effects
`\`\`

### 3. The "DJ Premium" Effect

**Setup:**
1. Normal playback
2. Tape-stop triggers
3. Silence for 1 beat
4. Track rewinds (simulated)
5. Track resumes from earlier point

**Implementation:**
- Use automation to control Pos
- Tape-stop effect
- Jump Pos back (rewind sound)
- Return to normal slot

### 4. Tape-Stop with Reverb Tail

**Setup:**
`\`\`
Chain:      Source → Reverb → Gross Beat
            OR
            Source → Gross Beat → Reverb

Tape-stop on reverb = massive space effect
`\`\`

**Result:** Slowing reverb tail for dramatic space

---

## Timing and Tempo Considerations

### Tempo Impact

**Slower tempos (80-100 BPM):**
- Tape-stop lasts longer (more beats)
- More dramatic, extended effect
- Good for ballads, R&B

**Faster tempos (120-150 BPM):**
- Tape-stop is quicker
- Snappier transition
- Good for hip-hop, trap

### Adjusting Duration

**To make longer:**
- Start tape-stop earlier in bar
- Use slower curve (less steep)
- Combine with volume fade

**To make shorter:**
- Trigger later in bar
- Use steeper curve
- Reduce Release time

---

## MIDI Performance

### Basic Triggering
`\`\`
MIDI: Press F#2 at desired moment
      Release when effect complete
      
Or:   Draw F#2 note in piano roll
      Duration: 1-2 beats
`\`\`

### Advanced: Velocity Control
`\`\`
Velocity 127: Full tape-stop (100% Mix)
Velocity 80:  Partial (60% Mix - subtler)
Velocity 50:  Light (30% Mix - texture only)
`\`\`

### Pattern: Return to Normal
`\`\`
Bar 4, Beat 4: F#2 (tape-stop starts)
Bar 5, Beat 1: C1 (normal - returns)

Result: Tape-stop then immediate recovery
`\`\`

---

## Common Mistakes

### 1. Too Short
**Problem:** Tape-stop happens too fast, sounds like a glitch
**Fix:**
- Start earlier in the bar
- Use gentler curve
- Allow 1-2 beats for full effect

### 2. Abrupt Landing
**Problem:** Effect ends with a thud or click
**Fix:**
- Add volume fade (Volume slot 15)
- Increase Release to 100-200ms
- Use smooth envelope option

### 3. Wrong Curve
**Problem:** Linear slowdown sounds mechanical
**Fix:**
- Use exponential/logarithmic curve
- Slot 19 has correct curve built-in
- Hand-draw for custom feel

### 4. Timing Drift
**Problem:** Tape-start doesn't align with next section
**Fix:**
- Quantize trigger to beat
- Plan silence gap if needed
- Use metronome when programming

---

## Integration with Other Effects

### Filter + Tape-Stop
**Setup:** Low-pass filter sweeps down during tape-stop
**Result:** Combined frequency + speed reduction
**Character:** Classic vintage sound

### Reverb + Tape-Stop
**Setup:** Tape-stop on reverb send
**Result:** Slowing reverb tail
**Use:** Ambient endings, spacey transitions

### Distortion + Tape-Stop
**Setup:** Light saturation before tape-stop
**Result:** Warm, analog-style degradation
**Genre:** Vintage hip-hop, lo-fi

### Reverse + Tape-Stop
**Setup:** True audio reverse (in Edison) + tape-stop
**Result:** Reverse tape-stop
**Use:** Experimental, creative transitions

---

## Genre-Specific Applications

### Hip-Hop
- **Use:** End of verses, dramatic pauses
- **Style:** Smooth, natural deceleration
- **Timing:** 1-2 beats before section change

### Trap
- **Use:** Pre-drop, breakdowns
- **Style:** Quick, snappy (often faster tempo)
- **Combination:** Tape-stop + reverb crash

### EDM
- **Use:** Build-ups, breakdowns
- **Style:** Often combined with risers
- **Effect:** Maximum tension before drop

### Lo-Fi
- **Use:** Any transition
- **Style:** Extended, vintage feel
- **Combination:** Tape-stop + vinyl crackle

---

## Quick Reference

`\`\`
TAPE-STOP TRANSITION ESSENTIALS:

Slot:       19 (F#2) or 21 (G#2 for spinback)
Mix:        100%
Attack:     50ms
Release:    100ms
Volume:     15 (fade-out slot optional)

Trigger:    1-2 beats before target
Duration:   1-2 beats to complete
Quantize:   To beat for tight timing

Best For:   Endings, section changes
Combine:    With fade or filter for smoothness
Avoid:      Too late triggers (abrupt endings)

Pro Tip:    Add reverb after for huge space effect
`\`\`

---

## Source

Workflow based on:
- [SRC: IL-MAN] Image-Line Gross Beat documentation
- Turntablist techniques and DJ practices
- Modern transition design principles

```

---

## FILE: 03-Workflows\by-goal\trance-gate-sequencing.md

```markdown
# Trance Gate Sequencing

Gross Beat isn't just for time manipulation; its Volume Grid is a powerful pattern gater (Trance Gate).

## 🎹 The Setup

1.  **Focus on the Orange Grid**: Look at the bottom half of the mapping panel (Volume).
2.  **Snap Settings**: Right-click the grid and set Snap to **1/16** (Steps). This is standard for trance/house gates.
3.  **Global Envelope Settings**:
    *   **ATT (Attack)**: Set to roughly **10-20ms**. This is CRITICAL. If it's 0ms, your gate will click. If it's too long, it will sound mushy.
    *   **REL (Release)**: Set to match Attack or slightly longer.

## ✏️ Drawing the Gate

A Trance Gate works by rhythmic silencing.

1.  **Block Chords**: This effect works best on sustained pads or long synth chords.
2.  **The Pattern**:
    *   Draw "Box" shapes in the Volume grid.
    *   **Top (100%)**: Sound On.
    *   **Bottom (0%)**: Sound Off.
    *   Create a rhythmic on/off pattern: `On - Off - On - On - Off` etc.
3.  **Complex Rhythms**:
    *   Use **1/32 snap** for high-energy fills.
    *   Use the **Step** editing tool (Right-click -> Hold) to draw blocks quickly like a sequencer.

## 🎚️ Advanced Gating: Sidechain Emulation

You can use the Volume Grid to fake a sidechain compression (ducking) effect.

1.  **Snap**: 1/4 Beat.
2.  **Shape**:
    *   Start point: 0% Volume (Bottom-Left of the beat).
    *   End point: 100% Volume (Top-Right of the beat).
    *   **Curve**: Drag tension UP to create a "pumping" curve.
3.  **Result**: The volume ducks on the kick (beat 1) and swells up.

## 🧠 Why use Gross Beat for Gating?
*   **Precision**: It's sample-accurate synced to the host.
*   **Variety**: You can have 36 different gate patterns and switch them via MIDI notes, allowing for "performable" gating that evolves over 8 bars.

```

---

## FILE: 03-Workflows\by-goal\trap-stutter-effects.md

```markdown
# Workflow: Trap Stutter Effects

## Overview

Stutter effects are the **rhythmic backbone of trap music**. By rapidly repeating small sections of audio, stutters create tension, energy, and that signature "chopped" sound that defines the genre.

**Effect:** Freezing and repeating audio segments in rhythmic patterns (1/16, 1/32, or even faster)

**Trap Relevance:** Essential for hi-hat rolls, vocal ad-libs, build-ups, and transition fills.

[SRC: IL-MAN]

---

## The Basics

### What is a Stutter?

A stutter effect repeats a small slice of audio:
`\`\`
Normal:  |----1----|----2----|----3----|----4----|
Stutter: |--|--|--|--|--|--|--|--|--|--|--|--|--|--|
         1/16th note repeats of the same audio slice
`\`\`

### How Gross Beat Creates Stutters

- **Horizontal lines** in the Time envelope = freeze/repeat
- **Duration** of horizontal line = how long it repeats
- **Multiple blocks** = rhythmic pattern

---

## Setting Up Stutters

### Step 1: Choose Stutter Speed

| Slot | MIDI | Speed | Use Case |
|------|------|-------|----------|
| 7 | F#1 | 1/4 note | Moderate, four-on-floor |
| 8 | G1 | 1/8 note | Fast, energetic |
| 9 | G#1 | 1/16 note | **Trap standard** |
| 10 | A1 | 1/32 note | Ultra-fast, fills |

**For trap:** Start with Slot 9 (G#1 - 1/16th)

### Step 2: Configure Settings

**Base Settings:**
`\`\`
Time Slot:  9 (1/16 stutter)
Volume:     1 (normal)
Mix:        80%
Attack:     10ms (tight but no clicks)
Release:    20ms (snappy)
Pos:        0%
`\`\`

### Step 3: Timing

**Critical:** Stutters must be quantized
- Enable "Snap to grid"
- Use 1/16 or 1/32 grid
- Trigger on exact beat divisions

---

## Trap-Specific Patterns

### 1. The Classic Hi-Hat Roll

**Setup:**
`\`\`
Apply to:   Hi-hat track or percussion
Time Slot:  9 (1/16 stutter) or 10 (1/32)
Mix:        70%
Timing:     Last beat of bar (beat 4)
Duration:   1-2 beats
`\`\`

**Pattern:**
`\`\`
Bar 1: Normal
Bar 2: Normal
Bar 3: Normal
Bar 4: [Stutter on beats 3-4]
`\`\`

**Result:** Classic trap roll leading into next section

### 2. The Build-Up Stutter

**Setup:**
`\`\`
Apply to:   Full mix or drum bus
Time Slot:  Start with 8 (1/8), switch to 9 (1/16), then 10 (1/32)
Mix:        100%
Timing:     2-4 bars of increasing speed
`\`\`

**Automation:**
`\`\`
Bar 1:  Slot 8 (1/8)
Bar 2:  Slot 9 (1/16)  
Bar 3:  Slot 10 (1/32)
Bar 4:  [Drop - back to normal]
`\`\`

**Result:** Increasing tension before chorus/drop

### 3. Vocal Ad-Lib Stutter

**Setup:**
`\`\`
Apply to:   Vocal ad-lib track
Time Slot:  9 (1/16) or 11 (triplet for swing)
Mix:        60%
Timing:     End of phrases
`\`\`

**Example:**
`\`\`
Vocal: "Yeah!"
Stutter: "Y-y-y-y-yeah!" (1/16 repeats)
`\`\`

**Result:** Characteristic trap vocal effect

### 4. The "Travis Scott" Fill

**Setup:**
`\`\`
Apply to:   Drum bus or full mix
Time Slot:  9 (1/16 stutter)
Volume:     4 (1/16 gate) - combine for extra effect!
Mix:        90%
Timing:     Transition points
`\`\`

**Result:** Bouncy, rhythmic transition fills

---

## Advanced Stutter Techniques

### 1. Velocity-Based Stutters

Use note velocity to control intensity:
- **Velocity 100-127:** Full stutter (100% Mix)
- **Velocity 60-99:** Partial (60% Mix) - more subtle
- **Velocity 30-59:** Texture only (30% Mix)

**Application:** Dynamic stutters that build or fade

### 2. Stutter + Gate Combination

**Setup:**
`\`\`
Time Slot:  9 (1/16 stutter)
Volume Slot: 4 (1/16 gate)
Mix:        80%
`\`\`

**Result:** Stuttered audio that's also rhythmically gated
**Character:** Ultra-tight, modern trap sound

### 3. Pitch-Shifting Stutter

**Technique:**
1. Apply stutter with Gross Beat
2. Add Pitcher or Newtone after
3. Shift pitch up/down during stutter

**Result:** Melodic stutter effects (like "mumble rap" style)

### 4. Reverse Stutter Simulation

**Setup:**
- Time Slot: 14 (Reverse simulation - C#2)
- Or draw jagged zigzag pattern

**Result:** Pseudo-reverse effect
**Note:** Not true reverse, but creates similar feel

---

## MIDI Performance Patterns

### Pattern 1: Basic Stutter Fill
`\`\`
MIDI: Trigger G#1 (Slot 9) on beat 4
      Release on bar 1 of next section
      
Result: One-beat stutter fill
`\`\`

### Pattern 2: Rhythmic Stutter
`\`\`
MIDI: G#1 - G#1 - G#1 - G#1
      [16th] [16th] [16th] [16th]
      
Result: Four quick stutter bursts
`\`\`

### Pattern 3: Progressive Speed
`\`\`
MIDI: G1 (1/8) → G#1 (1/16) → A1 (1/32)
      Each held for 1/2 beat
      
Result: Speeding up stutter
`\`\`

---

## Common Mistakes

### 1. Clicks and Pops
**Problem:** Stutter transitions are too sharp
**Fix:** 
- Attack: 10ms minimum
- Release: 20ms minimum
- Use envelope smoothing

### 2. Timing Chaos
**Problem:** Stutters not aligned to beat
**Fix:**
- Enable grid snap
- Quantize to 1/16
- Check tempo sync

### 3. Overuse
**Problem:** Every bar has stutters - loses impact
**Fix:**
- Save for transitions and fills
- Less is more
- Create contrast with non-stuttered sections

### 4. Wrong Material
**Problem:** Stuttering bass or low-end sounds messy
**Fix:**
- High-pass before Gross Beat
- Or apply to mid/high frequencies only
- Avoid stuttering solo 808s

---

## Creative Applications

### Stutter Types by Element

**Hi-Hats:**
- 1/16 or 1/32 stutter
- Quick bursts (1-2 beats)
- Add velocity variation

**Snare:**
- 1/8 stutter for fills
- Backbeat emphasis
- Short, punchy

**Vocals:**
- 1/16 stutter on words
- End of phrases
- Combine with delay

**Synths:**
- 1/8 stutter for rhythm
- Longer stutters for texture
- Build-up effects

### Stutter Duration Guide

| Duration | Effect | Use |
|----------|--------|-----|
| 1/4 beat | Quick hit | Accents |
| 1/2 beat | Short fill | Transitions |
| 1 beat | Standard fill | Build-ups |
| 2 beats | Extended | Breakdowns |
| 4 beats | Texture | Ambient sections |

---

## Integration with Other Effects

### Reverb + Stutter
**Setup:** Add reverb before or after Gross Beat
**Result:** Stuttered reverb tails
**Tip:** Try reverb AFTER for cleaner stutters

### Delay + Stutter
**Setup:** Delay before Gross Beat
**Result:** Stuttered echoes
**Use:** Creative texture, fills

### Distortion + Stutter
**Setup:** Light saturation before Gross Beat
**Result:** Gritty, aggressive stutters
**Genre:** Hard trap, drill

---

## Commit to Audio

**When to commit:**
- Stutter patterns are finalized
- Timing locked to arrangement
- Before mixing stage

**Why commit:**
- Frees up Gross Beat for other uses
- Prevents accidental changes
- Allows destructive editing of stuttered audio

---

## Quick Reference

`\`\`
TRAP STUTTER ESSENTIALS:

Speed:      1/16 (Slot 9 - G#1)
Mix:        80%
Attack:     10ms
Release:    20ms
Quantize:   1/16th grid

Common:     End of bars, transitions
Combine:    With gates for extra tightness
Avoid:      Solo bass, unquantized triggers

Pro Tip:    Layer 1/16 + 1/32 for complex rolls
`\`\`

---

## Source

Workflow based on:
- [SRC: IL-MAN] Image-Line Gross Beat documentation
- Trap production techniques
- Modern hip-hop production practices

```

---

## FILE: 03-Workflows\by-instrument\drum-fill-glitches-and-bass.md

```markdown
# Drum Fill Glitches & Bass

## 🥁 1. The "Automatic Fill" (Drums)
**Goal**: Turn a static 2-bar loop into a complex fill every 4th bar.

1.  **Automation**: Create an automation clip for the **Time Slot** parameter.
2.  **Pattern**: 
    *   Bars 1-3: Slot 1 (Bypass).
    *   Bar 4: Randomly switch between "Repeat 1/4", "Reverse", and "Tape Stop" slots.
3.  **Result**: Your drums play normally, but "glitch out" musically at the end of every phrase.

## 🎸 2. Rhythmic R&B Bass (Ducking)
**Goal**: Make the bass "bounce" around the kick drum.

1.  **Volume Grid**:
    *   Draw a curve that starts at 0% (Beat start) and swells to 100% (Halfway through the beat).
    *   Repeat this for every beat.
2.  **Result**: This creates a volume "pump" that makes the bass feel like it's being "squeezed" by the kick, essential for that modern R&B "bounce."

```

---

## FILE: 03-Workflows\by-instrument\jazzy-pianos-and-rhodes.md

```markdown
# Jazzy Pianos & Rhodes

Moody R&B and Jazz rely on the "imperfect" feel of vintage hardware.

## 🎹 1. The "Warped Record" Piano
**Goal**: Add subtle pitch drift to a clean digital piano.

*   **Time Grid**: Draw a very shallow wave (Sine-like) along the safety line.
*   **Speed**: One wave every 1-2 bars.
*   **Depth**: Tiny. The points should barely move.
*   **Mix**: 100% for pure vibrato, 50% for a lush chorus.

## 🌊 2. Rhodes "Underwater" Swells
**Goal**: Create a dreamy, pulsing atmosphere.

1.  **Volume Grid**: Create a slow, rounded "Hump" shape over 2 beats.
2.  **Chain**: Place a large Reverb *after* Gross Beat.
3.  **Result**: The piano swells in and out, but the reverb tail fills the gaps, creating a "breathing" texture.

## 🕰️ 3. The "Lazy" Neo-Soul Rhodes
**Goal**: Make the piano feel like it's dragging behind the beat.

1.  **Time Grid**: Start the diagonal line 1/32nd note *below* the top-left corner.
2.  **Result**: Every note you play is delayed by a fraction, making the performance feel incredibly "laid back" and soulful.

```

---

## FILE: 03-Workflows\by-instrument\moody-vocal-atmospheres.md

```markdown
# Moody Vocal Atmospheres

Turning simple R&B vocals into ethereal textures.

## 👻 1. The Ghostly Reverse
**Goal**: Create a "sucking" transition into a vocal line.

1.  **Slot**: Create a 1-bar Reverse Time envelope.
2.  **Timing**: Trigger the reverse slot exactly 1 bar *before* the singer starts.
3.  **Result**: You hear the upcoming vocal line reversed, leading perfectly into the start of the dry vocal.

## 🤖 2. The R&B "Stutter-Gate"
**Goal**: Rhythmic vocal chops found in modern R&B/Pop.

1.  **Volume Grid**: Set Snap to 1/16.
2.  **Pattern**: Draw alternating blocks (On for 1/16, Off for 1/16).
3.  **Smoothing**: Increase **ATT** to 15ms. This makes the vocal "pulse" rather than "clip," giving it a smoother, more sensual vibe.

## 🌊 3. The Octave Down "Deep" Vocal
**Goal**: That dark, pitch-shifted Rap vocal effect.

1.  **Time Grid**: Use the **1/2 Speed** preset.
2.  **Mix**: Set to 40% Wet.
3.  **Result**: You have the main vocal, but there is a deep, low-octave "shadow" vocal following it. Great for "moody" rap verses.

```

---

## FILE: 03-Workflows\by-plugin-combo\gross-beat-and-delay.md

```markdown
# Gross Beat + Fruity Delay 3

Smoothing out the chaos.

## 🌧️ The Problem with Glitch
Gross Beat effects (stutters, reverses, tape stops) are abrupt. They often leave "holes" of silence in the mix or end too sharply.

## 🩹 The Delay Solution
Placing a delay *after* Gross Beat acts as a "texture glue".

### Setup
1.  **Chain**: Source -> Gross Beat -> Fruity Delay 3.
2.  **Delay Settings**:
    *   **Time**: Sync to 1/4 or 1/8 dot.
    *   **Feedback**: Medium to High.
    *   **Filter (HP/LP)**: Bandpass the delay (cut lows and highs) to keep it subtle.
    *   **Mix**: 20-30%.

### Result
*   When Gross Beat does a "Tape Stop" to silence, the Delay catches the last audible moment and echoes it out into the silence.
*   When Gross Beat "stutters", the Delay creates a rhythmic tail that blends the stutter into the next bar.

## 🎛️ Advanced Trick: "The Glitch Dub"
1.  **Automate the Delay's Input Volume**.
2.  Only send signal to the delay *during* the Gross Beat crazy moments.
3.  Leave the dry signal clean when Gross Beat is bypassing.

```

---

## FILE: 03-Workflows\by-plugin-combo\gross-beat-and-love-philter.md

```markdown
# Gross Beat + Love Philter

The ultimate "Image-Line Effect Chain".

## 🤝 Why they work together
*   **Gross Beat**: Handles Time and Volume (Rhythm/Gating).
*   **Love Philter**: Handles Frequency and Pan (Filter Sweeps).
*   Both share the same **Envelope Editor** DNA, making them feel like one giant plugin.

## 🎛️ Routing Strategy

### Configuration A: Gross Beat -> Love Philter
*   **Sound**: "Glitchy Filter".
*   **Result**: The audio is chopped/reversed *first*, and then that chaotic signal is smoothed out or swept by the filter.
*   *Use Case*: Dubstep basses, complex drum fills. The filter movement remains smooth even if the audio is stuttering.

### Configuration B: Love Philter -> Gross Beat
*   **Sound**: "Filtered Glitch".
*   **Result**: The audio is filtered first. If you have a long filter sweep, Gross Beat will "chop up" the sweep itself.
*   *Use Case*: If you reverse a filter sweep, you get a "sucking" effect.
    *   *Try This*: Low-pass sweep down (Love Philter) -> Reverse 1 Beat (Gross Beat). This creates a "rising" reverse sweep effect from a falling filter.

## 🧠 Creative Combo Idea: "The Rhythmic Resonator"
1.  **Gross Beat**: Set to a fast 1/16th note gate (Trance Gate).
2.  **Love Philter**: Set to a High Resonance Band-Pass filter with an LFO moving the cutoff slowly.
3.  **Result**: A rhythmic, talking bass sound where the "rhythm" comes from Gross Beat and the "vowel" comes from Love Philter.

```

---

## FILE: 03-Workflows\experimental\sound-design-hacks.md

```markdown
# Sound Design Hacks & Experimental Uses

Pushing Gross Beat beyond "Half-Speed" and "Stutter".

## 🏎️ 1. The Doppler Effect
**Concept**: The Doppler effect (a car passing by) is a combination of **Pitch Drop** and **Volume Pan/Fade**.
**Recipe**:
1.  **Time Grid**: Draw a curve that starts slightly above the safety line (High Pitch) and sweeps down to slightly below it (Low Pitch).
2.  **Volume Grid**: Draw a "Bell" curve (Fade In -> Fade Out).
3.  **Result**: The sound screams towards you and then drags away. Great for FX transitions (Wooshes).

## 🐝 2. Wavetable Synthesis (The "Buzz" Loop)
**Concept**: If you loop a tiny fragment of audio fast enough (audio rate), it becomes a tone.
**Recipe**:
1.  **Input**: Feed a constant sustained note (or white noise) into Gross Beat.
2.  **Time Grid**:
    *   Set Snap to **1/64** or smaller.
    *   Create a sawtooth "Repeater" pattern that repeats the same tiny sliver of audio.
3.  **Tuning**:
    *   The *length* of the repeat determines the pitch.
    *   Shorter repeat = Higher Pitch.
    *   Longer repeat = Lower Pitch.
4.  **Result**: You turn a drum loop into a metallic robotic synthesizer.

## 💾 3. Bitcrush / Decimation Emulation
**Concept**: Reducing sample rate is essentially "holding" a sample value for longer than it should be held.
**Recipe**:
1.  **Time Grid**:
    *   Use the **Hold** tool (Steps).
    *   Draw a "Staircase" line that follows the safety diagonal.
    *   The "steps" mean the audio freezes for a split second, then jumps, then freezes.
2.  **Result**: This introduces "Sample & Hold" distortion artifacts similar to old samplers or bitcrushers, but with a unique rhythmic texture.

## 🔁 4. Infinite Riser (Shepard Tone)
**Concept**: An illusion of a tone that rises forever.
**Recipe**:
1.  **Time Grid**: Create a ramp that pitches up (Slope < 1).
2.  **Volume Grid**: Create a crossfade (Fade In at start, Fade Out at end).
3.  **Result**: As the pitch gets high, the volume fades out, while the next loop starts fading in at the low pitch. It sounds like it never stops rising.

```

---

## FILE: 04-Reference\00_MIDI_Pattern_Triggering.md

```markdown
# Workflow: MIDI Pattern Triggering (Live Glitching)

## The Concept
Instead of drawing automation lines, use your MIDI keyboard to "play" Gross Beat patterns like an instrument.

## Setup
1.  Load **Gross Beat**.
2.  In the Plugin Wrapper settings (gear icon), set the **Input Port** to `1`.
3.  Create a **MIDI Out** channel in the Channel Rack. Set its **Port** to `1`.
4.  Now, Piano Roll notes in the MIDI Out channel will trigger Gross Beat slots:
    *   **C4** = Pattern 1
    *   **C#4** = Pattern 2
    *   ...and so on for all 72 slots. [SRC: IL-MAN]

## The "Performance" Recipe
1.  Set Gross Beat to "Hold" mode.
2.  Play your track.
3.  "Jam" on your keyboard. Tap the Half-speed key on the 1, a Stutter key on the 3, and a Tape Stop key on the 4.
4.  Record this MIDI into the Playlist.

## Why This is Better
*   It allows for **complex combinations** that are too tedious to draw with the mouse.
*   It feels more "human" and rhythmic.

## Pitfalls
*   **Latency:** Ensure your audio driver buffer is low (under 512 samples) or the pattern switching will feel "laggy."

```

---

## FILE: 04-Reference\01_Source_Log.md

```markdown
# Source Log & Official Links: Gross Beat

## Official Links
*   **Manual:** [Gross Beat Official Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Gross%20Beat.htm)
*   **Tutorial:** [Time & Volume Manipulation Masterclass](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Gross%20Beat_tutorials.htm)

## Source Log
1.  **[SRC: IL-MAN]:** Official Manual. Used for buffer logic (2-bar limit), MIDI triggering (Port 1), and envelope editing rules.
2.  **[SRC: REPUTABLE]:** SeamlessR (Gross Beat Deep Dive). Used for the "Diagonal Line" mental model and smoothing (Attack/Release) best practices.
3.  **[SRC: REPUTABLE]:** Cymatics (Trap Production Secrets). Used for the Half-time parallel mixing (50% Mix) and Master Bus "Tape Stop" safety rules.

## Coverage Checklist
- [x] 2-Bar Buffer Mechanics
- [x] Diagonal Line / Time Mapping Logic
- [x] Perfect Half-Speed Recipe
- [x] Tape Stop / Scratch Workflows
- [x] MIDI Note Triggering Setup
- [x] 5 Vibe Targets (Moody, Upbeat, Psychedelic, Jazzy, Vibey)
- [x] Click/Artifact Troubleshooting

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Gross Beat (Hip-Hop/Trap)

## Vibe 1: The "Modern Trap" Half-Time
*   **Sound:** Dark, heavy, slowed-down pianos or bells.
*   **Key Move:** 1/2 Speed + 50% Mix + High-Pass @ 200Hz.

## Vibe 2: The "Wheezy/Turbo" Reverse
*   **Sound:** Sucking, ethereal, atmospheric melodies.
*   **Key Move:** Reverse Time pattern + 30% Mix + Heavy Reverb after Gross Beat.

## Vibe 3: The "Glitch-Hop" Stutter
*   **Sound:** Spastic, rhythmic, repetitive.
*   **Key Move:** 1/8 note Time repeats (staircase shape) + MIDI triggering.

## Vibe 4: The "Drill" Gate
*   **Sound:** Sharp, percussive, aggressive volume cuts.
*   **Key Move:** 1/16 note Volume Gate + Fast Attack (for clicky-ness) or Slow Attack (for pumping).

## Vibe 5: The "Lo-Fi" Tape Stop
*   **Sound:** Winding down, nostalgic, dusty.
*   **Key Move:** 1-bar slow Tape Stop at the end of every 8th bar.

```

---

## FILE: 04-Reference\math-and-precision.md

```markdown
# Math & Precision: Grid Science

For the advanced user, "feeling it out" isn't enough. Here is the math behind the grid.

## 📏 The Grid Dimensions
*   **Width (Time)**: 4 Beats (1 Bar).
*   **Height (Buffer)**: 2 Bars (8 Beats).

## 🧮 Tuplets & Polyrhythms
To draw triplets (1/3, 1/6, 1/12, 1/24) in a 4/4 grid:

1.  **The Math**:
    *   1 Beat = 1.0 Unit.
    *   Triplet (1/3 Beat) = 0.333...
    *   Gross Beat Snap "1/3 Beat" exists in the menu. Use it!

2.  **Complex Tuplets (5s, 7s)**:
    *   Gross Beat does **not** have a 1/5 or 1/7 snap.
    *   **Workaround**: You must calculate the decimal position or "eyeball" it relative to the 1/16th grid lines.
    *   *Formula*: `Grid Position = (Target Tuplet Index / Total Tuplets) * Beat Width`.

## 📐 Slope Formulas (Speed)

If $y$ is buffer position and $x$ is time:

*   **Normal Speed (1.0x)**: $Slope = 1$ (45 degrees).
*   **Half Speed (0.5x)**: $Slope = 2$ (Steeper).
    *   Why? To play 1 second of audio over 2 seconds of time, you must "fall behind" at a rate of 2:1?
    *   Actually: You play audio at 0.5x rate.
    *   *Buffer Movement*: You move through the buffer at 0.5x the recording speed.
    *   **Equation**: `Time Point = Safety Line - (0.5 * Elapsed Time)`.
*   **Reverse (-1.0x)**: $Slope = -1$ (Upwards).
    *   *Visual*: The line goes UP at the same angle the Safety Line goes DOWN.

## 🎛️ Exact Latency Calculation
Gross Beat introduces latency equal to the **Lookahead** (if any) or simply the **Buffer Delay** if the envelope forces it.
*   **Rule**: The plugin reports latency to FL Studio.
*   **Manual Fix**: If you are drawing a curve that starts "Deep" in the buffer (e.g., at -1 Bar), you don't *add* latency, you are just playing old audio. The *system* latency is constant.

```

---

## FILE: 04-Reference\midi-pattern-triggering.md

```markdown
# MIDI Pattern Triggering in Gross Beat

Real-time pattern switching is the heart of performing with Gross Beat.

## 🎹 Default Mapping

Gross Beat assigns slots to MIDI notes automatically when the plugin has focus or is linked.

### Volume Slots (Orange)
*   **Range**: MIDI Notes **C1** to **B3** (Standard MIDI numbering).
*   **Keys**: White keys typically map to the slots sequentially (Slot 1 = C1, Slot 2 = D1, etc. depending on keyboard mapping mode).
*   **Black Keys**: Often used for momentary or "empty" slots depending on preset.

### Time Slots (Green)
*   **Range**: MIDI Notes **C4** to **B6**.
*   **Keys**: Mapped sequentially to the 36 time slots.

## 🔗 Setup Methods

### Method 1: Direct MIDI (Live Performance)
1.  Select the Gross Beat track in the Mixer.
2.  Ensure your MIDI keyboard is active.
3.  Play keys in the C1-B3 or C4-B6 range.
4.  *Note*: Gross Beat must be the focused window/plugin for direct MIDI input unless exclusively linked.

### Method 2: Piano Roll (Automation)
1.  **Fruity Keyboard Controller**: Add this channel to your Rack.
2.  **Link**: Right-click the Gross Beat "Slot" selector (or the specific Time/Volume slot grid).
3.  **Link to Controller**: Select "Link to controller" and choose the Keyboard Controller's "Note" output.
4.  **Draw**: Now you can draw notes in the Piano Roll of the Keyboard Controller to switch slots.

### Method 3: Automation Clips
1.  Right-click the specific Slot you want to trigger.
2.  Select "Create automation clip".
3.  *Drawback*: This creates a continuous automation curve which can be harder to edit than discrete MIDI notes.

## ⏱️ Synchronization Settings

When you hit a key, *when* does the pattern switch? This is controlled by the **Trig (Trigger)** and **Pos (Position)** knobs at the bottom.

*   **Hold**: Pattern is only active while the key is held down. (Good for momentary glitches).
*   **Trig: Off**: Instant switch (can cause clicks).
*   **Trig: 1 Beat**: Waits for the next beat to switch (Musical quantization).
*   **Trig: 4 Beats**: Waits for the next Bar.

## 💡 Best Practices

*   **Dedicate a Slot to "Empty"**: Always keep Slot 1 (or your preferred slot) as a "Bypass" or empty pattern so you can easily return to dry signal.
*   **Use "Hold" for Glitches**: For stutter effects, enable "Hold" so the effect stops the moment you release the key.

```

---

## FILE: 04-Reference\smoothing-and-declicking-mechanics.md

```markdown
# Smoothing & De-Clicking Mechanics

Clicks are the enemy. Gross Beat has two distinct systems to fight them. Understanding the difference is key to a clean sound.

## 🎚️ 1. The Global "ATT" (Attack) Knob
Located in the **Volume Envelope** section (Bottom Left).

*   **What it does**: It applies a smoothing fade-in to **every sharp vertical jump** in the *Volume Grid*.
*   **Physics**: It turns a "Square" wave into a "Trapezoid" wave.
*   **Values**:
    *   **0ms**: Hard digital edge. Maximum click. (Good for bitcrush effects).
    *   **2-5ms**: Percussive snap. Good for Trance Gates. Removes the "pop" but keeps the punch.
    *   **10-20ms**: Soft "swelling" gate. Good for R&B chords/pads.
    *   **>50ms**: Slow attack. The gate loses its rhythm and feels laggy.
*   **Rule**: This *only* affects the Orange Volume Grid. It does nothing for Time jumps.

## 🔘 2. The "Click Reduction" Switch
Located in the **Time Settings** (Bottom Right).

*   **What it does**: It creates a microscopic crossfade (de-clicking window) whenever the playback head **Jumps** to a new position in the *Time Grid*.
*   **Scenario**:
    *   You are playing Bar 1.
    *   You jump instantly to play audio from "1 beat ago".
    *   The waveform at "Now" and "1 beat ago" likely don't match (one might be at +3dB, the other at -5dB).
    *   This jump creates a "DC Offset" pop.
*   **Action**: "Click Reduction" fades the old signal out and the new signal in over a few samples.
*   **Settings**:
    *   **Off**: Instant jump. Maximum click. Crispest timing.
    *   **On (Low/High)**: Smooths the jump. May soften the transient slightly but kills the pop.
    *   *Pro Tip*: For Drum Glitches, sometimes you WANT the click (it adds aggression). For Melodies, you almost always want it ON.

## 📉 3. Manual Smoothing (The "Curve" Method)
If the automatic tools fail:
1.  **Zoom in** on your envelope.
2.  Don't draw vertical lines (90 degrees).
3.  Draw slightly angled lines (85 degrees).
4.  This creates a manual "fade" in the envelope itself.

```

---

## FILE: 04-Reference\troubleshooting-common-issues.md

```markdown
# Troubleshooting & Common Pitfalls

Even pros get confused by Gross Beat. Here are the most common issues and fixes.

## 🔊 1. The "Clicking" Problem
**Symptom**: You hear a loud "Pop" or "Click" every time the loop restarts or the pattern switches.
**Causes**:
*   **DC Offset / Waveform Discontinuity**: You are jumping from one point in a wave to a completely different point instantly.
**Fixes**:
1.  **Click Reduction (De-clicking)**: Turn ON the "Click Reduction" knob (bottom right).
2.  **Volume Smoothing**: In the Volume Grid, increase **ATT (Attack)** to ~5ms-10ms. This adds a micro-fade-in to every cut.
3.  **Zero Crossings**: Manually edit your envelope points to align with grid lines where the waveform might be near zero (hard to guess, so rely on smoothing).

## 📉 2. Phasing / "Thin" Sound
**Symptom**: When using the **Mix** knob to blend the effect, the sound gets hollow, quiet, or weirdly metallic.
**Cause**:
*   **Phase Cancellation**: The "Time" envelope delays the audio slightly. Mixing delayed audio with original audio creates comb filtering (Phasing).
**Fix**:
*   **Avoid the Channel Rack Mix Knob**: Do NOT use the mixer track's wet/dry knob.
*   **Use Gross Beat's Mix Knobs**: Use the internal **Time Mix** and **Volume Mix** knobs. They are designed to handle alignment better, but phasing is often unavoidable with time-stretching.
*   **Commit**: For half-speed, it is often better to be 100% Wet or 0% Wet.

## 🔇 3. Silence at Song Start
**Symptom**: The first bar of your song is silent, even though the pattern is "On".
**Cause**:
*   **Empty Buffer**: If your Gross Beat pattern says "Play audio from 1 bar ago" (e.g., a reverse or delay), and you are at Bar 1 Beat 1, *there is no audio from 1 bar ago*.
**Fix**:
*   **Pre-roll**: Render your audio/song starting at Bar 2 or 3.
*   **Bypass Start**: Automate Gross Beat to be "Off" (Slot 1 - Empty) for the first bar, then switch to the effect at Bar 2.

## ⏱️ 4. Latency / Out of Sync
**Symptom**: The effect sounds late or sloppy.
**Cause**:
*   **PDC (Plugin Delay Compensation)**: Gross Beat introduces latency. FL Studio usually compensates, but complex routing (Sidechains/Patcher) can break it.
**Fix**:
*   Check your Mixer Track's **latency icon** (clock).
*   Ensure **Trig** (Trigger) alignment is set correctly. If **Trig** is set to "4 Beats", your pattern change waits for the next bar. Set to **Off** or **1/4 Beat** for instant changes.

```

---

