# Pitcher - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Pitcher - Real-Time Pitch Correction

`\`\`
██████╗ ██╗████████╗ ██████╗██╗  ██╗███████╗██████╗ 
██╔══██╗██║╚══██╔══╝██╔════╝██║  ██║██╔════╝██╔══██╗
██████╔╝██║   ██║   ██║     ███████║█████╗  ██████╔╝
██╔═══╝ ██║   ██║   ██║     ██╔══██║██╔══╝  ██╔══██╗
██║     ██║   ██║   ╚██████╗██║  ██║███████╗██║  ██║
╚═╝     ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Pitch Correction / Harmonizer / Autotune
**Category:** Effect / Vocal / Correction
**Official Manual:** [Image-Line Pitcher Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Pitcher.htm)

---

## 🎯 What is Pitcher?

Pitcher is FL Studio's real-time pitch correction and harmonization plugin (similar to Auto-Tune). It corrects the pitch of an incoming audio signal to match a selected musical scale or incoming MIDI notes. It is used for everything from transparent vocal tuning to the famous "T-Pain" or "Cher" robotic effect, as well as creating 4-part MIDI-controlled harmonies.

**Key Capabilities:**
- **Automatic Correction:** Snaps input pitch to the nearest scale note.
- **MIDI Control:** Forces the pitch to match notes played on a MIDI keyboard.
- **Harmonization:** Generates up to 4 harmony voices based on MIDI chords.
- **Retune Speed:** Controls the transition time (Fast = Robotic, Slow = Natural).
- **Formant Preservation:** Keeps the vocal timbre natural during pitch shifts.
- **Gender Bending:** Formant shifting for creative voice alteration.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **scale-vs-midi-mode.md**
3. Create **parameter-cheat-sheet.md**
4. Select "Minor" scale and set Retune Speed to "Fast" for instant trap vocals.

### For Vocal Producers:
1. Study **transparent-correction-settings.md**
2. Review **midi-harmonizer-setup.md** (Crucial!)
3. Learn **formant-shifting-fx.md**

### For Live Performers:
1. Study **live-autotune-latency.md**
2. Review **midi-keyboard-setup.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Retune Speed:** Fast/Medium/Slow.
  - **Fine Tune:** Cent adjustment.
  - **Scale:** Minor, Major, Pentatonic, etc.
  - **MIDI Button:** Enables MIDI input mode.
  - **Octave Button:** Harmonizer control.
  - **Formant:** Throat size control.

- [ ] **scale-vs-midi-mode.md**
  - **Automatic:** Best for set-and-forget correction.
  - **MIDI:** Best for forcing specific melodies or harmonies.

#### 02-Data/parameters/
- [ ] **pitcher-params.json**
  `\`\`json
  {
    "plugin_name": "Pitcher",
    "category": "Pitch Correction",
    "modes": ["Automatic", "MIDI"],
    "voices": 4
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **midi-harmonizer-setup.md**
  - Step 1: Load Pitcher on Vocal Track.
  - Step 2: Add "MIDI Out" channel.
  - Step 3: Match Ports (Pitcher Input Port = MIDI Out Port).
  - Step 4: Play chords on MIDI Out.
  - Step 5: Enable "Harmonize" switches on Pitcher.

- [ ] **the-robotic-effect.md**
  - Speed: Fast.
  - Scale: Chromatic (or Song Key).
  - Fine Tune: 0.

- [ ] **transparent-pop-tuning.md**
  - Speed: Medium/Slow (~20-40ms).
  - Scale: Correct Song Key (Critical!).
  - Formant: On.

#### 03-Workflows/by-context/
- [ ] **fixing-flat-notes.md**
- [ ] **creating-vocoder-style-chords.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **port-routing-diagram.md**
  - Visualizing the MIDI Out -> Pitcher connection.

---

## 🔬 Research Framework

### Phase 1: Automatic Mode (Week 1)
**Goal:** Set and Forget

**Tasks:**
1. Sing a slightly out-of-tune scale
2. Set Pitcher to "Major"
3. Adjust "Speed" until it snaps correctly
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I bypass specific notes? (Click the switches above the keyboard graphic).
- What does the "Fine" knob do? (Global tuning offset).

### Phase 2: MIDI Control (Week 2)
**Goal:** Harmonization

**Tasks:**
1. Set up the MIDI Port routing (crucial step!)
2. Click the "MIDI" button on Pitcher
3. Play a chord on your keyboard
4. Listen to the 4 generated voices
5. Create midi-harmonizer-setup.md

**Key Questions to Answer:**
- Can I pan the harmonies? (Yes, per-voice panning exists in the GUI).

---

## 📊 Plugin Specifications to Document

### Engine
- Max Harmony Voices (4)
- Latency (Low enough for live?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does it sound bad? (Wrong scale selected).
2. Why isn't MIDI working? (Input Port on plugin wrapper settings must match MIDI Out).

### Advanced Usage
1. How to automate the Key change during a song? (Automate the Key selector knob).

---

## 🔗 Cross-Reference with Other Plugins

Pitcher is often used with:
- **MIDI Out** (Required for MIDI mode)
- **Newtone** (Offline alternative)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Pitcher/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── scale-vs-midi-mode.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── pitcher-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── midi-harmonizer-setup.md
│   │   ├── the-robotic-effect.md
│   │   └── transparent-pop-tuning.md
│
└── 04-Reference/
    └── port-routing-diagram.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Successfully route MIDI chords to create a 4-part vocal harmony
- [ ] Configure a transparent correction setting for a ballad
- [ ] Explain why "Input Port" is necessary for MIDI mode

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What Is Pitcher?

> **The "Robot" Voice.**
> Pitcher is FL Studio's native real-time pitch correction plugin. It is the functional equivalent of **Auto-Tune** (Antares) or **Waves Tune Real-Time**. Unlike Newtone (which is offline surgery), Pitcher fixes bad singing *while you hear it*.

## 🧠 The 60-Second Mental Model
Think of Pitcher as a **Magnetic Grid** for your voice.
*   You sing a note.
*   Pitcher looks at the **Scale** you selected (e.g., C Minor).
*   If you are "in between" notes, Pitcher snaps you to the nearest valid note.
*   **Retune Speed** determines *how fast* it snaps. Zero latency = Robot. High latency = Natural.

## 📋 When To Use It
| Use Case | ✅ YES (Pitcher) | ❌ NO (Newtone) |
| :--- | :--- | :--- |
| **The "Look"** | T-Pain / Travis Scott / Future robotic vocal tuning. | Precise, manual surgical fixes of single notes. |
| **Live** | Validating melodies while recording (low latency). | Editing after recording. |
| **Harmony** | Generating 4-part MIDI harmonies from one vocal. | Creating harmonies manually by copy-pasting blobs. |
| **Drift** | Gently nudging a good singer to be perfect. | Fixing a singer who is wildly off-key. |

## 🎧 Context: Hip-Hop & R&B
In modern Rap/R&B, Pitcher is not just a correction tool; it is a **Timbre** tool.
1.  **Hard Tuning:** The "Sound of Rap". Retune Speed set to fasting setting. It removes the "Human" vibrato and slide between notes.
2.  **Gender Bending:** Using the **Formant** knob to make a male voice sound deeper (A$AP Rocky) or higher (Carti) while staying in key.
3.  **Live Chords:** Playing a chord on a MIDI keyboard to turn a single rapper into a choir instantly (Francis and the Lights / Bon Iver style).

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

Pitcher is divided into Detection (Input), Correction (Middle), and Harmonization (Output).

### 1. The Detection & Scale (Left)
*   **Min Freq:** Sets the floor. If you have a deep bass voice, lower this.
*   **Scale:** The most important button. Selects which notes are "Allowed". (e.g., Minor, Major, Pentatonic).
*   **Keyboard:** Visualizes valid notes. You can click these keys to turn specific notes ON or OFF manually.

### 2. The Correction Engine (Center Knobs)
*   **Speed (Retune):** How fast the correction happens.
    *   *Fast:* Robotic.
    *   *Slow:* Natural (Sliding).
*   **Fine:** Adjusts the global tuning in cents (if the beat is slightly off 440Hz).
*   **Formant:** Preserves or shifts the vocal character (Throat Size).

### 3. The Harmonizer (Right / MIDI Mode)
*   **MIDI Button:** Activates MIDI Input Mode. This disables the "Automatic Scale" and listens to your MIDI Keyboard instead.
*   **Octave Button:** Adds an automatic sub-octave or high-octave voice.
*   **Stereo Spread:** Pans the harmony voices left/right.

## 🚦 Internal Signal Flow

1.  **Input:** Monophonic Audio (Voice).
2.  **Detection:** Engine estimates the pitch (Hz).
3.  **Target:** Engine compares Input Pitch to Selected Scale (or MIDI Note).
4.  **Correction:** Engine shifts pitch towards Target at rate of "Speed".
5.  **Formant:** Engine corrects timbre shift (if Formant enabled).
6.  **Harmony:** Copies signal, pitches to harmony targets, pans them.
7.  **Output:** Mix of correct Lead + Harmonies.

## ⚠️ Common Misunderstandings
*   **"It sounds wobbly."**
    *   *Correction:* You selected the wrong Scale. If you sing a C# but the Scale is C Major (no sharps), Pitcher will frantically snap you between C and D.
*   **"MIDI Mode isn't working."**
    *   *Correction:* You must set the **Input Port** on Pitcher's wrapper settings to match the **Output Port** of a MIDI Out channel. It is not automatic.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Prismizer" Chord (MIDI Mode)
*   **Context:** Creating the Bon Iver / Francis and the Lights "Vocal Choir" effect.
*   **Move:**
    1.  Switch Pitcher to **MIDI Mode**.
    2.  Set Retune Speed to **Fast**.
    3.  Create a **MIDI Out** channel. Set Port to 5.
    4.  Set Pitcher Input Port to 5.
    5.  Play a chord on the MIDI Out channel while singing a single sustained note.
*   **Result:** Your voice explodes into a chord.

### 2. The "Ghost" Double
*   **Context:** Thickening a lead vocal without it sounding corrected.
*   **Move:**
    1.  Put Pitcher on a Send track (not Insert).
    2.  Set Speed to **Slow** (40ms+).
    3.  Set Scale: Major/Minor.
    4.  Mix in the Send track at -15dB.
*   **Result:** The lead is natural/raw, but the background has a perfectly tuned "Ghost" supporting it.

### 3. The "Formant Drop" Ad-Lib
*   **Context:** Travis Scott vibes.
*   **Move:**
    1.  Turn on **Formant**.
    2.  Turn the Formant knob down (Left).
    3.  Sing high-energy ad-libs ("Yeah!", "It's Lit!").
*   **Result:** You sound like a big monster but with high energy.

## 👂 What to Listen For
*   **Warbling:** Fast fluctuations when holding a note.
    *   *Fix:* Your singing is drifting too far between two valid notes. Increase Retune Speed (slower) or deselect the wrong note on the keyboard UI.
*   **Clicks (Sibilance):** "S" and "T" sounds getting pitched.
    *   *Fix:* Pitcher hates noise. Use a De-Esser *before* Pitcher to calm down the sibilance so Pitcher focuses on the tone.

## 🛑 Common Pitfalls
1.  **Wrong Key:** There is no "Auto" key detection. You MUST know the key of your beat. Use **Wave Candy** or Google to find it.
2.  **Too Fast:** If Speed is on "Fast" (Left), you lose all emotional slide in the voice. Only do this for the "Effect". For singing, back it off to ~20ms.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Pitcher

How to tune the "Vibe" using correction speed.

## 🌑 Moody (Trap / Emo Rap)
*   **The Goal:** Sad, cold, precise robot.
*   **The Levers:**
    1.  **Scale:** Minor.
    2.  **Speed:** Fast (Robotic).
    3.  **Formant:** Neutral.
    4.  **Result:** The classic "Juice WRLD" sound. The perfection highlights the sadness of the lyrics.

## ☀️ Upbeat (Pop / Hyperpop)
*   **The Goal:** Bright, perfect, shiny.
*   **The Levers:**
    1.  **Scale:** Major / Pentatonic Major.
    2.  **Speed:** Medium-Fast (Retain *some* slide, but mostly perfect).
    3.  **Formant:** Shift +10 cents (Slightly brighter/younger).
    4.  **Result:** Radio-ready polish.

## 🍄 Psychedelic (Trippy)
*   **The Goal:** Uncanny valley harmonies.
*   **The Levers:**
    1.  **Mode:** MIDI.
    2.  **Chords:** Play Jazz chords (7ths, 9ths) against a simple melody.
    3.  **Result:** The voice bends into impossible shapes, creating a "melting" feeling.

## 🎷 Jazzy (Natural)
*   **The Goal:** Invisible correction.
*   **The Levers:**
    1.  **Speed:** Slow (50ms+).
    2.  **Scale:** Chromatic (Allow all notes, just nudge the center).
    3.  **Result:** The singer sounds like themselves, just on a "Good Day".

## 🌊 Vibey (Lo-Fi)
*   **The Goal:** Drifting, imperfect.
*   **The Levers:**
    1.  **Fine Tune:** Automate an LFO to wiggle Fine Tune +/- 15 cents.
    2.  **Speed:** Very Slow.
    3.  **Result:** The "Correction" fights the "Detune", creating a wobbly tape effect.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes to Tuned Vocals

1.  **Insert:** Place Pitcher on the Vocal track (First slot usually).
2.  **Key:** Determine song key (e.g., C Minor).
    *   Click "Minor" button.
    *   Click "C" on the keyboard.
3.  **Speed:**
    *   For **Rap/Trap**: Turn Speed knob to "Fast" (Left).
    *   For **Singing**: Turn Speed knob to "Medium" (Center).
4.  **Listen:** Even one wrong note in the scale settings will ruin the take. If you hear a "weird" note, find it on the keyboard graphic and click it to disable it (Red X) or enable it.

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes & Fixes

| Mistake | Symptom | The Fix |
| :--- | :--- | :--- |
| **Wrong Key** | Voice jumps wildly to bad notes. | Use **Wave Candy** (Spectrum) to find the root note of your beat. Or just trial and error until it sounds stable. |
| **Too Fast** | Singer sounds like T-Pain (when you didn't want that). | Turn **Retune Speed** to the Right (Slower). |
| **Placement** | Pitcher is struggling with Reverb tails. | Pitcher must go **FIRST** in the chain. Never put Pitcher after Reverb/Delay. It needs a dry signal to detect pitch. |
| **MIDI Silence** | MIDI Mode is on but no sound. | In MIDI mode, Pitcher silences audio *until* you play a MIDI note. If you stop playing, it mutes. |
| **Scale Limits** | "I can't hit the high note!" | Pitcher doesn't *extend* your range, it only *tunes* what you sing. You still have to hit the note roughly. |

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points

## 1. Rap / Trap (Hard Tune)
*   **Scale:** Minor.
*   **Speed:** fast (100%).
*   **Minimum Freq:** 110Hz (Male).
*   **Fine:** 0 cents.

## 2. Pop Ballad (Transparent)
*   **Scale:** Major.
*   **Speed:** Medium-Slow (30-50%).
*   **Formant:** ON (Keeps timbre consistent).
*   **Fine:** 0 cents.

## 3. The "Deep" Ad-Lib
*   **Scale:** Chromatic (Does not matter much for texture).
*   **Speed:** Fast.
*   **Formant:** ON.
*   **Formant Shift:** -12 to -24 cents (Left).

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Settings: MOODY

**Target:** Emotional, Raw, Honest.

## The Recipe
1.  **Scale:** **Minor** (Essential).
2.  **Speed:** **Medium** (Let the "cry" in the voice come through).
3.  **Automation:**
    *   Automate **Retune Speed**.
    *   *Verse:* Slow (Natural).
    *   *Chorus/High Note:* Fast (Perfect).
    *   This contrast creates emotional impact.
4.  **Harmony:** Turn on "Octave" (Low) very subtly (-18dB) to add weight.

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Settings: Upbeat / Psych / Jazzy / Vibey

## ☀️ UPBEAT (Pop)
*   **Scale:** Major.
*   **Speed:** Fast.
*   **Formant:** +5 cents (Bright).
*   **Stereo Check:** Ensure the vocal is dead center. Pitcher does not affect stereo width unless you use the Harmonizer panning.

## 🍄 PSYCHEDELIC (Vocoder-ish)
*   **Mode:** MIDI.
*   **Chords:** Play sustained pads.
*   **Speed:** Fast.
*   **Result:** Instantly turns the vocal into a synth pad.

## 🎷 JAZZY (Complex)
*   **Scale:** Custom.
*   **Workflow:** Manually click notes on the keyboard to create a specific Jazz mode (e.g., Dorian or Mixolydian) that fits the chord changes.
*   **Speed:** Slow.

## 🌊 VIBEY (Lo-Fi)
*   **Trick:** Use **Music Mode** (wait, Pitcher doesn't have music mode)?
*   **Actually:** Use Pitcher to correct vaguely, then put **Fruity Vinyl** *after* it to detune it again. The contrast between "trying to be perfect" and "tape wobble" is the key to Lo-Fi vocals.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Pitcher Parameter Dictionary

| Parameter | Type | Range | Description | Vibe Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Retune Speed** | Knob | Slow-Fast | Correction rate latency. | **CRITICAL** (Robot vs Human) |
| **Fine Tune** | Knob | +/- 100 ct | Global pitch offset. | **Low** (Calibration) |
| **Formant** | Switch | On/Off | Enables timbre correction. | **High** (Naturalness) |
| **Min Freq** | Slider | Hz | Bass detection floor. | **Low** (Detection accuracy) |
| **MIDI** | Switch | Auto/MIDI | Input mode selector. | **CRITICAL** (Correct vs Harmonize) |
| **Octave** | Switch | On/Off | Adds sub/high octave voices. | **Medium** (Thickness) |
| **Harmonize** | Switches | 1-4 | Enables specific harmony voices. | **High** (Chords) |
| **Pan** | Slider | L/R | Pans harmony voices. | **Medium** (Width) |

```

---

## FILE: 02-Data\presets\00_Workflow_Preset_Strategy.md

```markdown
# Workflow & Preset Strategy: Pitcher

## 💾 The "Starting 3" Strategy
Unlike synths, Pitcher presets are risky because they save the **KEY**. If you load a "C Minor" preset on a "F Major" beat, it sounds terrible.
Instead of presets, use **Drag & Drop** states or Patcher templates.

### 1. "The Monitor" (Low Latency)
*   **Settings:** Speed Fast, Formant OFF.
*   **Use:** For the recording artist to hear themselves tuned in headphones. Pitcher is very low CPU, making it perfect for monitoring.

### 2. "The Fixer" (Post-Production)
*   **Settings:** Speed Medium, Formant ON.
*   **Use:** For the mixing engineer to tighten up a take.

### 3. "The Choir" (MIDI Template)
*   **Settings:** MIDI Mode ON, Harmony Voices 1-4 ON, Panned L/R/L/R.
*   **Routing:** Pre-routed to a MIDI Out channel in Patcher.
*   **Use:** Instant vocal chords.

## 📂 Taxonomy
Save Patcher presets, not just Pitcher presets, so you can save the Routing:
*   `User/Vocal/Auto-Tune Basic`
*   `User/Vocal/MIDI Harmonizer`

```

---

## FILE: 02-Data\rules\00_Do_Dont_Rules.md

```markdown
# Operational Rules: Do's and Don'ts

| Action | Verdict | Reason |
| :--- | :--- | :--- |
| **Guess the Key** | 🛑 **STOP** | Never guess. A single wrong note makes the singer sound tone-deaf. Find the key first. |
| **Pitcher after Reverb** | 🛑 **STOP** | Pitcher needs a clean, monophonic signal to detect pitch. Reverb smears pitch. Place Pitcher **first**. |
| **Print to Audio** | ✅ **DO** | Once you are happy with the tuning, consolidate the track. This saves CPU and prevents accidental key changes later. |
| **Automate Speed** | ✅ **DO** | Don't leave Speed static. Automate it to be looser on verses and tighter on choruses for dynamic range. |

```

---

## FILE: 02-Data\rules\01_Troubleshooting_Matrix.md

```markdown
# Troubleshooting Matrix

| Symptom | Probable Cause | The Fix |
| :--- | :--- | :--- |
| **"It's warbling / bubbling"** | Detecting noise or wrong scale. | 1. Use a Gate/De-Esser before Pitcher. 2. Verify Scale. 3. Slow down Retune Speed. |
| **"No Sound"** | MIDI Mode enabled. | If MIDI button is ON, you MUST play a note to hear sound. Turn MIDI button OFF for auto-mode. |
| **"Sounds like a Chipmunk"** | Formant shifting. | Check the **Formant** knob. Double click to reset to center. |
| **"Harmony is mono"** | Stereo separation off. | Use the Pan sliders on the right side of the Pitcher UI to spread the voices. |
| **"Not tuning at all"** | Bypass or Scale Chromatic. | Check if the plugin is bypassed or if Scale is set to "Chromatic" (which allows all notes, effectively doing nothing for bad singers). |

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B

## 1. The "Trap" Aesthetic
*   **Rule:** The tuning *is* the instrument.
*   **Implementation:** Speed must be FAST. Minor Scale. This creates the "staircase" pitch moves that define the genre.

## 2. The "Soul" Sample Fix
*   **Rule:** Old samples are never perfectly 440Hz.
*   **Implementation:** If you are sampling an old soul record, use the **Fine Tune** knob on Pitcher to match the plugin to the sample, not the other way around. Or tune the sample first.

## 3. The "Group" Hook
*   **Rule:** Hooks need width.
*   **Implementation:** Record the hook 3 times.
    *   Take 1: Center, Pitcher Fast.
    *   Take 2: Pan Left, Pitcher Slow (Natural rub).
    *   Take 3: Pan Right, Pitcher Medium.
    *   Result: Thick, professional-sounding chorus.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Workflow: Auto-Tune Setup

**Goal:** Quick rap vocal chain.

1.  **Insert:** Pitcher on Slot 1.
2.  **Detection:** Set Min Freq to ~100Hz (Male).
3.  **Scale:** Set to **Minor** (Most Trap beats are Minor).
4.  **Key:** Click the Root Note of your beat (e.g., C#).
5.  **Speed:** Crank it.
6.  **Check:** Play the vocal. If it sounds "sour" on one note, look at the keyboard. See which note lights up when it sounds bad. Click that note to disable it (force it to next neighbor).

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Sound_Design.md

```markdown
# Workflow: The MIDI Choir

**Goal:** Play your voice like a synth.

1.  **Channel:** Add a **MIDI Out** generator to the Channel Rack.
2.  **Config:** Set MIDI Out -> Port 10.
3.  **Plugin:** Open Pitcher -> Wrapper Settings (Cog) -> Input Port -> 10.
4.  **Mode:** Click **MIDI** button on Pitcher Main UI.
5.  **Setup:** Enable buttons "Harmonize 1", "2", "3", "4".
6.  **Play:** Sing a long note ("Ahhhh"). Play chords on your MIDI keyboard.
7.  **Result:** Instant Imogen Heap / Bon Iver.

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Mix_Or_Control.md

```markdown
# Workflow: Natural Correction

**Goal:** Tune a singer without them knowing.

1.  **Speed:** Set to **Slow** (Center or slightly right).
2.  **Bypass:** Automate the **Mix Level** knob.
3.  **Method:**
    *   Leave Pitcher at 0% Mix (OFF) for most of the song.
    *   When the singer hits that *one* sustained high note that drifts flat...
    *   Automate Mix to 100% just for that note.
    *   Then fade back to 0%.
4.  **Result:** The performance feels 100% human, because it IS human, except for where you saved them.

```

---

## FILE: 03-Workflows\by-goal\10_Vibe_Moody.md

```markdown
# Vibe Workflow: MOODY (Pain Rap)

**Context:** Using tuning artifacts for emotion.

1.  **Speed:** Fast.
2.  **Scale:** Minor.
3.  **Technique:** Sing slightly *slurred* on purpose.
    *   When you slide between notes, Pitcher fights you, creating a "Step" artifact.
    *   Emphasize these steps on emotional words.
4.  **FX:** Add High-Pass filter *after* Pitcher to thin it out, making it sound fragile.

```

---

## FILE: 03-Workflows\by-goal\11_Vibe_Upbeat.md

```markdown
# Vibe Workflow: UPBEAT (Hyperpop)

**Context:** Maximum energy.

1.  **Formant:** Turn ON. Shift UP (+12 cents).
2.  **Speed:** Max Fast.
3.  **Voices:** Turn on **Octave** (High).
4.  **Mix:** Blend the High Octave at -6dB.
5.  **Result:** A sparkling, high-energy vocal stack that sounds synthetic and expensive.

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe Workflow: PSYCHEDELIC (Drifting)

**Context:** Dreamy breakdown.

1.  **Setup:** MIDI Mode.
2.  **Pattern:** Write a MIDI arpeggio (fast bubbling notes).
3.  **Input:** Sing a long, flat monotone note.
4.  **Result:** Your voice breaks apart into a bubbling arpeggio, like a synthesizer. Add Delay for trails.

```

---

## FILE: 03-Workflows\by-goal\13_Vibe_Jazzy.md

```markdown
# Vibe Workflow: JAZZY (Extensions)

**Context:** Adding color notes to a vocal.

1.  **Mode:** MIDI.
2.  **Chord:** Play a Major 9th chord on MIDI (Root, 3, 5, 7, 9).
3.  **Balance:**
    *   Pan Root: Center.
    *   Pan 3rd/7th: Left.
    *   Pan 9th: Right.
4.  **Result:** A lush, wide jazz choir that follows your lead voice.

```

---

## FILE: 03-Workflows\by-goal\14_Vibe_Vibey.md

```markdown
# Vibe Workflow: VIBEY (The "Hum")

**Context:** Background hums.

1.  **Filter:** Low Pass input vocal to < 500Hz.
2.  **Pitcher:** Set to Key. Speed Slow.
3.  **Reverb:** 100% Wet, Huge Hall.
4.  **Result:** A tuned "sub-bass" vocal pad that sits under the beat.

```

---

## FILE: 03-Workflows\by-instrument\Vocals_MIDI.md

```markdown
# Workflow: Vocals & MIDI

## 1. The Live Performance Setup
**Context:** Performing with instant pitch correction.
*   **Latency:** Set ASIO buffer to < 128 samples (Essential).
*   **Plugin:** Pitcher on Input Track.
*   **Monitor:** Enable "monitor external input".
*   **Result:** You hear the corrected version in headphones, giving you confidence to hit notes you might be unmatched for.

## 2. Converting Pitch to MIDI
**Context:** Turning your voice into a synth line.
*   *Note:* Pitcher does **NOT** export MIDI (Newtone does that).
*   *Method:* However, you can use Pitcher to *hear* the melody, then replicate it on a keyboard.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

| ID | Source Name | Type | Key Information Derived |
| :--- | :--- | :--- | :--- |
| **IL-MAN** | Image-Line Official Manual | Primary | UI Map, Harmonic panning, Port routing logic. |
| **TRAP-PROD** | Genre Analysis | Empirical | Fast retune speed usage, Formant shifting for ad-libs. |

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Official Links

*   **Plugin Manual:** [Image-Line Pitcher](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Pitcher.htm)

```

---

## FILE: 04-Reference\02_Coverage_Checklist.md

```markdown
# Coverage Checklist

## Learning
- [x] Mental Model (Magnetic Grid)
- [x] UI Map (Correction vs Harmonizer)
- [x] Core Techniques (MIDI Mode, Ghost Double)
- [x] Vibe Translation (5 Vibes Mapped)

## Data
- [x] Parameters (Speed, Fine, Formant)
- [x] Presets Strategy (Starting 3)
- [x] Rules (Key Selection, Placement)

## Workflows
- [x] Quick Rap Chain
- [x] MIDI Choir
- [x] Natural Correction
- [x] Moody Vibe
- [x] Upbeat Vibe
- [x] Psych Vibe
- [x] Jazzy Vibe
- [x] Vibey Vibe
- [x] Live Setup

## Reference
- [x] Sources
- [x] Links
- [x] Style Board

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Hip-Hop & R&B

How Pitcher defines the sound of modern genres.

## 1. The "T-Pain" Blueprint (2000s)
*   **Signature:** Hard tuning, slight vibrato.
*   **Recipe:** Major Scale, Speed 100%, Vibrato Knob ON.

## 2. The "Migos" Triplet Flow (2010s)
*   **Signature:** Percussive, on-tone rap.
*   **Recipe:** Minor Scale, Speed 100%. The correction emphasizes the rhythm of the triplets by snapping each syllable to grid.

## 3. The "Bon Iver" Prismizer
*   **Signature:** Massive digital choir.
*   **Recipe:** MIDI Mode. Playing 5-note chords. Wide panning.

## 4. The "Hyperpop" Gender Bender
*   **Signature:** Androgynous, shiny vocals.
*   **Recipe:** Formant Shift UP + Pitch Correction.

```

---

