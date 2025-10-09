import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'react-hot-toast';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLoading } from '../contexts/LoadingContext';
import { useNavigation } from '../hooks/useNavigation';
import { appsData } from '../data/apps';
import { isAppInstalled, installApp } from '../utils/localStorage';

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { startLoading, stopLoading } = useLoading();
  
  // Handle navigation loading
  useNavigation();

  useEffect(() => {
    // Load app details
    const loadAppDetails = () => {
      setIsLoading(true);
      const foundApp = appsData.find(a => a.id === parseInt(id));
      if (foundApp) {
        setApp(foundApp);
        setInstalled(isAppInstalled(foundApp.id));
      }
      setIsLoading(false);
    };

    loadAppDetails();
  }, [id]);

  const handleInstall = () => {
    if (installApp(app.id)) {
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    } else {
      toast.error('Failed to install app');
    }
  };

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`;
    }
    return downloads.toString();
  };

  const formatReviews = (reviews) => {
    if (reviews >= 1000000) {
      return `${(reviews / 1000000).toFixed(1)}M`;
    } else if (reviews >= 1000) {
      return `${(reviews / 1000).toFixed(1)}K`;
    }
    return reviews.toString();
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
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
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  if (isLoading) {
    return <LoadingSpinner text="Loading app details..." />;
  }

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/assets/Error-App.png" 
              alt="App Not Found" 
              className="mx-auto h-64 w-auto"
              onError={(e) => {
                // Fallback to previous filename if the requested one is missing
                e.currentTarget.src = '/assets/App-Error.png';
              }}
            />
            <div className="text-6xl mb-4 hidden">😿</div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OPPS!! APP NOT FOUND</h2>
          <p className="text-gray-600 mb-8">The App you are requesting is not found on our system. please try another apps</p>
          <button
            onClick={() => navigate('/')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Go Back!
          </button>
        </div>
      </div>
    );
  }

  const chartData = app.ratings.map(rating => ({
    name: rating.name,
    count: rating.count
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* App Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik01MCAzMEMzOC45NTQzIDMwIDMwIDM4Ljk1NDMgMzAgNTBDMzAgNjEuMDQ1NyAzOC45NTQzIDcwIDUwIDcwQzYxLjA0NTcgNzAgNzAgNjEuMDQ1NyA3MCA1MEM3MCAzOC45NTQzIDYxLjA0NTcgMzAgNTAgMzBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik01MCA0MEM0My4zNzI2IDQwIDM4IDQ1LjM3MjYgMzggNTJDMzggNTguNjI3NCA0My4zNzI2IDY0IDUwIDY0QzU2LjYyNzQgNjQgNjIgNTguNjI3NCA2MiA1MkM2MiA0NS4zNzI2IDU2LjYyNzQgNDAgNTAgNDBaIiBmaWxsPSIjNjM2NkY3Ii8+Cjwvc3ZnPgo=';
                  }}
                />
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{app.title}</h1>
              <p className="text-lg text-gray-600 mb-4">Developed by {app.companyName}</p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">{formatDownloads(app.downloads)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">{app.ratingAvg}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">{formatReviews(app.reviews)}</span>
                </div>
              </div>
              
              <button
                onClick={handleInstall}
                disabled={installed}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  installed
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {installed ? 'Installed' : `Install Now (${app.size} MB)`}
              </button>
            </div>
          </div>
        </div>

        {/* App Review Chart */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ratings</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={chartData}
                margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
                barCategoryGap={20}
              >
                <CartesianGrid stroke="#E5E7EB" vertical={false} />
                <XAxis type="number" domain={[0, 'dataMax + 500']} tick={{ fill: '#6B7280' }} />
                <YAxis type="category" dataKey="name" tick={{ fill: '#6B7280' }} width={60} />
                <Tooltip cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                <Bar dataKey="count" fill="#34D399" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* App Description */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Description</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">{app.description}</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This application has been carefully designed to provide you with the best user experience. 
              With regular updates and improvements, we ensure that you always have access to the latest features and security enhancements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Join thousands of satisfied users who have made this app a part of their daily routine. 
              Download now and discover why this app is rated so highly by our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
