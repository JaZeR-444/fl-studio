# 01: UI Map and Signal Flow

## UI Sections Tour
Slicex is essentially two Edison-style editors combined with a synthesis engine. [SRC: IL-MAN-04]

### 1. The Decks (A & B)
- **Deck Toggle:** Switch between the two sample slots.
- **Waveform Display:** View and edit markers.
- **Auto-Slice:** The "Magic" wand to detect transients.

### 2. The Region Editor (Slice Properties)
- **Cut/Cut By:** Used for "choking" sounds (e.g., Open Hat cutting off Closed Hat).
- **Out Offset:** Route the selected slice to a specific Mixer offset (e.g., Output +1).
- **Articulator Assignment:** Choose which of the 8 articulation slots controls this slice.

### 3. Articulators (The Synthesis)
- **MOD / ENV / LFO:** 8 independent slots featuring Filter, Volume, Pitch, and Pan controls.
- **Graph Editor:** Draw custom shapes for envelopes and LFOs.

### 4. The Master Panel
- **Master Vol / Pitch:** Global controls.
- **Freeze:** Locks markers to prevent accidental movement.

## Signal Flow
`Sample (Deck A or B) -> Region Selection -> Articulator Processing (Filter/Env/LFO) -> Mixer Offset (Routing) -> Master Global -> Output`

## Things Beginners Misunderstand
- **Piano Roll Dump:** Slicex doesn't play the loop automatically. You must "Dump to Piano Roll" to see the MIDI trigger notes.
- **The "Cut" Numbers:** "Cut 1" means "I belong to group 1." "Cut By 1" means "I am silenced by anyone in group 1."
- **Two Decks = Two Samples:** You can layer sounds by having Deck A and Deck B mapped to the same MIDI note.
