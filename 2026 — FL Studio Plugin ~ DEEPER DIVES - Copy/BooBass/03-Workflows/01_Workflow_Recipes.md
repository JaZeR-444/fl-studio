# Workflow Recipes

## Recipe 1: The "Amped" BooBass
BooBass sounds dry by default (DI signal). To make it real:
1.  **Load** BooBass.
2.  **Route** to Mixer Track 5.
3.  **Add** `Fruity Blood Overdrive` (Pre-amp warmth).
    -   Drive: 10% (Just a little color).
4.  **Add** `Fruity Convolver` (Cabinet simulation).
    -   Load a "Bass Cabinet" impulse response.
5.  **Result:** Instantly sounds like a live recording in a room.

## Recipe 2: The "Glide" Lead
While it's a bass, it makes a cool lo-fi lead sound in high octaves.
1.  **Play** notes in the C5-C6 range.
2.  **Enable** Slide on every transition.
3.  **Add** `Fruity Delay 3`.
4.  **Result:** A weird, plucky, sliding sine-like lead that sounds like 90s G-Funk.

## Recipe 3: Dynamic Velocity Mapping
1.  **Link** Note Velocity to the **Mid** knob (using "Link to controller" > Mapping formula).
2.  **Formula:** `Input` (Linear).
3.  **Result:** Playing hard not only increases volume/brightness (internal engine) but now actively pushes the Mid range forward, making accents pop out of the mix more.
