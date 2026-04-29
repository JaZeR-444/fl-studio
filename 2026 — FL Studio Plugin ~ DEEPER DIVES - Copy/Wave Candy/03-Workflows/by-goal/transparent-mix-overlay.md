# Transparent Mix Overlay (Wave Candy)

## Goal
Set up a permanent, non-intrusive waveform view that stays on your second monitor or mixer area.

## Technical Steps
1. **Routing:** Load Wave Candy on the **"Current" (Selected)** mixer track. This ensures it displays whatever track you currently have clicked.
2. **Visual Mode:** Select **Oscilloscope**.
3. **Transparency:**
   - Go to the **Window** settings.
   - Set the background color alpha to **0** (fully transparent).
4. **Behavior:**
   - Enable **Detached** in the plugin wrapper settings.
   - Enable **Keep on Top**.
   - Enable **Click Through** (if available in your OS/version) to prevent the window from stealing focus.
5. **Positioning:** Drag the window to the bottom of your screen or over your Mixer meters.

## Why it works
Visual feedback helps identify hidden transients or DC offset without having to constantly open and close analysis windows. Transparent mode keeps the DAW clutter-free.
