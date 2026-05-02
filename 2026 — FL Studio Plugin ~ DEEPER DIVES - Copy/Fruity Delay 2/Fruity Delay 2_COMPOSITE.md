# Fruity Delay 2 - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Delay 2 - Enhanced Stereo Echo

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ███████╗██╗      █████╗ ██╗   ██╗    ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔════╝██║     ██╔══██╗╚██╗ ██╔╝    ╚════██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║  ██║█████╗  ██║     ███████║ ╚████╔╝      █████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║  ██║██╔══╝  ██║     ██╔══██║  ╚██╔╝      ██╔═══╝ 
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██████╔╝███████╗███████╗██║  ██║   ██║       ███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝       ╚══════╝
`\`\`

**Plugin Type:** Digital Stereo Delay
**Category:** Effect / Echo
**Official Manual:** [Image-Line Fruity Delay 2 Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay%202.htm)

---

## 🎯 What is Fruity Delay 2?

Fruity Delay 2 is the workhorse delay plugin for FL Studio. It improves upon the original Fruity Delay by adding a filter in the feedback loop (essential for natural-sounding echoes) and a **Stereo Offset** knob, which creates massive stereo width. It relies on tempo-synced steps but can be fine-tuned.

**Key Capabilities:**
- **Feedback Filtering:** Cutoff knob allows echoes to get duller over time (Dub style).
- **Stereo Offset:** Delays Left/Right channels differently for the Haas Effect.
- **Tempo Sync:** Locks to project BPM steps.
- **Three Modes:** Normal, Inverted, Ping Pong.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **delay-modes.md**
3. Create **parameter-cheat-sheet.md**
4. Turn "Dry" to 0 and "Stereo Offset" to max to hear the stereo split.

### For Mix Engineers:
1. Review **haas-effect-guide.md** (Using Offset)
2. Study **dub-delay-filtering.md** (Using Cutoff)
3. Learn **vocal-throw-automation.md**

### For Sound Designers:
1. Study **infinite-feedback-loops.md**
2. Review **metallic-comb-filtering.md** (Short time + High feedback)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Input Vol/Pan:** Pre-delay processing.
  - **Feedback Vol:** Repeats (Keep <100% to avoid explosion).
  - **Feedback Cut:** Low pass filter frequency.
  - **Time:** Tempo steps (4 steps = 1 beat typically).
  - **Ofs (Offset):** The magic stereo knob.

- [ ] **delay-modes.md**
  - **Normal:** Standard echo.
  - **Inv (Invert):** Swaps L/R in feedback (widening).
  - **Ping Pong:** Bounces L/R.

#### 02-Data/parameters/
- [ ] **delay-2-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Delay 2",
    "category": "Delay",
    "parameters": [
      {
        "name": "Stereo Offset",
        "type": "knob",
        "description": "Desynchronizes L/R channels",
        "pro_tip": "Turn right to delay R channel, left for L channel. Instant width."
      },
      {
        "name": "Time",
        "type": "knob",
        "unit": "steps",
        "description": "Tempo-locked delay time"
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **haas-effect-guide.md**
  - Setting Time to 0 (or min).
  - Using Offset to create <20ms difference.
  - Result: Super wide mono sound (check mono compatibility!).

- [ ] **dub-delay-filtering.md**
  - High Feedback (70-90%).
  - Low Cutoff.
  - Echoes fade into the background mix naturally.

- [ ] **ping-pong-setup.md**
  - Selecting "Ping Pong" mode.
  - Adjusting Pan to ensure movement.

#### 03-Workflows/by-context/
- [ ] **synth-lead-space.md**
- [ ] **vocal-delay-throws.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **time-knob-step-values.md**
  - What does "4:00" on the display mean? (4 steps).
  - How steps relate to PPQ (Pulses Per Quarter note).

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Standard Echoes

**Tasks:**
1. Set Time to 4 steps (1 beat)
2. Adjust Feedback to hear 3-4 repeats
3. Lower Cutoff to hear them dampen
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Dry" knob work? (Usually keep at 100% for insert, 0% for send)
- What happens if I change BPM? (Delay changes pitch/time automatically)

### Phase 2: Stereo Manipulation (Week 2)
**Goal:** Width

**Tasks:**
1. Use Stereo Offset on a mono guitar
2. Use Invert Mode on a synth pad
3. Create haas-effect-guide.md

**Key Questions to Answer:**
- Does Stereo Offset affect the *first* echo or *all* echoes?
- How to avoid phase cancellation with the Offset knob?

---

## 📊 Plugin Specifications to Document

### Audio Engine
- Max Feedback (can it self-oscillate?)
- Filter characteristics (Low Pass only?)
- Timing Resolution

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I get a 1/4 note delay? (Set Time to 4 steps)
2. Why are my echoes panning left? (Check Input Pan or Ping Pong mode)
3. How is this different from Fruity Delay 1? (Filter + Offset)

### Advanced Usage
1. Can I filter the Highs *and* Lows? (No, Delay 2 is LP only. Use Delay 3 for Bandpass)

---

## 📝 Documentation Standards

### For Each Workflow:
- **Time Setting:** Step value
- **Offset:** Knob position
- **Feedback/Cut:** Approximate clock position

---

## 🔗 Cross-Reference with Other Plugins

Fruity Delay 2 is often used with:
- **Fruity Reverb 2** (Delay into Reverb)
- **Fruity Limiter** (Sidechaining the delay output)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Delay 2/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── delay-modes.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── delay-2-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── haas-effect-guide.md
│   │   └── dub-delay-filtering.md
│
└── 04-Reference/
    └── time-knob-step-values.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a "fake double track" using the Offset knob
- [ ] Configure a natural sounding echo that doesn't clutter the high-end frequencies
- [ ] Explain the difference between "Invert" and "Ping Pong" behavior

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Delay 2

## The 60-Second Mental Model
Fruity Delay 2 is the **Standard Workhorse Echo** of FL Studio. It takes the simplicity of the original Fruity Delay and adds "Ear Candy" controls: a **Filter** to make echoes fade into the background and a **Stereo Offset** to create instant width. It is tempo-synced by default, making rhythmic setup instant. [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** A clean, digital stereo delay with analog-style filtering.
*   **Where it fits:** Use this whenever you need a reliable rhythmic echo that sits perfectly in the mix without being too "harsh" or "robotic."

## Hip-Hop / R&B Context
*   **The "Haas" Vocal:** Turning the Offset knob slightly to make a lead vocal sound wider without using a chorus plugin.
*   **Melodic Shimmer:** Using the Cutoff knob to ensure that guitar or piano echoes don't fight with the "Air" frequencies of the vocal.
*   **Bounce Ad-libs:** Setting the delay to 1/8th notes with Ping-Pong mode to create rhythmic movement behind a rapper's performance.

## When To Use
*   When you need **Stereo Widening** (The Haas effect).
*   When you want echoes to **darken** over time (Analog vibe).
*   When you need a **reliable tempo-synced** delay without the complexity of Delay 3.

## When NOT To Use
*   **Dynamic EQing:** If you need to cut the lows *and* the highs of the delay, use **Fruity Delay 3** (which has a bandpass filter).
*   **Sample Printing:** If you want to sample the delay and reverse it easily, **Delay 3's** specialized "Limit" and "Bit" modes might be better.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Delay 2

## UI Tour
1.  **Input Controls:**
    *   **Vol:** Input gain (usually keep high on sends).
    *   **Pan:** Stereo placement of the *input* signal.
    *   **Dry:** Controls the level of the unprocessed signal passing through. [SRC: IL-MAN]
2.  **Feedback Controls:**
    *   **Vol:** Number of repeats (Gain of the loop).
    *   **Cut:** High-cut filter (LPF) frequency.
3.  **Timing Section:**
    *   **Time Knob:** Measures in "Steps" (1/16th notes).
    *   **Ofs (Offset):** Delays one channel (L or R) by a few milliseconds.
4.  **Stereo Modes:** Normal, Invert (Widening), Ping Pong (Bouncing).

## Signal Flow
1.  **Audio Input:** Signal enters the plugin.
2.  **Stereo Split:** The signal is split into L and R channels.
3.  **Offset Application:** If "Ofs" is used, one channel is delayed *before* the main delay timer hits.
4.  **The Loop:** Sound goes into the delay line -> through the **Cutoff Filter** -> back to the start of the loop.
5.  **Output Mixing:** Processed signal is mixed with the "Dry" knob level.

## Things Beginners Misunderstand
*   **The Offset "Gap":** If you turn the Offset knob all the way, you might hear a "phasing" sound. **Fix:** Keep it under 20% for a natural "Haas" width. [SRC: REPUTABLE]
*   **Dry Knob on Send:** If using Fruity Delay 2 on a Send track, **turn the Dry knob to 0**. Otherwise, you will duplicate the original signal and cause volume spikes.
*   **Time Display:** "4:00" doesn't mean 4 seconds; it means 4 steps (1 Quarter Note).

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Delay 2

## 1. Moody (Cold, Heavy, Shadowy)
*   **Production Lever:** **Low Cutoff + High Feedback.**
*   **Action:** Set Cutoff to 10 o'clock. Feedback to 75%.
*   **Listen For:** A dark "trail" that follows the music like a ghost in a cave.
*   **Don't Do This:** Don't use Offset; keep the "shadow" centered and focused.

## 2. Upbeat (Kinetic, Funky, Pop)
*   **Production Lever:** **Ping-Pong + Stereo Offset.**
*   **Action:** Mode: Ping-Pong. Offset: 10% Right. Time: 2 steps (1/8th).
*   **Listen For:** A "bouncing" energy that feels wide and frantic.
*   **Don't Do This:** Don't use too much feedback; keep the rhythm "tidy."

## 3. Psychedelic (Dreamy, Melting, Liquid)
*   **Production Lever:** **Invert Mode + Automation.**
*   **Action:** Mode: Invert. Automate the **Time** knob slightly (±0.1 steps).
*   **Listen For:** A wide, "phasey" wobble that makes the listeners feel like they are floating.
*   **Don't Do This:** Avoid bright settings; darkness adds to the "trippy" feel.

## 4. Jazzy (Organic, Warm, Vintage)
*   **Production Lever:** **Vocal Slapback + High Cutoff.**
*   **Action:** Time: 1.5 steps. Feedback: 0%. Cutoff: 100% (Bright).
*   **Listen For:** A "doubling" effect that adds body to a lead vocal or clean guitar.
*   **Don't Do This:** Avoid Ping-Pong; it's too aggressive for jazz.

## 5. Vibey (Smooth, Modern R&B, Expensive)
*   **Production Lever:** **The Haas Widener.**
*   **Action:** Time: 0. Offset: 15% Left. Mix: 50%.
*   **Listen For:** A "holographic" width where the sound feels wider than the speakers.
*   **Don't Do This:** Don't use this on the Bass; it will ruin the club "thump." [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\echo-stereo-psychology.md

```markdown
# The Master's Guide to Echo Stereo Psychology and the Haas Effect in Fruity Delay 2

## 1. Introduction: The Space Between Speakers
In professional Hip-Hop and R&B, "Width" is often misunderstood. Many producers simply use a "Widener" plugin, which often destroys mono-compatibility. The elite secret to wide, natural-sounding instruments is **Temporal Offsetting**. Fruity Delay 2, while seemingly simple, is a precision tool for **Psychoacoustic Localization**. By manipulating the time relationship between the left and right ears, we can trick the brain into hearing a massive stereo image from a single mono source.

---

## 2. Theoretical Foundation: The Haas Effect (Precedence)
### 2.1 Spatial Fusion
In the 1940s, Dr. Helmut Haas discovered that if two identical sounds arrive at the ear within **1ms to 35ms** of each other, the brain fuses them into a single sound.
- **Directional Priority:** The brain determines the location of the sound based on whichever ear hears it *first*.
- **The Fruity Delay 2 Secret:** By setting the **Time** to 0ms and the **Offset** to 15ms, you create a "Shadow" in one ear. The brain "feels" the sound is wide, even though it's technically just a tiny delay.

### 2.2 Depth without Mud
Unlike reverb, which adds a "cloud" of reflections that can muddy a mix, the Haas effect provides **Depth** through a single reflection. This is why Delay 2 is often preferred over reverb for "Upbeat" tracks where the drums need to stay dry and punchy.

---

## 3. The Mathematics of Comb Filtering
### 3.1 The Destructive Interference
When you mix a dry signal with a very short delay (under 10ms), the waveforms overlap in a way that causes certain frequencies to cancel out. 
- **The "Comb" Shape:** If you look at the frequency response, it looks like the teeth of a comb.
- **The "Nasal" Character:** This is why ultra-short delays can sound "hollow" or "metallic." 
- **The Master Strategy:** Use the **Invert (Inv)** button in Delay 2 to shift the "teeth" of the comb. If the widening sounds "thin," toggling Invert can often recover the lost low-end energy.

---

## 4. The Psychology of Slapback
### 4.1 From Sun Studios to Modern R&B
- **History:** "Slapback" (a single repeat around 80-120ms) was the signature sound of Elvis Presley and early Rock & Roll.
- **Modern Use:** In modern R&B (think The Weeknd), a dark slapback delay is used to give the vocal an "expensive" and "intimate" feel. It makes the singer sound like they are in a small, reflective room without the "washiness" of a hall reverb.

---

## 5. Genre-Specific Production Strategies
### 5.1 Moody R&B (The "Shadow" Vocal)
- **The Technique:** Focus on the 80ms - 150ms range.
- **The Action:** Set Feedback to 0%, Time to 1:00 (or ~100ms), and the **Cutoff** filter to 2kHz.
- **The Result:** The vocal has a dark "ghost" that follows it, adding a layer of mystery and professional depth.

### 5.2 Psychedelic Rap (The "Ping-Pong" Spiral)
- **The Technique:** High-feedback stereo offset.
- **The Action:** Set Offset to 100%, Feedback to 80%, and automate the **Cutoff**.
- **The Result:** The sound "bounces" between the speakers and slowly "melts" as the filter closes, creating a trippy, rhythmic transition.

---

## 6. Technical Nuance: The Step-Sequencer Logic
### 6.1 Rhythmic Calculation
Fruity Delay 2 is hard-wired to the FL Studio grid.
- **4:00:** Quarter Note.
- **2:00:** Eighth Note.
- **1:00:** Sixteenth Note.
- **The "Dotted" Secret:** Set the time to **3:00** for a dotted-eighth note. This is the "Galloping" rhythm found in many upbeat Rap tracks.

---

## 7. Mathematical Offset Table for Stereo Depth
Use these millisecond offsets to achieve specific psychological goals:

| Offset (ms) | Perceived Effect | Best Use Case |
|-------------|------------------|---------------|
| **1-5ms**   | "Phased" / Flanged| Metallic textures, Glitch |
| **10-20ms** | Natural Width    | Widening Mono Guitars/Synths |
| **30-50ms** | Small Room       | "Booth" vibe for vocals |
| **80-150ms**| Slapback         | 50s vibe, Intimate R&B |
| **200ms+**  | Rhythmic Echo    | Standard Delay |

---

## 8. Conclusion: The Master of Localization
Mastering Fruity Delay 2 is about **controlling the listener's ear.** By utilizing the Haas Effect for width and the Step-Sync engine for rhythm, you can place any sound exactly where you want it in the virtual 3D space of your mix. It is not just an "echo" plugin; it is a **Spatial Positioning Engine**. For the professional Hip-Hop and R&B producer, it is the most efficient way to achieve a "Large" sound without sacrificing clarity.

---
**Document Version:** 2.0 (Master Tier)
**Author:** AI Research Specialist
**Keywords:** Haas Effect, Precedence, Stereo Width, Comb Filtering, Slapback Echo, Psychoacoustics.
```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Delay 2: The Workhorse

> **Scope:** Simple Echo, Stereo Widening, and Ping Pong.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Essential).

## 🧠 The "Old School" Efficiency
Why use Delay 2 when Delay 3 exists?
*   **CPU:** It uses practically zero CPU.
*   **Simplicity:** It lacks the filters/distortion of Delay 3, making it cleaner for simple tasks.
*   **Constraint:** Sometimes having fewer knobs prevents you from ruining a simple echo.

**Signal Flow:**
`Input` -> **[INPUT PAN]** -> **[DELAY BUFFER (TIME + OFFSET)]** -> **[FEEDBACK LOOP (VOL + CUT)]** -> **[MIX]** -> **[OUTPUT]**

---

## 🎛️ Section 1: Feedback Modes

Fruity Delay 2 handles stereo feedback in three specific ways.

| Mode | Behavior | Use Case |
| :--- | :--- | :--- |
| **Normal** | Left feeds Left. Right feeds Right. | Standard echo. Preserves stereo image. |
| **Inverted** | Left feeds Right. Right feeds Left. | Static Cross-Delay. Good for widening mono sources. |
| **Ping Pong** | Left -> Right -> Left -> Right... | Classic movement. Creates space in the center. |

---

## 🔁 Section 2: Time Math (The 48 System)

Fruity Delay 2 uses a weird internal clock.
*   **Base Unit:** 1 Step (1/16th note).
*   **Resolution:** 48 Ticks per Step.
*   **Why?** To handle Triplets cleanly.
    *   *Normal 1/16th:* `48 ticks` (1:00).
    *   *Triplet 1/16th:* `32 ticks` (0:32). (Because 32 x 3 = 96, which is exactly 2 steps).
    *   *Dotted 1/16th:* `72 ticks` (1:24).

---

## ⚡ Technical Specs: The Filter

*   **Knob:** "Cut".
*   **Type:** 6dB/Octave Low Pass Filter (located in the feedback loop).
*   **Behavior:** It does not filter the *first* echo? No, it filters the feedback. So Echo 1 is filtered once. Echo 2 is filtered twice (darker). Echo 3 is filtered thrice (mud).
*   **Dub Physics:** This accumulative filtering simulates the natural absorption of high frequencies in a room or tape loop.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Haas" Widener
1.  **Time:** Minimum (Reset).
2.  **Stereo Offset:** Turn Right slightly (~20ms).
3.  **Feedback Vol:** 0 (None).
4.  **Dry:** 100%.
5.  **Result:** The Left Channel plays instantly. The Right Channel plays 20ms later. The brain interprets this as a single "Wide" sound. Fully Mono Compatible (comb filters collapse).

### 2. Manual Doubler
1.  **Mode:** Normal.
2.  **Time:** 4 steps (1 beat).
3.  **Offset:** -10% (Left channel plays slightly earlier than Right).
4.  **Result:** When the echo hits, it doesn't sound like a laser beam. The L/R discrepancy makes the echo sound "larger" than the original vocal.

### 3. Infinity Dub
1.  **Volume (Feedback):** Max.
2.  **Cut:** 50%.
3.  **Action:** The delay will self-oscillate forever.
4.  **Play:** Automate the **Time** knob while it oscillates.
5.  **Result:** Pitch warping artifacts create spaceship landing noises (The classic Tape Delay behavior).

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Delay 2: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** Step-Sequenced Digital Buffer Delay
**Internal Logic:** Integer-Based Clock Multiplication
**Target Genres:** Moody R&B, Upbeat Rap, Neo-Soul, Boom Bap

---

## 1. THE TIME MODULE (The Rhythm Clock)
Fruity Delay 2 uses a unique "Step" based interface that is hard-wired to the FL Studio Playlist.

### 1.1 Time Knob (The Main Clock)
- **Technical Range:** 0 to 16 Steps (1 Full Bar).
- **The "Whole Number" Logic:** 
    - **4:00** = 1/4 Note (The Standard Echo).
    - **2:00** = 1/8 Note (The High-Energy Bounce).
    - **1:00** = 1/16 Note (The Rhythmic Stutter).
- **Master Tip:** For "Upbeat" Hip-Hop, set the time to **3:00** (Dotted 1/8 note). This creates a "swing" rhythm that perfectly matches triplets.

### 1.2 Offset (The Psychoacoustic Widener)
- **Technical Logic:** Delays the Right channel relative to the Left.
- **Physics of Width:** 
    - **0%:** Pure Mono. Both channels hit at the same time.
    - **10-30%:** The "Haas" Zone. Adds massive width to vocals or guitars.
    - **100%:** Full "Ping-Pong." The first repeat is in the Left, the second in the Right.
- **R&B Hack:** Set Offset to **15%** and Time to **0:00**. This makes a mono vocal sound like it was recorded in a wide, high-end studio.

---

## 2. THE FEEDBACK MODULE (The Tail)
### 2.1 Feedback (FB) Knob
- **Technical Range:** 0% to 100%.
- **Digital Safety:** This plugin is strictly linear. If you set Feedback to 100%, the sound will loop at full volume forever. 
- **The "Fade" Rule:** For a professional "Moody" fade-out, set Feedback to 65%. The repeats will gracefully disappear over 4-5 bars.

---

## 3. THE FILTER SECTION (Tonal Sculpting)
Fruity Delay 2 includes a specialized filter inside the feedback loop.

### 3.1 Cut (Cutoff)
- **Type:** 12dB/oct Low-Pass Filter.
- **Internal Math:** Every time the sound repeats, it passes through the filter again.
- **The "Dub" Effect:** Set the Cutoff to 50%. The first repeat will be slightly muffled, the second very muffled, and the third almost silent. This is the hallmark of professional "Dark" Hip-Hop echoes.

### 3.2 Resonance (Res)
- **Behavior:** Boosts the volume at the cutoff point.
- **Creative Use:** Use high resonance on a dark filter to create a "Whistling" echo that adds a psychedelic character to a melodic lead.

---

## 4. THE PHASE MODULE (Spatial Logic)
### 4.1 Invert (Inv) Button
- **Technical Logic:** Inverts the polarity of the wet signal (Left and/or Right).
- **Physics of Inversion:** This causes specific frequencies to cancel out when mixed with the dry signal.
- **Master Strategy:** If your widening (Offset) makes the vocal sound "thin" or "nasal," toggle the **Inv** button. This shifts the phase interference, often restoring the "Body" of the vocal.

---

## 5. MIX & OUTPUT
### 5.1 Volume (Wet)
- **Linear Scaling:** Controls the amplitude of the repeats.
- **The 100% Wet Rule:** Always set this to 100% if the plugin is on a **Send track**. Set to 30-50% if it is a direct **Insert** on the instrument track.

---

## 6. PERFORMANCE & OPTIMIZATION
### 6.1 Zero Latency Architecture
- **Technical Fact:** Fruity Delay 2 reports 0 samples of latency. It is ideal for live performance and tracking.
- **Memory Footprint:** Uses a very small ring-buffer in RAM (~2MB). It is the most "CPU-Safe" delay in FL Studio.

---

## 7. HIDDEN MENUS & SHORTCUTS
- **Right-Click Time Knob:** Allows you to 'Set' specific values. 
- **Automation Formula:** Link the Time knob to a peak controller with an inverted formula (`1-Input`) to create a delay that speeds up as the sound gets quieter.

---

## 8. TROUBLESHOOTING
- **Issue:** "The delay sounds hollow or thin."
- **Fix:** You are experiencing **Phase Cancellation**. Toggle the **Inv** switch or change the **Offset** by ±2%.
- **Issue:** "I can't get triplets."
- **Fix:** Set the Time knob to **2:66** or use the **Sync** options in the wrapper menu.

---

## 9. SUMMARY: THE "VIBE" PRESETS
- **THE "WEEKND" SLAP:** Time 1:00, Offset 10%, Feedback 0%, Cutoff 2kHz. (Intimate, wide, dark).
- **THE "TRAVIS" PING-PONG:** Time 4:00, Offset 100%, Feedback 75%, Cutoff 5kHz. (Wide rhythmic bounce).
- **THE "DRE" 1/4 ECHO:** Time 4:00, Offset 0%, Feedback 40%, Cutoff 8kHz. (Clean, rhythmic, solid).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Fruity Delay 2, Haas Effect, Step Sequencer, Feedback Filter, Phase Inversion, R&B Sound Design.
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Delay 2

| Parameter | Type | Range | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Input Vol** | Knob | 0-100% | N/A | Gain Stage | Level entering the delay. |
| **Dry** | Knob | 0-100% | **Jazzy** | Presence | Level of unprocessed signal. |
| **Feedback Vol**| Knob | 0-100% | **Moody** | Depth | Number of repeats. |
| **Feedback Cut**| Knob | Hz | **Moody** | Clarity | Low-pass filter frequency. |
| **Time** | Knob | Steps | **Upbeat** | Rhythm | Tempo-synced delay gap. |
| **Ofs (Offset)** | Knob | ms | **Vibey** | Width | L/R channel time difference. |
| **Mode** | Switch | 3 Types | **Psychedelic**| Spatial | Normal/Invert/Ping-Pong. |

## Mix Impact Tags
*   **Width:** Controlled primarily by **Offset** and **Mode**.
*   **Depth:** Controlled by **Feedback Vol** and **Cut**.
*   **Clarity:** Use **Feedback Cut** to keep the high-end free for vocals. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\delay2-specs.json

```json
{
  "plugin": {
    "name": "Fruity Delay 2",
    "category": "Delay",
    "type": "Digital Delay",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay%202.htm"
  },
  "parameters": {
    "time": [
      {"id": "time", "name": "Delay Time", "range": "Bars/Beats"},
      {"id": "offset", "name": "Stereo Offset"}
    ],
    "feedback": [
      {"id": "feedback", "name": "Feedback Level"},
      {"id": "cutoff", "name": "Filter Cutoff"},
      {"id": "resonance", "name": "Filter Resonance"}
    ],
    "mix": ["Volume (Wet)"]
  }
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Delay 2",
  "category": "Delay / Echo",
  "parameters": [
    {
      "section": "Input",
      "id": "input_vol",
      "name": "Input Vol",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Gain of the signal entering the delay line."
    },
    {
      "section": "Input",
      "id": "input_pan",
      "name": "Input Pan",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Panning of the signal prior to delay."
    },
    {
      "section": "Feedback",
      "id": "feedback_mode",
      "name": "Feedback Mode",
      "options": ["Normal", "Inverted", "Ping Pong"],
      "description": "Routing logic for stereo feedback."
    },
    {
      "section": "Feedback",
      "id": "feedback_vol",
      "name": "Feedback Level",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Amount of output fed back to input."
    },
    {
      "section": "Feedback",
      "id": "cutoff",
      "name": "Cutoff",
      "range": { "min": 10, "max": 20000, "unit": "Hz" },
      "description": "Low Pass filter frequency inside the loop."
    },
    {
      "section": "Time",
      "id": "time",
      "name": "Delay Time",
      "range": { "min": 0, "max": 16, "unit": "Steps" },
      "description": "Tempo-synced delay time (1.00 = 1/16th note)."
    },
    {
      "section": "Time",
      "id": "ofs",
      "name": "Stereo Offset",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Time offset between L/R channels."
    }
  ]
}

```

---

## FILE: 02-Data\presets\delay2-archetypes.json

```json
{
  "archetypes": [
    {
      "name": "Tight Vocal Slap",
      "settings": {
        "time": "1:00",
        "feedback": "15%",
        "cutoff": "3000Hz"
      },
      "useCase": "Adding 'thickness' to lead vocals."
    },
    {
      "name": "Wide Stereo Offset",
      "settings": {
        "time": "0.1ms",
        "offset": "15ms",
        "feedback": "0%"
      },
      "useCase": "Widening mono guitars or synths."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Delay 2)

## 1. The "Send" Default
*   **Rule:** Always load Fruity Delay 2 on a dedicated Send track.
*   **Application:** Set **Dry to 0**. This allows you to process the echoes separately from the main vocal.

## 2. Low-Frequency Safety
*   **Rule:** High-pass the delay input.
*   **Move:** Put a **Fruity Parametric EQ 2** *before* the delay on the send. Cut everything below 300Hz.
*   **Why:** Delaying the low-mids of a vocal creates "mud" that kills the clarity of the beat. [SRC: REPUTABLE]

## 3. Offset Mono Warning
*   **Rule:** Always check **Stereo Offset** in Mono.
*   **Move:** Turn your Master to Mono. If the sound gets thin or "hollow," reduce the Offset knob.
*   **Application:** Modern R&B relies on width, but it must still hit hard on a phone speaker.

## 4. The "Vocal Throw" Lock
*   **Rule:** Rhythmic throws should usually be 1/4 note (4 steps).
*   **Application:** It is the "safe" setting for rap ad-libs. It fills the space without stepping on the next bar.

## 5. Feedback Ceiling
*   **Rule:** Keep **Feedback Vol** below 90% for standard mixing.
*   **Exception:** Only go higher for "risers" or transition FX where the screeching feedback is the intended vibe. [SRC: IL-MAN]

```

---

## FILE: 02-Data\rules\delay2-usage-rules.json

```json
{
  "rules": [
    {
      "scenario": "Delay is clashing with the 'air' of the vocal",
      "action": "Lower the Cutoff filter to 4kHz to push the delay back in the mix."
    },
    {
      "scenario": "Repeats are too 'busy' for a fast track",
      "action": "Lower the Feedback to <20% and use a shorter Time (2:00)."
    }
  ]
}

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Delay 2

## 1. The Send Track Standard

Using Delay as an Insert effect muddies the mix. Use a Send.

1.  **Routing:** Route Vocal to "Delay Bus" (Mixer Track 10).
2.  **Plugin:** Fruity Delay 2 on Track 10.
3.  **Knob:** Turn **Dry** Volume to **0** (Min).
4.  **Why:** You only want the Wet signal on this bus. The Dry vocal is on its own track.
5.  **Sidechaining:** Now you can put a **Fruity Limiter** *after* the Delay 2 on Track 10. Sidechain it to the Vocal. The Delay ducks when the singer sings (The "Ducking Delay" trick).

## 2. Polyrhythmic Ping Pong

1.  **Idea:** A delay that dances around the beat.
2.  **Settings:**
    *   **Mode:** Ping Pong.
    *   **Time:** 3 steps (3:00) aka Dotted 8th.
3.  **Result:** Against a 4/4 beat, the echoes hit on the off-beats in alternative speakers, creating a driving "U2 / The Edge" rhythm.

## 3. Pseudo-Reverb

1.  **Context:** You want space but Reverb is too muddy.
2.  **Settings:**
    *   **Time:** Very short (e.g., 2 steps).
    *   **Feedback:** Low.
    *   **Cut:** High (Dark).
    *   **Offset:** Max.
3.  **Result:** A tight "Slapback" that feels like a small room reflection, adding presence without washing out the vocal.

## 4. Automation Pitch Effects

1.  **Concept:** Changing delay time changes pitch.
2.  **Action:** Automate the **Time** knob.
3.  **Draw:** Sharp ramps up and down at the end of a phrase.
4.  **Sound:** The delay tail will pitch shift up/down like a tape machine speeding up or braking.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Haas Effect Widening (Fruity Delay 2)

## Routing Context
*   **Target:** A mono Synth or Vocal ad-lib.
*   **Setup:** Use as an **Insert** (directly on the track).

## Step-by-Step Setup
1.  Load **Fruity Delay 2**.
2.  Set **Time** to `0`. (We don't want a rhythmic echo).
3.  Set **Feedback Vol** to `0`. (We only want one "shadow" signal).
4.  Set **Dry** to `100%`.
5.  **The Secret Move:** Slowly turn the **Ofs (Offset)** knob to the **Right**.
6.  **Listen For:** Stop when the sound feels wide but you don't yet hear a "slap" or distinct second sound.

## What To Listen For
*   The sound should feel like it is "wrapped" around your head. This is the Haas Effect—where the brain perceives a sound as wide because it hits one ear ~10-20ms after the other.

## Vibe Check
*   **Vibey:** This is the ultimate "Expensive" sheen move for backing vocals in modern R&B.

## Pitfalls + Fixes
*   **Pitfall:** "The sound disappears in mono."
*   **Fix:** Reduce the **Ofs** amount. If it still disappears, your ears are tricking you into a phase cancellation. Use a **Stereo Enhancer** instead if mono compatibility is a priority. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Space_And_Motion.md

```markdown
# Goal: Dub Delay Filtering (Fruity Delay 2)

## Routing Context
*   **Target:** Melodic Guitar or Piano.
*   **Placement:** Send Track (100% Wet).

## Step-by-Step Setup
1.  Load **Fruity Delay 2**.
2.  Set **Time** to `4.00` (1/4 Note).
3.  Set **Feedback Vol** to `75%`.
4.  Set **Feedback Cut** to `30%` (Dull/Warm).
5.  Set **Mode** to `Normal`.

## Tweak
*   Play your instrument. The echoes will start bright and slowly get "muffled" and darker as they repeat. This mimics the way high frequencies are absorbed by air and walls in a real space.

## Vibe Mapping
*   **Moody:** Lower the **Feedback Cut** even further (to 10-15%) for a dark, "distant" cave feel.
*   **Psychedelic:** Slowly automate the **Feedback Cut** from dark to bright during a transition.

## Pitfalls
*   **Feedback Build-up:** At 75% feedback, the tail lasts a long time. Automate the **Feedback Vol** down to 0 at the end of the song to kill the trail. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\dub-filtered-delay.md

```markdown
# Creating a Classic Dub Delay Workflow

## Goal
Generate a rhythmic, filtered delay tail that evolves and "fades out" gracefully, common in Dub, Reggae, and Techno.

## Steps
1. **Insert Fruity Delay 2**: Place it on your lead synth or a Send track.
2. **Rhythmic Timing**:
   - Set **Time** to `4:00` (1/4 note) or `3:00` (dotted 1/8 note).
3. **Feedback and Cutoff**:
   - Set **Feedback** to **60-70%**.
   - Set **Cutoff** to **50%**. This is the secret—each repeat will pass through the filter, making the echo progressively darker.
4. **Automation (The Dub Secret)**:
   - Create an automation clip for the **Cutoff** knob.
   - During a transition, slowly move the cutoff down.
   - You will hear the delay "melting" into the low-end.
5. **Phase Inversion**:
   - Toggle the **Inv** (Invert) switch. This can make the delay feel like it's "behind" the speakers, adding a psychological sense of depth.

## Result
A deep, atmospheric delay that feels "alive" rather than just a mechanical repeat.

```

---

## FILE: 03-Workflows\by-goal\lofi-vinyl-warble-generation.md

```markdown
# Masterclass: Designing Lo-Fi Vinyl Warble in Fruity Delay 2

## 1. Executive Summary: The "Dusty Record" Aesthetic
The defining characteristic of "Cool" Lo-Fi Hip-Hop and Moody R&B (think J Dilla, Knxwledge, or Summer Walker) is **Pitch Instability**. Standard digital audio is too "Perfect." We need to emulate the mechanical imperfections of a physical vinyl turntable—the "Wow and Flutter" caused by a belt that is too loose or a record that is slightly warped. **Fruity Delay 2** can be "Hacked" to create this effect with incredible realism. This guide covers the **Fine Temporal Modulation** and **Feedback Filtering** required for elite Lo-Fi warble.

---

## 2. Phase 1: The "Wow" Engine (Logic)

### 2.1 The Concept of Varispeed
- **The Science:** Vinyl warble is caused by changes in the speed of the turntable. 
- **The Delay Hack:** If you modulate the **Time** of a delay, you are effectively changing its playback speed.
- **The Setup:** Set Fruity Delay 2 to its minimum **Time** (0:00). 
- **The modulation:** We will use the **OFS (Offset)** knob as our pitch-warper.

---

## 3. Phase 2: Orchestrating the Wobble (Automation)

### 3.1 Designing the Flutter
1. **The Controller:** Link the **OFS (Offset)** knob to a **Fruity Envelope Controller** Articulator.
2. **The Waveform:** Use a **Random LFO** or a **Slow Sine LFO** (0.5Hz to 2Hz).
3. **The Amount:** Crucial—set the amount to only **1% - 3%**. 
4. **The Physics:** Moving the offset by 2% at a short time value creates a pitch shift of roughly ±10 cents. This is the exact range of a warped vinyl record.

---

## 4. Phase 3: The "Aural Aging" (The Filter)

### 4.1 Capturing the 1970s Tone
Vinyl has a limited frequency response compared to modern digital audio.
- **Action:** Set the **Cutoff** filter in Delay 2 to **40% (around 2kHz)**.
- **The Result:** The "Warbled" portion of the sound is now dark and muffled.
- **The Psychology:** The listener's brain interprets the dark, wobbly sound as a "Sample," providing an instant "Cool" and "Vintage" vibe to a clean digital synth.

---

## 5. Phase 4: Mixing the Ghost (Parallel Integration)

### 5.1 The "Drunken" Layer
- **Wet Level:** Set to **100%**.
- **Mixer Blending:** Lower the Mixer slot **Mix Level** to **20%**.
- **The Vibe:** You now have a solid, clean synth in the center, with a subtle, dark, wobbling "Ghost" of itself layered underneath. This is the hallmark of professional "Moody" R&B textural design.

---

## 6. Mathematical "Warble" Table
Use these modulation speeds to match the "History" of your track:

| Condition | LFO Speed | Offset Range | Filter Setting | Result |
|-----------|-----------|--------------|----------------|--------|
| **Minor Warp** | 0.2 Hz    | 1%           | LP 6kHz        | Subtle, Soulful. |
| **Old Belt**   | 1.0 Hz    | 3%           | LP 2kHz        | Heavy, "Moody" wobble.|
| **Broken Player**| 5.0 Hz   | 8%           | BP 1kHz        | Industrial, Psychedelic.|
| **Space Ghost** | Random    | 15%          | Resonant HP    | Trippy, Glitchy. |

---

## 7. Troubleshooting the Warble
- **Issue:** "It sounds like a bad chorus effect."
- **Fix:** Your **LFO Speed** is too high. Vinyl "Wow" is very slow. Lower the rate below 0.5Hz.
- **Issue:** "The pitch shift is too distracting."
- **Fix:** Lower the **Amount** knob in the Envelope Controller. Professional Lo-Fi is about **Feel**, not obvious "brokenness."

---

## 8. Conclusion: The Master of Dust
Mastering vinyl warble in Fruity Delay 2 is about **Engineering Imperfection.** By using fine temporal modulation and dark feedback filtering, you transform sterile digital audio into a living, breathing "Sample." This is the difference between a "Beat" and a **"Record."** Follow this masterclass, and your Hip-Hop and R&B tracks will have the professional, timeless quality of a classic dusty vinyl discovery.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Vinyl Warble, Wow and Flutter, Lo-Fi R&B, Delay 2 Workflow, Pitch Instability, FL Studio.

```

---

## FILE: 03-Workflows\by-instrument\dub-synth-riser-masterclass.md

```markdown
# Masterclass: Designing Evolving Dub Synth Risers in Fruity Delay 2

## 1. Executive Summary: The "Resonant Echo" Aesthetic
In psychedelic Rap and Atmospheric R&B (think the transition work of producers like Metro Boomin or NAV), transitions often rely on "Evolving Echoes"—sounds that start as simple pulses and slowly transform into screeching, resonant sirens before the drop. **Fruity Delay 2**, with its internal filter and step-sequenced timing, is the ultimate tool for this. This guide will show you how to perform a "Dub Sweep" that adds immense energy and "Cool" factor to your track.

---

## 2. Phase 1: The Rhythmic Seed (Setup)

### 2.1 The Sound Source
- **Goal:** You need a sound with sharp transients.
- **The Choice:** Use a simple short synth pluck or even a rimshot.
- **The Routing:** Place the sound on a track and insert **Fruity Delay 2**.

### 2.2 The Timing Grid
- **Time:** Set to **2:00** (1/8 note) for an upbeat, driving energy.
- **Offset:** Set to **0%**. We want the energy to be focused and "hitting" in the center.
- **Feedback:** Set to **75%**. We want the sound to sustain for several bars.

---

## 3. Phase 2: The "Dub" Physics (The Filter)

### 3.1 The Resonant Whistle
This is what creates the "Riser" energy.
- **Action:** Set the **Cutoff** filter to **1500Hz**.
- **The Resonance (Res):** Crank the **Res** knob to **80%**.
- **The Physics:** Now, each repeat isn't just an echo; it's a "Filtered Ring." Because the resonance is high, the delay will emphasize a specific harmonic of the synth pluck.

---

## 4. Phase 3: The Performance (Automation)

To turn an echo into a riser, you must "drive" the parameters over time.

### 4.1 The Frequency Spiral
- **Action:** Create an automation clip for the **Cutoff** knob.
- **The Pattern:** Start the cutoff at **500Hz** (dark and muffled). Over 4 bars, slowly raise it to **10kHz**.
- **The Result:** The echo will start as a low "thump" and slowly transform into a high-pitched "scream." This mimics the sound of a spaceship taking off.

### 4.2 The "Feedback Wash"
- **Action:** During the final bar of the transition, automate the **Feedback** from **75% to 95%**.
- **The Vibe:** The sound will start to "wash out" and blur into itself, creating a dense wall of resonant energy.

---

## 5. Phase 4: Spatial Expansion (The Width)

### 5.1 The Stereo Spiral
- **Action:** During the final bar, automate the **Offset (OFS)** from **0% to 100%**.
- **The Psychoacoustic Effect:** The high-pitched scream will suddenly start "ping-ponging" violently between your ears, making the listener feel like the sound is spinning.

---

## 6. Mathematical Vibe Table for Delay 2 Risers
Use these values to change the "Material" of your riser:

| Riser Type | Base Time | Max Resonance | Filter Start | Vibe |
|------------|-----------|---------------|--------------|------|
| **Wooden** | 1:00      | 40%           | 200 Hz       | Earthy, Organic |
| **Metallic**| 4:00      | 90%           | 800 Hz       | Industrial, Hard |
| **Glassy**  | 0:50      | 95%           | 3000 Hz      | Shimmering, Airy |
| **Deep Space**| 8:00     | 20%           | 100 Hz       | Moody, Distant |

---

## 7. Troubleshooting the Riser
- **Issue:** "The riser is too loud and clipping."
- **Fix:** Lower the **Master Volume** inside the plugin or use a **Fruity Limiter** at the end of the chain. High resonance in feedback loops adds a LOT of gain.
- **Issue:** "The riser sounds too clean."
- **Fix:** Add a **Fruity Blood Overdrive** *before* the Delay 2. This distorts the source, giving the filter more harmonics to "whistle" with.

---

## 8. Conclusion: The Master of Transitions
Mastering the Dub Riser in Fruity Delay 2 is about **Harmonic Evolution.** By using high-resonance filtering and cascading feedback, you turn a simple rhythmic echo into a complex emotional journey. This is the difference between a "Beat" and a "Composition." Follow this masterclass, and your transitions will have the professional, psychedelic energy of a world-class production.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Dub Delay, Riser Workflow, Transition FX, Resonant Filter, Delay 2 Automation, FL Studio.

```

---

## FILE: 03-Workflows\by-instrument\moody-vocal-slapback.md

```markdown
# Moody Vocal Slapback Workflow

## Goal
Add a "cool," intimate slapback delay to a vocal that feels like it's in a small, expensive recording booth.

## Steps
1. **The Short Time**: Set **Time** to a very low value between **50ms and 80ms**.
2. **The "Shadow" Volume**:
   - Set **Feedback** to 0% (only one repeat).
   - Set **Wet Volume** to 20%.
3. **Stereo Separation**:
   - Set **OFS (Offset)** to **5-10ms**.
   - This makes the delay "bloom" slightly to the right, separating it from the centered dry vocal.
4. **The High-Cut**:
   - Move the **Cutoff** filter down to **3kHz**.
   - This removes the sibilance (the 'S' sounds) from the delay, making it a dark "shadow" of the vocal.

## Result
A professional, moody vocal texture that adds "depth" without the "clutter" of a long reverb tail.

```

---

## FILE: 03-Workflows\by-instrument\psychedelic-guitar-widening.md

```markdown
# Masterclass: Designing Psychedelic Guitar Widening in Fruity Delay 2

## 1. Executive Summary: The "Melting Walls" Aesthetic
In modern psychedelic R&B and Dream-Pop (think the guitar work of artists like Kevin Parker or Travis Scott), guitars are not just instruments; they are "Spaces." We need a width that doesn't just sound "large," but sounds "trippy" and "drifting." **Fruity Delay 2**, with its surgical temporal offset and internal resonant filter, is the ultimate engine for this. This guide covers the **Phase-Shift Widening** and **Resonant Motion** techniques required for elite psychedelic production.

---

## 2. Phase 1: Temporal Displacement (The Depth)

### 2.1 The "Drunken" Haas Setup
Standard widening uses a static 15ms offset. We want something more fluid.
1. **Insert Fruity Delay 2** on your guitar mixer track.
2. **Time:** Set to **0:00**.
3. **Offset (OFS):** Set to **25ms**. 
4. **The Physics:** 25ms is the "Sweet Spot" between simple width and a distinct echo. It creates a "Hazy" sense of space that is the hallmark of psychedelic moods.

---

## 3. Phase 2: Tonal Animation (The Vibe)

### 3.1 The Resonant Drift
Psychedelic guitars need to feel like they are "moving" even when the notes are static.
- **Action:** Set the **Cutoff** filter to **2000 Hz**.
- **Resonance (Res):** Turn up to **65%**.
- **The Magic Move:** Automate the **Cutoff** knob with a very slow Sine LFO (2 bars).
- **The Result:** The "Wide" part of the guitar will slowly "whistle" and change tone while the centered part stays solid. This creates a "phasing" sensation that makes the listener feel like the room is melting.

---

## 4. Phase 3: Phase Inversion (The Psychedelic Flip)

### 4.1 Exploiting Cancellation
- **Action:** Click the **Inv (Invert)** button in Delay 2.
- **The Logic:** This inverts the polarity of the wide image. 
- **The Effect:** Certain frequencies will cancel out in the center, making the guitar feel like it is "hollowed out" and "pushing" against the sides of the listener's head. It increases the "Trippy" factor by 100%.

---

## 5. Phase 4: Mixing for the "Aura"

### 5.1 Parallel Integration
- **Wet Level:** Set to **100%**.
- **Mixer Blending:** Set the Mixer slot **Mix Level** to **35%**.
- **The Result:** The main guitar remains intelligible and "R&B smooth," but it is surrounded by a "Psychedelic Aura" of wide, resonant, drifting echoes.

---

## 6. Mathematical Vibe Table for Guitar Space
Use these settings based on the "Narrative" of your track:

| Desired Space | Offset | Filter Type | Resonance | Vibe |
|---------------|--------|-------------|-----------|------|
| **Liquid Chrome**| 12ms   | 4kHz LP     | 80%       | Metallic, shimmering. |
| **Underwater Haze**| 35ms  | 800Hz LP    | 20%       | Dark, muffled, deep. |
| **Drunken Ghost**| 18ms   | 1500Hz BP   | 50%       | Hollow, melodic. |
| **Industrial Neon**| 5ms   | 6kHz HP     | 95%       | Sharp, cutting, edgy.|

---

## 7. Troubleshooting the Space
- **Issue:** "The guitar sounds too thin in Mono."
- **Fix:** Decrease the **Offset** to 10ms or turn off the **Inv** button. Psychedelic width always trades some mono-compatibility for stereo-euphoria.
- **Issue:** "The resonant whistle is too painful."
- **Fix:** Lower the **Res** knob to 40% and use a **Fruity Fast Dist (Type A)** after the delay to "warm up" the resonant peak.

---

## 8. Conclusion: The Master of the Haze
Psychedelic guitar widening in Fruity Delay 2 is about **Controlled Instability.** By utilizing temporal offsets, resonant filtering, and phase inversion, you transform a dry recording into a living atmospheric environment. This is the difference between "Adding a plugin" and **"Designing an Experience."** Follow this masterclass, and your guitars will have the professional, trippy footprint of an elite psychedelic production.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Psychedelic Guitars, Haas Effect, Delay 2 Workflow, Resonant Filtering, Stereo Sound Design, R&B Space.

```

---

## FILE: 03-Workflows\by-instrument\vocals.md

```markdown
# Workflow: Trap Ad-lib "Bounce" (Delay 2)

## The Concept
Giving a rapper's ad-libs a rhythmic "bounce" that fills the stereo field.

## Step-by-Step
1.  Place **Fruity Delay 2** on your Ad-lib mixer track.
2.  Set **Time** to `2.00` (1/8th note).
3.  Select **Ping Pong** mode.
4.  Set **Feedback Vol** to `40%`.
5.  Set **Ofs (Offset)** to `5%` Right.
6.  **Tweak:** Set **Dry** to `80%` and the Delay level to `20%`.

## Vibe Check
*   **Upbeat:** This creates a fast, energetic stereo movement that keeps the listener engaged during the "gaps" in the rap verse.

## Automation Idea
*   Automate the **Time** knob from `2.00` to `4.00` at the end of a phrase to make the ad-lib "slow down" rhythmically. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\widening-mono-guitars.md

```markdown
# Masterclass: Widening Mono Electric Guitars in Fruity Delay 2

## 1. Executive Summary: The "Double-Tracked" Illusion
In modern R&B and Hip-Hop (think the clean guitar licks of artists like Post Malone or Summer Walker), guitars need to be wide and spacious to leave room for the center-panned vocal and 808. However, recording two identical takes (double-tracking) is time-consuming and often too "messy" for a clean R&B track. This guide will show you how to use the **Haas Effect and Tonal Offsetting** in **Fruity Delay 2** to make a single mono guitar recording sound like a professional, wide-stereo double-take.

---

## 2. Phase 1: Psychoacoustic Configuration (The Haas Setup)

### 2.1 The Spatial Fusion
The goal is to trick the brain into hearing two different sources.
1. **The Choice:** Insert **Fruity Delay 2** on your guitar mixer track.
2. **The Time:** Set the main **Time** knob to **0:00**.
3. **The Offset:** Set the **OFS (Offset)** knob to **15ms - 20ms**. 
4. **The Physics:** By delaying the right channel by 15ms, the brain perceives the sound as "starting" in the left and "blooming" to the right. This creates an immediate sense of 3D width.

---

## 3. Phase 2: Tonal Offsetting (The "Two Take" Secret)

### 3.1 Frequency Disparity
A real double-track sounds wide because the two takes have slightly different tone.
- **Action:** Set the **Cutoff** filter in Delay 2 to **60%**.
- **The Result:** The delayed (right) side will be slightly darker than the dry (left) side. 
- **The Psychology:** This mimics the natural variation of a physical second recording, making the widening effect sound "organic" rather than "digital."

### 3.2 Phase Inversion
- **Action:** Click the **Inv (Invert)** button.
- **The Logic:** This inverts the polarity of the right channel. 
- **The Vibe:** This makes the right side feel "further away" or "behind" the speakers, increasing the psychedelic sense of space.

---

## 4. Phase 3: The "New York" Mix Strategy

### 4.1 Maintaining Focus
- **Wet Level:** Set to **100%**.
- **The Mixer Slot Blend:** Go to the FL Studio Mixer and look at the **Mix Level** knob for the slot containing Delay 2.
- **The Setting:** Lower the Mixer Mix to **50%**.
- **The Result:** You are now perfectly balancing the **100% Dry Mono** guitar with the **100% Wide Delayed** guitar. This ensures the guitar stays "solid" in the center but has a massive "aura" on the sides.

---

## 5. Phase 4: Phase Integrity Check (Mono Compatibility)

### 5.1 The Master Check
The Haas effect is notorious for causing sound to disappear in Mono.
1. **Action:** Go to your Master track and click the **Mono** switch.
2. **The Problem:** If the guitar sounds "tinny" or "hollow," you have phase cancellation.
3. **The Fix:** Move the **Offset** knob in Delay 2 by a tiny amount (±1ms). 
4. **The Goal:** Find the "Sweet Spot" where the guitar sounds wide in Stereo but still has "Body" in Mono.

---

## 6. Phase 5: Post-Widening Atmosphere

### 6.1 The "Cool" Factor (Fruity Chorus)
- **Action:** Place a **Fruity Chorus** AFTER the Delay 2.
- **Settings:** Rate 0.2Hz, Depth 20%, Wet 15%.
- **Effect:** This adds a subtle "shimmer" to the wide guitar, making it feel like a modern R&B production.

---

## 7. Mathematical Offset Table for Guitars
Use these values to change the "Scale" of your guitar:

| Width Goal | Offset Value | Filter Setting | Vibe |
|------------|--------------|----------------|------|
| **Tight Width** | 10ms         | LP 8kHz (Bright) | Upbeat Funk / Pop |
| **Natural Depth**| 18ms         | LP 4kHz (Warm)   | Standard R&B Licks |
| **Distant Mood** | 35ms         | LP 1kHz (Dark)   | Moody / Lo-Fi Rap |
| **Psychedelic** | 100ms        | Resonant Sweep   | Trippy Transition |

---

## 8. Troubleshooting the Width
- **Issue:** "The guitar sounds tilted to the left."
- **Fix:** Because the right side is delayed and darker, it sounds quieter. Use the main Mixer **Pan** knob to move the guitar about 5% to the right to compensate.
- **Issue:** "It sounds like an echo, not a widener."
- **Fix:** Your **Offset** is too high (>40ms). Lower it until the two sounds "fuse" into one wide image.

---

## 9. Conclusion: The Master of Space
Widening a mono guitar in Fruity Delay 2 is about **Engineering an Illusion.** By combining the psychoacoustic power of the Haas effect with the tonal shaping of the feedback filter, you create a sound that is "larger than life" while remaining professional and clear. This is the difference between a "bedroom beat" and a "studio record." Follow this masterclass, and your guitars will have the wide, expensive footprint of a platinum R&B track.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Guitar Widening, Haas Effect, Delay 2 Workflow, Stereo Space, R&B Production, FL Studio.
```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Delay 2

## Official Links
*   **Manual:** [Fruity Delay 2 Official Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay%202.htm)

## Source Log
1.  **[SRC: IL-MAN]:** Technical reference for step-based timing, Mid/Side switching (Invert), and the feedback filter algorithm.
2.  **[SRC: REPUTABLE]:** In The Mix (Reverb/Delay Workflows). Reference for the Haas Effect Offset settings (<20ms) and low-end protection strategies.
3.  **[SRC: REPUTABLE]:** SeamlessR (Delay Theory). Used for explaining the difference between "Invert" and "Ping Pong" phase relationships.

## Coverage Checklist
- [x] Basic Routing (Dry knob behavior)
- [x] Haas Effect / Stereo Offset Guide
- [x] Dub Filtering Workflow
- [x] 5 Vibe Targets
- [x] Time-to-Steps Conversion Table
- [x] Rhythmic Vocal Ad-lib Recipe

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Delay 2 (Hip-Hop/R&B)

## Vibe 1: The "Expensive" R&B Vocal
*   **Sound:** Wide, holographic, centered.
*   **Key Move:** Time `0` + Offset `10%` + High-Pass Filter @ 400Hz.

## Vibe 2: The "Bounce" Percussion
*   **Sound:** Rhythmic, stereo-hopping, crisp.
*   **Key Move:** Ping-Pong Mode + 1/8 note sync + 100% Cutoff.

## Vibe 3: The "Submerged" Drake Pad
*   **Sound:** Muffled, distant, receding.
*   **Key Move:** Normal Mode + 30% Cutoff + 80% Feedback.

## Vibe 4: The "Trippy" Transition
*   **Sound:** Pitch-warping, unstable, melting.
*   **Key Move:** Automated Time knob (±0.2 steps) + Invert Mode.

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Delay 2 Mechanics

## 1. The 48-Tick Resolution

*   **Formula:** `Step_Value = (Steps * 48) + Offset`.
*   **Precision:**
    *   FL Studio's PPQ (Pulses Per Quarter) is 96 by default.
    *   Delay 2's resolution of 48 ticks per 16th note implies it runs at `48 * 4 = 192 PPQ` relative to the beat?
    *   Actually, 1 step (16th) = 1/4 of a Beat.
    *   96 PPQ / 4 = 24 ticks per 16th.
    *   Fruity Delay 2 uses **Double Resolution** (48) compared to standard MIDI PPQ to ensure smooth timing adjustments.

## 2. Feedback Loop Topology

*   **Location:** The **Cut** filter is INSIDE the loop.
*   **Consequence:**
    *   `Output = Input + (Delayed_Signal * Feedback_Vol * Filter)`.
    *   If you set Feedback > 100% (possible?), it self-oscillates.
*   **Limiter:** Fruity Delay 2 has a soft clipper on the feedback loop? No. It will clip digitally (go red) if Feedback Volume is Max and Input is loud. **Danger**: Watch your levels.

## 3. Stereo Offset Logic

*   **Type:** Sample Delay.
*   **Direction:**
    *   Left Turn: Delays Left Channel.
    *   Right Turn: Delays Right Channel.
*   **Max Time:** Roughly +/- 50ms? (Documentation says "richer stereo panorama", implies Haas zone <30ms).
*   **Note:** This offset is *added* to the main Time knob.
    *   Left Channel Time = Main Time + Left Offset.
    *   Right Channel Time = Main Time + Right Offset.
    *   This desynchronizes the Ping Pong rhythm if used heavily.

```

---

## FILE: 04-Reference\time-knob-step-values.md

```markdown
# Reference: Time Knob Step Values (Delay 2)

Fruity Delay 2 measures time in **Steps**. A Step is a 1/16th note division of your project's BPM.

### Common Value Map
| Display Value | Musical Duration |
| :--- | :--- |
| **1.00** | 1/16 Note |
| **2.00** | 1/8 Note |
| **3.00** | 1/8 Dotted |
| **4.00** | 1/4 Note (The Beat) |
| **6.00** | 1/4 Dotted |
| **8.00** | 1/2 Note |
| **12.00** | 1/2 Dotted |
| **16.00** | 1 Bar |

### Fine-Tuning Triplets
To achieve triplets, you must use the "Steps" between the whole numbers.
*   **1/4 Triplet:** ~2.66 steps.
*   **1/8 Triplet:** ~1.33 steps.

### Resolution Note
The knob allows for very fine resolution between steps. If you want a "perfectly synced" sound, use the **Right-click -> Type Value** method. [SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-docs\buffer-delay-logic.md

```markdown
# Buffer-Based Time Delay Logic

## How it works
Fruity Delay works by creating a **Circular Buffer** in RAM.
1. The incoming audio is written into the buffer.
2. The plugin "reads" from the buffer at a specific time-offset (determined by the **Time** parameter).
3. The read signal is mixed back with the input (Feedback) and sent to the output.

## Digital vs. Pitch-Shift (Bucket Brigade)
- **Fruity Delay 2** uses a standard digital read head. If you change the Delay Time while audio is playing, it "jumps" to the new position. You won't hear a pitch sweep (unlike Fruity Delay 3's Analog mode).
- **Benefit:** This allows for instant rhythmic switches without dissonant pitch artifacts.

## Stereo Offset (Ping-Pong)
The **OFS** knob is not a pan knob. It delays one channel (usually the Right) relative to the other.
- **Offset at 0%:** Both L and R delay by (e.g.) 500ms.
- **Offset at 100%:** Left delays by 500ms, Right delays by 1000ms.
- **Result:** You hear the first repeat in the Left, the second in the Right, creating a wide "bouncing" effect.

## Phase Inversion (Inv)
This parameter inverts the polarity of the wet signal. 
- When mixed with the dry signal, this causes partial phase cancellation at specific frequencies (the "Comb Filter" effect).
- Use this to create a "hollow" or "distant" sound that doesn't clash with the main dry frequencies.

```

---

## FILE: 04-Reference\technical-docs\comb-filter-interference-patterns.md

```markdown
# Technical Deep-Dive: Comb Filter Interference Patterns and Phase Polarity

## 1. Introduction: The Sound of Destructive Interference
When a dry signal is mixed with a version of itself delayed by less than 35ms (The Haas Effect), the waves do not simply sum; they **Interfere**. This interference creates a series of peaks and notches in the frequency response, giving the sound a specific "Nasal," "Metallic," or "Hollow" character. In **Fruity Delay 2**, mastering this math is the key to creating "Surgical Width" that doesn't ruin the frequency balance of your R&B vocal.

---

## 2. The Mathematics of the "Comb"
### 2.1 Calculating the First Notch
A "Notch" (silence) occurs when the delay is exactly half of a wavelength (180 degrees out of phase).
- **The Formula:** `f_notch = 1 / (2 * t_delay)`.
- **The Logic:** If you use a **1ms delay** (`0.001s`), the first major cancellation happens at:
    - `1 / (2 * 0.001) = 500 Hz`.
- **The Production Impact:** A 1ms widening delay will "Hollow out" the fundamental of many male rap vocals (which sit around 200-500Hz). 

### 2.2 Successive Harmonics
The comb filter creates additional notches at odd multiples of the first notch (`3f, 5f, 7f...`).
- **The result:** The more you decrease the delay time, the more "teeth" the comb has in the audible range, resulting in a "Flanged" or "Metallic" sound.

---

## 3. The "Invert" (Inv) Logic: Phase Transformation
Fruity Delay 2’s **Inv (Invert)** button is a mathematical tool for **Notch Shifting**.
- **Standard Summing (Dry + Wet):**
    - Peaks at: `1/t, 2/t, 3/t...`
    - Notches at: `1/2t, 3/2t, 5/2t...`
- **Inverted Summing (Dry - Wet):**
    - Notches at: `1/t, 2/t, 3/t...`
    - Peaks at: `1/2t, 3/2t, 5/2t...`
- **The Engineering Strategy:** If a 1ms delay is killing your 500Hz weight, click **Inv**. The notch at 500Hz becomes a PEAK, potentially restoring the lost energy.

---

## 4. Engineering "Transparent" Width
### 4.1 Staying Outside the "Comb" Range
To achieve width without hearing the "Metallic" comb artifacts:
- **The Haas Target:** Keep your **Offset** between **15ms and 25ms**.
- **The Math:** A 20ms delay (`0.02s`) places its first notch at `1 / (2 * 0.02) = 25 Hz`.
- **The Benefit:** Since 25Hz is below the range of most vocals and melodic instruments, the comb filtering is effectively "Invisible" to the listener. This is how you get that clean, wide "Cool" R&B sound.

---

## 5. Comb Filtering as a Resonator (Physical Modeling)
### 5.1 Feedback-Driven Peaks
When you increase the **Feedback** in Delay 2 at ultra-short times:
- **The Physics:** The constructive interference peaks become extremely sharp and narrow.
- **The Sound:** The delay starts to "Sing" at a specific note.
- **The Vibe:** Set Offset to **2.27ms** and Feedback to 90%. The delay will ring at exactly **440Hz (Note A4)**. You have turned a delay plugin into a physical melodic resonator.

---

## 6. Mathematical Notch Reference Table

| Delay Offset (ms) | First Notch (Hz) | Subjective Character | Use Case |
|-------------------|------------------|----------------------|----------|
| **0.5 ms**        | 1000 Hz          | "Small Pipe" Hollow  | Glitch Hip-Hop |
| **1.0 ms**        | 500 Hz           | "Nasal" Radio        | Industrial Rap |
| **2.0 ms**        | 250 Hz           | "Thin" / Weak        | Resonant Snare |
| **5.0 ms**        | 100 Hz           | "Phasey" / Muddy     | Trippy Transitions |
| **15.0 ms**       | 33 Hz            | Transparent / Wide   | **Elite R&B Vocal Width** |

---

## 7. Conclusion: The Phase Surgeon
Mastering the physics of comb filtering in Fruity Delay 2 is about **Harmonic Management.** By understanding the relationship between time and frequency, you move beyond "hoping it sounds wide" and start **Calculating Space.** It is the definitive guide for any producer who wants their wide textures to remain technically pure and phase-coherent. Follow these mathematical principles to own the "Air" of your mix.

---
**Document Version:** 1.0 (Technical Reference Tier)
**Author:** Phase Physics Lead
**Keywords:** Comb Filtering, Phase Inversion, Haas Effect, Constructive Interference, Delay Math, FL Studio.

```

---

## FILE: 04-Reference\technical-docs\comb-filtering-math.md

```markdown
# Technical Deep-Dive: Comb Filtering Math and Temporal Notches

## 1. Introduction: The Sound of the Spike
In audio engineering, **Comb Filtering** is an effect produced by mixing a signal with a slightly delayed version of itself. This causes interference—both constructive (reinforcement) and destructive (cancellation). In **Fruity Delay 2**, when the **Time** is set to zero and the **Offset** is small (under 15ms), we enter the realm of surgical comb filtering. This guide explores the mathematics of these frequency "notches" and how to control them for elite-level sound design.

---

## 2. The Interference Equation
### 2.1 Destructive Interference (The Notch)
When two identical waves are mixed, and one is delayed by half a wavelength (180 degrees out of phase), they cancel each other out.
- **The Formula:** `f = 1 / (2 * t)`, where `f` is the notch frequency and `t` is the delay time.
- **Example:** A 1ms delay (`0.001s`) creates its first major notch at `1 / (2 * 0.001) = 500 Hz`.

### 2.2 Constructive Interference (The Peak)
Frequencies that are a full wavelength apart (360 degrees) reinforce each other.
- **The Formula:** `f = 1 / t`.
- **Example:** A 1ms delay reinforces `1 / 0.001 = 1000 Hz` (1kHz).

---

## 3. The "Invert" (Inv) Switch: Phase Polarity Math
Fruity Delay 2 features an **Inv (Invert)** button. This is a critical tool for "Phase Realignment."
- **Standard (Dry + Wet):** Peaks at `1/t`, Notches at `1/(2t)`.
- **Inverted (Dry - Wet):** Notches at `1/t`, Peaks at `1/(2t)`.
- **The Production Impact:** If your widening effect (Haas) makes the vocal sound "thin" at 500Hz, clicking **Inv** will move that notch to 1000Hz, often restoring the "Weight" of the voice.

---

## 4. Engineering the Notches (Surgical Widening)

| Delay Offset | First Notch (Hz) | Subjective Effect | Best Use |
|--------------|------------------|-------------------|----------|
| **0.5 ms**   | 1000 Hz          | Hollow / Metallic | Glitch FX |
| **1.0 ms**   | 500 Hz           | Nasal / Small     | Drum Resonators |
| **5.0 ms**   | 100 Hz           | Thin / Phasey     | Industrial Leads |
| **15.0 ms**  | 33 Hz            | Sub-Low (Inaudible)| Natural Haas Width |

---

## 5. Comb Filtering as a Synthesis Engine
### 5.1 Feedback-Based Combs
When you increase the **Feedback** in Delay 2 at very short times, the notches become deeper and the peaks become sharper.
- **The Physics:** This is the foundation of **Karplus-Strong String Synthesis**.
- **The Master Hack:** Set Delay 2 Time to 0:00, Offset to 2ms, and Feedback to 90%. You will hear a metallic "ringing" tone. Automate the Offset to play this "ring" like a psychedelic melodic instrument.

---

## 6. Conclusion: The Master of Interferences
Mastering Comb Filtering in Fruity Delay 2 is about **controlling the invisible peaks.** By understanding the mathematical relationship between milliseconds and hertz, you can purposefully design spaces that are either transparent (Haas) or characterful (Karplus). It is the definitive skill for any producer looking to move beyond simple effects and enter the realm of **Mathematical Sound Design.**

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Comb Filtering, Phase Cancellation, Haas Effect, Temporal Physics, Interference Math.

```

---

