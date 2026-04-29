# Goal: Driving Distortion Inputs (Fruity Balance)

## Routing Context
- **Target:** 808 or Aggressive Lead.
- **Position:** **Fruity Balance** (Slot 1) followed by **Fruity Blood Overdrive** (Slot 2).

## Step-by-Step Setup
1.  Load both plugins.
2.  Set **Fruity Blood Overdrive** to your desired "tone," but keep the internal gain moderate.
3.  Go to **Fruity Balance**.
4.  Right-click the **Volume** knob -> **Link to controller** -> **Fruity Peak Controller** (linked to the Snare).
5.  **Formula:** Use `Input*0.2`.
6.  **Result:** Every time the snare hits, the signal entering the distortion unit gets +2dB louder.

## What To Listen For
- The distortion should get "grittier" or "fuzzier" momentarily on every snare hit, creating a dynamic texture that reacts to the rhythm of the track.

## Vibe Check
- **Psychedelic:** This "moving distortion" creates a liquid texture that feels unstable and alive.

## Pitfalls + Fixes
- **Pitfall:** "The overall volume is jumping too much."
  - **Fix:** Place a **Fruity Soft Clipper** at Slot 3 to catch the volume peaks while keeping the distorted texture. [SRC: REPUTABLE]
