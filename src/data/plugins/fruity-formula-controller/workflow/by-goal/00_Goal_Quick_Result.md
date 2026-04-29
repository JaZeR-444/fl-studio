# Goal: The "Orbital" Panner (Fruity Formula Controller)

## Routing Context
- **Target:** A Spacey Synth Lead or Pad.
- **Position:** Needs **two** Formula Controllers.

## Step-by-Step Setup
1.  **X-Axis (Pan):** 
    - Load Formula Controller 1. 
    - Formula: `0.5 + (Sin(SongTime*Pi)*0.5)`
    - Compile.
2.  **Y-Axis (Volume/Distance):** 
    - Load Formula Controller 2.
    - Formula: `0.5 + (Cos(SongTime*Pi)*0.5)`
    - Compile.
3.  **The Link:** 
    - Link your instrument's **PAN** to Controller 1.
    - Link your instrument's **VOLUME** to Controller 2.

## Result
- The sound will now "circle" the listener. When it's at the far left, it's at medium volume. As it moves to the center, it gets louder (closer), then moves to the right and gets quieter (further away).

## Vibe Check
- **Spacey/Psychedelic:** Creates a true 3D orbital sensation that feels much more natural than standard auto-panning.

## Pitfalls + Fixes
- **Pitfall:** "It circles too fast."
  - **Fix:** Change `SongTime*Pi` to `SongTime*Pi*0.5` to cut the speed in half. [SRC: REPUTABLE]
