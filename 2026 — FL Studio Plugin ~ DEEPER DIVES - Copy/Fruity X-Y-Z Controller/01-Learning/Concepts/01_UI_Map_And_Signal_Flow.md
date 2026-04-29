# UI Map And Signal Flow: Fruity X-Y-Z Controller

## UI Tour
1.  **3D Pad:** The grid area where you move the target.
2.  **Output Knobs (X, Y, Z):** Displays the current values of the three axes.
3.  **Speed/Acceleration Meters:** Visual feedback of how fast the target is moving.
4.  **Absolute vs. Relative Mode:**
    *   **Absolute:** The target stays where you click.
    *   **Relative:** The target moves based on the *difference* in your mouse movement (best for Joysticks). [SRC: IL-MAN]

## Signal Flow
1.  **Input:** Mouse movement (X/Y) + Wheel (Z).
2.  **Analysis:** The plugin calculates position, speed (velocity), and acceleration (rate of speed change).
3.  **Output Generation:** Five independent signals are broadcast to FL Studio:
    *   **X, Y, Z** (Position-based)
    *   **Speed** (Movement-based)
    *   **Acceleration** (Momentum-based)
4.  **Remote Control:** These signals are picked up by any knob linked via "Internal Controller."

## The "Speed" & "Acceleration" Secrets
*   **Speed:** Imagine a "Washing Machine" effect. If you stir the target fast, the effect turns up. If you stop, it turns down.
*   **Acceleration:** This is like a "Snatch" or "Flick." If you suddenly jerk the mouse, the signal spikes. Perfect for "accent" triggers (e.g., triggering a reverb splash).

## Things Beginners Misunderstand
*   **The Z-Axis:** By default, it's mapped to the Mouse Wheel. If you don't have a wheel, you can't move the Z-value manually in the pad.
*   **Smoothing:** X-Y-Z also has internal smoothing. If your hardware is "jittery," use the Speed/Accel smoothing settings to clean it up. [SRC: REPUTABLE]
