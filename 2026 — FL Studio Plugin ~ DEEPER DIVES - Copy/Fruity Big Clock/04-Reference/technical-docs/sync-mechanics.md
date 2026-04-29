# Sync Mechanics & Technical Accuracy

## Clock Synchronization
Fruity Big Clock retrieves its time data directly from the **FL Studio Audio Engine**. 

## Sample Accuracy
The "Samples" mode is the most accurate representation of time within the DAW.
- **Calculation**: `Seconds = Samples / Sample Rate`.
- **Dependency**: If you change the Project Sample Rate (e.g., 44.1kHz to 48kHz), the absolute time will shift, but the sample count for a specific beat remains constant relative to the tempo.

## Latency Compensation
Fruity Big Clock is **latency-aware**. If you have plugins that introduce PDC (Plugin Delay Compensation), Big Clock will reflect the "audible" time, not the internal engine time, ensuring visual sync with what you hear.
