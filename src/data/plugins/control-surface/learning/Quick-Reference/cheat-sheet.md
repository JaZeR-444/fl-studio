# Control Surface: The custom UI Builder

> **Scope:** UI Design, Macro Control, and Patcher Integration.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Medium (Linking Logic) / High (Graphic Design).

## 🧠 The "Macro" Concept
Control Surface is not a sound generator; it is a **Meta-Plugin**. It provides a blank canvas where you can place knobs, sliders, and buttons. These controls do nothing on their own—they must be **Linked** to other parameters in FL Studio.

**Signal Flow:**
`User Input` -> **[CONTROL SURFACE KNOB]** -> **[INTERNAL LINKING LINK]** -> **[TARGET PARAMETER (e.g., Sytrus Cutoff)]**

*   **Critical Nuance:** Control Surface is the primary interface for **Patcher** presets. If you open a complex Patcher preset, the "GUI" you see is actually a Control Surface instance hidden inside the "Map".

---

## 🎛️ Section 1: Construction Mode

### The Edit Button (E)
*   **Locked (Play Mode):** You can turn knobs. You cannot move them.
*   **Unlocked (Edit Mode):** Controls have **Red Outlines**. You can drag, resize, and right-click them.
*   **Bevels:** These are rectangular panels used to group controls. They have **Z-Order** (Right-click -> Order -> Send to Back) so you can stack knobs on top of them.

### Control Types
| Type | Function | Best Use |
| :--- | :--- | :--- |
| **Knob** | Rotary control (0-100%). | Filter Cutoff, Volume, Amount. |
| **Slider** | Linear control (Vertical/Horizontal). | Faders, ADSR Envelopes. |
| **Button** | Momentary or Latching (Toggle). | On/Off switches, Triggering samples. |
| **XY Pad** | 2-Axis Vector control. | Controlling Cutoff + Resonance simultaneously. |
| **Digits** | Numerical LED display. | Showing BPM, Pitch, or exact values. |
| **Label** | Static Text. | Naming sections ("Filter", "LFO"). |
| **Keyboard** | Virtual MIDI Keys. | Testing synths without a MIDI controller. |

---

## 🔁 Section 2: Integration Logic

### How to Link (The Setup)
1.  **Create:** Add a Knob to Control Surface. Rename it "Super Filter".
2.  **Target:** Open your synth (e.g., Harmor). Right-click the Filter Cutoff knob.
3.  **Link:** Select **"Link to controller"**.
4.  **Source:** Under "Internal controller", select **Control Surface - Super Filter**.
5.  **Result:** Turning the Control Surface knob now turns the Harmor knob.

### Patcher Integration
In Patcher, Control Surface works differently:
*   **Outputs:** Every control you add (Knob, Slider) appears as a **Red Output Node** on the side of the Control Surface module in the Map.
*   **Wiring:** You physically draw a cable from the Control Surface node to the Input node of the target plugin.

---

## ⚡ Technical Specs: The Control Creator

Control Surface comes with a standalone vector design tool called **Control Creator**.

*   **Access:** Right-click blank space -> Control Creator.
*   **Format:** `.ilcontrol` (Vector Graphics).
*   **Properties:**
    *   **Cap:** The rotating part of the knob.
    *   **Body:** The static background of the knob.
    *   **Encoder Mode:** Infinite rotation vs fixed limits.
    *   **Scaling:** Because they are vector-based, they look sharp at any size (4K ready).
*   **Saving:** Save to `...\FL Studio\Plugins\Fruity\Effects\Control Surface\Artwork\Styles`.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Performance Dashboard"
1.  **Goal:** Create a live performance view.
2.  **Layout:** Add 8 huge Sliders and 8 Buttons.
3.  **Linking:** Link Sliders to Mix Levels of 8 tracks. Link Buttons to "Mute" states.
4.  **Touch:** If you have a touch-screen laptop, select "Multi-touch" in options.
5.  **Result:** You have a custom DJ mixer on your screen.

### 2. The "Mega-Macro" (One Knob to Rule Them All)
1.  **Knob:** Create one massive knob called "Build Up".
2.  **Links:**
    *   Link to Reverb Dry/Wet (Inverted mapping).
    *   Link to High Pass Filter Cutoff.
    *   Link to Snare Roll Volume.
    *   Link to White Noise Pitch.
3.  **Formulas:** Use the "Mapping Formula" in the Link Dialog to scale them differently (e.g., `Input * 0.5` for Reverb, `Input` for Filter).

### 3. The "Hidden" Notes
1.  **Label:** Add a Label control.
2.  **Text:** Write down the Key of the song, the BPM, or vocal processing notes.
3.  **Color:** Set background to Bright Yellow.
4.  **Placement:** Put it prominent on the screen.
5.  **Usage:** It's a sticky note that travels with the project file.
