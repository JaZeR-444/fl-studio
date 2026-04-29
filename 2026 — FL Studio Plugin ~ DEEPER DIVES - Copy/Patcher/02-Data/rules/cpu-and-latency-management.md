# Rules: CPU & Latency Management (Patcher)

Tags: optimization | mix-safety | latency

## 1. The "Latency Stack" Rule
Each plugin inside Patcher can add its own latency. 
- **Rule:** Avoid using "Linear Phase" EQs or heavy "Oversampling" inside Patcher during the recording phase. 
- **Why:** Patcher attempts to compensate for latency, but complex chains can cause "audio drift" where the vocal no longer aligns with the beat.

## 2. CPU "Hidden Cost" Rule
- **Rule:** If you bypass a plugin *inside* Patcher using its internal mix knob, the CPU is still being used. 
- **Why:** Unlike the Mixer slots, Patcher keeps plugins "active" to ensure instant switching. To save CPU, you must delete the module or use its own internal "Low CPU" mode.

## 3. Parallel Phasing Safety
- **Rule:** If splitting audio into parallel paths, ensure the processing on each path has the same latency.
- **Why:** If Path A has a compressor with "Lookahead" and Path B is a clean wire, they will be slightly out of time, causing "Phasing" which makes your Kick/Snare sound thin and metallic.

## 4. "Avoid" List
- **Avoid Over-Oversampling:** Running 5 plugins each at 4x oversampling inside one Patcher instance will likely crash your project or cause heavy audio crackling.
- **Avoid MIDI Loops:** Be careful when routing MIDI from a module back into the Patcher Input—this can create a feedback loop that freezes FL Studio.
