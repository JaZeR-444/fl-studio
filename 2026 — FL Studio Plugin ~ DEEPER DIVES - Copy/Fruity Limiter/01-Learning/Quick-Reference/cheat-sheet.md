# Fruity Limiter: The Ultimate Deep Dive Cheat Sheet

> **Scope:** Full parameter analysis, Signal Flow, and hidden behaviors.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High.

## 🧠 The "Triple Chain" Concept
Fruity Limiter is NOT just a limiter. It is a series of three distinct dynamic processors acting on the signal in a specific order. Understanding this chain is critical to avoiding "fighting" controls.

**Signal Flow:**
`Input` -> **[COMPRESSOR]** -> **[GAIN]** -> **[NOISE GATE]** -> **[LIMITER]** -> **[SATURATOR]** -> `Output`

*   **Critical Nuance:** The "Gain" knob in the Limiter section is **Post-Compressor** but **Pre-Limiter**. This means you can compress a signal heavily, then boost it into the Limiter ceiling to maximize loudness.

---

## 🎛️ Section 1: The Compressor (COMP Tag)

The Compressor reduces the dynamic range of the signal *before* it hits the Limiter.

### Main Controls (Loudness)

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Purple Gain** | -Inf to +20dB | **Post-Compression Makeup Gain.** <br> *Nuance:* This gain is applied *after* the compressor but *before* the limiter. Use this to drive the signal into the Limiter's ceiling. |
| **Thresh (Threshold)** | -60dB to 0dB | **The "Trigger Point".** <br> Signals above this level will be attenuated. <br> *To Bypass:* Set to 0dB. |
| **Ratio** | 1:1 to 20:1 | **Attentuation Strength.** <br> *Nuance:* High ratios (>10:1) essentially turn the Compressor into a second Limiter. |
| **Knee** | Soft to Hard | **Transition Smoothing.** <br> *Soft Knee:* Compression begins *before* the threshold is hit, gradually increasing ratio. <br> *Hard Knee:* Compression begins exactly at threshold. <br> *Pro Tip:* Use Soft Knee for vocals (transparent), Hard Knee for drums (snap). |

### Envelope Controls (Time)

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Att (Attack)** | 0ms to 1000ms | **Reaction Speed.** <br> *Nuance:* Unlike the Limiter Attack, this **DOES NOT** add latency. It is purely an envelope shape. <br> *Tip:* >15ms lets transients (snare cracks) punch through before clamping down. |
| **Rel (Release)** | 0ms to 2000ms | **Recovery Speed.** <br> *Nuance:* Short release = Pumping/Loudness. Long release = Smooth/Leveling. |
| **Sustain (Susp)** | 0ms to 1000ms | **RMS Averaging Window.** <br> *Unique Feature:* This holds the compression state for a set time, preventing "chatter" or distortion on bass frequencies. <br> *Tip:* Vital for 808s. Set to ~50ms to prevent the compressor from riding the individual waveform cycles of sub-bass. |
| **Curve** | 1 (Linear) to 8 | **Envelope Tension.** <br> *Nuance:* Affects how "snappy" the Attack/Release feels. <br> *Curve 1:* Instant/Linear. <br> *Curve 8:* Logarithmic/Slow. <br> *Tip:* Curve 6-8 is great for "gluing" mix busses. |

### Sidechaining (The Hidden Menu)
1.  **Right-Click** the "SIDECHAIN" selector box (bottom of Comp tab).
2.  Choose input mixer track.
3.  **Visual:** Requires a sidechain send in the Mixer (Right-click cable -> "Sidechain to this track").

---

## 🧱 Section 2: The Limiter (LIMIT Tag)

The Limiter is the safety net and loudness maximizer. It acts *after* the Compressor.

### Main Controls (Loudness)

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Purple Gain** | -Inf to +20dB | **Input Gain.** <br> *Same as Comp Gain.* It drives the signal against the Ceiling. |
| **Ceil (Ceiling)** | -Inf to +12dB | **The Brick Wall.** <br> No signal will exceed this level. <br> *Mastering Std:* usually -0.1dB or -0.3dB (True Peak). |
| **Sat (Saturation)** | -Inf to 0dB | **Threshold of "Rounding".** <br> *Nuance:* As signals approach this threshold, they are "soft clipped" (rounded) instead of hard limited. <br> *Result:* Adds warmth and harmonic distortion. Reduces "pumping". <br> *Warning:* Can sound distorted if driven too hard. |

### Envelope Controls (Time)

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Att (Attack)** | 0ms to 1000ms | **Lookahead Latency.** <br> *CRITICAL:* Increasing this ADDS LATENCY to the plugin. <br> *Why?* To limit instantly without distortion, the plugin must "look ahead" into the future. <br> *Setting:* 0ms = Zero Latency (Instant, slightly dirtier). >0ms = Cleanest Limiting (Latency added). |
| **Rel (Release)** | 0ms to 2000ms | **Recovery Speed.** <br> *Mastering Tip:* Timed to the BPM. ~300-500ms is standard for master buss. |
| **Ahead** | N/A | *Note:* The "Ahead" knob visible in some skins is actually just the visual representation of the Attack latency. |

---

## 🚪 Section 3: The Noise Gate (GATE Tag)

Often overlooked, the Gate sits *after* the compressor gain but *before* the Limiter logic.

| Control | Range | Function |
| :--- | :--- | :--- |
| **Thresh** | -Inf to 0dB | **Gate Open Point.** <br> Signals below this are silenced. |
| **Gain** | -Inf to 0dB | **Floor Level.** <br> Instead of total silence (-Inf), you can just reduce background noise by -20dB. |
| **Rel** | 0ms to 2000ms | **Fade Out Time.** <br> *Creative:* Use long release for "Gated Reverb" tails. |

---

## 📊 Visual Feedback Decoder

Understanding the rolling graph is key to mastering this plugin.

| Color | Represents | What to look line for |
| :--- | :--- | :--- |
| **Purple** | **Input Signal** | The raw, unprocessed audio entering the plugin. |
| **Green** | **Output Signal** | The final audio leaving the plugin. |
| **Blue Line** | **Comp Threshold** | When Purple peaks cross this blue line, compression happens. |
| **White Line** | **Compression Envelope** | Visualizes the "Gain Reduction". If it dips, volume is being reduced. |
| **Grey Line** | **Gate Threshold** | Everything below this line is silenced. |
| **Orange** | **Limiting** | If you see Orange peaks on top of Green, the Limiter is active. |

---

## 📉 Advanced Curves & Tension

The `CURVE` knob is often ignored but changes the character of the dynamic processing drastically.

*   **Curves 1-3 (Linear/Fast):**
    *   **Behavior:** The envelope moves in a straight line or snaps quickly.
    *   **Best For:** Drums, Percussion, "Smashing" sounds.
    *   **Feel:** Aggressive, Digital.

*   **Curves 6-8 (Logarithmic/Slow):**
    *   **Behavior:** The envelope "hangs" and moves lazily.
    *   **Best For:** Vocals, Pads, Master Bus glue.
    *   **Feel:** Organic, Analog, Optical.

---

## ⚡ Latency & CPU Considerations

*   **Zero Latency Mode:**
    *   Comp Attack: Any value.
    *   Limit Attack: **0ms**.
    *   *Usage:* Live tracking, playing MIDI keyboard.

*   **High Quality / Mastering Mode:**
    *   Comp Attack: Tuned to taste.
    *   Limit Attack: **2-5ms**. (Enables Lookahead).
    *   *Usage:* Final render. Ensures zero "overs" (inter-sample peaks) and smoother limiting.

---

## 🛠️ Typical "Fighting" Scenarios

**Scenario 1: "It's Pumping too much!"**
*   **Cause:** Release time is too short on the Limiter or Compressor.
*   **Fix:** Increase Release to >200ms. OR Increase "Sustain" to hold the gain reduction longer.

**Scenario 2: "It sounds distorted!"**
*   **Cause:** Limiter Attack is 0ms (Hard limiting) OR Saturation knob is too low.
*   **Fix:** Increase Limiter Attack to 2ms (adds latency). Check Saturation knob.

**Scenario 3: "Sidechain isn't ducking!"**
*   **Cause:** Ratio is 1:1.
*   **Fix:** Even if Threshold is low, nothing happens if Ratio is 1:1. Crank Ratio to 4:1+.
