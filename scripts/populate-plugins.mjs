import fs from 'fs';
import path from 'path';

const PLUGINS_FILE = './src/data/plugins/allPlugins.json';

// --- DATA DEFINITIONS ---

const CATEGORY_TEMPLATES = {
  "Synthesizer": {
    "scenarios": {
      "whenToUse": ["Creating original melodies and chords", "Sound design from scratch", "Layering with other instruments"],
      "whenNotToUse": ["Playback of recorded audio (Use Sampler)", "Simple drum triggering (Use FPC)"]
    },
    "controls": [
      { "label": "Oscillators", "description": "Sound generation sources.", "listenFor": "Timbre changes (Bright vs Dark)" },
      { "label": "Filter", "description": "Removes frequencies.", "listenFor": "Muffling (Low Pass) or Thinning (High Pass)" },
      { "label": "Envelope (ADSR)", "description": "Controls volume over time.", "listenFor": "Snap (Attack) and Tail (Release)" }
    ],
    "recipes": [
      { "name": "Basic Pluck", "description": "Short, snappy sound.", "settings": { "Cutoff": "Low", "Env Amount": "High", "Decay": "Short" } },
      { "name": "Super Saw", "description": "Wide, detuned lead.", "settings": { "Unison": "On", "Detune": "40%", "Reverb": "Mix 30%" } }
    ],
    "troubleshooting": [
      { "issue": "No sound output", "solution": "Check if an oscillator is enabled and volume is up." },
      { "issue": "Clicking sound", "solution": "Increase Attack time slightly." }
    ]
  },
  "Sampler": {
    "scenarios": {
      "whenToUse": ["Playing back recorded audio/loops", "Resampling complex sounds", "Slice-based beat making"],
      "whenNotToUse": ["Generating pure waveforms (Use Synth)", "Simple one-shots (Use Channel Sampler)"]
    },
    "controls": [
      { "label": "Zone Map", "description": "Mapping samples to keys.", "listenFor": "Pitch/Timbre changes across keyboard" },
      { "label": "Filter/Amp Env", "description": "Shaping the sample playback.", "listenFor": "Dynamics and tone" }
    ],
    "recipes": [
      { "name": "Time-Stretched Pad", "description": "Atmospheric texture from a short sample.", "settings": { "Loop": "Forward", "Crossfade": "50%", "Attack": "Slow" } }
    ],
    "troubleshooting": [
      { "issue": "Sample pitches up/down on keys", "solution": "Set 'Resample' mode or use Time Stretching to lock pitch." }
    ]
  },
  "Effect": {
    "scenarios": {
      "whenToUse": ["Polishing individual tracks", "Creative sound manipulation", "Mixing/Mastering"],
      "whenNotToUse": ["Generation of sound (usually)", "MIDI processing"]
    },
    "controls": [
      { "label": "Mix/Wet", "description": "Blend of effect.", "listenFor": "Balance between dry signal and processed signal" }
    ],
    "recipes": [
      { "name": "Subtle Enhancement", "description": "Transparent polish.", "settings": { "Mix": "10-20%" } }
    ],
    "troubleshooting": [
      { "issue": "Signal is too loud/distorted", "solution": "Lower input gain or output volume." }
    ]
  }
};

const SPECIFIC_OVERRIDES = {
  "sytrus": {
    "scenarios": {
      "whenToUse": ["Complex FM bells and bass", "Subtractive pads with unison", "DX7 styling emulation"],
      "whenNotToUse": ["Simple analog bass (Use 3xOsc)", "Realistic piano (Use FL Keys)"]
    },
    "controls": [
      { "label": "Matrix (FM)", "description": "Modulation routing grid.", "listenFor": "Drastic timbre changes (Metallic/Growling)" },
      { "label": "Operators 1-6", "description": "Individual sound sources.", "listenFor": "Pitch ratios defining the harmonic series" },
      { "label": "Filter Section", "description": "Dual multimode filters.", "listenFor": "Waveshaping 'Mango' saturation" }
    ],
    "recipes": [
      { "name": "Growl Bass", "description": "Dubstep-style FM bass.", "settings": { "Op 1": "Sine", "Op 2": "Triangle (Modulator)", "Matrix 2->1": "50%" } },
      { "name": "Glassy Bell", "description": "FM Bell tone.", "settings": { "Op 1": "Sine", "Op 2": "Sine (Ratio 3.0)", "Env 2": "Pluck Shape" } }
    ],
    "troubleshooting": [
      { "issue": "Sound is too harsh/noisy", "solution": "Reduce modulation amounts in the Matrix." },
      { "issue": "CPU usage is high", "solution": "Check 'Oversampling' settings in the main tab." }
    ]
  },
  "maximus": {
    "scenarios": {
      "whenToUse": ["Mastering volume maximization", "Multiband compression", "De-essing vocals"],
      "whenNotToUse": ["Simple track leveling (Use Limiter)", "Sidechain pumping (Use Limiter/Gross Beat)"]
    },
    "controls": [
      { "label": "Bands (Low/Mid/High)", "description": "Frequency crossover split.", "listenFor": "Separation of Bass, Vocals, and Cymbals" },
      { "label": "Compression Envelopes", "description": "Customizable transfer curves.", "listenFor": "Drawing the 'knee' for transparency or grit" }
    ],
    "recipes": [
      { "name": "NY Compression", "description": "Parallel slam.", "settings": { "Master Band": "Hard Knee", "Mix": "50%" } },
      { "name": "Clean Master", "description": "Transparent Loudness.", "settings": { "Bands": "Linear Phase", "Ceiling": "-0.1dB" } }
    ],
    "troubleshooting": [
      { "issue": "Pumping artifacts", "solution": "Increase Release time on the active band." },
      { "issue": "Phase issues at crossovers", "solution": "Enable 'Linear Phase' mode (adds latency)." }
    ]
  },
   "gross-beat": {
    "scenarios": {
      "whenToUse": ["Time manipulation/Glitch effects", "Sidechain simulation (Volume ducking)", "Turntable scratching effects"],
      "whenNotToUse": ["Simple static delay (Use Fruity Delay)", "Pitch correction"]
    },
    "controls": [
      { "label": "Time Slot", "description": "Buffer playback speed/position.", "listenFor": "Rewind, slow-down, or stutter effects" },
      { "label": "Volume Slot", "description": "Amplitude gating envelope.", "listenFor": "Rhythmic gating or ducking" }
    ],
    "recipes": [
      { "name": "Pseudo-Sidechain", "description": "4/4 Volume Ducking.", "settings": { "Volume": "Sawtooth Down curve (1 beat)" } },
      { "name": "Half-Speed", "description": "Trap style slowdown.", "settings": { "Time": "1/2 Speed Preset" } }
    ],
    "troubleshooting": [
      { "issue": "Clicks at loop points", "solution": "Ensure envelope starts/ends at zero or use 'Click Reduction' knob." }
    ]
  }
};

// --- MAIN LOGIC ---

try {
  const rawData = fs.readFileSync(PLUGINS_FILE, 'utf8');
  const plugins = JSON.parse(rawData);
  let updatedCount = 0;

  const updatedPlugins = plugins.map(plugin => {
    // skip if already populated (e.g. 3x-osc)
    if (plugin.scenarios && plugin.recipes && plugin.controls) {
      return plugin;
    }

    let template = {};

    // 1. Determine Category
    if (plugin.category.toLowerCase().includes('synth')) {
        template = CATEGORY_TEMPLATES["Synthesizer"];
    } else if (plugin.category.toLowerCase().includes('sampler')) {
        template = CATEGORY_TEMPLATES["Sampler"];
    } else {
        template = CATEGORY_TEMPLATES["Effect"];
    }

    // 2. Apply Specific Overrides if available
    if (SPECIFIC_OVERRIDES[plugin.id]) {
        template = { ...template, ...SPECIFIC_OVERRIDES[plugin.id] };
    }

    // 3. Merge (Don't overwrite existing proTips if they exist, but ADD new sections)
    
    // Fallback workflow if missing
    const defaultWorkflow = {
        pairsWith: ["fruity-param-eq-2", "fruity-limiter"],
        chainPlacement: plugin.category.toLowerCase().includes('synth') ? "Generator -> FX Chain" : "Mixer Insert Slot"
    };

    updatedCount++;
    return {
      ...plugin,
      scenarios: plugin.scenarios || template.scenarios,
      controls: plugin.controls || template.controls,
      recipes: plugin.recipes || template.recipes,
      troubleshooting: plugin.troubleshooting || template.troubleshooting,
      workflow: plugin.workflow || defaultWorkflow
    };
  });

  fs.writeFileSync(PLUGINS_FILE, JSON.stringify(updatedPlugins, null, 2));
  console.log(`Successfully updated ${updatedCount} plugins in ${PLUGINS_FILE}`);

} catch (err) {
  console.error("Error updating plugins:", err);
  process.exit(1);
}
