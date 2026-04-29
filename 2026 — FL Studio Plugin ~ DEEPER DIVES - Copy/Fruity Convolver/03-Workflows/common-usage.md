# Common Workflows: Fruity Convolver

## 1. Cloning "Valhalla" (Plugin Theft)

1.  **Scenario:** You love a specific preset in a CPU-heavy Reverb plugin, but you want to use it on 20 tracks.
2.  **Setup:**
    *   Slot 1: **Fruity Convolver** (The Trigger).
    *   Slot 2: **Heavy Reverb** (The Target). *Set Mix to 100% Wet*.
    *   Slot 3: **Fruity Convolver** (The Recorder).
3.  **Process:**
    *   Arm Record on Slot 3.
    *   Hit the "Spark" (Lightning Bolt) on Slot 1.
    *   Wait for the tail to die.
4.  **Finish:** Drag the audio form Slot 3's editor out to your desktop, then drag it into a fresh Convolver. You now have that reverb sound with optimized CPU usage.

## 2. Linear Phase Mastering EQ

1.  **Goal:** Boost Highs transparency without phase smear.
2.  **Action:**
    *   Load "Default" preset (should be a Dirac spike).
    *   Go to **Impulse EQ** tab.
    *   Draw a High Shelf boost.
3.  **Why:** Convolver applies this EQ using FFT convolution, which is naturally Linear Phase. It is cleaner than IIR filters (Parametric EQ 2) for subtle mastering adjustments.

## 3. The "Resonator" (Short Metal IRs)

1.  **Source:** Record a single hit of a metal pipe or a wine glass (0.5 seconds).
2.  **Load:** Import this as the Impulse.
3.  **Input:** Percussion Loop.
4.  **Result:** The percussion loop sounds like it is being played *inside* the metal pipe. The resonant frequencies of the pipe are imposed on the drums.

## 4. Stretch & Pitch warping

1.  **Knob:** The **Stretch** knob (Time Stretch).
2.  **Effect:**
    *   Stretch 200%: The room size doubles.
    *   Stretch 50%: The room shrinks (Munchkinization).
3.  **Pitch:** Unlike time-stretching audio clips, stretching an IR changes its frequency response (Pitch Shift). A large Hall stretched becomes a rumbling dungeon.
