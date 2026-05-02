# Fruity DrumSynth Live - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity DrumSynth Live - Hybrid Drum Synthesis

`\`\`
██████╗ ██████╗ ██╗   ██╗███╗   ███╗███████╗██╗   ██╗███╗   ██╗████████╗██╗  ██╗
██╔══██╗██╔══██╗██║   ██║████╗ ████║██╔════╝╚██╗ ██╔╝████╗  ██║╚══██╔══╝██║  ██║
██║  ██║██████╔╝██║   ██║██╔████╔██║███████╗ ╚████╔╝ ██╔██╗ ██║   ██║   ███████║
██║  ██║██╔══██╗██║   ██║██║╚██╔╝██║╚════██║  ╚██╔╝  ██║╚██╗██║   ██║   ██╔══██║
██████╔╝██║  ██║╚██████╔╝██║ ╚═╝ ██║███████║   ██║   ██║ ╚████║   ██║   ██║  ██║
╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝

██╗     ██╗██╗   ██╗███████╗
██║     ██║██║   ██║██╔════╝
██║     ██║██║   ██║█████╗  
██║     ██║╚██╗ ██╔╝██╔══╝  
███████╗██║ ╚████╔╝ ███████╗
╚══════╝╚═╝  ╚═══╝  ╚══════╝
`\`\`

**Plugin Type:** Percussion Synthesizer
**Category:** Generator / Drum / Synthesis
**Official Manual:** [Image-Line Fruity DrumSynth Live Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20DrumSynth%20Live.htm)

---

## 🎯 What is Fruity DrumSynth Live?

Fruity DrumSynth Live is a versatile virtual drum machine plugin that generates drum sounds through synthesis rather than samples. It features **120 programmable drum patches** mapped across the keyboard. Its unique dual-oscillator architecture (Noise + Swept Sine) allows for "unlimited" drum design, ranging from classic 808-style kicks to realistic snares, hi-hats, and metallic cymbals.

**Key Capabilities:**
- **Dual Noise/Osc Engines:** Specialized oscillators for "thump" and "sizzle."
- **120 Patch Slots:** Assign custom drum sounds to every MIDI key (C0-B9).
- **Morphing Bend-Wheel:** Seamlessly morph between two different drum patches.
- **Envelope Retriggering:** Instantly create "claps" and multi-hit effects.
- **Tone Filtering:** Integrated Lowpass/Highpass per patch.
- **Velocity Mapping:** Link note intensity to any synthesis property.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **drum-patch-architecture.md** (Noise vs Sine)
3. Create **parameter-cheat-sheet.md**
4. Load a preset kit and move the "Morph To" wheel while playing a beat.

### For Sound Designers:
1. Study **creating-synthetic-snares.md**
2. Review **clap-design-retriggers.md**
3. Learn **velocity-sensitive-expression.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Osc 1:** Sine/Noise sweep (Kicks/Toms).
  - **Osc 2:** Envelope-focused noise (Snares/Hats).
  - **Retrigger (Count/Rate):** Clap/Roll generator.
  - **Morph To:** Crossfade target.
  - **Click:** Phase offset/transient.

- [ ] **keyboard-patch-mapping.md**
  - How patches are organized across the notes.

#### 02-Data/parameters/
- [ ] **drumsynth-live-specs.json**
  `\`\`json
  {
    "plugin_name": "Fruity DrumSynth Live",
    "patches": 120,
    "synthesis": ["Swept Sine", "Noise"],
    "retriggers": true
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **perfect-clap-synthesis.md**
  - Setting Oscillator 2 to Noise.
  - Using "Count" at 3 or 4.
  - Adjusting "Rate" for the classic offset clap.

- [ ] **dynamic-kick-morphing.md**
  - Patch 1: Clean sub kick.
  - Patch 2: Distorted industrial kick.
  - Automating the Morph wheel for builds.

- [ ] **hi-hat-tone-shaping.md**
  - Using the Tone knob (HP mode) to clean up highs.
  - Adjusting decay for "Open" vs "Closed" hats.

#### 03-Workflows/by-context/
- [ ] **low-cpu-drum-layering.md**
- [ ] **retro-techno-drum-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **envelope-shaping-logic.md**
  - Explaining the Logarithmic vs Linear envelope modes.

---

## 🔬 Research Framework

### Phase 1: The Oscillators (Week 1)
**Goal:** Synthesis Basics

**Tasks:**
1. Initialize a patch on C5
2. Use Osc 1 to build a basic Kick
3. Use Osc 2 to build a basic Snare
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What is the difference between Osc 1 and 2 in "Noise" mode?
- Does "Click" add a sample or just phase shift?

### Phase 2: Performance (Week 2)
**Goal:** Movement

**Tasks:**
1. Practice Morphing between two percussion types
2. Link Velocity to the "Tone" filter
3. Create perfect-clap-synthesis.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (User adjustable)
- Architecture (Dual engine)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is every key sounding different? (Fruity DrumSynth Live uses a per-key patch system).
2. How do I copy a kick from C1 to C#1? (Check the patch copy/paste menu).

---

## 🔗 Cross-Reference with Other Plugins

Fruity DrumSynth Live is often used with:
- **FPC** (Layering synthesized drums with samples)
- **Fruit Kick** (Alternative sub-kick source)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity DrumSynth Live/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── keyboard-patch-mapping.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── drumsynth-live-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── perfect-clap-synthesis.md
│   │   └── dynamic-kick-morphing.md
│
└── 04-Reference/
    └── envelope-shaping-logic.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Synthesize a complete 808-style kit (Kick, Snare, Clap, Hats) using no samples
- [ ] Explain the role of the Morph wheel in a live performance context
- [ ] Demonstrate effective use of the Retrigger section for claps
- [ ] Map velocity to create a dynamic, expressive hi-hat part

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity DrumSynth Live

## The 60-Second Mental Model
Fruity DrumSynth Live is a **Synthesis-based Drum Machine**. Unlike a sampler (FPC) that plays recordings of drums, DrumSynth generates them from scratch using pure oscillators and noise. It is essentially a library of **120 independent synthesizers**, with one assigned to every key on your keyboard. This allows you to build a custom kit where every sound is physically modeled. [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** A hybrid percussion synthesizer for Kicks, Snares, Claps, and Hats.
*   **Where it fits:** It's a Generator. Use it when you want "perfect" 808s or unique synthetic percussion that samples can't replicate.

## Hip-Hop / R&B Context
*   **Custom 808s:** Use Oscillator 1's swept sine to create sub-bass kicks that are perfectly in tune with your song.
*   **Signature Claps:** Use the **Retrigger** section to create that "offset" clap sound found in modern rap hooks.
*   **Performance Morphing:** Use the **Morph wheel** to transition your kit from "Clean R&B" to "Gritty Industrial Trap" during a build-up.

## When To Use
*   When you need a **Low-CPU drum kit** (Synthesis is often more efficient than loading 100 high-res samples).
*   When you want **Velocity-sensitive** drums that change tone (not just volume) as you play.
*   When creating **Sci-fi or Glitch** percussion textures.

## When NOT To Use
*   **Ultra-Realism:** If you need a real acoustic Jazz kit with brush sounds, use a high-quality multi-velocity sampler like **DirectWave** or **FPC**.
*   **Quick Browsing:** Since it’s a synth, you have to "dial in" the sound. If you just want to scroll through thousands of sounds, use the FL Browser.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity DrumSynth Live

## UI Tour
1.  **Oscillator 1 (The Body):** Swept Sine or Noise. Used for the "thump" of a kick or the tone of a tom.
2.  **Oscillator 2 (The Sizzle):** Noise or Oscillator. Used for the "snap" of a snare or the sizzle of a hat.
3.  **Envelope Section:** Controls the volume and pitch decay of each oscillator separately.
4.  **Retrigger (The Clap Engine):** Controls how many times the sound repeats (Count) and at what speed (Rate). [SRC: IL-MAN]
5.  **Filter/Tone:** A per-patch Low-pass/High-pass filter.
6.  **Morph To:** A target patch selection for crossfading.

## Signal Flow
1.  **Trigger:** A MIDI note (C0-B9) is received.
2.  **Patch Selection:** The plugin loads the specific synthesis settings for that note.
3.  **Synthesis:** Osc 1 and Osc 2 generate their waveforms based on the pitch/noise settings.
4.  **Envelopes:** The amplitude and pitch are shaped.
5.  **Retriggering:** If "Count" > 1, the envelope triggers again based on the "Rate."
6.  **Summing:** Osc 1 and 2 are mixed and passed through the Tone filter.
7.  **Output:** Audio leaves via the main mixer track.

## Things Beginners Misunderstand
*   **Per-Key Patches:** Every key is a different synth. If you change the snare on D5, the snare on E5 stays the same. **Fix:** Use the Copy/Paste patch menu if you want the same sound on multiple keys.
*   **The Click Parameter:** This adds a tiny burst of phase-offset noise at the very start of the sound. Essential for making synthesized kicks cut through a mix.
*   **Morph Wheel:** It doesn't "bend" the pitch like a normal pitch wheel; it crossfades the parameters between the current patch and the "Morph To" target. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: DrumSynth Live

## Technique 1: The Perfect 808 Kick
*   **Goal:** A sub-bass kick that hits hard and rings out.
*   **Setup:** Osc 1 = Sine.
*   **Action:** Set **Freq** to a low value (e.g., 50Hz). Set **Env Decay** to a long setting (1-2 seconds). Increase the **Sweep** amount so it starts high and drops to the sub frequency.
*   **Result:** A clean, synthesized 808 that is perfectly centered and stable.

## Technique 2: Clap Layering via Retrigger
*   **Goal:** The classic rap clap.
*   **Action:** Use Osc 2 (Noise). Set **Retrigger Count** to `3`. Set **Rate** to a low value (approx 10-20ms).
*   **Listen For:** The "flam" effect where the clap hits three times rapidly. This adds the human-like width and thickness expected in hip-hop. [SRC: REPUTABLE]

## Technique 3: Velocity Tone Mapping
*   **Goal:** Drums that get "brighter" the harder you hit them.
*   **Setup:** Go to the **Velocity** mapping section.
*   **Action:** Link Velocity to the **Tone** knob (Filter Cutoff). 
*   **Result:** Soft hits sound muffled and dark; hard hits sound crisp and open. Perfect for realistic hi-hat patterns.

## Technique 4: Patch Morphing Transitions
*   **Goal:** A riser or transition that changes the drum sound.
*   **Setup:** Set the current key to a Kick. Set the **Morph To** target to a Snare.
*   **Action:** Automate the **Morph wheel** over 4 bars.
*   **Effect:** The kick will gradually transform into a snare, creating an evolving rhythmic transition. [SRC: IL-MAN]

## Common Pitfalls + Fixes
*   **Pitfall:** "The snare sounds like a kick."
    *   **Fix:** Ensure Osc 2 (Noise) has a high enough volume and its envelope decay is long enough to provide the "snare tail."
*   **Pitfall:** "Static, boring hats."
    *   **Fix:** Slightly vary the **Velocity** of your hi-hat notes in the Piano Roll. Synthesis responds much more naturally to velocity than samples do.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity DrumSynth Live

Percussion synthesis defines the "Era" and "Attitude" of a track.

## 1. Moody (Submerged, Heavy, Dark)
*   **Production Lever:** **Swept Sine Kicks + Filtered Noise.**
*   **Action:** Osc 1 (Sine) @ 45Hz. Long decay. Osc 2 (Noise) set to very dark High-Cut filtering.
*   **Listen For:** A "heavy" weight that feels like it’s coming from another room.
*   **Don't Do This:** Avoid bright claps or high-pitched hats; keep the energy "trapped" in the lows.

## 2. Upbeat (Snappy, Energetic, Pop)
*   **Production Lever:** **Retriggered Claps + Bright Cowbells.**
*   **Action:** Count = 3 on claps. Set Tone to high-pass for hats to give them "air." 
*   **Listen For:** A "crisp" and "sharp" response that drives the tempo forward.
*   **Don't Do This:** Don't use long decays; keep everything short and percussive.

## 3. Psychedelic (Shifting, Liquid, Metallic)
*   **Production Lever:** **Pitch Sweeps + Morphing.**
*   **Action:** Maximize the **Sweep** amount on percussion. Automate the **Morph wheel** randomly.
*   **Listen For:** Drums that don't sound like drums. Lasers, blips, and moving textures.
*   **Don't Do This:** Avoid standard kick/snare patterns; keep the sounds "alien."

## 4. Jazzy (Organic, Brushes, Soft)
*   **Production Lever:** **Low Velocity Noise + Resonance.**
*   **Action:** Use Osc 2 (Noise) with a very soft envelope (long attack). Map velocity to volume.
*   **Listen For:** The "whisper" of a drum brush hitting a snare head.
*   **Don't Do This:** Avoid hard claps or sine sweeps; keep it "acoustic-ish."

## 5. Vibey (Smooth, Glossy, Professional)
*   **Production Lever:** **Perfect Tuning + Wide Noise.**
*   **Action:** Tune your Kicks/Toms to the key of the song. Pan the Osc 2 (Noise) wide if possible (using mixer routing).
*   **Listen For:** A "polishing" effect where the drums feel like they belong perfectly in the frequency space.
*   **Don't Do This:** Don't let the drums be too loud; keep the levels "lush" and integrated. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\drum-synthesis-physics.md

```markdown
# The Master's Guide to Physical Modeling and Percussion Physics in DrumSynth Live

## 1. Introduction: The Art of Synthesized Percussion
In modern Hip-Hop and R&B, "found" samples are only half the battle. To achieve a truly unique, "cool" sound, elite producers synthesize their own percussion from scratch. Fruity DrumSynth Live is a hybrid powerhouse that uses **Physical Modeling** and **Subtractive Synthesis** to mimic the complex physics of drums. Unlike samples, which are static, DrumSynth Live is a living, breathing engine that responds dynamically to every MIDI hit.

---

## 2. Theoretical Foundation: The Physics of the Strike
### 2.1 The Membrane Mathematics
When a drum head (membrane) is struck, it doesn't just vibrate at one frequency. It creates a series of **Inharmonic Modes**. 
- **The Body (Mode 1):** The lowest frequency, determining the "punch" or "weight" of the kick or tom.
- **The Overtones (Upper Modes):** These are mathematically complex and determine the "wood," "metal," or "skin" character of the drum.
- **The DrumSynth Secret:** By using dual oscillators with internal FM, DrumSynth Live allows you to dial in these inharmonic ratios precisely, moving from a realistic "wooden" rimshot to a "metallic" psychedelic shaker in seconds.

### 2.2 Snap vs. Sustain (The Envelope Logic)
Percussion is defined by its **Temporal Profile**.
- **The Attack (Snap):** The first 5-20 milliseconds. This is where the "click" lives. In DrumSynth Live, this is handled by Osc 2 set to a high frequency with a near-instant decay.
- **The Body (Sustain):** The following 100-500 milliseconds. This is where the "tone" lives. This is Osc 1 set to the fundamental frequency.
- **The Mastering Rule:** If your "Snap" is too slow, the drum will sound "lazy" (Moody R&B). If it's too fast, it will sound "thin" (High-energy Rap).

---

## 3. The Role of Entropy: White Noise Synthesis
### 3.1 Simulating Friction and Air
In the physical world, percussion involves friction—a stick hitting a head, wires rattling under a snare, air escaping a hi-hat. In synthesis, this is **Noise**.
- **White Noise:** A signal containing all frequencies at equal power. 
- **DrumSynth Implementation:** The Noise module in DrumSynth Live is not just a volume knob; it is integrated into the filter path.
- **The "Snares" Logic:** For a snare drum, the noise represents the metal wires. For a hi-hat, it represents the friction of the metal cymbals. 
- **Pro Vibe Tip:** Add just 2% noise to a sub-kick to give it a "vintage sampled" feel, as if it were recorded from an old 70s drum machine.

---

## 4. Filter Resonance and the "Shell" Character
### 4.1 The Resonant Whistle
The **Res (Resonance)** knob on the DrumSynth filter is a tool for **Acoustic Emulation**.
- **Low Resonance:** Mimics a heavily dampened drum head or a wooden surface (Warm, intimate R&B).
- **High Resonance (70%+):** Mimics a metal shell or a resonant chamber (Metallic, industrial Rap).
- **Self-Oscillation:** At 100% resonance, the filter becomes an oscillator itself. Professional producers use this to create perfectly pure "sine-wave" percussion that sounds like a legendary TR-808.

---

## 5. Genre-Specific Production Strategies
### 5.1 Moody R&B (The "Wooden" Vibe)
- **The Technique:** Focus on the 200Hz - 800Hz range. 
- **The Action:** Set Osc 1 to a low frequency, Noise to 10%, and Filter Cutoff to 600Hz.
- **The Result:** A soft, "expensive" percussion hit that feels like it’s being played in a dimly lit studio.

### 5.2 Psychedelic Trap (The "Drunken" Perk)
- **The Technique:** Pitch modulation.
- **The Action:** Automate the pitch of Osc 1 so it "slides" down after every hit.
- **The Result:** A trippy, "laser-like" percussion sound that adds a psychedelic edge to a standard trap beat.

---

## 6. Technical Nuance: The Multi-Program Architecture
### 6.1 128 Independent Engines
DrumSynth Live is unique because it stores **128 patches simultaneously**, mapped to every MIDI note.
- **The Efficiency Hack:** Professional producers use this to build a "Master Kit." You can have 10 different versions of a hi-hat (varying in brightness and decay) all within one plugin, allowing for incredibly realistic, "human" performances.

---

## 7. Mathematical Strike Table for DrumSynth Live
Use these settings as a "scientific" starting point for your drum design:

| Drum Type | Osc 1 Freq | Osc 2 Freq | Noise Level | Decay | Filter Cutoff |
|-----------|------------|------------|-------------|-------|---------------|
| **Deep Kick** | 55 Hz      | 800 Hz     | 5%          | 60%   | 400 Hz        |
| **Snappy Snare**| 180 Hz     | 2500 Hz    | 70%         | 30%   | 3500 Hz       |
| **Closed Hat** | 4000 Hz    | 8000 Hz    | 100%        | 5%    | 8000 Hz       |
| **Wooden Rim** | 600 Hz     | 1200 Hz    | 15%         | 10%   | 1500 Hz       |
| **Psy-Tom**   | 80 Hz      | 400 Hz     | 20%         | 80%   | 1000 Hz       |

---

## 8. Conclusion: Mastering the Strike
Synthesizing percussion in Fruity DrumSynth Live is an exercise in **Energy Management**. By balancing the pure tones of the oscillators with the chaotic energy of the noise generator, and shaping it with the resonant filter, you can create sounds that are impossible to find in sample packs. It is the definitive tool for the producer who wants to own their "Sonic Signature" in the worlds of R&B, Rap, and beyond.

---
**Document Version:** 2.0 (Master Tier)
**Author:** AI Research Specialist
**Keywords:** Percussion Synthesis, Physical Modeling, Inharmonic Modes, Drum Design, R&B Production.
```

---

## FILE: 01-Learning\Concepts\envelope-snapping-physics.md

```markdown
# Envelope Snapping Physics

## The "Snap" Factor
In DrumSynth Live, the "snap" of a kick or snare is determined by the relationship between the **Pitch Envelope** and the **Volume Envelope**.

### Physics of the Strike
1. **Compression Phase:** The moment the stick hits the drum head. Frequency is at its maximum (**Max Freq**).
2. **Expansion Phase:** The head begins to vibrate at its natural frequency (**Freq**).
3. **Result:** If the Pitch Envelope decay is too slow, the drum sounds like a "laser." If it's too fast (<10ms), it sounds like a "click." 

## Internal Filter Saturation
When **Resonance** is set above 70%, the internal filter starts to self-oscillate.
- **The Trick:** Turn **Noise** down to 0% and **Osc 1** down. Use the **Resonance** as the primary sound source.
- **Effect:** This creates a perfectly "pure" sine-wave percussion hit that sounds like an old analog drum machine (e.g., TR-808).

```

---

## FILE: 01-Learning\Concepts\generative-percussion-logic.md

```markdown
# The Master's Guide to Generative Percussion Logic and Stochastic Kits

## 1. Introduction: The Entropy of the Beat
In the clinical world of MIDI, every "Kick" is a perfect copy of the previous one. This rhythmic certainty is the enemy of "Soul" and "Cool." A real drummer never hits the exact same spot on a drum head twice. **Fruity DrumSynth Live**, with its massive 128-program architecture, allows for **Generative Percussion Logic**. By designing "Stochastic Kits"—where multiple slightly different patches represent a single instrument—you move from "Programming" to **"Orchestrating Energy."**

---

## 2. Theoretical Foundation: Rhythmic Entropy
### 2.1 The Concept of the "Dynamic Pool"
Standard production uses one MIDI note for the Kick (C5). 
- **The Master Move:** Use four MIDI notes (C5, C#5, D5, D#5) all mapped to **DrumSynth Live**.
- **The Physics:** Each of these 4 programs is designed with 1-2% variations in **Osc 1 Frequency**, **Noise Level**, and **Filter Cutoff**.
- **The Result:** When you play a 16th-note roll, the "Tone" of the drum is constantly shifting. This mimics the physical movement of a drum beater across a vibrating membrane.

### 2.2 Stochastic Probability (The human brain)
The human brain is highly sensitive to **Repetition Fatigue**. 
- **The "Elite" Secret:** If the listener can predict the exact timbre of the next hit, they stop "Feeling" the groove and start "Analyzing" the machine.
- **The Solution:** By injecting mathematical entropy (randomness) into the drum's physical parameters, you keep the listener's brain in a constant state of "Discovery," which is the neurological foundation of "Cool."

---

## 3. Designing the "Living" Kit (Step-by-Step)

### 3.1 The Kick Group (C5 to D#5)
- **Program 1 (The Anchor):** Freq 55Hz, Noise 2%, Cutoff 500Hz.
- **Program 2 (The Soft Hit):** Freq 54Hz, Noise 1%, Cutoff 450Hz.
- **Program 3 (The Edge Hit):** Freq 56Hz, Noise 4%, Cutoff 600Hz.
- **The Interaction:** Use the FL Studio **Randomizer** tool in the Piano Roll to distribute your kick hits across these 3 notes.

### 3.2 The Hi-Hat Group (F#5 to A5)
Hi-hats are the most expressive part of an R&B groove.
- **The 606 Variable:** Create 8 different hi-hat programs. 
- **Parameter Drift:** Move the **Decay** knob in 2% increments across the 8 slots. 
- **The "Swing" Vibe:** When you play a hi-hat roll, the "Length" of the sizzle will oscillate. This creates a "Shimmering" effect that feels expensive and professional.

---

## 4. Engineering the "Material Switch"
### 4.1 Temporal Narrative Logic
A "Generative" kit doesn't just change randomly; it reacts to the song's energy.
- **The Logic:** Map different "Shell Materials" (Resonance settings) to different MIDI octaves.
- **The Transition:** 
    - **Verse:** Use low-resonance "Wooden" snares (Res 10%). 
    - **Chorus:** Switch to high-resonance "Steel" snares (Res 45%).
- **The Psychology:** The listener "Feels" the room getting harder and more reflective as the energy increases. This is the hallmark of elite cinematic Hip-Hop production.

---

## 5. Mathematical Entropy Table
Use these percentage drifts inside DrumSynth Live to achieve "Human" realism:

| Parameter | Drift Range | Resulting Emotion |
|-----------|-------------|-------------------|
| **Osc 1 Freq** | ±1% (0.5Hz) | Organic Tuning Instability. |
| **Noise Level**| ±5%         | Variation in "Air" and friction. |
| **Filter Cutoff**| ±10%       | Tone "Movement" / Expressiveness.|
| **Decay**      | ±15%        | Dynamic energy dissipation. |

---

## 6. Conclusion: The Master of the Living Machine
Mastering **Generative Percussion Logic** in Fruity DrumSynth Live is about **Surrendering Control.** By building kits that possess internal entropy, you allow the DAW to behave like a physical acoustic system. This moves your R&B and Hip-Hop tracks away from the "Grid" and into the "Soul." Follow these stochastic protocols, and your drums will have the professional, "Cool," and unpredictable energy of a live studio session.

---
**Document Version:** 1.0 (Quantum Engineering Tier)
**Author:** Rhythmic Entropy Architect
**Keywords:** Generative Drums, Stochastic Synthesis, Percussion Logic, Drum Design, R&B Groove, FL Studio.

```

---

## FILE: 01-Learning\Concepts\neurological-impact-of-transients.md

```markdown
# The Master's Guide to Neurological Impact and Auditory Brainstem Response in DrumSynth Live

## 1. Introduction: The Neurology of the Hit
In the competitive landscape of modern Hip-Hop and Rap, the "Hardness" of a drum is not measured in decibels, but in **Neurological Triggering**. The human brain is hard-wired to react to sharp transients as potential threats or significant events. This is known as the **Auditory Brainstem Response (ABR)**. Fruity DrumSynth Live is a precision tool for manipulating this response. By engineering the first 10-20ms of a drum hit, you can bypass the listener's "Casual Hearing" and speak directly to their "Instinctual Cortex."

---

## 2. The Physics of the "Snap" (Transient Engineering)
### 2.1 The Initial Compression Wave
When a real drum is hit, the air is instantly compressed. In synthesis, this is the **Pitch Envelope**.
- **Max Freq:** The starting frequency of the strike. 
- **The Brain's Analysis:** If the strike starts above 2000Hz and drops to 60Hz in under 5ms, the brain perceives it as a "Hard" impact. 
- **The Engineering Rule:** To make a kick "Hit Harder" without raising the volume, increase the **Max Freq** in DrumSynth Live. This triggers a stronger ABR, making the kick feel more "Immediate."

### 2.2 Inharmonic Interference (The "Clash")
Real impacts are messy. Pure sine waves sound "soft" because they lack high-frequency entropy.
- **Osc 2 FM:** Use Oscillator 2 at a non-integer ratio (e.g. 1.73x) to create a burst of inharmonic "Noise" during the attack.
- **The Psychology:** The brain interprets this "Clash" as physical force. It’s the difference between a "Beep" and a "Thump."

---

## 3. Damping Coefficients and Emotional Response
### 3.1 The "Mood" of the Tail
The way a drum sound ends (The **Decay**) tells the brain about the "Material" and "Space."
- **High Damping (Short Decay):** Triggers a sense of "Urgency" and "Precision." Ideal for high-energy Trap and Drill.
- **Low Damping (Long Decay):** Triggers a sense of "Luxury," "Relaxation," or "Moodiness." This is the foundation of the 808-heavy R&B sound.
- **Master Strategy:** Use DrumSynth Live's logarithmic decay to mimic the natural energy loss of a vibrating membrane. Linear decays sound "Fake" and fail to trigger the same emotional response.

---

## 4. Spectral Masking and Focal Points
### 4.1 Clearing the "Presence" Path
The human ear is most sensitive to the 3kHz - 5kHz range. 
- **The Danger:** If your hi-hats or snare "Snap" have too much energy in this range, they will **Mask** the lead vocal.
- **The DrumSynth Solution:** Use the internal **Band-Pass Filter** to shift the "Snap" of the snare to 6kHz. 
- **The Result:** The snare still sounds "Sharp," but it leaves a "Hole" in the spectrum for the vocal to occupy. This is how you achieve a "Large" mix that stays "Intelligible."

---

## 5. Genre-Specific Neurological Calibration

| Sub-Genre | Target ABR | Attack Speed | Resonance | Biological Response |
|-----------|------------|--------------|-----------|---------------------|
| **Aggressive Trap**| High (Sharp)| < 5ms        | 50% (Steel)| Fight or Flight (Hype) |
| **Moody R&B** | Medium (Soft)| 15-20ms      | 10% (Wood) | Relaxation / Intimacy |
| **Drill**     | Very High   | < 2ms        | 80% (Metal)| High Alert / Tension |
| **Neo-Soul**  | Low         | 30ms         | 5% (Skin)  | Comfort / Groove |

---

## 6. The "Human" Variable: Velocity-Mapped Attention
### 6.1 Entropy as Engagement
If every drum hit is identical, the brain enters a state of **Habituation**—it stops paying attention.
- **Master Move:** Link **Filter Cutoff** and **Noise Level** to MIDI Velocity in DrumSynth Live.
- **The Logic:** Every time the drummer "Hits" harder, the sound gets brighter and noisier. This constant fluctuation keeps the listener's brain in a state of "Active Discovery," preventing the track from feeling "Stale."

---

## 7. Conclusion: The Master of Impact
Mastering Fruity DrumSynth Live is about **Biological Manipulation.** You are not just making drums; you are designing the "Impact Events" that will define the listener's experience. By understanding the ABR and the physics of transient resynthesis, you can create percussion that is technically perfect and neurologically addictive. Follow these principles to own the "Force" of your Hip-Hop and R&B productions.

---
**Document Version:** 1.0 (Neuro-Sonic Tier)
**Author:** Psychoacoustic Research Lead
**Keywords:** ABR, Auditory Brainstem Response, Transient Shaping, Drum Synthesis, Neurological Impact, FL Studio.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity DrumSynth Live (5 Minutes)

1.  **Insert:** Load **Fruity DrumSynth Live** into the Channel Rack.
2.  **Browse Patches:** Play the notes on your MIDI keyboard from **C3 to C5**. You will hear a different drum on every key.
3.  **Edit a Sound:** Pick a key (e.g., C5 for a Kick). 
4.  **Tone Shaping:** Turn the **Tone** knob to the left for a muffled High-Cut, or to the right for a thin High-Pass.
5.  **Envelope:** Adjust the **Decay** slider to change how long the drum lasts.
6.  **Morph:** Select a different target in the **Morph To** dropdown and move the **Bend wheel** to hear the sound transform. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: DrumSynth Live

*   **Editing the Wrong Key:** Tweaking knobs while thinking you are editing the snare, but actually editing the hi-hat because the last note played was different. **Fix:** Always look at the "Selected Note" display in the UI.
*   **Zero Volume Silence:** Not realizing that Osc 1 and Osc 2 have independent volume sliders. If both are at 0, you hear nothing.
*   **Morph Wheel Confusion:** Leaving the Morph wheel at 100% and wondering why your snare sounds like a cowbell. **Fix:** Reset the Morph wheel to 0 if you want the "pure" patch sound.
*   **Retrigger Overload:** Setting the Retrigger Count to 10. This creates a machine-gun effect that usually ruins the mix unless you are making IDM. **Fix:** Use 3 or 4 for realistic claps.
*   **CPU Clipping:** While efficient, extremely long decays on 120 patches can eventually stack up. **Fix:** Keep your decays as short as necessary for the genre. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity DrumSynth Live: The Performance Machine

> **Scope:** Live Drum Synthesis, Key Mapping, and Patch Morphing.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Medium (Patch Management).

## 🧠 The "Live" Concept
Unlike FPC (Samples) or Drumaxx (Physical Modeling), **DrumSynth Live** is a layout-focused synthesizer designed for keyboard players.
*   **Key Mapping:** Every key on the keyboard (C0 to B9) can hold a unique drum patch.
*   **Architecture:** It uses the "DrumSynth" engine (Subtractive/FM/Ring Mod).
*   **Live Use:** You can switch between 120 distinct drum sounds instantly without loading samples.

**Signal Flow:**
`MIDI Key` -> **[OSC 1 (Tone)]** + **[OSC 2 (Noise/Ring)]** + **[SAMPLE LAYER]** -> **[FILTER]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Oscillator Pair

*   **OSC 1 (Body):**
    *   *Sweep Tone:* A sine wave that sweeps pitch (Kick/Tom).
    *   *Noise:* White noise (Snare/Hat).
*   **OSC 2 (Texture):**
    *   *Bandwidth:* Controls the "noisiness".
    *   *Ring Mod:* Multiplies Osc 1 * Osc 2. This creates metallic cymbals and bells.
*   **Sample Layer:** You can layer a PCM sample on top for the attack transient.

---

## 🔁 Section 2: The Morph Engine

Fruity DrumSynth Live has a unique feature: **Morphing**.
*   **Concept:** You can morph the parameters of the *current* patch into the parameters of *another* patch in real-time.
*   **Control:** The **Morph Amount** knob.
*   **Application:**
    *   Start with a "Clean Kick" patch.
    *   Select "Distorted Kick" in the Morph Menu.
    *   Automate the Morph Knob to blend them.
    *   *Note:* It morphs the *synthesis parameters*, not just crossfading audio.

---

## ⚡ Technical Specs: 120 Patches

*   **Architecture:** The plugin stores 120 patches internally.
*   **Selection:**
    *   *Edit Mode:* Click a key on the virtual keyboard to "Select" that patch for editing.
    *   *Play Mode:* Pressing a MIDI key plays the patch assigned to that note.
*   **Copy/Paste:** Right-click a key to Copy/Paste patches. Essential for building kits.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Tone" Snare
1.  **OSC 1:** Noise Mode. Bandwidth High.
2.  **OSC 2:** Sweep Mode. High Pitch. Ring Mod ON.
3.  **Result:** The Oscillator Ring Mod creates the metallic "shell" sound of the snare, while Osc 1 provides the wires.

### 2. Laser Zaps (Kraftwerk Style)
1.  **OSC 1:** Sweep Tone.
2.  **Sweep Time:** Long.
3.  **Sweep Range:** Wide (High to Low).
4.  **Decay:** Matches the Sweep.
5.  **Result:** The classic 80s "Pew" sound. DrumSynth is the best plugin in FL for this specific sound.

### 3. Hi-Hat Morphing
1.  **Patch C4:** Closed Hat (Short decay).
2.  **Patch C#4:** Open Hat (Long decay).
3.  **Setup:** Go to C4. Set "Morph To" -> C#4.
4.  **Perform:** Play C4 repeatedly while turning the Morph knob. The Hi-Hat slowly opens up.

```

---

## FILE: 01-Learning\Quick-Reference\keyboard-patch-mapping.md

```markdown
# Keyboard Patch Mapping: DrumSynth Live

DrumSynth Live organizes its 120 patches logically across the MIDI keyboard.

## Standard Layout (Default Bank)
*   **C0 - B1:** Bass Drums (Kicks) and Sub-tones.
*   **C2 - B2:** Snares and Rims.
*   **C3 - B3:** Toms and Percussion.
*   **C4 - B4:** Claps and Metallic sounds.
*   **C5 - B5:** Hi-Hats (Open and Closed).
*   **C6+:** SFX and Experimental blips.

## Pro Tip: Patch Copying
1.  Right-click the **Note Display** at the top.
2.  Select **Copy Patch**.
3.  Go to a different MIDI key.
4.  Select **Paste Patch**.
*   This allows you to create a "tuned" percussion kit by pasting the same tom sound across multiple keys and adjusting the Freq knob for each. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity DrumSynth Live: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** 128-Voice Physical Modeling & Subtractive Hybrid
**Internal Logic:** Parallel Multi-Program Synthesis Engine
**Target Genres:** Hip-Hop, Trap, Industrial Rap, Moody R&B, Neo-Soul

---

## 1. THE MULTI-PROGRAM GRID (The Kit)
Unlike 99% of other synthesizers, DrumSynth Live is an **Entire Kit** in one instance.

### 1.1 Program Selection (MIDI Notes 0-127)
- **Technical Logic:** Every MIDI note corresponds to an independent patch.
- **The "Global" Link:** While each patch is unique, they all share the **Master Pitch** and **Master Volume** controls.
- **Master Tip:** Use the **Global Transpose** to shift your entire custom drum kit to match the key of your track (e.g., shifting all drum fundamental frequencies by +2 semitones).

---

## 2. THE DUAL OSCILLATOR ENGINE (The Body & Strike)
The engine uses two oscillators designed to mimic the interaction of a drum beater and a drum head.

### 2.1 Osc 1 (The Body Frequency)
- **Range:** 20Hz to 10,000Hz.
- **Physics:** Determines the fundamental pitch. For Kicks, set this to 50-60Hz. For Snares, 150-250Hz.
- **The "Vibe" Scale:** 
    - **Low (<100Hz):** Sub-power.
    - **Mid (200-800Hz):** Wooden/Organic "thud."
    - **High (>1000Hz):** Metallic "ping."

### 2.2 Osc 2 (The Strike / FM Frequency)
- **Technical Logic:** Modulates Osc 1 to create inharmonic "clash."
- **Master Strategy:** Set Osc 2 to a very high frequency (~2000Hz) with a short decay to create the "Snap" of a modern Trap snare.

---

## 3. THE NOISE GENERATOR (The Friction)
Noise is the chaotic element that makes synthesized drums sound "real."

### 3.1 Noise Amount
- **Type:** Internal White Noise source.
- **Internal Routing:** The noise passes through the filter *after* the oscillators.
- **R&B Secret:** Set Noise to 100% and Decay to 5% for a "whispering" hi-hat that sounds incredibly expensive and smooth.

---

## 4. THE ENVELOPE SECTION (The Temporal Shaper)
### 4.1 Decay (The Primary Control)
- **Technical Range:** 0% to 100% (Linear to Logarithmic curve mapping).
- **The Physics of "Boom":** 
    - **0-20%:** Tight "Staccato" hits (IDM, Tech-Rap).
    - **20-50%:** Natural "Studio" decay (Boom Bap, Soul).
    - **50-100%:** "808 Style" sub-decay (Trap, Moody R&B).
- **Master Tip:** For extra "pop," keep your MIDI note length in the Piano Roll very short. DrumSynth Live responds to the *Note On* trigger, but its decay is internal.

---

## 5. THE RESONANT FILTER (The Shell)
The filter defines the "material" of the drum shell.

### 5.1 Cutoff Frequency
- **Role:** Sets the brightness of the noise and oscillator combination.
- **The "Wooden" Rule:** For R&B rimshots, set Cutoff to ~1500Hz to remove "plastic" high-end artifacts.

### 5.2 Resonance (Res)
- **Range:** 0% to 100%.
- **Self-Oscillation Logic:** At values >90%, the filter will "ring" at its cutoff frequency. 
- **Production Hack:** Use high resonance on high-pitched noise to create "Resonant Shakers" that sound like psychedelic aliens (perfect for trippy Hip-Hop).

---

## 6. PERFORMANCE & VELOCITY MAPPING
### 6.1 Internal Velocity Tracking
- **Hard-Wired Logic:** DrumSynth Live maps MIDI Velocity to:
    1. **Volume** (Exponential mapping).
    2. **Filter Cutoff** (Linear mapping).
    3. **Noise Amount** (Linear mapping).
- **The "Human" Secret:** To make your drums sound like a real drummer, vary your velocities by at least 20%. The plugin will automatically make softer hits "darker" and "cleaner," mimicking a real physical impact.

---

## 7. GLOBAL MASTER CONTROLS
### 7.1 Master Pitch
- **Range:** ±12 Semitones.
- **Usage:** Essential for "Tuning your drums to the song." A snare that is slightly out of tune can ruin a professional R&B track.

---

## 8. HIDDEN RIGHT-CLICK MENUS
- **Right-Click Program Name:** Allows you to 'Randomize' the patch. This is an incredible tool for finding unique, psychedelic percussion sounds you never would have designed manually.
- **Right-Click Program Grid:** Allows for 'Copy/Paste' of patches between different MIDI notes.

---

## 9. TROUBLESHOOTING & OPTIMIZATION
- **Audio Clicks:** Usually caused by a Decay that is too short (ending before the waveform hits zero). Increase Decay by 1-2%.
- **CPU Overload:** Only happens if you are triggering 20+ programs simultaneously with long decays. If this occurs, use the **Fruity Limiter** post-FX to control the sum.

---

## 10. SUMMARY: THE "VIBE" PRESETS
- **THE "METRO" KICK:** Osc 1 (55Hz), Osc 2 (800Hz), Noise (2%), Decay (45%), Cutoff (500Hz).
- **THE "NEO-SOUL" RIM:** Osc 1 (600Hz), Osc 2 (1200Hz), Noise (15%), Decay (10%), Cutoff (1500Hz, Res 20%).
- **THE "GLITCH" SHAKER:** Osc 1 (4500Hz), Noise (100%), Decay (5%), Cutoff (8000Hz, Res 95%).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** DrumSynth Live, Percussion Synthesis, Physical Modeling, Drum Design, MIDI Mapping, R&B Production.
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: DrumSynth Live

| Parameter | Section | Description | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Osc 1 Freq** | Osc 1 | Pitch of the sine/noise. | **Moody** (Lows). | Sub presence. |
| **Osc 1 Sweep** | Osc 1 | Pitch drop amount. | **Upbeat** (Punch). | Transient thump. |
| **Osc 2 Type** | Osc 2 | Noise or Osc mode. | **Psychedelic** | Sizzle/Texture. |
| **Retrig Count** | Retrig | Number of repeats. | **Upbeat** (Claps). | Thickness. |
| **Retrig Rate** | Retrig | Speed of repeats. | **Jazzy** (Flams). | Timing. |
| **Tone** | Filter | HP / LP Filter. | **Moody** (Darkness). | Frequency pocket.|
| **Morph To** | Performance| Selects target patch. | **Psychedelic** | Sound evolution. |

## Mix Impact Tags
*   **Punch:** Driven by the Osc 1 Sweep and "Click" amount.
*   **Width:** Synthesis is mono by default; use Mixer Panning for width.
*   **Clarity:** Use the Tone knob to High-Pass hi-hats at 1kHz. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\drumsynth-live-specs.json

```json
{
  "plugin": {
    "name": "Fruity DrumSynth Live",
    "category": "Instrument",
    "type": "Percussion Synthesizer",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20DrumSynth%20Live.htm"
  },
  "parameters": {
    "perProgram": [
      {"id": "osc1", "name": "Oscillator 1", "unit": "Hz"},
      {"id": "osc2", "name": "Oscillator 2", "unit": "Hz"},
      {"id": "noise", "name": "Noise Amount", "range": "0-100%"},
      {"id": "decay", "name": "Decay", "range": "0-100%"},
      {"id": "cutoff", "name": "Filter Cutoff"},
      {"id": "res", "name": "Filter Resonance"}
    ],
    "global": [
      {"id": "masterPitch", "name": "Master Pitch"},
      {"id": "masterVol", "name": "Master Volume"}
    ]
  },
  "midiMapping": {
    "notes": "0-127",
    "programs": 128
  }
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity DrumSynth Live",
  "category": "Drum Synthesizer",
  "parameters": [
    {
      "section": "Oscillator 1",
      "id": "osc1_freq",
      "name": "Frequency",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Base pitch or filter center."
    },
    {
      "section": "Oscillator 1",
      "id": "osc1_mode",
      "name": "Noise/Sweep",
      "options": ["Sweep Tone", "Noise"],
      "description": "Oscillator type."
    },
    {
      "section": "Oscillator 1",
      "id": "osc1_decay",
      "name": "Decay",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Amp envelope decay."
    },
    {
      "section": "Oscillator 2",
      "id": "osc2_ring",
      "name": "Ring Mod",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Modulation amount (Osc1 x Osc2)."
    },
    {
      "section": "Trigger",
      "id": "voice_mode",
      "name": "Polyphony",
      "options": ["Mono", "Poly", "Group 1", "Group 2", "Group 3", "Group 4"],
      "description": "Choke group assignment."
    },
    {
      "section": "Morph",
      "id": "morph_amt",
      "name": "Morph Amount",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Blend synthesis state to target patch."
    },
    {
      "section": "Output",
      "id": "send_track",
      "name": "Send Offset",
      "range": { "min": 0, "max": 4, "unit": "Tracks" },
      "description": "Relative Mixer Track offset."
    }
  ]
}

```

---

## FILE: 02-Data\presets\drum-archetypes.json

```json
{
  "archetypes": [
    {
      "name": "Heavy Analog Kick",
      "program": "C3",
      "settings": {
        "osc1": "55Hz",
        "osc2": "300Hz",
        "decay": "60%",
        "noise": "5%"
      }
    },
    {
      "name": "TR-808 Snare",
      "program": "D3",
      "settings": {
        "osc1": "180Hz",
        "noise": "70%",
        "decay": "25%",
        "cutoff": "3000Hz"
      }
    }
  ]
}

```

---

## FILE: 02-Data\presets\psychedelic-drum-patches.json

```json
{
  "psychedelicPatches": [
    {
      "name": "Drunken Tom",
      "settings": {
        "osc1": "80Hz",
        "osc2": "Link to LFO for pitch drift",
        "noise": "20%",
        "decay": "70%"
      },
      "vibe": "Trippy, pitch-sliding low percussion."
    },
    {
      "name": "Alien Shaker",
      "settings": {
        "osc1": "4500Hz",
        "noise": "100%",
        "res": "95%",
        "decay": "5%"
      },
      "vibe": "Resonant, metallic noise bursts."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (DrumSynth Live)

## Rule 1: Tuning the Kick
*   **Rule:** The Kick must match the root note of the song.
*   **Application:** Use **Osc 1** in Sine mode. Adjust the **Freq** knob while looking at a tuner (Wave Candy) to hit the exact note (e.g., C1 = 32Hz).

## Rule 2: The "Rap Clap" Offset
*   **Rule:** Claps should feel "wide" even if they are mono.
*   **Application:** Use **Retrigger Count = 3**. Set the **Rate** so the three hits are barely distinguishable. This creates a "chorus" effect that sounds fuller in the mix.

## Rule 3: Hi-Hat Decay Logic
*   **Rule:** Closed hats should be sharp; Open hats should ring.
*   **Application:** Map **Velocity** to **Osc 2 Env Decay**. This allows you to play "Closed" and "Open" sounds using the same key just by changing how hard you hit the note.

## Rule 4: Transient Safety
*   **Rule:** Synthesized drums can have "perfect" transients that clip digital limiters.
*   **Move:** Use the **Click** knob carefully. If the kick is "clicking" too hard, it will eat up your headroom. Lower it until the "thump" returns. [SRC: REPUTABLE]

## Rule 5: Mono Compatibility
*   **Rule:** Sub-bass synthesized kicks must stay 100% Mono.
*   **Application:** Never put stereo effects (like Chorus or Reverb) directly on the DrumSynth mixer track if you are generating kicks there. Use a separate track for the sub. [SRC: IL-MAN]

```

---

## FILE: 02-Data\rules\drum-design-rules.json

```json
{
  "rules": [
    {
      "scenario": "Drums sound too robotic",
      "action": "Vary MIDI velocity; DrumSynth Live uses velocity to scale filter cutoff and noise amount."
    },
    {
      "scenario": "Kick clashing with bass",
      "action": "Use Global Transpose or adjust Osc 1 to match project key."
    }
  ]
}

```

---

## FILE: 02-Data\rules\layering-rules.json

```json
{
  "layeringRules": [
    {
      "objective": "Layering with a weak kick sample",
      "action": "Use DrumSynth Live for the sub-frequency (50-60Hz) only. Set Noise to 0% and Resonance to 10%."
    },
    {
      "objective": "Creating 'Ghost' Snare rolls",
      "action": "Set Decay to <15% and increase the Filter Cutoff. Lower MIDI velocity to make the rolls feel distant."
    }
  ]
}

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity DrumSynth Live

## 1. Building a Custom Kit

1.  **Reset:** Start with a blank preset (or Default).
2.  **Kick (C4):**
    *   Select C4.
    *   OSC 1: Sweep Tone. Dec: Short. Tuning: 50Hz.
3.  **Snare (D4):**
    *   Select D4.
    *   OSC 1: Noise. Dec: Medium.
    *   OSC 2: Ring Mod. Pitch: High.
4.  **Hats (F#4):**
    *   Select F#4.
    *   OSC 1: Noise. Filter: High Pass (use Tone Knob).
5.  **Save:** Save the preset as "My DrumSynth Kit". Now you have a lightweight synthesized kit.

## 2. Multi-Out Routing (Crucial)

Unlike FPC, output routing is per-key.

1.  **Goal:** Process Kick and Snare separately.
2.  **Action:**
    *   Select Kick Key (C4).
    *   Look at **Output Settings -> Send To**.
    *   Set to Offset **1**. (This sends to the plugin's mixer track + 1).
    *   Select Snare Key (D4).
    *   Set to Offset **2**.
3.  **Mixer:** If DrumSynth is on Track 10, Kick goes to 11, Snare goes to 12.

## 3. The "Retrigger" Roll

1.  **Feature:** Under **Trigger Settings**, use **Count**.
2.  **Setting:** Set Count to 4. Set Rate to Fast.
3.  **Play:** Hit the key once.
4.  **Result:** It plays a rapid-fire burst (Brrrrrap).
5.  **Automation:** Automate the **Rate** knob to create rising drill fills.

## 4. Random Phase "Click"

1.  **Knob:** **Click Amount** (in Trigger section).
2.  **Setting:** Max (Right).
3.  **Effect:** Every time the note triggers, the start phase of the oscillators is randomized.
4.  **Why:** This simulates the subtle variation of hitting a drum skin in different spots, removing the "Machine Gun" effect.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Perfect Rap Clap Synthesis (DrumSynth Live)

## Routing Context
*   **Target:** A modern, crisp rap clap.
*   **Setup:** Use MIDI Key C4.

## Step-by-Step Setup
1.  Initialize **Fruity DrumSynth Live**.
2.  **Oscillator 2 (Noise Engine):**
    *   Set **Type** to `Noise`.
    *   Set **Env Decay** to `200ms`.
    *   Set **Tone** to `High Pass` (move knob to 3 o'clock).
3.  **Retrigger Section (The Secret Sauce):**
    *   Set **Count** to `3`.
    *   Set **Rate** to `12ms`.
4.  **Mixing:**
    *   Turn **Osc 1 Volume** to `0`. (We only want noise for this clap).
    *   Increase **Click** amount to `10%` for transient snap.

## What to Listen For
*   The clap should hit with a distinct "tri-trigger" sound. It adds thickness and feels more human than a single noise burst.

## Variations
*   **Snare Layer:** Turn **Osc 1** (Sine) back up to 20% and set Freq to 200Hz to add "thump" to the clap.
*   **Distorted Clap:** Place **Fruity Fast Dist** after DrumSynth in the mixer.

## Pitfalls + Fixes
*   **Too Much Tail:** If it sounds like a crash cymbal, lower the **Env Decay** slider. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe: Psychedelic Drum Morphing (DrumSynth Live)

## The Concept
Using the Morph wheel to transform a standard kit into an abstract soundscape during a transition.

## Step-by-Step Setup
1.  **Patch 1 (C5):** Create a standard Hi-Hat (Noise, short decay).
2.  **Patch 2 (C6):** Create a "Laser" SFX (Sine, high Sweep amount, long decay).
3.  Go back to **Patch 1**.
4.  In the **Morph To** dropdown, select the note for **Patch 2**.
5.  Right-click the **Bend wheel** -> **Create Automation Clip**.

## Performance
1.  In the Playlist, automate the wheel to move from 0 to 100% over 8 bars.
2.  **Listen For:** The hi-hat will slowly gain "tone," the pitch will start sweeping more violently, and it will eventually become the laser sound.

## Vibe Check
*   **Psychedelic:** This creates a "melted" rhythmic feel that is perfect for bridge sections in trippy R&B.

## Automation Idea
*   Link the **Morph wheel** to a **Fruity Peak Controller** on the Snare track so the hats morph only when the snare hits. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\analog-kick-design.md

```markdown
# Designing an Analog Kick Workflow

## Goal
Synthesize a punchy, analog-style kick drum from scratch using DrumSynth Live.

## Steps
1. **Initialize**: Select a MIDI note (e.g., C5).
2. **The Fundamental (Osc 1)**:
   - Set **Osc 1** to ~55Hz (A1).
   - Set **Decay** to 40%.
3. **The Transient (Osc 2)**:
   - Set **Osc 2** to a higher frequency (~800Hz).
   - Set the **Osc 2 Decay** to be very fast (5-10%). This creates the "pop".
4. **Tone Shaping**:
   - Add **5% Noise** to give it some "air".
   - Use the **Filter** to cut everything above 2kHz to keep it sub-heavy.
5. **Expression**:
   - In the FL Studio Piano Roll, vary the velocities of your kick hits.
   - You should hear the "pop" (Osc 2) becoming more or less prominent based on how hard you hit the key.

## Pro Tip
You can layer DrumSynth Live with **Fruity Blood Overdrive** to turn this clean analog kick into a distorted Hardcore or Industrial kick.

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Workflow: 808-Style Tuned Kick (DrumSynth Live)

## The Concept
Synthesizing a deep sub-bass kick that is perfectly in key with your track.

## Step-by-Step
1.  Set **Osc 1** to `Sine`.
2.  Set **Freq** to the root note of your song (e.g., F1 = 43.6Hz).
3.  Set **Env Decay** to `800ms`.
4.  Set **Sweep** to `30%`. (This makes the pitch drop into the sub note).
5.  Turn **Osc 2** volume to `0`.
6.  **Tweak:** Adjust **Click** to `5%` to ensure the sub-kick can be heard on small speakers.

## Vibe Check
*   **Moody / Vibey:** Provides a stable, clean low-end foundation that feels "expensive" and controlled.

## Pitfalls
*   **Pitch Clash:** If the kick is out of tune, the song will feel "uneasy." Always verify the Freq with a tuner plugin like **GTune** or **Wave Candy**. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\iconic-hardware-modeling.md

```markdown
# Masterclass: Modeling Iconic Hardware Drum Machines in Fruity DrumSynth Live

## 1. Executive Summary: The Digital Time Machine
The Roland TR-808, TR-909, and TR-606 are the foundations of Hip-Hop, Techno, and R&B. While many producers use samples, elite producers synthesize these sounds to gain control over the **Decay, Tuning, and Snap.** Fruity DrumSynth Live’s hybrid engine is capable of 99% accuracy in replicating these circuits. This guide provides the exact "DNA" parameter settings to rebuild these legends from scratch.

---

## 2. Replicating the TR-808 Kick (The Sub King)
### 2.1 The Physics of the 808
The original 808 kick used a "Twin-T" bridge oscillator that produced a pure sine wave with a long, exponential decay.
- **Osc 1 (The Sub):** Set to **55Hz** (A1).
- **Osc 2 (The Impact):** Set to **110Hz** (One octave above).
- **Modulation:** Set to **0%**. We want a pure sine relationship.
- **Decay:** Set to **85%**. This is the legendary long 808 tail.
- **Noise:** Set to **0%**. The 808 kick is famous for its clean low-end.
- **Filter Cutoff:** Set to **200Hz** (Low-Pass). This ensures no high-frequency artifacts escape.

---

## 3. Replicating the TR-909 Snare (The House Punch)
### 3.1 The Physics of the 909
The 909 snare combined two oscillators with a white noise burst.
- **Osc 1:** **180Hz**.
- **Osc 2:** **330Hz**. (The Inharmonic "Crack").
- **Decay:** Set to **25%**. 
- **Noise:** Set to **65%**.
- **Filter Type:** High-Pass at **1200Hz**.
- **The Secret:** Set **Resonance** to **40%**. This mimics the "Ring" of the snare wires against the drum head.

---

## 4. Replicating the TR-606 Hi-Hats (The Acid Sizzle)
### 4.1 The Physics of the 606
The 606 used six square-wave oscillators mixed together to create a "Metallic" noise source. 
- **Osc 1:** **4000Hz**.
- **Osc 2:** **8000Hz**.
- **Noise:** Set to **100%**.
- **Decay:** Set to **5%** (Closed) or **40%** (Open).
- **Filter Cutoff:** **9500Hz**.
- **Resonance:** **75%**.
- **The Result:** The high resonance on the noise creates that "tinny," aggressive sizzle that defined 80s Hip-Hop and Acid House.

---

## 5. Technical Calibration Table

| Machine Sound | Osc 1 | Osc 2 | Noise | Decay | Filter |
|---------------|-------|-------|-------|-------|--------|
| **808 Kick**  | 55Hz  | 110Hz | 0%    | 85%   | LP 200Hz |
| **808 Cowbell**| 540Hz | 800Hz | 0%    | 15%   | BP 1kHz (Res 90%)|
| **909 Snare** | 180Hz | 330Hz | 65%   | 25%   | HP 1.2kHz |
| **909 Kick**  | 65Hz  | 2500Hz| 5%    | 30%   | LP 800Hz |
| **606 Hat**   | 4kHz  | 8kHz  | 100%  | 5%    | HP 9kHz |

---

## 6. Mastering the "Velocity Soul" of Hardware
Real drum machines had subtle variations in power.
- **Action:** In DrumSynth Live, link the **Decay** knob to the **Velocity** input using an articulator.
- **The Formula:** `0.5 + (Input * 0.2)`.
- **The Vibe:** Now, as you hit the keys harder, the drum decay gets slightly longer. This mimics the "Bloom" of analog circuitry when driven hard.

---

## 7. Conclusion: The Synthesis Advantage
By modeling hardware in Fruity DrumSynth Live, you move beyond the "Flat" sound of samples. You can tune your 808 to the exact key of your bassline, or change the "Material" of your snare from wood to metal instantly. This is the hallmark of the **Elite Sound Designer.** Follow these settings to build a foundation of "Classic" sounds that carry the soul of the greats into your modern Hip-Hop and R&B productions.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** TR-808, TR-909, TR-606, Hardware Emulation, Drum Synthesis, Sound Design, FL Studio.

```

---

## FILE: 03-Workflows\by-instrument\industrial-hi-hats.md

```markdown
# Designing Industrial Hi-Hats Workflow

## Goal
Create aggressive, metallic hi-hats that sound like they've been sampled from factory machinery.

## Steps
1. **Initialize Program**: Select a high MIDI note (e.g., F#5).
2. **Frequency Foundation**:
   - Set **Osc 1** to a very high frequency (~5000Hz).
   - Set **Osc 2** to an inharmonic ratio (~8231Hz). This creates the "clash".
3. **Noise and Decay**:
   - Crank **Noise** to 100%.
   - Keep **Decay** very short (5-10%).
4. **Resonant Filtering**:
   - Set **Filter Cutoff** high (~8kHz).
   - Turn **Resonance** up to 80%. This adds a metallic "ring" to the noise.
5. **Post-Processing**:
   - Add **Fruity Fast Dist** (Type B) to the mixer track.
   - Boost the **Pre-Amp** until the hats "fuzz".

## Result
Sharp, gritty hi-hats that cut through even the densest industrial or techno mixes.

```

---

## FILE: 03-Workflows\by-instrument\moody-rnb-percussion.md

```markdown
# Masterclass: Designing Moody R&B Percussion in DrumSynth Live

## 1. Executive Summary: The "Shadow and Wood" Aesthetic
Moody R&B, Neo-Soul, and Late-Night Trap (think 6LACK, SZA, or Bryson Tiller) rely on percussion that feels "felt" rather than "heard." The goals are warmth, intimacy, and organic texture. We avoid sharp, aggressive digital "clicks" in favor of soft, "wooden" or "skin-like" timbres. This guide will show you how to use the physical modeling engine of **Fruity DrumSynth Live** to build a custom, moody percussion kit that breathes life into your tracks.

---

## 2. Phase 1: The "Soft Thud" (Designing Moody Kicks)

### 2.1 The Harmonic Choice
- **Goal:** A kick that provides low-end "weight" without a sharp "pop."
- **Osc 1:** Set to **52Hz** (G1). This is the "Sub-Sweetspot."
- **Osc 2:** Set to only **300Hz**. 
- **The Logic:** By keeping Osc 2 low, we remove the "plastic click" and replace it with a "wooden thud" that sounds like a vintage sampled kick.

### 2.2 Noise and Filtering
- **Noise:** Set to **3%**. 
- **Filter Cutoff:** Set to **450Hz**. 
- **The Physics:** This "muffles" the kick, making it sound like it's coming from behind a heavy curtain. This is the quintessential "Moody" vocal-first mix strategy.

---

## 3. Phase 2: The "Ghost Rim" (Designing Organic Snares)

### 3.1 The Shell Character
- **Goal:** A rimshot or snare that sounds like a physical piece of wood hitting another.
- **Osc 1:** **600Hz**.
- **Osc 2:** **1200Hz** (Perfect Octave).
- **The Harmonic Magic:** By using an octave ratio, the "wood" sounds harmonious and clean.

### 3.2 The Transient Shape
- **Decay:** Set to **12%**. 
- **Filter Resonance:** Set to **35%**. 
- **Result:** This adds a tiny "ring" at the end of the hit, mimicking the resonance of a wooden drum shell.

---

## 4. Phase 3: The "Whisper" Hat (Expensive High-End)

### 4.1 Friction over Frequency
- **Goal:** Hi-hats that sound like "air" rather than "metal."
- **Noise:** Crank to **100%**.
- **Osc 1:** Set very high (**6000Hz**).
- **Decay:** Set to **4%**.
- **Filter Cutoff:** Set to **9000Hz**.
- **The Rule of 9:** Keeping the cutoff high but the decay ultra-short creates a "tick" that provides rhythm without clashing with the "air" of the lead vocal.

---

## 5. Phase 4: Rhythmic Theory (The "Mood" Arrangement)

### 5.1 The Velocity "Vibe"
- **The Master Hack:** In the Piano Roll, do not keep any two hi-hats at the same velocity.
- **The Pattern:** Make every 2nd and 4th 16th-note roughly 20% quieter. 
- **The Result:** DrumSynth Live's internal mapping will make the quieter notes "darker," creating an organic "sway" that is essential for R&B.

### 5.2 Ghost Note Placement
- Use **DrumSynth Live's** low-frequency toms (Osc 1 @ 80Hz) at extremely low velocities (20%) on the "off-beats."
- This adds a subtle "rumble" that makes the track feel more "cinematic" and "moody."

---

## 6. Phase 5: Post-Processing (The "Dark Room" Chain)

### 6.1 The "Width" Stage (Fruity Delay 3)
- **Action:** Insert **Fruity Delay 3** on the percussion bus.
- **Settings:** Diffusion 60%, LP Filter 2500Hz, Wet 10%.
- **Effect:** This blurs the edges of your synthesized drums, making them sound like they were recorded in a real acoustic space.

### 6.2 The "Heat" Stage (Fruity Blood Overdrive)
- **Action:** Add 5% **Blood Overdrive**.
- **Effect:** This adds the "analog saturation" typical of old MPC samplers, gluing the synthesized drums together.

---

## 7. Mathematical Vibe Table for Moody Drums
Use these values to instantly shift the "emotion" of your percussion:

| Percussion Component | Moody Value | Upbeat Value | Psychedelic Value |
|----------------------|-------------|--------------|-------------------|
| **Noise Level**      | 10% (Intimate)| 40% (Bright) | 100% (Glitchy)    |
| **Filter Res**       | 15% (Wooden)  | 45% (Snap)   | 95% (Laser)       |
| **Decay Length**     | 30% (Natural) | 15% (Tight)  | 80% (Swelling)    |
| **Osc 2 Freq**       | 400Hz (Thud)  | 2000Hz (Pop) | 8000Hz (Clang)    |

---

## 8. Troubleshooting the Groove
- **Issue:** "The drums sound too thin."
- **Fix:** Increase the **Master Volume** inside the plugin but lower the **Filter Cutoff**. This increases the "density" of the mid-range.
- **Issue:** "The kicks are clicking."
- **Fix:** Increase the **Osc 1 Decay** by 5% and set **Osc 2 Frequency** lower.

---

## 9. Conclusion: The Living Kit
Mastering Moody R&B percussion in Fruity DrumSynth Live is about **restraint**. Avoid the high-frequency aggression of modern EDM. Instead, focus on the "low-mid weight" and the "subtle friction" of noise. By utilizing the plugin's 128-program grid to build a cohesive, velocity-responsive kit, you create a rhythmic foundation that feels alive, expensive, and perfectly "moody."

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** R&B Percussion, Moody Sound Design, DrumSynth Workflow, Neo-Soul Drums, Physical Modeling.
```

---

## FILE: 03-Workflows\by-instrument\physical-snare-resynthesis.md

```markdown
# Masterclass: Physical Snare Resynthesis in Fruity DrumSynth Live

## 1. Executive Summary: The "Anatomy of the Pop"
In high-end Hip-Hop and R&B production, the snare drum is the most critical element for "Soul" and "Energy." While samples are common, they are often "Pre-Processed" and lack the ability to be tuned to the song's key. **Fruity DrumSynth Live** allows you to perform **Physical Resynthesis**—building a snare from its atomic physical components. This guide covers the engineering of the "Shell," the "Skin," and the "Wires" to create a world-class studio snare.

---

## 2. Phase 1: Engineering the "Body" (Oscillator 1)

### 2.1 The Shell Fundamental
The "Thump" of a snare lives between 150Hz and 250Hz.
- **Action:** Set **Osc 1** to **180 Hz**.
- **The Physics:** This represents the fundamental resonance of the bottom drum head.
- **The Envelope:** Set **Decay** to **25%**. You want a solid "Pop" that doesn't linger and muddy up the vocals.

### 2.2 The "Inharmonic" Crack (Oscillator 2)
A real snare strike is a chaotic collision.
- **Action:** Set **Osc 2** to **330 Hz**.
- **The Math:** This is a non-integer ratio (~1.83x) of the fundamental. This "Clash" is what gives the snare its physical, "hard" character.

---

## 3. Phase 2: Engineering the "Wires" (The Noise Engine)

### 3.1 Simulating the Snares
The "wires" (snares) under the drum provide the high-frequency "Sizzle."
- **Noise Amount:** Set to **65%**.
- **The Filter Path:** This is the most critical step.
- **The Action:** Set the **Filter Cutoff** to **3500 Hz**.
- **The Result:** The noise is now focused in the "Presence" range. It sounds like the rattle of metal wires against a drum head.

---

## 4. Phase 3: The "Shell Material" (The Resonant Filter)

### 4.1 Wooden vs. Metal Shells
The **Resonance (Res)** knob determines the "Material" of your virtual snare.
- **The "Maple Wood" Setting:** Set **Res** to **15%**. This provides a warm, organic snare suitable for Neo-Soul and Moody R&B.
- **The "Steel Shell" Setting:** Set **Res** to **45%**. This adds a metallic "Ring" typical of modern Trap and high-energy Rap.

---

## 5. Phase 4: Dynamic Humanization (Soul)

### 5.1 The Velocity Secret
Real snares change tone based on where and how hard they are hit.
- **The Setup:** In DrumSynth Live, link the **Filter Cutoff** to **MIDI Velocity**.
- **The Physics:** Harder hits = Brighter sound.
- **The Action:** In your FL Studio Piano Roll, manually vary the velocity of your snare ghost-notes. 
- **The Result:** The snare will "Breath" with the track, providing a professional, expensive-feeling groove.

---

## 6. Mathematical Snare Calibration Table

| Snare Type | Osc 1 | Osc 2 | Noise | Res | Vibe |
|------------|-------|-------|-------|-----|------|
| **Deep Soul** | 160Hz | 300Hz | 40%   | 10% | Warm, intimate. |
| **Trap Crack**| 210Hz | 800Hz | 85%   | 50% | Hard, aggressive. |
| **Drill Pop** | 250Hz | 1200Hz| 70%   | 35% | High-pitched, tight. |
| **Lo-Fi Rim** | 600Hz | 1200Hz| 10%   | 20% | Wooden, sampled. |

---

## 7. Post-Processing: The "Expensive" Glow
- **Action:** Add a **Fruity Fast Dist (Type A)** after the DrumSynth.
- **Settings:** Mix at 15%. 
- **The Physics:** This adds "Analog Heat," simulating the sound of the snare being recorded through a high-end preamp. It "Glues" the oscillators and noise together into a singular physical object.

---

## 8. Conclusion: The Master of the Strike
Building a snare in Fruity DrumSynth Live is about **Architectural Balance.** By separating the "Body," the "Crack," and the "Sizzle," you gain total authority over your drum's identity. This moves you from being a "User of Samples" to a **"Maker of Sounds."** It is the ultimate technical edge for any producer looking to dominate the Hip-Hop and R&B landscape. Follow this masterclass, and your snares will have the professional, physical impact of a platinum studio recording.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Snare Synthesis, Drum Design, DrumSynth Workflow, Physical Modeling, R&B Drums, FL Studio Sound Design.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity DrumSynth Live

## Official Links
*   **Manual:** [DrumSynth Live Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20DrumSynth%20Live.htm)

## Source Log
1.  **[SRC: IL-MAN]:** Reference for the 120-patch keyboard mapping, Morph wheel logic, and Retrigger engine behavior.
2.  **[SRC: REPUTABLE]:** Sound On Sound (The Secrets of Drum Synthesis). Referenced for the theory of Sine+Noise drum architecture (The "Beat" and the "Body").
3.  **[SRC: REPUTABLE]:** SeamlessR (DrumSynth Basics). Reference for velocity mapping and the role of the "Click" parameter in mix presence.

## Coverage Checklist
- [x] Dual-Oscillator Synthesis Model
- [x] Retrigger Clap Workflow
- [x] Tuned 808 Workflow
- [x] Patch Copy/Paste Steps
- [x] 5 Vibe Targets
- [x] Morphing Wheel Automation
- [x] Velocity Mapping Best Practices

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: DrumSynth Live (Urban Prod)

## Vibe 1: The "Clean" R&B Kit
*   **Sound:** Soft, polished, tuned.
*   **Key Move:** Tuned Sine Kicks + 100% Diffusion Noise (Hats) + slow Attack on Snares.

## Vibe 2: The "Aggressive" Trap Kit
*   **Sound:** Punchy, clipping, hard.
*   **Key Move:** High Sweep on Kicks + Max Click + Count 3 Claps + Saturation.

## Vibe 3: The "Indie" Lo-fi Kit
*   **Sound:** Dusty, muffled, quirky.
*   **Key Move:** Dark Tone Filtering (High-cut) + Low Velocity Snares + Morphing between Toms and Woodblocks.

## Vibe 4: The "Electronic" Glitch Kit
*   **Sound:** Fast, metallic, robotic.
*   **Key Move:** High Retrigger Counts (6+) + Automated Morphing + Sine Distortion.

```

---

## FILE: 04-Reference\envelope-shaping-logic.md

```markdown
# Reference: Envelope Shaping Logic (DrumSynth Live)

Fruity DrumSynth Live uses a unique envelope architecture that differs from standard ADSR synths.

## 1. Osc 1 Envelopes (Swept Sine)
*   **Decay:** The only primary control for volume length.
*   **Sweep:** Controls the "Pitch Envelope." A higher value means the pitch starts higher and drops faster to the base Freq.
*   **Logarithmic Curve:** The envelopes are naturally logarithmic, mimicking the way a real drum head decays.

## 2. Osc 2 Envelopes (Noise)
*   **Attack:** Can be set to "soft" for shakers and "hard" for claps.
*   **Release:** Essential for snare tails and hi-hat ring.

## 3. Retrigger Logic
*   The retrigger doesn't just repeat the audio; it **re-triggers the entire envelope**. 
*   **Impact:** This means if your decay is long, the repeats will overlap and "sum," getting louder. If the decay is short, you get a clean "machine gun" effect. [SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity DrumSynth Live Mechanics

## 1. Synthesis Engine

*   **Type:** Hybrid (Subtractive + FM + PCM).
*   **Oscillators:**
    *   Hybrid Band-limited oscillators capable of seamless transitions between Sine (Sweep) and Noise.
*   **Aliasing:** The engine is older and produces characteristic digital aliasing at high frequencies, which contributes to its "Vintage Digital" sound (comparable to Nord Drum).

## 2. File Format (.ds)

*   **Legacy:** Creates patches based on the standalone **DrumSynth** software logic.
*   **Storage:** The plugin stores all 120 patch settings within the FL Studio project state (or `.fst` preset). It does *not* reference external `.ds` files during playback, making it portable.

## 3. Polyphony & Choking

*   **Voice Mode:**
    *   **Mono:** The key cuts itself.
    *   **Poly:** Overlapping layers.
    *   **Group 1-4:** Cut Groups.
        *   *Usage:* Assign Open Hat and Closed Hat to **Group 1**. The Closed Hat will silence the Open Hat tail. This is handled internally, no need for FL Studio "Cut/Cut By" tab.

## 4. Parameter Resolution

*   **MIDI:** Most parameters are mapped to MIDI CC, but due to the "Per Key" nature, automation usually affects the *currently selected key*.
*   **Warning:** Automating synth parameters (like Decay) while playing a beat might affect *all* drums if you aren't careful, or only the last played drum. Test behavior before live performance.

```

---

## FILE: 04-Reference\technical-docs\complex-shell-physics.md

```markdown
# Technical Deep-Dive: Complex Shell Physics and Helmholtz Resonance in DrumSynth Live

## 1. Introduction: The Enclosure as an Oscillator
In percussion synthesis, we often focus exclusively on the "Strike" (the membrane). However, in physical reality, the **Shell** is what provides the character and "Weight." A drum is a resonant air chamber. Fruity DrumSynth Live, through its resonant filter and dual-oscillator FM, allows us to simulate the complex interaction between the vibrating head and the enclosed air. This guide explores the mathematics of **Helmholtz Resonance**, **Shell Damping**, and the physics of "Vented" enclosures.

---

## 2. Theoretical Foundation: The Helmholtz Resonator
### 2.1 The Air Spring
When a drum head is struck, it compresses the air inside the shell. This air acts as a "Spring," pushing back against the head.
- **The Equation:** `f = (v / 2π) * sqrt(A / (V * L))`
    - `v`: Speed of sound.
    - `A`: Area of the vent (hole).
    - `V`: Volume of the shell.
    - `L`: Length of the vent neck.
- **The DrumSynth Simulation:** The **Osc 1 Frequency** represents the fundamental of the head, while the **Filter Cutoff (with high Res)** represents the Helmholtz resonance of the shell.
- **Elite R&B Tip:** To create a "Deep" sounding kick, set the Filter Cutoff slightly *below* the Osc 1 frequency. This mimics a large, deep shell that "Swallows" the tone, creating a moody, muffled thud.

---

## 3. Shell Material and Damping (The Q-Factor)
### 3.1 Material Dissipation
The material of the shell (Wood, Steel, Acrylic) determines how fast the "Shell Ring" decays.
- **Internal Friction:** In wood, the cellular structure absorbs energy. This is **High Damping**.
- **The DrumSynth Setup:** Set Filter Resonance to **10-20%**. This creates a warm, "Thuddy" resonance that mimics a high-end maple drum kit.
- **Reflection Coefficient:** In steel, energy bounces cleanly. This is **Low Damping**.
- **The DrumSynth Setup:** Set Filter Resonance to **60-80%**. This adds a metallic "Ring" or "Ping" to the snare, essential for aggressive Trap and Drill.

---

## 4. The Physics of "Tuning" the Enclosure
### 4.1 Phase Relationship between Head and Shell
In a real drum, the head and the shell can be tuned to the same note or different notes.
- **In-Phase Tuning (Unison):** Set Osc 1 and Filter Cutoff to the same frequency (e.g. 60Hz).
    - **Result:** The drum sounds "Pure" and "Huge." Maximum impact.
- **Interval Tuning (The Fifth):** Set Filter Cutoff to a ratio of 1.5x Osc 1.
    - **Result:** The drum has "Character." It sounds like a complex physical object. This is the secret to the "Expensive" percussion hits in Neo-Soul.

---

## 5. Modeling Atmospheric "Venting"
### 5.1 Air Movement and Noise
A "Vented" drum (like a kick with a hole in the front head) allows air to escape, reducing the "Spring" effect.
- **The Physics:** Venting reduces sub-bass sustain but increases the "Noise" of moving air.
- **DrumSynth Strategy:** For a vented "Modern" kick, use a shorter **Decay** (40%) but increase the **Noise** to 10% and High-Pass the filter at 400Hz.
- **The Effect:** You get the "Push" of the air without the "Boom" of the shell, creating a tight, professional Trap foundation.

---

## 6. Table of Shell Calibration Constants

| Shell Material | Res Setting | Cutoff Logic | Osc 2 Ratio | Subjective Vibe |
|----------------|-------------|--------------|--------------|-----------------|
| **Heavy Maple** | 15%         | Cutoff = Osc1| 1.50         | Warm, Vintage R&B.|
| **Thin Steel**  | 75%         | Cutoff > Osc1| 1.73         | Aggressive Trap.  |
| **Acrylic**     | 40%         | Cutoff < Osc1| 1.25         | Punchy, Modern.   |
| **Loose Skin**  | 5%          | Cutoff = Low | 1.10         | Deep, Moody Bass. |

---

## 7. Master Engineering: The "Enclosure Breath" Workflow
To make a synthesized snare sound like it's in a physical room:
1. Set Osc 1 to **200Hz**.
2. Set Filter Cutoff to **1200Hz** with **30% Resonance**.
3. **The Move:** Automate the **Filter Cutoff** by ±50Hz using a **Random LFO** (Envelope Controller).
4. **The Science:** This simulates the slight air-pressure changes in a room as the drum is played, breaking the "Static" digital feel and injecting "Acoustic Soul."

---

## 8. Conclusion: The Master of Materials
Mastering the shell physics in Fruity DrumSynth Live is about **Architecting the Chamber.** By understanding Helmholtz resonance and material damping, you move from "making a noise" to **"Building an Instrument."** It is the definitive guide for any producer who wants their Hip-Hop and R&B percussion to have the physical authority and technical depth of a multi-million dollar recording studio. Follow these principles to own the "Weight" of your sound.

---
**Document Version:** 1.0 (Quantum Engineering Tier)
**Author:** Physical Modeling Lead
**Keywords:** Helmholtz Resonance, Shell Physics, Damping, Drum Synthesis, Enclosure Math, FL Studio.

```

---

## FILE: 04-Reference\technical-docs\inharmonic-percussion-ratios.md

```markdown
# Technical Deep-Dive: Inharmonic Ratios and Physical Percussion Modeling

## 1. Introduction: The Complexity of the Clang
In subtractive synthesis, we work with the **Harmonic Series** (multiples of 1, 2, 3...). However, real-world percussion—cymbals, bells, and drum heads—is **Inharmonic**. The overtones don't land on perfect octaves; they "clash" in complex, mathematically dense patterns. Fruity DrumSynth Live uses internal FM (Frequency Modulation) between its oscillators to replicate these physics. This guide explores the specific ratios required to simulate physical materials like wood, metal, and skin.

---

## 2. The Physics of the Vibrating Membrane
### 2.1 Modes of Vibration
When you hit a drum, it vibrates in several directions simultaneously.
- **Radial Modes:** Vibration moving from the center to the edge.
- **Circular Modes:** Vibration moving in rings around the center.
- **The Result:** These modes create a series of overtones that are often at ratios like **1.59, 2.14, and 2.30** times the fundamental frequency. 

### 2.2 Replicating Modes in DrumSynth Live
In DrumSynth Live, **Oscillator 2** acts as the modulator for **Oscillator 1**.
- **The Wood Ratio (Soft):** Set Osc 2 to a ratio of **1.5** times Osc 1. This creates a "warm" inharmonicity typical of wooden blocks or thick drum skins.
- **The Metal Ratio (Hard):** Set Osc 2 to a ratio of **1.732** (Square root of 3). This creates the "ringing" inharmonicity of metal cowbells and cymbals.

---

## 3. The Mathematics of "Snap" (Transient resynthesis)
### 3.1 The Pitch-Sweep Equation
The "Click" of a drum is actually a pitch sweep that moves from a high frequency to a low one in a matter of milliseconds.
- **Linear Decay:** Sounds like a "Laser." (Bad for realism).
- **Logarithmic Decay (DrumSynth Live):** Mimics the exponential loss of energy in a physical impact.
- **The Engineering Strategy:** Set your **Max Freq** to 4x the fundamental frequency (**Freq**) and your **Pitch Decay** to under 10ms. This replicates the initial "compression" of the drum head being struck.

---

## 4. Modeling Physical Materials

| Material | Osc 2 Ratio | Noise Color | Res Character | Best Genre Use |
|----------|-------------|-------------|---------------|----------------|
| **Oak Wood** | 1.50        | Low-Pass    | Low (20%)     | Moody R&B Snares |
| **Thin Metal**| 1.73        | Band-Pass   | High (85%)    | Psychedelic Hats |
| **808 Skin** | 1.00        | Off         | Medium (40%)  | Trap Foundations |
| **Sand/Dirt** | 2.41        | White Noise | High (95%)    | Lo-Fi Textures |

---

## 5. Phase Jitter and Nonlinear Feedback
### 5.1 The Analog "Error"
DrumSynth Live includes subtle internal nonlinearities. As you increase the **Filter Resonance**, the phase of the oscillators starts to "jitter" slightly.
- **The Benefit:** This prevents the drums from sounding like a static "Loop." Every hit is mathematically slightly different, mimicking the slight changes in where a drummer hits the head.
- **The Master Tip:** Link the **Filter Cutoff** to a random (RND) articulator in **Fruity Envelope Controller** to further enhance this physical variation.

---

## 6. Conclusion: The Physical Architect
Mastering Fruity DrumSynth Live is about moving beyond "finding a sound" and entering the realm of **Material Engineering.** By understanding the inharmonic mathematics of modes and the temporal physics of pitch sweeps, you can design percussion that sounds "real" even if it doesn't exist in the physical world. It is the ultimate tool for the producer who wants their Hip-Hop and R&B percussion to have "Physical Weight" and "Acoustic Soul."

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Physical Modeling, Inharmonic Ratios, Drum Synthesis, Vibration Modes, Percussion Physics.

```

---

## FILE: 04-Reference\technical-docs\membrane-physics-and-stress.md

```markdown
# Technical Deep-Dive: Membrane Physics, Damping, and Stress-Strain Ratios

## 1. Introduction: The Mathematics of Impact
Percussion synthesis is the simulation of **Energy Dissipation**. When a physical object is struck, energy is injected into a medium (membrane, plate, or bar) and then lost to the surrounding environment through heat and sound. Fruity DrumSynth Live’s engine simulates these mechanical properties through its envelope and filter architectures. This guide explores the physical constants required to simulate "Real" world materials.

---

## 2. The Stress-Strain Relationship in Membranes
### 2.1 Young's Modulus of Synthesis
In physical modeling, the **Stiffness** of a material determines its harmonic distribution.
- **High Stiffness (Steel):** Energy travels fast. Overtones are high and sparse. 
- **Low Stiffness (Skin):** Energy travels slow. Overtones are low and dense.
- **The DrumSynth Secret:** Stiffness is represented by the **Ratio between Osc 1 and Osc 2**. A ratio of 1:4 (e.g. 200Hz and 800Hz) mimics a stiff, high-tension drum head. A ratio of 1:1.5 mimics a loose, "floppy" skin.

---

## 3. Damping and Air Resistance
### 3.1 Decay Constants (Tau)
The **Decay** knob in DrumSynth Live is a mathematical representation of the **Damping Coefficient**.
- **Internal Friction:** Energy lost within the material (Wood has high internal friction).
- **External Damping:** Energy lost to the air (Hats have high external damping).
- **Logarithmic Decay:** DrumSynth uses `A = A0 * e^(-t/τ)`. This ensures that the sound fades in a way that feels "Acoustically Natural" to the human ear.

---

## 4. Resonant Shell Physics
### 4.1 The Q-Factor of the Drum Body
The **Resonance (Res)** knob on the internal filter represents the **Q-Factor** of the drum shell.
- **Low Q (Wooden Shell):** Wide bandwidth, fast decay of resonance. Set Res to 10-20%.
- **High Q (Metal Shell):** Narrow bandwidth, long "ringing" resonance. Set Res to 70-90%.
- **Psychedelic Mastery:** Automate the Cutoff while keeping Res at 90%. This mimics a "Whistling" resonant chamber, common in trippy R&B soundscapes.

---

## 5. Material Modeling Table (Technical Constants)

| material | Stiffness Ratio | Damping (Decay) | Shell Q (Res) | Frequency Range |
|----------|-----------------|-----------------|---------------|-----------------|
| **Maple Wood** | 1.58            | 30%             | 15%           | 200 - 600 Hz    |
| **Brass Plate**| 1.73            | 10%             | 85%           | 2k - 8k Hz      |
| **Mylar Skin** | 2.14            | 60%             | 40%           | 50 - 150 Hz     |
| **Rubber**     | 1.25            | 5%              | 5%            | 100 - 300 Hz    |

---

## 6. Phase Coherence in Multi-Element Strikes
When modeling a "Complex" impact (like a snare with wires), you are summing multiple physical systems.
- **The Phase Rule:** Ensure that **Osc 1** and **Osc 2** start with the same phase (0 degrees). If they are out of phase, the initial "Snap" will be cancelled out, resulting in a "Weak" or "Hollow" drum hit.
- **Master Strategy:** Use the **Phase Reset** (internal wrapper logic) to guarantee every hit has the same technical "Impact."

---

## 7. Conclusion: The Scientist of Sound
Mastering the physics of percussion in Fruity DrumSynth Live allows you to move beyond "tweaking knobs" and start **Designing Materials.** By understanding how stiffness, damping, and Q-factor interact, you can create a virtual kit that sounds like it was built in a high-end acoustic workshop. It is the definitive guide for the producer who wants their Hip-Hop and R&B to have the weight and authority of the physical world.

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Membrane Physics, Damping Coefficients, Stress-Strain, Material Modeling, Percussion DSP.

```

---

## FILE: 04-Reference\technical-docs\percussion-physics.md

```markdown
# Percussion Synthesis Physics

## Dual Oscillator Synthesis
DrumSynth Live uses two oscillators to mimic the physics of a drum head.
- **Osc 1 (The Body):** Mimics the vibration of the large drum head.
- **Osc 2 (The Impact):** Mimics the sound of the stick or beater hitting the surface.
- **FM (Frequency Modulation):** Internal cross-modulation between these oscillators allows for the creation of non-harmonic "bell-like" tones.

## Noise Generator
The noise generator is a **White Noise** source. In percussion synthesis:
- Noise is used to simulate the **Snares** (the wires under a snare drum).
- Noise is used to simulate the **Friction** of a hi-hat or shaker.

## Envelope Curves
The decay curves are **Logarithmic**. This is critical because sound in the real world (vibrations of a string or drum head) decays exponentially. If the curves were linear, the drums would sound "synthetic" and "robotic".

## Multi-Program Architecture
Unlike most synths that share one patch per instance, DrumSynth Live stores 128 independent synthesis engines in memory. 
- **Efficiency:** It uses a "pool" of voices. If you hit 10 keys at once, the engine dynamically allocates CPU to those 10 synthesis chains and silences the rest.

```

---

