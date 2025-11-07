import React, { useEffect } from 'react';

import Hero from './components/hero/Hero';
import IntroSection from './components/intro-section/IntroSection';
import HowItWorks from './components/how-it-works/HowItWork';
import Footer from './components/footer/Footer';

const LandingPage = () => {
  useEffect(() => {
    document.body.classList.add('scroll-enabled');
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.classList.add('scroll-enabled');
    }

    return () => {
      document.body.classList.remove('scroll-enabled');
      if (rootElement) {
        rootElement.classList.remove('scroll-enabled');
      }
    };
  }, []);

  return (
    <main>
      <Hero />
      <IntroSection />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default LandingPage;