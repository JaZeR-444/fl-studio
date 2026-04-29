# Vocal Ducking with Fruity Peak Controller

## Overview
Automatically duck instrumental elements when vocals are present, ensuring clarity and professional mix balance.

## Basic Setup Workflow

### 1. Create Control Track
1. Add mixer track for Peak Controller
2. Route lead vocal to this track (pre-fader send)
3. Insert Fruity Peak Controller on this track

### 2. Configure for Vocals
**Subtle Duck (Professional):**
- Base: 92-95%
- Vol: 10-15%
- Tension: 55-65%
- Decay: 150-250ms

**Aggressive Duck (Loud Vocals):**
- Base: 85-90%
- Vol: 5-10%
- Tension: 45-55%
- Decay: 200-300ms

**Creative Duck (Vocal Chops):**
- Base: 75-80%
- Vol: 0%
- Tension: 40%
- Decay: 100-150ms

### 3. Link to Instrumentals
**Option 1: Individual Elements**
- Link to melody volume
- Link to chord volume
- Link to pad volume
- Gives precise control per element

**Option 2: Bus Ducking**
- Create instrumental bus
- Link bus volume to controller
- Faster setup, affects everything

### 4. Fine-Tune Balance
- A/B test with controller bypassed
- Ensure vocal clarity maintained
- Check that duck isn't too obvious
- Verify timing feels natural

## Genre Applications

### Melodic Rap/Singing
```
Purpose: Make room for melodic vocals
Base: 93%
Decay: 200ms
Link: Melody/chord layers
Result: Vocals sit perfectly in mix
```

### Aggressive Trap Vocals
```
Purpose: Strong vocal presence
Base: 88%
Decay: 180ms
Link: All non-drums
Result: Vocals punch through hard
```

### Boom Bap/Storytelling
```
Purpose: Clarity for lyrical content
Base: 95%
Decay: 250ms
Link: Sample/loop volume
Result: Every word heard clearly
```

### Lo-Fi/Chill Rap
```
Purpose: Gentle vocal integration
Base: 96%
Decay: 300ms
Link: Pad/texture volume
Result: Smooth, natural blend
```

## Advanced Techniques

### Frequency-Specific Ducking
1. Use Fruity Parametric EQ 2 on instrumental
2. Link specific band gains to Peak Controller
3. Duck only midrange (vocal frequency area)
4. Preserve bass and air frequencies

### Dynamic Reverb Control
1. Link reverb send level to Peak Controller
2. Base: 100%, Vol: 20%
3. Reverb reduces when vocals present
4. Creates space and clarity

### Multiband Compression Link
1. Add Maximus to instrumental bus
2. Link Mid band to Peak Controller
3. Duck vocal frequency range only
4. Maintains low-end power

### Stereo Width Modulation
1. Link stereo width plugin to controller
2. Narrow stereo field during vocals
3. Wide when vocals absent
4. Creates focus on centered vocal

## Common Scenarios

### Verse Duck (Storytelling)
- Subtle duck (Base 95%)
- Duck pads and melodies
- Keep drums and bass full

### Hook Duck (Melodic)
- Medium duck (Base 90%)
- Duck backing vocals and harmonies
- Emphasize lead vocal

### Ad-Lib Duck (Trap)
- Minimal duck (Base 97%)
- Very fast decay (100ms)
- Quick accents only

### Vocal Chop Duck (Creative)
- Strong duck (Base 80%)
- Fast decay (120ms)
- Rhythmic pumping effect

## Mixing Tips

### Do's
- ✓ Start subtle and increase if needed
- ✓ Match decay to vocal rhythm
- ✓ Test in context of full beat
- ✓ Use multiple instances for different elements

### Don'ts
- ✗ Don't duck drums (usually)
- ✗ Don't over-duck (keeps energy)
- ✗ Don't use identical settings for all vocals
- ✗ Don't forget to bypass/compare

## Troubleshooting

**Vocals still muddy**: Lower Base more or duck more elements

**Pumping too obvious**: Increase Base, increase Tension

**Duck too slow**: Decrease Decay time

**Sounds unnatural**: Increase Tension for smoother curve
