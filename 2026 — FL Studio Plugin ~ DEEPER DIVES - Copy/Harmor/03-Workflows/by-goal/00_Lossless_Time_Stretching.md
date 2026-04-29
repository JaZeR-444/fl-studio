# Goal: Lossless Vocal Time-Stretching (Harmor)

## Routing Context
*   **Source:** A 4-bar Vocal Loop.
*   **Target:** A remix where the tempo is drastically different.

## Step-by-Step Setup
1.  Initialize **Harmor**.
2.  Go to the **IMG** tab.
3.  Drag your vocal sample from the Browser into the large empty window.
4.  **Crucial Settings:**
    *   Set **Speed** to 0%. (The sample will stop playing).
    *   Right-click the **Time** knob -> **Create Automation Clip**.
5.  In the Playlist, draw a line from bottom-left to top-right over the length of your vocal.

## Result
*   The vocal will play back at whatever speed you draw the automation. You can make it 10x slower or speed it up 5x, and it will remain crystal clear without any "robotic" sampling artifacts. [SRC: IL-MAN]

## Variations
1.  **Frozen Vowel:** Draw a horizontal line in the automation. The vocal will "freeze" on that specific vowel indefinitely.
2.  **Backwards:** Draw the line from top-right to bottom-left to play the vocal in reverse spectral order.

## Pitfalls
*   **Missing Highs:** If it sounds dull, check the **Frequency Mapping** slider in the IMG tab. Ensure it's covering the full range.
