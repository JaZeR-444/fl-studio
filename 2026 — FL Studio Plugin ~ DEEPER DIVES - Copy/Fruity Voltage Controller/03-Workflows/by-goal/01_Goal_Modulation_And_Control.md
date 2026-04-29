# Workflow: Modulation and Control

## Goal
Use Voltage Controller for complex modulation beyond basic pitch/gate.

## Advanced Modulation Techniques

### Technique 1: Filter Automation

**Setup:**
```
Voltage Controller (Out 2)
  L: None(0V) + automated offset
     ↓
Hardware filter cutoff CV input
```

**Execution:**
1. Create automation clip for offset
2. Draw filter sweeps (0-5V range)
3. Filter opens/closes with automation

**Applications:**
- Build-up sweeps
- Breakdown filters
- Wub-wub bass effects

---

### Technique 2: Velocity to VCA

**Setup:**
```
Right channel or Out 2
  Mod Source: Velocity
  Scale: 1.0
  Offset: 0.0
     ↓
Hardware VCA or filter CV
```

**Result:** Harder velocity = louder/brighter sound

---

### Technique 3: Multi-Parameter Control

**4-Output Setup:**
```
Main:    Pitch + Gate (voice control)
Out 2:   Filter cutoff + Resonance
Out 3:   VCA level + PWM
Out 4:   Clock + Manual offset
```

**Benefit:** Total hardware control from FL.

---

### Technique 4: Clock Synchronization

**Setup:**
- Mod Source: Clock
- PPQ: Match hardware (24 for most)
- Connect to hardware sequencer clock input

**Result:** Hardware sequencers advance with FL tempo.

---

## Macro Control Workflows

### Macro 1: Performance Filter
**One knob controls:**
- Cutoff (Out 2 L)
- Resonance (Out 2 R)
- Slight pitch wobble (Main R offset)

**Setup:** Link multiple parameters to one automation clip.

---

## Vibe Applications

### Moody: Slow Filter Drone
- 8-bar ramp on filter cutoff
- Slow PWM modulation
- Minimal note changes

### Upbeat: Rhythmic Gating
- 16th note sequences
- Velocity-based dynamics
- Gate follows kick pattern

### Psychedelic: Chaos Modulation
- Random automation on all offsets
- Bipolar, extreme scales
- Multiple simultaneous modulations

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
