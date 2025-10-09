// LocalStorage utilities for app installation management

const INSTALLED_APPS_KEY = 'hero_apps_installed';

export const getInstalledApps = () => {
  try {
    const installed = localStorage.getItem(INSTALLED_APPS_KEY);
    return installed ? JSON.parse(installed) : [];
  } catch (error) {
    console.error('Error reading installed apps:', error);
    return [];
  }
};

export const installApp = (appId) => {
  try {
    const installed = getInstalledApps();
    if (!installed.includes(appId)) {
      const updated = [...installed, appId];
      localStorage.setItem(INSTALLED_APPS_KEY, JSON.stringify(updated));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error installing app:', error);
    return false;
  }
};

export const uninstallApp = (appId) => {
  try {
    const installed = getInstalledApps();
    const updated = installed.filter(id => id !== appId);
    localStorage.setItem(INSTALLED_APPS_KEY, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Error uninstalling app:', error);
    return false;
  }
};

export const isAppInstalled = (appId) => {
  const installed = getInstalledApps();
  return installed.includes(appId);
};
