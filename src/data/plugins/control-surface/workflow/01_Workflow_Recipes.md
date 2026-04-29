# Workflow Recipes

## Recipe 1: The "Macro" Controller Pattern
This is the standard pattern for cleaning up project automation.

1.  **Insert** Control Surface in the Channel Rack.
2.  **Add** 8 Knobs.
3.  **Label** them generic names: Macro 1, Macro 2, Macro 3...
4.  **Link** Macro 1 to the most important parameter of your Lead Synth (e.g., Cutoff).
5.  **Link** Macro 2 to the Decay time.
6.  **Workflow:** When arranging, ONLY automate "Macro 1" and "Macro 2". Never automate the synth directly.
7.  **Benefit:** If you swap the synth for a different plugin later, you just re-link Macro 1 to the new synth's cutoff. Your automation clips in the playlist remain valid and unbroken.

## Recipe 2: The XY Morph
1.  **Insert** Control Surface.
2.  **Add** an XY Pad.
3.  **Link** X Axis to: Filter Cutoff.
4.  **Link** Y Axis to: Bitcrusher Amount.
5.  **Refine:** In the link settings for Bitcrusher, set the Mapping Formula to `Input * 0.5` so it doesn't get too harsh at the top.
6.  **Play:** Move the puck around for evolving textures that change timbre and grit simultaneously.

## Recipe 3: Multi-Band Splitter Control (Patcher)
1.  **Open** Patcher.
2.  **Add** `Frequency Splitter` (or 3x EQ).
3.  **Route** Low, Mid, and High bands to 3 separate distortion units.
4.  **Surface:** Add 3 Knobs: "Low Drive", "Mid Drive", "High Drive".
5.  **Map:** Link knobs to the Drive amount of each distortion unit.
6.  **Save:** Save as Patcher Preset "Multi-Band Drive".

## Recipe 4: The "Humanizer"
1.  **Add** Control Surface with two knobs: "Timing Slop" and "Velocity Rand".
2.  **Link** "Timing Slop" to the Shift parameter of a layer or groove tool (or manually adjust Swing amounts if linked).
3.  **Link** "Velocity Rand" to a `Fruity Formula Controller` that outputs random values multiplied by this knob, targeting the volume of your Hi-Hats.
