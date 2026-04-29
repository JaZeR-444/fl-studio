# UI Tour & Core Concepts

## The Architecture
The UI is divided into tabs/sections for the different sound sources.

### 1. Main Oscillator (The Body)
This is your sub-bass foundation.
-   **Peak:** The pitch where the kick *starts* (the attack).
-   **Base:** The pitch where the kick *ends* (the sustain/tail).
-   **Slide:** How fast it drops from Peak to Base.
-   **Waveform:** Usually Sine, but can be shaped.

### 2. Slave Oscillator (The Texture)
This runs in parallel to the Main Osc.
-   **Use:** Add upper harmonics, grit, or a second tone.
-   **Key Control:** **Phase**. Adjusting the phase of the Slave relative to the Main is critical to prevent the kick from sounding "hollow."

### 3. Sample Layer (The Transient)
-   Allows you to load a WAV file.
-   **Workflow:** Typically used to load a "top kick" or "hi-hat" sample to add a crisp attack to the synthesized body.
-   **Filtering:** High-pass the sample so it doesn't clash with the Main Osc sub.

### 4. Global Controls
-   **Duration:** The master length of the kick.
-   **Sampling Ratio:** Determines the digital resolution. Turning this down adds aliasing (great for Hardstyle/Industrial).

## Core Concepts

### The "Slide" (Pitch Envelope)
In a standard synth, you'd use a Pitch Envelope to make a kick. In BassDrum, this is simplified into the **Peak** and **Base** knobs.
-   **Harder Kick:** Higher Peak, Faster Slide.
-   **Boomy Kick:** Lower Peak, Slower Slide.

### Phase Alignment
When layering two oscillators or a sample + synth, sound waves can cancel each other out (destructive interference). BassDrum provides **Phase** and **Delay** knobs specifically to align these layers so they sum together for *maximum impact*.
