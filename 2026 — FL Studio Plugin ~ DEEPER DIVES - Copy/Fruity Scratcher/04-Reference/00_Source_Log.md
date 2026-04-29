# Fruity Scratcher — Source Log

## Primary Sources

### [IL-MAN] — Image-Line Official Manual
**Source Type:** Primary documentation  
**URL:** https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Scratcher.htm  
**Reliability:** ★★★★★ (Official, authoritative)  
**Coverage:** Parameters (SPD, ACC, SEN), UI elements, basic operation, DVS support  
**Last Accessed:** 2026-02-03  
**Verification Status:** ✅ Verified

**Key claims sourced:**
- SPD range (-200% to +200%)
- ACC controls motor torque simulation
- SEN scales input sensitivity
- DVS support (Serato CV02 timecode)
- Hold button function
- REV (Reverse) button function
- Platter interface behavior

**What manual DOES NOT cover:**
- Creative applications (vibe-based usage)
- Genre-specific workflows
- Advanced automation techniques
- Integration with other plugins
- Troubleshooting common issues

---

### [IL-KB] — Image-Line Knowledge Base
**Source Type:** Official support articles  
**URL:** https://support.image-line.com/  
**Reliability:** ★★★★☆ (Official, sometimes dated)  
**Coverage:** Troubleshooting, FAQs, compatibility notes  
**Last Accessed:** 2026-02-03  
**Verification Status:** ✅ Verified (where available)

**Key claims sourced:**
- Sample loading best practices
- MIDI controller mapping process
- FL Studio integration notes
- Common error messages

**Gaps:**
- Limited creative workflow documentation
- No vibe-specific guidance
- Minimal genre context

---

### [FORUM] — Image-Line Community Forums
**Source Type:** User-generated content  
**URL:** https://forum.image-line.com/  
**Reliability:** ★★★☆☆ (Variable, requires verification)  
**Coverage:** User workflows, creative techniques, troubleshooting reports  
**Last Accessed:** 2026-02-03  
**Verification Status:** ⚠️ Mixed (some claims verified, some marked [UNVERIFIED])

**Key claims sourced:**
- Shift + Drag for fine control [UNVERIFIED]
- Creative SEN automation [UNVERIFIED]
- Feedback loop routing [UNVERIFIED]
- Community preset approaches

**Verification needed:**
- Test Shift + Drag in FL Studio
- Validate feedback loop routing with limiter
- Confirm creative SEN automation outcomes

---

## Secondary Sources

### [REPUTABLE] — Production Tutorials & DJ Technique Guides
**Source Type:** Educational content from established creators  
**Examples:**
- SeamlessR (FL Studio expert, YouTube)
- In The Mix (FL Studio tutorials, YouTube)
- Turntablism technique manuals (QBert, Mix Master Mike)
- Hip-hop production guides (Pensado's Place, Sound on Sound)

**Reliability:** ★★★★☆ (High, context-dependent)  
**Coverage:** Creative workflows, genre applications, DJ technique names  
**Verification Status:** ✅ Cross-referenced across multiple sources

**Key claims sourced:**
- Turntable physics terminology (direct-drive vs. belt-drive)
- ACC settings for realistic turntable emulation (30-40% = belt-drive, 75-90% = direct-drive)
- Scratch technique names (baby scratch, chirp, transformer, flare)
- Genre-specific applications (boom-bap, trap, R&B)
- Vibe translation strategies (moody = low ACC, upbeat = high ACC)

**Why trusted:**
- Multiple sources corroborate same information
- Content creators with documented FL Studio expertise
- Aligns with official manual where overlap exists

---

## Unverified Claims & Verification Steps

### Claim 1: Shift + Drag for Fine Control
**Source:** Community forum posts  
**Status:** [UNVERIFIED]  
**Claim:** Holding Shift while dragging platter provides fine/precise control  

**Verification steps:**
1. Load Fruity Scratcher in FL Studio
2. Load a sample
3. Test normal drag (no Shift)
4. Test Shift + drag
5. Compare control precision

**Expected outcome if true:** Shift + drag should reduce sensitivity/provide finer control  
**Expected outcome if false:** No difference in control behavior  

---

### Claim 2: Creative SEN Automation
**Source:** Community workflows  
**Status:** [UNVERIFIED]  
**Claim:** Automating SEN creates evolving control characteristics (useful for experimental music)  

**Verification steps:**
1. Create automation clip on SEN parameter
2. Draw automation curve (e.g., 30% to 80% over 4 bars)
3. Test with manual scratching or MIDI controller
4. Listen for audible impact

**Expected outcome if true:** Control feel should change dynamically during performance  
**Expected outcome if false:** No significant impact on performance feel (SEN is typically static)  

---

### Claim 3: Feedback Loop Scratches
**Source:** Experimental production forums  
**Status:** [UNVERIFIED]  
**Claim:** Routing Scratcher output → Send (with reverb/delay) → back to Scratcher input creates self-feeding psychedelic texture  

**Verification steps:**
1. Route Scratcher output to Send track
2. Add reverb + delay to Send
3. Route Send output back to Scratcher channel input
4. Set send level to 10-20% (low)
5. Test with limiter on output

**Expected outcome if true:** Self-sustaining, evolving texture  
**Expected outcome if false:** No audible feedback loop or harsh/uncontrollable feedback  

**Warning:** May create sudden loud bursts—use limiter  

---

### Claim 4: DVS Support Beyond Serato CV02
**Source:** Forum discussions, user reports  
**Status:** [UNVERIFIED]  
**Claim:** Scratcher supports Traktor MK2 timecode and other DVS formats  

**Verification steps:**
1. Requires physical turntables, timecode vinyl, and audio interface
2. Test with Serato CV02 (known supported) [SRC: IL-MAN]
3. Test with Traktor MK2 timecode
4. Test with other formats if available

**Expected outcome if true:** Tracking accuracy with non-Serato timecode  
**Expected outcome if false:** No tracking or erratic behavior  

**Note:** Hardware-dependent verification—not testable without equipment  

---

## Research Methodology

### Source Hierarchy
1. **IL-MAN** (Image-Line Official Manual) — Always prioritized
2. **IL-KB** (Knowledge Base) — Second priority for troubleshooting
3. **REPUTABLE** (Established creators) — Cross-referenced, multiple sources required
4. **FORUM** (Community) — Flagged as [UNVERIFIED] unless corroborated

### Tagging System Used
- **[SRC: IL-MAN]** — Verified in official manual
- **[SRC: IL-KB]** — Verified in knowledge base
- **[SRC: REPUTABLE]** — Cross-referenced across multiple reputable sources
- **[SRC: FORUM]** — Community-sourced, requires testing
- **[UNVERIFIED]** — Claim needs in-DAW verification

### Verification Process
1. Check official manual first
2. Cross-reference with 2+ reputable sources
3. Mark as [UNVERIFIED] if single-source or experimental
4. Provide verification steps for users to test

---

## Coverage Gaps & Research Needs

### Gaps in Official Documentation
- **Creative applications** — Manual covers mechanics, not workflows
- **Vibe-based usage** — No moody/upbeat/psychedelic guidance in official docs
- **Genre context** — No hip-hop/R&B/trap-specific rules in manual
- **Advanced automation** — Manual covers basic automation, not creative curves
- **FX chain integration** — No guidance on pairing with reverb/delay/phaser

**How gaps were filled:**
- REPUTABLE sources for genre/vibe context
- Production tutorial analysis for workflow strategies
- Turntablism culture research for DJ technique naming
- Cross-genre production guides for vibe translation

---

### Areas Requiring Further Research
1. **DVS timecode format support** (beyond Serato CV02)
2. **MIDI controller compatibility matrix** (which jog wheels work best)
3. **CPU usage benchmarks** (sample length vs. performance impact)
4. **Shift key modifiers** (fine control, snap-to-grid, etc.)
5. **Feedback routing stability** (safe levels, best practices)

**Recommended approach:**
- In-DAW testing with different setups
- Community survey of DVS users
- Performance benchmarking across systems

---

## Source Update Log

| Date | Source | Update | Impact |
|------|--------|--------|--------|
| 2026-02-03 | IL-MAN | Initial review | Established parameter documentation |
| 2026-02-03 | REPUTABLE | Turntablism guides reviewed | Added scratch technique names, DJ culture context |
| 2026-02-03 | FORUM | Community workflows surveyed | Flagged experimental techniques as [UNVERIFIED] |
| Future | DVS testing | Hardware verification needed | Will confirm timecode format support |

---

## Related Documentation

**Internal cross-references:**
- `01_Official_Links.md` — Direct links to all sources
- `02_Coverage_Checklist.md` — Feature coverage audit
- `00_What_It_Is_And_When_To_Use.md` — Includes source tags inline
- All workflow files — Include [SRC: ...] tags for claims

**External resources:**
- Image-Line FL Studio Manual (full)
- Turntablism technique databases
- Hip-hop production style guides
- DJ equipment manuals (for DVS setup)

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Maintained by:** Documentation team  
**Verification standard:** Every claim tagged with source or marked [UNVERIFIED]
