# EDM Metallic Workflow

## Sound Profile
Bright, aggressive metallic texture for leads and percussion.

## Recommended Preset
`genre/04-edm-metallic.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Frequency Shift | 400Hz | Metallic |
| Direction | Up | Bright |
| Mix | 80% | Prominent |
| Feedback | 45% | Resonance |
| Stereo Mode | Sum | Wide |
| Drive | 12% | Edge |

## Workflow Integration
1. Apply to synth leads for character
2. Use on percussion for metallic clicks
3. Sidechain to rhythm for pumping
4. Layer with clean signal for control

## Chain Processing
```
Source → Band-pass 2k-6kHz
  → Frequency Shifter
  → Fruily Limiter
  - Ceiling: -0.5dB
```

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More metallic | Increase feedback to 55% |
| Less harsh | Reduce drive to 8% |
| Cleaner | Reduce feedback to 30% |
| Wider | Enable stereo width processing |
