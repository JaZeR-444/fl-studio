# Vibe Translation Guide: MIDI Out

How to use a data-only utility to capture real "vibe" in Hip-Hop, R&B, and Neo-Soul.

---

## 1. VIBEY / ORGANIC
*Warmth, human imperfection, and real analog depth.*
- **The Mental Model:** Using MIDI Out to control a real hardware synthesizer or a "vibe-heavy" VST.
- **MIDI Out Levers:**
    - **Physical Control:** Routing MIDI Out to an analog synth (e.g. Minilogue, Prophet). The real circuitry provides the vibe that plugins often lack.
    - **CC 1 (Mod Wheel):** Automate subtle vibrato or filter movements to mimic a real player's hands.
    - **CC 11 (Expression):** Use this for "volume swells" during a soulful R&B pad performance.
- **Listen For:** The "breath" and subtle noise floor of real hardware.

## 2. PSYCHEDELIC
*Extreme motion, morphing textures, and "otherworldly" control.*
- **The Mental Model:** Automating parameters that aren't usually available, or creating complex "macro" controls.
- **MIDI Out Levers:**
    - **Hidden VST CCs:** Map MIDI Out knobs to obscure CC numbers in a VST (check the VST's manual). Automating these can create "glitchy" or unusual sonic shifts.
    - **Multi-Knob Automation:** Group multiple MIDI Out knobs into one Dashboard or Patcher macro to morph a sound from "Dry" to "Trippy" with one fader.
    - **Master Sync:** Send MIDI Clock to a vintage drum machine and let its internal "swing" provide a psychedelic groove.
- **Listen For:** Sonic textures that feel like they are "melting" or "bending."

## 3. MOODY
*Darkness, distance, and atmospheric depth.*
- **The Mental Model:** Controlling filters and effects from a distance; minimal but focused.
- **MIDI Out Levers:**
    - **CC 74 (Filter Cutoff):** Automate the cutoff to stay in the low-mids (20–40% range).
    - **Bank/Patch Changes:** Use MIDI Out to cycle through dark, moody factory presets on a hardware unit without touching the hardware.
    - **Vel -> Cutoff:** Use MIDI Out to route velocity to filter brightness. Play softly for a "muffled" moody feel and harder for a "sharp" climax.
- **Listen For:** A dark, heavy presence that feels "cloaked" or mysterious.

## 4. UPBEAT / ENERGETIC
*Tight timing, rhythmic precision, and bright clarity.*
- **The Mental Model:** High-energy club tracks using hardware drum machines or "Mainstage" VSTs.
- **MIDI Out Levers:**
    - **CC 7 (Volume):** Use for precise rhythmic "stutter" automation or gating.
    - **Master Sync ON:** Ensure your external hardware arpeggiators and delays are perfectly locked to FL Studio's BPM.
    - **Program Changes:** Use MIDI Out to instantly flip from a "Verse" patch to a "Hook" patch on your hardware synth.
- **Listen For:** Tight, percussive timing and energetic sonic transitions.

---

## Vibe Check Matrix
| Vibe | Primary Focus | Key CC | Sync Status | VST vs Hardware |
| :--- | :--- | :--- | :--- | :--- |
| **Vibey** | Human Touch | CC 1 (Mod) | ON | Hardware |
| **Psyched**| Texture Morph | CC 11 / Hidden | ON | VST (Deep Map) |
| **Moody** | Dark Filters | CC 74 (Cutoff)| OFF | Hardware |
| **Upbeat** | Transitions | Patch Change | ON | Both |
| **Jazzy** | Performance | CC 64 (Sustain)| OFF | Both |
