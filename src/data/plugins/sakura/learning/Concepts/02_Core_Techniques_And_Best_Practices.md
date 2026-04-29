# 02: Core Techniques and Best Practices

## 1. The "Ghost String" Layering
Use String 2 as a subtle detuned version of String 1. Set the Mix to 30/70. This adds a natural "chorus" effect found in 12-string guitars or detuned pianos. [SRC: REPUTABLE-02]

## 2. Tuning the Body (Resonator)
The Resonator's "Tuning" knob is critical. For realistic instruments, tune the resonator to the root key of your song. This makes the "wood" of the virtual instrument resonate with the notes you play.

## 3. Position Automation
Automate the **Exciter Position**. In real life, a guitarist moves their hand between the bridge and the neck. Moving this slider creates a "wah-like" filter sweep that sounds purely acoustic.

## 4. Damping vs. Decay
- **Decay** = Volume (how long it stays loud).
- **Damping** = Hardness (how long the high-end stays bright).
- *Best Practice:* For lo-fi/moody sounds, use high Decay but high Damping. The sound will linger as a dark, warm hum.

## 5. Physical Pitch Bends (Tension)
Use the **Tension** knob to create "pitch snap." A real string stretches when hit hard. Setting a positive Tension envelope makes the note start slightly sharp and settle into pitch, perfect for "Aggressive Trap Plucks."

## 6. Using "Scrape" for Textures
Switch the Exciter to "Scrape" and turn the **Exciter Amount** down. This creates a friction sound. Great for transition effects or "scary" cinematic textures.

## 7. Interaction Width
Use the **Interaction Phasing** control to widen the sound. It shifts the phase of the two strings, creating a massive stereo image without needing external plugins.

## 8. The "Resample" Workflow
Sakura is CPU intensive. Once you have a "vibey" pluck or pad, **Bounce to Audio (Consolidate)**. This allows you to then use FL Studio's Sampler for further manipulation (Reverse, Granular, Pitch stretch).

## Common Pitfalls + Fixes
- **Pitfall:** Sound is too "metallic."
  - **Fix:** Reduce Resonator Resonance or increase String Damping.
- **Pitfall:** CPU Spikes.
  - **Fix:** Reduce the number of active Resonators (some presets use 4+).
- **Pitfall:** No "Attack" on the sound.
  - **Fix:** Check Exciter envelope; ensure the Attack is set to zero for plucks.