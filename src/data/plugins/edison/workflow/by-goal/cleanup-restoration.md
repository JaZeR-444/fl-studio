# Cleanup and Restoration (Edison)

## Goal
Remove unwanted noise, breaths, or mouth clicks from a recording.

## Technical Steps
1. **Noise Profiling:**
   - Highlight a section containing only background noise.
   - Go to `Tools > Clean up > Acquire noise profile`.
2. **Denoising:**
   - Select the entire audio clip.
   - Go to `Tools > Clean up > Clean up tool`.
   - Adjust **Threshold** and **Amount** while listening to the "Output noise only" toggle to ensure you aren't removing actual music.
3. **De-Clicking:**
   - Use the `Tools > Spectral > Declicker` for rapid removal of mouth clicks or vinyl pops.
4. **Fading:**
   - Use `Ctrl + F` to apply quick fades to the start and end of regions to prevent DC offset clicks.

## Why it works
Edison uses spectral subtraction algorithms for denoising, which separates steady-state noise from dynamic audio signals based on the statistical profile you provide.
