# Common Workflows: Fruity Delay 3

## 1. The "Dub Throw" (Automation)

A classic reggae/dub technique where only specific words or hits are sent to the delay.

**Concept:** Instead of automating the "Mix Level" knob, automate the **Input Wet** knob. This allows the feedback tail to ring out naturally even after you stop sending signal.

1.  **Setup:** Place Delay 3 on a Vocal Insert.
2.  **Input:** Set the small **Wet** knob (under Input section) to 0% (Left).
3.  **Automation:** Right-click Input Wet -> Create Automation Clip.
4.  **Action:** Draw a "Spike" in the automation clip only on the last word of a phrase (e.g., "Love").
5.  **Result:** Only that word enters the feedback loop. The echoes continue cleanly. If you automated the *Mix* knob, the echoes would cut off abruptly when the automation went down.

## 2. Lo-Fi Chorus / Vibrato

Using Delay 3 as an insert effect without any actual "Echoes".

1.  **Delay Model:** Set to **OFF**.
    *   *Note:* This disables the buffer, but NOT the processing.
2.  **Wet/Dry:** Set Dry to 0%, Wet to 100%.
3.  **Modulation:**
    *   **Rate:** ~3 Hz.
    *   **Time:** ~15% (Wobble).
4.  **Degradation:**
    *   **Sample Rate:** Dial down to ~12kHz.
    *   **Bits:** 12 Bits.
5.  **Result:** A wobbly, gritty, vintage chorus effect that sounds like a broken VHS tape. Perfect for "Boards of Canada" style synths.

## 3. The "Abyss" Reverb (Diffusion Hack)

Turning a delay line into a massive, dark reverb.

1.  **Time:** Set to ~150ms.
2.  **Feedback:** High (~80%).
3.  **Filter:** LP (Low Pass). Cutoff around 4kHz.
4.  **Diffusion:**
    *   **Level:** 100% (Max).
    *   **Spread:** 100% (Max).
5.  **Distortion:** Enable Saturation.
6.  **Result:** The echoes are so smeared they lose their transient attacks. They merge into a dark, rolling thundercloud of sound. Great for Cinematic Drones.

## 4. Tape Stop / Pitch Dive

Creating the "slowing down turntable" effect.

1.  **Keep Pitch:** Ensure this is **OFF**.
2.  **Smoothing:** Set to roughly **75%**.
    *   *Why?* High smoothing makes the pitch glide slower.
3.  **Action:** Automate the **TIME** knob.
4.  **Perform:** Quickly automate the Time from 200ms -> 800ms.
5.  **Result:** The pitch will drop drastically (Doppler Effect) and slowly slide back up, exactly like putting your finger on a playing record.

## 5. Stereo Width (The Haas Effect)

Making a mono sound stereo without reverb.

1.  **Model:** Stereo.
2.  **Time:** 0ms (Minimum).
3.  **Offset:** Turn to +20ms.
4.  **Feedback:** 0% (No repeats).
5.  **Result:** The Right channel is delayed by 20ms. The brain perceives this not as an echo, but as extreme width.
    *   *Warning:* Check in Mono. This can cause phase cancellation.
