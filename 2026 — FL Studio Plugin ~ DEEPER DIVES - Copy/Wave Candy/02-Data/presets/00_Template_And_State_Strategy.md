# Template And State Strategy

## Wave Candy State Management

Since Wave Candy is an analysis tool with no audio processing, "presets" are actually **analysis templates and saved states** for different workflow scenarios. [SRC: IL-MAN]

## Core Analysis Templates

### 01. Master Mix Analysis Template
```
Mode: Spectrum
FFT Size: 4096
Frequency Scale: Logarithmic
Amplitude Range: -60dB to +12dB
Display Type: Rainbow
Smoothing: Medium
Peak Hold: On (3 seconds)
Transparency: 75%
Always on Top: On
Position: Upper-right
```

**When to Use:** 80% of general mixing work
**Purpose:** Overall frequency balance and mix health
**Why This Configuration:** Balanced resolution vs response time

### 02. Drum Transient Template
```
Mode: Oscilloscope
Time Scale: 20ms
Amplitude Scale: Auto
Trigger Level: Auto
Trigger Mode: Auto
Display Type: Line
Transparency: 80%
Position: Left side
```

**When to Use:** Drum editing, transient shaping
**Purpose:** Analyzing attack, sustain, and transient character
**Why This Configuration:** Optimized for percussive transient detail

### 03. Stereo Field Analysis Template
```
Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium
Reference Lines: On
Scope Speed: Medium
Transparency: 75%
Position: Right side
```

**When to Use:** Stereo enhancement, phase checking
**Purpose:** Monitoring stereo width and phase correlation
**Why This Configuration:** Clear stereo field visualization

### 04. Final Mastering Check Template
```
Mode: Spectrum
FFT Size: 16384
Frequency Scale: Logarithmic
Amplitude Range: -96dB to +12dB
Display Type: Grayscale
Smoothing: High
Peak Hold: On (5 seconds)
Transparency: 80%
```

**When to Use:** Mastering, final quality control
**Purpose:** High-resolution frequency analysis for mastering decisions
**Why This Configuration:** Maximum frequency detail and stability

### 05. Sound Design Template
```
Mode: Oscilloscope
Time Scale: 50ms
Amplitude Scale: -12dB to +12dB
Trigger Level: -20dB
Trigger Mode: Manual
Display Type: Solid
Transparency: 70%
```

**When to Use:** Synth design, sample analysis
**Purpose:** Deep waveform analysis for sound design
**Why This Configuration:** Detailed waveform examination

## Vibe-Specific Templates

### Moody Analysis Template
```
Primary Mode: Spectrum
FFT Size: 8192
Frequency Scale: Logarithmic
Amplitude Range: -72dB to +6dB
Display Type: Grayscale
Smoothing: High
Peak Hold: On (5 seconds)

Secondary Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium-High
Scope Speed: Slow
Reference Lines: On

Interface: 75% transparency, Always on Top
```

### Upbeat Analysis Template
```
Primary Mode: Spectrum
FFT Size: 2048
Frequency Scale: Logarithmic
Amplitude Range: -48dB to +12dB
Display Type: Rainbow
Smoothing: Low
Peak Hold: On (2 seconds)

Secondary Mode: Oscilloscope
Time Scale: 15ms
Display Type: Line

Interface: 70% transparency, Always on Top
```

### Psychedelic Analysis Template
```
Primary Mode: Spectrum
FFT Size: 8192
Frequency Scale: Linear
Amplitude Range: -60dB to +12dB
Display Type: Heatmap
Smoothing: Low
Peak Hold: On (1 second)

Secondary Mode: Vectorscope
Zoom: 1.5x
Persistence: High
Scope Speed: Medium

Interface: 80% transparency, Always on Top
```

### Jazzy Analysis Template
```
Primary Mode: Spectrum
FFT Size: 16384
Frequency Scale: Logarithmic
Amplitude Range: -72dB to +6dB
Display Type: Grayscale
Smoothing: High
Peak Hold: On (3 seconds)

Secondary Mode: Oscilloscope
Time Scale: 40ms
Display Type: Line

Interface: 75% transparency, Always on Top
```

### Vibey Analysis Template
```
Primary Mode: Spectrum
FFT Size: 8192
Frequency Scale: Logarithmic
Amplitude Range: -54dB to +12dB
Display Type: Rainbow (high contrast)
Smoothing: Medium-High
Peak Hold: On (2 seconds)

Secondary Mode: Vectorscope
Zoom: 1.0x
Persistence: Medium
Scope Speed: Medium

Interface: 75% transparency, Always on Top
```

## Multi-Instance Setups

### Professional 3-Instance Setup
```
Instance 1 (Master): Spectrum - General balance
Instance 2 (Focus): Varies by task - Current element
Instance 3 (Reference): Spectrum - Reference track analysis

CPU Impact: ~8-12% total [UNVERIFIED]
```

### CPU-Light 2-Instance Setup
```
Instance 1 (Master): Spectrum - Basic analysis (FFT 4096)
Instance 2 (Current): Oscilloscope - Transient check

CPU Impact: ~5-8% total [UNVERIFIED]
```

### Maximum Analysis Setup
```
Instance 1 (Master): Spectrum - High resolution
Instance 2 (Stereo): Vectorscope - Phase/width
Instance 3 (Transients): Oscilloscope - Drum analysis
Instance 4 (Reference): Spectrum - A/B comparison

CPU Impact: ~12-18% total [UNVERIFIED]
```

## Reference Track Templates

### Commercial Reference Template
```
Mode: Spectrum
FFT Size: 4096
Frequency Scale: Logarithmic
Amplitude Range: -54dB to +12dB
Display Type: Rainbow
Smoothing: Medium
Peak Hold: On (2 seconds)
```

**Purpose:** Analyze commercial tracks for target mix characteristics

### Hip-Hop Reference Template
```
Mode: Spectrum
FFT Size: 4096
Frequency Scale: Logarithmic
Amplitude Range: -60dB to +6dB
Display Type: Rainbow
Focus: 20-200Hz (808/kick region), 2-8kHz (vocal region)
```

### Electronic Reference Template
```
Mode: Spectrum
FFT Size: 8192
Frequency Scale: Linear
Amplitude Range: -60dB to +12dB
Display Type: Heatmap
Focus: Full frequency spectrum, harmonic content
```

## Saved States Strategy

### Screenshot Naming Convention
```
Format: [TrackName]_[AnalysisType]_[Timestamp]_[Vibe].png
Examples:
- "MyBeat_MasterAnalysis_20250203_1430_Upbeat.png"
- "VocalMix_FrequencyMasking_20250203_1520_Moody.png"
- "DrumBus_TransientCheck_20250203_1600.png"
```

### State Categories
1. **Initial State:** Before processing
2. **Major Moves:** After significant changes
3. **Vibe Application:** After vibe-specific processing
4. **Problem Resolution:** After fixing identified issues
5. **Final State:** Completed mix/before mastering
6. **Reference Comparison:** Commercial track analysis

### Template Management System

#### Folder Structure (Document Storage)
```
Wave Candy States/
├── Templates/
│   ├── 01_MasterMix_Analysis.wcs
│   ├── 02_DrumTransient_Analysis.wcs
│   ├── 03_StereoField_Analysis.wcs
│   └── Vibe_Templates/
│       ├── Moody_Analysis.wcs
│       ├── Upbeat_Analysis.wcs
│       ├── Psychedelic_Analysis.wcs
│       ├── Jazzy_Analysis.wcs
│       └── Vibey_Analysis.wcs
├── Screenshots/
│   ├── Initial_States/
│   ├── Major_Moves/
│   ├── Vibe_Applications/
│   └── Final_States/
└── Reference_Analyses/
    ├── Hip_Hop_References/
    ├── Electronic_References/
    └── Acoustic_References/
```

#### Save Template Process
1. **Configure Wave Candy** to desired settings
2. **Right-click interface** → Save Preset
3. **Name according to convention:** "[Purpose]_[Analysis].wcs"
4. **Store in appropriate folder**
5. **Document use case** in accompanying text file

#### Load Template Process
1. **Right-click Wave Candy** → Load Preset
2. **Select appropriate template** from organized folders
3. **Verify settings** match intended use case
4. **Adjust transparency/position** as needed

## Workflow Integration Templates

### Mixing Workflow Template Sequence
1. **Setup:** Load Master Mix Analysis template
2. **Reference:** Analyze reference track with Reference template
3. **Initial Balance:** Apply EQ while watching Spectrum
4. **Stereo Work:** Switch to Stereo Field Analysis template
5. **Transient Work:** Switch to Drum Transient template
6. **Final Check:** Load Final Mastering Check template

### Sound Design Workflow
1. **Source Analysis:** Load Sound Design template
2. **Waveform Study:** Oscilloscope detailed analysis
3. **Frequency Content:** Spectrum harmonic analysis
4. **Stereo Character:** Vectorscope stereo placement
5. **Compare:** A/B with original source

### Genre-Specific Workflows
```
Hip-Hop: Master Mix → Low-End Focus → Vocal Clarity → Stereo Width
Electronic: Full Spectrum → Harmonic Analysis → Stereo Effects → Transients
Acoustic/Jazz: High Resolution → Natural Balance → Realistic Stereo → Dynamics
Pop/R&B: Professional Polish → Vocal Presence → Modern Width → Loudness
```

## Template Customization Guidelines

### Vibe Adjustment Modifications
- **Moody:** Increase smoothing, extend low-frequency range, use grayscale
- **Upbeat:** Decrease FFT size, increase contrast, focus on high-mids
- **Psychedelic:** Use Linear frequency scale, high persistence, heatmap display
- **Jazzy:** Maximum FFT size, high smoothing, natural settings
- **Vibey:** Balanced settings, professional polish focus

### Room Acoustic Adjustments
- ** untreated rooms:** Focus on frequency analysis, trust meters over speakers
- **Treated rooms:** Use Wave Candy for fine-tuning, not primary decisions
- **Studio monitors:** Combine visual analysis with trusted monitoring

### Monitoring Level Adjustments
- **Low monitoring levels:** Increase Wave Candy amplitude range sensitivity
- **High monitoring levels:** Decrease range to avoid overload
- **Referencing levels:** Match to standard -85dB SPL or similar

Remember: Wave Candy templates are analysis frameworks, not rules. Customize based on your specific needs, monitoring environment, and musical preferences. The key is having consistent starting points that you can adjust as needed.