# Mid/Side EQ Setup (The Patcher Method)

Fruity Parametric EQ 2 is a stereo plugin. It treats Left and Right channels equally. To EQ the "Center" (Mid) differently from the "Width" (Side), we need to build a container using **Patcher**.

## 🏗️ The Architecture

We will split the audio signal into two streams:
1.  **Mid (Mono Sum):** The vocals, kick, snare, bass.
2.  **Side (Stereo Difference):** Reverbs, wide synths, backing vocal double tracks.

We will then process each stream with its own PEQ2, and combine them back.

## 🛠️ Step-by-Step Construction

1.  **Load Patcher** on your Mixer Track (Effect slot).
2.  **Open Map Tab** inside Patcher.
3.  **Add Plugins:**
    - Right-click workspace -> Add plugin -> **Fruity Stereo Shaper**.
    - Right-click workspace -> Add plugin -> **Fruity Parametric EQ 2** (Rename to "MID EQ").
    - Right-click workspace -> Add plugin -> **Fruity Parametric EQ 2** (Rename to "SIDE EQ").

4.  **Configure Stereo Shaper (The Splitter):**
    - This plugin handles the math. We need to output Mid on one pin and Side on another... actually, it's easier to use **two** Stereo Shapers or just route wisely.
    - **Easiest Method:** Use two separate Patcher chains.
    - **Chain 1 (Mid):** FL Studio Input -> Stereo Shaper (Preset: "Mid - aSide") -> MID EQ -> FL Studio Output.
    - **Chain 2 (Side):** FL Studio Input -> Stereo Shaper (Preset: "Side - aMid") -> SIDE EQ -> FL Studio Output.

5.  **Verify the Routing:**
    - Connect the yellow audio cables.
    - Input -> Stereo Shaper 1 -> Mid EQ -> Output.
    - Input -> Stereo Shaper 2 -> Side EQ -> Output.

## 🎧 Workflow: What to EQ Where?

### On the MID EQ (Center)
*   **Kick & Bass:** Keep them solid here.
*   **Vocals:** Boost presence (3 kHz) here to lock them in the center.
*   **Snare:** Add punch (200 Hz).
*   **Monocompatibility Check:** If it sounds good here, it will sound good on a phone.

### On the SIDE EQ (Width)
*   **High Pass:** Cut everything below 150 Hz. (Bass in the sides causes phase issues on vinyl/club systems).
*   **Air Boost:** Boost Band 7 (10 kHz+) high shelf. This makes the mix sound "wider" without messing up the center focus.
*   **De-Mud:** Cut 300-400 Hz to remove "room mud" from reverbs.

## 💾 Save the Preset

Once built, save this Patcher state as `PEQ2 Mid-Side Matrix`. You never want to wire this up manually again.

## 🌟 Pro Tip: The "Side" Solo

In Patcher, you can mute the "Mid" chain to listen *only* to the sides. This is incredible for hearing hidden details in reverbs or checking if your MP3 compression is eating the stereo information.
