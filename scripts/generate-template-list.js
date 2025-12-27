/**
 * Generate Template Filename List
 *
 * This script reads all templates from the Templates.tsx component
 * and generates a list of expected .flp filenames.
 *
 * Usage: node scripts/generate-template-list.js
 */

const fs = require('fs');
const path = require('path');

// Helper to generate slug from genre and name
const generateSlug = (genre, name) => {
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `${genre}-${cleanName}`;
};

// All 65 templates from Templates.tsx
const templates = [
  { genre: 'edm', name: 'Progressive House' },
  { genre: 'edm', name: 'Melodic Dubstep' },
  { genre: 'edm', name: 'Future Bass' },
  { genre: 'edm', name: 'Big Room' },
  { genre: 'edm', name: 'Tech House' },
  { genre: 'edm', name: 'Deep House' },
  { genre: 'edm', name: 'Trance Uplifting' },
  { genre: 'trap', name: 'Modern Trap' },
  { genre: 'trap', name: 'Dark Trap' },
  { genre: 'trap', name: 'Rage Trap' },
  { genre: 'trap', name: 'Melodic Trap' },
  { genre: 'hiphop', name: 'Boom Bap' },
  { genre: 'hiphop', name: 'Trap Rap' },
  { genre: 'hiphop', name: 'Cloud Rap' },
  { genre: 'hiphop', name: 'Old School' },
  { genre: 'hiphop', name: 'UK Drill' },
  { genre: 'hiphop', name: 'G-Funk' },
  { genre: 'pop', name: 'Pop Ballad' },
  { genre: 'pop', name: 'Dance Pop' },
  { genre: 'pop', name: 'Indie Pop' },
  { genre: 'pop', name: 'Synth Pop' },
  { genre: 'rock', name: 'Alternative Rock' },
  { genre: 'rock', name: 'Indie Rock' },
  { genre: 'rock', name: 'Pop Rock' },
  { genre: 'lofi', name: 'Chill Beats' },
  { genre: 'lofi', name: 'Jazz Hop' },
  { genre: 'lofi', name: 'Ambient Lo-Fi' },
  { genre: 'rnb', name: 'Contemporary R&B' },
  { genre: 'rnb', name: 'Neo Soul' },
  { genre: 'rnb', name: 'Alternative R&B' },
  { genre: 'rnb', name: 'Trap Soul' },
  { genre: 'edm', name: 'Synthwave' },
  { genre: 'edm', name: 'Bass House' },
  { genre: 'edm', name: 'Hardstyle' },
  { genre: 'afrobeats', name: 'Afrobeats' },
  { genre: 'reggaeton', name: 'Reggaeton' },
  { genre: 'club', name: 'Jersey Club' },
  { genre: 'phonk', name: 'Phonk' },
  { genre: 'pop', name: 'Hyperpop' },
  { genre: 'breakbeat', name: 'Breakbeat' },
  { genre: 'edm', name: 'Psytrance' },
  { genre: 'ambient', name: 'Ambient' },
  { genre: 'vaporwave', name: 'Vaporwave' },
  { genre: 'trap', name: 'Latin Trap' },
  { genre: 'garage', name: 'UK Garage' },
  { genre: 'trap', name: 'Sad Trap' },
  { genre: 'trap', name: 'Heavy Trap' },
  { genre: 'trap', name: 'Drill' },
  { genre: 'trap', name: 'Plugg' },
  { genre: 'hiphop', name: 'NY Drill' },
  { genre: 'hiphop', name: 'West Coast' },
  { genre: 'hiphop', name: 'Southern Hip Hop' },
  { genre: 'hiphop', name: 'Jazz Rap' },
  { genre: 'pop', name: 'K-Pop' },
  { genre: 'pop', name: 'Alt Pop' },
  { genre: 'pop', name: 'Dream Pop' },
  { genre: 'pop', name: 'Bedroom Pop' },
  { genre: 'rock', name: 'Punk Rock' },
  { genre: 'rock', name: 'Post-Punk' },
  { genre: 'rock', name: 'Emo' },
  { genre: 'rock', name: 'Grunge' },
  { genre: 'lofi', name: 'Lo-Fi Trap' },
  { genre: 'lofi', name: 'Study Beats' },
  { genre: 'lofi', name: 'Dusty Vinyl' },
  { genre: 'lofi', name: 'Bedroom Lo-Fi' },
];

// Generate list
const templateList = templates.map((template, index) => {
  const slug = generateSlug(template.genre, template.name);
  const filename = `${slug}.flp`;
  return {
    id: index + 1,
    genre: template.genre,
    name: template.name,
    slug,
    filename,
    path: `/templates/${filename}`,
    status: 'pending'
  };
});

// Output as JSON
const output = {
  generated: new Date().toISOString(),
  totalTemplates: templateList.length,
  templates: templateList,
  instructions: [
    'Create FL Studio templates for each filename listed below',
    'Save .flp files to public/templates/',
    'Update status to "available" when complete',
    'See docs/TEMPLATE_CREATION_GUIDE.md for detailed instructions'
  ]
};

// Write to file
const outputPath = path.join(__dirname, '../public/templates/expected-templates.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`✅ Generated template list: ${templateList.length} templates`);
console.log(`📄 Saved to: ${outputPath}`);
console.log('\nNext steps:');
console.log('1. Review public/templates/expected-templates.json');
console.log('2. Create .flp files using the filenames provided');
console.log('3. Read docs/TEMPLATE_CREATION_GUIDE.md for best practices');
console.log('\nSample filenames:');
templateList.slice(0, 5).forEach(t => console.log(`  - ${t.filename}`));
console.log('  ...');
