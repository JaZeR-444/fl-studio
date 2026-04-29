# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Cut & Center" (The Fixer)
Sometimes Newtone detects a "scoop" (singer sliding into a note) as part of the note itself, making the average pitch flat.
*   **Move:** Use the **Cut Tool** to slice the scoop off the main vivid body of the note.
*   **Result:** Newtone recalculates the center pitch of the main body, snapping it perfectly to tune. The scoop remains natural but doesn't drag the tuning down.

### 2. Formant Preserved Transposition
Changing the pitch of a sample usually changes the "throat size" (Chipmunk effect).
*   **Move:** Select All (Ctrl+A). Transpose Up +12 Semitones. Go to **Advanced Mode**. Drag the **Formant** handle (middle of note, usually Alt-click or specialized knob depending on version) back DOWN 12 semitones.
*   **Result:** A "High Pitch" singer with a "Deep" throat resonance. Very common in Deep House and newer R&B.

### 3. Vibrato Surgery
*   **Context:** A singer held a note too long and got shaky (bad vibrato).
*   **Move:** Select note. Turn **Variation** knob down to ~20%.
*   **Result:** The shakiness is ironed out, sounding like a confident straight tone.

### 4. Audio-to-MIDI Extraction
*   **Context:** You have a hummed melody on phone.
*   **Move:** Drag audio in. Click "Send to Piano Roll" (Piano icon with arrow).
*   **Result:** You now have the MIDI notes to drive a synth.

## 👂 What to Listen For
*   **Phasing/Warbling:** If you stretch a note too far or pitch shift >5 semitones, you will hear "underwater" artifacts.
    *   *Fix:* Don't shift that far. Re-record or accept the aesthetic.
*   **Clicking Transitions:** If notes overlap weirdly.
    *   *Fix:* Adjust the **Transition** knob or manually fade the note volume envelopes in the editor.

## 🛑 Common Pitfalls
1.  **Tuning Breaths:** Do NOT tune breath sounds. It sounds robotic and weird. Cut them separate and leave them un-tuned.
2.  **Ignoring Scale:** Tuning to "Chromatic" (default) allows wrong notes. Set a Scale Helper (Root Note + Scale) in FL to see the grey background guides.
