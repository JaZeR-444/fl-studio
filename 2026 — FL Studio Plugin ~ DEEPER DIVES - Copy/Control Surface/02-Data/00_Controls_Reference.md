# Controls Reference

## Standard Controls
These are the building blocks available when you Right-Click > Add.

### 1. Knobs (Rotary Controls)
-   **Use for:** Most parameters (Cutoff, Volume, Mix).
-   **Properties:**
    -   *Caption:* The name displayed below/above.
    -   *Move Speed:* Sensitivity.
    -   *Default Value:* Where it resets to (Alt-Click).
-   **Note:** Infinite rotary encoders are not simulated; these have fixed start/end points.

### 2. Sliders (Faders)
-   **Use for:** Levels (ADSR, Volume), Mix balances.
-   **Properties:** Vertical or Horizontal orientation.
-   **Tip:** Long throw sliders allow for more precise control than small knobs.

### 3. XY Pads
-   **Use for:** Controlling two parameters at once (e.g., Filter Cutoff + Resonance).
-   **Outputs:** Sends two separate internal controller signals (X and Y).
-   **Setup:** You must link "Control Surface - X" and "Control Surface - Y" separately.

### 4. Buttons / Checkboxes
-   **Use for:** On/Off switches (Mute, Bypass, FX Enable).
-   **Modes:**
    -   *Toggle:* Click to On, Click to Off.
    -   *Momentary:* On only while holding click (great for glitch FX).

### 5. Digits (Number Box)
-   **Use for:** Selecting from a list (e.g., "Preset 1, 2, 3") or precise value entry.
-   **Context:** Very useful for controlling plugins that have "Selector" switches (like Gross Beat slots).

### 6. Labels / Bevels
-   **Use for:** Organization only. They send no data.
-   **Bevels:** Create visual "groups" or boxes around sections of controls.
-   **Labels:** Add text instructions (e.g., "VOCAL CHAIN").

## The "Control Creator"
A separate mini-app launched from Control Surface.
-   **Function:** Lets you design the graphics.
-   **Output:** `.ilcontrol` files.
-   **Import:** You can import these custom skins back into Control Surface.
-   **Key Feature:** You can make "Knobs" that look like anything—even a spinning cat—if you have the animation frames.

## Right-Click Context Menu (Edit Mode)
-   **Align:** Snaps messy controls to the grid.
-   **Space:** Distributes controls evenly (horizontally or vertically).
-   **Sizing:** "Make same width/height" is crucial for professional looks.
