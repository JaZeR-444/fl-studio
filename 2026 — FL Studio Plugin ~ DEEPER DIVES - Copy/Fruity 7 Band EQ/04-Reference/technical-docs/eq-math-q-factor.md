# Fixed Band EQ Math & Q-Factor

## Filter Design
The Fruity 7 Band EQ uses **Peaking Filters** (also known as Bell filters). 

### What is Q-Factor?
Q (Quality Factor) determines how "wide" the boost or cut is.
- **In Fruity 7 Band EQ:** The Q-factor is fixed and optimized for each frequency. 
- **The "Overlap":** Each band overlaps slightly with its neighbors. This ensures that the EQ sounds "musical" rather than "stepped" or "surgical".

## Phase Response (Minimum Phase)
Like most analog-style EQs, this plugin is **Minimum Phase**. 
- **Result:** Every time you boost a frequency, you are also delaying that specific frequency by a few micro-seconds.
- **Impact:** This is usually unnoticeable on single tracks. However, if you use it on one half of a parallel drum bus, it can cause phase cancellation.

## Gain Scaling
The sliders are **Non-Linear**. They are more sensitive near the 0dB center point, allowing for very fine adjustments of ±1-2 dB, while still allowing for extreme ±18dB adjustments at the edges.
