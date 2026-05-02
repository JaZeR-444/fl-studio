# Fruity Limiter - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Limiter - Visual Dynamics Processor

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██╗     ██╗███╗   ███╗██╗████████╗███████╗██████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██║     ██║████╗ ████║██║╚══██╔══╝██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║     ██║██╔████╔██║██║   ██║   █████╗  ██████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║     ██║██║╚██╔╝██║██║   ██║   ██╔══╝  ██╔══██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ███████╗██║██║ ╚═╝ ██║██║   ██║   ███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚══════╝╚═╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Limiter / Compressor / Gate
**Category:** Dynamics / Mastering
**Official Manual:** [Image-Line Fruity Limiter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Limiter.htm)

---

## 🎯 What is Fruity Limiter?

Fruity Limiter is a powerful, visual dynamics processor that combines a **Compressor**, a **Limiter**, and a **Noise Gate**. Its defining feature is the real-time scrolling waveform display, which shows exactly how the compression affects your peaks. It is the default limiter on the FL Studio "Master" channel in new projects, but it is equally powerful for individual tracks, especially for **Sidechain Compression**.

**Key Capabilities:**
- **Dual Stage:** Compressor stage feeds into Limiter stage.
- **Visual Feedback:** See the input (grey), output (purple), and gain reduction (white).
- **Sidechaining:** Dedicated Sidechain input for pumping effects.
- **Lookahead:** Prevents transients from poking through (Limiter section).
- **Noise Gate:** Cleans up background hiss.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **comp-vs-limiter-tabs.md**
3. Create **parameter-cheat-sheet.md**
4. Watch the purple line flatten as you pull down the "Ceiling".

### For Mix Engineers:
1. Study **sidechain-ducking.md** (The most common use case!)
2. Review **transparent-limiting.md**
3. Learn **visual-gain-staging.md**

### For Mastering:
1. Study **loudness-maximization.md**
2. Review **attack-release-tuning.md** for transparency.

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **LIMIT Tab:** Ceil (Output max), Saturation, Attack/Release.
  - **COMP Tab:** Thres, Ratio, Attack, Release, Sidechain.
  - **Visuals:** Speed, Freeze, Analysis modes.

- [ ] **comp-vs-limiter-tabs.md**
  - **LIMIT:** Hard ceiling, prevents clipping, uses lookahead.
  - **COMP:** Musical reduction, retains transients (depending on attack), creates groove.

#### 02-Data/parameters/
- [ ] **limiter-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Limiter",
    "category": "Dynamics",
    "parameters": [
      {
        "name": "Sidechain",
        "type": "selector",
        "description": "Selects mixer track for key input",
        "pro_tip": "Right-click to auto-select connected sidechains."
      },
      {
        "name": "Ceiling",
        "type": "knob",
        "description": "Absolute volume limit",
        "use_cases": ["mastering", "protection"]
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **sidechain-ducking.md**
  - Routing Kick to Synth (Sidechain Only).
  - Setting COMP tab to Sidechain input.
  - Adjusting Threshold and Ratio for the "Pump".

- [ ] **vocal-level-riding.md**
  - Using the Compressor with a low ratio (2:1).
  - Visualizing the gain reduction to smooth out performances.

- [ ] **removing-noise-floor.md**
  - Using the "Gate" knobs (Gain/Thres) on the Limit tab (wait, check manual - usually Gate is separate or part of the gain structure).
  - *Correction:* Fruity Limiter has a "Noise Gate" section (Rel, Gain, Thres).

#### 03-Workflows/by-context/
- [ ] **master-bus-protection.md**
- [ ] **snare-transient-shaping.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **curve-settings-analysis.md**
  - Creating custom knee shapes (Curves 1-8).
  - How curve affects the compression transparency.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understanding the Visuals

**Tasks:**
1. Put Limiter on a dynamic loop
2. Lower the Limiter Ceiling
3. Observe the Purple line flattening
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why is the Limiter section *after* the Compressor section? (Standard signal flow: Control dynamics -> Protect output).
- What does the "Sustain" knob do? (Holds the compression amount before releasing).

### Phase 2: Sidechain Mastery (Week 2)
**Goal:** The Pump

**Tasks:**
1. Route a Ghost Kick to a Pad
2. Select the Ghost Kick in the "Sidechain" box (COMP tab)
3. Lower Threshold, Increase Ratio
4. Create sidechain-ducking.md

**Key Questions to Answer:**
- How is this different from Fruity Peak Controller? (Limiter gives you audio-rate envelope following, Peak Controller is LFO/Envelope based).

---

## 📊 Plugin Specifications to Document

### Dynamics Engine
- Lookahead (ms)
- Knee Types (Variable curves)
- Sidechain Input (External vs Internal)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my sound distorted? (Attack on Limiter is too fast, or Ceiling is too low).
2. How do I turn off the Limiter but keep the Compressor? (Set Ceiling to max).

### Advanced Usage
1. How to use the Saturation knob for "Soft Clipping"?

---

## 📝 Documentation Standards

### For Each Workflow:
- **Tab:** LIMIT / COMP
- **Visuals:** Describe what the white line should look like.
- **Settings:** Exact knob values.

---

## 🔗 Cross-Reference with Other Plugins

Fruity Limiter is often used with:
- **Maximus** (Multiband version)
- **Fruity Compressor** (Non-visual version)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Limiter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── comp-vs-limiter-tabs.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── limiter-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── sidechain-ducking.md
│   │   ├── vocal-level-riding.md
│   │   └── removing-noise-floor.md
│
└── 04-Reference/
    └── curve-settings-analysis.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Limiter Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Limiter.htm)
- [Fruity Limiter Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Limiter_tutorials.htm)
- [Fruity Limiter Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+limiter+tutorial)

### Community Resources
- [Fruity Limiter Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+limiter&restrict_sr=1)
- [Fruity Limiter User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Limiter Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis before/after processing
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity dB Meter** for precise level monitoring
- **Patcher** for external sidechain routing

### Recommended Learning Materials
- "Compression Fundamentals" - Understanding the basics of dynamic range control
- "Sidechain Techniques" - Deep dive into ducking and gating applications
- "Mastering with Limiters" - Professional loudness maximization techniques

### Advanced Techniques
- **Visual Gain Staging:** Using the waveform display for precise level management
- **Sidechain Ducking:** Creating rhythmic pumping effects
- **Noise Floor Reduction:** Using the gate section to eliminate unwanted noise

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Set up a sidechain pumping effect in under 30 seconds
- [ ] Use the visualizer to identify a specific loud transient
- [ ] Configure the Noise Gate to silence a guitar buzz
- [ ] Explain the difference between Limiter Attack and Compressor Attack

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Limiter

## Purpose & Identity
Fruity Limiter is a powerful **visual dynamics processor**. Its primary identity is a three-in-one tool: a **Compressor**, a **Limiter**, and a **Noise Gate**. Its defining feature is the real-time scrolling waveform display, which allows you to *see* exactly how your volume peaks are being managed. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Safety Net with a Microscope." 
- The **Limiter** section is the hard ceiling that prevents your mix from clipping (Safety Net).
- The **Compressor** section is the musical leveler that adds punch and groove.
- The **Visualizer** is the microscope that shows you exactly which drum hits are too loud.

## Hip-Hop / R&B Context
- **The "Kick vs 808" Fight:** Using sidechain compression to automatically turn down the 808 for a split second every time the kick hits (Upbeat).
- **Vocal Breath Cleanup:** Using the built-in Noise Gate to automatically silence the background hiss and breaths between lines (Vibey).
- **Mastering Headroom:** Using it as the final plugin on the master to squeeze out commercial loudness for soundcloud or streaming.

## When To Use
- When you need **Sidechain Ducking** (the "pumping" effect).
- When you need a **visual guide** to help you understand compression settings.
- When you want a **brickwall ceiling** to prevent digital distortion.

## When NOT To Use
- **Multiband Control:** Use **Maximus** if you need to compress the bass differently than the highs.
- **Color Distortion:** Fruity Limiter is designed to be transparent. Use **Blood Overdrive** or **WaveShaper** if you want aggressive grit. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Limiter

## UI Tour
The interface is dominated by the scrolling analysis window, with two main functional tabs at the bottom. [SRC: IL-MAN]

### 1. The Analysis Window (The Visualizer)
- **Grey Waveform**: The incoming raw audio.
- **Purple Waveform**: The processed output audio.
- **White Line**: The "Gain Reduction" meter. When it dips, the plugin is active.
- **Blue Line**: The Ceiling (Limit) or Threshold (Comp).

### 2. The LIMIT Tab (The Protector)
- **CEIL**: The absolute maximum volume level allowed.
- **ATT/REL**: How fast the limiter reacts and recovers.
- **SAT (Saturation)**: Adds harmonic "warmth" to the signal as it reaches the ceiling.

### 3. THE COMP Tab (The Groover)
- **THRES**: The level where compression begins.
- **RATIO**: How much the volume is reduced once it crosses the threshold.
- **SIDECHAIN**: Selects the external input for ducking effects.

### 4. THE NOISE GATE (The Cleaner)
- **GAIN/THRES**: Controls the silencing of quiet background noise.

## Signal Flow
1. **Input**: Audio enters.
2. **Compressor Stage**: Signal is processed by the **COMP** tab settings.
3. **Gain Stage**: Post-compression gain is applied.
4. **Limiter Stage**: The signal is then fed into the **LIMIT** tab logic.
5. **Saturation**: Final harmonic shaping occurs at the ceiling.
6. **Output**: Final capped signal leaves the plugin.

## Things Beginners Misunderstand
- **Tab Priority**: The signal passes through the Compressor *first*, then the Limiter. If you have extreme settings on both, you might be over-compressing.
- **Lookahead**: The Limiter uses a "Lookahead" time (Attack knob in LIMIT tab). This adds a microscopic amount of latency to the project to prevent peaks from ever escaping.
- **Ceiling vs. Volume**: The Ceiling doesn't just lower the volume; it flattens the peaks. If you want more volume, raise the **GAIN** knob while keeping the **CEIL** static.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Limiter

## 1. The "Transparent" Peak Shave
Instead of one heavy limiter, use two Fruity Limiters in series.
- **Technique**: Set the first one to shave off only 1-2dB of the loudest peaks. Set the second one to catch the rest.
- **Benefit**: This results in fewer audible artifacts and a more natural sound.

## 2. Rhythmic Sidechain Ducking
The industry standard for EDM and modern Trap.
- **Technique**: Set **Sidechain** to the Kick track. Set **Ratio** to maximum. Set **Attack** to 0ms. Adjust **Release** until the sound "breathes" back in time with the next beat.
- **Listen For**: The pumping movement that makes the kick drum feel massive.

## 3. Vocal "Air" Preservation
Avoid over-compressing the high-end sibilance.
- **Technique**: Use a **Slow Attack** (~15ms) in the COMP tab.
- **Benefit**: This allows the "S" and "T" sounds to pass through naturally before the compressor clamps down on the main body of the vocal.

## 4. Parallel "New York" Compression
Add weight to drums without losing the snap.
- **Technique**: Set extreme compression (High ratio, low threshold). Then, use the plugin's **Mix** knob (in the Wrapper) to blend it 50/50 with the dry signal.
- **Listen For**: A "thicker" drum sound that still has the original punch.

## 5. Visual Gain Staging
- **Protocol**: Watch the grey vs. purple waveforms.
- **Fix**: If the purple line is significantly lower than the grey line, you are losing too much energy. Raise the **Gain** knob to compensate for the reduction. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Pumping" Master** | Your Master Limiter release is too fast. Increase the **Release** in the LIMIT tab. |
| **Dull Snare** | Increase the **Attack** time in the COMP tab. |
| **Distorted Bass** | Increase the **Release** time in the LIMIT tab so the limiter doesn't follow the bass waves. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Limiter

Limiter translates vibes through **Dynamic Tension** and **Spatial Breathing**.

## 1. Upbeat (Kinetic, Pumping, Aggressive)
- **Concept:** "The Sidechain Pump."
- **Levers:**
  - **Tab:** COMP.
  - **Sidechain:** Linked to Kick.
  - **Release:** Fast (50ms - 100ms).
  - **Threshold:** Low (-20dB).
- **Listen For:** The melody "ducking" out of the way of the kick and then rushing back in, creating a danceable rhythm.

## 2. Spacey (Ethereal, Immersion, Floating)
- **Concept:** "The Reverb Breather."
- **Levers:**
  - **Target:** Reverb Send.
  - **Sidechain:** Linked to Lead Vocal.
- **Listen For:** The reverb tail being pushed down while the rapper is talking, then "swelling" up in the gaps. This makes the space feel infinite but the vocal stay close.

## 3. Psychedelic (Saturated, Squashed, Gritty)
- **Concept:** "The Hot Ceiling."
- **Levers:**
  - **Tab:** LIMIT.
  - **Saturation (SAT):** Turn to the right.
  - **Ceiling:** Lower significantly.
- **Listen For:** Harmonic distortion and "warmth" as the peaks hit the saturated ceiling. It feels like an old tube compressor.

## 4. Vibey (Smooth, Glossy, Polished)
- **Concept:** "The Invisible Leveler."
- **Levers:**
  - **Tab:** COMP.
  - **Ratio:** 2:1.
  - **Attack:** Slow (30ms).
  - **Knee:** Use Curve 3 or 4.
- **Listen For:** A polished, consistent volume that feels natural and "expensive," with no obvious pumping.

## 5. Moody (Isolated, Clean, Silent)
- **Concept:** "The Noise Floor Vacuum."
- **Levers:**
  - **Section:** Noise Gate (Right side).
  - **Threshold:** Set to just above the background hiss.
  - **Gain:** -inf.
- **Listen For:** Total, "inky" black silence between notes, emphasizing the lonely atmosphere. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Limiter (5 Minutes)

1.  **Insert:** Load **Fruity Limiter** at the end of your mixer chain.
2.  **Ceiling:** Go to the **LIMIT** tab. Pull down the **CEIL** knob. Watch the purple line on the visualizer; it shows the new "Maximum Volume."
3.  **Compression:** Switch to the **COMP** tab. Lower the **THRES** (Threshold) and increase the **RATIO** to level the sound.
4.  **Sidechain:** To make a sound "Pump":
    - Right-click the **SIDECHAIN** box in the COMP tab.
    - Select your Kick track (must be routed to this track first).
    - Lower THRES until the sound ducks when the kick hits.
5.  **Cleanup:** Use the **Noise Gate** section (Release, Gain, Thres) to remove background noise.
6.  **Tip:** Use the **SAT** (Saturation) knob on the LIMIT tab to add harmonic warmth. [SRC: IL-MAN]
```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Limiter: The Ultimate Deep Dive Cheat Sheet

> **Scope:** Full parameter analysis, Signal Flow, and hidden behaviors.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High.

## 🧠 The "Triple Chain" Concept
Fruity Limiter is NOT just a limiter. It is a series of three distinct dynamic processors acting on the signal in a specific order. Understanding this chain is critical to avoiding "fighting" controls.

**Signal Flow:**
`Input` -> **[COMPRESSOR]** -> **[GAIN]** -> **[NOISE GATE]** -> **[LIMITER]** -> **[SATURATOR]** -> `Output`

*   **Critical Nuance:** The "Gain" knob in the Limiter section is **Post-Compressor** but **Pre-Limiter**. This means you can compress a signal heavily, then boost it into the Limiter ceiling to maximize loudness.

---

## 🎛️ Section 1: The Compressor (COMP Tag)

The Compressor reduces the dynamic range of the signal *before* it hits the Limiter.

### Main Controls (Loudness)

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Purple Gain** | -Inf to +20dB | **Post-Compression Makeup Gain.** <br> *Nuance:* This gain is applied *after* the compressor but *before* the limiter. Use this to drive the signal into the Limiter's ceiling. |
| **Thresh (Threshold)** | -60dB to 0dB | **The "Trigger Point".** <br> Signals above this level will be attenuated. <br> *To Bypass:* Set to 0dB. |
| **Ratio** | 1:1 to 20:1 | **Attentuation Strength.** <br> *Nuance:* High ratios (>10:1) essentially turn the Compressor into a second Limiter. |
| **Knee** | Soft to Hard | **Transition Smoothing.** <br> *Soft Knee:* Compression begins *before* the threshold is hit, gradually increasing ratio. <br> *Hard Knee:* Compression begins exactly at threshold. <br> *Pro Tip:* Use Soft Knee for vocals (transparent), Hard Knee for drums (snap). |

### Envelope Controls (Time)

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Att (Attack)** | 0ms to 1000ms | **Reaction Speed.** <br> *Nuance:* Unlike the Limiter Attack, this **DOES NOT** add latency. It is purely an envelope shape. <br> *Tip:* >15ms lets transients (snare cracks) punch through before clamping down. |
| **Rel (Release)** | 0ms to 2000ms | **Recovery Speed.** <br> *Nuance:* Short release = Pumping/Loudness. Long release = Smooth/Leveling. |
| **Sustain (Susp)** | 0ms to 1000ms | **RMS Averaging Window.** <br> *Unique Feature:* This holds the compression state for a set time, preventing "chatter" or distortion on bass frequencies. <br> *Tip:* Vital for 808s. Set to ~50ms to prevent the compressor from riding the individual waveform cycles of sub-bass. |
| **Curve** | 1 (Linear) to 8 | **Envelope Tension.** <br> *Nuance:* Affects how "snappy" the Attack/Release feels. <br> *Curve 1:* Instant/Linear. <br> *Curve 8:* Logarithmic/Slow. <br> *Tip:* Curve 6-8 is great for "gluing" mix busses. |

### Sidechaining (The Hidden Menu)
1.  **Right-Click** the "SIDECHAIN" selector box (bottom of Comp tab).
2.  Choose input mixer track.
3.  **Visual:** Requires a sidechain send in the Mixer (Right-click cable -> "Sidechain to this track").

---

## 🧱 Section 2: The Limiter (LIMIT Tag)

The Limiter is the safety net and loudness maximizer. It acts *after* the Compressor.

### Main Controls (Loudness)

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Purple Gain** | -Inf to +20dB | **Input Gain.** <br> *Same as Comp Gain.* It drives the signal against the Ceiling. |
| **Ceil (Ceiling)** | -Inf to +12dB | **The Brick Wall.** <br> No signal will exceed this level. <br> *Mastering Std:* usually -0.1dB or -0.3dB (True Peak). |
| **Sat (Saturation)** | -Inf to 0dB | **Threshold of "Rounding".** <br> *Nuance:* As signals approach this threshold, they are "soft clipped" (rounded) instead of hard limited. <br> *Result:* Adds warmth and harmonic distortion. Reduces "pumping". <br> *Warning:* Can sound distorted if driven too hard. |

### Envelope Controls (Time)

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Att (Attack)** | 0ms to 1000ms | **Lookahead Latency.** <br> *CRITICAL:* Increasing this ADDS LATENCY to the plugin. <br> *Why?* To limit instantly without distortion, the plugin must "look ahead" into the future. <br> *Setting:* 0ms = Zero Latency (Instant, slightly dirtier). >0ms = Cleanest Limiting (Latency added). |
| **Rel (Release)** | 0ms to 2000ms | **Recovery Speed.** <br> *Mastering Tip:* Timed to the BPM. ~300-500ms is standard for master buss. |
| **Ahead** | N/A | *Note:* The "Ahead" knob visible in some skins is actually just the visual representation of the Attack latency. |

---

## 🚪 Section 3: The Noise Gate (GATE Tag)

Often overlooked, the Gate sits *after* the compressor gain but *before* the Limiter logic.

| Control | Range | Function |
| :--- | :--- | :--- |
| **Thresh** | -Inf to 0dB | **Gate Open Point.** <br> Signals below this are silenced. |
| **Gain** | -Inf to 0dB | **Floor Level.** <br> Instead of total silence (-Inf), you can just reduce background noise by -20dB. |
| **Rel** | 0ms to 2000ms | **Fade Out Time.** <br> *Creative:* Use long release for "Gated Reverb" tails. |

---

## 📊 Visual Feedback Decoder

Understanding the rolling graph is key to mastering this plugin.

| Color | Represents | What to look line for |
| :--- | :--- | :--- |
| **Purple** | **Input Signal** | The raw, unprocessed audio entering the plugin. |
| **Green** | **Output Signal** | The final audio leaving the plugin. |
| **Blue Line** | **Comp Threshold** | When Purple peaks cross this blue line, compression happens. |
| **White Line** | **Compression Envelope** | Visualizes the "Gain Reduction". If it dips, volume is being reduced. |
| **Grey Line** | **Gate Threshold** | Everything below this line is silenced. |
| **Orange** | **Limiting** | If you see Orange peaks on top of Green, the Limiter is active. |

---

## 📉 Advanced Curves & Tension

The `CURVE` knob is often ignored but changes the character of the dynamic processing drastically.

*   **Curves 1-3 (Linear/Fast):**
    *   **Behavior:** The envelope moves in a straight line or snaps quickly.
    *   **Best For:** Drums, Percussion, "Smashing" sounds.
    *   **Feel:** Aggressive, Digital.

*   **Curves 6-8 (Logarithmic/Slow):**
    *   **Behavior:** The envelope "hangs" and moves lazily.
    *   **Best For:** Vocals, Pads, Master Bus glue.
    *   **Feel:** Organic, Analog, Optical.

---

## ⚡ Latency & CPU Considerations

*   **Zero Latency Mode:**
    *   Comp Attack: Any value.
    *   Limit Attack: **0ms**.
    *   *Usage:* Live tracking, playing MIDI keyboard.

*   **High Quality / Mastering Mode:**
    *   Comp Attack: Tuned to taste.
    *   Limit Attack: **2-5ms**. (Enables Lookahead).
    *   *Usage:* Final render. Ensures zero "overs" (inter-sample peaks) and smoother limiting.

---

## 🛠️ Typical "Fighting" Scenarios

**Scenario 1: "It's Pumping too much!"**
*   **Cause:** Release time is too short on the Limiter or Compressor.
*   **Fix:** Increase Release to >200ms. OR Increase "Sustain" to hold the gain reduction longer.

**Scenario 2: "It sounds distorted!"**
*   **Cause:** Limiter Attack is 0ms (Hard limiting) OR Saturation knob is too low.
*   **Fix:** Increase Limiter Attack to 2ms (adds latency). Check Saturation knob.

**Scenario 3: "Sidechain isn't ducking!"**
*   **Cause:** Ratio is 1:1.
*   **Fix:** Even if Threshold is low, nothing happens if Ratio is 1:1. Crank Ratio to 4:1+.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Limiter

| Parameter | Tab | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Ceiling (Ceil)**| LIMIT | **Psychedelic**| **Safety** | Absolute volume limit. |
| **SAT** | LIMIT | **Vibey** (Warm) | **Tone** | Adds harmonic saturation. |
| **Threshold** | COMP | **Upbeat** (Pump) | **Leveling** | Level where compression starts. |
| **Ratio** | COMP | **Upbeat** | **Density** | Intensity of volume reduction. |
| **Sidechain** | COMP | **Spacey** | **Groove** | External trigger source. |
| **Gain (Gate)** | GATE | **Moody** | **Noise** | Reduction amount for silence. |

- **Vibe Impact Tag (Saturation):** Turning SAT to the right mimics "Soft Clipping" found in expensive analog gear.
- **Mix Impact Tag (Lookahead):** The "ATT" knob on the LIMIT tab controls lookahead; set to 0 for zero-latency live performance. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\limiter-params.json

```json
{
  "plugin_name": "Fruity Limiter",
  "category": "Dynamics",
  "parameters": [
    {
      "name": "CEIL",
      "type": "knob",
      "tab": "LIMIT",
      "description": "Sets the maximum output level.",
      "vibe_impact": "Weight, protection",
      "mix_impact_tags": ["loudness", "transient"]
    },
    {
      "name": "GAIN",
      "type": "knob",
      "tab": "GLOBAL",
      "description": "Increases input volume into the limit/comp logic.",
      "vibe_impact": "Loudness, aggression",
      "mix_impact_tags": ["loudness"]
    },
    {
      "name": "ATT",
      "type": "knob",
      "tab": "LIMIT",
      "description": "Lookahead time. Prevents peaks from escaping.",
      "vibe_impact": "Transparency, digital vs smooth",
      "mix_impact_tags": ["artifact", "transient"]
    },
    {
      "name": "THRES",
      "type": "knob",
      "tab": "COMP",
      "description": "Sets the level where compression begins.",
      "vibe_impact": "Focus, nearness"
    },
    {
      "name": "RATIO",
      "type": "knob",
      "tab": "COMP",
      "description": "Sets the amount of volume reduction.",
      "vibe_impact": "Glue, energy"
    },
    {
      "name": "SIDECHAIN",
      "type": "selector",
      "tab": "COMP",
      "description": "Selects the key input for ducking effects.",
      "vibe_impact": "Rhythm, pump, motion"
    }
  ]
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Limiter",
  "tabs": ["LIMIT", "COMP", "NOISE GATE"],
  "parameters": [
    {
      "section": "Global",
      "id": "output_gain",
      "name": "Output Gain",
      "range": { "min": -60, "max": 20, "unit": "dB" },
      "description": "Final output volume after all processing (Limit, Saturation)."
    },
    {
      "section": "Compressor",
      "id": "comp_gain",
      "name": "Gain (Makeup)",
      "range": { "min": -60, "max": 20, "unit": "dB" },
      "description": "Makeup gain applied AFTER compression but BEFORE limiting."
    },
    {
      "section": "Compressor",
      "id": "comp_thresh",
      "name": "Threshold",
      "range": { "min": -60, "max": 0, "unit": "dB" },
      "description": "Trigger level for compression."
    },
    {
      "section": "Compressor",
      "id": "comp_ratio",
      "name": "Ratio",
      "range": { "min": 1, "max": 20, "unit": ":1" },
      "defaultValue": 1,
      "description": "Ratio of input to output level above threshold."
    },
    {
      "section": "Compressor",
      "id": "comp_knee",
      "name": "Knee",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Softness of the transition into compression."
    },
    {
      "section": "Compressor",
      "id": "comp_attack",
      "name": "Attack",
      "range": { "min": 0, "max": 1000, "unit": "ms" },
      "description": "Time taken to reach full compression ratio."
    },
    {
      "section": "Compressor",
      "id": "comp_release",
      "name": "Release",
      "range": { "min": 0, "max": 2000, "unit": "ms" },
      "description": "Time taken to return to zero gain reduction."
    },
    {
      "section": "Compressor",
      "id": "comp_sustain",
      "name": "Sustain",
      "range": { "min": 0, "max": 1000, "unit": "ms" },
      "description": "RMS averaging window length. Prevents fluttering on bass."
    },
    {
      "section": "Limiter",
      "id": "limit_ceil",
      "name": "Ceiling",
      "range": { "min": -12, "max": 12, "unit": "dB" },
      "defaultValue": 0,
      "description": "Absolute maximum output level."
    },
    {
      "section": "Limiter",
      "id": "limit_sat",
      "name": "Saturation",
      "range": { "min": -10, "max": 0, "unit": "dB" },
      "description": "Threshold where soft-clipping begins before hitting the ceiling."
    },
    {
      "section": "Limiter",
      "id": "limit_attack",
      "name": "Attack (Lookahead)",
      "range": { "min": 0, "max": 1000, "unit": "ms" },
      "description": "Adds system latency to allow lookahead detection."
    }
  ]
}

```

---

## FILE: 02-Data\presets\brickwall-master.json

```json
{
  "presetName": "Brickwall Master",
  "plugin": "Fruity Limiter",
  "description": "Standard safety limiting for the master bus.",
  "settings": {
    "ceiling": -0.1,
    "gain": 2.0,
    "attack": 0.0,
    "release": 200.0,
    "sustain": 0.0,
    "lookahead": 2.0
  },
  "usage": "Place at the very end of your master chain to prevent clipping."
}

```

---

## FILE: 02-Data\presets\sidechain-pumping.json

```json
{
  "presetName": "Sidechain Pumping",
  "plugin": "Fruity Limiter",
  "description": "Classic EDM ducking setup.",
  "settings": {
    "compThreshold": -30.0,
    "compRatio": 8.0,
    "compAttack": 0.0,
    "compRelease": 100.0,
    "sidechain": 1
  },
  "usage": "Route Kick to this track (Sidechain only), then select the Kick input in the Limiter's sidechain selector."
}

```

---

## FILE: 02-Data\presets\vocal-leveler.json

```json
{
  "presetName": "Vocal Leveler",
  "plugin": "Fruity Limiter",
  "description": "Uses the COMP section, not the LIMIT section.",
  "settings": {
    "compThreshold": -20.0,
    "compRatio": 4.0,
    "compKnee": 0.5,
    "limitCeiling": 0.0
  },
  "usage": "Smooths out vocal dynamics before it hits the limiter ceiling."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Limiter)

## 1. The "Ghost Kick" Sidechain
- **Rule:** Sidechain the 808 to the Kick, not the other way around.
- **Application:** Use a fast Release (~80ms) so the 808 returns quickly. This ensures the "Punch" of the kick is never buried by the "Weight" of the sub. [SRC: REPUTABLE]

## 2. Visual Gain Staging
- **Rule:** White lines shouldn't be deep canyons.
- **Application:** In the Limiter visualizer, if the Gain Reduction (white line) is constantly dipping more than 6dB, you are over-compressing. Aim for 2-3dB of reduction for transparent R&B vocals.

## 3. Lookahead Latency
- **Rule:** Disable lookahead while recording.
- **Application:** Set the Limiter **ATT** (on the LIMIT tab) to 0.00ms. This removes the small delay introduced by the plugin, ensuring the artist doesn't hear a lag in their headphones.

## 4. Saturation over Clipping
- **Rule:** Saturated masters sound "Vibey," clipped masters sound "Digital."
- **Application:** Use the **SAT** knob on the Master Limiter to catch peaks before they hit the hard Ceiling. It provides a smoother, more "Commercial" sound.

## 5. Mono-Check (Low End)
- **Rule:** Compression shouldn't shift the sub-center.
- **Check:** Always check your 808 in Mono after sidechaining. If the ducking causes the sub to feel like it's tilting left or right, ensure your sidechain source is Mono. [SRC: IL-MAN]
```

---

## FILE: 02-Data\rules\03_Gain_Staging_Failure_Modes.md

```markdown
# Rules: Gain Staging & Failure Modes (Fruity Limiter)

## 1. The Master Bus Rule
- **Rule**: Never allow the Limiter to do more than 2-3dB of gain reduction on a full mix.
- **Verification**: If the white line dips more than half a centimeter in the visualizer, your master is "choked."
- **Failure Mode**: **Dullness**. Over-limiting destroys the transients (kicks/snares), making the track sound small and flat despite being "loud."

## 2. Low-Frequency Release Rule
- **Rule**: Increase the **Release** time in the LIMIT tab when processing sub-bass or 808s.
- **Threshold**: Set Release to at least 150ms.
- **Failure Mode**: **Distortion**. If the release is too fast, the limiter tries to "correct" individual wave cycles of the bass, resulting in audible buzzing/grit.

## 3. Sidechain Click Protection
- **Rule**: Set **Attack** to 0ms only when you want an instant cut.
- **Verification**: If you hear a "click" every time the sidechain triggers, increase Attack to ~0.5ms.
- **Failure Mode**: **Clicking**. Abrupt volume cuts create digital square-wave artifacts.

## 4. Gain-In vs Gain-Out
- **Rule**: Your output level (Purple) should ideally stay near your input level (Grey) unless you are purposefully maximizing.
- **Failure Mode**: **Pumping**. If your Gain is too high and your Threshold is too low, the sound will "inhale" and "exhale" unpleasantly.

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Limiter

## 1. The "Invisible" Sidechain (Ducking)

Standard sidechaining often clicks or pops. This method uses the **Envelope Curve** to smooth the ducking effect.

**Goal:** Cleanly duck a Synth Pad when the Kick hits.

1.  **Mixer Routing:** Select the Kick track -> Right-click the Synth Pad track -> "Sidechain to this track".
2.  **Plugin Setup:** Open Fruity Limiter on the Synth Pad.
3.  **Selector:** Go to the **COMP** tab. Right-click the **SIDECHAIN** box and select the Kick.
4.  **Threshold:** Lower the Blue **THRESH** knob until the Blue line on the graph intercepts the Kick peaks (Purple).
5.  **Ratio:** Set **RATIO** to roughly 4:1 (High compression).
6.  **Attack:** Set **ATT** to 0-2ms (Fast reaction).
7.  **Release:** *The Secret Sauce.* Tune the **REL** knob until the volume returns exactly before the next kick hits (Breathing).
    *   *Refinement:* Adjust the **CURVE** knob to 6 or 7. This makes the release "hang" slightly before swooping up, creating a more musical "suck" effect rather than a linear "ramp" up.

## 2. "Gated Reverb" Snare (80s Style)

Creating the Phil Collins / Synthwave snare sound using the Gate tab.

1.  **Routing:** Send your Snare to a Reverb Send track. 100% Wet.
2.  **Plugin:** Add Fruity Limiter *after* the Reverb.
3.  **Gate Setup:** Switch to the **NOISE GATE** tab.
4.  **Threshold:** Raise the **THRESH** (Green line) fairly high.
5.  **Gain:** Ensure Gate Gain is at 0 (Silence).
6.  **Action:** When the Snare hits, the loud transient opens the gate. You hear the reverb.
7.  **Release:** Set **REL** very short (e.g., 200ms).
8.  **Result:** As the reverb tail fades, it crosses below the Threshold. The gate clamps shut abruptly.
    *   *Visual:* Watch the Grey line chop off the Green tail.

## 3. Vocal Leveling (The "Rider")

Instead of automating volume faders, use the Compressor to "ride" the vocal.

1.  **Ratio:** Low (2:1).
2.  **Threshold:** Deep. Set it so it's compressing -10dB or more on the loudest parts.
3.  **Attack:** Slow (~15-30ms). Let the consonants pass through.
4.  **Release:** Medium-Slow (~300ms).
5.  **Knee:** **SOFT** (Critical).
6.  **Sustain:** Increase **SUSTAIN** to roughly 100ms.
    *   *Why?* This prevents the compressor from "letting go" between words in a single phrase, keeping the phrase consistent. It forces the compressor to treat the *sentence* as one block of volume, rather than reacting to every syllable.

## 4. Maximizing for Social Media (Loudness)

How to hit -14 LUFS / -1dB True Peak safely.

1.  **Tab:** LIMIT.
2.  **Ceiling:** Set **CEIL** to -1.0 dB. (Safety margin for transcoding).
3.  **Attack:** Set **ATT** to 3ms. (Enable Lookahead).
    *   *Note:* Ensure "Plugin Delay Compensation" is ON in FL Studio.
4.  **Saturation:** Dial **SAT** to roughly -3dB.
    *   *Effect:* The loudest peaks will be saturated before limiting, shaving off dynamic range musically.
5.  **Gain:** Increase the **GAIN** (Purple) knob until your Limiter activity (Orange) is just flickering on the snare hits. Do not crush the mix.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Sidechain Ducking (Kick vs 808)

## Routing Context
- **Source:** Kick Drum.
- **Target:** 808 Bass.
- **Link:** In the Mixer, select Kick -> Right-click the arrow on the 808 track -> **Sidechain to this track**.

## Step-by-Step Setup
1.  Load **Fruity Limiter** on the **808 track**.
2.  Switch to the **COMP** tab.
3.  Right-click the **SIDECHAIN** selector and choose the Kick.
4.  Set **RATIO** to maximum (Infinity).
5.  Set **ATTACK** to `0.5ms` (Fast).
6.  Set **RELEASE** to `100ms` (Tempo dependent).
7.  Lower the **THRES** (Threshold) until you see the 808 "ducking" every time the Kick hits.

## What To Listen For
- The Kick should "pop" through clearly. The 808 should feel like it's making room for the kick, creating a rhythmic "bounce."

## Vibe Check
- **Upbeat/Aggressive:** This is the industry-standard way to get high-impact trap drums.

## Variation
- **Soft Ducking:** Use a `2:1` Ratio and only -3dB of Threshold for a subtler, more "Vibey" R&B feel. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Transparent_Vocal_Control.md

```markdown
# Workflow: Transparent Vocal Control (The Modern Mix)

*Goal: Smooth out a vocal performance without it sounding "over-compressed" or "robotic."*

## 🎛️ Routing Context
- **Routing**: Vocal Insert -> Fruity Limiter.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **The Comp Tab**: Switch to the **COMP** tab.
2. **Soft Knee**: Set the **CURVE** to 1 (Soft Knee).
3. **Gentle Ratio**: Set **RATIO** to 2:1.
4. **Safety Net**: Set the **LIMIT** Ceiling to -0.1dB just to prevent digital clipping.
5. **Slow Reaction**: Set **ATTACK** to 15ms.
   - *Result*: This allows the initial "hit" of the vocal to stay sharp while compressing the tail.
6. **Threshold Setting**: Lower **THRES** until you see the white line dipping by 3dB - 5dB during the loudest words.
7. **Makeup**: Turn the **GAIN** knob up until the vocal sounds as loud as it was before you started.
8. **Mono Check**: Sum the Master to Mono. Ensure the vocal sits clearly in the center and hasn't been "pushed back" into the mix.

## 🔄 Variations
- **The "Aggressive" Vocal**: Increase **RATIO** to 6:1 and set **ATTACK** to 5ms for a more "clamped" radio sound.
- **The "Parallel" Blend**: Use the Wrapper's Mix knob to blend the compressed vocal at 60% with the dry version.

## ⚠️ Pitfalls & Fixes
- **Problem**: Vocal sounds "nasal" or "muffled."
- **Fix**: Your release is too fast. Increase the **RELEASE** time in the COMP tab to ~200ms.

```

---

## FILE: 03-Workflows\by-goal\02_Drum_Bus_Punch.md

```markdown
# Workflow: Drum Bus Punch (Trap & Boom Bap)

*Goal: Glue the drums together while emphasizing the "knock" of the kick and snare.*

## 🎛️ Routing Context
- **Routing**: Drum Bus (Group) -> Fruity Limiter.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **The Snap**: Go to the **COMP** tab.
2. **Delayed Compression**: Set **ATTACK** to 30ms.
   - *Result*: This lets the full "crack" of the snare and the "thump" of the kick through before the compression starts.
3. **Hard Glue**: Set **RATIO** to 4:1. Set **CURVE** to 8 (Hard Knee).
4. **Active Threshold**: Lower **THRES** until the drums feel like they are hitting a "wall." Look for ~2dB of gain reduction.
5. **The Release**: Set **RELEASE** to 100ms.
   - *Result*: The compressor should "reset" exactly before the next drum hit.
6. **Harmonic Polish**: Go to the **LIMIT** tab. Set **CEIL** to -0.5dB. Turn the **SAT** (Saturation) knob up until the peaks turn blue in the analyzer.
7. **Result**: Your drums should sound "snappier" and more cohesive.

## 🔄 Variations
- **The "Over-Saturate"**: Lower the Ceiling even further and crank the Gain to turn Fruity Limiter into a distortion box for aggressive industrial trap.
- **The "Punchy Soften"**: Use a very slow Release (500ms+) to make the drums sound more "vintage" and less "sharp."

## ⚠️ Pitfalls & Fixes
- **Problem**: The kick drum is making the cymbals "pump" or dip too much.
- **Fix**: Lower the **Ratio** or use a High-Pass filter on the internal sidechain (if available via Patcher) to ignore the kick.

```

---

## FILE: 03-Workflows\by-instrument\bass-sidechain.md

```markdown
# Instrument: Bass (Sidechaining)

Fruity Limiter is the standard for sidechaining in FL Studio.

1. **Routing**: Select the Kick track, right-click the Bass track, select "Sidechain to this track".
2. **Setup**: Open Fruity Limiter on the Bass.
3. **Selector**: In the COMP section, change the "Sidechain" box from `--` to `1` (or whatever the kick input is).
4. **Action**: Lower the **Threshold** and increase the **Ratio**.
5. **Visuals**: You will see the "Ghost" waveform of the kick overlaying the bass, making it easy to see exactly how much you are ducking.

```

---

## FILE: 03-Workflows\by-instrument\master-bus.md

```markdown
# Instrument: Master Bus

Using Fruity Limiter effectively on the 2-bus.

## Visualizing Headroom
Fruity Limiter's best feature is its display.
- **Purple**: Input signal.
- **Green**: Output signal.
- **White line**: Gain reduction.
- **Goal**: If you see deep white spikes, you are pushing too hard. Aim for 1-2dB of gain reduction on the loudest peaks for a transparent sound.

## The "Ceiling" vs. "Saturation"
Fruity Limiter adds a "Saturation" knob (in the Limit section).
- **Tip**: Before hitting the brickwall ceiling, dial in -1dB to -2dB of saturation. This "soft clips" the signal before hard limiting, giving you more loudness transparency.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Limiter

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Limiter.
- **Key Info:** Dual-stage architecture (Compressor -> Limiter), Lookahead latency explanation, and Noise Gate functionality.

## Source ID: [SRC: REPUTABLE]
- **Source:** "Mastering for Streaming" (Mastering Academy).
- **Key Info:** Differences between digital peak limiting and soft-saturation, sidechain timing for urban music, and the importance of lookahead for brickwall protection.

## Genre Style Board: Fruity Limiter

| Vibe | Key Tab | Key Parameter | Use Case |
| :--- | :--- | :--- | :--- |
| **Upbeat** | COMP | Sidechain (Kick) | High-energy Ducking |
| **Psychedelic**| LIMIT | SAT (Saturation) | Gritty Analog Warmth|
| **Spacey** | COMP | Sidechain (Vocal) | Reverb Breathing |
| **Vibey** | COMP | Ratio 2:1 + Soft Knee| Transparent Glue |
| **Moody** | GATE | Threshold | Isolated Silences |

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Dynamics)

Sourced applications of visual dynamics in Hip-Hop, Rap, and R&B.

## 1. The "Atlanta" 808 Snap
- **Source**: Lex Luger / Metro Boomin style.
- **Application**: Limit Ceiling at -1dB. High Gain. Hard Knee (Curve 8).
- **Goal**: Square-shaping the 808 so it hits with maximum digital pressure.

## 2. Dreamy R&B Gating
- **Source**: Frank Ocean / 40.
- **Application**: Using the Noise Gate section with a very slow Release.
- **Goal**: Silencing the vocal track hiss between phrases, but letting the "breath" of the room fade out gracefully rather than cutting off.

## 3. The "Future" Sidechain Pump
- **Source**: Wheezy / Southside.
- **Application**: COMP tab Sidechain. Ratio at Max. Threshold very low.
- **Goal**: The classic "heavy inhale" effect on synth pads during the kick drum hit.

## 4. Neo-Soul Parallel Glue
- **Source**: Robert Glasper / J Dilla.
- **Application**: Compressor with 1.5:1 Ratio. Wrap Mix at 40%.
- **Goal**: Adding a "weighty" analog-style feeling to the drums without sacrificing the human "pocket" and dynamics.

```

---

## FILE: 04-Reference\curve-settings-analysis.md

```markdown
# Technical Reference: Curve Settings Analysis

Deciphering the "Knee" types 1 through 8 in Fruity Limiter. [SRC: IL-MAN]

## 1. What is a "Knee"?
The knee determines how the transition between "No Compression" and "Full Compression" happens.
- **Soft Knee (Curve 1)**: The compressor starts working gradually as the signal approaches the threshold.
- **Hard Knee (Curve 8)**: The compressor clamps down instantly at 100% ratio the millisecond the threshold is crossed.

## 2. When to Use Curves 1-3 (Soft)
- **Use Case**: Master Bus, Vocals, Acoustic Guitars.
- **Why**: They are more "musical" and transparent. You don't hear the compressor turning on and off.
- **Aesthetic**: Vibey, Jazzy, Professional.

## 3. When to Use Curves 6-8 (Hard)
- **Use Case**: Kicks, Snares, 808s, aggressive Sidechaining.
- **Why**: They provide "surgical" control. You want the sound to hit a ceiling and stay there.
- **Aesthetic**: Upbeat, Energetic, Trap.

## 4. The "Sustain" Knob
While not a curve, the Sustain knob interacts with the release.
- **Function**: It defines a "hold" time before the release phase begins.
- **Move**: Use 10ms of Sustain on a drum bus to prevent the release from "shaking" the room too early. [SRC: REPUTABLE]

---
*Pro Tip: Watch the White Line. In Curve 1, the white line will curve smoothly into a dip. In Curve 8, the white line will have sharp, jagged edges.*

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Limiter Mechanics

## 1. Lookahead Topology

One of the most misunderstood features of Fruity Limiter is how the `ATT` (Attack) knob on the **LIMIT** tab functions. It is **NOT** just an envelope generator; it is a **Time Machine**.

### The Problem with Zero Latency Limiting
If a limiter has 0ms latency, it must react to a peak the *instant* it happens.
1.  Peak exceeding 0dB arrives at T=0.
2.  Limiter detects it.
3.  Limiter reduces gain.
*   **Result:** Because the reaction acts *on* the peak, it inevitably distorts the wave shape (Clipping).

### The Lookahead Solution
When you increase the **LIMIT ATT** knob (e.g., to 5ms), Fruity Limiter creates an audio buffer.
1.  Audio enters the plugin.
2.  It is held in a "Buffer" for 5ms.
3.  A "Detector" signal skips the buffer and looks at the audio immediately.
4.  The Detector sees a peak coming 5ms in the future.
5.  The Detector tells the Gain Envelope to *start ramping down now*.
6.  By the time the audio leaves the buffer (5ms later), the gain is **already reduced**.
*   **Result:** Perfect, clean limiting with zero distortion.
*   **Cost:** 5ms of system latency (Lag).

### Diagram: Lookahead Path

`\`\`mermaid
graph LR
    Input[Input Audio] --> Split{Splitter}
    
    Split -- "Detector Path (Fast)" --> Envelope[Gain Envelope Calculation]
    Split -- "Delay Buffer (Slow)" --> VCA[Voltage Controlled Amplifier]
    
    Envelope -- "Ramps Down Before Peak Arrives" --> VCA
    
    VCA --> Output[Output Audio]
    
    note[Note: Buffer Size = LIMIT ATT Knob Value]
`\`\`

---

## 2. Saturation Curve (Amplitude Distortion)

The **SAT** (Saturation) knob introduces a "Soft Knee" to the Limiter's brick wall.

*   **0% Saturation (Knob Right):**
    *   Transfer Curve is Linear (1:1) until 0dB.
    *   At 0dB, it hits a hard horizontal wall.
    *   Artifacts: Odd harmonics, harsh clicking on heavy reduction.

*   **50% Saturation (Knob Center):**
    *   Transfer Curve becomes Sigmoidal (S-Shape).
    *   As input approaches -3dB, the variable gain reduction begins.
    *   At 0dB, the curve flattens out smoothly.
    *   Artifacts: Even & Odd harmonics. "Rounding" of square waves.
    *   Psychoacoustics: Sounds louder and warmer.

---

## 3. Oversampling (Internal)

Fruity Limiter operates with internal logic that ensures inter-sample peaks are handled, though it does not offer a user-facing "Oversampling" switch like Fruity Filter. The precision of the envelope follower (Detector) allows for sub-sample accuracy when the **CURVE** tension is properly set.

```

---

