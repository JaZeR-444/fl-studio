# Common Workflows: Dashboard

## 1. Creating a Custom Component (INI Hacking)

You want to make a knob that looks like a radioactive symbol.

1.  **Location:** Go to `...FL Studio\Plugins\Fruity\Generators\Dashboard\Artwork`.
2.  **Create:** Make a new folder `Radioactive`.
3.  **Image:** Create `knob_strip.png`. It must be a vertical or horizontal strip of the knob in every position.
4.  **INI:** Create `Radioactive.ini`.
    ```ini
    [Info]
    Name=Radioactive Knob
    Kind=0
    Foreground=knob_strip.png
    Background=bg.png
    ```
5.  **FL:** Open Dashboard -> Add Control -> Radioactive Knob.

## 2. Hardware Synth Control (The "Juno" Panel)

1.  **Map:** Find the MIDI Implementation Chart for your synth (e.g., Cutoff = CC 74, Res = CC 71).
2.  **Dashboard:** Add 2 Knobs.
3.  **Config:**
    *   Right-click Knob 1 -> Controller Number -> 74.
    *   Right-click Knob 2 -> Controller Number -> 71.
    *   Name them "Cutoff" and "Resonance".
4.  **Port:** Set Wrapper Output Port to match your MIDI Interface.
5.  **Result:** Automation Clips in FL Studio now control your analog hardware.

## 3. Opening Legacy Projects (Warning)

1.  **Scenario:** You open a project from FL Studio 9 (2010).
2.  **Issue:** It sounds wrong.
3.  **Check:** Look for Dashboard instances.
4.  **Reason:** Old projects heavily relied on Dashboard for "Internal Controller" mapping before Patcher existed.
5.  **Fix:** Do not delete them. Control Surface cannot import Dashboard presets. You must maintain the legacy plugin.

## 4. Bypassing "Note Off"

1.  **Problem:** Dashboard buttons usually send a value when pressed (On) and released (Off).
2.  **Goal:** Trigger a sample only on press.
3.  **Solution:**
    *   Use a **Switch** (Kind=4).
    *   Set behavior to "Momentary" isn't strictly an option in basic Dashboard properties like Control Surface.
    *   Instead, Link the button to a `Fruity Formula Controller`.
    *   Formula: `Max(a, 0)`.
    *   Actually, Dashboard is quite rigid. The best workaround is to use a **Selector** that resets itself or use Control Surface instead.
