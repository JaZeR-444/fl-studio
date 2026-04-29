# Data: G-Funk Leads & R&B Pads
**Goal:** Specific parameter mappings to turn MiniSynth into an Urban music workhorse.

## 1. The G-Funk "Worm" (Lead)
*Used for: West Coast vibes, Jazzy/Funky hooks.*
- **Oscillator:** Sine or Saw (Sine is cleaner/classic).
- **Polyphony:** MONO (Essential).
- **Glide (Portamento):** Set to **30-50%**. This allows the notes to "slide" up and down.
- **Filter:** High Cut (LP) set to ~80%. 
- **Modulation:** Add a small amount of **Vibrato (LFO to Pitch)** triggered by the Mod Wheel for that expressive, whistling feel.

## 2. The Lo-Fi "Moody" Keys
*Used for: Dark R&B, Trap Soul chords.*
- **Oscillator:** Square (Pulse).
- **PWM (Pulse Width):** Set to ~40% for a "hollow" vintage tone.
- **Filter:** Low Pass set to **30-40%** (Dark).
- **Envelope (Amp):** Attack 20ms | Decay 500ms | Sustain 50% | Release 300ms.
- **LFO to Pitch:** Speed 2Hz | Amount 5%. This creates the "wow and flutter" of an old tape machine.

## 3. The 808-Assist Sub
*Used for: Adding weight to weak kicks.*
- **Oscillator:** Sine.
- **Filter:** Low Pass set to **10%** (Cutting all highs).
- **Envelope (Amp):** Attack 0ms (Instant punch).
- **Processing:** Run this through **Fruity Soft Clipper** for harmonic distortion.

## 4. Preset Logic Mapping
| Vibe | Oscillator | Filter Type | Key Feature |
| :--- | :--- | :--- | :--- |
| **G-Funk** | Sine | LP | High Portamento |
| **Trap Soul** | Square | LP (Dark) | Pitch LFO (Wobble) |
| **Neo-Soul** | Saw | BP (Bandpass)| Resonant Wah-feel |
| **Hard Trap** | Saw (Unison)| LP | Fat Distortion |
