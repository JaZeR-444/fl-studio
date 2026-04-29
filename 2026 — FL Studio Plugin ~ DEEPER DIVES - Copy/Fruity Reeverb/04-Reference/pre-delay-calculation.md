# Reference: Pre-Delay Simulation & Timing

Since **Fruity Reeverb (v1)** does not have a built-in pre-delay knob, you must use external plugins to create the professional "gap" needed for clarity.

## Why simulate Pre-Delay?
Pre-delay is the time between the dry sound and the first reverb reflection. In hip-hop, this allows the "consonants" of a rapper or the "crack" of a snare to finish before the reverb washes over them.

## The Chain
1.  **Fruity Delay 2** (Slot 1): Set to 100% Wet, 0% Feedback, Time: ~20ms.
2.  **Fruity Reeverb** (Slot 2): Your space settings.

## Common Pre-Delay Timings

| Instrument | Timing (ms) | Effect |
| :--- | :--- | :--- |
| **Lead Vocal** | 20ms - 40ms | Maximum clarity, large room feel. |
| **Snare Drum** | 10ms - 20ms | Keeps the transient "sharp." |
| **Pads/Synths**| 0ms - 5ms | Instant "atmosphere" blend. |
| **Ad-libs** | 50ms+ | Creates a "slap-back" room vibe. |

### BPM Sync Calculation
For tempo-synced pre-delay (1/64 note): 
- `Time (ms) = (60,000 / BPM) / 16`. [SRC: IL-MAN]
