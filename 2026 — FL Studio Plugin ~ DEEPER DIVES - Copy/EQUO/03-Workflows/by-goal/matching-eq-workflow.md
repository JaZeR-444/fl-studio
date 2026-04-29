# Goal Workflow: Matching EQ Workflow (Spectral Grafting)

*Goal: Correcting a dull recording by matching its frequency profile to a professional reference track.*

## 🎛️ Routing Context
- **Routing**: Target Track (Your Sound) -> Mixer Track with EQUO.
- **Reference**: Have a high-quality audio clip loaded into a separate mixer track.

## 🚶 Step-by-Step Setup
1. **Analyze Reference**:
   - Temporarily route your professional reference track into the mixer track containing EQUO.
   - Play the reference.
   - Click and hold the **Analyze** button in EQUO for 5-10 seconds.
   - *Result*: EQUO will draw a curve representing the "average" frequency balance of the reference.
2. **Freeze the Curve**: Once the drawing is stable, let go of the button.
3. **Switch to Target**: Route your professional reference back to its original track, and route your "Your Sound" back into the EQUO mixer track.
4. **Inverse Correction (The Secret)**:
   - Right-click the display and select **Invert**.
   - *Logic*: By inverting the reference curve, you are now cutting the frequencies where the reference was too loud and boosting where it was quiet.
5. **Transparency Check**: Set the **Mix** knob to 20-30%. You rarely want a 100% "matched" EQ as it can sound unnatural.
6. **Final Polish**: Adjust the **Shift** knob if the overall tone feels too bright or dark after the match.

## 🔄 Variations
- **The "Direct Match"**: Don't invert. Just use the analyzed curve to see which frequencies your sound is missing.
- **Drum Grafting**: Match your hi-hats to a "silky" reference to get that professional top-end air.

## ⚠️ Pitfalls & Fixes
- **Problem**: The matched sound is noisy.
- **Fix**: Matching EQ often boosts unwanted low-level noise. Use a **High Shelf** cut in EQUO to tame the noise floor after the analysis.
