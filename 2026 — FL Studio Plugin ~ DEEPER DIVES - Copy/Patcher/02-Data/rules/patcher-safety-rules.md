# Patcher Safety Rules

## CPU Management

### Plugin Loading
- Load plugins strategically
- Avoid loading unused plugins
- Monitor CPU usage in chain

### Parallel Processing
- Each parallel path uses additional CPU
- Limit parallel paths to 2-4 max
- Disable unused paths

### Voice Management
- Polyphonic instruments increase CPU
- Limit voices in synth chains
- Use mono versions when possible

---

## Routing Best Practices

### Signal Flow
- Keep signal path logical
- Avoid unnecessary routing loops
- Use clear naming conventions

### Latency Compensation
- Patcher handles latency automatically
- Be aware of cumulative delay
- Check mix phase with latency-heavy chains

---

## Preset Management

### Saving Presets
- Name chains descriptively
- Include chain description
- Note required plugins
- Test before sharing

### Loading Presets
- Check for missing plugins
- Verify chain integrity
- Test signal flow

---

## Common Mistakes

### CPU Overload
| Mistake | Consequence | Prevention |
|---------|-------------|-------------|
| Too many plugins | CPU strain | Limit chain length |
| Parallel paths | CPU multiplication | Limit to 2-4 paths |
| Unused plugins | Wasted CPU | Remove unused |

### Routing Errors
| Mistake | Consequence | Prevention |
|---------|-------------|-------------|
| Feedback loops | Signal issues | Check routing |
| Unconnected paths | No signal | Verify connections |
| Wrong order | Poor results | Follow signal flow |

---

## Optimization Tips

### Efficient Chains
- Use plugin order wisely
- Disable unused sections
- Use effect only when needed
- Bypass chains for A/B testing

### Resource Management
- Monitor CPU meter
- Use lightweight alternatives
- Freeze tracks with heavy chains
- Use render-to-audio for final chains

---

## Related Documentation

- [Patcher Quick Reference](../01-Learning/Quick-Reference/quick-reference.md)
- [Chain Creation Workflows](../03-Workflows/by-goal/chain-creation.md)
- [Parallel Processing Workflows](../03-Workflows/by-goal/parallel-processing.md)
