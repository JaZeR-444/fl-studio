# Common Workflows: Fruity Reeverb 2

## 1. Mid/Side Reverb Integration

Stop washing out your Lead Vocals and Kick Drums.

1.  **Problem:** Applying reverb to a stereo mix muddies the center (where the Kick/Snare/Vocal live).
2.  **Solution:** Use the **SIDE** input mode.
3.  **Steps:**
    *   Load Reeverb 2 on your Master or Bus.
    *   Flip the switch in the top left from "MID" to "SIDE".
    *   Set Decay to 2-3 seconds.
    *   Set Dry to 100% (to keep the original signal).
4.  **Physics:** The reverb algorithm *ignores* the center channel. It only reverberates sounds that are already panned.
5.  **Result:** Crystal clear center image, with massive width and ambiance on the sides.

## 2. The "Abyss" Drone Generator

Turning short sounds into infinite soundscapes.

1.  **Source:** A short pluck or piano note.
2.  **Settings:**
    *   **decay:** 20 Seconds (Max).
    *   **Size:** 100 (Max).
    *   **Diffusion:** 100%.
    *   **Modulation:** Depth 50%, Speed Slow.
3.  **H.Cut:** Open (20kHz).
4.  **Damping:** OFF (Let the highs ring forever).
5.  **Technique:** Play one note. The sound will hang and evolve because of the Modulation.
6.  **Pro Tip:** Automate the "H.Cut" knob slowly to create filter sweeps on the reverb tail.

## 3. The "Bright Plate" (Vocal Pop)

Achieving that shimmering modern pop vocal.

1.  **Pre-Delay:** 20-50ms. (Crucial: separates the "S" from the "Shiiiing").
2.  **L.Cut:** 600Hz. (Remove all muddiness).
3.  **H.Cut:** 12kHz. (Keep the air).
4.  **Damping:** Low/Off.
5.  **Stereo Sep:** Turn knob 50% Left (Widen).
6.  **Bass Multiplier:** 0.5x (Tighten the low reflections).

## 4. Drum Room "Glue"

Making electronic samples sound like a live kit.

1.  **Send:** Create a Send Channel with Reeverb 2.
2.  **Size:** 20-30 (Club/Studio size).
3.  **Diffusion:** 60% (Slightly grainy).
4.  **ER (Early Reflections):** Boost this! This simulates the first bounce off the walls, which defines the "space" more than the tail does.
5.  **Decay:** Short (0.6s).
6.  **Action:** Send Kick, Snare, and Hats to this bus.
7.  **Result:** They now sound like they exist in the same physical room.

## 5. Frequency Slotting (The L.Cut Trick)

1.  **Concept:** Reverb adds noise. Noise masks instruments.
2.  **Rule:** Never reverb the bass frequencies unless for special FX.
3.  **Action:** Set **L.Cut** knob to ~300Hz-500Hz on almost every instance.
4.  **Why?** Reverberating frequencies below 300Hz creates a "mud blanket" that destroys mix clarity.
