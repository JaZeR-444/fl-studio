# 03: Vibe Translation Guide

## Vibe Targets in SoundFont Player

### 1. Moody (Dark, Nostalgic, Lo-Fi)
- **The Lever:** **Crunchy Mode + LP Filter + Slow Attack.**
- **Setting Moves:**
  - Set Resampling to **Crunchy**.
  - Enable Filter and set **Cut** to 30%.
  - Increase **Attack** to 100ms for a "soft" start.
- **What to listen for:** A warm, slightly "grainy" tone that feels like a sampled record.
- **Pitfall:** Don't use too much Release; it can make the overlapping notes sound "muddy."

### 2. Upbeat (Energetic, Bright, Pop)
- **The Lever:** **Extreme HQ + Bright Filter + Fast ADSR.**
- **Setting Moves:**
  - Set Resampling to **Extreme HQ**.
  - Keep **Cut** at 100% (Open).
  - Set **Decay** to 500ms for snappy plucks.
- **What to listen for:** A clean, crisp, and responsive sound that cuts through a busy drum pattern.
- **Pitfall:** Avoid the internal Reverb; it can "blur" the energy of the track.

### 3. Psychedelic (Trippy, Warped, Evolving)
- **The Lever:** **LFO Pitch + External Delay + Reversed Chops.**
- **Setting Moves:**
  - Set **LFO Amp** (Depth) to 20% and automate the **LFO Freq** (Speed).
  - Use a pitch-shifter or frequency shifter AFTER SFP in the mixer.
  - Automate the **Master Pitch** over 4 bars for a "tape-stop" feel.
- **What to listen for:** Sounds that seem to "warp" or "vibrate" unnaturally.
- **Pitfall:** Over-modulating the LFO can make the instrument sound "broken" rather than "trippy."

### 4. Jazzy (Organic, Sophisticated, Real)
- **The Lever:** **High-Quality Samples + Vibrato + Dynamics.**
- **Setting Moves:**
  - Load a high-quality bank like **SGM-V2.0**.
  - Use the **LFO** for subtle (2%) vibrato.
  - Pay attention to **Velocity** in the Piano Roll to mimic a real player's dynamics.
- **What to listen for:** A sound that could be mistaken for a real grand piano, upright bass, or saxophone.
- **Pitfall:** Keep the ADSR overrides subtle; too much "Release" sounds unnatural for acoustic instruments.

### 5. Vibey (Lush, Wide, Modern R&B)
- **The Lever:** **Chorus + Detuned Layering + Long Release.**
- **Setting Moves:**
  - Enable the internal **Chorus**.
  - Set a long **Release** (1.5s) so chords bleed together.
  - Layer two instances of SFP with the same patch, detuned by 5 cents each.
- **What to listen for:** A "lush" and "dreamy" atmosphere that fills the stereo field.
- **Pitfall:** Ensure the low-end is mono; wide chorus on a SoundFont bass will kill the mix.
