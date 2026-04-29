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
