# Common Workflows: Drumpad

## 1. Patcher Drum Synth

Drumpad is lightweight, making it perfect for Patcher.

1.  **Goal:** Build a custom Kick/Snare/Hat combo in one channel.
2.  **Setup:** Open Patcher.
    *   Load 3 instances of Drumpad.
    *   Name them "Kick", "Snare", "Hat".
3.  **VFX Key Mapper:** Place this before the Drumpads.
    *   Map C5 -> Kick.
    *   Map D5 -> Snare.
    *   Map F#5 -> Hat.
4.  **Benefit:** You have a fully synthesized, physically modeled kit with zero samples to lose.

## 2. Layering with Samples (FPC)

Drumpad adds the "Life" that samples lack.

1.  **Context:** You have a sample-based Snare in FPC. It sounds static.
2.  **Action:** Layer a Drumpad instance triggering on the same note.
3.  **Drumpad Settings:**
    *   Mute the Membrane (Decay 0).
    *   Turn up Mallet Noise.
    *   Use Velocity -> Noise Level.
4.  **Result:** The sample provides the "Crack", Drumpad provides a dynamic "Wire Buzz" that changes with every hit.

## 3. Automating Membrane Tension (Talking Drums)

1.  **Genre:** Psytrance / Tribal / Experimental.
2.  **Technique:** Modulating pitch *during* the hit.
3.  **Method:**
    *   Link an LFO to **Membrane Tension**.
    *   Set Drumpad Decay to be long (1-2 seconds).
4.  **Sound:** The pitch bends up and down smoothly while the drum rings out. This captures the sound of squeezing a talking drum.

## 4. CPU Optimization

1.  **Voices:** Drumpad is monophonic by default (one drum).
2.  **Oversampling:** The physical model runs at high internal rates.
3.  **Freeze:** If you use many Drumpads (e.g., 20 for a glitch track), consider rendering to audio. Although efficient, 20 physical models is heavier than 20 samplers.
