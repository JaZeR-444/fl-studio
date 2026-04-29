# Razer Chroma Integration Guide

## What is Razer Chroma?

Razer Chroma is a **RGB lighting ecosystem** for gaming peripherals. It is **not an audio plugin** and does not process sound.

### Integration Purpose
- Visual feedback during production
- Metronome flash synchronization
- Track status indicators
- Creative visual atmosphere

---

## FL Studio Integration

### Supported Devices
| Device | Features |
|--------|----------|
| Razer Keyboards | Per-key RGB, effects |
| Razer Mice | Scroll wheel, logo |
| Razer Headsets | Ear cups, status LEDs |
| Razer Mousepads | Edge lighting |

### Setup Requirements
1. Razer Synapse software installed
2. FL Studio Integration enabled in Synapse
3. Chroma RGB profile loaded
4. FL Studio connected to Synapse

---

## Workflow Integration

### Metronome Flash
| Setting | Value |
|---------|-------|
| Synapse Module | Chroma |
| Effect | Flash |
| Color | Configurable |
| Beat | Every downbeat |

### Kick-to-Light Sync
| Setting | Value |
|---------|-------|
| Trigger | Kick drum peak |
| Effect | Pulse |
| Intensity | Volume-linked |
| Color | Dynamic |

---

## Configuration Guide

### Synapse Setup
1. Open Razer Synapse
2. Enable Chroma Apps module
3. Add FL Studio as app
4. Configure lighting effects
5. Test in FL Studio

### FL Studio Settings
1. Open FL Studio Options
2. Enable external controllers
3. Configure Razer device
4. Test MIDI feedback
5. Save preset

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No light response | Check Synapse is running |
| Effects not triggering | Verify FL Studio connection |
| Lag in response | Close background apps |
| Colors wrong | Reset profile in Synapse |

---

## Limitations

### Audio Processing
- **NONE** - Chroma does not affect audio

### Latency
- Visual only, no audio latency
- May have slight visual lag

### Compatibility
- Windows only
- Requires Razer Synapse
- Not portable

---

## Related Documentation
- [Razer Chroma Quick Start](../01-Learning/Quick-Reference/00_Quickstart_5_Minutes.md)
- [Synapse Setup Guide](../01-Learning/Quick-Reference/02_Synapse_Setup_Guide.md)
- [Common Mistakes](../01-Learning/Quick-Reference/01_Common_Mistakes.md)
