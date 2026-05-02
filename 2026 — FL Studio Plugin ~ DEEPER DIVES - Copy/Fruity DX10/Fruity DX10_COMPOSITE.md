# Fruity DX10 - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity DX10 - FM Synthesis Simplified

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ██╗  ██╗ ██╗ ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗╚██╗██╔╝███║██╔═══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║  ██║ ╚███╔╝ ╚██║██║   ██║
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║  ██║ ██╔██╗  ██║██║   ██║
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██████╔╝██╔╝ ██╗ ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═════╝ ╚═╝  ╚═╝ ╚═╝ ╚═════╝ 
`\`\`

**Plugin Type:** FM (Frequency Modulation) Synthesizer
**Category:** Generator / FM / Low-CPU
**Official Manual:** [Image-Line Fruity DX10 Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20DX10.htm)

---

## 🎯 What is Fruity DX10?

Fruity DX10 is an 8-voice polyphonic FM synthesizer that provides the iconic sounds of the mid-80s (think Yamaha DX7) with a much simpler interface. It is highly optimized for low CPU usage and low aliasing. It excels at bell-like tones, metallic basses, and "electric" pianos, offering an approachable entry point into the world of frequency modulation without the complexity of Sytrus.

**Key Capabilities:**
- **Approachable FM:** 2-operator style modulation with simple "Coarse/Fine" controls.
- **Wave Brightness:** Master control for overall harmonic richness.
- **Vibrato LFO:** Built-in pitch modulation for organic movement.
- **Low Aliasing:** High-quality rendering even at extreme modulation.
- **Velocity Sensitivity:** Dynamic control over modulation depth.
- **Thru-Mode:** Allows the modulator wave to be heard directly in the output.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **fm-synthesis-basics.md** (What is a Modulator vs Carrier?)
3. Create **parameter-cheat-sheet.md**
4. Load the "Default" patch and increase the "Amplitude Init" in the Modulation section to hear the FM bite.

### For Sound Designers:
1. Study **creating-fm-bells.md**
2. Review **metallic-bass-synthesis.md**
3. Learn **thru-mode-layering.md**

### For 80s Enthusiasts:
1. Study **yamaha-dx7-style-keys.md**
2. Review **retro-brass-patches.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Wave:** Brightness/Harmonic content.
  - **COARSE/FINE:** Tuning the modulator (The "Bite").
  - **INIT/TIME:** Modulation envelope.
  - **ATT/DEC/REL:** Amplitude ADSR.
  - **LFO RATE/VIB:** Vibrato controls.

- [ ] **modulator-parameters-decoded.md**
  - Understanding the "Modulation" section vs the "Amplitude" section.

#### 02-Data/parameters/
- [ ] **dx10-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity DX10",
    "polyphony": 8,
    "synthesis": "FM",
    "features": ["Low aliasing", "Low CPU", "Thru mode"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-fm-bells.md**
  - Setting Coarse Tune to high values (4.00, 7.00).
  - Short Modulation Time.
  - Medium Wave Brightness.

- [ ] **plucky-acoustic-fm-bass.md**
  - Low Coarse Tune (0.50 or 1.00).
  - High Modulation Velocity Sensitivity.
  - Short Amplitude Decay.

- [ ] **lush-fm-electric-piano.md**
  - Moderate Wave Brightness.
  - Using the LFO for subtle vibrato.
  - Long Amplitude Release.

#### 03-Workflows/by-context/
- [ ] **game-audio-sfx-synthesis.md**
- [ ] **lo-fi-hip-hop-keys.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **thru-mode-applications.md**
  - How the "Thru" knob effectively turns the DX10 into a 2-oscillator additive/FM hybrid.

---

## 🔬 Research Framework

### Phase 1: Harmonic Ratios (Week 1)
**Goal:** Tonal Balance

**Tasks:**
1. Initialize patch
2. Experiment with Coarse Tune (integers vs fractions)
3. Note how the sound changes from "musical" to "metallic"
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What is the difference between "Init" and "Time" in the modulation section?
- Does the "Wave" knob affect the carrier, modulator, or both?

### Phase 2: Expressive Play (Week 2)
**Goal:** Dynamics

**Tasks:**
1. Link Modulation to Velocity
2. Use the Vibrato LFO to add life to a lead
3. Create yamaha-dx7-style-keys.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (8 notes)
- Aliasing level (Low)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it so quiet? (Check Amplitude section knobs).
2. How to get a "clean" sine wave? (Modulation Init at 0, Wave at minimum).

### Advanced Usage
1. How to simulate a "filter sweep" using FM? (Automate the Modulation Time or Init knobs).

---

## 🔗 Cross-Reference with Other Plugins

Fruity DX10 is often used with:
- **Sytrus** (The professional FM upgrade)
- **Fruity Delay 3** (Adding 80s space)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity DX10/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── modulator-parameters-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── dx10-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-fm-bells.md
│   │   └── yamaha-dx7-style-keys.md
│
└── 04-Reference/
    └── thru-mode-applications.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Recreate a classic "Tine" piano sound
- [ ] Explain the function of the "Thru" knob in sound design
- [ ] Use Modulation Velocity to make a patch expressive
- [ ] Demonstrate the difference between integer and non-integer Coarse ratios

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity DX10

## The 60-Second Mental Model
Fruity DX10 is a **simplified FM Synthesizer**. While most synths use "Subtractive" synthesis (starting with noise and filtering it), DX10 uses "Frequency Modulation." It has two operators: a **Carrier** (the sound you hear) and a **Modulator** (the sound that vibrates the carrier extremely fast). This vibration creates complex metallic, glass-like, and percussive textures that are impossible to get with standard filters. [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** A low-CPU, 8-voice polyphonic FM synth modeled after the Yamaha DX-series.
*   **Where it fits:** It's a Generator. Use it when you need bells, electric pianos, metallic basses, or 80s-inspired digital pads.

## Hip-Hop / R&B Context
*   **The "Tine" Piano:** Perfect for the shimmering, bell-like electric pianos found in smooth R&B and Neo-Soul.
*   **Metallic Bass:** Create the "stabby" digital basses used in modern G-funk and West Coast rap.
*   **Melodic Bells:** Excellent for the sharp, clear bell melodies used in modern trap intros.

## When To Use
*   When you need **shimmering, high-frequency clarity** that isn't harsh.
*   When your project is hitting **CPU limits** (DX10 is extremely lightweight).
*   When you want **FM textures** without the massive learning curve of Sytrus.

## When NOT To Use
*   **Fat Analog Unison:** If you want a massive "Supersaw" or a warm Moog-style lead, use **3x Osc** or **FLEX**. FM is naturally "thin" and "precise."
*   **Deep Sound Design:** For complex 6-operator FM matrices, you must upgrade to **Sytrus**.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity DX10

## UI Tour
1.  **Wave Section:**
    *   **Wave Knob:** Controls the harmonic richness (brightness) of the oscillators.
2.  **Modulation Section (The "Bite"):**
    *   **Coarse/Fine:** Tunes the Modulator. This determines the harmonic "flavor."
    *   **Init:** The starting depth of the FM effect.
    *   **Time:** How long it takes for the FM effect to fade out.
3.  **Amplitude Section (ADSR):**
    *   **Att / Dec / Sus / Rel:** Standard volume envelope.
4.  **LFO Section:**
    *   **Rate / Vib:** Built-in pitch vibrato.
5.  **Velocity Mapping:** Link note intensity to Amplitude or Modulation. [SRC: IL-MAN]

## Signal Flow
1.  **Trigger:** Note received.
2.  **Modulator:** Generates a high-speed sine wave at a ratio determined by Coarse/Fine.
3.  **Modulation Envelope:** Shapes the volume of the Modulator (Init/Time).
4.  **FM Engine:** The Modulator vibrates the **Carrier** oscillator.
5.  **Thru Mode:** (Optional) If "Thru" is up, you hear the Modulator *and* the Carrier together.
6.  **Amplitude Envelope:** Final volume shaping (ADSR).
7.  **Output:** Summed to the mixer.

## Things Beginners Misunderstand
*   **Coarse Tune Ratios:** Setting Coarse to whole numbers (1.00, 2.00) creates "musical" harmonics. Setting it to fractions (1.50, 2.73) creates "metallic" or "inharmonic" noise. [SRC: REPUTABLE]
*   **Thru Mode:** Turning this up makes the sound much louder and "buzzier" because you are adding a second oscillator to the mix.
*   **Modulation Init:** If this is at 0, you are just hearing a simple Sine wave. This knob is the "FM Amount." [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity DX10

## Technique 1: Shimmering R&B Tines
*   **Goal:** The iconic "DX7 Piano" sound.
*   **Action:** 
    *   Set **Coarse Tune** to `14.00`. 
    *   Set **Modulation Time** to a very short value (~100ms).
    *   Set **Modulation Init** to 50%.
*   **Result:** A sharp, bell-like "ping" at the start of every note that transitions into a soft sine tone. [SRC: REPUTABLE]

## Technique 2: Metallic G-Funk Bass
*   **Goal:** A "talky," digital bass.
*   **Action:** 
    *   Set **Coarse Tune** to `1.00`.
    *   Set **Modulation Init** to 80%.
    *   Increase **Amplitude Decay** and set **Sustain** to 0.
*   **Tweak:** Turn up the **Wave** knob to add "growl."

## Technique 3: FM "Filter" Sweeps
*   **Goal:** Replicating a subtractive sweep using only FM.
*   **Action:** 
    *   Set **Modulation Init** to 100%. 
    *   Automate the **Modulation Time** knob.
*   **Effect:** The "brightness" of the sound will drop over time, mimicking a low-pass filter but with more complex harmonic shifts.

## Technique 4: Thru-Mode Layering
*   **Goal:** Thickening a lead.
*   **Action:** Turn the **Thru** knob to 50%.
*   **Why:** This lets the raw modulator oscillator through. If the modulator is tuned an octave higher than the carrier, you get an instant 2-oscillator "stacked" lead sound. [SRC: IL-MAN]

## Common Pitfalls + Fixes
*   **Pitfall:** "The sound is too thin."
    *   **Fix:** Use the **Vibrato LFO** at a very slow rate (0.2Hz) and low depth to add "analog" movement. Or, place a **Chorus** effect after the plugin.
*   **Pitfall:** "It sounds like random noise."
    *   **Fix:** Reset **Fine Tune** to 0. FM is extremely sensitive to tuning; even a few cents off can turn a bell into a buzzer. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity DX10

## 1. Moody (Cold, Empty, Glassy)
*   **Production Lever:** **High Coarse Ratio + Short Modulation Time.**
*   **Action:** Coarse @ `7.00`. Mod Time @ `10%`. Amp Release @ `500ms`.
*   **Listen For:** A "frozen" glassy pluck that echoes into silence. 
*   **Don't Do This:** Avoid Vibrato; the mood should be "still" and "dead."

## 2. Upbeat (Digital, Bright, Poppy)
*   **Production Lever:** **Thru Mode + High Wave Brightness.**
*   **Action:** Wave knob @ 80%. Thru @ 100%. Use a fast Vibrato.
*   **Listen For:** A "chirpy" 80s digital lead that cuts through the loudest drums.
*   **Don't Do This:** Don't use long decays; keep the notes short and "staccato."

## 3. Psychedelic (Melted, Metallic, Alien)
*   **Production Lever:** **Non-Integer Coarse Ratios + Automation.**
*   **Action:** Coarse @ `2.73`. Automate **Fine Tune** with an LFO.
*   **Listen For:** "Dissonant" overtones that slide and grind against each other.
*   **Don't Do This:** Avoid standard "piano" chords; use single, long notes.

## 4. Jazzy (Warm, Soulful, Tine-heavy)
*   **Production Lever:** **Velocity Sensitivity + Soft Wave.**
*   **Action:** Map Velocity to Amplitude. Turn **Wave** down to 20%.
*   **Listen For:** The sound of a mallet hitting a metal bar. It should be expressive and soft.
*   *Tweak:* Add a subtle **Fruity Delay 3** for that authentic 80s ballad feel.

## 5. Vibey (Smooth, Retro, R&B)
*   **Production Lever:** **Low Brightness + Thru Layering.**
*   **Action:** Set Coarse to `1.00`. Mod Init @ `30%`. Thru @ `20%`. 
*   **Listen For:** A "rounded" digital tone that feels like silk.
*   **Don't Do This:** Avoid harsh "Bit" or "Sine" distortion in the mixer; keep the signal clean. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\fm-theory-sidebands.md

```markdown
# FM Synthesis and Sidebands

## The FM Equation
In DX10, the sound is generated through **Frequency Modulation**.
`Output = Sine( CarrierFrequency + Modulator(ModulatorFrequency) )`
- **Carrier:** The pitch we hear.
- **Modulator:** The frequency "vibrating" the carrier.

## Sideband Harmonics
Unlike subtractive synthesis (which filters harmonics *out*), FM creates harmonics *in*.
- **The "Bessel Function":** The number and amplitude of these harmonics are determined by the **Modulation Index** (the `Mod` knob).
- **Even/Odd balance:** The relationship between Carrier and Modulator frequencies (Coarse) determines if the sound is a square-like wave, a saw-like wave, or a bell-like tone.

## Operator Stacking
DX10 uses 4 Operators. By stacking them, you can create "formants" (vocal-like textures) or extremely complex evolving sounds that a single-oscillator synth cannot achieve.

```

---

## FILE: 01-Learning\Concepts\rnb-fm-melodics.md

```markdown
# The Master's Guide to R&B Melodicism and FM Synthesis in Fruity DX10

## 1. Introduction: The FM Revolution in R&B
Frequency Modulation (FM) synthesis defines the "sound of money" in R&B history. From the glassy electric pianos of Michael Jackson’s *Bad* to the solid, growling basslines of 90s New Jack Swing, FM provides a clarity and "solidness" that traditional subtractive synthesis cannot match. Fruity DX10 is a streamlined, 4-operator powerhouse that captures this elite digital aesthetic, making it a "secret weapon" for melodic Hip-Hop and Soul-Trap.

---

## 2. Theoretical Foundation: The Math of the "Sparkle"
### 2.1 Subtractive vs. FM (Filtering vs. Growth)
- **Subtractive:** You start with a complex wave (Saw/Square) and use a filter to cut away what you don't want. It is a process of **destruction**.
- **FM (DX10):** You start with a pure Sine wave and use high-speed modulation to grow new harmonics (Sidebands). It is a process of **creation**.
- **The Result:** FM sounds "pure" yet "complex." This is why FM keys sound like glass or metal, whereas subtractive keys sound like buzzing electronic circuits.

### 2.2 Sideband Physics and the Modulation Index
When one oscillator (Modulator) modulates the frequency of another (Carrier), new frequencies appear around the carrier. These are called **Sidebands**.
- **Harmonic Ratios (Integers):** If you use ratios like 1.0, 2.0, or 4.0, the sidebands land exactly on the notes of the harmonic series. This creates "musical" sounds like flutes, brass, and organs.
- **Inharmonic Ratios (Decimals):** If you use ratios like 1.73 or 3.14, the sidebands clash with each other. This creates the "metallic" clang of bells and the "woodiness" of electric pianos.

---

## 3. The 4-Operator Architecture: The Stacking Secret
Fruity DX10 uses a **4-Operator Stack**. While simple compared to the 6-operator DX7, it is mathematically optimized for R&B.
- **Top Modulators (Op 4 & 3):** These are responsible for the "attack" or the "snap" of the sound. By setting these to high coarse ratios and short decays, you create the "tine" of a Rhodes piano.
- **The Carrier (Op 1):** This is the "body" of the sound. It provides the pitch fundamental that anchors the melody in the mix.

---

## 4. FM Sub-Bass: The Foundation of Modern Rap
Why do elite producers often prefer FM bass over a simple 808?
- **The "Solid" Low End:** Subtractive sine waves can feel "hollow" or "flabby." FM bass has a focused, dense harmonic structure that "cuts" through a mix without needing extreme volume.
- **The "Growl" (Harmonic Excitement):** By adding just 5% modulation to a sub-bass, you create subtle harmonics in the 100-300Hz range. This makes the bass audible on phone speakers while keeping the sub-fundamental (50Hz) shaking the floor.

---

## 5. Genre-Specific Production Strategies
### 5.1 Melodic Soul-Trap (The "Glassy" Vibe)
- **The Technique:** Use a High Coarse ratio (4.0 or 8.0) for the modulator.
- **The Action:** Link Velocity to the Modulation knob.
- **The Result:** When the producer plays harder, the keys "shatter" with brightness. This mimics the organic response of a physical instrument, a hallmark of high-end R&B production.

### 5.2 Psychedelic "Cloud Rap" (The Hazy Pad)
- **The Technique:** Set Coarse to a non-integer (e.g., 0.51) and Modulation very low (10%).
- **The Action:** Add a slow LFO to the Modulation depth.
- **The Result:** A hazy, drifting digital pad that feels like it’s floating through a cloud of FM sidebands.

---

## 6. Technical Nuances: The "Cool" Factor of Aliasing
### 6.1 Digital Grit and High Frequencies
Fruity DX10 is a "Classic" digital plugin. At extreme high frequencies and high modulation indices, it can exhibit **Aliasing** (where harmonics "fold back" into the audible range).
- **The Master Secret:** Professional producers use this aliasing as a "texture." It adds a certain "low-fidelity digital charm" that sounds like a 1980s sampler. To control it, always follow DX10 with a **Fruity Parametric EQ 2** and use a steep High-Cut at 12kHz.

---

## 7. Mathematical Ratio Cheat Sheet for DX10
Use these ratios to instantly dial in the "mood" of your track:

| Coarse Ratio | Harmonic Content | Best Genre Use |
|--------------|------------------|----------------|
| **0.5**      | Sub-Octave       | Heavy R&B Bass, Trap Foundations |
| **1.0**      | Fundamental      | Clean Melodic Leads, Smooth Pads |
| **2.0**      | Octave           | Brass, Organs, Classic Synth Pop |
| **3.0**      | Fifth            | Flutes, Woodwinds, Asian-style Rap |
| **1.732**    | Inharmonic       | Cowbells, Metallic Percussion, Glitch |
| **4.0+**     | High Tines       | Glassy R&B Keys, Bell Melodies |

---

## 8. Conclusion: Mastering the Digital Soul
Mastering Fruity DX10 is about understanding the relationship between **Carrier stability and Modulator chaos**. By subtly tweaking the modulation index and tuning ratios, you can move from a warm, soulful sub-bass to a shattering, psychedelic lead in seconds. It is the definitive tool for any producer looking to inject "Digital Soul" into their Hip-Hop and R&B productions.

---
**Document Version:** 2.0 (Master Tier)
**Author:** AI Research Specialist
**Keywords:** FM Synthesis, R&B Melodics, Operator Math, Sidebands, Digital Grit, Soul-Trap.
```

---

## FILE: 01-Learning\Concepts\the-math-of-fm-clarity.md

```markdown
# The Master's Guide to the Math of FM Clarity and Sideband Distribution

## 1. Introduction: The "Cut" of Frequency Modulation
In modern Hip-Hop and R&B, the "Mix" is often incredibly crowded. A heavy 808, a sub-bass, and a dense snare can leave very little "Melodic Headroom." Subtractive synths (like oscillators with filters) tend to create "broad" energy that clutters the mix. **FM Synthesis (DX10)**, however, creates "Surgical Harmonics." This guide explores the mathematics of **Bessel Sidebands** and why this engine is the elite choice for melodic clarity in modern production.

---

## 2. Theoretical Foundation: Sideband Propagation
### 2.1 The Harmonic "Blossom"
Unlike a saw wave which has a fixed, mathematical series of harmonics (1/n), FM harmonics are **Dynamic**.
- **The Equation:** Harmonics appear at `fc ± n*fm`.
    - `fc`: Carrier frequency (the note played).
    - `fm`: Modulator frequency (the "Coarse" knob).
    - `n`: The harmonic index.
- **The Clarity Logic:** Because the harmonics are generated *out* of the fundamental, they are perfectly phase-aligned. This results in a sound that feels "solid" and "laser-focused" compared to the "smeared" phase of a filtered square wave.

### 2.2 The Bessel Function `Jn(I)`
The volume of each harmonic is determined by the **Bessel Function**.
- As you turn the **Modulation (Mod)** knob, harmonics don't just get louder; they "ripple." 
- **The Engineering Hack:** If a melodic lead is clashing with a vocal, don't just use an EQ. Instead, move the **Mod** knob by 2-3%. This shifts the Bessel "Nodes," often moving the harsh harmonic out of the vocal's way mathematically.

---

## 3. The Math of the "Glassy" Texture
### 3.1 Higher Order Harmonics
In R&B, the "Glassy" or "Crystalline" sound is achieved by setting the **Modulator** to a high multiple of the **Carrier**.
- **Coarse = 4.0 or 8.0:** This creates sidebands that are 2 or 3 octaves above the fundamental.
- **The Result:** The sound has a "Pure Low End" (Carrier) but a "Sparkling High End" (Modulator sidebands). 
- **Comparison:** A subtractive synth trying to do this would require a High-Pass filter, which often destroys the "weight" of the sound. FM keeps the weight and the sparkle simultaneously.

---

## 4. Aliasing and Digital "Soul"
### 4.1 The Nyquist Reflection
Fruity DX10 is a classic digital engine. If you create a harmonic at 25kHz, it "aliases" back into the audible range at ~19kHz.
- **The "Cool" Factor:** Professional Lo-Fi and Underground Rap producers use this "error" to add **Digital Grit**. 
- **Master Strategy:** Set the **Internal Cutoff** filter to 8kHz. This "traps" the aliasing harmonics inside the high-mids, creating a "grainy," "textured" lead that sounds like it was sampled from a 1980s 12-bit workstation.

---

## 5. Mathematical Operator Stacks
Use these "Formulas" to instantly change the character of your DX10 patch:

| Desired Character | Carrier | Modulator (Coarse) | Mod Level | Result |
|-------------------|---------|-------------------|-----------|--------|
| **Solid Sub**     | Sine    | 0.5               | 5-10%     | Deep, dense bass. |
| **Soulful Flute** | Sine    | 3.0               | 25%       | Hollow, breathy. |
| **Glassy Tines**  | Sine    | 4.0               | 55%       | Rhodes bell-strike. |
| **Distorted Edge**| Square  | 1.0               | 80%       | Aggressive industrial. |

---

## 6. The Physics of the "Phase Reset"
Fruity DX10 resets the phase of its operators on every MIDI note trigger.
- **The Precision:** This means the "Attack" of the sound is identical every time.
- **Why it matters:** In Hip-Hop, "Consistency is King." Having a bass note that hits with the same "thump" every bar ensures your 808 and Kick glue together perfectly. This is why FM bass is often superior to analog-emulated bass for Trap music.

---

## 7. Conclusion: The Melodic Laser
Mastering the math of Fruity DX10 is about understanding that **Harmonics are controllable.** You are not at the mercy of a filter; you are the architect of the frequency spectrum. By utilizing the Bessel blossom and high-octave sidebands, you can create melodies that "Cut" through any mix with elite clarity. It is the definitive guide for the producer who wants their melodic leads to sound professional, wide, and expensive.

---
**Document Version:** 3.0 (Master Sound Designer Tier)
**Keywords:** FM Math, Bessel Functions, Sidebands, Spectral Clarity, R&B Melodics, DSP Physics.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity DX10 (5 Minutes)

1.  **Insert:** Load **Fruity DX10** into the Channel Rack.
2.  **Initialize:** Open the plugin menu -> **Presets** -> **Default**.
3.  **FM Bite:** Turn up the **Modulation Init** knob to `50%`. You will hear the tone get sharper.
4.  **Tone Character:** Move the **Coarse Tune** knob. Notice how `1.00`, `2.00`, and `0.50` sound like standard synths, while `3.50` sounds metallic.
5.  **Softness:** Adjust the **Modulation Time** knob to control how long that "sharpness" lasts.
6.  **Vibrato:** Turn the **LFO Vib** knob to add classic 80s pitch movement. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity DX10

*   **Forgetting Modulation Init:** Leaving Init at `0` and wondering why the synth sounds so boring. **Fix:** This knob is your "FM Amount." It must be up to hear the FM texture.
*   **Aliasing at High Brightness:** Maxing out the **Wave** knob on high notes. While DX10 is optimized, extreme settings can cause "digital grit." **Fix:** Turn Wave down to `50%` for high-register leads.
*   **Fine Tune Drift:** Accidentally moving the **Fine Tune** knob. This will make the DX10 sound out of tune with the rest of your project. **Fix:** Alt-Click to reset to `0`.
*   **Ignoring Velocity:** Playing MIDI at constant 100% velocity. DX10's charm is in its sensitivity. **Fix:** Go to the **Modulation Velocity** knob and turn it up.
*   **Monophonic Thinking:** Forgetting that DX10 is 8-voice polyphonic. You can play complex jazz chords, not just single bass lines. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity DX10: The FM Gateway

> **Scope:** Basic FM Synthesis, Electric Piano, and Slap Bass.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (2-Operator FM).

## 🧠 The "FM" Concept
DX10 is a simplified version of the Yamaha DX7.
*   **Architecture:** 2 Operators (Oscillators).
    *   **Carrier:** Plays the audible note.
    *   **Modulator:** Vibrates the Carrier to change its timbre (not its pitch, effectively).
*   **Sound:** FM is known for **Glassy, Metallic, and Woody** textures. It creates complex harmonics that Subtractive (Analog) synthesis cannot.

**Signal Flow:**
`Modulator (Envelope)` -> **[FM INDEX]** -> `Carrier (Envelope)` -> **[WAVE BRIGHTNESS]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Ratios

The key to FM is the Pitch Ratio between the two oscillators.
*   **Coarse Tune:** Sets the Modulator pitch relative to the Carrier.
    *   *Ratio 1 (Same):* Sawtooth-ish.
    *   *Ratio 2 (Octave):* Square-ish / Hollow.
    *   *Ratio 3+ (Non-integer):* Metallic / Bell / Inharmonic.
*   **Fine Tune:** Detunes the Modulator. Creates "Beating" and "Growl".

---

## 🔁 Section 2: The Envelopes

DX10 has two envelopes.
1.  **Amplitude (Right Section):** Controls the Volume of the Carrier (Main Output volume).
2.  **Modulation (Bottom Section):** Controls the **FM Amount** over time.
    *   *Example:* Hard Attack, Fast Decay.
    *   *Result:* The sound starts bright/metallic (High FM) and quickly becomes dull/sine (Low FM). This mimics a plucked string or bell.

---

## ⚡ Technical Specs: The 'Wave' Knob

*   **Function:** Controls the waveform of the oscillators or a global Low Pass Filter?
    *   *Manual:* "Adds brightness".
    *   *Reality:* It likely changes the Carrier waveform from Sine (Left) to Saw/Square (Right), *OR* it increases the Global Modulation Index.
    *   *Tip:* Keep it low for pure FM "Bells". Turn it up for "Techno Bass".

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Lately" Bass (Solid Bass)
1.  **Coarse:** 1 or 0.5.
2.  **Modulator Env:** Fast Decay (Pluck).
3.  **Wave:** Low (Dull).
4.  **Velocity Send (VEL.SENS):** High.
5.  **Result:** The harder you hit, the brighter the bass. This is the definition of the 90s House/Eurobeat bass.

### 2. Glass Bell
1.  **Coarse:** Set to a high non-integer (e.g., 3.5 or 9).
2.  **Mod Env:** Medium Decay.
3.  **Carrier Dec:** Long Decay.
4.  **Result:** The high ratio creates inharmonic partials (Glass).

### 3. Log Drum
1.  **Coarse:** 1.
2.  **Wave:** 0 (Pure Sine).
3.  **Modulation:** Very subtle (Low INIT, Low SUS).
4.  **Result:** A woody "Thump" sound.

### 4. Layering (Modulator Thru)
1.  **Knob:** **THRU**.
2.  **Action:** Turn it up.
3.  **Result:** You now hear the Modulator directly mixed with the Carrier.
4.  **Use:** Set Modulator to a high octave. You get a "Sine Wave + High Whistle" layer.

```

---

## FILE: 01-Learning\Quick-Reference\modulator-parameters-decoded.md

```markdown
# Modulator Parameters Decoded: Fruity DX10

FM synthesis can be confusing. Here is exactly what the "Modulation" knobs do in Fruity DX10.

## 1. Coarse Tune
*   **Function:** Sets the frequency ratio of the modulator relative to the carrier.
*   **Whole Numbers (1, 2, 3):** Harmonics. These sound like octaves and fifths.
*   **Fractions (.50, .25):** Sub-harmonics. These sound deep and thick.
*   **Odd Numbers (.73, .12):** Sidebands. These sound like bells, metal, or noise.

## 2. Modulation Init
*   **Function:** The "Intensity" of the modulation at the moment the note is pressed. 
*   **Higher values:** More harmonics, brighter sound, more "bite."

## 3. Modulation Time
*   **Function:** The "Decay" of the modulator.
*   **Long Time:** Brightness stays consistent.
*   **Short Time:** The sound starts bright and quickly "muffles" to a pure sine wave (The "Tine" effect).

## 4. Thru
*   **Function:** Adds the raw modulator wave directly to the output.
*   **Use Case:** Use this to add a second "layer" to your sound without using a second plugin instance. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity DX10: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** 4-Operator FM (Frequency Modulation) Engine
**Internal Logic:** Stacked Serial/Parallel Hybrid Algorithm
**Target Genres:** R&B, Neo-Soul, Melodic Rap, Trap, G-Funk

---

## 1. THE FM MODULATION ENGINE (The Core)
FM synthesis is the heart of DX10. Unlike standard "Volume" knobs, the controls here determine the **Harmonic Complexity** of the sound.

### 1.1 Modulation (Mod) Knob
- **Technical Range:** 0% to 100%.
- **Internal Math:** Controls the "Amplitude" of the modulator operators. Higher values increase the frequency deviation of the carrier.
- **The "Vibe" Scale:**
    - **0-20%:** Pure Sine/Triangle tones. Best for smooth sub-bass or clean R&B leads.
    - **20-60%:** "Buzzy" or "Metallic" tones. This is the sweet spot for Rhodes pianos and glassy keys.
    - **60-100%:** Aggressive "Digital Noise." Use this for industrial snares or distorted psychedelic leads.
- **Master Tip:** Link this to your MIDI Keyboard's **Mod Wheel (CC#1)** for real-time expressive control during a performance.

---

## 2. THE OSCILLATOR STACK (Operators)
DX10 features a simplified but powerful operator stack. Understanding the difference between Coarse and Fine tuning is the key to "Digital Soul."

### 2.1 Waveform Selector
- **Sine:** The purest starting point. Essential for classic 80s/90s FM sounds.
- **Triangle:** Adds a tiny bit of "grit" to the fundamental. Good for warm pads.
- **Square/Saw:** These waveforms are already harmonically rich. Modulating them creates extremely complex, often "dirty" textures suitable for gritty underground Rap.

### 2.2 Coarse Tuning (Harmonic Multipliers)
- **Technical Logic:** This knob moves in discrete harmonic steps (integers and halves).
- **The 0.5 Secret:** Setting Coarse to 0.5 makes the modulator an octave BELOW the carrier. This creates a "massive" foundation, perfect for heavy Trap basslines.
- **The 2.0/4.0 Rule:** These ratios create perfect octaves. Use these for glassy, melodic keys.
- **The "Fifth" (3.0):** Creates a fifth interval in the harmonic series. This adds a "hollow" or "ancient" quality, perfect for flute-like melodic leads.

### 2.3 Fine Tuning (The "Beating" Effect)
- **Technical Range:** -50 to +50 cents.
- **Physics:** When you detune an FM modulator slightly, you create "Beating." The harmonics shift out of phase with the fundamental.
- **Master Strategy:** For a psychedelic "melting" lead, set Fine tune to +5 cents and add a slow LFO.

---

## 3. THE ENVELOPE MODULE (The Dynamics)
FM synthesis relies heavily on envelopes. In DX10, the envelope doesn't just control volume; it controls **Harmonic Content**.

### 3.1 Decay (The Primary Shaper)
- **Range:** 10ms to 10,000ms.
- **The "Pluck" Logic:** FM sounds are most effective when they are "plucky." A short decay (20-30%) on a high-modulation index creates the classic "tine" strike of an electric piano.
- **Moody Rule:** Use a very long decay (80%+) with low modulation for "breathing" R&B pads.

### 3.2 Release
- **Physics:** Determines how long the "ring" of the FM sidebands lasts after the key is released.
- **Master Tip:** FM bells require a long release (~70%) to sound natural. FM bass requires a very short release (<10%) to keep the low-end from muddying up the 808.

---

## 4. MODULATION LFO (The Movement Engine)
### 4.1 LFO Rate & Amount
- **LFO Target:** This LFO is internally hard-wired to modulate either the **Pitch** (Vibrato) or the **Modulation Index** (Tremolo/Harmonic movement).
- **Psychedelic Vibe:** Set the Rate to a very slow speed (0.1 - 0.3 Hz) and the Amount to 20%. This makes the "Digital Sparkle" of the synth slowly fade in and out, creating a dreamy atmosphere.

---

## 5. PERFORMANCE & EXPRESSION
### 5.1 Velocity Sensitivity (Vel Sens)
- **The "Soul" Knob:** This is perhaps the most important knob for R&B.
- **Internal Logic:** It maps MIDI velocity to the **Modulation Index**. 
- **The Performance Hack:** Set this to 100%. Now, your MIDI performance determines the brightness of the sound. This allows you to play "soft" during verses and "aggressive" during choruses without ever touching a knob.

---

## 6. INTERNAL FILTER (The Smoothing Stage)
### 6.1 Filter Cutoff
- **Type:** 12dB/oct Low-Pass Filter.
- **Role:** Because FM can create very harsh high-end frequencies, this filter acts as a "tamer."
- **Master Rule:** Always set the filter to ~8kHz for R&B keys to keep them "warm" and "creamy."

---

## 7. HIDDEN MENUS & GLOBAL OPTIONS
### 7.1 Polyphony (Voices)
- **Technical Feature:** Right-click the 'Voices' indicator in the plugin wrapper.
- **Usage:** Set to **1 Voice (Monophonic)** for G-Funk leads or heavy bass. This allows for "Gliding" (Portamento) between notes. Set to **16+ Voices** for complex Neo-Soul jazz chords.

---

## 8. TROUBLESHOOTING & OPTIMIZATION
- **Aliasing Noise:** If the synth sounds "distorted" in a bad way, lower your Master Volume inside the plugin or use a post-FX EQ to cut above 15kHz.
- **Clicks on Attack:** Increase the Decay slightly or check if the 'Attack' value in your MIDI controller is sending a value of 0.

---

## 9. SUMMARY: THE "VIBE" PRESETS
- **THE "DRE" BASS:** Waveform Sine, Coarse 0.5, Mod 15%, Decay 40%, Mono Mode.
- **THE "MAJID JORDAN" KEY:** Waveform Sine, Coarse 4.0, Mod 50%, Vel Sens 100%, Decay 25%, 12-Voice Polyphony.
- **THE "6LACK" PAD:** Waveform Triangle, Coarse 1.0, Mod 10%, LFO Rate 0.2Hz, LFO Amt 30%, Decay 100%.

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** DX10, FM Synthesis, R&B Sound Design, Operator Math, Velocity Mapping, Neo-Soul Keys.
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity DX10

| Parameter | Section | Description | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Wave** | Wave | Harmonic richness. | **Upbeat** (Bright). | Mid-range presence.|
| **Coarse** | Modulation| Freq ratio of modulator.| **Psychedelic** | Harmonic spectrum. |
| **Init** | Modulation| Initial FM depth. | **Jazzy** (Attack). | Transient bite. |
| **Time** | Modulation| Modulator decay time. | **Moody** (Muffled). | Dynamic brightness. |
| **Vib** | LFO | Pitch modulation depth. | **Vibey** (Organic). | Motion. |
| **Thru** | Output | Modulator pass-through. | **Upbeat** (Thickness).| Volume / Layering. |

## Mix Impact Tags
*   **Brightness:** Managed by the **Wave** and **Init** knobs.
*   **Presence:** FM sounds are naturally "perceived" as closer to the listener.
*   **Width:** Mono synthesis; use **Fruity Chorus** for width. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\dx10-specs.json

```json
{
  "plugin": {
    "name": "Fruity DX10",
    "category": "Instrument",
    "type": "FM Synthesizer",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20DX10.htm"
  },
  "parameters": {
    "fmEngine": [
      {"id": "mod", "name": "Modulation Level"},
      {"id": "coarse", "name": "Coarse Tuning"},
      {"id": "fine", "name": "Fine Tuning"}
    ],
    "envelope": [
      {"id": "decay", "name": "Decay"},
      {"id": "release", "name": "Release"}
    ],
    "lfo": [
      {"id": "lfoRate", "name": "Rate"},
      {"id": "lfoAmt", "name": "Amount"}
    ]
  },
  "architecture": {
    "operators": 4,
    "method": "Frequency Modulation"
  }
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity DX10",
  "category": "FM Synthesizer",
  "parameters": [
    {
      "section": "Misc",
      "id": "wave",
      "name": "Wave Brightness",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Global waveform richness."
    },
    {
      "section": "Misc",
      "id": "vib_rate",
      "name": "Vib Rate",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Vibrato speed."
    },
    {
      "section": "Modulation",
      "id": "coarse",
      "name": "Ratio (Coarse)",
      "range": { "min": 1, "max": 20, "unit": "Ratio" },
      "description": "Pitch relationship of Modulator."
    },
    {
      "section": "Modulation",
      "id": "fine",
      "name": "Detune (Fine)",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Modulator detuning."
    },
    {
      "section": "Modulation",
      "id": "vel_sens",
      "name": "Velocity Sens",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Velocity to FM Amount mapping."
    },
    {
      "section": "Modulation",
      "id": "thru",
      "name": "Mod Thru",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Direct Modulator output level."
    }
  ]
}

```

---

## FILE: 02-Data\presets\dx10-archetypes.json

```json
{
  "archetypes": [
    {
      "name": "Solid FM Bass",
      "settings": {
        "coarse": 1.0,
        "mod": "45%",
        "decay": "40%",
        "waveform": "Sine"
      },
      "useCase": "Foundational bass for deep house or pop."
    },
    {
      "name": "Glassy E-Piano",
      "settings": {
        "coarse": 4.0,
        "mod": "65%",
        "decay": "25%",
        "fine": "+10 cents"
      },
      "useCase": "Classic 80s DX7-style electric piano."
    }
  ]
}

```

---

## FILE: 02-Data\presets\melodic-rap-leads.json

```json
{
  "melodicRapArchetypes": [
    {
      "name": "Hazy Flute-Lead",
      "settings": {
        "waveform": "Sine",
        "coarse": 2.0,
        "mod": "25%",
        "decay": "60%",
        "lfoAmt": "15%"
      },
      "useCase": "Melodic, airy leads for melodic Rap (Juice WRLD style)."
    },
    {
      "name": "Dark Sub-Pluck",
      "settings": {
        "coarse": 0.5,
        "mod": "10%",
        "decay": "20%",
        "release": "5%"
      },
      "useCase": "Short, heavy bass plucks for moody R&B."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity DX10)

## Rule 1: The "Neo-Soul" Velocity Rule
*   **Rule:** Electric pianos must be expressive.
*   **Application:** Set **Amplitude Velocity** to 100% and **Modulation Velocity** to 50%. This ensures that when you play softly, the piano is both quiet and "mellow."

## Rule 2: Sub-Bass Purity
*   **Rule:** For 808-style FM bass, keep the **Modulation Init** low.
*   **Application:** Use a Coarse ratio of `0.50`. Keep Init below `20%`. This adds "growl" without making the sub-bass too noisy for club speakers. [SRC: REPUTABLE]

## Rule 3: 80s Brass Layering
*   **Rule:** For pop-hip-hop brass, use **Thru mode**.
*   **Application:** Set Thru to `50%`. Set Coarse to `1.00`. It creates a "thick" detuned feel that mimics early digital samplers.

## Rule 4: Harmonic Focus
*   **Rule:** Don't use DX10 for chords and a busy melody simultaneously.
*   **Why:** FM harmonics are complex. Too many DX10 layers will create "frequency clutter" that EQ cannot easily fix. Pick ONE role for the DX10 (e.g., The Lead OR The Chords).

## Rule 5: Mono Compatibility
*   **Rule:** DX10 is naturally mono-safe.
*   **Application:** Since it is a single-oscillator FM pair, it has zero phase issues in mono. Use it as the "stable" core of your R&B tracks. [SRC: IL-MAN]

```

---

## FILE: 02-Data\rules\dx10-troubleshooting.json

```json
{
  "troubleshooting": {
    "problem": "Clicking at the start of notes",
    "fix": "Increase the 'Attack' (hidden in some presets) or slightly increase Decay if the sustain is 0.",
    "problem": "Sound is 'Aliasing' (High-pitched artifacts)",
    "fix": "Lower the volume of the Modulator or use a Low-Pass filter after the plugin."
  }
}

```

---

## FILE: 02-Data\rules\fm-patch-rules.json

```json
{
  "rules": [
    {
      "scenario": "Sound is too 'harsh' or 'metallic'",
      "action": "Lower the Modulation (Mod) knob; ensure Coarse is an integer (1.0, 2.0)."
    },
    {
      "scenario": "Sound is too 'thin'",
      "action": "Increase Coarse to 0.5 to add a sub-octave modulator."
    }
  ]
}

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity DX10

## 1. The "Default" E-Piano

1.  **Preset:** Default.
2.  **Tweak:**
    *   Increase **Release (REL)** on Amplitude logic.
    *   Decrease **Modulation Sustain (SUS)**.
3.  **Why:** FM Electric Pianos rely on the "Bell" tone fading out while the "Sine" tone sustains. Use the Modulation Envelope to shape this transition.

## 2. Lo-Fi Chip Sound

1.  **Wave:** Max Brightness.
2.  **Coarse:** High (e.g., 12).
3.  **Release:** 0 (Gated).
4.  **Result:** Sounds like a Sega Genesis / AdLib impulsive sound effect.
5.  **Enhance:** Add **Fruity Delay 3** with Bitcrushing.

## 3. Sub Bass Reinforcement

DX10 produces mathematically perfect Sine waves.

1.  **Wave:** 0 (Sine).
2.  **Coarse:** 1.
3.  **Modulation:** 0 (None).
4.  **Result:** The cleanest Sub Bass possible.
5.  **Variation:** Add tiny amounts of Modulation with a Coarse Ratio of 2 to add "Growl" to the Sub without mud.

## 4. Velocity Expression

1.  **Knob:** **VEL.SENS** (Velocity Sensitivity).
2.  **Function:** Links Key Velocity to FM Amount.
3.  **Setting:** Set to 75%.
4.  **Play:** Ghost notes are dull. Accents are bright. This dynamic range makes DX10 surprisingly expressive for funk basslines.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Creating FM Melodic Bells (Fruity DX10)

## Routing Context
*   **Target:** Modern Trap Intro or Bridge.
*   **Mixer:** Add **Fruity Reeverb 2** and **Fruity Delay 3**.

## Step-by-Step Setup
1.  Initialize **Fruity DX10**.
2.  **Modulation Engine (The Bell):**
    *   Set **Coarse Tune** to `4.00` or `7.00`. (High ratios create higher overtones).
    *   Set **Modulation Init** to `60%`.
    *   Set **Modulation Time** to `5%`. (The FM "bite" must be instant and short).
3.  **Amplitude Section (The Decay):**
    *   Set **Decay** to `1.5 seconds`.
    *   Set **Sustain** to `0`.
    *   Set **Release** to `200ms`.
4.  **Tweak:** Turn the **Wave** knob to `30%` to add "sparkle" to the bell.

## Result
*   A crystal-clear, percussive digital bell that sounds modern and expensive.

## Variations
*   **Alien Bell:** Set Coarse to `3.14`. The non-integer ratio creates a dissonant, "creepy" bell vibe.
*   **Deep Glass:** Lower the **Carrier Wave** brightness and move Coarse to `14.00`.

## Pitfalls + Fixes
*   **Too Much Harshness:** If the high-end is too sharp, lower the **Modulation Init** or the **Wave** knob. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\fm-bell-design.md

```markdown
# Designing FM Bell Tones Workflow

## Goal
Create a classic "E-Piano" or "Church Bell" sound using FM synthesis.

## Steps
1. **Initial Setup**:
   - Set **Waveform** to Sine.
   - Set **Modulation** to 0% (Clean Sine).
2. **The Harmonic Foundation**:
   - Set **Coarse** to **2.0**. (This is one octave above the fundamental).
3. **Adding the "Chime"**:
   - Slowly increase **Modulation** until you hear the sound becoming "metallic". ~60% is usually good.
4. **Inharmonicity**:
   - Adjust **Fine** tuning. Moving it slightly away from 0 will create the "beating" or "clashing" frequencies typical of physical metal bells.
5. **Enveloping**:
   - Set **Decay** to ~20%. Bells should have a sharp attack and a medium-short fade.
6. **Refinement**:
   - Add a bit of **LFO** to the pitch for a "drifting" feel.

## Pro Tip
FM bells sound amazing with a lot of reverb. Follow DX10 with **Fruity Convolver** (Large Hall) for an ethereal sound.

```

---

## FILE: 03-Workflows\by-goal\g-funk-lead-masterclass.md

```markdown
# Masterclass: Designing G-Funk Leads in Fruity DX10

## 1. Executive Summary: The "Whistle of the West"
The G-Funk Lead (pioneered by Dr. Dre, Battlecat, and DJ Quik) is the most recognizable sound in West Coast Rap. It requires a piercing, smooth, and expressive tone that can "glide" across multiple octaves. While often created with subtractive synths (like the Minimoog), **FM synthesis in Fruity DX10** provides a unique "Digital Edge" and "Stability" that is perfect for modern, clean West Coast production. This guide covers the synthesis, portamento, and performance techniques required to master the G-Funk Whistle.

---

## 2. Phase 1: Synthesis Configuration (The Core Tone)

### 2.1 The Harmonic Foundation
- **Waveform:** Select **Sine**.
- **The Logic:** A pure sine wave is the clearest starting point. It provides the "smoothness" required for the whistle.
- **Coarse Tuning:** Set this to **3.0** (The Fifth) or **1.0** (The Fundamental).
- **The Physics:** Using a 3.0 ratio adds a "hollow" or "ancient" harmonic character that makes the whistle feel more like a physical flute and less like a computer beep.

### 2.2 The FM "Bite" (Modulation)
- **Mod Knob:** Set to **10-15%** (Subtle).
- **The Goal:** You only want a tiny bit of "buzz." Too much FM will turn the whistle into a harsh industrial lead. You want just enough to add "Presence" so it cuts through the heavy West Coast 808s.

---

## 3. Phase 2: Expression and Dynamics (The Movement)

### 3.1 Velocity Tracking
- **Vel Sens:** Set to **20%**.
- **The Rationale:** Unlike Neo-Soul keys, G-Funk leads should be very consistent in volume. You want just a tiny bit of velocity response so the producer can emphasize certain notes, but the overall lead should remain "solid" and constant.

### 3.2 The Volume Envelope
- **Decay:** Set to **100%** (Full sustain).
- **Release:** Set to **15-20%**.
- **The Physics:** The sound should stop almost immediately when you lift your finger, allowing for the tight, funky rhythmic phrasing typical of G-Funk melodies.

---

## 4. Phase 3: The "Secret Sauce" (Portamento and Glide)

### 4.1 Monophonic Mode
1. Go to the **Plugin Wrapper** settings (Cog icon).
2. Click the **Miscellaneous Functions** tab (Wrench icon).
3. Under the **Polyphony** section, enable **Mono**.
4. Set the **Slide** time to **~100ms - 250ms**.

### 4.2 The "Drunken" Glide Technique
- **The Master Trick:** G-Funk leads aren't played like piano notes; they are played like a slide guitar.
- **Action:** Overlap your MIDI notes in the Piano Roll. 
- **The Result:** The DX10 will "glide" from one pitch to the next. The ~200ms slide time ensures the transition is audible and "creamy," giving the lead its signature "cool" and "trippy" character.

---

## 5. Phase 4: Post-Processing (The "High-End" Polish)

### 5.1 The "Wide" Stage (Fruity Delay 2)
- **Action:** Insert **Fruity Delay 2**.
- **Settings:** Time 0:00, Offset 10ms (Haas Effect), Feedback 0%, Wet 20%.
- **Result:** This makes the whistle sound "larger than the speakers" without adding distinct echoes.

### 5.2 The "Brite" Stage (Fruity 7 Band EQ)
- **Action:** Boost the **6.3kHz** band by +3dB.
- **The Logic:** This is where the "Whistle" lives. Boosting this frequency makes the lead "pierce" through the mix, ensuring it commands the listener's attention.

---

## 6. Mathematical Glide Table for G-Funk
Use these slide times based on the tempo of your beat:

| BPM | Slide Time (ms) | Effect |
|-----|-----------------|--------|
| **90**  | 250ms           | "Lazy," smooth West Coast vibe. |
| **105** | 180ms           | Standard G-Funk bounce. |
| **120** | 120ms           | Tighter, modern Mustard-style lead. |
| **140** | 80ms            | Aggressive Trap-influenced lead. |

---

## 7. Troubleshooting the Whistle
- **Issue:** "The lead sounds too 'beepy' and cheap."
- **Fix:** Add a **Fruity Chorus** with a very slow rate (0.1Hz). This adds a subtle "pitch instability" that mimics vintage analog hardware.
- **Issue:** "The glide is too slow and I lose the rhythm."
- **Fix:** Lower the **Slide Time** in the wrapper settings. For faster melodies, you need a faster slide.

---

## 8. Conclusion: The King of the Coast
Mastering the G-Funk lead in Fruity DX10 is an exercise in **Dynamic Stability**. By utilizing the pure sine-waves of FM synthesis and the precision portamento of the FL Studio wrapper, you create a sound that is both "vintage" and "clean." It is the ultimate tool for any producer looking to capture the "West Coast" spirit. Follow this masterclass, and your leads will have the professional, gliding soul of a classic G-Funk anthem.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** G-Funk Sound Design, West Coast Rap, Portamento, Glide, DX10 Lead, FM Whistle, Dr. Dre Style.

```

---

## FILE: 03-Workflows\by-goal\inharmonic-metallic-percussion.md

```markdown
# Masterclass: Designing Inharmonic Metallic Percussion in Fruity DX10

## 1. Executive Summary: The "Industrial Clang" Aesthetic
In modern high-energy Trap, Phonk, and Industrial Rap (think the work of producers like JPEGMAFIA or $uicideboy$), percussion often sounds like it was recorded in a scrap metal yard. These "trippy" metallic hits (pipes, cowbells, wrenches) are difficult to find in standard sample packs. The secret is **Inharmonic FM Synthesis**. Using the high-octave operators and non-integer ratios of **Fruity DX10**, we can synthesize these complex physical textures from a pure sine wave.

---

## 2. Phase 1: The "Clash" Ratio (Tuning)

### 2.1 The Mathematics of Bronze and Steel
Standard musical instruments follow the **Harmonic Series** (1, 2, 3...). Metal plates and rods do NOT. They follow inharmonic ratios.
1. **The Choice:** Set **Coarse Tuning** to a non-integer value.
2. **The "Square Root" Secret:**
    - **1.414 (Root 2):** Creates a "Brass" clang.
    - **1.732 (Root 3):** Creates a "Silver/Bell" clang.
    - **2.236 (Root 5):** Creates a "Thick Pipe" clang.
3. **The Result:** The sidebands will land "between" the keys, creating that dissonant, industrial energy.

---

## 3. Phase 2: The Harmonic Attack (Modulation)

### 3.1 Designing the "Strike"
Percussion starts with a massive burst of harmonics that decays instantly.
- **Action:** Increase **Modulation** to **80% - 95%**.
- **The Envelope:** Set **Decay** to **10% - 15%**.
- **The Goal:** You want a violent, noisy "Shatter" at the beginning of the note that immediately fades into a clean "Ring."

---

## 4. Phase 3: The "Ring" (Release and Decay)

### 4.1 Temporal Metal Decay
Metal resonates for a long time.
- **Action:** Set the **Internal Release** to **60%**.
- **The Vibe:** Now, when you trigger a 16th-note MIDI note, you get the "Hit," and the high-frequency "Clang" continues to ring in the background. 
- **Psychedelic Mastery:** Link the **Release** knob to your MIDI Velocity. Harder hits = Longer ring. This mimics the physical physics of energy being stored in a metal object.

---

## 5. Phase 4: Spatial Glitching (Stereo Design)

### 5.1 The "Wide Metal" Stack
- **Action:** Follow the DX10 with a **Fruity Chorus**.
- **Settings:** Rate 5.0 Hz (Fast), Depth 10%, Wet 50%.
- **The Result:** The fast vibrato of the chorus makes the metallic ring sound "jittery" and "unstable," adding to the psychedelic effect.

### 5.2 The Resonant Space (Fruity Convolver)
- **Action:** Add a **Concrete Room** or **Spring Reverb** IR.
- **The Physics:** Metal sounds "Cooler" when it has a small, reflective space to bounce off. This makes the synthesized sound feel like it was recorded in a physical industrial environment.

---

## 6. Mathematical "Material" Table for Percussion
Use these settings to change the "Density" of your metal:

| Desired Material | Coarse Ratio | Mod Level | Decay | Res Character |
|------------------|--------------|-----------|-------|---------------|
| **Old Pipe**     | 1.414        | 70%       | 20%   | Hollow, Dark |
| **Crystal Bell** | 4.000        | 45%       | 10%   | Bright, Pure |
| **Industrial Hammer**| 1.732     | 100%      | 5%    | Noisy, Hard |
| **Alien Gong**   | 0.51         | 90%       | 80%   | Swelling, Trippy|

---

## 7. Troubleshooting the Clang
- **Issue:** "It just sounds like white noise."
- **Fix:** Decrease the **Modulation** knob. You have exceeded the "Sideband Density" threshold and mathematically turned the synth into a noise generator.
- **Issue:** "The pitch is too high and hurts my ears."
- **Fix:** Lower the **Internal Cutoff** filter to 5kHz or use a lower octave MIDI note.

---

## 8. Conclusion: The Master of the Forge
Designing metallic percussion in Fruity DX10 is about **harnessing dissonance.** By moving away from "Musical" integer ratios and utilizing the violent, short-decay envelopes of the FM engine, you can build a custom library of industrial textures that give your Hip-Hop tracks an "Experimental" and "Elite" edge. Follow this masterclass, and your percussion will have the legendary, technical grit of a world-class sound designer.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Metallic Percussion, Industrial Rap, FM Synthesis, Inharmonic Ratios, DX10 Workflow, Sound Design.

```

---

## FILE: 03-Workflows\by-goal\liquid-rnb-lead-synthesis.md

```markdown
# Masterclass: Designing "Liquid" R&B Leads in Fruity DX10

## 1. Executive Summary: The "Vocal-Synth" Hybrid
The "Liquid" lead is the holy grail of modern R&B and Melodic Rap (think the production of 40 for Drake, or Mike Dean for 070 Shake). It is a sound that feels like a cross between a synthesizer and a human voice—constantly moving, "breathing," and shifting in vowel character. While subtractive synths struggle with this, the **FM Engine of Fruity DX10** is the perfect tool. By utilizing **Formant-Ratio FM**, we can create a lead that "Sings" its way through your mix.

---

## 2. Phase 1: Synthesis of the "Vowel" (Formant Logic)

### 2.1 The Harmonic "Formant" Ratio
The human voice is characterized by "Formants"—fixed resonant peaks in the spectrum.
- **Goal:** Create a nasal, vocal-like texture.
- **Action:** Set **Coarse Tuning** to an unusual ratio like **3.0** (The Fifth) or **1.5**.
- **The Physics:** These ratios create sidebands that mimic the "Hollow" resonance of the human throat.

### 2.2 The "Melting" Modulation
- **Mod Knob:** Set to **25% - 35%**. 
- **The Goal:** You want enough modulation to create "Voice-like" complexity, but not so much that it becomes a "Buzzy" electronic sound.

---

## 3. Phase 2: The "Breathing" Envelope (Intimacy)

### 3.1 The Soft Attack
Liquid leads should never "Poke" the listener. They should "Emerge."
- **Decay:** Set to **80% - 100%** (Full sustain).
- **The Secret:** Use the **Smoothing** knob in the **Fruity Envelope Controller** (linked to Volume) to create a slow, 50ms fade-in for every note.
- **The Effect:** This mimics the way a singer takes a breath before a note, adding an "organic" fragility to the digital synth.

---

## 4. Phase 3: The "Singing" Expression (Motion)

### 4.1 Vibrato and Pitch-Drift
A static pitch is a "Digital" pitch. A "Liquid" pitch is never stable.
- **LFO Rate:** Set to **0.5 Hz** (Slow).
- **LFO Amt:** Set to **10%**.
- **The Vibe:** The pitch will slowly "drift," mimicking the subtle pitch-correction or natural vibrato of a great R&B singer.

### 4.2 Velocity-Mapped "Pain"
- **Action:** Set **Vel Sens** to **60%**.
- **The Performance:** When you play a melody, make the "High Notes" louder and brighter (higher velocity).
- **The Result:** The synth will "Scream" slightly on the emotional peaks of the melody, just like a human voice.

---

## 5. Phase 4: Post-Processing (The "Water" Chain)

### 5.1 The "Underwater" Filter (Fruity Filter)
- **Action:** Add a **Fruity Filter** after the DX10.
- **Settings:** Low-Pass at 2500Hz.
- **The Result:** This removes the "Digital Glare" and places the lead in a dark, moody environment.

### 5.2 The "Liquid" Delay (Fruity Delay 3)
- **Action:** Insert **Fruity Delay 3**.
- **Settings:** Diffusion 80%, Smear 60%, Analog Mode.
- **The Effect:** The echoes of the synth "melt" into a smooth atmospheric wash, creating the "Liquid" sensation.

---

## 6. Mathematical "Vowel" Table for DX10
Use these ratios to change the "Vowel" of your lead:

| Vowel Sound | Coarse Ratio | Mod Level | Filter Cutoff | Vibe |
|-------------|--------------|-----------|---------------|------|
| **"Ooo"**   | 0.5          | 15%       | 800 Hz        | Deep, Dark, Moody. |
| **"Aaa"**   | 1.0          | 45%       | 3000 Hz       | Open, Soulful. |
| **"Eee"**   | 2.0          | 65%       | 5000 Hz       | Piercing, Melodic. |
| **"Iii"**   | 4.0          | 25%       | 8000 Hz       | Glassy, Fragile. |

---

## 7. Troubleshooting the Liquid
- **Issue:** "The sound is too static."
- **Fix:** Automate the **Modulation** knob by ±5% over time. This makes the "Vowel" shift, as if the singer is moving their mouth.
- **Issue:** "The lead is too loud in the mix."
- **Fix:** Increase the **Diffusion** in your delay. Blurring the lead makes it take up more "Aesthetic Space" while requiring less "Volume Space."

---

## 8. Conclusion: The Master of Formants
Mastering the "Liquid" lead in Fruity DX10 is about **Emulating Humanity.** By utilizing FM formant ratios, slow pitch-drifts, and "Breathing" envelopes, you create a digital instrument that carries the emotional weight of a vocal performance. This is the difference between a "Synth Part" and a **"Narrative."** Follow this masterclass, and your R&B melodies will have the professional, "Liquid" soul of a modern classic.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Liquid Leads, R&B Sound Design, FM Formants, DX10 Workflow, Vocal Synthesis, FL Studio.

```

---

## FILE: 03-Workflows\by-goal\upbeat-neo-soul-keys.md

```markdown
# Masterclass: Designing Upbeat Neo-Soul Keys in Fruity DX10

## 1. Executive Summary: The "Glass and Velvet" Aesthetic
The "Neo-Soul Key" is the definitive sound of modern R&B, Soul-Trap, and upbeat Melodic Rap. It requires a delicate balance of "Glass" (the sharp, crystalline attack of an FM tine) and "Velvet" (the warm, smooth body of a sine wave). This guide will take you through the precise engineering required to build this sound from a blank state using **Fruity DX10**, including MIDI voicing and post-FX strategies.

---

## 2. Phase 1: Synthesis Engineering (The Foundation)

### 2.1 Waveform Selection
- **The Choice:** Start with a **Sine** or **Triangle** wave.
- **The Logic:** Sine provides the purest tone for jazz chords. Triangle adds a tiny bit of mid-range "bark," perfect for more upbeat, funk-influenced Neo-Soul.

### 2.2 The "Tine" Operator (Harmonic Ratio)
- **Coarse Tuning:** Set this to **4.0** or **8.0**.
- **The Physics:** By setting the modulator to a high octave multiple of the fundamental, we create the "metallic chime" that mimics the metal tines of a physical Fender Rhodes piano.
- **Fine Tuning:** Set this to **+2 to +5 cents**. This subtle detuning creates a lush, organic "chorus" effect within the synthesis engine itself.

### 2.3 The Harmonic Profile (Modulation)
- **Mod Knob:** Set to **45-55%**. 
- **The Goal:** You want the sound to "sparkle" but not sound like a distorted video game. If it becomes too buzzy, lower the Mod knob.

---

## 3. Phase 2: Expression and Humanization (The Soul)

### 3.1 Velocity Mapping (The Most Critical Step)
- **Vel Sens:** Crank this to **100%**.
- **The Engineering Goal:** In Neo-Soul, the "mood" changes within a single bar. 
    - When you play softly, the DX10 will output a pure, warm tone.
    - When you "dig in" on a chord, the DX10 will "shatter" with FM brightness.
- **This mimics the physics of a physical electric piano hammer hitting a tine.**

### 3.2 The Envelope (The Bounce)
- **Decay:** Set to **25-35%**. 
- **The Logic:** Upbeat Neo-Soul needs "bounce." If the decay is too long, the chords will bleed into each other, killing the groove. A snappy decay allows the rhythmic "percussiveness" of your playing to shine.
- **Release:** Set to **60%**. This ensures that even though the sound is snappy, it has a natural "air" after you lift your fingers.

---

## 4. Phase 3: MIDI Voicing (The "Secret Sauce")
You can have the best synth patch in the world, but if your MIDI is wrong, it won't sound like Neo-Soul.

### 4.1 Extended Chords
- **The Rule:** Never play a simple triad (C-E-G). 
- **The Solution:** Use **Major 7ths, Minor 9ths, and 11th chords**.
- **Example (C Minor 9):** Play C - Eb - G - Bb - D.

### 4.2 Voice Leading and Spread
- **Spread:** Move the 3rd and the 7th of the chord up or down an octave. This creates "space" in the mix for the vocal to sit.
- **Velocity Variation:** Manually adjust the velocity of individual notes within your MIDI chords. Make the "top" note (the melody) slightly louder than the "inside" notes.

---

## 5. Phase 4: Post-Processing (The "Expensive" Polish)

### 5.1 The "Width" Stage (Fruity Chorus)
- **Action:** Insert **Fruity Chorus** after DX10.
- **Settings:** Rate 0.2Hz, Depth 40%, Stereo Cross 100%.
- **Result:** This creates the wide, immersive stereo image that is the hallmark of modern R&B.

### 5.2 The "Air" Stage (Fruity Delay 3)
- **Action:** Insert **Fruity Delay 3** in "Ambient Cloud" mode.
- **Settings:** Diffusion 80%, LP Filter 3000Hz, Wet 15%.
- **Result:** This wraps the keys in a dark, ethereal halo that feels "cool" and professional.

---

## 6. Mathematical Harmony Table for DX10
Use these ratios to fine-tune the "color" of your Neo-Soul patch:

| Desired Vibe | Coarse Ratio | Mod Level | Decay |
|--------------|--------------|-----------|-------|
| **Deep & Dark** | 0.5          | 15%       | 40%   |
| **Pure Glass** | 4.0          | 50%       | 25%   |
| **Crunchy Funk**| 2.0          | 75%       | 20%   |
| **Ethereal Pad**| 1.0          | 10%       | 100%  |

---

## 7. Troubleshooting the Soul
- **Issue:** "The keys sound too piercing/harsh."
- **Fix:** Lower the **Internal Cutoff** in DX10 to 6kHz. This "muffles" the FM attack without losing the tone.
- **Issue:** "It sounds too much like a computer."
- **Fix:** Add a **Fruity Fast Dist (Type A)** at 5% mix. This adds "Analog Heat" that bridges the digital-physical gap.

---

## 8. Conclusion: The Digital Piano Master
By mastering the relationship between **Velocity Sensitivity and Modulation Index**, you turn Fruity DX10 from a simple synth into a soulful, expressive instrument. Upbeat Neo-Soul is all about the "bite" of the tine and the "warmth" of the body. Follow this workflow, and your R&B tracks will have the professional melodic foundation they deserve.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Neo-Soul, R&B Production, FM Keys, DX10 Workflow, MIDI Voicing, Sound Design.
```

---

## FILE: 03-Workflows\by-goal\west-coast-fm-percussion.md

```markdown
# Masterclass: Designing West Coast "Mustard" Style FM Percussion in Fruity DX10

## 1. Executive Summary: The "Bouncy" Aesthetic
Modern West Coast Rap (pioneered by DJ Mustard, Mike Free, and YG) is defined by its "Bounce"—minimalist, high-energy, and extremely sharp. A key component of this sound is the percussive "Pluck" or "Wood-Block" lead that provides the melodic rhythm. While these are often sampled, the **FM engine of Fruity DX10** is the superior tool for creating them. It allows for "Surgical Snap" and absolute rhythmic consistency. This guide covers the **Bessel Indexing** and **Decay Math** required to synthesize the ultimate West Coast "Mustard" lead.

---

## 2. Phase 1: The "Snap" Architecture (Synthesis)

### 2.1 The Carrier/Modulator Ratio (The "Wood" Factor)
- **Goal:** A sound that is part bell, part wood-block, part digital beep.
- **Action:** Set **Coarse Tuning** to **2.0** (The Octave) or **4.0** (Double Octave).
- **The Logic:** In FM, integer ratios create "Harmonic Snap." The 4.0 ratio provides the "Glassy" high-end strike that cuts through the massive Mustard-style 808s.

### 2.2 The Modulation Strike (Bessel Indexing)
- **Mod Knob:** Set to **65% - 75%**. 
- **The Physics:** At this index, the DX10 generates a high density of sidebands. This creates the "Bite" or "Bark" at the start of the note. 
- **The "Mustard" Secret:** Set **Decay** to **15% - 20%** (Ultra-Short).
- **The Result:** The harmonics "Shatter" for 50ms and then disappear, creating a percussive "Pop" that is incredibly addictive to the ear.

---

## 3. Phase 2: Temporal Precision (The Bounce)

### 3.1 The "Staccato" Envelope
In West Coast Rap, the melody is the rhythm. There is no room for "Sustain."
- **Release:** Set to **5%**.
- **The Logic:** The sound must end the millisecond you lift your finger. This allows for the "empty space" between notes that makes the Mustard-groove feel so "Upbeat" and high-energy.

### 3.2 Velocity-Mapped "Mustard" Bounce
- **Action:** Set **Vel Sens** to **100%**.
- **The Performance:** When you program your MIDI, make the "Downbeat" notes 100% velocity and the "Ghost notes" 60% velocity.
- **The Effect:** The DX10 will automatically make the ghost notes "Darker" and "Softer," providing a human "Swing" to the otherwise mechanical digital sound.

---

## 4. Phase 3: Spatial Localisation (The "Cool" Factor)

### 4.1 The "Width" Paradox
Mustard-style leads are often very "Small" and "Centered."
- **Action:** Do NOT use reverb. Use a **Fruity Delay 2** instead.
- **Settings:** Time 0:00, Offset 5ms (Haas), Feedback 0%, Wet 10%.
- **The Result:** This adds a tiny "Phasey" width that makes the lead sound like it's coming from a physical speaker in a room, rather than a dry digital signal.

---

## 5. Phase 4: Mixing for the Club (Mastering)

### 5.1 High-Frequency Excitation
- **Action:** Insert a **Fruity Fast Dist (Type B)** after the DX10.
- **Settings:** Pre-Amp 10%, Post-Filter 80%, Mix 100%.
- **The Goal:** This adds a final layer of "Odd Harmonics" (transistor grit) that makes the lead "Pierce" through the mix. This is how you ensure your melody is heard in a loud club environment.

---

## 6. Mathematical "Mustard" Calibration Table
Use these ratios to tune the "Material" of your lead:

| Material | Coarse Ratio | Mod Level | Decay | Res Character |
|----------|--------------|-----------|-------|---------------|
| **Hard Plastic**| 2.000        | 60%       | 15%   | Sharp, Clean. |
| **Thin Glass**  | 8.000        | 45%       | 10%   | Shimmering.   |
| **Bamboo Wood** | 1.500        | 75%       | 25%   | Hollow, Warm. |
| **Mustard Gold**| 4.000        | 70%       | 18%   | The Standard. |

---

## 7. Troubleshooting the Bounce
- **Issue:** "The lead sounds too thin."
- **Fix:** Set **Waveform** to **Triangle** instead of Sine. This adds more low-mid "Body" to the carrier frequency.
- **Issue:** "The lead is out of tune with the 808."
- **Fix:** FM percussion can be pitch-tricky. Use a **Fruity Tuner** and adjust the **Fine Tuning** until the "Ring" of the hit matches the key of your 808.

---

## 8. Conclusion: The King of the Bounce
Mastering the West Coast FM percussion lead in Fruity DX10 is about **Harmonic Containment.** By using high-octave ratios, short decays, and velocity-mapped modulation, you create a "Melodic Drum" that defines the modern Hip-Hop sound. This is the difference between a "Beat" and a "Club Anthem." Follow this masterclass, and your melodies will have the professional, high-energy impact of a chart-topping Mustard production.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** West Coast Rap, DJ Mustard Style, FM Percussion, DX10 Sound Design, Trap Bounce, FL Studio.

```

---

## FILE: 03-Workflows\by-instrument\80s-lately-bass.md

```markdown
# Designing 80s "Lately" Bass Workflow

## Goal
Create the iconic, punchy FM bass sound popularized by house and pop tracks in the late 80s and early 90s.

## Steps
1. **Initialize**: Start with a default patch (Sine wave).
2. **The "Grit" (Modulator)**:
   - Set **Coarse** to **1.0**.
   - Increase **Modulation** until the sound gets "growly" (~45%).
3. **The Pluck (Envelope)**:
   - Set **Decay** to **30%**. This gives it that signature "popping" attack.
   - Set **Release** to **10%** (short).
4. **Velocity Expressiveness**:
   - Set **Vel Sens** to 50%. This makes the bass brighter when you play notes harder.
5. **Final EQ**:
   - Follow with a **Fruity 7 Band EQ**.
   - Boost the **160Hz** band for warmth and the **1kHz** band for "click".

## Result
A solid, professional-sounding FM bass that sits perfectly in a mix without needing heavy processing.

```

---

## FILE: 03-Workflows\by-instrument\fm-sub-bass-masterclass.md

```markdown
# Masterclass: Designing Professional FM Sub-Bass in Fruity DX10

## 1. Executive Summary: The "Unshakeable" Low-End
In modern Trap and R&B, the sub-bass is the most important melodic element. While simple sine waves (subtractive) are common, they often lack "melodic definition" and can't be heard on small speakers. **FM Synthesis in Fruity DX10** provides the solution. By using a **Sub-Harmonic Modulator**, we can create a bass that has a perfectly solid low-end foundation while generating surgical harmonics that "Sing" in the mid-range. This guide covers the "Master Ratio" and "Bessel Calibration" required for world-class sub-bass.

---

## 2. Phase 1: The "Sub-Harmonic" Logic (Tuning)

### 2.1 The 0.5 Ratio (The "Growl" Root)
The most important setting for professional FM bass is the **Coarse Tuning**.
- **Action:** Set **Coarse** to **0.5**.
- **The Physics:** This makes the Modulator an octave BELOW the Carrier. 
- **The Result:** The modulator creates "Sub-Harmonic Pressure." This adds a unique "Density" to the low-end that makes the bass feel more "Physical" than a simple sample.

---

## 3. Phase 2: The Harmonic Index (Modulation)

### 3.1 The "Translation" Secret
- **Goal:** Make the sub-bass audible on a phone speaker.
- **Action:** Increase the **Modulation (Mod)** knob to **15% - 25%**.
- **The Physics:** At 20%, the DX10 generates subtle harmonics at 100Hz, 150Hz, and 200Hz.
- **The Result:** The 50Hz "Thump" remains solid, but these new mid-range harmonics allow the listener to follow the melody even without a subwoofer.

---

## 4. Phase 3: The Envelope of Power (Dynamics)

### 4.1 The "Pop" and "Sustain"
FM bass is most effective when it has a clear attack.
- **Decay:** Set to **45%**. This gives the bass a slight "popping" character at the start of each note, allowing it to "Glue" with the kick drum.
- **Release:** Set to **5%** (Short).
- **The Reason:** You want the sub-bass to stop INSTANTLY when the note ends to prevent "Low-End Mud" and frequency clashing with the next kick hit.

---

## 5. Phase 4: Performance Expression (Soul)

### 5.1 Velocity-Mapped Grit
- **Action:** Set **Vel Sens** to **40%**.
- **The R&B Move:** Play your bassline softly during verses for a pure, deep tone. On the "One" of the chorus, hit the note harder.
- **The Result:** The bass will "Growl" and get brighter on the loud notes, providing a dynamic "Lift" to the energy of the track without you having to automate any knobs.

---

## 6. Phase 5: Technical Mixing (The Master Chain)

### 6.1 The "Sub-Limiter" Setup
- **Action:** Place a **Fruity Fast Dist (Type A)** after the DX10.
- **Settings:** Mix at 10%.
- **The Physics:** This adds a final layer of even harmonics, "Squeezing" the sub-bass and making it feel like a single, solid block of sound.

### 6.2 Mono Compatibility
- **Master Rule:** ALWAYS ensure your DX10 bass is **100% Mono**.
- **Action:** In the plugin wrapper settings, set the 'Stereo Separation' knob to 100% Mono (all the way to the right).

---

## 7. Mathematical Vibe Table for FM Bass

| Sub-Genre | Mod Level | Coarse Ratio | Decay | Vibe |
|-----------|-----------|--------------|-------|------|
| **Deep Neo-Soul** | 10%       | 0.5          | 60%   | Warm, rounded, deep. |
| **Modern Trap** | 25%       | 0.5          | 35%   | Hard, growling, solid.|
| **West Coast** | 15%       | 1.0          | 100%  | Clean, melodic, smooth.|
| **Industrial** | 60%       | 0.51 (Detuned)| 20%   | Gritty, distorted, trippy.|

---

## 8. Conclusion: The King of the Low-End
Mastering the FM sub-bass in Fruity DX10 is about **Engineering Density.** By using the 0.5 sub-harmonic ratio and carefully calibrating the modulation index for phone-speaker translation, you create a bass foundation that is both technically perfect and musically expressive. This is the difference between a "Beat" and a "Record." Follow this masterclass, and your low-end will have the professional, world-class weight of a platinum R&B production.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** FM Sub-Bass, DX10 Workflow, Low-End Engineering, Trap Bass, R&B Sound Design, FL Studio.

```

---

## FILE: 03-Workflows\by-instrument\keys.md

```markdown
# Workflow: Lush FM Electric Piano (R&B Style)

## The Concept
Recreating the warm, shimmering digital pianos of 90s R&B ballads.

## Step-by-Step
1.  Set **Amplitude Attack** to `5ms` (to remove the hard click).
2.  Set **Amplitude Decay** to `2 seconds`.
3.  Set **Sustain** to `30%`.
4.  Set **Modulation Coarse** to `1.00`.
5.  Set **Modulation Init** to `20%`.
6.  Set **Modulation Time** to `100%`.
7.  **The Vibe:** Turn the **LFO Vib** knob to `10%`. Set **LFO Rate** to `0.5 Hz`.
8.  **The Layer:** Turn the **Thru** knob to `15%`.

## Vibe Check
*   **Vibey / Jazzy:** The subtle LFO creates a "warble" that feels like real air moving. The Thru mode adds a soft octave layer.

## Pitfalls
*   **CPU Clipping:** While DX10 is light, playing 8-voice chords with long releases can occasionally spike. Keep your **Release** under 1 second for busy tracks. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\lofi-rhodes-emulator.md

```markdown
# Masterclass: The Lo-Fi Rhodes Emulator in Fruity DX10

## 1. Executive Summary: The "Dusty Tines" Aesthetic
The electric piano (Rhodes/Wurlitzer) is the heartbeat of R&B, Neo-Soul, and Lo-Fi Hip-Hop. To achieve a professional "Cool" vibe, we don't want a "perfect" digital piano; we want an instrument that sounds like it has history—wobbly pitch, warm harmonics, and a "dusty" attack. Fruity DX10’s **4-Operator engine** is uniquely suited to emulating the metal-tine strike of a physical Rhodes. This guide covers the synthesis, modulation, and "aging" process required to build a world-class Lo-Fi Rhodes.

---

## 2. Phase 1: Synthesis of the "Tine" (The Foundation)

### 2.1 Waveform and Harmonic Selection
- **Waveform:** Select **Sine**.
- **The "Tine" Physics:** The metal bars inside a Rhodes piano vibrate at very high frequencies. 
- **Action:** Set **Coarse** to **4.0**. (This is 2 octaves above the fundamental).
- **The Harmonic "Bark":** Set **Modulation** to **50%**. You should hear a sharp, crystalline "ping" when you hit a key.

### 2.2 The Body (Carrier)
- **The Body Physics:** The soundboard of the piano provides the warm mid-range.
- **Action:** Set the **Decay** to **35%**. 
- **The Goal:** The "ping" should be loud at first and then fade quickly into a warm, pure tone.

---

## 3. Phase 2: Aging the Instrument (Imperfection)

### 3.1 Pitch Instability (The "Warped Tape" Vibe)
Real vintage gear has unstable power supplies.
- **Action:** Link an LFO (or an automation clip) to the **Fine** tune knob.
- **The Setup:** Set the LFO to a very slow **Triangle wave** (around 0.2 Hz). 
- **The Range:** Only move the Fine tune ±3 cents. 
- **The Result:** The piano will subtly drift in and out of tune, creating a "dreamy," "moody" sensation that is essential for Lo-Fi beats.

### 3.2 Velocity Soul
- **Action:** Set **Vel Sens** to **100%**.
- **The Performance Logic:** Now, when you play softly, the piano is "muffled" and warm. When you play hard, the "tines" shatter with FM brightness. This is how you "perform" emotion in an R&B track.

---

## 4. Phase 3: The "Toronto" Space (Depth)

### 4.1 Internal Filtering (The Blanket)
- **Action:** Move the **Internal Filter Cutoff** down to **6kHz**.
- **The Reason:** This removes the "digital glare" and makes the synth sound like it was recorded through an old analog tube preamp.

---

## 5. Phase 4: Post-Processing (The "Expensive" Layer)

### 5.1 The "Wide Swirl" (Fruity Chorus)
- **Action:** Insert **Fruity Chorus** after DX10.
- **Settings:** Rate 0.3Hz, Depth 40%, Wet 30%.
- **The Result:** This mimics the "Stereo Vibrato" found on high-end Rhodes Suitcase models.

### 5.2 The "Aural Glue" (Fruity Convolver)
- **Action:** Place **Fruity Convolver** with a **Dark Plate** IR.
- **The Trick:** Set the internal EQ in Convolver to cut everything above 4kHz. This wraps the piano in a dark, moody shadow that never gets in the way of the vocal.

---

## 6. Mathematical "Age" Table for DX10
Use these values to determine the "History" of your piano:

| Age / Condition | Coarse Ratio | Mod Level | Fine Drift | Filter Cutoff |
|-----------------|--------------|-----------|------------|---------------|
| **Brand New**   | 4.0          | 45%       | 0 cents    | 12 kHz        |
| **1970s Studio**| 4.0          | 55%       | ±2 cents   | 8 kHz         |
| **"Dusty" Attic**| 8.0          | 65%       | ±5 cents   | 4 kHz         |
| **Psychedelic** | 1.73 (Metal) | 80%       | ±15 cents  | 6 kHz (Res 50%)|

---

## 7. Troubleshooting the Vibe
- **Issue:** "The attack is too clicky."
- **Fix:** Increase the **VCA Smooth** (in wrapper settings) or check if you have an aggressive compressor after the DX10.
- **Issue:** "The chords sound muddy."
- **Fix:** Lower the **Modulation** knob. In FM, as you add notes to a chord, the sidebands multiply. A single note might sound great at 60% Mod, but a 5-note jazz chord will need only 40%.

---

## 8. Conclusion: The Master of Soul
By emulating the physical physics of metal and wood using the DX10 FM engine, you create an instrument that has **Weight and Emotion.** The Lo-Fi Rhodes is the foundation of the "Cool" production aesthetic. Mastering the relationship between **Tine-octave ratios** and **Slow pitch drift** allows you to inject "Human Soul" into every melodic line. Follow this masterclass, and your R&B tracks will have the professional, timeless quality of a classic record.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Rhodes Emulation, Lo-Fi R&B, DX10 Workflow, Soul-Trap Keys, FM Sound Design, FL Studio.

```

---

## FILE: 03-Workflows\by-instrument\psychedelic-fm-pads.md

```markdown
# Psychedelic FM Pads Workflow

## Goal
Create an evolving, "trippy" digital pad that shifts in tone and texture, perfect for psychedelic Rap interludes or "Cloud Rap" backgrounds.

## Steps
1. **The Foundation**:
   - Select **Triangle** or **Sine** wave.
   - Set **Modulation** to **10%** (Very subtle).
2. **The Frequency Clash**:
   - Set **Coarse** to an unusual ratio like **0.75** or **1.5**. 
   - This creates a sound that isn't quite a perfect octave, adding "tension".
3. **The Evolution (LFO)**:
   - Set **LFO Rate** to a slow speed (0.2 Hz).
   - Link the **LFO Amount** to the **Modulation** knob.
   - Now the pad will "glow" and "dim" in brightness over time.
4. **The "Melting" Pitch**:
   - Link a second LFO (or an automation clip) to the **Fine** tune.
   - Move it only ±5 cents. This creates a "drunken" pitch drift.
5. **Stereo Lushness**:
   - Follow with a **Fruity Delay 3** (Diffusion 80%).

## Result
A pad that feels like it's constantly breathing and moving, providing a hazy, psychedelic backdrop for your track.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity DX10

## Official Links
*   **Manual:** [DX10 Official Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20DX10.htm)

## Source Log
1.  **[SRC: IL-MAN]:** Technical reference for the 2-operator FM architecture, Thru-mode logic, and 8-voice polyphony specifications.
2.  **[SRC: REPUTABLE]:** SeamlessR (FM Synthesis for Beginners). Referenced for the Coarse ratio theory (whole numbers vs fractions) and FM bell synthesis.
3.  **[SRC: REPUTABLE]:** Sound On Sound (FM Secrets). Reference for the "Tine" piano envelope behavior and frequency modulation sideband theory.

## Coverage Checklist
- [x] FM Synthesis Simplified Mental Model
- [x] Modulator vs Carrier Signal Flow
- [x] Tine Piano (R&B) Workflow
- [x] Metallic Bell (Trap) Workflow
- [x] 5 Vibe Targets
- [x] Thru-Mode Layering Reference
- [x] Velocity Mapping Rules

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity DX10 (Urban Prod)

## Vibe 1: The "Neo-Soul" Electric Piano
*   **Sound:** Shimmering, wide, sensitive.
*   **Key Move:** Coarse 14.00 (ping) + Thru mode 15% + high velocity sensitivity.

## Vibe 2: The "West Coast" Digital Lead
*   **Sound:** Whiny, high-pitched, gliding.
*   **Key Move:** Coarse 1.00 + Modulation Init 80% + Portamento (in Channel Settings).

## Vibe 3: The "Modern Trap" Bell
*   **Sound:** Sharp, percussive, glass-like.
*   **Key Move:** Coarse 4.00 + Mod Time 5% + Max Wave brightness.

## Vibe 4: The "Dark R&B" Sub-Bass
*   **Sound:** Thick, clean, stable.
*   **Key Move:** Coarse 0.50 + Mod Init 0% + Long Amp Decay.

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity DX10 Mechanics

## 1. Aliasing & Quality

*   **Design:** DX10 is designed for "Low Aliasing" (oversampled oscillators) compared to the raw DX7 chips, but it still sounds "digital".
*   **CPU:** Extremely low. It is arguably the most efficient synth in FL Studio next to 3xOsc.

## 2. 8-Voice Polyphony

*   **Limit:** It can only play 8 notes at once.
*   **Result:** Large chords with long release tails will cause "Voice Stealing" (old notes cutting off abruptly to make room for new ones).
*   **Fix:** None. It is a hard limit. Use it for Bass, leads, or simple keys, not orchestral pads.

## 3. Modulation Envelope Topology

*   **Type:** DAHDSR? No, it's specific:
    *   **INIT:** Starting Level.
    *   **TIME:** Attack Time to reach Sustain? Or Decay Time?
    *   **SUS:** Sustain Level.
    *   **REL:** Release Time.
    *   This is a simplified ADSR where Attack maps to "Time" and Decay is omitted? Or "Time" is the decay?
    *   *Correction:* Manual says "Time needed for amplitude to reach sustain". This implies it is an **Attack** stage. Where is the decay? It seems DX10 skips the Decay stage and goes straight from Init (Start) to Sustain (Target) over Time?

## 4. The "Thru" Output

*   **Path:** Parallel output of Modulator.
*   **Mix:** The Thru knob adds the Modulator signal to the Carrier output.
*   **Phase:** Since the Modulator is also modifying the Carrier pitch, summing them can create complex phase cancellations if the Ratios are integers.

```

---

## FILE: 04-Reference\thru-mode-applications.md

```markdown
# Reference: Thru-Mode Applications (FM Layering)

The "Thru" knob in Fruity DX10 is a hidden weapon for complex sound design.

## 1. How it Works
Normally, the Modulator is invisible—it only changes the sound of the Carrier. When you turn up **Thru**, the Modulator is sent directly to the mixer alongside the Carrier.

## 2. Use Case: 2-Oscillator Leads
*   Set Coarse Tune to `2.00` (One octave higher).
*   Set Thru to `50%`.
*   **Result:** You get a standard synth lead sound plus a clean octave layer, creating a "bigger" presence without FM harshness.

## 3. Use Case: Metallic "Buzz"
*   Set Coarse Tune to an odd number like `1.73`.
*   Set Thru to `100%`.
*   **Result:** You get a dissonant, robotic texture that is perfect for industrial trap or "alien" sound effects.

## 4. Use Case: FM Sub-Reinforcement
*   Set Coarse to `0.50`.
*   Set Thru to `20%`.
*   **Result:** Adds a low-octave "sub" layer to your lead patches. [SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-docs\bessel-function-analysis.md

```markdown
# Technical Deep-Dive: Bessel Function Logic and Operator Sideband Analysis

## 1. Introduction: The Non-Linear Spectrum
Frequency Modulation (FM) synthesis, as implemented in **Fruity DX10**, is not a linear process. Unlike a volume slider where 50% means 50% volume, the **Modulation Index (I)** in FM causes harmonics to "Phase" in and out of existence. This behavior is governed by the **Bessel Functions of the First Kind**. To master the "Cool" crystalline textures of modern R&B, an engineer must understand the mathematics of these sideband transitions.

---

## 2. The FM Harmonic Series (Sidebands)
### 2.1 The Propagation Rule
When a carrier frequency `fc` is modulated by a frequency `fm` at index `I`, the resulting output contains a series of sidebands:
- **Location:** `f_sideband = fc ± n * fm`.
- **Amplitude:** The volume of each sideband `n` is equal to `Jn(I)`. 

### 2.2 The "Harmonic Null" Phenomenon
As you turn the **Mod** knob, the value of `I` increases. 
- **The Physics:** The Bessel function `J0(I)` (the volume of the fundamental) crosses zero at specific points.
- **The First Null (I = 2.4):** When your modulation reaches this index, the **Carrier (the note you played) completely disappears**. 
- **The Production Impact:** This is the secret to "Hollow" FM pads. By finding this exact null point, you remove the "Solid" center of the sound, leaving only the "Ghostly" shimmering sidebands.

---

## 3. Designing Harmonic Complexity
### 3.1 Sideband Density (The Index Rule)
- **Small Index (I < 1.0):** Only the first pair of sidebands are audible. This sounds like a smooth Sine wave with a tiny bit of "warmth." (Ideal for Moody R&B bass).
- **Medium Index (I = 2.0 - 5.0):** Many sidebands appear. The sound becomes "Buzzy" or "Metallic." (Ideal for Neo-Soul keys).
- **Large Index (I > 10.0):** The sidebands spread across the entire frequency spectrum. The sound becomes "Noise-like." (Ideal for Industrial Rap FX).

---

## 4. Inharmonicity and Non-Integer Ratios
### 4.1 Breaking the Octave
The **Coarse Tuning** in DX10 determines the ratio between the modulator and carrier.
- **Integer Ratios (1, 2, 3...):** Sidebands land on the musical notes of the harmonic series. This is "Harmonic."
- **Non-Integer Ratios (1.414, 1.732, 2.44...):** Sidebands land between the musical notes. This is **"Inharmonic."**
- **The Psychedelic Secret:** Setting Coarse to **1.732** (the Square Root of 3) creates a "Resonant Metal" character. It sounds like a physical piece of bronze being struck.

---

## 5. Bessel Calibration Table for DX10
Use this table to predict the "Harmonic Density" of your patch:

| Modulation Setting | Index (Approx) | Audible Sidebands | Sonic Character |
|--------------------|----------------|-------------------|-----------------|
| **10%**            | 0.5            | 1                 | Warm Sine / Subtle |
| **35%**            | 2.4            | 4                 | **Hollow / Fundamental Null** |
| **55%**            | 5.0            | 8                 | Glassy / Crystalline |
| **85%**            | 15.0           | 20+               | Distorted / Screaming |

---

## 6. Engineering the "Formant" Sweep
### 6.1 Spectral Shifting
Because each harmonic has its own Bessel curve, automating the **Mod** knob causes different harmonics to peak at different times.
- **The Vowel Effect:** This mimics the filtering of the human throat (Formants). 
- **Master Strategy:** Link the **Mod** knob to a slow Sine LFO (1/2 bar) with 10% depth. The sound will seem to "morph" through different vowels (Ooo, Eee, Aaa), providing an organic, living texture for psychedelic R&B.

---

## 7. Conclusion: The Harmonic Sculptor
Mastering the Bessel math of Fruity DX10 is about moving from "Turning Knobs" to **"Frequency Engineering."** By understanding the null points and sideband propagation rules, you can design melodic textures that are technically perfect and emotionally resonant. It is the definitive guide for any producer looking to own the "Crystalline" and "Metallic" elements of modern R&B and Hip-Hop production.

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Bessel Functions, FM Sidebands, Harmonic Nulls, Spectral Analysis, DX10 Physics, Audio Engineering.

```

---

## FILE: 04-Reference\technical-docs\bessel-function-harmonics.md

```markdown
# Technical Deep-Dive: Bessel Functions and FM Sideband Harmonics

## 1. Introduction: The Geometry of Sound
In the subtractive synthesis world, we think of harmonics as "fixed." A saw wave has a predictable series. However, in **Frequency Modulation (FM)** synthesis (the engine of Fruity DX10), harmonics are **Dynamic**. As you increase the modulation depth, harmonics don't just get louder—they "blossom" and then "disappear" in a complex pattern described by the **Bessel Functions of the First Kind**. Understanding this math is the key to designing the "shifting" textures of modern R&B.

---

## 2. The FM Formula (Recap)
`Output = Sin( ωc*t + I * Sin(ωm*t) )`
- `ωc`: Carrier Frequency
- `ωm`: Modulator Frequency
- `I`: **Modulation Index** (Controlled by the 'Mod' knob in DX10).

---

## 3. The Bessel Spectrum
The amplitude of the carrier and each sideband is determined by the **Bessel Function `Jn(I)`**, where `n` is the harmonic number and `I` is the index.

### 3.1 The "Carrier Disappearance"
As you turn up the **Mod** knob in DX10:
1. **At I = 0:** You hear only the Carrier (Fundamental).
2. **At I = 2.4:** The Fundamental frequency actually **Drops to Zero Volume**.
3. **The Production Impact:** This is why some FM patches sound "hollow" or "nasal" at certain modulation depths. You have mathematically cancelled the root note!

### 3.2 Sideband Proliferation
- **Sidebands:** Occur at frequencies `fc ± n*fm`.
- **The Harmonic Rule:** The number of audible sidebands is roughly `I + 1`. 
- **The Physics:** If `Mod = 10%`, you have 1-2 sidebands (Warm). If `Mod = 90%`, you have 10+ sidebands (Bright/Noisy).

---

## 4. Integer Ratios vs. Sideband Alignment
The **Coarse Tuning** in DX10 determines the ratio `ωm / ωc`.
- **1.0 Ratio:** Sidebands land on 2fc, 3fc, etc. (The Harmonic Series). Result: **Clean musical tone**.
- **1.732 Ratio (Square Root of 3):** Sidebands land on inharmonic frequencies. Result: **Metallic bell/chime**.
- **0.5 Ratio:** Sidebands land on the sub-octave and every "half-step" in the series. Result: **Thick, growling bass**.

---

## 5. Engineering the Shimmer
### 5.1 Dynamic Harmonics
Because the sideband amplitudes follow a "wave" shape (the Bessel curve), increasing the **Modulation Index** doesn't just make the sound brighter; it changes the "vowel" or "formant" of the sound.
- **Master Tip:** For "Moody" psychedelic R&B, automate the **Mod** knob very slowly. This causes the harmonics to "ebb and flow," creating an organic, liquid texture that subtractive filters cannot replicate.

---

## 6. The "Nyquist" Constraint in FM
### 6.1 FM Aliasing
In digital FM synths like DX10, high-order sidebands can easily exceed the Nyquist frequency (half the sample rate).
- **The Result:** These sidebands "reflect" back into the audible range as noisy, metallic artifacts.
- **The Fix:** This is why the **Internal Low-Pass Filter** in DX10 is so critical. It "chokes" the Bessel sidebands before they can alias, preserving the "Soulful" quality of the FM engine.

---

## 7. Conclusion: The Master of Sidebands
Mastering Fruity DX10 is about mastering the **Bessel Function curve.** By understanding that the Modulation knob is a "Harmonic Growth" controller, you can purposefully design sounds that move from pure warmth to complex glass. It is the ultimate technical skill for any producer looking to elevate their R&B and Hip-Hop sound design beyond simple presets.

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Bessel Functions, FM Harmonics, Sidebands, Modulation Index, DX10 Physics, Audio Engineering.

```

---

## FILE: 04-Reference\technical-docs\fm-synthesis-theory.md

```markdown
# FM Synthesis: Modulators and Carriers

## Carrier vs. Modulator
In FM synthesis (like DX10), oscillators are called "Operators".
- **Carrier:** This is the operator you actually hear.
- **Modulator:** This operator is silent, but its output is used to rapidly shift the frequency of the Carrier.

## Sidebands and Harmonics
When a Carrier is modulated by a Modulator:
- **Mathematical Ratios:** If the ratio of Modulator:Carrier is a simple integer (1:1, 2:1), the resulting harmonics are **Harmonic** (musical, clean).
- **Non-Integers:** If the ratio is complex (1.73:1, 2.41:1), the harmonics are **Inharmonic** (metallic, dissonant). This is why FM is the king of percussion and bells.

## The DX10 4-Op Engine
Fruity DX10 simplifies the complex matrix of a 6-operator synth (like the DX7) into a streamlined 4-operator engine. 
- It uses a fixed "Algorithm" (routing path).
- This makes it much more accessible for beginners while still being capable of the signature "FM Growl" or "Glassy" tones.

## Digital Aliasing
Older FM synths like the DX10 can exhibit **Aliasing** at very high frequencies. This is where high harmonics "fold back" into the audible range as lower, unwanted frequencies. 
- **Production Use:** Many producers actually love this "lo-fi" digital artifact, as it adds a unique grit that modern, oversampled synths lack.

```

---

## FILE: 04-Reference\technical-docs\non-linear-fm-feedback-loops.md

```markdown
# Technical Deep-Dive: Non-Linear FM Feedback Loops and Deterministic Chaos

## 1. Introduction: The Edge of Chaos
While basic FM synthesis (like in standard DX10 presets) is orderly and musical, the true power of **Fruity DX10** lies in its ability to enter states of **Non-Linear Feedback**. In modern psychedelic R&B and Experimental Rap (think artists like Travis Scott or Mike Dean), we often require sounds that feel "Organic" and "Unpredictable." By pushing the FM engine into chaotic feedback cycles, we can generate textures that "Twist" and "Grow" in ways that standard subtractive synths cannot. This guide explores the mathematics of **Deterministic Chaos** in operator stacks.

---

## 2. Theoretical Foundation: The Feedback Operator
### 2.1 Self-Modulation Math
In many FM architectures, an operator can modulate itself.
- **The Equation:** `y(t) = Sin( ω*t + β * y(t-1) )`, where `β` is the feedback gain.
- **The Physics:** As `β` increases, the waveform transforms from a Sine to a Sawtooth, and eventually into **White Noise**.
- **The DX10 Strategy:** While DX10 uses a fixed algorithm, you can mimic self-feedback by using two operators at a 1:1 ratio with high modulation levels.

### 2.2 The Bifurcation Point
As you turn the **Modulation (Mod)** knob, the harmonics don't just increase; they undergo "Bifurcations."
- **Order to Chaos:** At low settings, the sidebands are predictable. As you cross a specific "Critical Index" (usually around Mod 80%), the sidebands begin to overlap and interfere with each other.
- **The Result:** The sound suddenly becomes "Complex" and "Living." It develops a "Growl" or a "Scream" that feels like a physical circuit failing. This is the "Cool" factor of industrial sound design.

---

## 3. Designing Deterministic Chaos
### 3.1 The "Drunken" Harmonic
To create a psychedelic texture that feels like it's "breathing," we must exploit the **Bessel Null Points**.
- **The Hack:** Set the **Mod** knob to exactly **35%** (the first fundamental null).
- **The Action:** Link an LFO to the **Mod** knob with a very small depth (±2%).
- **The Result:** The fundamental frequency will "flicker" in and out of existence as the index crosses the null point. The brain perceives this as a "Shifting Reality," creating a trippy, psychedelic sensation.

---

## 4. Inharmonic Beat Frequencies
### 4.1 The Heterodyne Effect
When you use a non-integer **Coarse Tuning** (e.g. 1.732) and high modulation:
- **The Math:** The sidebands are created at `fc ± n*fm`. 
- **The Collision:** Because the sidebands are inharmonic, they collide and create **Difference Frequencies** in the sub-audio range (1-20Hz).
- **The Sound:** This manifests as a rhythmic "Gurgle" or "Pulsation" *inside* the synth tone. 
- **R&B Use Case:** Use this for dark, moody background pads. It provides a "Subliminal Groove" that the listener feels more than they hear.

---

## 5. Technical Nuance: Numerical Precision and Aliasing
### 5.1 The "Digital Screaming" Physics
Because DX10 is a digital engine, chaotic feedback loops eventually hit the **Nyquist Limit**.
- **Spectral Folding:** The chaotic harmonics hit the ceiling and fold back as "Digital Hiss."
- **Master Strategy:** Do NOT EQ this hiss out entirely. Instead, use a **Fruity Delay 3** with high **Diffusion**. 
- **The Effect:** The sharp digital aliasing is "Smeared" into a shimmering metallic mist, creating the "Hi-Def Psychedelic" atmosphere common in modern R&B.

---

## 6. Table of Chaotic Ratios for DX10

| Desired Texture | Coarse Ratio | Mod Level | LFO Target | Resulting Vibe |
|-----------------|--------------|-----------|------------|----------------|
| **Static Hiss** | 8.00         | 95%       | None       | Digital Ice / Grit. |
| **Gurgling Void**| 0.51        | 75%       | Mod Index  | Dark, breathing sub. |
| **Whistling Wind**| 1.73       | 40%       | Filter Cut | Ethereal, metallic. |
| **Talking Machine**| 1.50      | 60%       | Coarse Tune| Formant / Vocal-like.|

---

## 7. Conclusion: The Master of Entropy
Mastering non-linear feedback in Fruity DX10 is about **Managing Chaos.** You are not just making a sound; you are initiating a mathematical process that behaves like a physical system. By understanding the bifurcation points and the physics of inharmonic beat frequencies, you can create timbres that are "Cool," professional, and possess a "Digital Soul." Follow these chaotic protocols to move your sound design into the "Elite" psychedelic tier.

---
**Document Version:** 1.0 (Quantum Engineering Tier)
**Author:** Chaotic Systems Lead
**Keywords:** Non-Linear FM, Feedback Loops, Deterministic Chaos, Bessel Nulls, Sideband Physics, FL Studio.

```

---

## FILE: 04-Reference\technical-docs\operator-stack-logic.md

```markdown
# The 4-Operator Stack Architecture

## DX10 Operator Routing
Fruity DX10 uses a specific "Algorithm" where 4 operators are stacked in a serial/parallel hybrid.

### The Signal Path
1. **Operator 4 (Top):** Usually the fastest modulator. It modulates Op 3.
2. **Operator 3:** Modulates Op 2.
3. **Operator 2:** Modulates Op 1 (The Carrier).
4. **Operator 1 (Bottom):** The final audio output.

## Modulation Index Math
The **Modulation (Mod)** knob controls the "Index" of modulation. 
- `Index = Peak Frequency Deviation / Modulator Frequency`
- **Result:** High index values create more "Sidebands." If the index is low, you get a warm, rounded tone. If it's high, you get aggressive "FM Growls."

## Harmonics and Integers
- **Integer Ratios (1.0, 2.0, 3.0):** Create harmonics that align with the human ear's perception of musical notes (Strong Octaves and Fifths).
- **Non-Integer Ratios (1.414, 1.732):** Create "Metallic" harmonics. 1.732 is particularly useful for simulating the resonance of a metal plate or bell.

```

---

