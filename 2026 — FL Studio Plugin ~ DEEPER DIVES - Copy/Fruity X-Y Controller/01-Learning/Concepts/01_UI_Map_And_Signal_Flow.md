# UI Map And Signal Flow: Fruity X-Y Controller

## UI Tour
1.  **The Pad:** The large black square where you drag the target.
2.  **X-Knob:** Controls the horizontal position manually.
3.  **Y-Knob:** Controls the vertical position manually.
4.  **Speed/Smoothing (In reference):** Controls how fast the signals follow your mouse. [SRC: IL-MAN]

## Signal Flow
1.  **Input:** User moves the mouse/target on the grid.
2.  **Output X:** A signal (0% to 100%) is generated based on the horizontal position.
3.  **Output Y:** A signal (0% to 100%) is generated based on the vertical position.
4.  **Target Link:** These signals are sent to any FL Studio parameter linked via "Remote Control."

## The "Internal Controller" Connection
Unlike an effect plugin, X-Y Controller "broadcasts" its position to the whole project.
*   **Step 1:** Load X-Y Controller.
*   **Step 2:** Right-click your target (e.g., Filter Cutoff) -> **Link to controller**.
*   **Step 3:** In the "Internal Controller" dropdown, look for **X-Y Controller - X**.
*   **Step 4:** Click Accept. Now moving the pad horizontally moves the filter. [SRC: REPUTABLE]

## Things Beginners Misunderstand
*   **"It's Silent":** It doesn't process audio. If you put it on a track, the audio passes through it untouched.
*   **Recording:** To record your movements, you must be in **Record Mode** (Automation) and move the target while the project is playing.
*   **Independence:** X and Y are completely independent. You can link X to a synth in the Channel Rack and Y to a reverb in the Mixer simultaneously.
