/**
 * Manifest Enhancement Script
 *
 * Automatically populates missing metadata in manifest.json files
 * based on plugin names and patterns.
 */

const fs = require('fs');
const path = require('path');

const PLUGINS_DIR = path.join(__dirname, '../src/data/plugins');

/**
 * Plugin categorization based on name patterns
 */
const CATEGORIES = {
  'Synthesizer': [
    '3x-osc', 'sytrus', 'harmor', 'harmless', 'morphine', 'sakura', 'sawer',
    'autogun', 'bassdrum', 'beepmap', 'boobass', 'minisynth', 'poizone',
    'transistor-bass', 'wasp', 'wasp-xt', 'toxic-biohazard', 'plucked',
    'kepler', 'kepler-exo', 'ogun', 'simsynth-live', 'speech-synthesizer',
    'fruity-dx10', 'drumaxx'
  ],
  'Sampler': [
    'directwave-sampler', 'slicex', 'fpc', 'drumpad', 'soundfont-player',
    'fl-studio-mobile', 'fl-studio-mobile-rack', 'fruity-slicer',
    'fruity-slicer-2', 'fruity-drumsynth-live'
  ],
  'Multi-Engine': [
    'flex', 'gms', 'patcher', 'synthmaker'
  ],
  'Piano/Keys': [
    'fl-keys'
  ],
  'Guitar': [
    'fl-slayer'
  ],
  'Reverb': [
    'fruity-reeverb', 'fruity-reeverb-2', 'fruity-convolver', 'luxeverb'
  ],
  'Delay': [
    'fruity-delay', 'fruity-delay-2', 'fruity-delay-3', 'fruity-delay-bank',
    'multiband-delay'
  ],
  'Dynamics': [
    'fruity-compressor', 'fruity-limiter', 'maximus', 'transient-processor',
    'fruity-soft-clipper', 'soundgoodizer', 'fruity-squeeze'
  ],
  'EQ': [
    'fruity-parametric-eq', 'fruity-parametric-eq-2', 'fruity-7-band-eq',
    'equo', 'fruity-equo', 'fruity-bass-boost'
  ],
  'Filter': [
    'fruity-filter', 'fruity-free-filter', 'fruity-fast-lp', 'fruity-love-philter',
    'fruity-lsd'
  ],
  'Modulation': [
    'fruity-chorus', 'fruity-flanger', 'fruity-flangus', 'fruity-phaser',
    'vintage-chorus', 'vintage-phaser', 'hyper-chorus', 'fruity-vibrator'
  ],
  'Distortion': [
    'fruity-blood-overdrive', 'fruity-fast-dist', 'fruity-waveshaper',
    'distructor', 'effector', 'hardcore'
  ],
  'Pitch/Time': [
    'pitcher', 'newtone', 'newtime', 'gross-beat', 'pitch-shifter',
    'frequency-shifter'
  ],
  'Spatial': [
    'fruity-stereo-enhancer', 'fruity-stereo-shaper', 'fruity-panomatic',
    'fruity-center', 'fruity-balance', 'spreader', 'frequency-splitter'
  ],
  'Creative': [
    'vocodex', 'fruity-vocoder', 'fruity-granulizer', 'transporter',
    'fruity-scratcher'
  ],
  'Analysis': [
    'wave-candy', 'fruity-spectroman', 'tuner', 'fruity-db-meter',
    'dashboard', 'edison'
  ],
  'Utility': [
    'fruity-send', 'fruity-mute-2', 'fruity-phase-inverter', 'control-surface',
    'fruity-notebook', 'fruity-notebook-2', 'fruity-html-notebook',
    'fruity-big-clock', 'midi-out', 'plugin-wrapper', 'rewire',
    'razer-chroma', 'fruity-video-player', 'zgameeditor-visualizer',
    'emphasis', 'emphasizer', 'low-lifter', 'wave-traveller'
  ],
  'Controller': [
    'fruity-envelope-controller', 'fruity-formula-controller',
    'fruity-keyboard-controller', 'fruity-peak-controller',
    'fruity-voltage-controller', 'fruity-x-y-controller',
    'fruity-x-y-z-controller', 'fruity-dance'
  ]
};

/**
 * Tier classification (Free vs Premium)
 */
const PREMIUM_PLUGINS = [
  'flex', 'harmor', 'sytrus', 'sakura', 'toxic-biohazard', 'morphine',
  'sawer', 'poizone', 'ogun', 'harmless', 'drumaxx', 'directwave-sampler',
  'gross-beat', 'newtime', 'newtone', 'pitcher', 'vocodex', 'maximus',
  'transient-processor', 'slicex', 'edison', 'patcher', 'fl-keys',
  'fl-slayer', 'luxeverb', 'transistor-bass', 'kepler', 'kepler-exo',
  'gms', 'hardcore', 'simsynth-live'
];

/**
 * Color palette based on category
 */
const CATEGORY_COLORS = {
  'Synthesizer': '#8B5CF6',      // Purple
  'Sampler': '#EC4899',          // Pink
  'Multi-Engine': '#F59E0B',     // Amber
  'Piano/Keys': '#3B82F6',       // Blue
  'Guitar': '#EF4444',           // Red
  'Reverb': '#06B6D4',           // Cyan
  'Delay': '#14B8A6',            // Teal
  'Dynamics': '#10B981',         // Emerald
  'EQ': '#84CC16',               // Lime
  'Filter': '#F97316',           // Orange
  'Modulation': '#A855F7',       // Violet
  'Distortion': '#DC2626',       // Dark Red
  'Pitch/Time': '#7C3AED',       // Purple
  'Spatial': '#0EA5E9',          // Sky Blue
  'Creative': '#EC4899',         // Pink
  'Analysis': '#6366F1',         // Indigo
  'Utility': '#64748B',          // Slate
  'Controller': '#78716C'        // Stone
};

/**
 * Determine category for a plugin
 */
function getCategory(pluginId) {
  for (const [category, plugins] of Object.entries(CATEGORIES)) {
    if (plugins.includes(pluginId)) {
      return category;
    }
  }
  return 'Uncategorized';
}

/**
 * Determine tier for a plugin
 */
function getTier(pluginId) {
  return PREMIUM_PLUGINS.includes(pluginId) ? 'Premium' : 'Free';
}

/**
 * Get color for category
 */
function getCategoryColor(category) {
  return CATEGORY_COLORS[category] || '#8B5CF6';
}

/**
 * Generate tags based on plugin name and category
 */
function generateTags(pluginId, pluginName, category) {
  const tags = [];

  // Add category-based tags
  if (category === 'Synthesizer') tags.push('synth', 'sound-design');
  if (category === 'Sampler') tags.push('sampling', 'drums');
  if (category.includes('Reverb') || category.includes('Delay')) tags.push('spatial', 'fx');
  if (category === 'Dynamics') tags.push('mixing', 'mastering');
  if (category === 'EQ') tags.push('mixing', 'tone-shaping');
  if (category === 'Creative') tags.push('creative', 'experimental');

  // Add name-based tags
  if (pluginName.toLowerCase().includes('fruity')) tags.push('native', 'stock');
  if (pluginId.includes('-')) tags.push('specialized');

  return [...new Set(tags)]; // Remove duplicates
}

/**
 * Generate capabilities based on category
 */
function generateCapabilities(category) {
  const capabilityMap = {
    'Synthesizer': ['synthesis', 'midi', 'polyphonic'],
    'Sampler': ['sampling', 'midi', 'audio'],
    'Multi-Engine': ['synthesis', 'sampling', 'midi', 'fx'],
    'Piano/Keys': ['synthesis', 'sampling', 'midi', 'realistic'],
    'Guitar': ['synthesis', 'sampling', 'midi', 'realistic'],
    'Reverb': ['reverb', 'fx', 'spatial', 'audio'],
    'Delay': ['delay', 'fx', 'temporal', 'audio'],
    'Dynamics': ['compression', 'limiting', 'dynamics', 'mixing', 'audio'],
    'EQ': ['eq', 'tone-shaping', 'mixing', 'audio'],
    'Filter': ['filtering', 'tone-shaping', 'audio'],
    'Modulation': ['modulation', 'fx', 'audio'],
    'Distortion': ['distortion', 'saturation', 'fx', 'audio'],
    'Pitch/Time': ['pitch-shift', 'time-stretch', 'fx', 'audio'],
    'Spatial': ['stereo', 'spatial', 'mixing', 'audio'],
    'Creative': ['creative', 'experimental', 'fx', 'audio'],
    'Analysis': ['analysis', 'visualization', 'utility'],
    'Utility': ['utility', 'routing'],
    'Controller': ['automation', 'modulation', 'control']
  };

  return capabilityMap[category] || [];
}

/**
 * Enhance a manifest file
 */
function enhanceManifest(pluginId, pluginDir) {
  const manifestPath = path.join(pluginDir, 'manifest.json');

  if (!fs.existsSync(manifestPath)) {
    console.warn(`⚠️  No manifest found for ${pluginId}`);
    return;
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  // Determine enhancements
  const category = manifest.category || getCategory(pluginId);
  const tier = manifest.tier || getTier(pluginId);
  const color = manifest.color || getCategoryColor(category);
  const tags = manifest.tags || generateTags(pluginId, manifest.name, category);
  const capabilities = manifest.capabilities || generateCapabilities(category);

  // Build enhanced manifest
  const enhanced = {
    id: manifest.id || pluginId,
    name: manifest.name || pluginId,
    category,
    tier,
    type: manifest.type || category,
    description: manifest.description || `${manifest.name} - ${category}`,
    tags,
    capabilities,
    icon: manifest.icon || `/plugins/${pluginId}-icon.svg`,
    color,
    version: manifest.version || '1.0',
    data_dir: manifest.data_dir || `plugins\\${pluginId}`,
    has_presets: manifest.has_presets !== undefined ? manifest.has_presets : false,
    has_parameters: manifest.has_parameters !== undefined ? manifest.has_parameters : false,
    has_learning: manifest.has_learning !== undefined ? manifest.has_learning : false,
    has_workflows: manifest.has_workflows !== undefined ? manifest.has_workflows : false
  };

  // Write back
  fs.writeFileSync(manifestPath, JSON.stringify(enhanced, null, 2));
  console.log(`✅ Enhanced: ${pluginId} (${category}, ${tier})`);
}

/**
 * Main execution
 */
function main() {
  console.log('🎨 Enhancing Plugin Manifests\n');
  console.log('═'.repeat(60));

  const pluginFolders = fs.readdirSync(PLUGINS_DIR)
    .filter(item => {
      const itemPath = path.join(PLUGINS_DIR, item);
      return fs.statSync(itemPath).isDirectory() && item !== 'enriched';
    });

  console.log(`Found ${pluginFolders.length} plugins\n`);

  let enhanced = 0;
  pluginFolders.forEach(pluginId => {
    try {
      enhanceManifest(pluginId, path.join(PLUGINS_DIR, pluginId));
      enhanced++;
    } catch (error) {
      console.error(`❌ Error enhancing ${pluginId}:`, error.message);
    }
  });

  console.log('\n' + '═'.repeat(60));
  console.log(`✨ Enhanced ${enhanced}/${pluginFolders.length} manifests`);
  console.log('═'.repeat(60) + '\n');
  console.log('💡 Run "npm run aggregate" to regenerate consolidated files');
}

main();
