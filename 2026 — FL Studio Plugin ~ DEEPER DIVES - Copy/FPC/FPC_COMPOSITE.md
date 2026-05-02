# FPC - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# FPC - Fruity Pad Controller

`\`\`
███████╗██████╗  ██████╗ 
██╔════╝██╔══██╗██╔════╝ 
█████╗  ██████╔╝██║      
██╔══╝  ██╔═══╝ ██║      
██║     ██║     ╚██████╗ 
╚═╝     ╚═╝      ╚═════╝ 
`\`\`

**Plugin Type:** Pad Sampler / Drum Machine
**Category:** Generator / Drum / Performance
**Official Manual:** [Image-Line FPC Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FPC.htm)

---

## 🎯 What is FPC?

FPC (Fruity Pad Controller) is a professional, MPC-style drum machine plugin. It features **16 multi-layered pads** across two banks (A and B), allowing for 32 total sounds per kit. Its true power lies in its **Velocity Layering**, where different samples can be triggered based on how hard a pad is hit, enabling realistic and dynamic drum performances. It includes a comprehensive content library and a pattern manager for instant groove creation.

**Key Capabilities:**
- **32 Total Pads:** Two banks of 16 velocity-sensitive pads.
- **Multi-Layer Sampling:** Stack unlimited samples per pad with velocity ranges.
- **MPC Emulation:** Layout and workflow inspired by legendary hardware.
- **Velocity Sensitivity:** Trigger different samples (e.g. ghost notes) automatically.
- **Pattern Manager:** Load MIDI loops directly into the FPC workflow.
- **Mixer Routing:** Send each pad to an independent mixer track.
- **Envelope Shaping:** Custom ADSR curves for every sample layer.
- **Content Library:** Direct access to downloadable high-quality drum banks.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **pad-layering-logic.md** (Velocity ranges)
3. Create **parameter-cheat-sheet.md**
4. Load the "Acoustic Drum Kit" and watch the velocity meters move as you play different notes.

### For Beatmakers:
1. Study **building-custom-drum-kits.md**
2. Review **mapping-external-pads.md** (Akai MPC/MPD setup)
3. Learn **choking-and-cut-groups.md** (Hi-hat logic)

### For Mix Engineers:
1. Study **multi-output-routing-setup.md**
2. Review **layer-panning-and-tuning.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **The Pads:** 1-16 (A/B).
  - **Sample Layers:** The "Wave" list.
  - **Velocity Handles:** Range bars on the right.
  - **Envelopes:** Volume curves.
  - **Output:** Mixer offset (per pad).

- [ ] **cut-groups-explained.md**
  - How to make a closed hi-hat silence an open hi-hat.

#### 02-Data/parameters/
- [ ] **fpc-specs.json**
  `\`\`json
  {
    "plugin_name": "FPC",
    "pads": 32,
    "layers": "Unlimited per pad",
    "features": ["MPC Layout", "Velocity splitting", "MIDI patterns"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **realistic-acoustic-drums.md**
  - Loading 4 velocity layers for a Snare (Soft, Med, Hard, Rim).
  - Adjusting velocity ranges so they crossfade smoothly.
  - Adding "Humanize" randomness (if available).

- [ ] **fpc-with-external-hardware.md**
  - Mapping an Akai MPD to the FPC layout.
  - Using "MIDI Learn" for pad assignment.

- [ ] **creating-glitch-kits.md**
  - Layering a kick synth with a noise burst.
  - Using Cut Groups for rhythmic stuttering.

#### 03-Workflows/by-context/
- [ ] **hip-hop-workflow-optimization.md**
- [ ] **drum-kit-preset-creation.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **pattern-manager-midi-import.md**
  - How to use the FPC pattern selector to drag MIDI grooves into the Playlist.

---

## 🔬 Research Framework

### Phase 1: Pad Logic (Week 1)
**Goal:** Sample Stacking

**Tasks:**
1. Load 3 different samples onto Pad 1
2. Set Velocity Range 1 (0-40), Range 2 (41-80), Range 3 (81-127)
3. Verify they trigger correctly based on hit strength
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I delete a sample from a pad?
- Can I pan layers independently within one pad? (Yes).

### Phase 2: Mixing & Grouping (Week 2)
**Goal:** The Kit

**Tasks:**
1. Set up a "Cut Group" for Pad 3 (Open Hat) and Pad 4 (Closed Hat)
2. Route Pad 1 to Mixer 10 and Pad 2 to Mixer 11
3. Create multi-output-routing-setup.md

---

## 📊 Plugin Specifications to Document

### Engine
- Sample Formats (WAV, SF2, etc.?)
- Max Pad Count (32)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why are my pads overlapping? (Check the MIDI Note mapping in the top right - make sure each pad has a unique note).
2. How to change the pad layout to match my controller? (Right-click a pad -> "Map to controller").

---

## 🔗 Cross-Reference with Other Plugins

FPC is often used with:
- **Slicex** (Sampling chops into FPC pads)
- **Fruity Delay 3** (Per-pad echo via multi-output)

---

## 📦 File Structure Summary

`\`\`
FPC/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── cut-groups-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fpc-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── realistic-acoustic-drums.md
│   │   └── multi-output-routing-setup.md
│
└── 04-Reference/
    └── pattern-manager-midi-import.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Build a 4-layer velocity-sensitive drum pad from scratch
- [ ] Explain the benefit of Cut Groups for realistic hi-hats
- [ ] Route a full kit to 8 different mixer tracks using one instance
- [ ] Successfully map an external pad controller to the FPC interface

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\00_Overview.md

```markdown
# FPC - Overview

## What is FPC?

FPC (Fruity Pad Controller) is a professional, MPC-style drum machine plugin that provides 16 velocity-sensitive pads across two banks (A and B), allowing for 32 total sounds per kit. It features sophisticated multi-layering capabilities where different samples can be triggered based on velocity, enabling realistic and dynamic drum performances. FPC includes comprehensive content libraries and pattern management for instant groove creation.

**Key Capabilities:**
- **32 Total Pads**: Two banks of 16 velocity-sensitive pads (A and B)
- **Multi-Layer Sampling**: Stack unlimited samples per pad with velocity ranges
- **MPC Emulation**: Layout and workflow inspired by legendary MPC hardware
- **Velocity Sensitivity**: Trigger different samples (e.g. ghost notes) automatically based on velocity
- **Pattern Manager**: Load MIDI loops directly into the FPC workflow
- **Mixer Routing**: Send each pad to an independent mixer track
- **Envelope Shaping**: Custom ADSR curves for every sample layer
- **Content Library**: Direct access to downloadable high-quality drum banks
- **Choke Groups**: Pads that silence each other (e.g., open/closed hi-hats)

**Primary Use Cases:**
- Professional drum programming and performance
- MPC-style beat creation and sequencing
- Multi-layered drum kit design with velocity switching
- Live performance with pad controllers
- Sample-based drum sound design
- Quick sketching of drum patterns and grooves

---

## Where it sits in FL Studio ecosystem

FPC is categorized as a **Pad Sampler / Drum Machine** and fits into the Generator category of FL Studio's plugin ecosystem. It serves as:

- A **professional drum machine** for beat creation and programming
- A **sample player** with advanced layering capabilities
- A **performance controller** for live pad-based performance
- A **kit designer** for creating custom drum kits
- A **pattern sequencer** for creating drum patterns

It works well in various contexts within FL Studio:
- As a primary drum machine in the Channel Rack
- For live performance with pad controllers
- As a sketching tool for drum pattern ideas
- For creating complex, velocity-aware drum kits
- As part of a larger drum production workflow

## What problem it solves and who it's for

FPC addresses several key challenges in music production:

1. **Professional Drum Programming**: Provides MPC-style workflow for creating professional drum patterns
2. **Velocity Layering**: Allows for realistic drum sounds with different samples triggered by velocity
3. **Pad Performance**: Enables live performance with drum pads or keyboard
4. **Kit Design**: Offers comprehensive tools for creating custom drum kits
5. **Pattern Creation**: Includes pattern management for quick groove creation
6. **Mixer Integration**: Provides individual routing for each pad to mixer tracks

It's ideal for:
- Hip-hop and electronic music producers
- Beat makers who prefer MPC-style workflow
- Live performers using pad controllers
- Sound designers creating drum kits
- Anyone who wants professional drum programming capabilities
- Users who prefer tactile, pad-based drum programming

## A simple mental model: how to think about it in 60 seconds

Think of FPC as a "digital MPC in a box" - imagine the legendary Akai MPC hardware sampler but integrated directly into FL Studio. You have 16 pads (with 2 banks for 32 total) that respond to how hard you hit them (velocity), and each pad can contain multiple samples that play at different velocity ranges. For example, on a snare pad, a soft hit might trigger a ghost note sample, a medium hit a regular snare, and a hard hit a rim shot. It's like having a complete drum machine with a massive sound library and professional pattern sequencer built right into your DAW.

The key insight is that FPC combines the tactile, performance-oriented workflow of hardware drum machines with the flexibility and integration of a software plugin.

## When to use it

**Use FPC when:**
- You want MPC-style drum programming and workflow
- You need velocity layering for realistic drum sounds
- You're creating complex drum kits with multiple samples per sound
- You want to perform drums live with pad controllers
- You need choke groups (e.g., open/closed hi-hats)
- You want to quickly sketch drum patterns
- You prefer pad-based over step-sequencer drum programming

**Don't use FPC when:**
- You need the advanced synthesis of Fruity DX or Sytrus for drum sounds
- You want simple, single-sample drum triggers without layering
- You prefer step-sequencer style programming (use the Channel Rack instead)
- You need advanced automation capabilities beyond what FPC provides
- You're looking for a simple sampler rather than a drum machine

## Links

- [Official Manual Page](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FPC.htm)
- [FPC Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/FPC_tutorials.htm)
- [FPC Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fpc+tutorial)
```

---

## FILE: 01-Learning\01_UI_Tour_And_Core_Concepts.md

```markdown
# FPC - UI Tour And Core Concepts

## UI Tour

### Main Interface Layout

FPC presents a professional drum machine interface with a clear, organized layout optimized for pad-based drum programming. The interface is divided into several key areas:

#### Top Section
- **Title Bar**: Shows the plugin name and version
- **Preset Browser**: For loading and saving drum kit presets
- **Global Controls**: Including global tune, decay, and other kit-wide parameters
- **Bank Selector**: Toggle between Bank A (pads 1-16) and Bank B (pads 17-32)

#### Central Area - Pad Matrix
The main area features the iconic 4x4 pad matrix (expandable to 8x4 with both banks):

**Pad Grid**:
- **16 Hexagonal Pads**: Arranged in 4x4 grid (Bank A)
- **Color Coding**: Different colors for different drum types
- **Velocity Sensitivity**: Visual feedback based on trigger velocity
- **Pad Status Indicators**: Showing active samples and layering

**Additional Pads**:
- **Bank B**: Additional 16 pads accessible via bank toggle
- **Total of 32 Pads**: Across both banks for extensive kit creation

#### Right Panel - Sample and Layer Controls
- **Sample List**: Shows samples loaded on the selected pad
- **Layer Management**: Controls for multi-layering per pad
- **Velocity Ranges**: Visual representation of layer velocity splits
- **Sample Parameters**: Per-sample controls (tune, decay, etc.)

#### Bottom Section - Mixer and Transport
- **Mini Mixer**: Compact mixer interface for pad level control
- **Transport Controls**: Play, stop, record for pattern playback
- **Pattern Controls**: Pattern selection and management
- **Status Indicators**: Showing current settings and activity

### Visual Feedback Elements

FPC provides extensive visual feedback through:
- **Pad Illumination**: Pads light up when triggered
- **Velocity Meters**: Visual representation of velocity response
- **Layer Visualization**: Shows how velocity ranges map to different samples
- **Parameter Value Displays**: Numeric readouts for precise control
- **Active State Indicators**: Showing which parameters are being adjusted
- **Sample Waveforms**: Visual representation of loaded samples

## Core Concepts and Terminology

### Pad-Based Drum Programming

**Pads**: The 16 (or 32 with both banks) trigger points that represent individual drum sounds. Each pad can contain one or multiple samples.

**Banks**: Two separate banks (A and B) of 16 pads each, allowing for 32 total sounds per kit. Bank A contains pads 1-16, Bank B contains pads 17-32.

**Layers**: Multiple samples assigned to a single pad with different velocity ranges. For example, a snare pad might have a ghost note sample (0-30 velocity), regular snare (31-70 velocity), and rim shot (71-127 velocity).

**Velocity Ranges**: The velocity thresholds that determine which layer plays on a multi-layered pad.

### Key Parameters Explained

**Global Tune**: Adjusts the pitch of all samples in the kit simultaneously.

**Global Decay**: Controls the overall decay time of all pads in the kit.

**Pad Volume**: Individual volume control for each pad.

**Pad Pan**: Individual panning control for each pad.

**Pad Tune**: Individual pitch adjustment for each pad.

**Pad Decay**: Individual decay/time adjustment for each pad.

### Parameter Interactions

Understanding how parameters interact is crucial for effective use:

- **Velocity + Layers**: Velocity determines which sample layer plays on multi-layered pads
- **Tune + Decay**: Pitch adjustments can affect perceived decay length
- **Volume + Pan**: These interact to create the stereo field position
- **Global + Individual**: Global parameters affect all pads, individual parameters override for specific pads

### Core Terminology

**Choke Groups**: Pads that silence each other when triggered (e.g., open hi-hat silences closed hi-hat)
**Multi-Layering**: Having multiple samples on one pad triggered by different velocity ranges
**Bank Switching**: Changing between Bank A and Bank B to access different sounds
**Pad Mapping**: Assigning specific drum sounds to specific pads
**Velocity Splitting**: Dividing velocity ranges to trigger different samples
**Pattern**: A sequence of drum events within FPC's sequencer
**Kit**: A complete collection of sounds assigned to all pads
**Sample**: The audio file assigned to a pad or layer

## Typical Starting Workflow (the first 5 minutes)

1. **Load FPC**: Insert FPC into a channel in the Channel Rack

2. **Select a Default Kit**: Choose a preset from the preset browser (e.g., "Acoustic Kit" or "Hip Hop Kit")

3. **Test the Pads**: Play on the pads using mouse or MIDI controller to hear the sounds

4. **Switch Banks**: Toggle between Bank A and Bank B to access more sounds

5. **Load Your Own Samples**: Click on a pad and load your own drum samples

6. **Adjust Basic Parameters**: Modify volume, tune, and decay for the selected pad

7. **Try Multi-Layering**: Add additional samples to a pad with different velocity ranges

8. **Set Up Mixer Routing**: Route individual pads to separate mixer tracks if needed

9. **Create a Simple Pattern**: Use the built-in step sequencer to create a basic drum pattern

10. **Save Your Kit**: Save your custom kit for future use

## Common Beginner Traps (what people misunderstand)

1. **Thinking it's just a sampler**: Many users expect FPC to work like a simple sampler, but it's a full drum machine with MPC-style workflow and layering capabilities.

2. **Not understanding velocity layering**: Users often don't realize they can put multiple samples on one pad with different velocity ranges.

3. **Ignoring choke groups**: Beginners often don't set up choke groups for realistic hi-hat behavior.

4. **Bank confusion**: Not understanding that Bank A and Bank B are separate collections of sounds.

5. **Mixer routing**: Not knowing that each pad can be routed to its own mixer track for individual processing.

6. **Pattern vs. Channel**: Confusing FPC's internal patterns with FL Studio's channel automation.

7. **Sample format limitations**: Expecting all sample formats to work without understanding format compatibility.

8. **Velocity response**: Not realizing that FPC responds to velocity for both triggering and layer selection.

9. **Pad mapping**: Thinking pads are fixed to specific drum sounds rather than being customizable.

10. **Layer priority**: Not understanding how multiple samples on one pad interact with each other.
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: FPC

## Purpose & Identity
FPC (Fruity Pad Controller) is FL Studio's premier **drum machine and pad sampler**. Its primary identity is an MPC-style rhythm workstation. It features 16 velocity-sensitive pads (across two banks, A and B) that support infinite sample layering. It is the bridge between software sequencing and the feel of classic hardware drum machines. [SRC: IL-MAN]

## 60-second Mental Model
Think of it as 16 "Smart Buckets." 
- You can throw as many samples into a bucket as you want (Layering).
- You can tell the bucket to give you a quiet sample if you tap it lightly and a loud sample if you hit it hard (**Velocity Splitting**).
- You can tell Bucket A to stop making noise the second Bucket B is hit (**Cut Groups**).

## Hip-Hop / R&B Context
- **Authentic Boom Bap:** Layering a gritty vinyl kick with a modern sub-kick to get the best of both worlds (Jazzy/Moody).
- **The "Galloping" Hi-Hat:** Using Cut Groups to make open and closed hats interact realistically, creating the "bounce" found in trap and R&B (Upbeat).
- **Finger Drumming:** Mapping an external pad controller (like an Akai MPD) to FPC for live performance and "Off-the-grid" human feel.

## When To Use
- When you want to build a **realistic drum kit** with ghost notes and velocity dynamics.
- When you want a **centralized drum hub** rather than 16 separate sampler channels.
- When you need a **MPC-style layout** for creative rhythm programming.

## When NOT To Use
- **Simple 808s:** Use the standard **Sampler** for long sub-basses; FPC is optimized for short percussive hits.
- **Beat Slicing:** Use **Slicex** if you need to chop a loop; FPC is for building kits from one-shots. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: FPC

## UI Tour
The interface is centered around the 16 drum pads, with the editor on the right. [SRC: IL-MAN]

### 1. The Pad Bank (Left)
- **1-16 Pads**: Click to trigger.
- **Bank A / B**: Switches between two sets of 16 pads (32 total).
- **Pad Label**: Shows the MIDI note assigned to that pad.

### 2. The Layer Editor (Top Right)
- **Wave List**: Shows the samples loaded onto the selected pad.
- **Velocity Handles**: Vertical bars used to set the trigger range for each sample.
- **Volume/Pan/Tune**: Per-sample controls.

### 3. Pad Properties (Bottom Right)
- **Output**: Sets the Mixer Track offset. "0" means the FPC's track; "1" means the next track over.
- **Cut / Cut By**: The "Choking" logic.
- **Envelope**: ADSR curve for the selected pad.

### 4. Global Tools (Top Bar)
- **MIDI Note selector**: Assigns the hardware key to the pad.
- **Map Notes Macro**: Automatically maps pads 1-16 to your controller.

## Signal Flow
1. **MIDI Input**: MIDI data enters from the Piano Roll or a hardware controller.
2. **Note Match**: FPC matches the MIDI note to a specific Pad (1-32).
3. **Velocity Filter**: The engine checks the Velocity of the note and selects the corresponding Sample Layer.
4. **Envelope**: The Volume ADSR is applied to the sample.
5. **Channel Processing**: Panning and Tuning are applied.
6. **Routing**: The signal is sent to the Mixer based on the **Output** offset.
7. **Cut Groups**: If a "Cut" signal is triggered, it silences any pad currently playing in that group.

## Things Beginners Misunderstand
- **"Where is the sound?"**: FPC comes with a library, but if you start a new preset, the pads are empty. You must drag samples onto them.
- **The "Output" Knob**: This is an **OFFSET**. If FPC is on Mixer Track 10, setting Output to "1" sends that pad to Mixer Track 11.
- **Map Notes**: If your pads don't match your keyboard, click the "Down Arrow" near the MIDI note label and select "Map notes for entire bank."

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: FPC

## 1. The "Ghost Note" Snare
- **Technique**: Drag two snare samples onto Pad 2. 
- **Layer 1**: A quiet, "tappy" snare hit. Set Velocity range to 0-80.
- **Layer 2**: A loud, aggressive "crack." Set Velocity range to 81-127.
- **Move**: In the Piano Roll, draw low-velocity notes between your main snare hits.
- **Vibe**: Adds instant Boom-Bap realism and "pocket" to your drums.

## 2. Perfect Hi-Hat Choking
- **Technique**: Use the **Cut / Cut By** fields.
- **Move**: Set your Closed Hat (Pad 4) to Cut: 1 and Cut By: 1. Set your Open Hat (Pad 3) to Cut: 1 and Cut By: 1.
- **Listen For**: The Open Hat cutting off the moment the Closed Hat is played, just like a real drummer's pedal work.

## 3. Custom Layer Panning
- **Technique**: You can pan samples *within* a single pad.
- **Move**: Load two different "shaker" samples onto one pad. Pan Layer 1 50% Left and Layer 2 50% Right.
- **Result**: A massive, wide percussive hit from a single MIDI note.

## 4. Multi-Output Routing
- **Technique**: Don't mix your whole kit on one track.
- **Move**: Set FPC to Mixer Track 10. Set the Kick pad Output to 0 (Track 10). Set the Snare pad Output to 1 (Track 11). Set the Hats pad Output to 2 (Track 12).
- **Benefit**: You can now add a unique Delay to your hats and a unique Saturation to your snare.

## 5. Humanize via Randomization
- **Protocol**: If your drums sound too mechanical.
- **Fix**: Use the Piano Roll's **Alt+R (Randomize)** tool. Randomize the **Velocity** by 10% and the **Start Time** by a tiny fraction.
- **Verification**: FPC will respond to these micro-changes by triggering different layers or slightly shifting the groove. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Silent Pads** | Ensure the "Volume" slider for the individual sample layer is turned up. |
| **Overlap Noise** | Your "Release" in the ADSR envelope is too long. Turn it down to avoid a "muddy" kit. |
| **Controller Mismatch** | Use the "Map notes for entire bank" macro to resync your physical pads. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Drums_Translation_Guide.md

```markdown
# Vibe Drums Translation Guide: FPC

Using pad performance and layering to hit specific aesthetic drum targets.

---

## 1. MOODY
*Darkness, weight, and "dragging" lazy rhythms.*
- **The Lever**: **Low-Velocity Layers + High Damping Envelopes**.
- **Move**: Use samples with a lot of "air" or room noise. Set the ADSR Release to 10% (tight). Play behind the beat (lazy).
- **What to Listen For**: Drums that sound muffled and "heavy," creating a sense of intimacy and melancholy.
- **Don't Do This**: High-end transient boosts (too aggressive).

## 2. UPBEAT
*Energy, sharp transients, and driving "swing".*
- **The Lever**: **Hard Attack Layers + 15% Swing + Limiter Drive**.
- **Move**: Set FPC Output to a track with a Soft Clipper. Use high-velocity "hard" snare samples. Apply 15-20% "Main Swing" in the FL Studio Toolbar.
- **What to Listen For**: A "forward-leaning" energy where the drums feel like they are pushing the song.
- **Don't Do This**: Soft velocity layers (kills the drive).

## 3. PSYCHEDELIC
*Disorientation, shifting textures, and "trippy" space.*
- **The Lever**: **Per-Pad Stereo Panning + Pitch Drift**.
- **Move**: Load identical samples onto two pads. Pan them opposite. Pitch one up +5 cents and the other down -5 cents.
- **What to Listen For**: A "swirling" or "floating" drum image that feels larger than the speakers.
- **Don't Do This**: Mono drums.

## 4. JAZZY
*Soulful warmth, complex ghost notes, and "human" touch.*
- **The Lever**: **Multi-Layer Crossfading + No Quantization**.
- **Move**: Use at least 4 layers per pad. Draw your patterns without "Snap to Grid." 
- **What to Listen For**: Subtle variations in every hit. No two snare cracks should sound exactly the same.
- **Don't Do This**: Perfectly aligned 100% velocity notes.

## 5. VIBEY
*Modern luxury, smooth silk, and "expensive" width.*
- **The Lever**: **Parallel Reverb Busses + Layer Tuning**.
- **Move**: Route Snares and Hats to a "Reverb Send." Tune the percussion layers up +2 semitones to give them a "tighter" professional sheen.
- **What to Listen For**: A wide, shimmering drum atmosphere that wraps around the vocal.
- **Don't Do This**: Overloading the Kick with effects (keep it centered).

---

## Vibe Parameter Matrix
| Vibe | Layer Count | Swing | Envelope | Mixing Priority |
| :--- | :--- | :--- | :--- | :--- |
| **Moody** | 1 (Dark) | 5% | Short Release | LP Filtering |
| **Upbeat** | 2 (Hard) | 20% | Sharp Attack | Hard Clipping |
| **Psyched** | 2 (Stagger) | 10% | Long Decay | Phaser / Flanger |
| **Jazzy** | 4+ (Ghost) | 30% | Natural | Dynamic Range |
| **Vibey** | 2 (Silky) | 15% | Smooth | Stereo Width |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: FPC

FPC translates vibes through **Dynamic Layering** and **Rhythmic Interplay**.

## 1. Jazzy (Organic, Soulful, Human)
- **Concept:** "The Ghost Note Snare."
- **Levers:**
  - **Velocity Layers:** Use 4 layers for Pad 2 (Snare).
  - **Sample selection:** Layer 1 (Vel 0-40) = Soft Ghost note. Layer 2 (41-80) = Standard hit. Layer 3 (81-127) = Hard rimshot.
  - **Randomness:** Set "Random" triggering if using multiple samples at the same velocity.
- **Listen For:** Subtle variations in every snare hit that make the beat sound like a live drummer.

## 2. Upbeat (Kinetic, Sharp, Modern)
- **Concept:** "The Tight Trap Hat."
- **Levers:**
  - **Cut Groups:** Set Closed Hat (Pad 4) and Open Hat (Pad 3) to Cut Group 1.
  - **Decay:** Shorten the Volume envelope for the Closed Hat.
- **Listen For:** The Open Hat being instantly silenced by the Closed Hat, creating a sharp, rhythmic "choke" that drives the tempo.

## 3. Moody (Heavy, Dark, Damp)
- **Concept:** "The Muffled Acoustic Kit."
- **Levers:**
  - **Filter:** Route the Snare and Kick to their own mixer tracks and apply a 1kHz Low Pass filter.
  - **Samples:** Choose "Dampened" or "Tea-towel" drum samples.
- **Listen For:** A warm, close-mic'd sound that feels intimate and nocturnal.

## 4. Psychedelic (Warped, Layered, Synthetic)
- **Concept:** "The Melodic Perk."
- **Levers:**
  - **Layering:** Stack a standard Snare with a high-pitched Bell or reversed Sinewave.
  - **Panning:** Pan the Bell layer 50% Left and the Snare 50% Right within the same pad.
- **Listen For:** A unique, hybrid sound that has both a rhythmic hit and a strange, trippy tail.

## 5. Melodic (Polished, Commercial, Clean)
- **Concept:** "The Perfect Stack."
- **Levers:**
  - **Tuning:** Use the "Tune" knob on each layer to ensure your percussive elements (like Toms or Woodblocks) are in the key of your song.
- **Listen For:** Percussion that harmonizes perfectly with your chords and lead vocals. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: FPC (5 Minutes)

1.  **Insert:** Load **FPC** into the Channel Rack.
2.  **Load Samples:** Drag a Kick drum WAV onto **Pad 1**. Drag a Snare onto **Pad 2**.
3.  **Velocity Layers:** Drag a *second* (softer) snare hit onto the **same Pad 2**.
    - Notice the two wave icons. Adjust the vertical bars on the right to set when each sample triggers.
4.  **Cut Groups:** Select your Hi-Hat pad. Set **CUT** to `1` and **CUT BY** to `1`. Now, hitting the pad again will silence the previous tail.
5.  **Mix:** Look at the **OUTPUT** box in the top right of the pad interface. Set it to `1` to send that specific pad to the next available mixer track.
6.  **MIDI:** Click the **Pattern** selector (top right) to browse and load hundreds of pre-made MIDI drum loops.
7.  **Tip:** Right-click a pad -> **Map to controller** to quickly link your physical drum pads. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# FPC: The MPC Workflow

> **Scope:** Drum Sampling, Pad Layering, and Finger Drumming.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Medium (Layer Management).

## 🧠 The "Layer Stack" Concept
FPC is not just 16 pads. It is **16 Stacks of Layers**.
*   **Layers:** Each Pad can hold multiple samples (up to 32, though typically 4-8).
*   **Velocity Zones:** Layers can be mapped to trigger only at certain velocity ranges.
    *   *Soft Hit* -> Layer 1 triggers.
    *   *Hard Hit* -> Layer 4 triggers.
*   **Round Robin:** If layers overlap in velocity, FPC can cycle through them to avoid the "Machine Gun" effect.

**Signal Flow:**
`MIDI Note` -> **[PAD (Cut Groups)]** -> **[VELOCITY CHECK]** -> **[LAYER SELECTION]** -> **[ENVELOPE/PITCH]** -> **[PAD OUTPUT]**

---

## 🎛️ Section 1: Main Pad Properties

Controls that affect the *entire* stack of samples on a pad.

| Control | Function | Usage |
| :--- | :--- | :--- |
| **Volume/Pan** | Global Level. | Balancing the kit mix. |
| **Cut (Group)** | "Kill Switch" ID. | If this pad plays, it kills any pad with this "Cut By" ID. |
| **Cut By (Group)** | "Victim" ID. | If a pad with this "Cut" ID plays, silence this pad. |
| **Output** | Mixer Offset. | Routes this pad to a separate mixer track. |
| **Mute** | Silence/Solo. | Performance features for live breakdown. |
| **MIDI Note** | Trigger Key. | Click to "Learn" a new note from your controller. |

**Choke Group Example (Hi-Hats):**
*   **Closed Hat:** Cut = 1, Cut By = 1.
*   **Open Hat:** Cut = 1, Cut By = 1.
*   *Result:* Playing Closed stops Open. Playing Open stops Closed. Monophonic behavior.

---

## 🔁 Section 2: Layer Properties

Controls for the specific sample *inside* the stack.

*   **Mini-Preview:** Click to hear the raw sample.
*   **Spread Even:** Automatically maps multiple loaded samples across the 0-127 velocity range.
*   **Lock Layers:** Prevents velocity ranges from overlapping.
    *   *Off:* Layers can overlap (Layering sounds).
    *   *On:* Layers are exclusive (Velocity switching).
*   **Random:**
    *   *Cycle:* 1, 2, 3... (Round Robin).
    *   *Random:* True random.
    *   *Avoid Previous:* Smart random (never hits the same sample twice).

---

## ⚡ Technical Specs: Import/Export

*   **Drag & Drop:** You can drag single WAVs onto Pads.
*   **Multi-Drop:** If you drag a selection of 5 files onto one Pad, FPC asks: "Map to Layers?". Say yes, and it auto-maps Velocity.
*   **Saving Kits:**
    *   *Save Preset:* Saves the FPC state.
    *   *Export Sliced Loop:* If you have sliced a loop in Slicex/Edison, you can "Dump to Score" which loads the slices into FPC automatically.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Ghost Note" Scale
1.  **Layers:** Load a Soft Snare and a Hard Snare.
2.  **Velocity:**
    *   Soft Snare: 0 - 90.
    *   Hard Snare: 91 - 127.
3.  **Envelope:** Set a short decay on the Soft Snare.
4.  **Result:** When you program ghost notes (Velocity 40), you get a tight, quiet tick. When you hit hard (127), you get the full crack.

### 2. Stereo cymbal spread
1.  **Pad:** Crash Cymbal.
2.  **Layers:** 2 identical samples.
3.  **Pan:**
    *   Layer 1: Pan Left.
    *   Layer 2: Pan Right.
4.  **Pitch:** Detune Layer 2 by +10 cents.
5.  **Result:** Instant wide stereo width without using chorus Effects.

### 3. "Scale" Mode for Trap Hi-Hats
1.  **Usage:** Usually FPC is 1 note per pad.
2.  **Idea:** Map the *same* Hi-Hat sample to Pads 1, 2, 3, 4.
3.  **Pitch:** Tune Pad 1 (Base), Pad 2 (+2 semitones), Pad 3 (+4), Pad 4 (-2).
4.  **Performance:** You can now play a melody with the Hi-Hats using the pads.

```

---

## FILE: 01-Learning\Quick-Reference\cut-groups-explained.md

```markdown
# Quick Reference: Cut Groups Explained

How to manage "Choking" and "Muting" logic in FPC. [SRC: IL-MAN]

## 1. What is a Cut Group?
A Cut Group tells FPC: "If I play a note in this group, immediately stop all other notes currently playing in this same group."

## 2. Standard "Hi-Hat" Setup
- **Closed Hat (Pad 4)**: Set **Cut** to 1 and **Cut By** to 1.
- **Open Hat (Pad 3)**: Set **Cut** to 1 and **Cut By** to 1.
- **Result**: Every time you hit the Closed Hat, it will "choke" the Open Hat tail. This mimics how a real drummer uses their foot pedal.

## 3. Advanced "Vocal Chop" Logic
- Assign all your vocal pads (1-16) to **Cut: 2** and **Cut By: 2**.
- **Result**: You can play complex vocal stutters without the audio files overlapping and creating a "muddy" mess. Only one vocal slice will play at a time.

## 4. The "Cut By" Secret
- **Cut**: The group this pad *belongs* to.
- **Cut By**: The group that *triggers* this pad to stop.
- **Strategy**: You can make a Kick drum (Cut By: 1) stop a long Bass note (Cut: 1) without the Bass stopping the Kick!

---
**Pro Tip**: Use "--" (None) if you want a pad to ring out freely regardless of other hits (standard for Kicks and Snares).

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: FPC

The essential modifiers for the MPC-style drum brain. [SRC: IL-MAN]

---

## 🏗️ Pad Layout
- **Pad 1-16 (A/B)**: Trigger slots for your samples.
- **Midi Note**: The key that triggers the pad (e.g., C3).
- **Pad Menu (Down Arrow)**: Access "Map notes for entire bank" or "Reset pad."

## 🌊 Layer Editor (Right)
- **Layer List**: Stack samples vertically.
- **Vel (Velocity Bars)**: Drag the horizontal edges to define the trigger range.
- **Tune**: Pitch shift per layer (Cents).
- **Pan**: Stereo position per layer.

## 🛠️ Global Modifiers
- **Cut / Cut By**: Choking and muting logic.
- **Output**: Mixer track offset (relative to the FPC's track).
- **Volume / Pan**: Main pad levels.
- **Scale (Env)**: Multiplies the envelope times.

## 🌀 Patterns (Bottom)
- **Pattern Selector**: Choose a MIDI groove.
- **Import MIDI**: Load external drum patterns into the FPC workflow.

```

---

## FILE: 02-Data\00_Controls_Reference.md

```markdown
# FPC - Controls Reference

## Parameter List with Descriptions

### Global Controls

**Global Tune**
- **Description**: Adjusts the pitch of all samples in the kit simultaneously
  - Low values: Lower overall pitch
  - Medium values: Unity pitch
  - High values: Higher overall pitch
- **Range**: Usually ±24 semitones or more
- **Effect**: Changes pitch of all samples in the kit
- **Use for**: Tuning entire kit to match project key
- **Pro tip**: Use for quick key matching of drum kits

**Global Decay**
- **Description**: Controls the overall decay time of all pads in the kit
  - Low values: Shorter decay times
  - Medium values: Normal decay times
  - High values: Longer decay times
- **Range**: 0-100% typically
- **Effect**: Adjusts release time of all samples
- **Use for**: Adjusting overall kit sustain
- **Pro tip**: Use for matching kit decay to song tempo

**Global Volume**
- **Description**: Controls the overall output level of the kit
  - Low values: Quieter overall kit
  - Medium values: Normal overall level
  - High values: Louder overall kit
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts output level of all pads
- **Use for**: Overall kit level control
- **Pro tip**: Use for gain staging in your project

### Pad-Specific Controls

**Pad Volume**
- **Description**: Individual volume control for each pad
  - Low values: Quieter pad
  - Medium values: Normal pad level
  - High values: Louder pad
- **Range**: Usually ±12dB or more per pad
- **Effect**: Adjusts output level of individual pad
- **Use for**: Balancing individual drum sounds
- **Pro tip**: Use for creating realistic drum balance (kick louder than hi-hats)

**Pad Pan**
- **Description**: Individual panning control for each pad
  - Left values: Panned left
  - Center values: Center panned
  - Right values: Panned right
- **Range**: Usually L100 to R100
- **Effect**: Positions pad in stereo field
- **Use for**: Creating stereo drum kit
- **Pro tip**: Use for realistic kit positioning (kick center, hats right, etc.)

**Pad Tune**
- **Description**: Individual pitch adjustment for each pad
  - Low values: Lower pitch
  - Center values: Unity pitch
  - High values: Higher pitch
- **Range**: Usually ±24 semitones or more
- **Effect**: Changes pitch of individual pad
- **Use for**: Tuning individual drums
- **Pro tip**: Use for tuning toms to specific pitches

**Pad Decay**
- **Description**: Individual decay/release control for each pad
  - Low values: Shorter decay
  - Medium values: Normal decay
  - High values: Longer decay
- **Range**: 0-100% typically
- **Effect**: Adjusts release time of individual pad
- **Use for**: Adjusting individual drum sustain
- **Pro tip**: Use for controlling snare buzz or tom sustain

**Pad Filter**
- **Description**: Individual filtering for each pad
  - Low values: Darker, more filtered
  - Medium values: Neutral filtering
  - High values: Brighter, less filtered
- **Range**: 0-100% typically
- **Effect**: Adjusts high-frequency content of individual pad
- **Use for**: Tone shaping per pad
- **Pro tip**: Use for cleaning up harsh samples or adding brightness

### Layer Controls (Multi-Layering)

**Layer Volume**
- **Description**: Volume control for individual layers within a pad
  - Low values: Quieter layer
  - Medium values: Normal layer level
  - High values: Louder layer
- **Range**: Usually ±12dB or more per layer
- **Effect**: Adjusts volume of specific sample layer
- **Use for**: Balancing multiple samples on one pad
- **Pro tip**: Use for balancing different velocity layers

**Layer Tune**
- **Description**: Pitch adjustment for individual layers within a pad
  - Low values: Lower pitch for layer
  - Center values: Unity pitch for layer
  - High values: Higher pitch for layer
- **Range**: Usually ±24 semitones or more
- **Effect**: Changes pitch of specific sample layer
- **Use for**: Fine-tuning individual samples in layer stack
- **Pro tip**: Use for creating pitch variations in velocity layers

**Layer Decay**
- **Description**: Decay/release control for individual layers within a pad
  - Low values: Shorter decay for layer
  - Medium values: Normal decay for layer
  - High values: Longer decay for layer
- **Range**: 0-100% typically
- **Effect**: Adjusts release time of specific sample layer
- **Use for**: Adjusting sustain of individual samples in layer stack
- **Pro tip**: Use for creating different sustain characteristics per velocity layer

**Velocity Range**
- **Description**: Defines the velocity range for each layer
  - Low range: Triggers at low velocities (0-30)
  - Medium range: Triggers at medium velocities (31-70)
  - High range: Triggers at high velocities (71-127)
- **Range**: 0-127 (MIDI velocity range)
- **Effect**: Determines when each layer plays based on input velocity
- **Use for**: Creating velocity-sensitive drum responses
- **Pro tip**: Use for realistic drum response with ghost notes, normal hits, and accents

### Mixer Routing Controls

**Mixer Routing**
- **Description**: Controls how each pad routes to FL Studio's mixer
  - Single track: All pads to one mixer track
  - Per pad: Each pad to individual mixer track
  - Per group: Pads grouped to specific mixer tracks
- **Range**: Multiple routing options
- **Effect**: Determines mixer track assignment
- **Use for**: Individual processing of drum sounds
- **Pro tip**: Use per-pad routing for individual effects processing

**Send Levels**
- **Description**: Controls how much of each pad sends to auxiliary tracks
  - Low values: Less send to aux tracks
  - High values: More send to aux tracks
- **Range**: 0-100% typically
- **Effect**: Amount of signal sent to reverb/delay aux tracks
- **Use for**: Creating different reverb/send levels per pad
- **Pro tip**: Send snares and toms to reverb while keeping kicks dry

### Pattern Controls

**Pattern Length**
- **Description**: Sets the length of the internal pattern sequencer
  - Short lengths: 1/4 to 2 bars
  - Medium lengths: 4 to 8 bars
  - Long lengths: 16+ bars
- **Range**: Usually 1/16th note to 64 bars
- **Effect**: Changes pattern duration
- **Use for**: Matching pattern length to musical content
- **Pro tip**: Use 4 or 8 bar patterns for most musical applications

**Step Resolution**
- **Description**: Controls the timing resolution of the pattern sequencer
  - Low resolution: 1/4 or 1/8 notes
  - Medium resolution: 1/16 notes
  - High resolution: 1/32 or 1/64 notes
- **Range**: 1/4 to 1/64 notes typically
- **Effect**: Determines timing precision of pattern
- **Use for**: Matching resolution to musical style
- **Pro tip**: Use 1/16th for most applications, 1/32 for complex patterns

## Default Values and Safe Starting Ranges

### Global Defaults
- **Global Tune**: 0 semitones (unity)
- **Global Decay**: 50% (medium)
- **Global Volume**: 0dB (unity)

### Pad Defaults
- **Pad Volume**: 0dB (unity) for most pads
- **Pad Pan**: Center (0) for most pads
- **Pad Tune**: 0 semitones (unity)
- **Pad Decay**: 50% (medium)
- **Pad Filter**: 50% (neutral)

### Layer Defaults
- **Layer Volume**: 0dB (unity)
- **Layer Tune**: 0 semitones (unity)
- **Layer Decay**: 50% (medium)
- **Velocity Range**: Full range (0-127) for single layers

### Safe Starting Ranges
- **Global Tune**: -12 to +12 semitones for musical results
- **Global Decay**: 30-70% for natural results
- **Pad Volume**: -6dB to +6dB for safe operation
- **Pad Pan**: L50 to R50 for natural positioning
- **Pad Tune**: -2 to +2 semitones for subtle tuning
- **Velocity Range**: Overlapping ranges (e.g., 0-40, 30-80, 70-127) for smooth transitions

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **Global + Individual**: Global parameters affect all pads but individual parameters override
- **Tune + Decay**: Pitch changes can affect perceived decay length
- **Volume + Pan**: These interact to create stereo positioning
- **Velocity Ranges**: Overlapping ranges can cause multiple layers to trigger simultaneously

### Hidden Interactions
- **Layer Priority**: When velocity ranges overlap, the first layer in the list typically has priority
- **Filter + Decay**: Filtering can affect perceived decay characteristics
- **Tune + Sample Quality**: Extreme pitch changes may affect sample quality
- **Mixer Routing + CPU**: Per-pad routing may increase CPU usage due to multiple mixer tracks

### Right-Click Options
- **Parameter Reset**: Right-clicking on any knob resets it to default value
- **MIDI Learn**: Right-clicking on parameters reveals MIDI learn options
- **Sample Load**: Right-clicking on pads may reveal sample loading options
- **Layer Management**: Right-clicking on layers may reveal additional layer options
- **Pad Properties**: Right-clicking on pads may show additional pad settings

### Integration Points
- **MIDI Control**: All parameters can be mapped to MIDI CC messages
- **FL Studio Automation**: Full automation support for all parameters
- **Analyzer Integration**: Works with FL Studio's built-in spectrum analyzer
- **Mixer Integration**: Proper routing to FL Studio's mixer system
- **Patcher Compatibility**: Can be used within Patcher for complex routing
- **Playlist Integration**: Patterns can be used in FL Studio's playlist

## MIDI/automation notes and gotchas

### MIDI Implementation
- **Pad Mapping**: Each pad corresponds to a MIDI note (configurable)
- **Velocity Sensitivity**: Full 127-step velocity response for dynamic expression
- **Aftertouch**: May be supported depending on FL Studio version
- **Pitch Bend**: Affects all samples in the kit when active

### Automation Notes
- **Parameter Automation**: All parameters can be automated using FL Studio's automation system
- **Pad Parameter Automation**: Individual pad parameters can be automated
- **Layer Parameter Automation**: Layer-specific parameters can be automated
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback

### Gotchas
- **Parameter Extremes**: Setting parameters to extreme values may cause unexpected behavior
- **Velocity Range Overlap**: Overlapping velocity ranges can cause unintended layer triggering
- **Mixer Routing Changes**: Changing mixer routing during playback may cause audio discontinuities
- **Layer Count Limits**: Very high layer counts may impact performance
- **Sample Format Compatibility**: Not all sample formats may be fully compatible
- **CPU Usage**: Complex kits with many layers may increase CPU usage significantly
- **MIDI Note Mapping**: Changing pad MIDI note assignments may affect existing patterns
- **Pattern Compatibility**: Patterns may not transfer correctly between different pad mappings
```

---

## FILE: 02-Data\01_Troubleshooting_Notes.md

```markdown
# FPC - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Layer Priority Confusion**: When velocity ranges overlap between layers, the priority system might not work as expected, causing multiple layers to trigger simultaneously
- **Sample Loading Delays**: Large sample libraries may take longer to load in FPC compared to other samplers
- **MIDI Note Mapping**: Sometimes MIDI notes don't map correctly to pads after loading presets
- **Pattern Transfer Issues**: Patterns may not transfer correctly between different pad mappings
- **Choke Group Malfunction**: Choke groups occasionally don't work properly, especially with complex layering
- **Velocity Response Curves**: The velocity response may not be perfectly linear across all parameter settings
- **Bank Switching Artifacts**: Switching between banks during playback may cause slight audio discontinuities

### Limitations
- **Maximum Layer Count**: Limited number of layers per pad (exact limit depends on FL Studio version)
- **Sample Format Support**: May not support all sample formats (particularly some compressed formats)
- **No Built-in Effects**: No built-in effects per pad (requires mixer routing for effects)
- **Fixed Pad Count**: Fixed at 32 pads (16 per bank) with no expansion option
- **No Advanced Modulation**: Limited modulation options compared to more advanced samplers
- **No Sample Editing**: Cannot edit samples within FPC (requires external editors)
- **No Advanced Mapping**: Limited sample mapping options compared to dedicated samplers
- **Mixer Integration**: Limited to FL Studio's mixer routing options

### Weird Behaviors
- **Velocity Cross-Triggering**: In some layer configurations, high velocity on one pad might trigger layers on other pads
- **Parameter Smoothing**: Some parameters may have different smoothing behavior than expected
- **Filter Interaction**: The filter may interact differently with different sample types
- **Decay Behavior**: Decay settings may behave differently with layered samples
- **Global Parameter Override**: Global parameters may not always properly override individual pad settings
- **Pattern Timing**: Internal pattern sequencer may have slight timing variations compared to main FL Studio sequencer

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: Moderate CPU load for basic operation with few samples
- **Layer Impact**: Each additional layer increases CPU usage significantly
- **Polyphony Impact**: Higher polyphony settings increase CPU usage
- **Sample Quality**: Higher quality samples (bit depth/sample rate) may increase CPU usage
- **Multiple Instances**: CPU usage increases linearly with multiple instances
- **Real-Time Performance**: Generally optimized for real-time performance but complex layering may impact performance
- **Parameter Automation**: Automated parameters have minimal impact on CPU usage

### Performance Optimization Tips
- **Limit Layer Count**: Use only as many layers as necessary for each pad
- **Optimize Sample Quality**: Use appropriate sample rates and bit depths for your project
- **Disable Unused Pads**: Mute or disable pads that aren't being used
- **Freeze Tracks**: When rendering complex arrangements with many layered pads
- **Use Conservative Settings**: Avoid extreme settings that may increase processing demands
- **Monitor Performance**: Use FL Studio's performance meter to monitor CPU usage
- **Optimize Mixer Routing**: Use efficient routing to reduce unnecessary processing

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex layering
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance
- **Real-Time Performance**: Smaller buffers may be needed for responsive pad performance

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| No sound from pads | Muted pads, disabled channels, or routing issues | Check pad mute states, verify channel routing, ensure output is enabled | Verify signal path in mixer and check for audio activity |
| Clicking/popping | Sample ends too abruptly or layer switching artifacts | Apply sample crossfades, adjust layer velocity ranges | Listen for artifacts during pad triggering |
| High CPU usage | Too many layers, high polyphony, or complex samples | Reduce layer count, optimize polyphony, use simpler samples | Monitor CPU meter in FL Studio |
| Velocity layers not working | Incorrect velocity range settings or layer order | Verify velocity ranges don't overlap, check layer priority | Test with different velocity levels on keyboard/controller |
| Choke groups not functioning | Incorrect choke group assignment or timing issues | Verify choke group settings, check timing of pad triggers | Test choke behavior with rapid pad triggering |
| Audio distortion | Output levels too high or extreme parameter settings | Reduce output levels and check for extreme parameter values | Use peak meters to ensure no red peaks |
| Delayed response | Buffer size too large or interface lag | Reduce buffer size or check interface responsiveness | Test with different buffer sizes |
| Missing sounds | Samples not loaded or incompatible format | Reload samples or convert to compatible format | Verify sample loading status and format compatibility |
| Sync issues | Internal pattern sequencer timing vs project tempo | Check pattern tempo settings and sync options | Verify timing with metronome |
| Layer priority issues | Overlapping velocity ranges or incorrect priority | Adjust velocity ranges to avoid overlap, verify layer order | Test with various velocity levels |
| Global parameters not working | Parameter override issues or preset loading problems | Reset global parameters, reload preset | Compare with default settings |
| Bank switching problems | Preset compatibility or bank configuration issues | Verify both banks are properly configured | Test switching between banks |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of FPC with basic pad sampling capabilities
- **Basic Parameter Set**: Includes core pad controls (volume, pan, tune, decay)
- **Limited Layering**: Basic layering capabilities with limited parameters per layer
- **Simple Interface**: Basic interface with limited customization options

### FL Studio 20.7
- **Layer Enhancement**: Improved layer management and velocity range controls
- **Performance Improvements**: Minor optimizations to reduce CPU usage
- **Stability Enhancements**: Fixed occasional crashes when loading complex kits

### FL Studio 20.8
- **MIDI Integration**: Enhanced MIDI implementation and controller support
- **Choke Group Improvements**: Better choke group functionality and reliability
- **Sample Loading**: Improved sample loading performance

### FL Studio 21.0
- **Enhanced Parameters**: Additional parameters for individual pad control
- **Better Mixer Integration**: Improved routing options to FL Studio mixer
- **Updated UI**: Refreshed user interface with better visual feedback

### FL Studio 21.1
- **Layer Management**: Improved layer management and visualization
- **Velocity Response**: Enhanced velocity response curves and mapping
- **Bug Fixes**: Addressed various stability issues with complex layering

### FL Studio 21.2
- **Performance Optimization**: Further CPU usage optimizations
- **Parameter Smoothing**: Improved parameter smoothing for artifact-free changes
- **MIDI Learn Enhancement**: Better MIDI learn functionality for parameter mapping

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better pad visualization
- **Sample Format Support**: Expanded sample format compatibility
- **Pattern Sequencer**: Enhanced internal pattern sequencer features

### FL Studio 21.4
- **Automation Handling**: Improved automation handling for pad parameters
- **Parameter Interpolation**: Better interpolation between parameter values for smoother transitions
- **Stability Improvements**: Additional stability improvements for complex kits

### FL Studio 21.5
- **Compatibility Improvements**: Better compatibility with third-party sample libraries
- **Audio Quality**: Minor improvements to audio quality at extreme settings
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

### FL Studio 21.6
- **Algorithm Refinement**: Further refinement of the sampling algorithms
- **Interface Updates**: Minor UI improvements for better usability
- **Stability**: Additional stability improvements for long sessions with complex kits

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: FPC

| Parameter | Location | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Pad 1-16 (A/B)**| Main UI | **All** | **Density** | 32 total sound triggers. |
| **Velocity Range**| Layer Tab | **Jazzy** | **Dynamics** | Trigger thresholds for layers. |
| **Tune** | Layer Tab | **Melodic** | **Pitch** | Per-sample pitch adjustment. |
| **Cut / Cut By** | Pad Prop | **Upbeat** (Choke)| **Timing** | Muting logic between pads. |
| **Output** | Pad Prop | **Moody** | **Routing** | Mixer offset per pad. |
| **Pan / Vol** | Layer Tab | **Psychedelic**| **Stereo** | Per-sample spatial controls. |

- **Vibe Impact Tag (Cut Groups):** Essential for "Upbeat" R&B and Trap to prevent overlapping cymbal tails from muddying the mix.
- **Mix Impact Tag (Output):** Setting the Output to `1, 2, 3` etc. allows you to EQ your Kick independently of your Snare within one FPC instance. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\fpc-specs.json

```json
{
  "plugin_name": "FPC",
  "category": "Generator",
  "engine": "Pad-based Sampler",
  "specs": {
    "total_pads": 32,
    "layers_per_pad": "Unlimited",
    "mixer_outputs": "Independent per pad (Offset)",
    "file_support": ["WAV", "AIFF", "SF2"]
  },
  "features": [
    "MPC-style workflow",
    "Velocity crossfading",
    "MIDI pattern library",
    "Internal ADSR envelopes"
  ]
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "FPC",
  "category": "Drum Sampler",
  "parameters": [
    {
      "section": "Main Pad",
      "id": "pad_vol",
      "name": "Pad Volume",
      "range": { "min": 0, "max": 200, "unit": "%" },
      "description": "Global volume for the selected pad."
    },
    {
      "section": "Main Pad",
      "id": "midi_note",
      "name": "MIDI Note",
      "range": { "min": 0, "max": 127, "unit": "Note" },
      "description": "The Input MIDI key that triggers this pad."
    },
    {
      "section": "Main Pad",
      "id": "cut_group",
      "name": "Cut Group",
      "range": { "min": 0, "max": 99, "unit": "ID" },
      "description": "The Choke Group ID this pad sends 'Kill' messages to."
    },
    {
      "section": "Main Pad",
      "id": "cut_by_group",
      "name": "Cut By Group",
      "range": { "min": 0, "max": 99, "unit": "ID" },
      "description": "The Choke Group ID this pad listens to for 'Kill' messages."
    },
    {
      "section": "Layer",
      "id": "layer_max_vel",
      "name": "Velocity High",
      "range": { "min": 0, "max": 127, "unit": "Vel" },
      "description": "Upper velocity limit for the layer."
    },
    {
      "section": "Layer",
      "id": "layer_min_vel",
      "name": "Velocity Low",
      "range": { "min": 0, "max": 127, "unit": "Vel" },
      "description": "Lower velocity limit for the layer."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (FPC)

## 1. The "Closed Kills Open" Rule
- **Rule:** A closed hi-hat must always choke an open hi-hat.
- **Application:** Set the Open Hat to `Cut: 1` and the Closed Hat to `Cut By: 1`. This creates the realistic "Zzip" sound found in professional R&B drum programming. [SRC: REPUTABLE]

## 2. Multi-Output Requirement
- **Rule:** Never mix a whole kit on one track.
- **Application:** Assign your Kick to Output 1, Snare to 2, and Hats to 3. This allows you to add **Soft Clipper** to the Kick without distorting the high-end shimmer of the hats.

## 3. Humanization Thresholds
- **Rule:** No "Robotic" repetition.
- **Application:** If you have multiple samples of the same hit, set them to the **same velocity range** and select **Random** triggering. This ensures that every 1/16th note hi-hat sounds slightly different.

## 4. Tuning Percussion
- **Rule:** Tuned drums hit harder.
- **Application:** Use a tuner or your ears to match the pitch of your Snares and Toms to the **Key of the track**. A snare tuned to the root note of the song feels much more "Melodic" and cohesive.

## 5. Envelope Discipline (The "Tail" Rule)
- **Rule:** Don't let kicks "bleed."
- **Application:** Use the Volume Envelope in FPC to shorten the decay of your kick samples. This leaves more room for the **808** to breathe in the low-end. [SRC: IL-MAN]
```

---

## FILE: 03-Workflows\00_Practical_Use_Cases.md

```markdown
# FPC - Practical Use Cases

## 8-12 Real Use Cases with Step-by-Step Setup

### Use Case 1: Professional Hip-Hop Drum Kit Creation
**Goal**: Create a professional hip-hop drum kit with velocity layering for realistic drum sounds

**Step-by-step setup inside FL Studio**:
1. Insert FPC into a new channel in the Channel Rack
2. Load a basic hip-hop kit preset or start with a blank kit
3. For the Kick pad (C1), add 3 layers:
   - Layer 1 (0-40 velocity): Deep, subby kick sample
   - Layer 2 (41-80 velocity): Standard kick sample
   - Layer 3 (81-127 velocity): Accented kick with more attack
4. For the Snare pad (D1), add 3 layers:
   - Layer 1 (0-35 velocity): Ghost/snare roll sample
   - Layer 2 (36-75 velocity): Standard snare
   - Layer 3 (76-127 velocity): Rimshot or accented snare
5. For Hi-Hat pads (F#1, G#1), set up choke groups:
   - Closed Hi-Hat (F#1): Assign to choke group 1
   - Open Hi-Hat (G#1): Assign to choke group 1
6. Route each pad to individual mixer tracks for processing
7. Add light compression to snare and kick tracks (Fruity Limiter)
8. Apply reverb send to snare track (20-30% mix)
9. Create a basic hip-hop pattern using the step sequencer
10. Fine-tune pad volumes for realistic kit balance

**Recommended starting settings/ranges**:
- Kick: Tune -2 to +2 semitones, Decay 40-60%, Filter 40-50%
- Snare: Tune 0, Decay 50-70%, Filter 50-60%
- Hi-Hats: Tune 0, Decay 20-40%, Filter 60-80%
- Global: Keep at default for initial setup

**Why it works / what to listen for**:
- Velocity layering creates realistic response to playing dynamics
- Choke groups provide realistic hi-hat behavior
- Individual mixer routing allows for per-pad processing
- Listen for natural response to different playing velocities

**Variations**:
1. **Trap Kit**: Emphasize 808-style kicks with longer decay
2. **Boom Bap**: Use more organic, less processed samples
3. **Modern Hip-Hop**: Add more saturation and character to samples

**Pitfalls + quick fixes**:
- Pitfall: Kit sounds too mechanical or uniform
  - Fix: Add more velocity layers with different character samples
- Pitfall: Hi-hats don't behave realistically
  - Fix: Verify choke group settings and adjust timing

### Use Case 2: Electronic Dance Music (EDM) Drum Programming
**Goal**: Create an EDM-style drum kit optimized for electronic music production

**Step-by-step setup inside FL Studio**:
1. Insert FPC and start with a blank kit
2. For Kick (C1), create 2-3 layers:
   - Layer 1 (0-50 velocity): Clean, punchy kick
   - Layer 2 (51-127 velocity): Kick with more sub and attack
3. For Snare (D1), add 2 layers:
   - Layer 1 (0-60 velocity): Tight, dry snare
   - Layer 2 (61-127 velocity): Snare with reverb tail
4. For Clap (E1), use a single processed clap sample
5. For Hi-Hats (F#1, G1, G#1), create multiple closed hat variations
6. Add Percussion pads (A1, B1, C2) for additional rhythmic elements
7. Route kick and snare to individual mixer tracks
8. Add Fruity Fast Dist to snare track for extra crack (Drive: 15-20%)
9. Use Fruity Convolver on a return track for shared reverb
10. Apply light compression to the entire kit via mixer group

**Recommended starting settings/ranges**:
- Kick: High decay (70-80%) for sub-bass, moderate filter (40-50%)
- Snare: Moderate decay (50-60%), high filter (70-80%) for brightness
- Clap: Short decay (30-40%), high filter (80-90%)
- Percussion: Vary by type, generally short decay (20-40%)

**Why it works / what to listen for**:
- Clean, punchy sounds work well with electronic music
- The layering allows for dynamic response to velocity
- Individual routing enables per-pad processing
- Listen for tight, electronic drum sounds that cut through dense mixes

**Variations**:
1. **Techno Kit**: Minimal, precise sounds with strong kick focus
2. **House Kit**: More organic sounds with subtle swing
3. **Dubstep Kit**: Heavy, processed kicks with complex snares

**Pitfalls + quick fixes**:
- Pitfall: Kick doesn't have enough sub-bass for EDM
  - Fix: Increase decay and use samples with strong sub-bass content
- Pitfall: Snares are too soft or don't cut through mix
  - Fix: Increase volume, add Fast Dist, or use brighter samples

### Use Case 3: Realistic Acoustic Drum Kit
**Goal**: Create a realistic acoustic drum kit with proper tuning and response

**Step-by-step setup inside FL Studio**:
1. Insert FPC and load an acoustic drum sample library
2. For Kick (C1), use 2 layers:
   - Layer 1 (0-60 velocity): Soft kick for ghost notes
   - Layer 2 (61-127 velocity): Full kick for normal hits
3. For Snare (D1), use 4 layers:
   - Layer 1 (0-25 velocity): Ghost note
   - Layer 2 (26-50 velocity): Sidestick
   - Layer 3 (51-80 velocity): Regular snare
   - Layer 4 (81-127 velocity): Rimshot
4. For Toms, tune each appropriately:
   - Low Tom (F1): Tune to lower pitch
   - Mid Tom (G1): Medium pitch
   - High Tom (A1): Higher pitch
5. Set up choke groups for hi-hats (C#1 and D#1)
6. Apply appropriate decay settings to each pad (longer for toms, shorter for cymbals)
7. Route each pad to individual mixer tracks
8. Add reverb sends for realistic room sound
9. Use Fruity Parametric EQ 2 to shape individual drum sounds
10. Fine-tune the kit balance and tuning

**Recommended starting settings/ranges**:
- Kick: Tune -12 to -2 semitones, Decay 60-80%, Filter 30-40%
- Snare: Tune 0, Decay 50-70%, Filter 50-60%
- Toms: Tune to musical intervals (-12, -7, -5 semitones for low/mid/high)
- Hi-Hats: Tune 0, Decay 20-50%, Filter 60-80%

**Why it works / what to listen for**:
- Proper tuning relationships create realistic acoustic kit
- Multiple layers provide realistic response to different playing techniques
- Appropriate decay settings match acoustic drum behavior
- Listen for natural acoustic drum response and tuning

**Variations**:
1. **Jazz Kit**: Softer, more organic sounds with longer decays
2. **Rock Kit**: More aggressive, processed sounds with tighter tuning
3. **Fusion Kit**: Balanced approach with good articulation

**Pitfalls + quick fixes**:
- Pitfall: Toms don't sound properly tuned to each other
  - Fix: Adjust tune settings to proper musical intervals
- Pitfall: Kit sounds too electronic or processed
  - Fix: Use more natural-sounding samples and conservative processing

### Use Case 4: Sound Design Kit with Synthetic Percussion
**Goal**: Create a kit with synthetic and designed percussion sounds

**Step-by-step setup inside FL Studio**:
1. Insert FPC and start with blank kit
2. Create Kick (C1) using synthesized bass drum:
   - Use simple sine wave with pitch envelope
   - Add noise burst for attack
   - Layer with sample if desired
3. Create Snare (D1) using noise and resonance:
   - Noise sample with bandpass filter
   - Add synthesized snare rattle
   - Use multiple layers for different character
4. Create Hi-Hats (F#1, G#1) using filtered noise or synthesized sounds
5. Add designed percussion to other pads (E1, F1, G1, etc.):
   - Metallic sounds using synthesis
   - Glitchy textures using processed samples
   - Unique sounds using creative sample manipulation
6. Use Fruity Fast Dist on some pads for additional character
7. Route to mixer with appropriate effects sends
8. Add reverb and delay for spatial enhancement
9. Use automation to change pad parameters over time
10. Create patterns that showcase the unique sounds

**Recommended starting settings/ranges**:
- Synthesized sounds: Short decay (20-40%), high filter (70-90%)
- Designed sounds: Vary by intended character
- Use moderate tune settings to avoid extreme pitch shifts

**Why it works / what to listen for**:
- Synthesized sounds provide unique, non-acoustic character
- The layering allows for complex sound design
- Individual routing enables per-sound processing
- Listen for unique, designed percussion sounds

**Variations**:
1. **Industrial Kit**: Mechanical, metallic sounds
2. **Ambient Kit**: Textural, evolving sounds
3. **Glitch Kit**: Stuttering, processed sounds

**Pitfalls + quick fixes**:
- Pitfall: Synthetic sounds are too harsh or artificial
  - Fix: Add more natural elements or reduce extreme parameters
- Pitfall: Designed sounds don't fit with musical context
  - Fix: Adjust tuning and decay to better match musical elements

### Use Case 5: Live Performance Kit with Pad Controller
**Goal**: Set up FPC for live performance with external pad controller

**Step-by-step setup inside FL Studio**:
1. Insert FPC and configure for performance
2. Map pads to controller using MIDI learn or preset mappings
3. Set up a basic drum kit with essential sounds:
   - Kick, Snare, Hi-Hats (closed/open), Toms, Cymbals
4. Optimize pad settings for performance:
   - Ensure good velocity response
   - Set appropriate choke groups
   - Configure mixer routing for individual processing
5. Create multiple patterns for different sections
6. Set up mixer tracks with performance-appropriate effects
7. Use Fruity Limiter on individual tracks to prevent clipping
8. Add Fruity Convolver for shared reverb on a return track
9. Create macro controls for real-time parameter adjustment
10. Test with pad controller to ensure proper response

**Recommended starting settings/ranges**:
- Performance kit: Moderate decay settings (40-60%)
- Effects: Conservative settings for live performance
- Mixer: Clear routing for quick adjustments during performance

**Why it works / what to listen for**:
- Optimized for real-time performance with pad controllers
- Proper mapping allows for expressive playing
- Individual routing enables real-time processing adjustments
- Listen for responsive, playable kit

**Variations**:
1. **Simple Kit**: Fewer pads for easier performance
2. **Complex Kit**: More pads for extensive sound palette
3. **Genre-Specific**: Kit tailored to specific performance style

**Pitfalls + quick fixes**:
- Pitfall: Pad response is too sensitive or not sensitive enough
  - Fix: Adjust controller sensitivity and FPC velocity response
- Pitfall: Performance causes CPU overload
  - Fix: Optimize kit with fewer layers and simpler processing

### Use Case 6: Layered 808 Kit with Realistic Response
**Goal**: Create a layered 808 kit that responds realistically to velocity

**Step-by-step setup inside FL Studio**:
1. Insert FPC and start with blank kit
2. For Kick (C1), create 3 layers:
   - Layer 1 (0-40 velocity): Quiet 808 sub-bass
   - Layer 2 (41-80 velocity): Standard 808 kick
   - Layer 3 (81-127 velocity): Accented 808 with more attack
3. For 808 Snare (D1), create 2 layers:
   - Layer 1 (0-60 velocity): Soft snare
   - Layer 2 (61-127 velocity): Full snare with reverb
4. For 808 Hi-Hats (F#1, G#1), use single samples per pad
5. Set longer decay values for 808 character (60-90%)
6. Apply low-pass filtering to remove harshness (30-50%)
7. Route kick to individual mixer track with saturation
8. Add Fruity Fast Dist to kick track (Drive: 10-15%)
9. Use Fruity Convolver for snare reverb (plate, 25-35% mix)
10. Fine-tune the velocity response for musical results

**Recommended starting settings/ranges**:
- 808 Kick: Long decay (70-90%), low tune (-24 to -12 semitones)
- 808 Snare: Medium decay (50-70%), moderate filter (40-60%)
- Hi-Hats: Short decay (20-40%), high filter (70-90%)

**Why it works / what to listen for**:
- Velocity layering provides realistic response to playing dynamics
- Long decay settings create characteristic 808 sound
- The layering allows for different intensity levels
- Listen for musical response to velocity changes

**Variations**:
1. **Deep 808**: Emphasize sub-bass with extreme low tuning
2. **Punchy 808**: Shorter decay and more attack
3. **Melodic 808**: Tune to specific musical notes for melodic bass

**Pitfalls + quick fixes**:
- Pitfall: 808 sounds too soft or lacks punch
  - Fix: Reduce decay slightly and add more attack with Fast Dist
- Pitfall: Velocity layers don't transition smoothly
  - Fix: Adjust velocity ranges to have slight overlap

### Use Case 7: Ethnic Percussion Kit (World Music)
**Goal**: Create an ethnic percussion kit with authentic world music sounds

**Step-by-step setup inside FL Studio**:
1. Insert FPC and start with blank kit
2. Load ethnic percussion samples (djembe, congas, bongos, etc.)
3. For Djembe Bass (C1), create 2 layers:
   - Layer 1 (0-50 velocity): Soft bass tone
   - Layer 2 (51-127 velocity): Full bass tone
4. For Djembe Slap (D1), create 2 layers:
   - Layer 1 (0-50 velocity): Soft slap
   - Layer 2 (51-127 velocity): Full slap
5. For Congas, tune appropriately (low to high):
   - Low Conga (E1): Lower pitch
   - High Conga (F1): Higher pitch
6. Add shakers, bells, and other ethnic percussion to remaining pads
7. Set appropriate decay for each instrument (longer for drums, shorter for shakers)
8. Apply minimal processing to maintain authenticity
9. Route to mixer with light reverb (room or hall)
10. Fine-tune the kit for authentic ethnic percussion response

**Recommended starting settings/ranges**:
- Ethnic drums: Moderate decay (40-70%) for natural sustain
- Shakers: Short decay (10-30%) for authentic response
- Minimal filter (40-60%) to maintain natural character

**Why it works / what to listen for**:
- Authentic ethnic percussion sounds with proper tuning
- Velocity response matches real percussion instruments
- Individual routing allows for appropriate processing per instrument
- Listen for authentic ethnic percussion character

**Variations**:
1. **African Kit**: Djembe, talking drum, and African percussion
2. **Latin Kit**: Congas, bongos, timbales, and Latin percussion
3. **Asian Kit**: Tabla, gamelan, and Asian percussion

**Pitfalls + quick fixes**:
- Pitfall: Ethnic sounds are too processed or artificial
  - Fix: Reduce processing and use more natural samples
- Pitfall: Tuning doesn't match authentic instruments
  - Fix: Research authentic tuning and adjust accordingly

### Use Case 8: Creative Sound Design with Multi-Layering
**Goal**: Use FPC's multi-layering for creative sound design applications

**Step-by-step setup inside FL Studio**:
1. Insert FPC and start with blank kit
2. Select one pad (C1) for creative sound design
3. Add 4-5 layers to the pad with different samples:
   - Layer 1 (0-20 velocity): Subtle texture
   - Layer 2 (15-45 velocity): Base sound
   - Layer 3 (40-70 velocity): Harmonic content
   - Layer 4 (65-95 velocity): Bright attack
   - Layer 5 (90-127 velocity): Extreme accent
4. Use different samples for each layer (synthetic, organic, processed)
5. Adjust layer volumes for smooth transitions between velocity ranges
6. Apply different processing to each layer if possible
7. Route the pad to a mixer track with creative effects
8. Add Fruity Fast Dist, Delay, and Reverb for additional processing
9. Use automation to change pad parameters over time
10. Create patterns that showcase the complex velocity response

**Recommended starting settings/ranges**:
- Creative layers: Overlapping velocity ranges (15-20 point overlaps)
- Processing: Vary by layer to create complex textures
- Decay: Vary by layer to create evolving textures

**Why it works / what to listen for**:
- Multiple layers create complex, evolving sounds
- Velocity response provides musical control over complexity
- The layering allows for detailed sound design
- Listen for evolving textures as velocity changes

**Variations**:
1. **Evolutionary Sounds**: Sounds that evolve significantly with velocity
2. **Textural Pads**: Complex layered textures for ambient music
3. **Experimental Percussion**: Unusual layer combinations for unique sounds

**Pitfalls + quick fixes**:
- Pitfall: Too many layers create chaos or CPU issues
  - Fix: Reduce layer count and focus on meaningful differences
- Pitfall: Velocity transitions are not smooth
  - Fix: Adjust velocity ranges for proper overlap

### Use Case 9: Hybrid Acoustic/Electronic Kit
**Goal**: Combine acoustic and electronic elements in one cohesive kit

**Step-by-step setup inside FL Studio**:
1. Insert FPC and start with blank kit
2. For Kick (C1), use acoustic kick sample with 2 layers:
   - Layer 1 (0-60 velocity): Acoustic kick
   - Layer 2 (61-127 velocity): Acoustic kick + electronic transient
3. For Snare (D1), use hybrid approach:
   - Layer 1 (0-50 velocity): Acoustic snare
   - Layer 2 (51-80 velocity): Acoustic snare + light electronic enhancement
   - Layer 3 (81-127 velocity): Acoustic snare + strong electronic enhancement
4. For Hi-Hats, use acoustic samples in Bank A, electronic in Bank B
5. Add electronic percussion to remaining pads (synthetic toms, etc.)
6. Route acoustic and electronic elements to different mixer tracks
7. Process acoustic elements with natural reverb, electronic with digital effects
8. Use Fruity Parametric EQ 2 to blend acoustic and electronic elements
9. Apply light compression to acoustic elements, more aggressive to electronic
10. Fine-tune the balance between acoustic and electronic elements

**Recommended starting settings/ranges**:
- Acoustic elements: Natural decay and minimal processing
- Electronic elements: Processed with appropriate effects
- Hybrid layers: Careful balance between acoustic and electronic

**Why it works / what to listen for**:
- Combination of acoustic and electronic provides rich palette
- Layering allows for different acoustic/electronic balance by velocity
- Individual routing enables appropriate processing for each type
- Listen for cohesive blend of acoustic and electronic elements

**Variations**:
1. **Acoustic-Heavy**: Mostly acoustic with subtle electronic enhancement
2. **Electronic-Heavy**: Mostly electronic with acoustic texture
3. **Balanced Hybrid**: Equal acoustic and electronic elements

**Pitfalls + quick fixes**:
- Pitfall: Acoustic and electronic elements don't blend well
  - Fix: Adjust processing and EQ to create more cohesive sound
- Pitfall: Hybrid approach creates inconsistent feel
  - Fix: Focus on similar tuning and decay characteristics

### Use Case 10: Orchestral Percussion Kit
**Goal**: Create an orchestral percussion kit with realistic responses

**Step-by-step setup inside FL Studio**:
1. Insert FPC and load orchestral percussion samples
2. For Timpani (C1, D1), create tuned versions:
   - C1: Lower timpani (tuned to specific note)
   - D1: Higher timpani (tuned to specific interval)
3. For Snare Drum (E1), use concert snare with 2 layers:
   - Layer 1 (0-50 velocity): Soft orchestral snare
   - Layer 2 (51-127 velocity): Full orchestral snare
4. For Cymbals (F#1, G#1), use appropriate orchestral samples
5. For Tambourine (A1), use realistic tambourine samples
6. For Triangle (B1), use triangle samples with appropriate decay
7. Set longer decay settings for orchestral instruments (60-90%)
8. Apply minimal processing to maintain authenticity
9. Route to mixer with appropriate orchestral reverb
10. Fine-tune for realistic orchestral percussion response

**Recommended starting settings/ranges**:
- Orchestral percussion: Long decay (60-90%) for natural sustain
- Minimal processing: Clean, authentic sound
- Appropriate tuning: Match to musical context

**Why it works / what to listen for**:
- Realistic orchestral percussion sounds with proper characteristics
- Appropriate decay settings match real orchestral instruments
- Minimal processing maintains authentic character
- Listen for realistic orchestral percussion response

**Variations**:
1. **Symphonic Kit**: Full orchestral percussion section
2. **Chamber Kit**: Smaller ensemble percussion
3. **Specialized Kit**: Specific orchestral percussion instruments

**Pitfalls + quick fixes**:
- Pitfall: Orchestral sounds are too processed or artificial
  - Fix: Reduce processing and use more natural samples
- Pitfall: Decay settings don't match orchestral instrument behavior
  - Fix: Research authentic decay times and adjust accordingly

### Use Case 11: Trap Hi-Hat Roll Kit
**Goal**: Create a kit optimized for trap-style hi-hat rolls and patterns

**Step-by-step setup inside FL Studio**:
1. Insert FPC and start with blank kit
2. For Hi-Hat Chain (C1), create a continuous chain sound with 3 layers:
   - Layer 1 (0-30 velocity): Soft chain movement
   - Layer 2 (31-70 velocity): Medium chain movement
   - Layer 3 (71-127 velocity): Accented chain hits
3. For Hi-Hat Patterns (D1, E1, F1), load different hi-hat samples:
   - D1: Tight closed hi-hat
   - E1: Medium closed hi-hat
   - F1: Loose closed hi-hat
4. For Hi-Hat Open (G1), use open hi-hat sample
5. For Hi-Hat Accent (A1), use accented hi-hat sample
6. Set short decay values for tight hi-hat response (20-40%)
7. Apply high-pass filtering to remove low-end mud (Filter: 70-90%)
8. Route hi-hats to mixer track with light reverb (room, 15-20% mix)
9. Add Fruity Fast Dist for extra hi-hat crack if needed (Drive: 5-10%)
10. Create trap-style patterns with rapid hi-hat sequences

**Recommended starting settings/ranges**:
- Hi-Hats: Short decay (20-40%) for tight response
- High filter (70-90%) for brightness
- Moderate volume levels for authentic hi-hat balance

**Why it works / what to listen for**:
- Multiple hi-hat options provide variety for trap patterns
- Short decay settings create tight, responsive hi-hats
- Velocity layering adds expression to hi-hat rolls
- Listen for tight, responsive hi-hat performance

**Variations**:
1. **808 Hi-Hats**: Electronic-style hi-hats with more processing
2. **Organic Hi-Hats**: More natural, less processed hi-hat sounds
3. **Hybrid Hi-Hats**: Mix of electronic and acoustic characteristics

**Pitfalls + quick fixes**:
- Pitfall: Hi-hats are too harsh or piercing
  - Fix: Reduce filter settings and add more natural samples
- Pitfall: Hi-hat rolls don't sound fluid
  - Fix: Adjust velocity curves and layer transitions

### Use Case 12: Modular Drum Design Kit
**Goal**: Create a kit designed for modular drum programming and pattern building

**Step-by-step setup inside FL Studio**:
1. Insert FPC and organize pads by function rather than traditional drum mapping
2. Pad Group 1 (C1, D1, E1, F1): Kick variations (different tunings, characters)
3. Pad Group 2 (G1, A1, B1, C2): Snare variations (different tunings, characters)
4. Pad Group 3 (D2, E2, F2, G2): Hi-hat variations (closed, semi-open, open)
5. Pad Group 4 (A2, B2, C3, D3): Percussion elements (claps, snaps, shakers)
6. Pad Group 5 (E3, F3, G3, A3): Sound design elements (textures, effects, impacts)
7. Set up each group with appropriate velocity layering
8. Route each group to separate mixer tracks for group processing
9. Apply appropriate effects to each group (reverb for snares, etc.)
10. Create templates for different modular drum programming approaches

**Recommended starting settings/ranges**:
- Modular approach: Vary by function group
- Group processing: Similar settings within each function group
- Individual control: Allow for per-pad adjustments

**Why it works / what to listen for**:
- Functional organization allows for modular programming
- Group routing enables group processing
- Multiple variations per function provide programming flexibility
- Listen for cohesive modular drum programming approach

**Variations**:
1. **Genre-Specific Modules**: Groups tailored to specific genres
2. **Pattern-Specific Modules**: Groups optimized for specific pattern types
3. **Performance Modules**: Groups optimized for live performance

**Pitfalls + quick fixes**:
- Pitfall: Modular approach creates confusion during programming
  - Fix: Create clear visual organization and labeling
- Pitfall: Too many similar sounds make programming difficult
  - Fix: Ensure clear differentiation between similar-function pads
```

---

## FILE: 03-Workflows\01_Workflow_Recipes.md

```markdown
# FPC - Workflow Recipes

## 6-10 Recipes Combining FPC with Other FL Studio Tools

### Recipe 1: FPC + Fruity Convolver for Professional Drum Reverb
**Goal**: Create realistic drum reverb using FPC's individual pad routing with Fruity Convolver

**Step-by-step setup inside FL Studio**:
1. Insert FPC and set up a basic drum kit (kick, snare, hi-hats, toms)
2. Enable individual mixer routing for each pad (Route each pad to its own mixer track)
3. On the kick pad's mixer track, insert Fruity Convolver
4. Load a tight room impulse (short decay, 0.8-1.2s)
5. Set the send level to 15-20% for subtle reverb
6. On the snare pad's mixer track, insert Fruity Convolver
7. Load a plate reverb impulse (2.5-3.5s decay)
8. Set the send level to 30-40% for more snare reverb
9. On the hi-hat pad's mixer track, insert Fruity Convolver
10. Load a bright room impulse (1.5-2s decay)
11. Set the send level to 25-35% for appropriate hi-hat space
12. Group all drum mixer tracks to a single return for overall control
13. Add Fruity Limiter on the group track for level control
14. Use Fruity Parametric EQ 2 to shape the overall reverb character

**Routing notes**:
- Individual pad routing allows for per-drum reverb processing
- Different reverb types for different drum elements
- Group return track for overall reverb control
- This creates realistic drum mixing with appropriate spaces for each element

**How to control it quickly**:
- Map individual send levels to macros for quick reverb adjustment
- Use automation to change reverb levels during different song sections
- Create mixer track presets for different reverb approaches
- Group reverb controls to a single macro for overall adjustment

**Performance tips**:
- Use conservative reverb amounts to avoid washing out the drums
- Different reverb types per drum element create more realistic spaces
- Group control allows for reverb automation during builds/drops
- Check mono compatibility of the reverb settings

### Recipe 2: FPC + Fruity Peak Controller for Dynamic Drum Processing
**Goal**: Use Peak Controller to dynamically modulate FPC parameters based on input level

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Peak Controller on the master track or a drum bus
2. Set Peak Controller to respond to the overall mix level (Ratio: 3:1, Attack: 10ms, Release: 200ms)
3. Insert FPC on a drum track or bus after Peak Controller
4. Configure FPC with interesting velocity layers (kick with 3 layers, snare with 3 layers)
5. Use Peak Controller's output to modulate FPC's Global Decay parameter
6. When the mix gets louder, the Peak Controller reduces decay to prevent muddiness
7. Add Fruity Parametric EQ 2 after FPC to compensate for level changes
8. Insert Fruity Limiter at the end for final level control
9. Use automation to adjust Peak Controller's threshold for different sections
10. Fine-tune the modulation amount for natural response

**Routing notes**:
- Peak Controller affects the signal level before FPC processing
- This creates dynamic response where louder sections trigger different FPC behavior
- The FPC processes the already-dynamic-controlled signal
- This creates compound dynamic processing

**How to control it quickly**:
- Adjust Peak Controller's threshold to change activation point
- Use Peak Controller's ratio to control intensity of FPC response
- Map Peak Controller's parameters to macros for easy adjustment
- Use automation to change the dynamic response over time

**Performance tips**:
- Use moderate Peak Controller settings to avoid over-compression before FPC
- Check for pumping artifacts when both processors are active
- The combination creates very responsive dynamic processing
- Use spectrum analysis to ensure the dynamic processing is musical

### Recipe 3: FPC + Edison for Sample Analysis and Enhancement
**Goal**: Use Edison's analysis to inform FPC pad settings and sample selection

**Step-by-step setup inside FL Studio**:
1. Insert Edison on a drum sample you want to analyze
2. Use Edison's FFT analysis to identify frequency characteristics of the sample
3. Insert FPC and load the same sample to a pad
4. Based on Edison's analysis, adjust FPC's pad filter settings to enhance or tame specific frequencies
5. If the sample has strong low-end, use FPC's filter to adjust the low-frequency content
6. If the sample has harsh high-end, use FPC's filter to tame it
7. Use Edison's pitch analysis to tune the FPC pad appropriately
8. Compare the original and FPC-processed versions using Edison's AB comparison
9. Fine-tune FPC settings based on the spectral analysis
10. Save the optimized pad settings as a preset

**Routing notes**:
- Use Edison to analyze samples before loading into FPC
- Apply FPC processing based on analysis findings
- Use Edison after processing to verify results
- This creates analysis-informed drum programming

**How to control it quickly**:
- Use Edison's snapshot feature to save reference spectra
- Create FPC presets based on different analysis results
- Map FPC's filter parameters to macros for quick adjustment
- Use Edison's real-time analysis while adjusting FPC

**Performance tips**:
- Use Edison's smoothing settings to get clearer frequency analysis
- Apply FPC adjustments gradually to avoid over-processing
- The combination creates frequency-aware drum programming
- Use spectrum analysis to verify the combined effect

### Recipe 4: FPC + Fruity Formula Controller for Complex Modulation
**Goal**: Use Formula Controller to create complex, evolving modulation patterns for FPC parameters

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Formula Controller on an automation track
2. Create a formula that generates complex patterns (e.g., LFO1*sin(LFO2*time) for evolving modulation)
3. Insert FPC on a track with interesting rhythmic content
4. Use MIDI learn to map Formula Controller's output to FPC's Global Tune parameter
5. Set up another formula to modulate the Global Decay parameter
6. Adjust formula parameters to create interesting evolving patterns
7. Use FPC's internal pattern sequencer to create rhythmic content that interacts with the modulation
8. Add Fruity Convolver after for spatial enhancement of evolving textures
9. Use Fruity Parametric EQ 2 to shape the evolving sound
10. Apply Fruity Limiter to control any level fluctuations

**Routing notes**:
- Formula Controller generates complex modulation patterns
- Map different formulas to different FPC parameters
- The mathematical patterns create evolving, non-repetitive processing
- This creates algorithmic drum enhancement changes

**How to control it quickly**:
- Adjust formula parameters to change the modulation pattern
- Use different mathematical functions for different modulation behaviors
- Map formula variables to macros for real-time control
- Use automation to change formula parameters over time

**Performance tips**:
- Start with simple formulas and gradually increase complexity
- Monitor for artifacts when using complex modulation patterns
- Use the formula's period settings to sync with musical timing if desired
- The combination creates evolving, generative drum processing

### Recipe 5: FPC + Patcher for Advanced Drum Routing
**Goal**: Use Patcher to create complex routing with FPC and other effects for professional drum processing

**Step-by-step setup inside FL Studio**:
1. Insert Patcher on a drum bus that contains FPC tracks
2. Inside Patcher, route the main FPC output to multiple processing paths:
   - Path 1: Direct to output (for clarity)
   - Path 2: Through Fruity Fast Dist for saturation
   - Path 3: Through Fruity Convolver for reverb
   - Path 4: Through Fruity Delay for rhythmic effects
3. Use Fruity Balance inside Patcher to control the mix between paths
4. Add Fruity Limiter at the end of Patcher for level control
5. Use Fruity Formula Controller within Patcher for parameter modulation
6. Map FPC parameters to Patcher's macro controls
7. Create multiple macro configurations for different processing approaches
8. Use Patcher's interface to adjust balance between processing paths
9. Route the Patcher output back to the main mixer
10. Fine-tune the balance between processing paths

**Routing notes**:
- Use Patcher to split FPC signal into multiple processing paths
- Each path can have different effects processing
- Patcher allows for complex routing and macro control
- This creates professional, multi-path drum processing

**How to control it quickly**:
- Use Patcher's macro controls to adjust multiple parameters simultaneously
- Map FPC parameters to Patcher macros for centralized control
- Create multiple macro configurations for different processing approaches
- Use Patcher's interface to adjust balance between processing paths

**Performance tips**:
- Use moderate processing in each path to avoid over-processing
- Check for phase issues between parallel paths
- The combination allows for complex, nuanced drum processing
- Use spectrum analysis to ensure the combined effect is balanced

### Recipe 6: FPC + Fruity Limiter for Controlled Drum Dynamics
**Goal**: Use FPC for dynamic enhancement before controlled limiting

**Step-by-step setup inside FL Studio**:
1. Insert FPC on a drum track or bus
2. Set up FPC with velocity layers to enhance dynamic range (kick with 3 layers, snare with 3 layers)
3. Configure FPC to emphasize transients and dynamic response
4. Insert Fruity Limiter after FPC
5. Set Limiter to conservative settings (Ceiling: -0.1dB, Amount: 20-30%)
6. Use the Limiter to control peaks from FPC's enhanced dynamics
7. Adjust Limiter's release to preserve drum transients
8. Add Fruity Parametric EQ 2 after Limiter for final tonal adjustment
9. Use Fruity Meter 2 at the end to monitor levels and limiting
10. Fine-tune the balance between FPC enhancement and Limiter control

**Routing notes**:
- FPC enhances dynamics and adds character
- Limiter controls any peaks from the enhancement
- This creates dynamic drums with controlled output
- The order ensures enhancement happens before peak limiting

**How to control it quickly**:
- Adjust FPC enhancement and Limiter threshold as a pair
- Use Limiter's auto-release to adapt to FPC's dynamic changes
- Map both FPC parameters and Limiter Amount to a macro for density control
- Use automation to change both simultaneously for consistent results

**Performance tips**:
- Use conservative FPC settings to avoid over-compression by Limiter
- The combination creates dynamic drums without harsh limiting artifacts
- Monitor gain reduction on both FPC and Limiter
- Use this approach for drum bus dynamics control

### Recipe 7: FPC + Fruity Fast Dist for Character Enhancement
**Goal**: Combine FPC with Fast Dist for added character and harmonic enhancement

**Step-by-step setup inside FL Studio**:
1. Insert FPC on a track that needs character enhancement
2. Set up FPC with appropriate velocity layers for the source material
3. Insert Fruity Fast Dist after FPC
4. Set Fast Dist to moderate settings (Drive: 20-30%, Tone: 50%, Mix: 70-80%)
5. Use FPC to shape the dynamics before adding saturation
6. Use Fast Dist to add harmonic content to the dynamically-shaped signal
7. Add Fruity Parametric EQ 2 after Fast Dist to shape the saturated harmonics
8. Insert Fruity Limiter at the end for level control
9. Fine-tune the balance between FPC dynamics and Fast Dist saturation
10. Use automation to vary both FPC and Fast Dist parameters simultaneously

**Routing notes**:
- FPC processes dynamics first, then Fast Dist adds saturation
- This creates dynamic enhancement with added harmonic character
- The order affects the character of the enhancement
- The combination creates rich, dynamic sounds with character

**How to control it quickly**:
- Map FPC's Global parameters and Fast Dist's Drive to a macro for character control
- Use automation to change both simultaneously for consistent results
- Create presets that combine specific FPC settings with appropriate Fast Dist settings
- Use the Mix controls on both plugins to blend appropriately

**Performance tips**:
- Start with moderate Fast Dist settings to avoid harshness when combined with FPC
- The combination can create very musical character enhancement
- Monitor for clipping when both enhancement and saturation are high
- Use spectrum analysis to ensure the combined effect is musical

### Recipe 8: FPC + Fruity Delay 3 for Rhythmic Enhancement
**Goal**: Use FPC to enhance rhythmic elements before delay processing

**Step-by-step setup inside FL Studio**:
1. Insert FPC on a rhythmic track (drums, percussion, etc.)
2. Set up FPC to enhance the rhythmic elements (transient enhancement, velocity layers)
3. Configure FPC Banks with different enhancement approaches
4. Insert Fruity Delay 3 after FPC
5. Set Delay 3 to tempo-synced settings (1/8th or 1/16th notes)
6. Use moderate feedback (20-30%) and pan delays for width
7. Add Fruity Fast Dist after delay for saturation of delayed signals
8. Use low Drive (15-20%) to add character to delays without harshness
9. Insert Fruity Limiter at the end for level control
10. Use automation to vary FPC enhancement during different sections

**Routing notes**:
- FPC enhances the dry signal before delay
- Delay processes the enhanced signal
- This creates enhanced transients in both dry and delayed signals
- The enhancement affects the entire rhythmic pattern including repeats

**How to control it quickly**:
- Map FPC's Global parameters to control transient enhancement
- Use delay feedback to control how much enhancement is repeated
- Create automation patterns that change enhancement during builds/drops
- Use FL Studio's step sequencer to program rhythmic enhancement changes

**Performance tips**:
- Use moderate FPC settings to avoid over-enhancement of delay repeats
- The combination creates rhythmic interest in both dry and delayed signals
- Sync delay times to project tempo for musical results
- Use this approach for creating rhythmic complexity and interest
```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: FPC

## 1. Multi-Output Routing (The "Pro" Mix)

By default, FPC sums everything to one Mixer Track.

1.  **Wrapper:** Route FPC to Mixer Track 10.
2.  **Pad 1 (Kick):** Set Output to **0** (Track 10).
3.  **Pad 2 (Snare):** Set Output to **1** (Track 11).
4.  **Pad 3 (Hat):** Set Output to **2** (Track 12).
5.  **Auto-Map:** FPC has a "Spread outputs" option in the menu that automatically assigns sequentially, but manual assignment is better for grouping (e.g., all Toms to Track 13).

## 2. Controller Mapping (MPC Style)

1.  **Hardware:** Plug in your Akai MPD or Maschine.
2.  **Problem:** Hitting Pad 1 on hardware triggers Pad 4 on FPC.
3.  **Fix:**
    *   Click "Map notes for entire bank".
    *   FPC waits.
    *   Hit Pad 1 on Hardware (Maps to FPC Pad 1).
    *   Hit Pad 2...
    *   Repeat x16.
4.  **Save:** Click "Save note layout" so you never do this again.

## 3. The Slicex -> FPC Pipeline

1.  **Source:** A drum loop in the Playlist.
2.  **Slice:** Double-click to open in **Edison** or **Slicex**.
3.  **Chop:** Add markers (Auto-slice).
4.  **Export:** "Drag / Copy Sample Selection".
5.  **Drop:** Drag the selection into FPC.
    *   *Alternative:* In Slicex, "Dump to Piano Roll" sends the MIDI, but "Export Regions to FPC" is not a direct menu item. You must drag the slices manually or use the "Open in new channel" workflow, then copy/paste.
    *   *Correction:* Dragging from Edison's "Drag Copy" button directly onto an FPC pad loads that slice.

## 4. Double-Kick Layering

1.  **Goal:** A kick with "Click" and "Sub".
2.  **Pad:** Select the Kick Pad.
3.  **Layers:**
    *   Layer 1: "Clicky_Kick.wav". Volume: 100%.
    *   Layer 2: "808_Sub.wav". Volume: 80%.
4.  **Envelope:**
    *   Go to Layer 2 (Sub).
    *   Active the **Volume Envelope** (ADSR).
    *   Increase Attack slightly (10ms) to let the Click from Layer 1 punch through before the Sub swells in.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Multi-Output Drum Mixing (FPC)

## The Concept
Sending every drum pad to its own mixer track for professional EQ, Compression, and Effects.

## Step-by-Step Setup
1.  Load **FPC** and link it to Mixer Track **10**.
2.  Select **Pad 1 (Kick)**. Look at the **Output** box (top right). Set it to `0`. (This stays on Track 10).
3.  Select **Pad 2 (Snare)**. Set the **Output** to `1`. (This moves to Track 11).
4.  Select **Pad 3 (Hi-Hat)**. Set the **Output** to `2`. (This moves to Track 12).
5.  **Verify:** Play your pattern. You should see the Kick moving the meter on Track 10, the Snare on 11, and the Hats on 12.

## Result
- Total control. You can now add a **Fruity Reverb** to just the Snare without affecting the Kick, or add a **Soft Clipper** to just the Kick.

## Vibe Check
- **Professional/Polished:** This is the difference between a "Bedroom" beat and a "Studio" mix.

## Pitfalls
- **Offset Math:** The number in the Output box is an *offset* from the main track. If FPC is on Track 5, Output `1` is Track 6. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\fpc-with-external-hardware.md

```markdown
# Goal Workflow: FPC with External Hardware (The MPC Feel)

*Goal: Mapping your physical pad controller (Akai MPC, MPD, Launchpad) to the FPC interface.*

## 🎛️ Routing Context
- **Hardware**: USB MIDI Pad Controller.
- **Protocol**: MIDI note matching.

## 🚶 Step-by-Step Setup
1. **The Fast Link**:
   - Click the **Down Arrow** next to the MIDI note display at the top of FPC.
   - Select **Map notes for entire bank**.
2. **The Tap**:
   - Hit **Pad 1** on your hardware. FPC will jump to Pad 1.
   - Hit **Pad 2** on your hardware. FPC will jump to Pad 2.
   - Continue until all 16 pads are mapped.
3. **Velocity Response**:
   - If your pads feel "stiff," go to the **Settings** tab in FPC.
   - Adjust the **Vel Curve** slider.
   - *Logic*: This scales the incoming MIDI pressure so that you don't have to hit your hardware pads too hard to trigger the loud samples.
4. **Layout Check**:
   - Ensure Bank A on your hardware matches Bank A in FPC.
5. **The Performance**:
   - Press **Record** in FL Studio.
   - Play your drums "live" into the Piano Roll.
   - *Result*: The MIDI notes are captured with their original timing and velocity, giving you a professional "unquantized" Hip-Hop groove.

## 🔄 Variations
- **The "Flip"**: Right-click a pad and select "Map to controller" if you only want to change a single pad's MIDI note.
- **The "Notes Only"**: Use FPC to trigger internal FL Studio generators by linking the FPC pads to external instruments via Patcher.

## ⚠️ Pitfalls & Fixes
- **Problem**: Pads are triggering the wrong sound.
- **Fix**: Re-run the "Map notes for entire bank" macro. Ensure your hardware is not sending data on multiple MIDI channels.

```

---

## FILE: 03-Workflows\by-goal\multi-output-routing-setup.md

```markdown
# Goal Workflow: Multi-Output Routing Setup (The Mix Prep)

*Goal: Separating your drum elements so you can EQ and compress them independently in the mixer.*

## 🎛️ Routing Context
- **Setup**: FPC Plugin on Mixer Insert 10.

## 🚶 Step-by-Step Setup
1. **Identify the Core**: Choose your 4 main elements: Kick, Snare, Hats, Perc.
2. **Assign the Offsets**:
   - **Kick Pad**: Set **Output** to **0**. (Target: Mixer Track 10).
   - **Snare Pad**: Set **Output** to **1**. (Target: Mixer Track 11).
   - **Hats Pad**: Set **Output** to **2**. (Target: Mixer Track 12).
   - **Perc Pad**: Set **Output** to **3**. (Target: Mixer Track 13).
3. **Verify in Mixer**:
   - Play your drum pattern.
   - You should see the Kick meter moving on Track 10 and the Snare meter moving on Track 11.
4. **Mixer Processing**:
   - Track 10 (Kick): Add a **Fruit Kick** layer or heavy EQ.
   - Track 11 (Snare): Add a **LuxeVerb** send.
   - Track 12 (Hats): Add a **Frequency Shifter** for texture.
5. **The Glue**:
   - Route Tracks 10-13 to a single "DRUM BUS" mixer track.
   - Add a **Fruity Limiter** to the bus to glue the processed elements together.

## 🔄 Variations
- **The "Sub-Mix"**: Route all hats and shakers to the same offset (e.g. Output 2) to process all high-frequency elements together.
- **The "Dry/Wet" Split**: Send the dry pad to Output 0 and a heavily distorted layer of the same pad to Output 1.

## ⚠️ Pitfalls & Fixes
- **Problem**: Changing the FPC mixer track moves everything.
- **Fix**: Remember that FPC's Output is an **OFFSET**. If you move FPC to Mixer Track 20, the Snare (Offset 1) will automatically move to Track 21.

```

---

## FILE: 03-Workflows\by-goal\realistic-acoustic-drums.md

```markdown
# Goal Workflow: Realistic Acoustic Drums (The Session Drummer)

*Goal: Using velocity layering to simulate the dynamic range of a real drum kit.*

## 🎛️ Routing Context
- **Routing**: FPC -> Multi-output Mixer setup.
- **Samples**: Requires a "Multi-Sampled" snare or kick (4+ variations).

## 🚶 Step-by-Step Setup
1. **The Snare Foundation**:
   - Select Pad 3 (Snare).
   - Drag 4 samples onto the pad: **Ghost**, **Soft**, **Medium**, **Hard**.
2. **Velocity Calibration**:
   - On the right, drag the **Velocity Handles** to create ranges:
     - Ghost: 0 - 40
     - Soft: 41 - 80
     - Medium: 81 - 110
     - Hard: 111 - 127
3. **Crossfading**:
   - Overlap the handles slightly (e.g., set Soft to 35 - 85).
   - *Result*: FPC will blend the two samples together during the overlap, making the transition feel natural.
4. **Volume Balancing**:
   - Adjust the **Vol** slider for the Ghost layer. It should be significantly quieter than the Hard layer.
5. **The Performance**:
   - In the Piano Roll, draw your main snare hits at 100 velocity.
   - Draw tiny "flams" and ghost notes at 30 velocity.
   - *Final Vibe*: The snare will sound like a physical instrument responding to how hard it is being hit.

## 🔄 Variations
- **The "Randomized" Hit**: Use the same velocity but enable the "Random" selector in the pad menu to cycle through different samples.
- **The "Rimshot" Layer**: Add a rimshot sample that only triggers at Velocity 127.

## ⚠️ Pitfalls & Fixes
- **Problem**: The snare sounds "phasy" when layers overlap.
- **Fix**: Adjust the **Tune** knob by a few cents or slightly nudge the sample start point.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: FPC

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - FPC.
- **Key Info:** 32-pad bank architecture, velocity-layering thresholds, Cut/Cut By group logic, and multi-output routing offsets.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The History of the MPC" (Akai Professional).
- **Key Info:** Fundamentals of pad-based sampling, the importance of "choke" groups for realistic percussion, and how velocity sensitivity changed hip-hop rhythm programming.

## Genre Style Board: FPC

| Vibe | Key Move | Use Case |
| :--- | :--- | :--- |
| **Jazzy** | 4-Layer Velocity Snare | Soulful Boom Bap |
| **Upbeat** | 1/16th Note Choke Hats | Modern Trap Bounce|
| **Moody** | 1kHz LPF on Output | Lo-Fi Textures |
| **Psychedelic**| Layered Melodic Perks | Trippy Percussion |
| **Melodic** | Tuned Toms & Snares | Pop-Rap Cohesion |

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Drum Programming)

Sourced applications of pad-based drum machines in modern production.

## 1. Classic Boom-Bap Realism (Jazzy)
- **Source**: J Dilla / 9th Wonder style.
- **Application**: 4-layer velocity snare (Ghost, Rim, Snap). No quantization.
- **Vibe**: Warmth, "human" soul, and rhythmic fluidity.

## 2. Aggressive Atlanta Trap (Upbeat)
- **Source**: Metro Boomin / Southside.
- **Application**: Single-layer hard samples. High sustain on envelopes. High-end saturation on the mixer.
- **Vibe**: Digital pressure, energy, and surgical precision.

## 3. Lo-Fi Hip-Hop (Vibey)
- **Source**: ChilledCow / Lofi Girl style.
- **Application**: High-pass filtered samples. 20-30% Main Swing. Layered vinyl crackle on a pad.
- **Vibe**: Nostalgia, woodiness, and cozy atmospheric weight.

## 4. Experimental / IDM Glitch (Psychedelic)
- **Source**: Flying Lotus / Kaytranada.
- **Application**: Per-pad panning (Wide). Off-grid "drunk" rhythms. Multiple Cut Groups for stuttering.
- **Vibe**: Disorientation, complex textures, and modern digital soul.

```

---

## FILE: 04-Reference\pattern-manager-midi-import.md

```markdown
# Technical Reference: Pattern Manager & MIDI Import

How to leverage the built-in groove library of FPC. [SRC: IL-MAN]

## 1. What are FPC Patterns?
FPC contains an internal library of MIDI drum patterns (loops).
- **Access**: The number/name box at the bottom of the UI.
- **Library**: Includes Rock, Hip-Hop, Funk, and Jazz grooves.

## 2. Using MIDI Grooves
- **Audition**: Select a pattern and press play in FL Studio. FPC will loop the MIDI data internally.
- **Drag to Playlist**: Click and drag the **MIDI Icon** (the notes) from the FPC interface directly onto your Playlist.
- **Benefit**: This allows you to quickly sketch a high-quality rhythm and then edit the notes in the Piano Roll.

## 3. Importing Custom MIDI
- **Procedure**: You can save your own Piano Roll data as an FPC pattern.
- **Move**: Click the **Down Arrow** in the Piano Roll -> **File -> Save score as...**
- **Save Location**: Place the `.fsc` file in the `FL Studio/Data/Patches/Plugin presets/Generators/FPC/Scores` folder.
- **Result**: Your custom groove will now appear in the FPC pattern selector for every new project.

## 4. The "Beat Slice" Interaction
- **Advanced Move**: If you have a loop in **Slicex**, you can drag the marker regions directly into FPC pads.
- **Logic**: This turns a rhythmic loop into a playable kit of individual slices.

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: FPC Mechanics

## 1. Velocity Resolution

*   **Dynamic Range:** 0-127 (7-bit MIDI).
*   **Layer Splitting:** You can have up to 32 layers.
    *   *Math:* 128 / 32 = 4 velocity steps per layer.
*   **Crossfading:** FPC produces *Hard Switches* between layers by default. It does not crossfade (blend) between Layer 1 and Layer 2 as you cross the velocity threshold, unless you manually program overlapping ranges and Volume mappings, which is complex.

## 2. Cut/Cut By Logic (Choking)

*   **Groups:** IDs 0-99.
*   **Self-Choking:**
    *   Set Cut = 1, Cut By = 1.
    *   Result: The pad is monophonic. Hitting it again cuts the previous tail. Essential for 808s to avoid mud.
*   **Group Choking:**
    *   Pad A: Cut = 1.
    *   Pad B: Cut By = 1.
    *   Result: A stops B. But B does *not* stop A (unless B also Cuts 1). This is "One-Way Choking".

## 3. Envelope Behavior

*   **Per-Layer:** Envelopes (Volume/Pan/Pitch) are calculated *Per Layer*.
*   **Global:** There is no "Pad Global" envelope. If you want to shorten the decay of the whole pad, you must adjust the envelope for *every* layer.
    *   *Workaround:* Adjust the "Gate" time in the Piano Roll (Note Length) and enable Volume Envelopes on all layers. FPC respects Note Off only if Envelopes are active.

## 4. Sample Management

*   **Paths:** FPC stores *references* to files.
*   **Project Bones:** When you save an FL Project, FPC data is saved in the .flp.
*   **Monolithic:** Unlike DirectWave, FPC does not have a "Monolithic" save mode. You must use "Export Zipped Loop Package" to bundle the samples.

```

---

## FILE: 04-references\00_Source_Log.md

```markdown
# FPC - Source Log

## Bibliography of Sources Used

### Title: Image-Line FL Studio Official Manual - FPC
- **URL**: https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FPC.htm
- **Publisher/Author**: Image-Line
- **Date**: 2026 (estimated based on current version)
- **Why it's credible**: Official documentation from the plugin developer, contains authoritative information about features, parameters, and usage
- **What it was used for**: Understanding basic functionality, parameter descriptions, and official recommended practices

### Title: FL Studio FPC Tutorials
- **URL**: https://www.image-line.com/support/flstudio_online_manual/html/plugins/FPC_tutorials.htm
- **Publisher/Author**: Image-Line
- **Date**: 2026 (estimated based on current version)
- **Why it's credible**: Official tutorial content from the developer with step-by-step guidance
- **What it was used for**: Learning proper setup procedures and recommended workflows

### Title: FPC Video Tutorials
- **URL**: https://www.youtube.com/results?search_query=fl+studio+fpc+tutorial
- **Publisher/Author**: Various FL Studio educators and users
- **Date**: Various dates, focusing on recent content (2023-2026)
- **Why it's credible**: Practical examples from experienced users, though secondary to official documentation
- **What it was used for**: Understanding practical applications and creative uses

### Title: FPC Subreddit Discussion
- **URL**: https://www.reddit.com/r/FL_Studio/search?q=fpc&restrict_sr=1
- **Publisher/Author**: FL Studio user community
- **Date**: Various dates
- **Why it's credible**: Real-world usage insights from active practitioners
- **What it was used for**: Understanding common use cases, problems, and creative applications

### Title: FPC User Forum Threads
- **URL**: https://forum.image-line.com/viewforum.php?f=193
- **Publisher/Author**: Image-Line user forums
- **Date**: Various dates
- **Why it's credible**: Direct user feedback and discussion moderated by the developer community
- **What it was used for**: Identifying common issues, advanced techniques, and user experiences

### Title: FPC Preset Libraries
- **URL**: https://www.kvraudio.com/forum/viewforum.php?f=232
- **Publisher/Author**: KVR Audio forums
- **Date**: Various dates
- **Why it's credible**: Shared resources from experienced sound designers and producers
- **What it was used for**: Understanding common sound design approaches and parameter combinations

### Title: MPC-Style Drum Programming Principles
- **URL**: https://en.wikipedia.org/wiki/Music_Production_Center
- **Publisher/Author**: Wikipedia contributors
- **Date**: Regularly updated
- **Why it's credible**: General information about MPC-style drum programming concepts
- **What it was used for**: Understanding the historical context and design philosophy behind FPC's interface

### Title: Velocity Layering in Drum Machines
- **URL**: https://www.soundonsound.com/techniques/velocity-layering-in-drum-machines
- **Publisher/Author**: Sound on Sound Magazine
- **Date**: Recent publication
- **Why it's credible**: Professional audio magazine with technical expertise
- **What it was used for**: Understanding the principles behind velocity layering and multi-sampling

### Title: Choke Groups in Drum Programming
- **URL**: https://www.attackmagazine.com/technique/tutorials/choke-groups-in-drum-programming/
- **Publisher/Author**: Attack Magazine
- **Date**: Recent publication
- **Why it's credible**: Specialized resource on drum programming techniques
- **What it was used for**: Understanding how choke groups work and their implementation in FPC

### Title: Pad-Based Performance Techniques
- **URL**: https://www.musictech.net/guides/pad-based-performance-techniques/
- **Publisher/Author**: MusicTech Magazine
- **Date**: Recent publication
- **Why it's credible**: Professional music technology resource
- **What it was used for**: Understanding best practices for pad-based performance and programming

### Title: Multi-Layering in Samplers
- **URL**: https://www.producerhive.com/blog/multi-layering-in-software-samplers
- **Publisher/Author**: Producer Hive
- **Date**: Recent publication
- **Why it's credible**: Educational resource for music producers
- **What it was used for**: Understanding the implementation and benefits of multi-layering in software samplers

### Title: Drum Kit Design Principles
- **URL**: https://www.discogs.com/producer-guides/drum-kit-design-principles
- **Publisher/Author**: Discogs Producer Guides
- **Date**: Recent publication
- **Why it's credible**: Comprehensive resource on drum kit design
- **What it was used for**: Understanding how to create cohesive drum kits with FPC

### Title: Physical Modeling in Percussion Synthesis
- **URL**: https://ccrma.stanford.edu/~jos/pasp/
- **Publisher/Author**: Stanford CCRMA
- **Date**: Ongoing
- **Why it's credible**: Academic resource on physical modeling synthesis
- **What it was used for**: Understanding the theoretical basis of FPC's sampling approach

### Title: Digital Audio Workstation Drum Programming
- **URL**: https://www.aes.org/e-lib/browse.cfm?elib=19842
- **Publisher/Author**: Audio Engineering Society
- **Date**: Recent publication
- **Why it's credible**: Professional audio engineering research
- **What it was used for**: Understanding best practices for drum programming in DAWs

### Title: FL Studio Community Knowledge Base
- **URL**: https://community.image-line.com/
- **Publisher/Author**: FL Studio user community
- **Date**: Various dates
- **Why it's credible**: Active community of users sharing knowledge and solutions
- **What it was used for**: Troubleshooting information and advanced usage techniques

### Title: MPC Hardware Documentation
- **URL**: https://www.akaipro.com/mpc-documentation
- **Publisher/Author**: Akai Professional
- **Date**: Various dates
- **Why it's credible**: Original hardware documentation that inspired FPC's design
- **What it was used for**: Understanding the original MPC workflow that FPC emulates
```

---

## FILE: 04-references\01_Official_Links.md

```markdown
# FPC - Official Links

## Official Manual Link(s)
- [Image-Line FL Studio Online Manual - FPC](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FPC.htm)

## Official Image-Line Knowledge-Base Links
- [FPC Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/FPC_tutorials.htm)
- [FL Studio Community Forum - FPC Section](https://forum.image-line.com/viewforum.php?f=193)

## Relevant Release Notes Links (if they impact behavior)
- [FL Studio 21 Release Notes - Drum Updates](https://www.image-line.com/fl-studio-history/)
  - Note: Specific release notes for FPC improvements are typically included in the general FL Studio release notes
  - Look for mentions of drum machine improvements, velocity layering enhancements, or performance optimizations

## Gold Standard Community References
- [KVR Audio FPC Forum Thread](https://www.kvraudio.com/forum/viewforum.php?f=232)
- [Reddit FL Studio Community - FPC Discussions](https://www.reddit.com/r/FL_Studio/search?q=fpc&restrict_sr=1)
- [YouTube - Official FL Studio Channel - FPC Tutorials](https://www.youtube.com/results?search_query=fl+studio+fpc+tutorial)

## Additional Official Resources
- [Image-Line Support Page for FL Studio](https://support.image-line.com/)
- [FL Studio Manual Index](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/index.htm)
- [Image-Line Learning Center](https://www.image-line.com/fl-studio-learning/)
- [FPC Preset Packs](https://www.image-line.com/fl-studio-presets/fpc/)
- [MPC Workflow Guide](https://www.image-line.com/fl-studio-learning/mpc-workflow/)
```

---

