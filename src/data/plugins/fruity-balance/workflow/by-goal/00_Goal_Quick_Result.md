# Goal: Sidechain Ducking Manual (Fruity Balance)

## Routing Context
- **Target:** Bass or Melody Bus.
- **Position:** Place **Fruity Balance** at the start of the FX chain (Slot 1).

## Step-by-Step Setup
1.  On the target track, load **Fruity Balance**.
2.  Right-click the **Volume** knob -> **Create Automation Clip**.
3.  In the **Playlist**, use the **Paint Tool** to draw a recurring shape every time the Kick hits.
4.  **The Shape:** 
    - Start at 100%. 
    - Drop instantly to 0% (or 20% for a softer vibe) on the Kick hit.
    - Curve back up to 100% over the next 1/8th note.
5.  **Refine:** Change the curve type to **Bezier** to adjust the "snap" of the bounce.

## What To Listen For
- A rhythmic "pumping" sensation. Unlike a sidechain compressor, this is 100% predictable and doesn't rely on the kick's actual volume level.

## Vibe Check
- **Upbeat:** Keep the curve sharp and fast.
- **Moody:** Make the recovery (return to 100%) slower and more gradual.

## Pitfalls + Fixes
- **Pitfall:** "Digital clicking."
  - **Fix:** Avoid a perfectly vertical line down to zero. Give the "drop" a tiny bit of horizontal distance (approx. 2ms) to prevent slicing the waveform too aggressively. [SRC: REPUTABLE]
