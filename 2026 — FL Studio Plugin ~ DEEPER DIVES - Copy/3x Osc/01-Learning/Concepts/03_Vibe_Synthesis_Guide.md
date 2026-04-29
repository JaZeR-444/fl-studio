# Vibe Synthesis Guide: 3x Osc

Translating geometric waveforms into specific Hip-Hop and R&B aesthetic targets.

---

## 1. MOODY
*Darkness, weight, and "heavy" atmospheres.*
- **The Lever**: **Sine Foundation + Deep LP Filtering**.
- **Move**: Osc 1: Sine. Osc 2: Triangle (Detuned -5c). INS Tab: LP Filter at 500Hz.
- **What to Listen For**: A heavy, muffled sound that feels like a weight being dropped on carpet. It provides the sub-foundation without being distracting.
- **Don't Do This**: High resonance (too energetic).

## 2. UPBEAT
*Energy, sharp transients, and rhythmic drive.*
- **The Lever**: **Square Wave + Fast ADSR Decay**.
- **Move**: Osc 1: Square. Osc 2: Saw (+7 Semitones). VOL Env: Decay at 200ms, Sustain at 0%.
- **What to Listen For**: A sharp, percussive "knock" that hits the chest. The fast decay ensures the synth stays out of the way of the drums.
- **Don't Do This**: Long sustain (it slows the energy down).

## 3. PSYCHEDELIC
*Disorientation, shifting textures, and "melting" soundscapes.*
- **The Lever**: **Pitch LFO + Detuned Saw Stacks**.
- **Move**: Osc 1, 2, 3 all Saws (Detuned +5, 0, -5). INS Tab: Pitch LFO at 2Hz with moderate depth.
- **What to Listen For**: The pitch seems to "melt" and swirl. The wide detuning creates a liquid landscape that feels larger than the speakers.
- **Don't Do This**: Symmetrical detuning without LFO (too static).

## 4. JAZZY
*Warmth, subtle focus, and "organic" soul.*
- **The Lever**: **Triangle Wave + Slow Release + No Noise**.
- **Move**: Osc 1: Triangle. Osc 2: Sine (+12 Semitones). Muffled LP Filter at 1kHz. 
- **What to Listen For**: A rounded, warm tone that mimics the sound of a vintage organ or clean electric piano. It should sound "soulful" and "woodwind-like."
- **Don't Do This**: Using the Square wave (too digital).

## 5. VIBEY
*Modern luxury, expensive sheen, and smooth motion.*
- **The Lever**: **Rounded Saw + Stereo Phase + 10k Shelf**.
- **Move**: Osc 1: Rounded Saw. Stereo Phase at 20%. Add external Reverb. High Shelf EQ at 10kHz.
- **What to Listen For**: A wide, "silky" pad that feels modern and professional. The rounded saw provides the character without the harshness of a standard saw.
- **Don't Do This**: Using 100% "Dry" synthesis (needs some saturation to sound "expensive").

---

## Vibe Parameter Matrix
| Vibe | Primary Wave | Detune | Filter Cutoff | ADSR Character |
| :--- | :--- | :--- | :--- | :--- |
| **Moody** | Sine | None | Low (500Hz) | Long Release |
| **Upbeat** | Square | +7st | Open | Fast Decay |
| **Psyched**| Saw | Heavy | Mod | Slow LFO |
| **Jazzy** | Triangle | Subtle | Mid (1.2kHz) | Natural |
| **Vibey** | Rounded Saw | Mod | High | Smooth Swell |
