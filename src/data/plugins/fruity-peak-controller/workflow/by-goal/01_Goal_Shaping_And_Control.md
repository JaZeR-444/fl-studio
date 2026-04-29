# Goal: Dynamic Reverb Ducking (The "Expensive" Space)

## Routing Context
- **Target:** Lead Vocal.
- **Position:** Place **Fruity Peak Controller** on the Vocal mixer track.
- **Effect:** A Reverb plugin on a separate **Send Track**.

## Step-by-Step Setup
1.  On the **Vocal Track**, load Peak Controller.
2.  On the **Reverb Send**, load your reverb (e.g., Fruity Reeverb 2).
3.  Right-click the Reverb **Wet/Mix** knob -> **Link to controller**.
4.  Assign: **Peak Controller - Peak**.
5.  Set **Mapping Formula** to `1-Input` (Inverted).
6.  **Tweak Peak Controller:**
    - **Base:** 40% (This is the amount of reverb during the pauses).
    - **Vol:** -30% (This is how much the reverb drops when singing starts).
    - **Decay:** 60% (Adjust to match the tempo).

## What To Listen For
- The vocal should sound clear and "dry" while the artist is speaking, but as soon as they stop, the reverb tail should "bloom" and fill the silence.

## Automation Idea
- Link the **Decay** knob to an automation clip to make the reverb bloom slower during the outro. [SRC: REPUTABLE]
