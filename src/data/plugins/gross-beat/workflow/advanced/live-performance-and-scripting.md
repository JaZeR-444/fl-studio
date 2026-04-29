# Live Performance & Scripting

Gross Beat can be the centerpiece of a live set, but it requires setup to avoid "train wrecks" (silence/clicks).

## 🐍 Python MIDI Scripting (The "API" Hack)
FL Studio does not have a specific API just for Gross Beat, but it has a generic MIDI Scripting API.

**The Concept**:
You write a Python script that intercepts buttons on your MIDI controller and sends "Note On" messages to FL Studio.
*   **Button A** -> Sends Note C1 (Slot 1 Volume).
*   **Button B** -> Sends Note C4 (Slot 1 Time).

**Why Script?**
*   **Feedback**: You can tell the controller to light up the LED for the active slot.
*   **Macros**: You can program one button to switch the Time Slot AND the Volume Slot simultaneously (linking them via code instead of presets).

## 🎛️ The "Mix Knob" Automation Secret
A common rookie mistake is automating the "On/Off" button. This causes clicks.
**The Pro Move**: Automate the **Mix Level** knob in the Mixer Rack (the wet/dry knob next to the plugin name).

1.  **Right-Click** the Mix knob -> **Create Automation Clip**.
2.  **Smoothing**: The Mix knob naturally crossfades dry and wet signal.
3.  **Creative Use**:
    *   **50% Mix**: Creates a flanger/chorus effect with time-stretched signals.
    *   **0% to 100% Ramp**: Used for "Tape Stop" transitions (Slowly fading into the stop).

## 🚦 "Init Song with this position"
The #1 Annoyance: You press play, and Gross Beat switches to a random slot because you clicked it 5 minutes ago.

**The Fix**:
1.  Set Gross Beat to **Slot 1 (Empty/Bypass)**.
2.  Right-Click the **Slot Selector** (or the Mix knob).
3.  Select **"Init song with this position"**.
4.  Now, every time you hit Stop/Start, FL Studio forces Gross Beat back to the "Safe" state.

## 🎹 Performance Sets
If you are performing live, organize your slots!
*   **Slots 1-4**: Repeats (1/8, 1/4, 1/2).
*   **Slots 5-8**: Reverses.
*   **Slots 9-12**: Tape Stops.
*   **Color Coding**: Rename your slots! (Right-click slot -> Rename). "STOP", "REV", "GLITCH".
