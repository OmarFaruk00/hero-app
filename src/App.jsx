import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LoadingProvider } from './contexts/LoadingContext';
import PageLoader from './components/PageLoader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import MyInstallation from './pages/MyInstallation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <LoadingProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<AllApps />} />
              <Route path="/app/:id" element={<AppDetails />} />
              <Route path="/installation" element={<MyInstallation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          {/* <PageLoader /> */} {/* Temporarily disabled for debugging */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 3000,
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </Router>
    </LoadingProvider>
  );
}

export default App;
