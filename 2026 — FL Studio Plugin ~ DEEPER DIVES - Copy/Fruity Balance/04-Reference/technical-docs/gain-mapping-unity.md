# Gain Mapping & Unity Logic

## FL Studio Internal Mapping
FL Studio uses a specific internal scale for gain. Understanding this is key to precise gain staging.

### The 80% Threshold
In Fruity Balance (and many other FL native parameters):
- **Value 0.0 (0%)**: -Inf dB (Silence)
- **Value 0.8 (80%)**: 0 dB (Unity Gain - signal is unchanged)
- **Value 1.0 (100%)**: +5.6 dB (Maximum boost)

## Pan Law Logic (Circular)
When you pan a sound in Fruity Balance, the plugin applies a **-3dB Pan Law**:
- **Center:** Both L and R are at 0dB.
- **Hard Left:** L is at +3dB relative to the center, R is at -Inf dB.
- **Result:** The "Center" position doesn't sound quieter than the "Side" position. This maintains a perceived constant volume as the sound moves across the stereo field.

## Signal Flow
1. **Input:** Stereo or Mono signal.
2. **Gain Multiplier:** Volume adjustment is applied first.
3. **Pan Law:** Signal is distributed to L/R channels.
4. **Output:** To the next slot in the mixer or the mixer fader.
