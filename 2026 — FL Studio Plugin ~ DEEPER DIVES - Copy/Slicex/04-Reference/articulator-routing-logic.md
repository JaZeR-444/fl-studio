# Articulator Routing Logic: The Slicex Brain

Slicex features 8 independent Articulation slots. Each slice can be assigned to one slot, allowing for complex per-hit processing. [SRC: IL-MAN-04]

## The Logic Flow:
`MIDI Note -> Slice Marker -> Assigned Articulator (1-8) -> Envelope/LFO -> Mixer Offset`

## High-Value Routing Strategies:

### 1. The "Dynamic Snare" (Velocity to Filter)
- **Goal:** Make the snare brighter the harder you hit it.
- **Setup:** Assign all Snare slices to **Articulator 2**. In Articulator 2, go to the **MOD** tab and select **Filter Cutoff**. Draw a diagonal line from bottom-left to top-right.
- **Vibe:** This adds "Jazz" and "Human" feel to static drum breaks.

### 2. The "Sub-Bass Protector" (Filter Cutoff)
- **Goal:** Keep the Kick punchy but filter the mid-range "mud" from the rest of the loop.
- **Setup:** Assign the Kick to **Articulator 1** (No Filter). Assign all other slices to **Articulator 3** (LP Filter at 500Hz).
- **Vibe:** Essential for **Trap** and **Boom Bap** to ensure the 808 has its own space.

### 3. The "Stereo Percussion" (LFO to Pan)
- **Goal:** Make hi-hats move across the stereo field.
- **Setup:** Assign Hi-Hats to **Articulator 4**. Enable the **LFO** and route it to **Pan**.
- **Vibe:** Adds "Psychedelic" and "Vibey" interest to simple loops.

## Articulator Limits:
- **Max Slots:** 8.
- **Tip:** If you need more than 8 different sounds, use **Deck B** or a second instance of Slicex.