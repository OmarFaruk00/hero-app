import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="/assets/error-404.png" 
            alt="404 Error" 
            className="mx-auto h-64 w-auto"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="text-8xl mb-8 hidden">404</div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops, page not found!</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
