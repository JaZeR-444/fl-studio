# Per-Word Pitch Syntax: The Secret Language

## The Syntax
Speech Synthesizer allows you to embed pitch commands directly into the text box. This turns the synthesizer into a programmable "vocalist." [SRC: IL-MAN-06]

## How to Write It
Use the format `(NoteNameOctave)` immediately before the word you want to affect.
- **Example:** `(C5)Welcome (E5)To (G5)My (C6)World`
- **Rules:**
  - No spaces between the closing parenthesis and the word.
  - Use `#` for sharps (e.g., `(F#4)`).
  - Supports octaves 0 through 9.

## Best Practices
1. **The "Monotone" Requirement:** Always set the **Style** to **Monotone/Sing** for the most predictable results. In "Natural" mode, the synthesizer will still try to add its own inflections, which might clash with your notes.
2. **Vowel Stretching:** The synthesizer doesn't "hold" notes well. To make a word last longer, repeat the vowels: `(C5)Heeeeeellloooooo`.
3. **Melodic Producer Tags:** Instead of just saying your name, make the synthesizer "sing" your name in the key of your beat.
4. **Robot Harmonies:** Render the same phrase three times at different musical intervals (e.g., Root, 3rd, 5th) to create a "Robot Choir."

## Common Pitch Mappings
| Note | Octave | Result |
| :--- | :--- | :--- |
| **C3** | Bass | Heavy, authoritative, dark. |
| **C5** | Mid | Standard clarity, narrational. |
| **C7** | High | Squeaky, energetic, pop-trap. |
