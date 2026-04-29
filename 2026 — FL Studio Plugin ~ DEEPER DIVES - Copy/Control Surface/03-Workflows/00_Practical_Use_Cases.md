# Practical Use Cases

## 1. The "Master Bus" Confidence Monitor
**Goal:** A simple, safe dashboard for your Master channel.
-   **Setup:**
    -   Add Control Surface to the Master Mixer track (Slot 1).
    -   Add 1 Big Knob ("Volume"), 1 Button ("Mono Check"), 1 Slider ("Limiter Ceiling").
-   **Routing:**
    -   Link "Volume" to a `Fruity Balance` Gain at the end of the chain.
    -   Link "Mono Check" to the "Stereo Separation" knob on the Mixer track (use formula `Input * -1` if needed for merge).
    -   Link "Limiter Ceiling" to your final Limiter.
-   **Why:** Prevents you from accidentally opening 5 different plugins just to check levels.

## 2. The "One-Knob" Risers
**Goal:** Create a massive EDM transition with a single fader.
-   **Setup:**
    -   Add Control Surface. Create one giant Slider called "TENSION".
-   **Routing:**
    -   Link "TENSION" to:
        1.  Reverb Wet Level (Increases).
        2.  Filter Cutoff (High pass moves up).
        3.  Pitch Shifter (Slight rise).
        4.  White Noise Volume (Increases).
-   **Why:** You can draw *one* automation clip for the "TENSION" slider instead of 4 separate automation clips. This keeps the Playlist incredibly clean.

## 3. The Patcher "Effect Rack"
**Goal:** Build your own multi-fx unit (e.g., "Lo-Fi Maker").
-   **Setup:** Open Patcher. Add Distortion, EQ (Radio curve), and Vinyl plugin.
-   **Surface:** Add 3 Knobs: "Dirt" (Distortion), "Age" (EQ bandwidth), "Wobble" (Vinyl pitch).
-   **Routing:** Map the knobs to the relevant parameters inside Patcher.
-   **Result:** You now have a custom plugin called "Lo-Fi Maker" that hides the complexity.

## 4. Live Performance "Launchpad"
**Goal:** Trigger effects on the fly.
-   **Setup:** Add 8 Buttons in "Momentary" mode.
-   **Routing:** Link them to the "Mute/Solo" buttons of 8 specific "Stutter" or "Beat Repeat" effects (like Gross Beat slots).
-   **Why:** You can "play" the effects rhythmically like a drum pad.

## 5. Visual "Key Switch" Selector
**Goal:** Easy articulation switching for orchestral libraries.
-   **Setup:** Add a Row of Buttons labeled "Legato", "Staccato", "Pizz".
-   **Routing:** Link these buttons to a `Fruity Keyboard Controller` or MIDI Out that sends the specific MIDI Note (C0, C#0, D0) required by your Kontakt library.
-   **Why:** Clicking a button named "Staccato" is easier than remembering "C#0 switches articulation".
