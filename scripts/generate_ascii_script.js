const figlet = require('figlet');
const fs = require('fs');
const path = require('path');

const names = [
  'BassDrum',
  'BeepMap',
  'BooBass',
  'Control Surface',
  'Dashboard',
  'DirectWave Sampler',
  'Distructor',
  'Drumaxx',
  'Drumpad',
  'Edison'
];

const fontPath = path.resolve(__dirname, 'ANSI Shadow.flf');

async function generate() {
  for (const name of names) {
    try {
      const data = await new Promise((resolve, reject) => {
        figlet.text(name, { font: fontPath }, (err, data) => {
          if (err) reject(err);
          else resolve(data);
        });
      });
      console.log(`\n--- START ${name} ---`);
      console.log(data);
      console.log(`--- END ${name} ---\n`);
    } catch (err) {
      console.error(`Error generating ${name}:`, err);
    }
  }
}

generate();
