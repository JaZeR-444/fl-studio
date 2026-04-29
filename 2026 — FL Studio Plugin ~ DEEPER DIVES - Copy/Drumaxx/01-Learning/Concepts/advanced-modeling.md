Tags: hip-hop/rap | R&B | electric

## Advanced Drumaxx Modeling Techniques

### Membrane Physics Deep Dive

**How Drumaxx models drums:**
- Simulates drumhead (membrane)
- Resonates based on tension
- Damping simulates dampening
- Mass distribution creates overtones

**Tension Control:**
| Tension | Effect | Best For |
|---------|--------|----------|
| Low (20-40) | Deep, loose, warm | Jazzy, smooth |
| Medium (50-70) | Balanced, versatile | Most styles |
| High (80-100) | Tight, punchy, cutting | Trap, EDM |

**Damping Control:**
| Damping | Effect | Best For |
|---------|--------|----------|
| Low (10-25) | Long decay, ringy | Vintage, ambient |
| Medium (30-50) | Controlled, musical | R&B, hip-hop |
| High (60-90) | Short, punchy | Aggressive, EDM |

### Excitation Positioning

**What it does:**
- Where the "stick" hits the drum
- Center = fundamental focus
- Edge = more overtone, brighter

**Position Map:**
| Position | Effect | Sound |
|----------|--------|-------|
| 0-30% | Center | Fundamental, deep |
| 30-60% | Mid | Balanced |
| 60-100% | Edge | Bright, overtone-rich |

**Creative Applications:**
- Kick: Center position (20-40%)
- Snare: Off-center (40-60%)
- Tom: Edge (50-70%)
- Experimental: Extreme positions (0% or 100%)

### Multi-Drum Layering

**Strategy:**
1. Layer 2-3 Drumaxx instances
2. Different drum "physics"
3. Blend for unique sound

**Example Layer:**
| Layer | Tension | Mass | Position | Purpose |
|-------|---------|------|----------|---------|
| 1 | 75 | Center 60/40 | 25% | Punch |
| 2 | 85 | Center 50/50 | 70% | Click |
| 3 | 65 | Center 70/30 | 40% | Tone |

**Blending:**
- Layer 1: 70% wet
- Layer 2: 30% wet
- Layer 3: 40% wet
- Result: Complex, unique drum

### The "Organic" Drum

**Goal:** Realistic, acoustic feel

**Settings:**
| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| Tension | 65-75 | Balanced |
| Damping | 35-45 | Controlled decay |
| Mass Center | 55 | Fundamental focus |
| Mass Edge | 45 | Harmonics |
| Excitation Position | 50% | Center-middle |
| Excitation Force | 60-70 | Realistic hit |

**Why This Works:**
- Medium tension = acoustic feel
- Controlled damping = natural decay
- Balanced mass = full spectrum

### The "Electric" Drum

**Goal:** Processed, synthetic feel

**Settings:**
| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| Tension | 80-90 | Tight, punchy |
| Damping | 25-35 | Some ring |
| Mass Center | 45 | Fundamental |
| Mass Edge | 55 | Bright |
| Excitation Position | 40-60% | Variable |
| Excitation Force | 80-90 | Strong hit |

### Creating Sound Effects

**Impact Sound:**
| Parameter | Value |
|-----------|-------|
| Membrane | Kick preset |
| Tension | 90 |
| Damping | 15 |
| Mass | Center-heavy |
| Position | 20% |
| Force | 100 |

**Riser/Build:**
| Parameter | Value |
|-----------|-------|
| Membrane | Tom preset |
| Tension | Sweep automation |
| Damping | 20 |
| Position | Variable |
| Force | Ramp up |

### Troubleshooting Drum Sounds

| Problem | Cause | Fix |
|---------|-------|-----|
| No punch | Tension too low | Increase to 75+ |
| Too boomy | Damping too low | Increase damping |
| No crack | Excitation too soft | Increase force |
| Too ringy | Damping too low | Increase damping |
| Thuddy | Position too center | Move toward edge |
| Harsh | Position too edge | Move toward center |
| No low-end | Tension too high | Lower to 65-70 |
| Inconsistent | Force variation | Normalize force |
