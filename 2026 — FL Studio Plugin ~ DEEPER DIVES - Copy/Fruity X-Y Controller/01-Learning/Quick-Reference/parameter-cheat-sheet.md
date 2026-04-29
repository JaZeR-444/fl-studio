# Parameter Cheat Sheet

## Main Panel Controls

### X Section (Left)

| Parameter | Range | Function |
|-----------|-------|----------|
| **X-Output** | 0-100% | Current horizontal value output |
| **X-Min** | 0-100% | Minimum output value |
| **X-Max** | 0-100% | Maximum output value |

### Y Section (Right)

| Parameter | Range | Function |
|-----------|-------|----------|
| **Y-Output** | 0-100% | Current vertical value output |
| **Y-Min** | 0-100% | Minimum output value |
| **Y-Max** | 0-100% | Maximum output value |

### Speed/Acceleration (Bottom)

| Parameter | Range | Function |
|-----------|-------|----------|
| **Speed** | 0-∞ | Movement velocity value |
| **Acceleration** | -∞ to +∞ | Change in speed (positive/negative) |

## Mode Settings

| Setting | Options | Description |
|---------|---------|-------------|
| **Absolute** | On/Off | Output = current position |
| **Relative** | On/Off | Output = change from previous |
| **Hold** | On/Off | Latch last position |

## Global Settings

| Setting | Range | Purpose |
|---------|-------|---------|
| **Smoothing** | 0-100% | Interpolation between values |
| **Grid Snap** | Off/On | Snap to grid positions |
| **Reset on Play** | On/Off | Return to start position on playback |

## Output Targets

Each output can drive unlimited parameters:

**X-Output Targets:**
- Any automatable parameter in FL Studio
- Third-party plugin parameters
- Mixer track levels, pan, sends

**Y-Output Targets:**
- Same as X - completely independent routing

**Speed/Acceleration Targets:**
- Less commonly used but powerful
- Great for dynamics-based modulation

## Mapping Dialog Parameters

When linking to controller:

| Option | Values | Function |
|--------|--------|----------|
| **Min** | 0-100% | Lowest output value |
| **Max** | 0-100% | Highest output value |
| **Curve** | Linear/Exp/Log/Step/Custom | Response shape |
| **Invert** | On/Off | Reverse direction |
| **Offset** | ±50% | Shift entire range |

## Default Values

Factory reset values for quick restoration:

```
X-Min: 0%
X-Max: 100%
Y-Min: 0%
Y-Max: 100%
Smoothing: 0%
Mode: Absolute
Hold: Off
Reset on Play: Off
```

## Hip-Hop Quick Settings

### Filter Sweep
- X-Min: 0%, X-Max: 100%
- Map to: Filter Cutoff
- Curve: Exponential

### Dual Control
- X: Parameter A (0-100%)
- Y: Parameter B (0-100%)
- Both curves: Linear

### Dynamics Control
- Speed mapped to: Compression ratio
- Threshold: 20% speed
- Use: Fast movements = more compression

## Reference Grid

Position values at each corner:

```
Top-Left:     X=0%,  Y=100%
Top-Center:   X=50%, Y=100%
Top-Right:    X=100%, Y=100%
Center:       X=50%, Y=50%
Bottom-Left:  X=0%,  Y=0%
Bottom-Right: X=100%, Y=0%
```
