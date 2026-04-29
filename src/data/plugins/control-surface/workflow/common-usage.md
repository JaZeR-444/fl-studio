# Common Workflows: Control Surface

## 1. Building a "Patcher" Front-End

When you build a complex effect chain in Patcher, you don't want to open 10 plugins to tweak it. You want a "Front Panel".

1.  **Open Patcher:** Go to the "Map" tab.
2.  **Add Control Surface:** It usually exists by default (Surface Tab).
3.  **Design:**
    *   Add 4 Knobs: "Distortion", "Filter", "Delay", "Mix".
    *   Add a Bevel behind them to group them.
    *   Right-click Knobs -> Rename (This is crucial for identifying them in the Map).
4.  **Wiring:**
    *   Switch to Map.
    *   Right-click the target plugins (e.g., Fruity Delay 3) -> Inputs -> Parameters -> Wet Level.
    *   Draw a red wire from `Surface -> Delay` to `Delay 3 -> Wet Level`.

## 2. Multi-Page Layouts (Tabs)

Did you know Control Surface supports multiple pages?

1.  **Setup:** You have too many controls for one screen.
2.  **Add:** Right-click empty space -> "Add surface".
3.  **Result:** A new Tab appears at the bottom ("Surface 2").
4.  **Usage:**
    *   Page 1: "Performance Controls" (Big knobs).
    *   Page 2: "Setup/Tweaking" (Small calibration sliders).

## 3. Importing Custom Vector Graphics

You want your plugin to look like a vintage 1970s compressor.

1.  **Control Creator:** Open specific tool.
2.  **Design:**
    *   Change "Cap Color" to Bakelite Black.
    *   Change "Pointer" to a white triangle.
    *   Add a chrome ring.
3.  **Drag & Drop:**
    *   You don't need to save the file.
    *   Click the "Cursor" icon in Control Creator and drag it DIRECTLY onto the Control Surface window in FL Studio.
4.  **Result:** Instant custom knob.

## 4. The "Boolean" Logic Switch

Creating a switch that toggles between two different FX chains.

1.  **Control:** Add a **CheckBox**.
2.  **Value:** It outputs 0 (Off) or 1 (On).
3.  **Patcher:**
    *   Connect CheckBox to `Fruity Formula Controller`.
    *   Formula A: `a` (Output 0 or 1).
    *   Formula B: `1-a` (Output 1 or 0).
4.  **Route:** Formula A controls the Mute of Chain 1. Formula B controls the Mute of Chain 2.
5.  **Result:** Clicking the box instantly swaps chains.
