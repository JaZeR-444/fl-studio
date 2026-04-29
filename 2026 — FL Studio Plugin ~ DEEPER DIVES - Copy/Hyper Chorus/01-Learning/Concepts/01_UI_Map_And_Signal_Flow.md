# UI Map and Signal Flow: Hyper Chorus

## UI Tour
The Hyper Chorus interface is dominated by three large X-Y pads, designed for "visual mixing." [SRC: IL-MAN]

### 1. The X-Y Pads (The Core)
- **Pad 1 (Delay/Feedback):**
    - **X-Axis (Left/Right):** Delay Time. Shorter = tighter, flange-like; Longer = loose, ensemble-like.
    - **Y-Axis (Up/Down):** Feedback. Higher values create resonance and "ringing."
- **Pad 2 (Modulation):**
    - **X-Axis:** Modulation Amount (Depth). How far the pitch wobbles.
    - **Y-Axis:** Modulation Rate (Speed). How fast the pitch wobbles.
- **Pad 3 (Movement):**
    - **X-Axis:** Auto-Pan Amount. How wide the stereo movement is.
    - **Y-Axis:** Auto-Pan Speed. How fast the sound "swirls" between speakers.

### 2. Global Controls (Top/Right)
- **Voices (4/8):** Sets the density. 8 voices is the "Hyper" mode; 4 voices is more "Traditional."
- **Mono Button:** Forces the output to mono. Use this to check phase cancellation.
- **Noise Knob:** Adds white noise to the wet path. Great for lo-fi textures.
- **HP / LP Knobs:** High Pass and Low Pass filters for the *wet signal only*.

### 3. Mix Section (Bottom)
- **Mix Slider:** Dry/Wet balance.

---

## Signal Flow
1. **Input:** Dry audio enters.
2. **Split:** Signal splits into **Dry Path** and **Wet Path**.
3. **Voice Generation (Wet Path):** Input is cloned into 4 or 8 parallel delay lines.
4. **Modulation:** Each voice is assigned a unique phase offset of the internal LFO. The LFO modulates the delay time of each line independently (Phase Staggering). [SRC: RELNOTE]
5. **Feedback Loop:** Signal from the delay lines is fed back into the input of the delay lines based on the Feedback setting (Pad 1).
6. **Filtering:** The summed wet signal passes through the HP and LP filters.
7. **Noise Injection:** White noise is added to the wet signal path.
8. **Movement (Auto-Pan):** The wet signal is dynamically panned across the stereo field based on Pad 3 settings.
9. **Summing:** Dry and Wet paths are combined based on the Mix slider.
10. **Output:** Final processed audio.

---

## Things Beginners Misunderstand
- **"Why is it ringing?"** -> High Feedback (Pad 1, Y-axis) creates metallic resonance. Bring it down if you want a "natural" sound.
- **"It's making my bass disappear!"** -> Always use the **HP filter** (set to 200–400Hz) to keep the sub-frequencies dry and centered.
- **"What does 'Movement' do if I'm already in stereo?"** -> Movement is an *additional* auto-panner. If your sound is already wide, this will make it "dance" between the left and right channels.
- **"Voices 4 vs 8"** -> 8 voices isn't always "better." 4 voices can feel cleaner and more defined for simple leads.
- **Mono Check:** Always toggle the **Mono button** occasionally. Extreme 8-voice chorus can cause significant phase cancellation that makes the sound "disappear" on small mono speakers.