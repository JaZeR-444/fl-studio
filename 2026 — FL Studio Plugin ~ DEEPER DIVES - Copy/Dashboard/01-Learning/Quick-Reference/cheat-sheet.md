# Dashboard: The Legacy Controller

> **Scope:** Internal MIDI Controller, Custom Panels, and Hardware Integration.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High (Scripting required for custom setups).

## 🧠 The "MIDI Hardware" Concept
Before Control Surface existed, there was **Dashboard**. Its primary purpose was not just internal control, but **External MIDI Hardware** control.
*   **Why use it?** If you have a hardware synth (e.g., Roland Juno-106) and you want to control its filter cutoff from FL Studio, you can build a Dashboard panel that sends specific MIDI CC messages to the synth.
*   **Legacy Status:** For purely internal internal linking, use **Control Surface**. For external hardware abstraction, Dashboard is still valid because of its "Patch Selector" banks.

**Signal Flow:**
`User UI` -> **[DASHBOARD SCRIPT]** -> **[MIDI OUT PORT]** -> **[EXTERNAL HARDWARE]**

---

## 🎛️ Section 1: Component Types (The "Kind" ID)

Dashboard uses `.ini` files to define components.

| Kind ID | Name | Function |
| :--- | :--- | :--- |
| **0** | **DigiWheel** | Image-strip knob (Horizontal strip of frames). |
| **1** | **Slider** | Vertical fader. |
| **2** | **Wheel** | Vector line on a circle. |
| **3** | **Panel** | Background image container. |
| **4** | **Switch** | 2-State Logic (On/Off). |
| **5** | **Label** | Text. |
| **6** | **Image** | Static picture. |
| **7** | **Selector** | Dropdown list (Internal values). |
| **8** | **Patch Selector** | **Power Feature.** Sends MIDI Bank/Program Change messages. |
| **9** | **Page Selector** | Tabs for multi-page interfaces. |

---

## 🔁 Section 2: MIDI Out Configuration

Dashboard does nothing unless you configure the MIDI Output.

1.  **Setting the Port:** In the Plugin Settings (Wrapper), set the "Output Port" to a number (e.g., 5).
2.  **Hardware:** In FL Studio MIDI Settings, set your MIDI Interface (e.g., USB to MIDI Cable) to Port 5.
3.  **Specific Controllers:**
    *   Right-click a knob on Dashboard.
    *   Select "Controller number".
    *   Set it to the CC number of your synth (e.g., CC 74 for Filter Cutoff).

---

## ⚡ Technical Specs: The Patch Selector

This is the one feature Control Surface lacks.

*   **Syntax:** Defined in the `[Items]` section of the INI.
*   **Format:** `Patch Name=MSB,LSB,Program`
*   **Example:** `Strings=0,0,1`
*   **Behavior:** When you select "Strings" from the dropdown, Dashboard instantly fires three MIDI messages:
    1.  Control Change 0 (Bank MSB) Value 0.
    2.  Control Change 32 (Bank LSB) Value 0.
    3.  Program Change Value 1.
*   **Result:** Your hardware synth switches presets instantly.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Hardware Librarian"
1.  **Goal:** Save presets for your external Korg/Moog synth inside the project.
2.  **Build:** Create a Patch Selector.
3.  **Code:** Write an INI file listing every patch on your synth `[Items]`.
4.  **Save:** Save this as a Dashboard Preset.
5.  **Usage:** Now you don't need to touch the synth. Just select "Lead 1" in FL, and the hardware updates.

### 2. The Legacy "Orchestral Keyswitcher"
Before "Key Switches" were common in Piano Roll, people used Dashboard.
1.  **Selector:** Create a Selector with values "Staccato", "Legato", "Pizzicato".
2.  **Link:** Link this selector to a "Fruity Keyboard Controller".
3.  **Map:** Map the Keyboard Controller to the Keyswitch range of Kontakt.
4.  **Result:** Selecting "Staccato" on Dashboard presses C0 on the virtual keyboard.

### 3. "DigiWheel" Animation
1.  **Concept:** You can use Dashboard as a crude animation player.
2.  **Asset:** Create a PNG strip with 128 frames of a dancing robot.
3.  **Component:** Add a "DigiWheel".
4.  **Link:** Link a Peak Controller to the DigiWheel.
5.  **Result:** The robot dances when the beat hits.
