# UI Map And Signal Flow: Fruity Free Filter

## UI Tour
The interface is categorized into three primary control areas. [SRC: IL-MAN]

### 1. Filter Engine (The "Core")
- **Type**: Selector for the 7 available shapes (LP, BP, HP, Notch, Low Shelf, Peaking, High Shelf).
- **Freq**: Sets the cutoff (LP/HP) or center frequency (BP/Peak).
- **Q**: Adjusts the resonance. High values create a sharp "whistle" at the Freq point.

### 2. Output & Mix (The "Power")
- **Gain**: **ONLY ACTIVE** in Shelf and Peaking modes. It sets the boost or cut amount.
- **L/R Phase**: (If available in Patcher/Wrapper context) offsets the filter between channels.

### 3. Monitoring
- **Output Meter**: Shows the final signal level. Filtering high resonance can cause significant volume spikes.

## Signal Flow
1. **Input**: Audio enters the filter circuit.
2. **Topology Selection**: The signal is routed through the specific 12dB/octave SVF path (e.g., Low Pass).
3. **Resonance Injection**: A portion of the signal is fed back based on the **Q** setting, creating a peak.
4. **Gain Stage**: (Shelf/Peaking only) The target band is amplified or attenuated.
5. **Output**: Summed signal leaves the plugin.

## Things Beginners Misunderstand
- **"The Gain knob is broken"**: In Low Pass, High Pass, Band Pass, and Notch modes, the **Gain** knob does absolutely nothing. This is by design.
- **"It's not cutting enough"**: This is a 12dB/octave filter. It is "gentle." If you need to completely erase a frequency, you may need two instances in series or a 24dB+ filter like Fruity Love Philter.
- **Phase Shift**: Every filter move causes a phase shift. If you automate the Freq knob on a drum bus, you might notice your kick drum changing "feel" even if the cutoff is high.
