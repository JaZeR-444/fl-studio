const fs = require('fs');
const path = require('path');

const pluginsPath = path.join('c:\\Users\\JaZeR\\2026 — JaZeR Mainframe\\1st Edition Webpages Completed\\FL Studio Master Hub\\src\\data\\plugins\\allPlugins.json');

const brandColors = {
  'sytrus': '#f59e0b', // Amber
  'maximus': '#ef4444', // Red
  'gross-beat': '#10b981', // Green
  'harmor': '#8b5cf6', // Purple
  'flex': '#3b82f6', // Blue
  'edison': '#6366f1', // Indigo
  '3x-osc': '#38bdf8', // Light Blue
  'poizone': '#84cc16', // Lime
  'sawer': '#fbbf24', // Amber/Yellow
  'sakura': '#ec4899', // Pink
  'transistor-bass': '#9ca3af', // Silver
  'og-gun': '#d946ef', // Fuchsia
};

try {
  const data = fs.readFileSync(pluginsPath, 'utf8');
  const plugins = JSON.parse(data);
  let updatedCount = 0;

  const updatedPlugins = plugins.map(p => {
    if (brandColors[p.id]) {
      p.brandColor = brandColors[p.id];
      updatedCount++;
    }
    return p;
  });

  fs.writeFileSync(pluginsPath, JSON.stringify(updatedPlugins, null, 2), 'utf8');
  console.log(`Successfully updated ${updatedCount} plugins with brand colors.`);
} catch (err) {
  console.error('Error updating plugins:', err);
  process.exit(1);
}
