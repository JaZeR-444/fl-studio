# Linked Slots: Creating Complex Combo Effects

One of Gross Beat's most powerful but overlooked features is the ability to link a **Time Slot** (Green) with a **Volume Slot** (Orange). This allows you to trigger a specific pitch effect AND a specific volume gate with a single MIDI note.

## 🔗 The Concept
Normally, Time and Volume slots are independent.
*   You press **C4** -> Triggers Time Slot 1.
*   You press **C1** -> Triggers Volume Slot 1.

With **Linking**, pressing **C4** can trigger Time Slot 1 *AND* Volume Slot 1 simultaneously.

## 🛠️ How to Link
1.  **Select the Time Slot** you want to be the "Master" (e.g., Slot 1).
2.  **Select the Volume Slot** you want to pair it with (e.g., Slot 1).
3.  **Right-Click** the **Time Slot button**.
4.  Select **"Link to volume slot"**.
5.  *Visual Check*: A small chain link icon or indicator may appear (depending on skin/version), or simply testing it will confirm. Now, whenever you select that Green Time Slot, the Orange Volume Slot follows automatically.

## 🧪 Combo Recipes

### 1. The "Clean Scratch" (Scratch + Mute)
*   **Time Slot**: A complex scratch pattern (zig-zags).
*   **Volume Slot**: A pattern that is **100% Silent** (Bottom) everywhere *except* during the "forward" movements of the scratch.
*   **Result**: This cleans up the scratch, silencing the "rewind" noise if you only want to hear the forward cuts (creating a "Transformer" scratch effect).

### 2. The "Gated Tape Stop"
*   **Time Slot**: A slow 1-bar Tape Stop (diagonal down).
*   **Volume Slot**: A 1/16th note Trance Gate.
*   **Result**: The audio slows down to a halt, but it "stutters" rhythmically as it falls. This adds a rhythmic grid to the pitch drop, making it easier to mix into a beat.

### 3. The "Reverse Swell"
*   **Time Slot**: 1-Bar Reverse.
*   **Volume Slot**: A slow Fade-In (0% to 100%).
*   **Result**: The reverse audio doesn't just start abruptly; it swells in from silence, creating a perfect transition effect for drops.

## ⚠️ Important Note
*   Linking is stored in the **Preset**. If you change presets, links are lost.
*   If you trigger a Volume slot manually (via C1-B3), it will *override* the link temporarily until the Time slot is triggered again.
