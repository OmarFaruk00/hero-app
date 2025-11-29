import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = ({ app, showInstallButton = false, onInstall, onUninstall, isInstalled = false }) => {
  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`;
    }
    return downloads.toString();
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.02] transition-transform">
      <Link to={`/app/${app.id}`} className="block">
        <div className="aspect-square bg-gray-200 flex items-center justify-center">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik01MCAzMEMzOC45NTQzIDMwIDMwIDM4Ljk1NDMgMzAgNTBDMzAgNjEuMDQ1NyAzOC45NTQzIDcwIDUwIDcwQzYxLjA0NTcgNzAgNzAgNjEuMDQ1NyA3MCA1MEM3MCAzOC45NTQzIDYxLjA0NTcgMzAgNTAgMzBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik01MCA0MEM0My4zNzI2IDQwIDM4IDQ1LjM3MjYgMzggNTJDMzggNTguNjI3NCA0My4zNzI2IDY0IDUwIDY0QzU2LjYyNzQgNjQgNjIgNTguNjI3NCA2MiA1MkM2MiA0NS4zNzI2IDU2LjYyNzQgNDAgNTAgNDBaIiBmaWxsPSIjNjM2NkY3Ii8+Cjwvc3ZnPgo=';
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
            {app.title}
          </h3>
          <p className="text-xs text-gray-600 mb-2">{app.companyName}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <img src="/icon-downloads.png" alt="downloads" className="h-3 w-3" />
              <span>{formatDownloads(app.downloads)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <img src="/icon-ratings.png" alt="rating" className="h-3 w-3" />
              {renderStars(app.ratingAvg)}
              <span className="text-xs text-gray-600 ml-1">{app.ratingAvg}</span>
            </div>
          </div>
          {showInstallButton && (
            <div className="mt-2 text-xs text-gray-500">
              {app.size} MB
            </div>
          )}
        </div>
      </Link>
      
      {showInstallButton && (
        <div className="px-4 pb-4">
          {isInstalled ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                onUninstall(app.id);
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
            >
              Uninstall
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                onInstall(app.id);
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
            >
              Install
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AppCard;
