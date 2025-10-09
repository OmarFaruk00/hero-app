import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AppCard from '../components/AppCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLoading } from '../contexts/LoadingContext';
import { appsData } from '../data/apps';

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('downloads-desc');
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const { startLoading, stopLoading } = useLoading();

  const filteredAndSortedApps = useMemo(() => {
    setIsSearchLoading(true);
    
    let filtered = appsData.filter(app =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort by downloads
    if (sortBy === 'downloads-desc') {
      filtered.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === 'downloads-asc') {
      filtered.sort((a, b) => a.downloads - b.downloads);
    }

    setTimeout(() => setIsSearchLoading(false), 300); // Simulate loading
    return filtered;
  }, [searchTerm, sortBy]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our All Applications</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search and Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0">
          <div className="text-lg font-semibold text-gray-700">
            ({appsData.length}) Apps Found
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="search Apps"
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="downloads-desc">High-Low Downloads</option>
              <option value="downloads-asc">Low-High Downloads</option>
            </select>
          </div>
        </div>

        {/* Apps Grid */}
        {isSearchLoading ? (
          <LoadingSpinner text="Searching apps..." />
        ) : filteredAndSortedApps.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No App Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any apps matching your search criteria.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
