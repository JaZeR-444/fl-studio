# Troubleshooting Quick Fixes

## "My sound is too thin/weak"

**Solutions:**
1. **Check Harmonic Mask**: Ensure you have enough harmonics (try sawtooth preset)
2. **Add Sub Oscillator**: Enable sub at -12, 30-50% level
3. **Increase Unison**: 3-4 voices with 20-40% detune
4. **Adjust Color**: Push towards +30 to +50 for brightness
5. **Filter Check**: Make sure cutoff isn't too low (below 1kHz)

## "My pluck doesn't sound like a pluck"

**Solutions:**
1. **Pluck Amount**: Must be 30%+ to hear effect
2. **Envelope Sustain**: Set to 0% for true pluck decay
3. **Harmonic Content**: Need sufficient harmonics to decay (try saw mask)
4. **Note Duration**: Play staccato (short notes) for pluck character
5. **Filter Cutoff**: Higher cutoffs (5kHz+) show pluck better

## "Filter sounds weird/distorted"

**Solutions:**
1. **This is normal!**: Harmless filters can sound different from analog
2. **Reduce Resonance**: Try under 50% if too ringing
3. **Adjust Slope**: 24dB is most "normal" sounding
4. **Check Drive**: Reduce drive if added unwanted distortion
5. **Try Different Mask**: Some harmonic combinations react strangely

## "Phaser sounds like vibrato/pitch shift"

**Solutions:**
1. **This is FEATURE**: Harmless phaser modulates harmonic frequencies
2. **Reduce Rate**: Under 10Hz for traditional phaser sound
3. **Reduce Depth**: Under 40% for subtle effect
4. **Lower Center**: Move center frequency down for gentler effect
5. **Combine with Filter**: Filter resonance + phaser = traditional sound

## "CPU usage is too high"

**Solutions:**
1. **Disable Unison**: Single voice mode
2. **Reduce Phaser**: Turn off or reduce depth to 0%
3. **Simplify Mask**: Fewer harmonics = less CPU
4. **Freeze Track**: In FL Studio, freeze the channel
5. **Increase Buffer**: In audio settings, raise buffer size

## "Sound is clipping/distorting"

**Solutions:**
1. **Reduce Master Volume**: Turn down Harmless output
2. **Check Unison**: Multiple voices = louder, reduce blend
3. **Maximus Threshold**: If using Maximus, raise threshold
4. **Filter Resonance**: Very high resonance can peak
5. **Sub Osc Level**: Reduce if too loud with main osc

## "Unison sounds muddy"

**Solutions:**
1. **Reduce Detune**: Try 15-25% instead of 50%+
2. **Reduce Voices**: 3 voices instead of 7-9
3. **Narrow Stereo**: 30-40% width instead of 100%
4. **Add Filter**: Cut highs slightly to clean up
5. **Check Phase**: This shouldn't happen in additive, check other plugins

## "Can't get that 'analog warmth'"

**Solutions:**
1. **Use Drive**: 20-40% drive adds saturation
2. **Gentle Slope**: 12dB filter slope is warmer
3. **Low Resonance**: 15-30% for subtle character
4. **Effects Chain**: Add chorus or slight distortion
5. **Accept difference**: Harmless is cleaner by design - that's its character

## "Envelopes sound clicky/poppy"

**Solutions:**
1. **Increase Attack**: Even 2-5ms helps
2. **Check Sustain**: Ensure sustain level makes sense with decay
3. **Release Time**: Very short release can click
4. **Filter Envelope**: If synced to filter, check filter cutoff range
5. **Velocity**: Check if velocity is causing extreme variations

## "My custom mask disappeared"

**Solutions:**
1. **Check Preset Slot**: You may have switched slots
2. **Save Preset**: Always save custom masks to a slot
3. **Undo**: Ctrl+Z may recover
4. **Copy to A/B**: Use A/B compare to backup before experimenting

## "Effects not working/hear no difference"

**Solutions:**
1. **Check Mix/Amount**: Most effects have mix controls at 0% by default
2. **Effect Order**: Effects are in series, check signal flow
3. **Bypass Test**: Toggle effect on/off to compare
4. **Reset**: Right-click parameter to reset to default
5. **Maximus**: Check that threshold isn't set too high (no reduction)

[SRC: IL-MAN - Harmless Troubleshooting]
