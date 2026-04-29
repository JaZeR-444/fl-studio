/**
 * Plugin Data Aggregation Script
 *
 * Reads modular plugin data structure and generates consolidated files:
 * - allPlugins.json (plugin registry)
 * - enriched/[plugin].json (comprehensive data per plugin)
 * - searchIndex.json (optimized search)
 * - workflows.json (signal chains)
 * - taxonomy.json (categories)
 * - capabilityMatrix.json (filtering)
 */

const fs = require('fs');
const path = require('path');

// Paths
const PLUGINS_DIR = path.join(__dirname, '../src/data/plugins');
const OUTPUT_DIR = PLUGINS_DIR;
const ENRICHED_DIR = path.join(PLUGINS_DIR, 'enriched');

// Ensure enriched directory exists
if (!fs.existsSync(ENRICHED_DIR)) {
  fs.mkdirSync(ENRICHED_DIR, { recursive: true });
}

/**
 * Recursively read all files in a directory
 */
function readDirRecursive(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;

  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      readDirRecursive(filePath, fileList);
    } else if (file.endsWith('.json') || file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

/**
 * Read JSON file safely
 */
function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.warn(`Warning: Could not read ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Read markdown file
 */
function readMarkdown(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.warn(`Warning: Could not read ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Aggregate data from a plugin's folder structure
 */
function aggregatePluginData(pluginId, pluginDir) {
  console.log(`📦 Processing: ${pluginId}`);

  const manifest = readJSON(path.join(pluginDir, 'manifest.json')) || { id: pluginId };

  const enrichedData = {
    id: pluginId,
    name: manifest.name || pluginId,
    ...manifest
  };

  // Aggregate parameters
  const parametersDir = path.join(pluginDir, 'data', 'parameters');
  if (fs.existsSync(parametersDir)) {
    const paramFiles = fs.readdirSync(parametersDir).filter(f => f.endsWith('.json'));
    enrichedData.parameters = {};

    paramFiles.forEach(file => {
      const data = readJSON(path.join(parametersDir, file));
      if (data) {
        const key = file.replace('.json', '');
        // If it's parameters.json, merge directly; otherwise nest under filename
        if (file === 'parameters.json') {
          enrichedData.parameters = data;
        } else {
          enrichedData.parameters[key] = data;
        }
      }
    });
  }

  // Aggregate presets
  const presetsDir = path.join(pluginDir, 'data', 'presets');
  if (fs.existsSync(presetsDir)) {
    const presetFiles = fs.readdirSync(presetsDir).filter(f => f.endsWith('.json'));
    enrichedData.presets = {};

    presetFiles.forEach(file => {
      const data = readJSON(path.join(presetsDir, file));
      if (data) {
        const key = file.replace('.json', '');
        enrichedData.presets[key] = data;
      }
    });
  }

  // Aggregate learning content
  const learningDir = path.join(pluginDir, 'learning');
  if (fs.existsSync(learningDir)) {
    enrichedData.learning = {};

    // Read all markdown files in learning subdirectories
    const learningFiles = readDirRecursive(learningDir);

    learningFiles.forEach(filePath => {
      const relativePath = path.relative(learningDir, filePath);
      const parts = relativePath.split(path.sep);

      if (filePath.endsWith('.md')) {
        const content = readMarkdown(filePath);
        if (content) {
          // Organize by category (e.g., Concepts, Quick-Reference)
          const category = parts[0];
          const filename = parts[parts.length - 1].replace('.md', '');

          if (!enrichedData.learning[category]) {
            enrichedData.learning[category] = {};
          }
          enrichedData.learning[category][filename] = content;
        }
      }
    });
  }

  // Aggregate workflows
  const workflowsDir = path.join(pluginDir, 'workflow');
  if (fs.existsSync(workflowsDir)) {
    enrichedData.workflows = {};

    const workflowFiles = readDirRecursive(workflowsDir);

    workflowFiles.forEach(filePath => {
      const relativePath = path.relative(workflowsDir, filePath);
      const parts = relativePath.split(path.sep);

      if (filePath.endsWith('.md')) {
        const content = readMarkdown(filePath);
        if (content) {
          const category = parts[0]; // e.g., by-goal, by-instrument
          const filename = parts[parts.length - 1].replace('.md', '');

          if (!enrichedData.workflows[category]) {
            enrichedData.workflows[category] = {};
          }
          enrichedData.workflows[category][filename] = content;
        }
      } else if (filePath.endsWith('.json')) {
        const data = readJSON(filePath);
        if (data) {
          const category = parts[0];
          const filename = parts[parts.length - 1].replace('.json', '');

          if (!enrichedData.workflows[category]) {
            enrichedData.workflows[category] = {};
          }
          enrichedData.workflows[category][filename] = data;
        }
      }
    });
  }

  // Aggregate rules
  const rulesDir = path.join(pluginDir, 'data', 'rules');
  if (fs.existsSync(rulesDir)) {
    const ruleFiles = fs.readdirSync(rulesDir).filter(f => f.endsWith('.json'));
    enrichedData.rules = {};

    ruleFiles.forEach(file => {
      const data = readJSON(path.join(rulesDir, file));
      if (data) {
        const key = file.replace('.json', '');
        enrichedData.rules[key] = data;
      }
    });
  }

  // Aggregate reference
  const referenceDir = path.join(pluginDir, 'reference');
  if (fs.existsSync(referenceDir)) {
    enrichedData.reference = {};
    const referenceFiles = readDirRecursive(referenceDir);

    referenceFiles.forEach(filePath => {
      const relativePath = path.relative(referenceDir, filePath);
      const parts = relativePath.split(path.sep);

      if (filePath.endsWith('.md')) {
        const content = readMarkdown(filePath);
        if (content) {
          const category = parts[0];
          const filename = parts[parts.length - 1].replace('.md', '');

          if (!enrichedData.reference[category]) {
            enrichedData.reference[category] = {};
          }
          enrichedData.reference[category][filename] = content;
        }
      }
    });
  }

  return enrichedData;
}

/**
 * Generate allPlugins.json
 */
function generateAllPlugins(pluginDataMap) {
  console.log('\n📝 Generating allPlugins.json...');

  const allPlugins = Object.entries(pluginDataMap).map(([id, data]) => ({
    id: data.id,
    name: data.name,
    category: data.category || 'Uncategorized',
    tier: data.tier || 'Free',
    type: data.type || 'Unknown',
    description: data.description || '',
    tags: data.tags || [],
    capabilities: data.capabilities || [],
    version: data.version || '1.0',
    icon: data.icon || '',
    color: data.color || '#8B5CF6',
    has_presets: !!data.presets && Object.keys(data.presets).length > 0,
    has_parameters: !!data.parameters && Object.keys(data.parameters).length > 0,
    has_learning: !!data.learning && Object.keys(data.learning).length > 0,
    has_workflows: !!data.workflows && Object.keys(data.workflows).length > 0,
    has_rules: !!data.rules && Object.keys(data.rules).length > 0,
    has_reference: !!data.reference && Object.keys(data.reference).length > 0
  }));

  // Sort by name
  allPlugins.sort((a, b) => a.name.localeCompare(b.name));

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'allPlugins.json'),
    JSON.stringify(allPlugins, null, 2)
  );

  console.log(`✅ Generated allPlugins.json (${allPlugins.length} plugins)`);
  return allPlugins;
}

/**
 * Generate searchIndex.json
 */
function generateSearchIndex(allPlugins, pluginDataMap) {
  console.log('\n🔍 Generating searchIndex.json...');

  const searchIndex = allPlugins.map(plugin => {
    const enrichedData = pluginDataMap[plugin.id];

    // Extract searchable text
    let searchableText = [
      plugin.name,
      plugin.description,
      ...(plugin.tags || []),
      ...(plugin.capabilities || [])
    ].join(' ').toLowerCase();

    // Add parameter names if available
    if (enrichedData.parameters && enrichedData.parameters.parameters) {
      const params = enrichedData.parameters.parameters;
      if (Array.isArray(params)) {
        params.forEach(param => {
          searchableText += ' ' + (param.name || '').toLowerCase();
          searchableText += ' ' + (param.label || '').toLowerCase();
        });
      }
    }

    return {
      id: plugin.id,
      name: plugin.name,
      searchableText,
      category: plugin.category,
      tags: plugin.tags,
      tier: plugin.tier
    };
  });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'searchIndex.json'),
    JSON.stringify(searchIndex, null, 2)
  );

  console.log(`✅ Generated searchIndex.json (${searchIndex.length} entries)`);
}

/**
 * Generate taxonomy.json
 */
function generateTaxonomy(allPlugins) {
  console.log('\n🗂️  Generating taxonomy.json...');

  const categories = {};
  const tiers = {};
  const types = {};

  allPlugins.forEach(plugin => {
    // Categories
    if (!categories[plugin.category]) {
      categories[plugin.category] = [];
    }
    categories[plugin.category].push(plugin.id);

    // Tiers
    if (!tiers[plugin.tier]) {
      tiers[plugin.tier] = [];
    }
    tiers[plugin.tier].push(plugin.id);

    // Types
    const type = plugin.type || 'Unknown';
    if (!types[type]) {
      types[type] = [];
    }
    types[type].push(plugin.id);
  });

  const taxonomy = {
    categories: Object.entries(categories).map(([name, plugins]) => ({
      name,
      count: plugins.length,
      plugins
    })),
    tiers: Object.entries(tiers).map(([name, plugins]) => ({
      name,
      count: plugins.length,
      plugins
    })),
    types: Object.entries(types).map(([name, plugins]) => ({
      name,
      count: plugins.length,
      plugins
    }))
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'taxonomy.json'),
    JSON.stringify(taxonomy, null, 2)
  );

  console.log(`✅ Generated taxonomy.json (${taxonomy.categories.length} categories)`);
}

/**
 * Generate capabilityMatrix.json
 */
function generateCapabilityMatrix(allPlugins) {
  console.log('\n🎯 Generating capabilityMatrix.json...');

  const capabilities = {};

  allPlugins.forEach(plugin => {
    (plugin.capabilities || []).forEach(cap => {
      if (!capabilities[cap]) {
        capabilities[cap] = [];
      }
      capabilities[cap].push(plugin.id);
    });
  });

  const matrix = Object.entries(capabilities).map(([capability, plugins]) => ({
    capability,
    count: plugins.length,
    plugins
  }));

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'capabilityMatrix.json'),
    JSON.stringify({ capabilities: matrix }, null, 2)
  );

  console.log(`✅ Generated capabilityMatrix.json (${matrix.length} capabilities)`);
}

/**
 * Generate workflows.json (cross-plugin workflows)
 */
function generateWorkflows(pluginDataMap) {
  console.log('\n⚡ Generating workflows.json...');

  const globalWorkflows = {
    description: "Cross-plugin workflow chains and signal flow patterns",
    workflows: []
  };

  // Extract workflow chains from plugins that have them
  Object.values(pluginDataMap).forEach(plugin => {
    if (plugin.workflows) {
      Object.entries(plugin.workflows).forEach(([category, workflows]) => {
        // If workflows contain chain data, extract them
        if (typeof workflows === 'object') {
          Object.entries(workflows).forEach(([workflowName, workflowData]) => {
            if (typeof workflowData === 'object' && workflowData.chain) {
              globalWorkflows.workflows.push({
                name: `${plugin.name}: ${workflowName}`,
                pluginId: plugin.id,
                category,
                chain: workflowData.chain
              });
            }
          });
        }
      });
    }
  });

  // Add some default workflow examples if none exist
  if (globalWorkflows.workflows.length === 0) {
    globalWorkflows.workflows = [
      {
        name: "Basic Mixing Chain",
        category: "Mixing",
        chain: ["EQ", "Compressor", "Limiter"]
      },
      {
        name: "Vocal Processing",
        category: "Vocals",
        chain: ["Pitcher", "Fruity Compressor", "Fruity Reverb 2"]
      }
    ];
  }

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'workflows.json'),
    JSON.stringify(globalWorkflows, null, 2)
  );

  console.log(`✅ Generated workflows.json (${globalWorkflows.workflows.length} workflows)`);
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Starting Plugin Data Aggregation\n');
  console.log('═'.repeat(60));

  // Read index.json to get list of plugins
  const indexPath = path.join(PLUGINS_DIR, 'index.json');
  let pluginRegistry = null;

  if (fs.existsSync(indexPath)) {
    pluginRegistry = readJSON(indexPath);
    console.log(`📋 Found index.json with ${pluginRegistry.total_plugins} plugins\n`);
  }

  // Discover all plugin folders
  const pluginFolders = fs.readdirSync(PLUGINS_DIR)
    .filter(item => {
      const itemPath = path.join(PLUGINS_DIR, item);
      return fs.statSync(itemPath).isDirectory() && item !== 'enriched';
    });

  console.log(`📁 Found ${pluginFolders.length} plugin folders\n`);
  console.log('═'.repeat(60) + '\n');

  // Aggregate data for each plugin
  const pluginDataMap = {};

  pluginFolders.forEach(pluginId => {
    const pluginDir = path.join(PLUGINS_DIR, pluginId);
    const enrichedData = aggregatePluginData(pluginId, pluginDir);
    pluginDataMap[pluginId] = enrichedData;

    // Write enriched file
    const enrichedPath = path.join(ENRICHED_DIR, `${pluginId}.json`);
    fs.writeFileSync(enrichedPath, JSON.stringify(enrichedData, null, 2));
  });

  console.log('\n' + '═'.repeat(60));
  console.log(`✅ Generated ${pluginFolders.length} enriched plugin files`);
  console.log('═'.repeat(60));

  // Generate consolidated files
  const allPlugins = generateAllPlugins(pluginDataMap);
  generateSearchIndex(allPlugins, pluginDataMap);
  generateTaxonomy(allPlugins);
  generateCapabilityMatrix(allPlugins);
  // generateWorkflows(pluginDataMap);

  console.log('\n' + '═'.repeat(60));
  console.log('✨ Aggregation Complete!\n');
  console.log('Generated files:');
  console.log('  📄 allPlugins.json');
  console.log('  📄 searchIndex.json');
  console.log('  📄 taxonomy.json');
  console.log('  📄 capabilityMatrix.json');
  console.log('  📄 workflows.json');
  console.log(`  📁 enriched/ (${pluginFolders.length} files)`);
  console.log('═'.repeat(60) + '\n');
}

// Run the script
try {
  main();
} catch (error) {
  console.error('❌ Error during aggregation:', error);
  process.exit(1);
}
