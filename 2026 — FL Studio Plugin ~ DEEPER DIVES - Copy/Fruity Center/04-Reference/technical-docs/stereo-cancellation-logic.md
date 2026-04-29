# Stereo Cancellation Logic

## Mid Signal Calculation
The Mid (Center) signal is calculated as:
`M = (L + R) / 2`
By attenuating this, you are effectively performing phase cancellation on the parts of the signal that are correlated between the two channels.

## Side Signal Calculation
The Side signal is calculated as:
`S = (L - R) / 2`
By attenuating this, you remove the uncorrelated energy, leaving a perfectly Mono signal.

## Relationship to Stereo Width
Standard stereo audio is just `Left` and `Right`. Mid-Side (MS) is an alternative representation. Fruity Center performs the conversion to MS internally, applies the gain adjustments, and then converts back to LR for the output.
