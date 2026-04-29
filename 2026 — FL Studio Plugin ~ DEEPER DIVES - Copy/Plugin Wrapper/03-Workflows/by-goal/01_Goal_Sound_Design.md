# Workflow: Multi-Output Routing

**Goal:** Process the Kick and Snare from a Drum VST (e.g., Battery/Kontakt) separately.

1.  **Plugin:** Load multi-output VST (e.g., Kontakt).
2.  **Wrapper:** Go to **Detailed Settings (Gear)** -> **Processing** (Chip icon).
3.  **Outputs:** Look at the "Connections" list at the bottom right.
4.  **Map:** Set "1. Out" to "--" (Default). Set "2. Out" to "1".
5.  **Mixer:** This routes Output 2 to the *next* mixer track relative to the main one.
6.  **Result:** You can now EQ the Snare separately from the Kick in the FL Mixer.
