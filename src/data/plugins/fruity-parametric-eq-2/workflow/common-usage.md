# Common Workflows: Fruity Parametric EQ 2

## 1. Mid/Side Processing (The Wider Mix)

EQing the Stereo information separately from the Mono information.

**Goal:** Brighten the "Sides" of a synth bus without making the center harsh.

1.  **Plugin Setup:** Load Parametric EQ 2 on your Synth Bus.
2.  **Patcher Required:** *Actually, Parametric EQ 2 cannot do M/S internal processing inherently.* You must use **Patcher**.
    *   *Correction:* Wait! You can use **Stereo Shaper** splitting, OR usually people just use the Patcher "Mid-Side EQ" preset which uses 2x Parametric EQ 2s.
    *   *Alternative:* FL Studio Patcher Preset -> "Mid Side EQ".
3.  **Visual Method:** In pure PEQ2, you can *visualize* Mid vs Side.
    *   **Monitor Input:** Set to **SIDE**. Now the heatmap shows stereo width.
    *   **Action:** You can't separate the processing in one plugin instance. Use Patcher.

## 2. Linear Phase Mastering

Preserving the transient punch of a final mix.

1.  **Context:** You are on the Master Bus.
2.  **Mode:** Enable **LIN** (Linear Phase) button.
3.  **Analysis:** The audio will now have latency (Plugin Delay Compensation handles this).
4.  **Action:** Boost the High Air (+1dB at 10kHz).
5.  **Benefit:** In Standard mode, this high shelf smears the phase of the kick drum (lows) slightly due to phase wrap. In LIN mode, the phase relationship between Kick (Low) and Hats (High) remains locked.
6.  **Warning:** Do not use Steep 8 High Pass filters on the Master in LIN mode. It creates "Pre-Ringing" (a swoosh sound before the kick hits). Use Gentle slopes.

## 3. Surgical Vocal Cleanup (The "Search & Destroy")

1.  **Visuals:** Turn **Range** to -90dB. Set **Precision** to High.
2.  **Band 6:** Set to Peaking, Narrow Q. Gain +10dB.
3.  **Sweep:** While the vocal plays, sweep 200Hz - 800Hz.
4.  **Identify:** Find the "Mud" or "Boxiness" (usually ~300-500Hz).
5.  **Cut:** Drop the gain to -3dB.
6.  **Band 7:** High Shelf. Boost 10kHz +2dB for "Air".

## 4. Kick Drum Tuning (Key Mapping)

1.  **Goal:** Boost the fundamental of the kick.
2.  **Method:** Right-Click Band 2 token -> **Key** -> Select the Key of your song.
3.  **Refine:** Select octave 0 or 1.
4.  **Action:** The EQ band snaps to the exact Hz of that note.
5.  **Boost:** Add +2dB. Now your kick resonates in key with the bassline.

## 5. The "Visual" Mixcheck (Pivot Slope)

Using the plugin as a metering tool.

1.  **Monitor:** On the Master Bus.
2.  **Pivot Slope:** Set to **4.5dB**.
3.  **Observation:** Play a professional reference track.
4.  **Heatmap:** Notice how the heatmap looks generally "Flat" or balanced horizontally?
5.  **Comparison:** Play your track.
6.  **Diagnosis:** If your heatmap is bright red in the bass but black in the highs, your mix is dark. If it's bright in the highs but thin in the lows, it's harsh.
7.  **Goal:** Aim for a similar "Density Balance" to the reference.
