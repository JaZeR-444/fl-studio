# Cabinet Simulation Guide

## Understanding Cabinet Models

Hardcore includes 5 cabinet simulations that model the frequency response and character of physical guitar speaker enclosures. Each cabinet acts as a complex EQ curve, dramatically shaping the final tone. [SRC: IL-MAN]

## Cabinet 1: Bright/Modern

**Character:** Extended high-frequency response, tight low end, forward midrange presence
**Best for:** Modern metal, djent, aggressive hip-hop drums, cutting lead tones
**Frequency profile:**
- Strong 3-5kHz presence boost
- Tight 100Hz low end (not flabby)
- Extended treble to 8kHz+
- Slight 200Hz scoop

**Hip-hop applications:**
- Drum bus for modern trap aggression
- 808s that need to cut through mix
- Synth leads requiring bite

## Cabinet 2: Vintage/Classic

**Character:** Warm, rounded highs, pronounced midrange, softer attack
**Best for:** Classic rock, lo-fi aesthetics, vocal warmth, retro drums
**Frequency profile:**
- Rolled-off highs above 6kHz
- Strong 200-400Hz "body" region
- Moderate 1-2kHz presence
- Soft low-end bump around 80Hz

**Hip-hop applications:**
- Vocal warmth and vintage character
- Drum samples needing "tape" vibe
- Bass guitar saturation with controlled highs

## Cabinet 3: British/Crunch

**Character:** Mid-forward, aggressive upper-mids, compressed dynamics
**Best for:** British invasion tones, punk, garage rock, gritty vocals
**Frequency profile:**
- Aggressive 1-2.5kHz midrange push
- Slightly boxy 300-500Hz character
- Controlled, present 5-6kHz range
- Moderate low-end (80-120Hz)

**Hip-hop applications:**
- Vocals needing "radio" presence
- Drum room mics emulation
- Gritty synth bass

## Cabinet 4: American/Smooth

**Character:** Balanced, scooped mids, extended frequency range
**Best for:** Clean tones, jazz, R&B, subtle processing, general-purpose
**Frequency profile:**
- Scooped 300-800Hz (less honk)
- Extended, smooth highs to 10kHz
- Balanced low-mid and high-mid response
- Natural, uncolored character

**Hip-hop applications:**
- Clean vocal processing
- Subtle drum enhancement
- Bass guitar enhancement without aggression
- Synth pads requiring space

## Cabinet 5: Small/Practice Amp

**Character:** Boxy, limited frequency range, compressed, immediate
**Best for:** Lo-fi, punk, practice amp vibes, megaphone effects, telephone tones
**Frequency profile:**
- Strong midrange focus (500Hz-3kHz)
- Severe rolloff below 100Hz and above 5kHz
- Boxy 200-400Hz character
- Limited dynamic range

**Hip-hop applications:**
- Radio/megaphone vocal effects
- Lo-fi drum destruction
- Telephone/filter effects
- Budget equipment emulation
- Industrial textures

## Cabinet Selection Strategy

### For Drums
- **Modern productions:** Cabinet 1 (tight, bright) or Cabinet 4 (balanced)
- **Lo-fi/vintage:** Cabinet 2 (warm, rolled-off) or Cabinet 5 (boxy, limited)
- **Aggressive genres:** Cabinet 1 or Cabinet 3 (mid-forward)

### For Vocals
- **Clean/transparent:** Cabinet 4 (balanced, uncolored)
- **Warm/vintage:** Cabinet 2 (rounded, classic)
- **Radio/megaphone:** Cabinet 5 (small, boxy) + high-pass filtering
- **Aggressive/rap:** Cabinet 3 (mid-forward presence)

### For Bass
- **Modern/sub-heavy:** Cabinet 1 (tight low-end)
- **Classic/vintage:** Cabinet 2 (warm, soft)
- **Gritty/aggressive:** Cabinet 3 (mid-forward) or Cabinet 5 (compressed)

### For Synths
- **Leads:** Cabinet 1 (bright, cutting) or Cabinet 3 (presence)
- **Pads:** Cabinet 2 (warm, space) or Cabinet 4 (balanced)
- **Basses:** Match to genre (see Bass section above)
- **FX/Textures:** Cabinet 5 (characterful, limited)

## Combining Cabinets with Stompboxes

**Bright cabinet + heavy distortion:** Aggressive modern metal tone
**Vintage cabinet + light distortion:** Classic rock warmth
**Small cabinet + heavy distortion:** Lo-fi punk/industrial
**American cabinet + chorus:** Clean, spacious jazz/R&B

## Master EQ Interaction

The 8-band Graphic EQ sits before the cabinet simulation. This ordering is intentional:

1. Shape tone with EQ (broad strokes)
2. Cabinet filters the result (final character)

**Strategy:** Use EQ to compensate for cabinet characteristics:
- Bright cabinet too harsh? Cut 3-5kHz in EQ
- Vintage cabinet too dark? Boost 5-8kHz in EQ
- Small cabinet too boxy? Cut 200-400Hz in EQ

## Cabinet as Effect

Don't think of cabinet as just "amp simulation"—it's a powerful tone-shaping tool:
- Use Cabinet 5 on clean drums for instant lo-fi character
- Use Cabinet 2 on vocals for vintage warmth
- Use Cabinet 1 on synth bass for modern aggression
- Use any cabinet at low mix levels for subtle speaker emulation

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*
