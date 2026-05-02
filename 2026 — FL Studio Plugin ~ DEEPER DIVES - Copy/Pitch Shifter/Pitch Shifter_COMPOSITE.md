# Pitch Shifter - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Pitch Shifter - Real-Time Pitch Manipulation

`\`\`
██████╗ ██╗████████╗ ██████╗██╗  ██╗    ███████╗██╗  ██╗██╗███████╗████████╗███████╗██████╗ 
██╔══██╗██║╚══██╔══╝██╔════╝██║  ██║    ██╔════╝██║  ██║██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██████╔╝██║   ██║   ██║     ███████║    ███████╗███████║██║█████╗     ██║   █████╗  ██████╔╝
██╔═══╝ ██║   ██║   ██║     ██╔══██║    ╚════██║██╔══██║██║██╔══╝     ██║   ██╔══╝  ██╔══██╗
██║     ██║   ██║   ╚██████╗██║  ██║    ███████║██║  ██║██║██║        ██║   ███████╗██║  ██║
╚═╝     ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Pitch Shifter / Harmonizer
**Category:** Effect / Creative / Voice
**Official Manual:** [Image-Line Pitch Shifter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Pitch%20Shifter.htm)

---

## 🎯 What is Pitch Shifter?

Pitch Shifter is a real-time effect plugin designed to alter the pitch of incoming audio without changing its duration (unlike a sampler). It features two distinct algorithms: **Voice** (optimized for monophonic vocals) and **Music** (optimized for polyphonic material). It is essential for creating "Baby Voice" or "Deep Voice" effects, live harmonization, and special FX like ring modulation and alien textures.

**Key Capabilities:**
- **Voice Mode:** Monophonic tracking with Formant control.
- **Music Mode:** Polyphonic granular shifting.
- **Pitch Range:** +/- 12 Semitones slider.
- **Formant Control:** Independent adjustment of vocal timbre (Voice Mode).
- **Feedback:** Creates delay-like "monster" tails or flanging.
- **Dry/Wet:** Parallel processing built-in.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **voice-vs-music-mode.md**
3. Create **parameter-cheat-sheet.md**
4. Load a vocal loop, switch to "Voice" mode, and turn the Pitch knob down -5 semitones.

### For Vocal Producers:
1. Study **formant-shifting-techniques.md**
2. Review **creating-artificial-harmonies.md**
3. Learn **the-monster-voice-recipe.md**

### For Sound Designers:
1. Study **granular-music-mode-fx.md**
2. Review **feedback-loop-textures.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Pitch:** Semitones (-12 to +12).
  - **Formant:** Timbre shift (Voice mode).
  - **Mode:** Voice vs Music.
  - **Duration/Density:** Granular controls (Music mode).
  - **Feedback:** Signal recirculation.

- [ ] **voice-vs-music-mode.md**
  - **Voice:** Clean for solo vocals, allows Formant control.
  - **Music:** Granular, better for chords/drums, has "Duration" control.

#### 02-Data/parameters/
- [ ] **pitch-shifter-params.json**
  `\`\`json
  {
    "plugin_name": "Pitch Shifter",
    "category": "Pitch",
    "modes": ["Voice", "Music"],
    "range_semitones": 12
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **the-monster-voice-recipe.md**
  - Mode: Voice.
  - Pitch: -12 Semitones.
  - Mix: 100% Wet.
  - Feedback: 10-20% for metallic trail.

- [ ] **creating-artificial-harmonies.md**
  - Using two instances.
  - Instance 1: +3 Semitones (Minor 3rd).
  - Instance 2: -5 Semitones (Perfect 4th).
  - Mixing in parallel with the dry vocal.

- [ ] **granular-clouds.md**
  - Mode: Music.
  - Duration: High.
  - Pitch: +12.
  - Applied to a Reverb tail.

#### 03-Workflows/by-context/
- [ ] **live-vocal-performance.md**
- [ ] **drum-loop-re-pitching.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **latency-considerations.md**
  - Real-time pitch shifting always introduces latency. How much? (Buffer dependent).

---

## 🔬 Research Framework

### Phase 1: Mode Selection (Week 1)
**Goal:** Clean Shifting

**Tasks:**
1. Put Pitch Shifter on a Vocal
2. Compare "Voice" vs "Music" mode
3. Adjust "Formant" in Voice mode to fix the "chipmunk" sound
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why does Music mode sound "stuttery"? (Granular synthesis artifacts - adjust Duration/Density).

### Phase 2: Creative FX (Week 2)
**Goal:** Alien Sounds

**Tasks:**
1. Use Feedback to create a rising delay effect
2. Automate the Pitch knob smoothly
3. Create granular-clouds.md

---

## 📊 Plugin Specifications to Document

### Engine
- Algorithm Type (Granular/PSOLA?)
- Latency (samples)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my voice robot/metallic? (You are hearing the phase cancellation of Dry + Wet. Turn Mix to 100% Wet for a clean shift).
2. Can I play this with a MIDI keyboard? (No, Pitch Shifter is an effect, not an instrument. Use **Pitcher** for MIDI control).

---

## 🔗 Cross-Reference with Other Plugins

Pitch Shifter is often used with:
- **Pitcher** (For key-corrected tuning)
- **Newtone** (For offline precision editing)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Pitch Shifter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── voice-vs-music-mode.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── pitch-shifter-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── the-monster-voice-recipe.md
│   │   ├── creating-artificial-harmonies.md
│   │   └── granular-clouds.md
│
└── 04-Reference/
    └── latency-considerations.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Shift a vocal down an octave while keeping the formant natural
- [ ] Explain why "Music Mode" works better for drums
- [ ] Create a specific harmony interval without using a harmonizer plugin

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What Is Pitch Shifter?

> **The "Real-Time" Transformer.**
> Unlike Newtone (Offline) or Pitcher (Auto-Tune), **Pitch Shifter** is a creative effect designed to warp audio *live*. It creates everything from "Demon Voices" to "Granular Clouds".

## 🧠 The 60-Second Mental Model
Think of Pitch Shifter as a **Funhouse Mirror** for audio.
*   **Pitcher:** Corrects you (makes you "Right").
*   **Pitch Shifter:** Distorts you (makes you "Weird").

It doesn't care about musical keys or scales. It stupidly shifts every frequency up or down by the amount you tell it. This makes it perfect for **Sound Design** and **Special FX**, but dangerous for subtle vocal tuning.

## 📋 When To Use It
| Use Case | ✅ YES (Pitch Shifter) | ❌ NO (Use Pitcher/Newtone) |
| :--- | :--- | :--- |
| **FX** | "Demon Voice" (Low Pitch + Formant). | Transparent vocal correction. |
| **Live** | Real-time harmony layers on a live input. | Precise melody rewriting. |
| **Drums** | Re-pitching a loop without changing tempo. | Tuning a kick drum to a specific key (use Sampler). |
| **Texture** | Granular shimmer reverb tails. | Natural vibrato control. |

## 🎧 Context: Hip-Hop & R&B
In modern production, Pitch Shifter is the "Vibe" generator:
1.  **The "Screw":** Slowed-down vocal textures (Chopped & Screwed) without changing song tempo.
2.  **The "Baby Voice":** High pitch + High formant (Playboi Carti / Hyperpop).
3.  **The "Monster":** Low pitch + Low formant (Tyler, The Creator / A$AP Rocky style ad-libs).

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

The interface is simple but deceptive. It has two main "Modes" that completely change how it sounds.

### 1. The Mode Switch (The Engine)
*   **Voice Mode:** Optimized for **Monophonic** sources (Vocals).
    *   *Features:* Unlocks the **Formant** knob.
    *   *Sound:* Smoother, but glitches on chords.
*   **Music Mode:** Optimized for **Polyphonic** sources (Drums, Loops, Chords).
    *   *Features:* Unlocks **Duration** (Grain size).
    *   *Sound:* Granular, stuttery, "Cloudy".

### 2. The Pitch Knobs (The Action)
*   **Pitch:** The main shift (-12 to +12 semitones).
*   **Fine:** Cents (Detune). Use this for "Chorus" effects.
*   **Formant (Voice Only):** Shifts the "Throat Size" independent of pitch.

### 3. The Feedback Loop (The FX)
*   **Feedback:** Sends the output back into the input.
    *   *Result:* Each repeat gets pitched UP/DOWN again. If you pitch +1st with feedback, the trail goes +1, +2, +3, +4... rising into infinity.
*   **Delay:** The time between feedback repeats.

## 🚦 Internal Signal Flow

1.  **Input:** Audio enters.
2.  **Split:** Signal splits into Dry and Wet paths.
3.  **Analysis:** Engine detects pitch (Voice mode) or slices grains (Music mode).
4.  **Shift:** Audio is resampled/granularly shifted.
5.  **Feedback:** Output is fed back to step 3.
6.  **Mix:** Wet and Dry signals are summed.

## ⚠️ Common Misunderstandings
*   **"It sounds unnatural."**
    *   *Correction:* It is *supposed* to. Real-time pitch shifting is math-heavy and artifact-prone. Embrace the artifact as a "Texture".
*   **"Phasing issue."**
    *   *Correction:* If Mix is at 50% and Pitch is at 0, you will hear phasing (Comb Filtering) due to the tiny processing latency. **Always set Mix to 100% Wet** unless you are intentionally creating a Harmony or Flanger.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Formant Corrected" Shift
*   **Goal:** Pitch a vocal down without it sounding like a muddy monster.
*   **Move:**
    1.  Mode: **Voice**.
    2.  Pitch: **-5 semitones** (Deep).
    3.  Formant: **+5 semitones** (Opposite direction).
*   **Result:** The pitch drops, but the "Throat Size" stays closer to natural. The singer sounds like they just have a lower range, not a bigger head.

### 2. The "Rising Riser" (Feedback Loop)
*   **Goal:** A transition effect that screams upwards.
*   **Move:**
    1.  Pitch: **+1 semitone**.
    2.  Feedback: **90%**.
    3.  Delay: **100ms**.
    4.  Input: Feed it a single snare hit.
*   **Result:** The snare hits, then echoes. Each echo is 1 semitone higher. It spirals up into a mosquito whine.

### 3. The "Granular Cloud" Reverb
*   **Goal:** Shimmering texture.
*   **Move:**
    1.  Mode: **Music**.
    2.  Pitch: **+12 semitones** (Octave).
    3.  Duration: **100ms** (Long grains).
    4.  Place this *after* a Reverb plugin.
*   **Result:** The reverb tail is lifted up an octave and smeared into a cloudy haze.

## 👂 What to Listen For
*   **Glitches in Voice Mode:** If you play chords into Voice mode, it freaks out (bubbling sound).
    *   *Fix:* Switch to Music mode.
*   **Metallic Ring:** Short delay times in the feedback loop create a metallic robotic ring (Comb Filter).
    *   *Fix:* Increase delay time >30ms.

## 🛑 Common Pitfalls
1.  **Latency:** This plugin adds latency. If you use it on a live recording, the vocalist will hear themselves delayed. Only use it during mixing or with "Low Latency" monitoring if possible (though quality suffers).
2.  **Double Shift:** Using Pitch Shifter *and* changing the BPM of the project can cause weird artifacts if the sample is stretched elsewhere. Keep the signal chain simple.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Pitch Shifter

How to warp the "Vibe" using real-time shifting.

## 🌑 Moody (The "Screw")
*   **The Goal:** Slow, druggy, heavy.
*   **The Levers:**
    1.  **Pitch:** -3 to -5 semitones.
    2.  **Mode:** **Music**. (We *want* the artifacts).
    3.  **Duration:** Set to ~50ms. The slight stutter adds to the "broken" aesthetic.
    4.  **Mix:** 100% Wet.

## ☀️ Upbeat (The "Baby Voice")
*   **The Goal:** Hyper-energetic, youthful.
*   **The Levers:**
    1.  **Pitch:** +2 to +4 semitones.
    2.  **Formant:** +2 semitones (Brightens the character).
    3.  **Mode:** **Voice** (Cleaner).
    4.  **Mix:** 100% Wet.

## 🍄 Psychedelic (The "Trippy" Delay)
*   **The Goal:** Spiraling, disorienting trails.
*   **The Levers:**
    1.  **Pitch:** +/- 10 cents (Detune).
    2.  **Feedback:** 80%.
    3.  **Delay:** 200ms.
    4.  **Result:** The echoes slowly drift out of tune, creating a "melting" sensation.

## 🎷 Jazzy (Thick Texture)
*   **The Goal:** Widening a sax or keys line.
*   **The Levers:**
    1.  **Fine:** -15 cents.
    2.  **Mix:** 50% (Dry + Wet).
    3.  **Result:** Classic "Chorus" thickening without the oscillation of a modulation plugin.

## 🌊 Vibey (Lo-Fi Haze)
*   **The Goal:** Old hardware sampler vibe.
*   **The Levers:**
    1.  **Mode:** **Music**.
    2.  **Pitch:** -12 semitones.
    3.  **Mix:** 20% (Just a subtle sub-octave layer).
    4.  **Result:** A dark shadow following the melody, adding weight and dirt.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes to Warped Vocals

1.  **Load:** Place Pitch Shifter on a Vocal Insert.
2.  **Clean:** Turn **Mix** to 100% (Right).
3.  **Mode:**
    *   Singing? Select **Voice**.
    *   Rapping/Drums? Select **Music**.
4.  **Shift:**
    *   Turn **Pitch** knob Left (-12) for Demon.
    *   Turn **Pitch** knob Right (+12) for Chipmunk.
5.  **Tweak:**
    *   Adjust **Formant** (if in Voice mode) to restore naturalness or exaggerate the effect.
    *   If it sounds bubbly, try switching modes.

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes & Fixes

| Mistake | Symptom | The Fix |
| :--- | :--- | :--- |
| **50% Mix Phase** | Sound is thin, hollow, or metallic. | You are mixing the dry signal with the slightly delayed wet signal. **Turn Mix to 100% Wet** for a pure shift. |
| **Wrong Mode** | Vocals sound like a broken robot (grains). | You are in **Music Mode**. Switch to **Voice Mode**. |
| **Chords in Voice** | Chords sound glitchy and bubbly. | You are in **Voice Mode** (Monophonic). Switch to **Music Mode** (Polyphonic). |
| **Infinite Feedback** | A screeching noise that won't stop. | You turned Feedback to 100% with a positive pitch shift. Turn Feedback down to stop the loop. |
| **Latency** | Vocalist complains they hear an echo. | Real-time shifting takes time. Disable the plugin during recording, enable it during playback/mix. |

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points

## 1. The "Ad-Lib" Demon
*   **Mode:** Voice.
*   **Pitch:** -12 Semitones.
*   **Formant:** -2 Semitones.
*   **Mix:** 100%.

## 2. The "Subtle" Widener
*   **Mode:** Music.
*   **Pitch:** 0.
*   **Fine:** -10 Cents.
*   **Mix:** 50%.

## 3. The "Granular" Delay
*   **Mode:** Music.
*   **Pitch:** +12 Semitones.
*   **Delay:** 200ms.
*   **Feedback:** 60%.
*   **Mix:** 30%.

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Settings: MOODY

**Target:** Dark, Ominous, Heavy.

## The Recipe
1.  **Pitch:** -5 Semitones.
2.  **Mode:** **Music**. (The graininess adds texture).
3.  **Mix:** 40% (Layered under the dry vocal).
4.  **EQ:** Low-pass the wet signal (if possible via Patcher) to remove the high-frequency artifacts.
5.  **Result:** A "Shadow" vocal that makes the rapper sound possessed.

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Settings: Upbeat / Psych / Jazzy / Vibey

## ☀️ UPBEAT (Hyperpop)
*   **Pitch:** +12 Semitones.
*   **Formant:** +4 Semitones.
*   **Mode:** Voice.
*   **Mix:** 100%.
*   **Use Case:** Ad-lib accent phrases ("Yeah!", "What!").

## 🍄 PSYCHEDELIC (Trippy)
*   **Feedback:** 90%.
*   **Pitch:** +0.5 Semitones.
*   **Result:** Every echo rises in pitch, spiraling upwards into a mosquito tone.
*   **Use Case:** Dub-style mixer throws on snare hits.

## 🎷 JAZZY (Thickener)
*   **Pitch:** -12 Semitones.
*   **Analysis:** Music Mode -> Smooth Duration.
*   **Mix:** 20%.
*   **Use Case:** Add body to a thin Rhodes or Piano solo.

## 🌊 VIBEY (Lo-Fi)
*   **Fine Pitch:** Automate an LFO to wiggle this +/- 15 cents.
*   **Result:** Tape wow/flutter emulation on the whole track.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Pitch Shifter Parameter Dictionary

| Parameter | Type | Range | Description | Vibe Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Pitch** | Knob | +/- 12st | The main interval shift. | **CRITICAL** (Define Character) |
| **Fine** | Knob | +/- 100 cents | Detuning. | **Medium** (Chorus/Drift) |
| **Formant** | Knob | +/- 12st | Throat size (Voice Mode only). | **CRITICAL** (Gender/Monster) |
| **Mode** | Switch | Voice/Music | Algorithm selection. | **High** (Clarity vs Texture) |
| **Duration** | Knob | 10-200ms | Grain size (Music Mode only). | **Medium** (Smooth vs Stutter) |
| **Feedback** | Knob | 0-100% | Recirculation amount. | **High** (Psychedelic Trails) |
| **Delay** | Knob | 0-1000ms | Time between feedback loops. | **Medium** (Rhythm) |
| **Mix** | Knob | 0-100% | Dry/Wet Balance. | **CRITICAL** (Effect vs Correct) |

```

---

## FILE: 02-Data\presets\00_Workflow_Preset_Strategy.md

```markdown
# Workflow & Preset Strategy: Pitch Shifter

## 💾 The Patcher Strategy
Pitch Shifter is powerful, but it's even better inside **Patcher**.
Why? Because you can EQ the shifting path separately.

### 1. "Clean Shift" Preset (Patcher)
*   **Routing:** Input -> Pitch Shifter (100% Wet) -> Parametric EQ 2 (Low Cut / High Cut) -> Output.
*   **Why:** Pitch shifting introduces digital aliasing in the highs and mud in the lows. EQing the wet signal cleans this up.

### 2. "Double Track" Preset (Patcher)
*   **Routing:**
    *   Path A: Dry.
    *   Path B: Pitch Shifter (+12 Cents) Pan Left.
    *   Path C: Pitch Shifter (-12 Cents) Pan Right.
*   **Result:** A massive, wide vocal widener.

## 🎛️ Standard Presets (Plugin State)
Save these as FL Plugin Presets:
1.  **The Drop:** Pitch -12, Voice Mode, Mix 100%. (Ready for automation).
2.  **The Riser:** Pitch +12, Feedback 80%, Delay 100ms. (Ready for transitions).

```

---

## FILE: 02-Data\rules\00_Do_Dont_Rules.md

```markdown
# Operational Rules: Do's and Don'ts

| Action | Verdict | Reason |
| :--- | :--- | :--- |
| **Mix at 50% without Detune** | 🛑 **STOP** | This causes phase cancellation (Combing) because of the processing latency. Either go 100% Wet, or detune significantly so the phasing happens fast (Flanging). |
| **Shift > 12st** | ⚠️ **CAUTION** | Audio quality degrades severely beyond 1 octave. If you need extreme shifts, chain two plugins or use Newtone (Offline). |
| **Automate Mode Switch** | 🛑 **STOP** | Switching between "Voice" and "Music" live causes an audio gap/click. Choose one and stick to it. |
| **Low Latency Mixing** | ✅ **DO** | Use this plugin during the mix phase, not recording. The latency can throw off a performer's timing. |

```

---

## FILE: 02-Data\rules\01_Troubleshooting_Matrix.md

```markdown
# Troubleshooting Matrix

| Symptom | Probable Cause | The Fix |
| :--- | :--- | :--- |
| **"Hollow / Phasy Sound"** | Mix knob is at ~50%. | Turn Mix to 100% Wet. |
| **"Bubbly / Underwater"** | Polyphonic audio into Voice Mode. | Switch to **Music Mode**. |
| **"Stuttering / Grainy"** | Grain Duration is too long/short. | In Music Mode, adjust the **Duration** knob until the grain size matches the source (smoothness). |
| **"Screeching"** | Feedback loop explosion. | Turn **Feedback** down to 0%. |
| **"Chipmunk Effect"** | Formant moving with pitch. | In Voice Mode, adjust the **Formant** knob in the opposite direction of the pitch shift (e.g., Pitch -5, Formant +5) to compensate. |

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B

## 1. The Ad-Lib Layer
*   **Rule:** Ad-libs should occupy a different frequency space than the lead.
*   **Implementation:** Use Pitch Shifter to drop ad-libs -12st. This puts them in the "Bass" range, filling out the frequency spectrum without competing with the mid-range lead.

## 2. The "Screw" Break
*   **Rule:** Slowing down the vibe without slowing the BPM.
*   **Implementation:** Automate Pitch Shifter on the Master Bus (or Drum Bus) to drop -2 semitones during the chorus transition. It mimics the "Tape Stop" or "DJ Screw" feel momentarily.

## 3. The "Fake Choir"
*   **Rule:** R&B requires thick stacks.
*   **Implementation:** If you only have one singer, use Patcher to run 3 parallel Pitch Shifters:
    *   -12st (Bass)
    *   -5st (Baritone)
    *   +7st (Alto)
    *   Blend them low (-12dB) under the main vocal.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Workflow: Instant Monster Voice

**Goal:** Turn a normal voice into a terrifying monster.

1.  **Insert:** Place Pitch Shifter on Mixer Track.
2.  **Mode:** Set to **Voice**.
3.  **Knobs:**
    *   **Pitch:** -12 (All the way Left).
    *   **Formant:** -5 (Left).
    *   **Mix:** 100% (Right).
4.  **Polish:** Add EQ afterwards and boost 100Hz for body.

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Sound_Design.md

```markdown
# Workflow: The Infinite Riser

**Goal:** Create a transition FX from a single sound.

1.  **Source:** A simple Clap or Snare hit.
2.  **Settings:**
    *   **Pitch:** +0.5 Semitones.
    *   **Feedback:** 90%.
    *   **Delay:** 50ms.
3.  **Action:** Hit the clap once.
4.  **Result:** The sound repeats. Each repeat is higher than the last. It spirals up out of hearing range.
5.  **Automation:** Automate the **Feedback** knob to 0% when the next bar drops to cut the tail instantly.

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Mix_Or_Control.md

```markdown
# Workflow: The "Thickener"

**Goal:** Widen a lead synth or vocal without chorus wobble.

1.  **Setup:** Use a Send channel (or Patcher).
2.  **Plugin:** Pitch Shifter on the Send.
3.  **Settings:**
    *   **Pitch:** +0.
    *   **Fine:** -15 Cents.
    *   **Mix:** 100% Wet.
4.  **Routing:** 
    *   Send Main Vocal to this track.
    *   Pan the Send track hard **Left**.
5.  **Bonus:** Create a second Send track with +15 Cents detune and pan hard **Right**.
6.  **Result:** Massive stereo width that leaves the Mono center perfectly clean.

```

---

## FILE: 03-Workflows\by-goal\10_Vibe_Moody.md

```markdown
# Vibe Workflow: MOODY (The Deep Voice)

**Context:** Creating the "Inner Demon" parallel vocal.

1.  **Clean:** Pitch Shifter is an insert on the Lead Vocal.
2.  **Mix:** Set to **30%** (We want mostly Dry signal).
3.  **Shift:**
    *   Pitch: -12 Semitones.
    *   Formant: 0 (Keep formant neutral for clarity).
4.  **Result:** The listener hears the main rapper, but feels a sub-octave vibration that adds menace/weight to the performance.

```

---

## FILE: 03-Workflows\by-goal\11_Vibe_Upbeat.md

```markdown
# Vibe Workflow: UPBEAT (The Chipmunk)

**Context:** Hyperpop high-energy fills.

1.  **Automation:** This effect is usually automated ON just for specific words.
2.  **Settings:**
    *   Pitch: +12.
    *   Formant: +4.
    *   Mix: 100%.
3.  **Pattern:** On the end of a 4-bar loop (the turnaround), automate the Mix knob from 0% to 100%.
4.  **Result:** The last word "glitches" up an octave, signaling the transition.

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe Workflow: PSYCHEDELIC (Spiral Delay)

**Context:** Dub / Reggae / Trippy Trap.

1.  **Source:** A Snare or Rimshot.
2.  **Settings:**
    *   Pitch: -2 Semitones (Dropping).
    *   Feedback: 75%.
    *   Delay: 300ms (Synced roughly to 1/8th dot).
3.  **Result:** A delay trail that sinks into the abyss. Each echo is lower and darker than the last.

```

---

## FILE: 03-Workflows\by-goal\13_Vibe_Jazzy.md

```markdown
# Vibe Workflow: JAZZY (Thick Keys)

**Context:** Giving a digital piano insertion weight.

1.  **Mode:** **Music**.
2.  **Settings:**
    *   Pitch: -12.
    *   Mix: 15% (Very subtle).
3.  **Result:** Adds a "Phantom Bass" player following the left hand of the pianist. It thickens the harmony without needing a dedicated bass patch.

```

---

## FILE: 03-Workflows\by-goal\14_Vibe_Vibey.md

```markdown
# Vibe Workflow: VIBEY (Broken Tape)

**Context:** Lo-Fi aesthetic.

1.  **Mode:** **Music**.
2.  **Settings:**
    *   Pitch: +0.
    *   Fine: Automate this with a random LFO (+/- 20 cents).
    *   Mix: 100%.
3.  **Result:** The audio speed stays constant, but the pitch wobbles uncomfortably, mimicking a damaged cassette tape mechanism.

```

---

## FILE: 03-Workflows\by-instrument\Drums_FX_Bass.md

```markdown
# Workflow: Instrument Recipes

## 1. Drums (Re-Pitching)
**Context:** Repitching a percussion loop to match the song key.
*   **Mode:** Music.
*   **Pitch:** Adjust until it sounds "in key".
*   **Duration:** Keep low (~20ms) to preserve transient snap.

## 2. FX (Risers)
**Context:** Creating tension.
*   **Approach:** Automate the **Pitch** knob from -12 to +12 over 8 bars.
*   **Mode:** Music (for texture) or Voice (for smooth glide).

## 3. Bass (Harmonics)
**Context:** Making 808s audible on phone speakers.
*   **Setup:** Parallel Chain.
*   **Wet Chain:** Pitch Shifter (+12 st) -> High Pass Filter (200Hz).
*   **Result:** You hear the upper octave (which phones can play), but the feeling of the low 808 remains.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

| ID | Source Name | Type | Key Information Derived |
| :--- | :--- | :--- | :--- |
| **IL-MAN** | Image-Line Official Manual | Primary | Voice vs Music mode architecture, Formant function, Feedback path. |
| **PROD-XP** | Modern Production Techniques | Empirical | "Monster Voice" settings, Granular cloud technique, Patcher parallel processing. |

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Official Links

*   **Plugin Manual:** [Image-Line Pitch Shifter](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Pitch%20Shifter.htm)

```

---

## FILE: 04-Reference\02_Coverage_Checklist.md

```markdown
# Coverage Checklist

## Learning
- [x] Mental Model (Real-Time Transformer)
- [x] UI Map (Voice vs Music)
- [x] Core Techniques (Formant Correction, Feedback Loops)
- [x] Vibe Translation (5 Vibes Mapped)

## Data
- [x] Parameters (Pitch, Fine, Formant, Mode)
- [x] Presets Strategy (Patcher Routing)
- [x] Rules (Phasing, Latency)

## Workflows
- [x] Instant Monster Voice
- [x] Infinite Riser
- [x] Stereo Thickener
- [x] Moody Vibe
- [x] Upbeat Vibe
- [x] Psych Vibe
- [x] Jazzy Vibe
- [x] Vibey Vibe
- [x] Drums/Bass Recipes

## Reference
- [x] Sources
- [x] Links
- [x] Style Board

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Hip-Hop & R&B

How Pitch Shifter defines the sound of modern genres.

## 1. The "Houston" Screw (Chopped & Screwed)
*   **Signature:** Slow, deep, muddy vocals.
*   **Recipe:** Voice Mode, Pitch -4st, Formant -2st. Used on whole vocal bus.

## 2. The "Carti" Baby Voice (Rage/Trap)
*   **Signature:** High squeaky ad-libs with energy.
*   **Recipe:** Voice Mode, Pitch +5st, Formant +4st. Used on ad-libs to separate them from the main flow.

## 3. The "ASAP" Mob Deep Voice
*   **Signature:** A demonic shadow voice under the lead.
*   **Recipe:** Voice Mode, Pitch -12st. Mixed 30% wet.

## 4. The "Hyperpop" Transition
*   **Signature:** Glitchy pitch ramps.
*   **Recipe:** Automating the Pitch knob rapidly +/- 12st at the end of bars.

```

---

