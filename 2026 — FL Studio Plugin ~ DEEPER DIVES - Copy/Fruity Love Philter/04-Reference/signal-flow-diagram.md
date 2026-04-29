# Technical Reference: Signal Flow Diagram

Understanding the internal modularity of Love Philter. [SRC: IL-MAN]

## 1. Global Input
The stereo signal enters the plugin.

## 2. Unit Level (1 of 8)
Within each unit, the signal flow is:
- **Input Gain -> Waveshaper (Pre) -> Filter -> Waveshaper (Post) -> Pan -> Volume Out**.
- *Note*: The Waveshaper's position (Pre/Post) is determined by the **WS** routing button.

## 3. Inter-Unit Routing
This is where Love Philter becomes "Modular."
- **Unit 1 -> Next**: Signal goes to Unit 2.
- **Unit 1 -> Out**: Signal goes to the final plugin output.
- **Unit 1 -> Next + Out**: Signal splits. One copy goes to Unit 2, another to the output.

## 4. Complex Example: Parallel High/Low Processing
- **Unit 1**: Low-Pass Filter at 200Hz. Routed to **Out**.
- **Unit 2**: High-Pass Filter at 200Hz. Routed to **Out**.
- **Result**: You can now apply different waveshaping and LFOs to the bass and the highs independently inside a single plugin.

## 5. Output Summing
All Units set to **Out** are summed together. The global **Mix** slider in the wrapper controls the overall Dry/Wet.
