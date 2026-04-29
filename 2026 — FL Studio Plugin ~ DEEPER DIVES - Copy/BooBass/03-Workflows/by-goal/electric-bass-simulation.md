# Goal Workflow: Electric Bass Simulation (Human Feel)

*Goal: Programming a bassline that sounds like it was recorded by a professional session player.*

## 🎛️ Routing Context
- **Routing**: BooBass -> Mixer Track.
- **Mixer Chain**: Fruity Limiter (Compressor Mode).

## 🚶 Step-by-Step Setup
1. **The Groove (MIDI)**:
   - Program your bassline. Use **Legato** (overlapping notes) for smooth transitions.
2. **Ghost Note Insertion**:
   - Place very short, low-velocity notes (10-15%) exactly 1/32nd note before the main downbeats.
   - *Result*: You will hear a "thump" that adds rhythmic urgency.
3. **The Tone (BooBass)**:
   - Set **Treble** to 60%. Set **Bass** to 50%.
   - *Logic*: You want enough treble to hear the "fingers" but enough bass to support the kick.
4. **The "Human" Velocity**:
   - Manually lower the velocity of every "second" note in a 16th-note run.
   - *Result*: This mimics the "strong-finger / weak-finger" alternating technique used by real bassists.
5. **The Release Tail**:
   - In the Channel Wrapper, set **Release** to 300ms.
   - *Result*: The bass feels "loose" and organic rather than robotic.

## 🔄 Variations
- **The "Palm Muted" Bass**: Set **Release** to 0ms and lower the **Treble** to 10%.
- **The "Screaming" Slap**: Set Velocity to 127 for every note and boost **Treble** to 100%.

## ⚠️ Pitfalls & Fixes
- **Problem**: Bass sounds too "clicky."
- **Fix**: Lower the **Treble** knob in BooBass or lower the MIDI velocity.
