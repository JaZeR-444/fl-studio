# Fruity Reeverb 2 - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# 00-START-HERE - Mastering Fruity Reeverb 2

Welcome! If you want to master reverberation in FL Studio using the native **Fruity Reeverb 2**, you are in the right place.

---

## 🚀 Where should I start?

### 🐣 "I'm new to Reverb"
Start with the **Parameter Cheat Sheet**. It explains what every knob actually *does* in plain English.
👉 **[Go to Parameter Cheat Sheet](./01-Learning/Quick-Reference/parameter-cheat-sheet.md)**

### 🛠️ "I need to fix a bad sounding reverb"
If your mix sounds muddy, metallic, or washed out, check the **Parameter Data** for specific problem-solving tips.
👉 **[View Parameter Data](./02-Data/parameters/reeverb2-params.json)**

### 🎹 "I want to apply reverb to a specific instrument"
(Workflows are currently being built. Check back soon for Vocal and Drum guides!)
👉 **[Explore Workflows](./03-Workflows/)**

---

## ⚡ Quick Tips for Instant Improvements

1.  **Don't put Reverb on the Master Channel:** It will muddy everything.
2.  **Use High Damping (DAMP):** Real rooms absorb high frequencies. Higher damping values often sound more natural.
3.  **Predelay is Key:** Adding 20-50ms of **DELAY** helps separate the dry vocal from the reverb, keeping it "in your face" while still having space.
4.  **Low Cut Everything:** Use the **L.CUT** knob to cut frequencies below 300Hz. Bass frequencies in reverb usually just add mud.

---

## 🗺️ Navigation

- **[01-Learning](./01-Learning/)**: Theory and Concepts.
- **[02-Data](./02-Data/)**: Raw JSON data for developers and deep divers.
- **[03-Workflows](./03-Workflows/)**: Practical "How-To" guides.
- **[04-Reference](./04-Reference/)**: Technical details.

---

*This guide parallels the structure of the Fruity Parametric EQ 2 Deep Dive.*

```

---

## FILE: README.md

```markdown
# Fruity Reeverb 2 - Pro Algorithmic Space

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ███████╗███████╗██╗   ██╗███████╗██████╗ ██████╗     ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔════╝██╔════╝██║   ██║██╔════╝██╔══██╗██╔══██╗    ╚════██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██████╔╝█████╗  █████╗  ██║   ██║█████╗  ██████╔╝██████╔╝     █████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔══██╗██╔══╝  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██╔══██╗██╔══██╗    ██╔═══╝ 
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║  ██║███████╗███████╗ ╚████╔╝ ███████╗██║  ██║██████╔╝    ███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝  ╚═╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═════╝     ╚══════╝
`\`\`

**Plugin Type:** Algorithmic Reverb
**Category:** Effect / Reverb / Mixing
**Official Manual:** [Image-Line Fruity Reeverb 2 Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Reeverb%202.htm)

---

## 🎯 What is Fruity Reeverb 2?

Fruity Reeverb 2 is FL Studio's flagship algorithmic reverb. It simulates natural acoustic environments by generating complex reflections that build up over time. It is a major upgrade over the original Reeverb, featuring **Mid/Side processing**, detailed **damping**, **modulation**, and **bass multiplier** controls. It is highly versatile, capable of everything from tight drum rooms to massive 20-second lush cathedral tails.

**Key Capabilities:**
- **Acoustic Space Modeling:** Rooms, Halls, Cathedrals, and custom spaces.
- **Mid/Side Processing:** Process stereo edges independently for width without mud.
- **Bass Multiplier:** Adjust the decay time of low frequencies separately (Warmth vs Brightness).
- **Tempo Modulation:** Built-in LFO for the reverb time to add organic movement.
- **Pre-Delay:** Controls the gap between dry sound and reverb onset (Clarity).
- **Stereo Separation:** Independent width control for the reverb tail.
- **Tone Filtering:** Integrated High and Low Cut filters.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **damping-vs-filtering.md** (Tonal balance)
3. Create **parameter-cheat-sheet.md**
4. Load the default and turn "Decay" to 5 seconds to hear the tail character.

### For Mix Engineers:
1. Study **using-mid-side-for-clarity.md**
2. Review **pre-delay-calculation-for-tempo.md**
3. Learn **cleaning-low-end-rumble.md** (Bass Multiplier)

### For Sound Designers:
1. Study **lush-ambient-textures.md**
2. Review **modulating-reverb-tails.md**
3. Learn **early-reflection-shaping.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Decay:** Tail duration (up to 20s).
  - **Size:** Perceived room dimensions.
  - **Pre Delay:** Ms gap.
  - **Bass / Cross:** Low-end decay weighting.
  - **Mod / Speed:** Pitch detune in the tail.
  - **Mid/Side Switch:** Spatial focus.

- [ ] **reverb-tone-shaping-guide.md**
  - **L.Cut:** Removing low rumble.
  - **H.Cut:** Softening harsh highs.
  - **DAMP:** High frequency decay speed.

#### 02-Data/parameters/
- [ ] **reeverb2-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Reeverb 2",
    "category": "Reverb",
    "max_decay_seconds": 20,
    "features": ["Mid/Side", "Tempo modulation", "Diffusion"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-tight-drum-rooms.md**
  - Small Size setting.
  - Low Decay (0.5s - 1.0s).
  - High Diffusion for density.
  - L.Cut set to 300Hz.

- [ ] **endless-ambient-washes.md**
  - Space mode (Large size).
  - Max Decay.
  - Subtle Modulation (Mod knob at 20%).
  - Smooth High Damping.

- [ ] **side-only-vocal-width.md**
  - Setting the plugin to "Side" mode.
  - Applied to a center-panned vocal.
  - Result: Space around the vocal without affecting the dry center presence.

#### 03-Workflows/by-context/
- [ ] **orchestral-hall-placement.md**
- [ ] **guitar-shimmer-simulation.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **bass-multiplier-mechanics.md**
  - How the "Cross" frequency defines the low-end warmth zone.

---

## 🔬 Research Framework

### Phase 1: The Tail (Week 1)
**Goal:** Tonal Balance

**Tasks:**
1. Compare "Bright" room (Bass knob low) vs "Warm" room (Bass knob high)
2. Experiment with "High Damping" to hear how the reverb "muffles" over time
3. Use the Modulation section to hear the chorus-like effect in the tail
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does "Size" affect the "Decay" time? (Physically, they are linked).
- What does the "ER" (Early Reflections) knob actually add to the sound?

### Phase 2: Spatial Focus (Week 2)
**Goal:** Mixing Width

**Tasks:**
1. Setup a vocal on a send
2. Toggle between Mid and Side modes
3. Adjust "Stereo Separation" to see the tail spread
4. Create using-mid-side-for-clarity.md

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (Low CPU)
- Max Decay (20 seconds)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my mix muddy? (Check Reverb L.Cut and Bass multiplier).
2. How to keep the vocal "in front"? (Increase Pre-Delay to ~20-50ms).

---

## 🔗 Cross-Reference with Other Plugins

Fruity Reeverb 2 is often used with:
- **LuxeVerb** (The premium alternative)
- **Fruity Delay 3** (Layering echoes)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Reeverb 2/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── reverb-tone-shaping-guide.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── reeverb2-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-tight-drum-rooms.md
│   │   └── using-mid-side-for-clarity.md
│
└── 04-Reference/
    └── bass-multiplier-mechanics.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Reeverb 2 Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Reeverb%202.htm)
- [Fruity Reeverb 2 Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Reeverb_2_tutorials.htm)
- [Fruity Reeverb 2 Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+reeverb+2+tutorial)

### Community Resources
- [Fruity Reeverb 2 Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+reeverb+2&restrict_sr=1)
- [Fruity Reeverb 2 User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Reeverb 2 Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for analyzing reverb tails and impulse responses
- **Fruity Spectroman** for visualizing frequency response
- **Fruity Limiter** for monitoring output levels
- **Fruity Convolver** for comparison with convolution reverb

### Recommended Learning Materials
- "Algorithmic Reverb Explained" - Understanding artificial space simulation
- "Reverb in Mix Engineering" - Practical applications for mixing
- "Mid/Side Processing Techniques" - Advanced spatial control

### Advanced Techniques
- **Pre-Delay Timing:** Setting pre-delay to musical intervals for rhythmic reverb
- **Bass Management:** Using bass multiplier for low-end control
- **Modulation Effects:** Applying subtle modulation for organic movement

---

## 🧪 Experimental Techniques

### Advanced Reverb Applications
Creative uses of Fruity Reeverb 2's capabilities:

**Mid/Side Processing:**
- **Stereo Field Control:** Using Mid/Side processing for precise stereo control
  - Process center content separately from sides
  - Essential for professional mixing
  - Perfect for maintaining vocal clarity
  - Pro tip: Use for transparent stereo enhancement
  - Useful for complex stereo manipulation

**Modulation Integration:**
- **Organic Movement:** Using modulation for natural reverb movement
  - Apply subtle modulation for organic feel
  - Essential for natural-sounding reverbs
  - Perfect for evolving textures
  - Pro tip: Use low modulation for natural movement
  - Useful for atmospheric enhancement

**Bass Multiplier Applications:**
- **Low-End Control:** Using bass multiplier for frequency-specific decay
  - Control low-frequency decay independently
  - Essential for bass management
  - Perfect for preventing low-end muddiness
  - Pro tip: Use for authentic acoustic space simulation
  - Useful for frequency-specific reverb design

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Dynamic Reverb Changes:** Automating reverb parameters for evolving effects
  - Create evolving reverb characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic reverb expression
  - Use for expressive control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Reverb Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage reverb enhancement
  - Apply different processing to different stages
  - Build sophisticated reverb processing chains
  - Perfect for advanced sound design
  - Use for complex processing

## 🎚️ Workflow Optimization

### Reverb Setup Workflows
Efficient approaches to using Fruity Reeverb 2:

**Small Room Setup:**
- **Drum Room Simulation:** Creating tight drum room sounds
  - Use small size for intimate reflections
  - Apply short decay for realistic drum rooms
  - Essential for drum processing
  - Pro tip: Use high diffusion for density

- **Vocal Enhancement:** Adding subtle space to vocals
  - Use pre-delay for vocal clarity
  - Apply appropriate decay for naturalness
  - Essential for vocal processing
  - Pro tip: Use side mode for width without center muddiness

**Cathedral Setup:**
- **Large Space Simulation:** Creating massive reverb spaces
  - Use large size for spacious reflections
  - Apply long decay for realistic halls
  - Essential for orchestral applications
  - Pro tip: Use appropriate damping for realism

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-Effects:** Using before other effects
  - Apply before additional reverb for layered spaces
  - Use before delay for rhythmic patterns
  - Essential for proper signal flow
  - Pro tip: Use for space preparation

- **Post-Effects:** Using after other effects
  - Apply after EQ for frequency-processed reverb
  - Use after compression for dynamics-processed reverb
  - Essential for final processing
  - Pro tip: Use for final space shaping

**Analysis Integration:**
- **Spectrum Analysis:** Using with spectrum analyzers for feedback
  - Monitor frequency changes in real-time
  - Compare with reference tracks
  - Essential for informed parameter control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Atmospheric Enhancement:** Adding space to electronic elements
- **Build-up Effects:** Using reverb for tension building
- **Stereo Enhancement:** Adding width to electronic elements
- **Energy Management:** Using reverb for track energy
- **Transition Effects:** Creating smooth transitions between sections

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding subtle space to vocals
- **Sample Enhancement:** Adding space to samples
- **Mix Enhancement:** Using reverb for mix clarity
- **Creative Effects:** Adding unique character to elements
- **Spatial Effects:** Managing spatial characteristics

### Rock and Metal
- **Guitar Enhancement:** Adding space to guitar sounds
- **Drum Enhancement:** Adding space to drums
- **Vocal Enhancement:** Adding space to vocals
- **Mix Enhancement:** Using reverb for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Reverb:** Creating evolving textures
- **Spatial Effects:** Advanced spatial parameter control
- **Experimental Reverb:** Pushing boundaries of reverb processing
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Reeverb 2 works well with various effects:
- **Reverb:** Adding additional space to reverb
- **Delay:** Creating rhythmic patterns with reverb
- **Chorus:** Adding width to reverb-processed sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of reverb signals

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Combining with parallel compression
- **Upward Compression:** Using with upward compression
- **Limiting:** Combining with limiting for control
- **Gate/Expander:** Using with noise gates
- **De-esser:** Combining for vocal processing

### Equalization
Working with other EQ plugins:
- **Parametric EQ:** Combining with parametric EQs for precision
- **Graphic EQ:** Comparing with graphic EQs
- **Multi-Band:** Combining with multi-band processing
- **Dynamic EQ:** Using with dynamic EQ
- **Spectral Processing:** Combining with spectral tools

## 📖 Historical Context

### Development Background
Fruity Reeverb 2 was developed as an advanced algorithmic reverb:
- Created to provide sophisticated reverb processing
- Designed for professional mixing and mastering
- Developed with spatial enhancement in mind
- Intended to complement the original Reeverb with advanced features

### Evolution Through FL Studio Versions
- Initially introduced with basic algorithmic capabilities
- Enhanced with Mid/Side processing
- Improved with bass multiplier and modulation features
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Reeverb 2 has influenced music production by:
- Providing accessible professional reverb processing
- Enabling sophisticated spatial design
- Facilitating creative reverb applications
- Supporting various musical genres with flexible reverb

## 🧠 Advanced Processing Techniques

### Reverb Mastery
Advanced techniques for reverb processing:
- **Space Simulation:** Understanding room modeling principles
- **Early/Late Reflections:** Managing reflection timing
- **Frequency Response:** Controlling tonal characteristics
- **Diffusion Control:** Managing echo density
- **Creative Applications:** Using reverb for unique effects

### Mid/Side Processing
Advanced Mid/Side processing techniques:
- **Stereo Field Control:** Managing center vs side content
- **Width Management:** Controlling stereo width independently
- **Clarity Enhancement:** Maintaining center clarity while adding space
- **Phase Relationships:** Understanding L/R phase effects
- **Creative Applications:** Using MS for unique effects

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique reverb textures
- **Atmospheric Processing:** Building ambient reverb effects
- **Rhythmic Effects:** Creating rhythmic reverb patterns
- [ ] Create a "Small Room" reverb that adds body to a snare without an audible tail
- [ ] Design a "Lush" cathedral preset using the modulation and mid/side features
- [ ] Explain why Pre-Delay is essential for vocal clarity
- [ ] Use the Bass Multiplier to create a "Bright" vs "Dark" acoustic character
- [ ] Set up a Mid/Side reverb chain for transparent stereo enhancement
- [ ] Create a drum room with appropriate size and decay settings
- [ ] Apply pre-delay for vocal clarity in dense mixes
- [ ] Use modulation for organic reverb movement
- [ ] Implement bass multiplier for low-end management
- [ ] Troubleshoot reverb muddiness and clarity issues effectively
- [ ] Integrate Reeverb 2 into efficient mixing workflows
- [ ] Create genre-specific reverb presets for different musical styles
- [ ] Optimize Reeverb 2 settings for minimal CPU usage
- [ ] Use Reeverb 2 for creative sound design applications
- [ ] Set up advanced reverb routing for complex projects
- [ ] Apply Reeverb 2 in live performance scenarios
- [ ] Create experimental reverb effects with extreme settings
- [ ] Combine Reeverb 2 with other effects for layered processing
- [ ] Integrate Reeverb 2 with other automation tools seamlessly
- [ ] Create custom reverb workflows for specific creative needs
- [ ] Use Reeverb 2 effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with parameter automation
- [ ] Create hybrid reverb effects combining algorithmic and convolution
- [ ] Apply Reeverb 2 in mastering contexts with appropriate care
- [ ] Create complex multi-stage reverb chains with smooth automation
- [ ] Design custom room simulations for specific acoustic environments
- [ ] Use Reeverb 2 for creative vocal processing applications
- [ ] Apply advanced bass management techniques for low-end control
- [ ] Create genre-specific reverb presets for efficient workflow
- [ ] Integrate Reeverb 2 with external hardware for hybrid processing
- [ ] Use Reeverb 2 for audio restoration and creative repair applications
- [ ] Combine Reeverb 2 with other spatial processing tools
- [ ] Apply Reeverb 2 in surround sound or multi-channel setups
- [ ] Create complex spatial relationships using multiple instances
- [ ] Use Reeverb 2 for creative instrumental processing applications
- [ ] Integrate Reeverb 2 with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom early reflection patterns for unique spaces
- [ ] Apply advanced damping techniques for realistic acoustic simulation
- [ ] Use Reeverb 2 for creative stereo enhancement beyond traditional reverb
- [ ] Combine Reeverb 2 with convolution reverb for hybrid spaces
- [ ] Implement advanced pre-delay techniques for professional mixing
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Reeverb 2 for creative sound design in film and game audio
- [ ] Apply Reeverb 2 in live sound reinforcement scenarios
- [ ] Create experimental reverb textures using extreme parameter settings
- [ ] Integrate Reeverb 2 with external reverbs for complex spatial design

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Reeverb 2

## Purpose & Identity
Fruity Reeverb 2 is a high-quality **algorithmic reverb**. Its primary identity is an acoustic space simulator that uses mathematical equations to generate reflections. It is a major upgrade over the original Reeverb, offering professional features like **Mid/Side processing**, detailed **damping**, and **bass multiplier** controls. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Room Generator." You aren't playing a recording of a room; you are telling a computer to *build* a room around your sound. 
- **Size** is the width of the walls.
- **Decay** is how long the sound bounces before disappearing.
- **Damping** is what the walls are made of (Soft carpet vs. Hard tile).

## Hip-Hop / R&B Context
- **The "Big Room" Trap Snare:** Adding a 1.5s bright reverb to a snare to give it that "Stadium" energy (Upbeat).
- **Submerged Melodies:** Using high damping and low-pass filtering to make a piano sound like it's playing at the end of a dark hallway (Moody).
- **Vocal Depth:** Using **Pre-Delay** to keep the vocal crisp and "in front" while still having a lush, spacey tail (Vibey).

## When To Use
- When you want **maximum flexibility** to design a custom space.
- When you need a **lush, modulated tail** that doesn't sound metallic.
- When you want to **cleanly separate** the reverb from the dry signal using Mid/Side.

## When NOT To Use
- **CPU Constraints:** If you need 50 reverbs at once, use the original **Fruity Reeverb** (if available) or keep decay times short.
- **Ultra-Realism:** Use **Fruity Convolver** if you need the exact acoustic fingerprint of a real physical building. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Reeverb 2

## UI Tour
1.  **Main Controls:**
    - **Decay:** Tail length (up to 20 seconds).
    - **Size:** Perceived room dimensions.
    - **Pre-Delay:** The gap before the reverb starts. [SRC: IL-MAN]
2.  **EQ / Filtering (Top Row):**
    - **L.Cut / H.Cut:** Simple shelf filters.
    - **DAMP:** Controls how fast the high-end decays relative to the low-end.
3.  **Low-End Management:**
    - **Bass:** Multiplier for low-frequency decay.
    - **Cross:** The "Crossover" frequency where the Bass knob takes effect.
4.  **Spatial Focus:**
    - **Mid/Side Switch:** Process only the center (Mid) or only the edges (Side).
5.  **Texture:**
    - **Mod / Speed:** Adds pitch detuning to the tail for "lushness."
    - **Diffusion:** Echo density.

## Signal Flow
1.  **Input:** Audio enters.
2.  **Pre-Delay:** The signal is delayed by the set ms.
3.  **Initial Reflection (ER):** The first "bounce" is calculated based on Size.
4.  **Late Reverb (Tail):** The dense algorithmic decay is generated.
5.  **Spectral Damping:** High frequencies are filtered out of the feedback loop.
6.  **Low Multiplier:** Low frequencies are adjusted based on the Bass/Cross settings.
7.  **M/S Routing:** The signal is routed to the Mid or Side channels.
8.  **Output:** Final stereo mix.

## Things Beginners Misunderstand
- **Size vs Decay:** Size is the "Box," Decay is the "Feedback." You can have a tiny room with a 10-second decay (unnatural but trippy) or a giant hall with a 0.5-second decay.
- **Mid/Side Mode:** Switching to "Side" doesn't make the reverb wider; it tells the reverb to **ignore** the middle of your vocal and only respond to the stereo info. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Reeverb 2

## 1. The "Vocal Halo" (Pre-Delay)
In R&B, we want a huge reverb, but we don't want the vocal to sound "pushed back."
- **Technique:** Increase **Pre-Delay** to **30ms - 60ms**.
- **Result:** The dry vocal transient finishes before the reverb starts. This keeps the artist "in your face" while the "halo" of space follows behind them. [SRC: REPUTABLE]

## 2. Cleaning the Low-End (Bass Multiplier)
- **Technique:** Set **Bass** to **0.5x**. Set **Cross** to **200Hz**.
- **Why:** This makes the low-frequency reverb decay twice as fast as the high-end. 
- **Result:** Prevents the "muddy" rumble that often ruins hip-hop mixes when using long reverbs.

## 3. The "Expensive" R&B Tail (Modulation)
- **Technique:** Set **Mod** to **30%** and **Speed** to **0.5 Hz**.
- **Effect:** This adds a subtle, chorus-like pitch movement to the reverb tail.
- **Vibe:** It sounds more "shimmering" and professional, similar to high-end Lexicon hardware.

## 4. Side-Only Reverb (Clarity Hack)
- **Technique:** Switch the plugin to **SIDE** mode.
- **Execution:** Place it on a lead vocal send.
- **Result:** The reverb will only be audible in the stereo edges. The "Phantom Center" where the Kick, Snare, and Vocal live stays perfectly clean. [SRC: IL-MAN]

## Common Pitfalls + Fixes
- **Pitfall:** "The reverb sounds like static/white noise."
  - **Fix:** Your **Diffusion** is too high or your **Size** is too small. Decrease Diffusion to add more "grain" and distinct echoes.
- **Pitfall:** "The mix sounds hollow."
  - **Fix:** You might have too much **L.Cut**. Ensure you aren't cutting above 300Hz unless necessary. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Reeverb 2

Reeverb 2 translates vibes through **Acoustic Dimension** and **Spectral Decay**.

## 1. Moody (Dark, Distant, Submerged)
- **Concept:** "The Long Shadow."
- **Levers:**
  - **Damping:** High (clockwise).
  - **L.Cut:** 300Hz (remove rumble).
  - **Decay:** Long (4s+).
- **Listen For:** A warm, muffled tail that stays out of the way of the high-end transients.
- **Don't Do This:** Don't let the highs shimmer; keep it "felt" rather than "heard."

## 2. Upbeat (Big, Bright, Stadium)
- **Concept:** "The Hype Room."
- **Levers:**
  - **Size:** Large.
  - **Decay:** Moderate (1.5s).
  - **H.Cut:** Open (clockwise).
- **Listen For:** A bright "sizzle" on the drums that makes the track feel massive and professional.

## 3. Spacey (Ethereal, Infinite, Galactic)
- **Concept:** "The Void."
- **Levers:**
  - **Decay:** Maximum (20s).
  - **Modulation:** Depth at 50%.
  - **Stereo Sep:** Wide.
- **Listen For:** A tail that never seems to end, slowly drifting in pitch.

## 4. Jazzy (Intimate, Natural, Close)
- **Concept:** "The Live Studio."
- **Levers:**
  - **Size:** Small.
  - **Decay:** Short (0.8s).
  - **Pre-Delay:** High (40ms+).
- **Listen For:** The instrument staying "dry" and focused, but having a natural "halo" of a real room around it.

## 5. Vibey (Smooth, Glossy, Expensive)
- **Concept:** "The Silk Wall."
- **Levers:**
  - **Diffusion:** Maximum.
  - **Mid/Side Switch:** Set to **Side**.
  - **ER (Early Reflections):** Low.
- **Listen For:** Reverb that exists only at the "edges" of the stereo field, leaving the center perfectly clear for the vocal. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\complete-guide.md

```markdown
# Fruity Reeverb 2 – Advanced Reverb Guide

## Overview
Professional reverb with extensive control over early reflections, room character, and modulation. More CPU-intensive but vastly more flexible than original Reeverb.

## Main Parameters

### Early Reflections
- **Pre-delay**: Gap before reverb starts (0-500ms)
- **Early Level**: Amount of early reflections
- **Early Damping**: High-frequency absorption in early reflections

### Room Character
- **Size**: Virtual room dimensions
- **Diffusion**: Reflection density and smoothness
- **Decay**: Reverb tail length
- **Damping**: High-frequency decay rate

### Tone Shaping
- **Bass**: Low-frequency multiplier
- **High Damping**: High-frequency absorption
- **High Cut**: Low-pass filter on reverb

### Modulation
- **Mod Rate**: Chorus-like modulation speed
- **Mod Depth**: Amount of pitch modulation

### Output
- **Dry**: Original signal level
- **Wet**: Reverb signal level
- **Width**: Stereo spread

## Hip-Hop Applications

### Vocal Reverb (Lead)
**Settings**:
- Pre-delay: 20-40ms
- Size: 50-65%
- Decay: 1.5-2.5s
- High Damping: 4-6kHz
- Wet: 20-30%

**Result**: Clear, professional vocal space

### Snare/Clap (Trap)
**Settings**:
- Pre-delay: 10-15ms
- Size: 40-50%
- Decay: 0.8-1.5s
- High Damping: 3kHz
- Wet: 18-28%

**Result**: Modern, punchy room sound

### Pad Atmosphere
**Settings**:
- Pre-delay: 0-10ms
- Size: 70-85%
- Decay: 3-5s
- Modulation: Subtle
- Wet: 40-60%

**Result**: Lush, enveloping space

### 808 Air (Minimal)
**Settings**:
- Pre-delay: 5ms
- Size: 25-35%
- Decay: 0.5-1s
- High Damping: 2kHz
- Bass: 0.5x
- Wet: 5-12%

**Result**: Slight room without mud

## Genre-Specific Presets

### Trap
`\`\`json
{
  "name": "Trap Vocal Space",
  "preDelay": 30,
  "size": 55,
  "decay": 2.0,
  "highDamping": 5000,
  "diffusion": 70,
  "modRate": 0.2,
  "modDepth": 0.1,
  "wet": 25,
  "use": "Lead vocals, ad-libs"
}
`\`\`

### Boom Bap
`\`\`json
{
  "name": "Classic Room",
  "preDelay": 15,
  "size": 45,
  "decay": 1.8,
  "highDamping": 4000,
  "diffusion": 65,
  "bass": 1.2,
  "wet": 22,
  "use": "Samples, drums"
}
`\`\`

### Lo-Fi
`\`\`json
{
  "name": "Vintage Space",
  "preDelay": 5,
  "size": 60,
  "decay": 2.5,
  "highDamping": 3500,
  "diffusion": 50,
  "modRate": 0.5,
  "modDepth": 0.3,
  "bass": 1.5,
  "wet": 32,
  "use": "Keys, guitars, vocals"
}
`\`\`

### Melodic
`\`\`json
{
  "name": "Dreamy Hall",
  "preDelay": 25,
  "size": 75,
  "decay": 3.5,
  "highDamping": 6000,
  "diffusion": 85,
  "modRate": 0.3,
  "modDepth": 0.15,
  "wet": 38,
  "use": "Synths, pads, melodic vocals"
}
`\`\`

## Professional Workflows

### Send/Return Setup
1. Create dedicated reverb send track
2. Add Fruity Reeverb 2 (wet 100%, dry 0%)
3. Route instruments via mixer sends
4. Control depth per instrument

**Advantages**:
- One cohesive space
- CPU efficient
- Easy to EQ/compress reverb
- Professional standard

### Multiple Reverb Approach
1. **Short reverb**: Drums, transients (decay 0.8-1.5s)
2. **Medium reverb**: Vocals, leads (decay 1.5-2.5s)
3. **Long reverb**: Pads, atmosphere (decay 3-5s)

Each reverb serves different purpose

### Parallel Reverb Processing
1. Send to reverb aux at 100% wet
2. Add EQ to reverb return (cut lows, shape highs)
3. Add compression to reverb (glue effect)
4. Blend with dry signal

**Result**: Maximum control and polish

## Advanced Techniques

### Pre-Delay Clarity
- **Short (5-15ms)**: Tight, immediate space
- **Medium (20-40ms)**: Separates dry from wet
- **Long (50-100ms)**: Slapback-style effect

**Rule**: Longer pre-delay = more clarity on transients

### Modulation Character
- **No mod**: Clean, transparent reverb
- **Subtle (0.1-0.2)**: Natural shimmer
- **Medium (0.3-0.5)**: Chorus-like texture
- **Heavy (0.6-1.0)**: Obvious, creative effect

### Damping EQ Simulation
- **Low High Damping (2-3kHz)**: Dark, vintage
- **Mid High Damping (4-5kHz)**: Natural, balanced
- **High High Damping (6-8kHz)**: Bright, modern

### Width Manipulation
- **Narrow (30-50%)**: Centered, focused
- **Normal (70-100%)**: Natural stereo
- **Wide (>100%)**: Expansive, spacious

## By Instrument Details

### Lead Vocals
`\`\`
Pre-delay: 25-35ms (clarity)
Size: 55-65%
Decay: 1.8-2.5s
High Damping: 5-6kHz
Wet: 20-28%
`\`\`

### Backing Vocals
`\`\`
Pre-delay: 10-20ms
Size: 60-70%
Decay: 2.5-3.5s
Wet: 35-50%
`\`\`

### Snare
`\`\`
Pre-delay: 10-15ms
Size: 40-50%
Decay: 1.0-1.5s
High Damping: 3-4kHz
Wet: 20-30%
`\`\`

### Hi-Hats
`\`\`
Pre-delay: 5-10ms
Size: 35-45%
Decay: 0.6-1.0s
High Damping: 6kHz+
Wet: 12-20%
`\`\`

### Pads/Synths
`\`\`
Pre-delay: 0-10ms
Size: 70-85%
Decay: 3-5s
Modulation: Medium
Wet: 40-60%
`\`\`

### Piano/Keys
`\`\`
Pre-delay: 15-25ms
Size: 50-65%
Decay: 2.0-3.0s
High Damping: 5kHz
Wet: 25-35%
`\`\`

### 808/Sub Bass
`\`\`
Pre-delay: 5ms
Size: 25-35%
Decay: 0.5-0.8s
High Damping: 2kHz
Bass: 0.5x
Wet: 5-10% MAX
`\`\`

## Mixing Strategies

### Reverb EQ Template
On reverb return track:
1. **High-pass**: 200-400Hz (remove mud)
2. **Cut**: 500-800Hz (clear midrange)
3. **Boost**: 8-12kHz if needed (air)

### Compression on Reverb
- Light ratio (2:1 to 3:1)
- Medium-fast attack
- Slow release
- Creates consistent reverb level

### Stereo Width Control
- **Drums**: 70-85% width (focused)
- **Melodics**: 90-110% width (spacious)
- **Vocals**: 80-100% width (balanced)

## Common Mistakes

❌ **Too much on everything**: Use selectively
→ Not every element needs reverb

❌ **No pre-delay**: Transients get washed out
→ Use 20-40ms for clarity

❌ **Wrong decay time**: Doesn't match tempo
→ Faster tempo = shorter decay

❌ **No EQ on reverb**: Muddy low-end
→ Always high-pass reverb return

❌ **Same settings for all**: Generic sound
→ Customize per instrument

## Troubleshooting

**Muddy mix**: High-pass reverb at 300-500Hz

**Reverb too obvious**: Reduce wet, increase pre-delay

**Sounds fake**: Increase diffusion, add subtle modulation

**Too dark**: Lower high damping frequency

**Too bright/harsh**: Increase high damping, add high-cut

**Doesn't glue**: Create one main reverb send for cohesion

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Reeverb 2 (5 Minutes)

1.  **Insert:** Load **Fruity Reeverb 2** on a Send track.
2.  **Wet/Dry:** Ensure **WET** is at 100% and **DRY** is at 0%.
3.  **Space:** Choose a preset or set **SIZE** to medium.
4.  **Length:** Adjust **DECAY** until the tail lasts long enough without overlapping the next chord.
5.  **Clarity:** Turn up **PRE-DELAY** (~20ms) so the original sound "pops" before the reverb hits.
6.  **Tone:** Use **L.CUT** to remove low mud and **H.CUT** to tame harsh high sizzle.
7.  **Tip:** Use the **BASS** knob to decide if the "weight" of the reverb should last longer than the "air." [SRC: IL-MAN]
```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Reeverb 2

- **Rumble Overload:** Leaving the **Bass** multiplier at 1.5x on a large room. This creates a low-end "boom" that ruins the clarity of the kick drum. **Fix:** Set Bass to 0.5x.
- **Washed Out Vocals:** Setting Pre-Delay to 0. This makes the vocal sound distant and drowned. **Fix:** Use 20ms+ Pre-Delay to keep the vocal upfront.
- **High Frequency Hiss:** Not using the **DAMP** knob. Digital reverb can have harsh, static-like high frequencies. **Fix:** Turn DAMP up to ~50% to make the high-end die out faster.
- **Mid/Side Confusion:** Thinking "Mid" means "Mid frequencies." **Fix:** Mid refers to the **Center** of the stereo field. Side refers to the **Edges**.
- **Static Tails:** Not using **Modulation**. A little bit of Mod (10-20%) prevents the reverb from sounding like a boring loop and makes it feel like real air. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Reeverb 2

| Goal | Size | Decay | Pre-Delay | M/S | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Expensive R&B** | 70% | 3.5s | 45ms | SIDE | Lead Vocal space. |
| **Trap Drum Room**| 10% | 0.6s | 0ms | MID | Snare/Percussion glue. |
| **Lush Ambient** | 100%| 12.0s | 80ms | MID | Cinematic pads. |
| **Soul Guitar** | 40% | 1.8s | 15ms | MID | Natural acoustic guitar.|
| **Wide Ad-libs** | 60% | 2.5s | 100ms | SIDE | Background vocals. |

*Note: Always set L.Cut to at least 200Hz for hip-hop mixes.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Reeverb 2)

- **The Goal:** A massive, "infinite" dark cavern that feels lonely and deep.
- **Recipe:**
  1. Load Reeverb 2 on a melodic synth pad.
  2. Set **Size** to **MAX**.
  3. Set **Decay** to **8.0s**.
  4. Set **DAMP** to **80%** (Makes the tail very dark).
  5. Set **Pre-Delay** to **120ms**.
  6. **Bass Multiplier:** Set to **1.5x** and **Cross** to **400Hz**.
- **Result:** The sound hits, and then a massive, heavy shadow of reverb follows it several beats later. It feels like the sound is bouncing off the walls of a giant, empty warehouse.
- **Mix Tip:** Link the **Mix** knob to an automation clip to make the cavern "swell" during the bridge. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Energy Room")
- **Settings:** Size 15%, Decay 0.4s, ER 80%.
- **Move:** High Diffusion + No Pre-delay.
- **Effect:** Adds a physical "punch" to the percussion hits without cluttering the rhythm.

## Psychedelic (The "Liquid Room")
- **Settings:** Mod 100%, Speed 2.0 Hz.
- **Move:** Automate the **Size** knob from 0% to 100% during a note.
- **Effect:** The reverb "screams" and pitch-shifts like a moving wall.

## Jazzy (The "Realistic Chamber")
- **Settings:** Size 45%, Decay 1.4s, Bass 1.0x.
- **Move:** L.Cut at 150Hz, H.Cut at 12kHz.
- **Context:** Simulates a high-end studio room where you can hear the air around the saxophone.

## Vibey (The "Expensive Glow")
- **Settings:** Decay 4.0s, Pre-Delay 50ms, SIDE Mode.
- **Move:** DAMP at 30%, H.Cut disabled.
- **Context:** The classic modern R&B vocal "aura" that sits only at the edges. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Reeverb 2: The Algorithmic Architect

> **Scope:** Algorithmic Reverb, Mid/Side Processing, and Damping.
> **Source:** Image-Line Official Manual (v21.2).
> **Complexity:** Medium-High.

## 🧠 The "Room" Concept
Fruity Reeverb 2 is an algorithmic reverberator. Unlike convolution (which uses samples), it uses mathematical delay lines to simulate space. This makes it extremely flexible for "Unnatural" or "Hyper-Real" spaces.

**Signal Flow:**
`Input` -> **[PRE-DELAY]** -> **[LOW/HIGH CUT]** -> **[DIFFUSION]** -> **[REVERB ENGINE]** -> **[DAMPING]** -> **[BASS MULTIPLIER]** -> **[STEREO SEP]** -> **[OUTPUT]**

*   **Critical Nuance:** The "Damping" and "High Cut" are different. High Cut removes treble *before* the reverb. Damping makes the treble decay *faster* than the bass (simulating air absorption).

---

## 🎛️ Section 1: The Room Properties

### Size & Tone
| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Size** | Small - Massive | **Virtual Dimension.** <br> *Small:* Metallic, Ringing (Bathroom). <br> *Large:* Smooth, Washed out (Cathedral). <br> *Pro Tip:* Large sizes need longer Decay times to sound natural. |
| **Diff (Diffusion)** | Sparse - Dense | **Reflection Density.** <br> *Low:* You can hear individual "grains" or echoes. <br> *High:* Smooth wall of white noise. <br> *Percussion:* Use Low Diffusion for clarity. *Vocals:* Use High Diffusion for smoothness. |
| **Dec (Decay)** | 0.1s - 20s | **RT60 Time.** <br> How long it takes for the sound to drop by 60dB. |

### Coloration Controls
| Control | Function |
| :--- | :--- |
| **H.Cut** | **Input Filter.** <br> Removes "Sss" and clicks *before* they enter the reverb. Essential for preventing metallic harshness. |
| **L.Cut** | **Input Filter.** <br> Removes Kick/Sub *before* reverberation. Always cut below 200Hz for a clean mix. |
| **Damp** | **Air Absorption.** <br> *High Damp:* Highs die quickly (Warm/Dark room). <br> *Off:* Highs last as long as lows (Unnatural/Icy). |

---

## 🔁 Section 2: Advanced Processing (MID/SIDE)

### Mid / Side Switch
This is the hidden superpower of Reeverb 2.

*   **MID (Default):** Processes the sum (L+R).
*   **SIDE:** Processes *only* the stereo difference information.
    *   **Usage:** Add space to the wide synths/pads without muddying the center kick/vocal/snare.
    *   **Result:** A mix that feels "huge" but stays "focused".

---

## 🌊 Section 3: Modulation (The "Alive" Knob)

Algorithmic reverbs can sound static (metallic ringing at specific frequencies). Modulation fixes this.

| Control | Function |
| :--- | :--- |
| **Mod** | **LFO Depth.** <br> Modulates the delay times inside the reverb tank. |
| **Speed** | **LFO Rate.** |
| **Effect** | Breaks up standing waves. <br> *Subtle:* Smoother tail. <br> *Extreme:* Detuned "Chorused Reverb" (Vangelis style). |

---

## ⚡ Technical Specs: Bass Multiplier

*   **Bass:** Multiplies the Decay time for low frequencies.
*   **Cross:** Sets the frequency split point.
*   **Physics:** In real life, bass travels further than treble.
*   **Setting:** Set Bass to 1.2x - 1.5x for a "Boomy" majestic hall. Set to 0.5x for a tight, controlled studio room.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Invisible" Vocal Halo
1.  **Size:** 40 (Small Hall).
2.  **Diff:** 100% (Smooth).
3.  **Decay:** 1.5s.
4.  **H.Cut:** 4kHz (Aggressive cut).
5.  **Damp:** High.
6.  **Result:** You don't "hear" the reverb, but the vocal sounds expensive and seated.

### 2. The "Side-Only" Width
1.  **Input:** Stereo Synth Pad.
2.  **Mode Switch:** Set to **SIDE**.
3.  **Wet:** 100%. Dry: 100% (Parallel).
4.  **Result:** The center of the stereo image (Mono) is 100% dry and punchy. The edges are swimming in reverb. Extreme width.

### 3. The "Gated" Snare Prep
1.  **Diff:** 0% (Grainy).
2.  **Size:** 100 (Massive).
3.  **Decay:** Long.
4.  **L.Cut:** 500Hz.
5.  **Result:** A harsh, exploding noise burst. Perfect for feeding into a Noise Gate for the classic 80s effect.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Reeverb 2 - Parameter Cheat Sheet

A quick reference guide for every control in Fruity Reeverb 2.

## 🎛️ The Controls

### Input Section
| Knob | Full Name | Function | Pro Tip |
|------|-----------|----------|---------|
| **MID/SIDE** | Mid/Side Mode | **Mid**: Reverbs summed mono signal. **Side**: Reverbs stereo difference. | Use **Side** mode on synths to widen them without muddying the center (kick/bass/vocal). |
| **H.CUT** | High Cut | Removes high frequencies entering the reverb. | Lower this to make the reverb sit "behind" the source. |
| **L.CUT** | Low Cut | Removes low frequencies entering the reverb. | **CRITICAL:** Cut up to 300-500Hz to prevent "muddy mix" syndrome. |

### Room Section
| Knob | Full Name | Function | Pro Tip |
|------|-----------|----------|---------|
| **DELAY** | Predelay | Time gap before reverb starts. | Increase to ~20-60ms to keep vocals clear and intelligible. |
| **SIZE** | Room Size | How big the virtual space is. | Small = Drums/Percussion. Large = Pads/Orchestral. |
| **DIFF** | Diffusion | Density of reflections. | **Low**: Grainy, echo-y (good for vocals). **High**: Smooth, dense (good for drums). |

### Texture Section
| Knob | Full Name | Function | Pro Tip |
|------|-----------|----------|---------|
| **MOD** | Modulation | Pitch wobble of the tail. | Fixes "metallic" ringing on long reverbs. Adds chorus vibe. |
| **SPEED** | Mod Speed | Speed of the wobble. | Slow speeds usually sound more natural. |
| **DAMP** | Damping | How fast high frequencies die out. | High damping = darker, warmer, more realistic room. |

### Bass Section
| Knob | Full Name | Function | Pro Tip |
|------|-----------|----------|---------|
| **BASS** | Bass Multiplier | Boosts/Cuts decay time of low freqs. | Usually keep this near default or lower to avoid low-end buildup. |
| **CROSS** | Crossover | Frequency split point for the Bass knob. | - |

### Output/Mix Section
| Knob | Full Name | Function | Pro Tip |
|------|-----------|----------|---------|
| **DEC** | Decay Time | How long the tail lasts (RT60). | Sync this to tempo (roughly) so tails die before next phrase. |
| **DRY** | Dry Level | Volume of original sound. | **0%** if on a Send/Bus. **100%** if on an Insert. |
| **ER** | Early Reflections | First bounce volume. | Louder ER makes the sound feel "closer" to the walls. |
| **WET** | Wet Level | Volume of the reverb tail. | Balance this against DRY for distance. Less Dry + More Wet = Far away. |
| **SEP** | Separation | Stereo width of the wet signal. | Turn left for mono reverb (vintage/center), right for wide. |

---

## 🛑 Common Mistakes
- **Too much Decay:** Makes the mix washed out.
- **No Low Cut:** Causes the whole track to sound muddy and undefined.
- **Reverb on Master:** Don't do it (unless for a specific special effect breakdown).

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Reeverb 2

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Decay** | Knob | **Spacey** (Long) | **Density** | Tail duration (0.1 to 20s). |
| **Size** | Knob | **Upbeat** (Large) | **Depth** | Perceived room dimensions. |
| **Pre-Delay** | Knob | **Jazzy** (Focus) | **Clarity** | Time gap before reverb onset. |
| **DAMP** | Knob | **Moody** (Dark) | **Tone** | Speed of high-frequency decay. |
| **Mod / Speed**| Knob | **Psychedelic** | **Motion** | Pitch drift in the tail. |
| **Mid / Side** | Switch | **Vibey** (Width) | **Width** | Focus of the spatial processing. |

- **Vibe Impact Tag (Diffusion):** High diffusion values create a smoother, more "Expensive" tail.
- **Mix Impact Tag (Clarity):** The **L.CUT** knob is mandatory at ~250Hz for non-muddy trap mixes. [SRC: IL-MAN]
```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Reeverb 2",
  "category": "Reverb / Spatial",
  "parameters": [
    {
      "section": "Input Processing",
      "id": "mid_side",
      "name": "Mid / Side Mode",
      "type": "Switch",
      "description": "Mid: Processes Sum (L+R). Side: Processes Difference (L-R)."
    },
    {
      "section": "Input Processing",
      "id": "high_cut",
      "name": "High Cut",
      "range": { "min": 20, "max": 20000, "unit": "Hz" },
      "description": "Removes high frequencies from the input signal."
    },
    {
      "section": "Input Processing",
      "id": "low_cut",
      "name": "Low Cut",
      "range": { "min": 20, "max": 20000, "unit": "Hz" },
      "description": "Removes low frequencies from the input signal."
    },
    {
      "section": "Room Properties",
      "id": "size",
      "name": "Room Size",
      "range": { "min": 1, "max": 100, "unit": "Geometric" },
      "description": "Simulated volume of the space."
    },
    {
      "section": "Room Properties",
      "id": "diffusion",
      "name": "Diffusion",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Density of reflections. Low = Echos. High = Smooth."
    },
    {
      "section": "Time",
      "id": "decay",
      "name": "Decay Time (RT60)",
      "range": { "min": 0.1, "max": 20.0, "unit": "s" },
      "description": "Length of the reverb tail."
    },
    {
      "section": "Time",
      "id": "predelay",
      "name": "Pre-Delay",
      "range": { "min": 0, "max": 1000, "unit": "ms" },
      "description": "Delay before reverb starts."
    },
    {
      "section": "Damping",
      "id": "high_damp",
      "name": "High Damping",
      "range": { "min": 0, "max": 20000, "unit": "Hz" },
      "description": "Frequency above which decay is swifter (Warmer tail)."
    },
    {
      "section": "Damping",
      "id": "bass_mult",
      "name": "Bass Multiplier",
      "range": { "min": 0, "max": 400, "unit": "%" },
      "description": "Multiplies decay time for bass frequencies."
    },
    {
      "section": "Output",
      "id": "wet_level",
      "name": "Wet Level",
      "range": { "min": -Infinity, "max": 6, "unit": "dB" },
      "description": "Volume of reverb signal."
    },
    {
      "section": "Output",
      "id": "dry_level",
      "name": "Dry Level",
      "range": { "min": -Infinity, "max": 6, "unit": "dB" },
      "description": "Volume of original signal."
    },
    {
      "section": "Output",
      "id": "sep",
      "name": "Stereo Separation",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Width of the wet signal."
    }
  ]
}

```

---

## FILE: 02-Data\parameters\reeverb2-params.json

```json
{
  "plugin": "Fruity Reeverb 2",
  "type": "Reverb",
  "description": "Simulates acoustic spaces to add realistic reverberation to instruments.",
  "parameters": [
    {
      "name": "MID / SIDE",
      "type": "Switch",
      "role": "Input Processing",
      "description": "Processes either the mid (summed mono) or side (stereo field) components of the input signal.",
      "tips": ["Use Side mode to add width without muddying the center channel."]
    },
    {
      "name": "H.CUT",
      "label": "High Cut",
      "type": "Knob",
      "role": "Tone Shaping",
      "description": "Removes high frequencies from the reverb input.",
      "tips": ["Cut highs to push the reverb further back in the mix."]
    },
    {
      "name": "L.CUT",
      "label": "Low Cut",
      "type": "Knob",
      "role": "Tone Shaping",
      "description": "Removes low frequencies from the reverb input.",
      "tips": ["Essential for removing mud. Try cutting up to 300-500Hz on vocals."]
    },
    {
      "name": "DELAY",
      "label": "Predelay",
      "type": "Knob",
      "role": "Spatial Definition",
      "description": "Controls the delay between the direct signal and the first reverb reflection.",
      "tips": ["Increase to separate the dry vocal from the reverb tail.", "Tempo-synced delays can create rhythmic pumping effects."]
    },
    {
      "name": "SIZE",
      "label": "Room Size",
      "type": "Knob",
      "role": "Spatial Simulation",
      "description": "Sets the size of the simulated virtual room.",
      "tips": ["Small = bathroom/studio, Large = cathedral/hall.", "Automate for creative effects."]
    },
    {
      "name": "DIFF",
      "label": "Diffusion",
      "type": "Knob",
      "role": "Texture",
      "description": "Controls the density of reflections.",
      "tips": ["Low = distinct echoes (grainy), High = smooth wash (dense)."]
    },
    {
      "name": "MOD",
      "label": "Modulation Depth",
      "type": "Knob",
      "role": "Texture",
      "description": "Modulates the reverb time to smooth out metallic ringing.",
      "tips": ["Adds chorus-like movement to the tail.", "Use sparingly on realistic acoustic instruments."]
    },
    {
      "name": "SPEED",
      "label": "Modulation Speed",
      "type": "Knob",
      "role": "Texture",
      "description": "Sets the speed of the sine-wave modulation.",
      "tips": []
    },
    {
      "name": "BASS",
      "label": "Bass Multiplier",
      "type": "Knob",
      "role": "Decay Shaping",
      "description": "Adjusts the decay time of bass frequencies relative to the main decay.",
      "tips": ["Boost for boomy, dark rooms. Cut for tighter low end."]
    },
    {
      "name": "CROSS",
      "label": "Bass Crossover",
      "type": "Knob",
      "role": "Decay Shaping",
      "description": "Determines the frequency point below which bass is boosted by the Bass knob.",
      "tips": []
    },
    {
      "name": "DEC",
      "label": "Decay Time",
      "type": "Knob",
      "role": "Spatial Simulation",
      "description": "Controls the reverb's decay time (RT60).",
      "tips": ["Short (<1s) for ambience, Long (>2s) for lush tails."]
    },
    {
      "name": "DAMP",
      "label": "High Damping",
      "type": "Knob",
      "role": "Tone Shaping",
      "description": "Adjusts the damping rate of high frequencies in the tail.",
      "tips": ["High damping = warm, dark room (absorptive walls).", "Low damping = bright, splashing room (reflective walls)."]
    },
    {
      "name": "DRY",
      "label": "Dry Level",
      "type": "Knob",
      "role": "Mix",
      "description": "Sets the level of the direct input signal.",
      "tips": ["Set to 0 when using as a Send effect."]
    },
    {
      "name": "ER",
      "label": "Early Reflections",
      "type": "Knob",
      "role": "Mix",
      "description": "Sets the level of the first reflections.",
      "tips": ["ER defines the 'position' in the room. louder ER = closer to walls/listener."]
    },
    {
      "name": "WET",
      "label": "Wet Level",
      "type": "Knob",
      "role": "Mix",
      "description": "Sets the level of the reverberant signal.",
      "tips": []
    },
    {
      "name": "SEP",
      "label": "Stereo Separation",
      "type": "Knob",
      "role": "Output Processing",
      "description": "Adjusts the stereo separation of the wet reverb signal.",
      "tips": ["Turn left for mono reverb, right for extra wide."]
    }
  ],
  "common_problems": [
    {
      "symptom": "Muddy Mix",
      "solution": "Increase L.CUT (Low Cut) to remove bass from the reverb.",
      "parameter": "L.CUT"
    },
    {
      "symptom": "Washed Out Sound",
      "solution": "Reduce DECAY time or WET level. Increase PREDELAY.",
      "parameter": "DEC / DELAY"
    },
    {
      "symptom": "Metallic Ringing",
      "solution": "Increase MOD (Modulation) and DIFF (Diffusion).",
      "parameter": "MOD / DIFF"
    }
  ]
}
```

---

## FILE: 02-Data\presets\hip-hop-reverb-presets.json

```json
{
  "presets": [
    {
      "name": "Trap Vocal Lead",
      "category": "vocals",
      "subgenre": "trap",
      "parameters": {
        "preDelay": 30,
        "size": 55,
        "decay": 2.0,
        "highDamping": 5500,
        "diffusion": 70,
        "bass": 0.7,
        "modRate": 0.2,
        "modDepth": 0.1,
        "width": 90,
        "wet": 100
      },
      "sendAmount": "22%",
      "description": "Modern, bright vocal space for trap/modern hip-hop",
      "tips": "Use on send track, high-pass return at 350Hz"
    },
    {
      "name": "Boom Bap Classic",
      "category": "vocals",
      "subgenre": "boom-bap",
      "parameters": {
        "preDelay": 20,
        "size": 48,
        "decay": 1.7,
        "highDamping": 4500,
        "diffusion": 65,
        "bass": 1.1,
        "modRate": 0.15,
        "modDepth": 0.05,
        "width": 85,
        "wet": 100
      },
      "sendAmount": "24%",
      "description": "Warm, vintage room sound for classic hip-hop",
      "tips": "Add slight tape saturation before reverb for warmth"
    },
    {
      "name": "Melodic Singing",
      "category": "vocals",
      "subgenre": "melodic",
      "parameters": {
        "preDelay": 38,
        "size": 65,
        "decay": 3.0,
        "highDamping": 6000,
        "diffusion": 80,
        "bass": 0.75,
        "modRate": 0.25,
        "modDepth": 0.18,
        "width": 100,
        "wet": 100
      },
      "sendAmount": "30%",
      "description": "Lush hall for melodic/singing vocals",
      "tips": "Automate send higher in chorus sections"
    },
    {
      "name": "Lo-Fi Intimate",
      "category": "vocals",
      "subgenre": "lo-fi",
      "parameters": {
        "preDelay": 15,
        "size": 58,
        "decay": 2.4,
        "highDamping": 3800,
        "diffusion": 55,
        "bass": 1.4,
        "modRate": 0.4,
        "modDepth": 0.35,
        "width": 95,
        "wet": 100
      },
      "sendAmount": "32%",
      "description": "Warm, vintage character for lo-fi/chill rap",
      "tips": "Use with vinyl/tape effects for cohesive vintage sound"
    },
    {
      "name": "Snare Room (Trap)",
      "category": "drums",
      "subgenre": "trap",
      "parameters": {
        "preDelay": 12,
        "size": 42,
        "decay": 1.2,
        "highDamping": 4000,
        "diffusion": 68,
        "bass": 0.6,
        "modRate": 0,
        "modDepth": 0,
        "width": 80,
        "wet": 100
      },
      "sendAmount": "25%",
      "description": "Tight room for modern snare/clap sounds",
      "tips": "Keep send lower for punchier sound"
    },
    {
      "name": "Pad Atmosphere",
      "category": "melodic",
      "subgenre": "all",
      "parameters": {
        "preDelay": 5,
        "size": 78,
        "decay": 4.2,
        "highDamping": 5800,
        "diffusion": 85,
        "bass": 0.8,
        "modRate": 0.28,
        "modDepth": 0.22,
        "width": 110,
        "wet": 100
      },
      "sendAmount": "45%",
      "description": "Huge, enveloping space for pads and synths",
      "tips": "Use on send, compress reverb return for consistency"
    },
    {
      "name": "Piano Natural",
      "category": "melodic",
      "subgenre": "all",
      "parameters": {
        "preDelay": 22,
        "size": 58,
        "decay": 2.6,
        "highDamping": 5200,
        "diffusion": 72,
        "bass": 0.9,
        "modRate": 0.18,
        "modDepth": 0.12,
        "width": 95,
        "wet": 100
      },
      "sendAmount": "28%",
      "description": "Natural hall for piano/keys",
      "tips": "Matches well with acoustic piano samples"
    },
    {
      "name": "808 Subtle Air",
      "category": "bass",
      "subgenre": "trap",
      "parameters": {
        "preDelay": 8,
        "size": 28,
        "decay": 0.7,
        "highDamping": 2500,
        "diffusion": 50,
        "bass": 0.4,
        "modRate": 0,
        "modDepth": 0,
        "width": 70,
        "wet": 100
      },
      "sendAmount": "8%",
      "description": "Minimal room for 808s without mud",
      "tips": "Very subtle! High-pass reverb return at 500Hz minimum"
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Reeverb 2)

## 1. The "250Hz Mud" Rule
- **Rule:** Reverb should never have bass. 
- **Application:** Always set **L.CUT** to at least **250Hz**. Low-end reverb tails will blur your 808 and make the mix sound amateur. [SRC: REPUTABLE]

## 2. Pre-Delay for Rap Vocals
- **Rule:** Keep the rapper "in the room."
- **Application:** Use a Pre-Delay of **20ms to 50ms**. This prevents the reverb from washing out the consonants of the vocal, maintaining "Intelligibility."

## 3. Side-Mode for Wide Beats
- **Rule:** Clear the center for the lead.
- **Application:** Switch Reeverb 2 to **Side** mode. This ensures the reverb only lives in the stereo differences, keeping the mono center (Kick, Snare, Lead) perfectly dry.

## 4. Damping for Distant Vibes
- **Rule:** High frequencies tell the ear a sound is "Close."
- **Application:** For moody, distant sounds, crank the **DAMP** knob. This makes the high frequencies die out instantly, simulating a large, soft-surfaced room.

## 5. Bass Multiplier Logic
- **Rule:** Drum reverbs need short bass decay.
- **Application:** Set the **BASS** knob below 100% for snares. This ensures the "Thump" of the snare doesn't linger and muddy up the rhythm. [SRC: IL-MAN]
```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Reeverb 2

## 1. Mid/Side Reverb Integration

Stop washing out your Lead Vocals and Kick Drums.

1.  **Problem:** Applying reverb to a stereo mix muddies the center (where the Kick/Snare/Vocal live).
2.  **Solution:** Use the **SIDE** input mode.
3.  **Steps:**
    *   Load Reeverb 2 on your Master or Bus.
    *   Flip the switch in the top left from "MID" to "SIDE".
    *   Set Decay to 2-3 seconds.
    *   Set Dry to 100% (to keep the original signal).
4.  **Physics:** The reverb algorithm *ignores* the center channel. It only reverberates sounds that are already panned.
5.  **Result:** Crystal clear center image, with massive width and ambiance on the sides.

## 2. The "Abyss" Drone Generator

Turning short sounds into infinite soundscapes.

1.  **Source:** A short pluck or piano note.
2.  **Settings:**
    *   **decay:** 20 Seconds (Max).
    *   **Size:** 100 (Max).
    *   **Diffusion:** 100%.
    *   **Modulation:** Depth 50%, Speed Slow.
3.  **H.Cut:** Open (20kHz).
4.  **Damping:** OFF (Let the highs ring forever).
5.  **Technique:** Play one note. The sound will hang and evolve because of the Modulation.
6.  **Pro Tip:** Automate the "H.Cut" knob slowly to create filter sweeps on the reverb tail.

## 3. The "Bright Plate" (Vocal Pop)

Achieving that shimmering modern pop vocal.

1.  **Pre-Delay:** 20-50ms. (Crucial: separates the "S" from the "Shiiiing").
2.  **L.Cut:** 600Hz. (Remove all muddiness).
3.  **H.Cut:** 12kHz. (Keep the air).
4.  **Damping:** Low/Off.
5.  **Stereo Sep:** Turn knob 50% Left (Widen).
6.  **Bass Multiplier:** 0.5x (Tighten the low reflections).

## 4. Drum Room "Glue"

Making electronic samples sound like a live kit.

1.  **Send:** Create a Send Channel with Reeverb 2.
2.  **Size:** 20-30 (Club/Studio size).
3.  **Diffusion:** 60% (Slightly grainy).
4.  **ER (Early Reflections):** Boost this! This simulates the first bounce off the walls, which defines the "space" more than the tail does.
5.  **Decay:** Short (0.6s).
6.  **Action:** Send Kick, Snare, and Hats to this bus.
7.  **Result:** They now sound like they exist in the same physical room.

## 5. Frequency Slotting (The L.Cut Trick)

1.  **Concept:** Reverb adds noise. Noise masks instruments.
2.  **Rule:** Never reverb the bass frequencies unless for special FX.
3.  **Action:** Set **L.Cut** knob to ~300Hz-500Hz on almost every instance.
4.  **Why?** Reverberating frequencies below 300Hz creates a "mud blanket" that destroys mix clarity.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The "Vocal Cloud" (Fruity Reeverb 2)

## Routing Context
- **Target:** Melodic Rap Vocal or R&B Backgrounds.
- **Position:** Parallel Send (100% Wet).

## Step-by-Step Setup
1.  Route your vocal to a dedicated Reverb track.
2.  Set **SIZE** to maximum.
3.  Set **DECAY** to `6.0s`.
4.  Set **DIFFUSION** to maximum (clockwise).
5.  Set **PRE-DELAY** to `80ms`.
6.  Set **MOD** to `30%` and **SPEED** to `0.5Hz`.
7.  **The Secret:** Switch the plugin to **SIDE** mode.
8.  **The Result:** A massive, shimmering "cloud" that wraps around the vocal but stays completely out of the way of the lyrics in the center.

## Vibe Check
- **Vibey/Spacey:** The signature "Atmospheric" depth found in modern trap-soul.

## Variation
- **Dark Cloud:** Turn the **DAMP** knob to 80% to make the cloud sound warm and "vintage." [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Shaping_And_Control.md

```markdown
# Goal: Mid/Side Clarity (Side-Only Reverb)

## Routing Context
- **Target:** Lead Rap Vocal.
- **Position:** Place **Fruity Reeverb 2** on a dedicated **Mixer Send Track**.

## Step-by-Step Setup
1.  On the **Send Track**, set Reeverb 2 to **100% WET** (Dry slider at 0).
2.  Locate the **Mid/Side** switch and set it to **SIDE**.
3.  Set **Decay** to **2.5s**.
4.  Set **Pre-Delay** to **40ms**.
5.  Set **L.Cut** to **350Hz** (High-pass).
6.  Route your Vocal to this Send.

## What To Listen For
- The vocal should sound perfectly clear and centered (Mono).
- The reverb tail should feel like it is "wrapping around" the artist from the speakers' edges. 
- Because the reverb is in Side-mode, it won't "fight" with the vocal's presence in the middle.

## Vibe Check
- **Vibey:** This is the #1 secret for that professional, wide, but clear radio sound.

## Pitfalls + Fixes
- **Pitfall:** "The reverb is too wide."
  - **Fix:** Decrease the **Stereo Separation** knob (lower right) toward the center. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\03_Goal_Creative_Effect.md

```markdown
# Goal: Lush R&B Cloud (The "Atmosphere" Wash)

## Step-by-Step Setup
1.  Load **Fruity Reeverb 2**.
2.  Set **Size** to **80%**.
3.  Set **Decay** to **5.0s**.
4.  Set **Mod** to **40%** and **Speed** to **0.2 Hz**.
5.  Set **DAMP** to **30%** (Keeps it bright but not harsh).
6.  Disable **H.Cut** (High-pass is off).
7.  Turn **Pre-Delay** to **80ms**.

## Context Application
- **Melodic R&B:** Use this on a clean guitar or a high-pitched synth pluck.
- **Vibe:** Vibey/Psychedelic.

## Automation Idea
- Link the **Decay** knob to a Peak Controller on the Snare. Every time the snare hits, the "Cloud" shortens for a split second, then grows back.

## Pitfalls
- **Muddiness:** Long decays build up fast. Set **Bass** multiplier to **0.3x** to ensure the low-end doesn't turn into a roar. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\send-based-reverb.md

```markdown
# Reverb Send Setup Guide – Fruity Reeverb 2

## Goal
Create professional send-based reverb routing for cohesive space and efficient CPU usage.

## Why Use Sends?

### Advantages
- **Cohesive Space**: All instruments share same reverb "room"
- **CPU Efficient**: One reverb instance instead of many
- **Easy Control**: Adjust space per instrument with send amount
- **Professional Standard**: Industry-standard mixing approach
- **Processing Power**: EQ/compress reverb separately

### vs. Insert Reverb
**Insert** (direct on track):
- ✓ Quick and easy
- ✓ Independent spaces
- ✗ CPU intensive
- ✗ Less cohesive

**Send** (aux return):
- ✓ Professional approach
- ✓ Cohesive sound
- ✓ CPU efficient
- ✗ Slightly more setup

## Basic Send Setup

### Step 1: Create Reverb Track
1. Select empty mixer track (e.g., Track 10)
2. Rename: "Reverb - Main" or "Vocal Reverb"
3. Insert Fruity Reeverb 2
4. Set: Dry = 0%, Wet = 100%
5. **Critical**: Track receives signal but doesn't route to itself

### Step 2: Configure Reverb
Choose appropriate settings for reverb type:

**Short Room** (drums, transients):
`\`\`
Size: 40-50%
Decay: 0.8-1.5s
Use: Drums, percussion, tight sounds
`\`\`

**Medium Hall** (vocals, leads):
`\`\`
Size: 55-65%
Decay: 1.8-2.5s
Use: Vocals, lead instruments
`\`\`

**Long Space** (pads, atmosphere):
`\`\`
Size: 70-85%
Decay: 3.0-5.0s
Use: Pads, synths, backgrounds
`\`\`

### Step 3: Route Instruments
1. Select source track (e.g., vocal track)
2. Find send knobs in mixer (top row)
3. Right-click send knob for reverb track
4. Adjust send level (start 20%)
5. Repeat for each instrument

### Step 4: Set Send Amounts
Different amounts create depth:

- **Upfront** (lead vocal, main elements): 15-25%
- **Middle** (supporting elements): 25-35%
- **Background** (pads, textures): 35-50%

## Multiple Reverb Setup

### Professional 3-Reverb Template

**Track 10 - Short Reverb**:
`\`\`
Size: 45%
Decay: 1.2s
Use: Drums, percussion, transients
`\`\`

**Track 11 - Medium Reverb**:
`\`\`
Size: 60%
Decay: 2.2s
Use: Vocals, melodies, leads
`\`\`

**Track 12 - Long Reverb**:
`\`\`
Size: 75%
Decay: 4.0s
Use: Pads, atmosphere, special effects
`\`\`

### Routing Strategy
Each instrument can send to multiple reverbs:
- **Vocal**: 22% short + 12% long = dimension
- **Snare**: 28% short only = tight
- **Pad**: 15% medium + 35% long = huge space

## Advanced Reverb Processing

### EQ the Reverb Return
Add EQ after Reeverb 2 on reverb track:

1. **High-Pass**: 300-400Hz (remove mud)
2. **Cut**: 500-800Hz (clear midrange)
3. **Shelf**: -2dB @ 200Hz (control lows)
4. **Boost**: +1-2dB @ 10kHz (air, optional)

**Why**: Cleans reverb, prevents mud, maintains clarity

### Compress the Reverb
Add compressor after Reeverb 2:
`\`\`
Ratio: 2:1 to 3:1
Attack: 30-50ms
Release: 100-200ms
Threshold: Adjust for -3 to -6dB reduction
`\`\`

**Why**: Evens out reverb level, adds glue, controls dynamics

### Sidechain Duck Reverb
1. Add Fruity Peak Controller after reverb
2. Input from lead vocal or kick
3. Link to reverb wet/send level
4. Settings: Base 100%, Vol 0%, Decay 150-250ms

**Why**: Reverb ducks during main elements, returns between

## Genre-Specific Send Templates

### Trap/Modern Hip-Hop
`\`\`
Track 10 - Vocal Reverb:
  Size: 55%, Decay: 2.0s, High Damping: 5.5kHz
  Send: Vocals (22%), Ad-libs (35%)

Track 11 - Drum Room:
  Size: 42%, Decay: 1.0s, High Damping: 4kHz
  Send: Snare (25%), Claps (28%)

Track 12 - Atmosphere:
  Size: 78%, Decay: 4.5s, Mod: 0.2
  Send: Pads (45%), FX (60%)
`\`\`

### Boom Bap/Classic
`\`\`
Track 10 - Main Room:
  Size: 48%, Decay: 1.6s, Bass: 1.1x
  Send: Vocals (24%), Sample (18%), Drums (15%)

Track 11 - Vocal Space:
  Size: 55%, Decay: 2.2s, Pre-delay: 25ms
  Send: Lead Vocal (22%), Backing (38%)
`\`\`

### Lo-Fi/Chill
`\`\`
Track 10 - Warm Room:
  Size: 58%, Decay: 2.5s, High Damp: 3.8kHz
  Mod: 0.35, Bass: 1.4x
  Send: All instruments (22-40%)

Single reverb for cohesive vintage vibe
`\`\`

### Melodic/Emotional
`\`\`
Track 10 - Vocal Hall:
  Size: 62%, Decay: 2.8s, Pre-delay: 35ms
  Send: Lead (25%), Harmonies (40%)

Track 11 - Instrument Hall:
  Size: 68%, Decay: 3.2s, Mod: 0.22
  Send: Keys (32%), Synths (38%), Strings (45%)

Track 12 - Huge Space:
  Size: 82%, Decay: 5.5s
  Send: Special moments, builds (varies)
`\`\`

## Send Amount Guidelines

### By Role in Mix
- **Lead Elements** (vocal, main melody): 18-25%
- **Supporting** (chords, harmony): 25-35%
- **Background** (pads, textures): 35-50%
- **Rhythm** (drums): 15-30% (vary by element)
- **Bass**: 0-10% maximum

### By Frequency Range
- **Low** (<200Hz): 0-10%
- **Low-Mid** (200-500Hz): 10-20%
- **Mid** (500-2kHz): 20-35%
- **High-Mid** (2-5kHz): 25-40%
- **High** (>5kHz): 30-45%

Lower frequencies need less reverb to avoid mud

### By Genre Density
**Dense/Busy** (trap, drill):
- Lower send amounts (15-25%)
- Shorter decay times
- More clarity needed

**Sparse/Open** (lo-fi, melodic):
- Higher send amounts (25-40%)
- Longer decay times
- Space is feature

## Mixing Tips

### Creating Depth
Front to back placement using reverb:

1. **Front** (dry, upfront): Low send (10-20%)
2. **Middle** (present): Medium send (25-35%)
3. **Back** (distant): High send (40-60%)

Combine with volume for 3D mix

### Mono Compatibility
- High-pass reverb return (mono <300Hz)
- Width setting moderate (70-90%)
- Check in mono to verify

### Automation Strategies
- **Verse**: Lower sends (intimate)
- **Chorus**: Higher sends (big)
- **Build**: Increase gradually
- **Drop**: Sudden change for impact

## Troubleshooting

**Mix sounds washy/muddy**:
→ High-pass reverb at 350-400Hz
→ Reduce send amounts 5-10%

**Reverb too obvious**:
→ Increase pre-delay
→ Lower send amounts
→ Shorter decay time

**No depth/dimension**:
→ Vary send amounts more
→ Use multiple reverbs
→ EQ reverb return

**CPU overload**:
→ Freeze reverb tracks
→ Use one reverb for similar instruments
→ Reduce to essential reverbs only

**Instruments sound distant**:
→ Lower send amounts
→ Increase pre-delay (separates dry/wet)

## Session Template Example

`\`\`
Mixer Layout:
Track 1-5: Instruments (dry)
Track 8: Delay
Track 10: Short Reverb (drums)
Track 11: Medium Reverb (vocals/leads)
Track 12: Long Reverb (pads/atmosphere)
Track 15: Master

Pro Tip: Leave gaps between types for organization
`\`\`

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Workflow: Tight Drum Room (Glue)

## The Concept
Making dry drum samples sound like they were recorded in the same room.

## Step-by-Step
1.  Place **Fruity Reeverb 2** on your Drum Bus.
2.  Set **Size** to **15%** (Small room).
3.  Set **Decay** to **0.6s**.
4.  Set **ER (Early Reflections)** to **70%**.
5.  Set **Diffusion** to **MAX**.
6.  **Tweak:** Set **L.Cut** to **400Hz** to keep the kick drum dry.
7.  **Mix:** Keep the Reverb slider at ~15% wet.

## Vibe Check
- **Upbeat:** Adds a physical "thump" and realistic depth to the drums.

## Pitfalls
- **Too Much ER:** High Early Reflections in a small room can sound "boxy." Back off the ER knob if it sounds like a cardboard box. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\vocal-reverb-setup.md

```markdown
# Vocal Reverb Setup with Fruity Reeverb 2

## Goal
Create professional vocal space that adds depth and dimension without washing out clarity or competing with the beat.

## Basic Setup Workflow

### Step 1: Create Reverb Send
1. Add empty mixer track (e.g., track 10 - "Vocal Reverb")
2. Insert Fruity Reeverb 2
3. Set Dry to 0%, Wet to 100%
4. This is your dedicated vocal reverb space

### Step 2: Route Vocals
1. Select vocal mixer track
2. Right-click send knob to reverb track
3. Start at 15-20% send amount
4. Adjust to taste

### Step 3: Base Settings
`\`\`
Pre-delay: 30ms
Size: 58%
Decay: 2.0s
High Damping: 5000Hz
Diffusion: 70%
Mod Rate: 0.2
Mod Depth: 0.1
Bass: 0.8x
Width: 90%
Wet: 100% (on send track)
`\`\`

## Genre-Specific Settings

### Trap Vocals
`\`\`
Pre-delay: 25-35ms (clarity for fast delivery)
Size: 50-60%
Decay: 1.8-2.2s
High Damping: 5-6kHz (modern, bright)
Wet Send: 18-25%
Character: Tight, present, modern
`\`\`

### Boom Bap/Classic
`\`\`
Pre-delay: 15-25ms (natural feel)
Size: 45-55%
Decay: 1.5-2.0s
High Damping: 4-5kHz (warmer)
Bass: 1.0-1.2x
Wet Send: 20-28%
Character: Warm, vintage room
`\`\`

### Melodic/Singing
`\`\`
Pre-delay: 35-45ms (separation)
Size: 60-70%
Decay: 2.5-3.5s
High Damping: 5.5-6.5kHz
Modulation: 0.15-0.25
Wet Send: 25-35%
Character: Lush, spacious, emotional
`\`\`

### Lo-Fi/Chill
`\`\`
Pre-delay: 10-20ms (intimate)
Size: 55-65%
Decay: 2.0-2.8s
High Damping: 3.5-4.5kHz (darker)
Bass: 1.3-1.5x
Mod Depth: 0.3-0.4
Wet Send: 28-40%
Character: Warm, vintage, textured
`\`\`

## Advanced Techniques

### Lead vs. Backing Vocals
**Lead Vocal**:
- Less reverb (18-25%)
- More pre-delay (30-40ms)
- Stays upfront and clear

**Backing/Harmony**:
- More reverb (35-50%)
- Less pre-delay (15-25ms)
- Sits back in mix, supports lead

### Reverb EQ Processing
On reverb return track, add EQ after Reeverb 2:
1. **High-Pass**: 300-400Hz (removes mud)
2. **Cut**: 500-800Hz (clears midrange clash)
3. **Shelf**: -2dB @ 200Hz (tames lows)
4. **Boost**: +1-2dB @ 10kHz (air, optional)

### Automation for Dynamics
**Verse (storytelling)**:
- Lower reverb send (15-20%)
- Intimate, close feel

**Chorus (big moment)**:
- Higher reverb send (25-35%)
- Spacious, larger-than-life

**Bridge/Breakdown**:
- Maximum reverb (40-60%)
- Extra space and emotion

### Sidechain Ducking
1. Add Fruity Peak Controller after Reeverb 2
2. Input from vocal track
3. Link to reverb wet level
4. Settings: Base 100%, Vol 0%, Decay 150ms
5. Result: Reverb ducks during singing, returns between phrases

## Pre-Delay Strategy

### Why Pre-Delay Matters
- Separates dry vocal from wet reverb
- Preserves consonants and transients
- Creates clarity in dense mixes

### Pre-Delay by Tempo
- **Slow (60-80 BPM)**: 35-50ms
- **Medium (80-120 BPM)**: 25-35ms
- **Fast (120-160 BPM)**: 15-25ms
- **Very Fast (160+ BPM)**: 10-20ms

### Pre-Delay by Vocal Style
- **Rap (fast delivery)**: 20-30ms
- **Melodic rap/singing**: 30-40ms
- **Singing (sustained)**: 35-50ms

## Modulation Use

### No Modulation (Clean)
- Transparent, natural reverb
- Modern, professional sound
- Best for: Trap, commercial hip-hop

### Subtle Modulation (0.1-0.2)
- Adds shimmer and life
- Not obviously modulated
- Best for: Melodic, R&B-influenced

### Medium Modulation (0.3-0.4)
- Vintage, chorus-like character
- Warm, analog vibe
- Best for: Lo-fi, chill rap

### Heavy Modulation (0.5+)
- Creative, obvious effect
- Dream-like, ethereal
- Best for: Experimental, atmospheric sections

## Common Vocal Reverb Mistakes

❌ **Too much reverb**: Drowns vocal, loses clarity
→ Start at 20%, increase carefully

❌ **No pre-delay**: Consonants get washed out
→ Always use 25-40ms minimum

❌ **Too long decay**: Reverb tail muddles next phrase
→ Match decay to song tempo/pacing

❌ **No EQ on reverb**: Low-end mud
→ High-pass reverb return at 300-400Hz

❌ **Same reverb for all vocals**: No depth/dimension
→ Use more reverb on backing vocals

❌ **Reverb on bass frequencies**: Muddy vocal
→ Set Bass multiplier to 0.6-0.8x

## Quick Troubleshooting

**Vocal sounds distant**: Reduce send amount or increase pre-delay

**Muddy/unclear**: High-pass reverb return, reduce bass multiplier

**Too bright/harsh**: Lower high damping frequency

**Doesn't fit the beat**: Adjust decay time (shorter = tighter)

**Sounds fake**: Increase diffusion, add subtle modulation

**Reverb too obvious**: Reduce send, increase pre-delay

## Professional Polish

### Reverb Compression
Add compressor after Reeverb 2:
- Ratio: 2:1 to 3:1
- Attack: 30-50ms
- Release: 100-200ms
- Creates consistent reverb level

### Parallel Reverb Option
1. Send vocal to reverb at 100%
2. Process reverb aggressively (EQ, compress)
3. Blend small amount back
4. Maximum control

### Multiple Reverbs
- **Short reverb** (decay 0.8-1.2s): Early reflections, room tone
- **Long reverb** (decay 2.5-4s): Lush tail, atmosphere
- Blend both for complex space

## Session Template

### Standard Setup
`\`\`
Track 1-3: Vocals (dry)
Track 10: Vocal Reverb (short, decay 1.5s)
Track 11: Vocal Reverb (long, decay 3.0s)
Track 12: Vocal Delay

Send short reverb: 20-25%
Send long reverb: 10-15%
Send delay: 15-20%
`\`\`

Creates professional, dimensional vocal sound

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Reeverb 2

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Reeverb 2.
- **Key Info:** Mid/Side mode behavior, Bass Multiplier frequency crossover (Cross knob), and Early Reflection (ER) vs Late Reflection (Decay) balance.

## Source ID: [SRC: REPUTABLE]
- **Source:** "Mixing Secrets for the Small Studio" (Mike Senior).
- **Key Info:** Importance of HP filtering reverb sends, using pre-delay to maintain lead presence, and the psychoacoustics of room size vs decay time.

## Genre Style Board: Fruity Reeverb 2

| Vibe | Key Setting | Effect |
| :--- | :--- | :--- |
| **Moody** | High Damp + 1kHz LPF | Distant & Isolated |
| **Upbeat** | Large Size + High Cut | Stadium Energy |
| **Spacey** | 20s Decay + Mod | Celestial Void |
| **Jazzy** | 40ms Pre-Delay | Live Club feel |
| **Vibey** | Side Mode Only | Expensive Width |
```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Reeverb 2

## 1. The "Mainstream Halo" (R&B)
- **Mix Decision:** Long, wide reverb that sits only on the edges of the vocal.
- **Vibe:** Vibey/Expensive.
- **Tooling:** Side Mode + 3s Decay + 40ms Pre-Delay.

## 2. The "Submerged Warehouse" (Moody Trap)
- **Mix Decision:** Dark, heavy reverb with long pre-delay to create "distance."
- **Vibe:** Moody/Dark.
- **Tooling:** Max Size + 8s Decay + High DAMP + 100ms Pre-Delay.

## 3. The "Liquid Synth" (Psychedelic)
- **Mix Decision:** Highly modulated reverb that pitch-shifts the tail.
- **Vibe:** Psychedelic/Dreamy.
- **Tooling:** Max Modulation + 2.0Hz Speed + Large Room.

## 4. The "Punchy Studio" (Upbeat Pop)
- **Mix Decision:** Small, dense room to add body to the drums.
- **Vibe:** Upbeat/Sharp.
- **Tooling:** Min Size + 0.5s Decay + High Diffusion + Mid Mode.

```

---

## FILE: 04-Reference\bass-multiplier-mechanics.md

```markdown
# Reference: Bass Multiplier & Physics (Cross Freq)

One of the most powerful features of **Fruity Reeverb 2** is the ability to manage low-end energy independently of the high-end.

## The Bass Knob
- **< 1.0x:** Low frequencies die out *faster* than high frequencies. (Best for Hip-Hop/Trap).
- **> 1.0x:** Low frequencies die out *slower* than high frequencies. (Creates a "boomy" cathedral feel).

## The CROSS Frequency
This knob defines where the "Bass" zone ends and the "Normal" reverb begins.

| Setting | Result | Vibe / Use Case |
| :--- | :--- | :--- |
| **100 Hz** | Surgical sub-control. | Cleaning up 808 rumble. |
| **300 Hz** | Full low-mid management. | Standard mixing default. |
| **800 Hz** | Affects the "chest" voice. | Moody, warm acoustic tracks. |

## Why it matters
In a small room (like a studio booth), bass frequencies don't bounce around long because the walls absorb them. In a massive stone church, bass frequencies bounce for a long time. 
**Rule of Thumb:** Use **0.5x Bass** at **250Hz Cross** for 90% of your modern rap projects to ensure a clean mix. [SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Reeverb 2 Mechanics

## 1. H.Cut vs. High Damping (The Confusion)

These two controls both reduce high frequencies, but they do it in fundamentally different ways physically.

### H.Cut (Input Filter)
*   **Location:** *Pre-Reverb.*
*   **Function:** A static Low-Pass filter applied to the audio *before* it enters the reverb tank.
*   **Result:** The reverb tail simply contains no high frequencies from the start. It sounds "Muffled" or "Distant" immediately.

### High Damping (Decay Coefficient)
*   **Location:** *Inside the Feedback Loop.*
*   **Function:** A frequency-dependent gain reduction calculation per reflection cycle.
*   **Physics:** Simulates air absorption. High frequencies lose energy faster than low frequencies as they bounce through air.
*   **Result:** The reverb starts bright, but the tail gets darker as it fades. This is **Natural** behavior.

## 2. Modulation Physics

Reverb algorithms use "Delay Lines" (buffers of repeating audio).
*   **Problem:** Fixed delay lines create "Standing Waves" or metallic ringing at specific resonant frequencies.
*   **Solution:** Modulation.
*   **Mechanism:** An LFO slightly varies the length of the delay lines in real-time.
*   **Effect:** This smears the resonant frequencies, preventing the metallic ring. However, at high settings, it introduces audible Pitch Shift (Doppler Effect).

## 3. Stereo Separation Topology

*   **Knob Center:** Normal Stereo.
*   **Knob Right:** Sums the Wet signal to Mono. (Input Stereo -> Reverb -> Sum to Mono).
*   **Knob Left:** Enhances stereo difference.
    *   *Warning:* Extreme left settings can cause Phase Cancellation if the mix is summed to mono later.

## 4. Pre-Delay Mechanics

*   **Definition:** A pure digital delay line inserted before the reverb engine.
*   **Psychoacoustics:** The human ear uses the gap between the "Direct Sound" and the "First Reflection" to judge distance.
    *   **0ms Gap:** Source is against the back wall.
    *   **50ms Gap:** Source is close to you, walls are far away.
    *   **Tempo Sync:** The switch allows locking this gap to musical intervals (e.g., Slapback delay at 1/16th note).

```

---

