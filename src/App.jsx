import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSolution from './components/ProblemSolution';
import ChefSpotlight from './components/ChefSpotlight';
import Features from './components/Features';
import Reviews from './components/Reviews';
import LifestyleHub from './components/LifestyleHub';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background font-dm">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-background">
        <TrustBar />
        <ProblemSolution />
        <ChefSpotlight />
        <Features />
        <Reviews />
        <LifestyleHub />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
