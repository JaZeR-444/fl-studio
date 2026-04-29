# MIDI Pattern Triggering in Gross Beat

Real-time pattern switching is the heart of performing with Gross Beat.

## 🎹 Default Mapping

Gross Beat assigns slots to MIDI notes automatically when the plugin has focus or is linked.

### Volume Slots (Orange)
*   **Range**: MIDI Notes **C1** to **B3** (Standard MIDI numbering).
*   **Keys**: White keys typically map to the slots sequentially (Slot 1 = C1, Slot 2 = D1, etc. depending on keyboard mapping mode).
*   **Black Keys**: Often used for momentary or "empty" slots depending on preset.

### Time Slots (Green)
*   **Range**: MIDI Notes **C4** to **B6**.
*   **Keys**: Mapped sequentially to the 36 time slots.

## 🔗 Setup Methods

### Method 1: Direct MIDI (Live Performance)
1.  Select the Gross Beat track in the Mixer.
2.  Ensure your MIDI keyboard is active.
3.  Play keys in the C1-B3 or C4-B6 range.
4.  *Note*: Gross Beat must be the focused window/plugin for direct MIDI input unless exclusively linked.

### Method 2: Piano Roll (Automation)
1.  **Fruity Keyboard Controller**: Add this channel to your Rack.
2.  **Link**: Right-click the Gross Beat "Slot" selector (or the specific Time/Volume slot grid).
3.  **Link to Controller**: Select "Link to controller" and choose the Keyboard Controller's "Note" output.
4.  **Draw**: Now you can draw notes in the Piano Roll of the Keyboard Controller to switch slots.

### Method 3: Automation Clips
1.  Right-click the specific Slot you want to trigger.
2.  Select "Create automation clip".
3.  *Drawback*: This creates a continuous automation curve which can be harder to edit than discrete MIDI notes.

## ⏱️ Synchronization Settings

When you hit a key, *when* does the pattern switch? This is controlled by the **Trig (Trigger)** and **Pos (Position)** knobs at the bottom.

*   **Hold**: Pattern is only active while the key is held down. (Good for momentary glitches).
*   **Trig: Off**: Instant switch (can cause clicks).
*   **Trig: 1 Beat**: Waits for the next beat to switch (Musical quantization).
*   **Trig: 4 Beats**: Waits for the next Bar.

## 💡 Best Practices

*   **Dedicate a Slot to "Empty"**: Always keep Slot 1 (or your preferred slot) as a "Bypass" or empty pattern so you can easily return to dry signal.
*   **Use "Hold" for Glitches**: For stutter effects, enable "Hold" so the effect stops the moment you release the key.
