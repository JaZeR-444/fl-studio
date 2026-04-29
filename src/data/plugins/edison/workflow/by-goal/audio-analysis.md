# Audio Analysis Workflow (Edison)

## Goal
Inspect an audio file for technical errors like clipping, DC offset, or frequency resonance.

## Technical Steps
1. **Waveform Inspection:**
   - Look for "flat-topped" waveforms. This indicates **Digital Clipping**.
   - If the waveform is not centered on the horizontal axis, it has **DC Offset**. Use `Right-click > Tools > Center` to fix.
2. **Spectral Analysis:**
   - Switch to **Spectral View** (`Shift + S`).
   - Identify constant horizontal lines. These are **Resonant Hums** or constant interference.
   - Use the **Gain** tool on a specific frequency selection to surgically reduce them.
3. **Format Check:**
   - Check the status bar for Sample Rate and Bit Depth.
   - Use **Resample** (`Alt + R`) to convert if necessary for your project.

## Why it works
Edison's 32-bit floating-point engine provides extremely high visual resolution, allowing you to see problems that are often inaudible but affect the final mix quality.
