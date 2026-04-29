# Expressive Guitars in FLEX

The "Essential Guitars" pack is surprisingly realistic, but raw MIDI often sounds robotic. Here is how to fake a guitarist.

## 🎸 Amp Simulation (Internal)
FLEX guitars are often recorded "Clean" (DI). To get a rock tone, you need an amp.
1.  **Limiter Hack:** Use the **Limiter** section as an amp.
    *   Set Type to **"Distortion"**.
    *   Crank the **Pre** knob. This overdrives the signal like a guitar pedal.
    *   *Result:* Instant grit and sustain.

## 🖐️ Strumming vs. Picking
Keyboards play notes simultaneously; guitarists don't.
1.  **The Strum Tool:** In the Piano Roll, press `Alt + S`.
    *   This slightly offsets the start times of notes in a chord.
    *   FLEX responds to this beautifully, creating distinct "strum" transients.
2.  **Velocity Humanization:** Real guitarists hit strings with different force.
    *   Select your notes -> `Alt + R` (Randomize).
    *   Adjust the **Velocity** knob to add subtle variation.

## 🕸️ Palm Muting (The "Mute" Macro)
Many guitar presets have a Macro labeled **"Mute"** or **"Palm"**.
*   **Low Value:** Open, ringing strings.
*   **High Value:** Palm-muted, "chug" sound.
*   **Workflow:** Automate this Macro!
    *   *Verse:* High Mute (Chugging rhythm).
    *   *Chorus:* Low Mute (Open chords).

## 🔊 FX Chain
Real guitars rely heavily on their cabinet.
*   **Cab Sim:** FLEX doesn't have a specific "Cab Sim" filter.
*   **Workaround:** Use the **Master Filter** set to **Low Pass 12dB** with cutoff around 5-6kHz. This removes the unnatural digital "fizz" that real guitar speakers can't reproduce.
