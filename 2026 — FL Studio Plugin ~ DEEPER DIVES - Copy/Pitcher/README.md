# Pitcher - Real-Time Pitch Correction

```
██████╗ ██╗████████╗ ██████╗██╗  ██╗███████╗██████╗ 
██╔══██╗██║╚══██╔══╝██╔════╝██║  ██║██╔════╝██╔══██╗
██████╔╝██║   ██║   ██║     ███████║█████╗  ██████╔╝
██╔═══╝ ██║   ██║   ██║     ██╔══██║██╔══╝  ██╔══██╗
██║     ██║   ██║   ╚██████╗██║  ██║███████╗██║  ██║
╚═╝     ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
```

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
  ```json
  {
    "plugin_name": "Pitcher",
    "category": "Pitch Correction",
    "modes": ["Automatic", "MIDI"],
    "voices": 4
  }
  ```

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

```
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
```

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