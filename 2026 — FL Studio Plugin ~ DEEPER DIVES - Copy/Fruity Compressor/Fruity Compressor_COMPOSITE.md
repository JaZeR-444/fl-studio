# Fruity Compressor - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Compressor - Dynamic Dynamics Control

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝   

 ██████╗  ██████╗ ███╗   ███╗██████╗ ██████╗ ███████╗███████╗███████╗ ██████╗ ██████╗ 
██╔════╝ ██╔═══██╗████╗ ████║██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝██╔═══██╗██╔══██╗
██║      ██║   ██║██╔████╔██║██████╔╝██████╔╝█████╗  ███████╗███████╗██║   ██║██████╔╝
██║      ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██╗██╔══╝  ╚════██║╚════██║██║   ██║██╔══██╗
╚██████╗ ╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║███████╗███████║███████║╚██████╔╝██║  ██║
 ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝
`\`\`

**Plugin Type:** Compressor / Dynamics Processor
**Category:** Dynamics / Mixing
**Official Manual:** [Image-Line Fruity Compressor Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Compressor.htm)

---

## 🎯 What is Fruity Compressor?

Fruity Compressor is a legacy, straightforward dynamics processor. While less visual than the newer Fruity Limiter or Maximus, its simplicity makes it an excellent tool for understanding the core physics of compression. It provides standard Threshold, Ratio, Attack, and Release controls, along with variable "Knee" types (Vintage, Soft, Hard).

**Key Capabilities:**
- **Dynamic Range Reduction:** Makes loud sounds quieter and quiet sounds louder (effectively).
- **Threshold & Ratio:** Standard controls for determining when and how much to compress.
- **Variable Knee Types:** Hard, Medium, Soft, and Vintage modes that change the compression curve.
- **Gain Makeup:** Re-levelling the signal after reduction.
- **Low CPU:** Extremely lightweight processing.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **compression-101.md** (Understanding Threshold/Ratio)
3. Create **parameter-cheat-sheet.md**
4. Watch the Gain Reduction meter while adjusting Threshold.

### For Mix Engineers:
1. Review **compression-knee-types.md** (Vintage vs Hard)
2. Study **drum-compression.md** (Slow Attack for punch)
3. Learn **parallel-compression.md** (Using the Mix knob if available, or Send routing)

### For Sound Designers:
1. Study **sustain-enhancement.md**
2. Review **transient-shaping.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Threshold:** The dB level where compression starts.
  - **Ratio:** Input:Output reduction (e.g., 4:1).
  - **Gain:** Output volume boost.
  - **Attack:** How fast it reacts (ms).
  - **Release:** How fast it lets go (ms).
  - **Type:** The Knee curve character.

- [ ] **compression-knee-types.md**
  - **Hard:** Instant ratio application (Robotic, precise).
  - **Soft:** Gradual ratio application (Transparent).
  - **Vintage:** Non-linear curve (Color, warmth).

#### 02-Data/parameters/
- [ ] **fruity-compressor-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Compressor",
    "category": "Dynamics",
    "parameters": [
      {
        "name": "Threshold",
        "type": "knob",
        "unit": "dB",
        "description": "Level at which compression begins",
        "use_cases": ["levelling vocals", "controlling peaks"]
      },
      {
        "name": "Ratio",
        "type": "knob",
        "description": "Amount of reduction",
        "pro_tip": "Use < 2:1 for gentle mastering, > 10:1 for limiting"
      }
    ]
  }
  `\`\`

#### 02-Data/presets/
- [ ] **starter-compression-presets.json**
  - Vocal Leveller (Med Attack, Med Release, 4:1)
  - Drum Smash (Fast Attack, Fast Release, High Ratio)
  - Bass Glue (Slow Attack, Med Release, 2:1)

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **drum-compression.md**
  - Using Slow Attack (15-30ms) to let transients pass ("Punch").
  - Using Fast Release to avoid "pumping" (unless desired).

- [ ] **vocal-levelling.md**
  - Using Medium Attack to catch peaks.
  - Using Soft Knee for transparency.
  - 4:1 Ratio standard.

- [ ] **bass-sustain.md**
  - Fast Attack to control plucks.
  - Slow Release to bring up the tail/sustain.

#### 03-Workflows/by-context/
- [ ] **acoustic-guitar-glue.md**
- [ ] **podcast-voice-dynamics.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **attack-release-curves.md**
  - How the "Type" selector affects the Attack/Release integration.
  - Why "Vintage" mode sounds different on drums.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understanding Reduction

**Tasks:**
1. Load a dynamic drum loop
2. Lower Threshold until the meter moves
3. Adjust Ratio to see more reduction
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does "Gain" help me compare Before/After? (A/B testing)
- What happens if Attack is 0ms? (Clicking/Distortion)
- What is the difference between Ratio 2:1 and 8:1?

### Phase 2: Advanced Application (Week 2)
**Goal:** Tone Shaping

**Tasks:**
1. Compress a Snare drum to make it "snap" (Attack ~30ms)
2. Compress a Bass to make it "even" (Fast Attack)
3. Compare Hard vs Vintage Knee
4. Create drum-compression.md

**Key Questions to Answer:**
- Why does "Vintage" type sound louder?
- How to avoid the "pumping" effect? (Release time)

---

## 📊 Plugin Specifications to Document

### Dynamics Engine
- Ratio Range (1:1 to Infinity:1)
- Attack Range (ms)
- Release Range (ms)
- Knee Types (Hard, Medium, Vintage, Soft)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the sound getting quieter? (Compression reduces peaks, you must use Gain to compensate)
2. What does the "Type" knob do?
3. How do I know if I'm compressing too much? (Listen for artifacts/life-sucking)

### Advanced Usage
1. When should I use Fruity Compressor vs Fruity Limiter? (Limiter provides visual feedback and brickwall limiting; Compressor is simpler for tracks)
2. Can I use this for Sidechaining? (No, Fruity Compressor does not have a SC input. Use Fruity Limiter for that).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Threshold:** "Until reduction reads -X dB"
- **Ratio:** X:1 value
- **Attack/Release:** ms values
- **Type:** Knee selection

---

## 🔗 Cross-Reference with Other Plugins

Fruity Compressor is often used with:
- **Fruity Limiter** (The modern replacement with Sidechain)
- **Fruity Multiband Compressor** (Splitting bands)
- **Maximus** (The ultimate mastering compressor)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Compressor/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── compression-knee-types.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-compressor-params.json
│   └── presets/
│       └── starter-compression-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── drum-compression.md
│   │   ├── vocal-levelling.md
│   │   └── bass-sustain.md
│
└── 04-Reference/
    └── attack-release-curves.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Compressor Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Compressor.htm)
- [Fruity Compressor Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Compressor_tutorials.htm)
- [Fruity Compressor Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+compressor+tutorial)

### Community Resources
- [Fruity Compressor Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+compressor&restrict_sr=1)
- [Fruity Compressor User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Compressor Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis before/after processing
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity dB Meter** for precise level monitoring
- **Fruity Limiter** for comparison with visual feedback

### Recommended Learning Materials
- "Compression Fundamentals" - Understanding the basics of dynamic range control
- "Attack and Release Settings" - Deep dive into timing parameters
- "Knee Types and Their Applications" - Understanding compression curves

### Advanced Techniques
- **Parallel Compression:** Blending compressed and uncompressed signals
- **Sidechain Alternatives:** Using sends and returns for similar effects
- **Vintage Character:** Using vintage knee settings for warmth and color

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Add "punch" to a snare drum using only Attack settings
- [ ] Level a vocal track so words are intelligible
- [ ] Explain the difference between "Hard" and "Soft" knee
- [ ] Use Makeup Gain to match the bypass volume perfectly

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Compressor

## Purpose & Identity
Fruity Compressor is a minimalist, legacy dynamics processor. Its primary identity is a **surgical volume leveler**. It identifies when an audio signal exceeds a specific volume (the Threshold) and turns it down by a specific amount (the Ratio). It is essential for making vocals sit in a mix and for adding "punch" to drums. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine an invisible sound engineer with their hand on the volume fader. 
- **Threshold** is the engineer's "line in the sand."
- **Ratio** is how hard they pull the fader down once the sound crosses that line.
- **Attack** is how fast they react.
- **Release** is how fast they let go.

## Hip-Hop / R&B Context
Compression defines the "Modern" sound of urban music.
- **Rap Vocal Leveling:** Ensuring every syllable of a rapid-fire verse is audible without the loud words clipping.
- **808 Consistency:** Taming the initial "thump" of an 808 so the tail feels more sustained and powerful.
- **Drum Glue:** Compressing the drum bus to make the Kick, Snare, and Hats feel like they were recorded as a single unit.

## When To Use
- When a sound is **too dynamic** (too much difference between loud and quiet parts).
- When you want to **increase the "snap"** of a drum hit (using slow attack).
- When you want to **glue** a group of tracks together.

## When NOT To Use
- **Sidechaining:** Fruity Compressor does not have an external sidechain input. Use **Fruity Limiter** for kick-drum-triggered ducking.
- **Sub-Bass Cleanup:** Compression doesn't remove frequencies; use an EQ for that. Over-compressing sub-bass can actually cause distortion.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Compressor

## UI Tour
Fruity Compressor features a functional, non-visual interface:

1.  **Threshold (dB):** Sets the level where compression begins. [SRC: IL-MAN]
2.  **Ratio:** Sets the strength of the volume reduction (e.g., 4:1).
3.  **Gain:** "Makeup Gain." Boosts the signal *after* compression to match original levels.
4.  **Attack (ms):** How long before the compressor starts working.
5.  **Release (ms):** How long before the compressor stops working.
6.  **Type (Knee):** Selects the curve of the compression (Vintage, Soft, Medium, Hard).
7.  **Gain Reduction Meter:** A vertical bar showing how many dBs are being removed.

## Functional Flow
1.  **Detection:** The plugin monitors the incoming peak or RMS level.
2.  **Comparison:** It checks the level against the **Threshold**.
3.  **Timing:** The **Attack** delay is applied.
4.  **Reduction:** The signal is turned down based on the **Ratio** and **Type (Knee)**.
5.  **Recovery:** The signal returns to normal based on the **Release** time.
6.  **Amplification:** The **Gain** (Makeup) is added to the resulting signal.

## Things Beginners Misunderstand
- **"It makes it louder":** No, it makes it *quieter* first. It only sounds louder because you use the **Gain** knob afterward.
- **Attack at 0ms:** Setting Attack to zero kills the "punch" of drums. It turns the hit into a "thud." [SRC: REPUTABLE]
- **The "Type" Selector:** This isn't just a filter; it changes the *shape* of the compression. "Vintage" adds a non-linear, warmer character to the curve.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Compressor

## 1. The "Punchy" Snare (Slow Attack)
- **Technique:** Use a slow Attack (15ms - 30ms).
- **Execution:** Set a high Ratio (6:1) and lower the Threshold until you see 4dB of reduction.
- **Result:** The initial "crack" of the snare passes through uncompressed, then the tail is squashed. This emphasizes the transient, making the snare feel "punchier." [SRC: REPUTABLE]

## 2. Vocal "Vibe" Leveling
- **Technique:** Use a Medium Attack (~5ms) and a Soft Knee.
- **Execution:** Set a moderate Ratio (3:1 or 4:1). Aim for 3-6dB of reduction.
- **Result:** Smoothly tames the peaks without sounding like an "effect," allowing the vocal to sit stably in the middle of the beat.

## 3. The "Breathing" Pad (Release Timing)
- **Technique:** Set the Release to match the tempo of the song.
- **Execution:** If the track is 140BPM, a 1/4 note is 428ms. Set Release to approx. 400ms.
- **Result:** The compressor "lets go" exactly as the next beat hits, creating a rhythmic "breathing" or "pumping" effect.

## 4. Gain Matching (The A/B Test)
- **Technique:** Use the **Gain** knob to make the "Wet" signal exactly as loud as the "Dry" signal.
- **Why:** Our ears think "Louder is Better." By matching the volume, you can objectively hear if the compressor is actually improving the tone or just making it louder. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
- **Pitfall:** "Digital Distortion/Clicking."
  - **Fix:** Your Attack is too fast (0ms) or your Release is too fast (<10ms). Increase both slightly to allow the waveform to breathe.
- **Pitfall:** "Sucking the life out of the track."
  - **Fix:** Your Ratio is too high or Threshold is too low. Aim for a lower Ratio (1.5:1 to 2:1) for bus processing.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Compressor

Compressors are the "Glue" and "Attitude" of your mix.

## 1. Moody (Intense, Aggressive, Pumping)
- **Concept:** Making the transients "fight."
- **Levers:**
  - **Release:** Fast (20ms - 50ms).
  - **Ratio:** High (8:1).
  - **Attack:** Moderate (5ms).
- **Listen For:** The background noise rushing up between notes. This adds a sense of "urgency" and "grit."
- **Don't Do This:** Don't use a Soft Knee; you want the compression to be obvious and "hard."

## 2. Upbeat (Punchy, Clean, Energetic)
- **Concept:** Maximum Impact.
- **Levers:**
  - **Attack:** Slow (30ms+).
  - **Ratio:** Moderate (4:1).
- **Listen For:** The "snap" of the drums. The compressor emphasizes the hit, making the rhythm feel more physical.
- **Don't Do This:** Don't over-compress; keep the dynamics lively.

## 3. Psychedelic (Smashed, Lo-Fi, Crushed)
- **Concept:** Total Dynamic Destruction.
- **Levers:**
  - **Threshold:** -40dB (Extreme).
  - **Ratio:** Infinity (if available) or Max.
  - **Release:** Very Fast.
- **Listen For:** "Crushing" artifacts where the sound feels like it’s being squeezed through a straw.
- **Don't Do This:** Avoid gain compensation; let the sound stay small and "lo-fi."

## 4. Jazzy (Transparent, Smooth, Balanced)
- **Concept:** Invisible Control.
- **Levers:**
  - **Knee:** Soft.
  - **Ratio:** Low (1.5:1).
  - **Threshold:** Subtle (aim for 1-2dB reduction).
- **Listen For:** A slight "thickening" of the instruments without any audible volume changes.
- **Don't Do This:** Avoid fast release times; jazz vibes need a natural, long decay.

## 5. Vibey (Breathing, Lush, Professional)
- **Concept:** The "Radio Sheen."
- **Levers:**
  - **Type:** Vintage.
  - **Release:** Tempo-synced (e.g., 400ms for 140BPM).
  - **Gain:** Clean makeup gain.
- **Listen For:** A polished, "expensive" consistency where the vocal feels like it’s floating effortlessly above the beat. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Compressor (5 Minutes)

1.  **Insert:** Load **Fruity Compressor** onto a vocal or drum track.
2.  **Ratio:** Set to `4:1` (a good all-around starting point).
3.  **Threshold:** Lower the knob until the **Gain Reduction** meter starts moving (aim for -3dB to -6dB).
4.  **Attack:** Set to `15ms` for drums (punch) or `5ms` for vocals (control).
5.  **Gain:** Turn up the **Gain** knob until the volume sounds the same as when the plugin is bypassed.
6.  **Tip:** Use the **Vintage** type for extra warmth. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Compressor

- **Over-Compressing Bass:** Trying to fix a "quiet" sub-bass with a high ratio. This often introduces harmonic distortion. **Fix:** Use a lower ratio (2:1) and fix the volume with automation instead.
- **Attack Too Fast:** Setting Attack to <1ms on a Kick drum. This cuts off the transient, making the kick sound "flat" and weak. **Fix:** Use a slow attack (20ms+) to keep the "thump."
- **Makeup Gain Chaos:** Boosting the **Gain** knob too high. Compression reduces dynamic range; if you boost too much, you’ll clip the next plugin in the chain. **Fix:** Match the "Output" level to the "Input" level.
- **Ignoring the Knee:** Using a "Hard" knee on a delicate acoustic vocal. This makes the compression start abruptly and sounds mechanical. **Fix:** Use **Soft** or **Vintage** for smoother transitions.
- **The Loop Trap:** Compressing a sound that has Reverb already baked in. The compressor will bring up the "noise floor" of the reverb tail, making the mix sound muddy. **Fix:** Compress **BEFORE** Reverb. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Compressor

| Goal | Ratio | Attack | Release | Type | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Punchy Kick** | 6:1 | 30ms | 50ms | Hard | Club-ready drums. |
| **Steady Vocal** | 4:1 | 5ms | 200ms | Soft | Melodic rap leads. |
| **Lush Pad** | 2:1 | 100ms | 500ms | Vintage | Background textures. |
| **Drum Bus Glue** | 1.5:1 | 50ms | 100ms | Medium | Group processing. |
| **Limiting FX** | 20:1 | 0.1ms | 10ms | Hard | Protecting against peaks.|

*Note: Threshold should be adjusted until you see 3-6dB of gain reduction.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Compressor)

- **The Goal:** An aggressive, "choking" energy where every sound feels under pressure.
- **Recipe:**
  1. Load Compressor on an ad-lib or background vocal.
  2. Set Ratio to **10:1** (Aggressive).
  3. Set Attack to **2ms** (Fast).
  4. Set Release to **30ms** (Very Fast).
  5. Lower Threshold until you see **10dB+** of reduction.
- **Result:** This creates an "over-compressed" sound where the background noise and breaths are as loud as the words. It adds a "gritty" and "distressed" vibe perfect for dark trap.
- **Mix Tip:** Use this in **Parallel** (mix fader at 50%) to keep some of the original clarity. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Mainstream Snap")
- **Settings:** Ratio 4:1, Attack 35ms, Release 80ms.
- **Effect:** The slow attack lets the drum "crack" through, making the beat feel faster and more aggressive.

## Psychedelic (The "Smash")
- **Settings:** Ratio 50:1, Attack 0ms, Release 10ms.
- **Effect:** Completely flattens the waveform. Use on a "White Noise" riser to create a solid, static wall of energy.

## Jazzy (The "Invisible Leveler")
- **Settings:** Ratio 1.5:1, Attack 10ms, Release 300ms, Soft Knee.
- **Context:** Gently balances an upright bass or clean guitar without the listener ever knowing a compressor is active.

## Vibey (The "Breathing Pump")
- **Settings:** Ratio 3:1, Release 400ms (Tempo-matched).
- **Context:** The volume "swells" back up in the gaps of an R&B track, creating a relaxed, organic pulse. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Compressor: The Ultrafunk Legacy

> **Scope:** Character Compression, LA-2A Emulation, and TCR.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Medium (Algorithm Selection).

## 🧠 The "Hidden Gem" Concept
Most users skip this plugin for Fruity Limiter. That is a mistake.
*   **Fruity Limiter:** Clinical, perfect, transparent.
*   **Fruity Compressor:** Based on the legendary **Ultrafunk** algorithms. It has "color", non-linear knees, and a specific "Vintage" mode that mimics opto-compressors.

**Signal Flow:**
`Input` -> **[THRESHOLD DETECTOR]** -> **[KNEE CALCULATION]** -> **[GAIN REDUCTION]** -> **[MAKEUP GAIN]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The "Type" Knob (The Secret Weapon)

The Type knob is not just a Knee selector. It changes the compression behavior.

| Type | Knee Width | Character | Ideally Used For |
| :--- | :--- | :--- | :--- |
| **Hard** | 0dB | Instant Clamp. | Bass, Limiting. |
| **Medium** | 6dB | Standard VCA. | Drums, General Mixing. |
| **Soft** | 15dB | Gradual on-ramp. | Vocals, Piano. |
| **Vintage** | 7dB | **Opto-Simulation.** | 808s, Vocals, Glue. |

**The "/R" Modes:**
Every type has a matching "/R" version (e.g., "Vintage/R").
*   **R = TCR (Transient Controlled Release).**
*   **Logic:** The Release time is not static. If a fast transient hits (snare), the release is fast. If a sustained bass note hits, the release is slow.
*   **Benefit:** Prevents "Pumping" on complex mixes.

---

## 🔁 Section 2: The "Vintage" Curve

Why is "Vintage" mode special?
*   **Standard Compressor:** Ratio stays constant above threshold (e.g., 4:1 forever).
*   **Vintage Compressor:** Ratio *decreases* as the signal gets significantly louder than the threshold.
    *   *Result:* Loud peaks are allowed to punch through slightly (Soft Saturation behavior), preserving transients while controlling the body. This mimics the Teletronix LA-2A.

---

## ⚡ Technical Specs: Latency

*   **PDC:** Older versions of FL Studio (pre-v20) had manual PDC issues with this plugin.
*   **Report Latency:** Always keep the "Report Latency" button checked.
*   **Lookahead:** Unlike Fruity Limiter, Fruity Compressor has minimal lookahead. It is reactive, meaning fast transients *will* clip through initially before the attack stage catches them. Use a Soft Clipper after it if this is a problem.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Glue" Bus Compressor
1.  **Type:** Vintage/R (TCR active).
2.  **Ratio:** 2.0:1.
3.  **Attack:** 30ms (Let transients punch).
4.  **Release:** 100ms (Auto-adjusts thanks to TCR).
5.  **Result:** Essential Drum Bus glue that breathes with the beat.

### 2. Snare Smash
1.  **Type:** Hard.
2.  **Ratio:** 8:1.
3.  **Attack:** 0.0ms (Instant).
4.  **Release:** 200ms.
5.  **Gain:** +12dB.
6.  **Result:** Transforms a weak acoustic snare into a splatty, aggressive block of noise.

### 3. Parallel Compression (The Mix Knob is missing!)
1.  **Issue:** Fruity Compressor has no Wet/Dry knob.
2.  **Workaround:**
    *   Use the **Mix Level** knob in the Plugin Wrapper (Top Right of the window).
    *   Set Compressor to extreme settings ("Nuke" mode).
    *   Turn the Wrapper Mix knob down to 50%.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Compressor - Parameter Cheat Sheet

**Plugin Type:** Dynamic Processor (Compressor)
**Category:** Dynamics
**Official Manual:** [Fruity Compressor](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Compressor.htm)

---

## 🎚️ Core Compression Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Threshold** | -60 to 0 dB | Level above which compression begins | Lower for more compression; higher for transparency |
| **Ratio** | 1:1 to Inf:1 | Amount of gain reduction applied | 2:1-4:1 for instruments; 10:1+ for limiting |
| **Gain** | -30 to +30 dB | Output makeup gain | Use to match pre-compression volume levels |
| **Attack** | 0 to 400 ms | How quickly compression kicks in | Fast (0-10ms) for peaks; Slow (20ms+) for punch |
| **Release** | 1 to 4000 ms | How quickly compression stops | 50-200ms is standard; sync to tempo for "breathing" |

---

## 🎛️ Advanced Control & Knee Types

| Type | Description | Use Case |
|------|-------------|----------|
| **Hard** | Abrupt transition at threshold | Precise peak control, drums, aggressive styles |
| **Medium** | Softer transition | General purpose, versatile mixing |
| **Vintage** | Emulates old analog behavior | Warmth, musicality, vocals, guitars |
| **Soft** | Very gradual transition | Transparent leveling, buses, mastering |
| **Hard R** | Hard knee with faster release | High-energy percussion |
| **Medium R** | Medium knee with faster release | Rhythmic instruments |
| **Vintage R** | Vintage knee with faster release | Classic rock/pop elements |
| **Soft R** | Soft knee with faster release | Smooth bus processing |

---

## 🔧 Technical Specifications

- **Latency:** 0 samples (Zero Latency)
- **Engine:** Peak-based detection
- **Sidechain:** Internal or External (via Wrapper routing)
- **Stereo Link:** 100% (Left and Right are processed equally based on the louder channel)

---

## 🎯 Quick Start Workflows

### Drum Punch (Parallel Style)
1. **Ratio:** 4:1
2. **Attack:** 30ms (let the initial "crack" through)
3. **Release:** 100ms
4. **Threshold:** Drop until you see -4 to -6 dB reduction
5. **Gain:** Boost by +4 dB

### Vocal Leveling
1. **Type:** Soft or Vintage
2. **Ratio:** 3:1
3. **Attack:** 10ms
4. **Release:** 200ms
5. **Threshold:** Adjust for consistent volume without "pumping"

---

## ⚡ Pro Tips

1. **The 0ms Attack Trap:** Setting attack to 0ms can kill the "life" of a sound by flattening all transients. Use 5-15ms for a more natural sound.
2. **Tempo-Synced Release:** Aim for the compression to reset just before the next beat.
3. **Makeup Gain Check:** Always bypass the plugin to ensure you haven't just made the sound louder, but actually improved the dynamics.

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Compressor

| Parameter | Type | Range | Default | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Threshold** | Knob | -inf to 0dB | 0dB | **Moody** | **Leveling** | The dB level where reduction starts. |
| **Ratio** | Knob | 1:1 to inf:1 | 1.1:1 | **Upbeat** | **Density** | The intensity of the volume cut. |
| **Gain** | Knob | -inf to +30dB | 0dB | N/A | **Volume** | Post-compression amplification. |
| **Attack** | Knob | 0 to 400ms | 10ms | **Upbeat** | **Punch** | Time before reduction triggers. |
| **Release** | Knob | 1 to 4000ms | 200ms | **Vibey** | **Groove** | Time before reduction ends. |
| **Type** | Selection| 4 Types | Med | **Jazzy** | **Character** | The curvature of the knee. |

- **Vibe Impact Tag (Groove):** Release time is the primary lever for setting the "pulse" of a track.
- **Mix Impact Tag (Punch):** Attack time determines whether a drum "clicks" or "thuds." [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\compressor-specs.json

```json
{
  "plugin": {
    "name": "Fruity Compressor",
    "category": "Dynamics",
    "type": "Compressor",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Compressor.htm"
  },
  "parameters": {
    "core": [
      {
        "id": "threshold",
        "name": "Threshold",
        "range": "-60 to 0 dB",
        "default": "-15 dB",
        "description": "Sets the level at which the compressor starts working."
      },
      {
        "id": "ratio",
        "name": "Ratio",
        "range": "1.0:1 to 100.0:1",
        "default": "4.0:1",
        "description": "Sets the amount of compression applied."
      },
      {
        "id": "gain",
        "name": "Gain",
        "range": "-30 to +30 dB",
        "default": "0 dB",
        "description": "Makeup gain to compensate for volume loss."
      }
    ],
    "envelope": [
      {
        "id": "attack",
        "name": "Attack",
        "range": "0 to 400 ms",
        "unit": "ms",
        "description": "Time taken to reach full compression."
      },
      {
        "id": "release",
        "name": "Release",
        "range": "1 to 4000 ms",
        "unit": "ms",
        "description": "Time taken to return to unity gain."
      }
    ],
    "types": [
      "Hard", "Medium", "Vintage", "Soft",
      "Hard R", "Medium R", "Vintage R", "Soft R"
    ]
  },
  "workflows": [
    {
      "name": "Sidechain Ducking",
      "steps": [
        "Route trigger track (e.g. Kick) to bass track's mixer insert.",
        "Insert Fruity Compressor on bass track.",
        "Right-click 'Threshold' or 'Ratio' and link to internal controller if using Peak Controller, or use Wrapper routing for direct sidechain.",
        "Set high Ratio (10:1) and fast Attack (0.1ms) for aggressive ducking."
      ]
    }
  ]
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Compressor",
  "category": "Dynamics",
  "parameters": [
    {
      "section": "Dynamics",
      "id": "threshold",
      "name": "Threshold",
      "range": { "min": -60, "max": 0, "unit": "dB" },
      "description": "Level at which compression begins."
    },
    {
      "section": "Dynamics",
      "id": "ratio",
      "name": "Ratio",
      "range": { "min": 0.4, "max": 30, "unit": ":1" },
      "description": "Input/Output gain reduction ratio."
    },
    {
      "section": "Envelope",
      "id": "attack",
      "name": "Attack",
      "range": { "min": 0, "max": 400, "unit": "ms" },
      "description": "Reaction time."
    },
    {
      "section": "Envelope",
      "id": "release",
      "name": "Release",
      "range": { "min": 1, "max": 4000, "unit": "ms" },
      "description": "Recovery time."
    },
    {
      "section": "Character",
      "id": "knee_type",
      "name": "Type",
      "options": [
        "Hard",
        "Medium",
        "Vintage",
        "Soft",
        "Hard/R",
        "Medium/R",
        "Vintage/R",
        "Soft/R"
      ],
      "description": "Knee curve and TCR (Auto-Release) activation."
    }
  ]
}

```

---

## FILE: 02-Data\parameters\specs.json

```json
{
  "plugin": "Fruity Compressor",
  "parameters": [
    {
      "name": "Threshold",
      "id": "threshold",
      "unit": "dB",
      "min": -60.0,
      "max": 0.0,
      "default": -15.0,
      "description": "The level at which compression starts."
    },
    {
      "name": "Ratio",
      "id": "ratio",
      "unit": "factor",
      "min": 1.0,
      "max": 100.0,
      "default": 4.0,
      "description": "The compression ratio."
    },
    {
      "name": "Attack",
      "id": "attack",
      "unit": "ms",
      "min": 0.0,
      "max": 400.0,
      "default": 10.0,
      "description": "Time to reach full compression."
    },
    {
      "name": "Release",
      "id": "release",
      "unit": "ms",
      "min": 1.0,
      "max": 4000.0,
      "default": 200.0,
      "description": "Time to return to unity gain."
    }
  ]
}

```

---

## FILE: 02-Data\presets\bass-glue.json

```json
{
  "presetName": "Bass Glue",
  "plugin": "Fruity Compressor",
  "description": "Subtle compression to lock the bass in place.",
  "settings": {
    "threshold": -15.0,
    "ratio": 4.0,
    "attack": 50.0,
    "release": 300.0,
    "type": "MEDIUM",
    "gain": 1.5
  },
  "usage": "Ensures every bass note has the same perceived power."
}

```

---

## FILE: 02-Data\presets\hard-kick-punch.json

```json
{
  "presetName": "Hard Kick Punch",
  "plugin": "Fruity Compressor",
  "description": "Aggressive compression to emphasize the transient of a kick drum.",
  "settings": {
    "threshold": -12.0,
    "ratio": 6.0,
    "attack": 30.0,
    "release": 50.0,
    "type": "HARD",
    "gain": 3.0
  },
  "usage": "Use on kick drums that need more 'click' and 'thump' to cut through a busy mix."
}

```

---

## FILE: 02-Data\presets\parallel-drums.json

```json
{
  "presetName": "Parallel Drums",
  "plugin": "Fruity Compressor",
  "description": "Extreme compression for parallel processing (New York Style).",
  "settings": {
    "threshold": -30.0,
    "ratio": 10.0,
    "attack": 1.0,
    "release": 100.0,
    "type": "VINTAGE",
    "gain": 10.0
  },
  "usage": "Use on a separate bus and blend with the dry drums for massive energy."
}

```

---

## FILE: 02-Data\presets\snare-snap.json

```json
{
  "presetName": "Snare Snap",
  "plugin": "Fruity Compressor",
  "description": "Focuses on the initial strike of the snare drum.",
  "settings": {
    "threshold": -10.0,
    "ratio": 5.0,
    "attack": 40.0,
    "release": 80.0,
    "type": "HARD",
    "gain": 2.5
  },
  "usage": "Helps the snare pop without losing its body."
}

```

---

## FILE: 02-Data\presets\soft-knee-vocal.json

```json
{
  "presetName": "Soft Knee Vocal",
  "plugin": "Fruity Compressor",
  "description": "Transparent vocal leveling using a soft knee and moderate ratio.",
  "settings": {
    "threshold": -18.0,
    "ratio": 3.0,
    "attack": 15.0,
    "release": 200.0,
    "type": "SOFT",
    "gain": 2.0
  },
  "usage": "Best for lead vocals that need consistent volume without sounding 'squashed'."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Compressor)

## 1. 808 Sustain Rule
- **Rule:** Do not squash the "808 Hit." 
- **Application:** Use an Attack of **20ms-40ms**. This lets the "Punch" of the 808 pass through, while the compressor levels out the long sub-tail for a more consistent low-end. [SRC: REPUTABLE]

## 2. Rap Vocal Intelligibility
- **Rule:** Every word must be the same volume.
- **Application:** Use a Ratio of **4:1** and a low Threshold. If the vocal still "jumps around," use two compressors in series: one with a fast attack to catch peaks, and one with a slow attack for overall leveling.

## 3. The "New York" Parallel Rule
- **Rule:** Aggressive drums need "The Smash."
- **Application:** Create a parallel bus. Load Fruity Compressor. Set Ratio to **MAX** and Attack to **Fast**. Blend this "destroyed" drum signal back into the dry drums at 20% volume.

## 4. Gain Staging Safety
- **Rule:** Compression is a subtraction. 
- **Application:** Always check your gain reduction meter. If you are consistently removing more than **6dB**, your source signal might be too loud or you are over-processing.

## 5. Mono Consistency
- **Rule:** Compression can shift the stereo image if the L/R signals are vastly different.
- **Check:** Always check your Master in Mono. If the kick "tilts" to one side after compression, use a Mono source or adjust the pan before the compressor. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Compressor

## 1. Classic Sidechaining (The Setup)

Fruity Compressor handles sidechain differently than Limiter.

1.  **Routing:**
    *   Kick Channel -> Send "Sidechain" to Bass Channel.
2.  **Plugin:** Load Fruity Compressor on Bass.
3.  **Input:** Right-click the **Sidechain Selector** (in the plugin window, distinct from the wrapper). Select "Kick".
4.  **Settings:**
    *   **Threshold:** -20dB.
    *   **Ratio:** 4:1.
    *   **Attack:** 0ms.
    *   **Release:** Synced to tempo (e.g., 1/4 note).
5.  **Important:** Unlike Fruity Limiter, you don't see the ghost waveform. You must rely on your ears.

## 2. 808 Optimization

1.  **Goal:** Even out a bassline where some notes are quiet and some are loud.
2.  **Type:** **Vintage**.
3.  **Ratio:** 4:1.
4.  **Attack:** 50ms (Let the initial "thump" thru).
5.  **Release:** 300ms (Sustain the tail).
6.  **Gain:** Boost until the meter dances around 0dB.
7.  **Why Vintage?** The "LA-2A" curve adds warmth to the sub frequencies that standard VCA compression removes.

## 3. Acoustic Guitar Leveling

1.  **Type:** Soft/R.
2.  **Ratio:** 2.5:1.
3.  **TCR:** Critical here. Acoustic guitar has strumming (transients) and sustain (chords).
4.  **Effect:** The TCR allows the compressor to clamp down fast on the pick noise but release gently on the ring-out, avoiding the "nervous" pumping sound.

## 4. De-Essing (Manual)

1.  **Concept:** Compress only the "Sss" sounds.
2.  **Split:** Use **Patcher**.
3.  **Chain:**
    *   Split Signal into High/Low (Frequency Splitter).
    *   Put Fruity Compressor on the High band (above 5kHz).
4.  **Settings:** Fast Attack, Fast Release. Hard Knee.
5.  **Result:** It clamps down on sibilance without affecting the body of the vocal.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Drum Punch Enhancement (Fruity Compressor)

## Routing Context
- **Target:** Snare Drum or Kick.
- **Position:** Insert FX (After EQ).

## Step-by-Step Setup
1.  On the snare track, load **Fruity Compressor**.
2.  Set the **Ratio** to `6:1`.
3.  Set the **Attack** to `30ms`. (This lets the initial "Crack" through).
4.  Set the **Release** to `50ms`. (Quick reset for the next hit).
5.  Lower the **Threshold** until you see the meter dipping by `-4dB` to `-6dB`.
6.  Turn up the **Gain** knob to match the volume before you started.

## What To Listen For
- The snare should sound "snappier" or "sharper." By compressing only the tail of the drum hit, the relative loudness of the initial transient is increased.

## Vibe Check
- **Upbeat:** Essential for club tracks where the drums need to "cut" through heavy synth layers.

## Variations
- **The Smash:** Reduce Attack to `2ms` and increase Ratio to `10:1` for an aggressive, industrial drum tone.

## Pitfalls + Fixes
- **Pitfall:** "The drum sounds small/thin."
  - **Fix:** Your Attack is too fast. Increase the **Attack** knob until you hear the "Click" of the drum again. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Shaping_And_Control.md

```markdown
# Goal: Vocal Leveler (Goal_Shaping_And_Control)

## The Concept
Ensuring a melodic rap vocal is consistently loud without sounding "squeezed."

## Step-by-Step
1.  Set **Type** to `Soft`.
2.  Set **Ratio** to `3:1`.
3.  Set **Attack** to `5ms`.
4.  Set **Release** to `200ms`.
5.  Lower **Threshold** until the gain reduction meter is active throughout most of the phrase (aim for `-3dB` constant reduction).
6.  Use **Makeup Gain** to bring the vocal back to the front of the mix.

## Result
- A vocal that sounds "stable." The words don't get lost when the artist whispers, and the shouting doesn't hurt the listener's ears.

## Vibe Check
- **Vibey/Polished:** Foundational for that "radio-ready" vocal sheen.

## Automation Idea
- Automate the **Threshold** to get lower during the chorus to "clamp down" harder when the track energy increases. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\sidechain-ducking.md

```markdown
# Sidechain Ducking (Kick & Bass) Workflow

## Goal
Create space for the kick drum by automatically lowering the volume of the bass whenever the kick hits.

## Prerequisites
- A Kick drum track.
- A Bass track.

## Steps
1. **Mixer Routing:**
   - Select the Kick mixer track.
   - Right-click the 'send' arrow at the bottom of the Bass mixer track and select **Sidechain to this track**.
2. **Plugin Setup:**
   - Insert **Fruity Compressor** on the Bass track.
   - Open the plugin wrapper settings (cog icon) -> **Processing** tab.
   - Right-click the **Auto-map outputs** or manually set the **Sidechain** input to '1' (or whichever index corresponds to your kick).
3. **Compression Settings:**
   - **Ratio:** Set to **10:1** or **Inf:1** for a strong effect.
   - **Attack:** Set to **0ms** or **0.1ms** for instant ducking.
   - **Release:** Set to **50ms - 150ms** (adjust until the bass "breathes" back in time with the track).
   - **Threshold:** Lower significantly until you hear the bass dipping clearly when the kick hits.
4. **Fine-Tuning:**
   - Adjust **Release** to match the tempo. If the release is too fast, it will sound glitchy; if too slow, the bass will stay quiet for too long.

## Pro Tip
Use this same technique on reverb buses (ducking the reverb whenever the dry vocal plays) to maintain vocal clarity in a dense mix.

```

---

## FILE: 03-Workflows\by-goal\vocal-compression.md

```markdown
# Vocal Compression Workflow

## Goal
Achieve a consistent vocal level that sits perfectly in the mix without sounding "pushed".

## Steps
1. **Set Ratio**: Start with a ratio of **3:1** or **4:1**.
2. **Adjust Threshold**: Lower the threshold until you see **3-6 dB of gain reduction** on the loudest peaks.
3. **Set Attack**: Set between **10ms and 20ms**. This allows the initial consonants (transients) to pass through, keeping the vocal clear.
4. **Set Release**: Set around **150ms**. If the compression sounds like it's "pumping" unnaturally, increase the release.
5. **Makeup Gain**: Increase the **Gain** parameter to match the level of the vocal before the compressor was active (bypass to check).

## Pro Tip
Use the **Soft Knee** (Type) for a more transparent transition into compression, which is usually preferred for vocals.

```

---

## FILE: 03-Workflows\by-instrument\bass.md

```markdown
# Instrument: Bass

Controlling the energy of the low end.

## Clean Bass (Electric or Synth)
- **Attack**: 30ms - 80ms. This allows the "pluck" or "thump" of the note to be heard before the body of the note is compressed.
- **Release**: 150ms - 300ms.
- **Ratio**: 4:1.
- **Threshold**: Adjust until the bass feels "locked" and doesn't jump out on certain notes.

## Sustained Sub Bass
- **Attack**: 100ms+. You don't want to compress the initial sub-cycle.
- **Release**: Fast (50ms).
- **Ratio**: 2:1.
- **Result**: Smooths out the volume without killing the impact.

## Slap Bass
- **Type**: **HARD**.
- **Ratio**: 8:1 (Limiting territory).
- **Attack**: 1ms. Catch the sharp transients of the thumb hits.

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Workflow: Parallel "New York" Drums (Compressor)

## The Concept
Adding thickness and "grit" to drums while keeping 100% of their original punch.

## Step-by-Step
1.  Create a **Send Track** named "DRUM SMASH."
2.  Route your Drum Bus to this send at 100% volume.
3.  Load **Fruity Compressor** on the send.
4.  **Settings:**
    - Ratio: `MAX` (inf:1).
    - Attack: `0.1ms`.
    - Release: `10ms`.
    - Threshold: `-40dB` (Total destruction).
5.  Set the Send Track fader to zero.
6.  Slowly raise the fader until you hear the "energy" of the drums increase without losing the transients of the dry signal.

## Vibe Check
- **Upbeat/Aggressive:** This is the secret to huge, wall-of-sound drums in modern hip-hop.

## Pitfalls
- **Mud:** If the parallel signal has too much low-end, it will blur the kick. Use an EQ *after* the compressor on the send to cut everything below 100Hz. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\guitars.md

```markdown
# Instrument: Guitars

Managing the dynamic range of string instruments.

## Clean Electric Guitar
- **Attack**: 20ms.
- **Release**: 200ms.
- **Ratio**: 3:1.
- **Result**: Adds "jangle" and makes arpeggios sound more even.

## Acoustic Guitar
- **Threshold**: Subtle (2-3dB reduction).
- **Ratio**: 2:1.
- **Attack**: Slow (50ms).
- **Result**: Controls the "boomy" peaks of the low strings without making the guitar sound dead.

## Distorted Guitars
Distorted guitars are already naturally compressed by the distortion itself.
- **Usage**: Use Fruity Compressor with a slow attack and 4:1 ratio to add "chug" and weight to palm-muted sections.

```

---

## FILE: 03-Workflows\by-instrument\vocals.md

```markdown
# Instrument: Vocals

The Fruity Compressor is a staple for vocal processing in FL Studio.

## Lead Vocals
- **Threshold**: Set so you see about 3-5dB of gain reduction on loud peaks.
- **Ratio**: 3:1 is a safe starting point.
- **Attack**: 10ms - 20ms. You want the initial "consonants" of the words to pass through before the compressor kicks in.
- **Release**: 200ms - 400ms. A medium release avoids "pumping" artifacts.
- **Type**: **SOFT** or **VINTAGE**.

## Aggressive/Rap Vocals
- **Ratio**: 6:1 or higher.
- **Attack**: Fast (2ms - 5ms) to catch every transient.
- **Type**: **HARD**.
- **Result**: A very dense, in-your-face sound.

## Backing Vocals
- **Threshold**: Set deeper (6-8dB reduction).
- **Ratio**: 4:1.
- **Result**: Pushes the backing vocals further back in the mix and makes them sound like a cohesive unit.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Compressor

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Compressor.
- **Key Info:** Parameter ranges, Knee type definitions, logic of Makeup gain.

## Source ID: [SRC: REPUTABLE]
- **Source:** "Sound On Sound" - Compression Masterclass.
- **Key Info:** Ear-training techniques for hearing compression, the importance of gain-matching for objective A/B testing, and drum transient preservation settings.

## Source ID: [SRC: REPUTABLE]
- **Source:** "SeamlessR" - Dynamics Basics (YouTube).
- **Key Info:** Explanation of digital clipping artifacts, parallel "New York" compression workflows, and timing math for release settings.

## Coverage Checklist
- [x] Threshold/Ratio Definitions
- [x] Knee Type (Knee) Analysis
- [x] Drum Punch (Slow Attack) Workflow
- [x] Vocal Leveler (Soft Knee) Workflow
- [x] Parallel "Smash" Recipe
- [x] 5 Vibe Targets (Moody, Upbeat, Psychedelic, Jazzy, Vibey)
- [x] Low-End Discipline Rules

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Compressor

## 1. The "Mainstream" Drum Punch
- **Mix Decision:** Use slow attack to make the kick drum hit the chest harder.
- **Vibe:** Upbeat/Aggressive.
- **Tooling:** 30ms Attack + 4:1 Ratio.

## 2. The "Cloud Rap" Ad-libs
- **Mix Decision:** Use high-ratio "over-compression" to bring up the mouth noises and room ambience.
- **Vibe:** Moody/Nocturnal.
- **Tooling:** 10:1 Ratio + Fast Release.

## 3. The "Silk" R&B Vocal
- **Mix Decision:** Smooth leveling with vintage character.
- **Vibe:** Vibey/Polished.
- **Tooling:** Vintage Type + 3:1 Ratio + Soft Knee.

## 4. The "Lo-Fi" Drum Smash
- **Mix Decision:** Crush a parallel drum bus to add harmonic density and "grit."
- **Vibe:** Psychedelic/Retro.
- **Tooling:** Parallel Bus + Max Ratio + -40dB Threshold.

```

---

## FILE: 04-Reference\attack-release-curves.md

```markdown
# Reference: Attack & Release Curves (Compressor)

Understanding the "Timing" of compression is the difference between a dull mix and a punchy one.

## 1. Attack (The Transient Gate)
- **Fast Attack (<5ms):** Good for controlling stray peaks. Bad for drums (makes them sound small).
- **Slow Attack (>20ms):** Good for "Punch." It lets the hit of the drum pass through before turning it down.

## 2. Release (The Energy Arc)
- **Fast Release (<50ms):** Good for "Grit" and "Pumping." The sound rushes back in quickly.
- **Slow Release (>300ms):** Good for "Invisible" leveling. The sound returns so slowly that the ear doesn't notice the volume change.

## 3. The "Type" Curve Influence
- **Vintage:** Non-linear timing. The release is faster at the start and slower at the end (natural musical decay).
- **Hard:** Linear timing. Very precise and aggressive. Best for electronic sound design. [SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Compressor Mechanics

## 1. Heritage (Ultrafunk Sonitus)

*   **Origin:** Fruity Compressor uses the code base from the **Ultrafunk Sonitus:fx** suite, licensed by Image-Line years ago.
*   **Why it matters:** These algorithms are revered in the mixing community (Cakewalk Sonar users) for being incredibly musical and efficient. It is not just a "stock" compressor; it is a vintage DSP code.

## 2. Gain Structure

*   **Input Range:** -Inf to +6dB.
*   **Threshold Logic:** The Threshold is absolute (dBFS).
*   **Makeup Gain:** Applied *after* compression.
*   **Clip Risk:** Since there is no integrated Limiter (unlike Fruity Limiter), it is possible to clip the output if Makeup Gain is too high.

## 3. Variable Knee Geometry

The "Type" selector changes the geometric curve of the transfer function.
*   **Hard:** Sharp 45-degree angle at threshold.
*   **Soft:** Parabolic curve starting `0.5 * Knee_dB` below threshold.
*   **Vintage:** Inverse-Logarithmic curve. As input >> threshold, the ratio tends back towards 1:1. This is counter-intuitive but prevents "choking" the sound on massive transients.

## 4. TCR (Transient Controlled Release)

*   **Algorithm:** Monitors signals for rapid rise times (Delta > X).
*   **Adaptation:**
    *   If Signal is Steady state: Use User Release Time.
    *   If Signal is Transient: Use Short Release Time (Internal variable).
*   **Goal:** To maximize Loudness (RMS) without destroying Impact (Peaks).

```

---

## FILE: 04-Reference\technical-docs\compression-curve-types.md

```markdown
# Compressor Curve Types & Knee Analysis

## The "Knee" Concept
The "Knee" refers to how the compressor transitions from an uncompressed state to a compressed state as the signal crosses the threshold.

### 1. Hard Knee (`Hard`, `Hard R`)
- **Behavior:** Immediate transition. If the threshold is -10dB, a signal at -9.9dB is fully compressed at the specified ratio.
- **Sound:** Aggressive, noticeable.
- **Best For:** Percussion, limiting, surgical peak control.

### 2. Medium Knee (`Medium`, `Medium R`)
- **Behavior:** A slight curve around the threshold.
- **Sound:** A balance between transparency and control.
- **Best For:** Snare drums, rhythmic guitars.

### 3. Vintage Knee (`Vintage`, `Vintage R`)
- **Behavior:** Emulates the non-linear response of classic Opto or VCA hardware.
- **Sound:** Musical, "warm", slightly unpredictable in a pleasing way.
- **Best For:** Vocals, bass, acoustic instruments.

### 4. Soft Knee (`Soft`, `Soft R`)
- **Behavior:** Very wide curve. Compression starts subtly before the signal even reaches the threshold and reaches the full ratio well above it.
- **Sound:** Transparent, nearly invisible.
- **Best For:** Master bus, backing vocals, lush pads.

## The "R" Variants (Rapid Release)
The `R` suffix (e.g., `Hard R`) modifies the release curve to be more exponential than linear. This allows the compressor to "recover" faster from deep gain reduction, which can prevent the sound from feeling "stifled" during busy passages.

```

---

## FILE: 04-Reference\terminology-glossary\compressor-terms.md

```markdown
# Compressor Terminology Glossary

- **Threshold**: The level (in dB) at which the compressor begins to act.
- **Ratio**: The relationship between the input signal level above the threshold and the output level.
- **Attack**: The time it takes for the compressor to apply full gain reduction once the threshold is crossed.
- **Release**: The time it takes for the signal to return to its original level after dropping below the threshold.
- **Makeup Gain**: Gain applied after compression to compensate for the level loss caused by the reduction.
- **Knee**: Controls how the transition from uncompressed to compressed signal occurs (Hard = abrupt, Soft = gradual).
- **Sidechain**: A feature where the compressor is triggered by a signal other than the one it is processing.

```

---

