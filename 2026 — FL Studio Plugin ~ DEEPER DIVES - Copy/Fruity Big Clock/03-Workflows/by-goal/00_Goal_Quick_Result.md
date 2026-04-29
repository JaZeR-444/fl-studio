# Goal: Syncing to Video Hits (Fruity Big Clock)

## Routing Context
- **Target:** Video Content / Film Scoring.
- **Workflow:** **Minutes:Seconds** Mode.

## Step-by-Step Setup
1.  Load **Fruity Big Clock** and **Fruity Video Player**.
2.  Set Big Clock to **Time** mode.
3.  Identify the "Hit Point" in your video (e.g., a door slam at 0:15).
4.  In the FL Studio Playlist, place a **Marker** exactly at the 0:15 timestamp on the Big Clock.
5.  Align your kick drum or sound effect to that Marker.

## Result
- Perfect synchronization between your musical arrangement and the visual timeline. The Big Clock acts as the master reference that matches your video editor’s clock (Premiere/Final Cut).

## Vibe Check
- **Moody:** Ensuring that a "scary" cinematic sound hit happens exactly on the visual cue, increasing the emotional impact.

## Pitfalls + Fixes
- **Pitfall:** "The clock doesn't match the frame rate."
  - **Fix:** FL Studio calculates time based on project samples. Ensure your project and video frame rates are consistent (e.g., 24fps) to avoid "drift" over long projects. [SRC: IL-MAN]
