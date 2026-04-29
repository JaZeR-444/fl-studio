# Technical Specs: Control Surface Mechanics

## 1. Internal Controller Protocol

*   **Data Type:** Floating Point (0.0 to 1.0).
*   **Resolution:** High Precision (Internal FL automation resolution, typically 1/128 or higher with smoothing).
*   **Smoothing:** Control Surface knobs have built-in smoothing options (Response time) to prevent "Stepping" artifacts when automating parameters rapidly.

## 2. Z-Order Rendering (The Layer Stack)

Control Surface renders elements using a Painter's Algorithm (Back to Front).

1.  **Background Color:** The lowest layer.
2.  **Bevels:** Can be ordered amongst themselves.
3.  **Controls (Knobs/Sliders):** Rendered on top of Bevels.
4.  **Labels:** Always rendered **on top** of Knobs/Sliders (usually).
5.  **Keyboards:** Rendered on top of Labels.
*   **Conflict:** If you put a Knob *over* a Slider, you might not be able to click the Slider. Use the "Send to Back" command to fix click-masking issues.

## 3. Vector Scaling (.ilcontrol)

*   **Technology:** Unlike VST2 bitmaps (which get blurry), Control Surface uses XML-based vector definitions.
*   **Scaling:** When you resize a knob in Edit Mode, it re-rasterizes the vector at the new resolution.
*   **Performance:**
    *   Static GUI: 0% CPU.
    *   Animation: When a knob moves, it redraws. Heavily complex vector knobs with "Shadows" and "Blur" enabled in Control Creator can start to consume GPU/CPU resources if you have 100 of them moving at once.

## 4. ID Persistence

*   **Renaming:** When you Rename a control in Control Surface, FL Studio updates the Internal Controller ID.
*   **Warning:** If you have already linked "Knob 1" to a synth, and then you rename it to "Cutoff", the link *usually* holds. However, if you Delete "Cutoff" and create a new knob called "Cutoff", the link is broken. The link is tied to the unique Instance ID, not the string name.
