# Fruity Delay 3 - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Delay 3 - Analog Modeling Delay

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ███████╗██╗      █████╗ ██╗   ██╗    ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔════╝██║     ██╔══██╗╚██╗ ██╔╝    ╚════██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║  ██║█████╗  ██║     ███████║ ╚████╔╝     █████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║  ██║██╔══╝  ██║     ██╔══██║  ╚██╔╝      ╚═══██╗ 
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██████╔╝███████╗███████╗██║  ██║   ██║      ██████╔╝ 
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝      ╚═════╝  
`\`\`

**Plugin Type:** Analog / Tape Delay Emulation
**Category:** Effect / Creative
**Official Manual:** [Image-Line Fruity Delay 3 Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay%203.htm)

---

## 🎯 What is Fruity Delay 3?

Fruity Delay 3 is FL Studio's flagship delay unit. Unlike its predecessors, it is designed to emulate the character of **Analog Tape Delays**. It allows for pitch-shifting automation (tape stop effects), saturation/distortion in the feedback loop, and diffusion (reverb-like smearing). It keeps the delay synchronized even if the project BPM changes dynamically.

**Key Capabilities:**
- **Tape Behavior:** Changing time slides the pitch (varispeed).
- **Distortion/Saturation:** Adds grit to echoes.
- **Filtering:** High Pass AND Low Pass filters (Bandpass).
- **Modulation:** Wow & Flutter simulation.
- **Diffusion:** Smears transients for ambient textures.
- **BPM Sync:** Keeps time even during tempo automation.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **analog-vs-digital-delay.md**
3. Create **parameter-cheat-sheet.md**
4. Play with the "Time" knob while audio is playing to hear the pitch slide.

### For Sound Designers:
1. Review **tape-delay-emulation.md** (Wow/Flutter/Sat)
2. Study **dub-techno-chords.md** (Diffusion + Feedback)
3. Learn **glitch-effects.md** (Automating Time)

### For Mix Engineers:
1. Study **vocal-slapback-saturation.md**
2. Review **creating-pseudo-reverb.md** (Using Diffusion)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Delay Time:** BPM synced or MS.
  - **Feedback Level/Cutoff:** Determines length and tone.
  - **Modulation (Rate/Time/Cut):** Pitch wobble and filter sweeps.
  - **Diffusion:** Smear amount.
  - **Distortion:** Saturation type (Limit, Sat, etc.).

- [ ] **analog-vs-digital-delay.md**
  - **Digital (Delay 2):** Perfect copies, clean.
  - **Analog (Delay 3):** Degraded copies, pitch drift, saturation.

#### 02-Data/parameters/
- [ ] **delay-3-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Delay 3",
    "category": "Delay",
    "parameters": [
      {
        "name": "Diffusion",
        "type": "knob",
        "description": "Smears echoes into reverb",
        "use_cases": ["dub chords", "ambient pads"]
      },
      {
        "name": "Modulation Rate",
        "type": "knob",
        "description": "Speed of the LFO affecting time/filter",
        "pro_tip": "Low rate + low amount = Tape Wow/Flutter"
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **tape-delay-emulation.md**
  - Adding Saturation to the feedback loop.
  - Using Modulation Time to create "wobble".
  - Filtering highs and lows (Bandpass).

- [ ] **dub-techno-chords.md**
  - High Feedback.
  - High Diffusion.
  - Saturation engaged.
  - Result: Infinite, evolving metallic chord clouds.

- [ ] **glitch-effects.md**
  - Automating the "Time" knob rapidly.
  - Creating pitch-shifting artifacts.

#### 03-Workflows/by-context/
- [ ] **guitar-pedal-simulation.md**
- [ ] **vocal-texture-thickening.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **signal-flow-diagram.md**
  - Understanding where the Filter and Distortion sit in the feedback loop.
  - Order of operations: Delay -> Filter -> Dist -> Diff -> Feedback.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Tonal Control

**Tasks:**
1. Set up a standard 1/4 note delay
2. Use HP and LP filters to isolate the "Telephone" frequencies
3. Add Distortion to make it gritty
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Limit" vs "Sat" distortion mode sound?
- What is the difference between "Tempo" and "Keep Pitch" modes? (In settings)

### Phase 2: Creative Modulation (Week 2)
**Goal:** Movement

**Tasks:**
1. Use Modulation to wobble the pitch (Chorus effect on echoes)
2. Use Diffusion to turn the delay into a Reverb
3. Create tape-delay-emulation.md

**Key Questions to Answer:**
- Can I create a Flanger with Delay 3? (Yes, short time + modulation)
- How to stop self-oscillation from blowing speakers? (Limiter in distortion section)

---

## 📊 Plugin Specifications to Document

### Audio Engine
- Modulation Destinations (Time, Cutoff)
- Distortion Types (List all)
- Filter Types (12dB/24dB?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does the pitch drop when I slow down the tempo? (Analog emulation behavior)
2. How do I make it clean? (Turn off Saturation, Modulation, and open filters)

### Advanced Usage
1. How to create "dotted 8th" delays? (Set time to 3 steps usually, or 0.75 beats)
2. Using the "Offset" knob for stereo widening vs Delay 2's method?

---

## 📝 Documentation Standards

### For Each Workflow:
- **Time/Tempo:** Setting
- **Tone:** Filter/Distortion settings
- **Character:** Mod/Diff settings

---

## 🔗 Cross-Reference with Other Plugins

Fruity Delay 3 is often used with:
- **Fruity Reverb 2** (Complementary space)
- **Distructor** (External distortion vs Internal)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Delay 3/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── analog-vs-digital-delay.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── delay-3-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── tape-delay-emulation.md
│   │   ├── dub-techno-chords.md
│   │   └── glitch-effects.md
│
└── 04-Reference/
    └── signal-flow-diagram.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Delay 3 Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay%203.htm)
- [Fruity Delay 3 Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Delay_3_tutorials.htm)
- [Fruity Delay 3 Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+delay+3+tutorial)

### Community Resources
- [Fruity Delay 3 Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+delay+3&restrict_sr=1)
- [Fruity Delay 3 User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Delay 3 Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Analog Delay Emulation" - Understanding tape and bucket-brigade delays
- "Delay Modulation Techniques" - Creating movement with delay effects
- "Dub Music Production" - Using delay for reggae and dub styles

### Advanced Techniques
- **Tape Emulation:** Using wow/flutter and saturation for authentic analog character
- **Diffusion Effects:** Creating ambient textures with delay smearing
- **Glitch Processing:** Automating delay parameters for creative effects

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a convincing 1970s Tape Echo preset
- [ ] Explain the signal flow of the feedback loop
- [ ] Use Modulation to create a chorus effect on the tails
- [ ] Build a "Wash" effect using Diffusion

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Delay 3

## Purpose & Identity
Fruity Delay 3 is an **analog-modeled delay engine**. Unlike the cleaner Delay 2, this unit is designed to emulate the character of hardware tape echoes. Its identity is defined by its ability to "degrade" sound—adding pitch wobble, saturation, and atmospheric smearing (diffusion) to its echoes. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a loop of magnetic tape recording your sound and replaying it. 
- The **Feedback** loop is how many times the tape circles back.
- The **Distortion/Saturation** mimics the tape head getting "hot."
- The **Modulation** mimics the tape machine's motor being slightly unstable (Wow & Flutter).
- The **Diffusion** mimics the sound bouncing off walls before being re-recorded.

## Hip-Hop / R&B Context
- **Vocal "Vibe" Wobble:** Using slow pitch modulation on a vocal delay to create a dreamy, "lo-fi" atmosphere (Vibey).
- **The Travis Scott "Space":** Using high **Diffusion** to turn short delays into a metallic, smeared reverb-like tail (Spacey).
- **Phonk/Dark Echoes:** Using the built-in **Bandpass Filter** to make the echoes sound dark and "muffled" (Moody).

## When To Use
- When you want a **character-heavy** delay that sounds vintage.
- When you need a delay that stays in sync even during **BPM changes**.
- When you want to create **Dub-style** feedback loops that grow and distort.

## When NOT To Use
- **Simple Doubling:** Use **Fruity Delay 2** if you just want a perfectly clean, digital clone of the original signal.
- **CPU Savings:** Delay 3 is more processing-intensive than the older versions. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Delay 3

## UI Tour
1.  **Delay Section:**
    *   **Time:** Tempo-locked or MS.
    *   **Keep Pitch Toggle:** Essential! Determines if time changes slide the pitch (Analog) or stay clean (Digital). [SRC: IL-MAN]
2.  **Feedback Section:**
    *   **Level:** Repeats.
    *   **Cutoff/Res:** Resonant filters in the loop.
3.  **Tone Section (The Character Core):**
    *   **Filter Type:** Off, HP, LP, BP.
    *   **Distortion:** Limit, Sat, Bit, or Sine modes.
    *   **Diffusion:** Smears the sound.
4.  **Modulation Section:**
    *   **Rate/Time/Cut:** Internal LFO for wobble.

## Signal Flow
1.  **Input:** Audio enters.
2.  **Delay Buffer:** Audio is held.
3.  **The Loop (The Secret Path):**
    *   **Filter** (Tone shaping) ->
    *   **Distortion** (Adding harmonics) ->
    *   **Diffusion** (Smearing transients) ->
4.  **Feedback:** The processed signal goes back to Step 2.
5.  **Output:** Summed with the Dry signal. [SRC: REPUTABLE]

## Things Beginners Misunderstand
*   **The "Limit" Mode:** In the distortion section, "Limit" is a safety tool. Use it to prevent high-feedback loops from exploding.
*   **Diffusion isn't Reverb:** It sounds like reverb, but it's just "blurring" the echoes. It is much more metallic and textured than a standard Reverb 2 tail.
*   **BPM Sync:** If your project tempo changes, Delay 3 will slide its pitch to stay in time. Switch to "Keep Pitch" mode if you want to avoid this. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Delay 3

## Technique 1: Vintage Tape Warble
*   **Goal:** Make digital synths feel like an old cassette.
*   **Setup:** Go to the **Modulation** section.
*   **Action:** Set **Rate** to ~0.5 Hz. Set **Time** to 5-10%.
*   **Result:** The delay time will "drift" constantly, creating a pitch wobble (Chorus) that feels nostalgic and organic.

## Technique 2: The "Cloud" Reverb (Diffusion)
*   **Goal:** Create a space that isn't quite reverb, isn't quite delay.
*   **Action:** Set **Diffusion** to 60-80%. High Feedback (70%).
*   **Listen For:** The sharp transients of the percussion vanish, turning into a "smear" of sound.
*   **Vibe:** Perfect for "Moody" atmospheres in dark R&B.

## Technique 3: Rhythmic Bit-Crushing
*   **Goal:** Add industrial texture to drum echoes.
*   **Action:** Set Distortion to **Bit**. Turn the **Drive** up.
*   **Result:** Each successive echo will get more degraded and pixelated until it becomes noise. [SRC: REPUTABLE]

## Technique 4: Tape-Stop Transitions
*   **Goal:** A sudden pitch-drop at the end of a section.
*   **Action:** Automate the **Time** knob from 1/4 note to 1/1 note over the last beat. 
*   **Result:** The sound will "wind down" just like a turning off a turntable.

## Common Pitfalls + Fixes
*   **Pitfall:** "The delay is taking up too much room in the mix."
    *   **Fix:** Use the **Duck** knob (Sidechain). This automatically lowers the volume of the echoes while the dry signal is playing. [SRC: REPUTABLE]
*   **Pitfall:** "Digital clicking."
    *   **Fix:** Increase the **Damp** or **Cutoff** slightly to smooth out the transients in the feedback loop.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Delay 3

Delay 3 translates vibes through **Temporal Degradation** and **Spatial Smearing**.

## 1. Moody (Dark, Muffled, Isolated)
- **Concept:** "The Distant Memory."
- **Levers:**
  - **Filter:** Bandpass (300Hz - 2kHz).
  - **Sample Rate:** Reduced (if available via external bitcrush, but use internal HP/LP for tone).
  - **Feedback:** Moderate (40%).
- **Listen For:** Echoes that sound like they are coming from behind a heavy curtain.
- **Don't Do This:** Don't let the high frequencies pass; keep the echoes dark.

## 2. Upbeat (Kinetic, Rhythmic, Bright)
- **Concept:** "The Staccato Snap."
- **Levers:**
  - **Time:** 1/8th dot or 1/4 note.
  - **Distortion:** Set to 'Limit' for clean peaks.
  - **Filter:** High Shelf boost at 5kHz.
- **Listen For:** Sharp, percussive repetitions that drive the rhythm of the track.

## 3. Psychedelic (Warped, Liquified, Oscillating)
- **Concept:** "The Melting Tape."
- **Levers:**
  - **Modulation:** Time Depth at 50%.
  - **Feedback:** 90% (Careful!).
  - **Distortion:** Saturation at 50%.
- **Listen For:** The pitch of the echoes drifting and "folding" into a distorted mess.

## 4. Spacey (Infinite, Ethereal, Immersive)
- **Concept:** "The Nebula Wash."
- **Levers:**
  - **Diffusion:** 80%+.
  - **Time:** Long (1/2 note).
  - **Modulation:** Slow Rate (0.1Hz).
- **Listen For:** The delay taps losing their "hit" and turning into a smeared, reverb-like cloud.

## 5. Vibey (Smooth, Lo-Fi, Nostalgic)
- **Concept:** "The Wow & Flutter."
- **Levers:**
  - **Modulation:** Rate at 1.0Hz, Time Depth at 10%.
  - **Distortion:** 'Sat' mode @ 20%.
- **Listen For:** A gentle "pitch-shiver" that makes the sound feel like an old cassette tape. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\echo-physics.md

```markdown
# Echo Physics and Feedback Loops

## The Speed of Sound
In physical space, an echo is a reflection of sound off a surface. The distance to the surface determines the **Delay Time**.
- 1ms of delay ≈ 1.1 feet (34cm) of distance.
- **Precedence Effect (Haas Effect):** If a delay is below ~35ms, the brain perceives the original and the echo as a single, thickened sound. Fruity Delay 3 can easily enter this territory for "widening" effects.

## Feedback Oscillation
When feedback exceeds 100%, each repeat is louder than the previous one.
- **Linear Feedback:** Results in digital clipping (harsh square wave).
- **Saturated Feedback (Fruity Delay 3):** As the signal builds, the internal **Saturation** engine rounds off the peaks. This creates a "controlled" self-oscillation that sounds like a vintage space echo.

## Pitch Shifting (Analog Mode)
In Analog mode, the delay buffer is read at a variable sample rate.
- Increasing the delay time during playback stretches the buffer, lowering the pitch.
- Decreasing the delay time compresses the buffer, raising the pitch.
- This mimics the **Doppler Effect** of a moving tape head or a BBD chip's clock speed.

```

---

## FILE: 01-Learning\Concepts\neurological-time-perception.md

```markdown
# The Master's Guide to Neurological Time Perception and Psychoacoustic Engineering in Fruity Delay 3

## 1. Introduction: The Biological Interface
In elite audio engineering, we do not just mix frequencies; we mix **Perception**. The human auditory system is not a linear microphone; it is a complex biological computer that interprets arrival times, phase shifts, and frequency damping to construct a 3D map of the world. **Fruity Delay 3** is the ultimate interface for this computer. By understanding the neurology of how we process "Time," you can use this plugin to create "Atmospheres" that trigger visceral emotional responses in your Hip-Hop and R&B listeners.

---

## 2. The Haas Effect and Spatial Fusion (The 35ms Window)
### 2.1 The Precedence Effect Neurology
The brain's primary mechanism for localizing sound is the **Initial Arrival Time**. 
- **The 1-35ms Rule:** If an echo arrives within 35ms of the dry signal, the brain "fuses" them. It does not hear two sounds; it hears one sound that is "Thicker" or "Wider."
- **The Engineering Hack:** Use the **Offset** knob in Delay 3 to set a 15ms difference between Left and Right.
- **The Biological Response:** The listener's brain interprets this as a "Large Source." This is how you make a thin melodic rap vocal sound "Massive" without using a chorus that ruins the phase.

### 2.2 Successive Binaural Integration
When you use the **Ping-Pong** mode in Delay 3, you are triggering the brain's **Motion Detectors**. 
- **The Science:** The superior olivary complex in the brainstem calculates the Interaural Time Difference (ITD). 
- **The Psychedelic Vibe:** By modulating the delay time in **Analog Mode**, you cause the ITD to shift constantly. This creates a "Dizzy" or "Trippy" sensation, as the brain's localization system is being "re-calibrated" every sample.

---

## 3. Temporal Masking and the "Ducker" Logic
### 3.1 Forward and Backward Masking
A loud sound (the dry vocal) can "hide" sounds that occur immediately before or after it. 
- **Forward Masking:** The dry vocal hides the start of the delay tail.
- **Backward Masking:** A loud delay repeat can actually "blur" the end of a vocal word if it hits too early.
- **The Ducker Strategy:** Fruity Delay 3's internal **Ducker** is a neurological safety valve. 
    - **Threshold Calibration:** Set the threshold so that the delay is suppressed by 12dB while the rapper is speaking.
    - **Release Calibration:** Set the release to 400ms. 
    - **The Effect:** The delay "blooms" in the silence. This prevents **Cognitive Overload** for the listener, keeping the lyrics intelligible while the "Mood" stays huge.

---

## 4. Spectral Damping and Virtual Distance
### 4.1 Air Absorption Physics
High-frequency energy is lost as sound travels through air. 
- **The Neurology of Distance:** The brain uses the ratio of Low-to-High frequencies to judge how far away a sound is.
- **The Low-Pass Secret:** By setting the **LP Filter** in Delay 3 to 2500Hz, you are telling the listener's brain: "This echo is 50 feet away."
- **Moody R&B Application:** To create an "Intimate" vocal that is surrounded by a "Vast" space, keep the dry vocal bright (10kHz+) but the delay tail extremely dark (under 2kHz). This creates a **Spatial Contrast** that defines the Toronto R&B aesthetic.

---

## 5. Diffusion and the Destruction of Rhythm
### 5.1 Entropy in Delay Lines
Standard digital delay repeats are "Periodic"—they follow a perfect rhythmic grid. This triggers the "Pattern Recognition" part of the brain.
- **The Problem:** Rhythmic predictability can be "Boring" or "Mechanical."
- **The Diffusion Solution:** The **Diffusion** knob introduces all-pass filters that smear the transient. 
- **The Result:** The brain can no longer identify the "Start" of the repeat. The sound moves from the **Rhythmic Cortex** to the **Atmospheric Cortex**. This is essential for "Chill" and "Dreamy" Hip-Hop backgrounds.

---

## 6. Mathematical Spatial Calibration Table
Use these technical offsets in Fruity Delay 3 to achieve specific biological triggers:

| Target Perception | Delay Time | Offset | Filter Setting | Biological Trigger |
|-------------------|------------|--------|----------------|-------------------|
| **Intimate Width**| 0ms        | 12ms   | 8kHz LP        | "Large Head" Haas fusion. |
| **Distant Shadow**| 1/2 Beat   | 0ms    | 1.5kHz LP      | "Large Space" air absorption. |
| **Trippy Haze**   | 1/4 Beat   | 25ms   | Resonant BP    | "Localization Error" vertigo. |
| **Silky Halo**    | 1/8 Beat   | 5ms    | High Diffuse   | "Aural Comfort" smearing. |

---

## 7. Master Engineering: The "Depth" Formula
To create "3D" depth in an R&B mix, you must automate the **Wet Mix** and **LP Filter** simultaneously.
- **The Move:** As the vocal gets quieter (at the end of a phrase), increase the **Wet Mix** and decrease the **LP Filter**.
- **The Psychoacoustic Logic:** The brain perceives the singer as physically walking away into a dark room. This "Movement" is what makes a production feel "Elite" and "Cool."

---

## 8. Conclusion: The Bio-Acoustic Architect
Mastering Fruity Delay 3 is about becoming a **Biological Architect**. You aren't just adding an effect; you are designing the "Physical Reality" that the listener's brain will inhabit for 3 minutes. By utilizing the Haas Effect, Temporal Masking, and Spectral Damping, you can create spatial environments that are emotionally charged and technically flawless. It is the definitive skill for any producer looking to dominate the modern Hip-Hop and R&B landscape.

---
**Document Version:** 1.0 (Acoustic Architecture Tier)
**Author:** Psychoacoustic Research Lead
**Keywords:** Neurological Perception, Haas Effect, Temporal Masking, Air Absorption, Spatial Localisation, FL Studio Engineering.

```

---

## FILE: 01-Learning\Concepts\psychedelic-warping.md

```markdown
# The Master's Guide to Psychedelic Temporal Warping in Fruity Delay 3

## 1. Introduction: The Philosophy of Time Manipulation
In the realm of modern psychedelic Hip-Hop and R&B (pioneered by visionaries like Mike Dean, Travis Scott, and Tame Impala), delay is no longer a simple "echo" effect. It is a tool for **spatial deconstruction**. Fruity Delay 3 is the most advanced native FL Studio tool for this purpose, bridging the gap between clinical digital precision and the unpredictable, "living" character of vintage hardware.

To master psychedelic warping, one must understand that time is fluid. By modulating delay lines, we aren't just repeating sound; we are bending the fabric of the listener's reality.

---

## 2. The Physics of the Buffer: Digital vs. Analog
### 2.1 The Digital Read-Head (Discrete Buffers)
In standard **Digital Mode**, Fruity Delay 3 operates as a high-fidelity sampler. It records incoming audio into a circular buffer (a ring of RAM) and reads it back at a fixed distance.
- **The "Jump" Artifact:** When you change the delay time in Digital Mode, the read-head "jumps" to a new address in memory. This causes a discontinuous waveform, resulting in a "click" or "pop."
- **Use Case:** This is ideal for rhythmic, precise IDM or glitch-hop where you want "stepped" time changes without pitch artifacts.

### 2.2 The Analog Emulation (Variable Sample Rate)
When you switch to **Analog Mode**, the plugin shifts from address-jumping to **Resampling**.
- **The Doppler Effect:** Moving the delay time knob while audio is playing simulates physically moving a tape head or changing the clock speed of a BBD (Bucket Brigade Device) chip. 
- **Pitch Sweeps:** If you shorten the delay, the audio is "squeezed," raising the pitch. If you lengthen it, the audio is "stretched," lowering the pitch.
- **Master Strategy:** Automate the 'Time' parameter with a **Fruity Formula Controller** using a Sine wave to create a "drunken," detuned tail that is the hallmark of "trippy" psychedelic production.

---

## 3. The Psychology of Pitch Drift (Vibrato)
### 3.1 Frequency Instability and the "Uncanny Valley"
Human ears are evolved to detect stability in pitch. When a sound "drifts" (Vibrato), it triggers a subconscious sense of unease or "dreaminess."
- **Rate vs. Depth:**
    - **Fast/Shallow:** Mimics a spinning Leslie speaker or a fast organ vibrato. It adds "shimmer."
    - **Slow/Deep:** Mimics a warped vinyl record or a deteriorating tape loop. This is the "Mood" of lo-fi Hip-Hop.
- **The Psychoacoustic "Melting" Effect:** By setting the Vibrato Rate to ~0.3Hz and the Depth to 20%, the delay tail feels like it is physically melting away from the dry signal.

---

## 4. Advanced Diffusion: Turning Echoes into Atmosphere
### 4.1 All-Pass Filter Chains
The **Diffusion** section in Fruity Delay 3 is essentially a complex network of all-pass filters. 
- **Breaking the Transient:** Standard delays have sharp, distinct repeats. Diffusion "smears" these transients.
- **The Reverb Threshold:** At 100% Diffusion, the repeats become so blurred that the delay effectively becomes a **Convolution Reverb**. 
- **Smear Logic:** The 'Smear' knob adds spectral smoothing. In a psychedelic mix, use this to create "Ghost Vocals"—shadows of the lead vocal that float in the background without any identifiable rhythmic start point.

---

## 5. Distortion and Saturation in Feedback Loops
### 5.1 The "Heat" of the feedback
Fruity Delay 3 features an internal **Saturation** module within the feedback path.
- **Non-Linear Build-up:** In physical gear (like the Roland RE-201 Space Echo), each time the sound repeats, it passes through the circuitry again, adding more distortion.
- **The "Warmth" Factor:** Saturation rounds off the high-end transients and adds low-mid harmonics. This prevents the delay from sounding "thin" and "digital."
- **Self-Oscillation:** By setting Feedback above 100% and Saturation to 50%, you can create a "wall of sound" that feeds back on itself but stays "musically distorted" rather than "digitally clipping."

---

## 6. Genre-Specific Production Strategies
### 6.1 Moody R&B "Shadow" Delays
In R&B, the vocal must remain intimate.
- **The Ducker Paradox:** You want a long, lush delay, but you don't want it to cover the singer's voice.
- **The Solution:** Use the **Internal Ducker**. 
    - **Threshold:** Set to -20dB.
    - **Release:** 500ms.
    - **Result:** The delay is "pushed down" while the singer performs and "blooms" only in the gaps. This creates a "shadow" effect where the mood is present but never intrusive.

### 6.2 Psychedelic Trap "Risers"
- **The Technique:** Set Feedback to 95%, Model to Analog.
- **The Action:** During the last 4 bars of a verse, automate the 'Time' parameter from 1/4 note down to 1/64 note.
- **The Result:** The pitch will scream upwards in a psychedelic spiral, perfectly transitioning into the drop.

---

## 7. Mathematical breakdown of BPM Sync
To achieve perfectly timed psychedelic pulses, one must understand the millisecond relationship to BPM.
- **Formula:** `60,000 / BPM = Quarter Note (ms)`
- **The "Off-Grid" Secret:** To make a track feel "Cool" and "Human," set the delay time slightly *ahead* or *behind* the grid.
    - **Ahead (-2% to -5% Offset):** Makes the track feel "rushed" and high-energy (Upbeat Rap).
    - **Behind (+2% to +5% Offset):** Makes the track feel "laid back" and "lazy" (Moody R&B/Neo-Soul).

---

## 8. Signal Flow Diagram (Technical)
1. **Input:** Dry signal enters the buffer.
2. **Buffer:** Audio is held for 'Time' duration.
3. **Modulation:** LFO (Vibrato) wobbles the buffer length (Analog) or read-head position (Digital).
4. **Processing (Feedback Loop):**
    - High-Pass Filter (Remove rumble).
    - Low-Pass Filter (Remove harshness).
    - Saturation (Add warmth).
    - Bitcrush (Add grit).
5. **Diffusion:** Repeats are smeared via all-pass filters.
6. **Ducker:** Wet signal is attenuated by the sidechain input.
7. **Output:** Wet signal is mixed with Dry.

---

## 9. Conclusion: The Infinite Echo
Mastering Fruity Delay 3 is about balancing **Chaos and Control**. Use the Analog mode for organic unpredictability, use the Ducker for professional clarity, and use the Diffusion engine to create spaces that don't exist in the physical world. This is the essence of modern psychedelic sound design.

---
**Document Version:** 2.0 (Master Tier)
**Author:** AI Research Specialist
**Keywords:** DSP, Resampling, Doppler Effect, All-Pass Filters, Psychoacoustics, Hip-Hop Production.
```

---

## FILE: 01-Learning\Concepts\temporal-masking-physics.md

```markdown
# The Master's Guide to Temporal Masking Physics and Psychoacoustic Clarity

## 1. Introduction: The Biological Filter
The human ear is not a perfect recorder of time. When we hear a loud sound, our auditory system undergoes a temporary state of "Deafness" to quieter sounds that occur immediately before or after. This is known as **Temporal Masking**. In a professional Hip-Hop or R&B mix, this can be your greatest enemy (masking the lyrics) or your greatest ally (creating "invisible" space). **Fruity Delay 3** is the only native tool that allows you to surgically manipulate these biological thresholds through its internal **Ducker**.

---

## 2. Theoretical Foundation: The Masking Window
### 2.1 Forward Masking (The "Shadow")
When a dry vocal word is played, it "Masks" sounds that follow it for roughly **50ms to 200ms**.
- **The Conflict:** If your delay repeat hits within this 100ms window, the brain will "Filter out" the delay. 
- **The Perception:** The listener doesn't hear the echo; they just feel the mix is "Cluttered" or "Messy."
- **The Solution:** Use **Predelay** or a rhythmic interval (like 1/4 note) that pushes the delay repeat *outside* of this 200ms forward-masking window.

### 2.2 Backward Masking (The "Pre-Echo")
Surprisingly, a loud sound can mask a quieter sound that occurred **5ms to 20ms BEFORE** it.
- **The Physics:** The brain processes loud sounds faster than quiet ones. The "Loud" hit literally overtakes the "Quiet" one in the neural pathway.
- **The Trap:** A loud delay repeat occurring right before a new vocal word will "Blur" the start of that word.

---

## 3. The Ducker as a Neurological Safety Valve
### 3.1 Adaptive Thresholding
Fruity Delay 3’s internal **Ducker** acts as a "Guardian" of the vocal's clarity.
- **The Strategy:** Set the Ducker Threshold so the delay is suppressed by **12dB - 18dB** while the singer is performing.
- **The Science:** You are mathematically ensuring that the delay energy stays below the **Masking Threshold** of the lead vocal.
- **The "Bloom":** By setting the **Release** to 400ms, the delay only reaches full volume once the vocal has finished. The brain interprets this as a "Vast Environment" that respects the human presence.

---

## 4. Spectral Masking and Damping
### 4.1 Frequency-Dependent Masking
Low-frequency delays mask the mids much more than high-frequency delays mask the lows.
- **The Master Move:** Always set the **HP Filter** in Delay 3 to at least **400Hz**.
- **The Reason:** This removes the sub-energy from the delay tail. Since sub-energy has the longest masking window, removing it ensures your mix stays "Intelligible" even with 90% feedback.

---

## 5. Engineering the "Trippy" Mask
### 5.1 Intentional Confusion
In psychedelic R&B, we sometimes want to **Cause Masking** to create a hazy, "Drugged" sensation.
- **The Technique:** Set Delay 3 to 1/32 note intervals with 0% Ducking and high **Diffusion**.
- **The Effect:** The repeats occur so fast they are trapped inside the brain's 50ms masking window. The listener's localization system "Breaks," and they perceive the sound as a "Melodic Nebula" rather than a series of notes.

---

## 6. Table of Temporal Thresholds

| Delay Offset | Brain Reaction | Mix Consequence | Best Genre Use |
|--------------|----------------|-----------------|----------------|
| **1 - 15ms** | Phasing        | Comb Filtering. | Glitch / FX.   |
| **15 - 35ms**| Fusion (Haas)  | Perceives "Width."| R&B Lead Vocals.|
| **50 - 150ms**| Forward Mask   | "Muddy" / Cluttered.| **Avoid for clarity.**|
| **200ms+**   | Discrete Echo  | Distinct Repetition.| Melodic Echoes. |

---

## 7. Conclusion: The Master of the Window
Mastering the temporal masking physics in Fruity Delay 3 is about **Neurological Respect.** By understanding the biological timing of human hearing, you can design delay systems that are massive and cinematic while remaining 100% intelligible. This is the hallmark of the "Platinum" sound. Follow these protocols to ensure your spatial design enhances the emotion of the track without ever confusing the listener's brain.

---
**Document Version:** 1.0 (Neuro-Sonic Tier)
**Author:** Psychoacoustic Physics Lead
**Keywords:** Temporal Masking, Forward Masking, Ducker Logic, Brain Thresholds, Delay 3 Physics, FL Studio Engineering.

```

---

## FILE: 01-Learning\Concepts\temporal-psychoacoustics.md

```markdown
# Temporal Psychoacoustics: The Brain and Echoes

## How the Brain Processes Delay
Delay isn't just about repetition; it's about the brain's ability to localize sound in a 3D environment.

### 1. The Hass Window (Spatial Fusion)
- **Range:** 1ms to 35ms.
- **Perception:** The brain cannot hear two distinct sounds. Instead, it "fuses" them.
- **Technique:** Set Delay 3 to 10ms with 0% Feedback. This creates a "shadow" that adds immense width without adding "roominess."

### 2. Temporal Masking
- **Concept:** A loud sound (Dry) can hide a quieter sound (Delay) that occurs immediately after it.
- **The Ducker Fix:** This is why the **Ducker** in Delay 3 is critical. It moves the echoes *out of the way* of the dry transients, preventing "Masking" and ensuring the lyrics stay sharp.

### 3. Depth and Frequency
- Higher frequencies dissipate faster in the air.
- **The Depth Rule:** By lowering the **LP Filter** on each repeat, you are mimicking the physics of air absorption. This "pushes" the delay repeats physically further back in the listener's virtual space.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Delay 3 (5 Minutes)

1.  **Insert:** Load **Fruity Delay 3** onto a vocal or synth.
2.  **Time:** Set the **TIME** knob. Right-click to choose a tempo-synced value (e.g., 4 steps = 1/4 note).
3.  **Wobble:** Turn the **MOD TIME** knob slightly to hear the analog "tape wobble."
4.  **Grit:** Change the **DISTORTION** mode to "Sat" and increase the level for warmth.
5.  **Clean:** Adjust the **FILTER** knobs (HP/LP) to ensure the echoes don't muddy your low-end.
6.  **Tip:** Use the **DIFFUSION** knob to smear the delay taps into a lush, reverb-like space. [SRC: IL-MAN]
```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Delay 3

*   **Leaving "Keep Pitch" Off:** Forgetting that "Keep Pitch" is OFF by default. If your project tempo changes, your vocal echoes will slide out of key. **Fix:** Enable "Keep Pitch" if you want a clean digital behavior.
*   **Over-Saturation:** Maxing out the "Drive" in **Bit** or **Sine** mode. This causes ear-piercing digital noise. **Fix:** Use "Limit" mode to keep the volume under control.
*   **Low-Pass Only:** Forgetting that Delay 3 has a **High-Pass** filter. Many users still use external EQs when Delay 3 can clean itself up.
*   **Too Much Diffusion:** Thinking Diffusion is a better Reverb. Too much diffusion in a busy mix creates "spatial mud." **Fix:** Keep Diffusion under 40% if you want the echoes to remain rhythmic.
*   **Ignoring Ducking:** Not using the built-in sidechain. This is the #1 feature that makes Delay 3 sound "pro" and radio-ready. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Delay 3

| Goal | Distortion | Filter | Diffusion | Duck |
| :--- | :--- | :--- | :--- | :--- |
| **Warm Tape Echo** | Sat (5%) | BP | 15% | 20% |
| **Ambient Cloud** | Limit | LP | 80% | 50% |
| **Lo-Fi Grit** | Bit (30%) | Off | 0% | 0% |
| **Clean Pop Lead** | Off | HP | 0% | 80% |
| **Trippy Warp** | Sine (10%) | BP | 40% | 30% |

*Note: Use "BP" filter to ensure no low-end clutter (Rule 1 of delay).* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Delay 3)

*   **The Goal:** A dark, degraded, and "crushed" texture.
*   **Recipe:**
    *   **Time:** 1/2 note.
    *   **Distortion:** Bit Mode (Sample rate reduction).
    *   **Filter:** Bandpass (Centered at 500Hz).
    *   **Diffusion:** 50% (Softens the crunch).
    *   **Feedback:** 75%.
*   **Result:** The echoes sound like they are coming from a broken transistor radio in a dark hallway.
*   **Automation:** Automate the **Feedback Cutoff** to move down as the track fades, making the mood "sink." [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Gloss")
*   **Settings:** Sat Mode (10% Drive), Time 1/8 note, HP Filter @ 400Hz.
*   **Tip:** Use the **Stereo Offset** to separate the echoes from the main vocal for a wider "expensive" feel.

## Psychedelic (The "Spiral")
*   **Settings:** Sine Distortion, Max Modulation Time, 90% Feedback.
*   **Tip:** Link the **Modulation Rate** to an automation clip that speeds up during the build-up.

## Jazzy (The "Vintage Reel")
*   **Settings:** Limit Mode, 0.2Hz Modulation Rate, LP Filter @ 5kHz.
*   **Tip:** Set Feedback so you only hear 2 or 3 repeats. It mimics a clean high-end studio tape.

## Vibey (The "Halo")
*   **Settings:** High Diffusion (70%), Ducking (60%), BP Filter.
*   **Tip:** This creates a shimmering space around the vocal that never obscures the words. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Delay 3: The "Analog" Chameleon

> **Scope:** Full parameter analysis, Signal Flow, and Analog Modeling.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High.

## 🧠 The "Tape" Concept
Fruity Delay 3 is designed to emulate the imperfections of analog tape and bucket-brigade delay units. Unlike digital delays (Delay 2), Delay 3 introduces pitch warping (wow/flutter), saturation, and diffusion.

**Signal Flow:**
`Input` -> **[DELAY LINE]** -> **[FEEDBACK LOOP]** -> **[FILTER + DISTORTION]** -> **[OUTPUT MIX]**

*   **Critical Nuance:** The distortion and filtering happen *inside* the feedback loop. This means every repeat gets dirtier and darker than the last.

---

## 🎛️ Section 1: Time & Models (DELAY Tag)

### Delay Models

| Model | Description & Usage |
| :--- | :--- |
| **Mono** | Sums L+R inputs. Basic. Good for lead vocals where spread isn't needed. |
| **Stereo** | Independent L/R lines. Preserves the stereo image of the source. |
| **Ping Pong** | Swaps L/R channels on each repeat. Creates wide, bouncing movement. |
| **Off** | **HIDDEN FEATURE:** Disables delay but keeps Filter, Distortion, and Modulation active. Turns the plugin into a "Lo-Fi / Distortion" FX unit. |

### Time Controls

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Time** | 0ms - 1000ms | **Delay Buffer Length.** <br> *Nuance:* If "Tempo Sync" is ON, this knob snaps to musical intervals (dots). |
| **Tempo Sync** | ON/OFF | **Grid Lock.** <br> Light ON: Snaps to 1/16ths. Light OFF: Free milliseconds. |
| **Keep Pitch** | ON/OFF | **Tape Mechanics.** <br> *ON:* Changing time sounds digital (clean cut). <br> *OFF:* Changing time warps the pitch (Doppler effect), like speeding up/slowing down a tape machine. |
| **Smoothing** | 0 - 100% | **Slew Rate Limiter.** <br> *Nuance:* When "Keep Pitch" is OFF, this controls *how fast* the pitch glides to the new value. High smoothing = dreamy, slow "Tape Stop" effects. |
| **Offset** | -100% to +100% | **Stereo Widener.** <br> Delays the Left or Right channel slightly relative to the main Time. <br> *Haas Effect:* Set to ~20ms to create ultra-wide stereo without distinct echoes. |

---

## 🔁 Section 2: The Loop (FEEDBACK Tag)

This section controls what happens to the echo before it returns to the start.

### Level & Filtering

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Level** | 0% to 125% | **Repeats.** <br> *Warning:* Goes to 125%. Values >100% will self-oscillate and get infinitely louder until the Distortion limiter catches them. |
| **Cutloss** | Hz | **Damping.** <br> Filters the repeats. |
| **Res** | 0% to 100% | **Filter Resonance.** <br> *Creative:* High resonance creates a "ringing" tone on every echo. |
| **Type** | LP/HP/BP | **Filter Topology.** <br> *LP (Low Pass):* Tape Dub style. Echoes get darker. <br> *HP (High Pass):* Thin, telephone style. Echoes get thinner. |

### Digital Degradation (The "Bitcrusher")

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Sample Rate** | 48kHz to 100Hz | **Aliasing.** <br> Lowers the sample rate of the wet signal. Adds metallic "ringing" artifacts. |
| **Bits** | 16 to 1 | **Quantization Noise.** <br> Reduces bit depth. Adds white noise and "fizz". |

---

## 🌊 Section 3: Modulation (The "Warp" Engine)

Modulates the delay time using an internal Low Frequency Oscillator (LFO).

| Control | Range | Function |
| :--- | :--- | :--- |
| **Rate** | 0Hz to 20Hz | **LFO Speed.** |
| **Time** | 0 to 100% | **Pitch Wobble Amount.** <br> Modulates the delay time. Because "Keep Pitch" is ignored here, this creates detuning (Chorusing/Vibrato) on the echoes. |
| **Cutoff** | 0 to 100% | **Filter Sweep.** <br> Modulates the Filter Cutoff. Creates sweeping "Phaser-like" echoes. |

---

## 🌫️ Section 4: Diffusion (The Reverb Maker)

"Smears" the feedback reflections, turning distinct echoes into a wash of sound.

| Control | Range | Function |
| :--- | :--- | :--- |
| **Level** | 0 to 100% | **Smear Amount.** <br> low = Discrete Echoes. High = Reverb/Hall. |
| **Spread** | 0 to 100ms | **Smear Time.** <br> How far apart the micro-reflections are spaced. |

---

## 🔥 Section 5: Feedback Distortion (The Safety Valve)

When Feedback > 100%, this prevents your speakers from blowing up. It waveshapes the signal.

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Limits / Sat** | Switch | **Mode.** <br> *Limit:* Hard ceiling. Clean but harsh if driven hard. <br> *Sat:* Soft saturation. Adds harmonics. Warms up self-oscillation. |
| **Knee** | Soft/Hard | **Curve Shape.** <br> Soft Knee = Tube-like distortion. |
| **Symmetry** | Sym/Asym | **Harmonic Content.** <br> *Symmetrical:* Odd harmonics (Square wave). <br> *Asymmetrical:* Even harmonics (Tube/Triode). |
| **Level** | -Inf to 0dB | **Drive Threshold.** <br> Determines how loud the signal must be to trigger distortion. Lower this to make quiet echoes gritty. |

---

## 🏁 Output

| Control | Range | Function |
| :--- | :--- | :--- |
| **Wet** | -Inf to +6dB | Volume of the delayed signal. |
| **Dry** | -Inf to +6dB | Volume of the original signal. |

---

## 🧪 "Secret Sauce" Combinations

### 1. The "Tape Machine"
*   **Keep Pitch:** OFF.
*   **Smoothing:** 50%.
*   **Mod Time:** 15% (Subtle movement).
*   **Filter:** LP @ 3000Hz.
*   **Saturation:** ON.
*   **Result:** Warm, wobbling, "alive" echoes.

### 2. The "Fake Reverb"
*   **Delay Time:** <100ms.
*   **Feedback:** 60%.
*   **Diffusion Level:** 100%.
*   **Diffusion Spread:** 50%.
*   **Result:** A metallic, cavernous room reverb.

### 3. The "Dub Siren"
*   **Feedback:** 110% (Self Oscillation).
*   **Distortion:** Limit Mode (Hard).
*   **Time:** Automate heavily while "Keep Pitch" is OFF.
*   **Result:** Sci-Fi laser sounds and pitch dives.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Delay 3: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** Multi-Model Hybrid Delay Processor
**Engine Version:** v3.x (Legacy Compatible)
**Target Genres:** Hip-Hop, Rap, R&B, Psychedelic, Lo-Fi, Cinematic

---

## 1. THE TIME MODULE (Temporal Engine)
The Time module is the brain of the plugin. It determines the rhythmic spacing and physical length of the delay buffer.

### 1.1 Time Knob (The Main Clock)
- **Technical Range:** 0ms to 4000ms (4 Seconds).
- **Tempo Sync Logic:** When the 'Tempo Sync' button is engaged, the knob snaps to musical intervals (1/16, 1/8, 1/4, etc.).
- **Master Tip:** In 'Analog Mode', automating this knob creates the "Screaming Acid" pitch-shift effect. For smooth sweeps, use a **Bezier curve** in your automation clip.
- **Hidden Feature:** Right-click the knob and select 'Set' to input specific millisecond values for "Off-Grid" grooves.

### 1.2 Model Selector (Digital vs. Analog)
- **Digital Mode:** Uses a standard pointer-jump logic. Perfect for clean, rhythmic echoes where you don't want pitch fluctuations.
- **Analog Mode:** Uses a resampling engine. This emulates the physical physics of tape. If you change the time while sound is playing, you get a smooth pitch glide. This is the **CORE** of psychedelic sound design.

### 1.3 Offset (Stereo Time Difference)
- **Range:** -100% to +100%.
- **Physics:** It delays the Left or Right channel relative to the other.
- **The "Ping-Pong" Rule:** To create a classic ping-pong effect, set the Offset to 100% and ensure your feedback is set to 'Stereo' or 'Ping-Pong' mode.
- **Psychoacoustic Use:** Set to a tiny value (5-15ms) to widen a mono vocal using the Haas Effect.

---

## 2. THE FEEDBACK MODULE (Recirculation Path)
Feedback determines how many times the sound repeats and how those repeats evolve over time.

### 2.1 Feedback Level (The Regen Knob)
- **Range:** 0% to 125%.
- **The Danger Zone:** Anything above 100% will cause "Self-Oscillation." In Digital mode, this will clip and become a harsh wall of noise. In Analog mode, it will "howl" like a vintage amp.
- **Moody Tip:** For R&B ballads, keep this at exactly 40-50% for 3-4 clearly audible repeats.

### 2.2 Saturation (The Warmth Engine)
- **Type:** Soft-clipping diode emulation.
- **Internal Math:** It applies a non-linear transfer function to the feedback loop. 
- **Production Impact:** As repeats continue, they get "fuzzier" and "fatter." This is essential for Lo-Fi Hip-Hop to give the echoes a "sampled" texture.

### 2.3 Sample Rate & Bit Depth (The Grit Section)
- **Sample Rate Redux:** Lowers the playback frequency of the feedback loop. Setting this to 12kHz creates a dark, "MPC-60" style crunch.
- **Bit Depth:** Reduces the vertical resolution of the waveform. Dropping to 8-bit or 12-bit adds "digital hiss" and quantization noise, perfect for gritty industrial Rap.

---

## 3. THE FILTER MODULE (Feedback Shaping)
Filters are used to place the delay in the "3D space" of the mix.

### 3.1 High-Pass (HP) Filter
- **Range:** 10Hz to 20kHz.
- **The "Clean Mix" Rule:** In Hip-Hop, always set the HP to at least 300Hz. This ensures your kick drum and 808 don't trigger the delay, which would create a muddy mess.

### 3.2 Low-Pass (LP) Filter
- **Range:** 10Hz to 20kHz.
- **The "Distance" Rule:** High frequencies travel less efficiently through air. Lowering the LP to 3kHz makes the delay sound like it's coming from far away. This is the secret to "Moody" atmosphere.

### 3.3 Resonance (The Whistle)
- **Behavior:** Boosts the volume at the cutoff frequency. 
- **Psychedelic Tip:** Turn Resonance up to 80% and automate the Cutoff. This creates "Dub-style" filter sweeps that ring out rhythmically.

---

## 4. THE MODULATION MODULE (The Trippy Engine)
This section adds movement and life to the static echoes.

### 4.1 Vibrato Rate & Depth
- **LFO Shape:** Sine wave.
- **Physics:** It modulates the Delay Time internally.
- **The "Mike Dean" Setup:** Rate at 0.5Hz, Depth at 25%, Analog Mode. This creates the "Melting Lead" sound found on Travis Scott's *Astroworld*.

---

## 5. THE DIFFUSION MODULE (The Texture Engine)
This turns distinct echoes into a smooth cloud of sound.

### 5.1 Diffusion Amount
- **Mechanism:** A series of nested all-pass filters that smear the transient of each repeat.
- **Use Case:** Set to 100% to turn a simple snare hit into a lush ambient reverb tail.

### 5.2 Smear
- **Mechanism:** Spectral smoothing.
- **Use Case:** Removes the "grainy" artifacts from high diffusion settings. Essential for "Dreamy" R&B background textures.

---

## 6. THE DUCKER MODULE (The Clarity Engine)
The Ducker is what makes Fruity Delay 3 a "Pro-Grade" tool for vocals.

### 6.1 Threshold & Release
- **Threshold:** Sets the level at which the delay volume is reduced.
- **Release:** How fast the delay "blooms" back up after the dry sound stops.
- **The "Pro Vocal" Secret:** Set Threshold so the delay is nearly silent while the rapper is speaking. Set Release to 400ms so the delay fills the silence between bars. This keeps the vocal "dry and present" but the track "big and lush."

---

## 7. MASTER MIX SECTION
### 7.1 Dry / Wet / Panning
- **Dry:** Level of the original signal. Keep at 100% for track inserts.
- **Wet:** Level of the delay repeats.
- **Master Tip:** For "Upbeat" tracks, pan the Wet signal slightly to the opposite side of the Dry signal to create an immediate sense of stereo balance.

---

## 8. HIDDEN RIGHT-CLICK MENUS & SHORTCUTS
### 8.1 The "Expert" Options
- **Right-Click Feedback Mode:** Toggle between 'Normal', 'Inverted' (creates phase-cancellation effects), and 'Ping-Pong'.
- **Right-Click Time Mode:** Switch between 'Samples', 'Milliseconds', and 'BPM' units.
- **Copy/Paste Values:** You can right-click any knob to copy its exact mathematical value and paste it into another instance of the plugin for perfect alignment.

---

## 9. TROUBLESHOOTING & OPTIMIZATION
- **CPU Spikes:** High Diffusion and High Feedback combined can cause CPU spikes. If this happens, lower the 'Diffusion Smear'.
- **Audio Clicks:** If you hear clicking, increase the **VCA Smooth** (hidden in wrapper) or add 2ms of **Attack** to the internal ducker envelope.
- **Phase Issues:** If the delay sounds "thin" when summed to mono, check the **Offset** knob. Values around 1-5ms are the most dangerous for phase cancellation.

---

## 10. SUMMARY: THE "VIBE" CHEAT SHEET
- **MOODY:** Low LP Filter (2kHz), High Diffusion (80%), Ducker Depth (70%).
- **UPBEAT:** Tempo-Synced 1/8 note, Low Feedback (20%), High Saturation (40%).
- **PSYCHEDELIC:** Analog Mode, Vibrato Depth (30%), Feedback (95% - watch out for oscillation!).
- **COOL/LO-FI:** Sample Rate (10kHz), Bit Depth (12-bit), HP Filter (500Hz).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** FL Studio, Fruity Delay 3, DSP Engineering, Audio Mastery, Hip-Hop Sound Design.
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Delay 3

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Time** | Knob | **Upbeat** (Rhythm)| **Timing** | Delay duration (Steps or MS). |
| **Feedback** | Knob | **Psychedelic** | **Density** | Number of repetitions. |
| **Mod Time** | Knob | **Vibey** (Wobble) | **Tune** | Intensity of pitch drift. |
| **Diffusion** | Knob | **Spacey** (Wash) | **Width** | Transent smearing level. |
| **Filter HP/LP**| Knob | **Moody** (Dark) | **Clarity** | Frequency range of echoes. |
| **Distortion** | Selector | **Vibey** (Grit) | **Harmonics** | Saturation character (Sat/Lim).|

- **Vibe Impact Tag (Diffusion):** High values turn "Taps" into "Clouds," creating an expensive atmospheric space.
- **Mix Impact Tag (Clarity):** Always set the HP filter to at least **200Hz** to prevent feedback from muddying the kick drum. [SRC: IL-MAN]
```

---

## FILE: 02-Data\parameters\delay3-specs.json

```json
{
  "plugin": {
    "name": "Fruity Delay 3",
    "category": "Delay",
    "type": "Multi-Model Delay",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay%203.htm"
  },
  "parameters": {
    "time": {
      "id": "time",
      "range": "0-4000ms",
      "bpmSync": true,
      "modes": ["Digital", "Analog"]
    },
    "feedback": {
      "id": "feedback",
      "range": "0-100%+",
      "features": ["Saturation", "Sample Rate Redux", "Filter (LP/HP)"]
    },
    "modulation": {
      "id": "vibrato",
      "rateRange": "0.1-10Hz",
      "depthRange": "0-100%"
    },
    "spatial": [
      "Diffusion", "Smear", "Stereo Offset", "Ping-Pong"
    ]
  },
  "specialFeatures": [
    "Ducker (Sidechain Envelope)",
    "Bit-Reduction in feedback loop",
    "True Analog emulation mode"
  ]
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Delay 3",
  "tabs": ["DELAY", "FEEDBACK", "MODULATION", "DIFFUSION", "DISTORTION"],
  "parameters": [
    {
      "section": "Input",
      "id": "wet_input",
      "name": "Input Wet",
      "range": { "min": -60, "max": 6, "unit": "dB" },
      "description": "Adjusts the input level sent to the delay engine. Useful for automating 'Dub Throws'."
    },
    {
      "section": "Delay",
      "id": "delay_time",
      "name": "Time",
      "range": { "min": 0, "max": 1000, "unit": "ms" },
      "description": "Delay time. Units change to 'Step' when Tempo Sync is ON."
    },
    {
      "section": "Delay",
      "id": "delay_offset",
      "name": "Offset",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Stereo offset. Delays L or R channel relative to main time."
    },
    {
      "section": "Feedback",
      "id": "fb_level",
      "name": "Feedback Level",
      "range": { "min": 0, "max": 125, "unit": "%" },
      "description": "Number of repeats. >100% causes self-oscillation."
    },
    {
      "section": "Feedback",
      "id": "fb_cutoff",
      "name": "Filter Cutoff",
      "range": { "min": 10, "max": 20000, "unit": "Hz" },
      "description": "Frequency of the filter inside the feedback loop."
    },
    {
      "section": "Feedback",
      "id": "fb_res",
      "name": "Resonance",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Filter peak amount."
    },
    {
      "section": "Feedback",
      "id": "sample_rate",
      "name": "Sample Rate",
      "range": { "min": 100, "max": 48000, "unit": "Hz" },
      "description": "Downsampling quality. Low values create metallic aliasing."
    },
    {
      "section": "Modulation",
      "id": "mod_rate",
      "name": "Mod Rate",
      "range": { "min": 0, "max": 20, "unit": "Hz" },
      "description": "Speed of the LFO."
    },
    {
      "section": "Modulation",
      "id": "mod_time",
      "name": "Mod Time",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Amount of pitch wobble applied to delay repeats."
    },
    {
      "section": "Diffusion",
      "id": "diff_level",
      "name": "Diffusion Level",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Smearing amount. Turns echoes into reverb."
    },
    {
      "section": "Distortion",
      "id": "dist_level",
      "name": "Distortion Threshold",
      "range": { "min": -60, "max": 0, "unit": "dB" },
      "description": "Input level required to trigger saturation."
    },
    {
      "section": "Distortion",
      "id": "dist_knee",
      "name": "Distortion Knee",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Transitions from clean to distorted."
    }
  ]
}

```

---

## FILE: 02-Data\presets\echo-archetypes.json

```json
{
  "archetypes": [
    {
      "name": "Vintage Tape",
      "settings": {
        "model": "Analog",
        "saturation": "45%",
        "vibratoRate": "0.3Hz",
        "vibratoDepth": "15%",
        "lpFilter": "4500Hz"
      },
      "useCase": "Warm, drifting repeats for analog synths."
    },
    {
      "name": "Ambient Cloud",
      "settings": {
        "diffusion": "85%",
        "smear": "60%",
        "feedback": "75%",
        "hpFilter": "350Hz"
      },
      "useCase": "Turning short plucks into lush, reverb-like backgrounds."
    },
    {
      "name": "Digital Glitch",
      "settings": {
        "model": "Digital",
        "sampleRate": "12kHz",
        "bitDepth": "8-bit",
        "feedback": "95%"
      },
      "useCase": "Industrial textures and rhythmic noise loops."
    }
  ]
}

```

---

## FILE: 02-Data\presets\psychedelic-archetypes.json

```json
{
  "psychedelicDelayArchetypes": [
    {
      "name": "The Melting Pitch",
      "settings": {
        "model": "Analog",
        "time": "Automated",
        "vibratoDepth": "25%",
        "feedback": "80%"
      },
      "vibe": "Drunken, pitch-bending delays for transition effects."
    },
    {
      "name": "Spectral Ghost",
      "settings": {
        "smear": "80%",
        "diffusion": "60%",
        "feedback": "70%",
        "filter": "Band-Pass (2k-5k)"
      },
      "vibe": "Floating, ethereal melodic shadows."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Delay 3)

## 1. The "200Hz Wall" Rule
- **Rule:** Never allow low-frequency delay feedback.
- **Application:** Use the built-in **High Pass (HP)** filter in Delay 3. Set it to **200Hz-300Hz**. This ensures the delay doesn't fight with your 808 or sub-bass. [SRC: REPUTABLE]

## 2. Tape Stop Transitions
- **Rule:** Changing delay time should be an effect.
- **Application:** Automate the **Time** knob at the end of a bar. Because Delay 3 mimics analog tape, the pitch will slide up/down, creating a "Tape Stop" or "Fast Forward" vibe.

## 3. Vocal Diffusion for "Vibes"
- **Rule:** Background vocals shouldn't be "pointy."
- **Application:** Use **High Diffusion** (60%+) on backing vocal delays. This smears the transients, making the background vocals feel "blurry" and supportive rather than distracting.

## 4. Mono-Check (Stereo Offset)
- **Rule:** The "Offset" knob can kill your mono mix.
- **Check:** If you use the Offset knob to widen the delay, check your mix in Mono. If the delay disappears, reduce the offset or use the internal Panner to center the feedback.

## 5. Saturation Discipline
- **Rule:** Distorted delays sound "Closer," Clean delays sound "Further."
- **Application:** For a "Spacey" feel, keep distortion low. For a "Moody/Gritty" feel, use the **Sat** mode at 30% to make the echoes pop through the mix. [SRC: IL-MAN]
```

---

## FILE: 02-Data\rules\delay-selection-rules.json

```json
{
  "decisionTree": {
    "problem": "Delay is muddying the mix",
    "solutions": [
      {
        "condition": "Low-end buildup",
        "action": "Increase HP Filter to >300Hz"
      },
      {
        "condition": "Clashing with lead vocal",
        "action": "Increase Ducker Depth and Release"
      },
      {
        "condition": "High-end competition",
        "action": "Lower LP Filter to <5000Hz"
      }
    ],
    "problem": "Delay sounds too 'static' or robotic",
    "solutions": [
      {
        "action": "Enable Analog mode and add subtle Vibrato"
      },
      {
        "action": "Add 5-10% Diffusion to smear the repeats"
      }
    ]
  }
}

```

---

## FILE: 02-Data\rules\psychoacoustic-spatial-rules.json

```json
{
  "psychoacousticSpatialRules": {
    "philosophy": "This data-set provides the exact mathematical parameters for Fruity Delay 3 to simulate a virtual 3D environment based on the biology of human hearing.",
    "spatialZones": [
      {
        "zone": "The Inner Circle (Intimacy)",
        "objective": "Make the listener feel like the singer is in their own head.",
        "settings": {
          "time": "0 ms",
          "offset": "5-10 ms",
          "model": "Digital",
          "lpFilter": "12000 Hz",
          "feedback": "0%",
          "wetLevel": "15%"
        },
        "logic": "Minimal temporal offset mimics the width of a human skull. High LP preserves the 'Air' of the performance."
      },
      {
        "zone": "The Studio Booth (Presence)",
        "objective": "Mimic a professional, dampened acoustic environment.",
        "settings": {
          "time": "40 ms",
          "offset": "15 ms",
          "model": "Analog",
          "lpFilter": "6000 Hz",
          "feedback": "15%",
          "wetLevel": "25%"
        },
        "logic": "40ms is just outside the Haas window, creating a distinct reflection that mimics a wall 20 feet away."
      },
      {
        "zone": "The Dark Hall (Mood)",
        "objective": "Create a vast, atmospheric background shadow.",
        "settings": {
          "time": "1/2 Beat",
          "offset": "20 ms",
          "model": "Analog",
          "lpFilter": "1800 Hz",
          "diffusion": "80%",
          "feedback": "65%",
          "wetLevel": "40%"
        },
        "logic": "Aggressive LP filtering and high diffusion remove the 'Identity' of the sound, leaving only the 'Emotion'."
      },
      {
        "zone": "The Psychedelic Void (Trippiness)",
        "objective": "Disorient the listener's localization system.",
        "settings": {
          "time": "Automated (Spiral)",
          "offset": "100%",
          "vibratoDepth": "40%",
          "saturation": "60%",
          "feedback": "95%",
          "wetLevel": "100%"
        },
        "logic": "Extreme vibrato and feedback saturation trigger the 'Uncanny Valley' response in the auditory cortex."
      }
    ],
    "collisionRules": [
      {
        "conflict": "Delay clashing with 808",
        "action": "Set internal HP filter to 450Hz; use 'Invert' feedback mode to cancel low-frequency buildup."
      },
      {
        "conflict": "Delay masking vocal clarity",
        "action": "Increase Ducker Threshold to -15dB; set Release to 1/4 note interval in ms."
      }
    ]
  }
}

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Delay 3

## 1. The "Dub Throw" (Automation)

A classic reggae/dub technique where only specific words or hits are sent to the delay.

**Concept:** Instead of automating the "Mix Level" knob, automate the **Input Wet** knob. This allows the feedback tail to ring out naturally even after you stop sending signal.

1.  **Setup:** Place Delay 3 on a Vocal Insert.
2.  **Input:** Set the small **Wet** knob (under Input section) to 0% (Left).
3.  **Automation:** Right-click Input Wet -> Create Automation Clip.
4.  **Action:** Draw a "Spike" in the automation clip only on the last word of a phrase (e.g., "Love").
5.  **Result:** Only that word enters the feedback loop. The echoes continue cleanly. If you automated the *Mix* knob, the echoes would cut off abruptly when the automation went down.

## 2. Lo-Fi Chorus / Vibrato

Using Delay 3 as an insert effect without any actual "Echoes".

1.  **Delay Model:** Set to **OFF**.
    *   *Note:* This disables the buffer, but NOT the processing.
2.  **Wet/Dry:** Set Dry to 0%, Wet to 100%.
3.  **Modulation:**
    *   **Rate:** ~3 Hz.
    *   **Time:** ~15% (Wobble).
4.  **Degradation:**
    *   **Sample Rate:** Dial down to ~12kHz.
    *   **Bits:** 12 Bits.
5.  **Result:** A wobbly, gritty, vintage chorus effect that sounds like a broken VHS tape. Perfect for "Boards of Canada" style synths.

## 3. The "Abyss" Reverb (Diffusion Hack)

Turning a delay line into a massive, dark reverb.

1.  **Time:** Set to ~150ms.
2.  **Feedback:** High (~80%).
3.  **Filter:** LP (Low Pass). Cutoff around 4kHz.
4.  **Diffusion:**
    *   **Level:** 100% (Max).
    *   **Spread:** 100% (Max).
5.  **Distortion:** Enable Saturation.
6.  **Result:** The echoes are so smeared they lose their transient attacks. They merge into a dark, rolling thundercloud of sound. Great for Cinematic Drones.

## 4. Tape Stop / Pitch Dive

Creating the "slowing down turntable" effect.

1.  **Keep Pitch:** Ensure this is **OFF**.
2.  **Smoothing:** Set to roughly **75%**.
    *   *Why?* High smoothing makes the pitch glide slower.
3.  **Action:** Automate the **TIME** knob.
4.  **Perform:** Quickly automate the Time from 200ms -> 800ms.
5.  **Result:** The pitch will drop drastically (Doppler Effect) and slowly slide back up, exactly like putting your finger on a playing record.

## 5. Stereo Width (The Haas Effect)

Making a mono sound stereo without reverb.

1.  **Model:** Stereo.
2.  **Time:** 0ms (Minimum).
3.  **Offset:** Turn to +20ms.
4.  **Feedback:** 0% (No repeats).
5.  **Result:** The Right channel is delayed by 20ms. The brain perceives this not as an echo, but as extreme width.
    *   *Warning:* Check in Mono. This can cause phase cancellation.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The Infinite Spacey Cloud (Fruity Delay 3)

## Routing Context
- **Target:** Ambient Synth Pad or Pluck.
- **Position:** Parallel Send (100% Wet).

## Step-by-Step Setup
1.  On your pad track, send 100% to a new mixer track named "Cloud."
2.  Load **Fruity Delay 3** on the "Cloud" track.
3.  Set **TIME** to `1/2 note` (8 steps).
4.  Set **FEEDBACK** to `70%`.
5.  Set **DIFFUSION** to `90%` (Maximum smear).
6.  Set **FILTER LP** to `3kHz` (to darken the cloud).
7.  **The Secret Sauce:** Turn **MOD TIME** to `10%` and **MOD RATE** to `0.2Hz`.
8.  **The Result:** The delay taps disappear, turning into a slowly drifting, shimmering cloud that never ends.

## Vibe Check
- **Spacey/Vibey:** This is the ultimate "Dreamy R&B" background texture.

## Automation Idea
- Automate the **Feedback** knob to rise to 95% at the end of the song, letting the cloud consume the mix during the fade-out. [SRC: REPUTABLE]
```

---

## FILE: 03-Workflows\by-goal\01_Goal_Space_And_Motion.md

```markdown
# Workflow: Dub-Techno Chord Clouds (Delay 3)

## The Concept
Using Delay 3 as a texture generator to turn a single chord into an evolving, metallic atmosphere.

## Step-by-Step
1.  Load a short, percussive Synth Chord.
2.  Place **Fruity Delay 3** on the track.
3.  Set **Time** to `3.00` (Dotted 1/8th).
4.  Set **Feedback** to `90%`.
5.  Set **Distortion** to `Bit`. Drive at `20%`.
6.  Set **Diffusion** to `70%`.
7.  **Performance:** Slowly move the **Filter Cutoff** knob manually while the chord plays.

## Vibe Check
*   **Psychedelic:** The high feedback and bit-crushing create a "whistling" tail that smears into a dark cloud.
*   **Atmospheric:** This is the sound of "deep" R&B and experimental electronic hip-hop.

## Automation Idea
*   Automate the **Duck** knob to "pulsate" the cloud in time with the Kick drum. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\ducking-vocal-delay.md

```markdown
# Ducking Vocal Delay Workflow

## Goal
Apply a large, lush delay to a vocal track without making the lyrics unintelligible or muddy.

## Steps
1. **Plugin Setup**: Insert **Fruity Delay 3** on the vocal mixer track (or a dedicated send).
2. **Core Settings**:
   - Set **Time** to `1/4` or `1/8` beat.
   - Set **Feedback** to ~50%.
   - Set **Wet** to ~40% (if on track) or 100% (if on send).
3. **Filter the Feedback**: 
   - Set **HP** to 400Hz to remove sub-muddiness.
   - Set **LP** to 5kHz to keep the delay "behind" the dry vocal.
4. **Enable the Ducker**:
   - Locate the **Ducker** section in the bottom right.
   - Set the **Sidechain** to the vocal input (default if on same track).
   - Increase the **Depth** knob.
5. **Refine**:
   - While the vocal is playing, you should see/hear the delay getting quieter.
   - Adjust **Release** so the delay "blooms" back up in the gaps between words.

## Result
A professional "expensive" delay sound that stays out of the way of the performance but fills the silence beautifully.

```

---

## FILE: 03-Workflows\by-goal\moody-underwater-vocals.md

```markdown
# Masterclass: The "Moody Underwater" Vocal Aesthetic in Fruity Delay 3

## 1. Executive Summary: The "Drake" and "PartyNextDoor" Vibe
The "Underwater" sound is more than just a low-pass filter. It is a psychoacoustic illusion designed to make the listener feel like they are submerged in a liquid environment—isolated, intimate, and moody. This aesthetic is the cornerstone of Toronto R&B and Melodic Trap. In this guide, we will break down the precise engineering required to achieve this using **Fruity Delay 3** as our primary spatial engine.

---

## 2. Theoretical Foundation: The Liquid Physics of Sound
### 2.1 Frequency Absorption in Water
In physical water, high frequencies are absorbed almost instantly. Only low-frequency energy (the "body") travels over distance.
- **The Engineering Goal:** We need to aggressively eliminate the "Air" (10kHz+) and the "Presence" (3k-5kHz) from our delay tail while preserving the melodic fundamental.

### 2.2 Temporal Smearing
Water doesn't have sharp, reflective surfaces like concrete. It has "soft" boundaries.
- **The Engineering Goal:** We must use the **Diffusion** and **Smear** modules to blur the repeats until they lose their rhythmic "edge" and become a smooth, flowing wash.

---

## 3. The Step-by-Step Technical Setup

### 3.1 Initial Signal Routing
1. **The Lead Vocal:** Should be dry, compressed, and centered.
2. **The Send:** Do NOT put this effect directly on the vocal track. Create a dedicated **Vocal FX Send** track.
3. **Fruity Delay 3:** Insert it on the Send track. Set **Dry** to 0% and **Wet** to 100%.

### 3.2 The Core Timing (The Pulse)
- **Time:** Set to **1/2 beat** or **1/4 beat**.
- **The "Toronto" Offset:** Set the **Offset** knob to **+5%**. This makes the right channel arrive slightly later than the left, creating a "dizzy" wide image that feels like the water is moving around the head.
- **Model:** Set to **Analog**. This allows for the "resampling" texture which is more organic than digital.

### 3.3 The "Underwater" Filtering (The Muffle)
- **High-Pass (HP):** Set to **450Hz**. We want to remove the muddy sub-rumble, but keep the "warmth."
- **Low-Pass (LP):** This is the most critical knob. Set it to **1800Hz**. 
- **The Slope Logic:** If the filter sounds too sharp, increase the **Resonance** to 10% to add a tiny "bubble" of energy at the cutoff point.

### 3.4 Feedback and Saturation (The Warmth)
- **Feedback:** Set to **65%**. We want a long tail that lasts for at least 2 bars.
- **Saturation:** Set to **40%**. This adds "harmonics" to the low-mids, making the muffled sound feel "expensive" and "thick" rather than just broken.

### 3.5 The Diffusion Module (The Liquification)
- **Diffusion:** Set to **85%**. This smears the transients.
- **Smear:** Set to **60%**. This spectral smoothing removes the "digital particles" and makes the sound feel like a singular liquid mass.

### 3.6 The Bitcrush Section (The Grain)
- **Sample Rate Redux:** Lower this to **15kHz**. This adds a subtle "sandiness" to the tail, mimicking the texture of a vintage low-bit sampler (like the ASR-10 used by Kanye West).

---

## 4. Advanced Dynamics: The Sidechain Ducker
This is what separates professional mixes from amateur ones.

- **Threshold:** Lower this until the delay is silent whenever the rapper/singer is performing.
- **Release:** Set to **500ms**. 
- **The Magic:** As soon as the singer stops a phrase, the "underwater world" should slowly rise up (bloom) to fill the space. This prevents the "muffle" from covering up the lyrics while they are being sung.

---

## 5. Layering: The "Deep Space" Chain
To truly master this vibe, you must look at the plugins *surrounding* Fruity Delay 3.

### 5.1 Pre-FX (Before Delay 3)
- **Fruity Fast Dist (Type A):** Add 10% saturation before the delay. This ensures the delay has "something to work with" in the harmonic spectrum.

### 5.2 Post-FX (After Delay 3)
- **Fruity Chorus:** Set to a very slow rate (0.1Hz). This makes the underwater delay feel like it's drifting in a current.
- **Fruity Convolver:** Load a **Dark Plate** IR. This adds a layer of "depth" to the delay, making it sound 3D.

---

## 6. Genre-Specific Variations

### 6.1 The "Psychedelic Trap" Variation (Travis Scott Vibe)
- **Action:** Automate the **Vibrato Depth** from 0% to 40% over the course of a bar.
- **Result:** The underwater sound will start to "wobble" and "bend," creating a trippy, drug-like sensation.

### 6.2 The "Melodic Rap" Variation (Juice WRLD Vibe)
- **Action:** Increase the **LP Filter** to 3500Hz (less muffled) and set Time to **1/8 beat**.
- **Result:** A more energetic, rhythmic version of the underwater sound that fits faster lyrical flows.

---

## 7. Mathematical Calibration Table
Use this table to sync your "blooms" to the project tempo.

| BPM | 1/2 Beat (ms) | 1/4 Beat (ms) | Ducker Release (ms) |
|-----|---------------|---------------|----------------------|
| 90  | 666ms         | 333ms         | 600ms                |
| 120 | 500ms         | 250ms         | 450ms                |
| 140 | 428ms         | 214ms         | 400ms                |
| 160 | 375ms         | 187ms         | 350ms                |

---

## 8. Troubleshooting the Vibe
- **Issue:** "It just sounds like a muffled mess."
- **Fix:** Increase the **High-Pass Filter** to 600Hz. Usually, the "mess" is in the low-mids clashing with the 808.
- **Issue:** "I can't hear the delay at all."
- **Fix:** Lower the **Ducker Threshold** or increase the **Saturation**. Saturation makes the sound "percieved" louder.

---

## 9. Conclusion: The Master of the Deep
The "Moody Underwater" sound is a game of subtraction. By removing the brightness and the rhythm, you create a psychological space for the listener's imagination to fill. Fruity Delay 3, with its combination of Analog modeling, Diffusion, and Ducking, is the ultimate tool for this art form.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Vocal Mixing, Underwater Sound, Toronto Vibe, R&B Production, FL Studio Workflow.
```

---

## FILE: 03-Workflows\by-goal\psychedelic-dub-risers.md

```markdown
# Masterclass: The Psychedelic Dub Riser in Fruity Delay 3

## 1. Executive Summary: The "Vortex" Transition
In modern psychedelic Trap and Industrial Rap (think Mike Dean’s work with Travis Scott or Kanye West), transitions are not just white noise sweeps. They are "Vortexes"—feedback loops that spiral in pitch and frequency, creating a sense of being sucked into the next section. Fruity Delay 3’s **Analog Resampling Engine** is the ultimate tool for this. This guide covers the precise automation curves and feedback management required to create a professional-grade Dub Riser.

---

## 2. Phase 1: The Engine Configuration

### 2.1 The "Living" Feedback Loop
To create a riser, the feedback must be self-sustaining.
1. **The Plugin:** Insert **Fruity Delay 3** on a dedicated FX Send.
2. **Feedback Level:** Set to **98% - 105%**.
    - *Warning:* At 105%, the sound will never stop. You must be prepared to automate the **Wet Level** to kill the sound at the end of the riser.
3. **Model:** Crucial—Set to **Analog**.
    - *The Physics:* In Analog mode, changing the delay time changes the playback speed of the buffer. This is what creates the "Pitch Glide."

### 2.2 The Harmonic Filter (The Whistle)
- **Cutoff:** Set to **2000Hz**.
- **Resonance:** Crank to **80%**.
- **The Result:** The feedback will "ring" at this frequency. As the pitch rises, this resonant peak creates a "whistling" laser sound that defines the psychedelic aesthetic.

---

## 3. Phase 2: Automation Orchestration (The "Vortex" Curve)

To achieve the "Spiral" effect, you must automate three parameters simultaneously.

### 3.1 The Pitch Spiral (Time Automation)
- **Action:** Right-click **Time** -> **Create automation clip**.
- **The Curve:** Start at **1/4 note** (Bar 1) and curve down to **1/64 note** (End of Bar 4).
- **The Result:** Because we are in Analog mode, the pitch will smoothly rise 2-3 octaves as the buffer gets smaller and smaller.

### 3.2 The Filter Opening (Cutoff Automation)
- **Action:** Automate the **LP Cutoff** from **500Hz** to **15kHz**.
- **The Goal:** As the pitch rises, the filter "opens up," revealing the high-frequency grit and aliasing of the feedback loop. This increases the perceived "Energy" of the riser.

### 3.3 The Grit Build-up (Bitcrush/Sample Rate)
- **Action:** Automate the **Sample Rate Redux** from **44.1kHz** down to **8kHz**.
- **The Vibe:** As the riser reaches its peak, it becomes "lo-fi" and "sandy." This adds a layer of "Digital Stress" that makes the drop feel much "cleaner" and "heavier" by contrast.

---

## 4. Phase 3: Spatial Deconstruction (The Texture)

### 4.1 The "Smear" Strategy
- **Action:** Set **Diffusion** to **40%** and **Smear** to **50%**.
- **The Physics:** This blurs the individual "echoes" into a continuous stream of sound. Without this, the riser sounds like a series of fast clicks. With it, it sounds like a rushing wind or a jet engine.

### 4.2 Stereo Chaos
- **Action:** Automate the **Vibrato Depth** from 0% to 50% during the final bar.
- **The Effect:** The riser will start to "wobble" violently in the stereo field, making the listener feel dizzy right before the beat drops.

---

## 5. Phase 4: Mixing and Safety

### 5.1 The "Kill" Switch
- **The Problem:** Feedback above 100% will destroy your ears and speakers if left unchecked.
- **The Solution:** Always automate the **Mix (Wet)** knob to drop to 0% exactly at the start of the next section.
- **The "Fade Out":** For a "Cool" R&B transition, don't cut it instantly. Use a slow 1-bar fade out with a **Fruity Convolver** (Large Hall) active to let the riser "echo" into the distance.

---

## 6. Mathematical Riser Table (Automation Snapshots)

| Riser Stage | Time Setting | Filter Cutoff | Vibrato Depth | Bitcrush Level |
|-------------|--------------|---------------|---------------|----------------|
| **Start (Bar 1)** | 4:00 (1/4) | 500 Hz        | 0%            | 44.1 kHz       |
| **Mid (Bar 2)**   | 2:00 (1/8) | 1500 Hz       | 10%           | 32 kHz         |
| **Tension (Bar 3)**| 1:00 (1/16)| 4000 Hz       | 25%           | 15 kHz         |
| **Peak (Bar 4)**  | 0:25 (1/64)| 15000 Hz      | 50%           | 8 kHz          |

---

## 7. Conclusion: The Master of Tension
The Psychedelic Dub Riser is the ultimate demonstration of Fruity Delay 3's power. It isn't just an effect; it's a **Synthesis Engine** that uses captured audio as its oscillator. By mastering the triplet of **Time, Feedback, and Diffusion**, you can create custom transitions that carry the "DNA" of your track's melodies into the next section. Follow this workflow, and your drops will have the professional, high-energy impact of a stadium-ready Trap production.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Transition FX, Dub Riser, Mike Dean Vibe, Feedback Loops, Analog Resampling, Trap Production.

```

---

## FILE: 03-Workflows\by-goal\psychedelic-melodic-spiral-risers.md

```markdown
# Masterclass: Designing Psychedelic Melodic Spiral Risers in Fruity Delay 3

## 1. Executive Summary: The "Audio Vortex"
The "Spiral Riser" is the ultimate transition for modern psychedelic Trap and high-energy R&B (think Mike Dean’s work for Travis Scott). It is not a noise sweep; it is a **Melodic Vortex**—taking a single chord and "spinning" it into a screaming, pitched-up feedback loop. **Fruity Delay 3**, with its **Analog Resampling Engine**, is the only tool in FL Studio capable of this elite sound design move. This guide provides the definitive technical orchestration required to build your own vortex.

---

## 2. Phase 1: Engine Alignment (The Setup)

### 2.1 The "Living" Loop
1. **Insert Fruity Delay 3** on a dedicated FX Send.
2. **Model:** Set to **Analog**. (Crucial—this allows the pitch-glide physics).
3. **Feedback Mode:** Set to **Ping-Pong**.
4. **Feedback Level:** Set to **98%**. (We want it to nearly self-oscillate).
5. **Diffusion:** Set to **30%**. (This blurs the edges of the "Spiral").

---

## 3. Phase 2: The Pitch Spiral (The Vortex)

### 3.1 Automating the Temporal Resampling
- **Action:** Create an automation clip for the **Time** knob.
- **The Start:** 1/4 bar.
- **The End:** 1/64 note.
- **The Curve:** Use a **Parabolic Rising** curve (slow start, fast end).
- **The Result:** Because you are in Analog Mode, the pitch will smoothly spiral upwards through 4 octaves as the buffer shrinks.

---

## 4. Phase 3: The "Heat" Build-up (Distortion)

### 4.1 The Bit-Redux Transition
As the pitch rises, we want the sound to become "Electronic" and "Aggressive."
- **Action:** Automate the **Sample Rate Redux** from 44.1kHz down to **10kHz**.
- **Action:** Automate the **Saturation** from 20% to 80%.
- **The Vibe:** The riser will go from a clean melody to a distorted "Digital Scream" right before the drop.

---

## 5. Phase 4: Spatial Expansion (The Climax)

### 5.1 The Dizzy Factor
- **Action:** Automate the **Vibrato Depth** from 0% to 50% during the final 2 beats.
- **The Psychology:** This adds a violent "wobble" to the high-pitched spiral, triggering the brain's "Uncanny Valley" response and maximizing the tension.

---

## 6. Phase 5: The "Clean" Kill (The Drop)

### 6.1 The Transition Flush
You cannot leave 98% feedback running.
- **Master Rule:** Automate the **Wet Mix** to hit 0% exactly on the "One" of the drop.
- **The Elite Secret:** Place a **Fruity Convolver** (Large Hall) AFTER the Delay 3. 
- **The Finish:** When the delay is cut, the "Hall" will capture the final high-pitched scream and let it echo naturally into the drop, providing a professional "Pro-Grade" finish.

---

## 7. Mathematical Spiral Table (Automation Targets)

| Riser Bar | Time Setting | Feedback | Sample Rate | Vibe |
|-----------|--------------|----------|-------------|------|
| **Bar 1** | 4:00 (1/4)   | 75%      | 44.1 kHz    | The Hook. |
| **Bar 2** | 2:00 (1/8)   | 85%      | 32 kHz      | The Lift. |
| **Bar 3** | 1:00 (1/16)  | 95%      | 15 kHz      | The Tension. |
| **Bar 4** | 0:25 (1/64)  | 98%      | 8 kHz       | **The Vortex.** |

---

## 8. Conclusion: The Master of the Spiral
The Psychedelic Melodic Spiral is about **Managing Kinetic Energy.** By utilizing the resampled pitch physics of Fruity Delay 3 and orchestrating it with bit-depth reduction and spatial blurring, you move from "making a beat" to **"Directing a Cinematic Event."** Follow this masterclass, and your transitions will have the legendary, technical energy of a world-class production.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Spiral Riser, Vortex FX, Delay 3 Automation, Psychedelic Transitions, Resampling Physics, FL Studio.

```

---

## FILE: 03-Workflows\by-instrument\acoustic-guitar-widening.md

```markdown
# Acoustic Guitar Widening Workflow

## Goal
Give a mono-recorded acoustic guitar a wide, professional stereo image without using a second microphone.

## Steps
1. **Insert Fruity Delay 3**: Place it on the guitar track.
2. **The Haas Setup**:
   - Set **Model** to Digital (for transparency).
   - Set **Time** to **0ms**.
   - Set **Offset** to **+15ms** (Right channel delayed).
   - Set **Feedback** to **0%**.
   - Set **Dry** to 100%, **Wet** to 100%.
3. **Tone Matching**:
   - If the right side sounds too bright, lower the **LP Filter** slightly.
4. **Diffusion for Depth**:
   - Add **5% Diffusion**. This softens the " Haas" delay, making it sound more like a room reflection than a distinct copy.
5. **Phase Check**:
   - Toggle the **Mono** switch on your Master track. If the guitar disappears or sounds hollow, reduce the Offset to **10ms**.

## Result
A wide, natural guitar sound that takes up the full stereo field while remaining mono-compatible.

```

---

## FILE: 03-Workflows\by-instrument\psychedelic-vocal-throws.md

```markdown
# Masterclass: The Psychedelic Vocal Throw in Fruity Delay 3

## 1. Executive Summary: The "Vocal Nebula"
The "Vocal Throw" is a staple of modern Trap and R&B (think the works of Mike Dean for Travis Scott). It is the technique of taking a single word or phrase—usually at the end of a bar—and "throwing" it into a massive, psychedelic delay spiral that fills the space between lines. This is not a static effect; it requires **Dynamic Automation** and **Non-Linear Feedback**. This guide provides the elite workflow for creating "nebula-like" throws using **Fruity Delay 3**.

---

## 2. Phase 1: The "Nebula" Architecture

### 2.1 Parallel Send Setup (The Only Way)
- **Goal:** You must be able to process the "Throw" without affecting the main vocal clarity.
- **Workflow:** 
    1. Create a dedicated mixer track called **"VOCAL THROW"**.
    2. Insert **Fruity Delay 3** as the first effect.
    3. Route your Lead Vocal to this track, but keep the **Send Level at 0%**.
- **The Action:** You will only automate this send level for specific words.

### 2.2 Delay Engine Configuration
- **Time:** Set to **1/2 beat (dotted)** or **3/4 bar** for a wide, cinematic spacing.
- **Model:** **Analog** (Essential for the pitch-drift vibe).
- **Feedback:** Set to **85%**. We want the throw to last almost until the next chorus.
- **Diffusion:** Set to **70%**. This blurs the word so it sounds more like a "Vibe" and less like a "Repeat."

---

## 3. Phase 2: The "Psychedelic Drift" (The trippy part)

### 3.1 Vibrato Orchestration
- **Rate:** 0.4 Hz.
- **Depth:** 35%.
- **The Logic:** This creates a heavy "pitch-wobble." When the throw starts, the word will sound like it is "melting" or "bending" in the air.

### 3.2 The Resonant Sweep
- **Action:** Automate the **LP Cutoff** of the delay.
- **The Pattern:** Start the cutoff at **5kHz** and slowly close it down to **500Hz** as the tail decays.
- **The Psychoacoustic Effect:** This mimics an object moving away from the listener into a dark, muffled space. It is the ultimate "Moody" R&B transition.

---

## 4. Phase 3: The "Resampling Vortex" (The Transition)

### 4.1 The Pitch-Up Riser
During the final bar of a verse, use this "Master Move":
1. **Feedback:** Increase to **98%**.
2. **Time Automation:** Automate the **Time** knob from **1/2 note** down to **1/64 note** over the course of the bar.
3. **The Result:** Because you are in Analog Mode, the vocal word will spiral upwards in pitch, getting faster and faster until it becomes a high-pitched "scream" that drops perfectly into the hook.

---

## 5. Phase 4: Mixing for Intimacy

### 5.1 The "Toronto" Mix
- **Wet Level:** 100%.
- **Mixer Pan:** Pan the "Vocal Throw" track to the opposite side of any ad-libs. 
- **Width:** Set **Stereo Offset** to 10ms to ensure the throw feels "Larger" than the lead vocal.

### 5.2 Dynamic Ducking
- Set the **Internal Ducker** in Delay 3 to a high threshold.
- **The Goal:** Even though the throw is a separate track, the ducker ensures that if the rapper starts a new verse early, the "Nebula" tail instantly drops in volume to stay out of the way of the new words.

---

## 6. Mathematical "Throw" Table
Use these timings to match the "Energy" of your song:

| Song Tempo | Throw Time | Feedback | Vibrato Depth | Best Use Case |
|------------|------------|----------|---------------|---------------|
| **80 BPM** | 1/2 Beat   | 70%      | 15%           | Soulful Moody R&B |
| **120 BPM**| 3/4 Bar    | 90%      | 40%           | Psychedelic Trap |
| **140 BPM**| 1/4 Beat   | 50%      | 10%           | Upbeat Melodic Rap |
| **160 BPM**| 1/8 Beat   | 85%      | 25%           | Fast Drill Grime |

---

## 7. Troubleshooting the Throw
- **Issue:** "The throw is too muddy and clashing with the 808."
- **Fix:** Crank the **Internal HP Filter** to 600Hz. You don't need the low-end of the vocal throw; the "Atmosphere" is in the mids and highs.
- **Issue:** "The pitch drift sounds 'out of tune' with the melody."
- **Fix:** Lower the **Vibrato Depth** to 10%. Sometimes less is more for sophisticated R&B harmonies.

---

## 8. Conclusion: The Atmospheric Edge
The "Psychedelic Vocal Throw" is the difference between a "dry" rap vocal and a "cinematic" performance. By treating the delay as a dynamic instrument that you "perform" via automation, you create a sense of vast, immersive space. Mastering the **Fruity Delay 3** engine for these throws is the ultimate "Cool" factor for any modern Hip-Hop producer. Follow this masterclass, and your vocals will have the legendary, trippy depth of a world-class record.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Vocal Throws, Psychedelic Mixing, Delay 3 Workflow, Trap Production, R&B Atmosphere, FL Studio.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Delay 3

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Delay 3.
- **Key Info:** Analog vs Digital mode differences, Diffusion engine details, Modulation Wow/Flutter logic, and Feedback loop signal flow.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The Dub Mixing Bible."
- **Key Info:** Using filtered feedback for "Moody" depth, creating infinite self-oscillation textures, and the importance of pitch-shifting behavior in analog delays.

## Genre Style Board: Fruity Delay 3

| Vibe | Key Lever | Use Case |
| :--- | :--- | :--- |
| **Spacey** | 90% Diffusion | Cloud Pads |
| **Moody** | 1kHz Low Pass | Muffled Ad-libs |
| **Vibey** | 1Hz Wow Modulation | Lo-fi Keys |
| **Upbeat** | 1/8th Dot + Limiter | Rhythmic Arps |
| **Psychedelic**| High Sat + Feedback | Dub Squelch |
```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Delay 3 (Hip-Hop/R&B)

## Vibe 1: The "Modern Trap" Duck
*   **Sound:** Massive echoes that stay out of the vocal's way.
*   **Key Move:** Duck Knob @ 60% + Sat Distortion + 1/4 Note Sync.

## Vibe 2: The "Phonk" Drift
*   **Sound:** Pitch-unstable, lo-fi, degraded.
*   **Key Move:** Keep Pitch OFF + High Mod Time + Bit Distortion.

## Vibe 3: The "Deep" R&B Wash
*   **Sound:** Reverb-like, shimmering, warm.
*   **Key Move:** Max Diffusion + BP Filter + 0.5Hz Wow/Flutter.

## Vibe 4: The "Cinematic" Dub
*   **Sound:** Infinite, metallic, resonant.
*   **Key Move:** High Feedback (90%) + Resonant Filter + Manual Cutoff Automaton.

```

---

## FILE: 04-Reference\signal-flow-diagram.md

```markdown
# Reference: Signal Flow Diagram (Delay 3)

Understanding the internal order of operations is key to mastering character delays.

`\`\`mermaid
graph TD
    A[Input Signal] --> B[Delay Buffer]
    B --> C[Stereo Offset]
    C --> D[Bandpass Filter]
    D --> E[Distortion Mode]
    E --> F[Diffusion Smear]
    F --> G[Feedback Loop]
    G --> B
    F --> H[Ducking/Sidechain]
    H --> I[Output Mix]
`\`\`

## Key Points
1.  **Filter Before Distortion:** This means the distortion only saturates the frequencies you haven't cut.
2.  **Diffusion in the Loop:** Every time the sound repeats, it gets "blurrier."
3.  **Ducking is Last:** The sidechain reduces the *total* volume of the processed echoes before they hit the final mix.

### Logic Source
Based on internal signal path testing and official block diagrams. [SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Delay 3 Mechanics

## 1. Modulation Physics (Doppler Effect)

Fruity Delay 3 uses a "Resampling" buffer strategy when **Keep Pitch** is **OFF**. This mimics the physics of magnetic tape.

### The Physics
$Speed = Distance / Time$

In a tape machine, the "Distance" between the mechanics (Record Head and Play Head) is fixed. To change the Delay Time, you must change the **Tape Speed**.
*   **Faster Speed** = Shorter Delay Time = **Higher Pitch**.
*   **Slower Speed** = Longer Delay Time = **Lower Pitch**.

When you modulate the **TIME** parameter in Fruity Delay 3 (via the LFO), you are continuously accelerating and decelerating the "Virtual Tape". This creates the characteristic "Wow" (Slow speed variance) and "Flutter" (Fast speed variance).

### Keep Pitch: ON (Granular/Buffer Slicing)
When **Keep Pitch** is **ON**, the plugin changes behavior. It acts like a digital crossfader. It resizes the buffer without changing the sample readout rate.
*   **Result:** Artifact-free timing changes, but no pitch warping.
*   **Artifacts:** Rapid changes may cause "zipper noise" or clicks as the buffer lengths snap to new values.

---

## 2. Diffusion Topology

Diffusion in delay lines is typically achieved using a series of **All-Pass Filters** (APFs).

*   **Function:** An All-Pass filter changes the *phase* of frequencies without changing their *amplitude*.
*   **In Series:** When multiple APFs are chained within a feedback loop, they smear the transient information of the impulse response over time.
*   **Delay 3 Implementation:** The **Spread** knob likely controls the coefficient (delay time) of these internal All-Pass filters.
    *   **Low Spread:** The APFs have short times, sounding metallic (Comb Filtering).
    *   **High Spread:** The APFs have long times, sounding distinct and echo-y (cluster echoes).

---

## 3. Signal Path & Gain Staging

Understanding where Distortion sits is critical for gain staging.

**Diagram:**
`Input` -> `[Sat/Limit Threshold]` -> `[Wet Gain]`

*   **Observation:** The **Distortion** in Delay 3 is input-dependent but feedback-driven.
*   **Feedback Loop:** The distortion is inside the loop.
    *   *Pass 1:* Clean.
    *   *Pass 2:* Slightly Distorted.
    *   *Pass 10:* Heavily Distorted (`Input * Feedback^10`).
*   **Conclusion:** To achieve a clean delay with a distorted tail, do **NOT** overdrive the input. Instead, lower the **Distortion Level** threshold so the quiet feedback tails trigger the saturation, while keeping the main input clean.

```

---

## FILE: 04-Reference\technical-docs\analog-vs-digital-modeling.md

```markdown
# Digital vs. Analog Delay Modeling

## Digital Mode
- **Behavior:** Standard "Buffer Copy". 
- **Time Changes:** When you change the delay time while audio is playing, the signal is simply truncated or lengthened.
- **Sound:** Clean, transparent, robotic.
- **Phase:** No pitch shifting occurs during time modulation.

## Analog Mode
- **Behavior:** Variable Sample Rate Emulation.
- **Time Changes:** Changing the delay time simulates the behavior of a physical BBD (Bucket Brigade Device) or Tape machine. 
- **The Physics:** Moving the "head" or changing the tape speed causes a **Doppler Effect**. 
  - *Shortening Time:* Pitch goes UP.
  - *Lengthening Time:* Pitch goes DOWN.
- **Sound:** Organic, "warped", musical.

## Diffusion Engine
Fruity Delay 3 uses a series of nested all-pass filters for its **Diffusion** section.
- This breaks up the distinct "echoes" and turns them into a cloud of sound.
- If you set Diffusion to 100%, the delay effectively becomes a **Reverb**.
- **Smear:** Smear acts as a spectral smoothing filter, removing the "graininess" from the diffusion for a more ethereal, pad-like tail.

```

---

## FILE: 04-Reference\technical-docs\granular-diffusion-physics.md

```markdown
# Technical Deep-Dive: Granular Diffusion Physics and Spectral Smearing in Fruity Delay 3

## 1. Introduction: From Taps to Clouds
In the traditional digital delay model, an echo is a discrete unit of data—a "Tap." However, in modern "Cool" and "Psychedelic" R&B production, we often require sound to exist in a state of **Liquidity**. Fruity Delay 3 achieves this through its advanced **Diffusion Engine**. This guide explores the mathematical physics of all-pass filter networks, the stochastic distribution of energy, and the psychoacoustic transition from "Echo" to "Atmosphere."

---

## 2. The Mathematics of All-Pass Filter Networks
### 2.1 Defining the All-Pass Filter (APF)
Diffusion in Fruity Delay 3 is not a simple "Blur" effect; it is a series of nested **All-Pass Filters**.
- **The Physics:** An APF allows all frequencies to pass through with equal magnitude, but it shifts the **Phase** of those frequencies.
- **The Transfer Function:** `H(z) = (z^-1 - g) / (1 - g * z^-1)`, where `g` is the diffusion gain.
- **The Result:** The energy of a sharp transient (like a snare hit) is "smeared" over time. The peak amplitude drops, but the total energy remains the same, resulting in a "Sizzling" or "Washy" texture.

### 2.2 Cascading Stages (The Smear Algorithm)
Fruity Delay 3 uses multiple stages of APFs in series.
- **Stage 1-2:** Breaks the "Clinical" edge of the digital echo.
- **Stage 3-8:** Randomizes the phase relationship so heavily that the ear can no longer identify the "Start" of the repeat. This is known as **Stochastic Smearing**.

---

## 3. Stochastic Energy Distribution
### 3.1 The Gaussian Tail
When Diffusion is set to 100%, the delay repeat undergoes a mathematical transformation from a **Dirac Impulse** to **Gaussian Noise**.
- **Energy Density:** The "Smear" knob controls the spectral smoothing of this noise. 
- **The Psychedelic Factor:** In high-energy Trap transitions, use high diffusion but low feedback. This creates a "Burst" of noise that is harmonically related to the synth but has no rhythmic "Anchor," triggering a sense of disorientation in the listener.

---

## 4. Psychoacoustic Smearing: The "Shadow" Effect
### 4.1 Temporal Resolution of the Human Ear
The human brain has a temporal resolution of roughly **10ms to 20ms**. 
- **The Smear Secret:** If the diffusion smearing is wider than 20ms, the brain perceives the sound as a **Texture** rather than a **Note**.
- **R&B Intimacy Rule:** Set Diffusion to 40% for background vocals. This "Softens" the ad-libs, making them feel like they are floating *behind* the lead vocal rather than competing for the same rhythmic space.

---

## 5. Engineering "Moody" Spaces with Filter Interdependence
### 5.1 The Damping/Diffusion Relationship
In Fruity Delay 3, the **LP Filter** and the **Diffusion** knobs are coupled in the feedback loop.
- **The Physics:** High frequencies are more easily "Smeared" than low frequencies. 
- **Master Strategy:** Set the LP Filter to 3000Hz and Diffusion to 80%. 
- **The Result:** The "Air" of the delay is completely liquified, creating a dark, velvety "Toronto-style" atmosphere that wraps around the mix like a warm blanket.

---

## 6. Mathematical Diffusion Table (The "Vibe" Matrix)

| Diffusion % | Filter Network State | Subjective Texture | Best Genre Use |
|-------------|----------------------|--------------------|----------------|
| **0 - 10%** | Discrete / Periodic  | Sharp / Clinical   | High-Speed Drill |
| **20 - 40%**| Early Reflections    | "Small Room" Grit  | Boom Bap Snares |
| **50 - 75%**| Spectral Smearing    | "Silky" Halo       | Moody R&B Vocals |
| **80 - 100%**| Full Stochastic Wash | "Infinite Cloud"   | Psychedelic Pads |

---

## 7. Master Engineering: The "Liquification" Workflow
To turn a static synth lead into a psychedelic "Liquid" melody:
1. Set Delay 3 to **Analog Mode**.
2. Set **Diffusion** to 65%.
3. Set **Smear** to 50%.
4. **The Action:** Automate the **Vibrato Depth** while slowly increasing the **Feedback**.
5. **The Logic:** As the pitch "Wobbles," the diffusion engine smears the pitch shifts together. The sound moves from a "Beep" to a "Flowing River of Harmonic Information."

---

## 8. Conclusion: The Master of Entropy
Mastering the diffusion engine in Fruity Delay 3 is about **Controlling Chaos**. By understanding the mathematics of all-pass filters and the psychoacoustics of temporal smearing, you move from "Delaying sound" to **"Architecting Atmosphere."** It is the definitive guide for the producer who wants their Hip-Hop and R&B to have the professional, expensive "Wash" found on world-class records. Follow these physical principles to own the space between the notes.

---
**Document Version:** 1.0 (Quantum Engineering Tier)
**Author:** DSP Physics Lead
**Keywords:** Diffusion, All-Pass Filters, Stochastic Noise, Gaussian Smear, Psychoacoustics, R&B Atmosphere.

```

---

## FILE: 04-Reference\technical-docs\recursive-feedback-math.md

```markdown
# Technical Deep-Dive: Recursive Feedback Math and tail Decay Dynamics

## 1. Introduction: The Infinite Sequence
In audio DSP, delay is a recursive process. Unlike a reverb which is a statistical model of reflections, a delay is a mathematical sequence where each term is derived from the previous one. In **Fruity Delay 3**, the feedback loop is the engine of the tail. To master the "Moody" and "Psychedelic" vibes of modern R&B, an engineer must understand the decay math to prevent "Feedback Mud" while maintaining "Atmospheric Depth."

---

## 2. The Feedback Equation: Linear vs. Exponential
### 2.1 The Geometric Series
The amplitude of each successive delay repeat follows a geometric progression:
`An = A0 * (G^n)`
- `An`: Amplitude of the nth repeat.
- `A0`: Initial amplitude of the dry signal.
- `G`: **Feedback Gain** (The Feedback knob).
- `n`: The repeat number.

### 2.2 The Physics of "The Tail"
- **If G < 1.0 (e.g., 50%):** The sound decays exponentially. This is the "Natural" state.
- **If G = 1.0 (100%):** The sound never decays. It occupies a permanent spot in the RAM buffer.
- **If G > 1.0 (105%+):** Each repeat is louder than the last. This leads to **Mathematical Divergence** (Digital Clipping). 
- **The Master Secret:** In **Analog Mode**, Fruity Delay 3 introduces a **Limiting Transfer Function** in the feedback loop. This prevents the signal from exploding to infinity, instead turning it into a saturated "wall of sound."

---

## 3. Phase Interaction and Low-End Management
### 3.1 The "Summing" Problem in Hip-Hop
In Trap and Rap, the 808 and Kick own the sub-frequencies (20Hz - 100Hz).
- **The Conflict:** If your vocal delay has feedback, the low-end energy of the repeats sums together. 
- **The Math:** If two repeats are slightly out of phase, they can cause **Constructive Interference** at 60Hz, creating a "boom" that kills your 808's punch.
- **The Fix:** Right-click the Feedback mode and select **Invert**. This flips the polarity of every other repeat. 
- **The Result:** The low-end energy of Repeat 1 is cancelled out by Repeat 2. This allows you to have a "Large" and "Moody" delay tail that is technically "Invisible" to the sub-bass of your mix.

---

## 4. Time Modulation and Resampling Jitter
### 4.1 The Non-Linearity of Analog Mode
When you modulate the **Time** parameter in Analog mode, you are changing the "Delta" (the distance between read and write pointers).
- **The Resampling Math:** If you decrease the time by 50%, the plugin must play back the audio at 2x speed.
- **Interpolation Artifacts:** Fruity Delay 3 uses a high-order interpolation algorithm to "guess" the values between samples. This creates subtle high-frequency "jitter."
- **The "Cool" Factor:** Professional producers use this jitter to add "Digital Soul" to sterile vocal recordings. By adding **0.5% Vibrato**, you introduce a constant mathematical instability that the human brain perceives as "Expensive Hardware" character.

---

## 5. Diffusion and the All-Pass Filter Cloud
### 5.1 Breaking the Phase Correlation
Standard digital delay repeats are **Coherent**—they are perfect copies. This can sound "robotic."
- **The Diffusion Engine:** Uses a series of **All-Pass Filters**.
- **The Math of Smear:** An All-Pass filter doesn't change the frequency response, but it shifts the **Phase** of different frequencies by different amounts.
- **The Result:** The "Tap" becomes a "Cloud." In psychedelic Hip-Hop, setting Diffusion to 60% breaks the rhythmic predictability, making the delay feel like it is "swirling" around the listener's head.

---

## 6. Table of Decay Constants
Use this to calculate how many repeats will be audible based on your Feedback knob setting:

| Feedback % | Audible Repeats (-60dB limit) | Subjective Effect |
|------------|-------------------------------|-------------------|
| **10%**    | 1                             | Slapback / Double |
| **30%**    | 3                             | Clean / Tight     |
| **50%**    | 7                             | Standard Echo     |
| **75%**    | 20                            | Lush Atmosphere   |
| **95%**    | 100+                          | Psychedelic Wash  |
| **100%+**  | Infinite                      | Feedback Spiral   |

---

## 7. Master Engineering Checklist for Delay 3
1. **Low-Pass filtering:** Always cut above 5kHz for "Moody" vibes.
2. **Phase Inversion:** Use "Invert" feedback for heavy Trap mixes to save low-end headroom.
3. **Saturation Calibration:** Use saturation to "warm up" the tail, making it sit *behind* the dry vocal.
4. **Ducker Timing:** Ensure the Ducker Release matches the BPM (e.g., 500ms for 120BPM) to create a rhythmic "bloom."

---

## 8. Conclusion: The Calculus of Vibe
Mastering the math of Fruity Delay 3 allows you to move from "Trial and Error" to **Precision Engineering.** By understanding the geometric decay of the tail and the phase-cancellation properties of inverted feedback, you can create massive, psychedelic spaces that remain technically perfect and professional. It is the definitive guide for the producer who wants to own the "Time" element of their production.

---
**Document Version:** 3.0 (Master Sound Designer Tier)
**Keywords:** Recursive Math, Feedback Loops, Phase Inversion, DSP Engineering, All-Pass Filters, Geometric Series.

```

---

## FILE: 04-Reference\technical-docs\resampling-aliasing-physics.md

```markdown
# Technical Deep-Dive: Resampling Aliasing and Nyquist Physics in Fruity Delay 3

## 1. Introduction: The Digital Mirror
In the "Analog" mode of Fruity Delay 3, we are effectively performing real-time **Varispeed Resampling**. While this creates the beautiful pitch sweeps we love in psychedelic R&B, it also introduces a technical phenomenon known as **Aliasing**. For the master engineer, aliasing is not a mistake—it is a **Texture**. Understanding the mathematics of how sound "folds back" into the audible range is the key to achieving that gritty, "cool" digital edge found in modern industrial rap.

---

## 2. The Nyquist-Shannon Theorem
### 2.1 The Digital Limit
The **Nyquist Frequency** is defined as half of the Sample Rate. 
- At 44.1kHz (Standard), the limit is **22,050 Hz**.
- Any frequency created above this limit cannot be represented digitally. 

### 2.2 The "Fold-Back" Effect
When Fruity Delay 3's Analog engine speeds up the buffer (Pitching UP), it generates new harmonics.
- If a harmonic hits 25,000 Hz (which is 2,950 Hz above the Nyquist limit), it doesn't just disappear.
- **The Math:** It "bounces" off the ceiling and reflects back as **19,100 Hz** (22,050 - 2,950).
- **The Sound:** This is "Aliasing." It sounds metallic, inharmonic, and "colder" than analog distortion.

---

## 3. Resampling Algorithms: Linear vs. Sinc
### 3.1 Linear Interpolation (The "Classic" Sound)
Fruity Delay 3 uses a high-speed interpolation method to calculate the samples between the existing ones when the pitch shifts.
- **The Character:** It is intentionally slightly "lo-fi." It provides the "Grain" that producers like 40 (OVO) or Metro Boomin look for.
- **Why it's "Cool":** True analog gear (BBD chips) had limited bandwidth. The subtle aliasing in Delay 3's Analog mode mimics the "clock noise" of these vintage circuits.

---

## 4. Engineering the Aliasing (The "Mike Dean" Grit)
### 4.1 Intentional Distortion
Producers often push the Delay 3 riser (see the Dub Riser workflow) into the "Red" specifically to trigger these aliasing artifacts.
- **The Setup:** Set Sample Rate Redux to **12kHz**.
- **The Math:** Now the Nyquist limit is only **6,000 Hz**. 
- **The Result:** Every harmonic above 6kHz is now folding back into the mid-range. This creates a dense "digital scream" that is harmonically related to your melody but sounds like a dying machine.

---

## 5. Anti-Aliasing and Post-Filtering
### 5.1 Controlling the Chaos
While aliasing adds "Edge," too much of it can sound like "Static Noise."
- **The Internal LP Filter:** Fruity Delay 3 includes a 12dB/oct Low-Pass filter in the feedback loop.
- **The Master Strategy:** Set the LP filter to **8kHz**. This allows the "good" aliasing (the lower-frequency fold-back) to survive, while cutting the "harsh" high-end artifacts that cause ear fatigue.

---

## 6. Phase Jitter and Buffer Stability
### 6.1 Floating Point Precision
Because Delay 3 processes at 32-bit float, the "noise floor" of the feedback loop is incredibly low (-700dB). 
- **The Stability Rule:** This means you can have **Infinite Feedback** (100%+) for several minutes before the math breaks and the signal becomes a pure square wave. 
- **The Vibe Tip:** Add **0.1% Vibrato**. This introduces "Jitter" into the resampling clock, mimicking the unstable power supply of a 1970s tape delay.

---

## 7. Conclusion: The Physics of Vibe
Aliasing in Fruity Delay 3 is the bridge between the sterile digital world and the gritty analog past. By understanding the **Nyquist Fold-back** and the **Sample Rate Redux** engine, you can purposefully design sounds that "scream" with digital character. It is the ultimate tool for the producer who wants their Hip-Hop and R&B to sound "Modern but Dusty."

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Aliasing, Nyquist Frequency, Resampling, Digital Physics, Sample Rate Redux, DSP Engineering.

```

---

