# 01: UI Map and Signal Flow

## UI Sections Tour
The Speech Synthesizer interface is a singular pop-up dialog box with several critical sections. [SRC: IL-MAN-06]

### 1. Text Input Area
- **The Box:** Where you type your phrase.
- **Syntax Support:** Supports parenthesis for pitch control (e.g., `(C5)Hello`).

### 2. Voice Selector (The Personality)
- **Voice List:** Classic, Giant, Child, Robot, etc. Each has a different formant structure.

### 3. Style (The Intonation)
- **Natural:** Standard speaking cadence.
- **Monotone/Sing:** No pitch variation (stays on the target root note).
- **Random:** Random pitch jumps (good for "glitchy" or "crazy" vibes).

### 4. Mode (The Texture)
- **Normal:** Standard vocal output.
- **Breathy:** Adds a soft, airy quality.
- **Whispered:** Removes the pitch entirely, leaving only the phonetic noise.

### 5. Pitch & Rate Sliders
- **Pitch:** Sets the fundamental musical note of the voice.
- **Rate:** Sets the speed of the speech (WPM).

## Signal Flow
`Text Input -> Phonetic Processor -> Formant Filter (Voice) -> Pitch/Rate Scaling -> Mode Filter (Whisper/Breath) -> Render to .SPEECH File`

## Things Beginners Misunderstand
- **"It's not a plugin":** You can't find it in the Mixer. You must "Add" it as a generator to trigger the render dialog.
- **"I can't change it later":** Once you hit OK, the audio is rendered. To change the text or voice, you must re-generate the sample.
- **The .SPEECH Format:** This isn't just a WAV; it contains the original text data inside the file, which plugins like Fruity Slicer can read to auto-name slices.
