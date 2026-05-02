# Fruity Chorus - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Chorus - Lush Modulation Effect

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗     ██████╗██╗  ██╗ ██████╗ ██████╗ ██╗   ██╗███████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔════╝██║  ██║██╔═══██╗██╔══██╗██║   ██║██╔════╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║     ███████║██║   ██║██████╔╝██║   ██║███████╗
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║     ██╔══██║██║   ██║██╔══██╗██║   ██║╚════██║
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ╚██████╗██║  ██║╚██████╔╝██║  ██║╚██████╔╝███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝        ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
`\`\`

**Plugin Type:** Chorus / Modulation
**Category:** Effect / Modulation
**Official Manual:** [Image-Line Fruity Chorus Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Chorus.htm)

---

## 🎯 What is Fruity Chorus?

Fruity Chorus thickens audio by creating multiple detuned copies of the original signal. It simulates the effect of multiple instruments playing the same part slightly imperfectly (like a choir or string section). It is essential for adding width, movement, and "shimmer" to static sounds like synth pads, guitars, and vocals.

**Key Capabilities:**
- **Delay:** Sets the offset of the chorus voices (2-20ms).
- **Depth:** Controls the amount of pitch modulation (detune).
- **Stereo:** Controls the stereo width of the effect (Phase inversion).
- **LFO:** Controls the speed and shape of the modulation.
- **Cross Cutoff:** Allows you to apply chorus ONLY to High or Low frequencies (essential for bass!).

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **chorus-vs-flanger.md**
3. Create **parameter-cheat-sheet.md**
4. Apply to a Sawtooth lead to hear the "thickening" effect.

### For Mix Engineers:
1. Review **bass-chorus-techniques.md** (Using the Cross Cutoff)
2. Study **vocal-thickening.md**
3. Learn **stereo-width-management.md**

### For Sound Designers:
1. Study **juno-style-pads.md**
2. Review **vibrato-effects.md** (High Depth, Fast LFO)
3. Learn **underwater-textures.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Delay:** Millisecond offset (Low = Flanger-like, High = Doubling).
  - **Depth:** How "out of tune" the copies get.
  - **Stereo:** Width of the effect (Phase offset).
  - **LFO Freq:** Speed of the wobble.
  - **LFO Wave:** Sine vs Sawtooth modulation.
  - **Cross Type/Cutoff:** HP/LP filter for the effect path.

- [ ] **chorus-vs-flanger.md**
  - **Chorus:** Longer delays (10-30ms), no feedback, pitch modulation focus.
  - **Flanger:** Short delays (<10ms), feedback loop, comb filtering focus.

#### 02-Data/parameters/
- [ ] **fruity-chorus-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Chorus",
    "category": "Effect",
    "parameters": [
      {
        "name": "Delay",
        "type": "slider",
        "unit": "ms",
        "description": "Base delay time for voices",
        "use_cases": ["thickening", "doubling"]
      },
      {
        "name": "Cross Cutoff",
        "type": "knob",
        "description": "Splits frequency for processing",
        "pro_tip": "Set to 'Process HF' to keep sub-bass mono and clean"
      }
    ]
  }
  `\`\`

#### 02-Data/presets/
- [ ] **classic-chorus-presets.json**
  - Roland Juno Style (Fast LFO, Med Depth)
  - Subtle Vocal Widen (Slow LFO, Low Depth)
  - Bass Shimmer (High Cross Cutoff, Med Depth)

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **bass-chorus-techniques.md**
  - Setting "Cross Type" to "Process HF"
  - Adjusting Cutoff to ~200Hz
  - Result: Wide, shimmering top end with solid, mono sub-bass.

- [ ] **juno-style-pads.md**
  - Emulating vintage analog synth choruses
  - Using "Sine" LFO wave
  - Balancing Depth and Rate

- [ ] **vibrato-effects.md**
  - Using 100% Wet mix
  - Short Delay
  - Fast LFO
  - Creating pitch-wobble effects

#### 03-Workflows/by-context/
- [ ] **guitar-clean-tone.md**
- [ ] **rhodes-piano-widen.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **lfo-shapes-analysis.md**
  - Difference between Sine (Smooth) and other LFO shapes in chorus context.
  - How Stereo Phase affects the LFO L/R sync.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understanding Modulation

**Tasks:**
1. Load a simple Mono synth lead
2. Increase "Depth" and hear the pitch wobble
3. Increase "Stereo" and hear the width
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does "Delay" change the character (Metallic vs Lush)?
- Why does too much Depth make it sound out of tune?
- How does the Cross Cutoff work?

### Phase 2: Advanced Application (Week 2)
**Goal:** Clean Mixing

**Tasks:**
1. Apply Chorus to a Bass guitar
2. Use Cross Cutoff to clean up the low end
3. Compare "Sine" vs "Invert" stereo modes (if applicable)
4. Create bass-chorus-techniques.md

**Key Questions to Answer:**
- How to avoid phase cancellation in Mono?
- Difference between 1 voice and 3 voice chorus? (Fruity Chorus is a specific algorithm)

---

## 📊 Plugin Specifications to Document

### Modulation Engine
- LFO Waveforms (Sine, etc.)
- Delay Range (ms)
- Frequency Splitter slope (for Cross Cutoff)

### Controls
- Wet/Dry Mix capability
- Stereo Phase offset

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I stop the chorus from making my Bass muddy? (Answer: Cross Cutoff)
2. What is the difference between Depth and Delay?
3. How do I make it sound like a "Leslie" speaker? (Fast LFO)

### Advanced Usage
1. How to create a "Dimension D" style subtle effect?
2. Using Chorus on Reverb tails for more width?

---

## 📝 Documentation Standards

### For Each Workflow:
- **LFO Rate:** Fast/Slow/Medium
- **Depth:** Percent
- **Stereo:** Width amount
- **Cross Filter:** Setting for clean low-end

---

## 🔗 Cross-Reference with Other Plugins

Fruity Chorus is often used with:
- **Fruity Flanger** (Similar modulation, distinct sound)
- **Fruity Phaser** (Frequency sweeping instead of pitch detuning)
- **Fruity Reverb 2** (Chorus usually goes BEFORE reverb)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Chorus/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── chorus-vs-flanger.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-chorus-params.json
│   └── presets/
│       └── classic-chorus-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── bass-chorus-techniques.md
│   │   ├── juno-style-pads.md
│   │   └── vibrato-effects.md
│
└── 04-Reference/
    └── lfo-shapes-analysis.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Chorus Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Chorus.htm)
- [Fruity Chorus Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Chorus_tutorials.htm)
- [Fruity Chorus Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+chorus+tutorial)

### Community Resources
- [Fruity Chorus Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+chorus&restrict_sr=1)
- [Fruity Chorus User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Chorus Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Limiter** for monitoring output levels
- **Wave Candy** for precise waveform analysis

### Recommended Learning Materials
- "Chorus Explained" - Understanding modulation effects
- "Vintage Synth Emulation" - Recreating classic chorus sounds
- "Stereo Field Management" - Proper use of stereo effects

### Advanced Techniques
- **Cross Cutoff Management:** Using frequency splits for clean low-end
- **Vintage Emulation:** Recreating classic hardware chorus sounds
- **Vibrato Effects:** Using chorus parameters for pitch modulation

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Widen a bassline without ruining the sub-frequencies
- [ ] Create a vintage "Juno-60" pad sound
- [ ] Explain why "Depth" changes pitch
- [ ] Create a "seasick" pitch wobble effect

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Chorus

## Purpose & Identity
Fruity Chorus is a classic modulation effect designed to add **thickness, width, and shimmering movement** to a sound. It works by creating multiple copies of the original signal, slightly delaying them, and oscillating their pitch. This simulates the natural variations heard when multiple people sing the same part (a choir). [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a singer. Now imagine two "ghost" versions of that singer standing slightly to the left and right. These ghosts are singing slightly out of tune and their timing is constantly drifting. The result is a sound that feels "lush" and "wide" rather than thin and centered.

## Hip-Hop / R&B Context
In urban production, chorus provides the "expensive" polish.
- **R&B Backing Vocals:** Widening "halos" of vocals to wrap around the lead.
- **Synth Pad "Glue":** Making digital synth chords feel more analog and "warm."
- **Stereo 808s:** Using the **Cross Cutoff** to add width to the top-end of a bass while keeping the sub-bass solid and mono.

## When To Use
- When a sound feels **too "digital" or static** and needs life.
- When you want to **widen a mono sound** without using a delay.
- When you need a **Vibrato** effect (by setting the mix to 100% wet).

## When NOT To Use
- **Lead Vocals (Aggressive Rap):** Chorus can make a rap vocal sound "washy" or "soft." Use it sparingly or only on specific ad-libs.
- **Sub-Bass (Unfiltered):** Never apply full-spectrum chorus to a sub-bass; it will cause phase cancellation and kill the "thump" in club systems. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Chorus

## UI Tour
Fruity Chorus uses a straightforward modular layout:

1.  **Delay Slider:** Sets the base time offset for the chorus voices (approx. 2ms to 30ms).
2.  **Depth Slider:** Controls how much the pitch wobbles (Detuning intensity).
3.  **Stereo Slider:** Controls the LFO phase offset between ears (Widening control). [SRC: IL-MAN]
4.  **LFO Section:** 
    - **Speed:** The rate of the pitch oscillation.
    - **Wave:** Switch between Sine (Smooth) or other shapes.
5.  **Cross Section (The Filter):**
    - **Type:** HP (High Pass) or LP (Low Pass).
    - **Cutoff:** The frequency where the chorus effect starts or stops.

## Functional Flow
1.  **Input:** Audio enters the plugin.
2.  **Crossover:** The signal is split by the **Cross Cutoff**. Only one half goes to the chorus engine (e.g., frequencies above 200Hz).
3.  **Voice Generation:** Two or more delayed copies are created.
4.  **Modulation:** The internal LFO moves the delay time of these copies, creating "Detuning."
5.  **Stereo Shifting:** The phase of the LFO is shifted for the left and right channels to create width.
6.  **Mixing:** The processed signal is blended with the Dry signal.

## Things Beginners Misunderstand
- **Phase Cancellation:** If you turn "Stereo" to 100% and then play the track in Mono, the effect might disappear. **Fix:** Always check mono compatibility.
- **Delay vs Echo:** The "Delay" slider isn't an echo. It’s a micro-delay. Lower settings sound like a flanger; higher settings sound like doubling. [SRC: REPUTABLE]
- **The "Bite":** If the chorus sounds "metallic," your delay is too short (<5ms). Increase the Delay slider for a "lusher" feel.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Chorus

## 1. The "Clean Bass" Width
- **Technique:** Place Fruity Chorus on an 808 or synth bass.
- **Execution:** Set **Cross Type** to **HP**. Set **Cutoff** to 200Hz.
- **Result:** The sub-bass stays mono and powerful, but the mid-range "grit" of the bass gets wide and shimmering. This is essential for modern trap production. [SRC: REPUTABLE]

## 2. Juno-Style Lush Pads
- **Technique:** Use a slow LFO speed (approx. 0.5Hz) and high Stereo width.
- **Execution:** Set **Delay** to 15ms. Set **Depth** to 30%.
- **Result:** Mimics the classic analog choruses found on vintage Roland synthesizers. It adds a "drifting" quality that defines "Vibey" R&B.

## 3. High-Speed "Leslie" Vibrato
- **Technique:** Set the **Mix** to 100% Wet.
- **Execution:** Set **LFO Speed** to 6Hz+. Set **Depth** to a low value.
- **Result:** The sound doesn't "Chorus" (mix with itself); instead, the whole signal wobbles in pitch, creating a classic organ-style vibrato.

## 4. Vocal Halo Widening
- **Technique:** Use on a **Mixer Send** at 100% Wet.
- **Execution:** Set **Stereo** to maximum. Set **Delay** to 25ms.
- **Benefit:** You can EQ the chorus independently (e.g., cutting the mud) before blending it back into the main vocal. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
- **Pitfall:** "The mix sounds blurry/muddy."
  - **Fix:** Use the **Cross Cutoff** to keep the low-mids clean. Or, lower the **Wet** mix to 20%.
- **Pitfall:** "It sounds like a robot."
  - **Fix:** Your **Delay** is too short. Move the Delay slider to at least 10ms to move from "Flanger" territory into "Chorus" territory.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Chorus

Chorus translates vibes through **spectral density** and **pitch instability**.

## 1. Moody (Heavy, Dark, Thick)
- **Concept:** A slow, "brooding" thickness.
- **Levers:**
  - **Delay:** High (20ms+).
  - **LFO Speed:** Very slow (0.1 - 0.3Hz).
  - **Damping:** Use an EQ *after* the chorus to cut highs.
- **Listen For:** A sound that feels like it’s moving through molasses.
- **Don't Do This:** Avoid fast LFOs; keep the movement "sluggish."

## 2. Upbeat (Shimmering, Pop, Energetic)
- **Concept:** High-frequency "sparkle."
- **Levers:**
  - **LFO Speed:** Fast (1.5Hz+).
  - **Depth:** Low (to prevent pitch drift).
  - **Stereo:** 100% Wide.
- **Listen For:** A "jittery" shimmering energy that makes synths feel "hyped."
- **Don't Do This:** Don't use heavy low-pass filtering; let the "shine" through.

## 3. Psychedelic (Liquid, Melted, Unstable)
- **Concept:** Spatial disorientation.
- **Levers:**
  - **Depth:** High (50%+).
  - **LFO Shape:** Try Sawtooth if available.
  - **Stereo Phase:** 100%.
- **Listen For:** A "seasick" pitch wobble that makes the listener feel like the sound is melting.
- **Don't Do This:** Don't keep the mix low; psychedelic vibes require the effect to be prominent.

## 4. Jazzy (Warm, Organic, Subtle)
- **Concept:** Studio "Air" and Doubling.
- **Levers:**
  - **Delay:** 10ms.
  - **Mix:** Very low (10-15%).
  - **Cross Cutoff:** HP @ 400Hz.
- **Listen For:** A subtle "rounding" of the edges that makes digital guitars sound like they were recorded in a real room.
- **Don't Do This:** Avoid "mechanical" 100% width; keep it natural.

## 5. Vibey (Lush, Professional, Expensive)
- **Concept:** The "Cloud" vocal halo.
- **Levers:**
  - **Stereo:** 100%.
  - **Delay:** 15ms.
  - **LFO:** Medium speed (0.8Hz).
- **Listen For:** A shimmering, wide background that fills the stereo edges without touching the lead vocal. [SRC: REPUTABLE]
- **Don't Do This:** Don't clutter the center; ensure the lead vocal stays dry and clear.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Chorus (5 Minutes)

1.  **Insert:** Load **Fruity Chorus** onto a synth or vocal track.
2.  **Width:** Turn the **Stereo** slider to `100%`.
3.  **Lushness:** Set the **Delay** slider to `15ms`.
4.  **Wobble:** Turn up the **Depth** until you hear the pitch start to drift.
5.  **Clean:** (If on Bass) Set **Cross Type** to `HP` and move the **Cutoff** to `200Hz`.
6.  **Mix:** Adjust the **Mix** level until the effect is "felt but not overwhelming." [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Chorus

- **Muddy Low End:** Chorusing the sub-frequencies of a kick or 808. This causes massive phase issues. **Fix:** Always use the **Cross Cutoff** (HP) to keep frequencies below 200Hz mono.
- **Seasick Melodies:** Using too much **Depth** on a sound that already has its own vibrato. This makes the instrument sound out of tune with the song. **Fix:** Keep Depth below 20% for melodic instruments.
- **Flanger Confusion:** Using a very short **Delay** (<5ms) and wondering why it sounds metallic. **Fix:** Increase the Delay to 10-20ms for a true "Chorus" sound.
- **Mono Disappearance:** Maxing the **Stereo** slider and not checking Mono compatibility. The sound might completely cancel out. **Fix:** Switch the Master to Mono frequently while tweaking.
- **Ignoring Slot Order:** Placing Chorus *after* a long Reverb. This makes the reverb tail sound shaky and unstable. **Fix:** Place Chorus **BEFORE** Reverb. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Chorus

| Goal | Delay | Depth | Stereo | LFO Rate | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Vocal Halo** | 20ms | 10% | 100% | 0.5 Hz | R&B Backing Vocals. |
| **Trap 808 Width**| 12ms | 15% | 60% | 1.2 Hz | Mid-range grit width. |
| **Juno Lead** | 8ms | 25% | 80% | 3.0 Hz | 80s Synth strings. |
| **Soul Guitar** | 15ms | 5% | 40% | 0.8 Hz | Subtle clean guitar. |
| **Pitch Vibrato** | 2ms | 40% | 0% | 6.5 Hz | Lo-fi tape wobble. |

*Note: For 808s, always set Cross Cutoff to HP @ 250Hz.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Chorus)

- **The Goal:** A thick, heavy, and slightly "unstable" atmosphere.
- **Recipe:**
  1. Load Chorus on a dark atmospheric pad.
  2. Set **Delay** to **25ms** (Creates a very thick stack).
  3. Set **LFO Speed** to **0.2 Hz** (Exceedingly slow).
  4. Set **Depth** to **30%** (Noticeable pitch drift).
  5. Set **Mix** to **20%** wet.
- **Result:** The sound feels like it’s constantly expanding and contracting. It adds a "drifting" quality that feels lonely and nocturnal.
- **Mix Tip:** Place a **Fruity Fast LP** *after* the chorus to muffle the high-end shimmer, making it even moodier. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Mainstream Pop" Shine)
- **Settings:** Delay 8ms, Speed 2.5Hz, Depth 15%.
- **Effect:** Adds a fast, "jittery" shimmer that makes the synth feel more energetic.

## Psychedelic (The "Liquid Melt")
- **Settings:** Depth 60%, Speed 1.0Hz, 100% Wet.
- **Effect:** The entire sound wobbles wildly, creating a "seasick" trippy texture.

## Jazzy (The "Studio Double")
- **Settings:** Delay 12ms, Depth 5%, Stereo 30%.
- **Context:** Gives a mono guitar or keys a "recorded with two mics" feel without sounding synthesized.

## Vibey (The "Expensive Halo")
- **Settings:** Delay 18ms, Speed 0.8Hz, Stereo 100%, HP @ 500Hz.
- **Context:** The classic R&B backing vocal width. High-passed so it doesn't clutter the lead. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Chorus: The Classic Widener

> **Scope:** Modulation, Stereo Width, and Detuning.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Legacy).

## 🧠 The "Multi-Voice" Concept
Fruity Chorus is deeper than it looks. It uses **3 Independent LFOs** to modulate the delay lines.
*   **Standard Chorus:** Usually has 1 LFO.
*   **Fruity Chorus:** Has 3. This allows for complex, swirling textures that don't just sound like a simple sine wave wobble.
*   **Algorithm:** It detunes delayed copies of the incoming signal.

**Signal Flow:**
`Input` -> **[CROSSOVER SPLIT]** -> **[DELAY LINE (Modulated by 3 LFOs)]** -> **[STEREO SPREAD]** -> **[MIX]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The LFO Engine

Most people ignore the bottom section.
*   **LFO 1 / 2 / 3:** You can stack them.
*   **Frequencies:** Set them to different rates (prime numbers are good, e.g., 0.3Hz, 0.7Hz, 1.1Hz) to avoid rhythmic looping patterns.
*   **Waveform:**
    *   *Sine:* Smooth.
    *   *Multi-Sine:* A Sine mixed with a 3x faster Sine (Harmonic LFO). This creates a "shimmering" vibration.

---

## 🔁 Section 2: Stereo & Delay Physics

*   **Delay:** The gap between the Dry signal and the Wet copy.
    *   *Low (<10ms):* Flanger territory (Metallic).
    *   *Medium (15-20ms):* Thick Chorus.
    *   *High (>25ms):* Doubling / Slapback echo.
*   **Stereo (Phase):**
    *   *0 Degrees:* L and R modulate together (Mono compatible).
    *   *180 Degrees:* L goes Up when R goes Down. Maximum width, but disappears in Mono.
    *   *Golden Rule:* Set to **10-45 Degrees** for width that doesn't ruin mono compatibility.

---

## ⚡ Technical Specs: The Crossover (Bass Safe)

Fruity Chorus is "Basement Approved".
*   **Cross Type:**
    *   *Process HP:* Adds chorus ONLY to high frequencies. **Essential for Bass**.
    *   *Process LP:* Adds chorus ONLY to low frequencies. (Weird, creates muddy rumble).
*   **Cross Cutoff:** Sets the split point.
    *   *Usage:* Set to 300Hz in "HP" mode to keep your Sub Bass mono and clean, while widening the mid-range growl.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Juno-60" Emulator
1.  **Delay:** 0.5ms (Very short).
2.  **Depth:** High.
3.  **LFO 1 only:** Sine, Slow rate.
4.  **Stereo:** 0.
5.  **Result:** The thick, BBD-style analog chorus found on vintage synths.

### 2. Vocal Thickener (Invisible Chorus)
1.  **Delay:** 10-15ms.
2.  **Depth:** Very Low (Subtle movement).
3.  **Stereo:** 90 degrees.
4.  **LFOs:** Active all 3 at different slow speeds.
5.  **Result:** The vocal sounds "wider" and "larger" without sounding like it has an obvious modulation effect on it.

### 3. Hyper-Stereo Bass
1.  **Cross Type:** Process HP.
2.  **Cutoff:** 400Hz.
3.  **Stereo:** 180 (Max).
4.  **Result:** The sub stays dead center (punchy), but the upper harmonics wrap around the listener's head.

```

---

## FILE: 01-Learning\Quick-Reference\chorus-depth-guide.md

```markdown
# Fruity Chorus - Parameter Cheat Sheet

**Plugin Type:** Multi-Voice Chorus
**Category:** Time-Based Effects / Modulation
**Official Manual:** [Fruity Chorus](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Chorus.htm)

---

## 🎚️ Modulation Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Delay** | 0.1 - 50ms | Base delay of the chorus voices | Lower = Metallic/Phaser; Higher = Lush/Deep |
| **Depth** | 0 - 100% | Amount of pitch modulation | Higher = more "wobble" and movement |
| **Rate** | 0 - 10Hz | Speed of the LFO modulation | Slow (0.2Hz) for pads; Fast (2Hz+) for vibrato |
| **Stereo Cross** | 0 - 100% | L/R LFO phase offset | 100% creates the widest possible stereo image |
| **Wet** | 0 - 100% | Level of the effected signal | 50% is the classic "sweet spot" |

---

## 🎛️ Why Use Fruity Chorus?

| Problem | Fruity Chorus Solution |
|---------|------------------------|
| **Thin Vocals** | Adds a "doubling" effect that makes a single voice sound like a group. |
| **Static Pads** | Adds movement and life to sustained notes. |
| **Mono Lead Synths**| Quickly creates a wide stereo image from a mono source. |

---

## 🔧 Technical Engine Data

- **Type:** Delay-based pitch modulation (LFO)
- **Voice Count:** 4 independent delay lines (2 per channel)
- **LFO Shape:** Sine Wave
- **Latency:** 0 samples
- **CPU:** Extremely Light

---

## 🎯 Quick Start Workflows

### The "80s Pop" Vocal
1. **Delay:** 15ms
2. **Depth:** 30%
3. **Rate:** 0.5Hz
4. **Stereo Cross:** 100%
5. **Wet:** 35%
6. **Action:** Adds subtle thickness and width without overwhelming the dry vocal.

### The "Underwater" Vibe
1. **Delay:** 40ms
2. **Depth:** 80% (Extreme)
3. **Rate:** 1.5Hz
4. **Stereo Cross:** 50%
5. **Wet:** 100% (Full effect)
6. **Action:** Creates a wobbly, pitch-drifting sound perfect for lo-fi interludes.

---

## ⚡ Pro Tips

1. **The Flanger Trick:** Set **Delay** to its minimum (0.1ms). This creates a very short delay that interacts with the original signal to create a subtle flanging or "metallic" ring.
2. **Low-End Caution:** Using chorus on bass can cause phase cancellation in the sub-frequencies. Use a **Frequency Splitter** to only chorus the mids/highs of your bass.
3. **Patcher Multi-Chorus:** In Patcher, you can stack three Fruity Choruses with different rates (Slow, Medium, Fast) to create a massive "ensemble" effect similar to classic analog gear.

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Chorus

| Parameter | Type | Range | Default | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Delay** | Slider | 2ms to 30ms | Med | **Moody** (Thick) | **Timing** | Base time offset for voices. |
| **Depth** | Slider | 0 to 100% | Low | **Psychedelic** | **Tune** | Intensity of pitch modulation. |
| **Stereo** | Slider | 0 to 100% | Med | **Vibey** (Width) | **Width** | LFO phase offset between ears. |
| **LFO Freq** | Knob | 0Hz to 20Hz | Slow | **Upbeat** (Fast) | **Motion** | Speed of the pitch wobble. |
| **Cross Cutoff**| Knob | Full range | Low | **Moody** | **Clarity** | Freq split for the effect path. |
| **Cross Type** | Switch | HP / LP | HP | **All** | **Safety** | High-Pass or Low-Pass filter. |

- **Vibe Impact Tag (Vibey):** High Stereo values create "immersion."
- **Mix Impact Tag (Clarity):** Cross Type HP ensures low-end mono stability. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\chorus-specs.json

```json
{
  "plugin": {
    "name": "Fruity Chorus",
    "category": "Modulation",
    "type": "Multi-Voice Chorus",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Chorus.htm"
  },
  "parameters": {
    "modulation": [
      {
        "id": "delay",
        "name": "Delay",
        "range": "0.1 to 50 ms",
        "unit": "ms",
        "description": "Base delay time for modulated voices."
      },
      {
        "id": "rate",
        "name": "Rate",
        "range": "0 to 10 Hz",
        "unit": "Hz",
        "description": "LFO frequency determining modulation speed."
      },
      {
        "id": "depth",
        "name": "Depth",
        "range": "0-100%",
        "description": "Magnitude of the delay/pitch modulation."
      }
    ],
    "stereo": [
      {
        "id": "stereoCross",
        "name": "Stereo Cross",
        "range": "0-100%",
        "description": "Phase offset between L/R LFOs for stereo width."
      }
    ]
  },
  "voiceArchitecture": {
    "count": 4,
    "arrangement": "2 voices per channel (Stereo)"
  }
}
```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Chorus",
  "category": "Modulation",
  "parameters": [
    {
      "section": "Delay Line",
      "id": "delay",
      "name": "Base Delay",
      "range": { "min": 0, "max": 30, "unit": "ms" },
      "description": "Offset between Dry and Wet."
    },
    {
      "section": "Delay Line",
      "id": "depth",
      "name": "Mod Depth",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Amount of LFO modulation applied to delay time."
    },
    {
      "section": "Stereo",
      "id": "stereo_phase",
      "name": "Stereo Spread",
      "range": { "min": 0, "max": 360, "unit": "Deg" },
      "description": "LFO Phase offset between Left and Right channels."
    },
    {
      "section": "LFO",
      "id": "lfo_freq_1",
      "name": "LFO 1 Rate",
      "range": { "min": 0, "max": 10, "unit": "Hz" },
      "description": "Speed of Oscillator 1."
    },
    {
      "section": "Filter",
      "id": "cross_type",
      "name": "Crossover Mode",
      "options": ["Process HP", "Process LP"],
      "description": "Determines which band gets chorused."
    },
    {
      "section": "Filter",
      "id": "cross_cutoff",
      "name": "Cutoff Freq",
      "range": { "min": 10, "max": 20000, "unit": "Hz" },
      "description": "Split point for the crossover."
    }
  ]
}

```

---

## FILE: 02-Data\presets\detuned-unison.json

```json
{
  "presetName": "Detuned Unison",
  "plugin": "Fruity Chorus",
  "description": "Mimics the sound of multiple voices slightly out of tune.",
  "settings": {
    "delay": 25.0,
    "depth": 15.0,
    "rate": 1.5,
    "stereo": 1.0,
    "cross": 0.2
  },
  "usage": "Use on lead synths to make them sound thicker and more organic."
}

```

---

## FILE: 02-Data\presets\slow-shimmer.json

```json
{
  "presetName": "Slow Shimmer",
  "plugin": "Fruity Chorus",
  "description": "A very slow, subtle movement for clean sounds.",
  "settings": {
    "delay": 15.0,
    "depth": 5.0,
    "rate": 0.2,
    "stereo": 0.8,
    "cross": 0.5
  },
  "usage": "Perfect for electric pianos, clean guitars, or atmospheric pads."
}

```

---

## FILE: 02-Data\presets\vintage-vibrato.json

```json
{
  "presetName": "Vintage Vibrato",
  "plugin": "Fruity Chorus",
  "description": "Focuses on the pitch modulation rather than the stereo spread.",
  "settings": {
    "delay": 5.0,
    "depth": 20.0,
    "rate": 5.0,
    "stereo": 0.0,
    "cross": 0.0
  },
  "usage": "Creative effect for lo-fi beats or psychedelic guitars."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Chorus)

## 1. Low-End Protection
- **Rule:** Never allow chorus below **200Hz**.
- **Application:** Always set the **Cross Type** to **HP** and adjust the **Cutoff** until the Kick and Sub sound solid and centered in Mono. [SRC: REPUTABLE]

## 2. Vocal Hierarchy
- **Rule:** Lead Vocals = Dry/Close. Backing Vocals = Wet/Wide.
- **Application:** Use Chorus sparingly on the lead. Use 100% Stereo Chorus on background ad-libs to separate them spatially.

## 3. Mono Compatibility
- **Rule:** If the Chorus creates "Comb Filtering" in mono, reduce the **Stereo** slider.
- **Check:** Press the **Mono** button on your Master track. If the sound gets hollow, your Chorus is too wide.

## 4. The "Modulation Speed" Rule
- **Rule:** Match LFO speed to the "bounce" of the track.
- **Application:** Fast upbeat tracks benefit from faster LFOs (1.5Hz+). Slow, vibey R&B needs slow LFOs (0.5Hz) to maintain the "relaxed" feel.

## 5. Gain Staging
- **Rule:** Chorus can increase the peak level of a track by summing delayed voices.
- **Application:** Check your mixer peak meters. If the Chorus causes clipping, reduce the **Mix** level or the output fader. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Chorus

## 1. The "Dimension" Expander

1.  **Goal:** Make a mono synth sound stereo without movement.
2.  **Settings:**
    *   **Depth:** 0 (Static).
    *   **Delay:** 10ms.
    *   **Stereo:** 180 degrees.
    *   **Mix:** 50%.
3.  **Result:** Static phase cancellation creates a "Pseudo-Stereo" width. It sounds unnatural in mono (comb filtering) but huge in stereo.

## 2. Reese Bass Width

1.  **Source:** A mono saw bass.
2.  **Action:** Insert Fruity Chorus.
3.  **Critical Step:** Switch **Cross Type** to **Process HP**.
4.  **Tuning:** Move **Cutoff** until the low end tightens up (usually around 250-400Hz).
5.  **Modulation:** Use **Multi-Sine** on LFO 1 for a "nervous" motion.

## 3. Guitar Strum Thickener

1.  **Input:** Clean electric guitar DI.
2.  **Delay:** 20ms (approaching Slapback).
3.  **Depth:** Medium.
4.  **LFO:** Slow (0.5 Hz).
5.  **Result:** Sounds like a 12-string guitar or a Double Track.

## 4. Metallic Flanger

You can force Fruity Chorus to act like a Flanger.

1.  **Delay:** Minimum (0.1ms).
2.  **Depth:** High.
3.  **Feedback?** Fruity Chorus has no feedback knob.
4.  **Workaround:** Put Fruity Chorus in a Send Channel. Route the Send back into itself (carefully!) to create feedback loops. *Warning: dangerous.*

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Shaping_And_Control.md

```markdown
# Goal: Clean Bass Width (Fruity Chorus)

## Routing Context
- **Target:** Synthesized 808 or Sub-Bass.
- **Position:** Insert FX (Before Limiter).

## Step-by-Step Setup
1.  Load **Fruity Chorus** onto the Bass track.
2.  **The Safety:** Set **Cross Type** to `HP`.
3.  **The Filter:** Move the **Cutoff** knob to approx. `200Hz` (9 o'clock).
4.  **The Width:** Set **Stereo** to `60%`.
5.  **The Shimmer:** Set **Delay** to `12ms` and **Depth** to `10%`.
6.  **Tweak:** Adjust **LFO Freq** until you hear a nice shimmering movement in the high-mids of the bass.

## What To Listen For
- Switch the Master to **Mono**. The sub-bass should stay loud and centered.
- Switch back to **Stereo**. The top-end "grit" of the bass should feel wide and immersive.

## Vibe Check
- **Upbeat/Aggressive:** Common in modern club tracks where the 808 needs to sound "huge" but stay club-ready.

## Pitfalls + Fixes
- **Pitfall:** "The sub-bass sounds weak."
  - **Fix:** Your **Cross Cutoff** is too low. Move it up to `300Hz` to ensure the sub-fundamental is completely untouched by the chorus. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\03_Goal_Creative_Effect.md

```markdown
# Goal: Juno-Style Lush Pads (Fruity Chorus)

## Step-by-Step Setup
1.  Load a bright Sawtooth Pad (e.g., from 3x Osc).
2.  Add **Fruity Chorus**.
3.  Set **LFO Wave** to `Sine`.
4.  Set **LFO Freq** to `0.4 Hz` (Slow).
5.  Set **Depth** to `25%`.
6.  Set **Stereo** to `100%`.
7.  Set **Delay** to `18ms`.
8.  **Result:** The sound will "drift" like an old analog synth. The wide stereo field makes the chords feel lush and cinematic.

## Vibe Check
- **Vibey/Moody:** This is the foundational sound of early 2000s R&B and modern "Cloud Rap."

## Variation
- **Static Width:** Turn the **LFO Depth** to 0 but keep **Stereo** at 100%. This adds width without the pitch wobble.

## Pitfalls
- **Detuning:** If you have multiple instruments with high chorus depth, they will clash and sound out of tune with each other. Keep depth minimal on busy arrangements. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\ensemble-vocal-layering.md

```markdown
# The "Ensemble" Vocal Workflow

## Goal
Make a single-track vocal recording sound like a group of background singers or a rich "doubled" vocal.

## Steps
1. **Insert Fruity Chorus**: Place it on your vocal track.
2. **Set Delay**: Go for a medium setting around **20ms**.
3. **The Lush LFO**:
   - Set **Rate** to **0.4 Hz**. (Slow enough to be musical, fast enough to move).
   - Set **Depth** to **40%**.
4. **Stereo Width**: Crank **Stereo Cross** to **100%**. This ensures the "extra singers" appear in the far left and right of the stereo field.
5. **Phase Invert (Optional)**: If the chorus sounds a bit "hollow", try toggling the phase inversion icon in the plugin wrapper to see if it glues better with the track.
6. **The Mix**: Set **Wet** to **30-40%**. You want the dry vocal to remain dominant and centered, while the chorus provides the "halo" around it.
7. **EQ (Post)**: Follow with a **Fruity Parametric EQ 2** and cut everything below **200Hz** from the chorus signal to prevent mud.

## Result
A wide, "expensive" sounding vocal that sits back in the mix while still feeling thick and present.

```

---

## FILE: 03-Workflows\by-goal\thickening-synth-pads.md

```markdown
# Thickening Synth Pads Workflow

## Goal
Transform a static, thin synthesizer pad into a wide, lush, and moving texture.

## Steps
1. **Insert Fruity Chorus**: Place it after any reverb or delay.
2. **Set Delay**: Start at **~15ms**.
3. **Slow the Rate**: Set **Rate** to **0.3 Hz**. Slow modulation is key for pads.
4. **Increase Depth**: Raise **Depth** until you hear the sound start to "shimmer". Stop before it sounds out of tune.
5. **Maximize Width**: Set **Stereo Cross** to **100%**.
6. **Adjust Mix**: Set **Wet** to **40-60%**.

## Pro Tip
Use a **Fruity Peak Controller** to link the chorus **Rate** to the volume of the synth. This makes the chorus move faster as the synth gets louder, adding organic movement.

```

---

## FILE: 03-Workflows\by-instrument\guitars.md

```markdown
# Instrument: Guitars

Fruity Chorus is a classic pairing for both electric and acoustic guitars.

## 80s Clean Tone
- **Rate**: 0.5Hz - 1Hz.
- **Depth**: High (40%).
- **Stereo**: 100%.
- **Result**: The iconic, shimmering clean sound found in New Wave and Pop.

## Thickening High-Gain Guitars
- Use a very fast **Rate** (4Hz) but a very low **Depth** (2-3%).
- **Result**: Adds a sense of "double-tracking" without the phase issues of a longer delay.

## Acoustic Widening
- Use **Stereo** at 100% but keep the **Mix** (if available via Patcher) at 30%.
- **Result**: Makes the acoustic guitar feel larger than life without sounding "processed."

```

---

## FILE: 03-Workflows\by-instrument\synth-bass.md

```markdown
# Instrument: Synth Bass

Using chorus to add character to bass without losing the low-end punch.

## The 80s Synth Pop Bass
- **Rate**: Slow (0.3Hz).
- **Depth**: Moderate (20%).
- **Stereo**: 50%.
- **Action**: Use a high-pass filter before the chorus so you only modulate the mids and highs of the bass.
- **Result**: A wide, moving bass that stays centered in the low end.

## The "Growl" Bass
- Use a high **Depth** and high **Rate** on a saw-wave bass.
- **Result**: Creates a gritty, moving texture that works well in Techno or Industrial music.

## Mono-Compatibility Warning
Chorus can create phase cancellation in the low end.
- **Fix**: Always use Fruity Chorus on a parallel bus or use a plugin like Patcher to keep everything below 200Hz in mono.

```

---

## FILE: 03-Workflows\by-instrument\vocals.md

```markdown
# Workflow: R&B Vocal Halo (Chorus)

## The Concept
Using a parallel send to create a wide "glow" around a lead vocal.

## Step-by-Step
1.  Create a **Send Track** named "Vocal Halo."
2.  Route your lead vocal to this send at 100%.
3.  Load **Fruity Chorus** on the send.
4.  **Settings:**
    - Delay: 25ms.
    - Stereo: 100%.
    - Speed: 0.8Hz.
    - Depth: 10%.
5.  Add a **High-Pass Filter** at 500Hz *after* the chorus on the send.
6.  Lower the send fader until the chorus is a subtle "halo" behind the dry vocal.

## Vibe Check
- **Vibey/Polished:** This is how you get wide, expensive vocals without the "phasing" issues of putting chorus directly on the lead.

## Pitfalls
- **Clutter:** If the chorus tail is too long, it will muddy the lyrics. Use a very low mix level (15-20%). [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Reference: Source Log & Style Board

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Chorus.
- **Key Info:** 30ms delay limit, Cross Cutoff functionality, Stereo phase offset description.

## Source ID: [SRC: REPUTABLE]
- **Source:** "Vintage Synth Explorer" - Chorus Theory.
- **Key Info:** Modeling the Juno-60 style chorus using slow sine LFOs and wide stereo phases.

## Genre Style Board: Fruity Chorus

| Vibe | Key Move | Instrument |
| :--- | :--- | :--- |
| **Moody** | 25ms Delay + slow LFO | Dark Pads |
| **Upbeat** | 8ms Delay + fast LFO | Synth Leads |
| **Psychedelic**| 100% Depth + 100% Wet | Guitars |
| **Jazzy** | 12ms Delay + low Mix | Clean Keys |
| **Vibey** | 100% Stereo + HP @ 500Hz | Vocal Stacks |

## Coverage Checklist
- [x] Chorus vs Flanger Definition
- [x] Cross Cutoff Mastery
- [x] Juno Synth Emulation Workflow
- [x] Clean Bass Logic
- [x] 5 Vibe Targets
- [x] Vocal Halo Send Recipe
- [x] Mono Compatibility Rules

```

---

## FILE: 04-Reference\lfo-shapes-analysis.md

```markdown
# Reference: LFO Shapes Analysis (Chorus)

## Sine Wave (The Default)
- **Character:** Smooth, natural, liquid.
- **Best For:** Most musical tasks (Vocals, Pads, Keys).
- **Vibe:** Vibey / Jazzy.

## Triangle Wave
- **Character:** Mechanical, consistent.
- **Best For:** Sharp rhythmic modulation or "robotic" textures.
- **Vibe:** Upbeat.

## Stereo Phase Impact
The **Stereo** slider in Fruity Chorus doesn't just "pan." It offsets the phase of the LFO for the Left and Right channels.
- **0%:** LFOs move together (Center-weighted width).
- **100%:** LFOs are 180 degrees apart (Max edge width).
- **Caution:** High stereo values can create a "hollow" middle. [SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Chorus Mechanics

## 1. Crossover Filter Topology

*   **Type:** 1-Pole (6dB/Octave) or 2-Pole?
    *   The manual implies a simple split.
*   **Behavior:**
    *   When **Process HP** is active, the Low signal is passed through *Dry*. The High signal is sent to the Chorus line. They are summed at the output.
    *   This preserves the phase integrity of the Bass, which is critical for club systems.

## 2. Modulation Depth vs Delay

*   **Algorithm:** `Current_Delay = Base_Delay + (LFO_Value * Depth)`.
*   **Pitch Shift:** The *speed* of delay change determines the pitch shift (Doppler Effect).
    *   Fast LFO + High Depth = Extreme Pitch Warble (Vibrato).
    *   Slow LFO + High Depth = Slow Detuning.
    *   Fast LFO + Low Depth = Shimmer.

## 3. Stereo Phase

*   **LFO Offset:** The 'Stereo' knob offsets the phase of the Right Channel LFO relative to the Left Channel LFO.
*   **180 Degrees:** When Left LFO is at peak (Max Delay), Right LFO is at trough (Min Delay).
*   **Headphone Warning:** Extreme settings (180) can cause nausea or fatigue on headphones due to the unnatural anti-phase motion.

## 4. Multi-Sine Waveform

*   **Composition:** `Sin(x) + (0.5 * Sin(3x))`.
*   **Harmonic:** It effectively adds a 3rd harmonic to the modulation curve, creating a "wobbly" shape rather than a smooth sweep. This makes the chorus usage less predictable and more "Ensemble-like".

```

---

## FILE: 04-Reference\technical-docs\lfo-modulation-physics.md

```markdown
# LFO Modulation & Phase Shifting Physics

## The Doppler Effect in Chorus
A chorus effect works by varying the delay time of a signal using an LFO (Low-Frequency Oscillator). 
- **Pitch Shift:** As the delay time decreases, the frequency of the output increases (Pitch Up). As the delay time increases, the frequency decreases (Pitch Down).
- **The Result:** The output is a slightly detuned version of the input. When mixed with the dry signal, this Detuning + Delay creates the classic shimmering chorus sound.

## Voice Phasing
Fruity Chorus uses multiple delay lines (voices). 
- If all voices used the same LFO phase, the effect would be simple vibrato.
- By offsetting the phase of the LFOs for each voice (controlled by **Stereo Cross**), the voices move independently.
- **Stereo Cross at 100%:** The Left channel LFO is at 0 degrees while the Right channel is at 180 degrees. This creates a massive psychoacoustic sense of width because the detuning in the left ear is always the "mirror" of the right ear.

## Frequency Response (Comb Filtering)
Because chorus is a very short delay (0.1ms to 50ms), it causes **Comb Filtering**.
- At 1ms delay, there is a massive notch in the frequency response at 1kHz.
- As the delay moves (modulates), this notch sweeps through the frequency spectrum. This is why chorus sounds "swirly" or "liquidy".

## Mono Compatibility
Because the voices are phase-offset for width, summing the output of Fruity Chorus to Mono can sometimes lead to "Thinness" due to phase cancellation of the side-panned voices. Always check your mix in Mono when using high Stereo Cross settings.

```

---

## FILE: 04-Reference\technical-docs\lfo-modulation-types.md

```markdown
# LFO Modulation & Phase Mechanics

## LFO Waveshape
Fruity Chorus uses a sine-based LFO to modulate the delay time of multiple delay lines (voices).

## The Doppler Effect
The "shimmering" sound of a chorus is actually a series of tiny pitch shifts caused by the varying delay time. As the delay shortens, the pitch rises slightly; as it lengthens, the pitch drops.

## Phase Inversion
Fruity Chorus allows for phase inversion of the wet signal. This can be used to create specific comb-filtering effects or to reduce "muddiness" in the mid-range by creating a notch in the frequency response.

## Voice Count
Fruity Chorus simulates multiple voices by having independent LFO phases for the Left and Right channels, creating a dense, multi-voice effect from a single mono or stereo input.

```

---

