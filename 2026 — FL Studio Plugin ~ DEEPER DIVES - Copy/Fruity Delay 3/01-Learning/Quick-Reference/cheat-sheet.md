# Fruity Delay 3: The "Analog" Chameleon

> **Scope:** Full parameter analysis, Signal Flow, and Analog Modeling.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High.

## 🧠 The "Tape" Concept
Fruity Delay 3 is designed to emulate the imperfections of analog tape and bucket-brigade delay units. Unlike digital delays (Delay 2), Delay 3 introduces pitch warping (wow/flutter), saturation, and diffusion.

**Signal Flow:**
`Input` -> **[DELAY LINE]** -> **[FEEDBACK LOOP]** -> **[FILTER + DISTORTION]** -> **[OUTPUT MIX]**

*   **Critical Nuance:** The distortion and filtering happen *inside* the feedback loop. This means every repeat gets dirtier and darker than the last.

---

## 🎛️ Section 1: Time & Models (DELAY Tag)

### Delay Models

| Model | Description & Usage |
| :--- | :--- |
| **Mono** | Sums L+R inputs. Basic. Good for lead vocals where spread isn't needed. |
| **Stereo** | Independent L/R lines. Preserves the stereo image of the source. |
| **Ping Pong** | Swaps L/R channels on each repeat. Creates wide, bouncing movement. |
| **Off** | **HIDDEN FEATURE:** Disables delay but keeps Filter, Distortion, and Modulation active. Turns the plugin into a "Lo-Fi / Distortion" FX unit. |

### Time Controls

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Time** | 0ms - 1000ms | **Delay Buffer Length.** <br> *Nuance:* If "Tempo Sync" is ON, this knob snaps to musical intervals (dots). |
| **Tempo Sync** | ON/OFF | **Grid Lock.** <br> Light ON: Snaps to 1/16ths. Light OFF: Free milliseconds. |
| **Keep Pitch** | ON/OFF | **Tape Mechanics.** <br> *ON:* Changing time sounds digital (clean cut). <br> *OFF:* Changing time warps the pitch (Doppler effect), like speeding up/slowing down a tape machine. |
| **Smoothing** | 0 - 100% | **Slew Rate Limiter.** <br> *Nuance:* When "Keep Pitch" is OFF, this controls *how fast* the pitch glides to the new value. High smoothing = dreamy, slow "Tape Stop" effects. |
| **Offset** | -100% to +100% | **Stereo Widener.** <br> Delays the Left or Right channel slightly relative to the main Time. <br> *Haas Effect:* Set to ~20ms to create ultra-wide stereo without distinct echoes. |

---

## 🔁 Section 2: The Loop (FEEDBACK Tag)

This section controls what happens to the echo before it returns to the start.

### Level & Filtering

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Level** | 0% to 125% | **Repeats.** <br> *Warning:* Goes to 125%. Values >100% will self-oscillate and get infinitely louder until the Distortion limiter catches them. |
| **Cutloss** | Hz | **Damping.** <br> Filters the repeats. |
| **Res** | 0% to 100% | **Filter Resonance.** <br> *Creative:* High resonance creates a "ringing" tone on every echo. |
| **Type** | LP/HP/BP | **Filter Topology.** <br> *LP (Low Pass):* Tape Dub style. Echoes get darker. <br> *HP (High Pass):* Thin, telephone style. Echoes get thinner. |

### Digital Degradation (The "Bitcrusher")

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Sample Rate** | 48kHz to 100Hz | **Aliasing.** <br> Lowers the sample rate of the wet signal. Adds metallic "ringing" artifacts. |
| **Bits** | 16 to 1 | **Quantization Noise.** <br> Reduces bit depth. Adds white noise and "fizz". |

---

## 🌊 Section 3: Modulation (The "Warp" Engine)

Modulates the delay time using an internal Low Frequency Oscillator (LFO).

| Control | Range | Function |
| :--- | :--- | :--- |
| **Rate** | 0Hz to 20Hz | **LFO Speed.** |
| **Time** | 0 to 100% | **Pitch Wobble Amount.** <br> Modulates the delay time. Because "Keep Pitch" is ignored here, this creates detuning (Chorusing/Vibrato) on the echoes. |
| **Cutoff** | 0 to 100% | **Filter Sweep.** <br> Modulates the Filter Cutoff. Creates sweeping "Phaser-like" echoes. |

---

## 🌫️ Section 4: Diffusion (The Reverb Maker)

"Smears" the feedback reflections, turning distinct echoes into a wash of sound.

| Control | Range | Function |
| :--- | :--- | :--- |
| **Level** | 0 to 100% | **Smear Amount.** <br> low = Discrete Echoes. High = Reverb/Hall. |
| **Spread** | 0 to 100ms | **Smear Time.** <br> How far apart the micro-reflections are spaced. |

---

## 🔥 Section 5: Feedback Distortion (The Safety Valve)

When Feedback > 100%, this prevents your speakers from blowing up. It waveshapes the signal.

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Limits / Sat** | Switch | **Mode.** <br> *Limit:* Hard ceiling. Clean but harsh if driven hard. <br> *Sat:* Soft saturation. Adds harmonics. Warms up self-oscillation. |
| **Knee** | Soft/Hard | **Curve Shape.** <br> Soft Knee = Tube-like distortion. |
| **Symmetry** | Sym/Asym | **Harmonic Content.** <br> *Symmetrical:* Odd harmonics (Square wave). <br> *Asymmetrical:* Even harmonics (Tube/Triode). |
| **Level** | -Inf to 0dB | **Drive Threshold.** <br> Determines how loud the signal must be to trigger distortion. Lower this to make quiet echoes gritty. |

---

## 🏁 Output

| Control | Range | Function |
| :--- | :--- | :--- |
| **Wet** | -Inf to +6dB | Volume of the delayed signal. |
| **Dry** | -Inf to +6dB | Volume of the original signal. |

---

## 🧪 "Secret Sauce" Combinations

### 1. The "Tape Machine"
*   **Keep Pitch:** OFF.
*   **Smoothing:** 50%.
*   **Mod Time:** 15% (Subtle movement).
*   **Filter:** LP @ 3000Hz.
*   **Saturation:** ON.
*   **Result:** Warm, wobbling, "alive" echoes.

### 2. The "Fake Reverb"
*   **Delay Time:** <100ms.
*   **Feedback:** 60%.
*   **Diffusion Level:** 100%.
*   **Diffusion Spread:** 50%.
*   **Result:** A metallic, cavernous room reverb.

### 3. The "Dub Siren"
*   **Feedback:** 110% (Self Oscillation).
*   **Distortion:** Limit Mode (Hard).
*   **Time:** Automate heavily while "Keep Pitch" is OFF.
*   **Result:** Sci-Fi laser sounds and pitch dives.
