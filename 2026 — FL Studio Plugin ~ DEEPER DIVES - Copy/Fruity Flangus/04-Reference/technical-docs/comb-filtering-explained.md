# Comb Filtering Explained

Comb filtering is the technical phenomenon that powers Fruity Flangus.

## The Physics
When a signal is delayed by a very short amount (0.1ms - 10ms) and mixed back with the original, certain frequencies cancel each other out while others reinforce each other. 
- The resulting frequency response graph looks like the teeth of a **comb**, hence the name.

## Why It Swirls
In Flangus, the **LFO (Speed/Depth)** is constantly moving the delay time back and forth. This causes the "teeth" of the comb to sweep across the frequency spectrum. This is what we hear as the "swishing" or "jet plane" sound.

## Order and Complexity
The **Order** parameter in Flangus determines how many of these "combs" are active at once. Higher order = more complex, lush sound.
- **Order 1**: Simple flanger.
- **Order 4**: Deep, complex unison.
