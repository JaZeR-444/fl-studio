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
