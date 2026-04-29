# Parameter Cheat Sheet: MIDI Out

The "Universal Remote" for hardware and plugins. [SRC: IL-MAN]

---

## 🛰️ Connection Section (Top)
- **Port:** The "Virtual Wire." (0–255).
  - *Internal VST:* Match this to the **Input Port** in the VST's wrapper settings.
  - *External Hardware:* Match this to the **Output Port** in FL's MIDI Settings.
- **Channel:** The "Instrument ID." (1–16).
  - Use this to target specific sounds on a multitimbral synth or VST.

## 🎵 Patch & Bank Selection
- **Bank:** Selects the specific group of sounds (MSB/LSB).
- **Patch (Program Change):** Selects the individual sound (0–127).
- **Update on Selection:** If ON, MIDI Out sends the bank/patch data every time you change the value.

## 🕹️ Assignable Controllers (8 Pages)
- **Knobs (9 per page):** Total of 72 controllers.
- **Right-Click -> Configure:**
  - **Full Name:** The label that appears on the UI.
  - **Short Name:** The label that appears in the Browser/Hint bar.
  - **Controller #:** The MIDI CC number (0–127).
- **Note:** Knob 1 on Page 1 is often pre-mapped to CC 1 (Mod Wheel).

## ⚙️ Global Tools
- **Reset:** Sends a "Panic" message (All Notes Off) to the target.
- **Send Master Sync:** Transmits FL Studio's transport status (Start/Stop/Tempo) to the target.

---

## 🎯 High-Signal MIDI CCs
- **CC 1:** Mod Wheel (Expression/Vibrato).
- **CC 7:** Main Volume.
- **CC 10:** Pan.
- **CC 11:** Expression.
- **CC 64:** Sustain Pedal (Hold).
- **CC 74:** Filter Cutoff (Standard).
- **CC 71:** Resonance (Standard).
