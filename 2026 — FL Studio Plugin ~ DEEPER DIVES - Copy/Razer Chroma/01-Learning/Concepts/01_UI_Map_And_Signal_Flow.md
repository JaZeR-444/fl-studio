# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

The UI is deceptively simple. It looks like a toy, but it controls physical hardware.

### 1. The Device Selectors (Top)
*   **Icons:** Keyboard, Mouse, Mousepad, Headset, Keypad, Blade (Laptop).
*   **Toggle:** Click an icon to enable/disable that specific hardware type.

### 2. The Pattern/Layer List (Left)
*   **New (+):** add a new lighting layer.
*   **Trash:** Delete layer.
*   **Up/Down:** Change layer priority (Top layers cover bottom layers).

### 3. The Effect Engine (Center)
*   **Type:** The animation style (Audio Level, Wave, Breathing).
*   **Color Picker:** The RGB target.
*   **Speed/Decay:** How fast the light fades out.

### 4. The Audio Analysis (Right)
*   **Input:** Left/Right/Mono/Invert.
*   **Scale:** Sensitivity.

## 🚦 Internal Signal Flow

1.  **FL Mixer Track Audio** -> **Chroma Plugin Input**.
2.  **Peak Detection** -> **Effect Modulation** (e.g., Brightness).
3.  **Razer SDK Bridge** -> **Windows OS**.
4.  **Razer Synapse 3** (Background App) -> **USB Driver**.
5.  **Hardware LED** (Your Keyboard).

## ⚠️ Common Misunderstandings
*   **"It doesn't work with my Corsair/Logitech keyboard."**
    *   *Fact:* Correct. Use "Chroma Connect" compatible devices only. (Though some third-party tools like "Aurora" can bridge them).
*   **"I render the song and the lights don't save."**
    *   *Fact:* This plugin does NOT render video files. It only controls lights in real-time. To capture it, you must use a physical camera.
