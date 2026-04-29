# Atmospheric Pads & Drones

FLEX excels at motion. The "Fulcrum" and "Arcadia" packs are full of evolving textures. Here is how to control the atmosphere.

## 🌊 Creating Movement
A static pad is boring.
1.  **Filter Automation:** Identify the "Filter" or "Tone" Macro.
    *   Draw a slow, sweeping automation curve over 8 or 16 bars.
    *   *Result:* The pad "breathes" with the track.
2.  **LFO Speed:** Look for a Macro labeled "Speed" or "Wobble."
    *   Automating this can turn a calm pad into a rhythmic texture during a build-up.

## 🌫️ The "Wash" Technique
How to make a pad fill the entire background without eating the mix.
1.  **High Pass Everything:** Use the **Master Filter** -> **High Pass 12dB**.
    *   Cut everything below 200Hz. Pads rarely need bass frequencies; they just muddy the kick.
2.  **True Stereo Delay:**
    *   Set Delay to **True Stereo**.
    *   Set Time to a non-synced value (or a weird division like 3/8).
    *   This diffuses the sound to the far left and right edges.

## 🦆 Sidechain Ducking
FLEX doesn't have an internal "Sidechain to Kick" input.
*   **The Volume Automation Method:**
    *   Create an automation clip for the **Master Volume** slider.
    *   Draw a "ducking" shape (volume drops on the beat, rises off the beat).
    *   Copy/Paste this pattern.
*   **Why do this?** It saves CPU compared to loading a separate limiter plugin just for ducking, and it's click-free.

## 🌌 Infinite Decay
Want a drone that never ends?
*   **Hold (H) Slider:** Max it out.
*   **Release (R) Slider:** Max it out.
*   **Reverb Decay:** Max it out.
*   *Warning:* When you press Stop in FL Studio, it will keep going! Press `Ctrl + H` (Stop Sound) to kill it.
