# Common Workflows: FPC

## 1. Multi-Output Routing (The "Pro" Mix)

By default, FPC sums everything to one Mixer Track.

1.  **Wrapper:** Route FPC to Mixer Track 10.
2.  **Pad 1 (Kick):** Set Output to **0** (Track 10).
3.  **Pad 2 (Snare):** Set Output to **1** (Track 11).
4.  **Pad 3 (Hat):** Set Output to **2** (Track 12).
5.  **Auto-Map:** FPC has a "Spread outputs" option in the menu that automatically assigns sequentially, but manual assignment is better for grouping (e.g., all Toms to Track 13).

## 2. Controller Mapping (MPC Style)

1.  **Hardware:** Plug in your Akai MPD or Maschine.
2.  **Problem:** Hitting Pad 1 on hardware triggers Pad 4 on FPC.
3.  **Fix:**
    *   Click "Map notes for entire bank".
    *   FPC waits.
    *   Hit Pad 1 on Hardware (Maps to FPC Pad 1).
    *   Hit Pad 2...
    *   Repeat x16.
4.  **Save:** Click "Save note layout" so you never do this again.

## 3. The Slicex -> FPC Pipeline

1.  **Source:** A drum loop in the Playlist.
2.  **Slice:** Double-click to open in **Edison** or **Slicex**.
3.  **Chop:** Add markers (Auto-slice).
4.  **Export:** "Drag / Copy Sample Selection".
5.  **Drop:** Drag the selection into FPC.
    *   *Alternative:* In Slicex, "Dump to Piano Roll" sends the MIDI, but "Export Regions to FPC" is not a direct menu item. You must drag the slices manually or use the "Open in new channel" workflow, then copy/paste.
    *   *Correction:* Dragging from Edison's "Drag Copy" button directly onto an FPC pad loads that slice.

## 4. Double-Kick Layering

1.  **Goal:** A kick with "Click" and "Sub".
2.  **Pad:** Select the Kick Pad.
3.  **Layers:**
    *   Layer 1: "Clicky_Kick.wav". Volume: 100%.
    *   Layer 2: "808_Sub.wav". Volume: 80%.
4.  **Envelope:**
    *   Go to Layer 2 (Sub).
    *   Active the **Volume Envelope** (ADSR).
    *   Increase Attack slightly (10ms) to let the Click from Layer 1 punch through before the Sub swells in.
