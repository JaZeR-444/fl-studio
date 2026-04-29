# Automation vs. Internal Envelopes

There are two ways to control volume in Gross Beat. Which one should you use?

## 🥊 The Matchup

### 1. The Internal Volume Grid (Orange)
*   **What is it?**: The 2-bar envelope inside the plugin.
*   **Resolution**: Audio-rate (Sample accurate).
*   **Sync**: Perfectly locked to the beat.
*   **Best For**:
    *   **Trance Gates**: 1/16th note chopping.
    *   **Sidechaining**: Precise ducking on the kick.
    *   **Transient Shaping**: Removing reverb tails.

### 2. The Mixer "Mix Level" Automation
*   **What is it?**: The FL Studio automation clip controlling the plugin's wet/dry knob.
*   **Resolution**: PPQ (Pulses Per Quarter note) - usually 96ppq. Slower than audio rate.
*   **Sync**: Dependent on PDC (Plugin Delay Compensation).
*   **Best For**:
    *   **Transitions**: Fading the effect in and out over 4-8 bars.
    *   **Parallel Processing**: Blending the "Tape Stop" with the dry signal for a spooky texture.
    *   **De-Clicking**: Smoothing the entry/exit of the effect.

## 🧠 The Hybrid Approach
Use BOTH.
*   Use the **Volume Grid** to create the *rhythm* (the "Chop-Chop-Chop").
*   Use the **Mix Automation** to bring that rhythm in over time (Fade In -> Chop -> Fade Out).

## ⚠️ Warning: The "Double Volume" Trap
If you draw a volume envelope that boosts volume, AND you have the Mix knob at 50%, you might get weird phase cancellation or volume spikes.
*   *Rule of Thumb*: Use the Volume Grid for **reduction** (gating/ducking), not boosting.
