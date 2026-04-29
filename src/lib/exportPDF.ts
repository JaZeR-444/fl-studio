// src/lib/exportPDF.ts
// Utility for exporting plugin toolkit as a printable reference sheet

import { ExtendedPlugin } from '@/types/pluginTypes';

/**
 * Generates an HTML page with the user's toolkit plugins and opens print dialog
 */
export function exportToolkitAsPDF(plugins: ExtendedPlugin[]): void {
    if (plugins.length === 0) {
        alert('Your toolkit is empty. Add some plugins first!');
        return;
    }

    // Create a new window for the printable content
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert('Please allow popups to export your toolkit.');
        return;
    }

    const htmlContent = generatePrintableHTML(plugins);

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    // Wait for content to load, then trigger print
    printWindow.onload = () => {
        setTimeout(() => {
            printWindow.print();
        }, 250);
    };
}

/**
 * Downloads the toolkit as an HTML file
 */
export function downloadToolkitAsHTML(plugins: ExtendedPlugin[]): void {
    if (plugins.length === 0) {
        alert('Your toolkit is empty. Add some plugins first!');
        return;
    }

    const htmlContent = generatePrintableHTML(plugins);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `FL-Studio-Toolkit-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function generatePrintableHTML(plugins: ExtendedPlugin[]): string {
    const pluginCards = plugins.map(plugin => `
    <div class="plugin-card">
      <div class="plugin-header">
        <span class="plugin-icon">${plugin.icon || '🎹'}</span>
        <div>
          <h3 class="plugin-name">${plugin.name}</h3>
          <p class="plugin-category">${plugin.category}</p>
        </div>
      </div>
      
      <div class="plugin-section">
        <strong>Best Used For:</strong>
        <ul>
          ${(plugin.bestUsedFor || []).slice(0, 4).map(use => `<li>${use}</li>`).join('')}
        </ul>
      </div>
      
      ${plugin.proTips && plugin.proTips.length > 0 ? `
        <div class="plugin-section">
          <strong>Pro Tips:</strong>
          <ul>
            ${plugin.proTips.slice(0, 3).map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${plugin.workflow?.pairsWith && plugin.workflow.pairsWith.length > 0 ? `
        <div class="plugin-section pairs-with">
          <strong>Pairs With:</strong> 
          <span>${plugin.workflow.pairsWith.slice(0, 3).map(id =>
        id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    ).join(', ')}</span>
        </div>
      ` : ''}
      
      <div class="plugin-footer">
        <span>CPU: ${plugin.cpuUsage?.split(' ')[0] || 'Low'}</span>
        <span>★ ${plugin.rating?.toFixed(1) || '4.5'}</span>
      </div>
    </div>
  `).join('');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My FL Studio Toolkit - Reference Sheet</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      line-height: 1.4;
      color: #1a1a2e;
      padding: 20px;
      background: #fff;
    }
    
    .header {
      text-align: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 2px solid #6b21a8;
    }
    
    .header h1 {
      font-size: 24px;
      color: #6b21a8;
      margin-bottom: 4px;
    }
    
    .header p {
      color: #666;
      font-size: 12px;
    }
    
    .stats {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-top: 12px;
    }
    
    .stats span {
      font-weight: 600;
      color: #6b21a8;
    }
    
    .plugins-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    
    .plugin-card {
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      padding: 12px;
      break-inside: avoid;
      background: #fafafa;
    }
    
    .plugin-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 1px solid #eee;
    }
    
    .plugin-icon {
      font-size: 24px;
    }
    
    .plugin-name {
      font-size: 14px;
      font-weight: 700;
      color: #1a1a2e;
    }
    
    .plugin-category {
      font-size: 10px;
      color: #6b21a8;
      font-weight: 500;
    }
    
    .plugin-section {
      margin-bottom: 8px;
    }
    
    .plugin-section strong {
      display: block;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #666;
      margin-bottom: 4px;
    }
    
    .plugin-section ul {
      margin-left: 16px;
    }
    
    .plugin-section li {
      margin-bottom: 2px;
      color: #333;
    }
    
    .pairs-with span {
      color: #6b21a8;
      font-weight: 500;
    }
    
    .plugin-footer {
      display: flex;
      justify-content: space-between;
      padding-top: 8px;
      border-top: 1px solid #eee;
      margin-top: 8px;
      font-size: 10px;
      color: #888;
    }
    
    .footer {
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid #ddd;
      text-align: center;
      font-size: 10px;
      color: #888;
    }
    
    @media print {
      body { padding: 10px; }
      .plugin-card { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎹 My FL Studio Toolkit</h1>
    <p>Personal Plugin Reference Sheet</p>
    <div class="stats">
      <div><span>${plugins.length}</span> Plugins</div>
      <div>Generated: <span>${new Date().toLocaleDateString()}</span></div>
    </div>
  </div>
  
  <div class="plugins-grid">
    ${pluginCards}
  </div>
  
  <div class="footer">
    <p>Generated from FL Studio Master Hub • ${new Date().toLocaleString()}</p>
  </div>
</body>
</html>
  `;
}
