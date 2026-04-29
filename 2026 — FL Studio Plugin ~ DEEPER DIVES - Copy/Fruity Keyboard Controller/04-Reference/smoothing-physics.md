# Technical Reference: Smoothing Physics (Slew Rate)

How the Attack and Release parameters shape your automation. [SRC: IL-MAN]

## 1. What is Slew?
In electronics, a "Slew Rate" is the maximum speed at which a signal can change. Fruity Keyboard Controller uses its **Attack** and **Release** knobs to control the slew rate of the generated automation data.

## 2. Attack vs. Snap
- **0ms Attack**: The data "snaps" instantly to the new value. (Ideal for rhythmic gating).
- **100ms+ Attack**: The data "glides" toward the value.
- **Physics**: This is essentially a "Low-Pass Filter" for your control data. It rounds off the sharp corners of your MIDI transitions.

## 3. The "Release" Interaction
The **Release** parameter determines how the data behaves when the MIDI note stops.
- **Short Release**: The automation jumps back to its "resting" state (usually 0) immediately.
- **Long Release**: The effect "lingers." For example, if you linked a filter to a note, a long release would keep the filter open for a few seconds after the key is released.

## 4. Latency Considerations
Smoothing does not technically add "latency" (the start time of the signal remains the same), but it does add "perceived delay." 
- If you have a 500ms Attack, you won't hear the full effect of the note until half a second after you play it.
- **Pro Tip**: Use short Attack times for lead sounds where precision is needed, and long Attack times for atmospheric pads.
