// Theme utility functions
export const toggleDarkMode = () => {
  if (typeof document !== 'undefined') {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('darkMode', isDark.toString());
    
    // Update theme icon if it exists
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      themeIcon.textContent = isDark ? '☀️' : '🌙';
    }
    
    return isDark;
  }
  return false;
};

export const initializeTheme = () => {
  if (typeof document !== 'undefined') {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return isDark;
  }
  return false;
};