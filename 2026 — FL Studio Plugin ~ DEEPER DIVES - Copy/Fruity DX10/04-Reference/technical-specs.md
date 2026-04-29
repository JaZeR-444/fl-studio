# Technical Specs: Fruity DX10 Mechanics

## 1. Aliasing & Quality

*   **Design:** DX10 is designed for "Low Aliasing" (oversampled oscillators) compared to the raw DX7 chips, but it still sounds "digital".
*   **CPU:** Extremely low. It is arguably the most efficient synth in FL Studio next to 3xOsc.

## 2. 8-Voice Polyphony

*   **Limit:** It can only play 8 notes at once.
*   **Result:** Large chords with long release tails will cause "Voice Stealing" (old notes cutting off abruptly to make room for new ones).
*   **Fix:** None. It is a hard limit. Use it for Bass, leads, or simple keys, not orchestral pads.

## 3. Modulation Envelope Topology

*   **Type:** DAHDSR? No, it's specific:
    *   **INIT:** Starting Level.
    *   **TIME:** Attack Time to reach Sustain? Or Decay Time?
    *   **SUS:** Sustain Level.
    *   **REL:** Release Time.
    *   This is a simplified ADSR where Attack maps to "Time" and Decay is omitted? Or "Time" is the decay?
    *   *Correction:* Manual says "Time needed for amplitude to reach sustain". This implies it is an **Attack** stage. Where is the decay? It seems DX10 skips the Decay stage and goes straight from Init (Start) to Sustain (Target) over Time?

## 4. The "Thru" Output

*   **Path:** Parallel output of Modulator.
*   **Mix:** The Thru knob adds the Modulator signal to the Carrier output.
*   **Phase:** Since the Modulator is also modifying the Carrier pitch, summing them can create complex phase cancellations if the Ratios are integers.
