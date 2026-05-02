# Fruit Kick - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: CLAUDE.md

```markdown
# Fruit Kick - Project Brief & Guidelines

## Plugin Overview
Fruit Kick is FL Studio's dedicated kick drum synthesizer, designed for creating custom kick drums from synthesis rather than sampling. It provides precise control over kick drum characteristics through synthesis parameters, allowing producers to craft the perfect kick for any genre.

## Core Character & Capabilities
- **Kick Synthesis**: Pure synthesis-based kick drum generation
- **Pitch Control**: From sub-bass to punchy mid-range kicks
- **Envelope Shaping**: Full control over attack, decay, and sustain
- **Tone Control**: Harmonic content and character adjustment
- **Click Layer**: Separate transient click for attack definition
- **Distortion Options**: Built-in saturation for character

## Key Applications
- Electronic music production (EDM, techno, house)
- Hip-hop and trap beat creation
- Pop and rock drum programming
- Sound design for impact effects
- Custom kick drum creation
- Genre-specific kick design

## Primary Controls Overview
- **Pitch**: Main pitch of the kick drum body
- **Decay**: Length of the kick drum sustain
- **Tone**: Harmonic content and brightness
- **Click**: Transient attack layer volume
- **Distortion**: Saturation amount for character
- **Punch**: Mid-range emphasis
- **Length**: Overall duration control

## Technical Foundations
- **Oscillator-Based**: Synthesized kick generation
- **Envelope Control**: ADSR-style envelope shaping
- **Harmonic Generation**: Controlled harmonic content
- **Layer System**: Body + click layer architecture
- **Real-Time Processing**: Zero-latency synthesis

## Target User Scenarios
1. **Electronic Producers**: Creating custom kicks for EDM
2. **Hip-Hop Beatmakers**: Designing 808s and trap kicks
3. **Pop Producers**: Crafting radio-ready kick sounds
4. **Sound Designers**: Creating impact and effect sounds
5. **Live Performers**: Real-time kick adjustment
6. **Educators**: Teaching synthesis concepts

## Documentation Strategy
This plugin requires comprehensive documentation covering:
- **Kick Drum Theory**: Understanding kick drum synthesis
- **Genre Applications**: Kick design for different musical styles
- **Parameter Mastery**: Deep understanding of each control
- **Practical Workflows**: From basic to advanced kick creation
- **Mixing Integration**: How kicks work in full mixes
- **Sound Design**: Beyond traditional kick drum applications

## Workflow Emphasis
- **Genre-Specific**: Different approaches for EDM, hip-hop, rock, etc.
- **Mix Integration**: Creating kicks that sit well in mixes
- **Performance Ready**: Real-time control and adjustment
- **Creative Exploration**: Beyond conventional kick sounds
- **Professional Results**: Industry-standard kick creation

## Preset Philosophy
Fruit Kick presets should demonstrate:
- **Genre Excellence**: Perfect kicks for specific genres
- **Synthesis Mastery**: Professional parameter combinations
- **Mix Integration**: Kicks that work in full productions
- **Creative Innovation**: Beyond traditional kick sounds
- **Educational Value**: Learning synthesis through examples

## Educational Value
Fruit Kick serves as an excellent learning tool for:
- Synthesis fundamentals
- Envelope shaping
- Harmonic control
- Sound design principles
- Genre-specific production
- Mixing and balance

## Technical Considerations
- **Sub-Bass Management**: Handling low frequencies properly
- **Mono Compatibility**: Ensuring kicks work in mono
- **Headroom Management**: Proper gain staging
- **Frequency Balance**: Working with other mix elements
- **Translation Quality**: Working across all systems

This plugin represents FL Studio's approach to synthesized drums and should be documented to provide both practical workflow guidance and deep synthesis understanding for users at all skill levels.
```

---

## FILE: README.md

```markdown
# Fruit Kick - Drum Synthesizer

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗    ██╗  ██╗██╗ ██████╗██╗  ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝    ██║ ██╔╝██║██╔════╝██║ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║       █████╔╝ ██║██║     █████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║       ██╔═██╗ ██║██║     ██╔═██╗ 
██║     ██║  ██║╚██████╔╝██║   ██║       ██║  ██╗██║╚██████╗██║  ██╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Drum Synthesizer (Kick)
**Category:** Generator / Drum / Synthesis
**Official Manual:** [Image-Line Fruit Kick Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruit%20Kick.htm)

---

## 🎯 What is Fruit Kick?

Fruit Kick is a dedicated synthesizer designed to do one thing perfectly: generate kick drums. It uses a sine wave sweep to create the fundamental "thump," combined with a click generator for the transient "attack" and a distortion circuit for "grit." It is the fastest way to dial in a custom kick without searching through sample libraries.

**Key Capabilities:**
- **Sine Sweep Synthesis:** Generates pure sub-bass tones.
- **Frequency Control:** Precise Start (Max) and End (Min) frequencies.
- **Click Generator:** Adds a sharp transient for cut-through.
- **Distortion:** Built-in hard clipping for Gabber/Hardstyle tones.
- **Decay Envelopes:** Independent control over pitch sweep speed vs volume decay.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **tuning-the-kick.md**
3. Create **parameter-cheat-sheet.md**
4. Load the default preset and adjust "Max" (Start Freq) to hear the sweep range.

### For Hardstyle Producers:
1. Study **creating-gabber-kicks.md**
2. Review **distortion-and-click-balance.md**

### For Hip-Hop Producers:
1. Study **808-emulation.md**
2. Review **layering-click-transients.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Max:** Start Frequency (The "Knock").
  - **Min:** End Frequency (The "Sub").
  - **Decay:** Pitch sweep speed.
  - **Click:** Transient volume.
  - **Dist:** Distortion amount.

- [ ] **tuning-the-kick.md**
  - How to match the "Min" frequency to the song key (e.g., 49Hz = G1).

#### 02-Data/parameters/
- [ ] **fruit-kick-params.json**
  `\`\`json
  {
    "plugin_name": "Fruit Kick",
    "category": "Drum Synth",
    "synthesis_type": "Sine Sweep"
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-gabber-kicks.md**
  - High Distortion.
  - Long Decay.
  - High "Max" frequency for a sharp attack.

- [ ] **808-emulation.md**
  - Very low "Min" frequency.
  - Long Amplitude Decay.
  - Zero Click.
  - Minimal Distortion.

#### 03-Workflows/by-context/
- [ ] **layering-with-samples.md**
- [ ] **transient-shaping-kick.md**

---

## 🔬 Research Framework

### Phase 1: The Sweep (Week 1)
**Goal:** Understanding Kick Physics

**Tasks:**
1. Set Dist and Click to 0
2. Set "Min" to a low sub note
3. Adjust "Max" to hear the punch
4. Adjust "Decay" to change the tightness
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why does a shorter decay make it sound punchier?
- How does the "Click" phase offset change the sound?

---

## 📊 Plugin Specifications to Document

### Engine
- Oscillator Type (Sine)
- Distortion Type (Hard Clip)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it distorted? (Check the Dist knob).
2. Can I change the waveform? (No, it's always a sine sweep).

---

## 🔗 Cross-Reference with Other Plugins

Fruit Kick is often used with:
- **Fruity Parametric EQ 2** (Shaping the final tone)
- **Fruity Soft Clipper** (Additional saturation)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruit Kick/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── tuning-the-kick.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruit-kick-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-gabber-kicks.md
│   │   └── 808-emulation.md
│
└── 04-Reference/
    └── frequency-to-note-chart.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a kick drum tuned exactly to C1 (32.7Hz)
- [ ] Design a "distorted" kick that still has a clean low end
- [ ] Explain the relationship between "Max" freq and "Punch"

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\quick-start-guide.md

```markdown
# Fruit Kick Quick Start Guide

## Getting Started in 30 Seconds

### Your First Kick Drum
1. **Load Fruit Kick** on any mixer channel or instrument track
2. **Set Pitch** to C2 (around 65Hz) for standard kick
3. **Adjust Decay** to 200ms for medium-length kick
4. **Add Click** to 30% for attack definition
5. **Fine-tune Tone** to 50% for balanced character

## Essential Controls

### The Big Three
1. **Pitch** (C1-C5): Main pitch of kick body
2. **Decay** (10ms-2000ms): How long kick lasts
3. **Tone** (0-100%): Brightness vs. sub content

### Character Controls
4. **Click** (0-100%): Attack transient layer
5. **Punch** (0-100%): Mid-range emphasis
6. **Distortion** (0-100%): Saturation and grit
7. **Length** (10-2000ms): Overall duration

## Genre Starting Points

### EDM Kick
`\`\`
Pitch: C1-C2 (32-65Hz)
Decay: 150-300ms
Tone: 30-50%
Click: 40-60%
Punch: 60-80%
`\`\`

### Hip-Hop 808
`\`\`
Pitch: C1-C2 (32-65Hz)
Decay: 500-1000ms
Tone: 0-20%
Click: 10-20%
Punch: 20-40%
`\`\`

### Pop/Rock Kick
`\`\`
Pitch: C2-D3 (65-146Hz)
Decay: 80-150ms
Tone: 60-80%
Click: 50-70%
Punch: 70-90%
`\`\`

### Techno Kick
`\`\`
Pitch: C1-G1 (39-49Hz)
Decay: 100-200ms
Tone: 20-40%
Click: 60-80%
Punch: 80-100%
`\`\`

## Quick Problem Solvers

**Kick too weak?** → Increase Punch and Click
**Kick too muddy?** → Increase Tone, reduce Decay
**No sub-bass?** → Lower Pitch, reduce Tone
**Kick too sharp?** → Reduce Click, increase Decay
**Kick gets lost?** → Increase Punch and overall volume

## Basic Workflow

### Step 1: Foundation
1. Set Pitch for your genre
2. Adjust Decay for desired length
3. Set Tone for sub vs. mid balance

### Step 2: Character
1. Add Click for attack definition
2. Adjust Punch for mid-range presence
3. Add Distortion for character if needed

### Step 3: Integration
1. Check in full mix context
2. Adjust overall level
3. Fine-tune for your specific track

## Pro Tips
- Start with Pitch first, then build around it
- Less Click often sounds more natural
- High Punch values help cuts through dense mixes
- Subtle Distortion adds warmth without harshness
- Always check kick in mono compatibility

## Common Mistakes
❌ Too much sub on small speakers
❌ Excessive Click making kick sound cheap
❌ Wrong Pitch for your genre
❌ Ignoring mix context
❌ Overusing Distortion

Fruit Kick rewards experimentation - start with these guidelines and develop your own signature kick sounds!
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruit Kick

## Purpose and Identity
**Fruit Kick** is a dedicated synthesizer optimized for creating kick drums and 808-style basses. It functions by generating a pure sine wave that sweeps from a high frequency down to a low frequency. This "frequency drop" is what the human ear perceives as the "knock" and "thump" of a bass drum. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a laser beam shooting from the ceiling to the floor. 
- The **ceiling** is your "Max" frequency (the high-pitched click). 
- The **floor** is your "Min" frequency (the deep sub-thump). 
- The **speed** at which the laser falls is your "Decay."
Fruit Kick allows you to build this laser and then add some "grit" (Distortion) and a "transient" (Click) to make it feel like a physical drum hit.

## Typical Roles In A Session
- **Kick Architect**: Designing a custom kick drum that perfectly matches the key of your song.
- **808 Sub Generator**: Creating clean, consistent sub-bass layers without using samples.
- **Transient Layer**: Using a very short, high-pitched sweep to layer on top of a "muddy" acoustic kick drum to give it more "snap."

## Hip-Hop/R&B Context
- **Tuned Kicks**: Ensuring the kick drum hits the root note of the song (e.g. tuning the "Min" to 49Hz for a song in G-Major).
- **Dark 808s**: Using a long amplitude decay and zero distortion to create a heavy, smooth sub-foundation.
- **Trap Snap**: Combining a high "Max" frequency with a very fast pitch decay to create the sharp, percussive "knock" needed for modern club tracks.

## When to Use vs When NOT to Use
| Use It When... | Avoid It When... |
| :--- | :--- |
| You want a perfectly tuned kick drum. | You want a realistic, acoustic drum sound (use FPC). |
| You need a low-CPU, simple sub-generator. | You want to create snares or hats (use DrumSynth Live). |
| You want to build a "custom" 808 from scratch. | You need advanced FM or Wavetable kick synthesis. |
| You are layering a synthesized "thump" with a sample. | You want a drum that has natural room reverb. |

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruit Kick

## UI Tour
The interface is streamlined and focused on the physics of a frequency sweep. [SRC: IL-MAN]

### 1. Frequency Controls (The "Path")
- **Max**: Sets the starting frequency of the sweep (Hertz). High values = Sharper "click."
- **Min**: Sets the ending frequency of the sweep (Hertz). This is the "Sub" or "Body."
- **Decay**: Controls the speed of the pitch drop. Shorter = Punchier; Longer = More "tonal."

### 2. Character Controls (The "Texture")
- **Click**: Adds a noise-based transient to the start of the sound.
- **Dist (Distortion)**: A hard-clipping circuit. Adds harmonics and aggressive grit.
- **Amp Decay**: Controls how long the volume of the sound lasts (independent of the pitch sweep).

### 3. Monitoring
- **LED Display**: Shows the frequency value as you move the knobs.
- **Output Knob**: Master gain control.

## Signal Flow
1. **Trigger**: MIDI note is received (Note pitch is ignored; only the trigger matters).
2. **Sine Generator**: An internal oscillator starts at the **Max** frequency.
3. **Pitch Sweep**: The oscillator's frequency drops to the **Min** frequency at the speed set by **Decay**.
4. **Click Layer**: A transient noise burst is added to the start of the signal.
5. **Volume Envelope**: The global amplitude is faded out based on **Amp Decay**.
6. **Distortion Stage**: (If active) the combined signal passes through a hard clipper.
7. **Output**: The finalized kick audio leaves the plugin.

## Things Beginners Misunderstand
- **"The notes in the Piano Roll don't change the pitch"**: Fruit Kick is a dedicated synth where the pitch is set by the **Min** knob inside the plugin, not the MIDI note.
- **Min vs Max**: If **Min** is higher than **Max**, the frequency will sweep UP (creating a "laser" sound) rather than DOWN (a kick sound).
- **Hard-Clipping**: High **Dist** values will drastically change the volume and shape of the sub. Use a Soft Clipper afterward to tame the spikes.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruit Kick

## 1. Tuning to Key (The "Min" Rule)
The most important setting for a professional-sounding mix.
- **Technique**: Set the **Min** knob to the root frequency of your song.
- **Goal**: A song in C-Major needs a kick at **32.7Hz** (C1) or **65.4Hz** (C2).
- **Benefit**: The kick will resonate with the rest of your instruments, creating a cohesive, "solid" low end.

## 2. The "Ghost" Click Layer
Use Fruit Kick to "repair" a dull drum sample.
- **Technique**: Set **Min** and **Max** both to 500Hz. Set **Amp Decay** to minimum (staccato).
- **Move**: Layer this 100% dry hit on top of a "muddy" acoustic kick.
- **Result**: You've added a synthesized "pop" to the sample that makes it cut through the mix without using EQ.

## 3. High-Grit "Gabber" Drive
Create an aggressive, distorted kick for industrial or heavy club music.
- **Technique**: Crank the **Dist** knob to 80%+. 
- **Move**: Set **Decay** to a longer value (~500ms).
- **Listen For**: The sine wave "squares off," creating a massive, distorted drone that pulses with every hit.

## 4. Pure 808 Sub Base
- **Technique**: Set **Click** to 0 and **Max** to a relatively low value (around 150Hz).
- **Move**: Set **Min** to your sub note (e.g. 40Hz). Maximize the **Amp Decay**.
- **Result**: A perfectly clean, synthesized 808 that never has sample-alignment issues.

## 5. Mono Consistency (The Sine Advantage)
- **Protocol**: synthesized kicks like Fruit Kick are inherently 100% mono.
- **Benefit**: This makes them superior to samples for club translation. You don't need a Stereo Shaper or EQ to "mono-ize" the sub—it's already perfect. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Clicky" Sub** | Your **Max** freq is too high or **Decay** is too fast. Lower "Max" to under 200Hz. |
| **Weak Low End** | Ensure your **Min** is set within the sub-range (30Hz - 60Hz). |
| **Distortion Mud** | High **Dist** adds harmonics that can clutter the mids. Use a High-Shelf EQ to tame the grit. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Kick_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruit Kick

Using frequency sweeps and distortion to hit specific Hip-Hop and R&B kick targets.

---

## 1. MOODY
*Darkness, weight, and "heavy" melancholic thumps.*
- **The Lever**: **Low Max Freq + Zero Click + Long Amp Decay**.
- **Move**: Set Max to 120Hz. Min to 35Hz. Click to 0. Use a very smooth volume fade.
- **What to Listen For**: A "muffled" heavy punch that feels like a weight being dropped on carpet. It provides the sub-foundation without being distracting.
- **Don't Do This**: High distortion (too aggressive).

## 2. UPBEAT
*Energy, sharp transients, and driving "knock".*
- **The Lever**: **High Max Freq + High Click + Fast Pitch Decay**.
- **Move**: Set Max to 800Hz. Click at 60%. Decay at 15% (Tight).
- **What to Listen For**: A sharp, percussive "knock" that hits the chest. The fast decay ensures the kick stays out of the way of the following notes.
- **Don't Do This**: Long pitch decay (makes it sound like a "laser" instead of a drum).

## 3. PSYCHEDELIC
*Disorientation, shifting textures, and "trippy" resonant tails.*
- **The Lever**: **Automated Distortion + Manual Pitch Sweeps**.
- **Move**: Link the **Dist** knob to an LFO. Set the **Min** freq slightly above or below the song key to create dissonance.
- **What to Listen For**: A kick that seems to "morph" or "scream" during the transition, adding a hallucinogenic grit.
- **Don't Do This**: Using standard factory settings.

## 4. JAZZY
*Organic warmth, subtle focus, and "lazy" transients.*
- **The Lever**: **Medium Max Freq + Zero Distortion + Low Gain**.
- **Move**: Set Max to 200Hz. Min to 55Hz. Set Click to 10%.
- **What to Listen For**: A soft, round kick that mimics the sound of a felt-covered beater on a large jazz bass drum. It should sound "warm" and "wooden."
- **Don't Do This**: High "Max" settings (sounds too digital).

## 5. VIBEY
*Modern luxury, expensive sheen, and smooth motion.*
- **The Lever**: **Low-Mid Peak + Moderate Click + Parallel Saturation**.
- **Move**: Set Min to 45Hz. Click at 30%. Drive the Output into a Fruity Soft Clipper *after* the plugin.
- **What to Listen For**: A "silky" but powerful kick that feels consistent and professional. It wraps around the 808 without creating mud.
- **Don't Do This**: Using 100% "Dry" synthesis (needs some saturation to sound "expensive").

---

## Vibe Lever Matrix
| Vibe | Max Freq | Click Level | Pitch Decay | Distortion | Mix Goal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Moody** | 120 Hz | 0% | Slow | 0% | Sub-Focus |
| **Upbeat** | 800 Hz | 70% | Fast | 20% | Chest Punch |
| **Psyched** | Variable | 40% | Mod | 80% | Harmonic Grit |
| **Jazzy** | 200 Hz | 10% | Mod | 0% | Natural Round |
| **Vibey** | 400 Hz | 30% | Fast | 15% | Silky Modern |

```

---

## FILE: 01-Learning\Quick-Reference\kick-design-cheat-sheet.md

```markdown
# Fruit Kick Design Cheat Sheet

| Parameter | Impact | Best Practice |
| :--- | :--- | :--- |
| **Freq** | Fundamental pitch. | Set to the key of your track (e.g., ~50Hz for G). |
| **Max Freq** | Start pitch of the click. | Higher values (>1kHz) add more "snap". |
| **Decay** | Length of the kick. | Short for techno; Long for 808-style subs. |
| **Click** | Initial transient intensity. | Increase for extra punch to cut through the mix. |
| **Dist** | Harmonic saturation. | Adds grit and "meat" to the fundamental frequency. |

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Fruit Kick

The essential modifiers for the synthesized kick engine. [SRC: IL-MAN]

---

## 🕒 Frequency Sweep (Pitch)
- **Max**: Starting frequency. Higher = Sharp click; Lower = Deep thud.
- **Min**: Ending frequency (The root note). Sets the musical key of the kick.
- **Decay**: Speed of the pitch drop. 
  - *Fast*: Punchy kick.
  - *Slow*: Laser/808 sound.

## 🎨 Tone & Texture
- **Click**: Volume of the noise transient. Essential for "cutting" through a mix.
- **Dist**: Hard-clipping distortion. Adds harmonic energy and loudness.
- **Amp Decay**: The volume envelope length.

## 📐 Global Logic
- **Output**: Master gain level.
- **LED Display**: Shows numerical Hz value of the last moved knob.
```

---

## FILE: 01-Learning\Quick-Reference\tuning-the-kick.md

```markdown
# Quick Reference: Tuning the Kick

How to match Fruit Kick's "Min" frequency to your song's key. [SRC: IL-MAN]

## 1. The Hz-to-Note Relationship
Because Fruit Kick uses Hertz (Hz) for its frequency control, you must know the specific value for your project key.

| Key | Hertz (Hz) | Alternative (Hz) |
| :--- | :--- | :--- |
| **C** | 32.7 Hz | 65.4 Hz |
| **D** | 36.7 Hz | 73.4 Hz |
| **E** | 41.2 Hz | 82.4 Hz |
| **F** | 43.6 Hz | 87.3 Hz |
| **G** | 49.0 Hz | 98.0 Hz |
| **A** | 55.0 Hz | 110.0 Hz |
| **B** | 61.7 Hz | 123.4 Hz |

## 2. Setting the Knob
1. Move the **Min** knob in Fruit Kick.
2. Watch the **Hint Bar** (top left of FL Studio) or the LED inside the plugin.
3. Stop when the value matches your target Hz from the table above.

## 3. Fine-Tuning
- If the bass sounds "weak" or "phasy," try tuning the kick to the **Fifth** of your key (e.g. if the key is C, tune the kick to G @ 49Hz).
- **Pro Tip**: Use a spectrum analyzer (Wave Candy) to verify the exact frequency spike of your kick during playback.

```

---

## FILE: 02-Data\parameters.json

```json
{
  "pluginName": "Fruit Kick",
  "version": "1.0",
  "lastUpdated": "2025-01-04",
  "category": "Drum Synthesis",
  "parameters": {
    "pitch": {
      "type": "pitch",
      "range": {
        "min": "C1",
        "max": "C5",
        "default": "C2"
      },
      "unit": "note",
      "description": "Main pitch of the kick drum body",
      "technicalDetails": "Fundamental frequency control from ~32Hz to ~1046Hz",
      "sweetSpots": {
        "sub_bass": ["C1", "C#1", "D1"],
        "bass": ["D2", "E2", "F2"],
        "low_mid": ["G2", "A2", "B2"],
        "mid": ["C3", "D3", "E3"]
      }
    },
    "decay": {
      "type": "time",
      "range": {
        "min": 10,
        "max": 2000,
        "default": 200
      },
      "unit": "ms",
      "description": "Decay time of the kick drum sustain",
      "technicalDetails": "Exponential decay envelope for kick body",
      "sweetSpots": {
        "short": [10, 50, "percussive"],
        "medium": [50, 300, "standard"],
        "long": [300, 800, "808_style"],
        "very_long": [800, 2000, "ambient"]
      }
    },
    "tone": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 100,
        "default": 50
      },
      "unit": "%",
      "description": "Balance between sub-bass and harmonics",
      "technicalDetails": "Controls harmonic content vs pure fundamental",
      "sweetSpots": {
        "sub_heavy": [0, 20, "pure_sub"],
        "balanced": [40, 60, "musical"],
        "bright": [70, 85, "punchy"],
        "harsh": [85, 100, "aggressive"]
      }
    },
    "click": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 100,
        "default": 30
      },
      "unit": "%",
      "description": "Volume of the attack click layer",
      "technicalDetails": "Separate transient layer for attack definition",
      "sweetSpots": {
        "natural": [10, 30, "subtle"],
        "defined": [30, 50, "clear"],
        "punchy": [50, 70, "aggressive"],
        "sharp": [70, 100, "clicky"]
      }
    },
    "punch": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 100,
        "default": 50
      },
      "unit": "%",
      "description": "Mid-range emphasis for cut-through",
      "technicalDetails": "Boosts 200-800Hz range for presence",
      "sweetSpots": {
        "subtle": [0, 20, "warm"],
        "moderate": [30, 50, "balanced"],
        "strong": [60, 80, "cutting"],
        "extreme": [80, 100, "aggressive"]
      }
    },
    "distortion": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 100,
        "default": 0
      },
      "unit": "%",
      "description": "Amount of saturation and harmonic distortion",
      "technicalDetails": "Tube-style saturation algorithm",
      "sweetSpots": {
        "clean": 0,
        "warm": [10, 25, "subtle_color"],
        "gritty": [25, 50, "character"],
        "heavy": [50, 85, "distorted"],
        "extreme": [85, 100, "fuzzy"]
      }
    },
    "length": {
      "type": "time",
      "range": {
        "min": 10,
        "max": 2000,
        "default": 500
      },
      "unit": "ms",
      "description": "Overall duration of the kick drum",
      "technicalDetails": "Maximum length regardless of decay setting",
      "sweetSpots": {
        "staccato": [10, 50, "very_short"],
        "short": [50, 200, "standard"],
        "medium": [200, 800, "808_style"],
        "long": [800, 2000, "sustained"]
      }
    }
  },
  "genreApplications": {
    "edm": {
      "typicalSettings": {
        "pitch": ["C1", "C2"],
        "decay": [150, 400],
        "tone": [30, 50],
        "click": [40, 70],
        "punch": [70, 100]
      },
      "useCase": "Club and festival impact"
    },
    "hiphop": {
      "typicalSettings": {
        "pitch": ["C1", "D2"],
        "decay": [400, 1200],
        "tone": [0, 30],
        "click": [15, 35],
        "punch": [30, 60]
      },
      "useCase": "808 sub-bass and trap kicks"
    },
    "techno": {
      "typicalSettings": {
        "pitch": ["C1", "G1"],
        "decay": [100, 250],
        "tone": [20, 40],
        "click": [60, 85],
        "punch": [80, 100]
      },
      "useCase": "Driving techno grooves"
    },
    "pop": {
      "typicalSettings": {
        "pitch": ["C2", "D3"],
        "decay": [80, 200],
        "tone": [60, 80],
        "click": [50, 70],
        "punch": [70, 90]
      },
      "useCase": "Radio-friendly kick drums"
    }
  },
  "technicalSpecs": {
    "oscillatorType": "Sine wave with harmonic generation",
    "envelopeType": "Exponential ADSR",
    "distortionType": "Tube-style saturation",
    "clickLayer": "Separate transient generator",
    "latency": 0,
    "cpuUsage": 0.1,
    "sampleRates": [44100, 48000, 88200, 96000]
  }
}
```

---

## FILE: 02-Data\preset-library.md

```markdown
# Fruit Kick Preset Library

## EDM Presets

### "Festival Banger"
`\`\`
Pitch: C1 (32Hz)
Decay: 250ms
Tone: 35%
Click: 65%
Punch: 90%
Distortion: 15%
Length: 400ms
`\`\`
**Best For**: Big room EDM, festival drops
**Character**: Massive sub presence with sharp attack
**Use**: Works perfectly on large sound systems

### "Progressive House"
`\`\`
Pitch: D2 (73Hz)
Decay: 300ms
Tone: 45%
Click: 50%
Punch: 75%
Distortion: 10%
Length: 500ms
`\`\`
**Best For**: Progressive house, melodic EDM
**Character**: Balanced warmth with good sub
**Use**: Sits well in melodic arrangements

### "Techno Stomper"
`\`\`
Pitch: G1 (49Hz)
Decay: 180ms
Tone: 25%
Click: 80%
Punch: 100%
Distortion: 25%
Length: 250ms
`\`\`
**Best For**: Techno, industrial, hard EDM
**Character**: Aggressive, cutting, driving
**Use**: Creates forward momentum in tracks

## Hip-Hop & Trap Presets

### "Trap 808"
`\`\`
Pitch: C#1 (35Hz)
Decay: 800ms
Tone: 15%
Click: 20%
Punch: 40%
Distortion: 5%
Length: 1200ms
`\`\`
**Best For**: Trap, modern hip-hop
**Character**: Deep sub with subtle attack
**Use**: Perfect foundation for trap beats

### "Boom Bap Classic"
`\`\`
Pitch: A2 (110Hz)
Decay: 120ms
Tone: 70%
Click: 60%
Punch: 85%
Distortion: 20%
Length: 150ms
`\`\`
**Best For**: Classic hip-hop, boom bap
**Character**: Punchy, mid-range focused
**Use**: Cuts through in vintage-style beats

### "Sub Bass Heavy"
`\`\`
Pitch: C1 (32Hz)
Decay: 1000ms
Tone: 5%
Click: 15%
Punch: 30%
Distortion: 0%
Length: 1500ms
`\`\`
**Best For**: Bass-heavy hip-hop, subwoofer testing
**Character**: Pure sub-bass foundation
**Use**: Creates deep, rumbling low end

## Pop & Rock Presets

### "Radio Pop"
`\`\`
Pitch: D3 (146Hz)
Decay: 100ms
Tone: 75%
Click: 55%
Punch: 80%
Distortion: 8%
Length: 130ms
`\`\`
**Best For**: Pop production, radio hits
**Character**: Bright, punchy, radio-friendly
**Use**: Perfect for mainstream production

### "Rock Solid"
`\`\`
Pitch: G2 (98Hz)
Decay: 90ms
Tone: 65%
Click: 70%
Punch: 90%
Distortion: 30%
Length: 110ms
`\`\`
**Best For**: Rock, alternative, punk
**Character**: Aggressive, driving, powerful
**Use**: Creates rhythmic foundation for rock

### "Acoustic Natural"
`\`\`
Pitch: C3 (130Hz)
Decay: 140ms
Tone: 60%
Click: 40%
Punch: 65%
Distortion: 5%
Length: 180ms
`\`\`
**Best For**: Acoustic, folk, organic music
**Character**: Natural, warm, unprocessed
**Use**: Blends with acoustic instruments

## Experimental & Sound Design

### "Impact Hit"
`\`\`
Pitch: G2 (98Hz)
Decay: 40ms
Tone: 85%
Click: 90%
Punch: 100%
Distortion: 60%
Length: 60ms
`\`\`
**Best For**: Film effects, cinematic impacts
**Character**: Sharp, explosive, dramatic
**Use**: Perfect for transition effects

### "Sub Drop"
`\`\`
Pitch: C1 (32Hz)
Decay: 1500ms
Tone: 10%
Click: 80%
Punch: 20%
Distortion: 40%
Length: 2000ms
`\`\`
**Best For**: Dubstep, cinematic drops
**Character**: Deep sweep with explosive start
**Use**: Creates dramatic sub-bass drops

### "Metallic Click"
`\`\`
Pitch: E3 (164Hz)
Decay: 30ms
Tone: 95%
Click: 100%
Punch: 85%
Distortion: 75%
Length: 50ms
`\`\`
**Best For**: Industrial, experimental
**Character**: Metallic, sharp, processed
**Use**: Creates metallic percussion effects

## Vintage & Retro Presets

### "80s Pop"
`\`\`
Pitch: A2 (110Hz)
Decay: 200ms
Tone: 80%
Click: 45%
Punch: 70%
Distortion: 12%
Length: 250ms
`\`\`
**Best For**: 80s revival, synth-pop
**Character**: Classic 80s drum machine
**Use**: Perfect for retro production

### "90s House"
`\`\`
Pitch: D2 (73Hz)
Decay: 180ms
Tone: 55%
Click: 60%
Punch: 75%
Distortion: 18%
Length: 220ms
`\`\`
**Best For**: Classic house, 90s dance
**Character**: Vintage house character
**Use**: Authentic 90s house sound

### "Vinyl Warmth"
`\`\`
Pitch: E2 (82Hz)
Decay: 250ms
Tone: 45%
Click: 35%
Punch: 60%
Distortion: 25%
Length: 300ms
`\`\`
**Best For**: Lo-fi, vintage production
**Character**: Warm, saturated, vinyl-like
**Use**: Adds vintage character to modern tracks

## Utility Presets

### "Sub Test"
`\`\`
Pitch: C1 (32Hz)
Decay: 1000ms
Tone: 0%
Click: 0%
Punch: 0%
Distortion: 0%
Length: 1500ms
`\`\`
**Best For**: Subwoofer testing, bass response
**Character**: Pure sine wave sub-bass
**Use**: Test speaker systems and room response

### "Click Reference"
`\`\`
Pitch: C3 (130Hz)
Decay: 20ms
Tone: 100%
Click: 100%
Punch: 100%
Distortion: 0%
Length: 30ms
`\`\`
**Best For**: Click testing, reference
**Character**: Pure click transient
**Use**: Test attack and transient response

### "Balanced Reference"
`\`\`
Pitch: C2 (65Hz)
Decay: 150ms
Tone: 50%
Click: 50%
Punch: 50%
Distortion: 0%
Length: 200ms
`\`\`
**Best For**: Starting point, reference
**Character**: Balanced all settings
**Use**: Perfect starting point for customization

## Preset Customization Guide

### Creating Custom Presets
1. **Start with closest genre preset**
2. **Adjust Pitch for your track key**
3. **Modify Decay for desired length**
4. **Fine-tune Tone for sub vs. punch balance**
5. **Set Click for attack character**
6. **Add Punch for mix cut-through**
7. **Add Distortion for character if needed**

### Saving Custom Presets
- Use descriptive names including genre/use
- Include key info in preset name (e.g., "C2 EDM Festival")
- Document what track/genre the preset works for
- Create folders for different project types

### Performance Tips
- **Clubs**: Lower pitch, higher punch
- **Radio**: Higher pitch, balanced tone
- **Streaming**: Moderate sub, clear punch
- **Vinyl**: Avoid excessive sub below 40Hz

## Troubleshooting Preset Issues

### Kick Sounds Weak
- Increase Punch by 20%
- Raise Click by 15%
- Check if Pitch is too low for genre
- Add slight Distortion for warmth

### Kick Sounds Muddy
- Increase Tone to 60-80%
- Reduce Decay if too long
- Lower Pitch if overlapping with bass
- Reduce Distortion if over-saturated

### Kick Doesn't Cut Through Mix
- Increase Punch significantly
- Raise Click for attack definition
- Check frequency conflicts with bass
- Consider parallel compression

### Kick Has Too Much Sub
- Raise Pitch to reduce sub content
- Increase Tone for more harmonics
- Use high-pass filter if needed
- Check on small speakers

This preset library covers all major genres and applications for Fruit Kick, providing professional starting points for any production scenario.
```

---

## FILE: 02-Data\parameters\fruit-kick-params.json

```json
{
  "plugin_name": "Fruit Kick",
  "category": "Generator",
  "engine": "Sine-Sweep Synthesizer",
  "parameters": [
    {
      "name": "Max",
      "type": "knob",
      "unit": "Hz",
      "description": "The initial frequency of the pitch sweep.",
      "vibe_impact": "Punch, knock, presence"
    },
    {
      "name": "Min",
      "type": "knob",
      "unit": "Hz",
      "description": "The final frequency of the pitch sweep (The Root).",
      "vibe_impact": "Key matching, depth, weight"
    },
    {
      "name": "Click",
      "type": "knob",
      "description": "Adds a white-noise burst to the attack.",
      "vibe_impact": "Cut-through, digital energy"
    },
    {
      "name": "Dist",
      "type": "knob",
      "description": "Hard-clips the output for harmonic saturation.",
      "vibe_impact": "Grit, aggression, energy"
    }
  ],
  "mix_impact_tags": ["transient", "sub-bass", "loudness"]
}

```

---

## FILE: 02-Data\parameters\kick-params.json

```json
{
  "plugin": {
    "name": "Fruit Kick",
    "category": "Instrument",
    "type": "Drum Synthesizer",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruit%20Kick.htm"
  },
  "parameters": {
    "synthesis": [
      {
        "id": "freq",
        "name": "Frequency",
        "range": "20 to 200 Hz",
        "unit": "Hz",
        "description": "The target frequency of the pitch sweep."
      },
      {
        "id": "maxFreq",
        "name": "Max Frequency",
        "range": "200 to 5000 Hz",
        "unit": "Hz",
        "description": "The starting frequency of the pitch sweep."
      },
      {
        "id": "decay",
        "name": "Decay",
        "range": "0-100%",
        "description": "Determines how long the kick lasts."
      }
    ],
    "character": [
      {
        "id": "click",
        "name": "Click",
        "range": "0-100%",
        "description": "Adds a high-frequency transient burst."
      },
      {
        "id": "dist",
        "name": "Distortion",
        "range": "0-100%",
        "description": "Adds harmonic saturation."
      }
    ]
  },
  "tuningChart": {
    "C1": "32.7Hz",
    "D1": "36.7Hz",
    "E1": "41.2Hz",
    "F1": "43.7Hz",
    "G1": "49.0Hz",
    "A1": "55.0Hz",
    "B1": "61.7Hz"
  }
}
```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruit Kick)

## 1. The "Root Note" Mandate
- **Rule**: Your kick must never be more than 2 semitones away from the song's root key.
- **Why**: Low-frequency dissonances (clashes) are physically uncomfortable for listeners and ruin the "bounce" of a Hip-Hop track.
- **Move**: Use the Frequency-to-Note chart to set the **Min** knob perfectly.

## 2. 808 Conflict Protection
- **Rule**: If your 808 is sub-heavy, your Fruit Kick must be transient-heavy.
- **Move**: Set Fruit Kick **Max** to 800Hz and **Decay** to <100ms. Keep the **Amp Decay** short.
- **Goal**: To let the Fruit Kick provide the "Knock" and the 808 provide the "Sustain."

## 3. The "Anti-Mud" Saturation
- **Rule**: Don't use high **Dist** settings if you are already using a distorted 808.
- **Why**: Too many competing harmonics in the 200Hz-500Hz range will make your mix sound "boxy" and small.
- **Action**: Keep Fruit Kick clean (Sine) if your other elements are dirty.

## 4. Club Translation (Mono Safety)
- **Rule**: Never add stereo effects (reverb/delay) directly to Fruit Kick.
- **Move**: Keep the channel 100% dry.
- **Why**: synthesized sines are 100% mono by nature. Any stereo expansion will weaken the "impact" of the kick in a club environment.

```

---

## FILE: 03-Workflows\by-context\genre-specific-kick-creation.md

```markdown
# Workflow: Genre-Specific Kick Creation

## Understanding Genre Requirements

Every genre has specific kick drum characteristics that define its sound and feel. Creating the perfect kick means understanding these genre requirements and using Fruit Kick's parameters to achieve them.

## EDM Kick Creation

### Big Room/Festival EDM
**Genre Characteristics**:
- Massive sub-bass presence
- Sharp, punchy attack
- Long sustain for impact
- Works on large sound systems

**Parameter Strategy**:
`\`\`
Foundation Settings:
Pitch: C1-C2 (32-65Hz) - Pure sub frequencies
Decay: 200-400ms - Long sustain
Tone: 30-50% - Sub-focused with some harmonics

Character Development:
Click: 60-80% - Sharp attack for definition
Punch: 80-100% - Maximum mid-range presence
Distortion: 10-20% - Slight warmth and saturation
Length: 300-500ms - Controlled maximum length
`\`\`

**Refinement Process**:
1. Start with Pitch for sub content
2. Add Click for attack clarity
3. Adjust Punch for mix cut-through
4. Fine-tune Tone for sub vs. mid balance
5. Add subtle Distortion for warmth

### Progressive House
**Genre Characteristics**:
- Melodic and musical
- Balanced frequency response
- Medium sustain for groove
- Works with melodic elements

**Parameter Strategy**:
`\`\`
Foundation Settings:
Pitch: D2-E2 (73-82Hz) - Musical range
Decay: 250-350ms - Medium-long sustain
Tone: 45-60% - Balanced harmonics

Character Development:
Click: 40-60% - Moderate attack
Punch: 70-85% - Strong but not aggressive
Distortion: 5-15% - Subtle character
Length: 400-600ms - Medium length
`\`\`

### Techno/Industrial
**Genre Characteristics**:
- Driving and repetitive
- Hard, aggressive character
- Short-to-medium sustain
- High impact per hit

**Parameter Strategy**:
`\`\`
Foundation Settings:
Pitch: G1-B1 (49-62Hz) - Low and powerful
Decay: 100-200ms - Short sustain
Tone: 20-40% - Sub-focused with harshness

Character Development:
Click: 70-90% - Very sharp attack
Punch: 90-100% - Maximum cut-through
Distortion: 20-40% - Aggressive saturation
Length: 150-250ms - Short impact
`\`\`

## Hip-Hop Kick Creation

### Trap & Modern Hip-Hop
**Genre Characteristics**:
- Deep 808-style sub-bass
- Long, sustained notes
- Minimal high-frequency content
- Subwoofer-focused

**Parameter Strategy**:
`\`\`
Foundation Settings:
Pitch: C1-C#1 (32-35Hz) - Pure sub range
Decay: 600-1500ms - Very long sustain
Tone: 0-20% - Minimal harmonics

Character Development:
Click: 10-30% - Subtle attack
Punch: 20-50% - Gentle mid-range presence
Distortion: 0-10% - Clean or barely saturated
Length: 1000-2000ms - Maximum sustain
`\`\`

**Trap Refinements**:
- For sub-bass focus: Tone 0-10%
- For more definition: Click 25-35%
- For 808 character: Slight Distortion (5-15%)
- For mix integration: Moderate Punch (30-40%)

### Classic Boom Bap
**Genre Characteristics**:
- Mid-range focused
- Punchy and rhythmic
- Medium-short sustain
- Vintage drum machine feel

**Parameter Strategy**:
`\`\`
Foundation Settings:
Pitch: A2-C3 (110-130Hz) - Mid-range focus
Decay: 80-150ms - Short sustain
Tone: 60-80% - Harmonic-focused

Character Development:
Click: 50-70% - Clear attack
Punch: 80-95% - Strong presence
Distortion: 15-30% - Vintage warmth
Length: 100-180ms - Short impact
`\`\`

## Pop & Rock Kick Creation

### Modern Pop
**Genre Characteristics**:
- Bright and present
- Medium sustain for radio
- Punchy attack for impact
- Radio-friendly frequency balance

**Parameter Strategy**:
`\`\`
Foundation Settings:
Pitch: D3-F3 (146-175Hz) - Bright range
Decay: 80-120ms - Short-medium sustain
Tone: 70-85% - Bright and present

Character Development:
Click: 50-70% - Clear attack
Punch: 75-90% - Radio presence
Distortion: 5-15% - Subtle warmth
Length: 100-150ms - Radio-friendly length
`\`\`

### Rock & Alternative
**Genre Characteristics**:
- Aggressive and driving
- Strong mid-range punch
- Short sustain for speed
- Power and energy

**Parameter Strategy**:
`\`\`
Foundation Settings:
Pitch: G2-A2 (98-110Hz) - Rock range
Decay: 70-120ms - Short sustain
Tone: 60-75% - Balanced character

Character Development:
Click: 60-80% - Aggressive attack
Punch: 85-100% - Maximum power
Distortion: 25-45% - Rock distortion
Length: 90-140ms - Quick impact
`\`\`

## Electronic Sub-Genres

### Dubstep & Riddim
**Genre Characteristics**:
- Extreme sub-bass
- Sharp, aggressive attack
- Variable sustain for rhythm
- High impact per drop

**Parameter Strategy**:
`\`\`
Foundation Settings:
Pitch: C1-D1 (32-37Hz) - Extreme sub
Decay: 100-500ms - Variable by pattern
Tone: 10-25% - Sub-focused

Character Development:
Click: 70-90% - Sharp attack
Punch: 40-70% - Moderate presence
Distortion: 30-60% - Aggressive character
Length: 200-600ms - Pattern-dependent
`\`\`

### Drum & Bass
**Genre Characteristics**:
- Fast and punchy
- Mid-range focused
- Very short sustain
- High speed compatibility

**Parameter Strategy**:
`\`\`
Foundation Settings:
Pitch: D2-F2 (73-87Hz) - Fast range
Decay: 40-80ms - Very short
Tone: 50-70% - Balanced

Character Development:
Click: 60-80% - Fast attack
Punch: 80-95% - Speed impact
Distortion: 10-25% - Character
Length: 50-100ms - Quick response
`\`\`

## Advanced Genre Techniques

### Hybrid Kick Creation
Combine elements from multiple genres:
`\`\`
EDM-Trap Hybrid:
Pitch: C#1 (35Hz) - Trap sub
Decay: 300ms - EDM sustain
Tone: 25% - Trap character
Click: 60% - EDM attack
Punch: 80% - Both genres
Distortion: 20% - Modern warmth
`\`\`

### Key-Specific Tuning
Tune kicks to your song key:
`\`\`
C Major: C1, C2, C3 (32Hz, 65Hz, 130Hz)
G Major: G1, G2, G3 (49Hz, 98Hz, 196Hz)
D Minor: D1, D2, D3 (37Hz, 73Hz, 146Hz)
A Minor: A1, A2, A3 (55Hz, 110Hz, 220Hz)
`\`\`

### Frequency Slotting
Work with bass instruments:
`\`\`
With Sub Bass (C1): Use kick at G1 or C2
With Bass Guitar (80Hz): Use kick at C1 or E2
With 808 (C1): Use kick at G1 or A1
With Multiple Basses: Use higher kick pitch
`\`\`

## Practical Workflow Guide

### Step 1: Genre Selection
1. Identify target genre
2. Choose appropriate Pitch range
3. Set basic Decay length
4. Determine Tone character

### Step 2: Character Development
1. Set Click for attack type
2. Adjust Punch for presence
3. Add Distortion for character
4. Set Length for maximum duration

### Step 3: Mix Integration
1. Check in full mix context
2. Adjust for frequency conflicts
3. Level match with other elements
4. Test on multiple systems

### Step 4: Fine Tuning
1. A/B with reference tracks
2. Adjust for specific song needs
3. Test mono compatibility
4. Verify translation quality

## Professional Tips

### Gain Staging
- Start with kick at proper level (-12dB to -6dB)
- Leave headroom for other elements
- Avoid excessive compression in plugin

### Mix Context
- Always check kick with bass present
- Verify kick works with drums
- Test in full arrangement
- Check on various playback systems

### Automation Considerations
- Pitch automation for melodic kicks
- Decay automation for dynamics
- Distortion automation for buildups
- Click automation for variation

### Genre Blending
- Combine characteristics creatively
- Use multiple kick instances
- Layer different genre approaches
- Create unique hybrid sounds

## Troubleshooting Genre Issues

### EDM Problems
**Kick not hitting hard enough**: Increase Punch and Click
**Too much sub on small systems**: Raise Pitch, increase Tone
**Kick sounds thin**: Add Distortion, increase Punch

### Hip-Hop Problems
**808 not deep enough**: Lower Pitch, reduce Tone
**Kick gets lost in mix**: Increase Punch, moderate Distortion
**Sub woofer overload**: Check phase with other subs

### Rock Problems
**Kick lacks power**: Maximum Punch, high Distortion
**Too much mid-range**: Lower Tone, moderate Punch
**Sounds muddy**: Increase Tone, reduce Decay

This genre-specific workflow provides systematic approach to creating professional kick drums for any musical style using Fruit Kick.
```

---

## FILE: 03-Workflows\by-goal\808-emulation.md

```markdown
# Goal Workflow: 808 Emulation (Pure Sub Bass)

*Goal: Creating a perfectly clean, tuned 808 sub-bass using only Fruit Kick.*

## 🚶 Step-by-Step Setup
1. **Initialize Tone**:
   - Set **Click** to 0.
   - Set **Dist** to 0.
2. **Frequency Definition**:
   - Set **Min** to your root note (e.g. 40Hz for E).
   - Set **Max** to a relatively low value like **150Hz**. 
   - *Result*: This creates a very gentle pitch slide that feels like a bass note rather than a drum.
3. **The Sustain**:
   - Maximize the **Amp Decay** knob. 
   - Increase the **Decay** (Pitch) knob to roughly 50%.
4. **Envelope Polishing**:
   - Add a **Fruity Limiter** after the plugin.
   - Use the **Compressor** section with a slow Release to "hold" the sub-bass at a consistent level.
5. **The Punch**:
   - If the sub feels too soft, increase the **Max** frequency slightly until you hear a subtle "thud" at the start of the note.
6. **Result**: A rock-solid, synthesized 808 that will never phase-align incorrectly with your kick samples.

## 🔄 Variations
- **The "Gritty" 808**: Increase **Dist** to 20% to add subtle harmonics for phone speakers.
- **The "Glissando"**: Link the **Min** frequency to an automation clip to "slide" the sub between notes.

## ⚠️ Pitfalls & Fixes
- **Problem**: Sub-bass is "clicking" at the start.
- **Fix**: Reduce the **Max** frequency knob.

```

---

## FILE: 03-Workflows\by-goal\creating-gabber-kicks.md

```markdown
# Goal Workflow: Creating Gabber Kicks (Distorted Impact)

*Goal: Designing a massive, distorted kick drum for aggressive electronic and industrial Trap genres.*

## 🚶 Step-by-Step Setup
1. **The Attack**:
   - Set **Max** frequency to **1000Hz**.
   - Set **Decay** (Pitch) to **10%** (Fast).
   - *Result*: This creates a sharp "laser" crack at the start of the sound.
2. **The Distortion (The Heart)**:
   - Crank the **Dist** knob to **90%**.
   - *Result*: The sine wave is squared off, creating a heavy harmonic buzz.
3. **The Click Layer**:
   - Set **Click** to **70%**.
   - *Move*: This ensures the transient isn't lost in the extreme distortion.
4. **The Tone Shape**:
   - Add a **Fruity Parametric EQ 2** after Fruit Kick.
   - Boost 200Hz by 6dB (The "Body").
   - Cut 400Hz by 4dB (The "Boxiness").
5. **The Final Clamp**:
   - Place a **Fruity Soft Clipper** at the end of the chain.
   - *Final Result*: A wall of distorted sound that hits with maximum energy.

## 🔄 Variations
- **The "Techno Rumble"**: Use a very long **Amp Decay** and add a 1/4 note delay.
- **The "Punchy Metal"**: Set **Max** to 2000Hz and use a 96dB/octave filter to cut everything above 5kHz.

## ⚠️ Pitfalls & Fixes
- **Problem**: Sub-bass has disappeared.
- **Fix**: Lower the **Dist** knob. Extreme hard-clipping can actually thin out the lowest frequencies.

```

---

## FILE: 03-Workflows\by-goal\creating-hardstyle-kicks.md

```markdown
# Creating Hardstyle Kicks Workflow

## Goal
Generate a punchy, distorted kick foundation suitable for Hardstyle or Hardcore.

## Steps
1. **Initial Freq**: Set to **~50-60Hz**.
2. **Pitch Slide**: Set **Max Freq** to a very high value (~3000Hz) and **Decay** to a short-medium length. This creates the "tok" sound.
3. **Add Click**: Crank the **Click** parameter to 100% to ensure it cuts through heavy distortion.
4. **Saturation**: Use the built-in **Dist** knob to about 50%.
5. **Post-Processing**: 
    - Route to a mixer track.
    - Add **Fruity Blood Overdrive** for extreme distortion.
    - EQ out the boxiness (~300-500Hz).

## Pro Tip
Automate the **Decay** knob during transitions to create a "swelling" sub effect before a drop.

```

---

## FILE: 03-Workflows\by-goal\layering-samples-with-fruit-kick.md

```markdown
# Layering Samples with Fruit Kick Workflow

## Goal
Combine a "character" kick sample (which might have a great top-end click but a weak sub) with the solid, tunable low-end of Fruit Kick.

## Steps
1. **The Sample (Top Layer):**
   - Load your kick sample into a **Sampler** or **Slicex**.
   - Apply a High-Pass Filter (HPF) around **150Hz** to remove its sub-frequencies.
2. **The Fruit Kick (Sub Layer):**
   - Load **Fruit Kick**.
   - Set **Freq** to the root note of your track.
   - Set **Max Freq** low (~300Hz) so it doesn't clash with the sample's click.
   - Adjust **Decay** to match the length of your sample.
3. **Phase Alignment (Critical):**
   - Load both onto the same mixer track (or a bus).
   - Use a plugin like **Wave Candy** (Oscilloscope mode) to look at the combined waveform.
   - If the combined kick looks "smaller" or quieter than the individual parts, invert the phase of the Fruit Kick (via Wrapper settings).
4. **Processing:**
   - Apply a **Fruity Limiter** to glue the two sounds together.
   - Use a slight boost at the fundamental frequency to emphasize the new, solid sub.

## Pro Tip
You can slightly "offset" the start of the Fruit Kick (using the Sampler's 'Shift' or Patcher) to ensure its sub-wave doesn't peak at the exact same millisecond as the sample's transient.

```

---

## FILE: 03-Workflows\by-goal\print-to-audio-workflow.md

```markdown
# Goal Workflow: Print-to-Audio Workflow (Sampling Synthesis)

*Goal: Converting your synthesized kick into a high-quality audio clip for further manipulation and layering.*

## 🚶 Step-by-Step Setup
1. **The Design**: Dial in your perfect kick settings in Fruit Kick.
2. **The Key**: Double-check that your **Min** frequency is tuned to your song key.
3. **The Mixer Prep**: 
   - Assign Fruit Kick to Mixer Track 1.
   - Remove any random effects like Reverb or Delay.
4. **Recording**:
   - Right-click the **Record Button** on Mixer Track 1.
   - Select **Render to Wave File(s)** (or use **Alt+R**).
   - *Move*: Ensure "Save into Playlist" is checked.
5. **The Audio Clip (The Sample)**:
   - Now that you have a `.wav` file, you can do things synthesis can't:
   - **Reverse it** for a riser.
   - **Fade the transient** manually.
   - **Normalize** it to hit exactly 0dB.
6. **Result**: You now have a unique, custom-made sample that is better than anything found in a standard pack.

## 🔄 Variations
- **The "Pitch-Slide" Sample**: Automate the pitch during the recording to create a sliding 808 sample.
- **The "Dirty Tail"**: Only record the tail of the kick with 100% distortion, then layer it under a clean acoustic sample.

## ⚠️ Pitfalls & Fixes
- **Problem**: The recording has a "click" at the end.
- **Fix**: Use the **De-clicking** mode in the Audio Clip sampler or add a tiny volume fade-out.

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Kick Synthesis)

Sourced applications of synthesized kicks in modern production.

## 1. Minimal / Dark Techno Kick (Moody)
- **Source**: Charlotte de Witte / Richie Hawtin.
- **Application**: Pure sine sweep. Very low "Max" freq. Massive Reverb tail processed with a high-cut.
- **Vibe**: Hypnotic, heavy, and immersive weight.

## 2. Hardstyle / Gabber Kick (Upbeat)
- **Source**: Headhunterz / Angerfist.
- **Application**: 100% Distortion. Extremely fast pitch decay. Multiple layers of EQ.
- **Vibe**: Aggression, energy, and physical pressure.

## 3. Lo-Fi Hip-Hop Thumps (Vibey)
- **Source**: J Dilla / Lofi Girl.
- **Application**: Low "Max" freq. Zero click. Low-pass filter at 2kHz. Layered with a vinyl crackle.
- **Vibe**: Warmth, "wooden" character, and nostalgic intimacy.

## 4. Modern "Sliding" 808s (Psychedelic)
- **Source**: Mike Dean / Wheezy style.
- **Application**: Long Amp Decay. Manual automation of the **Min** frequency knob.
- **Vibe**: Liquid motion, disorientation, and modern digital soul.

```

---

## FILE: 04-Reference\frequency-to-note-chart.md

```markdown
# Technical Reference: Frequency-to-Note Chart

A precision map for tuning Fruit Kick to your song key. [SRC: DSP-Theory]

## 1. Sub-Bass Octave (Octave 1)
Use these for the **Min** knob setting.

| Note | Frequency (Hz) | Note | Frequency (Hz) |
| :--- | :--- | :--- | :--- |
| **C1** | 32.7 Hz | **F#1** | 46.2 Hz |
| **C#1** | 34.6 Hz | **G1** | 49.0 Hz |
| **D1** | 36.7 Hz | **G#1** | 51.9 Hz |
| **D#1** | 38.9 Hz | **A1** | 55.0 Hz |
| **E1** | 41.2 Hz | **A#1** | 58.3 Hz |
| **F1** | 43.6 Hz | **B1** | 61.7 Hz |

## 2. Fundamental Octave (Octave 2)
Use these for a "tighter" or "higher" kick character.

| Note | Frequency (Hz) | Note | Frequency (Hz) |
| :--- | :--- | :--- | :--- |
| **C2** | 65.4 Hz | **F#2** | 92.5 Hz |
| **C#2** | 69.3 Hz | **G2** | 98.0 Hz |
| **D2** | 73.4 Hz | **G#2** | 103.8 Hz |
| **D#2** | 77.8 Hz | **A2** | 110.0 Hz |
| **E2** | 82.4 Hz | **A#2** | 116.5 Hz |
| **F2** | 87.3 Hz | **B2** | 123.5 Hz |

## 3. Why Tune the Kick?
- **Harmony**: Tuning the kick to the root note ensures the low end doesn't sound "blurred" or "nervous."
- **Sidechaining**: When the kick and the bass are in the same key, they interact with each other's phase more predictably, leading to a punchier mix.
- **Verification**: Use **Wave Candy** (Spectrum mode) to see the exact peak of your kick drum.

```

---

## FILE: 04-Reference\technical-docs\kick-physics.md

```markdown
# Frequency Sweep Physics in Drum Synthesis

## The "Kick" Formula
A kick drum is essentially a **Pitch Sweep** combined with a **Volume Envelope**. 
Fruit Kick automates this relationship:
1. **The Transient:** The initial transition from `Max Freq` to `Freq` happens extremely fast. This creates the "pop" or "click" sound.
2. **The Body:** As the sweep slows down, it reaches the `Freq` value, where it stays for the duration of the `Decay`.

## Decay Logic
In Fruit Kick, the **Decay** parameter is a "Dual Envelope":
- It controls the **Volume Decay** (how long it takes for the sound to fade out).
- It controls the **Pitch Decay** (how long the sweep takes to reach the final frequency).
- **Result:** Longer kicks have "lazier" pitch drops, which can sound "boomy" or "woofy". Shorter kicks have "snappier" drops.

## The Distortion Engine
The **Dist** parameter adds non-linear saturation. 
- At low settings, it adds warmth (low-order harmonics).
- At high settings, it starts to square off the sine wave. A square wave has much more energy in the "mids", which makes the kick audible on speakers that can't reproduce the sub-fundamental.

```

---

## FILE: 04-Reference\technical-docs\oscillator-shape.md

```markdown
# Fruit Kick Oscillator Shape

## Waveform Analysis
Fruit Kick uses a single sine wave oscillator with a pitch envelope.

## Pitch Envelope (Sweep)
The "kick" sound is created by rapidly sweeping the pitch from **Max Freq** down to **Freq**.
- **Linear vs. Exponential**: The sweep is logarithmic, mimicking the natural physics of a drum head being struck.

## Harmonic Distortion
The **Dist** parameter adds odd harmonics to the sine wave, effectively pushing it towards a soft-clipped square wave. This increases perceived loudness without increasing peak levels significantly.

```

---

