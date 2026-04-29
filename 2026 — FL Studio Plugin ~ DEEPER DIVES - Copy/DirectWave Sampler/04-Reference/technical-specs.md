# Technical Specs: DirectWave Mechanics

## 1. Sample Interpolation

*   **Engine:** 64-point Sinc Interpolation (Variable).
*   **Settings:**
    *   *Draft / 16-point:* Use for live playback (Low CPU).
    *   *64-point / Sinc:* Use for rendering.
*   **Aliasing:** Lower interpolation settings introduce "ringing" or aliasing artifacts when pitching samples down.

## 2. Trigger Groups (Round Robin)

*   **Logic:**
    *   **Group:** A label (1-99) assigned to a set of zones.
    *   **Type:** The logic rule used to select *one* zone from the group.
*   **Modes:**
    *   *Normal:* All zones play (Stacking/Layering).
    *   *Cycle:* 1, 2, 3, 4, 1...
    *   *Random:* Pseudo-random.
    *   *Avoid Previous:* Random, but n != n-1.

## 3. Storage & Compression

*   **DWP:** The patch data (XML structure).
*   **WAV/AIFF:** Uncompressed audio.
*   **OGG:** Compressed audio. DirectWave supports **OGG Vorbis** encoding for Monolithic files.
    *   **Usage:** You can compress a 500MB Piano library into 50MB with OGG, with minimal quality loss.
*   **Total Recall:** Even if "Monolithic" is off, FL Studio zips up referenced samples when you use "Export Zipped Loop Package".

## 4. Modulation Internal Resolution

*   **Matrix:** Updated at Control Rate (not Audio Rate).
*   **LFOs:**
    *   Freerun mod allows for "Global" LFOs that don't reset per voice.
    *   "Sync" forces the LFO to lock to the Song Measure (1/4 beat, etc.).
*   **Envelopes:** Hardware-speed calculation (very fast attacks possible for drum synthesis).
