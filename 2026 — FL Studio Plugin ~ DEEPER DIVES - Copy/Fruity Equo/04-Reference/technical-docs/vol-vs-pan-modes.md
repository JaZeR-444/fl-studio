# VOL vs. PAN Modes

Understanding the relationship between Equo's primary operating modes.

## The Separation of Data
Equo maintains **separate data buffers** for Volume, Panning, and Send levels.
- Changes made in VOL mode **do not** affect your PAN curve.
- Changes made in PAN mode **do not** affect your VOL curve.
- The final output is the **product** of both curves applied sequentially.

## Signal Processing Order
1. Input
2. Band Splitting
3. Volume Scaling (based on VOL sliders)
4. Stereo Balancing (based on PAN sliders)
5. Send Routing (based on SEND sliders)
6. Recombination
7. Master Output

## The Advantage
This allows you to EQ a sound for tone while *simultaneously* EQing it for stereo placement. For example, you can boost the high-end volume while panning those same highs to the left, all within one plugin instance.
