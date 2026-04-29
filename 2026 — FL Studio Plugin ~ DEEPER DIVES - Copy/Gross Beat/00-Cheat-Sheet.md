# GROSS BEAT MASTER CHEAT SHEET

## 📜 The Golden Rules
1.  **The 2-Bar Limit**: You only have **2 Bars** of history. You cannot grab audio from 3 bars ago.
2.  **The Safety Line**: The diagonal line is "Now". Drawing **Above** it = Silence (Future). Drawing **Below** it = Delay (Past).
3.  **The Mix Knob**: NEVER use the Channel Rack mix knob. Use the **Time Mix** / **Vol Mix** knobs inside the plugin to avoid phasing.

## 🎛️ Essential Controls

| Control | Function | Pro Tip |
| :--- | :--- | :--- |
| **Time Grid (Green)** | Pitch & Speed | Horizontal = Stop. Up = Reverse. Down = Slow. |
| **Vol Grid (Orange)** | Gating & Ducking | Use for Sidechaining (Kick ducking). |
| **ATT Knob** | Volume Smoothing | Set to **2-5ms** to stop clicking on gates. |
| **Click Red.** | Time De-clicking | Always **ON** for melodies, **OFF** for sharp drum glitches. |
| **Trig (Trigger)** | Sync Timing | Set to **1 Beat** for quantized jumps, **Off** for finger drumming. |

## ⚡ Quick Recipes

### 1. Instant Half-Speed (The "Trap" Sound)
*   **Grid**: Time
*   **Shape**: Sawtooth Wave.
*   **Draw**: Start at **Top-Left**. End at **Bottom-Right** of the *2nd Beat* vertical marker (spanning 1 beat of time).
*   **Math**: Play 1 beat of audio over 2 beats of time.
*   **Shortcut**: `Presets > Momentary > Slot 2`.

### 2. Tape Stop
*   **Grid**: Time
*   **Shape**: Curve to Horizontal.
*   **Draw**: Start on Safety Line. Curve down until the line is **Flat**.
*   **Tension**: Drag tension handle DOWN for a "Turntable" inertia stop.

### 3. Reverse (1 Bar)
*   **Grid**: Time
*   **Shape**: "X" Shape (relative to Safety Line).
*   **Draw**: Start at **Bottom-Left** (-1 Bar). Draw line to **Top-Right** (Now).
*   **Result**: Audio plays backwards from the buffer.

### 4. Sidechain Ducking
*   **Grid**: Volume
*   **Snap**: 1/4 Beat.
*   **Draw**: Start at 0% (Bottom). Curve up to 100% (Top) halfway through the beat.
*   **Result**: Kills the transient, lets the Kick punch through.

## 🖱️ Mouse & Grid Secrets
*   **Right-Click Point**: Change curve type (Single Curve, Double Curve, Hold/Step).
*   **Alt + Drag**: Bypass snap (Freehand).
*   **Shift + Drag**: Lock vertical/horizontal movement.
*   **Right-Click Slot**: "Init song with this position" (Fixes the "Wrong pattern on start" bug).

## 🚑 Troubleshooting (Why is it broken?)

*   **"It clicks loudly!"**
    *   Turn **Click Reduction** ON.
    *   Increase **ATT** knob (Volume) to 5ms.
    *   Check if your curve has sharp vertical jumps.
*   **"It's silent at the start!"**
    *   You are trying to play "1 Bar Ago" but the song just started.
    *   **Fix**: Automate the Mix knob to 0% for the first bar.
*   **"My melody sounds thin/hollow!"**
    *   Phase Cancellation.
    *   **Fix**: Don't use 50% Mix. Commit to 100% Wet or 0% Wet for time effects.

## 🧠 Advanced Math
*   **Horizontal Line** = 0% Speed (Pause).
*   **Diagonal (1:1)** = 100% Speed (Normal).
*   **Steep Diagonal (2:1)** = 50% Speed (-1 Octave).
*   **Upward Slope (-1:1)** = -100% Speed (Reverse).

---
*Keep this file open while producing.*
