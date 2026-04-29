# How Fruity X-Y Controller Works

## Core Architecture

Fruity X-Y Controller is a 2D vector modulation source that converts mouse/touch position into two independent automation signals. [SRC: IL-MAN]

### Signal Flow

```
Mouse Position (X, Y)
    ↓
Speed/Acceleration Processing
    ↓
Absolute OR Relative Mode
    ↓
Mapping Graphs (X-Map, Y-Map)
    ↓
X-Output & Y-Output → Linked Parameters
```

## The Two Dimensions

| Axis | Range | Behavior |
|------|-------|----------|
| X (Horizontal) | 0-100% | Left to Right sweep |
| Y (Vertical) | 0-100% | Bottom to Top sweep |

Each axis operates independently with separate mapping graphs and output routing.

## Speed & Acceleration

The controller tracks movement dynamics:

- **Speed**: Rate of position change over time
- **Acceleration**: Change in speed (positive = speeding up, negative = slowing down)

These create "gesture energy" that can modulate parameters based on HOW you move, not just WHERE you move.

## Absolute vs Relative Modes

| Mode | Behavior | Use Case |
|------|----------|----------|
| **Absolute** | Output = current position value | Direct control, precise positioning |
| **Relative** | Output = change from previous position | Continuous adjustment, fine tweaks |

## Mapping Graphs

Both X and Y have customizable response curves:

- **Linear**: 1:1 input-to-output ratio
- **Exponential**: Sensitive at start, compressed at end
- **Logarithmic**: Compressed at start, sensitive at end
- **Step**: Discrete jumps between values
- **Custom**: Draw your own response curve

## Vibe Engine Concept

The X-Y Controller IS a vibe engine:

1. **Movement creates modulation** - Your hand gestures become automation
2. **Two-axis independence** - Control unrelated parameters simultaneously
3. **Macro potential** - One pad movement can drive 8+ parameters
4. **Performance capture** - Record your gestures as automation data

## Hip-Hop Relevance

Controllers excel at:
- **Live filter sweeps** during verses → drops
- **Performance fills** - sudden X-Y jumps on drum fills
- **Macro builds** - multiple riser elements controlled together
- **Humanized automation** - natural hand movement vs robotic LFOs
