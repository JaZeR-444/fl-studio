# Workflow: Macro Performance Mapping (Voltage Controller)

## The Concept
Control three different hardware parameters (e.g., Filter, Resonance, and Drive) with a single knob in FL Studio.

## Setup
*   **Channel 1:** Connected to Hardware Filter Cutoff.
*   **Channel 2:** Connected to Hardware Resonance.
*   **Channel 3:** Connected to Hardware VCA Drive.

## Step-by-Step
1.  Open a **Fruity Control Surface** and add a Large Knob.
2.  Right-click **Channel 1 Slider** in Voltage Controller -> **Link to Controller**.
3.  Select the Control Surface Knob.
4.  Repeat for **Channel 2** and **Channel 3**.
5.  **Tweak:** In the Mapping Formula, use `Input*0.5` for Resonance to prevent it from screaming, and `Input*1.2` for the Filter to give it more range.

## Vibe Check
*   **Psychedelic:** This macro allows you to create complex, liquid morphs that feel like the hardware is "breathing."
*   **Upbeat:** Record yourself performing this knob move live during a build-up.

## Automation Idea
*   Automate the Macro Knob using an **Envelope Controller** triggered by the snare drum for rhythmic hardware shifts.
