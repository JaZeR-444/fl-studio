# Goal: Linear Phase EQ Mode (Fruity Convolver)

## The Concept
Using Convolver as a transparent EQ that doesn't mess up your phase. Essential for clean 808s and Mastering.

## Step-by-Step Setup
1.  Initialize **Fruity Convolver**.
2.  Load the **"Default" (Pulse)** preset. This is a single sample "click" that has no reverb tail.
3.  Turn **Dry to zero** and **Wet to 100%**.
4.  Now, any change you make to the **Green EQ Line** acts as a high-quality **Linear Phase EQ**.
5.  **Result:** You can cut sub-bass or boost highs with zero phase smearing.

## Vibe Check
- **Vibey/Polished:** This is how you get that professional, "uncolored" mix clarity.

## Variation
- **The "Blur" EQ:** Load a "White Noise" IR instead of the Pulse. Now your EQ moves will sound "smeared" and atmospheric.

## Pitfalls
- **Latency:** Linear phase processing requires a large buffer. FL Studio will handle this via PDC, but you may notice a delay when starting/stopping the track. [SRC: IL-MAN]
