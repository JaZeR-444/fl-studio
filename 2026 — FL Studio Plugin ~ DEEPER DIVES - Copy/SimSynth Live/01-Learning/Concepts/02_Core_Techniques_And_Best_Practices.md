# 02: Core Techniques and Best Practices

## 1. The "Warm" Unison
Always start your lead or pad sounds with the **Warm** button engaged on at least two oscillators. This creates the "analog drift" that makes SimSynth sound expensive. For a tight bass, you might keep it off to maintain phase consistency. [SRC: REPUTABLE-04]

## 2. Blending the "Notch" Filter
To create a "Notch" filter (popular in psychedelic or phaser-like sounds):
1. Set the **LP Mix** to 50%.
2. Set the **HP Mix** to 50%.
3. Set the **BP Mix** to 0%.
4. Sweep the **Cutoff**. You’ll hear a "hollow" sound that is perfect for psychedelic sweeps.

## 3. Pulse Width Modulation (PWM)
For that classic "reedy" 80s lead:
1. Select the **Square/Pulse** wave on Osc 1.
2. In the LFO section, route the modulation to **PWM**.
3. Set LFO speed to 3Hz.
- *Result:* The thickness of the square wave will cycle, creating a "moving" analog tone.

## 4. Metallic Bell Tones (Ring Mod)
1. Turn on **Osc 1** (Sine) and **Osc 2** (Sine).
2. Set Osc 2 pitch to +7 or +12 semitones.
3. Turn up the **Ring Mod** amount.
4. Use a fast Decay on the Amp Envelope.
- *Result:* You get a physical-sounding bell or "chime" that is perfect for modern "Vibey" R&B.

## 5. The "Wide" String Layer
- Set Osc 1 and Osc 2 to **Saw**.
- Engagement **Warm** mode on both.
- Turn on the built-in **Chorus**.
- Set a slow **Attack** (500ms).
- *Result:* A massive, cinematic string pad that fills the stereo field.

## 6. Sub-Bass Layering
Use **Osc 3** as a dedicated sub. Set it to **Sine** or **Triangle**, and turn its **Coarse Tune** down -12 semitones. Keep "Warm" off for this oscillator to keep the low-end "mono" and "solid."

## Common Pitfalls + Fixes
- **Pitfall:** Sound is too "thin."
  - **Fix:** Enable "Warm" mode and add a second oscillator detuned by 3-5 cents.
- **Pitfall:** "Clicking" at the start of notes.
  - **Fix:** Increase the **Amp Attack** slightly (5-10ms).
- **Pitfall:** No sound after turning knobs.
  - **Fix:** Check the **SVF Mix knobs**. At least one must be turned up from zero.
