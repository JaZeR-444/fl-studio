# Fruity Peak Controller – Quick Reference

## What It Does
Converts audio peaks into automation data for sidechain effects, ducking, dynamic control, and creative modulation.

## Key Parameters
- **Base**: Minimum controller output value
- **Vol**: Peak detection volume threshold  
- **Tension**: Attack/release curve shape
- **Decay**: How fast controller returns to base
- **LFO**: Adds rhythmic modulation to output

## Common Hip-Hop Uses

### Sidechain Ducking
1. Route kick to Peak Controller
2. Link to mixer volume
3. Base: 100%, Vol: 0-20%, Fast decay

### Pump Effect
1. Use on kick or clap
2. Link to bass volume or filter
3. Medium decay for groove

### Dynamic Gating
1. Link to noise/texture volume
2. Base: 0%, creates rhythmic gates
3. Fast decay for choppy feel

## Quick Recipes

**Classic Kick Duck**: Base 100% | Vol 0% | Decay 200ms | Tension 50%

**Pumping Bass**: Base 80% | Vol 0% | Decay 400ms | Link to bass volume

**Rhythmic Gate**: Base 0% | Vol 100% | Fast decay | Link to pad/texture

**Vocal Duck**: Base 95% | Vol 10% | Decay 150ms | Subtle volume dip

## Routing Tips
- Right-click parameter → Link to controller
- Use multiple instances for complex routing
- Invert controller for opposite effect (volume boost instead of duck)
