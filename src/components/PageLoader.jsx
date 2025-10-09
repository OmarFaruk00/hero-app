import React from 'react';
import { useLoading } from '../contexts/LoadingContext';

const PageLoader = () => {
  const { isLoading } = useLoading();

  // Debug logging
  console.log('PageLoader - isLoading:', isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
