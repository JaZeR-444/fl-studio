# Genre Rules: Hip-Hop & R&B (Fruity Vocoder)

## Rule 1: Gain Staging for Intelligibility
*   **Modulator (Vocal):** Must be normalized or limited. The Vocoder's "gates" depend on the peak volume of the vocal. If the vocal is dynamic, the vocoder will flicker in and out inconsistently.
*   **Carrier (Synth):** Must be loud enough to fill the bands but not clipping.

## Rule 2: Transient Preservation
*   In modern Rap, the vocal's rhythm is as important as the melody. 
*   **Rule:** Keep **Attack** at its lowest setting (0-2ms) to ensure the "punch" of the rap flow triggers the carrier immediately.

## Rule 3: The "Parallel" Default
*   Rarely use Fruity Vocoder at 100% wet in R&B unless it's a specific "interlude" effect.
*   **Rule:** Mix the vocoded signal at **40-60%** with the original dry vocal to maintain the singer's emotion and breathiness while adding the "robotic" texture.

## Rule 4: Automation Smoothing
*   When automating the **Formant** or **Scale**, use a "Smooth" curve in the Automation Clip. Abrupt jumps in these parameters can cause digital "pops" because the filter bank has to recalculate frequencies.

## Rule 5: Low-End Safety
*   **Rule:** Never vocode the sub-bass.
*   Always put a **Fruity Parametric EQ 2** *after* the vocoder and cut everything below **150Hz**. Low-frequency vocoding causes phase mud that ruins the kick drum's impact. [SRC: REPUTABLE]