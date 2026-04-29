# Fruity Soft Clipper: Parameter Dictionary

## Complete Parameter Reference

### THRES (Threshold)

**Full Name:** Threshold  
**Type:** Continuous (rotary knob)  
**Range:** -60.0 dB to 0.0 dB  
**Default:** 0.0 dB (no clipping)  
**Unit:** dBFS (decibels Full Scale)  
**Step Size:** 0.1 dB (fine adjustment)

**Description:**  
Sets the ceiling level where soft clipping begins. Any signal exceeding this threshold is progressively compressed using a soft-knee waveshaping curve. Lower values = more aggressive clipping.

**Audible Impact:**
- **0 dB:** No effect (bypass equivalent)
- **-0.5 to -1 dB:** Subtle warmth, gentle loudness increase
- **-2 to -3 dB:** Noticeable saturation, significant loudness gain
- **-4 to -6 dB:** Heavy clipping, obvious distortion
- **Below -6 dB:** Extreme distortion, degraded sound quality

**Mix Impact Tags:** `loudness`, `saturation`, `harmonic-distortion`, `transient-control`, `glue`

**Vibe Impact Tags:**
- **Moody:** -0.3 to -0.5 dB (minimal)
- **Upbeat:** -2 to -3 dB (aggressive)
- **Psychedelic:** -6 to -10 dB (extreme)
- **Jazzy:** -0.5 to -1 dB (subtle)
- **Vibey:** -1 to -2 dB (balanced)

**Automation Common:** ✅ Yes (very common)  
- Automate down during drops for extra punch
- Automate up during intros/outros for dynamics

**Interaction Notes:**
- Lower threshold = more Post Gain needed to compensate output
- Threshold affects harmonic content (EQ interaction)
- Mono compatibility issues increase below -3 dB

**Right-Click Options:**
- Edit events (automation)
- Type in value (numerical entry)
- Reset (return to 0 dB)
- Copy value
- Paste value

**Source:** [SRC: IL-MAN]

---

### POST (Post Gain)

**Full Name:** Post Gain  
**Type:** Continuous (rotary knob)  
**Range:** -12.0 dB to +12.0 dB  
**Default:** 0.0 dB (unity gain)  
**Unit:** dB (decibels)  
**Step Size:** 0.1 dB (fine adjustment)

**Description:**  
Makeup gain applied after soft clipping. Used to compensate for perceived loudness loss or to boost the clipped signal into subsequent plugins in the chain.

**Audible Impact:**
- **Negative values:** Reduce output volume (rare use case)
- **0 dB:** No makeup gain (unity)
- **+1 to +3 dB:** Typical makeup gain range
- **+4 to +6 dB:** Aggressive boost (used for serial saturation)
- **Above +6 dB:** Extreme levels (drive next plugin very hard)

**Mix Impact Tags:** `loudness`, `gain-staging`, `serial-saturation`

**Vibe Impact Tags:**
- **Moody:** 0 dB (no makeup)
- **Upbeat:** +2 to +3 dB (loudness boost)
- **Psychedelic:** Variable (depends on creative intent)
- **Jazzy:** 0 to +1 dB (minimal)
- **Vibey:** +1 to +2 dB (moderate)

**Automation Common:** ⚠️ Rare  
- Mostly static (set and forget)
- Occasional use: Automate up during transitions for volume lift

**Interaction Notes:**
- Must compensate FL Studio Master Fader (if Post Gain = +2 dB, lower Master by -2 dB)
- Drives next plugin in chain harder (useful for stacking saturation)
- Does NOT affect clipping amount (only output level)

**Right-Click Options:**
- Edit events (automation)
- Type in value (numerical entry)
- Reset (return to 0 dB)
- Copy value
- Paste value

**Source:** [SRC: IL-MAN]

---

## Parameter Interaction Matrix

| Scenario | Threshold | Post Gain | Result |
|----------|-----------|-----------|--------|
| **Transparent loudness** | -0.5 dB | +0.5 dB | Minimal artifacts, +0.5 dB perceived loudness |
| **Aggressive clipping** | -3 dB | +2 dB | Heavy saturation, +2 dB output boost |
| **Serial saturation** | -2 dB | +6 dB | Moderate clipping, drives next plugin hard |
| **Parallel blend** | -10 dB | 0 dB | Extreme distortion on parallel track (blend at 30%) |

---

## Hidden Parameters (Not User-Adjustable)

### Internal Oversampling
**Status:** [UNVERIFIED - appears to be native sample rate processing]  
**Impact:** May affect aliasing artifacts at high Threshold values  
**Verification:** Test with spectrum analyzer at high frequencies

### Knee Width
**Status:** Fixed (soft knee curve is hardcoded)  
**Impact:** Cannot adjust the "softness" of the clipping curve  
**Workaround:** Use Maximus for adjustable knee width

### Lookahead
**Status:** None (zero latency by design)  
**Impact:** Cannot prevent pre-ringing artifacts  
**Workaround:** Not needed for soft clipping (instant waveshaping)

**Source:** [SRC: REPUTABLE + UNVERIFIED]

---

## Parameter Change Impact Table

| Parameter | Change | Impact on Sound | Impact on Mix |
|-----------|--------|-----------------|---------------|
| **Threshold -1 dB → -2 dB** | +1 dB more clipping | More saturation, slightly louder | Increased harmonic content |
| **Threshold -2 dB → -1 dB** | -1 dB less clipping | Less saturation, slightly quieter | Reduced harmonic content |
| **Post Gain 0 dB → +2 dB** | +2 dB output boost | No tonal change, just louder | May clip next plugin in chain |
| **Post Gain +2 dB → 0 dB** | -2 dB output reduction | No tonal change, just quieter | Reduces drive into next plugin |

---

## Recommended Parameter Ranges by Application

### Master Bus
- **Threshold:** -0.5 to -3.0 dB
- **Post Gain:** 0 to +2.0 dB

### Drum Bus
- **Threshold:** -2.0 to -6.0 dB
- **Post Gain:** 0 to +2.0 dB

### 808 + Kick Bus (Trap)
- **Threshold:** -6.0 to -12.0 dB
- **Post Gain:** +2.0 to +4.0 dB

### Vocal Track
- **Threshold:** -0.3 to -1.5 dB
- **Post Gain:** 0 dB

### Parallel Saturation
- **Threshold:** -8.0 to -15.0 dB
- **Post Gain:** 0 dB (control blend with track fader)

**Source:** [SRC: REPUTABLE]

---

## Parameter Automation Tips

### Threshold Automation
**Best For:** Dynamic punch, build-ups, transitions  
**Typical Range:** ±3 dB maximum change  
**Automation Curve:** Smooth (avoid sharp jumps)  
**Example:** Verse -1 dB → Chorus -3 dB (gradual ramp)

### Post Gain Automation
**Best For:** Volume lifts during transitions (rare)  
**Typical Range:** ±2 dB maximum change  
**Automation Curve:** Smooth  
**Example:** Intro 0 dB → Drop +2 dB

**Source:** [SRC: REPUTABLE]

---

## Keyboard Shortcuts for Parameters

- **Tab:** Cycle between Threshold and Post Gain
- **Arrow Keys:** Adjust selected parameter (0.1 dB steps)
- **Shift + Arrow Keys:** Adjust selected parameter (1 dB steps)
- **Ctrl + Click:** Reset parameter to default
- **Mouse Wheel:** Adjust parameter (hover over knob)
- **Shift + Mouse Wheel:** Fine adjustment (0.01 dB steps)

**Source:** [SRC: IL-MAN]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete  
**Parameters Documented:** 2 (all available)
