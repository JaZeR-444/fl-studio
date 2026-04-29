# UI Tour & Core Concepts

## The Interface
The UI is incredibly minimal. It looks like a futuristic weapon/gadget.

### 1. The Display (Preset Number)
-   Displays the current preset ID (e.g., `Preset 4294967296`).
-   **Interaction:** You can click this area to type in a number manually.
-   **The "?" Icon:** Hover over the `?` or the info area to see the full preset number if it's truncated.

### 2. Navigation Controls
-   **Left/Right Arrows:** Step through presets 1 by 1. (Not recommended for finding new sounds, as neighbors are often similar).
-   **Random Button (Dice/A):** The most important button. Jumps to a random spot in the 4-billion-number universe.

### 3. Magic Dust
-   **What is it?** It is essentially a **Soundgoodizer** (Maximus preset) knob built-in.
-   **Function:** It adds compression, saturation, and stereo widening.
-   **0%:** Dry, raw Ogun sound.
-   **100%:** Hyper-processed, loud, and shiny.

### 4. Volume
-   Master output level.

## Core Concepts

### The "Seed" Concept
Autogun doesn't store 4 billion files on your hard drive. That would take petabytes. Instead, it uses a mathematical algorithm. The "Preset Number" is a **Seed**. The synth calculates the sound in real-time based on that number. This is why the plugin is so small but the library is so huge.

### The Ogun Connection
Autogun is the "Player" version of the plugin **Ogun**.
-   **Autogun:** Can *play* the sounds but not edit them.
-   **Ogun:** Can *edit* the sounds.
-   **Workflow:** If you find a preset you love in Autogun but want to change the envelope decay, you can copy the number and paste it into Ogun (if you own Ogun).
