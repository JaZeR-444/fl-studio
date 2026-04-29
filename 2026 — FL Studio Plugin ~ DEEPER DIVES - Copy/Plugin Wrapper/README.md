# Plugin Wrapper - Host Integration

```
██████╗ ██╗     ██╗   ██╗ ██████╗ ██╗███╗   ██╗    ██╗    ██╗██████╗  █████╗ ██████╗ ██████╗ ███████╗██████╗ 
██╔══██╗██║     ██║   ██║██╔════╝ ██║████╗  ██║    ██║    ██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗
██████╔╝██║     ██║   ██║██║  ███╗██║██╔██╗ ██║    ██║ █╗ ██║██████╔╝███████║██████╔╝██████╔╝█████╗  ██████╔╝
██╔═══╝ ██║     ██║   ██║██║   ██║██║██║╚██╗██║    ██║███╗██║██╔══██╗██╔══██║██╔═══╝ ██╔═══╝ ██╔══╝  ██╔══██╗
██║     ███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║    ╚███╔███╔╝██║  ██║██║  ██║██║     ██║     ███████╗██║  ██║
╚═╝     ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝╚═╝  ╚═╝
```

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
  ```json
  {
    "plugin_name": "Plugin Wrapper",
    "tabs": ["Main", "Settings", "Processing", "Troubleshooting"],
    "supported_formats": ["VST", "VST3", "AU", "CLAP"]
  }
  ```

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

```
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
```

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