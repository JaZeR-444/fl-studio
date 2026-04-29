# Vibe Translation Guide: Kepler Exo

Leveraging the "Exo" features for professional Hip-Hop, R&B, and Pop sound design.

---

## 1. PSYCHEDELIC (Primary Focus)
*FM "trippiness," evolving harmonic shifts, and disorienting motion.*
- **The Mental Model:** Shifting landscapes, metallic hallucinations (Travis Scott / Mike Dean).
- **Exo-Only Levers:**
    - **X-Mod (Cross-Mod):** Turn this up to 40–60% for "inhuman" harmonic textures.
    - **Audio Mod (VCF):** Modulate the filter with DCO 1 to create "growling" textures that change with pitch.
    - **Matrix Routing:** Map **LFO 2** to **DCO 2 Semi** (very small amount) for a "warped" pitch feel.
    - **Hard Sync:** Automate DCO 2's pitch with an LFO for "screaming" cycles.
- **Listen For:** Sounds that feel like they are "morphing" between organic and digital.

## 2. UPBEAT
*Aggressive leads, rhythmic precision, and bright energy.*
- **The Mental Model:** High-energy Hyperpop, modern Synth-Pop, and energetic Trap.
- **Exo-Only Levers:**
    - **Hard Sync:** Enable and use **Env 2** to "rip" the pitch of DCO 2 at the start of every note.
    - **Saturator:** Crank the built-in saturation for aggressive "analog bite."
    - **Slope (6dB):** Use the 6dB filter mode for a brighter, more "airy" top end that cuts through a dense mix.
- **Listen For:** "Tearing" textures and bright, snappy transients.

## 3. MOODY
*Heavy low-end, dark atmosphere, and melancholic depth.*
- **The Mental Model:** Deep, atmospheric R&B (Drake / 40 vibes).
- **Exo-Only Levers:**
    - **Dual DCOs:** Detune DCO 1 and DCO 2 slightly (+/- 5 cents) for a massive, thick "shadow" effect.
    - **HQ Filter:** Use HQ mode with 24dB slope for a very smooth, creamy darkness.
    - **Saturation:** Use subtle saturation to "warm up" the low-mids of a pad.
    - **Env 2:** Use a dedicated envelope for a very slow filter sweep.
- **Listen For:** A thick, heavy "cloak" of sound that feels expensive and deep.

## 4. JAZZY / VIBEY
*Neo-Soul warmth, Rhodes-like character, and modern lushness.*
- **The Mental Model:** Moonchild / Robert Glasper; sophisticated Alternative R&B.
- **Exo-Only Levers:**
    - **HQ Chorus:** Use the built-in Chorus I+II for maximum lush width.
    - **Matrix Routing:** Map **Velocity** to **Filter Cutoff**. This makes the synth feel like a "real" instrument that responds to how hard you play.
    - **DCO 2 (Fine):** Detune slightly to create "natural" acoustic-style beating.
- **Listen For:** Expressive, "human" dynamics and a wide, creamy stereo image.

---

## Exo Vibe Matrix (New Levers)
| Vibe | Hard Sync | X-Mod (FM) | Audio Mod | Filter HQ | Matrix Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Psyched**| ON | High | High | STD | LFO -> Pitch |
| **Upbeat** | ON | Low | Low | STD | Env -> Sync Pitch |
| **Moody** | OFF | Low | OFF | ON | Slow Env -> Cutoff |
| **Jazzy** | OFF | OFF | OFF | ON | Velocity -> Cutoff |
| **Vibey** | OFF | Low | OFF | ON | LFO -> PWM |
