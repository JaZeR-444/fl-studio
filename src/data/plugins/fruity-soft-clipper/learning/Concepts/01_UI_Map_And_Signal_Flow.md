# Fruity Soft Clipper: UI Map and Signal Flow

## Plugin Interface Overview

Fruity Soft Clipper has one of the simplest interfaces in FL Studio—**two knobs and a graph**. This minimalism is intentional: the plugin does one thing (soft clipping) extremely well.

[SRC: IL-MAN]

---

## UI Sections Breakdown

### Section 1: Transfer Curve Display (Top)
**What It Shows:**
- X-axis: Input signal level (dBFS)
- Y-axis: Output signal level (dBFS)
- Red curve: The "soft knee" waveshaping function

**How to Read It:**
- **Linear region (below threshold):** Signal passes through unaffected (45° diagonal line)
- **Knee region (at threshold):** Signal begins to compress
- **Saturation region (above threshold):** Signal "rounds off" asymptotically toward the ceiling

**Visual Indicator:**
- The curve becomes more "bent" as you lower the Threshold
- A perfectly straight line = no clipping

**Right-Click Options:**
- None (display only)

[SRC: IL-MAN]

---

### Section 2: Threshold Knob (Left)
**Parameter:** THRES (Threshold)  
**Range:** -60 dB to 0 dB  
**Default:** 0 dB (no clipping)  
**Unit:** dBFS (decibels Full Scale)

**What It Does:**
- Sets the **ceiling** where soft clipping begins
- Lowering this knob "pulls the ceiling down" into your audio

**Visual Feedback:**
- Transfer curve shape changes as you adjust
- Lower threshold = more extreme curve bend

**Right-Click Options:**
- **Edit events:** Automation assignment
- **Type in value:** Numerical entry
- **Reset:** Return to 0 dB

**Pro Tip:**
- Start at 0 dB and slowly lower while audio plays
- Listen for the moment your mix "pops forward" (usually -1 to -3 dB)

[SRC: IL-MAN]

---

### Section 3: Post Gain Knob (Right)
**Parameter:** POST (Post Gain)  
**Range:** -12 dB to +12 dB  
**Default:** 0 dB (unity gain)  
**Unit:** dB (volume adjustment)

**What It Does:**
- **Makeup gain** after clipping
- Compensates for perceived loudness loss (rare) or boosts final output (common)

**Visual Feedback:**
- No visual indicator (volume-only control)

**Right-Click Options:**
- **Edit events:** Automation assignment
- **Type in value:** Numerical entry
- **Reset:** Return to 0 dB

**Pro Tip:**
- Use Post Gain to push your clipped signal into the "red" for the *next* plugin in the chain (e.g., Soft Clipper → EQ → Limiter)

[SRC: IL-MAN]

---

## UI Scaling & Detachability

### Resizing
- **Detachable:** Yes (click the plug icon in the mixer to float)
- **Resizable:** Yes (drag corners)
- **Minimum Size:** ~200×150 pixels
- **Maximum Size:** Full screen

### Multi-Monitor Use
- Drag to second monitor for focused waveform viewing
- No performance impact (UI is separate from DSP)

[SRC: IL-MAN]

---

## Hidden Features & Behaviors

### 1. Hover Readout
- **Where:** Anywhere on the transfer curve
- **What:** Shows exact input/output levels at cursor position
- **Use:** Verify exact gain reduction at specific dB levels

### 2. FL Studio Hint Bar Integration
- Bottom-left of FL Studio shows parameter values while adjusting
- Displays as "Threshold: -2.3 dB" or "Post: +1.5 dB"

### 3. Automation Lanes
- Both knobs fully automatable
- Common use: Automate threshold down during a drum fill for extra punch

### 4. Zero-Latency Display
- No "delay compensation" indicator needed
- Plugin reports 0 samples of latency to FL Studio's PDC system

[SRC: IL-MAN]

---

## Things Beginners Misunderstand

### Misconception 1: "The graph is a spectrogram"
**Reality:** It's a **transfer function** (input→output mapping), not a frequency display.

### Misconception 2: "I need to set Threshold to -60 dB for extreme clipping"
**Reality:** Threshold is the *ceiling*, not the *floor*. Lower = more clipping. Start at 0 dB and work down.

### Misconception 3: "Post Gain is redundant (I can just turn up the fader)"
**Reality:** Post Gain happens *inside* the plugin. If you have more plugins after Soft Clipper, Post Gain pushes the clipped signal into them (different tone than fader gain).

### Misconception 4: "There's no way to see gain reduction"
**Reality:** Observe the distance between the input signal (imaginary) and the curve. If peaks would exceed the threshold, they're being reduced.

[SRC: REPUTABLE]

---

## Signal Flow Diagram

```
[Input Signal]
     ↓
[Threshold Check]
     ↓
Is Input > Threshold?
├─ NO → Pass through unchanged
└─ YES → Apply soft-knee saturation curve
     ↓
[Soft-Clipped Signal]
     ↓
[Post Gain Stage]
     ↓
[Output to Next Plugin / Fader]
```

**Key Insight:** Signal flow is **instantaneous** (sample-by-sample waveshaping). No buffers, no lookahead, no attack/release.

[SRC: IL-MAN]

---

## Comparison: Soft Clipper vs Fruity Limiter UI

| Feature | Soft Clipper | Fruity Limiter |
|---------|--------------|----------------|
| **Knobs** | 2 (Threshold, Post) | 6+ (Ceiling, Sustain, Attack, Release, etc.) |
| **Graph** | Transfer curve | Gain reduction meter |
| **Attack/Release** | None (instant) | Yes (time-based) |
| **Complexity** | Minimal | Moderate |
| **Use Case** | Fast, aggressive | Precise, transparent |

[SRC: IL-MAN]

---

## UI Workflow Tips

### Tip 1: Use the Graph for "Before/After" Reference
- Before adjusting: Note the curve shape
- After adjusting: Observe how much the curve "bent"
- More bend = more saturation/distortion

### Tip 2: Automate Threshold for Dynamic Control
- Create an automation clip for the Threshold knob
- Draw a downward ramp during a drum fill for increasing aggression
- Draw spikes at specific kick hits for extra punch

### Tip 3: Use Post Gain for Gain Staging
- If Soft Clipper is your *first* insert, set Post to 0 dB
- If Soft Clipper is *mid-chain*, use Post to drive into the next plugin

### Tip 4: Right-Click → "Browse Presets" is Useless
- Soft Clipper has no factory presets (it's too simple)
- Save your own via the dropdown menu at the top-left

[SRC: REPUTABLE]

---

## What's NOT in the UI (But Should Be)

### Missing Features
1. **Gain Reduction Meter:** No visual indicator of how much clipping is occurring
   - **Workaround:** Watch the Fruity Limiter plugin on the master (or use a separate metering plugin)

2. **Mid/Side Processing:** No separate control for center vs sides
   - **Workaround:** Use Soft Clipper inside Patcher with a Mid/Side splitter

3. **Wet/Dry Mix Knob:** No parallel processing option
   - **Workaround:** Duplicate track and blend (or use Patcher)

4. **Lookahead:** No pre-ring prevention
   - **Workaround:** Soft clipping doesn't need lookahead (it's instant waveshaping)

[SRC: REPUTABLE]

---

## Right-Click Menu Deep Dive

### Parameter Knobs (Threshold & Post)
**Options:**
- **Edit events:** Opens automation clip editor
- **Type in value:** Enter exact dB value (e.g., "-2.5")
- **Reset:** Returns to default (0 dB for both)
- **Copy value:** Copy parameter state
- **Paste value:** Paste previously copied state

**Hidden Trick:**
- **Shift + Mouse Wheel:** Fine-tune parameter with mouse wheel
- **Ctrl + Click:** Reset to default

[SRC: IL-MAN]

---

## UI Performance & CPU Impact

### Display Refresh Rate
- 30 FPS (updates curve 30 times per second)
- No impact on audio processing (separate threads)

### CPU Cost of UI
- **With UI Open:** ~0.1% CPU
- **With UI Closed:** ~0.0% CPU (UI not rendered)
- **Conclusion:** Keep UI open if you want visual feedback; no performance penalty

[SRC: REPUTABLE]

---

## Accessibility Features

### Colorblind Mode
- **Status:** No specific colorblind palette
- **Workaround:** Transfer curve is shape-based (not color-dependent)

### Keyboard Shortcuts
- **Tab:** Cycle between Threshold and Post knobs
- **Arrow Keys:** Adjust selected knob in 0.1 dB increments
- **Shift + Arrow Keys:** Adjust in 1 dB increments

[SRC: IL-MAN]

---

## Summary: UI Mental Model

> **Fruity Soft Clipper's UI is a two-knob waveshaper:**
> 1. **Threshold** = "Where does the ceiling begin?"
> 2. **Post Gain** = "How loud after hitting the ceiling?"
>
> The **transfer curve** shows you the exact shape of the saturation. More curve = more distortion.
>
> There's no attack/release, no sidechain, no multiband controls—just pure, instantaneous waveshaping. This simplicity is the plugin's strength.

**Pro Tip:** If you find yourself wishing for more controls, you probably need Fruity Limiter or Maximus instead.

[SRC: IL-MAN + REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
