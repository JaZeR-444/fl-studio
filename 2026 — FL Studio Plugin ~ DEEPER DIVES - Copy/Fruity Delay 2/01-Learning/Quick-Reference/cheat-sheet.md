# Fruity Delay 2: The Workhorse

> **Scope:** Simple Echo, Stereo Widening, and Ping Pong.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Essential).

## 🧠 The "Old School" Efficiency
Why use Delay 2 when Delay 3 exists?
*   **CPU:** It uses practically zero CPU.
*   **Simplicity:** It lacks the filters/distortion of Delay 3, making it cleaner for simple tasks.
*   **Constraint:** Sometimes having fewer knobs prevents you from ruining a simple echo.

**Signal Flow:**
`Input` -> **[INPUT PAN]** -> **[DELAY BUFFER (TIME + OFFSET)]** -> **[FEEDBACK LOOP (VOL + CUT)]** -> **[MIX]** -> **[OUTPUT]**

---

## 🎛️ Section 1: Feedback Modes

Fruity Delay 2 handles stereo feedback in three specific ways.

| Mode | Behavior | Use Case |
| :--- | :--- | :--- |
| **Normal** | Left feeds Left. Right feeds Right. | Standard echo. Preserves stereo image. |
| **Inverted** | Left feeds Right. Right feeds Left. | Static Cross-Delay. Good for widening mono sources. |
| **Ping Pong** | Left -> Right -> Left -> Right... | Classic movement. Creates space in the center. |

---

## 🔁 Section 2: Time Math (The 48 System)

Fruity Delay 2 uses a weird internal clock.
*   **Base Unit:** 1 Step (1/16th note).
*   **Resolution:** 48 Ticks per Step.
*   **Why?** To handle Triplets cleanly.
    *   *Normal 1/16th:* `48 ticks` (1:00).
    *   *Triplet 1/16th:* `32 ticks` (0:32). (Because 32 x 3 = 96, which is exactly 2 steps).
    *   *Dotted 1/16th:* `72 ticks` (1:24).

---

## ⚡ Technical Specs: The Filter

*   **Knob:** "Cut".
*   **Type:** 6dB/Octave Low Pass Filter (located in the feedback loop).
*   **Behavior:** It does not filter the *first* echo? No, it filters the feedback. So Echo 1 is filtered once. Echo 2 is filtered twice (darker). Echo 3 is filtered thrice (mud).
*   **Dub Physics:** This accumulative filtering simulates the natural absorption of high frequencies in a room or tape loop.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Haas" Widener
1.  **Time:** Minimum (Reset).
2.  **Stereo Offset:** Turn Right slightly (~20ms).
3.  **Feedback Vol:** 0 (None).
4.  **Dry:** 100%.
5.  **Result:** The Left Channel plays instantly. The Right Channel plays 20ms later. The brain interprets this as a single "Wide" sound. Fully Mono Compatible (comb filters collapse).

### 2. Manual Doubler
1.  **Mode:** Normal.
2.  **Time:** 4 steps (1 beat).
3.  **Offset:** -10% (Left channel plays slightly earlier than Right).
4.  **Result:** When the echo hits, it doesn't sound like a laser beam. The L/R discrepancy makes the echo sound "larger" than the original vocal.

### 3. Infinity Dub
1.  **Volume (Feedback):** Max.
2.  **Cut:** 50%.
3.  **Action:** The delay will self-oscillate forever.
4.  **Play:** Automate the **Time** knob while it oscillates.
5.  **Result:** Pitch warping artifacts create spaceship landing noises (The classic Tape Delay behavior).
