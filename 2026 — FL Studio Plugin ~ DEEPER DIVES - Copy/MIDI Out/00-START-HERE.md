# MIDI Out: Start Here

Welcome to the **MIDI Out** Deeper Dive. MIDI Out is the primary bridge in FL Studio for controlling **external hardware** (synths, drum machines) and **internal VST plugins**. It transmits pure MIDI data, allowing you to sequence and automate any MIDI-capable device directly from the Piano Roll.

## 🗺️ Quick Navigation Guide

### 1. The Essentials (Start Here)
- **[README.md](./README.md):** The central hub for connection goals and technical specs.
- **[01-Learning/Quick-Reference/parameter-cheat-sheet.md](./01-Learning/Quick-Reference/parameter-cheat-sheet.md):** A fast breakdown of Ports, Channels, and Banks.
- **[01-Learning/Quick-Reference/midi-port-vs-channel.md](./01-Learning/Quick-Reference/midi-port-vs-channel.md):** Understanding the fundamental "wires and instruments" concept.

### 2. Core Concepts
- **[01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](./01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md):** Mapping the 8 pages of assignable knobs.
- **[02-Data/parameters/standard-cc-list.json](./02-Data/parameters/standard-cc-list.json):** A reference list of common MIDI Continuous Controllers.

### 3. Workflow Recipes
- **[03-Workflows/by-goal/external-synth-integration.md](./03-Workflows/by-goal/external-synth-integration.md):** Step-by-step hardware connection and latency management.
- **[03-Workflows/by-goal/automating-vst-parameters.md](./03-Workflows/by-goal/automating-vst-parameters.md):** Controlling "hidden" VST parameters via MIDI CC.
- **[03-Workflows/by-goal/custom-midi-dashboard.md](./03-Workflows/by-goal/custom-midi-dashboard.md):** Labeling your own 72-knob control surface.

## 🚀 Rapid Success Protocol
1. **Set the Port:** Match the **Port #** in MIDI Out to the **Input Port** of your target hardware or VST.
2. **Match the Channel:** Standard MIDI uses **Channel 1** by default. Multitimbral devices (like Kontakt) can use channels 1–16.
3. **Configure a Knob:** Right-click any knob, select **Configure**, and set the **CC #** (e.g., CC 74 for Filter Cutoff).
4. **Sequence in Piano Roll:** Notes played here will now trigger your target instrument.
5. **Record Automation:** Right-click your configured knob and select **Create automation clip**.

---
*For technical specs and port management data, see the [02-Data/](./02-Data/) folder.*
