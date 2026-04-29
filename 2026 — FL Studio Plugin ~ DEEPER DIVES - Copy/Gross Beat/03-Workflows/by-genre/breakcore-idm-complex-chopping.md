# Breakcore & IDM: The "Infinite Chop" Workflow

Breakcore and IDM (Intelligent Dance Music) require chaos that feels controlled. Gross Beat is the standard tool for this because it allows for "fractal" editing—chopping the chops.

## 🪓 Workflow 1: The "Click & Record" (Performance Chopping)
Instead of drawing automation curves manually (which is slow), "perform" the glitches.

1.  **Setup**:
    *   Load your drum break (Amen, Think, etc.).
    *   Load Gross Beat with a bank full of different stutters/reverses.
2.  **Record**:
    *   Right-click the **Record** button in FL Studio -> **Automation**.
    *   Hit Play.
    *   Click different Gross Beat slots in real-time on the rhythm.
3.  **Refine**:
    *   Open the Playlist. You will see an Automation Clip for the "Slot" parameter.
    *   **Quantize**: Use the "Articulator" tools or simply snap the automation points to the grid to ensure your messy clicks lock to 1/16th notes.

## 🔄 Workflow 2: Resampling "Ad Infinitum"
The complex, metallic texture of Breakcore comes from processing audio that has *already* been processed.

1.  **Layer 1**: Apply a basic "Stutter" pattern in Gross Beat.
2.  **Render**: Export this as a new audio file (or "Consolidate Track").
3.  **Layer 2**: Load the NEW audio. Add a NEW Gross Beat.
    *   Apply "Pitch Shifting" or "Reverse" to the stutters.
4.  **Repeat**: By the 3rd or 4th pass, the audio becomes a granular cloud of noise.
    *   *Pro Tip*: Change the "Resampling" quality (HQ vs Linear) each time to degrade the sound intentionally (digital grit).

## 🧠 Workflow 3: Sidechained Chaos
Link the Gross Beat effect to the Kick drum so glitches only happen on the beat.

1.  **Routing**:
    *   **Kick Channel** -> **Peak Controller**.
    *   **Breakbeat Channel** -> **Gross Beat**.
2.  **Mapping**:
    *   Link Gross Beat **Time Slot** to **Peak Controller LFO**.
    *   **LFO Shape**: Random.
    *   **Trigger**: Pulse (so it picks a new random slot every time the kick hits).
3.  **Result**: The breakbeat constantly reorganizes itself around the kick drum automatically.

## 📐 The "Math" of IDM Grids
*   **Standard Snap**: 1/16 is too boring.
*   **Polyrhythm**: Set snap to **1/12** (Triplets) or **1/24**.
*   **Tuplet Glitch**: In the Time Grid, draw a repeater that repeats every **3/16th** of a beat. This creates a "rushing" or "dragging" feel against a 4/4 grid.
