# Workflow & Preset Strategy: Newtone

> **Note:** Newtone is unique. It relies on **Audio Data**, not just knob settings. Therefore, "Presets" are less relevant than "Workflow Habits".

## 💾 Saving State
1.  **Project Save:** Newtone saves all audio and edits inside your `.flp` project file.
    *   *Warning:* This increases project file size significantly.
2.  **Save as Pattern:** You can save a Newtone state via the plugin wrapper menu "Save preset as...", but it *will not* save the audio, only the knob positions (Center/Variation/Trans).
    *   *Usefulness:* Low. Usually better to just tweak the 3 knobs manually.

## 🏗️ The Template Strategy
Since you cannot load a "Tuned Vocal" as a preset, you should use **Mixer Track Presets** that include Newtone.
1.  **"Vocal Tuning Rack" Preset:**
    *   Slot 1: **Newtone** (Empty, ready to load).
    *   Slot 2: **Edison** (For recording output).
    *   Slot 3: **Fruity Limiter** (Ceiling).

## 🎛️ The "Knob Preset" List
Since you rarely save files, memorize these knob positions:

### 1. The "Auto-Tune" Lookalike
*   Center: 100%
*   Var: 0%
*   Trans: 10%

### 2. The "Invisible" Fix
*   Center: 40%
*   Var: 80%
*   Trans: 50%

### 3. The "Doubler"
*   Center: 80%
*   Var: 50%
*   Formant: -100 cents (Slightly deeper to separate from lead).
