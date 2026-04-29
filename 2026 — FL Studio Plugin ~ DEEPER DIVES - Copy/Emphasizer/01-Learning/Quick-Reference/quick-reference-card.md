Tags: hip-hop/rap | R&B | electric

## Emphasizer Quick Reference Card

### Emergency Settings

| Problem | Quick Fix |
|---------|----------|
| Dull vocals | Harmonic 35%, High +3dB |
| Harsh vocals | Harmonic 20%, High +1dB |
| Weak bass | Low +3dB, Harmonic 25% |
| Muddy bass | Low +1.5dB, Harmonic 30% |
| No air | High +3dB, Harmonic 32% |
| Thin sound | Low +2dB, High +2dB |
| Harsh mix | Harmonic 18%, High +1dB |
| Dull mix | Harmonic 30%, High +3dB |

### Genre Defaults

| Genre | Harmonic | High | Low | M-S |
|-------|----------|------|-----|-----|
| Hip-hop | 30% | +3dB | +2dB | 10% |
| R&B | 25% | +2.5dB | +2dB | 12% |
| Trap | 22% | +2dB | +3dB | 5% |
| Lo-fi | 35% | +1dB | +2dB | 15% |
| EDM | 28% | +3dB | +2.5dB | 12% |

### Frequency Reference

| Frequency | Sound | Common Use |
|-----------|-------|------------|
| 50 Hz | Deep bass | 808 fundamental |
| 80 Hz | Kick/bass warmth | Body |
| 100-200 Hz | Bass clarity | Note definition |
| 400-800 Hz | Warmth | Body |
| 2-5 kHz | Presence | Clarity |
| 5-8 kHz | Definition | Attack |
| 10-15 kHz | Air | Sheen |

### Harmonic Amount Guide

| Amount | Effect | Best For |
|--------|--------|----------|
| 10-20% | Subtle | Background, subtle |
| 25-35% | Moderate | Lead vocals, elements |
| 40-50% | Strong | Emphasis, creative |
| 50%+ | Extreme | Sound design |

### Parameter Ranges

| Parameter | Minimum | Maximum | Default |
|-----------|---------|---------|---------|
| Harmonic | 0% | 100% | 25% |
| High Shelf | +0dB | +6dB | +2dB |
| Low Shelf | +0dB | +6dB | +2dB |
| M-S | 0% | 100% | 10% |

### Signal Flow

```
Input → Harmonic Exciter → Shelving EQ → M-S Proc → Output
                                  ↓
                         Low Shelf + High Shelf
```

### Preset Naming Convention

```
[Type]_[Genre]_[Emphasis]_[Date]
Example: Vocal_HipHop_Harmonic_2024
```

### Keyboard Shortcuts

| Action | Shortcut |
|--------|-----------|
| Bypass | B |
| Reset | R |
| Compare | C |
| Copy Settings | Ctrl+C |
| Paste Settings | Ctrl+V |
| Save Preset | Ctrl+S |
| Load Preset | Ctrl+O |

### Troubleshooting Flowchart

```
Problem?
    ↓
Is it harsh? → Reduce High Shelf (-1dB)
    ↓
Is it dull? → Increase Harmonic (+5%)
    ↓
Is it muddy? → Reduce Low Shelf (-1dB)
    ↓
Is it thin? → Increase Low Shelf (+1dB)
    ↓
Still not right? → A/B and start over
```

### Quality Check

- [ ] Compare bypassed/enabled
- [ ] Test in mono
- [ ] Listen at low volume
- [ ] Check on reference systems
- [ ] Verify no clipping
- [ ] Document changes
