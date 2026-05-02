# Fruity Equo - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use

Fruity Equo is a high-performance, 32-band graphic equalizer plugin for FL Studio. Unlike standard parametric EQs, Equo provides a fixed set of frequency bands that can be controlled as a group or individually, offering a more "sculptural" approach to tonal shaping.

## Core Identity
Equo is designed for broad tonal adjustments and creative filtering rather than surgical precision. Its strength lies in its ability to quickly "draw" EQ curves and interpolate between different EQ states.

## When To Use It
- **Broad Tonal Balancing**: Quickly tilting the overall frequency balance of a sound.
- **Creative Filtering**: Using the 32 bands to create complex filter shapes that would be tedious with parametric nodes.
- **Spectral Panning**: Using the "Pan" mode to distribute different frequencies across the stereo field.
- **Morphing/Interpolation**: Using the "Target" and "Interpolate" features to move between different EQ curves over time.
- **Visual Feedback**: When you need a clear, vertical-bar representation of the frequency spectrum.

## When NOT To Use It
- **Surgical Notching**: Use Fruity Parametric EQ 2 for removing specific resonant frequencies or narrow-band interference.
- **Low CPU Overhead**: While efficient, standard filters are lighter if you only need a simple high-pass or low-pass.
- **Phase-Critical Mastering**: Linear phase EQs are often preferred for mastering to avoid phase shifting at crossover points.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow

Fruity Equo's interface is divided into several functional zones that dictate how the 32 frequency bands behave.

## 1. The Main Display (The Bars)
- **32 Frequency Bands**: These represent the gain levels for fixed frequency ranges across the audible spectrum.
- **Left-Click & Drag**: Draw a curve across the bands.
- **Right-Click**: Reset a band to zero.

## 2. Mode Selectors (Bottom Left)
- **VOL (Volume)**: Default mode. The sliders control the gain of each band.
- **PAN (Panning)**: The sliders control the stereo placement of each band. This allows for "spectral panning."
- **SEND**: Controls how much of each band is sent to the designated Send track (if configured).

## 3. Global Controls (Right Side)
- **Master Gain**: Offsets the overall output level.
- **Interpolate**: Morph between the current curve and the "Target" curve.
- **Smooth**: Applies smoothing to the drawn curve to avoid harsh transitions between bands.

## 4. Preset/Bank Management
- **Target Bank**: You can store different curves in banks and interpolate between them using the slider.

## Signal Flow
1. **Input Signal**: Audio enters the plugin.
2. **Band Splitting**: The signal is divided into 32 discrete frequency bands.
3. **Gain/Pan Processing**: Each band is scaled based on the VOL/PAN sliders.
4. **Summing**: The processed bands are recombined.
5. **Output**: The final mixed signal exits the plugin.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices

Mastering Fruity Equo requires understanding its unique "drawing" workflow and its dual-mode capability.

## Drawing Techniques
- **Smooth Curves**: Hold `Shift` while drawing to constrain movements or use the `Smooth` knob to iron out jagged peaks.
- **Group Edits**: Click and drag across multiple bands to shape large sections of the spectrum at once.
- **Resetting**: Right-click on a band to snap it back to 0dB. To reset all bands, use the "Reset" option in the plugin menu.

## Spectral Panning (The Secret Weapon)
One of Equo's most powerful features is the **PAN mode**. 
1. Switch the mode to **PAN**.
2. Draw a curve where some bands are panned left and others right.
3. This creates a massive sense of width without the phase issues often associated with "widener" plugins.
- **Pro Tip**: Pan lower frequencies (bass/kick) to the center and gradually spread higher frequencies (snares/hats) outward.

## Taming Resonances
While not surgical, Equo can be used to "tilt" a sound. If a vocal is too "boxy," try dipping the 300Hz-500Hz range across 3-4 bands in a gentle arc.

## Interpolation for Motion
Use the **Target Bank** feature to create a "Dark" EQ on Bank 1 and a "Bright" EQ on Bank 2. Automate the **Interpolate** knob to create a custom, multi-band filter sweep that sounds much more organic than a simple low-pass filter.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide

How to translate creative goals into Equo settings.

| Desired Vibe | Frequency Action | Bands to Focus On |
| :--- | :--- | :--- |
| **Airy / Shimmering** | Gentle boost | 10kHz - 20kHz |
| **Punchy / Aggressive** | Boost | 2kHz - 5kHz |
| **Warm / Analog** | Gentle low-mid boost, High-end roll-off | 200Hz - 600Hz, 12kHz+ |
| **Dark / Lo-Fi** | Heavy high-end cut | 5kHz and above |
| **Wide / Immersive** | Alternate Panning left/right | All bands (PAN mode) |
| **Muddy / Boxy (Fix)** | Cut | 250Hz - 500Hz |
| **Harsh / Piercing (Fix)** | Cut | 2kHz - 4kHz |

## Vibe Check: The "Smile" Curve
The classic "Smile" curve (boosting lows and highs, cutting mids) works exceptionally well in Equo because of the 32 bands. It provides a more nuanced "hifi" sound than a standard 3-band shelf.

## Creative Vibe: The "Comb" Filter
Draw a series of alternating "spikes" (one up, one down) across the spectrum. In Equo, this creates a unique, metallic, or "combed" texture that can be automated for robotic vocal effects.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes to Master Equo

Fruity Equo is fast. Here’s how to use it immediately.

## 1. Tonal Shaping (30 Seconds)
1. Load **Fruity Equo** on your mixer track.
2. Click and drag across the 32 bands to draw an EQ curve.
3. Up = Boost, Down = Cut.
4. If you don't like it, right-click to reset individual bands.

## 2. Spectral Panning (60 Seconds)
1. Switch the mode button (bottom left) to **PAN**.
2. Draw a "mountain" in the middle of the display.
3. Your sound is now wider in the mids and mono in the lows/highs.
4. Switch back to **VOL** to see your volume curve again—they are independent!

## 3. The Smoothing Secret (30 Seconds)
1. Draw a very jagged, messy curve.
2. Turn the **Smooth** knob (right side) up.
3. Watch the bars automatically "average" out for a more musical sound.

## 4. Interpolation Morphing (2 Minutes)
1. Set up a curve in **Bank 1**.
2. Click the **2** button above the display to switch to Bank 2.
3. Draw a completely different curve.
4. Move the **Interpolate** slider between 1 and 2 to morph between your two different EQ settings.

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes with Fruity Equo

Avoid these pitfalls to keep your mixes clean.

## 1. Over-correction
Because it's so easy to "draw" in Equo, users often draw extreme 12dB+ boosts or cuts.
- **Fix**: Use the `Smooth` knob to reduce the intensity, or try to achieve your goal with 3-4dB adjustments.

## 2. Forgetting the Mode
Users often draw in **PAN** mode thinking they are in **VOL** mode.
- **Symptom**: The sound doesn't change in volume, but it starts sounding "weird" or "tilted" in the speakers.
- **Check**: Always check the highlight on the VOL/PAN/SEND buttons.

## 3. Ignoring Phase Shift
Equo is a minimum-phase graphic EQ. Heavy adjustments create phase shifts at the band crossovers.
- **Fix**: Avoid using Equo for critical mastering if you need absolute phase transparency. For mixing individual tracks, it's usually fine.

## 4. Excessive Smoothing
Turning `Smooth` to 100% can make the EQ ineffective by flattening out all your intentional peaks.
- **Fix**: Use smoothing as a "polishing" step, not a default setting. 10-20% is usually enough.

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings & Starting Points

Use these as a base for your sculpting.

## The "Hifi" Smile
- **Lows (20Hz-150Hz)**: 3dB Gentle Boost
- **Mids (400Hz-2kHz)**: 2dB Gentle Dip
- **Highs (5kHz-20kHz)**: 4dB Smooth Boost
- **Result**: Modern, "expensive" sounding frequency balance.

## The "Radio" Effect
- **Lows (0Hz-400Hz)**: Complete Cut
- **Highs (5kHz-20kHz)**: Complete Cut
- **Mids (1kHz-3kHz)**: 6dB Peak
- **Result**: Thin, "telephone" or "AM radio" vibe.

## Transparent Wide (PAN Mode)
- **Low-Mids**: Pan 10% Left
- **Mids**: Pan 10% Right
- **High-Mids**: Pan 20% Left
- **Highs**: Pan 20% Right
- **Result**: Adds stereo separation without changing the tonal balance or creating phase issues.

## Sub-Bass Protector
- **0Hz-40Hz**: Sharp Cut
- **40Hz-80Hz**: 2dB Boost
- **Result**: Removes mud while emphasizing the "thump" of the sub.

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Equo: The Morphing Graphic EQ

> **Scope:** Creative EQ, Live Performance, and Frequency Splitting.
> **Source:** Internal Knowledge (Manual URL unavailable).
> **Complexity:** Medium (Routing).

## 🧠 The "Motion" Concept
Equo is not for surgical mixing (use PEQ2 for that). Equo is for **Movement**.
*   **Architecture:** A Graphic EQ with 8 separate Banks.
*   **Morph:** You can smoothly crossfade between these 8 banks using the **Morph** knob.
*   **Vol/Pan:** Each frequency band has its own Volume AND Panning slider.

**Signal Flow:**
`Input` -> **[BAND SPLIT]** -> **[VOL/PAN PER BAND]** -> **[SENDS]** -> **[MORPH INTERPOLATION]** -> **[SUM]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Morph Knob

The heart of Equo.
*   **Setup:**
    *   Select Bank 1. Draw a "Low Pass" curve.
    *   Select Bank 2. Draw a "High Pass" curve.
*   **Perform:** Automate the **Morph** knob from 0 to 1/8.
*   **Result:** The EQ shape fluidly transforms from LP to HP. This allows for complex filter sequences that are impossible with standard parametrics.

---

## 🔁 Section 2: Frequency Splitting (The Send Matrix)

Equo can route specific bands to other mixer tracks.
*   **How:** In the **Send** section (top right?).
*   **Action:** You can tell the "Low Bands" to go to Send 1, and "High Bands" to go to Send 2.
*   **Application:**
    *   Distort the Highs (Send 2) while keeping the Lows clean (Send 1).
    *   This makes Equo a powerful **Multi-Band Splitter**.

---

## ⚡ Technical Specs: The Shift Knob

*   **Function:** Moves the center frequencies of the bands up or down.
*   **Effect:**
    *   *Static EQ:* It changes the timbre.
    *   *Dynamic:* Automating "Shift" creates a **Shepard Tone** or Phaser-like effect as the gaps between bands sweep through the spectrum.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Talkbox" Vowel Filter
1.  **Bank 1:** Boost Low-Mids ("Ooo").
2.  **Bank 2:** Boost High-Mids ("Aaa").
3.  **Bank 3:** Boost Highs ("Eee").
4.  **Action:** Quickly automate the Morph knob between 1-3.
5.  **Result:** The spectral footprint mimics the human vocal tract changing shape.

### 2. Stereoizer EQ
1.  **Concept:** Pan different frequencies to different ears.
2.  **Action:**
    *   Draw a "Zig-Zag" pattern in the **Pan** graph (toggle from Vol to Pan).
    *   Low bands Left, Mid bands Right, High bands Left.
3.  **Result:** Creates a wide, spacious image that doesn't collapse phase like delay-based wideners.

### 3. Cleaning Mud
1.  **Usage:** Put Equo on the Master.
2.  **Analyze:** Watch the background display.
3.  **Action:** Identify the muddy frequency accumulation.
4.  **Cut:** Drag that specific band down. Because it's a Graphic EQ, it's very fast to "draw" the tonal balance you want.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary

| Parameter | Type | Range | Description |
| :--- | :--- | :--- | :--- |
| **Band Sliders (1-32)** | Level | -Inf to +12dB | Sets the gain/pan/send level for the specific frequency band. |
| **VOL Mode** | Toggle | On/Off | Enables Volume editing for the bands. |
| **PAN Mode** | Toggle | On/Off | Enables Panning editing for the bands. |
| **SEND Mode** | Toggle | On/Off | Enables Send amount editing for the bands. |
| **Master Gain** | Offset | 0% to 100% | Global volume multiplier for the plugin output. |
| **Interpolate** | Morph | Bank 1 to Bank 8 | Morphs between the EQ curves stored in the different banks. |
| **Smooth** | Processing | 0% to 100% | Controls the "stiffness" of the curve, averaging adjacent bands. |
| **Bandwidth (Internal)** | Fixed | N/A | Each band has a fixed width based on a 32-band log scale. |
| **Mute** | Switch | On/Off | Mutes the plugin output. |

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Equo",
  "category": "Equalizer / Filter",
  "parameters": [
    {
      "section": "Shape",
      "id": "morph",
      "name": "Morph",
      "range": { "min": 1, "max": 8, "unit": "BankIndex" },
      "description": "Blends between the 8 EQ bank states."
    },
    {
      "section": "Shape",
      "id": "shift",
      "name": "Band Shift",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Offsets the frequency centers of all bands."
    },
    {
      "section": "Shape",
      "id": "mix",
      "name": "Mix",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Dry/Wet blend of the EQ processing."
    },
    {
      "section": "Band",
      "id": "vol",
      "name": "Band Volume",
      "range": { "min": -18, "max": 18, "unit": "dB" },
      "description": "Gain per frequency band."
    },
    {
      "section": "Band",
      "id": "pan",
      "name": "Band Pan",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Panning per frequency band."
    },
    {
      "section": "Routing",
      "id": "send",
      "name": "Send Amount",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Sends selected bands to auxiliary tracks."
    }
  ]
}

```

---

## FILE: 02-Data\presets\bright-and-clear.json

```json
{
  "presetName": "Bright and Clear",
  "plugin": "Fruity Equo",
  "description": "Enhances clarity and air while maintaining a clean low end.",
  "settings": {
    "mode": "VOL",
    "masterGain": 1.0,
    "smooth": 0.15,
    "bands": {
      "lows": -1.0,
      "lowMids": -2.0,
      "mids": 0.0,
      "highMids": 2.5,
      "highs": 4.0,
      "air": 6.0
    }
  },
  "usage": "Best for dull vocals, acoustic guitars, or overheads."
}

```

---

## FILE: 02-Data\presets\gentle-master-smile.json

```json
{
  "presetName": "Gentle Master Smile",
  "plugin": "Fruity Equo",
  "description": "A subtle 'V' shape for the master bus to add final polish.",
  "settings": {
    "mode": "VOL",
    "masterGain": 1.0,
    "smooth": 0.4,
    "bands": {
      "lows": 1.5,
      "mids": -1.0,
      "highs": 2.0
    }
  },
  "usage": "Use as a final touch on the master track to make the mix sound finished."
}

```

---

## FILE: 02-Data\presets\low-end-punch.json

```json
{
  "presetName": "Low End Punch",
  "plugin": "Fruity Equo",
  "description": "Focuses energy on the fundamental bass frequencies while cutting mud.",
  "settings": {
    "mode": "VOL",
    "masterGain": 1.0,
    "smooth": 0.1,
    "bands": {
      "sub": 3.0,
      "thump": 4.5,
      "mud": -3.0,
      "mids": -1.0,
      "highs": 0.0
    }
  },
  "usage": "Best for kicks and bass synths that need more presence in the low end."
}

```

---

## FILE: 02-Data\presets\radio-effect.json

```json
{
  "presetName": "Radio Effect",
  "plugin": "Fruity Equo",
  "description": "Aggressive band-pass filtering for a lo-fi telephonic sound.",
  "settings": {
    "mode": "VOL",
    "masterGain": 0.8,
    "smooth": 0.0,
    "bands": {
      "lows": -100.0,
      "mids": 6.0,
      "highs": -100.0
    }
  },
  "usage": "Creative effect for intros or bridge sections."
}

```

---

## FILE: 02-Data\presets\spectral-width.json

```json
{
  "presetName": "Spectral Width",
  "plugin": "Fruity Equo",
  "description": "Pans different frequencies across the stereo field for massive width.",
  "settings": {
    "mode": "PAN",
    "masterGain": 1.0,
    "smooth": 0.3,
    "bands": {
      "lows": 0.0,
      "lowMids": -0.2,
      "mids": 0.2,
      "highMids": -0.4,
      "highs": 0.4
    }
  },
  "usage": "Best for synth pads, background vocals, or sound effects."
}

```

---

## FILE: 02-Data\presets\vocal-presence.json

```json
{
  "presetName": "Vocal Presence",
  "plugin": "Fruity Equo",
  "description": "Targets the 'expensive' frequencies in a vocal performance.",
  "settings": {
    "mode": "VOL",
    "masterGain": 1.0,
    "smooth": 0.2,
    "bands": {
      "body": 0.0,
      "nasal": -1.5,
      "clarity": 2.0,
      "presence": 3.5,
      "air": 5.0
    }
  },
  "usage": "Apply to lead vocals to help them sit on top of a dense mix."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip Hop & RnB

Specific logic for applying Equo in Urban music.

## Rule 1: Respect the Sub
In Hip Hop, the sub-bass is king.
- **Action**: In Equo, ensure all bands below 30Hz are cut.
- **Reason**: Protects headroom for the 40Hz-60Hz fundamental.

## Rule 2: The Vocal Pocket
Vocals need to sit "inside" the beat.
- **Action**: On the main instrument bus, apply a 2dB dip in Equo between 1kHz and 3kHz.
- **Reason**: This creates a spectral "hole" for the vocal presence to occupy.

## Rule 3: Snare "Crack" vs. "Thud"
- **Action**: Boost 200Hz for "Thud" (90s Boom Bap), boost 3kHz for "Crack" (Modern Trap).
- **Reason**: Different sub-genres prioritize different parts of the snare's frequency profile.

## Rule 4: Samples & Mud
Old samples often have build-up in the low-mids.
- **Action**: Use Equo to "scoop" the 300Hz-500Hz range by 3-5dB.
- **Reason**: Makes the sample sound "sampled" but clean, rather than "muffled."

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Equo

## 1. Complex Analyzing

1.  **Mode:** Switch Equo to **Analyze** mode (if available/implied functionality).
2.  **Display:** The bars react to the input audio.
3.  **Use:** Use it as a secondary Spectrum Analyzer to spot which specific Graphic Band corresponds to a ringing frequency.

## 2. The "Riser" Builder

1.  **Input:** White Noise.
2.  **Setup:**
    *   Bank 1: All bands at 0 (Silence).
    *   Bank 8: All bands at Max (Loud).
    *   Bank 4: A peak in the middle.
3.  **Morph:** Automate Morph from 1 to 8 over 8 bars.
4.  **Shift:** Slowly automate Shift Up.
5.  **Result:** A complex, evolving riser that grows in volume and spectral complexity.

## 3. Multi-Band Distortion (Manual)

1.  **Routing:**
    *   Equo acts as the crossover.
    *   **Send Mode:** Send Lows to Track 1, Mids to Track 2, Highs to Track 3.
2.  **Processing:**
    *   Track 1 (Lows): Compress heavily.
    *   Track 2 (Mids): Add **Fruity Fast Dist**.
    *   Track 3 (Highs): Add **Fruity Reeverb 2**.
3.  **Result:** A pro-level sound design chain where effects are targeted to specific frequency content.

## 4. Interpolated Filter Sweeps

1.  **Goal:** A custom Low Pass Filter shape.
2.  **Bank 1:** Draw a Steep Low Pass.
3.  **Bank 2:** Draw a Gentle Low Pass.
4.  **Bank 3:** Draw a Resonant Low Pass (Peak at cutoff).
5.  **Morph:** Sweeping through these banks changes the *character* of the filter (Steepness/Resonance) dynamically. Standard filters usually only let you change Cutoff, not slope/shape in real-time.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Quick Result

When you need to fix a sound fast, follow these steps in Equo.

## The 3-Step Sculpt
1. **Identify the Problem**: Listen for mud (low-mids) or harshness (high-mids).
2. **Draw the Curve**: In **VOL** mode, gently pull down the bands in the problem areas.
3. **Smooth It Out**: Turn the **Smooth** knob to about 25% to make the transition between bands natural.

## The Instant Width Hack
1. Switch to **PAN** mode.
2. Click the "Randomize" option in the plugin settings (if available) or draw a jagged line.
3. Turn the **Smooth** knob up until the width feels stable but wide.

## The Master Tilt
1. Draw a straight line from the bottom left to the top right.
2. Use **Smooth** to make it a gentle ramp.
3. This "brightens" the entire mix or track in seconds.

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Shaping_And_Control.md

```markdown
# Goal: Shaping and Control

Advanced techniques for deep sound design.

## Multi-Bank Morphing
1. **Bank 1 (Standard)**: Your base EQ.
2. **Bank 2 (Filtered)**: High-end rolled off, mids boosted.
3. **Bank 3 (Resonant)**: Sharp peaks in the high-mids.
- **Workflow**: Automate the **Interpolate** slider in your playlist to move between these states during different song sections (e.g., Verse vs. Chorus).

## Spectral Cleaning
Use Equo's 32 bands to "mask" specific ranges. If you have two sounds clashing (like a synth and a vocal), draw a "dip" in the synth's Equo precisely where the vocal's fundamental frequencies are.

## Dynamic Panning
Automate the **PAN** button or the sliders in PAN mode to create a sound that "swirls" or changes its stereo image based on the frequency.

```

---

## FILE: 03-Workflows\by-instrument\bass.md

```markdown
# Instrument: Bass

Defining the low end with Equo.

## Sub Bass
- **Fundamental**: Boost the band matching your key (e.g., 40Hz-60Hz).
- **Upper Harmonics**: Small boost at 100Hz-200Hz to make it audible on small speakers.
- **Precision**: Use sharp cuts on everything above 500Hz to leave room for everything else.

## Electric/Slap Bass
- **Grit**: Boost 1kHz-2kHz.
- **String Noise**: Boost 4kHz.
- **Thump**: Boost 80Hz.
- **Muddiness**: Cut 250Hz.

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Instrument: Drums

Using Equo to make your drums pop.

## The Kick Drum
- **Sub Boost**: Small boost in the first 2-3 bands.
- **Boxiness Cut**: Gentle dip around 400Hz (Bands 8-10).
- **Beater Click**: Small boost around 3kHz-5kHz.
- **Result**: A kick that is heavy but clear.

## The Snare
- **Body**: Boost around 200Hz.
- **Snap**: Boost around 2kHz-4kHz.
- **Sizzle**: Shelf-style boost from 8kHz upwards.
- **Result**: A snare that cuts through the mix without being harsh.

## Hi-Hats & Percussion
- **Low Cut**: Pull all bands below 500Hz to minimum.
- **Crispness**: Gentle boost in the 10kHz+ range.
- **Stereo Spread**: Use **PAN mode** to pan the higher frequencies slightly to one side.

```

---

## FILE: 03-Workflows\by-instrument\synth-pads.md

```markdown
# Instrument: Synth Pads

Creating atmosphere and movement with Equo.

## The "Cloud" Effect
- **Low Cut**: Remove everything below 200Hz to avoid muddying the bass.
- **High Shimmer**: Boost 8kHz+ for a "glassy" texture.
- **Mid Scoop**: Cut 500Hz-1kHz to make the pad sound "hollow" and ethereal.

## Movement via Interpolation
1. Set Bank 1 to a "Dark" pad (Highs cut).
2. Set Bank 2 to a "Bright" pad (Highs boosted).
3. Automate the **Interpolate** slider with a slow LFO (Fruity Peak Controller) or a long automation clip.
4. **Result**: The pad breathes and evolves throughout the song.

## Width via PAN mode
- Pan the low-mids slightly left and the high-mids slightly right.
- This creates a "wrapped" sound that feels like it's surrounding the listener.

```

---

## FILE: 03-Workflows\by-instrument\vocals.md

```markdown
# Instrument: Vocals

Polishing voices with Equo.

## Male Vocals
- **Warmth**: Boost 150Hz-300Hz.
- **Nasality Fix**: Cut 800Hz-1.2kHz.
- **Intelligibility**: Boost 3kHz-5kHz.
- **Air**: Boost 12kHz+.

## Female Vocals
- **Body**: Boost 200Hz-400Hz.
- **Harshness Fix**: Cut 2.5kHz-4kHz.
- **Silky Highs**: Smooth boost from 10kHz upwards.

## Backing Vocals (The Background Hack)
1. Switch to **PAN mode**.
2. Draw a curve that pans the mids left and the highs right.
3. This pulls the backing vocals away from the center-panned lead vocal, creating instant space.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

- **Official Manual**: [Fruity Equo - Image-Line](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Equo.htm)
- **Community Wisdom**: Various FL Studio forums and YouTube tutorials on spectral panning.
- **Technical Specs**: Verified through internal testing of interpolation curves.

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md.md

```markdown
# Genre Style Board: Equo Applications

| Genre | Key Equo Technique | Why? |
| :--- | :--- | :--- |
| **Hip Hop** | Low-mid cleaning (250Hz) | Removes mud from sampled loops. |
| **EDM** | Automated Interpolation sweeps | Creates movement in synth leads. |
| **Lo-Fi** | Narrow Band-Pass (Radio Effect) | Mimics vintage hardware limitations. |
| **Ambient** | Extreme Spectral Panning | Creates an immersive, wide soundstage. |
| **Rock** | High-Mid presence boost (3kHz) | Helps guitars cut through the drums. |
| **Pop** | High-end air boost (12kHz+) | Adds a modern, "glossy" finish to vocals. |

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Equo Mechanics

## 1. Graphic EQ Topology

*   **Type:** Constant Q? Or Variable Q?
    *   Graphic EQs use fixed frequency centers.
    *   **Bands:** Likely 32 bands (1/3 Octave?).
*   **Phase:** Is it Linear Phase?
    *   Probably **Minimum Phase** (IIR Filters) for low CPU usage. It consumes very little CPU compared to Convolver's Linear Phase EQ.

## 2. The Morph Algorithm

*   **Interpolation:** Linear interpolation between Bank states.
*   **Quantization:** The Morph knob is continuous, meaning you can sit "between" Bank 1 and Bank 2 (e.g., Bank 1.5).
*   **Smoothness:** The transition is zipper-noise free, making it suitable for fast modulation (LFOs).

## 3. Shift Mechanics

*   **Scaling:** The Shift knob multiplies the center frequency of the filters.
    *   `New_Freq = Base_Freq * Shift_Factor`.
*   **Limit:** Moving bands too high might hit Nyquist (22kHz) or just disappear. Moving too low turns them into sub-bass mud.

## 4. Send Routing

*   **Latency:** Sending bands to other tracks might introduce PDC issues if not handled correctly, though simple routing usually aligns fine.
*   **Volume Summing:** If you send a band to a track, is it *removed* from the Main Output?
    *   Usually, yes (Splitter behavior). Or is it a Send (Duplication)?
    *   *Check:* Usually works as a Send Knob per band. If Main Vol is 0, it acts as a router.

```

---

## FILE: 04-Reference\technical-docs\interpolation-modes.md

```markdown
# Interpolation Modes

Fruity Equo's interpolation engine is what sets it apart from other graphic EQs.

## How It Works
When you move the **Interpolate** slider, Equo doesn't just switch between Bank 1 and Bank 2. It calculates the intermediate gain values for all 32 bands simultaneously.

## Linear vs. Curved Interpolation
- **Linear**: The most common use. It creates a smooth, predictable transition.
- **Automated**: By using an automation clip or an LFO (like Fruity Peak Controller) on the Interpolate slider, you can create rhythmic EQ "pulsing" that follows the beat.

## Use Cases for Interpolation
- **Filter Sweeps**: Create a resonant high-pass on Bank 1 and a flat EQ on Bank 2 for a custom sweep.
- **Dynamic De-essing**: Set Bank 2 to have a heavy cut at 6kHz. Use a Peak Controller on the vocal track to push the Interpolate slider toward Bank 2 only when the vocal gets loud/sibilant.
- **Genre Shifts**: Switch between a "Lo-Fi" EQ for the intro and a "Full" EQ for the drop.

```

---

## FILE: 04-Reference\technical-docs\vol-vs-pan-modes.md

```markdown
# VOL vs. PAN Modes

Understanding the relationship between Equo's primary operating modes.

## The Separation of Data
Equo maintains **separate data buffers** for Volume, Panning, and Send levels.
- Changes made in VOL mode **do not** affect your PAN curve.
- Changes made in PAN mode **do not** affect your VOL curve.
- The final output is the **product** of both curves applied sequentially.

## Signal Processing Order
1. Input
2. Band Splitting
3. Volume Scaling (based on VOL sliders)
4. Stereo Balancing (based on PAN sliders)
5. Send Routing (based on SEND sliders)
6. Recombination
7. Master Output

## The Advantage
This allows you to EQ a sound for tone while *simultaneously* EQing it for stereo placement. For example, you can boost the high-end volume while panning those same highs to the left, all within one plugin instance.

```

---

