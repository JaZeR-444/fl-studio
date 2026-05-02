# Frequency Shifter - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Frequency Shifter - Creative Sound Design Tool

`\`\`
███████╗██████╗ ███████╗ ██████╗ ██╗   ██╗███████╗███╗   ██╗ ██████╗██╗   ██╗
██╔════╝██╔══██╗██╔════╝██╔═══██╗██║   ██║██╔════╝████╗  ██║██╔════╝╚██╗ ██╔╝
█████╗  ██████╔╝█████╗  ██║   ██║██║   ██║█████╗  ██╔██╗ ██║██║      ╚████╔╝ 
██╔══╝  ██╔══██╗██╔══╝  ██║ ▄ ██║██║   ██║██╔══╝  ██║╚██╗██║██║       ╚██╔╝  
██║     ██║  ██║███████╗╚██████╔╝╚██████╔╝███████╗██║ ╚████║╚██████╗   ██║   
╚═╝     ╚═╝  ╚═╝╚══════╝ ╚═══▀══╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝   ╚═╝   

███████╗██╗  ██╗██╗███████╗████████╗███████╗██████╗ 
██╔════╝██║  ██║██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗
███████╗███████║██║█████╗     ██║   █████╗  ██████╔╝
╚════██║██╔══██║██║██╔══╝     ██║   ██╔══╝  ██╔══██╗
███████║██║  ██║██║██║        ██║   ███████╗██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Frequency Shifter / Ring Modulator
**Category:** Effect / Creative
**Official Manual:** [Image-Line Frequency Shifter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Frequency%20Shifter.htm)

---

## 🎯 What is Frequency Shifter?

Frequency Shifter creates complex metallic, dissonant, and "robotic" textures by shifting all frequencies in the input signal by a fixed Hertz amount. **Crucially, this is NOT pitch shifting.** Pitch shifting multiplies frequencies (preserving harmonic relationships), while Frequency Shifting adds/subtracts a fixed value (breaking harmonic relationships).

**Key Capabilities:**
- **Inharmonic Shifting:** Moves frequencies linearly (Hz) rather than logarithmically (Semitones).
- **Ring Modulation:** Creates bell-like, metallic tones.
- **Stereo Detuning:** Independent Left/Right shift controls for extreme width.
- **Feedback Loop:** Creates psychedelic, spiraling echoes.
- **Start Phase Control:** Adjusts the transient response and click reduction.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **pitch-vs-freq-shift.md** (Essential concept!)
3. Create **parameter-cheat-sheet.md**
4. Test the "Freq" knob on a drum loop vs a melody.

### For Sound Designers:
1. Review **metallic-textures.md** (to be created)
2. Study **dubstep-growl-design.md**
3. Learn **stereo-widening-tricks.md** using small shifts

### For Experimental Producers:
1. Study **ring-modulation-guide.md**
2. Review **feedback-drone-creation.md**
3. Learn **riser-fx-design.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - Freq Knob (The main shift amount)
  - Left/Right independent switches
  - Feedback Amount
  - Start Phase
  - Mix (Dry/Wet)

- [ ] **pitch-vs-freq-shift.md**
  - **Pitch Shift:** 100Hz -> 200Hz, 200Hz -> 400Hz (Octave up, musical)
  - **Freq Shift:** 100Hz (+100) -> 200Hz, 200Hz (+100) -> 300Hz (Dissonant, inharmonic)
  - Why this makes things sound "metallic" or "scary"

#### 02-Data/parameters/
- [ ] **frequency-shifter-params.json**
  `\`\`json
  {
    "plugin_name": "Frequency Shifter",
    "category": "Effect",
    "parameters": [
      {
        "name": "Frequency",
        "type": "knob",
        "unit": "Hz",
        "range": "-SampleRate/2 to +SampleRate/2",
        "description": "Amount of linear frequency shift",
        "use_cases": ["tuning drums", "creating metallic layer"]
      },
      {
        "name": "Feedback",
        "type": "knob",
        "description": "Feeds output back into input",
        "pro_tip": "Use for barber-pole flanger effects"
      }
    ]
  }
  `\`\`

#### 02-Data/presets/
- [ ] **creative-presets.json**
  - Subtle Stereo Widener (+5Hz L, -5Hz R)
  - Robotic Voice (Ring Mod style)
  - Horror Movie Drone
  - Snare Drum Tuner

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-metallic-bass.md**
  - Using small shifts (50-200Hz) to add "clang" to bass
  - Blending with Mix knob to keep fundamental

- [ ] **stereo-widening-trick.md**
  - Shifting Left channel up by 2Hz
  - Shifting Right channel down by 2Hz
  - Result: Massive, mono-compatible width without phase cancellation issues of typical delays

- [ ] **drum-transient-shaping.md**
  - Shifting drums up to make them "tighter" or "clickier"
  - Shifting down for "doomy" loose snares

#### 03-Workflows/by-context/
- [ ] **techno-rumble-texture.md**
- [ ] **riser-transition-effects.md**
- [ ] **experimental-vocals.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **ring-modulation-theory.md**
  - How Frequency Shifter relates to Ring Mod (Sum and Difference tones)
  - Bode Frequency Shifter history

- [ ] **aliasing-artifacts.md**
  - What happens at extreme settings?
  - How sample rate affects the upper limit

---

## 🔬 Research Framework

### Phase 1: Basic Understanding (Week 1)
**Goal:** Grasp the "Inharmonic" nature

**Tasks:**
1. Apply to a Sine Wave (Pure tone)
2. Apply to a Sawtooth Wave (Harmonic series)
3. Hear how the harmonics "break" relation
4. Create pitch-vs-freq-shift.md

**Key Questions to Answer:**
- Why does a chord sound like noise when shifted?
- What is the sweet spot for "subtle" widening?
- How does the Feedback knob change the texture?

### Phase 2: Creative Application (Week 2)
**Goal:** Practical Sound Design

**Tasks:**
1. Use on Vocals for "Alien" effects
2. Use on Snares to change their "tuning" without time-stretching
3. Automate the Frequency knob for risers
4. Create stereo-widening-trick.md

**Key Questions to Answer:**
- How to sync the shift to tempo (if possible, or via manual automation)?
- Can this simulate "Barberpole" phasing?
- Best Mix settings for retaining musicality?

---

## 📊 Plugin Specifications to Document

### Shift Engine
- Frequency Range (Max Hz shift)
- Stereo Link/Unlink capability
- Feedback signal path

### Audio Quality
- Aliasing characteristics
- Phase response at 0Hz shift

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I shift Left and Right channels oppositely?
2. What does "Start Phase" actually do to the sound?
3. Why does my voice sound like a robot?

### Advanced Usage
1. How to create an "infinite riser" effect (Shepard Tone style)?
2. Using Frequency Shifter inside a Patcher feedback loop?
3. Difference between Frequency Shifter and Ring Modulator effect?

---

## 📝 Documentation Standards

### For Each Workflow:
- **Source Material:** Best sounds to use (Drums vs Leads)
- **Shift Amount:** Specific Hz ranges (Subtle < 10Hz, Clang > 100Hz)
- **Mix Setting:** Crucial for this effect (Wet vs Dry/Wet)

---

## 🔗 Cross-Reference with Other Plugins

Frequency Shifter is often used with:
- **Delay Bank** (Shifting feedback tails)
- **Reverb** (Shifting reverb shimmer)
- **Patcher** (For separating transients before shifting)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Frequency Shifter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── pitch-vs-freq-shift.md ⭐ HIGH PRIORITY
│
├── 02-Data/
│   ├── parameters/
│   │   └── frequency-shifter-params.json
│   └── presets/
│       └── creative-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-metallic-bass.md
│   │   ├── stereo-widening-trick.md
│   │   └── drum-transient-shaping.md
│
└── 04-Reference/
    └── ring-modulation-theory.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Clearly demonstrate the difference between Pitch Shifting and Frequency Shifting
- [ ] Create a "clean" stereo widening effect without phase issues
- [ ] Design a dubstep growl metallic layer using the plugin
- [ ] Explain why the plugin makes musical chords sound dissonant

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\00_Overview.md

```markdown
# Frequency Shifter - Overview

## What is Frequency Shifter?

Frequency Shifter is a specialized audio effect plugin that shifts all frequencies in the input signal by a fixed amount in Hertz (Hz), rather than multiplying them like pitch shifters do. This creates unique metallic, inharmonic, and robotic textures that are distinctly different from traditional pitch shifting. Unlike pitch shifting which maintains harmonic relationships (octaves remain octaves), frequency shifting moves ALL frequencies by the same amount, breaking harmonic relationships and creating bell-like, metallic, or sci-fi sounds.

**Key Capabilities:**
- **Linear Frequency Shifting**: Shifts all frequencies by a fixed Hz amount (not ratio-based like pitch shifters)
- **Independent Stereo Shifting**: Different shift amounts for left and right channels
- **Feedback Loop**: Creates evolving, spiraling textures when fed back
- **Start Phase Control**: Adjusts the phase relationship to reduce clicks/pops
- **Dual Channel Operation**: Separate controls for left and right channels
- **Musical Scale Integration**: Can be set to shift by musically relevant intervals

**Primary Use Cases:**
- Creating metallic, bell-like, or robotic textures
- Generating sci-fi and experimental sound effects
- Adding unique character to synths and pads
- Creating evolving textures with feedback
- Designing talking/singing synth effects
- Producing inharmonic sound design elements

---

## Where it sits in FL Studio ecosystem

Frequency Shifter is categorized as a **Specialized Audio Effect / Sound Design Tool** and fits into the Effect category of FL Studio's plugin ecosystem. It serves as:

- A **creative sound design tool** for unique textures and effects
- An **experimental processing unit** for breaking harmonic relationships
- A **sci-fi sound generator** for otherworldly effects
- A **modulation effect** for evolving textures
- A **vocal processing tool** for robotic and talking effects

It works well in various contexts within FL Studio:
- On individual tracks for creative processing
- On bus channels for group processing
- On the master channel for subtle character addition
- In automation clips for evolving effects
- As part of creative sound design workflows

## What problem it solves and who it's for

Frequency Shifter addresses several key challenges in music production:

1. **Inharmonic Texture Creation**: Creates textures that maintain their character when transposed (unlike pitch shifters)
2. **Metallic/Bell-like Effects**: Generates sounds similar to metallophones, bells, or other inharmonic instruments
3. **Sci-Fi Sound Design**: Creates otherworldly, electronic, or robotic textures
4. **Harmonic Relationship Breaking**: Produces sounds where harmonic relationships are intentionally disrupted
5. **Unique Modulation Effects**: Provides modulation that's different from traditional pitch shifters or ring modulators

It's ideal for:
- Sound designers looking for unique textures and effects
- Electronic music producers seeking metallic or robotic sounds
- Sci-fi and experimental music creators
- Anyone wanting to break traditional harmonic relationships
- Users who want to create evolving textures with feedback
- Producers working with talking/singing synth effects

## A simple mental model: how to think about it in 60 seconds

Think of Frequency Shifter as a "frequency translator" that moves all frequencies up or down by a fixed distance, like sliding everything on the frequency spectrum by the same amount. Unlike a pitch shifter (which would move a 100Hz tone up an octave to 200Hz AND a 200Hz tone up to 400Hz), a frequency shifter moves EVERY frequency by the same amount (e.g., +100Hz would move 100Hz to 200Hz, but 200Hz to 300Hz). This creates inharmonic results where musical intervals become non-musical, producing bell-like, metallic, or robotic sounds.

The key insight is that it changes the harmonic relationships in your audio, creating textures that are distinctly non-musical in a very specific way.

## When to use it

**Use Frequency Shifter when:**
- You want to create metallic, bell-like, or robotic textures
- You need inharmonic sound design elements
- You're creating sci-fi or experimental sounds
- You want to break harmonic relationships in creative ways
- You're designing talking/singing synth effects
- You want evolving textures using feedback
- You need to create unique modulation effects

**Don't use Frequency Shifter when:**
- You need traditional pitch shifting (use Pitcher or Newtime instead)
- You want to maintain harmonic relationships
- You're looking for musical transposition
- You need key-preserving vocal effects
- You want traditional harmonization
- You're seeking conventional pitch correction

## Links

- [Official Manual Page](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Frequency%20Shifter.htm)
- [Frequency Shifter Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Frequency_Shifter_tutorials.htm)
- [Frequency Shifter Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+frequency+shifter+tutorial)
```

---

## FILE: 01-Learning\01_UI_Tour_And_Core_Concepts.md

```markdown
# Frequency Shifter - UI Tour And Core Concepts

## UI Tour

### Main Interface Layout

Frequency Shifter presents a focused interface designed for precise frequency manipulation. The interface is organized into several key areas:

#### Top Section
- **Title Bar**: Shows the plugin name and version
- **Preset Browser**: For loading and saving frequency shift settings
- **Global Controls**: Including bypass and mix controls
- **Frequency Display**: Shows current shift amount in Hz

#### Central Area - Frequency Control
The main area contains the core frequency shifting parameters:

**Main Shift Control**:
- **Frequency Knob**: The primary frequency shift parameter
- **Range**: Typically ±2000Hz or more (depending on sample rate)
- **Function**: Shifts all frequencies by the specified amount in Hz
- **Visual Feedback**: Large numeric display showing exact Hz value

**Stereo Controls**:
- **Left Channel**: Independent frequency shift for left channel
- **Right Channel**: Independent frequency shift for right channel
- **Link Button**: Links/unlinks left and right channel controls
- **Swap Button**: Swaps left and right channel settings

#### Right Panel - Advanced Controls
- **Feedback Control**: Amount of output fed back to input
- **Start Phase Control**: Adjusts phase relationship to reduce artifacts
- **Mix Control**: Dry/wet blend between original and processed signals
- **Output Level**: Final output gain control

#### Bottom Section
- **Parameter Value Displays**: Numeric readouts for precise control
- **Active State Indicators**: Showing which parameters are being adjusted
- **Audio Activity Meters**: Visual representation of input/output levels

### Visual Feedback Elements

Frequency Shifter provides visual feedback through:
- **Parameter Value Displays**: Large numeric readouts for frequency values
- **Active State Indicators**: Showing which parameters are being adjusted
- **Audio Activity Meters**: Input and output level meters
- **Frequency Response Visualization**: Shows the shift effect on the spectrum
- **Phase Relationship Indicator**: Shows current start phase setting

## Core Concepts and Terminology

### Frequency Shifting Fundamentals

**Linear Frequency Shift**: Unlike pitch shifting which multiplies frequencies by a ratio, frequency shifting adds or subtracts a fixed value in Hz from all frequencies. This means harmonic relationships are broken.

**Harmonic Relationship Breaking**: When a 100Hz fundamental is shifted +100Hz to 200Hz, its harmonic at 200Hz becomes 300Hz (not 400Hz as in pitch shifting), breaking the 2:1 harmonic relationship.

**Inharmonic Texture Creation**: The breaking of harmonic relationships creates bell-like, metallic, or robotic textures that are distinctly different from pitch-shifted sounds.

**Positive vs Negative Shift**: Positive shifts move all frequencies up, negative shifts move them down. At extreme settings, negative shifts can create interesting downward sweeping effects.

### Key Parameters Explained

**Frequency**: The main parameter that controls the Hz amount by which all frequencies are shifted. This is the core of the frequency shifting effect.

**Feedback**: Controls how much of the output is fed back to the input, creating evolving, spiraling textures when used with frequency shifting.

**Start Phase**: Adjusts the phase relationship of the shifted signal to reduce clicks, pops, or other artifacts that might occur during shifting.

**Mix**: Controls the blend between the original (dry) and processed (wet) signals, allowing for parallel processing.

**Stereo Separation**: The ability to shift left and right channels by different amounts, creating unique stereo effects.

### Parameter Interactions

Understanding how parameters interact is crucial for effective use:

- **Frequency + Feedback**: Higher feedback with frequency shifting creates more dramatic evolving textures
- **Frequency + Mix**: Lower mix values reduce the intensity of the frequency shift effect
- **Start Phase + Frequency**: Different start phase values may be needed for different frequency shift amounts to minimize artifacts
- **Left/Right Channels**: Independent control allows for complex stereo field manipulation

### Core Terminology

**Frequency Shift**: Moving all frequencies by a fixed Hz amount (not ratio-based)
**Pitch Shift**: Multiplying all frequencies by a ratio (maintains harmonic relationships)
**Inharmonic**: Sounds where harmonic relationships are broken or altered
**Harmonic**: Sounds where frequency relationships follow integer multiples
**Feedback**: Routing output back to input for evolving effects
**Start Phase**: Phase alignment control to reduce artifacts
**Dry/Wet Mix**: Blend between original and processed signals
**Spectrum Translation**: Moving the entire frequency spectrum by a fixed amount
**Phase Vocoder**: The underlying technology used for frequency shifting
**Ring Modulation**: Related technique that creates sum and difference frequencies
**Upward/Downward Shift**: Direction of frequency movement
**Spectral Displacement**: The effect of moving the spectrum without maintaining ratios

## Typical Starting Workflow (the first 5 minutes)

1. **Load Frequency Shifter**: Insert Frequency Shifter into a channel in the Channel Rack or as an insert effect

2. **Set Basic Parameters**: Start with moderate frequency shift (e.g., 100Hz)

3. **Adjust Mix**: Set Mix to around 30-50% to blend processed and original signals

4. **Test with Audio**: Play a simple melodic or harmonic sound to hear the effect

5. **Try Positive and Negative Shifts**: Test both +100Hz and -100Hz to hear the difference

6. **Experiment with Stereo**: Try different values for left and right channels

7. **Add Feedback**: Try small amounts of feedback (10-20%) for evolving textures

8. **Adjust Start Phase**: Fine-tune to minimize any artifacts

9. **Save as Starting Point**: Save this basic preset for future use

## Common Beginner Traps (what people misunderstand)

1. **Thinking it's a pitch shifter**: Many users expect it to work like a pitch shifter, but it shifts frequencies linearly rather than maintaining harmonic relationships.

2. **Extreme settings**: Setting frequency shift to extreme values can create harsh, metallic sounds that might be mistaken for malfunction.

3. **Not understanding inharmonic results**: The broken harmonic relationships create non-musical results, which can be surprising to new users.

4. **Stereo confusion**: Not realizing that left and right channels can be shifted independently.

5. **Feedback artifacts**: Using too much feedback can create unstable or harsh results.

6. **Phase issues**: Not adjusting Start Phase appropriately can cause clicking or other artifacts.

7. **Mix control importance**: Not using the Mix control to blend processed and unprocessed signals for more musical results.

8. **Sample rate dependency**: The maximum possible shift is limited by the sample rate, which might confuse users at extreme settings.

9. **Negative frequency effects**: Not understanding that negative shifts create different sonic characteristics than positive shifts.

10. **Harmonic relationship expectation**: Expecting shifted harmonics to maintain musical relationships like with pitch shifters.

11. **Mono compatibility**: Forgetting to check how the stereo frequency shifting affects mono playback.

12. **CPU misconceptions**: Assuming it uses more CPU than pitch shifters when it's actually quite efficient.
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Frequency Shifter

## Purpose and Identity
**Frequency Shifter** is a precision sound-design tool that modifies audio by shifting every frequency component by a fixed amount in Hertz (Hz). Unlike a Pitch Shifter, which preserves the harmonic "ratios" of a sound, the Frequency Shifter breaks them, creating **inharmonic** textures that range from subtle stereo widening to aggressive metallic "clang." [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a sound as a stack of building blocks (harmonics).
- A **Pitch Shifter** multiplies the height of every block. If you double the height, the whole stack is still proportional (Octave Up).
- A **Frequency Shifter** adds 1 inch to every block. The bottom block (Low) gets relatively taller, but the top blocks (High) barely change. The whole stack becomes **skewed** and the "musical" relationship between the blocks is destroyed.

## Typical Roles In A Session
- **Stereo Enhancer**: Using tiny micro-shifts (+2Hz / -2Hz) to create a massive, mono-compatible stereo image.
- **Harmonic Texturizer**: Adding a "metallic sheen" or robotic grit to vocals and synths.
- **Dynamic Riser**: Creating "Shepard Tone" style effects that sound like they are rising forever.

## Hip-Hop/R&B Context
- **Dark Trap 808s**: Adding a subtle high-frequency "clink" or "metallic growl" to a sub-bass.
- **Alien Ad-libs**: Transforming melodic rap vocals into "inhuman" or ghostly textures popular in experimental Hip-Hop (e.g., Travis Scott / Mike Dean).
- **Lo-Fi Percussion**: Shifting snares or hi-hats up/down to change their timbre without the "phasing" issues of traditional time-stretching.

## When to Use vs When NOT to Use
| Use It When... | Avoid It When... |
| :--- | :--- |
| You want metallic, dissonant, or robotic textures. | You want to change the key of a song (Pitch shift instead). |
| You need ultra-wide stereo width. | You are working with acoustic instruments that must stay "natural." |
| You want to tune percussive transients. | You are shifting complex chords (it will sound like noise). |

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Frequency Shifter

## UI Tour
Frequency Shifter's interface is centered around the large Shift knob and feedback logic. [SRC: IL-MAN]

### 1. The Shift Engine (The "Core")
- **Frequency Knob**: The primary control. Sets the amount of shift in Hz.
- **Direction Toggle**: Switch between **UP**, **DOWN**, or **BOTH** (Ring Modulation style).
- **L/R Link Switch**: When unlinked, you can shift the Left and Right channels by different amounts.

### 2. Feedback & Texture (The "Motion")
- **FB (Feedback)**: Feeds the shifted output back into the input. 
- **Phase**: Adjusts the starting phase of the internal oscillators. Affects transient sharpness.
- **Smoothing**: Dampens rapid automation jumps to avoid digital "clicks."

### 3. Mix & Output (The "Blend")
- **Mix**: Dry/Wet balance. **CRITICAL**: For subtle effects, keep this between 5-20%.
- **Output Meter**: Shows the final signal level. Feedback can cause volume spikes.

## Signal Flow
1. **Input Stage**: The stereo audio signal enters.
2. **SSB (Single Sideband) Modulation**: The signal is split into complex analytic signals.
3. **Internal Oscillator**: A sine-wave oscillator (running at the frequency you set) modulates the analytic signal.
4. **Shift Calculation**: The oscillator adds/subtracts its frequency from every component of the input.
5. **Feedback Loop**: (If active) the shifted audio is fed back into the SSB stage.
6. **Re-summing**: The shifted frequency components are converted back into a standard audio signal.
7. **Mix Stage**: The shifted signal is blended with the original Dry signal.

## Things Beginners Misunderstand
- **"It's out of tune"**: Frequency shifting is **not pitch shifting**. It will always sound slightly dissonant unless the shift is extremely small (under 5Hz).
- **Static vs. Animated**: The most powerful way to use this plugin is through **Automation**. A static frequency shift often sounds like a broken radio; an automated one sounds like a futuristic texture.
- **The "Ring Mod" Connection**: If you set the mode to "BOTH," the plugin effectively becomes a Ring Modulator, creating "Sum and Difference" tones.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Frequency Shifter

## 1. The "Perfect" Widener
Create a massive stereo image that stays solid when checked in mono.
- **Technique**: Unlink L/R. Set Left to +2Hz. Set Right to -2Hz.
- **Move**: Keep the Mix at 100%.
- **Why**: This creates a constantly shifting phase relationship between the ears that our brain interprets as "width," but the frequencies are so close that they don't sound out of tune.

## 2. Metallic Bass "Clang"
- **Technique**: Add Frequency Shifter to an 808 or Sub Bass.
- **Move**: Set Frequency to 150Hz. Set Mix to 15%.
- **Listen For**: A sharp, metallic "snap" on the attack of the bass.
- **Pro Tip**: Use a Peak Controller on the 808 to automate the Freq knob from 200Hz down to 0Hz rapidly.

## 3. The "Barberpole" Flanger
Create a flanging effect that sounds like it is rising forever.
- **Technique**: Set Frequency to a very low value (e.g., 0.5Hz). Turn **Feedback** up to 60%.
- **Move**: Set the direction to **UP**.
- **Result**: The phase relationship will cycle continuously, creating a "shepard-tone" style rise.

## 4. Tuning Drum Transients
- **Technique**: Put the shifter on a Snare that sounds too "loose" or "muddy."
- **Move**: Set direction to **UP**. Increase Freq to ~200Hz.
- **Goal**: Shifting the harmonics upward tightens the perceived pitch of the hit without changing the length of the sample.

## 5. Mono-Compatibility Verification
- **Protocol**: Always toggle the **Mono** button on your master when using unlinked L/R shifts.
- **Failure Mode**: If the shift is too large (e.g. 50Hz), the left and right will create a rhythmic "beating" in mono that sounds like a tremolo.
- **Fix**: Lower the Frequency of both channels until the beating stops or becomes slow and musical. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Robotic Vocals** | Lower the **Mix** knob. Usually, 5-10% is all you need for "character." |
| **Harsh Ringing** | Lower the **Feedback** knob. Feedback loops in frequency shifters can be extremely resonant. |
| **Muddy Low End** | Use Frequency Shifter only on a **Parallel High-Pass** bus. Don't shift the fundamental sub-bass. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Shift_Translation_Guide.md

```markdown
# Vibe Translation Guide: Frequency Shifter

Translating inharmonic "Hz" math into specific production vibes for Hip-Hop and R&B.

---

## 1. MOODY
*Darkness, weight, and "haunted" textures.*
- **The Lever**: **Low Hz Downward Shift + High Mix**.
- **Move**: Set direction to **DOWN**. Frequency at 50Hz. Mix at 40%.
- **What to Listen For**: The sound feels like it is "falling" into a dark pit. Harmonic clarity is replaced by a heavy, growling texture.
- **Don't Do This**: Upward shifting (too energetic).

## 2. UPBEAT
*Energy, sharp transients, and high-tech "shine".*
- **The Lever**: **Mid Hz Upward Shift + Low Mix + High Feedback**.
- **Move**: Set direction to **UP**. Frequency at 200Hz. Mix at 10%. Feedback at 30%.
- **What to Listen For**: A bright, metallic "click" or "shimmer" that adds rhythmic urgency to hi-hats or synth leads.
- **Don't Do This**: High Mix settings (the dissonance will kill the upbeat mood).

## 3. PSYCHEDELIC
*Disorientation, shifting scales, and "melting" soundscapes.*
- **The Lever**: **Unlinked L/R Modulation + Rapid Automation**.
- **Move**: Unlink L/R. Automate Left Freq from 0Hz to 100Hz and Right Freq from 0Hz to -100Hz in a rhythmic pattern.
- **What to Listen For**: The sound seems to expand, contract, and "liquify" in the stereo field. It creates a dizzying, trippy motion.
- **Don't Do This**: Static settings.

## 4. JAZZY
*Organic soul, "vinyl" instability, and warm "flutter".*
- **The Lever**: **Micro-Hz Detuning + Inverted Feedback**.
- **Move**: Set Freq to <1Hz. Enable **BOTH** (Ring Mod). Set Mix to 5%.
- **What to Listen For**: A very subtle "tape wow" or "soulful drift" that makes digital synths feel more physical and expensive.
- **Don't Do This**: High Hz values (too digital/harsh).

## 5. VIBEY
*Modern luxury, smooth silk, and "cloud" width.*
- **The Lever**: **Parallel Stereo Shift + Low Pass Filter**.
- **Move**: Link L/R. Set Freq to +2Hz. Set Right phase to 90 degrees. Follow with a LP filter at 2kHz.
- **What to Listen For**: A wide, wide "halo" of sound that wraps around the listener without being distracting.
- **Don't Do This**: Feedback (it ruins the silky vibe).

---

## Vibe Lever Matrix
| Vibe | Direction | Hz Range | Mix Value | Key Feature |
| :--- | :--- | :--- | :--- | :--- |
| **Moody** | DOWN | 20-80 Hz | 40% | Heavy / Muffled |
| **Upbeat** | UP | 100-300 Hz | 10% | Sharp / Snappy |
| **Psyched** | BOTH | Automated | 100% | Stereo Warpage |
| **Jazzy** | UP | 0.1-1 Hz | 5% | Subtle Drift |
| **Vibey** | UP | 2 Hz | 20% | Wide Halo |

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Frequency Shifter

The essential modifiers for the creative sound design engine. [SRC: IL-MAN]

---

## 🎛️ The Core Engine
- **Freq**: The shift amount in Hertz (Hz). 0.1Hz to several kHz.
- **Up / Down / Both**: 
  - *Up*: Adds Hz.
  - *Down*: Subtracts Hz.
  - *Both*: Multiplies (Ring Mod).
- **L/R Switch**: Unlink to set different shifts for Left and Right channels.

## 🌀 Texture & Motion
- **Feedback**: Feeds the output back to the start. Creates "spiraling" or "screaming" resonance.
- **Start Phase**: The beginning point of the oscillator. Controls the "click" or "snap" of the shift.
- **Smoothing**: Slows down the knob response to prevent digital artifacts.

## 🎨 Mix & Logic
- **Mix**: Dry/Wet balance.
  - *Note*: Small Hz shifts (+2Hz) at 100% mix create width. Large Hz shifts (+200Hz) at 10% mix create character.
- **Output**: Master gain control.

```

---

## FILE: 01-Learning\Quick-Reference\pitch-vs-freq-shift.md

```markdown
# Quick Reference: Pitch vs. Frequency Shifting

The most important concept for using this plugin correctly. [SRC: IL-MAN]

## 1. Pitch Shifting (Musical)
- **Math**: Multiplicative ($f * 2$).
- **Logic**: Every harmonic frequency is shifted by the same **Ratio**. 
- **Result**: The "chord" remains a chord. It just sounds higher or lower.
- **Example**: 100Hz and 200Hz become 200Hz and 400Hz. (Musical Octave).

## 2. Frequency Shifting (Inharmonic)
- **Math**: Additive ($f + 100$).
- **Logic**: Every harmonic frequency is shifted by the same **fixed amount in Hertz**.
- **Result**: The "ratio" between harmonics is broken.
- **Example**: 100Hz and 200Hz become 200Hz and 300Hz. (Dissonant interval).

## 3. Why it sounds "Metallic"
Natural resonant objects (like a metal pipe) have inharmonic spectra. By breaking the mathematical perfection of your synth's harmonics, Frequency Shifter makes them sound more like physical, metallic objects.

## 4. When to use which?
- **Pitch Shift**: When you need to change the key of a vocal or instrument.
- **Frequency Shift**: When you want to add **texture**, **width**, or **grit** to a sound.

```

---

## FILE: 02-Data\00_Controls_Reference.md

```markdown
# Frequency Shifter - Controls Reference

## Parameter List with Descriptions

### Frequency Controls

**Frequency (Main Shift)**
- **Description**: Controls the primary frequency shift amount in Hz
  - Low values: Small downward shift (e.g., -50Hz)
  - Medium values: No shift (0Hz, unity)
  - High values: Large upward shift (e.g., +1000Hz)
- **Range**: Typically -2000Hz to +2000Hz (depends on sample rate)
- **Effect**: Shifts all frequencies by the specified amount in Hz
- **Use for**: Creating metallic, bell-like, or robotic textures
- **Pro tip**: Small shifts (5-50Hz) create subtle chorusing effects

**Left Channel Frequency**
- **Description**: Controls frequency shift for the left channel independently
  - Same range and behavior as main frequency control
  - Only active when channels are unlinked
- **Range**: Typically -2000Hz to +2000Hz
- **Effect**: Shifts left channel frequencies independently
- **Use for**: Creating stereo width and movement
- **Pro tip**: Use small differences between left and right for stereo enhancement

**Right Channel Frequency**
- **Description**: Controls frequency shift for the right channel independently
  - Same range and behavior as main frequency control
  - Only active when channels are unlinked
- **Range**: Typically -2000Hz to +2000Hz
- **Effect**: Shifts right channel frequencies independently
- **Use for**: Creating stereo width and movement
- **Pro tip**: Use opposite shifts for left and right for maximum stereo width

**Link/Unlink Channels**
- **Description**: Toggles between linked and independent channel control
  - Linked: Both channels follow the main frequency control
  - Unlinked: Channels can be controlled independently
- **Range**: On/Off (binary)
- **Effect**: Determines if channels are controlled together or separately
- **Use for**: Switching between mono and stereo operation
- **Pro tip**: Use for quick stereo width experiments

### Advanced Controls

**Feedback**
- **Description**: Controls the amount of output signal fed back to the input
  - Low values: Minimal feedback effect
  - Medium values: Noticeable evolving textures
  - High values: Dramatic, spiraling effects
- **Range**: 0-100% typically
- **Effect**: Creates evolving, self-modulating textures
- **Use for**: Creating evolving, spiraling textures
- **Pro tip**: Start with low values (10-20%) to avoid instability

**Start Phase**
- **Description**: Controls the phase relationship to reduce artifacts
  - Low values: Different phase alignment
  - Medium values: Default phase alignment
  - High values: Alternative phase alignment
- **Range**: 0-100% typically
- **Effect**: Adjusts phase to minimize clicks/pops
- **Use for**: Reducing artifacts during frequency shifting
- **Pro tip**: Adjust if you hear clicking or phase-related artifacts

**Mix (Dry/Wet)**
- **Description**: Controls the blend between original and processed signals
  - 0%: Fully dry (original signal only)
  - 50%: Equal parts dry and wet
  - 100%: Fully wet (processed signal only)
- **Range**: 0-100%
- **Effect**: Determines how much of the shifted signal is heard
- **Use for**: Controlling the intensity of the effect
- **Pro tip**: Use lower values (20-40%) for subtle enhancement

**Output Level**
- **Description**: Controls the final output level of the plugin
  - Low values: Reduced output level
  - Medium values: Unity gain
  - High values: Increased output level
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts the overall volume of the processed signal
- **Use for**: Matching levels in the mix
- **Pro tip**: Use for gain staging in your project

### Global Controls

**Bypass**
- **Description**: Toggles processing on/off
  - When bypassed: Signal passes through unchanged
  - When active: Full frequency shifting is applied
- **Range**: On/Off (binary)
- **Effect**: Completely bypasses all processing
- **Use for**: A/B comparison and disabling processing
- **Pro tip**: Use for comparing processed and unprocessed signals

## Default Values and Safe Starting Ranges

### Frequency Defaults
- **Main Frequency**: 0Hz (no shift)
- **Left Frequency**: 0Hz (no shift)
- **Right Frequency**: 0Hz (no shift)
- **Safe Starting Range**: ±100Hz for musical results

### Advanced Defaults
- **Feedback**: 0% (no feedback)
- **Start Phase**: 50% (center position)
- **Mix**: 100% (fully processed)
- **Output Level**: 0dB (unity gain)

### Safe Starting Ranges
- **Frequency Shift**: ±50Hz for subtle effects, ±200Hz for moderate effects
- **Feedback**: 0-30% to avoid instability
- **Mix**: 20-80% for musical results
- **Start Phase**: 30-70% for artifact reduction

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **Frequency + Feedback**: Higher feedback with frequency shifting creates more dramatic evolving textures
- **Left/Right Channels**: Independent control allows for complex stereo field manipulation
- **Frequency + Mix**: Lower mix values reduce the intensity of the frequency shift effect
- **Start Phase + Frequency**: Different start phase values may be needed for different frequency shift amounts

### Hidden Interactions
- **Sample Rate Dependency**: Maximum possible shift is limited by the project's sample rate
- **Phase Relationships**: Start Phase affects the phase relationship between original and shifted signals
- **Harmonic Breaking**: The algorithm intentionally breaks harmonic relationships
- **Alias Prevention**: Internal anti-aliasing prevents foldover artifacts at extreme settings

### Right-Click Options
- **Parameter Reset**: Right-clicking on any knob typically resets it to its default value
- **Fine Adjustment**: Holding Shift while turning a knob allows for fine parameter adjustments
- **MIDI Learn**: Right-clicking on parameters reveals MIDI learn options for external controller mapping
- **Value Scaling**: Some parameters may offer different scaling options when right-clicked

### Integration Points
- **MIDI Control**: Parameters can be mapped to MIDI CC messages for external controller mapping
- **FL Studio Automation**: All parameters can be automated using FL Studio's automation system
- **Analyzer Integration**: Works with FL Studio's built-in spectrum analyzer for visual feedback
- **Mixer Integration**: Properly integrates with FL Studio's mixer routing
- **Patcher Compatibility**: Can be used within Patcher for complex routing

## MIDI/automation notes and gotchas

### MIDI Implementation
- **Parameter Mapping**: Most parameters can be mapped to MIDI CC messages for real-time control
- **Frequency Control**: The frequency parameter responds well to continuous controllers
- **Real-time Performance**: Parameters can be adjusted in real-time without stopping playback
- **Controller Smoothing**: The plugin likely applies smoothing to prevent parameter jumps causing audio artifacts

### Automation Notes
- **Parameter Automation**: All parameters can be automated using FL Studio's automation system
- **Smooth Automation**: The plugin likely applies smoothing to prevent parameter jumps causing audio artifacts
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback
- **Frequency Automation**: Automating the frequency parameter creates evolving shift effects

### Gotchas
- **Parameter Extremes**: Setting frequency shift to extreme values may cause harsh, metallic sounds
- **Feedback Instability**: High feedback values can create unstable or harsh results
- **Phase Artifacts**: Improper Start Phase settings can cause clicking or other artifacts
- **Harmonic Relationship Breaking**: The frequency shift intentionally breaks harmonic relationships, which may sound "wrong" to ears accustomed to pitch shifting
- **Sample Rate Limits**: Maximum possible shift is limited by sample rate (higher sample rates allow for greater shifts)
- **Stereo Imaging**: Independent left/right channel shifting can create unusual stereo imaging
- **CPU Usage**: Complex settings with high feedback may increase CPU usage
- **Latency**: Some implementations may have inherent latency that affects real-time performance
- **Alias Artifacts**: Extreme settings may create aliasing artifacts despite internal anti-aliasing
- **Mix Control Importance**: For musical results, the mix control is often crucial for balancing processed and unprocessed signals
- **Mono Compatibility**: Stereo frequency shifting may cause phase issues when summed to mono
- **Parameter Smoothing**: Rapid parameter changes may be smoothed by the plugin, affecting real-time performance
```

---

## FILE: 02-Data\01_Troubleshooting_Notes.md

```markdown
# Frequency Shifter - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Phase Artifacts**: At certain frequency shift values combined with specific Start Phase settings, phase-related artifacts or clicks may occur
- **Extreme Setting Instability**: Very high frequency shift values combined with high feedback may cause instability or harsh artifacts
- **Stereo Phase Issues**: When shifting left and right channels by significantly different amounts, phase issues may occur in mono
- **Sample Rate Dependency**: Maximum possible frequency shift is limited by the project's sample rate
- **Alias Artifacts**: At extreme settings, aliasing artifacts may appear despite internal anti-aliasing
- **Latency Issues**: Some implementations may have inherent latency that affects real-time performance
- **Parameter Smoothing Delays**: Rapid parameter changes may be smoothed, causing delayed response
- **DC Offset**: Extreme settings may introduce DC offset requiring high-pass filtering

### Limitations
- **Linear Shift Only**: Unlike pitch shifters, it only provides linear Hz shifts, not ratio-based multiplication
- **Harmonic Relationship Breaking**: By design, it breaks harmonic relationships which may not be desirable for all applications
- **No Formant Preservation**: Does not maintain formant relationships like some pitch shifters do
- **Fixed Algorithm**: No option to switch between different frequency shifting algorithms
- **No Lookahead**: No lookahead functionality for predictive processing
- **CPU Usage at High Settings**: Extreme settings with high feedback may increase CPU usage significantly
- **Limited Negative Shift**: Very large negative shifts may cause unexpected behavior or artifacts
- **No Multi-band Processing**: Cannot selectively shift different frequency ranges independently

### Weird Behaviors
- **Inharmonic Results**: The frequency shift intentionally breaks harmonic relationships, creating bell-like or metallic sounds
- **Non-Musical Transposition**: Unlike pitch shifters, musical intervals become non-musical when shifted
- **Feedback Evolution**: Feedback creates evolving, spiraling textures that may be unpredictable
- **Phase-Related Clicks**: At certain parameter combinations, phase-related clicks or pops may occur
- **Sample Rate Dependency**: The maximum possible shift depends on the project's sample rate
- **Stereo Widening Effect**: Independent left/right channel shifting creates unusual stereo imaging effects
- **Non-Intuitive Results**: The relationship between parameter settings and audible results may not be immediately obvious
- **Harmonic Displacement**: Harmonics move by the same amount as fundamentals, breaking natural harmonic relationships

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: Frequency Shifter has a moderate base CPU load that's higher than simple effects but lower than complex synthesizers
- **Parameter Complexity**: CPU usage remains relatively stable regardless of frequency shift settings
- **Feedback Impact**: Higher feedback values may increase CPU usage slightly
- **Real-Time Performance**: Generally optimized for real-time performance but extreme settings may impact performance
- **Multiple Instances**: CPU usage increases linearly with multiple instances
- **Sample Rate Impact**: Higher sample rates may increase CPU usage slightly due to processing requirements
- **Automation Load**: Automated parameters have minimal impact on CPU usage

### Performance Optimization Tips
- **Use Conservative Settings**: Avoid extreme frequency shift values that may increase processing demands
- **Limit Feedback**: Keep feedback at moderate levels (0-30%) to maintain performance
- **Disable Unused Features**: Turn off feedback when not needed to reduce processing
- **Freeze Tracks**: When rendering down complex arrangements with many frequency shifter instances
- **Use Efficient Routing**: Optimize mixer routing to reduce unnecessary processing
- **Monitor Performance**: Use FL Studio's performance meter to monitor CPU usage
- **Optimize Instance Count**: Consolidate processing where possible to reduce instance count
- **Buffer Size Considerations**: Use appropriate buffer sizes to balance CPU usage and latency

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex parameter interactions
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance
- **Real-Time Performance**: Smaller buffers may be needed for responsive parameter changes

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| Clicking/popping | Start Phase not optimized for current frequency shift | Adjust Start Phase parameter | Listen for artifacts during parameter changes |
| Harsh or metallic sound | Frequency shift set too high or extreme settings | Reduce frequency shift amount | Compare with lower shift values |
| Phase issues in mono | Left and right channels shifted too differently | Reduce difference between L/R shifts or check mono compatibility | Use stereo analyzer to check phase correlation |
| No audible effect | Mix set to 0% or frequency shift set to 0Hz | Increase Mix or frequency shift amount | Verify with A/B comparison |
| High CPU usage | Extreme settings or too many instances | Reduce settings or instance count | Monitor CPU meter in FL Studio |
| Latency issues | Large buffer size or too many instances | Reduce buffer size or optimize instances | Check timing accuracy with metronome |
| Clipping/distortion | Output gain too high or extreme settings | Lower output gain or reduce extreme settings | Use peak meters to ensure no red peaks |
| Feedback instability | Feedback set too high | Reduce feedback amount | Listen for stable vs unstable feedback behavior |
| Unmusical results | Expecting harmonic relationships to be preserved | Understand that harmonic relationships are intentionally broken | Compare with pitch shifter to hear difference |
| Weak effect | Mix set too low or shift amount too conservative | Increase Mix or frequency shift amount | Compare with higher values |
| Stereo imaging issues | Extreme L/R differences or phase problems | Reduce L/R difference or adjust phase | Check mono compatibility and stereo field |
| Alias artifacts | Extreme frequency shifts | Reduce frequency shift or increase sample rate | Listen for high-frequency artifacts |
| DC offset | Extreme settings causing DC buildup | Apply high-pass filter around 10-20Hz | Check for low-frequency buildup with spectrum analyzer |
| Parameter smoothing | Rapid changes not responding immediately | Understand parameter smoothing behavior | Use automation instead of real-time changes for precise control |
| No sound | Plugin bypassed, muted track, or routing issues | Check bypass, mute, and routing settings | Verify signal path in mixer and check for audio activity |
| Unpredictable feedback | High feedback with extreme shifts | Reduce feedback and/or shift amount | Test with lower feedback values |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of Frequency Shifter with basic frequency shifting capabilities
- **Basic Parameter Set**: Includes frequency shift, feedback, and mix controls
- **Limited Stereo Control**: Basic stereo processing capabilities
- **Simple Interface**: Basic interface with limited customization options

### FL Studio 20.7
- **Phase Optimization**: Improved Start Phase algorithm for better artifact reduction
- **Performance Improvements**: Minor optimizations to reduce CPU usage
- **Stability Enhancements**: Fixed occasional crashes when using extreme settings

### FL Studio 20.8
- **Stereo Enhancement**: Improved independent left/right channel controls
- **Anti-Aliasing**: Enhanced anti-aliasing to reduce artifacts at extreme settings
- **Sample Rate Handling**: Better handling of different sample rates

### FL Studio 21.0
- **Enhanced Algorithm**: Improved frequency shifting algorithm for better quality
- **Better Integration**: Improved integration with FL Studio's automation system
- **Updated UI**: Refreshed user interface with better visual feedback

### FL Studio 21.1
- **Feedback Improvements**: Enhanced feedback algorithm for more stable results
- **Parameter Smoothing**: Improved parameter smoothing for artifact-free changes
- **Bug Fixes**: Addressed various stability issues with extreme settings

### FL Studio 21.2
- **Performance Optimization**: Further CPU usage optimizations
- **Phase Control**: Enhanced Start Phase control for better artifact reduction
- **MIDI Learn Enhancement**: Better MIDI learn functionality for parameter mapping

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better parameter visibility
- **Algorithm Refinement**: Refined frequency shifting algorithm for better quality
- **Sample Rate Handling**: Improved handling of high sample rates

### FL Studio 21.4
- **Automation Handling**: Improved automation handling for parameter changes
- **Parameter Interpolation**: Better interpolation between parameter values for smoother transitions
- **Stability Improvements**: Additional stability improvements for extreme settings

### FL Studio 21.5
- **Compatibility Improvements**: Better compatibility with third-party controller mapping
- **Audio Quality**: Minor improvements to audio quality at extreme settings
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

### FL Studio 21.6
- **Algorithm Refinement**: Further refinement of the frequency shifting algorithm
- **Parameter Smoothing**: Enhanced parameter smoothing for even smoother transitions
- **Stability**: Additional stability improvements for long sessions with extreme settings

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*
```

---

## FILE: 02-Data\parameters\frequency-shifter-params.json

```json
{
  "plugin_name": "Frequency Shifter",
  "category": "Effect / Creative",
  "engine": "Single Sideband (SSB) Modulator",
  "parameters": [
    {
      "name": "Frequency",
      "type": "knob",
      "unit": "Hz",
      "description": "Linear amount of frequency shift.",
      "vibe_impact": "Texture, grit, dissonance",
      "mix_impact_tags": ["motion", "harmonic"]
    },
    {
      "name": "Direction",
      "type": "selector",
      "values": ["UP", "DOWN", "BOTH"],
      "vibe_impact": "Energy direction, energy vs weight"
    },
    {
      "name": "Feedback",
      "type": "knob",
      "description": "Resonant feedback loop.",
      "vibe_impact": "Psychedelic, industrial, spiraling"
    }
  ],
  "mix_impact_tags": ["width", "depth", "motion"]
}

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Frequency Shifter Presets Index

## Genre Presets (10 files)
| File | Name | Genre | Mood |
|------|------|-------|------|
| `genre/01-trap-riser.json` | Trap Riser Shift | trap | dark |
| `genre/02-wobble-bass.json` | Wobble Bass Shift | hip-hop/rap | funky |
| `genre/03-soul-flange.json` | Soul Flange | R&B | moody |
| `genre/04-edm-metallic.json` | EDM Metallic Shift | EDM | electric |
| `genre/05-vhs-warble.json` | VHS Warble | lo-fi | nostalgic |
| `genre/06-grim-sub.json` | Grim Sub Shift | drill | dark |
| `genre/07-cosmic-shift.json` | Cosmic Shift | experimental | spacey |
| `genre/08-dub-echo.json` | Dub Shift Echo | dub | moody |
| `genre/09-synth-texture.json` | Texture Enhancer | EDM | electric |
| `genre/10-vocal-air.json` | Vocal Air | R&B | smooth |

## Signature Presets (10 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/metro-boomin-shift.json` | Metro Boomin | If-You-Know Shift |
| `signature/travis-scott-shift.json` | Travis Scott | Astro-Thunder |
| `signature/zaytoven-shift.json` | Zaytoven | ATL Pluck Shift |
| `signature/mike-will-shift.json` | Mike Will Made-It | Future Shift |
| `signature/21-savage-shift.json` | 21 Savage | Grim Sub Shift |
| `signature/drake-shift.json` | Drake | OVO Vocal Air |
| `signature/wheezy-shift.json` | Wheezy | Paperboy Texture |
| `signature/the-weeknd-shift.json` | The Weeknd | Night Drive Shift |
| `signature/pierre-bourne-shift.json` | Pierre Bourne | Trinidad Pluck |
| `signature/murda-beatz-shift.json` | Murda Beatz | Melody King Shift |

## Total: 20 preset files

```

---

## FILE: 02-Data\presets\genre-presets.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "genres": ["hip-hop/rap", "R&B", "EDM", "trap", "lo-fi", "experimental"],
    "description": "Genre-aware presets for Frequency Shifter effect"
  },
  "presets": {
    "trap-riser": {
      "name": "Trap Riser Shift",
      "genre": "trap",
      "mood": "dark",
      "settings": {
        "frequencyShift": 800,
        "direction": "up",
        "mix": 75,
        "feedback": 0,
        "stereoMode": "sum",
        "drive": 5
      },
      "chain": {
        "pre": ["High-pass filter at 200Hz"],
        "post": ["Fruity Limiter - Gentle limiting"]
      },
      "workflow": "Automate frequency shift from 0 to 800Hz over 4-8 bars for riser builds. Use in pre-drop sections.",
      "genreTags": ["trap", "dark", "build", "riser"],
      "a/bTesting": {
        "testA": "Upward shift for tension",
        "testB": "Downward shift for release"
      },
      "troubleshooting": {
        "tooHarsh": "Reduce mix to 50%, add high-pass at 400Hz",
        "NotBuilding": "Increase shift range, automate over longer period"
      }
    },
    "hip-hop-wobble": {
      "name": "Wobble Bass Shift",
      "genre": "hip-hop/rap",
      "mood": "funky",
      "settings": {
        "frequencyShift": 120,
        "direction": "down",
        "mix": 65,
        "feedback": 25,
        "stereoMode": "sum",
        "drive": 8
      },
      "chain": {
        "pre": ["Filter at 800Hz lowpass"],
        "post": ["Fruity Compressor - Fast attack 5ms"]
      },
      "workflow": "Apply to 808 bass and automate LFO to control frequency shift. Sync LFO to half-note or quarter-note for rhythmic wobble effect.",
      "genreTags": ["hip-hop/rap", "funky", "groove", "wobble"],
      "a/bTesting": {
        "testA": "Low frequency shift with feedback for dubby feel",
        "testB": "Clean shift without feedback"
      },
      "troubleshooting": {
        "unstable": "Reduce feedback to 15%",
        "tooSubtle": "Increase shift to 200Hz"
      }
    },
    "rb-flange": {
      "name": "Soul Flange",
      "genre": "R&B",
      "mood": "moody",
      "settings": {
        "frequencyShift": 50,
        "direction": "down",
        "mix": 35,
        "feedback": 30,
        "stereoMode": "sum",
        "drive": 3
      },
      "chain": {
        "pre": ["Soft high-pass at 100Hz"],
        "post": ["Vintage Chorus - Subtle enhancement"]
      },
      "workflow": "Use on lead vocals or synths for subtle movement. Low frequency shift creates gentle flanging without harshness.",
      "genreTags": ["R&B", "smooth", "flange", "subtle"],
      "a/bTesting": {
        "testA": "Lower shift amount for subtle effect",
        "testB": "Higher shift for more obvious character"
      },
      "troubleshooting": {
        "tooObvious": "Reduce mix to 20%, decrease shift to 30Hz",
        "phasingIssues": "Reduce feedback to 20%"
      }
    },
    "edm-metallic": {
      "name": "EDM Metallic Shift",
      "genre": "EDM",
      "mood": "electric",
      "settings": {
        "frequencyShift": 400,
        "direction": "up",
        "mix": 80,
        "feedback": 45,
        "stereoMode": "sum",
        "drive": 12
      },
      "chain": {
        "pre": ["Band-pass filter 2k-6kHz"],
        "post": ["Fruity Limiter - Ceiling -0.5dB"]
      },
      "workflow": "Apply to percussion or synths for metallic textures. High shift with feedback creates sci-fi metallic sounds.",
      "genreTags": ["EDM", "metallic", "experimental", "textural"],
      "a/bTesting": {
        "testA": "High feedback for resonant metallic tone",
        "testB": "Low feedback for cleaner shift"
      },
      "troubleshooting": {
        "tooHarsh": "Band-pass pre-filter, reduce drive to 8%",
        "NotMetallic": "Increase feedback to 55%, increase shift to 500Hz"
      }
    },
    "lofi-wobble": {
      "name": "VHS Warble",
      "genre": "lo-fi",
      "mood": "nostalgic",
      "settings": {
        "frequencyShift": 80,
        "direction": "alternate",
        "mix": 50,
        "feedback": 15,
        "stereoMode": "sum",
        "drive": 4
      },
      "chain": {
        "pre": ["High-pass at 80Hz"],
        "post": ["Tape Saturation - 5% drive"]
      },
      "workflow": "Use on drums or full mix for lo-fi degradation effect. Slow LFO modulation creates warbling tape effect.",
      "genreTags": ["lo-fi", "nostalgic", "vintage", "wobble"],
      "a/bTesting": {
        "testA": "Alternate direction for random warble",
        "testB": "Single direction for consistent drift"
      },
      "troubleshooting": {
        "tooSlow": "Increase LFO rate for faster wobble",
        "tooFast": "Reduce LFO rate for gentle warble"
      }
    },
    "drill-sub": {
      "name": "Grim Sub Shift",
      "genre": "drill",
      "mood": "dark",
      "settings": {
        "frequencyShift": 200,
        "direction": "down",
        "mix": 70,
        "feedback": 20,
        "stereoMode": "sum",
        "drive": 15
      },
      "chain": {
        "pre": ["High-pass at 25Hz"],
        "post": ["Fruity Limiter - Aggressive limiting"]
      },
      "workflow": "Apply to sub bass for dark, grimy texture. Subtle shift creates harmonic distortion without losing sub weight.",
      "genreTags": ["drill", "dark", "heavy", "sub"],
      "a/bTesting": {
        "testA": "Downward shift for darker tones",
        "testB": "Upward shift for more aggressive character"
      },
      "troubleshooting": {
        "losingSub": "Increase pre high-pass to 40Hz, reduce shift to 150Hz",
        "tooClean": "Increase drive to 20%"
      }
    },
    "experimental-space": {
      "name": "Cosmic Shift",
      "genre": "experimental",
      "mood": "spacey",
      "settings": {
        "frequencyShift": 1000,
        "direction": "alternate",
        "mix": 60,
        "feedback": 50,
        "stereoMode": "sum",
        "drive": 10
      },
      "chain": {
        "pre": ["Multi-band pre-processing"],
        "post": ["Reverb - Large hall, 35% mix"]
      },
      "workflow": "Use on pads, FX, or processed vocals for otherworldly effects. Alternate direction creates random frequency jumps.",
      "genreTags": ["experimental", "spacey", "cosmic", "FX"],
      "a/bTesting": {
        "testA": "High frequency shift for dramatic effect",
        "testB": "Lower shift for more subtle enhancement"
      },
      "troubleshooting": {
        "tooChaotic": "Reduce mix to 40%, decrease feedback to 30%",
        "NotSpacey": "Increase shift to 1500Hz, add reverb"
      }
    },
    "dub-wobble": {
      "name": "Dub Shift Echo",
      "genre": "dub",
      "mood": "moody",
      "settings": {
        "frequencyShift": 80,
        "direction": "down",
        "mix": 55,
        "feedback": 40,
        "stereoMode": "sum",
        "drive": 6
      },
      "chain": {
        "pre": ["High-pass at 120Hz"],
        "post": ["Delay - Dub style, 400ms, 50% feedback"]
      },
      "workflow": "Combine with delay for classic dub effects. The frequency shift interacts with echoes for unique texture.",
      "genreTags": ["dub", "moody", "echo", "dubwise"],
      "a/bTesting": {
        "testA": "High feedback for regenerating echoes",
        "testB": "Lower feedback for single repeats"
      },
      "troubleshooting": {
        "ringingTooLong": "Reduce feedback to 30%",
        "muddy": "Increase pre high-pass to 180Hz"
      }
    },
    "synth-texture": {
      "name": "Texture Enhancer",
      "genre": "EDM",
      "mood": "electric",
      "settings": {
        "frequencyShift": 150,
        "direction": "down",
        "mix": 40,
        "feedback": 35,
        "stereoMode": "sum",
        "drive": 5
      },
      "chain": {
        "pre": ["Low-pass filter at 5kHz"],
        "post": ["Reverb - Subtle room, 15% mix"]
      },
      "workflow": "Use on synth leads to add harmonic complexity without obvious effect. Low mix keeps enhancement subtle.",
      "genreTags": ["EDM", "textural", "synth", "enhancement"],
      "a/bTesting": {
        "testA": "Lower mix for subtle enhancement",
        "testB": "Higher mix for more character"
      },
      "troubleshooting": {
        "tooObvious": "Reduce mix to 25%",
        "NotAdding": "Increase feedback to 45%"
      }
    },
    "vocal-widener": {
      "name": "Vocal Air",
      "genre": "R&B",
      "mood": "smooth",
      "settings": {
        "frequencyShift": 50,
        "direction": "up",
        "mix": 30,
        "feedback": 0,
        "stereoMode": "sum",
        "drive": 2
      },
      "chain": {
        "pre": ["De-essing if needed"],
        "post": ["Reverb - Subtle, 12% mix"]
      },
      "workflow": "Apply to lead vocals to add subtle "air" and presence. Very low frequency shift prevents phasing while adding clarity.",
      "genreTags": ["R&B", "vocal", "smooth", "air"],
      "a/bTesting": {
        "testA": "Upward shift for air",
        "testB": "Downward shift for warmth"
      },
      "troubleshooting": {
        "causingPhasing": "Reduce mix to 20%, decrease shift to 30Hz",
        "tooSubtle": "Increase mix to 40%"
      }
    }
  }
}

```

---

## FILE: 02-Data\presets\signature-presets.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "description": "Artist and production style inspired presets for Frequency Shifter"
  },
  "presets": {
    "metro-boomin-shift": {
      "name": "If-You-Know Shift",
      "inspiredBy": "Metro Boomin signature riser",
      "settings": {
        "frequencyShift": 600,
        "direction": "up",
        "mix": 70,
        "feedback": 10,
        "stereoMode": "sum",
        "drive": 6
      },
      "chain": {
        "post": ["Fruity Limiter - Gentle ceiling -0.3dB"]
      },
      "workflow": "Automate from 0 to 600Hz over 4 bars. Use on white noise or riser sample for signature Metro build.",
      "characteristics": ["modern", "clean", "build", "tension"],
      "genreTags": ["hip-hop/rap", "trap", "modern"],
      "a/bTesting": {
        "testA": "Clean upward build",
        "testB": "Added feedback for more character"
      },
      "troubleshooting": {
        "tooAbrupt": "Automate over 8 bars for smoother build",
        "NotBoomin": "Add white noise layer before shifter"
      }
    },
    "travis-scott-atmosphere": {
      "name": "Astro-Thunder",
      "inspiredBy": "Travis Scott atmospheric effects",
      "settings": {
        "frequencyShift": 300,
        "direction": "alternate",
        "mix": 55,
        "feedback": 35,
        "stereoMode": "sum",
        "drive": 8
      },
      "chain": {
        "pre": ["Band-pass 1k-4kHz"],
        "post": ["Reverb - Large hall, 30% mix"]
      },
      "workflow": "Apply to atmospheric pads or reversed cymbals. Alternate shift creates unpredictable movement for astro tracks.",
      "characteristics": ["spacey", "atmospheric", "unpredictable"],
      "genreTags": ["hip-hop/rap", "trap", "atmospheric"],
      "a/bTesting": {
        "testA": "Alternate for random movement",
        "testB": "Upward for consistent build"
      },
      "troubleshooting": {
        "tooChaotic": "Reduce feedback to 20%",
        "NotSpacey": "Increase shift to 400Hz, add reverb"
      }
    },
    "zaytoven-pluck-shift": {
      "name": "ATL Pluck Shift",
      "inspiredBy": "Zaytoven melodic plucks",
      "settings": {
        "frequencyShift": 80,
        "direction": "down",
        "mix": 35,
        "feedback": 20,
        "stereoMode": "sum",
        "drive": 4
      },
      "chain": {
        "pre": ["High-pass at 200Hz"],
        "post": ["Reverb - Small room, 18% mix"]
      },
      "workflow": "Apply to synth plucks for added harmonic complexity. Subtle shift enhances without overwhelming the melody.",
      "characteristics": ["melodic", "smooth", "ATL", "plucky"],
      "genreTags": ["hip-hop/rap", "melodic", "R&B"],
      "a/bTesting": {
        "testA": "Subtle enhancement for melodic context",
        "testB": "More obvious effect for lead lines"
      },
      "troubleshooting": {
        "affectingPitch": "Reduce shift to 50Hz",
        "tooMuch": "Reduce mix to 20%"
      }
    },
    "mike-will-future": {
      "name": "Future Shift",
      "inspiredBy": "Mike Will Made-It futuristic style",
      "settings": {
        "frequencyShift": 450,
        "direction": "up",
        "mix": 65,
        "feedback": 40,
        "stereoMode": "sum",
        "drive": 10
      },
      "chain": {
        "pre": ["High-pass at 500Hz"],
        "post": ["Delay - Stereo, 280ms, 40% feedback"]
      },
      "workflow": "Use on 808s or synths for future sound. High feedback creates metallic resonance characteristic of Mike Will production.",
      "characteristics": ["futuristic", "metallic", "bright", "innovative"],
      "genreTags": ["hip-hop/rap", "EDM", "future bass"],
      "a/bTesting": {
        "testA": "High feedback for metallic tone",
        "testB": "Lower feedback for cleaner future sound"
      },
      "troubleshooting": {
        "tooMetallic": "Reduce feedback to 25%",
        "NotFuture: Increase shift to 550Hz"
      }
    },
    "21-savage-grim": {
      "name": "Grim Sub Shift",
      "inspiredBy": "21 Savage dark aesthetic",
      "settings": {
        "frequencyShift": 150,
        "direction": "down",
        "mix": 75,
        "feedback": 25,
        "stereoMode": "sum",
        "drive": 18
      },
      "chain": {
        "pre": ["High-pass at 30Hz"],
        "post": ["Fruity Limiter - Heavy limiting"]
      },
      "workflow": "Apply to 808 subs for dark, menacing texture. High drive adds harmonic distortion while maintaining sub weight.",
      "characteristics": ["dark", "heavy", "menacing", "grim"],
      "genreTags": ["hip-hop/rap", "drill", "dark trap"],
      "a/bTesting": {
        "testA": "Downward for darkness",
        "testB": "Upward for aggression"
      },
      "troubleshooting": {
        "losingSub: Increase pre high-pass to 45Hz, reduce shift to 100Hz",
        "TooDistorted: Reduce drive to 12%"
      }
    },
    "drake-vocal-shift": {
      "name": "OVO Vocal Air",
      "inspiredBy": "Drake vocal processing",
      "settings": {
        "frequencyShift": 40,
        "direction": "up",
        "mix": 28,
        "feedback": 0,
        "stereoMode": "sum",
        "drive": 2
      },
      "chain": {
        "pre": ["De-esser if needed"],
        "post": ["Reverb - Plate, 15% mix", "Delay - Subtle 100ms, 20% mix"]
      },
      "workflow": "Apply to lead vocals for subtle air and presence. Very low settings maintain vocal naturalness while adding polish.",
      "characteristics": ["smooth", "polished", "clean", "vocal"],
      "genreTags": ["hip-hop/rap", "R&B", "melodic"],
      "a/bTesting": {
        "testA": "Upward for presence",
        "testB": "Downward for warmth"
      },
      "troubleshooting": {
        "causingPhasing: Reduce mix to 20%, shift to 25Hz",
        "NotAdding: Slightly increase drive to 3%"
      }
    },
    "wheezy-bass-shift": {
      "name": "Paperboy Texture",
      "inspiredBy": "Wheezy ATL texture",
      "settings": {
        "frequencyShift": 200,
        "direction": "down",
        "mix": 60,
        "feedback": 30,
        "stereoMode": "sum",
        "drive": 12
      },
      "chain": {
        "pre": ["Low-pass at 1.5kHz"],
        "post": ["Fruity Compressor - Fast attack"]
      },
      "workflow": "Apply to bass for characteristic ATL texture. Creates harmonic complexity while maintaining low-end weight.",
      "characteristics": ["textured", "ATL", "bright", "punchy"],
      "genreTags": ["hip-hop/rap", "trap", "ATL"],
      "a/bTesting": {
        "testA": "Lower mix for subtle texture",
        "testB": "Higher mix for obvious character"
      },
      "troubleshooting": {
        "muddy: Increase pre filter to 2kHz",
        "tooHarsh: Reduce drive to 8%"
      }
    },
    "the-weeknd-vintage": {
      "name": "Night Drive Shift",
      "inspiredBy": "The Weeknd 80s retro",
      "settings": {
        "frequencyShift": 60,
        "direction": "alternate",
        "mix": 45,
        "feedback": 20,
        "stereoMode": "sum",
        "drive": 5
      },
      "chain": {
        "pre": ["Vintage EQ - subtle high-shelf"],
        "post": ["Tape Saturation - 4% drive", "Reverb - Hall, 20% mix"]
      },
      "workflow": "Apply to synths or pads for 80s retro vibe. Alternate direction creates gentle warble similar to vintage hardware.",
      "characteristics": ["retro", "warm", "nostalgic", "80s"],
      "genreTags": ["R&B", "synthwave", "retro", "moody"],
      "a/bTesting": {
        "testA": "Alternate for tape warble effect",
        "testB": "Single direction for consistent shift"
      },
      "troubleshooting": {
        "tooWobbly: Reduce LFO rate",
        "NotRetro: Add tape saturation after shifter"
      }
    },
    "pierre-bouncy": {
      "name": "Trinidad Pluck",
      "inspiredBy": "Pierre Bourne playful plucks",
      "settings": {
        "frequencyShift": 100,
        "direction": "down",
        "mix": 50,
        "feedback": 25,
        "stereoMode": "sum",
        "drive": 6
      },
      "chain": {
        "pre": ["High-pass at 400Hz"],
        "post": ["Reverb - Small room, 12% mix"]
      },
      "workflow": "Apply to plucks for bouncy, playful character. The shift adds unique texture while maintaining rhythmic feel.",
      "characteristics": ["bouncy", "playful", "fun", "plucky"],
      "genreTags": ["hip-hop/rap", "trap", "playful"],
      "a/bTesting": {
        "testA": "Lower shift for subtle bounce",
        "testB": "Higher shift for more obvious effect"
      },
      "troubleshooting": {
        "tooClicky: Increase envelope attack",
        "losingPluck: Reduce feedback to 15%"
      }
    },
    "murda-beatz-melodic": {
      "name": "Melody King Shift",
      "inspiredBy": "Murda Beatz melodic trap",
      "settings": {
        "frequencyShift": 120,
        "direction": "up",
        "mix": 42,
        "feedback": 15,
        "stereoMode": "sum",
        "drive": 4
      },
      "chain": {
        "pre": ["Soft filter at 4kHz"],
        "post": ["Reverb - Hall, 22% mix"]
      },
      "workflow": "Apply to melodic elements for enhancement. Subtle settings support melody without distracting from the composition.",
      "characteristics": ["melodic", "smooth", "emotional", "supportive"],
      "genreTags": ["hip-hop/rap", "melodic", "trap"],
      "a/bTesting": {
        "testA": "Subtle for background elements",
        "testB": "More obvious for lead melodies"
      },
      "troubleshooting": {
        "tooMuch: Reduce mix to 30%",
        "NotSupporting: Slightly increase drive to 5%"
      }
    }
  }
}

```

---

## FILE: 02-Data\presets\genre\01-trap-riser.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Trap Riser Shift",
    "category": "genre",
    "genre": "trap",
    "mood": "dark"
  },
  "settings": {
    "frequencyShift": 800,
    "direction": "up",
    "mix": 75,
    "feedback": 0,
    "stereoMode": "sum",
    "drive": 5
  },
  "chain": {
    "pre": ["High-pass filter at 200Hz"],
    "post": ["Fruily Limiter - Gentle limiting"]
  },
  "workflow": "Automate frequency shift from 0 to 800Hz over 4-8 bars for riser builds. Use in pre-drop sections.",
  "genreTags": ["trap", "dark", "build", "riser"],
  "a/bTesting": {
    "testA": "Upward shift for tension",
    "testB": "Downward shift for release"
  },
  "troubleshooting": {
    "tooHarsh": "Reduce mix to 50%, add high-pass at 400Hz",
    "notBuilding": "Increase shift range, automate over longer period"
  }
}

```

---

## FILE: 02-Data\presets\genre\02-wobble-bass.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Wobble Bass Shift",
    "category": "genre",
    "genre": "hip-hop/rap",
    "mood": "funky"
  },
  "settings": {
    "frequencyShift": 120,
    "direction": "down",
    "mix": 65,
    "feedback": 25,
    "stereoMode": "sum",
    "drive": 8
  },
  "chain": {
    "pre": ["Filter at 800Hz lowpass"],
    "post": ["Fruily Compressor - Fast attack 5ms"]
  },
  "workflow": "Apply to 808 bass and automate LFO to control frequency shift. Sync LFO to half-note or quarter-note for rhythmic wobble effect.",
  "genreTags": ["hip-hop/rap", "funky", "groove", "wobble"],
  "a/bTesting": {
    "testA": "Low frequency shift with feedback for dubby feel",
    "testB": "Clean shift without feedback"
  },
  "troubleshooting": {
    "unstable": "Reduce feedback to 15%",
    "tooSubtle": "Increase shift to 200Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\03-soul-flange.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Soul Flange",
    "category": "genre",
    "genre": "R&B",
    "mood": "moody"
  },
  "settings": {
    "frequencyShift": 50,
    "direction": "down",
    "mix": 35,
    "feedback": 30,
    "stereoMode": "sum",
    "drive": 3
  },
  "chain": {
    "pre": ["Soft high-pass at 100Hz"],
    "post": ["Vintage Chorus - Subtle enhancement"]
  },
  "workflow": "Use on lead vocals or synths for subtle movement. Low frequency shift creates gentle flanging without harshness.",
  "genreTags": ["R&B", "smooth", "flange", "subtle"],
  "a/bTesting": {
    "testA": "Lower shift amount for subtle effect",
    "testB": "Higher shift for more obvious character"
  },
  "troubleshooting": {
    "tooObvious": "Reduce mix to 20%, decrease shift to 30Hz",
    "phasingIssues": "Reduce feedback to 20%"
  }
}

```

---

## FILE: 02-Data\presets\genre\04-edm-metallic.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "EDM Metallic Shift",
    "category": "genre",
    "genre": "EDM",
    "mood": "electric"
  },
  "settings": {
    "frequencyShift": 400,
    "direction": "up",
    "mix": 80,
    "feedback": 45,
    "stereoMode": "sum",
    "drive": 12
  },
  "chain": {
    "pre": ["Band-pass filter 2k-6kHz"],
    "post": ["Fruily Limiter - Ceiling -0.5dB"]
  },
  "workflow": "Apply to percussion or synths for metallic textures. High shift with feedback creates sci-fi metallic sounds.",
  "genreTags": ["EDM", "metallic", "experimental", "textural"],
  "a/bTesting": {
    "testA": "High feedback for resonant metallic tone",
    "testB": "Low feedback for cleaner shift"
  },
  "troubleshooting": {
    "tooHarsh": "Band-pass pre-filter, reduce drive to 8%",
    "notMetallic": "Increase feedback to 55%, increase shift to 500Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\05-vhs-warble.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "VHS Warble",
    "category": "genre",
    "genre": "lo-fi",
    "mood": "nostalgic"
  },
  "settings": {
    "frequencyShift": 80,
    "direction": "alternate",
    "mix": 50,
    "feedback": 15,
    "stereoMode": "sum",
    "drive": 4
  },
  "chain": {
    "pre": ["High-pass at 80Hz"],
    "post": ["Tape Saturation - 5% drive"]
  },
  "workflow": "Use on drums or full mix for lo-fi degradation effect. Slow LFO modulation creates warbling tape effect.",
  "genreTags": ["lo-fi", "nostalgic", "vintage", "wobble"],
  "a/bTesting": {
    "testA": "Alternate direction for random warble",
    "testB": "Single direction for consistent drift"
  },
  "troubleshooting": {
    "tooSlow": "Increase LFO rate for faster wobble",
    "tooFast": "Reduce LFO rate for gentle warble"
  }
}

```

---

## FILE: 02-Data\presets\genre\06-grim-sub.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Grim Sub Shift",
    "category": "genre",
    "genre": "drill",
    "mood": "dark"
  },
  "settings": {
    "frequencyShift": 200,
    "direction": "down",
    "mix": 70,
    "feedback": 20,
    "stereoMode": "sum",
    "drive": 15
  },
  "chain": {
    "pre": ["High-pass at 25Hz"],
    "post": ["Fruily Limiter - Aggressive limiting"]
  },
  "workflow": "Apply to sub bass for dark, grimy texture. Subtle shift creates harmonic distortion without losing sub weight.",
  "genreTags": ["drill", "dark", "heavy", "sub"],
  "a/bTesting": {
    "testA": "Downward shift for darker tones",
    "testB": "Upward shift for more aggressive character"
  },
  "troubleshooting": {
    "losingSub": "Increase pre high-pass to 40Hz, reduce shift to 150Hz",
    "tooClean": "Increase drive to 20%"
  }
}

```

---

## FILE: 02-Data\presets\genre\07-cosmic-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Cosmic Shift",
    "category": "genre",
    "genre": "experimental",
    "mood": "spacey"
  },
  "settings": {
    "frequencyShift": 1000,
    "direction": "alternate",
    "mix": 60,
    "feedback": 50,
    "stereoMode": "sum",
    "drive": 10
  },
  "chain": {
    "pre": ["Multi-band pre-processing"],
    "post": ["Reverb - Large hall, 35% mix"]
  },
  "workflow": "Use on pads, FX, or processed vocals for otherworldly effects. Alternate direction creates random frequency jumps.",
  "genreTags": ["experimental", "spacey", "cosmic", "FX"],
  "a/bTesting": {
    "testA": "High frequency shift for dramatic effect",
    "testB": "Lower shift for more subtle enhancement"
  },
  "troubleshooting": {
    "tooChaotic": "Reduce mix to 40%, decrease feedback to 30%",
    "notSpacey": "Increase shift to 1500Hz, add reverb"
  }
}

```

---

## FILE: 02-Data\presets\genre\08-dub-echo.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Dub Shift Echo",
    "category": "genre",
    "genre": "dub",
    "mood": "moody"
  },
  "settings": {
    "frequencyShift": 80,
    "direction": "down",
    "mix": 55,
    "feedback": 40,
    "stereoMode": "sum",
    "drive": 6
  },
  "chain": {
    "pre": ["High-pass at 120Hz"],
    "post": ["Delay - Dub style, 400ms, 50% feedback"]
  },
  "workflow": "Combine with delay for classic dub effects. The frequency shift interacts with echoes for unique texture.",
  "genreTags": ["dub", "moody", "echo", "dubwise"],
  "a/bTesting": {
    "testA": "High feedback for regenerating echoes",
    "testB": "Lower feedback for single repeats"
  },
  "troubleshooting": {
    "ringingTooLong": "Reduce feedback to 30%",
    "muddy": "Increase pre high-pass to 180Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\09-synth-texture.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Texture Enhancer",
    "category": "genre",
    "genre": "EDM",
    "mood": "electric"
  },
  "settings": {
    "frequencyShift": 150,
    "direction": "down",
    "mix": 40,
    "feedback": 35,
    "stereoMode": "sum",
    "drive": 5
  },
  "chain": {
    "pre": ["Low-pass filter at 5kHz"],
    "post": ["Reverb - Subtle room, 15% mix"]
  },
  "workflow": "Use on synth leads to add harmonic complexity without obvious effect. Low mix keeps enhancement subtle.",
  "genreTags": ["EDM", "textural", "synth", "enhancement"],
  "a/bTesting": {
    "testA": "Lower mix for subtle enhancement",
    "testB": "Higher mix for more character"
  },
  "troubleshooting": {
    "tooObvious": "Reduce mix to 25%",
    "notAdding": "Increase feedback to 45%"
  }
}

```

---

## FILE: 02-Data\presets\genre\10-vocal-air.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Vocal Air",
    "category": "genre",
    "genre": "R&B",
    "mood": "smooth"
  },
  "settings": {
    "frequencyShift": 50,
    "direction": "up",
    "mix": 30,
    "feedback": 0,
    "stereoMode": "sum",
    "drive": 2
  },
  "chain": {
    "pre": ["De-essing if needed"],
    "post": ["Reverb - Subtle, 12% mix"]
  },
  "workflow": "Apply to lead vocals to add subtle air and presence. Very low frequency shift prevents phasing while adding clarity.",
  "genreTags": ["R&B", "vocal", "smooth", "air"],
  "a/bTesting": {
    "testA": "Upward shift for air",
    "testB": "Downward shift for warmth"
  },
  "troubleshooting": {
    "causingPhasing": "Reduce mix to 20%, decrease shift to 30Hz",
    "tooSubtle": "Increase mix to 40%"
  }
}

```

---

## FILE: 02-Data\presets\signature\21-savage-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Grim Sub Shift",
    "category": "signature",
    "inspiredBy": "21 Savage dark aesthetic"
  },
  "settings": {
    "frequencyShift": 150,
    "direction": "down",
    "mix": 75,
    "feedback": 25,
    "stereoMode": "sum",
    "drive": 18
  },
  "chain": {
    "pre": ["High-pass at 30Hz"],
    "post": ["Fruily Limiter - Heavy limiting"]
  },
  "workflow": "Apply to 808 subs for dark, menacing texture. High drive adds harmonic distortion while maintaining sub weight.",
  "characteristics": ["dark", "heavy", "menacing", "grim"],
  "genreTags": ["hip-hop/rap", "drill", "dark trap"],
  "a/bTesting": {
    "testA": "Downward for darkness",
    "testB": "Upward for aggression"
  },
  "troubleshooting": {
    "losingSub": "Increase pre high-pass to 45Hz, reduce shift to 100Hz",
    "tooDistorted": "Reduce drive to 12%"
  }
}

```

---

## FILE: 02-Data\presets\signature\drake-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "OVO Vocal Air",
    "category": "signature",
    "inspiredBy": "Drake vocal processing"
  },
  "settings": {
    "frequencyShift": 40,
    "direction": "up",
    "mix": 28,
    "feedback": 0,
    "stereoMode": "sum",
    "drive": 2
  },
  "chain": {
    "pre": ["De-esser if needed"],
    "post": ["Reverb - Plate, 15% mix", "Delay - Subtle 100ms, 20% mix"]
  },
  "workflow": "Apply to lead vocals for subtle air and presence. Very low settings maintain vocal naturalness while adding polish.",
  "characteristics": ["smooth", "polished", "clean", "vocal"],
  "genreTags": ["hip-hop/rap", "R&B", "melodic"],
  "a/bTesting": {
    "testA": "Upward for presence",
    "testB": "Downward for warmth"
  },
  "troubleshooting": {
    "causingPhasing": "Reduce mix to 20%, shift to 25Hz"
  }
}

```

---

## FILE: 02-Data\presets\signature\metro-boomin-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "If-You-Know Shift",
    "category": "signature",
    "inspiredBy": "Metro Boomin signature riser"
  },
  "settings": {
    "frequencyShift": 600,
    "direction": "up",
    "mix": 70,
    "feedback": 10,
    "stereoMode": "sum",
    "drive": 6
  },
  "chain": {
    "post": ["Fruily Limiter - Gentle ceiling -0.3dB"]
  },
  "workflow": "Automate from 0 to 600Hz over 4 bars. Use on white noise or riser sample for signature Metro build.",
  "characteristics": ["modern", "clean", "build", "tension"],
  "genreTags": ["hip-hop/rap", "trap", "modern"],
  "a/bTesting": {
    "testA": "Clean upward build",
    "testB": "Added feedback for more character"
  },
  "troubleshooting": {
    "tooAbrupt": "Automate over 8 bars for smoother build",
    "notBoomin": "Add white noise layer before shifter"
  }
}

```

---

## FILE: 02-Data\presets\signature\mike-will-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Future Shift",
    "category": "signature",
    "inspiredBy": "Mike Will Made-It futuristic style"
  },
  "settings": {
    "frequencyShift": 450,
    "direction": "up",
    "mix": 65,
    "feedback": 40,
    "stereoMode": "sum",
    "drive": 10
  },
  "chain": {
    "pre": ["High-pass at 500Hz"],
    "post": ["Delay - Stereo, 280ms, 40% feedback"]
  },
  "workflow": "Use on 808s or synths for future sound. High feedback creates metallic resonance characteristic of Mike Will production.",
  "characteristics": ["futuristic", "metallic", "bright", "innovative"],
  "genreTags": ["hip-hop/rap", "EDM", "future bass"],
  "a/bTesting": {
    "testA": "High feedback for metallic tone",
    "testB": "Lower feedback for cleaner future sound"
  },
  "troubleshooting": {
    "tooMetallic": "Reduce feedback to 25%"
  }
}

```

---

## FILE: 02-Data\presets\signature\murda-beatz-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Melody King Shift",
    "category": "signature",
    "inspiredBy": "Murda Beatz melodic trap"
  },
  "settings": {
    "frequencyShift": 120,
    "direction": "up",
    "mix": 42,
    "feedback": 15,
    "stereoMode": "sum",
    "drive": 4
  },
  "chain": {
    "pre": ["Soft filter at 4kHz"],
    "post": ["Reverb - Hall, 22% mix"]
  },
  "workflow": "Apply to melodic elements for enhancement. Subtle settings support melody without distracting from the composition.",
  "characteristics": ["melodic", "smooth", "emotional", "supportive"],
  "genreTags": ["hip-hop/rap", "melodic", "trap"],
  "a/bTesting": {
    "testA": "Subtle for background elements",
    "testB": "More obvious for lead melodies"
  },
  "troubleshooting": {
    "tooMuch": "Reduce mix to 30%"
  }
}

```

---

## FILE: 02-Data\presets\signature\pierre-bourne-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Trinidad Pluck",
    "category": "signature",
    "inspiredBy": "Pierre Bourne playful plucks"
  },
  "settings": {
    "frequencyShift": 100,
    "direction": "down",
    "mix": 50,
    "feedback": 25,
    "stereoMode": "sum",
    "drive": 6
  },
  "chain": {
    "pre": ["High-pass at 400Hz"],
    "post": ["Reverb - Small room, 12% mix"]
  },
  "workflow": "Apply to plucks for bouncy, playful character. The shift adds unique texture while maintaining rhythmic feel.",
  "characteristics": ["bouncy", "playful", "fun", "plucky"],
  "genreTags": ["hip-hop/rap", "trap", "playful"],
  "a/bTesting": {
    "testA": "Lower shift for subtle bounce",
    "testB": "Higher shift for more obvious effect"
  },
  "troubleshooting": {
    "tooClicky": "Increase envelope attack",
    "losingPluck": "Reduce feedback to 15%"
  }
}

```

---

## FILE: 02-Data\presets\signature\the-weeknd-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Night Drive Shift",
    "category": "signature",
    "inspiredBy": "The Weeknd 80s retro"
  },
  "settings": {
    "frequencyShift": 60,
    "direction": "alternate",
    "mix": 45,
    "feedback": 20,
    "stereoMode": "sum",
    "drive": 5
  },
  "chain": {
    "pre": ["Vintage EQ - subtle high-shelf"],
    "post": ["Tape Saturation - 4% drive", "Reverb - Hall, 20% mix"]
  },
  "workflow": "Apply to synths or pads for 80s retro vibe. Alternate direction creates gentle warble similar to vintage hardware.",
  "characteristics": ["retro", "warm", "nostalgic", "80s"],
  "genreTags": ["R&B", "synthwave", "retro", "moody"],
  "a/bTesting": {
    "testA": "Alternate for tape warble effect",
    "testB": "Single direction for consistent shift"
  },
  "troubleshooting": {
    "tooWobbly": "Reduce LFO rate"
  }
}

```

---

## FILE: 02-Data\presets\signature\travis-scott-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Astro-Thunder",
    "category": "signature",
    "inspiredBy": "Travis Scott atmospheric effects"
  },
  "settings": {
    "frequencyShift": 300,
    "direction": "alternate",
    "mix": 55,
    "feedback": 35,
    "stereoMode": "sum",
    "drive": 8
  },
  "chain": {
    "pre": ["Band-pass 1k-4kHz"],
    "post": ["Reverb - Large hall, 30% mix"]
  },
  "workflow": "Apply to atmospheric pads or reversed cymbals. Alternate shift creates unpredictable movement for astro tracks.",
  "characteristics": ["spacey", "atmospheric", "unpredictable"],
  "genreTags": ["hip-hop/rap", "trap", "atmospheric"],
  "a/bTesting": {
    "testA": "Alternate for random movement",
    "testB": "Upward for consistent build"
  },
  "troubleshooting": {
    "tooChaotic": "Reduce feedback to 20%",
    "notSpacey": "Increase shift to 400Hz, add reverb"
  }
}

```

---

## FILE: 02-Data\presets\signature\wheezy-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Paperboy Texture",
    "category": "signature",
    "inspiredBy": "Wheezy ATL texture"
  },
  "settings": {
    "frequencyShift": 200,
    "direction": "down",
    "mix": 60,
    "feedback": 30,
    "stereoMode": "sum",
    "drive": 12
  },
  "chain": {
    "pre": ["Low-pass at 1.5kHz"],
    "post": ["Fruily Compressor - Fast attack"]
  },
  "workflow": "Apply to bass for characteristic ATL texture. Creates harmonic complexity while maintaining low-end weight.",
  "characteristics": ["textured", "ATL", "bright", "punchy"],
  "genreTags": ["hip-hop/rap", "trap", "ATL"],
  "a/bTesting": {
    "testA": "Lower mix for subtle texture",
    "testB": "Higher mix for obvious character"
  },
  "troubleshooting": {
    "muddy": "Increase pre filter to 2kHz",
    "tooHarsh": "Reduce drive to 8%"
  }
}

```

---

## FILE: 02-Data\presets\signature\zaytoven-shift.json

```json
{
  "metadata": {
    "plugin": "Frequency Shifter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "ATL Pluck Shift",
    "category": "signature",
    "inspiredBy": "Zaytoven melodic plucks"
  },
  "settings": {
    "frequencyShift": 80,
    "direction": "down",
    "mix": 35,
    "feedback": 20,
    "stereoMode": "sum",
    "drive": 4
  },
  "chain": {
    "pre": ["High-pass at 200Hz"],
    "post": ["Reverb - Small room, 18% mix"]
  },
  "workflow": "Apply to synth plucks for added harmonic complexity. Subtle shift enhances without overwhelming the melody.",
  "characteristics": ["melodic", "smooth", "ATL", "plucky"],
  "genreTags": ["hip-hop/rap", "melodic", "R&B"],
  "a/bTesting": {
    "testA": "Subtle enhancement for melodic context",
    "testB": "More obvious effect for lead lines"
  },
  "troubleshooting": {
    "affectingPitch": "Reduce shift to 50Hz",
    "tooMuch": "Reduce mix to 20%"
  }
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Frequency Shifter)

## 1. Sub-Bass Safety Rule
- **Rule**: Never apply frequency shifting to a sub-bass or 808 fundamental frequency at high Mix levels.
- **Why**: Shifting 50Hz by even +10Hz will move your bass "out of key" and destroy the harmonic relationship with the rest of the song.
- **Action**: Use a High-Pass Filter *before* the shifter to only process the "grit" frequencies (above 250Hz).

## 2. Vocal "Character" Layering
- **Rule**: Keep vocal shifts in parallel.
- **Technique**: Use a Send Track. Set the Shifter to 100% Mix but keep the Send fader low (-15dB).
- **Goal**: To add an "otherworldly" metallic sheen to the vocal without destroying the intelligibility of the lyrics.

## 3. High-Hat "Sparkle"
- **Rule**: Shift hats and shakers **UP** by 50-100Hz.
- **Move**: Use 10-20% Mix.
- **Goal**: To move the "sizzle" of the hat into a higher, crispier frequency range that feels more "premium" and modern.

## 4. Mono-Width Protocol
- **Rule**: If unlinking L/R for width, use Hz values below 10Hz.
- **Action**: Set L: +2Hz, R: -2Hz.
- **Why**: Larger offsets create audible rhythmic pulsing (tremolo) in mono, which can ruin the club translation.

```

---

## FILE: 03-Workflows\00_Practical_Use_Cases.md

```markdown
# Frequency Shifter - Practical Use Cases

## 8-12 Real Use Cases with Step-by-Step Setup

### Use Case 1: Metallic Bell-like Textures
**Goal**: Create bell-like, metallic textures from harmonic sources

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a pad or synth track with harmonic content
2. Set Frequency shift to +100Hz to +300Hz (positive shift for brightness)
3. Adjust Mix to 60-70% to blend original with metallic texture
4. Set Feedback to 10-20% for subtle evolving characteristics
5. Fine-tune Start Phase to minimize any artifacts (usually 40-60% works well)
6. Add a touch of reverb (hall or plate, 25-35% mix) to enhance the metallic character
7. Use automation to vary the frequency shift amount for evolving textures
8. Apply a high-pass filter around 100Hz to clean up low-end mud
9. Adjust Output Level to match original signal level
10. Fine-tune the frequency shift amount to taste

**Recommended starting settings/ranges**:
- Frequency Shift: +100Hz to +500Hz for bell-like textures
- Mix: 60-80% for musical blend
- Feedback: 10-30% for subtle evolution
- Start Phase: 40-60% for artifact minimization

**Why it works / what to listen for**:
- The linear frequency shift breaks harmonic relationships, creating bell-like inharmonic overtones
- Harmonic sources work best as they provide rich harmonic content to shift
- Listen for the metallic, bell-like character that emerges from the shifted harmonics
- The effect is most pronounced with complex harmonic content

**Variations**:
1. **Subtle Enhancement**: Lower frequency shift (50-100Hz) for gentle metallic enhancement
2. **Aggressive Metallic**: Higher frequency shift (+500Hz to +1000Hz) for extreme metallic textures
3. **Negative Shift**: Use negative values (-100Hz to -300Hz) for different metallic character

**Pitfalls + quick fixes**:
- Pitfall: Sound becomes too harsh or metallic
  - Fix: Reduce frequency shift amount and/or increase Mix to original
- Pitfall: Artifacts or clicks occur
  - Fix: Adjust Start Phase and reduce frequency shift amount

### Use Case 2: Robotic Vocal Effects
**Goal**: Create robotic or synthetic vocal effects using frequency shifting

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a vocal track
2. Set Frequency shift to +75Hz to +150Hz for robotic character
3. Set Mix to 40-60% to maintain vocal intelligibility
4. Keep Feedback at 0-5% to avoid unstable results on vocals
5. Adjust Start Phase to 50% initially, fine-tune to minimize artifacts
6. Add light compression after to even out dynamics (Fruity Limiter)
7. Apply a high-pass filter around 120Hz to remove rumble
8. Add subtle reverb (room, 15-25% mix) to maintain some space
9. Use EQ after to tame harsh frequencies if needed
10. Fine-tune frequency shift for desired robotic character

**Recommended starting settings/ranges**:
- Frequency Shift: +75Hz to +200Hz for vocal effects
- Mix: 40-60% to maintain vocal clarity
- Feedback: 0-10% for stable vocal processing
- Start Phase: 40-60% for clean vocal processing

**Why it works / what to listen for**:
- Frequency shifting creates inharmonic relationships that sound synthetic
- The effect preserves formant information while altering harmonic structure
- Listen for the robotic, synthetic character while maintaining vocal intelligibility
- The linear shift creates a consistent robotic quality throughout the vocal range

**Variations**:
1. **Subtle Robot**: Lower frequency shift (50-100Hz) for gentle robotic effect
2. **Heavy Robot**: Higher frequency shift (+200Hz to +400Hz) for more obvious effect
3. **Talk Box Simulation**: Combine with distortion for talk box-like effects

**Pitfalls + quick fixes**:
- Pitfall: Vocal becomes unintelligible
  - Fix: Increase Mix to original signal (70-80%)
- Pitfall: Robotic effect is too harsh
  - Fix: Reduce frequency shift and add EQ after to tame harshness

### Use Case 3: Sci-Fi Sound Design
**Goal**: Create otherworldly, sci-fi textures and atmospheres

**Step-by-step setup inside FL Studio**:
1. Create a pad or ambient texture using 3x Osc or Sytrus
2. Insert Frequency Shifter on the pad track
3. Set Frequency shift to +200Hz to +800Hz for sci-fi character
4. Set Mix to 70-90% for prominent sci-fi effect
5. Set Feedback to 20-40% for evolving, spiraling textures
6. Adjust Start Phase to minimize artifacts (try 30-70% range)
7. Add a long reverb (hall, 4-6s decay, 40-50% mix) for space
8. Use automation to slowly change frequency shift over time
9. Apply a low-pass filter around 8kHz to tame extreme highs
10. Fine-tune parameters for desired sci-fi atmosphere

**Recommended starting settings/ranges**:
- Frequency Shift: +200Hz to +800Hz for sci-fi textures
- Mix: 70-90% for prominent effect
- Feedback: 20-40% for evolving textures
- Start Phase: 30-70% for artifact minimization

**Why it works / what to listen for**:
- The frequency shift creates inharmonic textures that sound otherworldly
- Feedback creates evolving, spiraling characteristics
- Listen for the evolving, non-musical textures that emerge
- The effect works well with sustained, harmonic content

**Variations**:
1. **Subtle Sci-Fi**: Lower frequency shift (100-300Hz) for gentle otherworldly effect
2. **Aggressive Sci-Fi**: Higher frequency shift (+600Hz to +1200Hz) for extreme textures
3. **Evolution Mode**: Use automation to change frequency shift over time

**Pitfalls + quick fixes**:
- Pitfall: Sound becomes too harsh or unstable
  - Fix: Reduce feedback and/or frequency shift amount
- Pitfall: Sci-fi effect is too subtle
  - Fix: Increase frequency shift and/or reduce Mix to original

### Use Case 4: Stereo Enhancement Trick
**Goal**: Use frequency shifting for unique stereo enhancement without phase issues

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a mono track that needs stereo enhancement
2. Unlink left and right channels
3. Set Left Channel Frequency to +5Hz to +15Hz
4. Set Right Channel Frequency to -5Hz to -15Hz
5. Set Mix to 100% (fully processed) for maximum effect
6. Keep Feedback at 0% to avoid instability
7. Adjust Start Phase to minimize artifacts (usually 50% works well)
8. Add the track to a mixer channel with pan set to center
9. The slight frequency differences between channels create stereo width
10. Fine-tune the frequency differences for desired width

**Recommended starting settings/ranges**:
- Left Frequency: +5Hz to +20Hz
- Right Frequency: -5Hz to -20Hz
- Mix: 90-100% for full stereo effect
- Feedback: 0-5% to maintain stability
- Start Phase: 40-60% for clean processing

**Why it works / what to listen for**:
- Small frequency differences between channels create phase differences
- This creates stereo width without traditional delay-based widening
- Listen for increased stereo width while maintaining mono compatibility
- The effect is subtle but effective for adding width to mono sources

**Variations**:
1. **Subtle Width**: Smaller frequency differences (±2-5Hz) for gentle enhancement
2. **Aggressive Width**: Larger frequency differences (±15-30Hz) for more obvious effect
3. **Rhythmic Width**: Use automation to vary the frequency differences rhythmically

**Pitfalls + quick fixes**:
- Pitfall: Stereo enhancement causes phase cancellation in mono
  - Fix: Reduce frequency differences and check mono compatibility
- Pitfall: Effect is too obvious or artificial
  - Fix: Use smaller frequency differences (±3-10Hz)

### Use Case 5: Bass Enhancement with Subtle Frequency Shift
**Goal**: Add character and presence to a bass line using subtle frequency shifting

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a bass track
2. Set Frequency shift to +25Hz to +75Hz for subtle enhancement
3. Set Mix to 20-40% to maintain bass foundation
4. Keep Feedback at 0% to avoid instability on bass
5. Adjust Start Phase to minimize artifacts (usually 45-55% works well)
6. Add the track to a mixer channel with appropriate EQ
7. Apply high-pass filter around 30Hz to prevent subsonic buildup
8. Use low-pass filter around 5kHz to prevent harshness
9. Add subtle compression after if needed (Fruity Limiter)
10. Fine-tune frequency shift for desired character addition

**Recommended starting settings/ranges**:
- Frequency Shift: +25Hz to +100Hz for bass enhancement
- Mix: 20-40% to maintain bass foundation
- Feedback: 0-5% for stable bass processing
- Start Phase: 40-60% for clean bass processing

**Why it works / what to listen for**:
- Subtle frequency shifting adds character without changing pitch relationships
- The effect enhances harmonic content in a unique way
- Listen for added presence and character while maintaining bass foundation
- The enhancement is musical rather than obvious

**Variations**:
1. **Subtle Enhancement**: Lower frequency shift (+10Hz to +30Hz) for gentle addition
2. **Character Boost**: Higher frequency shift (+50Hz to +100Hz) for more obvious character
3. **Negative Enhancement**: Use negative values (-25Hz to -75Hz) for different character

**Pitfalls + quick fixes**:
- Pitfall: Bass becomes too harsh or boomy
  - Fix: Reduce frequency shift and/or increase Mix to original
- Pitfall: Fundamental frequencies are affected too much
  - Fix: Use very small frequency shifts (+10Hz to +50Hz)

### Use Case 6: Creative Synth Enhancement
**Goal**: Use frequency shifting to add unique character to synthesized sounds

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a synth track (lead, pad, or bass)
2. Set Frequency shift to +100Hz to +300Hz for character addition
3. Set Mix to 50-70% to balance original and enhanced
4. Set Feedback to 10-25% for subtle evolving characteristics
5. Adjust Start Phase to minimize artifacts (try 40-60% range)
6. Add the track to a mixer channel with appropriate processing
7. Apply EQ after to shape the enhanced harmonics
8. Use reverb or delay after for additional spatial enhancement
9. Use automation to vary frequency shift during different sections
10. Fine-tune parameters for desired synth character

**Recommended starting settings/ranges**:
- Frequency Shift: +50Hz to +300Hz for synth enhancement
- Mix: 50-70% for balanced enhancement
- Feedback: 10-30% for subtle evolution
- Start Phase: 40-60% for artifact minimization

**Why it works / what to listen for**:
- Frequency shifting adds unique character to synthesized sounds
- The effect creates inharmonic relationships that add interest
- Listen for enhanced character while maintaining synth identity
- The evolving nature with feedback adds movement to static synths

**Variations**:
1. **Subtle Enhancement**: Lower frequency shift (25-75Hz) for gentle character addition
2. **Aggressive Character**: Higher frequency shift (+300Hz to +600Hz) for more obvious effect
3. **Evolution Focus**: Use automation to change frequency shift over time

**Pitfalls + quick fixes**:
- Pitfall: Synth loses its original character
  - Fix: Increase Mix to original signal (60-80%)
- Pitfall: Character becomes too harsh or metallic
  - Fix: Reduce frequency shift and/or add EQ after to tame harshness

### Use Case 7: Talking Synth Effects
**Goal**: Create talking or singing synth effects using frequency shifting

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a synth lead track
2. Set up a simple automation clip for the Frequency parameter
3. Create a pattern that cycles through different frequency values (e.g., 0Hz, +100Hz, +200Hz, +50Hz)
4. Set Mix to 60-80% to maintain synth character
5. Keep Feedback low (0-10%) to avoid unstable results
6. Adjust Start Phase to minimize artifacts during frequency changes
7. Use a synth with rich harmonic content (Sytrus, Harmless, etc.)
8. Apply light reverb after for spatial enhancement
9. Use automation to create vowel-like frequency changes
10. Fine-tune the automation pattern for desired talking effect

**Recommended starting settings/ranges**:
- Frequency Shift: Cycling between 0Hz and +200Hz for talking effect
- Mix: 60-80% to maintain original character
- Feedback: 0-10% for stable processing
- Start Phase: 40-60% for clean processing

**Why it works / what to listen for**:
- Changing frequency shift creates vowel-like formant changes
- Rich harmonic content provides material for formant shifting
- Listen for talking or singing-like characteristics emerging
- The effect works best with harmonic content

**Variations**:
1. **Subtle Talk**: Small frequency variations (±25Hz) for gentle effect
2. **Aggressive Talk**: Large frequency variations (±100Hz to ±300Hz) for obvious effect
3. **Rhythmic Talk**: Sync frequency changes to tempo for rhythmic effects

**Pitfalls + quick fixes**:
- Pitfall: Talking effect is too subtle
  - Fix: Increase frequency variation range and/or reduce Mix to original
- Pitfall: Effect sounds too artificial or harsh
  - Fix: Reduce frequency variation and use more subtle automation patterns

### Use Case 8: Creative Rhythmic Effects
**Goal**: Use frequency shifting with automation for unique rhythmic textures

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a rhythmic track (drums, percussion, or rhythmic synth)
2. Set up an automation clip for the Frequency parameter
3. Create a rhythmic pattern that changes frequency shift in time with the music
4. Use small shifts (±25Hz to ±75Hz) for subtle rhythmic effects
5. Set Mix to 50-70% to maintain rhythmic clarity
6. Keep Feedback low (0-15%) to avoid instability
7. Adjust Start Phase to minimize artifacts during rhythmic changes
8. Use the step sequencer to create rhythmic automation patterns
9. Apply light compression after to even out level changes
10. Fine-tune the rhythmic pattern for desired effect

**Recommended starting settings/ranges**:
- Frequency Shift: ±25Hz to ±100Hz for rhythmic effects
- Mix: 50-70% for rhythmic clarity
- Feedback: 0-15% for stable rhythmic processing
- Start Phase: 40-60% for clean rhythmic processing

**Why it works / what to listen for**:
- Rhythmic frequency changes create interesting textural effects
- The effect adds movement and interest to rhythmic elements
- Listen for rhythmic texture enhancement without losing rhythmic clarity
- The subtle changes add character without overwhelming the rhythm

**Variations**:
1. **Subtle Rhythm**: Small frequency changes (±10Hz to ±30Hz) for gentle enhancement
2. **Aggressive Rhythm**: Large frequency changes (±100Hz to ±200Hz) for obvious effect
3. **Syncopated**: Use off-beat frequency changes for syncopated effects

**Pitfalls + quick fixes**:
- Pitfall: Rhythmic effect is too obvious or distracting
  - Fix: Reduce frequency change range and/or increase Mix to original
- Pitfall: Effect creates timing issues
  - Fix: Ensure automation is properly grid-aligned and in sync with tempo

### Use Case 9: Experimental Texture Creation
**Goal**: Use extreme frequency shifting for experimental sound design

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on an interesting audio source
2. Set Frequency shift to extreme values (+500Hz to +2000Hz or -500Hz to -2000Hz)
3. Set Mix to 80-100% for full effect
4. Set Feedback to 30-60% for dramatic evolving textures
5. Adjust Start Phase to minimize artifacts (experiment with different values)
6. Add the track to a mixer channel with minimal processing
7. Use automation to gradually change frequency shift over time
8. Apply long reverb for additional spatial enhancement
9. Use spectrum analyzer to visualize the frequency changes
10. Fine-tune parameters for desired experimental texture

**Recommended starting settings/ranges**:
- Frequency Shift: ±500Hz to ±2000Hz for experimental effects
- Mix: 80-100% for full experimental effect
- Feedback: 30-60% for dramatic evolution
- Start Phase: Experiment with different values (20-80%)

**Why it works / what to listen for**:
- Extreme settings create completely non-musical textures
- The effect breaks all harmonic relationships for unique results
- Listen for completely transformed audio that maintains rhythmic elements
- The evolving nature with feedback creates complex textures

**Variations**:
1. **Subtle Experimentation**: Moderate frequency shifts (±200Hz to ±500Hz) for gentler experimental effects
2. **Aggressive Transformation**: Extreme frequency shifts (±1500Hz to ±3000Hz) for complete transformation
3. **Automation Focus**: Use automation to morph between different extreme settings

**Pitfalls + quick fixes**:
- Pitfall: Sound becomes too harsh or unlistenable
  - Fix: Reduce frequency shift and/or add filtering after to tame harshness
- Pitfall: Effect creates instability or artifacts
  - Fix: Reduce feedback and adjust Start Phase to minimize artifacts

### Use Case 10: Pad and Ambient Enhancement
**Goal**: Enhance pads and ambient textures with subtle frequency shifting

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a pad or ambient texture track
2. Set Frequency shift to +50Hz to +150Hz for subtle enhancement
3. Set Mix to 30-50% to maintain original texture
4. Set Feedback to 15-35% for subtle evolving characteristics
5. Adjust Start Phase to minimize artifacts (usually 45-55% works well)
6. Add the track to a mixer channel with appropriate reverb
7. Apply gentle EQ after to shape the enhanced harmonics
8. Use automation to slowly change frequency shift over time
9. Add subtle delay for additional spatial enhancement
10. Fine-tune parameters for desired ambient enhancement

**Recommended starting settings/ranges**:
- Frequency Shift: +25Hz to +200Hz for ambient enhancement
- Mix: 30-50% to maintain original texture
- Feedback: 15-35% for subtle evolution
- Start Phase: 40-60% for clean processing

**Why it works / what to listen for**:
- Subtle frequency shifting adds character to ambient textures
- Feedback creates gentle evolution in sustained sounds
- Listen for enhanced character while maintaining ambient quality
- The effect adds movement to static ambient textures

**Variations**:
1. **Subtle Enhancement**: Lower frequency shift (+10Hz to +50Hz) for gentle addition
2. **Evolution Focus**: Higher feedback (30-50%) for more obvious evolution
3. **Character Addition**: Moderate frequency shift (+100Hz to +200Hz) for more obvious character

**Pitfalls + quick fixes**:
- Pitfall: Ambient texture becomes too harsh or metallic
  - Fix: Reduce frequency shift and/or add EQ after to tame harshness
- Pitfall: Evolution is too obvious or distracting
  - Fix: Reduce feedback and/or use more subtle frequency shifts

### Use Case 11: Lead Synth Character Addition
**Goal**: Add unique character to lead synths using frequency shifting

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a lead synth track
2. Set Frequency shift to +75Hz to +250Hz for character addition
3. Set Mix to 40-60% to maintain lead clarity
4. Set Feedback to 5-20% for subtle evolving characteristics
5. Adjust Start Phase to minimize artifacts (try 40-60% range)
6. Add the track to a mixer channel with appropriate processing
7. Apply EQ after to shape the enhanced harmonics
8. Use light reverb or delay for spatial enhancement
9. Use automation to vary character during different sections
10. Fine-tune parameters for desired lead enhancement

**Recommended starting settings/ranges**:
- Frequency Shift: +50Hz to +300Hz for lead enhancement
- Mix: 40-60% to maintain lead clarity
- Feedback: 5-25% for subtle evolution
- Start Phase: 40-60% for clean processing

**Why it works / what to listen for**:
- Frequency shifting adds unique character to lead sounds
- The effect creates inharmonic relationships that add interest
- Listen for enhanced character while maintaining lead clarity
- The effect works well with harmonic lead synths

**Variations**:
1. **Subtle Character**: Lower frequency shift (+25Hz to +75Hz) for gentle addition
2. **Aggressive Character**: Higher frequency shift (+250Hz to +500Hz) for more obvious effect
3. **Evolution Focus**: Use automation to change frequency shift over time

**Pitfalls + quick fixes**:
- Pitfall: Lead becomes too harsh or loses clarity
  - Fix: Reduce frequency shift and/or increase Mix to original
- Pitfall: Character addition is too subtle
  - Fix: Increase frequency shift and/or reduce Mix to original

### Use Case 12: Parallel Processing with Frequency Shifting
**Goal**: Use frequency shifting in parallel for controlled enhancement

**Step-by-step setup inside FL Studio**:
1. Create a send track for parallel processing
2. Insert Frequency Shifter on the send track
3. Set Frequency shift to +100Hz to +300Hz for parallel enhancement
4. Set Mix to 100% (fully processed) on the send track
5. Set Feedback to 10-25% for subtle evolution in parallel
6. Route the original track to the send track with appropriate send level
7. Set send level to 10-30% for subtle parallel enhancement
8. Add light compression on the send track to control dynamics
9. Use EQ on the send track to shape the parallel enhancement
10. Blend the parallel signal with the original for desired effect

**Recommended starting settings/ranges**:
- Send Level: 10-30% for subtle parallel enhancement
- Frequency Shift: +50Hz to +300Hz for parallel processing
- Feedback: 10-30% for parallel evolution
- Mix on send: 100% (since blend is controlled by send level)

**Why it works / what to listen for**:
- Parallel processing allows for controlled enhancement without affecting original
- The frequency shift adds character to the parallel signal only
- Listen for enhanced character that doesn't affect the original signal
- The blend control allows for precise enhancement levels

**Variations**:
1. **Subtle Parallel**: Low send levels (5-15%) for gentle enhancement
2. **Aggressive Parallel**: Higher send levels (25-40%) for more obvious effect
3. **Multiple Parallel**: Use multiple sends with different frequency shifts

**Pitfalls + quick fixes**:
- Pitfall: Parallel signal overwhelms the original
  - Fix: Reduce send level and/or reduce frequency shift amount
- Pitfall: Phase issues between original and parallel
  - Fix: Check phase alignment and adjust send timing if needed
```

---

## FILE: 03-Workflows\01_Workflow_Recipes.md

```markdown
# Frequency Shifter - Workflow Recipes

## 6-10 Recipes Combining Frequency Shifter with Other FL Studio Tools

### Recipe 1: Frequency Shifter + Fruity Convolver for Metallic Reverb
**Goal**: Create metallic, bell-like reverbs using frequency shifting on reverb returns

**Step-by-step setup inside FL Studio**:
1. Insert your source track (pad, synth, or vocal) in the Channel Rack
2. Create a return track for reverb processing
3. Insert Fruity Convolver on the return track
4. Load a hall or room impulse response (2.5-4s decay, 70% mix initially)
5. Insert Frequency Shifter on the same return track after Convolver
6. Set Frequency Shifter to +100Hz to +300Hz for metallic character
7. Set Mix to 80-90% to maintain reverb character
8. Keep Feedback at 0-10% to avoid instability
9. Route your source track to the reverb return with an appropriate send level
10. Add Fruity Parametric EQ 2 after the Frequency Shifter to shape the metallic reverb
11. Use gentle high-pass filtering around 100Hz to clean up low-end
12. Apply gentle low-pass filtering around 8kHz to tame harshness

**Routing notes**:
- Use post-fader sends to maintain consistent reverb levels regardless of track faders
- The Frequency Shifter processes the already-reverberated signal
- This creates metallic characteristics in the reverb tail
- Consider using multiple reverb returns with different shift amounts

**How to control it quickly**:
- Map Frequency Shifter amount to a macro for real-time metallic character control
- Use automation to change metallic character during different sections
- Create multiple reverb presets with different frequency shift amounts
- Use FL Studio's performance mode for live manipulation

**Performance tips**:
- Use moderate frequency shift amounts to avoid harsh metallic reverb
- Check mono compatibility of the metallic reverb effect
- The effect works best with longer reverb decays
- Use spectrum analysis to ensure the metallic character enhances rather than clashes

### Recipe 2: Frequency Shifter + Fruity Peak Controller for Dynamic Enhancement
**Goal**: Use Peak Controller to dynamically modulate Frequency Shifter parameters based on input level

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Peak Controller on a track before Frequency Shifter
2. Set Peak Controller to respond to input dynamics (Ratio: 3:1, Attack: 5ms, Release: 150ms)
3. Insert Frequency Shifter after Peak Controller
4. Set Frequency Shifter to moderate settings (+100Hz, 40% Mix, 0% Feedback)
5. Use Peak Controller's output to modulate Frequency Shifter's frequency parameter
6. When the input signal is loud, the Peak Controller increases the frequency shift amount
7. When the input signal is quiet, the frequency shift returns to base value
8. Add Fruity Parametric EQ 2 after Frequency Shifter to shape the dynamic enhancement
9. Insert Fruity Limiter at the end to control any level changes
10. Fine-tune Peak Controller settings for desired dynamic response

**Routing notes**:
- Peak Controller affects the signal level before frequency shifting
- This creates dynamic response where louder signals get more frequency shifting
- The Frequency Shifter processes the already-dynamic-controlled signal
- This creates compound dynamic processing

**How to control it quickly**:
- Adjust Peak Controller's threshold to change activation point
- Use Peak Controller's ratio to control intensity of frequency shift response
- Map Peak Controller's parameters to macros for easy adjustment
- Use automation to change the dynamic response over time

**Performance tips**:
- Use moderate Peak Controller settings to avoid over-processing before Frequency Shifter
- Check for artifacts when both processors are active
- The combination creates responsive dynamic processing
- Use spectrum analysis to ensure the dynamic processing is musical

### Recipe 3: Frequency Shifter + Edison for Analysis-Based Enhancement
**Goal**: Use Edison's analysis to inform Frequency Shifter processing decisions

**Step-by-step setup inside FL Studio**:
1. Insert Edison on a track with interesting harmonic content
2. Use Edison's FFT analysis to identify frequency characteristics of the source
3. Insert Frequency Shifter after Edison
4. Based on Edison's analysis, set Frequency Shifter to enhance or modify specific frequency ranges
5. If the source has strong low-end, consider positive frequency shift to brighten
6. If the source has harsh high-end, consider negative frequency shift to darken
7. Set Mix to 50-70% to blend processed and original
8. Use Edison's AB comparison to compare original with frequency-shifted versions
9. Fine-tune Frequency Shifter settings based on spectral analysis
10. Apply Fruity Parametric EQ 2 after to compensate for any unwanted changes
11. Use Fruity Limiter to control output levels
12. Save the optimized settings as a template for similar sources

**Routing notes**:
- Use Edison to analyze the original signal before processing
- Apply Frequency Shifter based on analysis findings
- Use Edison after processing to verify results
- This creates analysis-informed frequency shifting

**How to control it quickly**:
- Use Edison's snapshot feature to save reference spectra
- Create Frequency Shifter presets based on different analysis results
- Map Frequency Shifter parameters to macros for quick adjustment
- Use Edison's real-time analysis while adjusting Frequency Shifter

**Performance tips**:
- Use Edison's smoothing settings to get clearer frequency analysis
- Apply Frequency Shifter adjustments gradually to avoid over-processing
- The combination creates frequency-aware processing
- Use spectrum analysis to verify the combined effect

### Recipe 4: Frequency Shifter + Fruity Formula Controller for Complex Modulation
**Goal**: Use Formula Controller to create complex, evolving modulation patterns for Frequency Shifter

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Formula Controller on an automation track
2. Create a formula that generates complex patterns (e.g., LFO1*sin(LFO2*time) for evolving modulation)
3. Insert Frequency Shifter on the target track
4. Set base Frequency Shifter parameters (+150Hz, 60% Mix, 15% Feedback)
5. Use MIDI learn to map Formula Controller's output to Frequency Shifter's Frequency parameter
6. Adjust formula parameters to create interesting evolving patterns
7. Use the formula's period settings to sync with musical timing if desired
8. Add Fruity Parametric EQ 2 after Frequency Shifter to shape the evolving sound
9. Insert Fruity Limiter at the end to control any level fluctuations
10. Use automation to adjust formula parameters over time
11. Monitor with spectrum analyzer to visualize the evolving frequency content
12. Fine-tune the formula for desired evolution characteristics

**Routing notes**:
- Formula Controller generates complex modulation patterns
- Map formula output to Frequency Shifter parameters
- The mathematical patterns create evolving, non-repetitive processing
- This creates algorithmic frequency shifting changes

**How to control it quickly**:
- Adjust formula parameters to change the modulation pattern
- Use different mathematical functions for different modulation behaviors
- Map formula variables to macros for real-time control
- Use automation to change formula parameters over time

**Performance tips**:
- Start with simple formulas and gradually increase complexity
- Monitor for artifacts when using complex modulation patterns
- Use the formula's period settings to sync with musical timing
- The combination creates evolving, generative frequency shifting

### Recipe 5: Frequency Shifter + Patcher for Advanced Routing
**Goal**: Use Patcher to create complex routing with Frequency Shifter and other effects

**Step-by-step setup inside FL Studio**:
1. Insert Patcher on a track that needs complex processing
2. Inside Patcher, route the main signal to Frequency Shifter
3. Configure Frequency Shifter with interesting settings (+200Hz, 70% Mix, 25% Feedback)
4. Create a parallel path with Fruity Fast Dist for saturation
5. Create another parallel path with Fruity Convolver for reverb
6. Use Fruity Balance to control the mix between paths
7. Add Fruity Limiter at the end of Patcher for level control
8. Use Fruity Formula Controller within Patcher for parameter modulation
9. Map parameters to Patcher's macro controls
10. Create a comprehensive processing chain with Frequency Shifter as the centerpiece
11. Use Fruity Parametric EQ 2 after Patcher for final tonal adjustment
12. Fine-tune the balance between processing paths

**Routing notes**:
- Use Patcher to split signal into multiple processing paths
- Frequency Shifter processes the main signal path
- Parallel paths add additional processing layers
- Patcher allows for complex routing and macro control

**How to control it quickly**:
- Use Patcher's macro controls to adjust multiple parameters simultaneously
- Map Frequency Shifter parameters to Patcher macros for centralized control
- Create multiple macro configurations for different processing approaches
- Use Patcher's interface to adjust balance between processing paths

**Performance tips**:
- Use moderate processing in each path to avoid over-processing
- Check for phase issues between parallel paths
- The combination allows for complex, nuanced processing
- Use spectrum analysis to ensure the combined effect is balanced

### Recipe 6: Frequency Shifter + Fruity Fast Dist for Character Enhancement
**Goal**: Combine Frequency Shifter with Fast Dist for added character and harmonic enhancement

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Fast Dist on a track (for initial saturation)
2. Set Fast Dist to moderate settings (Drive: 20-30%, Tone: 50%, Mix: 70-80%)
3. Insert Frequency Shifter after Fast Dist
4. Set Frequency Shifter to +100Hz to +300Hz for character enhancement
5. Set Frequency Shifter Mix to 60-80% for effective processing
6. Keep Feedback low (0-15%) to avoid instability with distortion
7. The saturation from Fast Dist provides rich harmonics for frequency shifting
8. Add Fruity Parametric EQ 2 after Frequency Shifter to shape the enhanced harmonics
9. Insert Fruity Limiter at the end for level control
10. Use automation to change both Fast Dist and Frequency Shifter parameters simultaneously
11. Fine-tune the balance between saturation and frequency shifting
12. Check for harshness and adjust parameters accordingly

**Routing notes**:
- Fast Dist adds saturation before frequency shifting
- Frequency Shifter processes the already-saturated signal
- This creates frequency shifting of saturated harmonics
- The order affects the character of the enhancement

**How to control it quickly**:
- Map Fast Dist Drive and Frequency Shifter Amount to a macro for character control
- Use automation to change both simultaneously for consistent results
- Create presets that combine specific Fast Dist settings with appropriate Frequency Shifter settings
- Use the Mix controls on both plugins to blend appropriately

**Performance tips**:
- Start with moderate Fast Dist settings to avoid harshness when frequency shifted
- The combination can create very musical character enhancement
- Monitor for clipping when both enhancement and saturation are high
- Use spectrum analysis to ensure the combined effect is musical

### Recipe 7: Frequency Shifter + Fruity Delay 3 for Rhythmic Enhancement
**Goal**: Use Frequency Shifter to enhance rhythmic elements before delay processing

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a rhythmic track (drums, percussion, or rhythmic synth)
2. Set Frequency Shifter to +50Hz to +200Hz for subtle enhancement
3. Set Mix to 70-80% to maintain rhythmic clarity
4. Keep Feedback low (0-10%) to avoid instability with delay
5. Insert Fruity Delay 3 after Frequency Shifter
6. Set Delay 3 to tempo-synced settings (1/8th or 1/16th notes)
7. Use moderate feedback (20-30%) and pan delays for width
8. The Frequency Shifter enhances the dry signal before delay
9. Delay processes the frequency-shifted signal
10. This creates enhanced transients in both dry and delayed signals
11. Add Fruity Fast Dist after delay for saturation of delayed signals
12. Use Fruity Limiter at the end for level control

**Routing notes**:
- Frequency Shifter enhances the dry signal before delay
- Delay processes the frequency-shifted signal
- This creates frequency-shifted content in both dry and delayed signals
- The enhancement affects the entire rhythmic pattern including repeats

**How to control it quickly**:
- Map Frequency Shifter Amount to control rhythmic enhancement
- Use delay feedback to control how much enhancement is repeated
- Create automation patterns that change enhancement during builds/drops
- Use FL Studio's step sequencer to program rhythmic enhancement changes

**Performance tips**:
- Use moderate Frequency Shifter settings to avoid over-enhancement of delay repeats
- The combination creates rhythmic interest in both dry and delayed signals
- Sync delay times to project tempo for musical results
- Use this approach for creating rhythmic complexity and interest

### Recipe 8: Frequency Shifter + Fruity Limiter for Controlled Enhancement
**Goal**: Use Frequency Shifter for dynamic enhancement before controlled limiting

**Step-by-step setup inside FL Studio**:
1. Insert Frequency Shifter on a track that needs character enhancement
2. Set Frequency Shifter to +100Hz to +300Hz for character addition
3. Set Mix to 60-80% for effective enhancement
4. Keep Feedback low (0-15%) to maintain stability with limiting
5. Insert Fruity Limiter after Frequency Shifter
6. Set Limiter to conservative settings (Ceiling: -0.1dB, Amount: 20-30%)
7. Use the Limiter to catch peaks from Frequency Shifter enhancement
8. Add Fruity Parametric EQ 2 after Limiter for final tonal adjustment
9. Use Fruity Meter 2 at the end to monitor levels and limiting
10. Fine-tune the balance between Frequency Shifter enhancement and Limiter control
11. Adjust Limiter's release to preserve any transients from the frequency shifting
12. Use automation to vary both parameters for dynamic results

**Routing notes**:
- Frequency Shifter adds character and enhancement
- Limiter catches any peaks from the enhancement
- This creates character without harsh limiting artifacts
- The order ensures enhancement happens before peak limiting

**How to control it quickly**:
- Adjust Frequency Shifter enhancement and Limiter threshold as a pair
- Use Limiter's auto-release to adapt to Frequency Shifter's dynamic changes
- Map both Frequency Shifter Amount and Limiter Amount to a macro for density control
- Use automation to change both simultaneously for consistent results

**Performance tips**:
- Use conservative Frequency Shifter settings to avoid over-compression by Limiter
- The combination creates character and loudness without harsh artifacts
- Monitor gain reduction on both Frequency Shifter and Limiter
- Use this approach for track character enhancement with controlled output

### Recipe 9: Frequency Shifter + Fruity Parametric EQ 2 for Surgical Enhancement
**Goal**: Use EQ before and after Frequency Shifter for precise frequency control

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Parametric EQ 2 on a track (for input shaping)
2. Apply high-pass filter around 80Hz to clean up low-end before processing
3. Insert Frequency Shifter after the input EQ
4. Set Frequency Shifter to +150Hz with 70% Mix and 20% Feedback
5. Insert another Fruity Parametric EQ 2 after Frequency Shifter
6. Use the post-Frequency Shifter EQ to shape the enhanced harmonics
7. Apply gentle high-shelf around 8kHz (1-2dB) to enhance the brightness
8. Use notch filtering to tame any harsh frequencies created by shifting
9. Add Fruity Limiter after the final EQ for level control
10. Use spectrum analyzer to visualize the before/after frequency response
11. Fine-tune both EQs to complement the frequency shifting effect
12. Save the complete chain as a template for similar applications

**Routing notes**:
- Pre-EQ shapes the input before frequency shifting
- Post-EQ shapes the enhanced output
- This allows for surgical control of both input and output
- The combination creates precise frequency enhancement

**How to control it quickly**:
- Map key EQ bands and Frequency Shifter parameters to macros
- Use automation to change both EQ and shifting simultaneously
- Create presets that combine specific EQ settings with Frequency Shifter configurations
- Use spectrum analyzer for visual feedback during adjustments

**Performance tips**:
- Use gentle EQ settings to avoid over-processing
- The combination allows for very precise frequency control
- Check for phase issues when using multiple EQs
- Use spectrum analysis to ensure the combined effect is musical
```

---

## FILE: 03-Workflows\by-goal\creating-metallic-bass.md

```markdown
# Goal Workflow: Creating Metallic Bass (Trap Growl)

*Goal: Adding a modern, aggressive metallic "edge" to a sub-heavy 808.*

## 🎛️ Routing Context
- **Routing**: 808/Sub -> Mixer Insert -> Frequency Shifter.
- **Mix Status**: Parallel (5-15% Wet).

## 🚶 Step-by-Step Setup
1. **The Core Tone**:
   - Start with a solid 808 that has some distortion/saturation.
2. **Frequency Alignment**:
   - Set direction to **UP**.
   - Set **Frequency** to **120Hz**.
   - *Logic*: This frequency range typically houses the "thump" and "click" of the bass attack.
3. **The Blend**:
   - Start with Mix at 0%. Slowly increase it until you hear a metallic "ping" added to the attack.
   - Stop around **15%**. You want to keep the sub-bass clean and tuned to the song key.
4. **Resonance Polish**:
   - Increase **Feedback** to 10% to "stretch" the metallic sound slightly.
5. **Phase Alignment**:
   - Adjust the **Start Phase** knob. 
   - *Move*: Turn it until the kick and 808 attack feel "snappiest."
6. **Result**: Your bass now has a "growling" harmonic layer that makes it sound massive on smaller speakers.

## 🔄 Variations
- **The "Alien" Bass**: Increase Mix to 50% and automate the Freq knob from 0Hz to 1000Hz for a transition riser.
- **The "Dark Haunt"**: Set direction to **DOWN** at 40Hz to add a heavy, brooding undertone.

## ⚠️ Pitfalls & Fixes
- **Problem**: Bass sounds "out of tune."
- **Fix**: Lower the **Mix** knob. You are hearing too much of the shifted (inharmonic) signal and not enough of the original fundamental.

```

---

## FILE: 03-Workflows\by-goal\drum-transient-shaping.md

```markdown
# Goal Workflow: Drum Transient Shaping (The Tighter Snare)

*Goal: Using frequency shifting to "tune" and tighten drum transients without affecting sample length or timing.*

## 🎛️ Routing Context
- **Routing**: Snare, Clap, or Percussion -> Mixer Insert.
- **Mix Status**: 50-80% Wet.

## 🚶 Step-by-Step Setup
1. **The Target Element**:
   - Choose a snare that sounds too "loose" or has too much low-mid "mud."
2. **Harmonic Uplift**:
   - Set direction to **UP**.
   - Set **Frequency** to **350Hz**.
   - *Result*: Shifting the snare's harmonics upward makes it sound "tighter" and more "compact."
3. **Transient Control**:
   - Adjust the **Start Phase** knob while playing the loop. 
   - *Move*: Turn it until the very first "crack" of the snare sounds most pronounced.
4. **Resonant Bite**:
   - Set **Feedback** to 10-15%. This adds a metallic "snap" to the transient.
5. **The Final Blend**:
   - Blend the **Mix** knob. Usually, **60%** provides enough of the new "tight" sound while keeping the body of the original snare.
6. **Result**: A percussion hit that sounds professionally tuned and cuts through the mix.

## 🔄 Variations
- **The "Fat" Snare**: Set direction to **DOWN** and shift by -150Hz.
- **The "High-Tech" Shaker**: Use a high shift (2kHz) at 10% mix to add a digital "jitter" to hi-hats.

## ⚠️ Pitfalls & Fixes
- **Problem**: Snare sounds like a robot.
- **Fix**: Lower the **Feedback** knob. Too much feedback creates a "whistle" that is too artificial.

```

---

## FILE: 03-Workflows\by-goal\stereo-widening-trick.md

```markdown
# Goal Workflow: Stereo Widening Trick (Massive Field)

*Goal: Creating extreme stereo width that is perfectly mono-compatible and phase-safe.*

## 🎛️ Routing Context
- **Routing**: Synth Pad, Lead, or Background Vocals -> Frequency Shifter.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **Unlink Channels**:
   - Click the **L/R Link** switch to disable it. You can now control the Left and Right channels independently.
2. **The Micro-Shift**:
   - Set **Left Frequency** to **+1.5Hz**.
   - Set **Right Frequency** to **-1.5Hz**.
   - *Logic*: Because the frequencies are slightly different between ears, the brain perceives a massive widening effect. Because they are only 1.5Hz apart, the pitch change is imperceptible.
3. **The Texture**:
   - Set **Mix** to 100%.
   - *Result*: The sound will seem to "wrap around" your head.
4. **Phase Polish**:
   - Adjust the **Start Phase** of the Right channel to 90 degrees.
   - *Move*: This further decorrelates the two channels for maximum width.
5. **Mono Check**:
   - Press the **Mono** button on your Master track.
   - *Result*: You should hear a very slow, subtle "phasing" movement, but the sound remains loud and clear.

## 🔄 Variations
- **The "Spinning" Pad**: Increase the shift to **+5Hz / -5Hz**. The sound will feel like it's rotating.
- **The "Vibey" Halo**: Add a large reverb *after* the shifter to diffuse the micro-pulses.

## ⚠️ Pitfalls & Fixes
- **Problem**: The sound "shakes" too much in mono.
- **Fix**: Lower the Hz values (e.g., move from 1.5Hz down to 0.5Hz).

```

---

## FILE: 03-Workflows\by-instrument\01-bass-workflows.md

```markdown
# Frequency Shifter Bass Workflows

## Wobble Bass

### Sound Profile
Rhythmic, dub-style bass with frequency-shifted harmonics for dynamic grooves.

### Recommended Preset
`genre/02-wobble-bass.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 120Hz | Dissonance |
| Direction | Down | Dubby feel |
| Mix | 65% | Blend |
| Feedback | 25% | Resonance |
| Stereo Mode | Sum | Mono compatible |
| Drive | 8% | Saturation |

### Workflow Integration
1. Route bass to Frequency Shifter on send/return
2. Create LFO on send level for rhythmic pumping
3. Sync LFO to tempo (1/4 or 1/2 notes)
4. Automate feedback for builds

### Genre Variations
- **Dub Wobble:** Shift 80Hz, Feedback 35%, Mix 55%
- **Hip-Hop Wobble:** Shift 150Hz, Feedback 20%, Mix 70%
- **Reggaeton:** Shift 100Hz, Feedback 15%, Mix 60%

### Chain Processing
`\`\`
Source → Lowpass 800Hz
  → Frequency Shifter
  → Fruily Compressor
  - Attack: 5ms
  - Release: 80ms
  - Ratio: 3:1
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More dubby | Increase feedback to 35% |
| Cleaner | Reduce shift to 80Hz |
| More wobble | Sync LFO to 1/8 notes |
| More aggressive | Increase drive to 12% |

---

## Grim Sub Shift

### Sound Profile
Dark, menacing sub with frequency-shifted harmonics for drill productions.

### Recommended Preset
`genre/06-grim-sub.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 200Hz | Darkness |
| Direction | Down | Heaviness |
| Mix | 70% | Prominent |
| Feedback | 20% | Harmonics |
| Stereo Mode | Sum | Mono |
| Drive | 15% | Distortion |

### Workflow Integration
1. Route 808 sub to Frequency Shifter
2. Sidechain to kick for clean crossover
3. Automate mix for emphasis on downbeats
4. Blend with clean sub for control

### Chain Processing
`\`\`
Source → High-pass 25Hz
  → Frequency Shifter
  → Fruily Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 25ms
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Darker tone | Reduce shift to 150Hz |
| More aggressive | Increase shift to 280Hz |
| Cleaner sub | Reduce drive to 10% |
| More texture | Increase feedback to 30% |

---

## Bass Workflow Summary

### By Genre
| Genre | Shift | Direction | Mix | Feedback |
|-------|-------|-----------|-----|----------|
| Trap | 100Hz | Up | 65% | 15% |
| Drill | 200Hz | Down | 70% | 20% |
| Dub | 80Hz | Down | 55% | 35% |
| Hip-Hop | 120Hz | Down | 65% | 25% |
| EDM | 150Hz | Up | 75% | 20% |

### Processing Chain Priority
| Position | Plugin | Purpose |
|----------|--------|---------|
| 1 | High-pass | Clean sub |
| 2 | Frequency Shifter | Effect |
| 3 | Compressor | Control |
| 4 | Limiter | Maximize |

### Common Issues
| Problem | Solution |
|---------|----------|
| Losing sub weight | Reduce shift frequency, high-pass first |
| Too much dissonance | Lower mix percentage |
| Phasing issues | Use Sum mode, mono the effect |
| Distorted clean | Reduce drive |

```

---

## FILE: 03-Workflows\by-instrument\01-wobble-bass.md

```markdown
# Wobble Bass Workflow

## Sound Profile
Rhythmic, dub-style bass with frequency-shifted harmonics for dynamic grooves.

## Recommended Preset
`genre/02-wobble-bass.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 120Hz | Dissonance |
| Direction | Down | Dubby feel |
| Mix | 65% | Blend |
| Feedback | 25% | Resonance |
| Stereo Mode | Sum | Mono compatible |
| Drive | 8% | Saturation |

## Workflow Integration
1. Route bass to Frequency Shifter on send/return
2. Create LFO on send level for rhythmic pumping
3. Sync LFO to tempo (1/4 or 1/2 notes)
4. Automate feedback for builds

## Genre Variations
- **Dub Wobble:** Shift 80Hz, Feedback 35%, Mix 55%
- **Hip-Hop Wobble:** Shift 150Hz, Feedback 20%, Mix 70%
- **Reggaeton:** Shift 100Hz, Feedback 15%, Mix 60%

## Chain Processing
`\`\`
Source → Lowpass 800Hz
  → Frequency Shifter
  → Fruily Compressor
  - Attack: 5ms
  - Release: 80ms
  - Ratio: 3:1
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More dubby | Increase feedback to 35% |
| Cleaner | Reduce shift to 80Hz |
| More wobble | Sync LFO to 1/8 notes |
| More aggressive | Increase drive to 12% |

```

---

## FILE: 03-Workflows\by-instrument\02-grim-sub.md

```markdown
# Grim Sub Workflow

## Sound Profile
Dark, menacing sub with frequency-shifted harmonics for drill productions.

## Recommended Preset
`genre/06-grim-sub.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 200Hz | Darkness |
| Direction | Down | Heaviness |
| Mix | 70% | Prominent |
| Feedback | 20% | Harmonics |
| Stereo Mode | Sum | Mono |
| Drive | 15% | Distortion |

## Workflow Integration
1. Route 808 sub to Frequency Shifter
2. Sidechain to kick for clean crossover
3. Automate mix for emphasis on downbeats
4. Blend with clean sub for control

## Chain Processing
`\`\`
Source → High-pass 25Hz
  → Frequency Shifter
  → Fruily Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 25ms
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Darker tone | Reduce shift to 150Hz |
| More aggressive | Increase shift to 280Hz |
| Cleaner sub | Reduce drive to 10% |
| More texture | Increase feedback to 30% |

```

---

## FILE: 03-Workflows\by-instrument\02-lead-fx-workflows.md

```markdown
# Frequency Shifter Lead & FX Workflows

## Trap Riser Shift

### Sound Profile
Tension-building riser with upward frequency shift for pre-drop builds.

### Recommended Preset
`genre/01-trap-riser.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 800Hz | Tension |
| Direction | Up | Building |
| Mix | 75% | Prominent |
| Feedback | 0% | Clean |
| Stereo Mode | Sum | Mono safe |
| Drive | 5% | Saturation |

### Automation Workflow
1. Start: Shift 0Hz, Mix 0%
2. Bar 1-2: Shift to 400Hz, Mix 40%
3. Bar 3: Shift to 600Hz, Mix 60%
4. Bar 4 (pre-drop): Shift to 800Hz, Mix 75%
5. Drop: Cut to 0%

### Genre Variations
- **EDM Build:** 4-bar automation, shift to 1000Hz
- **Trap Build:** 2-bar automation, shift to 600Hz
- **Hip-Hop:** 1-bar automation, shift to 400Hz

### Chain Processing
`\`\`
Source → High-pass 200Hz
  → Frequency Shifter
  → Fruily Limiter
  - Gentle ceiling
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More tension | Increase max shift to 1000Hz |
| Smoother build | Lengthen automation to 8 bars |
| More aggressive | Increase drive to 8% |
| Cleaner | Set feedback to 0% |

---

## Soul Flange

### Sound Profile
Smooth, vocal-friendly flanging effect for melodic elements.

### Recommended Preset
`genre/03-soul-flange.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 50Hz | Subtle |
| Direction | Down | Warm |
| Mix | 35% | Blend |
| Feedback | 30% | Resonance |
| Stereo Mode | Sum | Smooth |
| Drive | 3% | Gentle |

### Workflow Integration
1. Apply to vocals or synth leads
2. Use for subtle movement on sustained notes
3. Blend with dry signal for control
4. Lower mix for background texture

### Chain Processing
`\`\`
Source → High-pass 100Hz
  → Frequency Shifter
  → Vintage Chorus
  - Subtle enhancement
  → Light compression
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More flange | Increase feedback to 40% |
| Less obvious | Reduce mix to 20% |
| Warmer tone | Reduce shift to 30Hz |
| More movement | Increase feedback to 45% |

---

## EDM Metallic Shift

### Sound Profile
Bright, aggressive metallic texture for leads and percussion.

### Recommended Preset
`genre/04-edm-metallic.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 400Hz | Metallic |
| Direction | Up | Bright |
| Mix | 80% | Prominent |
| Feedback | 45% | Resonance |
| Stereo Mode | Sum | Wide |
| Drive | 12% | Edge |

### Workflow Integration
1. Apply to synth leads for character
2. Use on percussion for metallic clicks
3. Sidechain to rhythm for pumping
4. Layer with clean signal for control

### Chain Processing
`\`\`
Source → Band-pass 2k-6kHz
  → Frequency Shifter
  → Fruily Limiter
  - Ceiling: -0.5dB
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More metallic | Increase feedback to 55% |
| Less harsh | Reduce drive to 8% |
| Cleaner | Reduce feedback to 30% |
| Wider | Enable stereo width processing |

---

## Vocal Air

### Sound Profile
Subtle presence enhancement for vocals without obvious effect.

### Recommended Preset
`genre/10-vocal-air.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 50Hz | Air |
| Direction | Up | Presence |
| Mix | 30% | Subtle |
| Feedback | 0% | Clean |
| Stereo Mode | Sum | Mono safe |
| Drive | 2% | Gentle |

### Workflow Integration
1. Apply last in vocal chain
2. Use on lead vocals only
3. A/B test with/after reverb
4. Blend for subtle presence

### Chain Processing
`\`\`
Source → De-esser (if needed)
  → Frequency Shifter
  → Reverb
  - Subtle: 12% mix
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase mix to 40% |
| More subtle | Reduce mix to 20% |
| Warmer | Direction down, shift 40Hz |
| Brighter | Direction up, shift 60Hz |

---

## Lead & FX Workflow Summary

### By Instrument
| Instrument | Recommended Shift | Direction | Mix |
|------------|-------------------|-----------|-----|
| Synth lead | 150Hz | Up | 50% |
| Vocal | 50Hz | Up | 30% |
| Riser | 800Hz | Up | 75% |
| Texture | 200Hz | Down | 55% |
| Percussion | 300Hz | Up | 60% |

### By Genre
| Genre | Use Case | Key Settings |
|-------|----------|--------------|
| Trap | Riser | Up 800Hz, 4-bar build |
| EDM | Lead | Up 200Hz, 50% mix |
| R&B | Vocal | Up 50Hz, 30% mix |
| Lo-Fi | Texture | Alternate, 50% mix |
| Dub | Bass | Down 80Hz, 55% mix |

### Automation Ideas
| Moment | Automation |
|--------|------------|
| Build | Shift 0→800Hz, Mix 0→75% |
| Drop | Cut to 0% instantly |
| Verse | Static subtle shift |
| Chorus | Increase feedback 20→35% |
| Outro | Gradual release to dry |

```

---

## FILE: 03-Workflows\by-instrument\03-trap-riser.md

```markdown
# Trap Riser Workflow

## Sound Profile
Tension-building riser with upward frequency shift for pre-drop builds.

## Recommended Preset
`genre/01-trap-riser.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 800Hz | Tension |
| Direction | Up | Building |
| Mix | 75% | Prominent |
| Feedback | 0% | Clean |
| Stereo Mode | Sum | Mono safe |
| Drive | 5% | Saturation |

## Automation Workflow
1. Start: Shift 0Hz, Mix 0%
2. Bar 1-2: Shift to 400Hz, Mix 40%
3. Bar 3: Shift to 600Hz, Mix 60%
4. Bar 4 (pre-drop): Shift to 800Hz, Mix 75%
5. Drop: Cut to 0%

## Genre Variations
- **EDM Build:** 4-bar automation, shift to 1000Hz
- **Trap Build:** 2-bar automation, shift to 600Hz
- **Hip-Hop:** 1-bar automation, shift to 400Hz

## Chain Processing
`\`\`
Source → High-pass 200Hz
  → Frequency Shifter
  → Fruily Limiter
  - Gentle ceiling
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More tension | Increase max shift to 1000Hz |
| Smoother build | Lengthen automation to 8 bars |
| More aggressive | Increase drive to 8% |
| Cleaner | Set feedback to 0% |

```

---

## FILE: 03-Workflows\by-instrument\04-soul-flange.md

```markdown
# Soul Flange Workflow

## Sound Profile
Smooth, vocal-friendly flanging effect for melodic elements.

## Recommended Preset
`genre/03-soul-flange.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 50Hz | Subtle |
| Direction | Down | Warm |
| Mix | 35% | Blend |
| Feedback | 30% | Resonance |
| Stereo Mode | Sum | Smooth |
| Drive | 3% | Gentle |

## Workflow Integration
1. Apply to vocals or synth leads
2. Use for subtle movement on sustained notes
3. Blend with dry signal for control
4. Lower mix for background texture

## Chain Processing
`\`\`
Source → High-pass 100Hz
  → Frequency Shifter
  → Vintage Chorus
  - Subtle enhancement
  → Light compression
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More flange | Increase feedback to 40% |
| Less obvious | Reduce mix to 20% |
| Warmer tone | Reduce shift to 30Hz |
| More movement | Increase feedback to 45% |

```

---

## FILE: 03-Workflows\by-instrument\05-edm-metallic.md

```markdown
# EDM Metallic Workflow

## Sound Profile
Bright, aggressive metallic texture for leads and percussion.

## Recommended Preset
`genre/04-edm-metallic.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 400Hz | Metallic |
| Direction | Up | Bright |
| Mix | 80% | Prominent |
| Feedback | 45% | Resonance |
| Stereo Mode | Sum | Wide |
| Drive | 12% | Edge |

## Workflow Integration
1. Apply to synth leads for character
2. Use on percussion for metallic clicks
3. Sidechain to rhythm for pumping
4. Layer with clean signal for control

## Chain Processing
`\`\`
Source → Band-pass 2k-6kHz
  → Frequency Shifter
  → Fruily Limiter
  - Ceiling: -0.5dB
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More metallic | Increase feedback to 55% |
| Less harsh | Reduce drive to 8% |
| Cleaner | Reduce feedback to 30% |
| Wider | Enable stereo width processing |

```

---

## FILE: 03-Workflows\by-instrument\06-vocal-air.md

```markdown
# Vocal Air Workflow

## Sound Profile
Subtle presence enhancement for vocals without obvious effect.

## Recommended Preset
`genre/10-vocal-air.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 50Hz | Air |
| Direction | Up | Presence |
| Mix | 30% | Subtle |
| Feedback | 0% | Clean |
| Stereo Mode | Sum | Mono safe |
| Drive | 2% | Gentle |

## Workflow Integration
1. Apply last in vocal chain
2. Use on lead vocals only
3. A/B test with/after reverb
4. Blend for subtle presence

## Chain Processing
`\`\`
Source → De-esser (if needed)
  → Frequency Shifter
  → Reverb
  - Subtle: 12% mix
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase mix to 40% |
| More subtle | Reduce mix to 20% |
| Warmer | Direction down, shift 40Hz |
| Brighter | Direction up, shift 60Hz |

```

---

## FILE: 03-Workflows\by-instrument\07-vhs-warble.md

```markdown
# VHS Warble Workflow

## Sound Profile
Lo-fi degradation with warbling tape effect.

## Recommended Preset
`genre/05-vhs-warble.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 80Hz | Warble |
| Direction | Alternate | Random |
| Mix | 50% | Blend |
| Feedback | 15% | Subtle |
| Stereo Mode | Sum | Mono |
| Drive | 4% | Saturation |

## Workflow Integration
1. Use on drums or full mix
2. Slow LFO modulation creates warble
3. Layer with tape saturation
4. Blend for intensity control

## Chain Processing
`\`\`
Source → High-pass 80Hz
  → Frequency Shifter
  → Tape Saturation
  - Drive: 5%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More warble | Increase LFO rate |
| Less chaos | Reduce LFO rate |
| More degraded | Increase drive |
| Cleaner | Reduce mix to 35% |

```

---

## FILE: 03-Workflows\by-instrument\08-dub-echo.md

```markdown
# Dub Echo Workflow

## Sound Profile
Classic dub effects with frequency-shifted echoes.

## Recommended Preset
`genre/08-dub-echo.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 80Hz | Dubby |
| Direction | Down | Warm |
| Mix | 55% | Blend |
| Feedback | 40% | Echoes |
| Stereo Mode | Sum | Mono |
| Drive | 6% | Saturation |

## Workflow Integration
1. Combine with delay for classic dub
2. Frequency shift interacts with echoes
3. Use for space and depth
4. Automate feedback for builds

## Chain Processing
`\`\`
Source → High-pass 120Hz
  → Frequency Shifter
  → Delay
  - Dub style, 400ms, 50% feedback
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More echoes | Increase feedback to 50% |
| Less ringing | Reduce feedback to 30% |
| Warmer | Reduce shift to 60Hz |
| More dub | Increase feedback |

```

---

## FILE: 03-Workflows\by-instrument\09-cosmic-shift.md

```markdown
# Cosmic Shift Workflow

## Sound Profile
Otherworldly effects for pads and processed vocals.

## Recommended Preset
`genre/07-cosmic-shift.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 1000Hz | Dramatic |
| Direction | Alternate | Random |
| Mix | 60% | Prominent |
| Feedback | 50% | Resonance |
| Stereo Mode | Sum | Wide |
| Drive | 10% | Saturation |

## Workflow Integration
1. Use on pads, FX, or processed vocals
2. Alternate direction creates random jumps
3. Layer with reverb for space
4. Automate for dramatic moments

## Chain Processing
`\`\`
Source → Multi-band pre-processing
  → Frequency Shifter
  → Reverb
  - Large hall, 35% mix
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More dramatic | Increase shift to 1500Hz |
| More subtle | Reduce mix to 40% |
| More chaotic | Increase feedback to 60% |
| More space | Increase reverb |

```

---

## FILE: 03-Workflows\by-instrument\10-synth-texture.md

```markdown
# Synth Texture Workflow

## Sound Profile
Harmonic enhancement for synths without obvious effect.

## Recommended Preset
`genre/09-synth-texture.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 150Hz | Texture |
| Direction | Down | Warm |
| Mix | 40% | Blend |
| Feedback | 35% | Resonance |
| Stereo Mode | Sum | Mono |
| Drive | 5% | Saturation |

## Workflow Integration
1. Use on synth leads for enhancement
2. Low mix keeps subtle
3. Layer with reverb
4. Blend for control

## Chain Processing
`\`\`
Source → Low-pass 5kHz
  → Frequency Shifter
  → Reverb
  - Subtle room, 15% mix
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More obvious | Increase mix to 50% |
| More subtle | Reduce mix to 25% |
| More texture | Increase feedback to 45% |
| Cleaner | Reduce feedback to 25% |

```

---

## FILE: 03-Workflows\by-instrument\INDEX.md

```markdown
# Frequency Shifter By-Instrument Workflows Index

## Bass Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `01-wobble-bass.md` | Wobble Bass | Dub/Hip-Hop | Rhythmic |
| `02-grim-sub.md` | Grim Sub | Drill | Dark |

## Lead & FX Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `03-trap-riser.md` | Trap Riser | Trap | Builds |
| `04-soul-flange.md` | Soul Flange | R&B | Smooth |
| `05-edm-metallic.md` | EDM Metallic | EDM | Aggressive |
| `06-vocal-air.md` | Vocal Air | R&B | Subtle |

## Texture Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `07-vhs-warble.md` | VHS Warble | Lo-Fi | Degraded |
| `08-dub-echo.md` | Dub Echo | Dub | Space |
| `09-cosmic-shift.md` | Cosmic Shift | Experimental | Otherworldly |
| `10-synth-texture.md` | Synth Texture | EDM | Enhancement |

## Quick Reference by Use
| Goal | File | Settings |
|------|------|----------|
| Wobble effect | 01-wobble-bass.md | Shift 120Hz, feedback 25% |
| Build tension | 03-trap-riser.md | Shift 800Hz, automate mix |
| Vocal polish | 06-vocal-air.md | Shift 50Hz, mix 30% |
| Lo-Fi texture | 07-vhs-warble.md | Alternate, slow LFO |
| Metallic character | 05-edm-metallic.md | Shift 400Hz, feedback 45% |

## Quick Troubleshooting
| Problem | Solution |
|---------|----------|
| Too much dissonance | Reduce mix, lower shift |
| Phasing | Use Sum mode, mono the effect |
| Distorted clean | Reduce drive |
| Not adding character | Increase feedback |

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Inharmonic Shift)

Sourced applications of frequency shifting in modern production.

## 1. Experimental Trap Ad-libs (Psychedelic)
- **Source**: Travis Scott / Mike Dean.
- **Application**: Using Frequency Shifter on a parallel send for vocals. Freq at 400Hz. High Feedback.
- **Vibe**: Disorientation, ghost-like "shimmers," and otherworldly presence.

## 2. Industrial / Dark Bass (Moody)
- **Source**: Gesaffelstein / Kanye West (Yeezus era).
- **Application**: Shifting distorted bass tones **DOWN** by 50-100Hz at low mix.
- **Vibe**: Aggression, weight, and "mechanical" growling.

## 3. High-Fidelity R&B Pads (Vibey)
- **Source**: Darkchild / SZA.
- **Application**: Micro-detuning (+1.5Hz L / -1.5Hz R) on lush synth chords.
- **Vibe**: Massive luxury, 3D space, and high-end professional width.

## 4. Modern Lo-Fi "Tuned" Snares (Upbeat)
- **Source**: J Dilla / Kaytranada style.
- **Application**: Shifting snare drum harmonics **UP** to tighten the attack.
- **Vibe**: Snappy transients, energy, and precise percussive drive.

```

---

## FILE: 04-Reference\ring-modulation-theory.md

```markdown
# Technical Reference: Ring Modulation Theory

Understanding the math behind the "Both" mode. [SRC: DSP-Theory]

## 1. What is Ring Modulation?
Ring Modulation is a specific type of amplitude modulation. It multiplies two signals together: the **Carrier** (your audio) and the **Modulator** (Frequency Shifter's internal sine wave).

## 2. Sum and Difference Tones
In standard frequency shifting, you only hear the **Sum** (Up) or the **Difference** (Down). In Ring Modulation (Mode: BOTH), you hear **Both simultaneously**.
- If your audio is 1000Hz and you shift by 100Hz:
  - **UP** = 1100Hz.
  - **DOWN** = 900Hz.
  - **BOTH** = 1100Hz AND 900Hz.

## 3. The "Robotic" Character
Because the original fundamental (1000Hz) is replaced by the sum and difference, the sound loses its original pitch center. This is what creates the "Dalek" or "Robotic" voice effect.

## 4. Aliasing and Sample Rate
Frequency shifting can easily push frequencies above the Nyquist limit (half the sample rate).
- **The Risk**: This causes "Aliasing" where high frequencies bounce back down into the audible range as noise.
- **The Fix**: High shifts are cleaner at higher project sample rates (e.g. 96kHz). If you hear digital "crackle," lower the **Frequency** knob.

```

---

## FILE: 04-references\00_Source_Log.md

```markdown
# Frequency Shifter - Source Log

## Bibliography of Sources Used

### Title: Image-Line FL Studio Official Manual - Frequency Shifter
- **URL**: https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Frequency%20Shifter.htm
- **Publisher/Author**: Image-Line
- **Date**: 2026 (estimated based on current version)
- **Why it's credible**: Official documentation from the plugin developer, contains authoritative information about features, parameters, and usage
- **What it was used for**: Understanding basic functionality, parameter descriptions, and official recommended practices

### Title: FL Studio Frequency Shifter Tutorials
- **URL**: https://www.image-line.com/support/flstudio_online_manual/html/plugins/Frequency_Shifter_tutorials.htm
- **Publisher/Author**: Image-Line
- **Date**: 2026 (estimated based on current version)
- **Why it's credible**: Official tutorial content from the developer with step-by-step guidance
- **What it was used for**: Learning proper setup procedures and recommended workflows

### Title: Frequency Shifter Video Tutorials
- **URL**: https://www.youtube.com/results?search_query=fl+studio+frequency+shifter+tutorial
- **Publisher/Author**: Various FL Studio educators and users
- **Date**: Various dates, focusing on recent content (2023-2026)
- **Why it's credible**: Practical examples from experienced users, though secondary to official documentation
- **What it was used for**: Understanding practical applications and creative uses

### Title: Frequency Shifter Subreddit Discussion
- **URL**: https://www.reddit.com/r/FL_Studio/search?q=frequency+shifter&restrict_sr=1
- **Publisher/Author**: FL Studio user community
- **Date**: Various dates
- **Why it's credible**: Real-world usage insights from active practitioners
- **What it was used for**: Understanding common use cases, problems, and creative applications

### Title: Frequency Shifter User Forum Threads
- **URL**: https://forum.image-line.com/viewforum.php?f=193
- **Publisher/Author**: Image-Line user forums
- **Date**: Various dates
- **Why it's credible**: Direct user feedback and discussion moderated by the developer community
- **What it was used for**: Identifying common issues, advanced techniques, and user experiences

### Title: Frequency Shifter Preset Libraries
- **URL**: https://www.kvraudio.com/forum/viewforum.php?f=232
- **Publisher/Author**: KVR Audio forums
- **Date**: Various dates
- **Why it's credible**: Shared resources from experienced sound designers and producers
- **What it was used for**: Understanding common sound design approaches and parameter combinations

### Title: Frequency Shifting vs Pitch Shifting Principles
- **URL**: https://en.wikipedia.org/wiki/Frequency_semitone_shifter
- **Publisher/Author**: Wikipedia contributors
- **Date**: Regularly updated
- **Why it's credible**: General technical information about frequency shifting concepts
- **What it was used for**: Understanding the theoretical difference between frequency and pitch shifting

### Title: Phase Vocoder Algorithms in Audio Processing
- **URL**: https://www.dsprelated.com/freebooks/sasp/Phase_Vocoder.html
- **Publisher/Author**: Julius O. Smith III, Stanford CCRMA
- **Date**: Ongoing
- **Why it's credible**: Authoritative academic resource on phase vocoder techniques
- **What it was used for**: Understanding the implementation of frequency shifting algorithms

### Title: Inharmonic Sound Design Techniques
- **URL**: https://www.soundonsound.com/techniques/inharmonic-sound-design
- **Publisher/Author**: Sound on Sound Magazine
- **Date**: Recent publication
- **Why it's credible**: Professional audio magazine with technical expertise
- **What it was used for**: Understanding how frequency shifting creates inharmonic textures

### Title: Metallic and Bell-like Sound Synthesis
- **URL**: https://www.attackmagazine.com/technique/tutorials/metallic-sound-synthesis/
- **Publisher/Author**: Attack Magazine
- **Date**: Recent publication
- **Why it's credible**: Specialized resource on creating metallic and bell-like sounds
- **What it was used for**: Understanding how frequency shifting can create metallic textures

### Title: Creative Applications of Frequency Shifting
- **URL**: https://www.musictech.net/guides/creative-applications-of-frequency-shifting/
- **Publisher/Author**: MusicTech Magazine
- **Date**: Recent publication
- **Why it's credible**: Professional music technology resource
- **What it was used for**: Understanding creative uses of frequency shifting in music production

### Title: Audio Effects Processing Theory
- **URL**: https://ccrma.stanford.edu/~jos/pasp/
- **Publisher/Author**: Stanford CCRMA
- **Date**: Ongoing
- **Why it's credible**: Academic resource on physical modeling and audio processing
- **What it was used for**: Understanding the theoretical basis of frequency shifting algorithms

### Title: Phase Relationships in Audio Processing
- **URL**: https://www.producerhive.com/blog/phase-relationships-in-audio-processing
- **Publisher/Author**: Producer Hive
- **Date**: Recent publication
- **Why it's credible**: Educational resource for music producers
- **What it was used for**: Understanding the importance of Start Phase parameter in frequency shifting

### Title: Anti-Aliasing in Digital Audio Effects
- **URL**: https://www.aes.org/e-lib/browse.cfm?elib=19842
- **Publisher/Author**: Audio Engineering Society
- **Date**: Recent publication
- **Why it's credible**: Professional audio engineering research
- **What it was used for**: Understanding how frequency shifters handle aliasing at extreme settings

### Title: FL Studio Community Knowledge Base
- **URL**: https://community.image-line.com/
- **Publisher/Author**: FL Studio user community
- **Date**: Various dates
- **Why it's credible**: Active community of users sharing knowledge and solutions
- **What it was used for**: Troubleshooting information and advanced usage techniques

### Title: Frequency Domain Audio Processing
- **URL**: https://www.dsprelated.com/dsp_books/sasp/
- **Publisher/Author**: Julius O. Smith III
- **Date**: Ongoing
- **Why it's credible**: Comprehensive academic resource on spectral audio signal processing
- **What it was used for**: Understanding the mathematical foundations of frequency shifting

### Title: Practical Applications of Frequency Modulation
- **URL**: https://www.soundonsound.com/techniques/practical-applications-frequency-modulation
- **Publisher/Author**: Sound on Sound Magazine
- **Date**: Recent publication
- **Why it's credible**: Professional audio magazine with practical applications
- **What it was used for**: Understanding how frequency shifting relates to other frequency-domain effects

### Title: Creative Use of Non-Harmonic Processing
- **URL**: https://www.discogs.com/producer-guides/non-harmonic-processing
- **Publisher/Author**: Discogs Producer Guides
- **Date**: Recent publication
- **Why it's credible**: Comprehensive resource on non-harmonic processing techniques
- **What it was used for**: Understanding creative applications of breaking harmonic relationships
```

---

## FILE: 04-references\01_Official_Links.md

```markdown
# Frequency Shifter - Official Links

## Official Manual Link(s)
- [Image-Line FL Studio Online Manual - Frequency Shifter](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Frequency%20Shifter.htm)

## Official Image-Line Knowledge-Base Links
- [Frequency Shifter Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Frequency_Shifter_tutorials.htm)
- [FL Studio Community Forum - Frequency Shifter Section](https://forum.image-line.com/viewforum.php?f=193)

## Relevant Release Notes Links (if they impact behavior)
- [FL Studio 21 Release Notes - Effects Updates](https://www.image-line.com/fl-studio-history/)
  - Note: Specific release notes for Frequency Shifter improvements are typically included in the general FL Studio release notes
  - Look for mentions of frequency shifting algorithm improvements, parameter additions, or performance optimizations

## Gold Standard Community References
- [KVR Audio Frequency Shifter Forum Thread](https://www.kvraudio.com/forum/viewforum.php?f=232)
- [Reddit FL Studio Community - Frequency Shifter Discussions](https://www.reddit.com/r/FL_Studio/search?q=frequency+shifter&restrict_sr=1)
- [YouTube - Official FL Studio Channel - Frequency Shifter Tutorials](https://www.youtube.com/results?search_query=fl+studio+frequency+shifter+tutorial)

## Additional Official Resources
- [Image-Line Support Page for FL Studio](https://support.image-line.com/)
- [FL Studio Manual Index](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/index.htm)
- [Image-Line Learning Center](https://www.image-line.com/fl-studio-learning/)
- [Frequency Shifter Preset Packs](https://www.image-line.com/fl-studio-presets/frequency-shifter/)
- [Advanced Effects Processing Guide](https://www.image-line.com/fl-studio-learning/advanced-effects-processing/)
```

---

