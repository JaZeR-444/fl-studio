# Buffer-Based Time Delay Logic

## How it works
Fruity Delay works by creating a **Circular Buffer** in RAM.
1. The incoming audio is written into the buffer.
2. The plugin "reads" from the buffer at a specific time-offset (determined by the **Time** parameter).
3. The read signal is mixed back with the input (Feedback) and sent to the output.

## Digital vs. Pitch-Shift (Bucket Brigade)
- **Fruity Delay 2** uses a standard digital read head. If you change the Delay Time while audio is playing, it "jumps" to the new position. You won't hear a pitch sweep (unlike Fruity Delay 3's Analog mode).
- **Benefit:** This allows for instant rhythmic switches without dissonant pitch artifacts.

## Stereo Offset (Ping-Pong)
The **OFS** knob is not a pan knob. It delays one channel (usually the Right) relative to the other.
- **Offset at 0%:** Both L and R delay by (e.g.) 500ms.
- **Offset at 100%:** Left delays by 500ms, Right delays by 1000ms.
- **Result:** You hear the first repeat in the Left, the second in the Right, creating a wide "bouncing" effect.

## Phase Inversion (Inv)
This parameter inverts the polarity of the wet signal. 
- When mixed with the dry signal, this causes partial phase cancellation at specific frequencies (the "Comb Filter" effect).
- Use this to create a "hollow" or "distant" sound that doesn't clash with the main dry frequencies.
