# Fruity Envelope Controller - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Envelope Controller - Articulator Generator

`\`\`
███████╗███╗   ██╗██╗   ██╗███████╗██╗      ██████╗ ██████╗ ███████╗    ██████╗ ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗     ██╗     ███████╗██████╗ 
██╔════╝████╗  ██║██║   ██║██╔════╝██║     ██╔═══██╗██╔══██╗██╔════╝    ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║     ██║     ██╔════╝██╔══██╗
█████╗  ██╔██╗ ██║██║   ██║█████╗  ██║     ██║   ██║██████╔╝█████╗      ██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║     ██║     █████╗  ██████╔╝
██╔══╝  ██║╚██╗██║╚██╗ ██╔╝██╔══╝  ██║     ██║   ██║██╔═══╝ ██╔══╝      ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║     ██║     ██╔══╝  ██╔══██╗
███████╗██║ ╚████║ ╚████╔╝ ███████╗███████╗╚██████╔╝██║     ███████╗    ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗███████╗███████╗██║  ██║
╚══════╝╚═╝  ╚═══╝  ╚═══╝  ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚══════╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Internal Controller / Envelope & LFO Generator
**Category:** Controller / Automation
**Official Manual:** [Image-Line Fruity Envelope Controller Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Envelope%20Controller.htm)

---

## 🎯 What is Fruity Envelope Controller?

Fruity Envelope Controller is a powerful internal automation source. It does not produce sound itself; instead, it generates automation data (envelopes and LFOs) that can be linked to any knob or slider in FL Studio. It features **8 independent Articulators**, each capable of complex multi-point envelopes triggered by MIDI notes. It is the ultimate tool for creating custom "sidechain" curves, rhythmic gates, and key-synced modulation.

**Key Capabilities:**
- **8 Articulators:** Multiple independent automation streams from one plugin.
- **MIDI Triggered:** Start envelopes exactly when a note is played in the Piano Roll.
- **Multimode Sources:** Envelopes, LFOs, Key Mapping, Velocity Mapping, and Randomization.
- **Envelope Scaling:** Master knobs for Attack, Decay, Sustain, and Release scaling.
- **Keyboard Ranges:** Assign different articulators to specific parts of the keyboard.
- **Tempo Sync:** Align envelopes and LFOs to the project grid.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **articulator-logic-101.md** (8 slots system)
3. Create **parameter-cheat-sheet.md**
4. Link Articulator 1 to a Filter Cutoff, then draw a "Pluck" shape in the envelope editor.

### For Power Users:
1. Study **velocity-to-any-target.md** (Linking velocity to effect parameters)
2. Review **key-tracked-fx-modulation.md**
3. Learn **randomized-automation-per-note.md**

### For Patcher Designers:
1. Study **patcher-macro-envelopes.md**
2. Review **building-custom-synth-architecture.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Articulators (1-8):** Selection tabs.
  - **Envelope Editor:** Graph area.
  - **Modulation Tabs:** Env, LFO, Map, Vel, X, Y, Rand.
  - **Master Scaling:** ATT, DEC, SUS, REL knobs.

- [ ] **how-to-link-articulators.md**
  - Step 1: Link target to "Envelope Controller -> Articulator 1".
  - Step 2: Ensure MIDI notes are triggering the controller.

#### 02-Data/parameters/
- [ ] **envelope-controller-specs.json**
  `\`\`json
  {
    "plugin_name": "Fruity Envelope Controller",
    "articulators": 8,
    "sources_per_articulator": 7,
    "output": "Automation Data"
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **perfect-sidechain-ducking.md**
  - Drawing a "Scoop" curve in the Env tab.
  - Triggering with short "Ghost Notes."
  - Advantage: Zero-latency, precise shape control.

- [ ] **key-tracked-reverb-tail.md**
  - Using the "Map" tab.
  - Linking to Reverb Decay.
  - Higher notes = Shorter reverb.

- [ ] **humanized-per-note-filter.md**
  - Using the "Rand" (Random) tab.
  - Adding a small amount of random offset to each note's cutoff.

#### 03-Workflows/by-context/
- [ ] **trance-gate-sequencing.md**
- [ ] **fm-modulation-per-note.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **articulator-summing-logic.md**
  - How Env + LFO + Vel are combined into the final output value.

---

## 🔬 Research Framework

### Phase 1: The Articulator (Week 1)
**Goal:** Basic Modulation

**Tasks:**
1. Link Articulator 1 to a Vol fader
2. Draw a basic ADSR shape
3. Verify it follows MIDI notes
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I make the envelope loop? (L mode in the editor).
- Can I copy Articulator 1 to Articulator 2?

### Phase 2: Mapping Sources (Week 2)
**Goal:** Expressive Control

**Tasks:**
1. Use the "Vel" tab to make a distortion drive reactive to touch
2. Use the "Map" tab to create a split-point for an effect
3. Create perfect-sidechain-ducking.md

---

## 📊 Plugin Specifications to Document

### Engine
- Note Polyphony (How many envelopes can run at once?)
- Smoothing behavior

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why isn't the envelope playing? (Make sure you have MIDI notes triggering the specific Articulator's keyboard range).
2. How to change the range of the automation? (Use the "Level" knobs in the controller or formulas in the link window).

---

## 🔗 Cross-Reference with Other Plugins

Fruity Envelope Controller is often used with:
- **Patcher** (Adding envelopes to external VSTs)
- **Fruity Peak Controller** (The LFO/Peak alternative)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Envelope Controller/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── how-to-link-articulators.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── envelope-controller-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── perfect-sidechain-ducking.md
│   │   └── key-tracked-reverb-tail.md
│
└── 04-Reference/
    └── articulator-summing-logic.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a production-grade sidechain curve that triggers via MIDI
- [ ] Use one instance to control 8 different parameters independently
- [ ] Demonstrate "Keyboard Mapping" to change filter resonance based on pitch
- [ ] Explain the master ATT/DEC/SUS/REL knobs' scaling math

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Envelope Controller

## The 60-Second Mental Model
Fruity Envelope Controller is a **"Brain" for automation**. It doesn't make sound; it generates movement data. Imagine a plugin that can output 8 different "ghost" knobs that move according to any shape you draw. These shapes are triggered by MIDI notes, meaning the movement starts exactly when your synth plays. It's like adding a high-end modulation matrix to every single plugin in FL Studio. [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** A multi-slot MIDI-to-automation bridge.
*   **Where it fits:** It's an Internal Controller. Use it to add ADSR envelopes, LFOs, and pitch-tracking to effects or VSTs that don't have them built-in.

## Hip-Hop / R&B Context
*   **Precision Sidechaining:** Draw a perfectly curved "ducking" shape that triggers via MIDI "Ghost Kicks." This is more precise than a compressor.
*   **Vocal Texture Shifts:** Use the **Random** tab to slightly change the distortion drive or filter cutoff on every single ad-lib note.
*   **Expression:** Map **Velocity** to any effect (e.g., Reverb Wetness) so the "vibey" chords get more reverb when you hit the keys harder.

## When To Use
*   When you need **Note-Locked Modulation** (envelopes that restart on every key press).
*   When you want to control **multiple parameters** with one MIDI pattern.
*   When building complex instruments inside **Patcher**.

## When NOT To Use
*   **Global LFOs:** If you just need a standard 1/4 note wobble that never stops, **Fruity Peak Controller** is faster to set up.
*   **Manual Fades:** For simple linear volume fades, a standard **Automation Clip** is more efficient.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Envelope Controller

## UI Tour
1.  **Articulator Selector (1-8):** Tabs at the top. Each one is a completely independent control stream. [SRC: IL-MAN]
2.  **The Source Tabs (Bottom of Graph):**
    *   **Env:** Standard multi-point envelope.
    *   **LFO:** Internal oscillator.
    *   **Map:** Key-tracking (Note pitch -> Value).
    *   **Vel:** Velocity-tracking (How hard you play -> Value).
    *   **Rand:** Note-randomization.
3.  **The Master Scaling Knobs:**
    *   **ATT / DEC / SUS / REL:** Global multipliers for all active envelopes.
4.  **Base / Level / Offset:** Fine-tunes the output range.

## Signal Flow
1.  **MIDI In:** Notes from the Piano Roll trigger the articulators.
2.  **Articulator Logic:** The plugin checks all active source tabs (Env, LFO, Map, etc.).
3.  **Summing Engine:** It mathematically combines these sources into one final value (0.0 to 1.0).
4.  **Broadcasting:** This value is sent to the "Remote Control" system.
5.  **Target Link:** Any knob in FL Studio linked to "Articulator 1" moves in real-time.

## Things Beginners Misunderstand
*   **Key Ranges:** Each articulator has a "Keyboard" at the bottom. If you click a note and it's greyed out, that articulator **will not trigger**. **Fix:** Drag the range bars to cover the whole keyboard.
*   **Summing vs Overriding:** If you have an Envelope AND an LFO active, they **add together**. If the total exceeds 100%, the signal clips at max value. [SRC: REPUTABLE]
*   **Release State:** The release of the envelope only plays if the note in the Piano Roll is short enough to trigger the release stage. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Envelope Controller

## Technique 1: The "Ghost" Sidechain Scoop
*   **Goal:** Cleaner low-end than a compressor.
*   **Action:** Draw an inverted "U" shape in the **Env** tab (starts at 100%, drops to 0%, curves back up). Link this to your Bass volume.
*   **Benefit:** Zero lookahead delay and zero "pumping" artifacts. You define the exact shape of the duck. [SRC: REPUTABLE]

## Technique 2: Humanized Velocity Filters
*   **Goal:** Synths that sound "real."
*   **Setup:** Go to the **Vel** tab. Draw a diagonal line (Upward). 
*   **Target:** Link to a Low Pass Filter Cutoff.
*   **Result:** The harder you play, the brighter the synth gets. This is the #1 secret for "Jazzy" and "Vibey" melodic parts.

## Technique 3: Per-Note Panning
*   **Goal:** Lead vocals or synths that dance across the speakers.
*   **Action:** Go to the **Rand** tab. Set a random offset.
*   **Target:** Mixer Panning.
*   **Result:** Every time a new note plays, it appears in a slightly different stereo position. [SRC: REPUTABLE]

## Technique 4: Keyboard Split FX
*   **Goal:** Reverb only on high notes.
*   **Setup:** Use the **Map** tab. Draw a line that stays at 0 for low notes and jumps to 100% for high notes.
*   **Target:** Reverb Mix.
*   **Effect:** Bass notes stay dry and punchy; lead notes get lush and atmospheric.

## Common Pitfalls + Fixes
*   **Pitfall:** "The envelope is too fast/slow."
    *   **Fix:** Use the master **ATT** and **DEC** knobs on the front panel to scale the entire timing without re-drawing the graph. [SRC: IL-MAN]
*   **Pitfall:** "It's not triggering."
    *   **Fix:** Ensure the MIDI channel color matches the Note Color in the Piano Roll (usually Green/Color 1).

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Envelope Controller

Envelope Controller is the "Shape" of the vibe. It translates static energy into rhythmic motion.

## 1. Moody (Dragging, Dark, Heavy)
*   **Production Lever:** **Exponential Release Curves.**
*   **Action:** Draw a long, "saggier" curve in the Release stage of the Env tab. 
*   **Listen For:** A sound that takes a long time to "die," feeling heavy and emotional.
*   **Don't Do This:** Avoid fast attacks; the vibe should be "slow to wake up."

## 2. Upbeat (Punchy, Bouncing, Kinetic)
*   **Production Lever:** **Logarithmic Attack + Sidechain Scoops.**
*   **Action:** Use a fast "plucked" envelope for filter cutoff. Sync the Sidechain ducking to 1/4 notes.
*   **Listen For:** The "bounce" that makes the listener's head move. 
*   **Don't Do This:** Don't let envelopes overlap; keep them "staccato."

## 3. Psychedelic (Morphing, Looping, Unstable)
*   **Production Lever:** **"L" (Loop) mode + Randomization.**
*   **Action:** Enable Loop mode in the envelope editor. Create a 12-point complex shape. Turn up the **Rand** amount to 20%.
*   **Listen For:** A pattern that repeats but never sounds exactly the same twice.
*   **Don't Do This:** Avoid standard ADSR shapes; get weird with the graph points.

## 4. Jazzy (Organic, Interactive, Expressive)
*   **Production Lever:** **Velocity-to-Resonance Mapping.**
*   **Action:** Link Velocity to the "Res" of a filter. Use the **Map** tab to make high notes more "resonant" than low notes.
*   **Listen For:** The instrument behaving like a physical object (wood/metal) that responds to touch.
*   **Don't Do This:** Avoid static values; jazz is all about dynamics.

## 5. Vibey (Soft, Shimmering, Atmospheric)
*   **Production Lever:** **High Tension Attacks (Swells).**
*   **Action:** Draw an "S" curve in the Attack stage. Link to Reverb Size or Delay Feedback.
*   **Listen For:** The space "opening up" slowly after the note hits.
*   **Don't Do This:** Avoid sharp cuts; keep the "edges" of the automation soft. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\generative-melodics.md

```markdown
# Generative Melodic Textures

## The "Living" Lead
In modern, "cool" Hip-Hop production, melodic lines often feel like they are "moving" or "breathing" on their own.
- **Note Randomization:** Link the **RND** articulator to a synth's filter resonance. Every time a note plays, the "whistle" of the filter is different, preventing the sound from becoming stale.
- **Chaos vs. Control:** Use the **Smoothing** parameter to turn chaotic, random jumps into smooth, organic "drifts".

## Psychedelic Filter Breathing
- **LFO Sync:** Link a slow Sine LFO to the global volume of a pad.
- **The "Pulse" Rule:** Sync the LFO to 1/2 or 1/4 bar. This creates an "upbeat" melodic pulse that fits perfectly with Hip-Hop grooves.

```

---

## FILE: 01-Learning\Concepts\macro-control-architecture.md

```markdown
# The Master's Guide to Macro-Control Architecture and Logic Systems

## 1. Introduction: The Concept of the "One Knob"
In professional production, "Workflow is everything." When you are deep in a mix, you don't want to be opening 5 different plugins to change the "Mood" of a sound. **Macro-Control Architecture** is the practice of using **Fruity Envelope Controller** as a centralized "Brain" that manages the behavior of multiple target plugins. By mastering this architecture, you create a "Smart Project" where one move can transform an entire section of your song.

---

## 2. Theoretical Foundation: The "Controller" vs. The "Target"
### 2.1 Decoupling Parameters
In a standard project, parameters are static. 
- **The Philosophy:** With Envelope Controller, we **Decouple** the aesthetic choice from the technical knob.
- **The Brain:** The Envelope Controller Articulator is the "Intent" (e.g., "Make it Moody").
- **The Muscles:** The target knobs (Filters, Reverb Mixes, Saturation Levels) are the "Execution."

### 2.2 Weighted Modulations (The Summing Junction)
One Articulator can have different **Weights** for different targets.
- **Example:** Link a Master Knob to both a Filter Cutoff and a Reverb Mix.
    - **Filter Weight:** 100% (Full sweep).
    - **Reverb Weight:** 20% (Subtle increase).
- **The Result:** As you "Open" the filter, the sound also gets slightly more "Spacious." This is the hallmark of professional "Living" sound design.

---

## 3. Designing the "Mood Knob"
### 3.1 The "R&B Intimacy" System
Producers like Noah "40" Shebib use a single automation curve to change the "Focus" of an R&B track.
1. **The Brain:** Setup **Articulator 1** in Envelope Controller.
2. **The Logic:** Use a slow **Sine LFO** (1/2 Bar).
3. **The Targets:** 
    - **Target A:** High-Cut EQ at 2kHz.
    - **Target B:** Reverb Wet at 30%.
    - **Target C:** Bitcrush Rate at 12kHz.
4. **The Formula:** Link all to Art 1. 
5. **The Effect:** The entire track "breathes" in and out of focus, moving between clear and muffled in time with the song.

---

## 4. Engineering the "Human" Groove
### 4.1 Sample-Accurate Timing Logic
Standard MIDI LFOs can "drift" or "jitter" if the project is CPU-heavy.
- **The Envelope Controller Advantage:** Because it is native and sample-accurate, its macro-controls are locked to the **Audio Clock**, not the UI clock.
- **The Production Impact:** Your macro-modulated sidechain pulses will stay perfectly in phase with your 808 for hours, ensuring the "Upbeat" energy never falters.

---

## 5. Non-Linear Macro Mapping
### 5.1 Transfer Function Customization
Use the **VEL** or **KBD** tabs inside the Envelope Controller to define how your Macro Knob responds.
- **The "Safety" Curve:** Draw a curve that plateaus at the top. 
- **The Result:** Even if you crank your MIDI knob to 100%, the filter only opens to 80% (your safe "Sweet Spot").
- **The Logic:** You are building "Safe Rails" into your project, allowing you to perform aggressively during a live set without ruining the mix.

---

## 6. Table of Macro Ratios
Use these ratios when linking a single Articulator to multiple targets:

| Target Parameter | Mapping Weight | Mapping Formula | Result |
|------------------|----------------|-----------------|--------|
| **Filter Cutoff**| 100%           | `Input`         | Primary movement. |
| **Delay Wet**    | 15%            | `Input * 0.15`  | Subtle space addition. |
| **Distortion**   | 40%            | `Input * Input` | Aggressive rise at peak. |
| **Mixer Volume** | -10%           | `1 - (Input * 0.1)`| Dip volume as filter opens. |

---

## 7. The Physics of Internal Summing
Fruity Envelope Controller sums its internal LFO and ENV before the output.
- **The Logic Trick:** You can use the **LFO** to provide a constant "Pulse" and use the **ENV** to "Boost" that pulse during a snare hit.
- **The Math:** `Final = LFO + ENV`.
- **The Vibe:** Your "Moody" pad pulses rhythmically, but every time a note is played, it "shimmers" brighter for a second.

---

## 8. Conclusion: The System Architect
Mastering **Macro-Control Architecture** in Fruity Envelope Controller moves you from being a "Loop Maker" to a **"Sonic Director."** You are designing systems that interpret your musical intent. By centralizing your logic into a single brain, you achieve a level of consistency and complexity that defines the "Elite" production aesthetic of modern Hip-Hop and R&B. It is the ultimate tool for achieving "Cool" through technical intelligence.

---
**Document Version:** 3.0 (Master Sound Designer Tier)
**Keywords:** Macro Control, Signal Logic, System Architecture, Envelope Controller, R&B Workflow, Logic Gates.

```

---

## FILE: 01-Learning\Concepts\modulation-theory.md

```markdown
# The Master's Guide to Modulation Theory and Articulation in Envelope Controller

## 1. Introduction: The Brain of the Machine
In the world of professional audio engineering, modulation is the difference between a static "static" sound and a living "musical" instrument. Fruity Envelope Controller is the definitive tool for **Signal Logic** in FL Studio. It acts as a bridge between the physical performance (MIDI) and the digital processing (VST Parameters). By mastering this plugin, you are no longer just "twisting knobs"—you are designing the **Central Nervous System** of your production.

---

## 2. Theoretical Foundation: Control Voltage (CV) Emulation
### 2.1 The Analog Legacy
Before DAWs, synthesizers used **Control Voltage**. A voltage sent through a wire would "tell" another module what to do (e.g., higher voltage = higher filter cutoff).
- **The Envelope Controller Secret:** This plugin is a digital emulation of a CV module. It outputs a stream of values (0.0 to 1.0) that can be "patched" into any other knob in FL Studio via the 'Link to Controller' menu.

### 2.2 Sample-Accurate Modulation vs. MIDI CC
Standard MIDI automation (CC) is limited to 128 steps and is often updated at the "buffer" rate, leading to "zipper noise" or "stair-stepping."
- **The Master Advantage:** Fruity Envelope Controller calculates its values for **every single audio sample**. This allows for lightning-fast filter sweeps and ultra-precise volume gating that is mathematically perfect and glitch-free.

---

## 3. The Articulator Summing Math
### 3.1 The Multi-Source Logic
Each Articulator in Envelope Controller is not just one envelope; it is a **Weighted Sum** of multiple sources.
- **The Equation:** `Final Value = Base + (ENV + LFO + KBD + VEL + RND) * Amount`
- **The Interaction:** 
    - **Base:** The "Zero" point.
    - **ENV:** Triggered movement.
    - **LFO:** Constant movement.
    - **KBD/VEL/RND:** Performance-based movement.
- **The Result:** Professional producers combine these sources to create complex, "human" sounds. For example: A filter that opens with velocity (VEL), but also has a subtle, random "drift" (RND) and a rhythmic pulse (LFO).

---

## 4. The Engineering of Smoothing (Inertia)
### 4.1 Limiting the Rate of Change
The **Smoothing** knob is effectively a one-pole Low-Pass Filter applied to the control signal.
- **The Physics of Clicking:** Audio clicks happen when a parameter jumps from one value to another instantly.
- **The Solution:** Smoothing adds "Inertia" to the signal. It forces the jump to happen over a few milliseconds (5-50ms).
- **Psychedelic Vibe:** Set Smoothing to 500ms to turn erratic, random jumps into slow, "drunken" melodic drifts.

---

## 5. Mapping Curves: The Transfer Functions
### 5.1 Non-Linear Response
The mapping tabs (KBD, VEL, RND) allow you to draw custom curves. These are **Transfer Functions**.
- **Linear:** 1:1 relationship.
- **Exponential:** Low values have little impact; high values have a massive impact. (Best for filter resonance).
- **Logarithmic:** Small changes at the start have a big impact; high values level off. (Best for volume ducking).

---

## 6. Genre-Specific Production Strategies
### 6.1 Moody R&B (The "Breathing" Pad)
- **The Technique:** Link Articulator 1 to the volume of a synth pad.
- **The Action:** Use a Sine LFO synced to 1/2 bar with 20% Amount and 50% Smoothing.
- **The Result:** The pad "breaths" in and out softly, creating a moody, atmospheric pulse that anchors the R&B groove.

### 6.2 Upbeat Trap (The "Hyper-Snappy" Filter)
- **The Technique:** Link Articulator 2 to a filter cutoff.
- **The Action:** Draw an ultra-fast Decay envelope with 0ms Attack.
- **The Result:** Every time a note hits, the filter "snaps" open and shut instantly, providing the aggressive energy found in modern Trap leads.

---

## 7. Mathematical Formula Library for Linking
When you link a parameter to an Articulator, you can use **Link Formulas** to further refine the logic:

| Formula | Effect | Best Use |
|---------|--------|----------|
| `Input` | Standard 1:1 | Basic modulation |
| `1-Input`| Inverted | Sidechain ducking |
| `Input*0.5`| Half-Range | Subtle pitch drift |
| `Input*Input`| Parabolic | Dramatic filter openings |
| `Round(Input*5)/5`| Stepped | Glitch/Bit-crush effects |

---

## 8. Conclusion: Mastering the Invisible Hand
The Fruity Envelope Controller is the most powerful "invisible" tool in your arsenal. It doesn't make sound itself, but it dictates how every other sound in your project **behaves**. By understanding the mathematics of articulator summing and the physics of signal smoothing, you move from being a "preset user" to a "system architect." It is the ultimate tool for achieving professional, "cool," and "living" textures in Hip-Hop and R&B.

---
**Document Version:** 2.0 (Master Tier)
**Author:** AI Research Specialist
**Keywords:** Modulation Theory, CV Emulation, Articulator Logic, Mapping Curves, Signal Engineering.
```

---

## FILE: 01-Learning\Concepts\neural-pattern-sequencing.md

```markdown
# The Master's Guide to Neural Pattern Sequencing and Rhythmic Psychology in Envelope Controller

## 1. Introduction: The Brain's Rhythmic Cortex
In modern Hip-Hop and R&B, the "Groove" is a psychological contract between the producer and the listener. The human brain is a **Pattern Recognition Engine**. It craves a balance between "Predictability" (to dance) and "Surprise" (to stay engaged). **Fruity Envelope Controller** is the ultimate tool for managing this balance. This guide explore the neurology of repetition and how to use multi-articulator logic to create "Flow State" productions.

---

## 2. Theoretical Foundation: Predictability vs. Entropy
### 2.1 The Comfort of the LFO (Neural Entrainment)
When we hear a constant, rhythmic pulse (like a Sine LFO linked to volume), our brainwaves begin to sync with the frequency. This is **Neural Entrainment**.
- **The Psychology:** Entrainment creates a feeling of "Safety" and "Groove." This is why sidechain ducking is so addictive—it's a physical pulse that the brain can rely on.
- **The Envelope Controller Strategy:** Use Articulator 1 for your "Foundation" (the LFO sync). This keeps the listener anchored.

### 2.2 The Dopamine of Randomness (Surprise)
Total predictability leads to **Aural Fatigue**.
- **The Science:** When the auditory cortex detects a change it didn't expect, it releases a tiny burst of dopamine.
- **The RND Strategy:** Use the **Random (RND)** articulator to modulate a subtle parameter, like the "Filter Resonance" or "Pan."
- **The "Cool" Balance:** 90% Predictability (LFO) + 10% Surprise (RND) = The "Elite" production sweet spot.

---

## 3. Designing "Smart Melodies"
### 3.1 Velocity-Mapped Narrative
In R&B, the "Soul" of a keyboard line comes from how the player responds to the mood.
- **The Neurology:** High-velocity notes are interpreted by the brain as "High Energy" or "Stress." Low-velocity notes are "Intimacy."
- **The System:** Use the **VEL** tab in Articulator 2 to link note strength to **Reverb Wet**. 
- **The Effect:** When the producer plays harder, the sound gets "Drier" and "Bolder." When they play softer, the sound "Melt Away" into the hall. This mimics the biological response of a real physical instrument.

### 3.2 The "Drunken" Swing (Temporal Entropy)
Elite Trap producers often use hi-hats that are slightly "Off-Grid."
- **The Logic:** Use an Articulator linked to the **Shift** parameter of your sampler.
- **The Shape:** Use a very slow Sine LFO (4 bars) with 5% Amount.
- **The Result:** The "Swing" of your drums will slowly drift over time. This mimics the minute imperfections of a human drummer, which the brain perceives as "Cool" and "Organic."

---

## 4. The Engineering of Tension: Parabolic Envelopes
### 4.1 Logarithmic vs. Exponential Perception
Human ears do not hear volume changes linearly.
- **The "Rise" Problem:** A linear volume riser (0 to 100) often feels like it "Stalls" in the middle.
- **The Exponential Fix:** Use an **Exponential Rising** curve in the Envelope Controller.
- **The Result:** The energy build-up feels much more dramatic and "Exciting." The "Pop" at the end of the riser triggers the "Release" response in the brain, making the drop feel twice as powerful.

---

## 5. Mathematical Neural Tuning Table
Use these modulation speeds to target specific psychological states:

| Brain State | LFO Speed | Waveform | Biological Impact |
|-------------|-----------|----------|-------------------|
| **Deep Haze** | 1/2 Bar   | Sine     | Theta-wave mimicry. Calming / Moody. |
| **Club Hypnosis**| 1/4 Bar | Square   | Alpha-wave entrainment. High focus. |
| **Anxiety/Edge**| 1/16 Bar  | Sawtooth | Gamma-wave arousal. High tension. |
| **Dream State** | 4 Bars    | Random   | Entropy. Ethereal / Psychedelic. |

---

## 6. Conclusion: The Neurological Conductor
Mastering Fruity Envelope Controller is about becoming a **Neurological Conductor**. You are no longer just "making a beat"; you are manipulating the biological clock of your audience. By balancing the "Anchor" of entrained LFOs with the "Sparks" of generative randomness, you create music that is deeply addictive and professional. Follow these neurological protocols to move beyond the loop and start designing **Experiences.**

---
**Document Version:** 1.0 (Acoustic Architecture Tier)
**Author:** Rhythmic Neurology Lead
**Keywords:** Neural Entrainment, Psychoacoustics, Rhythmic Cortex, Entrophy, Dopamine, Envelope Controller.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Envelope Controller (5 Minutes)

1.  **Insert:** Load **Fruity Envelope Controller** into the Channel Rack.
2.  **Target:** Go to any knob (e.g., a Filter Cutoff on another synth).
3.  **Link:** Right-click the knob -> **Link to controller**.
4.  **Assign:** Select **Env Controller (Articulator 1)** from the dropdown. Click Accept.
5.  **Trigger:** Draw some MIDI notes in the Envelope Controller's Piano Roll.
6.  **Shape:** In the plugin, draw a curve in the **Env** tab. You will see the target knob move following your shape. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Envelope Controller

*   **Wrong Channel Color:** Using blue/yellow notes in the Piano Roll when the Articulator is set to listen only to the default Green (Color 1). **Fix:** Use the Note Color selector in the Piano Roll.
*   **Keyboard Range Limit:** Thinking the plugin is broken because your C5 note doesn't trigger the envelope. **Fix:** Look at the keyboard at the bottom of the UI; ensure the white bar covers the note you are playing.
*   **Sustain at 0:** Setting Sustain to 0 on a long note and wondering why the automation stops. **Fix:** Move the Sustain point up if you want the value to hold while the key is pressed.
*   **Linking to Main Output:** Forgetting that Envelope Controller makes **no sound**. Don't try to route audio *through* it. It is purely a control source.
*   **LFO Speed Clashes:** Having a rhythmic LFO active while trying to use a one-shot Envelope. They will "fight" for control of the knob. **Fix:** Turn the LFO **Amount** knob to 0 if not in use. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\how-to-link-articulators.md

```markdown
# How to Link Articulators: Envelope Controller

To get movement into your mix, you must "connect" the brain to the body.

## 1. Internal Plugin Linking
1.  Open the target plugin (e.g., Sytrus).
2.  Move the knob you want to control.
3.  Go to **Tools -> Last tweaked -> Link to controller**.
4.  Select **Fruity Envelope Controller [Articulator 1-8]**.

## 2. Mixer Fader Linking
1.  Right-click any fader or pan knob.
2.  Select **Link to controller**.
3.  Select the desired Articulator.

## 3. Patcher Linking (The Best Way)
1.  Load Envelope Controller inside **Patcher**.
2.  Right-click its "Red Dot" (Output) and activate the Articulator number.
3.  Connect the red line to the "Blue Dot" (Parameter input) of another plugin.
*   *Advantage:* This keeps the automation contained within a single preset file. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Envelope Controller: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** 8-Articulator Control Voltage (CV) Emulation Engine
**Internal Logic:** Sample-Accurate Signal Summing
**Target Genres:** All (Foundational Utility for R&B, Rap, Trap, and Psychedelic Hip-Hop)

---

## 1. THE ARTICULATOR ARCHITECTURE (The Outputs)
Fruity Envelope Controller features **8 independent Articulators**. Each articulator functions as a unique "Control Source" that can be linked to any knob in FL Studio.

### 1.1 The Articulator Selector (1-8)
- **Technical Logic:** Clicking a number changes the view to that specific articulator's settings.
- **The "Central Nervous System" Tip:** In complex projects, dedicate specific articulators to specific roles (e.g., Articulator 1 for Volume Gating, Articulator 2 for Filter Cutoff, Articulator 3 for Pitch Drift).

---

## 2. THE MODULATION SOURCES (The Inputs)
Each articulator is composed of five distinct sources that are summed together.

### 2.1 Envelope (ENV) Tab
- **Type:** Multi-point ADSR Envelope.
- **Master Features:**
    - **Sustain Point:** Right-click a node to set it as the sustain point.
    - **Loop Points:** Define a segment of the envelope to repeat while the key is held.
- **R&B Secret:** For "Breathing" synth pads, use a very slow Attack (2000ms) and a long Release (1500ms).

### 2.2 LFO Tab
- **Type:** Tempo-synced Low Frequency Oscillator.
- **Waveforms:** Sine, Triangle, Square, Saw, Random.
- **The "Phase" Knob:** Determines where the LFO starts in its cycle. Setting this to 0 ensures your rhythmic pulses hit exactly on the beat.
- **The "Sync" Switch:** Forces the LFO to match the project's global transport.

### 2.3 Keyboard (KBD) Tab
- **Role:** Maps MIDI Note Pitch to the Output Value.
- **Physics:** Allows for "Keyboard Tracking." 
- **Production Tip:** Draw a rising curve so that high-pitched notes on your synth automatically have a brighter filter cutoff.

### 2.4 Velocity (VEL) Tab
- **Role:** Maps MIDI Velocity (strike strength) to the Output Value.
- **Soul Logic:** Essential for expressive R&B. Use this to link how hard you play a chord to the "Drive" or "Depth" of a distortion plugin.

### 2.5 Random (RND) Tab
- **Role:** Generates a unique, static value for every new MIDI note triggered.
- **Psychedelic Hack:** Link this to your synth's **Fine Pitch** with a very small range. Now, every single note you play will have a slightly different tuning, mimicking the instability of a physical analog circuit.

---

## 3. THE MAPPING CONTROLS (The Logic)
This is where you determine how the sources are processed before they leave the articulator.

### 3.1 Base Knob
- **Range:** 0% to 100%.
- **Technical Logic:** This is the "DC Offset" of the control signal. 
- **Use Case:** If you are modulating a Filter Cutoff, the Base knob sets the "Minimum" frequency the filter will never drop below.

### 3.2 Amount Knob
- **Range:** -100% to +100%.
- **Polarity:** Negative values will **Invert** the modulation. 
- **The "Ducking" Secret:** Set Amount to -100% to create a sidechain-ducking effect where the volume drops whenever the envelope is triggered.

### 3.3 Smoothing Knob (The Inertia)
- **Technical Range:** 0ms to 10,000ms.
- **Physics:** Limits the "Slew Rate" of the signal. 
- **Master Rule:** 
    - **0-10ms:** Sharp, percussive energy.
    - **20-100ms:** Smooth, organic movement.
    - **500ms+:** Drifting, psychedelic textures.

---

## 4. PERFORMANCE & VISUALIZATION
### 4.1 The Visualizer Display
- **Feedback:** The red dot shows the real-time output of the articulator. 
- **Troubleshooting:** if the dot is stuck at 100%, check if your **Base** knob is too high or if your **LFO** is in additive mode.

---

## 5. INTERNAL CONTROLLER ROUTING (The "Link")
### 5.1 How to "Patch" the Signal
1. Go to the knob you want to control (e.g., Fruity Filter Cutoff).
2. Right-click -> **Link to controller**.
3. In the 'Internal controllers' dropdown, find **'Envelope Controller (Art 1)'**.
4. Click **Accept**.

---

## 6. HIDDEN MENUS & EXPERT FEATURES
- **Right-Click Articulator Number:** Allows you to 'Copy' and 'Paste' entire articulator settings between slots.
- **Envelope Copy/Paste:** You can copy an envelope shape from Fruity Sytrus and paste it directly into Envelope Controller.

---

## 7. TROUBLESHOOTING & OPTIMIZATION
- **CPU Spikes:** Envelope Controller itself uses almost zero CPU. However, if you are modulating a very CPU-heavy plugin (like a high-quality Reverb) at a high rate, the *target* plugin might cause spikes. Increase **Smoothing** to ease the load.
- **Modulation Lag:** Ensure 'Sync' is enabled in the LFO tab if you want it to stay perfectly aligned with your drums.

---

## 8. SUMMARY: THE "VIBE" TEMPLATES
- **THE "TRAP BOUNCE":** LFO Sine, 1/4 Beat Sync, Base 100%, Amount -50%, Smoothing 15ms. (Link to Volume).
- **THE "PSYCHEDELIC DRIFT":** RND Level 50%, Base 48%, Amount 4%, Smoothing 200ms. (Link to Fine Pitch).
- **THE "MOODY BREATH":** ENV Long Attack (2 bars), Base 20%, Amount 60%, Smoothing 100ms. (Link to Reverb Mix).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Envelope Controller, Modulation Logic, CV Emulation, FL Studio Internal Controllers, Signal Routing.
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Envelope Controller

| Parameter | Type | Description | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Articulator** | Tab | One of 8 control slots. | **Upbeat** (Patterns). | Multi-target control.|
| **Env (Graph)** | Source | Multi-point curve. | **Moody** (Swells). | Dynamic shape. |
| **LFO (Graph)** | Source | Periodic oscillator. | **Psychedelic** | Rhythmic motion. |
| **Vel (Graph)** | Source | Velocity multiplier. | **Jazzy** (Touch). | Expressiveness. |
| **Rand (Graph)** | Source | Randomized offset. | **Vibey** (Human). | Variety. |
| **Base** | Knob | Starting value (Offset).| N/A | Resting state. |
| **ATT / DEC** | Knob | Time scaling. | **Upbeat** (Snap). | Timing / Groove. |

## Mix Impact Tags
*   **Motion:** The primary purpose of the articulators.
*   **Tightness:** Using MIDI-triggered envelopes ensures the "ducking" or "filter" starts exactly on the beat.
*   **Complexity:** Managing 8 streams allows for complex macro-like automation. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\envelope-controller-specs.json

```json
{
  "plugin": {
    "name": "Fruity Envelope Controller",
    "category": "Control",
    "type": "Modulation Source",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Envelope%20Controller.htm"
  },
  "parameters": {
    "articulators": 8,
    "components": [
      "Envelope (ADSR + Multi-point)",
      "LFO (BPM Syncable)",
      "Keyboard Mapping",
      "Velocity Mapping",
      "Random Generator"
    ],
    "controls": [
      {"id": "base", "name": "Base", "description": "The offset value."},
      {"id": "amount", "name": "Amount", "description": "The modulation multiplier."},
      {"id": "smoothing", "name": "Smoothing", "description": "Low-pass filter for the control signal."}
    ]
  },
  "outputType": "Internal Controller (available for Linking)"
}

```

---

## FILE: 02-Data\presets\mod-archetypes.json

```json
{
  "archetypes": [
    {
      "name": "Velocity Filter",
      "articulator": 1,
      "mappings": ["VEL"],
      "curve": "Exponential Rising",
      "useCase": "Expressive synth leads where harder playing opens the filter."
    },
    {
      "name": "Note Randomizer",
      "articulator": 2,
      "mappings": ["RND"],
      "curve": "Full Random",
      "useCase": "Humanizing drum pitch or pan per note."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Envelope Controller)

## Rule 1: The "Ghost Kick" Rule
*   **Rule:** Use a dedicated MIDI track for sidechaining.
*   **Application:** Create a pattern named "SC Trigger." Place notes where you want the "bounce" to happen. Route this to Envelope Controller. This allows you to change the bass rhythm without editing the actual kick drum audio.

## Rule 2: Transient Preservation
*   **Rule:** Filters should not kill the "crack" of the drum.
*   **Move:** If using Envelope Controller for a filter sweep, ensure the **ATT (Attack)** is at 0ms. Use the **Logarithmic** curve shape to ensure the filter opens instantly. [SRC: REPUTABLE]

## Rule 3: Velocity Sensitivity for Pads
*   **Rule:** Smooth R&B pads should "bloom."
*   **Application:** Map **Velocity** to the **Attack** of the envelope. Playing harder = Instant sound; Playing softer = Slow swell.

## Rule 4: Feedback Safety
*   **Rule:** Never link an articulator to a "Feedback" knob without a limiter.
*   **Why:** If the envelope spikes to 100% on a delay or distortion unit, it can cause immediate ear-damaging feedback.

## Rule 5: CPU Consolidation
*   **Rule:** Use one instance for multiple jobs.
*   **Application:** Articulator 1 for Sidechain, Articulator 2 for Filter, Articulator 3 for Width. One MIDI note can trigger all three, saving CPU and keeping the arrangement clean. [SRC: IL-MAN]

```

---

## FILE: 02-Data\rules\emotional-modulation-shapes.json

```json
{
  "emotionalModulationRules": {
    "philosophy": "This rule-set defines how specific envelope shapes trigger emotional responses in the listener. Use these curves inside Fruity Envelope Controller to 'Score' the narrative of your Hip-Hop/R&B track.",
    "curveDictionary": [
      {
        "name": "The Aggressive Snap",
        "shape": "Instant Attack, Steep Exponential Decay.",
        "emotion": "Dominance / Precision / Hardness.",
        "context": "Link to Filter Cutoff for high-energy Trap leads. Triggers the brain's 'Threat Response' (High Attention)."
      },
      {
        "name": "The Vulnerable Breath",
        "shape": "Slow Logarithmic Attack (500ms+), S-Curve Decay.",
        "emotion": "Melancholy / Intimacy / Fragility.",
        "context": "Link to Reverb Wet or Volume for Moody R&B vocals. Mimics the human intake of air before speaking."
      },
      {
        "name": "The Psychedelic Drift",
        "shape": "Zero Attack, Infinite Sustain, Random Drifting LFO.",
        "emotion": "Confusion / Surrealism / Euphoria.",
        "context": "Link to Fine Pitch (±5 cents). Triggers the brain's 'Uncanny Valley' effect (Trippiness)."
      },
      {
        "name": "The Mechanical Stutter",
        "shape": "Hard Square Wave, No Smoothing.",
        "emotion": "Anxiety / Urgency / Industrial Coldness.",
        "context": "Link to Volume Gate for high-speed Drill hi-hats. Mimics the sound of machinery (The 'Grind')."
      }
    ],
    "masterEngineeringLogic": [
      {
        "objective": "Achieve 'Elite Coolness' (Soul)",
        "action": "Set Articulator Smoothing to 15ms. This 'shaves off' the digital edges of your envelopes, making the transitions feel 'Analog' and expensive."
      },
      {
        "objective": "Achieve 'Modern Impact' (Trap)",
        "action": "Use Linear Attack but Exponential Decay for filter sweeps. This creates a 'Whiplash' effect that is synonymous with modern high-end Trap production."
      }
    ]
  }
}

```

---

## FILE: 02-Data\rules\humanization-constants.json

```json
{
  "humanizationConstants": {
    "philosophy": "This data-set provides the mathematical constants required to 'Humanize' digital MIDI data using Fruity Envelope Controller. It targets the biological timing and pressure errors of real performers across various Hip-Hop and R&B sub-genres.",
    "genreTemplates": [
      {
        "genre": "Classic Boom Bap (J Dilla Style)",
        "timingEntropy": {
          "mapping": "RND -> Sampler Shift",
          "base": "0.50",
          "amount": "0.08",
          "smoothing": "5ms",
          "logic": "Adds a ±4ms random drift to every hit. Mimics the mechanical 'un-quantization' of early MPC hardware."
        },
        "pressureDynamics": {
          "mapping": "VEL -> Filter Cutoff",
          "curve": "Linear Rising",
          "amount": "15%",
          "logic": "Subtle brightness variation based on strike strength."
        }
      },
      {
        "genre": "Moody R&B (Neo-Soul)",
        "timingEntropy": {
          "mapping": "LFO -> Sampler Shift",
          "waveform": "Sine (Slow 4-bar)",
          "amount": "0.15",
          "smoothing": "200ms",
          "logic": "Creates a slow, 'Drunken' swing that drifts in and out of time. Mimics a 'lazy' drummer playing behind the beat."
        },
        "pressureDynamics": {
          "mapping": "VEL -> Reverb Wet",
          "curve": "Exponential Falling",
          "amount": "30%",
          "logic": "Softer notes are more 'Drowned' in reverb; louder notes are 'Dryer' and closer. Mimics intimate distance perception."
        }
      },
      {
        "genre": "Upbeat Trap (Club Energy)",
        "timingEntropy": {
          "mapping": "None",
          "logic": "Trap requires 100% rhythmic stability. Humanization should focus on tone, not timing."
        },
        "pressureDynamics": {
          "mapping": "VEL -> Distortion Pre-Amp",
          "curve": "S-Curve",
          "amount": "40%",
          "logic": "High-velocity 808s 'Scream' more than quiet ones. Mimics the saturation of analog tape when driven hard."
        }
      }
    ],
    "biologicalConstants": {
      "fingerJitter": "±2ms (Smoothing 2ms)",
      "velocityAveraging": "±10 units (Smoothing 15ms)",
      "fatigueEmulation": "Link 'Smoothing' to Song Position. As the song progresses, the smoothing increases, making the modulations 'lazier' and more 'tired'."
    }
  }
}

```

---

## FILE: 02-Data\rules\modulation-rules.json

```json
{
  "rules": [
    {
      "scenario": "Modulation is too 'clicky' or abrupt",
      "action": "Increase Smoothing to 10-30ms"
    },
    {
      "scenario": "LFO is drifting out of time",
      "action": "Enable BPM Sync and Re-trigger on note"
    }
  ]
}

```

---

## FILE: 02-Data\rules\rhythmic-emotional-response.json

```json
{
  "emotionalResponseMapping": {
    "logic": "The shape of a modulation curve determines the psychological reaction of the listener. In Hip-Hop and R&B, we manipulate these curves to enhance the narrative of the song.",
    "shapes": [
      {
        "shape": "Exponential Rising (The Snap)",
        "physics": "Slow start, fast finish. High dV/dt at the end of the curve.",
        "emotion": "Aggression / Surprise / High energy.",
        "bestUse": "Trap snare filter sweeps, Drill hi-hat pitch rolls."
      },
      {
        "shape": "Logarithmic Falling (The Breath)",
        "physics": "Fast start, slow finish. Energy dissipates gracefully.",
        "emotion": "Isolation / Relief / Deep thought.",
        "bestUse": "Moody R&B vocal reverb tails, Neo-Soul pad releases."
      },
      {
        "shape": "Sine Wave (The Pulse)",
        "physics": "Constant, predictable oscillation. Symmetrical energy.",
        "emotion": "Hypnosis / Groove / Reliability.",
        "bestUse": "Sidechain ducking, slow rhythmic melodic filters."
      },
      {
        "shape": "Sawtooth Falling (The Cut)",
        "physics": "Instant jump to max, linear fall to zero.",
        "emotion": "Anxiety / Mechanical / Cold.",
        "bestUse": "Industrial glitch stutters, rhythmic noise layers."
      }
    ],
    "rhythmicRules": [
      {
        "mood": "Psychedelic Haze",
        "action": "Set Envelope Controller Smoothing to >200ms. This 'slows down' the emotional changes, creating a sensation of being drugged or underwater."
      },
      {
        "mood": "Club Energy",
        "action": "Set Smoothing to <10ms. Instant emotional transitions create high-impact, 'staccato' energy that keeps the listener focused."
      }
    ]
  }
}

```

---

## FILE: 02-Data\rules\troubleshooting.json

```json
{
  "troubleshootingRules": [
    {
      "issue": "Modulation causes audio clicks",
      "rootCause": "Discontinuous control signal at note-on/off.",
      "fix": "Increase Smoothing to 5-10ms to round the waveform edges."
    },
    {
      "issue": "LFO feels 'off-beat'",
      "rootCause": "Phase mismatch with project transport.",
      "fix": "Enable 'Sync' and set LFO Phase to 0 deg."
    }
  ]
}

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Perfect Sidechain Ducking (Envelope Controller)

## Routing Context
*   **Trigger:** MIDI Pattern "SC Trigger" (Short 1/16th notes).
*   **Target:** Bass Mixer Track Volume Fader.
*   **Controller:** Fruity Envelope Controller.

## Step-by-Step Setup
1.  Initialize **Fruity Envelope Controller**.
2.  Go to the **Env** tab of Articulator 1.
3.  **Draw the "Scoop":**
    *   Place Point 1 at **100%** (Top Left).
    *   Place Point 2 at **0%** (Bottom Center, slightly to the left).
    *   Place Point 3 at **100%** (Top Right).
4.  Right-click the line between Point 1 and 2 -> Set to **Bezier Curve**. Pull it down to create a smooth scoop.
5.  Right-click the **Bass Volume Fader** -> **Link to controller**.
6.  Select **Env Controller (Articulator 1)**.
7.  **Mapping Formula:** Ensure it is set to `Input` (NOT inverted, because we drew the "duck" shape manually).

## Result
*   Every time your "SC Trigger" note hits, the bass fader will perfectly trace the "Scoop" shape. 

## Vibe mapping
*   **Upbeat:** Keep the scoop short and fast.
*   **Moody:** Lengthen the "Sustain" part of the scoop to create a slower breathing effect.

## Pitfalls + Fixes
*   **Clipping:** If the Bass pops at the start, move Point 1 slightly to the right to add a micro-attack. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Space_And_Motion.md

```markdown
# Workflow: Key-Tracked Reverb Decay (Envelope Controller)

## The Concept
High notes need short, shimmering reverb; Low notes need long, dark reverb. This keeps the mix clear.

## Step-by-Step
1.  On your melodic synth track, load a **Reverb** (e.g., Reeverb 2).
2.  Open **Fruity Envelope Controller**.
3.  Go to the **Map** tab.
4.  **Draw the Slope:** Set the left side (Low Keys) to **100%** and the right side (High Keys) to **20%**. (Diagonal line downward).
5.  Right-click the Reverb **Decay** knob -> **Link to controller**.
6.  Select **Articulator 1**.

## Vibe Check
*   **Vibey / Jazzy:** This simulates the physical behavior of instruments where high strings decay faster than thick bass strings. It adds a "natural" space to digital synths.

## Automation Idea
*   Automate the **Base** knob of the Envelope Controller to "raise the floor" of the reverb during the bridge. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\complex-patcher-mod-routing.md

```markdown
# Masterclass: Complex Modulation Routing inside Patcher with Envelope Controller

## 1. Executive Summary: The "Super-Plugin" Architect
In modern high-end sound design (think producers like WondaGurl, No I.D., or Ludwig Göransson), sounds are rarely just one plugin. They are "Systems." **Patcher** is FL Studio's modular environment, and **Fruity Envelope Controller** is its brain. This guide will show you how to build a complex, multi-modulated sound system where one MIDI performance triggers a cascade of reactive effects, creating textures that are impossible to achieve with standard mixing.

---

## 2. Phase 1: The Modular Core (Patcher Setup)

### 2.1 The Signal Path
1. **Insert Patcher** on a mixer track.
2. Inside Patcher, load your **Primary Synth** (e.g. Fruity DX10).
3. Load **Fruity Envelope Controller**.
4. **The Connection:** Right-click the 'From FL Studio' node -> **Outputs** -> **MIDI** -> Activate the port. Connect this to the MIDI input of BOTH the synth and the Envelope Controller.
5. **The Brain:** The MIDI notes will now trigger the sound and the modulation logic simultaneously.

---

## 3. Phase 2: Macro-Modulation (Mapping the Brain)

### 3.1 Articulator Assignment
We will use 3 independent articulators for 3 different goals:
- **Articulator 1 (The Snap):** Fast Decay Envelope.
- **Articulator 2 (The Flow):** Slow Sine LFO (1/2 Bar).
- **Articulator 3 (The Chaos):** Random (RND) mapping.

### 3.2 Activating Control Nodes
Inside Patcher, right-click the **Envelope Controller** plugin node -> **Outputs** -> **Controllers** -> Activate **Articulator 1, 2, and 3**. These red nodes are the "Control Voltages" that will drive our system.

---

## 4. Phase 3: Building the Reactive FX Chain

### 4.1 Reactive Distortion (The Snap)
- **Plugin:** Add **Fruity Fast Dist**.
- **Action:** Right-click the 'Pre Amp' knob -> **Activate**.
- **Connection:** Connect the **Articulator 1** output node to the **Pre Amp** input node.
- **Result:** Every time you play a note, the distortion "snaps" open and then fades. This adds a percussive "bite" to the synth that is perfectly synced to your performance.

### 4.2 Pulsing Width (The Flow)
- **Plugin:** Add **Fruity Chorus**.
- **Action:** Activate the **Depth** parameter.
- **Connection:** Connect **Articulator 2** to the **Chorus Depth**.
- **Result:** The stereo width of the sound will now "breathe" in and out in 1/2 bar cycles, creating an immersive R&B pulse.

### 4.3 Generative Texture (The Chaos)
- **Plugin:** Add **Fruity Delay 3**.
- **Action:** Activate the **Cutoff** filter.
- **Connection:** Connect **Articulator 3** to the **Delay Cutoff**.
- **Result:** Every note you play will have a delay tail with a *different* filter tone. This creates an unpredictable, psychedelic "ghost" melody that evolves on its own.

---

## 5. Phase 4: Formula Scaling (Fine-Tuning the Logic)

### 5.1 The Master Control (Link Formulas)
Within Patcher, you can use the **Fruity Formula Controller** to act as a "Buffer" between the brain and the FX.
- **The Workflow:** Envelope Controller -> Formula Controller -> Effect.
- **The Formula:** `a * 0.5`.
- **The Benefit:** This limits the modulation range. For example, you might only want the Filter to open half-way. Using a formula controller inside Patcher allows you to "scale" your modulations without changing the original envelope shape.

---

## 6. Genre-Specific System Presets

| System Goal | Articulator Logic | Chain Result |
|-------------|-------------------|--------------|
| **Moody R&B**| Slow Env + Blur IR | The sound "melts" into a cloud after every phrase. |
| **Upbeat Trap**| Snappy LFO + Dist | The synth "bounces" and "growls" with the 808. |
| **Psy-Rap** | Random Pitch + Delay| Every note has a unique "trippy" tail. |

---

## 7. Troubleshooting the System
- **Issue:** "The modulation is clicking."
- **Fix:** Inside Envelope Controller, increase the **Smoothing** knob for the offending articulator to 10ms.
- **Issue:** "Patcher is using too much CPU."
- **Fix:** Avoid using high 'Oversampling' settings inside the plugins *within* Patcher. Use standard settings and only increase them for the final render.

---

## 8. Conclusion: The System Architect
Building complex modulation systems inside Patcher with Fruity Envelope Controller is the peak of **FL Studio Sound Design.** It allows you to move beyond the limitations of single plugins and create "Living" sonic environments that react to your music. Mastering this workflow gives you the technical edge required to produce the innovative, high-value textures found in elite Hip-Hop and R&B.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Patcher, Modulation Routing, Envelope Controller, Sound Systems, Modular Synthesis, FL Studio.

```

---

## FILE: 03-Workflows\by-goal\generative-trap-percussion.md

```markdown
# Masterclass: Designing Generative Trap Percussion in Fruity Envelope Controller

## 1. Executive Summary: The "Living Rhythm" Aesthetic
Modern high-level Trap and Drill (think the percussion work of producers like WondaGurl or Southside) relies on complex, high-energy hi-hats and snares that feel "organic" even though they are synthesized. A major secret to this "Cool" factor is **Generative Variation**. If every hat hit is identical, the ear gets bored. If every hit is slightly different, the track feels "alive." This guide shows you how to use the **Random (RND)** mapping in **Fruity Envelope Controller** to build a generative percussion engine.

---

## 2. Phase 1: The "Randomizer" Engine (Logic)

### 2.1 Setting the Source
1. **Insert Fruity Envelope Controller** on an unused track.
2. Select **Articulator 1**.
3. Go to the **RND** tab.
4. **The Curve:** Draw a flat horizontal line at **50%**.
5. **The Physics:** Every time a MIDI note is received, the articulator will choose a random value between 0 and 1. By drawing a line at 50%, we ensure the "Center" of our randomness is stable.

### 2.2 Linking to the Sampler
- Go to your Hi-Hat or Snare sampler (e.g., **Fruity Slicer** or **FPC**).
- Right-click the **Fine Pitch** knob -> **Link to controller**.
- Select **'Envelope Controller (Art 1)'**.
- **The Magic Formula:** Use `0.48 + (Input * 0.04)`.
- **The Result:** The pitch will only drift ±2% around the center. This mimics the slight tuning instability of physical hardware.

---

## 3. Phase 2: Multi-Dimensional Variation

To make it truly "Elite," we need to modulate more than just pitch.

### 3.1 Spectral Variation (Filter)
- **Target:** Link your Hi-Hat's **Filter Cutoff** to **Articulator 2**.
- **Articulator 2 RND:** Draw a jagged line with many peaks and valleys.
- **The Goal:** Every hi-hat hit will have a slightly different brightness. Some will be "crisp," others "muffled." This mimics how a real drummer hits different parts of the hi-hat cymbal.

### 3.2 Temporal Variation (Shift)
- **Target:** Link the **Shift** (Timing offset) knob in the Sampler to **Articulator 3**.
- **The Formula:** `Input * 0.05`.
- **The Result:** The hi-hats will be randomly "late" or "early" by a few milliseconds. This creates a "Drunken" or "Lazy" swing that is essential for Moody R&B and Soul-Trap.

---

## 4. Phase 3: The "Resonant Spike" (The Trippy Factor)

### 4.1 Psychedelic Percussion
In psychedelic Rap, we want some drum hits to "ring out" unexpectedly.
- **Action:** Link the **Filter Resonance** of a snare to Articulator 1 (Random).
- **The Mapping Curve:** Go to the **VEL** tab. Draw a curve that is flat at 0% until the very top (95-100% velocity), where it spikes to 100%.
- **The Performance:** Now, if you play your snare at 90% velocity, it's normal. But if you hit it at 100%, the resonance "whistles." 
- **The Vibe:** This creates a "glitchy" surprise for the listener that keeps the energy high.

---

## 5. Phase 4: Dynamic Smoothing (The Polish)

### 5.1 Preventing Clicks
Generative modulation can sometimes cause "audio pops" if the random value changes too fast.
- **Action:** Increase the **Smoothing** knob in Envelope Controller to **5-8ms**.
- **The Physics:** This adds a tiny fade-over between the old random value and the new one, ensuring the audio waveform stays continuous and professional.

---

## 6. Mathematical Randomness Table
Use these formulas to control the "Intensity" of your generative engine:

| Goal | Link Formula | Subjective Result |
|------|--------------|-------------------|
| **Human Pitch** | `0.49 + (Input * 0.02)` | Very subtle, organic drift. |
| **Old Sampler** | `Round(Input*8)/8` | Stepped, lo-fi bit-depth feel. |
| **Heavy Swing** | `Input * 0.1` | Noticeable "off-grid" groove. |
| **Glitch Burst**| `Input * Input` | Mostly quiet, with occasional loud spikes. |

---

## 7. Troubleshooting the Groove
- **Issue:** "The drums sound out of tune."
- **Fix:** Your **Amount** knob or **Formula** range is too high. Pitch randomness should be almost invisible to the ear but "felt" by the brain.
- **Issue:** "The randomness is the same every time I play the loop."
- **The Science:** By default, RND generates a new value per note. If you want it to be identical every time for a specific "Vibe," use the **LFO tab** with a **Random waveform** and 'Sync' enabled.

---

## 8. Conclusion: The Living Drummer
Building a generative percussion engine in Fruity Envelope Controller is the definitive move for the **Elite Sound Designer.** It moves your tracks from "Mechanical Loops" to **"Organic Performances."** By modulating pitch, tone, and timing with controlled mathematical randomness, you create a rhythmic foundation that is "Cool," professional, and impossible to replicate with simple sample packs. Follow this masterclass, and your Trap and R&B drums will have the legendary energy of a world-class production.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Generative Drums, Trap Production, Random Modulation, Envelope Controller, Rhythmic Physics, FL Studio.

```

---

## FILE: 03-Workflows\by-goal\psychedelic-drifting-leads.md

```markdown
# Psychedelic Drifting Leads Workflow

## Goal
Make a simple synth lead sound "trippy" and evolving using generative modulation.

## Steps
1. **The Target**: Open any melodic synth (e.g., Fruity DX10).
2. **Setup Articulator 1 (Random)**:
   - In Envelope Controller, go to the **RND** tab.
   - Draw a level line at 50%.
3. **Setup Articulator 2 (Slow LFO)**:
   - In Envelope Controller, select Articulator 2 -> **LFO** tab.
   - Set speed to 1 bar.
4. **Linking**:
   - Link Synth **Cutoff** to Articulator 1.
   - Link Synth **Fine Pitch** to Articulator 2.
5. **The "Cool" Drift**:
   - Set Articulator 2 **Amount** to only **2%**.
   - This creates a slow, "drunken" pitch drift that mimics old psychedelic hardware.
6. **The Random Pop**:
   - Set Articulator 1 **Smoothing** to 100ms.
   - This makes the filter cutoff "float" randomly per note hit.

## Result
A lead that feels organic, unpredictable, and perfectly suited for psychedelic rap or R&B.

```

---

## FILE: 03-Workflows\by-goal\random-drum-humanization.md

```markdown
# Humanizing Drums with Random Modulation Workflow

## Goal
Add subtle variation to the timing, pitch, or volume of a drum loop to make it feel less like a machine and more like a human drummer.

## Steps
1. **Insert Envelope Controller**: Place it on any track (it doesn't process audio).
2. **Setup Randomization**:
   - Go to **Articulator 1**.
   - Select the **RND** (Random) tab.
   - Draw a level line at 50% (middle).
3. **Link Your Target**:
   - Go to your Drum Sampler (e.g., Fruity Slicer or FPC).
   - Right-click the **Fine Pitch** or **Pan** knob -> **Link to controller**.
   - Select **Articulator 1** from the Internal Controllers list.
4. **Refine the Depth**:
   - In Envelope Controller, adjust the **Amount** knob.
   - For pitch, you only want ~2-5%. For volume, maybe 10%.
5. **Smoothing**:
   - If the jumps are too jarring, increase **Smoothing** to 10-20ms.

## Result
Every time a MIDI note triggers the drum, a new random value is sent to the pitch/pan, creating a natural, evolving groove.

```

---

## FILE: 03-Workflows\by-goal\upbeat-melodic-sidechaining.md

```markdown
# Upbeat Melodic Sidechaining Workflow

## Goal
Make your melodic synths or pads "bounce" rhythmically with the track, essential for upbeat Hip-Hop and Trap.

## Steps
1. **The Pulse**: In Envelope Controller, set Articulator 1 to a **Sine LFO** synced to **1/4** beat.
2. **Target Linking**:
   - Link the **Volume** of your Melodic Bus to Articulator 1.
3. **The Inverse Bounce**:
   - In the "Link to Controller" window, set the **Mapping formula** to `1-Input`.
   - Now, the volume will DIP every 1/4 note (where the kick usually sits).
4. **The Texture Rise**:
   - In Envelope Controller, use Articulator 2 to create a slow **Sawtooth LFO** (4 bars).
   - Link your Synth's **Filter Cutoff** to this.
5. **Result**:
   - Your melody is now "ducking" rhythmically while simultaneously "rising" in brightness over 4 bars.

## Pro Tip
This creates a sense of constant forward momentum that is critical for keeping an "upbeat" track from feeling static.

```

---

## FILE: 03-Workflows\by-instrument\expressive-synth-pads.md

```markdown
# Dynamic Synth Pad Workflow

## Goal
Create a synth pad that automatically gets brighter as you play higher notes on the keyboard.

## Steps
1. **Insert Envelope Controller**: Load it alongside your synth (e.g., Sytrus).
2. **Setup Keyboard Mapping**:
   - Select **Articulator 1**.
   - Go to the **KBD** (Keyboard) tab.
   - Draw a line that starts low on the left (low notes) and rises to the right (high notes).
3. **Link to Filter**:
   - Go to your Synth's **Filter Cutoff**.
   - Right-click -> **Link to controller**.
   - Select **Articulator 1**.
4. **Define the Base**:
   - In Envelope Controller, set the **Base** knob to 30%. This is the "minimum" brightness.
   - Set the **Amount** to 70%.
5. **Smooth the Transition**:
   - Set **Smoothing** to 50ms so the filter doesn't "jump" too fast if you play a large chord.

## Result
A musical, responsive synth pad that behaves like a physical instrument—higher energy notes are naturally brighter.

```

---

## FILE: 03-Workflows\by-instrument\moody-vocal-stutters.md

```markdown
# Masterclass: Designing Moody Vocal Stutters in Fruity Envelope Controller

## 1. Executive Summary: The "Digital Fragility" Aesthetic
The "Moody Vocal Stutter" is a staple of modern R&B, Experimental Hip-Hop, and Cloud Rap. It turns a human performance into a fragmented, rhythmic texture that feels both fragile and mechanical. This effect is not a simple "Trance Gate"; it requires the **Sample-Accurate precision** and **Signal Smoothing** found only in **Fruity Envelope Controller**. In this guide, we will build a professional, reactive stutter engine from the ground up.

---

## 2. Phase 1: Logic Engine Construction

### 2.1 The Gating Source (LFO vs. ENV)
- **Choice:** For rhythmic stutters, we use the **LFO**.
- **The Waveform:** Select the **Square Wave**.
- **The Sync:** Engage the **BPM Sync** button. Set the speed to **1/8** or **1/16** beat depending on the intensity of the track.
- **The Phase:** Set the LFO Phase to **0 degrees**. This ensures the vocal cuts "out" exactly on the grid.

### 2.2 Routing to the VCA
1. **The Plugin:** Insert **Fruity Balance** at the very end of your Vocal mixer track chain.
2. **The Link:** Right-click the **Volume** knob in Fruity Balance -> **Link to controller**.
3. **The Assignment:** Select **'Envelope Controller (Art 1)'** from the internal controllers list.
4. **The Formula:** Use the default `Input`.

---

## 3. Phase 2: The "Moody" Smoothing (The Secret Sauce)

### 3.1 Eliminating Digital Clicks
A standard square wave LFO will cause sharp "clicks" because the volume jumps from 0 to 100 instantly.
- **The Technical Fix:** In Envelope Controller, go to the **Smoothing** knob.
- **The Value:** Set this to **30ms - 50ms**.
- **The Physics:** This adds a tiny "fade-in" and "fade-out" to every stutter. 
- **The Result:** The vocal no longer "clicks"; it "pulses." This softness is what creates the "Moody" vibe, making the effect feel organic and intentional.

---

## 3.2 The Intensity Curve
- **Base Knob:** Set to **20%**. 
- **The Goal:** You don't want the vocal to go completely silent during the "off" state. Keeping a 20% "ghost" of the vocal preserves the mood and ensures the mix doesn't feel empty.
- **Amount Knob:** Set to **80%**.

---

## 4. Phase 3: Rhythmic Variation (Humanization)

### 4.1 The "Drunken" Stutter
Psychedelic Rap often uses stutters that feel "off-kilter."
- **Action:** Go to the **RND** tab in Articulator 1.
- **Action:** Draw a level line at 10%.
- **Result:** Now, every time a new note is played, the stutter depth or speed will shift slightly, preventing the ear from getting bored by a repetitive loop.

### 4.2 Automation for Tension
- **Goal:** Create a "build-up" during a transition.
- **Workflow:** Right-click the **LFO Speed** in Envelope Controller -> **Create automation clip**.
- **Pattern:** Start at **1/4** beat and accelerate to **1/32** beat over 4 bars.
- **Effect:** The vocal will stutter faster and faster, creating a psychedelic "rise" that perfectly leads into a drop.

---

## 5. Phase 4: Post-Gating Effects (The "Atmosphere" Chain)

### 5.1 The "Ghost Echo" (Fruity Delay 3)
- **Action:** Place a **Fruity Delay 3** *after* the Fruity Balance.
- **Settings:** Wet 30%, Diffusion 80%.
- **The Result:** The stutters will now have "tails." When the vocal cuts out, the last fragment will smear into a lush cloud, filling the silence with a moody atmosphere.

### 5.2 The "Underwater" Filter (Fruity Filter)
- **Action:** Link the **Filter Cutoff** to the SAME Articulator 1.
- **The Result:** Now, as the vocal gets louder (stutters "in"), it also gets brighter. As it fades "out," it gets muffled. This double-modulation is the hallmark of elite professional sound design.

---

## 6. Mathematical Stutter Table for R&B
Use these speeds to match the energy of your track:

| Vibe | LFO Speed | Smoothing | Base Level |
|------|-----------|-----------|------------|
| **Deep Chill** | 1/2 Beat  | 100ms     | 30%        |
| **Standard Vibe**| 1/8 Beat  | 40ms      | 15%        |
| **Aggressive Trap**| 1/16 Beat | 10ms      | 0%         |
| **Psychedelic** | 1/32 Beat | 5ms       | 50%        |

---

## 7. Troubleshooting the Stutter
- **Issue:** "I can still hear clicks."
- **Fix:** Increase **Smoothing** further (up to 80ms) or check if you have a compressor after the stutter that is bringing the quiet clicks back up in volume.
- **Issue:** "The stutter feels out of time."
- **Fix:** Ensure the **'Sync'** light is active in the LFO tab and that your project is set to **'Line'** snapping in the transport.

---

## 8. Conclusion: The Architect of Fragments
Mastering the Fruity Envelope Controller for vocal stutters is about moving beyond "on/off" logic. By utilizing **Smoothing** to control the "softness" of the cut and **Base/Amount** to control the "depth" of the shadow, you create a complex rhythmic instrument from a human voice. This is the essence of modern "Cool" production—using digital precision to enhance human emotion.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Vocal Gating, Rhythmic Stutter, Envelope Controller, R&B Production, Sound Design, FL Studio.
```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Envelope Controller

## Official Links
*   **Manual:** [Envelope Controller Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Envelope%20Controller.htm)

## Source Log
1.  **[SRC: IL-MAN]:** Primary technical reference for the 8-slot articulator system, keyboard range settings, and the master scaling knob logic.
2.  **[SRC: REPUTABLE]:** SeamlessR (Envelope Controller Deep Dive). Used for the "Bezier Scoop" sidechain theory and summing logic (Env + LFO).
3.  **[SRC: REPUTABLE]:** Image-Line Power Users (Forum). Reference for the "Keyboard Mapping" techniques used in reverb and filter tracking.

## Coverage Checklist
- [x] 8-Articulator Workflow
- [x] Source Tab Definitions (Env, LFO, Map, etc.)
- [x] Sidechain Scoop Workflow
- [x] Key-Tracked FX Workflow
- [x] 5 Vibe Targets
- [x] Summing Logic Reference
- [x] Velocity/Randomness Rules

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Envelope Controller (Urban Prod)

## Vibe 1: The "Modern Trap" Bounce
*   **Sound:** Rhythmic, clean, pumping.
*   **Key Move:** MIDI-triggered volume scoops + 0ms attack on filter articulators.

## Vibe 2: The "Lofi" Pitch Drift
*   **Sound:** Unstable, warm, organic.
*   **Key Move:** Randomized (Rand tab) pitch offsets + slow LFO on "Fine Tune" of target synth.

## Vibe 3: The "Future R&B" Bloom
*   **Sound:** Expanding, lush, high-fidelity.
*   **Key Move:** Long-attack envelopes (Vibe Swoosh) linked to Reverb Size and Stereo Separation.

## Vibe 4: The "Liquid" Lead
*   **Sound:** Morphing, vowel-like, psychedelic.
*   **Key Move:** Looping (L Mode) complex envelopes + Velocity-mapped Resonance.

```

---

## FILE: 04-Reference\articulator-summing-logic.md

```markdown
# Reference: Articulator Summing Logic (Envelope Controller)

Understanding how Fruity Envelope Controller combines multiple sources is critical for complex sound design.

## 1. The Summing Formula
The final output value of an Articulator is calculated as follows:
`Output = Base + (Source_Total * Level * Scale)`

## 2. Priority of Sources
All sources are added **in parallel**:
*   **Env + LFO:** They are added together. If Env is at 50% and LFO is at 50%, the result is 100%.
*   **Velocity (Vel):** This acts as a **Multiplier** if the "Vel" tab is used, or a simple offset if mapped differently.
*   **Random (Rand):** Adds a per-note value to the final sum.

## 3. Clipping behavior
The final output cannot exceed `1.0 (100%)` or go below `0.0 (0%)`. If your LFO and Env both hit 100% at the same time, the signal will "flatline" at the top.

## 4. Master Knobs
The **ATT / DEC / SUS / REL** knobs on the main panel act as **Global Multipliers**.
*   If ATT is at 200%, every envelope attack in all 8 articulators will be twice as long. [SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-docs\complex-formula-scripting.md

```markdown
# Technical Manual: Complex Formula Scripting and Logic Gates in FL Studio

## 1. Introduction: The "Conditional" DAW
In standard production, a knob is either automated or it isn't. But in "Elite" production, we want our sounds to be **Intelligent.** What if your distortion only turns on when you play a chord? What if your delay tail gets longer only when the rapper is shouting? **Fruity Formula Controller**, combined with **Fruity Envelope Controller**, allows you to write actual mathematical "Scripts" that control your audio. This guide provides the logic required to build these "Conditional Mixes."

---

## 2. Theoretical Foundation: The Input Variables
Fruity Formula Controller has three main inputs: `a`, `b`, and `c`.
- **The Secret:** Connect **Articulator 1** to `a`, **Articulator 2** to `b`, and a **Peak Controller** to `c`.
- **The Logic:** You can now write formulas that use these three independent sources to determine one single final output.

---

## 3. The Formula Syntax Library (Logic Gates)

### 3.1 The "IF" Statement (The Conditional)
- **Goal:** Activate an effect ONLY when velocity is above a certain threshold.
- **Formula:** `If(Greater(a, 0.8), a, 0)`
- **The Math:** If input `a` (Velocity) is greater than 0.8, output the velocity value. Otherwise, output 0.
- **Use Case:** Add an aggressive "Scream" distortion only to the loudest notes of a synth lead.

### 3.2 The "Cross-Fade" Gate
- **Goal:** Fade between a Delay and a Reverb based on pitch.
- **Formula:** `a*b + (1-a)*c`
- **The Math:** `a` is the Cross-fader. As `a` goes from 0 to 1, the output moves from `c` to `b`.
- **Use Case:** Link `a` to **KBD** (Keyboard Mapping). Low notes get Reverb; High notes get Delay.

### 3.3 The "Sample & Hold" Glitch
- **Goal:** Create stepped, robotic modulation.
- **Formula:** `Round(a * b) / b`
- **The Math:** Multiplies the input `a` by a "Resolution" `b`, rounds it to the nearest integer, and then divides back down.
- **Use Case:** Create "stepped" filter sweeps that sound like an old Commodore 64 or a bit-crushed synthesizer.

---

## 4. Advanced Rhythmic Scripting

### 4.1 The "Parabolic Rise" (The Hype Generator)
- **Formula:** `Power(a, 3)`
- **The Math:** Cubes the input value.
- **The Effect:** The modulation stays low for most of the bar and then "spikes" violently at the very end.
- **Use Case:** Link to a riser's volume. It creates a much more dramatic sense of tension than a simple linear fade.

### 4.2 The "Sine-Oscillator" Buffer
- **Formula:** `Sin(a * 2 * Pi)`
- **The Math:** Converts a linear 0-1 automation ramp into a perfect Sine wave cycle.
- **Use Case:** You can draw one long ramp in the Playlist and turn it into a perfect, rhythmic pulsing LFO using this formula.

---

## 5. Deployment: The Link Protocol
To use these scripts:
1. Load **Fruity Formula Controller**.
2. Type your formula into the text box.
3. Go to the target knob (e.g., Reverb Wet).
4. Right-click -> **Link to controller**.
5. Select **'Formula Controller - Out'**.
6. Connect your **Envelope Controller** articulators to the `a, b, c` inputs of the Formula Controller.

---

## 6. Conclusion: The Programmer-Producer
Formula Scripting is the final frontier of **FL Studio Mastery.** By moving beyond simple knobs and entering the realm of **Mathematical Logic**, you can create sound systems that are aware of the performance. Whether you are building "Smart Sidechains" that only duck during the kick drum's sub-peak, or "Generative Ad-libs" that move randomly around the listener, these scripts provide the technical authority required for elite-level Hip-Hop and R&B.

---
**Document Version:** 1.0 (Technical Reference)
**Author:** Logic Systems Architect
**Keywords:** Formula Controller, Logic Gates, Conditional Mixing, Link Formulas, Mathematical Audio, FL Studio Scripting.

```

---

## FILE: 04-Reference\technical-docs\mapping-formula-library.md

```markdown
# Mapping Formula Library (Master Tier)

## The Power of Formulas
When linking a parameter to an Articulator in Fruity Envelope Controller, the **Mapping Formula** determines the mathematical relationship between the control signal and the target knob.

### 1. The "Inverted Bounce" (Ducking)
- **Formula:** `1-Input`
- **Logic:** As the envelope rises, the target value drops.
- **Use Case:** Sidechaining a melody's volume to a 1/4 note pulse for that rhythmic "Trap bounce."

### 2. The "Subtle Drift" (Unstability)
- **Formula:** `0.45+(Input*0.1)`
- **Logic:** This limits the output range to a tiny window around the center (45% to 55%).
- **Use Case:** Link this to a synth's **Fine Pitch** using the **RND** articulator to mimic unstable analog oscillators.

### 3. The "High-End Scaler" (Energy Control)
- **Formula:** `Input*Input` (Parabolic)
- **Logic:** Low values stay low longer, and high values spike quickly at the end.
- **Use Case:** Link to Filter Cutoff. It makes the "filter opening" feel more aggressive and dramatic during a riser.

### 4. The "Step Quantizer" (Bit-Crush Effect)
- **Formula:** `Round(Input*10)/10`
- **Logic:** Forces the smooth 0-1 signal into 10 discrete steps.
- **Use Case:** Creating "stepped" filter sweeps that sound like vintage digital gear or robotic glitch effects.

```

---

## FILE: 04-Reference\technical-docs\modulation-logic-cv.md

```markdown
# Modulation Logic & Control Signals

## Control Voltage (CV) Emulation
Fruity Envelope Controller acts like a CV module in a modular synthesizer. It generates a "Control Signal" (a stream of values between 0 and 1) that other plugins can "read".

## The Articulator Summing Math
Each Articulator is the sum of its internal components:
`Output = (Base + (ENV * Amt) + (LFO * Amt) + (KBD * Amt) + (VEL * Amt) + (RND * Amt))`
- **Base** is the starting point.
- **Amount** determines how much each component contributes to the final value.

## Sample Accuracy
Because Envelope Controller is a native FL Studio plugin, its modulation is **Sample Accurate**. 
- *Why it matters:* Standard MIDI automation (MIDI CC) is often limited to a low resolution (128 steps) and is updated at the "buffer" rate. Envelope Controller calculates its values for every single audio sample, preventing "stair-stepping" or "zipper noise" during fast sweeps.

## Smoothing (Low-Pass Filtering)
The **Smoothing** parameter is effectively a one-pole low-pass filter applied to the control signal. 
- It slows down the transition between values.
- **Physics:** `dV/dt` (Rate of change) is limited. This is essential when modulating parameters that might click if changed too abruptly, like Oscillator Phase or Filter Cutoff.

```

---

## FILE: 04-Reference\technical-docs\probability-math-generative-rhythms.md

```markdown
# Technical Deep-Dive: Probability Math and Constraint-Based Randomness in Envelope Controller

## 1. Introduction: The Death of the Loop
In the "Golden Age" of Hip-Hop, loops were king. But in the "Master Tier" of modern Trap and R&B, we want our rhythms to be **Stochastic**. We want a hi-hat pattern that never repeats exactly the same way, mimicking the slight timing and velocity errors of a human drummer. **Fruity Envelope Controller** is not just a modulator; it is a **Probability Engine**. By mastering the mathematics of **Constraint-Based Randomness**, you can create rhythms that are perfectly quantized but rhythmically "Alive."

---

## 2. Theoretical Foundation: The Stochastic Variable
### 2.1 The Random (RND) Articulator
Mathematically, the RND articulator is a **Uniform Distribution** generator. 
- **The Process:** Every time a MIDI note-on message is received, the plugin generates a new value `x` where `0.0 ≤ x ≤ 1.0`.
- **The Entropy:** If you link this to pitch directly, the result is "Noise." To make it "Musical," we must apply **Constraints**.

### 2.2 Constraint-Based Logic (Scaling)
The secret to "Cool" randomness is the **Mapping Formula**.
- **The Equation:** `Final = Offset + (Random * Range)`.
- **Example:** You want your hi-hat pitch to vary by only ±2%.
- **Formula:** `0.49 + (Input * 0.02)`. 
- **The Science:** By limiting the "Search Space" of the randomness, you preserve the "Vibe" while injecting "Entropy."

---

## 3. The Mathematics of "Human" Ghost-Notes
### 3.1 Velocity-Weighted Probability
We can use one Articulator to "Guard" another.
- **Goal:** A hi-hat roll that only has "Random Panning" on the ghost notes (low velocity).
- **The Setup:** Connect **VEL** to Art 1 and **RND** to Art 2.
- **The Formula (Inside Formula Controller):** `If(Less(a, 0.5), b, 0.5)`.
- **The Math:** If velocity `a` is low, use random value `b`. If velocity is high, use the center position (0.5).
- **The Result:** Your main "loud" hats stay centered and solid, but your "quiet" ghost notes dance around the stereo field. This is the hallmark of elite professional drum design.

---

## 4. Engineering the "Drunken" Groove
### 4.1 Temporal Drift (Clock Randomization)
Standard MIDI is "On-Grid." To create a "Moody" or "Lazy" R&B feel, we need **Temporal Jitter**.
- **The Link:** Link the **Shift** (Timing offset) parameter of your sampler to an Articulator.
- **The Mapping:** Use the **RND** tab.
- **The Constraint:** Set the **Smoothing** knob to **10ms**.
- **The Physics:** This adds a few milliseconds of "Random Latency" to every drum hit. It breaks the "Digital Grip" of the DAW, allowing the groove to "Swing" in a way that feels expensive and soulful.

---

## 5. Mathematical Randomness Table for Drum Design

| Goal | Target Parameter | RND Amount | Mapping Formula | Result |
|------|------------------|------------|-----------------|--------|
| **Organic Pitch** | Fine Tune        | 5%         | `0.49+(a*0.02)` | Vintage hardware drift. |
| **Hat Sizzle**    | Filter Cutoff    | 20%        | `0.6+(a*0.4)`   | Variable cymbal strike. |
| **Soul Swing**    | Sampler Shift    | 10%        | `a*0.1`         | Drunken, lazy rhythm. |
| **Glitch Roll**   | Volume Gate      | 100%       | `Step(a, 0.5)`  | Randomly missing hits. |

---

## 6. Conclusion: The Master of Entropy
Mastering the probability math of Fruity Envelope Controller is about **Domesticating Chaos.** By applying mathematical constraints to the random generator, you move from "Noise" to **"Narrative."** It is the definitive guide for the producer who wants their Hip-Hop and R&B percussion to have the professional, unpredictable energy of a live drummer. Follow these stochastic protocols to own the "Life" of your beat.

---
**Document Version:** 1.0 (Quantum Engineering Tier)
**Author:** Rhythmic Entropy Architect
**Keywords:** Probability Math, Stochastic Synthesis, Random Modulation, Humanization, Drum Design, FL Studio.

```

---

## FILE: 04-Reference\technical-docs\sample-accurate-logic-math.md

```markdown
# Technical Deep-Dive: Sample-Accurate Logic and Modulation Math

## 1. Introduction: The Resolution Revolution
In the digital world, "Time" is sliced into samples. At 44.1kHz, there are 44,100 slices per second. Most automation in modern DAWs happens at the **Buffer Rate** (or Block Rate), which updates only every 128 or 256 samples. This creates "stair-stepping" artifacts. Fruity Envelope Controller is a **Sample-Accurate** engine. This guide explores the mathematics of single-sample modulation and why it is the gold standard for high-fidelity audio engineering.

---

## 2. Block-Rate vs. Sample-Accurate
### 2.1 The "Zipper Noise" Problem
When a parameter (like Volume or Cutoff) is updated at the block rate:
- The value stays flat for 256 samples, then "jumps" to the next value.
- **The Physics:** This "jump" is a discontinuous step in the waveform.
- **The Sound:** This results in high-frequency harmonic distortion known as "Zipper Noise." It makes digital sweeps sound "harsh" and "grainy."

### 2.2 The Envelope Controller Solution
Fruity Envelope Controller calculates its output value **for every single sample**.
- **The Math:** `Value(t) = f(t)`, where `t` is the sample index.
- **The Result:** The modulation curve is a smooth, continuous line. There are no steps.
- **The Benefit:** Filter sweeps are "silky" and volume gates are "transparent," even at ultra-fast speeds.

---

## 3. The Articulator Summing Equation
Mathematically, an articulator is a **Weighted Summation Vector**.
`S(t) = Σ (Wi * Ai(t))`
- `Ai(t)`: The normalized (0-1) value of source `i` (ENV, LFO, etc.) at sample `t`.
- `Wi`: The weight (Amount knob) assigned to that source.
- **Master Engineering Logic:** Because the summing happens *before* the signal leaves the plugin, the internal resolution is 32-bit float. This prevents "clipping" of the modulation signal itself.

---

## 4. The Slew-Rate Limiter (Smoothing)
The **Smoothing** knob is a mathematical **Low-Pass Filter** for the control signal.
### 4.1 First-Order Differential Math
The smoothing algorithm uses a simple differential equation:
`Output(t) = Output(t-1) + (Target(t) - Output(t-1)) * k`
- `k`: The smoothing coefficient (determined by the Smoothing knob).
- **The Physics:** If `k` is small (High Smoothing), the output takes a long time to reach the target.
- **The Goal:** This "rounds off" the corners of the modulation, ensuring that even a hard Square Wave LFO doesn't cause a DC offset pop in your audio.

---

## 5. Non-Linear Mapping Math
When you draw a curve in the VEL or KBD tabs, you are defining a **Lookup Table (LUT)** or a **Transfer Function**.
- **Exponential Curve:** `y = x^n`. 
- **Logarithmic Curve:** `y = log(x)`.
- **Why it matters:** Human hearing is logarithmic (Decibels). Using an **Exponential Mapping** for a volume envelope makes the fade-out sound "Linear" to our ears. This is the secret to professional "Moody" R&B fades.

---

## 6. Conclusion: The Precision of Emotion
Mastering the math behind Fruity Envelope Controller is about realizing that **Resolution equals Emotion.** By utilizing sample-accurate logic and mathematical smoothing, you remove the digital "glass" from your modulations, allowing the raw emotion of your performance to shine through. It is the definitive tool for the technical producer who refuses to compromise on sonic fidelity.

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Sample-Accurate, Modulation Math, Slew Rate, Zipper Noise, DSP Physics, FL Studio Logic.

```

---

## FILE: 04-Reference\technical-docs\stochastic-performance-modeling.md

```markdown
# Technical Deep-Dive: Stochastic Performance Modeling and Human Timing Emulation

## 1. Introduction: The Biology of the Groove
In the "Master Tier" of Hip-Hop and R&B production, "Quantization" is a baseline, not a goal. To achieve the "Soul" of a J Dilla beat or the "Cool" swing of a Neo-Soul groove, we must re-introduce the **Biological Variability** of a human performer. **Fruity Envelope Controller** is the ultimate tool for **Stochastic Modeling**. By mathematically simulating the timing, pressure, and focus errors of a human brain, we can turn a mechanical loop into an "Organic Performance."

---

## 2. Theoretical Foundation: The Two Types of Error
### 2.1 The "Lazy" Error (Systemic Drift)
A human drummer often plays "Behind the Beat" to create a relaxed feel.
- **The Physics:** This is a constant temporal offset plus a slow, oscillating drift.
- **The Envelope Controller Strategy:** Use a slow **Sine LFO** (4-8 bars) linked to the **Sampler Shift**.
- **The Math:** `Shift = Base_Offset + (LFO * 0.05)`. 
- **The Result:** The groove slowly "Wobbles" in time, creating a hypnotic, breathing sensation that is the hallmark of modern "Lo-Fi" and "Moody" R&B.

### 2.2 The "Jitter" Error (Neural Entropy)
Even the best drummers have micro-timing errors of ±2ms.
- **The Physics:** This is random noise in the motor cortex.
- **The Envelope Controller Strategy:** Use the **Random (RND)** articulator linked to the **Fine Pitch**.
- **The Mapping:** Set the **Smoothing** to 5ms. 
- **The Result:** Every note has a "unique" pitch and timing signature. The brain interprets this as "Life," preventing the habituation that makes loops sound "Static."

---

## 3. Modeling "Performers" (Genre-Specific Logic)

### 3.1 The "Boom Bap" Architect (The Dilla Swell)
- **The Character:** Heavy swing, variable velocity.
- **Modulation A:** Link **VEL** to **Start Offset** (Sampler).
- **The Logic:** Harder hits start *earlier* in the sample. This mimics the physics of a hand hitting a drum pad.
- **Modulation B:** Link **RND** to **Filter Cutoff**.
- **The Effect:** Every snare has a slightly different "Grit," as if sampled from different parts of a vinyl record.

### 3.2 The "Neo-Soul" Bassist (The Ghost Note)
- **The Character:** Muffled tones, intense volume-riding.
- **Modulation:** Link **Articulator 1 (Random)** to **Reverb Wet**.
- **The Formula:** `If(Less(a, 0.4), a*0.5, 0)`.
- **The Result:** Only the quietest notes (the ghost notes) get reverb. 
- **The Psychology:** This makes the subtle details of the performance feel "Spacious" and "Moody," while the main bassline stays "Dry" and "Solid."

---

## 4. The Engineering of Focus (The Fatigue Rule)
### 4.1 Temporal Narrative Modeling
A human performer gets "Tired" or "Hyped" as the song progresses.
- **The Master Move:** Link the **Smoothing** knob of your Envelope Controller to the **Song Position**.
- **The Setup:** In the Verse, set Smoothing to 10ms (Sharp). In the Outro, increase it to 100ms (Lazy).
- **The Result:** As the track ends, the modulations become "Slower" and "Sleepier." This provides a powerful psychological "Resolution" to the track that automation alone cannot achieve.

---

## 5. Mathematical Performance Table

| Performer Type | Timing Jitter | Velocity Curve | Focus (Smoothing) | Vibe |
|----------------|---------------|----------------|-------------------|------|
| **The Robot**  | 0ms           | Linear         | 0ms               | Industrial / Techno.|
| **The Session Pro**| ±2ms        | Exponential    | 15ms              | Upbeat R&B / Pop. |
| **The Soul Cat**| +10ms Drift   | S-Curve        | 50ms              | Neo-Soul / Jazz.  |
| **The Drunk**  | ±15ms Random  | Jagged         | 200ms             | Psychedelic / Lo-Fi.|

---

## 6. Conclusion: The Bio-Acoustic Conductor
Mastering **Stochastic Performance Modeling** in Fruity Envelope Controller is about **Injecting Life into the Machine.** By understanding the physics of temporal drift and the neurology of strike-pressure, you move from "Making a beat" to **"Directing a Band."** It is the definitive guide for any producer who wants their Hip-Hop and R&B to have the professional, "Cool," and human authority of a live studio session. Follow these neurological protocols to own the "Soul" of your production.

---
**Document Version:** 1.0 (Quantum Engineering Tier)
**Author:** Rhythmic Neurology Lead
**Keywords:** Performance Modeling, Stochastic Timing, Humanization, Envelope Controller, R&B Groove, FL Studio.

```

---

