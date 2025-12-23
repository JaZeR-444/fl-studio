// Theme utility functions
export const toggleDarkMode = () => {
  if (typeof document !== 'undefined') {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    try {
      localStorage.setItem('darkMode', isDark.toString());
    } catch {
      // ignore (storage may be unavailable)
    }
    
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
    const safeGetItem = (key: string) => {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    };

    const safePrefersDark = () => {
      try {
        return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      } catch {
        return false;
      }
    };

    const stored = safeGetItem('darkMode');
    const isDark = stored === 'true' || (stored === null && safePrefersDark());
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return isDark;
  }
  return false;
};
