# The Pixel-to-Frequency Map

BeepMap is a literal translation of spatial coordinates to audio data.

## Verticality = Pitch
The bottom pixel row represents the "Start" of the frequency range (defined by the FREQ knob). The top row represents the "End".
- If the image is 512 pixels tall, there are 512 potential sine wave oscillators.

## Horizontality = Time
The "Length" knob determines how many milliseconds are spent on each vertical column of pixels.
- A wide image + slow length = An evolving soundscape.
- A thin image + fast length = A sharp transient or "blip".
