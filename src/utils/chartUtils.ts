import { Chart } from 'chart.js';

type ThemeableScale = {
  grid?: { color: string };
  ticks?: { color: string };
  pointLabels?: { color: string };
};

// Utility function to update chart themes based on dark mode
export const updateChartTheme = (chart: Chart, isDark: boolean) => {
  if (!chart) return;

  // Update scale configurations based on theme
  const gridColor = isDark ? '#52525b' : '#e5e7eb'; // zinc-600 vs gray-200
  const textColor = isDark ? '#d4d4d4' : '#52525b';

  // Update scales
  if (chart.scales) {
    Object.values(chart.scales).forEach((scale) => {
      const themeableScale = scale as unknown as ThemeableScale;
      if (themeableScale.grid) {
        themeableScale.grid.color = gridColor;
      }
      if (themeableScale.ticks) {
        themeableScale.ticks.color = textColor;
      }
      if (themeableScale.pointLabels) {
        themeableScale.pointLabels.color = textColor;
      }
    });
  }

  // Update plugin configurations
  if (chart.options.plugins && chart.options.plugins.legend) {
    if (chart.options.plugins.legend.labels) {
      chart.options.plugins.legend.labels.color = textColor;
    }
  }

  if (chart.options.plugins && chart.options.plugins.tooltip) {
    chart.options.plugins.tooltip.titleColor = textColor;
    chart.options.plugins.tooltip.bodyColor = textColor;
    chart.options.plugins.tooltip.backgroundColor = isDark ? 'rgba(39, 39, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)';
  }

  chart.update();
};

// Function to get theme colors based on current mode
export const getThemeColors = (isDark: boolean) => {
  return {
    gridColor: isDark ? '#52525b' : '#e5e7eb',
    textColor: isDark ? '#d4d4d4' : '#52525b',
    backgroundColor: isDark ? 'rgba(39, 39, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)'
  };
};
