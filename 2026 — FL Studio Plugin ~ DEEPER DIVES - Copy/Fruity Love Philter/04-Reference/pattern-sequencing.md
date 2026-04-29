# Technical Reference: Pattern Sequencing

Mastering the MIDI-triggered patterns in Love Philter. [SRC: IL-MAN]

## 1. What are Patterns?
Fruity Love Philter has 10 internal "Pattern Slots." These are global states for all 8 units.
- **Access**: The number selector at the bottom left of the UI.

## 2. Triggering via MIDI
You can change the active pattern using MIDI notes in the Piano Roll.
- **C5**: Switches to Pattern 1.
- **C#5**: Switches to Pattern 2.
- **D5**: Switches to Pattern 3.
- ...up to **A5** (Pattern 10).

## 3. Workflow Move
Instead of using one long automation clip for an entire song, draw 4 different rhythmic gates in Patterns 1-4.
- Use your Piano Roll to "play" the gates.
- **Benefit**: This allows for precise, live-performance style control over rhythmic chopping.

## 4. Smoothing Jumps
When switching patterns, the envelope values may jump suddenly. 
- **Fix**: Use the **Smoothing** knob (if available in the unit) or ensure your patterns share a similar starting value to avoid digital clicks. [UNVERIFIED]
