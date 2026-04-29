# UI Map And Signal Flow: Fruity Delay Bank

## UI Tour
1.  **Bank Tabs (1-8):** Select which of the 8 delay units you are editing.
2.  **Delay Section:**
    *   **Time:** Duration.
    *   **OFS (Offset):** Stereo time shift.
3.  **Filter Section:** Includes specialized modes like "Vanilla," "Butterworth," and "Chebyshev."
4.  **Character Section:**
    *   **Drive:** Saturation.
    *   **Grain:** Chops the echo into small pieces (Granular). [SRC: IL-MAN]
5.  **Routing Section (The Brain):**
    *   **To Main:** Sends the bank's sound to the mixer.
    *   **To Next:** Sends the bank's sound into the input of the next bank (e.g., 1 -> 2).

## Signal Flow
1.  **Input:** Audio enters Bank 1.
2.  **Processing:** Bank 1 applies Delay, Filter, and Grain.
3.  **Decision Point:**
    *   **Parallel:** If "To Main" is up, you hear Bank 1 instantly.
    *   **Serial:** If "To Next" is up, Bank 1 flows into Bank 2.
4.  **Recursion:** This continues through all 8 banks.
5.  **Summing:** All signals sent "To Main" are summed at the output. [SRC: REPUTABLE]

## Things Beginners Misunderstand
*   **"Why is it silent?":** By default, the **Routing** knobs (To Main) are often at 0. You must turn up "To Main" for every bank you want to hear.
*   **Bank Power:** Each tab has a small indicator light. If it's off, that bank is bypassed.
*   **Grain vs Feedback:** Feedback repeats the whole sound. Grain "slices" the sound into fragments. High Grain settings sound like metallic reverb. [SRC: IL-MAN]
