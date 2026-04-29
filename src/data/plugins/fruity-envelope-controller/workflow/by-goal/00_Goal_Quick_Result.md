# Goal: Perfect Sidechain Ducking (Envelope Controller)

## Routing Context
*   **Trigger:** MIDI Pattern "SC Trigger" (Short 1/16th notes).
*   **Target:** Bass Mixer Track Volume Fader.
*   **Controller:** Fruity Envelope Controller.

## Step-by-Step Setup
1.  Initialize **Fruity Envelope Controller**.
2.  Go to the **Env** tab of Articulator 1.
3.  **Draw the "Scoop":**
    *   Place Point 1 at **100%** (Top Left).
    *   Place Point 2 at **0%** (Bottom Center, slightly to the left).
    *   Place Point 3 at **100%** (Top Right).
4.  Right-click the line between Point 1 and 2 -> Set to **Bezier Curve**. Pull it down to create a smooth scoop.
5.  Right-click the **Bass Volume Fader** -> **Link to controller**.
6.  Select **Env Controller (Articulator 1)**.
7.  **Mapping Formula:** Ensure it is set to `Input` (NOT inverted, because we drew the "duck" shape manually).

## Result
*   Every time your "SC Trigger" note hits, the bass fader will perfectly trace the "Scoop" shape. 

## Vibe mapping
*   **Upbeat:** Keep the scoop short and fast.
*   **Moody:** Lengthen the "Sustain" part of the scoop to create a slower breathing effect.

## Pitfalls + Fixes
*   **Clipping:** If the Bass pops at the start, move Point 1 slightly to the right to add a micro-attack. [SRC: REPUTABLE]
