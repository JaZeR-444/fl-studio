Tags: utility | hip-hop/rap | R&B

## Plugin Wrapper Safety Rules

### Latency Rules

| Situation | Latency Setting | Why |
|-----------|-----------------|-----|
| Mixing with plugins | Auto-compensate | Aligns timing |
| Recording external | Auto-compensate | Real-time monitoring |
| Analysis tools | Bypass | No timing needed |
| Latency-sensitive | Minimum buffer | Lowest delay |

### CPU Management

| Issue | Solution | Priority |
|-------|----------|----------|
| High CPU usage | Freeze/ bounce tracks | High |
| Plugin crashes | Update/replace plugin | High |
| Memory leaks | Restart FL occasionally | Medium |
| Slow loading | Use wrapper presets | Low |

### The "Wrapper Test"

```
1. Load VST in Plugin Wrapper
2. Play audio through it
3. Check latency indicator
4. Test automation recording
5. Verify preset saving
6. Check CPU usage meter
7. If issues: Try different buffer size
```

### Avoid List

| ❌ Don't Do This | ❌ Result | ✅ Instead |
|-----------------|-----------|------------|
| Skip latency check | Timing problems | Always verify |
| Too many VSTs | CPU crashes | Use selectively |
| No preset saving | Lost settings | Save wrapper presets |
| Ignore CPU meter | Performance issues | Monitor constantly |

### Quick Checklist

- [ ] Latency compensation enabled
- [ ] Key parameters mapped
- [ ] Preset saved
- [ ] CPU usage acceptable
- [ ] Automation working
- [ ] Test in isolation first
