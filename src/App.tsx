/**
 * EnergyBillCruncher - Main Application
 * Solar lead generation platform with full backend integration
 */

import { useState, useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Steps from './sections/Steps';
import SolarChoice from './sections/SolarChoice';
import WhySolar from './sections/WhySolar';
import FreeSolar from './sections/FreeSolar';
import SolarLearning from './sections/SolarLearning';
import Blog from './sections/Blog';
import Stats from './sections/Stats';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Funnel from './funnel/Funnel';

// Hash-based router for static site compatibility
function Router() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Check if we're in the funnel
  if (hash === '#funnel' || hash.startsWith('#hflow')) {
    return <Funnel />;
  }

  return <HomePage />;
}

function HomePage() {
  const handleGetStarted = () => {
    // Navigate to funnel using hash
    window.location.hash = 'funnel';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onGetStarted={handleGetStarted} />

        {/* Steps Section */}
        <Steps />

        {/* Solar Choice Section */}
        <SolarChoice />

        {/* Why Solar Section */}
        <WhySolar />

        {/* Free Solar Section */}
        <FreeSolar />

        {/* Solar Learning Section */}
        <SolarLearning />

        {/* Blog Section */}
        <Blog />

        {/* Stats Section */}
        <Stats />

        {/* CTA Section */}
        <CTA onGetStarted={handleGetStarted} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return <Router />;
}

export default App;
