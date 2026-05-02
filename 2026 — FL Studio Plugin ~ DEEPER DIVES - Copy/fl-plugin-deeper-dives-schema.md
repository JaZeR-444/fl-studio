# FL Studio Plugin Deeper Dives - Plugin Folder Schema

This schema lists only the plugin research directories contained within the project. Each folder follows the standardized 4-folder organization (01-Learning, 02-Data, 03-Workflows, 04-Reference).

```text
2026 — FL Studio Plugin ~ DEEPER DIVES/
├── 3x Osc/
├── Autogun/
├── BassDrum/
├── BeepMap/
├── BooBass/
├── Control Surface/
├── Dashboard/
├── DirectWave Sampler/
├── Distructor/
├── Drumaxx/
├── Drumpad/
├── Edison/
├── Effector/
├── Emphasis/
├── Emphasizer/
├── EQUO/
├── FL Keys/
├── FL Slayer/
├── FL Studio Mobile/
├── FL Studio Mobile Rack/
├── FLEX/
├── FPC/
├── Frequency Shifter/
├── Frequency Splitter/
├── Fruit Kick/
├── Fruity 7 Band EQ/
├── Fruity Balance/
├── Fruity Bass Boost/
├── Fruity Big Clock/
├── Fruity Blood Overdrive/
├── Fruity Center/
├── Fruity Chorus/
├── Fruity Compressor/
├── Fruity Convolver/
├── Fruity Dance/
├── Fruity dB Meter/
├── Fruity Delay/
├── Fruity Delay 2/
├── Fruity Delay 3/
├── Fruity Delay Bank/
├── Fruity DrumSynth Live/
├── Fruity DX10/
├── Fruity Envelope Controller/
├── Fruity Equo/
├── Fruity Fast Dist/
├── Fruity Fast LP/
├── Fruity Filter/
├── Fruity Flanger/
├── Fruity Flangus/
├── Fruity Formula Controller/
├── Fruity Free Filter/
├── Fruity Granulizer/
├── Fruity HTML NoteBook/
├── Fruity Keyboard Controller/
├── Fruity Limiter/
├── Fruity Love Philter/
├── Fruity LSD/
├── Fruity Mute 2/
├── Fruity NoteBook/
├── Fruity NoteBook 2/
├── Fruity PanOMatic/
├── Fruity Parametric EQ/
├── Fruity Parametric EQ 2/
├── Fruity Peak Controller/
├── Fruity Phase Inverter/
├── Fruity Phaser/
├── Fruity Reeverb/
├── Fruity Reeverb 2/
├── Fruity Scratcher/
├── Fruity Send/
├── Fruity Slicer/
├── Fruity Slicer 2/
├── Fruity Soft Clipper/
├── Fruity Spectroman/
├── Fruity Squeeze/
├── Fruity Stereo Enhancer/
├── Fruity Stereo Shaper/
├── Fruity Vibrator/
├── Fruity Video Player/
├── Fruity Vocoder/
├── Fruity Voltage Controller/
├── Fruity WaveShaper/
├── Fruity X-Y Controller/
├── Fruity X-Y-Z Controller/
├── GMS/
├── Gross Beat/
├── Hardcore/
├── Harmless/
├── Harmor/
├── Hyper Chorus/
├── Kepler/
├── Kepler Exo/
├── Low Lifter/
├── LuxeVerb/
├── Maximus/
├── MIDI Out/
├── MiniSynth/
├── Morphine/
├── Multiband Delay/
├── Newtime/
├── Newtone/
├── Ogun/
├── Patcher/
├── Pitch Shifter/
├── Pitcher/
├── Plucked/
├── Plugin Wrapper/
├── PoiZone/
├── Razer Chroma/
├── ReWire/
├── Sakura/
├── Sawer/
├── SimSynth Live/
├── Slicex/
├── SoundFont Player/
├── Soundgoodizer/
├── Speech Synthesizer/
├── Spreader/
├── SynthMaker/
├── Sytrus/
├── Toxic Biohazard/
├── Transient Processor/
├── Transistor Bass/
├── Transporter/
├── Tuner/
├── Vintage Chorus/
├── Vintage Phaser/
├── Vocodex/
├── Wasp/
├── Wasp XT/
├── Wave Candy/
├── Wave Traveller/
└── ZGameEditor Visualizer/
```

### Standardized Internal Structure (Template)

Every plugin folder (e.g., `Sytrus/`) adheres to the following 4-folder organization:

```text
[Plugin Name]/
├── 01-Learning/                # Educational & Conceptual Content
│   ├── Concepts/               # Fundamental mechanics (e.g., Synthesis types, Phase)
│   ├── Quick-Reference/        # Cheat sheets, "Golden Settings", and Hotkeys
│   └── Band-Guides/            # (EQ/Comp specific) Role of frequency ranges
├── 02-Data/                    # Structured Data (Source of Truth)
│   ├── parameters/             # JSON definitions of every knob and slider
│   ├── presets/                # Machine-readable preset definitions
│   ├── rules/                  # "If/Then" logic for plugin behavior
│   └── schema/                 # JSON Schemas for local data validation
├── 03-Workflows/               # Practical Application & Problem Solving
│   ├── by-goal/                # Achieving specific results (e.g., "Warmth", "Punch")
│   ├── by-instrument/          # Plugin usage for Drums, Vocals, Bass, etc.
│   └── by-symptom/             # Fixing audio issues (e.g., "Muddy Lows", "Harsh Highs")
├── 04-Reference/               # Technical Specifications & External Data
│   ├── Technical-Specs.md      # Latency, CPU usage, signal flow charts
│   ├── Integration-Guides.md   # Patcher usage or MIDI mapping
│   └── Glossary.md             # Plugin-specific terminology
└── README.md                   # Research status, priorities, and plugin index
```
