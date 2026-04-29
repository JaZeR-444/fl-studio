# UI Tour & Core Concepts

## The Two Modes
Control Surface has a split personality. You must switch between them using the **Edit (E)** button (often a wrench icon or "Edit" checkbox depending on version).

### 1. Edit Mode (The Builder)
- **Visual Cue:** Grid lines appear, and controls have red outlines when hovered.
- **What you can do:**
  - Add new controls (Right-click > Add).
  - Move and resize controls.
  - Right-click controls to change styles, colors, and names.
  - Access the "Control Creator" (for custom graphics).

### 2. Performance Mode (The User)
- **Visual Cue:** The grid disappears. It looks like a finished plugin.
- **What you can do:**
  - Turn the knobs and move the sliders.
  - This is the mode you use when making music.

## Core Terminology
- **Control / Widget:** An individual element like a Knob, Slider, or Button.
- **Style:** The visual "skin" of a control (e.g., "Dark", "Vector", "Grey").
- **Properties:** The settings of a control (Min/Max values, default value, name).
- **Internal Controller:** The invisible data stream that flows *out* of a Control Surface knob and *into* a target parameter.

## The First 5 Minutes: Your First Dashboard
1.  **Load:** Add "Control Surface" to the Channel Rack (or as an effect slot, though Channel Rack is common for global control).
2.  **Edit:** Click the **Edit (wrench)** button.
3.  **Add:** Right-click background > Add > Knob > Grey > Large.
4.  **Rename:** Right-click the new knob > Rename > "Master Vol".
5.  **Link:**
    - Go to FL Studio's Master Mixer track.
    - Right-click the Volume fader.
    - Select **"Link to controller"**.
    - In the "Internal controller" list, select **Control Surface > Master Vol**.
    - Click "Accept".
6.  **Test:** Turn your Control Surface knob. The Master Volume moves!

## Common Beginner Traps
-   **"I can't move the knob!"** -> You are probably still in **Edit Mode**. Turn it off.
-   **"I deleted the plugin and my link is broken."** -> Links are permanent. If you delete Control Surface, the target parameter (e.g., Master Vol) waits for a signal that no longer exists. You must "Link to controller" > "Reset" to fix it.
-   **"The knob moves too fast."** -> You didn't adjust the **Min/Max** values in the knob properties, or the Mapping Formula in the Link dialog.
