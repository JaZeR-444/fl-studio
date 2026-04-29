# Signal Chain Theory

## Understanding Effect Order

The sequence of stompboxes in Hardcore dramatically affects the final sound. This guide explains the theory behind positioning decisions. [SRC: IL-MAN]

## Classic Signal Chain Templates

### Standard Guitar Chain
```
Noise Gate → Compressor → Wah → Distortion → EQ (stomp) → Chorus/Flanger/Phaser → Delay → Reverb
```
**Why it works:** Gate cleans signal before compression, compression evens dynamics for distortion, modulation adds movement after dirt, time-based effects create space last.

### Drum Destruction Chain
```
Distortion → Compressor → EQ (stomp) → Noise Gate → Cabinet
```
**Why it works:** Distortion first adds harmonics, compression controls dynamics, EQ shapes tone, gate truncates tails for tightness, cabinet rolls off harsh highs.

### Vocal Lo-Fi Chain
```
Modulator → Distortion → Cabinet → Delay → Reverb
```
**Why it works:** Modulator adds subtle detune/doubling, distortion grimes the signal, cabinet creates distance, delay/reverb add space.

## Effect Category Theory

### Dynamics (Noise Gate, Compressor)
**Best position:** Early in chain (positions 1-3)
**Why:** Controlling dynamics before they hit distortion prevents unpredictable gain staging. A compressor after distortion is a limiter; before distortion, it shapes how the distortion reacts.

### Filtering/Wah (Wah, EQ stompbox)
**Best position:** Before or after distortion (positions 2-4)
**Before distortion:** Wah sweeps which frequencies get distorted, creating vocal-like "talking" effects
**After distortion:** Wah sweeps the tone of already-distorted signal

### Distortion
**Best position:** Middle of chain (positions 3-6)
**Why:** Putting distortion first means every subsequent effect processes distorted signal. This creates rich, saturated textures but reduces clarity. Placing it later preserves transients in earlier effects.

### Modulation (Chorus, Flanger, Phaser, Modulator)
**Best position:** After distortion (positions 5-8)
**Why:** Modulation effects create movement by slightly detuning delayed copies. Feeding them distorted signal means the modulation affects harmonics too, creating richer textures. Before distortion, modulation can sound subtle or get lost.

### Time-Based (Delay, Reverb)
**Best position:** Late in chain (positions 9-11)
**Why:** Time-based effects create echoes and space. If you put distortion after delay, each echo gets re-distorted, creating cascading chaos. Generally, put time effects last for cleaner results.

## Parallel Processing Theory

Hardcore doesn't have a built-in parallel mixer, but you can achieve parallel effects using track routing:

### Send/Return Method
1. Create a send track with Hardcore
2. Blend dry signal with processed signal using track faders
3. Use 100% wet effects in Hardcore (no dry signal mixed in)

**Applications:**
- **Parallel distortion:** Heavy distortion blended with clean drums preserves transients while adding grit
- **Parallel reverb:** Short, gated reverb on send adds space without washing out punch
- **Parallel cabinet:** Cabinet simulation on send only adds speaker character without affecting dry tone

### Insert Method
Hardcore placed directly on instrument track (100% wet).

**Best for:**
- Total transformation of source material
- Creating print-and-commit tones
- Consistent processing across multiple takes

## Master EQ Positioning

The 8-band Graphic EQ sits after the stompbox chain but before the cabinet simulation.

**Strategic use:**
- Cut problem frequencies accumulated across the chain
- Boost presence before cabinet rolloff
- Create "smile curve" for vintage character
- Scoop mids for modern metal tones [SRC: IL-MAN]

## Cabinet Position

Cabinet simulation always comes last in the internal signal flow.

**Impact:** Everything before the cabinet gets filtered by the speaker model. This is critical for realistic amp simulation—the cabinet shapes the final output regardless of what precedes it.

## Common Chain Mistakes

1. **Reverb → Distortion:** Creates messy, undefined distortion
2. **Gate at end:** Chokes off reverb tails and delay repeats
3. **Multiple distortions:** Unless intentional, redundant distortion stages can create harsh, uncontrollable saturation
4. **EQ before distortion:** Any cuts reduce what gets distorted; any boosts increase distortion at those frequencies

## Advanced: Split Chains

For complex production, use multiple Hardcore instances:

**Example - Bass:**
- Instance 1 (lows chain): High-pass everything above 120Hz, subtle compression, clean cabinet
- Instance 2 (highs chain): High-pass below 120Hz, heavy distortion, aggressive EQ, different cabinet
- Blend both instances for full, controlled bass tone

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*
