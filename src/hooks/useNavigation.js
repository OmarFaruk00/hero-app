import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../contexts/LoadingContext';

export const useNavigation = () => {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    // Start loading when route changes
    startLoading();
    
    // Stop loading after a short delay to show the animation
    const timer = setTimeout(() => {
      stopLoading();
    }, 500);

    // Also ensure loading stops after a maximum time
    const maxTimer = setTimeout(() => {
      console.warn('Force stopping loading after timeout');
      stopLoading();
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(maxTimer);
    };
  }, [location.pathname, startLoading, stopLoading]);
};
