# Core Techniques And Best Practices: Fruity Peak Controller

## 1. The "Ghost Kick" Sidechain
- **Technique:** Place Peak Controller on a sampler track with a short, punchy kick. Enable **MUTE** in the plugin.
- **Execution:** Every time you place a note in the Step Sequencer, the volume of linked tracks will duck, but no kick sound will be heard.
- **Why:** This gives you total rhythmic control over the "bounce" without being tied to the actual audible kick drum.

## 2. Inverted Mapping (The "Standard" Duck)
- **Technique:** When linking a knob, use the **Mapping Formula** `1-Input`.
- **Alternative:** Set the **Vol** knob in Peak Controller to a negative value (e.g., -50%). 
- **Pro Tip:** Negative Vol is usually easier because you can adjust the "strength" of the ducking directly from the Peak Controller UI without opening the linking menu again.

## 3. Dynamic EQ Carving
- **Technique:** Place Peak Controller on the Vocal track.
- **Target:** Link it to a 2kHz-5kHz band on the **Melody Bus EQ**.
- **Execution:** Set **Vol** to a negative value.
- **Result:** Every time the artist raps, the melody track "dips" in the vocal frequency range, then pops back up during the silence. This is more transparent than a static EQ cut. [SRC: REPUTABLE]

## 4. Random Pitch "Drift"
- **Technique:** Ignore the Peak section. Use the **LFO** section.
- **Shape:** Set to **Random**.
- **Target:** Link to a synth's Pitch or Filter Cutoff.
- **Tweak:** Set **Amount** to a very low value (2-5%).
- **Result:** Creates an organic, "analog" instability that makes digital synths feel more vintage.

## Common Pitfalls + Fixes
- **Pitfall:** "The controlled knob is jittering/shaking too fast."
  - **Fix:** Increase the **Decay** time. This smooths out the release of the envelope.
- **Pitfall:** "I lost my manual control over the knob."
  - **Fix:** Once linked, the knob is "locked" to the controller. Use the **Base** knob in Peak Controller to change the resting position. [SRC: IL-MAN]
