# FL Keys - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# FL Keys - Classic Keyboard Rompler

`\`\`
███████╗██╗      ██╗  ██╗███████╗██╗   ██╗███████╗
██╔════╝██║      ██║ ██╔╝██╔════╝╚██╗ ██╔╝██╔════╝
█████╗  ██║      █████╔╝ █████╗   ╚████╔╝ ███████╗
██╔══╝  ██║      ██╔═██╗ ██╔══╝    ╚██╔╝  ╚════██║
██║     ███████╗ ██║  ██╗███████╗   ██║   ███████║
╚═╝     ╚══════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝
`\`\`

**Plugin Type:** Sample-Based Keyboard (Rompler)
**Category:** Generator / Keys / Utility
**Official Manual:** [Image-Line FL Keys Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FL%20Keys.htm)

---

## 🎯 What is FL Keys?

FL Keys is a lightweight, sample-based keyboard plugin designed for quick and realistic piano, e-piano, and organ sounds. It features a high-quality multi-sampled library with extremely low CPU and memory overhead. It is the go-to utility for sketching out melodies, providing standard keyboard textures (Grand Piano, Rhodes, Roto Organ) with essential "Realism" controls like key release noise and sustain pedal simulation.

**Key Capabilities:**
- **4 Core Models:** Grand Piano, Rhodes, Roto Organ, and Harpsichord.
- **Realism Controls:** Adjustable Key Release noise and Hammer/Pedal artifacts.
- **Dynamic Response:** Velocity-sensitive samples for expressive playing.
- **Integrated FX:** Built-in Overdrive and simple Tremolo (for Rhodes).
- **Stretching Algorithm:** High-quality interpolation for pitch consistency.
- **Low Resource:** Optimized for performance even in massive projects.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **keys-model-library.md** (The 4 modes)
3. Create **parameter-cheat-sheet.md**
4. Load the "Grand Piano," play a chord, and adjust the "Release" knob to hear the key noise.

### For Composers:
1. Study **creating-authentic-rhodes-patches.md**
2. Review **velocity-curve-calibration.md**
3. Learn **sustain-pedal-behavior.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [x] **parameter-cheat-sheet.md**
- [ ] **keyboard-models-decoded.md**

#### 02-Data/parameters/
- [x] **flkeys-specs.json**

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [x] **vintage-70s-rhodes-setup.md**
- [x] **jazz-piano-realism.md**

---

## 🔬 Research Framework

### Phase 1: Model Textures (Week 1)
**Goal:** The 4 Flavors

**Tasks:**
1. Compare "Grand Piano" vs "Harpsichord"
2. Test the "Release" knob on every model
3. Identify the "sweet spot" for Overdrive on the Organ
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Can I load external samples into FL Keys? (No, it's a fixed library).
- What is the difference between "Decay" and "Release" in this plugin?

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. **Why does the piano sound "thin"?** (Increase the Release noise or add external reverb).
2. **How to stop the "Roto" from spinning?** (Set LFO/Pan depth to zero).

---

## 🔗 Cross-Reference with Other Plugins

FL Keys is often used with:
- **Fruity Reverb 2** (Replacing the internal Environment)
- **DirectWave** (The advanced alternative)

---

## 📦 File Structure Summary

`\`\`
FL Keys/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── keyboard-models-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── flkeys-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── vintage-70s-rhodes-setup.md
│   │   └── jazz-piano-realism.md
│
└── 04-Reference/
    └── piano-sample-interpolation.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [FL Keys Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FL%20Keys.htm)
- [FL Keys Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/FL_Keys_tutorials.htm)
- [FL Keys Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fl+keys+tutorial)

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: FL Keys

## Purpose & Identity
FL Keys is a lightweight, sample-based **keyboard rompler**. Its primary identity is a reliable "Sketchbook" for melodic ideas. It provides 4 high-quality multi-sampled models: **Grand Piano**, **Rhodes**, **Roto Organ**, and **Harpsichord**. It is designed for speed, using very little CPU or RAM while offering essential realism controls. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Virtual Piano Rental." You have 4 classic instruments ready to play. You can't change the strings or the wood (synthesis), but you can control how hard the player hits the keys (**Velocity**), how much the room echoes (**Environment**), and how much mechanical noise the pedals make (**Release**).

## Hip-Hop / R&B Context
- **The "Lofi" Piano:** Using the Grand Piano with high "Muffle" settings to get that dark, filtered piano sound found in late-night R&B (Moody).
- **Soulful Chord Progressions:** Using the E-Piano (Rhodes) model with built-in tremolo for Jazzy foundations.
- **Trap Melodies:** Using the Grand Piano with short release times for fast, high-pitched "Bell-like" patterns (Upbeat).

## When To Use
- When you need a **bread-and-butter piano** sound without opening a 50GB library.
- When you want to **sketch out chords** quickly.
- When you need a **vintage Rhodes** or Organ texture for a soulful bridge.

## When NOT To Use
- **Cinematic Masterpieces:** For ultra-realistic, concert-grade pianos with 100 velocity layers, use **FLEX** (Essential Pianos) or a dedicated 3rd party VST.
- **Synthesized Keys:** Use **Sytrus** if you want to design a "Key" sound from scratch using oscillators. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: FL Keys

## UI Tour
The interface is clean and categorized into the model selector and the "Realism" modifiers. [SRC: IL-MAN]

### 1. Environment & Tone (The "Vibe")
- **Decay**: Controls how long the note sustains.
- **Release**: Controls the length of the tail after the key is let go.
- **Pan**: Moves the instrument in the stereo field.
- **Vol**: Master output level.

### 2. Realism Controls (The "Soul")
- **Muffled**: A low-pass filter that softens the tone. Higher = Darker.
- **Hardness**: Adjusts the "hammer" sound. Higher = more aggressive attack.
- **Vel Curve**: Calibrates how the plugin responds to your MIDI controller's pressure.

### 3. Model Selector (The "Core")
- **Grand Piano**: Clean, multi-sampled acoustic piano.
- **Rhodes**: Iconic 70s electric piano.
- **Roto Organ**: Hammond-style organ with a spinning speaker effect.
- **Harpsichord**: Plucked, baroque-style keyboard.

### 4. Miscellaneous (The "Details")
- **Treble**: High-frequency shelf.
- **Stretch**: Adjusts sample interpolation (usually keep at default).
- **Key (Release Noise)**: Adjusts the volume of the sound made when you release a key.

## Signal Flow
1. **MIDI Input**: Pitch and Velocity data are received.
2. **Sample Selection**: The engine picks the correct sample based on the Pitch/Velocity layer.
3. **Hardness Processing**: The sample's transient is modified.
4. **Muffled Filtering**: The Low-Pass filter is applied.
5. **Envelope Application**: Decay and Release curves are applied to the volume.
6. **Panning/Roto**: Stereo positioning or spinning speaker effects are applied.
7. **Summing**: The signal leaves through the global Volume and Treble controls.

## Things Beginners Misunderstand
- **"It's too quiet"**: FL Keys depends heavily on **Velocity**. If your MIDI notes are low-velocity, it will sound muted. Use the **Vel Curve** knob to compensate.
- **The "Release" knob**: Unlike a synth, the Release knob in FL Keys often triggers a specific "Key Up" sample. Setting it too high can sound like a loud clunk.
- **Overdrive**: On the Organ model, the **Hardness** knob often acts as a saturation/drive control.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: FL Keys

## 1. The "Premium" Piano Layer
Make FL Keys sound expensive by layering it.
- **Technique**: Load a generic Pad in Sytrus. Layer it with FL Keys (Grand Piano).
- **Move**: Set FL Keys **Hardness** high but **Vol** lower. 
- **Result**: The "Pad" provides the body, while "FL Keys" provides the realistic piano attack.

## 2. Lo-Fi "Dusty" Rhodes
- **Technique**: Select the **Rhodes** model. Turn the **Muffled** knob to 60%.
- **Move**: Add a Fruity Chorus (very slow) and a Fruity Blood Overdrive (low setting) *after* the plugin.
- **Listen For**: That classic, warm, slightly unstable R&B texture.

## 3. Humanizing the "Hammer"
- **Technique**: Don't use a fixed velocity for every note in the Piano Roll.
- **Move**: Use the **Alt+R (Randomize)** tool in the Piano Roll to vary velocities between 80 and 110.
- **Benefit**: This triggers different sample layers in FL Keys, making it sound like a real human player.

## 4. The "Organ Growl"
- **Technique**: Select the **Roto Organ**.
- **Move**: Crank the **Hardness** knob. This adds a "harmonic bite" similar to a tube pre-amp.
- **Listen For**: A gritty, gospel-like saturation that cuts through a thick Hip-Hop mix.

## 5. Tail Discipline
- **Protocol**: If the piano notes are "bleeding" into each other and making the mix muddy.
- **Fix**: Lower the **Release** knob to roughly 9 o'clock. This tightens the "key up" noise and keeps the silence between notes clean. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Nasal" Tone** | Check the **Muffled** knob; it might be too high. Also check **Treble**. |
| **Too much "Clunk"** | Lower the **Key** knob (Release noise) or the **Hardness** knob. |
| **Stuck Sustain** | Check your MIDI controller for a stuck Sustain Pedal signal. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: FL Keys

FL Keys translates vibes through **Mechanical Realism** and **Dynamic Response**.

## 1. Moody (Dark, Muffled, Submerged)
- **Concept:** "The Filtered Grand."
- **Levers:**
  - **Model:** Grand Piano.
  - **Muffle:** High (70%+).
  - **Environment:** High (Large room feel).
- **Listen For:** A warm, distant piano that feels like it's playing in a dark, empty house.
- **Don't Do This:** Don't use the Harpsichord; it’s too "bright" for a moody vibe.

## 2. Jazzy (Smooth, Soulful, Organic)
- **Concept:** "The Neo-Soul Rhodes."
- **Levers:**
  - **Model:** E-Piano.
  - **Panning:** Medium (adds tremolo).
  - **Vel -> Vol:** High (so you can play soft or loud with your fingers).
- **Listen For:** The gentle "stereo wobble" and the mechanical key-noise.

## 3. Upbeat (Kinetic, Sharp, Pop)
- **Concept:** "The Aggressive E-Piano."
- **Levers:**
  - **Model:** E-Piano.
  - **Overdrive:** Medium (to add grit).
  - **Hardness:** High (makes the samples sound "brighter").
- **Listen For:** A sharp, buzzy keyboard lead that cuts through a fast drum pattern.

## 4. Melodic (Clear, Polished, Catchy)
- **Concept:** "The Radio Grand."
- **Levers:**
  - **Model:** Grand Piano.
  - **Hardness:** Neutral.
  - **Release:** High (to hear the key noise artifacts).
- **Listen For:** A professional, "dry" piano that is perfectly clear and ready for external reverb.

## 5. Psychedelic (Warped, Spinning, Retro)
- **Concept:** "The Roto Whirl."
- **Levers:**
  - **Model:** Roto Organ.
  - **Panning (LFO):** High Speed.
  - **Overdrive:** High.
- **Listen For:** A dizzying, spinning organ sound that mimics a Leslie speaker being pushed to its limit. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: FL Keys (5 Minutes)

1.  **Insert:** Load **FL Keys** from the Channel Rack.
2.  **Model:** Choose your instrument from the **MODEL** dropdown (e.g., Grand Piano).
3.  **Mechanicals:** Adjust the **RELEASE** knob to hear the "clack" of the keys when you let go.
4.  **Tone:** Use the **MUFFLE** knob to make the sound darker (left) or brighter (right).
5.  **Velocity:** Turn up the **VEL -> VOL** knob so the piano reacts to how hard you play.
6.  **Space:** Use the **ENVIRONMENT** knob to add basic room ambience.
7.  **Tip:** If you select the **E-PIANO** model, the **PANNING** knob becomes a tremolo (stereo wobble) effect. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# FL Keys: The Lightweight Workhorse

> **Scope:** Piano, Rhodes, and Organ Simulation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Module).

## 🧠 The "Hybrid" Concept
FL Keys is not just a sampler. It uses a combination of **Samples** and **DSP Synthesis** to create lightweight key sounds.
*   **Samples:** Providing the core attack and tone.
*   **DSP:** Managing the decay, tremolo, and overdrive in real-time.
*   **Efficiency:** It uses < 1MB of RAM, making it the fastest piano to load for sketching.

**Signal Flow:**
`MIDI` -> **[SAMPLE SELECT]** -> **[VELOCITY MAP]** -> **[MUFFLE FILTER]** -> **[OVERDRIVE]** -> **[TREMOLO/PAN]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Environment Controls

The knobs on FL Keys are non-standard.

| Control | Function | The "Split" Behavior |
| :--- | :--- | :--- |
| **Decay** | Note Length. | **Min (0%):** Sustain Mode (Organ behavior). **>0%:** Piano decay behavior. |
| **Pan** | Auto-Pan / Tremolo. | **Left (0-50%):** Auto-Pan Intensity. **Right (50-100%):** Tremolo (Volume LFO) Intensity. |
| **Stereo** | Key Tracking Pan. | **Right:** Low notes Pan Left, High notes Pan Right (Player perspective). **Left:** Inverted (Audience perspective). |
| **Stretch** | Stretched Tuning. | Tunes high notes *sharp* (up to +50 cents) to mimic the inharmonicity of real acoustic piano strings. |

---

## 🔁 Section 2: Velocity "Hardness"

FL Keys does not just play louder when hit harder.

*   **Hardness Knob:** Adjusts the sample selection mapping.
    *   *High Hardness:* Even soft velocities trigger bright samples.
    *   *Low Hardness:* Even hard velocities trigger dark samples.
*   **Muffle:** A Low Pass Filter linked to velocity.
    *   *Usage:* Turn "Muffle" up to make soft notes sound darker and "woody".

---

## ⚡ Technical Specs: The 'Roto Organ'

FL Keys has a hidden identity.
1.  **Preset:** Select "Roto Organ".
2.  **Decay:** Set to **0%** (Sustain Mode).
3.  **Release:** Short.
4.  **Overdrive:** 50%.
5.  **LFO:** Set to Fast.
6.  **Pan Knob:** Set to Max Right (Tremolo).
7.  **Result:** A convincing B3 Hammond Organ with Leslie Speaker simulation (Tremolo).

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Lo-Fi" Hip Hop Piano
1.  **Detune:** Increase slightly (Honky Tonk).
2.  **Overdrive:** 20% (Saturation).
3.  **Treble:** Decrease (Darker).
4.  **Muffle:** Increase to 80%.
5.  **Result:** A dark, dusty, detuned upright piano perfect for Boom Bap.

### 2. The "Dreamy" Rhodes
1.  **Preset:** Rhodes.
2.  **Pan Knob:** Turn Left (Auto-Pan).
3.  **LFO:** Slow speed.
4.  **Stereo:** Max Right (Wide).
5.  **Result:** The classic 70s Electric Piano sound that bounces between the speakers.

### 3. Stretched Tuning for Solos
1.  **Context:** Playing a high-pitched piano solo over a synth bass.
2.  **Issue:** The piano sounds flat compared to the synth (because real strings are sharp).
3.  **Action:** Turn **Stretch** to +20 cents.
4.  **Result:** The high notes sparkle more and cut through the mix, matching the psychoacoustic expectation of a Grand Piano.

```

---

## FILE: 01-Learning\Quick-Reference\keyboard-models-decoded.md

```markdown
# Quick Reference: Keyboard Models Decoded

A breakdown of the 4 core sample sets inside FL Keys. [SRC: IL-MAN]

## 1. Grand Piano
- **Character**: Natural, bright, and wide-range.
- **Best For**: Trap melodies, Pop ballads, and general melodic sketching.
- **Pro Tip**: Use "Hardness" to switch between a soft "Upright" feel and a sharp "Concert Grand" feel.

## 2. Rhodes
- **Character**: Warm, bell-like, and harmonically rich.
- **Best For**: Neo-Soul, Lo-Fi, and Smooth R&B.
- **Pro Tip**: This model includes a built-in Tremolo. Use the **LFO** knobs to control the speed and depth of the stereo panning.

## 3. Roto Organ
- **Character**: Gritty, percussive, and "spinning."
- **Best For**: Gospel, House, and 90s Hip-Hop.
- **Pro Tip**: The **Hardness** knob here acts like a "Drive" control for the internal cabinet emulation.

## 4. Harpsichord
- **Character**: Thin, plucked, and "stringy."
- **Best For**: Baroque textures, "Indie" sounds, and psychedelic sound design.
- **Pro Tip**: Excellent for layering with a high-pass filter to add a "pluck" attack to other synths.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: FL Keys

The essential modifiers for the FL Keys engine. [SRC: IL-MAN]

---

## 🏛️ Model Selection
- **Grand Piano**: Acoustic.
- **Rhodes**: Electric bell-tone.
- **Roto Organ**: Hammond-style.
- **Harpsichord**: Plucked string.

## 🛠️ Performance Knobs
- **Decay**: Sustain length.
- **Release**: Tail length.
- **Hardness**: Transient sharpess.
- **Muffled**: Tone softness (LP Filter).
- **Treble**: High-end boost/cut.

## 🎨 Realism Details
- **Stretch**: Sample interpolation resolution.
- **Key**: Volume of the "key release" mechanism noise.
- **Vel Curve**: Changes how the plugin interprets MIDI pressure.

## 🌀 LFO (Rhodes Only)
- **Rate**: Speed of the stereo panning.
- **Depth**: Intensity of the stereo panning.
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: FL Keys

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Model** | Menu | **All** | **Timbre** | Grand, E-Piano, Organ, Harpsichord. |
| **Muffle** | Knob | **Moody** | **Spectral** | High-cut filter for softening. |
| **Hardness** | Knob | **Upbeat** | **Harmonics**| Sample-offset for brighter hits. |
| **Release** | Knob | **Jazzy** | **Noise** | Mechanical key-up noise level. |
| **Panning** | Knob | **Psychedelic**| **Width** | LFO-based auto-pan/tremolo. |
| **Overdrive** | Knob | **Upbeat** | **Grit** | Simple saturation/distortion. |

- **Vibe Impact Tag (Hardness):** Increasing Hardness makes the piano sound like it’s being played with more force, essential for "Upbeat" tracks.
- **Mix Impact Tag (Noise):** The **Release** knob adds "Realistic Dust" to the recording, helping the keys feel less digital. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\flkeys-specs.json

```json
{
  "plugin_name": "FL Keys",
  "category": "Generator",
  "engine": "Sample-based Rompler",
  "models": ["Grand Piano", "Rhodes", "Roto Organ", "Harpsichord"],
  "parameters": [
    {
      "name": "Hardness",
      "type": "knob",
      "description": "Adjusts the attack transient of the sample.",
      "vibe_impact": "Aggression, presence, upbeat"
    },
    {
      "name": "Muffled",
      "type": "knob",
      "description": "Applies a low-pass filter to the sample set.",
      "vibe_impact": "Moody, vintage, warm"
    },
    {
      "name": "Key",
      "type": "knob",
      "description": "Adjusts the volume of the key-release noise sample.",
      "vibe_impact": "Jazzy, organic soul"
    }
  ]
}
```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "FL Keys",
  "category": "Piano Module",
  "parameters": [
    {
      "section": "Environment",
      "id": "sample_set",
      "name": "Sample Bank",
      "options": ["Grand Piano", "Rhodes", "Roto Organ", "Others..."],
      "description": "The base waveform set."
    },
    {
      "section": "Environment",
      "id": "decay",
      "name": "Decay Time",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "0 = Infinite Sustain. >0 = Natural Decay."
    },
    {
      "section": "Environment",
      "id": "pan_tremolo",
      "name": "Pan / Tremolo",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Left = Auto-Pan Amount. Right = Tremolo Amount."
    },
    {
      "section": "Environment",
      "id": "stretch",
      "name": "Stretch Tuning",
      "range": { "min": -50, "max": 50, "unit": "Cents" },
      "description": "Pitch offset for high notes."
    },
    {
      "section": "Misc",
      "id": "overdrive",
      "name": "Overdrive",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Soft saturation gain."
    },
    {
      "section": "Velocity",
      "id": "muffle",
      "name": "Muffle",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Velocity-to-Filter sensitivity."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (FL Keys)

## 1. Low-Pass for "Late Night" Vibes
- **Rule:** Digital pianos are too bright for moody R&B.
- **Application:** Always turn the **MUFFLE** knob to at least 10 o'clock. This mimics the sound of a piano recorded through a ribbon mic or a thick blanket. [SRC: REPUTABLE]

## 2. Velocity Expressiveness
- **Rule:** No "Flat" MIDI blocks.
- **Application:** In the Piano Roll, vary the velocities of your chords. FL Keys is multi-sampled; a soft note sounds completely different than a hard note.

## 3. The Rhodes "Wobble"
- **Rule:** Soulful keys must move.
- **Application:** When using the **E-Piano** model, set the **PANNING** knob to 30%. This adds a slow, wide tremolo that defines the "Vibey" neo-soul sound.

## 4. Sustain Pedal Discipline
- **Rule:** Don't let chords overlap.
- **Application:** If using a sustain pedal (CC#64), ensure you lift the pedal between chord changes. Overlapping low-mid frequencies in FL Keys will cause immediate muddiness.

## 5. Gain Staging
- **Rule:** FL Keys is quiet by design.
- **Application:** Use the **Master Volume** knob in the plugin to bring the signal up, or follow it with **Fruity Soft Clipper** to add weight. [SRC: IL-MAN]
```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: FL Keys

## 1. The "Placeholder" Piano (Sketching)

FL Keys is the ultimate placeholder.

1.  **Usage:** Always start your chord progression with FL Keys (Grand Piano).
2.  **Why:** It loads instantly, uses 0% CPU, and has a clear mid-range.
3.  **Later:** Once the composition is done, replace it with a 50GB Kontakt Library. The MIDI data remains valid because FL Keys responds to standard Velocity/Sustain Pedal mappings.

## 2. Layering for Attack

1.  **Concept:** Modern Pop Pianos need a sharp transient.
2.  **Setup:**
    *   Channel 1: Nexus/Keyscape (Main Body).
    *   Channel 2: FL Keys (Grand Piano).
3.  **FL Keys Settings:**
    *   **Treble:** Max.
    *   **Decay:** Very Short (Staccato).
    *   **Overdrive:** 30%.
    *   **Volume:** Low (-12dB).
4.  **Result:** FL Keys adds a metallic "clank" to the attack of the chord, helping the expensive library cut through the dense mix.

## 3. The "Pseudo-Guitar"

1.  **Preset:** Use "Grand Piano" (surprise!).
2.  **Overdrive:** 100%.
3.  **Treble:** Max.
4.  **Decay:** Short.
5.  **Chords:** Play power chords (Root + Fifth).
6.  **Result:** It sounds surprisingly like a distorted rhythm guitar or a Clavinet, useful for background textures.

## 4. Automation of LFO Speed

1.  **Preset:** Roto Organ.
2.  **LFO:** Use the LFO knob to control the "Leslie Speaker" speed.
3.  **Automation:**
    *   Create an automation clip for the **LFO** knob.
    *   Ramp it up from Slow to Fast during transitions.
4.  **Effect:** The classic organ "Spin up" effect.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The Dark "Toronto" Piano (FL Keys)

## Step-by-Step Setup
1.  Initialize **FL Keys** and select the **Grand Piano** model.
2.  Set **MUFFLE** to `80%` (Turn significantly to the left).
3.  Set **RELEASE** to `60%` (To hear the mechanical clacks).
4.  Set **ENVIRONMENT** to `40%` (Adds a small room reverb).
5.  **The Secret Sauce:** Add **Fruity Delay 3** after FL Keys. Set a very slow `1/2 note` delay with high-pass filtering.
6.  **The Play:** Play simple minor chords in the lower-mid octaves (C3-C4).

## Result
- A heavy, lonely, submerged piano sound. It has no sharp "high-end," making it the perfect moody foundation for a storytelling rap verse.

## Vibe Check
- **Moody/Nocturnal:** The "Drake/40" signature piano aesthetic.

## Variation
- **Vintage Dust:** Add a **Fruity Blood Overdrive** at 2% PreAmp to add a tiny amount of analog-style noise. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Make_It_Premium.md

```markdown
# Goal Workflow: Make It Premium (Mastering the Rompler)

*Goal: Transform the basic FL Keys sound into a professional, world-class keyboard texture.*

## 🎛️ Routing Context
- **Routing**: FL Keys -> Mixer Track 1.
- **Mixer Chain**: Fruity Parametric EQ 2 -> Fruity Chorus -> LuxeVerb.

## 🚶 Step-by-Step Setup
1. **Calibrate the Source**:
   - Select **Grand Piano**.
   - Set **Hardness** to 60%.
   - Set **Release** to 25%.
2. **EQ Pocketing**:
   - Cut everything below 200Hz (HPF).
   - Add a wide boost (+2dB) at 10kHz for "Air."
3. **The "Dimension" Trick**:
   - Add **Fruity Chorus**.
   - Set **Rate** to 0.2Hz (extremely slow).
   - Set **Mix** to 15%.
   - *Result*: Adds a non-linear motion that makes the fixed samples feel like they are moving in a real room.
4. **The Luxe Space**:
   - Add **LuxeVerb**.
   - Select "Hall" mode.
   - Set **Decay** to 2.5s.
   - Set **Mix** to 20%.
5. **Dynamics**:
   - Place a **Fruity Limiter** at the end. Use the Compressor to "glue" the notes together with a 2:1 ratio.

## 🔄 Variations
- **The "Cinematic" Version**: Increase LuxeVerb Mix to 50% and turn **Muffled** to 40% inside FL Keys.
- **The "Biting" Lead**: Increase **Hardness** to 90% and use a shorter Reverb.

## ⚠️ Pitfalls & Fixes
- **Problem**: It sounds too "thin."
- **Fix**: Layer it with a simple Sine wave or a warm Pad synth to fill the low-mids.

```

---

## FILE: 03-Workflows\by-goal\jazz-piano-realism.md

```markdown
# Goal Workflow: Jazz Piano Realism (The Human Touch)

*Goal: Adding the subtle artifacts and dynamic response of a live acoustic piano.*

## 🎛️ Routing Context
- **Routing**: FL Keys -> Piano Melodic Bus.
- **Hardware**: Best performed with a weighted MIDI keyboard.

## 🚶 Step-by-Step Setup
1. **Calibrate Velocity**:
   - Play your keyboard normally. Adjust the **Vel Curve** knob in FL Keys until the loudest notes you play feel "Bright" and the softest feel "Muffled."
2. **Mechanical Noise**:
   - Turn the **Key** knob to 50%.
   - *Result*: Every time you release a note, you'll hear the "thump" of the piano dampers. This is essential for the jazzy "living room" vibe.
3. **Harmonic Resonance**:
   - Set **Hardness** to 40% (Medium-Soft).
4. **Dynamics**:
   - Set **Decay** to 100% (Full sustain).
   - Set **Release** to 15% (Tight damper response).
5. **The Performance**:
   - In the Piano Roll, avoid hard quantizing. Move the start times of your chords slightly off-grid.
   - Use the **Alt+R (Randomize)** tool to vary velocities between 70 and 95.

## 🔄 Variations
- **The "Upright" Feel**: Set **Treble** to -3dB and **Muffled** to 20%.
- **The "Ballad" Grand**: Add a long plate reverb and keep the **Release** knob high.

## ⚠️ Pitfalls & Fixes
- **Problem**: The "Key" noise is too distracting.
- **Fix**: Lower the **Key** knob to 10%. It should be felt more than heard.
```

---

## FILE: 03-Workflows\by-goal\vintage-70s-rhodes-setup.md

```markdown
# Goal Workflow: Vintage 70s Rhodes Setup (Vibey Soul)

*Goal: Recreating the iconic, smoky sound of a 1970s stage Rhodes.*

## 🎛️ Routing Context
- **Routing**: FL Keys -> Mixer Track.
- **Mixer Chain**: Fruity Blood Overdrive -> Fruity Phaser -> Fruity Delay 3.

## 🚶 Step-by-Step Setup
1. **Source Settings**:
   - Select **Rhodes** model.
   - Set **Muffled** to 45%.
   - Set **LFO Rate** to 1/2 note. Set **LFO Depth** to 30% (Internal tremolo).
2. **Drive Stage**:
   - Add **Fruity Blood Overdrive**.
   - Keep the Drive low (just enough to add warmth).
   - Set the filter to cut some highs.
3. **Phaser Swirl**:
   - Add **Fruity Phaser**.
   - Set **Speed** to 0.1Hz.
   - Set **Mix** to 20%.
   - *Result*: Adds a "liquid" texture to the bell-like samples.
4. **Time Space**:
   - Add **Fruity Delay 3**.
   - Set to 1/4 note.
   - Set **Diffusion** high to make the echoes sound more like a wash.
5. **Vibe Check**: Play a Minor 9th chord. The sound should feel warm, unstable, and deeply "soulful."

## 🔄 Variations
- **The "Barking" Rhodes**: Set MIDI Velocity to 127. The Rhodes model in FL Keys has a distinct "growl" at maximum velocity.
- **The "Underwater" R&B**: Set **Muffled** to 80% and increase the Reverb.

## ⚠️ Pitfalls & Fixes
- **Problem**: The panning is too wide.
- **Fix**: Lower the **LFO Depth** inside the FL Keys UI.
```

---

## FILE: 03-Workflows\by-instrument\lofi_hiphop_keys.md

```markdown
# Instrument Workflow: Lo-Fi Hip-Hop Keys (Dusty Soul)

## 1. The "Sampled" Rhodes
- **Recipe**: Rhodes model + Muffled 60% + Key 80%.
- **Move**: Pitch the loop down -12 semitones in the Sampler settings.
- **Vibe**: Mimics the sound of a vintage record being sampled and slowed down.

## 2. Tape Flutter Grand
- **Recipe**: Grand Piano + Muffled 20% + Low Hardness.
- **Move**: Add a Fruity Delay 3 with **Time** modulation turned up slightly.
- **Vibe**: Adds a "wobbly" pitch character that sounds like an old upright piano in a dusty attic.

## 3. Vinyl "Crack" Layers
- **Recipe**: Set **Key** (Release noise) to maximum. 
- **Move**: Add a Bitcrusher (12-bit mode) after the plugin.
- **Vibe**: Emphasizes the digital noise and mechanical clicks, providing a rhythmic "hiss" that acts like a percussion layer.

```

---

## FILE: 03-Workflows\by-instrument\trap_piano_leads.md

```markdown
# Instrument Workflow: Trap Piano Leads (Dark Tension)

## 1. The "Metro" Grand
- **Recipe**: Grand Piano + Hardness 80% + Release 15%.
- **Vibe**: Sharp, cold, and staccato. Perfect for dark minor-key melodies that need to cut through a heavy 808.

## 2. Reversed Piano Wash
- **Recipe**: Use Grand Piano + long Release.
- **Move**: Export the melody to audio. Select **Reverse** in the Sampler. Add a large Reverb.
- **Vibe**: Creates that "haunting" atmospheric background wash found in modern emo-trap.

## 3. Glitched Harpsichord
- **Recipe**: Harpsichord + max Hardness.
- **Move**: Add Fruity Fast Dist (Drive at 50%) after FL Keys.
- **Vibe**: Transforms the plucked keys into a gritty, aggressive lead that sounds like a cross between a synth and a guitar.

```

---

## FILE: 03-Workflows\by-instrument\vocal_accompaniment.md

```markdown
# Instrument Workflow: Vocal Accompaniment (The Pocket)

## 1. The "Support" Grand
- **Recipe**: Grand Piano + Muffled 40% + Release 30%.
- **Vibe**: Creates a soft bed for the singer. The muffling ensures the high-end frequency of the vocal isn't fighting with the piano's "sparkle."

## 2. R&B "Silky" Stack
- **Recipe**: Rhodes model + slow LFO + high Treble.
- **Move**: Add a wide Stereo Enhancer *after* the plugin.
- **Vibe**: A wide, luxurious electric piano that wraps around the vocal, making it feel more professional.

## 3. Melodic Rap Accent
- **Recipe**: Harpsichord + short Decay + high Reverb.
- **Move**: Only play octaves or single fifths.
- **Vibe**: Adds a "plucky" rhythmic counter-melody that highlights specific vocal phrases without cluttering the mids.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: FL Keys

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - FL Keys.
- **Key Info:** 4 model definitions, explanation of the "Hardness" parameter, and details on the E-Piano's panning/tremolo behavior.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The Art of Piano Recording" (Sound On Sound).
- **Key Info:** Importance of damper noise and mechanical artifacts for realism, using muffled tones for intimate jazz recordings, and the role of tremolo in electric piano history.

## Genre Style Board: FL Keys

| Vibe | Model | Key Move | Use Case |
| :--- | :--- | :--- | :--- |
| **Moody** | Grand Piano | High Muffle + Reverb | Dark Rap Intros |
| **Jazzy** | E-Piano | 30% Panning (Tremolo)| Neo-Soul Chords |
| **Upbeat** | E-Piano | 50% Overdrive | Funky Leads |
| **Melodic** | Grand Piano | Hardness @ 12 o'clock | Pop Melodies |
| **Psychedelic**| Roto Organ | Fast Panning LFO | Spinning Textures |

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Hip-Hop & R&B)

Sourced applications of keyboard textures in modern production.

## 1. The "Dark Trap" Grand (Upbeat/Moody)
- **Source**: Metro Boomin / Southside style.
- **Application**: Grand Piano model. Low sustain (staccato notes). Fast melodies in minor keys.
- **Vibe**: Tension, aggression, and cinematic coldness.

## 2. Lo-Fi Hip-Hop Rhodes (Vibey)
- **Source**: J Dilla / Lofi Girl style.
- **Application**: Rhodes model. High Key (release) noise. Filtered at 1kHz.
- **Vibe**: Nostalgia, warmth, and dusty "room" character.

## 3. Smooth Neo-Soul (Jazzy)
- **Source**: Robert Glasper / Terrace Martin.
- **Application**: Rhodes model. Wide chords (Major 9ths). Internal LFO set to a slow 1/2 note sweep.
- **Vibe**: Expensive luxury, organic movement, and soulful depth.

## 4. Modern Emo-Trap (Psychedelic)
- **Source**: Nick Mira / Juice WRLD style.
- **Application**: Grand Piano model. Reverse processing. Heavy external pitch-shifters (e.g. Effectrix).
- **Vibe**: Melancholy, disorientation, and modern digital texture.

```

---

## FILE: 04-Reference\piano-sample-interpolation.md

```markdown
# Technical Reference: Piano Sample Interpolation

How FL Keys handles its multi-sampled library. [SRC: IL-MAN]

## 1. Velocity Layering
FL Keys uses multiple "Velocity Layers" per note.
- **Low Velocity**: Triggers a "Soft" sample (mellow tone).
- **High Velocity**: Triggers a "Hard" sample (bright tone).
- **The "Vel Curve" Knob**: This knob shifts the mathematical threshold where FL Keys decides to switch layers. If you have a "light" MIDI keyboard, turn this up to hear the harder samples more easily.

## 2. The "Stretch" Knob (Pitch Shifting)
- **Function**: Adjusts the interpolation algorithm used when you play notes between the fixed samples.
- **Legacy Behavior**: In older versions, turning this could cause audible "artifacts" or "formant shifts." In modern FL Studio, it is optimized for high-fidelity stretching.
- **Pro Tip**: Keep this at its default position unless you are purposefully trying to create a "warped" or "stretched" sound.

## 3. Polyphony Management
- FL Keys is designed to be extremely lightweight.
- It uses a standard "Voice Stealing" algorithm to ensure that playing massive chords doesn't crash your CPU.
- **Limitation**: It does not support sympathetic resonance (where other strings vibrate when you hold the pedal). Use an external Reverb to simulate this depth.

## 4. Sample Loops
- The sustain part of the piano samples is looped seamlessly.
- **Decay Control**: The "Decay" knob in the UI simply controls how fast the volume of this loop fades out over time.
```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: FL Keys Mechanics

## 1. The Sample Engine

*   **Architecture:** Wave-Table (Loop Points).
*   **Sample Sets:** FL Keys does not use disk streaming. It loads the entire sample set into RAM.
    *   This is why the library is small (~1MB). The samples are looped very short, relying on the DSP decay envelope to mask the static nature of the loop.
*   **Resolution:** 16-bit / 44.1kHz (Legacy).

## 2. Stretched Tuning Physics

*   **Phenomenon:** In real pianos, stiff strings vibrate inharmonically. The 2nd harmonic is slightly sharper than 2x the fundamental.
*   **Correction:** Tuners stretch the upper octaves sharp to align the fundamental of the high note with the sharp harmonics of the low notes.
*   **FL Keys Implementation:**
    *   **0 Cents:** Equal Temperament (Mathematical perfection, but sounds dull).
    *   **+50 Cents:** Aggressive Stretch (Sounds brighter/sharper).

## 3. LFO Topology

*   **Waveform:** Sine Wave (Fixed).
*   **Target:**
    *   If Pan Knob < 50%: Target = Pan.
    *   If Pan Knob > 50%: Target = VCA (Volume).
*   **Sync:** The LFO is *not* tempo-synced. It runs in Hz. This is a crucial distinction for vintage behavior (older organs didn't sync to MIDI clock).

## 4. Muffle Filter

*   **Type:** 1-Pole Low Pass Filter (6dB/Octave).
*   **Behavior:** Gentle key-tracking filter. It does not resonate. It simply shaves off the high frequencies of the sample to simulate the hammer hitting the string softly (less energy = less brightness).

```

---

