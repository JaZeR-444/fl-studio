# Bass Ducking with Fruity Peak Controller

## Overview
Use kick drum peaks to automatically duck bass volume or filter, creating space for the kick and adding groove.

## Step-by-Step Workflow

### 1. Setup Peak Controller
1. Add Fruity Peak Controller to mixer track
2. Route kick drum to this track (pre-fader send)
3. Don't add to master (this is a control track only)

### 2. Configure Parameters
**For Trap/808-Heavy:**
- Base: 100%
- Vol: 0%
- Tension: 40-50%
- Decay: 150-200ms

**For Boom Bap:**
- Base: 85-90%
- Vol: 5-10%
- Tension: 50-60%
- Decay: 300-400ms

**For Melodic/Smooth:**
- Base: 95%
- Vol: 10-15%
- Tension: 65-70%
- Decay: 250-300ms

### 3. Link to Bass
**Volume Ducking:**
1. Right-click bass mixer volume fader
2. "Link to controller"
3. Select your Peak Controller instance
4. Adjust amount slider for duck depth

**Filter Ducking:**
1. Add filter to bass (Fruity Love Philter or Free Filter)
2. Right-click Low-Pass cutoff frequency
3. Link to Peak Controller
4. Set range from low (ducked) to high (open)

### 4. Fine-Tune
- **Too much duck**: Increase Base value
- **Too slow**: Decrease Decay time
- **Too aggressive**: Increase Tension
- **Not enough**: Lower Vol threshold or increase link amount

## Genre-Specific Recipes

### Trap
```
Kick hits → Bass volume drops to 0-20%
Decay: 180ms (quick recovery)
Tension: 45% (punchy attack)
Result: Aggressive, modern punch
```

### Boom Bap
```
Kick hits → Bass volume drops to 85%
Decay: 350ms (groove pocket)
Tension: 55% (smooth curve)
Result: Classic pump feel
```

### Lo-Fi
```
Kick hits → Bass filter closes slightly
Decay: 500ms (lazy feel)
Tension: 70% (gentle)
Result: Organic, breathing movement
```

## Advanced Techniques

### Multiband Duck
- Duck only low-end frequencies
- Keep mid/high bass consistent
- Use Fruity Parametric EQ 2 with linked gain

### Parallel Compression Duck
- Duck the dry signal
- Keep compressed layer constant
- Maintains energy while creating space

### Filter + Volume Combo
- Link both filter and volume
- Filter: subtle close
- Volume: main duck
- Creates tonal movement with space

## Troubleshooting

**Problem**: Bass disappears completely
- Solution: Increase Base to 70-80%

**Problem**: No noticeable ducking
- Solution: Lower Vol threshold or increase link amount

**Problem**: Pumping sounds unnatural
- Solution: Increase Tension for smoother curve

**Problem**: Duck doesn't recover in time
- Solution: Decrease Decay time or increase tempo sync
