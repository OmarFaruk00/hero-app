import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import AppCard from '../components/AppCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLoading } from '../contexts/LoadingContext';
import { useNavigation } from '../hooks/useNavigation';
import { appsData } from '../data/apps';
import { getInstalledApps, uninstallApp } from '../utils/localStorage';

const MyInstallation = () => {
  console.log('MyInstallation component rendered'); // Debug log
  
  const [installedApps, setInstalledApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('downloads-desc');
  const { startLoading, stopLoading } = useLoading();
  
  // Handle navigation loading
  // useNavigation(); // Commented out to prevent loading conflicts

  useEffect(() => {
    // Load installed apps on component mount
    const loadInstalledApps = () => {
      setIsLoading(true);
      
      try {
        const installedIds = getInstalledApps();
        console.log('Installed IDs:', installedIds); // Debug log
        const apps = appsData.filter(app => installedIds.includes(app.id));
        console.log('Filtered apps:', apps); // Debug log
        
        // Sort by downloads
        if (sortBy === 'downloads-desc') {
          apps.sort((a, b) => b.downloads - a.downloads);
        } else if (sortBy === 'downloads-asc') {
          apps.sort((a, b) => a.downloads - b.downloads);
        }
        
        setInstalledApps(apps);
        console.log('Apps set successfully'); // Debug log
      } catch (error) {
        console.error('Error loading installed apps:', error);
        setInstalledApps([]);
      } finally {
        setIsLoading(false);
        console.log('Loading completed'); // Debug log
      }
    };

    // Add a small delay to ensure component is fully mounted
    const timer = setTimeout(() => {
      loadInstalledApps();
    }, 100);

    return () => clearTimeout(timer);
  }, [sortBy]);


  const handleUninstall = (appId) => {
    if (uninstallApp(appId)) {
      setInstalledApps(prev => prev.filter(app => app.id !== appId));
      toast.success('App uninstalled successfully!');
    } else {
      toast.error('Failed to uninstall app');
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  if (isLoading) {
    return <LoadingSpinner text="Loading your installed apps..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Installed Apps</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Sort Controls */}
        {installedApps.length > 0 && (
          <div className="flex justify-between items-center mb-8">
            <div className="text-lg font-semibold text-gray-700">
              {installedApps.length} Apps Found
            </div>
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="downloads-desc">Sort By Size</option>
              <option value="downloads-asc">Low-High Downloads</option>
            </select>
          </div>
        )}

        {/* Apps Grid */}
        {installedApps.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Apps Installed</h3>
            <p className="text-gray-600 mb-6">
              You haven't installed any apps yet. Browse our collection and install some amazing applications!
            </p>
            <a
              href="/apps"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Apps
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {installedApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                showInstallButton={true}
                onUninstall={handleUninstall}
                isInstalled={true}
              />
            ))}
          </div>
        )}

        {/* Stats */}
        {installedApps.length > 0 && (
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Installation Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{installedApps.length}</div>
                <div className="text-gray-600">Total Installed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {installedApps.reduce((sum, app) => sum + app.downloads, 0).toLocaleString()}
                </div>
                <div className="text-gray-600">Total Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {(installedApps.reduce((sum, app) => sum + app.ratingAvg, 0) / installedApps.length).toFixed(1)}
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInstallation;
