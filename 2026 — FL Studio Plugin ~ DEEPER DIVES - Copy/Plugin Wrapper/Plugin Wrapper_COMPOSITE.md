# Plugin Wrapper - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Plugin Wrapper - Host Integration

`\`\`
██████╗ ██╗     ██╗   ██╗ ██████╗ ██╗███╗   ██╗    ██╗    ██╗██████╗  █████╗ ██████╗ ██████╗ ███████╗██████╗ 
██╔══██╗██║     ██║   ██║██╔════╝ ██║████╗  ██║    ██║    ██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗
██████╔╝██║     ██║   ██║██║  ███╗██║██╔██╗ ██║    ██║ █╗ ██║██████╔╝███████║██████╔╝██████╔╝█████╗  ██████╔╝
██╔═══╝ ██║     ██║   ██║██║   ██║██║██║╚██╗██║    ██║███╗██║██╔══██╗██╔══██║██╔═══╝ ██╔═══╝ ██╔══╝  ██╔══██╗
██║     ███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║    ╚███╔███╔╝██║  ██║██║  ██║██║     ██║     ███████╗██║  ██║
╚═╝     ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Integration Layer / Bridge
**Category:** Utility / System / Hosting
**Official Manual:** [Image-Line Plugin Wrapper Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/wrapper.htm)

---

## 🎯 What is Plugin Wrapper?

The Plugin Wrapper is the invisible engine that allows FL Studio to host both native and third-party plugins (**VST, VST3, AU, and CLAP**). It provides the standard interface frame around every plugin, offering essential "Host" features that the plugins themselves don't provide. It handles **MIDI Routing**, **Automation Mapping**, **GUI Scaling**, **Oversampling**, and **Bridge/Troubleshooting** settings.

**Key Capabilities:**
- **Plugin Management:** Handles the loading and scanning of various formats (VST, AU, CLAP).
- **GUI Scaling:** Optimizes high-DPI appearance for 4K monitors.
- **MIDI Input/Output:** Routes hardware controllers to plugins via "Ports."
- **Automation Mapping:** Allows FL to "see" and automate every internal plugin parameter.
- **Bridging:** Runs 32-bit plugins in a 64-bit DAW (and vice versa).
- **Troubleshooting:** Specialized fixes for performance, flickering, or processing issues.
- **CPU Management:** Options to disable plugins when idle or hidden.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **wrapper-settings-tabs.md** (Processing vs Troubleshooting)
3. Create **parameter-cheat-sheet.md**
4. Open any VST, click the "Gear" icon, and explore the "Processing" tab.

### For VST Power Users:
1. Study **linking-vst-parameters-to-midi.md**
2. Review **bridging-32bit-plugins.md**
3. Learn **setting-midi-input-ports.md**

### For Troubleshooting:
1. Study **fixing-gui-flicker-and-scaling.md**
2. Review **processing-pdc-latency.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Gear Icon:** The main entry to wrapper settings.
  - **Ports:** MIDI Input/Output numbers.
  - **Oversample:** High-quality rendering.
  - **Wrapper Menu:** Scaling, CPU, and Preset management.

- [ ] **vst-automation-101.md**
  - Why some VSTs don't show parameters.
  - Using "Browse Parameters" to find the target.

#### 02-Data/parameters/
- [ ] **wrapper-tabs-specs.json**
  `\`\`json
  {
    "plugin_name": "Plugin Wrapper",
    "tabs": ["Main", "Settings", "Processing", "Troubleshooting"],
    "supported_formats": ["VST", "VST3", "AU", "CLAP"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **routing-midi-to-vst.md**
  - Use case: You have a hardware synth and want to control a VST.
  - Setup: Assign Wrapper "Input Port" to 1. Set MIDI Keyboard to Port 1.

- [ ] **fixing-scaling-issues.md**
  - Using "Make bridged" and "External window" for tiny GUIs.
  - Using "DPI scaling" overrides.

- [ ] **sidechaining-third-party-vsts.md**
  - How to activate the "Processing" tab's sidechain inputs for plugins like FabFilter or Waves.

#### 03-Workflows/by-context/
- [ ] **mastering-vst-latency-check.md**
- [ ] **high-dpi-display-setup.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **pdc-and-latency-buffer.md**
  - How the wrapper compensates for slow plugins.

---

## 🔬 Research Framework

### Phase 1: The Interface (Week 1)
**Goal:** Host Features

**Tasks:**
1. Open a native plugin vs a VST
2. Note the differences in the Wrapper header
3. Test "Make Bridged" on a heavy plugin
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What does the "Update when hidden" option do?
- How do I save a preset for a VST that doesn't have a save button? (Wrapper preset menu).

### Phase 2: Troubleshooting (Week 2)
**Goal:** Stability

**Tasks:**
1. Force a GUI scaling error
2. Use the troubleshooting switches to fix it
3. Test sidechain routing in the Processing tab
4. Create fixing-scaling-issues.md

---

## 📊 Plugin Specifications to Document

### Engine
- Supported Formats (VST 2.4, VST 3, AU, CLAP)
- Bit bridging (32/64)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Where are my MIDI ports? (Wrapper settings -> Settings tab).
2. Why is the plugin window so small? (Check Scaling settings in the Wrapper menu).

---

## 🔗 Cross-Reference with Other Plugins

Plugin Wrapper is used by **EVERY** plugin in FL Studio.

---

## 📦 File Structure Summary

`\`\`
Plugin Wrapper/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── vst-automation-101.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── wrapper-tabs-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── routing-midi-to-vst.md
│   │   └── fixing-scaling-issues.md
│
└── 04-Reference/
    └── pdc-and-latency-buffer.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Route MIDI from an external controller to a VST using Port mapping
- [ ] Fix a third-party plugin that appears too small or blurry on a 4K screen
- [ ] Enable sidechain inputs for a non-native compressor
- [ ] Explain the difference between "Processing" and "Troubleshooting" settings

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What Is The Plugin Wrapper?

> **The Exosuit.**
> Every plugin in FL Studio—whether it's native (FLEX) or third-party (Serum)—lives inside a container called the **Plugin Wrapper**.

## 🧠 The 60-Second Mental Model
Think of the Wrapper as the **Universal Remote Control** that controls the plugin inside it.
Even if a plugin (like a VST) doesn't have an Arpeggiator, the **Wrapper** *adds* one.
Even if a plugin doesn't have scale highlighting, the **Wrapper** *enforces* it.
Even if a plugin doesn't have LFOs, the **Wrapper** *injects* them.

## 📋 When To Use It
You are *always* using it. But you should **open it** (Click the Gear/Cog icon) when:
1.  **CPU is Spiking:** You need to enable "Smart Disable".
2.  **GUI is Tiny:** You need to fix High-DPI scaling for old VSTs.
3.  **Routing:** You need to send Audio/MIDI to a specific Mixer track or port.
4.  **Creation:** You want to add features (Arps, Chords) to a plugin that lacks them.

## 🎧 Context: Power User Workflows
*   **The "Mono-Poly" Trick:** Turning a monophonic synth into a polyphonic one using the Wrapper's "Arpeggiator" set to Chord mode.
*   **The "Patcher" Shortcut:** Instantly clicking "Patcherize" to wrap the current plugin into a Patcher web for complex routing.
*   **The "Sidechain" Fix:** Using the Processing tab to map a VST3's sidechain input to FL Studio's mixer routing.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

The Wrapper is the frame *around* the plugin.

### 1. The Header Bar (Top Strip)
*   **Menu (🔽):** The main dropdown. Contains "Save Preset", "Detach", "Smart Disable".
*   **Gear (⚙️):** Opens the **Detailed Settings** panel. This is where the magic happens.
*   **Preset Selector:** Arrows to cycle presets.

### 2. The Detailed Settings (The "Gear" Panel)
When you click the Gear, a new strip appears with tabs:
*   **Main (Plugin Icon):** Parameters unique to the plugin (Native only).
*   **Settings (Knobs Icon):** MIDI/Audio routing settings.
*   **Processing (Chip Icon):** Technical audio handling (Sidechain, Outputs).
*   **Troubleshooting (Wrench Icon):** Use this if the plugin is crashing or flickering.

### 3. The Misc Functions (Wrench Icon Tab)
*   **Arpeggiator:** A fully functional Arp engine.
*   **Levels:** Basic Gain/Pan/Pitch adjustments *before* the plugin audio.
*   **Polyphony:** Limit max voices or enable Mono mode/Portamento for plugins that don't support it.

## 🚦 Internal Signal Flow

1.  **FL Studio Note Data** -> **Wrapper MIDI Processing** (Arp/Scale) -> **Plugin Input**.
2.  **Plugin Audio Generation** -> **Wrapper Audio Processing** (Inter-sample Peak protection) -> **Mixer Track**.

## ⚠️ Common Misunderstandings
*   **"My Automation disappeared!"**
    *   *Fact:* If you change the VST (e.g., update it), parameter IDs might shift. The Wrapper tries to link them by name, but sometimes you need to re-link via "Browse Parameters".
*   **"Why is it bridged?"**
    *   *Fact:* If you see "Bridged" in the wrapper title, you are running a 32-bit plugin in 64-bit FL (or vice-versa). This uses more CPU. Avoid it if possible.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Universal Arp"
*   **Context:** Adding rhythmic movement to a static synth (like Serum or a one-shot Sampler).
*   **Move:**
    1.  Open Wrapper Settings (Gear).
    2.  Click **Wrench** tab.
    3.  Under "Arpeggiator", click an arrow (Up, Down, etc.).
    4.  **Result:** The plugin now arpeggiates, even if it has no internal arp.

### 2. The "Slide" Enabler
*   **Context:** Making 3rd Party VSTs slide like FL Native plugins.
*   **Move:**
    1.  Open Wrapper Settings (Gear).
    2.  Click **Wrench** tab.
    3.  Enable **Mono** mode.
    4.  Set **Slide** time.
    5.  **Result:** You can now create glide/portamento effects on any instrument. (Note: This is different from Piano Roll slide notes, which only work on Native plugins).

### 3. Smart Disable (CPU Saver)
*   **Context:** Your project is crackling.
*   **Move:**
    1.  Tools -> Macros -> **Switch smart disable for all plugins**.
    2.  **Result:** The Wrapper now completely shuts off any plugin that isn't making sound. This can save 50%+ CPU.

## 👂 What to Listen For
*   **Clicks/Pops when starting playback:**
    *   *Fix:* This might be "Smart Disable" waking up plugins too slowly. If a specific reverb clicks, go to its Wrapper settings and turn Smart Disable **OFF** for just that plugin.

## 🛑 Common Pitfalls
1.  **The "Hidden" Buffer:** Some plugins add latency. The Wrapper reports this to FL Studio (PDC). If you mess with the "Latency" manual offset in the Wrapper settings, you will de-sync your track. Leave it on Auto unless you are a scientist.

```

---

## FILE: 01-Learning\Concepts\what-is-plugin-wrapper.md

```markdown
Tags: utility | hip-hop/rap | R&B

## Plugin Wrapper Concepts

### What Is Plugin Wrapper?

Plugin Wrapper is FL Studio's tool for managing and loading third-party VST plugins within the FL Studio environment. It provides consistent parameter mapping, preset browsing, and plugin management features.

### Key Capabilities

1. **VST hosting** - Load any VST2/VST3 plugin
2. **Parameter mapping** - Map plugin parameters to FL controls
3. **Preset management** - Browse and save VST presets
4. **Latency compensation** - Automatic delay alignment
5. **Resource management** - Plugin loading/unloading

### Common Uses

| Use Case | Why Wrapper Helps |
|----------|-------------------|
| Third-party synths | Consistent interface with FL |
| External effects | Latency compensation |
| Specialized plugins | Parameter mapping to controllers |
| Legacy plugins | Support older VST formats |

### Interface Areas

| Area | Function |
|------|----------|
| Plugin selector | Browse/load VST plugins |
| Preset browser | Load/save plugin presets |
| Parameter panel | View/map plugin parameters |
| Wrapper settings | Latency, resources, options |

### Typical Workflow

1. Click "+" in channel rack
2. Select "More Plugins"
3. Browse or search for VST
4. Load preset or start fresh
5. Map parameters as needed
6. Save wrapper preset for recall

### Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Wrong latency setting | Timing issues | Enable auto-latency compensation |
| Too many instances | CPU overload | Use selectively |
| No parameter mapping | Hard to automate | Map key parameters |
| Forgetting wrapper presets | Lost settings | Save wrapper presets |

### First Steps

1. **Load your VST** via Plugin Wrapper
2. **Enable latency compensation** in settings
3. **Map essential parameters** to channel rack
4. **Save wrapper preset** for quick recall
5. **Test in project** before committing

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes to Wrapper Mastery

1.  **Access:** Click the **Gear Icon** (Top Left of window) to open the Wrapper Settings.
2.  **Routing:**
    *   **MIDI Input Port:** If you want to control this plugin with a MIDI Controller (or Patcher/MIDI Out), set this port (e.g., 5).
    *   **MIDI Output Port:** If this plugin generates notes (like Cthulhu or Scaler), set this port to send notes elsewhere.
3.  **Troubleshooting:**
    *   **GUI:** If the UI is tiny, go to **Processing** tab -> Make Bridged -> External Window. (Or just use "DPI Awareness").
    *   **CPU:** Go to **Processing** -> Ensure "Allow threaded processing" is ON.

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes & Fixes

| Mistake | Symptom | The Fix |
| :--- | :--- | :--- |
| **Wrong Port** | "I'm playing MIDI Out but hearing nothing." | The MIDI Out **Port Number** must match the Wrapper **Input Port**. |
| **Hidden Menu** | "I can't find 'Save Preset'." | Click the little **Triangle (🔽)** in the top left, not the Gear. |
| **Typing Keyboard Focus** | "Spacebar isn't playing/stopping." | Some VSTs steal keyboard focus. Click the **Keyboard Icon** (Keep Focus) in the wrapper title bar to fix this. |
| **Tiny GUI** | plugin looks like stamps on 4K. | Wrapper Settings -> **Processing** -> "DPI awareness" or "Make Bridged" + "External Window". |

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points

## 1. The "Stability" Profile (Default)
*   **Threaded Processing:** ON.
*   **Smart Disable:** ON.
*   **Notify about rendering mode:** ON.

## 2. The "Sampler" Profile (For Kontakt/Omnisphere)
*   **Use Fixed Size Buffers:** ON (Fixes crackling in some heavy libraries).
*   **Detailed Settings -> Processing:** Ensure "Use fixed size buffers" is checked if you hear glitches.

## 3. The "Legacy" Profile (For old 32-bit VSTs)
*   **Bitalizer:** OFF.
*   **DPI Awareness:** Unchecked (Let Windows scale it).

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Settings: MOODY (The Filter Trick)

**Target:** Instant muffled "Underwater" sound.

## The Recipe
1.  **Wrapper:** Go to **Wrench** tab (Misc).
2.  **Filter:** Enabling the **Cut** and **Res** knobs here applies a filter *per voice* (for native plugins) or globally.
3.  **Automation:** Right click these knobs. They are often smoother to automate than the plugin's internal cutoff because they are part of FL's engine.

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Settings: Upbeat / Psych / Jazzy

## ☀️ UPBEAT (Strumming)
*   **Wrapper:** Wrench Tab -> Arpeggiator.
*   **Mode:** Turn Arp OFF, but turn strum ON (if available in native).
*   **Actually:** For VSTs, use the **Arp** section, select the "Chord" arrow. It turns chords into fast arpeggios, adding energy.

## 🍄 PSYCHEDELIC (Randomizer)
*   **Wrapper:** Wrench Tab -> Levels -> **Pan**.
*   **LFO:** Right-click Pan knob -> Edit Events -> Draw a random chaotic LFO.
*   **Result:** The plugin pans wildly without needing a complex internal modulation matrix.

## 🎷 JAZZY (Swing)
*   **Fact:** The Wrapper respects the Main Swing slider of FL Studio.
*   **Tip:** Ensure your Arpeggiator setup in the wrapper has "Swing" enabled in the main transport to get that drunk/Dilla feel on a quantised plugin.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Plugin Wrapper Parameter Dictionary

| Parameter | Type | Description | Vibe Impact |
| :--- | :--- | :--- | :--- |
| **Input Port** | Num | MIDI Channel listener. | **Critical** (Route Control) |
| **Output Port** | Num | MIDI Channel sender. | **Critical** (Chaining) |
| **Smart Disable** | Bool | Turns off CPU when silent. | **High** (Performance) |
| **Threaded Proc** | Bool | Multi-core support. | **High** (Performance) |
| **Fixed Buffers** | Bool | Fixes crackling in some VSTs. | **Medium** (Stability) |
| **Keep Focus** | Bool | Prevents VST from stealing keyboard. | **Medium** (Workflow) |
| **Arpeggiator** | Engine | Standard Up/Down/Random patterns. | **Creative** (Rhythm) |
| **Echo Delay** | Engine | Simple echo feedback. | **Creative** (Space) |
| **DPI Aware** | Bool | Scales GUI for 4K screens. | **Visual** (Usability) |

```

---

## FILE: 02-Data\presets\wrapper-presets.json

```json
Tags: hip-hop/rap | R&B | deep bass edm

## Plugin Wrapper Preset Guide

### Preset Categories

| Category | Settings | Use Case | Tags |
|----------|----------|----------|------|
| Synth Wrapper | Latency auto, Mapping full | Third-party synths | creative |
| Effect Wrapper | Latency auto, Mapping minimal | External effects | utility |
| Utility Wrapper | Latency 0, Mapping none | Analysis tools | reference |

### VST Types and Settings

| VST Type | Latency Mode | Mapping | Memory |
|----------|--------------|---------|--------|
| Synths | Auto-compensate | Full mapping | High |
| Effects | Auto-compensate | Key params | Low |
| Analyzers | Bypass | None | None |
| Instruments | Auto-compensate | Full | Variable |

### Preset Management

**Saving Wrapper Presets:**
1. Configure VST settings
2. Open preset browser
3. Save as wrapper preset
4. Name descriptively
5. Tag for easy finding

**Loading Workflow:**
1. Open preset browser
2. Filter by tag (e.g., "synth", "effect")
3. Select preset
4. VST loads with all settings

```

---

## FILE: 02-Data\rules\01_Troubleshooting_Matrix.md

```markdown
# Troubleshooting Matrix

| Symptom | Probable Cause | The Fix |
| :--- | :--- | :--- |
| **"Plugin is tiny / huge"** | High-DPI Scaling mismatch. | Wrapper Settings -> Processing -> Check/Uncheck "DPI Awareness". If that fails: "Make Bridged" + "External Window". |
| **"Crackling / Glitching"** | Buffer Underrun in plugin. | Wrapper Settings -> Processing -> Enable **"Use fixed size buffers"**. |
| **"Audio cuts out"** | Demo mode or Smart Disable? | Check if Smart Disable is killing the Reverb tail. If so, turn it off for that plugin. |
| **"Notes hang forever"** | MIDI loop or sustain pedal. | Double click the **Stop** button in FL Studio transport (Panic). |
| **"Automation won't link"** | VST parameter hiding. | Move the knob in the interface. Tools -> Last Tweaked -> Create Automation Clip. |

```

---

## FILE: 02-Data\rules\wrapper-safety-rules.md

```markdown
Tags: utility | hip-hop/rap | R&B

## Plugin Wrapper Safety Rules

### Latency Rules

| Situation | Latency Setting | Why |
|-----------|-----------------|-----|
| Mixing with plugins | Auto-compensate | Aligns timing |
| Recording external | Auto-compensate | Real-time monitoring |
| Analysis tools | Bypass | No timing needed |
| Latency-sensitive | Minimum buffer | Lowest delay |

### CPU Management

| Issue | Solution | Priority |
|-------|----------|----------|
| High CPU usage | Freeze/ bounce tracks | High |
| Plugin crashes | Update/replace plugin | High |
| Memory leaks | Restart FL occasionally | Medium |
| Slow loading | Use wrapper presets | Low |

### The "Wrapper Test"

`\`\`
1. Load VST in Plugin Wrapper
2. Play audio through it
3. Check latency indicator
4. Test automation recording
5. Verify preset saving
6. Check CPU usage meter
7. If issues: Try different buffer size
`\`\`

### Avoid List

| ❌ Don't Do This | ❌ Result | ✅ Instead |
|-----------------|-----------|------------|
| Skip latency check | Timing problems | Always verify |
| Too many VSTs | CPU crashes | Use selectively |
| No preset saving | Lost settings | Save wrapper presets |
| Ignore CPU meter | Performance issues | Monitor constantly |

### Quick Checklist

- [ ] Latency compensation enabled
- [ ] Key parameters mapped
- [ ] Preset saved
- [ ] CPU usage acceptable
- [ ] Automation working
- [ ] Test in isolation first

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Workflow: Layering VSTs (Patcherize)

**Goal:** Create a mega-synth by combining Serum and Sylenth1.

1.  **Load:** Load Serum.
2.  **Wrapper:** Right-click the Serum name in the Channel Rack -> **"Patcherize"**.
3.  **Result:** Serum is now inside Patcher.
4.  **Add:** Drag Sylenth1 into the same Patcher.
5.  **Connect:** FL Studio MIDI -> Sylenth1 -> FL Studio Audio.
6.  **Win:** You now have a single channel controlling both plugins. Use Wrapper routing to mix them.

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Sound_Design.md

```markdown
# Workflow: Multi-Output Routing

**Goal:** Process the Kick and Snare from a Drum VST (e.g., Battery/Kontakt) separately.

1.  **Plugin:** Load multi-output VST (e.g., Kontakt).
2.  **Wrapper:** Go to **Detailed Settings (Gear)** -> **Processing** (Chip icon).
3.  **Outputs:** Look at the "Connections" list at the bottom right.
4.  **Map:** Set "1. Out" to "--" (Default). Set "2. Out" to "1".
5.  **Mixer:** This routes Output 2 to the *next* mixer track relative to the main one.
6.  **Result:** You can now EQ the Snare separately from the Kick in the FL Mixer.

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Mix_Or_Control.md

```markdown
# Workflow: Sidechaining 3rd Party Plugins

**Goal:** Use FabFilter Pro-C 2 Sidechain.

1.  **Mixer:** Send your "Kick" track to your "Bass" track (Right-click -> Sidechain to this track).
2.  **Plugin:** Open Pro-C 2 on the Bass track.
3.  **Wrapper:** Open Wrapper Settings -> **Processing**.
4.  **Inputs:** Under "Connections" (bottom), right-click the "Sidechain" input and select the Kick track.
5.  **Plugin UI:** Inside Pro-C 2, set "Sidechain" to "Ext".
6.  **Result:** The compressor now reacts to the Kick signal.

```

---

## FILE: 03-Workflows\by-instrument\wrapper-instrument-workflows.md

```markdown
Tags: utility | hip-hop/rap | R&B

## Plugin Wrapper Instrument Workflows

### Third-Party Synth Setup

**Goal:** Optimize VST synth workflow

**Steps:**
1. Load synth in Wrapper
2. Enable auto-latency compensation
3. Map essential parameters:
   - Cutoff/Filter
   - Attack/Release
   - Oscillator mix
   - Master volume
4. Save wrapper preset as "[Synth Name] - [Sound Type]"

**Mapped Parameters Quick List:**
- Filter cutoff (essential)
- Oscillator levels
- Envelope amounts
- LFO rates
- Master output

### External Effect Integration

**Goal:** Use hardware-style effects in FL

**Steps:**
1. Load effect in Wrapper
2. Verify latency compensation
3. Map key parameters:
   - Mix/dry-wet
   - Main control (time, rate, etc.)
   - Feedback/regen
   - Output level
4. Save as "[Effect] - [Setting]"

### Preset Management Workflow

**Creating Organized Presets:**

1. **Synth Setup**
   - Load favorite VST
   - Configure basic sound
   - Map 4-6 key parameters
   - Save: "VST Name - Basic Sound"

2. **Effect Setup**
   - Load external effect
   - Set typical starting point
   - Map mix and main control
   - Save: "Effect Name - Default"

3. **Utility Setup**
   - Analyzer/utility tools
   - Minimal mapping
   - Save: "Tool Name - Quick Load"

### Quick Reference Table

| Goal | Mapping Level | Latency | Preset Name |
|------|---------------|---------|-------------|
| Synth load | Full | Auto | "VST - Sound" |
| Effect use | Minimal | Auto | "FX - Setting" |
| Analysis | None | Bypass | "Tool - Quick" |
| Creative | Variable | Auto | "VST - Creative" |

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

| ID | Source Name | Type | Key Information Derived |
| :--- | :--- | :--- | :--- |
| **IL-MAN** | Image-Line Official Manual | Primary | Detailed breakdown of Processing tab vs Settings tab. |
| **POWER-USER** | FL Studio Forum | Workflow | Multi-output routing tricks and Patcherization shortcuts. |

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Official Links

*   **Plugin Manual:** [Image-Line Wrapper](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/wrapper.htm)

```

---

## FILE: 04-Reference\02_Coverage_Checklist.md

```markdown
# Coverage Checklist

## Learning
- [x] Mental Model (Exosuit)
- [x] UI Map (Gear, Processing, Wrench)
- [x] Core Techniques (Universal Arp, Slide)

## Data
- [x] Parameters (Ports, Smart Disable)
- [x] Rules (Troubleshooting Matrix)

## Workflows
- [x] Patcherize (Layering)
- [x] Multi-Output Routing
- [x] Sidechaining (3rd Party)

## Reference
- [x] Sources
- [x] Links

```

---

