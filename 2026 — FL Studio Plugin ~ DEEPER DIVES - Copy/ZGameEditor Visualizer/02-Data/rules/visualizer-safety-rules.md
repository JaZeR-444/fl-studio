Tags: visual | hip-hop/rap | electric

## ZGameEditor Visualizer Safety Rules

### Export Settings

| Platform | Resolution | Aspect Ratio | Codec | Notes |
|----------|------------|--------------|-------|-------|
| YouTube | 1920x1080 | 16:9 | H.264 | Standard HD |
| YouTube 4K | 3840x2160 | 16:9 | H.265 | Premium quality |
| Instagram | 1080x1080 | 1:1 | H.264 | Square format |
| TikTok | 1080x1920 | 9:16 | H.264 | Vertical format |
| Twitter/X | 1280x720 | 16:9 | H.264 | Compressed |

### Audio-Reactivity Rules

**What NOT to visualize:**

| Audio Element | Visual Problem | Solution |
|---------------|----------------|-----------|
| Silence/gaps | Visuals look broken | Add fade-in/out or blank frame |
| Very quiet sections | Visuals flicker randomly | Lower reaction sensitivity |
| Clipped audio | Visual distortion | Fix audio first, then visualize |
| Dynamic range issues | Visuals too variable | Compress audio or reduce reaction |
| Very loud peaks | Visuals clip/solid color | Lower reaction, add headroom |

### Color Palette Safety

| ❌ Avoid | ❌ Problem | ✅ Use Instead |
|----------|------------|----------------|
| Pure white (#FFF) | Eye strain, no contrast | Off-white (#F5F5F5) |
| Pure black (#000) | No depth, boring | Dark gray (#1A1A1A) |
| More than 4 colors | Clashing palette | 2-3 complementary colors |
| Rainbow on dark themes | Rainbow can feel cheap | Gradient of one hue |
| Random colors | No cohesion | Analogous or complementary |

### Aspect Ratio Mistakes

**Common errors:**
- Using 16:9 for Instagram (gets cropped)
- Using 1:1 for YouTube (black bars)
- Not testing on target platform
- Wrong resolution for platform

### The "YouTube Test"

```
1. Export at 1920x1080, 16:9
2. Upload to unlisted video
3. Check on phone (most common viewing)
4. Check on desktop
5. Verify colors look correct
6. Confirm audio syncs with visuals
7. Adjust export settings if needed
```

### Performance Rules

| Situation | Problem | Fix |
|-----------|---------|-----|
| Slow rendering | GPU can't keep up | Reduce particle count |
| Dropped frames | CPU overload | Simplify shapes |
| Audio sync drift | Long renders | Shorten clip or restart |
| Color banding | Gradients look bad | Add dithering in export |

### Quick Checklist Before Export

- [ ] Resolution matches platform
- [ ] Aspect ratio correct
- [ ] Colors tested on target device
- [ ] Audio normalized
- [ ] No silence at start/end (add fade)
- [ ] Codec appropriate
- [ ] Bitrate sufficient (YouTube: 15+ Mbps)
- [ ] Audio quality (AAC, 320kbps)
