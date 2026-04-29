# Common Workflows: Fruity Limiter

## 1. The "Invisible" Sidechain (Ducking)

Standard sidechaining often clicks or pops. This method uses the **Envelope Curve** to smooth the ducking effect.

**Goal:** Cleanly duck a Synth Pad when the Kick hits.

1.  **Mixer Routing:** Select the Kick track -> Right-click the Synth Pad track -> "Sidechain to this track".
2.  **Plugin Setup:** Open Fruity Limiter on the Synth Pad.
3.  **Selector:** Go to the **COMP** tab. Right-click the **SIDECHAIN** box and select the Kick.
4.  **Threshold:** Lower the Blue **THRESH** knob until the Blue line on the graph intercepts the Kick peaks (Purple).
5.  **Ratio:** Set **RATIO** to roughly 4:1 (High compression).
6.  **Attack:** Set **ATT** to 0-2ms (Fast reaction).
7.  **Release:** *The Secret Sauce.* Tune the **REL** knob until the volume returns exactly before the next kick hits (Breathing).
    *   *Refinement:* Adjust the **CURVE** knob to 6 or 7. This makes the release "hang" slightly before swooping up, creating a more musical "suck" effect rather than a linear "ramp" up.

## 2. "Gated Reverb" Snare (80s Style)

Creating the Phil Collins / Synthwave snare sound using the Gate tab.

1.  **Routing:** Send your Snare to a Reverb Send track. 100% Wet.
2.  **Plugin:** Add Fruity Limiter *after* the Reverb.
3.  **Gate Setup:** Switch to the **NOISE GATE** tab.
4.  **Threshold:** Raise the **THRESH** (Green line) fairly high.
5.  **Gain:** Ensure Gate Gain is at 0 (Silence).
6.  **Action:** When the Snare hits, the loud transient opens the gate. You hear the reverb.
7.  **Release:** Set **REL** very short (e.g., 200ms).
8.  **Result:** As the reverb tail fades, it crosses below the Threshold. The gate clamps shut abruptly.
    *   *Visual:* Watch the Grey line chop off the Green tail.

## 3. Vocal Leveling (The "Rider")

Instead of automating volume faders, use the Compressor to "ride" the vocal.

1.  **Ratio:** Low (2:1).
2.  **Threshold:** Deep. Set it so it's compressing -10dB or more on the loudest parts.
3.  **Attack:** Slow (~15-30ms). Let the consonants pass through.
4.  **Release:** Medium-Slow (~300ms).
5.  **Knee:** **SOFT** (Critical).
6.  **Sustain:** Increase **SUSTAIN** to roughly 100ms.
    *   *Why?* This prevents the compressor from "letting go" between words in a single phrase, keeping the phrase consistent. It forces the compressor to treat the *sentence* as one block of volume, rather than reacting to every syllable.

## 4. Maximizing for Social Media (Loudness)

How to hit -14 LUFS / -1dB True Peak safely.

1.  **Tab:** LIMIT.
2.  **Ceiling:** Set **CEIL** to -1.0 dB. (Safety margin for transcoding).
3.  **Attack:** Set **ATT** to 3ms. (Enable Lookahead).
    *   *Note:* Ensure "Plugin Delay Compensation" is ON in FL Studio.
4.  **Saturation:** Dial **SAT** to roughly -3dB.
    *   *Effect:* The loudest peaks will be saturated before limiting, shaving off dynamic range musically.
5.  **Gain:** Increase the **GAIN** (Purple) knob until your Limiter activity (Orange) is just flickering on the snare hits. Do not crush the mix.
