# UI Map And Signal Flow: Fruity Balance

## UI Tour
Fruity Balance features a streamlined interface designed for speed:

1.  **Volume Knob (Left):** Adjusts signal gain from silence (-inf) to +6dB. [SRC: IL-MAN]
2.  **Balance Knob (Right):** Adjusts the Left/Right balance of the stereo field.
3.  **Visual Meter:** Shows the input/output activity (minimalist feedback).

## Functional Flow
1.  **Input:** Audio enters from the previous slot or the Channel Rack.
2.  **Gain Stage:** The Volume knob multiplies the amplitude of the signal. 
3.  **Pan Engine:** The Balance knob applies a **Constant Power Panning Law**, ensuring that the perceived loudness remains consistent as you pan left or right. [SRC: UNVERIFIED - common FL behavior]
4.  **Output:** Audio is passed to the next effect slot.

## Things Beginners Misunderstand
- **Automation Values:** In an FL Automation Clip, `50%` (center) on the clip usually corresponds to `0dB` (Unity) on the plugin knob. Turning it higher than 50% boosts the signal. [SRC: REPUTABLE]
- **Stereo vs Mono:** Balance is a *Balance* control, not a *Pan* control in the traditional sense. It turns down one side to make the sound appear on the other. It does not "move" information from Left to Right.
- **Slot Placement:** Beginners often place it at the end of the chain. Try placing it **before** a Reverb to automate the "dry" volume without cutting off the reverb tail.
