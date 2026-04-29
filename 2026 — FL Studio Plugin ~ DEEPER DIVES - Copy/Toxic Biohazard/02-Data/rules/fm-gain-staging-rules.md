# Rules: FM Gain Staging (Toxic Biohazard)

Tags: fm-synthesis | mix-safety | oscillation

## 1. The "Modulation Overflow" Rule
In FM synthesis, increasing the modulation amount increases the harmonic complexity AND the perceived volume.
- **Rule:** As you increase the **Mod Amount** in the matrix, decrease the **Master Level** of the oscillator.
- **Why:** High FM amounts can create "non-linear" volume spikes that will cause internal clipping within Toxic Biohazard's effects engine (Reverb/Delay).

## 2. Low-Frequency FM Safety
- **Rule:** Never use a complex waveform (Saw/Square) as a **Modulator** for a Sub-Bass carrier.
- **Why:** Modulating a Sine wave with a Saw wave at low frequencies creates "chaotic" phase shifts that make the low-end of a Hip-Hop track sound muddy and untuned. Use **Sine into Sine** for clean sub-bass FM.

## 3. High Ratio Aliasing Rule
- **Rule:** If using Ratios above 10.000 (Metallic bells), use a **Low Pass Filter** set to 15kHz.
- **Why:** High Ratios can create "Aliasing" (digital artifacts) that sound like static noise. Filtering the extreme highs keeps the "Bell" tone while removing the digital "Trash."

## 4. "Avoid" List
- **Avoid 100% Unison on Bass:** Unison adds phase-shifting width. If used on a sub-bass, the low-end will lose its "Mono punch." Keep Unison for Leads and Pads only.
- **Avoid Over-Resonant LP Filters:** FM sounds are already harmonic-rich. Adding 80% Resonance on top of a complex FM patch usually results in a "whistle" that is painful to the listener.
