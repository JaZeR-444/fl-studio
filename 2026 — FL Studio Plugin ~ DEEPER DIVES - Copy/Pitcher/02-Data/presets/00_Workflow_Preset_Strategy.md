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
