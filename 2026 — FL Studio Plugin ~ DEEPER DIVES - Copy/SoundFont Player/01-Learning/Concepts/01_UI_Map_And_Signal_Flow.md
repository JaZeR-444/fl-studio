# 01: UI Map and Signal Flow

## UI Sections Tour
SoundFont Player is one of the most straightforward plugins in FL Studio, focusing on ease of use. [SRC: IL-MAN-05]

### 1. Bank & Preset Selection
- **Folder Icon:** Load your `.sf2` file.
- **Preset Name Box:** Click to see all instruments inside the loaded bank.
- **Bank/Patch Numbers:** Standard MIDI numbering for navigation.

### 2. Synthesis Overrides (The Sliders)
- **ADSR:** Attack, Decay, Sustain, and Release controls to override the SoundFont's internal settings.
- **Filter (Cut/Mod):** Control the cutoff frequency and the amount of envelope modulation.
- **LFO (Freq/Amp):** Control the speed (Freq) and depth (Amp) of vibrato.

### 3. Master Panel
- **Vol / Pan / Pitch:** Global output controls.
- **Reverb/Chorus:** Enable or disable the SoundFont's internal legacy effects.
- **Built-in Editor:** A link to open the bank in an external editor like Polyphone.

## Signal Flow
`SF2 Sample Data -> Sample Interpolation (Crunchy/HQ) -> ADSR Overrides -> Filter Section -> LFO Modulation -> Internal FX (Reverb/Chorus) -> Output`

## Things Beginners Misunderstand
- **"The ADSR isn't working":** Ensure the "Override" switches (the small lights next to the sliders) are turned ON. If they are off, SFP uses the SoundFont's original settings.
- **Resampling Quality:** "Crunchy" isn't a bad thing; it adds a lo-fi aliasing that is perfect for hip-hop.
- **Missing SoundFonts:** The plugin doesn't come with a massive library; you must download `.sf2` files from the internet (e.g., SGM-V2.0 or GeneralUser GS).
