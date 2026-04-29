# Fruity Voltage Controller: Preset Taxonomy

## Preset Categories

Unlike audio plugins, Voltage Controller "presets" are complete configuration states for specific hardware setups.

### By Hardware Type

| Category | Target Hardware | Key Settings |
|----------|----------------|--------------|
| **Eurorack Voice** | Oscillator+Envelope | 1V/Oct, 5V, Pitch/Gate |
| **Drum Machine** | Analog drum machine | Clock, 24 PPQ |
| **Semi-Modular** | Mother-32, 0-Coast | 1V/Oct, specific routings |
| **Buchla** | Buchla modules | 1.2V/Oct |
| **Multi-Voice** | Polyphonic control | Note colors, multiple outs |

### By Application

| Preset | Purpose | Outputs Used |
|--------|---------|--------------|
| **Basic Mono** | Single voice | Main L/R |
| **Bass+Mod** | Bass with filter CV | Main + Out 2 |
| **Drum Sync** | Clock only | One channel |
| **4-Voice Poly** | 4-voice control | All 4 output pairs |
| **Complex Mod** | Many CV destinations | All outputs |

## Named Presets

### 1. "Eurorack Basic"
```
Pitch Scale: 1V/Oct
Voltage Range: 5V

Left: Pitch (oscillator)
Right: Gate (envelope)
```

### 2. "Moog Mother-32"
```
Pitch Scale: 1V/Oct
Left: Pitch → KB input
Right: Gate → Gate input
```

### 3. "Analog Drums"
```
Clock: 24 PPQ
Connect to: Drum machine clock in
Result: Tight sync
```

### 4. "3-Voice Stack"
```
Main: Voice 1
Out 2: Voice 2
Out 3: Voice 3
Out 4: Clock
```

### 5. "Filter Sweep"
```
Left: Pitch
Right: Gate
Out 2 L: Automation → Filter cutoff
Out 2 R: Velocity → VCA
```

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03
