# ReWire Safety Rules

## Critical Warnings

### Do NOT
- Use ReWire as primary recording method
- Ignore latency compensation
- Skip sync testing before sessions
- Route without monitoring
- Use ReWire for final exports

### Do
- Test sync before recording
- Use audio interfaces for final output
- Monitor through DAW being controlled
- Check latency settings
- Document setup for sessions

---

## Latency Safety

### Understanding Latency
| Type | Description | Typical Range |
|------|-------------|---------------|
| Buffer Latency | Audio buffer size | 5-20ms |
| ReWire Latency | Protocol overhead | 5-15ms |
| Total Latency | Combined | 10-35ms |

### Latency Management
1. Use large buffer in host DAW
2. Keep buffer small in client DAW
3. Enable ReWire latency compensation
4. Monitor through client for accuracy
5. Record audio, not ReWire output

---

## Sync Safety

### Tempo Sync Checklist
| Check | Action |
|-------|--------|
| Master clock | Set one DAW as master |
| Transport | Test start/stop sync |
| Tempo changes | Verify propagation |
| Time signature | Confirm consistency |
| Preroll | Test preroll sync |

### Sync Problems
| Symptom | Cause | Fix |
|---------|-------|-----|
| Drift | Clock mismatch | Designate master |
| Dropout | Buffer too small | Increase buffer |
| Click | Unsynced transport | Reset sync |
| Latency | Uncompensated | Enable comp |

---

## Routing Safety

### Signal Flow Rules
1. Route ReWire to dedicated track
2. Use insert effects, not send
3. Monitor through DAW mixer
4. Avoid feedback loops
5. Keep ReWire channels separate

### Level Guidelines
| Source | Recommended Level |
|--------|-------------------|
| ReWire Output | -6dB to -3dB |
| Host Input | -12dB to -6dB |
| After Processing | -3dB to 0dB |
| Master Output | -1dB to 0dB |

---

## Performance Safety

### CPU Management
| Setting | Recommendation |
|---------|----------------|
| Buffer Size | 512+ samples |
| Voice Limit | Monitor usage |
| Plugin Count | Minimize in host |
| Sample Rate | Match hosts |

### Stability Rules
- Save both DAW sessions
- Test before recording
- Close unused programs
- Monitor CPU in both DAWs
- Use ASIO drivers

---

## Recording Guidelines

### Audio vs ReWire
| Method | Quality | Latency | Use |
|--------|---------|----------|-----|
| Audio Recording | Maximum | Variable | Final takes |
| ReWire | Good | Fixed | Mixing, testing |

### Recording Best Practices
1. Record audio, not ReWire output
2. Use audio interface inputs
3. Monitor through DAW being recorded
4. Test levels before recording
5. Keep original sessions

---

## Troubleshooting Common Issues

### Problem: "Audio cuts out"
- Increase buffer size
- Reduce plugin count
- Check CPU usage
- Restart both DAWs

### Problem: "Sync drifting"
- Designate master clock
- Disable tempo changes
- Reset sync and retry
- Check sample rate match

### Problem: "No audio"
- Check routing paths
- Verify ReWire enabled
- Test volume levels
- Check mute/solo status

### Problem: "Latency issues"
- Enable compensation
- Adjust buffer sizes
- Monitor through client
- Use direct monitoring

---

## Genre-Specific Rules

### Electronic Production
- Use ReWire for soft synths
- Record audio for export
- Test sync on drops
- Monitor timing carefully

### Live Recording
- Avoid ReWire for live capture
- Use audio interface directly
- Record to DAW
- Keep ReWire for mixing

### Film Scoring
- Sync to video clock
- Record final audio
- Test tempo changes
- Use professional setup

---

## Deprecation Notice

ReWire is a legacy protocol. Consider these alternatives:

| Alternative | Pros | Cons |
|-------------|------|------|
| DAW Direct | Lower latency | Less flexible |
| VST Bridge | Plugin compatibility | Complex setup |
| Audio Export | Best quality | No real-time |
| External Hardware | Pro quality | Expensive |

---

## Related Documentation
- [ReWire README](../README.md)
- [Deprecation Notice](../01-Learning/Quick-Reference/deprecation-notice.md)
- [Alternatives Guide](../01-Learning/Quick-Reference/alternatives-guide.md)
